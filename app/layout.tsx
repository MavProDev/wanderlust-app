import type { Metadata } from 'next';
import { Fraunces, DM_Sans } from 'next/font/google';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  weight: ['400', '700', '900'],
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
  weight: ['400', '500', '700'],
});

export const metadata: Metadata = {
  title: 'Wanderlust \u2014 Where should you go next?',
  description:
    'Discover your next travel destination based on distance, vibe, and season. 100% client-side, zero tracking.',
  openGraph: {
    title: 'Wanderlust \u2014 Where should you go next?',
    description:
      'Discover your next travel destination based on distance, vibe, and season. 100% client-side, zero tracking.',
    type: 'website',
    siteName: 'Wanderlust',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wanderlust \u2014 Where should you go next?',
    description:
      'Discover your next travel destination based on distance, vibe, and season.',
  },
};

// Inline script to prevent dark mode FOUC.
// This is a static string literal with no user input — no XSS risk.
const darkModeScript = `(function(){try{if(window.matchMedia('(prefers-color-scheme: dark)').matches){document.documentElement.classList.add('dark')}}catch(e){}})()`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: darkModeScript }} />
      </head>
      <body
        className={`${fraunces.variable} ${dmSans.variable} font-body antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-coral focus:text-white focus:rounded-lg"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
