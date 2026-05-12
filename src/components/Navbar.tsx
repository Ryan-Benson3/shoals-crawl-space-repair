"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Menu, X, Home, Wrench, MapPin, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const PHONE = "(256) 415-7610";

const navLinks = [
  { label: "Home", href: "/", icon: Home },
  { label: "Services", href: "/services/encapsulation", icon: Wrench },
  { label: "Areas", href: "/areas/florence-al", icon: MapPin },
  { label: "Contact", href: "/#contact", icon: Mail },
];

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-charcoal/95 backdrop-blur-md shadow-xl shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-lg bg-green flex items-center justify-center group-hover:bg-green-light transition-colors">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
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

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-white/70 hover:text-green font-medium text-sm transition-colors relative group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green transition-all group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${PHONE.replace(/[^\d+]/g, "")}`}
              className="hidden sm:inline-flex items-center gap-2 bg-green hover:bg-green-light text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors shadow-lg shadow-green/25"
            >
              <Phone size={16} />
              {PHONE}
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden text-white/80 hover:text-white p-2"
              aria-label="Toggle menu"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-charcoal-light border-t border-white/10"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 text-white/80 hover:text-green hover:bg-white/5 font-medium text-base py-3 px-4 rounded-lg transition-colors"
                >
                  <l.icon size={18} />
                  {l.label}
                </Link>
              ))}
              <a
                href={`tel:${PHONE.replace(/[^\d+]/g, "")}`}
                className="mt-2 flex items-center justify-center gap-2 bg-green hover:bg-green-light text-white font-semibold text-base px-5 py-3 rounded-lg transition-colors"
              >
                <Phone size={18} />
                {PHONE}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
