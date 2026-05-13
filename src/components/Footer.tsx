"use client";

import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

const PHONE = "(256) 415-7610";
const EMAIL = "info@shoalscrawlspacerepair.com";

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
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-green flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="currentColor">
                  <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" />
                </svg>
              </div>
              <div className="leading-tight">
                <span className="text-white font-bold text-lg tracking-tight">
                  Shoals Crawl Space
                </span>
                <span className="block text-green text-[10px] font-bold -mt-0.5 tracking-[0.2em] uppercase">
                  Encapsulation
                </span>
              </div>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed mb-5">
              Your Home&apos;s Protection. Our Mission. Serving the Shoals area with
              professional crawl space moisture control since 2011.
            </p>
            <div className="space-y-3">
              <a
                href={`tel:${PHONE.replace(/[^\d+]/g, "")}`}
                className="flex items-center gap-2 text-green hover:text-green-light font-semibold text-sm transition-colors"
              >
                <Phone size={14} />
                {PHONE}
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-2 text-white/40 hover:text-green text-sm transition-colors"
              >
                <Mail size={14} />
                {EMAIL}
              </a>
              <div className="flex items-center gap-2 text-white/40 text-sm">
                <MapPin size={14} />
                Florence, AL
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-sm tracking-wider uppercase text-white/70 mb-5">
              Services
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-white/40 hover:text-green text-sm transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h4 className="font-bold text-sm tracking-wider uppercase text-white/70 mb-5">
              Areas Served
            </h4>
            <ul className="space-y-2.5">
              {areaLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-white/40 hover:text-green text-sm transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-sm tracking-wider uppercase text-white/70 mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/" className="text-white/40 hover:text-green text-sm transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-white/40 hover:text-green text-sm transition-colors">
                  Contact
                </Link>
              </li>
            </ul>

            <h4 className="font-bold text-sm tracking-wider uppercase text-white/70 mt-8 mb-3">
              Hours
            </h4>
            <div className="text-white/40 text-sm space-y-1">
              <p>Mon – Fri: 7:00 AM – 6:00 PM</p>
              <p>Saturday: 8:00 AM – 2:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-sm">
            © {year} Shoals Crawl Space Encapsulation. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">
            Licensed &amp; Insured Crawl Space Contractor • Florence, Alabama
          </p>
        </div>
      </div>
    </footer>
  );
}
