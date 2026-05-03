import { BrandLogo } from "./BrandLogo";

export function Hero() {
  return (
    <section className="relative min-h-dvh flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background atmospherics */}
      <div className="absolute inset-0 bg-grid pointer-events-none opacity-60" aria-hidden />
      <div
        className="absolute -top-40 -left-40 w-[36rem] h-[36rem] rounded-full bg-brand/20 blur-3xl animate-glow-pulse"
        aria-hidden
      />
      <div
        className="absolute bottom-0 right-0 w-[40rem] h-[40rem] rounded-full bg-accent/10 blur-3xl animate-glow-pulse"
        style={{ animationDelay: "1.5s" }}
        aria-hidden
      />

      <div className="relative z-10 container mx-auto max-w-6xl px-6 grid lg:grid-cols-[1.2fr_1fr] gap-16 items-center">
        <div className="flex flex-col gap-y-7">
          <span
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-accent animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="h-px w-8 bg-accent" />
            Full Stack · AI · Embedded
          </span>

          <h1
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight animate-fade-up"
            style={{ animationDelay: "0.25s" }}
          >
            Building <span className="text-gradient-brand">intelligent</span>
            <br />
            systems, end&#8209;to&#8209;end.
          </h1>

          <p
            className="text-lg lg:text-xl text-muted-foreground max-w-2xl leading-relaxed animate-fade-up"
            style={{ animationDelay: "0.45s" }}
          >
            Sou <span className="text-foreground font-medium">Jorge Morais</span> — full stack
            developer focado em IA, sistemas embebidos e investigação. Do circuito ao
            cloud: Node.js, React, Linux, Raspberry Pi.
          </p>

          <div
            className="flex flex-wrap gap-3 pt-2 animate-fade-up"
            style={{ animationDelay: "0.65s" }}
          >
            <a
              href="#work"
              className="px-6 py-3 rounded-full bg-brand text-brand-foreground font-medium shadow-lg shadow-brand/30 hover:shadow-brand/50 hover:-translate-y-0.5 transition-all"
            >
              View work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full border border-border bg-surface-elevated/60 backdrop-blur text-foreground font-medium hover:border-brand/50 hover:bg-surface-elevated transition-all"
            >
              Get in touch →
            </a>
          </div>
        </div>

        {/* Monogram showcase */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-[22rem] h-[22rem] sm:w-[26rem] sm:h-[26rem]">
            {/* Orbiting ring */}
            <div className="absolute inset-0 rounded-full border border-brand/20 animate-orbit" aria-hidden>
              <span className="absolute -top-1 left-1/2 -translate-x-1/2 h-2 w-2 rounded-full bg-accent shadow-[0_0_20px] shadow-accent" />
            </div>
            <div
              className="absolute inset-6 rounded-full border border-brand/15 animate-orbit"
              style={{ animationDirection: "reverse", animationDuration: "30s" }}
              aria-hidden
            >
              <span className="absolute -top-1 left-1/2 -translate-x-1/2 h-1.5 w-1.5 rounded-full bg-brand-glow" />
            </div>

            {/* Center monogram card */}
            <div className="absolute inset-12 rounded-3xl bg-surface-elevated/70 backdrop-blur-xl glow-brand flex items-center justify-center overflow-hidden">
              <div
                className="absolute inset-x-0 h-24 bg-gradient-to-b from-brand-glow/40 via-brand/20 to-transparent animate-scan"
                aria-hidden
              />
              <BrandLogo size={220} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
