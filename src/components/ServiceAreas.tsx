"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

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
  { name: "Lawrenceburg", slug: "lawrenceburg-tn" },
  { name: "Loretto", slug: "loretto-tn" },
];

export default function ServiceAreas() {
  return (
    <section id="areas" className="py-24 sm:py-32 bg-charcoal relative overflow-hidden">
      <div className="absolute inset-0 hero-pattern opacity-10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-green font-bold text-xs tracking-[0.15em] uppercase mb-4">
            Service Areas
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            Serving the Greater Shoals Area
          </h2>
          <div className="section-divider w-24 mx-auto mb-6" />
          <p className="text-white/50 max-w-2xl mx-auto text-lg">
            Proudly serving homeowners across 15+ communities
            throughout the Shoals region and surrounding areas.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {areas.map((a, i) => (
            <motion.div
              key={a.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
            >
              <Link
                href={`/areas/${a.slug}`}
                className="bg-white/5 border border-white/10 hover:bg-green hover:border-green text-white rounded-xl p-5 text-center font-semibold transition-all group flex flex-col items-center gap-2"
              >
                <MapPin size={20} className="text-green group-hover:text-white transition-colors" />
                {a.name}
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-10"
        >
          <p className="text-white/35 text-sm">
            Also serving: Decatur • Athens • Madison • Huntsville and all
            communities within 60 miles of Florence, AL
          </p>
        </motion.div>
      </div>
    </section>
  );
}
