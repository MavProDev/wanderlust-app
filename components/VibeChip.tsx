'use client';

interface VibeChipProps {
  id: string;
  label: string;
  emoji: string;
  selected: boolean;
  onToggle: (id: string) => void;
}

export default function VibeChip({
  id,
  label,
  emoji,
  selected,
  onToggle,
}: VibeChipProps) {
  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={selected}
      onClick={() => onToggle(id)}
      className={`
        focus-ring inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm
        transition-all duration-150 cursor-pointer select-none
        ${
          selected
            ? 'bg-terracotta text-white scale-105 vibe-glow'
            : 'border border-sage text-charcoal hover:border-terracotta'
        }
      `}
    >
      <span aria-hidden="true">{emoji}</span>
      <span>{label}</span>
    </button>
  );
}
