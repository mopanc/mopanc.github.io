interface BrandLogoProps {
  size?: number;
  className?: string;
  animated?: boolean;
}

/**
 * Jorge Morais — signature brand mark.
 *
 * Concept: a hexagonal "node" (silicon die / chip pad) containing an
 * interlocked J+M ligature. The horizontal traces evoke PCB routing /
 * neural connections — bridging embedded systems and AI.
 *
 * The mark is monochromatic (uses currentColor for traces and accent
 * for the node ring) so it adapts to any surface.
 */
export function BrandLogo({ size = 96, className = "", animated = true }: BrandLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Jorge Morais"
      role="img"
    >
      {/* Outer hexagon — the "die" */}
      <path
        d="M60 6 L106 33 L106 87 L60 114 L14 87 L14 33 Z"
        stroke="var(--color-brand)"
        strokeWidth="1.5"
        strokeLinejoin="round"
        opacity="0.45"
      />
      {/* Inner hexagon — chamber */}
      <path
        d="M60 22 L92 41 L92 79 L60 98 L28 79 L28 41 Z"
        stroke="var(--color-brand-glow)"
        strokeWidth="1"
        strokeLinejoin="round"
        opacity="0.7"
      />

      {/* PCB traces — left */}
      <g stroke="var(--color-brand)" strokeWidth="1.25" strokeLinecap="round" opacity="0.55">
        <path d="M2 60 L14 60" />
        <path d="M2 48 L8 48 L14 54" />
        <path d="M2 72 L8 72 L14 66" />
      </g>
      {/* PCB traces — right */}
      <g stroke="var(--color-brand)" strokeWidth="1.25" strokeLinecap="round" opacity="0.55">
        <path d="M106 60 L118 60" />
        <path d="M112 48 L118 48" />
        <path d="M112 72 L118 72" />
      </g>

      {/* Node dots */}
      <circle cx="2" cy="60" r="1.5" fill="var(--color-accent)" />
      <circle cx="118" cy="60" r="1.5" fill="var(--color-accent)" />
      <circle cx="60" cy="6" r="1.5" fill="var(--color-brand-glow)" />
      <circle cx="60" cy="114" r="1.5" fill="var(--color-brand-glow)" />

      {/* J + M ligature — custom geometric construction */}
      <g
        stroke="var(--color-foreground)"
        strokeWidth="3.5"
        strokeLinecap="square"
        strokeLinejoin="miter"
        fill="none"
      >
        {/* J — vertical stem with hook */}
        <path
          d="M44 38 L44 70 Q44 78 36 78 L34 78"
          className={animated ? "[stroke-dasharray:120] [stroke-dashoffset:120] animate-stroke-draw" : ""}
        />
        {/* J — top serif */}
        <path
          d="M38 38 L52 38"
          className={animated ? "[stroke-dasharray:20] [stroke-dashoffset:20] animate-stroke-draw [animation-delay:0.2s]" : ""}
        />
        {/* M — left stem */}
        <path
          d="M60 78 L60 38"
          className={animated ? "[stroke-dasharray:50] [stroke-dashoffset:50] animate-stroke-draw [animation-delay:0.4s]" : ""}
        />
        {/* M — diagonal down */}
        <path
          d="M60 38 L74 62"
          className={animated ? "[stroke-dasharray:40] [stroke-dashoffset:40] animate-stroke-draw [animation-delay:0.6s]" : ""}
        />
        {/* M — diagonal up */}
        <path
          d="M74 62 L88 38"
          className={animated ? "[stroke-dasharray:40] [stroke-dashoffset:40] animate-stroke-draw [animation-delay:0.8s]" : ""}
        />
        {/* M — right stem */}
        <path
          d="M88 38 L88 78"
          className={animated ? "[stroke-dasharray:50] [stroke-dashoffset:50] animate-stroke-draw [animation-delay:1s]" : ""}
        />
      </g>

      {/* Accent dot — the "spark" / cursor */}
      <circle
        cx="74"
        cy="62"
        r="2.5"
        fill="var(--color-accent)"
        className={animated ? "animate-glow-pulse origin-center" : ""}
        style={{ filter: "drop-shadow(0 0 6px var(--color-accent))" }}
      />
    </svg>
  );
}

/**
 * Wordmark — "Jorge Morais" with refined custom kerning.
 */
export function BrandWordmark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-display font-bold tracking-tight inline-flex items-baseline ${className}`}
    >
      <span className="text-foreground">jorge</span>
      <span className="mx-[0.12em] text-accent">·</span>
      <span className="text-foreground">morais</span>
    </span>
  );
}

/**
 * Lockup — mark + wordmark, the canonical signature.
 */
export function BrandLockup({
  size = 56,
  className = "",
  animated = true,
}: {
  size?: number;
  className?: string;
  animated?: boolean;
}) {
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <BrandLogo size={size} animated={animated} />
      <div className="flex flex-col leading-none">
        <BrandWordmark className="text-xl" />
        <span className="mt-1 text-[10px] font-mono uppercase tracking-[0.25em] text-muted-foreground">
          Engineer · AI · Embedded
        </span>
      </div>
    </div>
  );
}
