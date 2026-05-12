"use client";

import { motion } from "framer-motion";
import { Calendar, Home, Shield, Star } from "lucide-react";

const stats = [
  { icon: Home, value: "2,000+", label: "Homes Protected" },
  { icon: Calendar, value: "15+", label: "Years Experience" },
  { icon: Shield, value: "30%", label: "Energy Savings" },
  { icon: Star, value: "4.9★", label: "Customer Rating" },
];

export default function StatsBar() {
  return (
    <section className="bg-charcoal relative overflow-hidden">
      <div className="absolute inset-0 hero-pattern opacity-10" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <s.icon size={28} className="text-green mx-auto mb-3" />
              <div className="text-3xl sm:text-4xl font-black text-white mb-1">
                {s.value}
              </div>
              <div className="text-sm text-white/50 font-medium">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
