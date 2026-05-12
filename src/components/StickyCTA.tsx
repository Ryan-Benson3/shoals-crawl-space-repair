"use client";

import { Phone } from "lucide-react";

const PHONE = "(256) 415-7610";

export default function StickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-charcoal/95 backdrop-blur-md border-t border-white/10 px-4 py-3 flex gap-3">
      <a
        href={`tel:${PHONE.replace(/[^\d+]/g, "")}`}
        className="flex-1 flex items-center justify-center gap-2 bg-green hover:bg-green-light text-white font-bold py-3 rounded-xl transition-colors"
      >
        <Phone size={18} />
        Call Now
      </a>
      <a
        href="#contact"
        className="flex-1 flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold py-3 rounded-xl transition-colors border border-white/20"
      >
        Free Inspection
      </a>
    </div>
  );
}
