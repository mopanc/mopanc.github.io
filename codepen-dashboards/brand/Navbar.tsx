import { Link } from "@tanstack/react-router";
import { BrandLockup } from "./BrandLogo";

const links = [
  { href: "#about", label: "About" },
  { href: "#stack", label: "Stack" },
  { href: "#work", label: "Work" },
  { href: "/brand", label: "Brand", external: true },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border/50">
      <nav className="container mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center group">
          <BrandLockup size={36} animated={false} />
        </Link>
        <ul className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {links.map((l) =>
            l.external ? (
              <li key={l.href}>
                <Link
                  to={l.href}
                  className="relative hover:text-foreground transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-brand after:transition-all hover:after:w-full"
                >
                  {l.label}
                </Link>
              </li>
            ) : (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="relative hover:text-foreground transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-brand after:transition-all hover:after:w-full"
                >
                  {l.label}
                </a>
              </li>
            ),
          )}
        </ul>
        <a
          href="#contact"
          className="text-sm px-4 py-2 rounded-full bg-brand text-brand-foreground font-medium hover:bg-brand/90 transition-colors"
        >
          Let's talk
        </a>
      </nav>
    </header>
  );
}
