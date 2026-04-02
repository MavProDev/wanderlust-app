'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import type { SearchParams, ScoredCity, SortMode, VibeTag } from '@/lib/types';
import { CITIES } from '@/data/cities';
import { VIBES } from '@/data/vibes';
import { filterDestinations } from '@/lib/filter';
import { getWeatherHint } from '@/lib/seasons';
import { resolveCity } from '@/lib/cityLookup';
import SearchForm from '@/components/SearchForm';
import ResultsGrid from '@/components/ResultsGrid';
import DarkModeToggle from '@/components/DarkModeToggle';

function encodeHashState(params: SearchParams): string {
  const data: Record<string, string> = {
    c: params.homeCity,
    d: String(params.maxDistance),
    m: params.mode,
    t: params.tripLength,
  };
  if (params.vibes.length > 0) {
    data.v = params.vibes.join(',');
  }
  if (params.keywords.trim()) {
    data.k = params.keywords.trim();
  }
  return '#' + new URLSearchParams(data).toString();
}

function decodeHashState(): SearchParams | null {
  if (typeof window === 'undefined' || !window.location.hash) return null;
  try {
    const params = new URLSearchParams(window.location.hash.slice(1));
    const homeCity = params.get('c');
    const maxDistance = params.get('d');
    const mode = params.get('m');
    const tripLength = params.get('t');
    if (!homeCity || !maxDistance || !mode || !tripLength) return null;
    const validVibeIds = new Set(VIBES.map((v) => v.id));
    const vibes = (params.get('v')?.split(',').filter((v) => validVibeIds.has(v as VibeTag)) ?? []) as VibeTag[];
    return {
      homeCity,
      maxDistance: Number(maxDistance),
      mode: mode as 'drive' | 'fly',
      tripLength: tripLength as 'day' | 'weekend' | '3-5days' | 'week',
      vibes,
      keywords: params.get('k') ?? '',
    };
  } catch {
    return null;
  }
}

function getRandomVibes(): VibeTag[] {
  const shuffled = [...VIBES].sort(() => Math.random() - 0.5);
  const count = Math.floor(Math.random() * 3) + 1;
  return shuffled.slice(0, count).map((v) => v.id);
}

export default function Home() {
  const [results, setResults] = useState<ScoredCity[]>([]);
  const [sortMode, setSortMode] = useState<SortMode>('best');
  const [hasSearched, setHasSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [cityError, setCityError] = useState<string | null>(null);
  const [initialParams, setInitialParams] = useState<SearchParams | null>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  const generateRandomResults = useCallback((): ScoredCity[] => {
    const shuffled = [...CITIES].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 8).map((city) => ({
      ...city,
      distance: 0,
      score: 0,
      weatherHint: getWeatherHint(city),
    }));
  }, []);

  const executeSearch = useCallback((params: SearchParams, isRandomSurprise = false) => {
    if (isRandomSurprise) {
      setCityError(null);
      setIsLoading(true);
      setTimeout(() => {
        setResults(generateRandomResults());
        setSortMode('best');
        setHasSearched(true);
        setIsLoading(false);
        setTimeout(() => {
          resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }, 150);
      return;
    }

    const resolved = resolveCity(params.homeCity);
    if (!resolved) {
      setCityError(
        "Couldn't find that city \u2014 try 'City, State' format"
      );
      setResults([]);
      setHasSearched(true);
      return;
    }

    setCityError(null);
    setIsLoading(true);

    // Brief loading state for visual feedback
    setTimeout(() => {
      const filtered = filterDestinations(CITIES, params, resolved);
      setResults(filtered);
      setSortMode('best');
      setHasSearched(true);
      setIsLoading(false);

      // Update URL hash
      window.history.replaceState(null, '', encodeHashState(params));

      // Scroll to results
      setTimeout(() => {
        resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }, 150);
  }, [generateRandomResults]);

  // Load from URL hash on mount
  useEffect(() => {
    const hashParams = decodeHashState();
    if (hashParams) {
      setInitialParams(hashParams);
      executeSearch(hashParams);
    }
  }, [executeSearch]);

  const handleSurpriseMe = () => {
    const distances = [300, 500, 800, 1200, 2000, 4000, 6000];
    const modes: ('drive' | 'fly')[] = ['drive', 'fly'];
    const trips: ('day' | 'weekend' | '3-5days' | 'week')[] = ['weekend', '3-5days', 'week'];

    const params: SearchParams = {
      homeCity: '',
      maxDistance: distances[Math.floor(Math.random() * distances.length)],
      mode: modes[Math.floor(Math.random() * modes.length)],
      tripLength: trips[Math.floor(Math.random() * trips.length)],
      vibes: getRandomVibes(),
      keywords: '',
    };

    return params;
  };

  return (
    <div className="min-h-screen bg-sand">
      {/* Hero */}
      <header className="hero-noise relative pt-8 pb-12 px-4 overflow-hidden">
        <div className="max-w-[1200px] mx-auto relative z-10">
          {/* Dark mode toggle */}
          <div className="absolute top-0 right-0">
            <DarkModeToggle />
          </div>

          <div className="text-center animate-fadeIn">
            <h1 className="font-display font-black text-5xl md:text-7xl text-charcoal neon-title">
              Wanderlust
            </h1>
            <p className="font-display text-xl text-charcoal/70 mt-2">
              Where should you go next?
            </p>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main id="main-content" className="max-w-[1200px] mx-auto px-4 pb-8">
        <SearchForm
          onSearch={executeSearch}
          onSurpriseMe={handleSurpriseMe}
          cityError={cityError}
          initialParams={initialParams}
        />

        <div className="mt-12" ref={resultsRef}>
          <ResultsGrid
            results={results}
            sortMode={sortMode}
            onSortChange={setSortMode}
            hasSearched={hasSearched}
            isLoading={isLoading}
            cityError={!!cityError}
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-8 text-xs text-charcoal/50">
        <p>
          100% client-side. No data stored. No tracking. Your info never leaves
          your browser.
        </p>
        <p className="mt-1">
          <a
            href="https://x.com/ReelDad"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-terracotta transition-colors"
          >
            @ReelDad on X
          </a>
        </p>
      </footer>
    </div>
  );
}
