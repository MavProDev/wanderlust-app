import type { ScoredCity } from '@/lib/types';
import { VIBES } from '@/data/vibes';

export function formatDistance(miles: number): string {
  return miles.toLocaleString('en-US');
}

export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    try {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      const success = document.execCommand('copy');
      document.body.removeChild(textarea);
      return success;
    } catch {
      return false;
    }
  }
}

export function buildShareText(city: ScoredCity): string {
  const firstSentence = city.blurb.split('. ')[0] + '.';
  return `\u{1F9ED} Wanderlust pick: ${city.name}, ${city.state} (${formatDistance(city.distance)} mi) \u2014 "${firstSentence}"`;
}

export function buildTweetIntentUrl(city: ScoredCity): string {
  const vibeEmojis = VIBES.filter((v) => city.vibes.includes(v.id))
    .map((v) => v.emoji)
    .join('');

  const modeEmoji = city.distance <= 800 ? '\u{1F697}' : '\u2708\uFE0F';
  const distanceLabel =
    city.distance <= 150
      ? 'day trip'
      : city.distance <= 400
        ? 'weekend drive'
        : city.distance <= 800
          ? 'road trip'
          : 'flight';

  const firstSentence = city.blurb.split('. ')[0] + '.';

  const text = `\u{1F9ED} Wanderlust says: ${city.name}, ${city.state} is calling! ${vibeEmojis}\n\n${modeEmoji} ${formatDistance(city.distance)} mi ${distanceLabel}\n\n"${firstSentence}"`;

  const params = new URLSearchParams({
    text,
    hashtags: 'wanderlust,travel',
  });

  return `https://x.com/intent/tweet?${params.toString()}`;
}

export function downloadImage(dataUrl: string, filename: string): void {
  const link = document.createElement('a');
  link.href = dataUrl;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
