import type { City, Season } from '@/lib/types';

export function getCurrentSeason(): Season {
  const month = new Date().getMonth();
  if (month >= 2 && month <= 4) return 'spring';
  if (month >= 5 && month <= 7) return 'summer';
  if (month >= 8 && month <= 10) return 'fall';
  return 'winter';
}

const SEASON_ORDER: Season[] = ['spring', 'summer', 'fall', 'winter'];

export function getWeatherHint(city: City): string {
  const current = getCurrentSeason();
  if (city.bestSeasons.includes(current)) {
    return '☀️ Great time to visit!';
  }
  // Find the chronologically next best season from now
  const currentIdx = SEASON_ORDER.indexOf(current);
  for (let i = 1; i <= 4; i++) {
    const nextSeason = SEASON_ORDER[(currentIdx + i) % 4];
    if (city.bestSeasons.includes(nextSeason)) {
      return `Best in ${nextSeason}`;
    }
  }
  return `Best in ${city.bestSeasons[0]}`;
}
