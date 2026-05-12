"use client";

const stats = [
  { value: "2,000+", label: "Homes Protected" },
  { value: "15+", label: "Years Experience" },
  { value: "30%", label: "Energy Savings" },
  { value: "4.9★", label: "Customer Rating" },
];

export default function StatsBar() {
  return (
    <section className="bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((s, i) => (
            <div key={s.label} className="text-center">
              <div className="font-heading font-800 text-4xl sm:text-5xl text-white mb-2">
                {s.value}
              </div>
              <div className="text-text-muted text-sm font-heading font-medium tracking-wide uppercase">
                {s.label}
              </div>
              {i < stats.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-white/10" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
