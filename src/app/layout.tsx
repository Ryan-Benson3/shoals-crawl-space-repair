import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://shoals-crawl-space-repair.pages.dev";
const PHONE = "(256) 415-7610";
const EMAIL = "info@theflooringfolks.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: "%s | Shoals Crawl Space Encapsulation",
    default: "Shoals Crawl Space Encapsulation | Professional Crawl Space Repair — Florence, AL",
  },
  description:
    "Shoals Crawl Space Encapsulation provides professional crawl space encapsulation, vapor barrier installation, and moisture control in Florence, AL. Save up to 30% on energy bills. Licensed & insured. Call (256) 415-7610.",
  keywords: [
    "crawl space encapsulation Florence AL",
    "crawl space repair Muscle Shoals",
    "vapor barrier installation Sheffield AL",
    "moisture control Tuscumbia",
    "crawl space waterproofing Shoals area",
    "sump pump installation Florence Alabama",
    "crawl space mold remediation North Alabama",
    "Shoals Crawl Space Encapsulation",
  ],
  openGraph: {
    title: "Shoals Crawl Space Encapsulation | Professional Crawl Space Repair — The Shoals, Alabama",
    description:
      "Licensed & insured crawl space repair contractor serving Florence, Muscle Shoals, Sheffield, and the greater Shoals area. Encapsulation, vapor barriers, moisture control.",
    url: SITE_URL,
    siteName: "Shoals Crawl Space Encapsulation",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HomeAndConstructionBusiness",
              name: "Shoals Crawl Space Encapsulation",
              url: SITE_URL,
              telephone: PHONE,
              email: EMAIL,
              description:
                "Shoals Crawl Space Encapsulation provides professional crawl space encapsulation, vapor barrier installation, moisture control, and mold remediation serving Florence, Muscle Shoals, Sheffield, and the greater Shoals area of Alabama.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Florence",
                addressRegion: "AL",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 34.7998,
                longitude: -87.6773,
              },
              areaServed: [
                { "@type": "City", name: "Florence", containedInPlace: { "@type": "State", name: "Alabama" } },
                { "@type": "City", name: "Muscle Shoals", containedInPlace: { "@type": "State", name: "Alabama" } },
                { "@type": "City", name: "Sheffield", containedInPlace: { "@type": "State", name: "Alabama" } },
                { "@type": "City", name: "Tuscumbia", containedInPlace: { "@type": "State", name: "Alabama" } },
                { "@type": "City", name: "Killen", containedInPlace: { "@type": "State", name: "Alabama" } },
                { "@type": "City", name: "Rogersville", containedInPlace: { "@type": "State", name: "Alabama" } },
                { "@type": "City", name: "Lexington", containedInPlace: { "@type": "State", name: "Alabama" } },
                { "@type": "City", name: "Anderson", containedInPlace: { "@type": "State", name: "Alabama" } },
                { "@type": "City", name: "Town Creek", containedInPlace: { "@type": "State", name: "Alabama" } },
                { "@type": "City", name: "Leighton", containedInPlace: { "@type": "State", name: "Alabama" } },
                { "@type": "City", name: "Russellville", containedInPlace: { "@type": "State", name: "Alabama" } },
                { "@type": "City", name: "Haleyville", containedInPlace: { "@type": "State", name: "Alabama" } },
                { "@type": "City", name: "Moulton", containedInPlace: { "@type": "State", name: "Alabama" } },
                { "@type": "City", name: "Lawrenceburg", containedInPlace: { "@type": "State", name: "Alabama" } },
                { "@type": "City", name: "Loretto", containedInPlace: { "@type": "State", name: "Tennessee" } },
              ],
              priceRange: "$$",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "07:00",
                  closes: "18:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "08:00",
                  closes: "14:00",
                },
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "127",
                bestRating: "5",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col" style={{ fontFamily: 'var(--font-body)' }}>{children}</body>
    </html>
  );
}
