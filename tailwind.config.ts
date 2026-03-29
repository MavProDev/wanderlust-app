import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-fraunces)', 'serif'],
        body: ['var(--font-dm-sans)', 'sans-serif'],
      },
      colors: {
        sand: 'rgb(var(--sand) / <alpha-value>)',
        terracotta: 'rgb(var(--terracotta) / <alpha-value>)',
        forest: 'rgb(var(--forest) / <alpha-value>)',
        cream: 'rgb(var(--cream) / <alpha-value>)',
        charcoal: 'rgb(var(--charcoal) / <alpha-value>)',
        coral: 'rgb(var(--coral) / <alpha-value>)',
        sage: 'rgb(var(--sage) / <alpha-value>)',
      },
      animation: {
        fadeIn: 'fadeIn 0.6s ease-out',
        slideUp: 'slideUp 0.5s ease-out both',
        discoverPulse: 'discoverPulse 3s ease-in-out infinite',
        shimmer: 'shimmer 1.5s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        discoverPulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
