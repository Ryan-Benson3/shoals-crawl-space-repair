"use client";

import Link from "next/link";

const trustPoints = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Licensed & Insured",
    desc: "Fully licensed in Alabama with comprehensive liability and workers' comp insurance.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
      </svg>
    ),
    title: "Moisture Experts",
    desc: "Over 15 years of crawl space moisture control expertise serving the Shoals area.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
    title: "5-Star Reputation",
    desc: "Hundreds of satisfied customers and a 4.9-star average rating across the Shoals.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
    title: "Written Warranty",
    desc: "Every project backed by our workmanship warranty plus manufacturer coverage.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left column */}
          <div>
            <p className="section-label mb-4">(02) About Us</p>
            <h2 className="font-heading font-800 text-4xl sm:text-5xl text-[#0a0a0a] mb-8 leading-tight">
              The Shoals Area&apos;s Most Trusted Crawl Space Experts
            </h2>
            <p className="text-[#0a0a0a]/70 text-lg leading-relaxed mb-6">
              Since 2011, Shoals Crawl Space Encapsulation has been protecting homes
              throughout Florence, Muscle Shoals, Sheffield, Tuscumbia, and
              surrounding communities from the damaging effects of crawl space
              moisture. Alabama&apos;s 70%+ average humidity creates the perfect
              environment for mold, wood rot, and energy loss — and we&apos;re
              the team that stops it.
            </p>
            <p className="text-[#0a0a0a]/70 text-lg leading-relaxed mb-10">
              Our team of certified moisture control specialists brings over 15
              years of combined experience to every project. Whether you need a
              complete crawl space encapsulation, a new vapor barrier, sump pump
              installation, or structural repair, we have the expertise and
              dedication to deliver lasting results.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-3 bg-[#0a0a0a] hover:bg-accent text-white font-heading font-bold px-10 py-4.5 rounded-sm transition-all duration-300"
            >
              Get Your Free Estimate
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Right column — trust grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {trustPoints.map((p) => (
              <div
                key={p.title}
                className="bg-[#f4f4f2] rounded-sm p-7 hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="text-accent mb-4 transition-transform duration-300 group-hover:scale-110">
                  {p.icon}
                </div>
                <h3 className="font-heading font-bold text-[#0a0a0a] text-lg mb-2">
                  {p.title}
                </h3>
                <p className="text-[#9b9c9c] text-sm leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
