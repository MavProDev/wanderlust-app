'use client';

import { useState, useEffect } from 'react';

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Read the class that the inline <script> in layout.tsx already set
    const hasDarkClass = document.documentElement.classList.contains('dark');
    setIsDark(hasDarkClass);
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    if (next) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  if (!mounted) return null;

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="focus-ring p-2 rounded-full hover:bg-cream transition-all duration-300 text-2xl leading-none hover:scale-110 hover:rotate-12"
    >
      {isDark ? '\u2600\uFE0F' : '\u{1F319}'}
    </button>
  );
}
