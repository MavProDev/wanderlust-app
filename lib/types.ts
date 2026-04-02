export type VibeTag =
  | 'beach'
  | 'mountains'
  | 'city'
  | 'outdoors'
  | 'nightlife'
  | 'history'
  | 'food'
  | 'offbeat'
  | 'family'
  | 'budget';

export type Season = 'spring' | 'summer' | 'fall' | 'winter';

export type SortMode = 'best' | 'closest' | 'furthest';

export interface City {
  name: string;
  state: string;
  lat: number;
  lng: number;
  vibes: VibeTag[];
  bestSeasons: Season[];
  blurb: string;
  weatherAdvisory?: string;
}

export interface SearchParams {
  homeCity: string;
  maxDistance: number;
  mode: 'drive' | 'fly';
  tripLength: 'day' | 'weekend' | '3-5days' | 'week';
  vibes: VibeTag[];
  keywords: string;
}

export interface ScoredCity extends City {
  distance: number;
  score: number;
  weatherHint: string;
}
