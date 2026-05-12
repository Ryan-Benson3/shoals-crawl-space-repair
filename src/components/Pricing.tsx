"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const encapsulationPrices = [
  { service: "Full Encapsulation", price: "$5,000–15,000" },
  { service: "Vapor Barrier (12-20 mil)", price: "$2,000–5,000" },
  { service: "Crawl Space Insulation", price: "$2,000–6,000" },
];

const servicePrices = [
  { service: "Sump Pump Installation", price: "$1,500–3,500" },
  { service: "Drainage System", price: "$2,500–8,000" },
  { service: "Dehumidifier Install", price: "$1,800–3,500" },
];

const otherPrices = [
  { service: "Structural Repair", price: "$2,000–10,000" },
  { service: "Crawl Space Inspection", price: "Free" },
];

function PriceTable({
  title,
  items,
  accent,
}: {
  title: string;
  items: { service: string; price: string }[];
  accent?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl p-8 ${
        accent
          ? "bg-green text-white shadow-xl shadow-green/20 scale-105"
          : "bg-charcoal border border-white/10"
      }`}
    >
      <h3 className={`text-2xl font-bold mb-6 ${accent ? "text-white" : "text-white"}`}>
        {title}
      </h3>
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.service} className="flex items-center justify-between">
            <span
              className={`flex items-center gap-2 ${
                accent ? "text-white/80" : "text-white/50"
              }`}
            >
              <Check
                size={16}
                className={accent ? "text-white" : "text-green"}
              />
              {item.service}
            </span>
            <span className={`font-semibold ${accent ? "text-white" : "text-white"}`}>
              {item.price}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 sm:py-32 bg-charcoal relative overflow-hidden">
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
            Pricing
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            Transparent, Competitive Pricing
          </h2>
          <div className="section-divider w-24 mx-auto mb-6" />
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Honest pricing with no hidden fees. Every inspection is free and every
            project is backed by our quality guarantee.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8"
        >
          <PriceTable title="Encapsulation & Barriers" items={encapsulationPrices} accent />
          <PriceTable title="Waterproofing Services" items={servicePrices} />
          <PriceTable title="Additional Services" items={otherPrices} />
        </motion.div>

        <p className="text-center text-white/30 text-sm mt-8">
          Prices are estimates for the Florence/Shoals area. Actual costs depend
          on crawl space size, condition, and service scope.{" "}
          <a href="#contact" className="text-green font-semibold hover:underline">
            Get a free quote →
          </a>
        </p>
      </div>
    </section>
  );
}
