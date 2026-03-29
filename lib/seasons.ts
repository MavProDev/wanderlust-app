import type { City, Season } from '@/lib/types';

export function getCurrentSeason(): Season {
  const month = new Date().getMonth();
  if (month >= 2 && month <= 4) return 'spring';
  if (month >= 5 && month <= 7) return 'summer';
  if (month >= 8 && month <= 10) return 'fall';
  return 'winter';
}

export function getWeatherHint(city: City): string {
  const current = getCurrentSeason();
  if (city.bestSeasons.includes(current)) {
    return '☀️ Great time to visit!';
  }
  const nextGood = city.bestSeasons[0];
  return `Best in ${nextGood}`;
}
