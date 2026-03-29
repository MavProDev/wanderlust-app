'use client';

import { useState, useEffect, useRef } from 'react';
import type { ScoredCity } from '@/lib/types';
import { generateShareCard } from '@/lib/canvasCard';
import {
  buildTweetIntentUrl,
  buildShareText,
  copyToClipboard,
  downloadImage,
} from '@/lib/shareUtils';

interface ShareCardProps {
  city: ScoredCity;
  onClose: () => void;
}

export default function ShareCard({ city, onClose }: ShareCardProps) {
  const [cardDataUrl, setCardDataUrl] = useState<string | null>(null);
  const [customImage, setCustomImage] = useState<HTMLImageElement | null>(null);
  const [copied, setCopied] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [xHint, setXHint] = useState(false);
  const backdropRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Generate card on mount or when custom image changes
  useEffect(() => {
    const dataUrl = generateShareCard(city, customImage);
    setCardDataUrl(dataUrl);
  }, [city, customImage]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === backdropRef.current) {
      onClose();
    }
  };

  const handleDownload = () => {
    if (!cardDataUrl) return;
    setDownloading(true);
    const filename = `wanderlust-${city.name.toLowerCase().replace(/\s+/g, '-')}.png`;
    downloadImage(cardDataUrl, filename);
    setTimeout(() => setDownloading(false), 1000);
  };

  const handleShareToX = async () => {
    if (!cardDataUrl) return;

    // Try copying image to clipboard so user can paste in X
    try {
      const res = await fetch(cardDataUrl);
      const blob = await res.blob();
      await navigator.clipboard.write([
        new ClipboardItem({ 'image/png': blob }),
      ]);
    } catch {
      // Fallback: just download if clipboard image not supported
    }

    // Also download as backup
    handleDownload();

    // Show hint
    setXHint(true);

    // Open tweet intent after brief delay so user sees the hint
    setTimeout(() => {
      const url = buildTweetIntentUrl(city);
      window.open(url, '_blank', 'noopener,noreferrer');
    }, 600);
  };

  const handleCopyText = async () => {
    const text = buildShareText(city);
    const success = await copyToClipboard(text);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleCustomImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        setCustomImage(img);
      };
      img.src = reader.result as string;
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveCustomImage = () => {
    setCustomImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  // Close on Escape + focus trap
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }

      // Focus trap: Tab cycles within dialog
      if (e.key === 'Tab' && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    // Auto-focus the dialog on mount
    dialogRef.current?.focus();

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div
      ref={backdropRef}
      onClick={handleBackdropClick}
      className="share-backdrop fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      role="dialog"
      aria-modal="true"
      aria-label={`Share ${city.name}`}
    >
      <div
        ref={dialogRef}
        tabIndex={-1}
        className="bg-cream rounded-2xl shadow-2xl max-w-lg w-full p-6 relative max-h-[90vh] overflow-y-auto outline-none"
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close share dialog"
          className="focus-ring absolute top-4 right-4 text-charcoal/60 hover:text-charcoal text-xl leading-none p-1"
        >
          {'\u2715'}
        </button>

        <h3 className="font-display font-bold text-lg text-charcoal mb-4">
          Share {city.name}
        </h3>

        {/* Card preview */}
        {cardDataUrl ? (
          <div className="rounded-xl overflow-hidden shadow-md mb-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={cardDataUrl}
              alt={`Share card for ${city.name}, ${city.state}`}
              className="w-full h-auto"
            />
          </div>
        ) : (
          <div className="w-full aspect-[1200/630] rounded-xl bg-sand animate-shimmer mb-4" />
        )}

        {/* Custom image upload */}
        <div className="mb-4">
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleCustomImage}
            className="hidden"
            id="custom-card-image"
          />
          {customImage ? (
            <div className="flex items-center gap-2">
              <span className="text-xs text-sage">
                Using your photo
              </span>
              <button
                type="button"
                onClick={handleRemoveCustomImage}
                className="focus-ring text-xs text-coral hover:underline"
              >
                Remove
              </button>
            </div>
          ) : (
            <label
              htmlFor="custom-card-image"
              className="focus-ring inline-flex items-center gap-1.5 text-xs text-sage hover:text-terracotta cursor-pointer transition-colors"
            >
              {'\u{1F4F7}'} Use your own photo as background
            </label>
          )}
        </div>

        {/* Action buttons */}
        <div className="flex flex-col gap-2">
          <button
            type="button"
            onClick={handleShareToX}
            className="focus-ring w-full py-2.5 rounded-lg bg-[#1DA1F2] text-white font-medium text-sm hover:bg-[#1a8cd8] transition-colors flex items-center justify-center gap-2"
          >
            {xHint ? '\u2713 Card copied & downloaded!' : '\u{1D54F} Share to X'}
          </button>
          {xHint && (
            <p className="text-xs text-center text-terracotta font-medium animate-fadeIn">
              Paste (Ctrl+V) or attach the downloaded card to your tweet!
            </p>
          )}

          <button
            type="button"
            onClick={handleDownload}
            className="focus-ring w-full py-2.5 rounded-lg bg-terracotta text-white font-medium text-sm hover:opacity-90 transition-opacity"
          >
            {downloading ? '\u2713 Downloaded!' : '\u{1F4E5} Download Card'}
          </button>

          <button
            type="button"
            onClick={handleCopyText}
            className="focus-ring w-full py-2.5 rounded-lg border border-sage/30 text-charcoal font-medium text-sm hover:bg-sage/10 transition-colors"
          >
            {copied ? '\u2713 Copied!' : '\u{1F4CB} Copy Text'}
          </button>
        </div>
      </div>
    </div>
  );
}
