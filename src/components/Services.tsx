"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Shield,
  Droplets,
  Wrench,
  Zap,
  Gauge,
  Droplet,
  Layers,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    slug: "encapsulation",
    title: "Crawl Space Encapsulation",
    icon: Shield,
    desc: "Complete encapsulation to seal your crawl space from moisture, mold, and energy loss. Save up to 30% on energy bills.",
  },
  {
    slug: "vapor-barrier",
    title: "Vapor Barrier Installation",
    icon: Layers,
    desc: "Heavy-duty 12-20 mil reinforced vapor barriers covering floors, walls, and piers. 25-year material warranty.",
  },
  {
    slug: "crawl-space-waterproofing",
    title: "Crawl Space Waterproofing",
    icon: Droplets,
    desc: "Complete waterproofing solutions including drainage systems, sump pumps, and moisture barriers for lasting protection.",
  },
  {
    slug: "crawl-space-repair",
    title: "Crawl Space Repair",
    icon: Wrench,
    desc: "Structural repair for sagging floors, damaged joists, and settling foundations. Steel support posts and floor leveling.",
  },
  {
    slug: "moisture-control",
    title: "Moisture Control",
    icon: Gauge,
    desc: "Comprehensive moisture management with dehumidifiers, ventilation, and humidity monitoring systems.",
  },
  {
    slug: "sump-pump",
    title: "Sump Pump Installation",
    icon: Droplet,
    desc: "Primary and battery backup sump pumps to keep your crawl space dry during storms and power outages.",
  },
  {
    slug: "crawl-space-insulation",
    title: "Crawl Space Insulation",
    icon: Zap,
    desc: "High-performance spray foam and rigid insulation to improve energy efficiency and comfort.",
  },
  {
    slug: "drainage-systems",
    title: "Drainage Systems",
    icon: Droplets,
    desc: "Interior and exterior drainage solutions to redirect water away from your foundation permanently.",
  },
];

export default function ServicesGrid() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-green font-bold text-xs tracking-[0.15em] uppercase mb-4">
            Our Services
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-charcoal mb-4">
            Crawl Space Solutions
          </h2>
          <div className="section-divider w-24 mx-auto mb-6" />
          <p className="text-charcoal/60 max-w-2xl mx-auto text-lg">
            From encapsulation to structural repair, we deliver
            exceptional results on every crawl space project.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <Link
                href={`/services/${s.slug}`}
                className="service-card block bg-white rounded-2xl p-6 border border-charcoal/8 hover:border-green/30 group h-full"
              >
                <div className="w-12 h-12 rounded-xl bg-green/10 flex items-center justify-center text-green mb-4 group-hover:bg-green group-hover:text-white transition-all">
                  <s.icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-charcoal mb-2 group-hover:text-green transition-colors">
                  {s.title}
                </h3>
                <p className="text-charcoal/55 text-sm leading-relaxed mb-4">
                  {s.desc}
                </p>
                <span className="text-green font-semibold text-sm inline-flex items-center gap-1.5">
                  Learn More
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
