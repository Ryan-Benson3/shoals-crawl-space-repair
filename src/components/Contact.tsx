"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
} from "lucide-react";

const PHONE = "(256) 415-7610";
const EMAIL = "info@theflooringfolks.com";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    formData.append("access_key", "edd0ecf0-f3ea-46a8-bc31-b3725214b651");
    formData.append("subject", "New Estimate Request from Shoals Crawl Space Website");
    formData.append("from_name", "Shoals Crawl Space Website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-green font-bold text-xs tracking-[0.15em] uppercase mb-4">
              Contact Us
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-charcoal mb-6 leading-tight">
              Get Your Free Crawl Space Inspection
            </h2>
            <p className="text-charcoal/60 text-lg leading-relaxed mb-10">
              Ready to solve your crawl space moisture problems? Fill out the form or give us a call.
              We&apos;ll schedule a free inspection at your convenience and
              provide a detailed, no-obligation estimate.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-green/10 flex items-center justify-center text-green shrink-0">
                  <Phone size={22} />
                </div>
                <div>
                  <p className="font-bold text-charcoal text-lg">Phone</p>
                  <a
                    href={`tel:${PHONE.replace(/[^\d+]/g, "")}`}
                    className="text-green font-semibold hover:underline text-lg"
                  >
                    {PHONE}
                  </a>
                  <p className="text-charcoal/50 text-sm">Click to call</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-green/10 flex items-center justify-center text-green shrink-0">
                  <Mail size={22} />
                </div>
                <div>
                  <p className="font-bold text-charcoal text-lg">Email</p>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="text-green font-semibold hover:underline"
                  >
                    {EMAIL}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-green/10 flex items-center justify-center text-green shrink-0">
                  <MapPin size={22} />
                </div>
                <div>
                  <p className="font-bold text-charcoal text-lg">Location</p>
                  <p className="text-charcoal/60">
                    Florence, AL — Serving the Shoals Region
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-green/10 flex items-center justify-center text-green shrink-0">
                  <Clock size={22} />
                </div>
                <div>
                  <p className="font-bold text-charcoal text-lg">Hours</p>
                  <p className="text-charcoal/60">Mon–Fri: 7:00 AM – 6:00 PM</p>
                  <p className="text-charcoal/60">Saturday: 8:00 AM – 2:00 PM</p>
                  <p className="text-charcoal/60">Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Service area summary */}
            <div className="mt-10 p-6 bg-charcoal rounded-2xl">
              <h3 className="text-white font-bold mb-3">Service Areas</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Florence • Muscle Shoals • Sheffield • Tuscumbia • Killen •
                Rogersville • Lexington • Anderson • Town Creek • Leighton •
                Russellville • Haleyville • Moulton • Lawrenceburg • Loretto
              </p>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-charcoal rounded-2xl p-8 border border-charcoal-lighter"
          >
            {status === "success" ? (
              <div className="text-center py-12">
                <CheckCircle2 size={56} className="text-green mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">
                  Thank You!
                </h3>
                <p className="text-white/60">
                  We&apos;ve received your message and will get back to you
                  within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-white/80 mb-1.5"
                    >
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-green transition-colors"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-white/80 mb-1.5"
                    >
                      Phone *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-green transition-colors"
                      placeholder="(256) 555-1234"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-white/80 mb-1.5"
                  >
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-green transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-semibold text-white/80 mb-1.5"
                  >
                    Service Needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green transition-colors"
                  >
                    <option value="">Select a service...</option>
                    <option value="Crawl Space Encapsulation">Crawl Space Encapsulation</option>
                    <option value="Vapor Barrier Installation">Vapor Barrier Installation</option>
                    <option value="Crawl Space Waterproofing">Crawl Space Waterproofing</option>
                    <option value="Crawl Space Repair">Crawl Space Repair</option>
                    <option value="Moisture Control">Moisture Control</option>
                    <option value="Sump Pump Installation">Sump Pump Installation</option>
                    <option value="Crawl Space Insulation">Crawl Space Insulation</option>
                    <option value="Drainage Systems">Drainage Systems</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-white/80 mb-1.5"
                  >
                    Tell Us About Your Crawl Space
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-green transition-colors resize-none"
                    placeholder="Describe your crawl space issue..."
                  />
                </div>

                {status === "error" && (
                  <p className="text-green-light text-sm text-center">
                    Something went wrong. Please try again or call us at {PHONE}.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-green hover:bg-green-light disabled:opacity-70 text-white font-bold text-lg py-4 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-lg shadow-green/25"
                >
                  {status === "sending" ? (
                    "Sending..."
                  ) : (
                    <>
                      Request Free Inspection
                      <Send size={18} />
                    </>
                  )}
                </button>
                <p className="text-white/30 text-xs text-center">
                  By submitting, you agree to be contacted about your crawl space
                  project. We never share your information.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
