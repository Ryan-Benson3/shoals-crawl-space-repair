"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "James & Linda H.",
    location: "Florence, AL",
    text: "We had musty smells coming from under our house for years. Shoals Crawl Space Encapsulation sealed our entire crawl space and the difference was immediate — no more musty odor and our energy bills dropped by 25%.",
    rating: 5,
  },
  {
    name: "Michael T.",
    location: "Muscle Shoals, AL",
    text: "After noticing our floors were sagging, they found significant wood rot from moisture damage. They repaired the joists plus installed a full vapor barrier system. Our floors are solid again. Highly recommend!",
    rating: 5,
  },
  {
    name: "Sarah K.",
    location: "Sheffield, AL",
    text: "We got three quotes for crawl space encapsulation. Shoals offered the best combination of quality materials, fair pricing, and warranty coverage. They used 20-mil barrier instead of the thin stuff others quoted.",
    rating: 5,
  },
  {
    name: "Robert M.",
    location: "Tuscumbia, AL",
    text: "Our 1940s home had a dirt crawl space with standing water after every rain. They installed a sump pump, encapsulated the entire space, and added a dehumidifier. It's been two years and it's stayed bone dry.",
    rating: 5,
  },
  {
    name: "Amanda R.",
    location: "Killen, AL",
    text: "Living outside of town, I was worried about finding a contractor willing to come out. They didn't hesitate. Found mold growing on our floor joists and remediated it completely. Fair price, quality work.",
    rating: 5,
  },
  {
    name: "David W.",
    location: "Rogersville, AL",
    text: "Our heating bills were through the roof. Turns out our crawl space was letting in tons of humid air. After encapsulation, our energy bills dropped almost 30% and the house feels so much more comfortable.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 sm:py-32 bg-charcoal relative overflow-hidden">
      <div className="absolute inset-0 hero-pattern opacity-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-green/5 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-green font-bold text-xs tracking-[0.15em] uppercase mb-4">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            What Our Customers Say
          </h2>
          <div className="section-divider w-24 mx-auto mb-6" />
          <p className="text-white/50 max-w-2xl mx-auto text-lg">
            Hear from homeowners across the Shoals area who trust us with their crawl space needs.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:border-green/30 transition-all relative"
            >
              <Quote size={32} className="text-green/20 absolute top-6 right-6" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={16} className="text-green fill-green" />
                ))}
              </div>
              <p className="text-white/70 leading-relaxed mb-6 text-sm">
                &ldquo;{t.text}&rdquo;
              </p>
              <div>
                <p className="text-white font-bold">{t.name}</p>
                <p className="text-white/40 text-sm">{t.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
