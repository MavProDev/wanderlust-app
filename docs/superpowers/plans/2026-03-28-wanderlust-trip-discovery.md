# Wanderlust — Trip Discovery App Implementation Plan (v2)

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a complete client-side trip destination discovery tool — user picks home city, distance, mode, trip length, vibes; app returns 5-8 matching US cities with downloadable share cards and Share to X integration.

**Architecture:** Single-page Next.js 15 App Router app. All logic runs client-side — zero API calls, zero tracking, zero storage. Static dataset of 120 US cities with Haversine distance calc, vibe-based scoring, sort controls, and canvas-generated share card images. Dark mode via CSS class toggle + React state (no localStorage). Fonts self-hosted via next/font/google.

**Tech Stack:** Next.js 15 (stable), TypeScript (strict), Tailwind CSS (darkMode: 'class'), next/font/google (Fraunces + DM Sans), HTML Canvas API (share cards), Vercel deploy (zero config)

---

## Key Design Decisions

### Share Card System (Canvas-based, zero APIs)
- Each destination card has a **share button** that opens a share popover
- On click, renders a **beautiful branded image** via HTML Canvas:
  - 1200x630px (optimal for social sharing)
  - Warm gradient background matching the app's palette
  - Wanderlust logo text (serif style, drawn on canvas)
  - City name, state, distance badge
  - Blurb text (first sentence)
  - Vibe emoji row
  - Weather hint
  - Subtle "wanderlust" watermark
- **"Download Card"** button — saves canvas as PNG via `toDataURL()` + anchor download
- **"Share to X"** button — opens Twitter Web Intent (`https://x.com/intent/tweet`) with pre-filled text including city, distance, vibes. User attaches the downloaded image manually (Twitter intents cannot auto-attach images without API auth — respects our zero-API rule)

### Privacy-Safe Share to X
The tweet intent URL is constructed client-side:
```
https://x.com/intent/tweet?text=🧭 My Wanderlust pick: Austin, Texas (342 mi) — beach, food, nightlife vibes!&hashtags=wanderlust,travel
```
No tracking parameters, no analytics, no API calls. Just a URL that opens Twitter's compose window.

---

## File Structure

```
wanderlust/
├── app/
│   ├── page.tsx              — Main page: hero + SearchForm + ResultsGrid + footer
│   ├── layout.tsx            — Root layout: fonts, meta
│   ├── globals.css           — Tailwind directives + CSS vars + animations + noise texture
│   └── api/suggest/route.ts  — Future AI endpoint stub (returns 501)
├── components/
│   ├── SearchForm.tsx        — All inputs as single controlled component
│   ├── ResultsGrid.tsx       — Sort controls + grid + empty/error states
│   ├── DestinationCard.tsx   — Result card with share popover
│   ├── ShareCard.tsx         — Canvas-based image generator + download + tweet
│   ├── VibeChip.tsx          — Selectable tag chip
│   ├── DarkModeToggle.tsx    — Sun/moon toggle, CSS class strategy
│   └── CityAutocomplete.tsx  — Filtered dropdown for home city
├── data/
│   ├── cities.ts             — 120 cities in 10 regional arrays + CITIES export
│   └── vibes.ts              — Vibe definitions + types
├── lib/
│   ├── types.ts              — All shared interfaces and types
│   ├── distance.ts           — Haversine formula (miles)
│   ├── filter.ts             — filterDestinations() + scoring
│   ├── cityLookup.ts         — City name → lat/lng resolver + fuzzy matching
│   ├── seasons.ts            — getCurrentSeason() + getWeatherHint()
│   ├── shareUtils.ts         — Copy-to-clipboard + tweet intent URL builder + download helper
│   └── canvasCard.ts         — Canvas rendering logic for share card image
├── tailwind.config.ts
├── next.config.ts
├── package.json
└── tsconfig.json
```

---

## Execution Strategy

Build bottom-up, verify build compiles after each major group:

1. **Scaffold** — Next.js 15 project, Tailwind config, CSS vars, layout
2. **Data layer** — Types, vibes, 120 cities, city lookup map
3. **Lib utilities** — Distance, seasons, filter logic, share utils, canvas card renderer
4. **Components** — VibeChip, DarkModeToggle, CityAutocomplete, ShareCard, DestinationCard, ResultsGrid, SearchForm
5. **Page** — app/page.tsx tying everything together
6. **API stub** — /api/suggest/route.ts
7. **Build + verify + deploy**

---

## Detailed Task Breakdown

### Task 1: Scaffold Next.js 15 Project

**Files:** `package.json`, `tsconfig.json`, `next.config.ts`, `tailwind.config.ts`, `app/globals.css`, `app/layout.tsx`, `.gitignore`

