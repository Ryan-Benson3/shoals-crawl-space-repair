"use client";

import Link from "next/link";

const areas = [
  { name: "Florence", slug: "florence-al" },
  { name: "Muscle Shoals", slug: "muscle-shoals-al" },
  { name: "Sheffield", slug: "sheffield-al" },
  { name: "Tuscumbia", slug: "tuscumbia-al" },
  { name: "Killen", slug: "killen-al" },
  { name: "Rogersville", slug: "rogersville-al" },
  { name: "Lexington", slug: "lexington-al" },
  { name: "Anderson", slug: "anderson-al" },
  { name: "Town Creek", slug: "town-creek-al" },
  { name: "Leighton", slug: "leighton-al" },
  { name: "Russellville", slug: "russellville-al" },
  { name: "Haleyville", slug: "haleyville-al" },
  { name: "Moulton", slug: "moulton-al" },
  { name: "Lawrenceburg", slug: "lawrenceburg-al" },
  { name: "Loretto", slug: "loretto-tn" },
];

export default function ServiceAreas() {
  return (
    <section id="areas" className="py-24 sm:py-32 bg-[#f4f4f2]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-20">
          <p className="section-label mb-4">(05) Service Areas</p>
          <h2 className="font-heading font-800 text-4xl sm:text-5xl lg:text-6xl text-[#0a0a0a] mb-6 max-w-3xl">
            Serving the Greater Shoals Area
          </h2>
          <p className="text-[#9b9c9c] max-w-2xl text-lg leading-relaxed">
            Proudly serving homeowners within 60 miles of Florence,
            Alabama. If you&apos;re in the Shoals area, we&apos;ve got your crawl space covered.
          </p>
        </div>

        {/* Areas grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-3">
          {areas.map((a) => (
            <Link
              key={a.slug}
              href={`/areas/${a.slug}`}
              className="area-card bg-white rounded-sm p-5 text-center border border-black/5"
            >
              <svg
                viewBox="0 0 24 24"
                className="area-icon w-5 h-5 mx-auto mb-2 text-accent transition-colors"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span className="font-heading font-bold text-sm text-[#0a0a0a] transition-colors">
                {a.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
