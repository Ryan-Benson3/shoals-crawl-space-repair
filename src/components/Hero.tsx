"use client";

import { motion } from "framer-motion";
import { Phone, ArrowRight, Shield, Clock, Star, Award } from "lucide-react";

const PHONE = "(256) 415-7610";

const trustStats = [
  { icon: Shield, value: "Licensed & Insured", label: "Fully protected" },
  { icon: Clock, value: "15+ Years", label: "Experience" },
  { icon: Star, value: "Free Inspections", label: "No obligation" },
  { icon: Award, value: "Local & Trusted", label: "Florence, AL" },
];

export default function Hero() {
  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal-light to-charcoal" />
        <div className="absolute inset-0 bg-charcoal/85" />
      </div>
      <div className="absolute inset-0 hero-pattern opacity-20" />

      {/* Green accent glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-green/10 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-40 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-green/15 border border-green/30 text-green-light px-4 py-2 rounded-full text-sm font-semibold mb-8"
          >
            <Shield size={16} />
            Florence&apos;s Crawl Space Experts
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6"
          >
            Crawl Space.{" "}
            <span className="text-green">Protected.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg sm:text-xl text-white/60 max-w-xl mb-10 leading-relaxed"
          >
            Expert crawl space encapsulation, vapor barriers, and moisture control
            serving Florence, Muscle Shoals, and the greater Shoals area since 2011.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-wrap gap-4 mb-16"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-green hover:bg-green-light text-white font-bold text-lg px-8 py-4 rounded-xl transition-colors shadow-xl shadow-green/30"
            >
              Get a Free Inspection
              <ArrowRight size={20} />
            </a>
            <a
              href={`tel:${PHONE.replace(/[^\d+]/g, "")}`}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-lg px-8 py-4 rounded-xl transition-colors border border-white/20"
            >
              <Phone size={20} />
              Call Now
            </a>
          </motion.div>

          {/* Trust bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4"
          >
            {trustStats.map((stat) => (
              <div
                key={stat.value}
                className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3"
              >
                <stat.icon size={20} className="text-green shrink-0" />
                <div>
                  <p className="text-white font-bold text-sm">{stat.value}</p>
                  <p className="text-white/40 text-xs">{stat.label}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
