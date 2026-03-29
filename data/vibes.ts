import type { VibeTag } from '@/lib/types';

export interface VibeDefinition {
  id: VibeTag;
  label: string;
  emoji: string;
}

export const VIBES: readonly VibeDefinition[] = [
  { id: 'beach', label: 'Beach', emoji: '🏖️' },
  { id: 'mountains', label: 'Mountains', emoji: '🏔️' },
  { id: 'city', label: 'City Life', emoji: '🏙️' },
  { id: 'outdoors', label: 'Outdoors', emoji: '⛺' },
  { id: 'nightlife', label: 'Nightlife', emoji: '🎆' },
  { id: 'history', label: 'History', emoji: '🏛️' },
  { id: 'food', label: 'Food Scene', emoji: '🍳' },
  { id: 'offbeat', label: 'Off the Beaten Path', emoji: '🗿' },
  { id: 'family', label: 'Family Friendly', emoji: '👨‍👩‍👧‍👦' },
  { id: 'budget', label: 'Budget Friendly', emoji: '💰' },
];
