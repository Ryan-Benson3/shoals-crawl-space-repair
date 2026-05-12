import type { Metadata } from "next";
import Link from "next/link";
import { services, getServiceBySlug } from "@/lib/services-data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PHONE = "(256) 415-7610";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: `${service.name} — Florence, AL | Shoals Crawl Space Encapsulation`,
    description: service.tagline,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return null;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${service.name} — Florence, AL`,
    description: service.description,
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: "Shoals Crawl Space Encapsulation",
      telephone: PHONE,
    },
  };

  const faqSchema =
    service.faqs?.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: service.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        }
      : null;

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 bg-[#0a0a0a] overflow-hidden">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/5 rounded-full blur-[120px]" />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
            <p className="section-label mb-4">Professional Service</p>
            <h1 className="font-heading font-800 text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">
              {service.name} in{" "}
              <span className="text-accent">Florence, AL</span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mb-10 leading-relaxed">
              {service.tagline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${PHONE.replace(/[^\d+]/g, "")}`}
                className="inline-flex items-center justify-center gap-3 bg-accent hover:bg-accent-hover text-white font-heading font-bold text-lg px-10 py-4.5 rounded-sm transition-all cta-glow"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Call {PHONE}
              </a>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-3 border border-white/20 hover:border-accent text-white hover:text-accent font-heading font-bold text-lg px-10 py-4.5 rounded-sm transition-all"
              >
                Get Free Estimate
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 sm:py-28 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="text-[#0a0a0a]/80 text-lg leading-relaxed space-y-6">
              {service.description.split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 sm:py-28 bg-[#f4f4f2]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <p className="section-label mb-4 text-center">Why Choose Us</p>
            <h2 className="font-heading font-800 text-3xl sm:text-4xl text-[#0a0a0a] mb-14 text-center">
              What Sets Us Apart
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.benefits.map((feature, i) => (
                <div
                  key={i}
                  className="bg-white rounded-sm p-7 border border-black/5 text-center group hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-sm flex items-center justify-center mx-auto mb-4">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-6 h-6 text-accent"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <p className="font-heading font-bold text-[#0a0a0a]">
                    {feature.title}
                  </p>
                  <p className="text-[#9b9c9c] text-sm mt-2">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        {service.faqs && service.faqs.length > 0 && (
          <section className="py-20 sm:py-28 bg-white">
            <div className="max-w-3xl mx-auto px-6 lg:px-8">
              <p className="section-label mb-4 text-center">FAQ</p>
              <h2 className="font-heading font-800 text-3xl sm:text-4xl text-[#0a0a0a] mb-14 text-center">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {service.faqs.map((faq, i) => (
                  <details
                    key={i}
                    className="bg-[#f4f4f2] rounded-sm border border-black/5 group"
                  >
                    <summary className="px-8 py-6 cursor-pointer font-heading font-bold text-[#0a0a0a] list-none flex items-center justify-between gap-4">
                      {faq.question}
                      <svg
                        viewBox="0 0 24 24"
                        className="w-5 h-5 text-accent shrink-0 transition-transform group-open:rotate-180"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </summary>
                    <div className="px-8 pb-6 text-[#9b9c9c] text-sm leading-relaxed">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-20 sm:py-28 bg-[#0a0a0a] text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/5 rounded-full blur-[120px]" />
          <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8">
            <h2 className="font-heading font-800 text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
              Ready to Fix Your Crawl Space?
            </h2>
            <p className="text-white/50 text-lg mb-10">
              Contact Shoals Crawl Space Encapsulation today for a free
              inspection and estimate. We serve Florence, Muscle Shoals,
              Sheffield, Tuscumbia, and the entire Shoals area.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${PHONE.replace(/[^\d+]/g, "")}`}
                className="inline-flex items-center justify-center gap-3 bg-accent hover:bg-accent-hover text-white font-heading font-bold text-lg px-10 py-4.5 rounded-sm transition-all cta-glow"
              >
                Call {PHONE}
              </a>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-3 border border-white/20 hover:border-accent text-white hover:text-accent font-heading font-bold text-lg px-10 py-4.5 rounded-sm transition-all"
              >
                Request Online Estimate
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
    </>
  );
}
