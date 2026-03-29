'use client';

import { useState, useRef, useEffect, useMemo, useId } from 'react';
import { getCityNames } from '@/lib/cityLookup';

const PLACEHOLDER_CITIES = [
  'Buffalo, NY',
  'Austin, TX',
  'Denver, CO',
  'Portland, OR',
  'Nashville, TN',
  'Miami, FL',
  'Chicago, IL',
  'Seattle, WA',
  'Santa Fe, NM',
  'Asheville, NC',
];

interface CityAutocompleteProps {
  value: string;
  onChange: (value: string) => void;
  error: string | null;
}

export default function CityAutocomplete({
  value,
  onChange,
  error,
}: CityAutocompleteProps) {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [highlightIndex, setHighlightIndex] = useState(-1);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [isFocused, setIsFocused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listboxId = useId();

  const allCities = useMemo(() => getCityNames(), []);

  // Cycle placeholder city names
  useEffect(() => {
    if (value || isFocused) return;
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % PLACEHOLDER_CITIES.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [value, isFocused]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Keyboard shortcut: "/" to focus city input
  useEffect(() => {
    function handleSlash(e: KeyboardEvent) {
      if (
        e.key === '/' &&
        !['INPUT', 'TEXTAREA', 'SELECT'].includes(
          (e.target as HTMLElement).tagName
        )
      ) {
        e.preventDefault();
        inputRef.current?.focus();
      }
    }
    document.addEventListener('keydown', handleSlash);
    return () => document.removeEventListener('keydown', handleSlash);
  }, []);

  const handleInputChange = (input: string) => {
    onChange(input);
    if (input.length < 2) {
      setSuggestions([]);
      setIsOpen(false);
      return;
    }
    const lower = input.toLowerCase();
    const matches = allCities
      .filter((city) => city.toLowerCase().includes(lower))
      .slice(0, 8);
    setSuggestions(matches);
    setIsOpen(matches.length > 0);
    setHighlightIndex(-1);
  };

  const selectCity = (city: string) => {
    onChange(city);
    setIsOpen(false);
    setSuggestions([]);
    setHighlightIndex(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen || suggestions.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlightIndex((prev) =>
        Math.min(prev + 1, suggestions.length - 1)
      );
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlightIndex((prev) => Math.max(prev - 1, 0));
    } else if (e.key === 'Enter') {
      if (highlightIndex >= 0) {
        e.preventDefault();
        e.stopPropagation();
        selectCity(suggestions[highlightIndex]);
      }
    } else if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  const activeDescendant =
    highlightIndex >= 0 ? `${listboxId}-option-${highlightIndex}` : undefined;

  return (
    <div ref={containerRef} className="relative">
      <label
        htmlFor="home-city"
        className="block text-sm font-medium mb-1 text-charcoal"
      >
        Where are you starting from?
      </label>
      <input
        ref={inputRef}
        id="home-city"
        type="text"
        role="combobox"
        aria-expanded={isOpen}
        aria-controls={listboxId}
        aria-activedescendant={activeDescendant}
        aria-autocomplete="list"
        value={value}
        onChange={(e) => handleInputChange(e.target.value)}
        onKeyDown={handleKeyDown}
        onFocus={() => {
          setIsFocused(true);
          if (suggestions.length > 0) setIsOpen(true);
        }}
        onBlur={() => setIsFocused(false)}
        placeholder={`e.g. ${PLACEHOLDER_CITIES[placeholderIndex]}`}
        autoComplete="off"
        className="focus-ring w-full px-4 py-2.5 rounded-lg bg-sand border border-sage/30 text-charcoal placeholder:text-sage"
      />
      {error && (
        <p className="text-sm mt-1 text-coral" role="alert">{error}</p>
      )}
      {isOpen && suggestions.length > 0 && (
        <ul
          id={listboxId}
          role="listbox"
          className="autocomplete-dropdown absolute z-10 w-full mt-1 bg-cream border border-sage/20 rounded-lg shadow-lg max-h-60 overflow-auto"
        >
          {suggestions.map((city, index) => (
            <li
              key={city}
              id={`${listboxId}-option-${index}`}
              role="option"
              aria-selected={index === highlightIndex}
              onClick={() => selectCity(city)}
              className={`
                px-4 py-2 cursor-pointer text-sm text-charcoal
                ${
                  index === highlightIndex
                    ? 'bg-terracotta/10'
                    : 'hover:bg-sage/10'
                }
              `}
            >
              {city}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
