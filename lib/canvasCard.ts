import type { ScoredCity } from '@/lib/types';
import { VIBES } from '@/data/vibes';
import { getFirstSentence } from '@/lib/shareUtils';

const CARD_WIDTH = 1200;
const CARD_HEIGHT = 630;

function wrapText(
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  maxWidth: number,
  lineHeight: number
): number {
  const words = text.split(' ');
  let line = '';
  let currentY = y;

  for (let i = 0; i < words.length; i++) {
    const testLine = line + words[i] + ' ';
    const metrics = ctx.measureText(testLine);
    if (metrics.width > maxWidth && i > 0) {
      ctx.fillText(line.trim(), x, currentY);
      line = words[i] + ' ';
      currentY += lineHeight;
    } else {
      line = testLine;
    }
  }
  ctx.fillText(line.trim(), x, currentY);
  return currentY + lineHeight;
}

function drawRoundedRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number
): void {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

export function generateShareCard(
  city: ScoredCity,
  customImage?: HTMLImageElement | null
): string {
  const canvas = document.createElement('canvas');
  canvas.width = CARD_WIDTH;
  canvas.height = CARD_HEIGHT;
  const ctx = canvas.getContext('2d');
  if (!ctx) return '';

  // Background
  if (customImage) {
    // Draw custom image covering the canvas
    const imgRatio = customImage.width / customImage.height;
    const canvasRatio = CARD_WIDTH / CARD_HEIGHT;
    let drawW: number, drawH: number, drawX: number, drawY: number;

    if (imgRatio > canvasRatio) {
      drawH = CARD_HEIGHT;
      drawW = CARD_HEIGHT * imgRatio;
      drawX = (CARD_WIDTH - drawW) / 2;
      drawY = 0;
    } else {
      drawW = CARD_WIDTH;
      drawH = CARD_WIDTH / imgRatio;
      drawX = 0;
      drawY = (CARD_HEIGHT - drawH) / 2;
    }
    ctx.drawImage(customImage, drawX, drawY, drawW, drawH);

    // Dark overlay for text readability
    ctx.fillStyle = 'rgba(26, 20, 16, 0.65)';
    ctx.fillRect(0, 0, CARD_WIDTH, CARD_HEIGHT);
  } else {
    // Warm gradient background
    const gradient = ctx.createLinearGradient(0, 0, CARD_WIDTH, CARD_HEIGHT);
    gradient.addColorStop(0, '#1A1410');
    gradient.addColorStop(0.4, '#2A2018');
    gradient.addColorStop(1, '#3D2415');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, CARD_WIDTH, CARD_HEIGHT);

    // Subtle accent glow top-right
    const glow = ctx.createRadialGradient(
      CARD_WIDTH - 200, 100, 0,
      CARD_WIDTH - 200, 100, 400
    );
    glow.addColorStop(0, 'rgba(199, 91, 57, 0.15)');
    glow.addColorStop(1, 'rgba(199, 91, 57, 0)');
    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, CARD_WIDTH, CARD_HEIGHT);

    // Bottom accent line
    const lineGradient = ctx.createLinearGradient(60, 0, CARD_WIDTH - 60, 0);
    lineGradient.addColorStop(0, 'rgba(199, 91, 57, 0)');
    lineGradient.addColorStop(0.3, 'rgba(199, 91, 57, 0.6)');
    lineGradient.addColorStop(0.7, 'rgba(255, 107, 74, 0.6)');
    lineGradient.addColorStop(1, 'rgba(255, 107, 74, 0)');
    ctx.fillStyle = lineGradient;
    ctx.fillRect(60, CARD_HEIGHT - 80, CARD_WIDTH - 120, 2);
  }

  const textColor = customImage ? '#FFFFFF' : '#E8E0D8';
  const accentColor = '#FF6B4A';
  const mutedColor = customImage ? 'rgba(255,255,255,0.6)' : 'rgba(232, 224, 216, 0.5)';

  // "Wanderlust" branding — top left
  ctx.font = 'bold 28px Georgia, "Times New Roman", serif';
  ctx.fillStyle = accentColor;
  ctx.fillText('Wanderlust', 60, 60);

  // Compass emoji
  ctx.font = '24px sans-serif';
  ctx.fillText('🧭', 220, 60);

  // City name — big and bold
  ctx.font = 'bold 72px Georgia, "Times New Roman", serif';
  ctx.fillStyle = textColor;
  ctx.fillText(city.name, 60, 160);

  // State + distance badge
  ctx.font = '500 28px -apple-system, "Segoe UI", Roboto, sans-serif';
  ctx.fillStyle = mutedColor;
  const stateText = `${city.state}`;
  ctx.fillText(stateText, 60, 205);

  // Distance pill
  const distText = `${city.distance} mi`;
  const distMetrics = ctx.measureText(distText);
  const pillX = 60 + ctx.measureText(stateText + '  ').width;
  const pillW = distMetrics.width + 24;

  drawRoundedRect(ctx, pillX, 185, pillW, 30, 15);
  ctx.fillStyle = 'rgba(199, 91, 57, 0.3)';
  ctx.fill();
  ctx.font = 'bold 20px -apple-system, "Segoe UI", Roboto, sans-serif';
  ctx.fillStyle = accentColor;
  ctx.fillText(distText, pillX + 12, 206);

  // Weather hint
  ctx.font = '22px -apple-system, "Segoe UI", Roboto, sans-serif';
  ctx.fillStyle = city.weatherHint.includes('Great time')
    ? '#4A8A30'
    : mutedColor;
  ctx.fillText(city.weatherHint, 60, 260);

  // Blurb (first sentence, wrapped)
  const firstSentence = getFirstSentence(city.blurb);
  ctx.font = 'italic 24px Georgia, "Times New Roman", serif';
  ctx.fillStyle = customImage ? 'rgba(255,255,255,0.85)' : 'rgba(232, 224, 216, 0.8)';
  wrapText(ctx, `"${firstSentence}"`, 60, 310, CARD_WIDTH - 120, 34);

  // Vibe emojis
  const vibeEmojis = VIBES.filter((v) => city.vibes.includes(v.id))
    .map((v) => `${v.emoji} ${v.label}`)
    .join('   ');
  ctx.font = '22px -apple-system, "Segoe UI", Roboto, sans-serif';
  ctx.fillStyle = mutedColor;
  ctx.fillText(vibeEmojis, 60, 460);

  // Weather advisory if present
  if (city.weatherAdvisory) {
    ctx.font = '18px -apple-system, "Segoe UI", Roboto, sans-serif';
    ctx.fillStyle = 'rgba(255, 183, 77, 0.8)';
    ctx.fillText(`⚠️ ${city.weatherAdvisory}`, 60, 500);
  }

  // Footer
  ctx.font = '18px -apple-system, "Segoe UI", Roboto, sans-serif';
  ctx.fillStyle = customImage ? 'rgba(255,255,255,0.35)' : 'rgba(232, 224, 216, 0.3)';
  ctx.fillText(
    'wanderlust — your next adventure awaits',
    60,
    CARD_HEIGHT - 40
  );

  return canvas.toDataURL('image/png');
}
