'use client';

import { useState, useEffect } from 'react';
import type { SearchParams, VibeTag } from '@/lib/types';
import { VIBES } from '@/data/vibes';
import VibeChip from './VibeChip';
import CityAutocomplete from './CityAutocomplete';

interface SearchFormProps {
  onSearch: (params: SearchParams, isRandomSurprise?: boolean) => void;
  onSurpriseMe: () => SearchParams;
  cityError: string | null;
  initialParams: SearchParams | null;
}

function getDistanceLabel(miles: number): string {
  if (miles <= 150) return 'Day Trip';
  if (miles <= 400) return 'Weekend Drive';
  if (miles <= 800) return 'Road Trip';
  if (miles <= 1500) return 'Cross Country';
  return 'Fly Me Out';
}

type TripLength = 'day' | 'weekend' | '3-5days' | 'week';

const TRIP_LENGTHS: { id: TripLength; label: string }[] = [
  { id: 'day', label: '1 Day' },
  { id: 'weekend', label: 'Weekend' },
  { id: '3-5days', label: '3\u20135 Days' },
  { id: 'week', label: 'Week+' },
];

export default function SearchForm({ onSearch, onSurpriseMe, cityError, initialParams }: SearchFormProps) {
  const [homeCity, setHomeCity] = useState('');
  const [maxDistance, setMaxDistance] = useState(500);
  const [mode, setMode] = useState<'drive' | 'fly'>('drive');
  const [tripLength, setTripLength] = useState<TripLength>('weekend');
  const [selectedVibes, setSelectedVibes] = useState<VibeTag[]>([]);
  const [keywords, setKeywords] = useState('');

  // Hydrate from URL hash params
  useEffect(() => {
    if (initialParams) {
      setHomeCity(initialParams.homeCity);
      setMaxDistance(initialParams.maxDistance);
      setMode(initialParams.mode);
      setTripLength(initialParams.tripLength);
      setSelectedVibes(initialParams.vibes);
    }
  }, [initialParams]);

  const toggleVibe = (id: string) => {
    const vibeId = id as VibeTag;
    setSelectedVibes((prev) =>
      prev.includes(vibeId)
        ? prev.filter((v) => v !== vibeId)
        : [...prev, vibeId]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({
      homeCity,
      maxDistance,
      mode,
      tripLength,
      vibes: selectedVibes,
      keywords,
    });
  };

  const handleSurpriseMe = () => {
    const params = onSurpriseMe();
    setMaxDistance(params.maxDistance);
    setMode(params.mode);
    setTripLength(params.tripLength);
    setSelectedVibes(params.vibes);

    if (homeCity.trim()) {
      params.homeCity = homeCity;
      onSearch(params);
    } else {
      onSearch(params, true);
    }
  };

  const handleClear = () => {
    setHomeCity('');
    setMaxDistance(500);
    setMode('drive');
    setTripLength('weekend');
    setSelectedVibes([]);
    setKeywords('');
    window.history.replaceState(null, '', window.location.pathname);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="led-border bg-cream rounded-2xl shadow-lg p-6 md:p-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Home city */}
        <CityAutocomplete
          value={homeCity}
          onChange={setHomeCity}
          error={cityError}
        />

        {/* Distance slider */}
        <div>
          <label
            htmlFor="distance"
            className="block text-sm font-medium mb-1 text-charcoal"
          >
            How far do you want to go?
          </label>
          <input
            id="distance"
            type="range"
            min={50}
            max={3000}
            step={50}
            value={maxDistance}
            onChange={(e) => setMaxDistance(Number(e.target.value))}
            aria-label="Maximum travel distance in miles"
            aria-valuetext={`${maxDistance} miles, ${getDistanceLabel(maxDistance)}`}
            className="focus-ring w-full"
          />
          <div className="flex justify-between text-[10px] text-charcoal/70 mt-0.5 px-0.5">
            <span>50</span>
            <span>|</span>
            <span>|</span>
            <span>|</span>
            <span>3000</span>
          </div>
          <p className="text-sm mt-1 text-charcoal">
            {maxDistance.toLocaleString()} mi &middot;{' '}
            <span className="font-medium text-terracotta">
              {getDistanceLabel(maxDistance)}
            </span>
          </p>
        </div>

        {/* Mode toggle */}
        <div>
          <span className="block text-sm font-medium mb-1 text-charcoal">
            How are you getting there?
          </span>
          <div role="radiogroup" aria-label="Travel mode" className="flex">
            <button
              type="button"
              role="radio"
              aria-checked={mode === 'drive'}
              onClick={() => setMode('drive')}
              className={`focus-ring flex-1 py-2.5 rounded-l-lg text-sm font-medium transition-colors ${
                mode === 'drive'
                  ? 'bg-terracotta text-white'
                  : 'bg-sand text-charcoal border border-sage/30'
              }`}
            >
              {'\u{1F697}'} Drive
            </button>
            <button
              type="button"
              role="radio"
              aria-checked={mode === 'fly'}
              onClick={() => setMode('fly')}
              className={`focus-ring flex-1 py-2.5 rounded-r-lg text-sm font-medium transition-colors ${
                mode === 'fly'
                  ? 'bg-terracotta text-white'
                  : 'bg-sand text-charcoal border border-sage/30'
              }`}
            >
              {'\u2708\uFE0F'} Fly
            </button>
          </div>
        </div>

        {/* Trip length */}
        <div>
          <span className="block text-sm font-medium mb-1 text-charcoal">
            Trip length
          </span>
          <div className="flex flex-wrap gap-2">
            {TRIP_LENGTHS.map((tl) => (
              <button
                key={tl.id}
                type="button"
                onClick={() => setTripLength(tl.id)}
                className={`focus-ring flex-1 min-w-[4.5rem] py-2 rounded-lg text-sm font-medium transition-colors ${
                  tripLength === tl.id
                    ? 'bg-forest text-white'
                    : 'bg-sand text-charcoal border border-sage/30'
                }`}
              >
                {tl.label}
              </button>
            ))}
          </div>
        </div>

        {/* Vibes \u2014 full width */}
        <div className="md:col-span-2">
          <span className="block text-sm font-medium mb-2 text-charcoal">
            What&apos;s your vibe?
          </span>
          <div className="flex flex-wrap gap-2">
            {VIBES.map((vibe) => (
              <VibeChip
                key={vibe.id}
                id={vibe.id}
                label={vibe.label}
                emoji={vibe.emoji}
                selected={selectedVibes.includes(vibe.id)}
                onToggle={toggleVibe}
              />
            ))}
          </div>
        </div>

        {/* Keywords */}
        <div className="md:col-span-2">
          <label
            htmlFor="keywords"
            className="block text-sm font-medium mb-1 text-charcoal"
          >
            Keywords
          </label>
          <input
            id="keywords"
            type="text"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
            placeholder="e.g. live music, hiking trails, cobblestone..."
            className="focus-ring w-full px-4 py-2.5 rounded-lg bg-sand border border-sage/30 text-charcoal placeholder:text-charcoal/40"
          />
          <p className="text-xs text-charcoal/70 mt-1">
            Searches city names, descriptions, and vibes
          </p>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex flex-col sm:flex-row gap-3 mt-6">
        <button
          type="submit"
          className="focus-ring flex-1 bg-coral text-white font-display font-bold text-xl py-4 rounded-lg btn-glow hover:opacity-90 transition-opacity"
        >
          Discover Destinations
        </button>
        <button
          type="button"
          onClick={handleSurpriseMe}
          className="focus-ring sm:w-auto px-6 py-4 rounded-lg border-2 border-terracotta text-terracotta font-display font-bold text-lg hover:bg-terracotta hover:text-white hover:scale-105 hover:shadow-lg transition-all duration-200"
        >
          {'\u{1F3B2}'} Surprise Me
        </button>
      </div>

      {/* Clear link */}
      {(homeCity || selectedVibes.length > 0) && (
        <button
          type="button"
          onClick={handleClear}
          className="focus-ring block mx-auto mt-3 text-xs text-charcoal/70 hover:text-terracotta transition-colors"
        >
          Clear all filters
        </button>
      )}
    </form>
  );
}
