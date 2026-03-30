'use client';

import { useState } from 'react';
import type { ScoredCity } from '@/lib/types';
import { VIBES } from '@/data/vibes';
import { formatDistance } from '@/lib/shareUtils';
import ShareCard from './ShareCard';

const SEASON_EMOJI: Record<string, string> = {
  spring: '\u{1F338}',
  summer: '\u2600\uFE0F',
  fall: '\u{1F341}',
  winter: '\u2744\uFE0F',
};

interface DestinationCardProps {
  city: ScoredCity;
  index: number;
}

export default function DestinationCard({ city, index }: DestinationCardProps) {
  const [showShare, setShowShare] = useState(false);

  const matchingVibes = VIBES.filter((v) => city.vibes.includes(v.id));
  const isGreatTime = city.weatherHint.includes('Great time');

  return (
    <>
      <div
        className="relative bg-cream rounded-xl shadow-md p-6 animate-slideUp card-glow hover:-translate-y-0.5 transition-all duration-200"
        style={{ animationDelay: `${index * 100}ms` }}
      >
        {/* Share button */}
        <button
          type="button"
          onClick={() => setShowShare(true)}
          aria-label={`Share ${city.name}`}
          className="focus-ring absolute top-4 right-4 p-2 rounded-full hover:bg-sage/10 transition-colors text-sage hover:text-terracotta"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
            <polyline points="16 6 12 2 8 6" />
            <line x1="12" y1="2" x2="12" y2="15" />
          </svg>
        </button>

        {/* City name + vibe match count */}
        <div className="flex items-baseline gap-2 pr-12">
          <h3 className="font-display font-bold text-xl text-charcoal">
            {city.name}
          </h3>
          {matchingVibes.length > 0 && (
            <span className="text-xs font-medium text-terracotta">
              {matchingVibes.length}/{VIBES.length} vibes
            </span>
          )}
        </div>

        {/* State + distance badge */}
        <div className="flex items-center gap-2 mt-1">
          <span className="text-sm text-charcoal/70">{city.state}</span>
          {city.distance > 0 && (
            <span className="inline-block bg-sage/20 text-charcoal/70 rounded-full px-3 py-0.5 text-sm font-medium">
              {formatDistance(city.distance)} mi
            </span>
          )}
        </div>

        {/* Weather hint */}
        <p
          className={`text-xs mt-1.5 ${
            isGreatTime ? 'text-forest' : 'text-charcoal/70'
          }`}
        >
          {city.weatherHint}
        </p>

        {/* Weather advisory */}
        {city.weatherAdvisory && (
          <p className="text-xs mt-1 text-amber-600 dark:text-amber-400">
            {'\u26A0\uFE0F'} {city.weatherAdvisory}
          </p>
        )}

        {/* Blurb */}
        <p className="font-body text-sm text-charcoal mt-2 leading-relaxed">
          {city.blurb}
        </p>

        {/* Matching vibe pills */}
        <div className="flex flex-wrap gap-1.5 mt-3">
          {matchingVibes.map((vibe) => (
            <span
              key={vibe.id}
              className="text-xs bg-sage/10 text-charcoal rounded-full px-2 py-0.5"
            >
              {vibe.emoji} {vibe.label}
            </span>
          ))}
        </div>

        {/* Best seasons with emoji badges */}
        <p className="text-xs text-charcoal/70 mt-2">
          Best seasons:{' '}
          {city.bestSeasons.map((s, i) => (
            <span key={s} className="capitalize">
              {i > 0 && ', '}
              {SEASON_EMOJI[s] || ''} {s}
            </span>
          ))}
        </p>
      </div>

      {/* Share modal */}
      {showShare && (
        <ShareCard city={city} onClose={() => setShowShare(false)} />
      )}
    </>
  );
}
