import type { City, SearchParams, ScoredCity } from '@/lib/types';
import { haversineDistance } from '@/lib/distance';
import { getCurrentSeason, getWeatherHint } from '@/lib/seasons';
import { VIBES } from '@/data/vibes';

function matchKeywords(city: City, keywords: string): number {
  if (!keywords.trim()) return 0;

  const terms = keywords
    .toLowerCase()
    .split(/[,\s]+/)
    .filter((t) => t.length >= 2);

  if (terms.length === 0) return 0;

  let score = 0;
  const nameLower = city.name.toLowerCase();
  const stateLower = city.state.toLowerCase();
  const blurbLower = city.blurb.toLowerCase();
  const vibeLabels = VIBES.filter((v) => city.vibes.includes(v.id))
    .map((v) => v.label.toLowerCase());

  for (const term of terms) {
    if (nameLower.includes(term) || stateLower.includes(term)) {
      score += 15;
    } else if (blurbLower.includes(term)) {
      score += 8;
    } else if (vibeLabels.some((label) => label.includes(term))) {
      score += 8;
    }
  }

  return score;
}

export function filterDestinations(
  cities: City[],
  params: SearchParams,
  homeCoords: { lat: number; lng: number }
): ScoredCity[] {
  const currentSeason = getCurrentSeason();
  const hasKeywords = params.keywords.trim().length > 0;

  // Calculate distance for every city
  const withDistance = cities.map((city) => ({
    ...city,
    distance: Math.round(
      haversineDistance(homeCoords.lat, homeCoords.lng, city.lat, city.lng)
    ),
  }));

  // Exclude home city (distance < 10 mi)
  const notHome = withDistance.filter((city) => city.distance >= 10);

  // Distance filter
  let filtered = notHome.filter(
    (city) => city.distance <= params.maxDistance
  );

  // Mode filter
  if (params.mode === 'drive') {
    filtered = filtered.filter((city) => city.distance <= 800);
  } else {
    filtered = filtered.filter((city) => city.distance >= 200);
  }

  // Scoring
  const scored: ScoredCity[] = filtered.map((city) => {
    let score = 0;

    // +10 per matching vibe
    const matchingVibes = params.vibes.filter((v) => city.vibes.includes(v));
    score += matchingVibes.length * 10;

    // +5 if current season is a best season
    if (city.bestSeasons.includes(currentSeason)) {
      score += 5;
    }

    // Trip length scoring: favor appropriate distances
    if (params.tripLength === 'day' && city.distance <= 150) {
      score += 8;
    } else if (params.tripLength === 'weekend' && city.distance <= 400) {
      score += 5;
    } else if (params.tripLength === '3-5days' && city.distance >= 200 && city.distance <= 1200) {
      score += 5;
    } else if (params.tripLength === 'week' && city.distance >= 400) {
      score += 5;
    }

    // Keyword matching
    score += matchKeywords(city, params.keywords);

    // -1 per 100mi distance (slight closeness preference)
    score -= Math.floor(city.distance / 100);

    // Floor at 0
    score = Math.max(0, score);

    return {
      ...city,
      score,
      weatherHint: getWeatherHint(city),
    };
  });

  // Filter out zero-score if user selected vibes or keywords
  let results = scored;
  if (params.vibes.length > 0 || hasKeywords) {
    results = scored.filter((city) => city.score > 0);
  }

  // Sort: score DESC, then name ASC (tiebreaker)
  results.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    return a.name.localeCompare(b.name);
  });

  // Return top 8
  return results.slice(0, 8);
}
