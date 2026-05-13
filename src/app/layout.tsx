import type { Metadata } from "next";
import { Suspense } from "react";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const SITE_URL = "https://shoalscrawlspacerepair.com";
const PHONE = "+12564157610";

const GA_MEASUREMENT_ID = "G-XXXXXXXXXX";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: "%s | Shoals Crawl Space Encapsulation",
    default:
      "Shoals Crawl Space Encapsulation | Crawl Space Repair & Moisture Control — Florence, AL",
  },
  description:
    "Shoals Crawl Space Encapsulation is Florence, AL's trusted crawl space contractor. 15+ years experience in encapsulation, vapor barriers, waterproofing & moisture control. Licensed & insured. Call (256) 415-7610.",
  keywords: [
    "crawl space encapsulation Florence AL",
    "crawl space repair Florence Alabama",
    "Shoals Crawl Space Encapsulation",
    "vapor barrier installation Muscle Shoals",
    "crawl space waterproofing Sheffield AL",
    "moisture control Tuscumbia",
    "crawl space insulation Shoals area",
    "sump pump installation Florence Alabama",
    "crawl space repair Shoals",
    "basement waterproofing Florence AL",
  ],
  openGraph: {
    title: "Shoals Crawl Space Encapsulation | Crawl Space Experts — The Shoals, Alabama",
    description:
      "Licensed & insured crawl space contractor serving Florence, Muscle Shoals, Sheffield, and the greater Shoals area. 15+ years experience. Call (256) 415-7610.",
    url: SITE_URL,
    siteName: "Shoals Crawl Space Encapsulation",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "Shoals Crawl Space Encapsulation",
  url: SITE_URL,
  telephone: PHONE,
  email: "info@shoalscrawlspacerepair.com",
  description:
    "Shoals Crawl Space Encapsulation is a licensed and insured crawl space contractor serving Florence, Muscle Shoals, Sheffield, and the greater Shoals area of Alabama. 15+ years experience.",
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
    { "@type": "City", name: "Lawrenceburg", containedInPlace: { "@type": "State", name: "Tennessee" } },
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
    reviewCount: "42",
    bestRating: "5",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Crawl Space Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Crawl Space Encapsulation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Vapor Barrier Installation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Crawl Space Waterproofing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Crawl Space Repair" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Moisture Control" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sump Pump Installation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Crawl Space Insulation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Drainage Systems" } },
    ],
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
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body className="h-full">
        <Suspense>
          <GoogleAnalytics measurementId={GA_MEASUREMENT_ID} />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
