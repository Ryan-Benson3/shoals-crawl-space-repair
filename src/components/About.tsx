"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Shield, Clock, Star, FileText, ArrowRight } from "lucide-react";

const trustPoints = [
  { icon: Shield, title: "Licensed & Insured", desc: "Fully licensed in Alabama with comprehensive liability and workers' comp insurance." },
  { icon: Clock, title: "15+ Years Experience", desc: "Over a decade of crawl space moisture control expertise serving the Shoals area." },
  { icon: Star, title: "5-Star Reputation", desc: "Hundreds of satisfied customers and a 4.9-star average rating across all platforms." },
  { icon: FileText, title: "Written Warranties", desc: "Every project backed by our workmanship warranty plus manufacturer coverage." },
];

export default function About() {
  return (
    <section className="py-24 sm:py-32 bg-charcoal relative overflow-hidden">
      <div className="absolute inset-0 hero-pattern opacity-10" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-green/5 rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-green font-bold text-xs tracking-[0.15em] uppercase mb-4">
              About Us
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              The Shoals Area&apos;s Most Trusted Crawl Space Experts
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-6">
              Since 2011, Shoals Crawl Space Encapsulation has been protecting homes
              throughout Florence, Muscle Shoals, Sheffield, Tuscumbia, and
              surrounding communities from the damaging effects of crawl space
              moisture. Alabama&apos;s 70%+ average humidity creates the perfect
              environment for mold, wood rot, and energy loss.
            </p>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              Our team of certified moisture control specialists brings over 15
              years of combined experience to every project. Whether you need a
              complete crawl space encapsulation, a new vapor barrier, sump pump
              installation, or structural repair, we have the expertise and
              dedication to deliver lasting results.
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 bg-green hover:bg-green-light text-white font-bold px-8 py-4 rounded-xl transition-colors shadow-lg shadow-green/25"
            >
              Get Your Free Inspection
              <ArrowRight size={18} />
            </Link>
          </motion.div>

          {/* Right — trust grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 gap-5"
          >
            {trustPoints.map((tp) => (
              <div
                key={tp.title}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-green/30 transition-all"
              >
                <tp.icon size={28} className="text-green mb-4" />
                <h3 className="text-white font-bold text-lg mb-2">
                  {tp.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {tp.desc}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
