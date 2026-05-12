"use client";

import { motion } from "framer-motion";
import {
  Zap,
  MapPin,
  FileCheck,
  BadgeCheck,
} from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Fast Turnaround",
    desc: "Most crawl space encapsulations completed in 2-4 days. We respect your time and minimize disruption to your daily life.",
  },
  {
    icon: MapPin,
    title: "Local Expertise",
    desc: "We know the Shoals area climate, soil conditions, and crawl space challenges inside and out. Local knowledge means better results.",
  },
  {
    icon: FileCheck,
    title: "Written Warranties",
    desc: "Every project backed by our workmanship warranty plus manufacturer coverage. Transferable to new homeowners.",
  },
  {
    icon: BadgeCheck,
    title: "Premium Materials",
    desc: "We use only commercial-grade vapor barriers, dehumidifiers, and drainage systems — built to last decades, not years.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-green font-bold text-xs tracking-[0.15em] uppercase mb-4">
            The Shoals Crawl Space Difference
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-charcoal mb-4">
            Why Choose Us
          </h2>
          <div className="section-divider w-24 mx-auto" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center p-8 rounded-2xl bg-charcoal border border-charcoal-lighter hover:border-green/30 transition-all group"
            >
              <div className="w-16 h-16 bg-green/10 text-green rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-green group-hover:text-white transition-all">
                <r.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {r.title}
              </h3>
              <p className="text-white/50 leading-relaxed text-sm">
                {r.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
