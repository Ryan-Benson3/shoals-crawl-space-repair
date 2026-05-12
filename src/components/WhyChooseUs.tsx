"use client";

const reasons = [
  {
    number: "01",
    title: "Licensed & Insured",
    description:
      "Fully licensed crawl space contractor with comprehensive liability insurance and workers' comp. Your home and our crew are fully protected on every job.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Moisture Experts",
    description:
      "Over 15 years of crawl space moisture control experience in the Shoals area. We understand Alabama's humidity challenges and know exactly how to solve them permanently.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Written Warranty",
    description:
      "Every crawl space project comes with a written warranty on materials and labor. Our warranties are transferable to new homeowners, adding value to your property.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Transparent Pricing",
    description:
      "Detailed, honest estimates with no hidden fees or surprise charges. We walk you through every line item so you know exactly where your investment goes.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 sm:py-32 bg-[#000000] relative overflow-hidden">
      {/* Subtle red glow */}
      <div className="absolute -top-32 -right-32 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-20">
          <p className="section-label mb-4">(04) Why Choose Us</p>
          <h2 className="font-heading font-800 text-4xl sm:text-5xl lg:text-6xl text-white mb-6 max-w-3xl">
            The Shoals Crawl Space
            <br />
            <span className="text-accent">Difference</span>
          </h2>
        </div>

        {/* Reasons grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((r) => (
            <div
              key={r.number}
              className="flex gap-6 p-8 rounded-sm bg-white/5 border border-white/10 hover:border-accent/30 transition-all duration-300 group"
            >
              <div className="shrink-0">
                <div className="w-14 h-14 bg-accent/10 text-accent rounded-sm flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  {r.icon}
                </div>
              </div>
              <div>
                <p className="text-accent text-xs font-heading font-medium tracking-widest uppercase mb-2">
                  {r.number}
                </p>
                <h3 className="font-heading font-bold text-xl text-white mb-3">
                  {r.title}
                </h3>
                <p className="text-[#9b9c9c] leading-relaxed text-sm">
                  {r.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
