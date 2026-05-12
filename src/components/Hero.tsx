"use client";

const PHONE = "(256) 415-7610";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Dark background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-[#0a0a0a]" />
      
      {/* Subtle red accent glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/5 rounded-full blur-[150px]" />
      <div className="absolute top-1/3 right-0 w-[300px] h-[300px] bg-accent/3 rounded-full blur-[100px]" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32 sm:py-40 w-full">
        <div className="max-w-3xl">
          {/* Section label */}
          <p className="section-label mb-6">
            Serving the Shoals Since 2011
          </p>
          
          <h1 className="font-heading font-800 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-white leading-[0.95] mb-8 tracking-tight">
            Crawl Space
            <br />
            <span className="text-accent">Encapsulation</span>
            <br />
            & Repair
          </h1>
          
          <p className="text-white/60 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl" style={{ fontFamily: 'var(--font-body)' }}>
            Alabama&apos;s 70%+ humidity is destroying your crawl space. We&apos;ve
            protected 2,000+ homes across Florence, Muscle Shoals, and the
            greater Shoals area from moisture damage, mold, and energy loss.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={`tel:${PHONE.replace(/[^\d+]/g, "")}`}
              className="inline-flex items-center justify-center gap-3 bg-accent hover:bg-accent-hover text-white font-heading font-bold text-lg px-10 py-4.5 rounded-sm transition-all duration-200 cta-glow"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Call {PHONE}
            </a>
            <a
              href="/#contact"
              className="inline-flex items-center justify-center gap-3 border border-white/20 hover:border-accent text-white hover:text-accent font-heading font-bold text-lg px-10 py-4.5 rounded-sm transition-all duration-200"
            >
              Get Free Estimate
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 scroll-indicator">
          <div className="flex flex-col items-center gap-2">
            <span className="text-white/30 text-xs font-heading tracking-widest uppercase">Scroll</span>
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-white/30" fill="none" stroke="currentColor" strokeWidth={1.5}>
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
