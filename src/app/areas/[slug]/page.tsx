import { cities } from "@/lib/cities-data";
import { services } from "@/lib/services-data";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PHONE = "(256) 415-7610";

export const dynamicParams = false;

export function generateStaticParams() {
  return cities.map((city) => ({ slug: city.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const city = cities.find((c) => c.slug === slug);
  if (!city) return {};
  return {
    title: `Crawl Space Repair & Encapsulation in ${city.name}, ${city.state} | Shoals Crawl Space Encapsulation`,
    description: `Professional crawl space encapsulation and moisture control in ${city.name}, ${city.state}. Vapor barriers, sump pumps, mold remediation. Free estimates. Call ${PHONE}.`,
  };
}

export default async function CityPage({ params }: Props) {
  const { slug } = await params;
  const city = cities.find((c) => c.slug === slug);
  if (!city) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "Shoals Crawl Space Encapsulation",
    telephone: PHONE,
    areaServed: {
      "@type": "City",
      name: city.name,
      containedInPlace: {
        "@type": "State",
        name: city.state === "AL" ? "Alabama" : "Tennessee",
      },
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: city.name,
      addressRegion: city.state,
    },
  };

  return (
    <>
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <main>
        {/* Hero */}
        <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 bg-[#0a0a0a] overflow-hidden">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/5 rounded-full blur-[120px]" />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
            <p className="section-label mb-4">
              Serving {city.name}, {city.state}
            </p>
            <h1 className="font-heading font-800 text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Crawl Space Repair &amp; Encapsulation
              <br />
              in <span className="text-accent">{city.name}, {city.state}</span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
              Professional crawl space encapsulation, vapor barrier installation, and moisture control services for {city.name} homeowners.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 sm:py-28 bg-white">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <div className="text-[#0a0a0a]/80 text-lg leading-relaxed mb-12">
              <p>{city.description}</p>
            </div>

            {/* Info cards */}
            <div className="grid sm:grid-cols-3 gap-6 mb-16">
              <div className="bg-[#f4f4f2] rounded-sm p-7 border border-black/5">
                <h3 className="font-heading font-bold text-[#0a0a0a] text-sm tracking-wider uppercase mb-2">
                  Population
                </h3>
                <p className="text-[#9b9c9c]">{city.population}</p>
              </div>
              <div className="bg-[#f4f4f2] rounded-sm p-7 border border-black/5">
                <h3 className="font-heading font-bold text-[#0a0a0a] text-sm tracking-wider uppercase mb-2">
                  County
                </h3>
                <p className="text-[#9b9c9c]">{city.county} County</p>
              </div>
              <div className="bg-[#f4f4f2] rounded-sm p-7 border border-black/5">
                <h3 className="font-heading font-bold text-[#0a0a0a] text-sm tracking-wider uppercase mb-2">
                  ZIP Codes
                </h3>
                <p className="text-[#9b9c9c]">{city.zipCodes.join(", ")}</p>
              </div>
            </div>

            {/* Services */}
            <p className="section-label mb-4">Our Services</p>
            <h2 className="font-heading font-800 text-3xl sm:text-4xl text-[#0a0a0a] mb-10">
              Services in {city.name}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="service-card bg-[#f4f4f2] rounded-sm p-6 border border-black/5 group"
                >
                  <h3 className="font-heading font-bold text-[#0a0a0a] mb-2 group-hover:text-accent transition-colors">
                    {s.name}
                  </h3>
                  <p className="text-[#9b9c9c] text-sm leading-relaxed">
                    {s.shortDescription}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 sm:py-28 bg-accent text-center">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <h2 className="font-heading font-800 text-3xl sm:text-4xl text-white mb-4">
              Need Crawl Space Repair in {city.name}?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Get a free inspection and estimate from Shoals Crawl Space
              Encapsulation. We serve {city.name} and the entire Shoals area.
            </p>
            <a
              href={`tel:${PHONE.replace(/[^\d+]/g, "")}`}
              className="inline-flex items-center justify-center gap-3 bg-[#0a0a0a] text-white px-10 py-4.5 rounded-sm font-heading font-bold text-lg hover:bg-black transition-colors"
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
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
