"use client";

import Link from "next/link";

const PHONE = "(256) 415-7610";
const EMAIL = "info@theflooringfolks.com";

const serviceLinks = [
  { label: "Crawl Space Encapsulation", href: "/services/encapsulation" },
  { label: "Vapor Barrier Installation", href: "/services/vapor-barrier" },
  { label: "Crawl Space Waterproofing", href: "/services/crawl-space-waterproofing" },
  { label: "Crawl Space Repair", href: "/services/crawl-space-repair" },
  { label: "Moisture Control", href: "/services/moisture-control" },
  { label: "Sump Pump Installation", href: "/services/sump-pump" },
  { label: "Crawl Space Insulation", href: "/services/crawl-space-insulation" },
  { label: "Drainage Systems", href: "/services/drainage-systems" },
];

const areaLinks = [
  { label: "Florence, AL", href: "/areas/florence-al" },
  { label: "Muscle Shoals, AL", href: "/areas/muscle-shoals-al" },
  { label: "Sheffield, AL", href: "/areas/sheffield-al" },
  { label: "Tuscumbia, AL", href: "/areas/tuscumbia-al" },
  { label: "Killen, AL", href: "/areas/killen-al" },
  { label: "Rogersville, AL", href: "/areas/rogersville-al" },
  { label: "Russellville, AL", href: "/areas/russellville-al" },
  { label: "Moulton, AL", href: "/areas/moulton-al" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#000000] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
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
            <p className="text-white/40 text-sm leading-relaxed mb-6">
              Your Home&apos;s Protection. Our Mission. Serving the Shoals area with
              professional crawl space moisture control since 2011.
            </p>
            <div className="space-y-3">
              <a
                href={`tel:${PHONE.replace(/[^\d+]/g, "")}`}
                className="flex items-center gap-3 text-accent hover:text-white font-heading font-bold text-sm transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                {PHONE}
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-3 text-white/40 hover:text-white text-sm transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                {EMAIL}
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-xs tracking-[0.2em] uppercase text-white/60 mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-white/40 hover:text-accent text-sm transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h4 className="font-heading font-bold text-xs tracking-[0.2em] uppercase text-white/60 mb-6">
              Areas Served
            </h4>
            <ul className="space-y-3">
              {areaLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-white/40 hover:text-accent text-sm transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours & Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-xs tracking-[0.2em] uppercase text-white/60 mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3 mb-10">
              <li>
                <Link href="/" className="text-white/40 hover:text-accent text-sm transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-white/40 hover:text-accent text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-white/40 hover:text-accent text-sm transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-white/40 hover:text-accent text-sm transition-colors">
                  Contact
                </Link>
              </li>
            </ul>

            <h4 className="font-heading font-bold text-xs tracking-[0.2em] uppercase text-white/60 mb-4">
              Business Hours
            </h4>
            <div className="text-white/40 text-sm space-y-1.5">
              <p>Mon – Fri: 7:00 AM – 6:00 PM</p>
              <p>Saturday: 8:00 AM – 2:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm font-heading">
            © {year} Shoals Crawl Space Encapsulation. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-white/20 hover:text-white/50 text-xs transition-colors">
              Privacy Policy
            </Link>
            <span className="text-white/10 text-xs">
              Licensed &amp; Insured · Florence, Alabama
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
