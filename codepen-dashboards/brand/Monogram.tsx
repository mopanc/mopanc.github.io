interface MonogramProps {
  size?: number;
  className?: string;
}

/**
 * JM monogram — animated, layered with quantum chromatic divergence.
 * Uses brand tokens from the design system.
 */
export function Monogram({ size = 64, className = "" }: MonogramProps) {
  return (
    <div
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
      aria-label="Jorge Morais — JM monogram"
    >
      {/* Glow halo */}
      <div
        className="absolute inset-0 rounded-2xl bg-brand/40 blur-2xl animate-glow-pulse"
        aria-hidden
      />
      {/* Outer frame */}
      <div className="absolute inset-0 rounded-xl border border-brand/30 bg-surface-elevated/60 backdrop-blur-sm" />

      {/* Layered JM letters */}
      <span
        className="absolute font-display font-bold text-brand-glow/70 animate-monogram-reveal"
        style={{ fontSize: size * 0.42, mixBlendMode: "screen" }}
      >
        JM
      </span>
      <span
        className="relative font-display font-bold text-foreground animate-monogram-reveal"
        style={{ fontSize: size * 0.42, animationDelay: "0.15s" }}
      >
        JM
      </span>
    </div>
  );
}