- [ ] **Step 1:** Run `npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir=false --import-alias="@/*" --use-npm` (installs Next.js 15 stable)
- [ ] **Step 2:** Replace `tailwind.config.ts` with custom config:
  - `darkMode: 'class'`
  - Extended colors referencing CSS vars: `sand`, `terracotta`, `forest`, `cream`, `charcoal`, `coral`, `sage`
  - Font families: `display` (Fraunces), `body` (DM Sans)
  - Custom animations: `fadeIn`, `slideUp`, `discoverPulse` (custom name avoids Tailwind's built-in `pulse` conflict)
- [ ] **Step 3:** Replace `app/globals.css`:
  - Tailwind directives
  - `:root` light mode vars: `--sand: #F5E6D3`, `--terracotta: #C75B39`, `--forest: #2D5016`, `--cream: #FFF8F0`, `--charcoal: #2C2C2C`, `--coral: #FF6B4A`, `--sage: #87A878`
  - `.dark` overrides: `--sand: #1A1410`, `--cream: #2A2420`, `--charcoal: #E8E0D8`, `--forest: #4A8A30`, `--sage: #6B8A60` (terracotta + coral unchanged)
  - Custom range slider styling (webkit + moz thumb)
  - `.focus-ring` utility class: `outline-none focus-visible:outline-2 focus-visible:outline-offset-2` with coral color
  - `@keyframes fadeIn`, `slideUp`, `discoverPulse`, `shimmer`
  - Hero noise texture: `.hero-noise::after` pseudo-element with inline SVG noise filter as data URI background
  - Body: `transition: background-color 300ms ease, color 300ms ease`
- [ ] **Step 4:** Replace `app/layout.tsx`:
  - Import `Fraunces` (weights 400/700/900) and `DM_Sans` (weights 400/500/700) from `next/font/google` with CSS variable mode and `display: 'swap'`
  - Metadata: title, description
  - Skip-to-content link (sr-only, visible on focus)
  - Apply font variables to `<body>`
  - `suppressHydrationWarning` on `<html>`
- [ ] **Step 5:** Minimal `next.config.ts`
- [ ] **Step 6:** `npm run build` — verify scaffold compiles

---

### Task 2: Types + Vibes Data

**Files:** `lib/types.ts`, `data/vibes.ts`

- [ ] **Step 1:** Create `lib/types.ts`:
  - `VibeTag` — union of 10 string literals: beach, mountains, city, outdoors, nightlife, history, food, offbeat, family, budget
  - `Season` — spring, summer, fall, winter
  - `SortMode` — best, closest, furthest
  - `City` interface — name, state, lat, lng, vibes (VibeTag[]), populationTier, bestSeasons (Season[]), blurb, events? (string[])
  - `SearchParams` — homeCity, maxDistance, mode (drive/fly), tripLength (day/weekend/3-5days/week), vibes (VibeTag[]), keywords
  - `ScoredCity extends City` — distance (number), score (number), weatherHint (string)

- [ ] **Step 2:** Create `data/vibes.ts`:
  - `VibeDefinition` interface
  - `VIBES` array: beach/Beach/🏖️, mountains/Mountains/🏔️, city/City Life/🏙️, outdoors/Outdoors/⛺, nightlife/Nightlife/🎆, history/History/🏛️, food/Food Scene/🍳, offbeat/Off the Beaten Path/🗿, family/Family Friendly/👨‍👩‍👧‍👦, budget/Budget Friendly/💰

---

### Task 3: City Dataset — 120 Cities

**Files:** `data/cities.ts`

- [ ] **Step 1:** Create `data/cities.ts` with 10 regional arrays of 12 cities each

Every city needs accurate lat/lng (4 decimal places), 2-4 vibes, correct populationTier, 1-3 bestSeasons, 2-3 sentence evocative blurb, `events: []`.

Regions and cities (exact list from spec — all coordinates provided in plan v1).

- [ ] **Step 2:** Export `CITIES: City[]` = spread all 10 arrays
- [ ] **Step 3:** Verify count is 120

---

### Task 4: City Lookup Map

**Files:** `lib/cityLookup.ts`

- [ ] **Step 1:** Build map with ~200 entries (120 dataset + ~80 origin cities), key format `"city, state"` lowercase
- [ ] **Step 2:** State abbreviation map (all 50 + DC)
- [ ] **Step 3:** Alias map (nyc, la, sf, dc, chi, philly, vegas, nola)
- [ ] **Step 4:** `resolveCity()` function: aliases → exact → abbreviation expand → city-only match → null
- [ ] **Step 5:** `getCityNames()` returning display-formatted keys for autocomplete

---

### Task 5: Lib Utilities

**Files:** `lib/distance.ts`, `lib/seasons.ts`, `lib/filter.ts`, `lib/shareUtils.ts`, `lib/canvasCard.ts`

- [ ] **Step 1:** `lib/distance.ts` — Haversine with R=3958.8 miles
- [ ] **Step 2:** `lib/seasons.ts` — getCurrentSeason + getWeatherHint
- [ ] **Step 3:** `lib/filter.ts` — filterDestinations with full pipeline (resolve → distance → mode filter → score → zero-filter → sort → top 8 → weatherHint)
- [ ] **Step 4:** `lib/shareUtils.ts`:
  - `copyToClipboard(text)` with clipboard API + textarea fallback
  - `buildTweetIntentUrl(city: ScoredCity)` — encodes tweet text with city info + vibes + hashtags
  - `downloadImage(dataUrl, filename)` — creates temporary anchor with download attribute
- [ ] **Step 5:** `lib/canvasCard.ts` — `generateShareCard(city: ScoredCity): Promise<string>`:
  - 1200x630 canvas
  - Gradient background (#F5E6D3 → #C75B39 diagonal)
  - "Wanderlust" header text (48px bold serif)
  - City name (64px bold serif)
  - State + distance (24px sans-serif)
  - Weather hint (20px sans-serif, green if great time)
  - First sentence of blurb (20px sans-serif, wrapped)
  - Vibe emojis row (32px)
  - Footer watermark
  - Returns `canvas.toDataURL('image/png')`

  Text wrapping helper: `wrapText(ctx, text, x, y, maxWidth, lineHeight)` for blurb

---

### Task 6: Components

**Files:** All 7 component files

- [ ] **Step 1:** `components/VibeChip.tsx` — checkbox role, scale animation, focus ring
- [ ] **Step 2:** `components/DarkModeToggle.tsx` — React state + CSS class toggle, OS preference detection on mount, null render until mounted
- [ ] **Step 3:** `components/CityAutocomplete.tsx` — filtered dropdown, keyboard nav, click-outside-close, city names via useMemo, error display
- [ ] **Step 4:** `components/ShareCard.tsx` — modal/popover with:
  - Canvas-generated card preview image
  - "Download Card" button
  - "Share to X" button (opens tweet intent + triggers download)
  - "Copy Text" button
  - Close button and backdrop click-to-close
  - Loading state while canvas renders
- [ ] **Step 5:** `components/DestinationCard.tsx` — city info card with share button toggling ShareCard
- [ ] **Step 6:** `components/ResultsGrid.tsx` — 3 states (empty/no-results/results), sort controls, 2-col grid
- [ ] **Step 7:** `components/SearchForm.tsx` — all inputs, 2-col grid on md, disabled keywords, discoverPulse on submit button

---

### Task 7: Main Page + API Stub

**Files:** `app/page.tsx`, `app/api/suggest/route.ts`

- [ ] **Step 1:** `app/page.tsx` — hero with noise texture + DarkModeToggle, SearchForm, ResultsGrid, footer (2 lines: privacy + @ReelDad)
- [ ] **Step 2:** API stub returning 501

---

### Task 8: Build, Verify, Deploy

- [ ] **Step 1:** `npm run build` — fix all errors
- [ ] **Step 2:** Smoke test all features in dev
- [ ] **Step 3:** Self-audit checklist:
  - 120 cities present
  - Haversine returns miles (NYC→LA ≈ 2445)
  - Zero `any` types
  - Zero localStorage/sessionStorage/cookies/analytics
  - Zero console.log
  - All 'use client' directives present
  - API stub returns 501
  - Keywords input disabled
  - Footer exact
  - Share card generates + downloads + tweet intent works
  - All ARIA attributes on custom controls
  - Focus rings visible
  - Responsive layout
- [ ] **Step 4:** Deploy to Vercel

---

## Security and Privacy Audit

| Check | Status |
|-------|--------|
| Zero localStorage/sessionStorage/cookies | Enforced — no storage APIs used |
| Zero external API calls at runtime | All data static, fonts self-hosted at build |
| Zero analytics/tracking | No scripts, pixels, or beacons |
| No PII in codebase | Only @ReelDad X handle in footer |
| Tweet intent has no tracking params | Clean URL with just text + hashtags |
| Canvas rendering is pure client-side | No server round-trip for image generation |
| No unsafe HTML rendering | No raw HTML injection anywhere |
| Share text uses static controlled data | City data is not user-generated |
| API stub returns 501 | No functional endpoints to exploit |
| No inline event handlers with user data | All event handlers use React synthetic events |
