"use client";

const testimonials = [
  {
    name: "James & Linda H.",
    location: "Florence, AL",
    text: "We had musty smells coming from under our house for years. Shoals Crawl Space Encapsulation sealed our entire crawl space and the difference was immediate — no more musty odor and our energy bills dropped by 25%. Best home investment we've ever made.",
    rating: 5,
  },
  {
    name: "Michael T.",
    location: "Muscle Shoals, AL",
    text: "After noticing our floors were sagging, we called Shoals Crawl Space Encapsulation. They found significant wood rot from moisture damage and repaired the joists plus installed a full vapor barrier system. Our floors are solid again.",
    rating: 5,
  },
  {
    name: "Sarah K.",
    location: "Sheffield, AL",
    text: "We got three quotes for crawl space encapsulation. Shoals offered the best combination of quality materials, fair pricing, and warranty coverage. They used 20-mil barrier instead of the thin stuff other companies quoted. Excellent work.",
    rating: 5,
  },
  {
    name: "Robert M.",
    location: "Tuscumbia, AL",
    text: "Our 1940s home had a dirt crawl space with standing water after every rain. They installed a sump pump, encapsulated the entire space, and added a dehumidifier. It's been two years and the crawl space has stayed bone dry.",
    rating: 5,
  },
  {
    name: "Amanda R.",
    location: "Killen, AL",
    text: "Living outside of town, I was worried about finding a contractor willing to come out. They didn't hesitate. Found mold growing on our floor joists and remediated it completely. Fair price, quality work, left our property spotless.",
    rating: 5,
  },
  {
    name: "David W.",
    location: "Rogersville, AL",
    text: "Our heating bills were through the roof. Turns out our crawl space was letting in tons of humid air. After encapsulation, our energy bills dropped almost 30% and the house feels so much more comfortable. Highly recommend.",
    rating: 5,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1 mb-5">
      {Array.from({ length: rating }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="w-4 h-4 text-accent fill-current">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-24 sm:py-32 bg-[#0a0a0a] relative overflow-hidden">
      {/* Subtle red glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-20">
          <p className="section-label mb-4">(03) Testimonials</p>
          <h2 className="font-heading font-800 text-4xl sm:text-5xl lg:text-6xl text-white mb-6 max-w-3xl">
            What Our Customers Say
          </h2>
          <p className="text-[#9b9c9c] max-w-2xl text-lg leading-relaxed">
            Don&apos;t just take our word for it — hear from homeowners across the
            Shoals area who trust us with their crawl space needs.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="testimonial-card bg-white/5 border border-white/10 rounded-sm p-8"
            >
              <StarRating rating={t.rating} />
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="border-t border-white/10 pt-5">
                <p className="font-heading font-bold text-white text-sm">
                  {t.name}
                </p>
                <p className="text-[#9b9c9c] text-xs mt-0.5">
                  {t.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
