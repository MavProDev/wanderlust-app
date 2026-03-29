import type { City, SearchParams, ScoredCity } from '@/lib/types';
import { haversineDistance } from '@/lib/distance';
import { getCurrentSeason, getWeatherHint } from '@/lib/seasons';

export function filterDestinations(
  cities: City[],
  params: SearchParams,
  homeCoords: { lat: number; lng: number }
): ScoredCity[] {
  const currentSeason = getCurrentSeason();

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

  // Filter out zero-score if user selected vibes
  let results = scored;
  if (params.vibes.length > 0) {
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
