'use client';

import type { ScoredCity, SortMode } from '@/lib/types';
import DestinationCard from './DestinationCard';

interface ResultsGridProps {
  results: ScoredCity[];
  sortMode: SortMode;
  onSortChange: (mode: SortMode) => void;
  hasSearched: boolean;
  isLoading: boolean;
  cityError: boolean;
}

const SORT_BUTTONS: { mode: SortMode; label: string }[] = [
  { mode: 'best', label: 'Best Match' },
  { mode: 'closest', label: 'Closest' },
  { mode: 'furthest', label: 'Furthest' },
];

function SkeletonCard() {
  return (
    <div className="bg-cream rounded-xl shadow-md p-6 animate-pulse">
      <div className="h-6 bg-sage/20 rounded w-2/3 mb-3" />
      <div className="h-4 bg-sage/10 rounded w-1/3 mb-4" />
      <div className="h-3 bg-sage/10 rounded w-full mb-2" />
      <div className="h-3 bg-sage/10 rounded w-5/6 mb-2" />
      <div className="h-3 bg-sage/10 rounded w-4/6" />
      <div className="flex gap-2 mt-4">
        <div className="h-6 bg-sage/10 rounded-full w-16" />
        <div className="h-6 bg-sage/10 rounded-full w-20" />
      </div>
    </div>
  );
}

export default function ResultsGrid({
  results,
  sortMode,
  onSortChange,
  hasSearched,
  isLoading,
  cityError,
}: ResultsGridProps) {
  if (!hasSearched) {
    return (
      <div className="text-center py-16">
        <p className="text-4xl mb-3">{'\u{1F9ED}'}</p>
        <p className="font-display italic text-xl text-charcoal/60">
          Tell us what you&apos;re looking for and we&apos;ll find your next
          adventure
        </p>
        <p className="text-sm text-sage mt-2">
          Press <kbd className="px-1.5 py-0.5 rounded bg-sage/10 text-charcoal font-mono text-xs">/</kbd> to jump to the city field
        </p>
      </div>
    );
  }

  if (cityError) {
    return null;
  }

  if (isLoading) {
    return (
      <section aria-label="Loading results">
        <div className="h-8 bg-sage/10 rounded w-48 mb-6" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      </section>
    );
  }

  if (results.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-4xl mb-3">{'\u{1F9ED}'}</p>
        <p className="font-display text-lg text-charcoal/60">
          No destinations matched &mdash; try widening your distance or picking
          different vibes!
        </p>
      </div>
    );
  }

  const hasDistances = results.some((r) => r.distance > 0);

  const sortedResults = [...results];
  if (hasDistances && sortMode === 'closest') {
    sortedResults.sort(
      (a, b) => a.distance - b.distance || a.name.localeCompare(b.name)
    );
  } else if (hasDistances && sortMode === 'furthest') {
    sortedResults.sort(
      (a, b) => b.distance - a.distance || a.name.localeCompare(b.name)
    );
  }

  return (
    <section aria-label="Search results">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-6">
        <h2 className="font-display font-bold text-2xl md:text-3xl text-charcoal">
          {hasDistances ? 'Your Next Adventure' : 'Random Picks'}
          <span className="ml-2 text-base font-body font-normal text-sage">
            {results.length} {results.length === 1 ? 'destination' : 'destinations'} found
          </span>
        </h2>

        {/* Sort controls — only when distances are available */}
        {hasDistances && (
          <div className="flex gap-4">
            {SORT_BUTTONS.map((btn) => (
              <button
                key={btn.mode}
                type="button"
                onClick={() => onSortChange(btn.mode)}
                className={`
                  focus-ring text-sm font-medium pb-1 transition-colors
                  ${
                    sortMode === btn.mode
                      ? 'border-b-2 border-terracotta text-terracotta'
                      : 'text-charcoal/60 hover:text-charcoal'
                  }
                `}
              >
                {btn.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Results grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {sortedResults.map((city, index) => (
          <DestinationCard
            key={`${city.name}-${city.state}`}
            city={city}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
