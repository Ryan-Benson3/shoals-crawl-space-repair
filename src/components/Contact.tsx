"use client";

import { useState, type FormEvent } from "react";

const PHONE = "(256) 415-7610";
const EMAIL = "info@theflooringfolks.com";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16">
          <p className="section-label mb-4">(06) Contact</p>
          <h2 className="font-heading font-800 text-4xl sm:text-5xl lg:text-6xl text-[#0a0a0a] mb-6 max-w-3xl">
            Get Your Free
            <br />
            <span className="text-accent">Crawl Space Estimate</span>
          </h2>
          <p className="text-[#9b9c9c] max-w-2xl text-lg leading-relaxed">
            Ready to solve your crawl space moisture problems? Fill out the form
            or give us a call. We&apos;ll schedule a free crawl space inspection at
            your convenience.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — contact info */}
          <div className="space-y-8">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-sm bg-[#0a0a0a] flex items-center justify-center shrink-0">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-accent" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div>
                <h4 className="font-heading font-bold text-[#0a0a0a] text-lg mb-1">Phone</h4>
                <a
                  href={`tel:${PHONE.replace(/[^\d+]/g, "")}`}
                  className="text-accent hover:text-accent-hover font-heading font-bold text-2xl transition-colors"
                >
                  {PHONE}
                </a>
                <p className="text-[#9b9c9c] text-sm mt-1">
                  Mon–Fri 7am–6pm · Sat 8am–2pm
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-sm bg-[#0a0a0a] flex items-center justify-center shrink-0">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-accent" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <div>
                <h4 className="font-heading font-bold text-[#0a0a0a] text-lg mb-1">Email</h4>
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-accent hover:text-accent-hover font-heading font-bold text-lg transition-colors"
                >
                  {EMAIL}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-sm bg-[#0a0a0a] flex items-center justify-center shrink-0">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-accent" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-heading font-bold text-[#0a0a0a] text-lg mb-1">Service Area</h4>
                <p className="text-[#9b9c9c] leading-relaxed">
                  Florence, Muscle Shoals, Sheffield, Tuscumbia, Killen, Rogersville,
                  and all communities within 60 miles of Florence, Alabama
                </p>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-[#f4f4f2] rounded-sm p-10 border border-black/5">
            {submitted ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-5">
                  <svg viewBox="0 0 24 24" className="w-8 h-8 text-accent" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-2xl text-[#0a0a0a] mb-2">Thank You!</h3>
                <p className="text-[#9b9c9c]">
                  We&apos;ve received your message and will get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-heading font-bold text-[#0a0a0a] mb-2">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3.5 rounded-sm border border-black/10 bg-white focus:border-accent focus:ring-1 focus:ring-accent outline-none text-[#0a0a0a] text-sm"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-heading font-bold text-[#0a0a0a] mb-2">
                      Phone *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      className="w-full px-4 py-3.5 rounded-sm border border-black/10 bg-white focus:border-accent focus:ring-1 focus:ring-accent outline-none text-[#0a0a0a] text-sm"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-heading font-bold text-[#0a0a0a] mb-2">
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full px-4 py-3.5 rounded-sm border border-black/10 bg-white focus:border-accent focus:ring-1 focus:ring-accent outline-none text-[#0a0a0a] text-sm"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-heading font-bold text-[#0a0a0a] mb-2">
                    Service Needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3.5 rounded-sm border border-black/10 bg-white focus:border-accent focus:ring-1 focus:ring-accent outline-none text-[#0a0a0a] text-sm"
                  >
                    <option value="">Select a service...</option>
                    <option>Crawl Space Encapsulation</option>
                    <option>Vapor Barrier Installation</option>
                    <option>Crawl Space Waterproofing</option>
                    <option>Crawl Space Repair</option>
                    <option>Moisture Control</option>
                    <option>Sump Pump Installation</option>
                    <option>Crawl Space Insulation</option>
                    <option>Drainage Systems</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-heading font-bold text-[#0a0a0a] mb-2">
                    Tell Us About Your Crawl Space
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3.5 rounded-sm border border-black/10 bg-white focus:border-accent focus:ring-1 focus:ring-accent outline-none text-[#0a0a0a] text-sm resize-none"
                    placeholder="Describe your crawl space issue..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent-hover text-white font-heading font-bold text-lg py-4.5 rounded-sm transition-all duration-200 cta-glow"
                >
                  Request Free Estimate
                </button>
                <p className="text-[#9b9c9c] text-xs text-center">
                  By submitting, you agree to be contacted about your crawl space project.
                  We never share your information.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
