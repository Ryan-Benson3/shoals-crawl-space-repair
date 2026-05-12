"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
  { label: "Areas", href: "/#areas" },
  { label: "Contact", href: "/#contact" },
];

const PHONE = "(256) 415-7610";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0a0a0a]/95 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-accent rounded-sm flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="currentColor">
                <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" />
              </svg>
            </div>
            <div className="leading-none">
              <span className="text-white font-heading font-bold text-lg tracking-tight block">
                Shoals Crawl Space
              </span>
              <span className="text-accent font-heading text-[10px] font-medium tracking-[0.2em] uppercase block mt-0.5">
                Encapsulation
              </span>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-white/70 hover:text-white font-heading font-medium text-sm tracking-wide transition-colors duration-200"
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-4">
            <a
              href={`tel:${PHONE.replace(/[^\d+]/g, "")}`}
              className="hidden sm:inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-heading font-bold text-sm px-6 py-2.5 rounded-sm transition-all duration-200 cta-glow"
            >
              Free Estimate
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 text-white hover:text-accent transition-colors"
              aria-label="Toggle menu"
            >
              {open ? (
                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-[#0a0a0a]/98 backdrop-blur-lg border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-1">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-white/80 hover:text-white hover:bg-white/5 font-heading font-medium text-lg py-3 px-4 rounded-sm transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={`tel:${PHONE.replace(/[^\d+]/g, "")}`}
              className="mt-4 flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white font-heading font-bold text-lg px-6 py-4 rounded-sm transition-all cta-glow"
            >
              Free Estimate — Call {PHONE}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
