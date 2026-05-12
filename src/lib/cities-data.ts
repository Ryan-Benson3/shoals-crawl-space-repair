export interface City {
  slug: string;
  name: string;
  fullName: string;
  metaTitle: string;
  metaDescription: string;
  population: string;
  county: string;
  description: string;
  content: string;
  landmarks: string[];
  services: string[];
  testimonials: { name: string; text: string; rating: number }[];
}

export const cities: City[] = [
  {
    slug: "florence-al",
    name: "Florence",
    fullName: "Florence, AL",
    metaTitle: "Crawl Space Repair & Encapsulation in Florence, AL | Shoals Crawl Space",
    metaDescription: "Shoals Crawl Space Encapsulation is Florence, AL's trusted crawl space contractor. Encapsulation, vapor barriers, waterproofing & moisture control. Call (256) 415-7610!",
    population: "40,000+",
    county: "Lauderdale County",
    description: "Professional crawl space services for Florence, Alabama homeowners",
    content: `Florence, Alabama is the heart of the Shoals region and home to Shoals Crawl Space Encapsulation. As the largest city in Lauderdale County with over 40,000 residents, Florence has a diverse mix of historic homes, modern constructions, and thriving commercial properties — all of which can benefit from professional crawl space moisture control.

Florence's location along the Tennessee River means the city experiences high humidity levels year-round. Alabama's average relative humidity exceeds 70%, and the crawl spaces beneath older Florence homes are especially vulnerable. Hot, humid summers force moisture-laden air into vented crawl spaces, where it condenses on cool surfaces, promotes mold growth, and deteriorates structural wood.

The historic districts of Florence, including areas near the University of North Alabama campus and the beautiful homes along Court Street, often have crawl spaces with dirt floors, minimal ventilation, and decades of moisture accumulation. Whether it's encapsulating a 1920s bungalow or installing a sump pump in a mid-century ranch, our team has the experience to handle these unique challenges.

Newer developments throughout Florence, from the areas near Cox Creek Parkway to the growing neighborhoods along Helton Drive, benefit from our modern crawl space solutions including full encapsulation, vapor barrier installation, and energy-efficient dehumidifier systems.

Shoals Crawl Space Encapsulation has completed hundreds of crawl space projects throughout Florence. From emergency waterproofing near Wilson Park to complete encapsulation in Sherwood Estates, our team knows Florence's neighborhoods and crawl space needs inside and out.`,
    landmarks: [
      "University of North Alabama",
      "Wilson Park",
      "Florence Indian Mound",
      "Rosenbaum House (Frank Lloyd Wright)",
      "Tennessee River / McFarland Park",
      "Downtown Florence Historic District",
      "Deibert Park",
      "Cox Creek Parkway area",
    ],
    services: [
      "Crawl space encapsulation",
      "Vapor barrier installation",
      "Waterproofing and drainage systems",
      "Sump pump installation",
      "Structural crawl space repair",
      "Moisture control and dehumidifiers",
    ],
    testimonials: [
      { name: "Robert M.", text: "Shoals Crawl Space Encapsulation sealed our entire crawl space near UNA and the difference was immediate. No more musty smell and our energy bills dropped significantly. Highly recommend!", rating: 5 },
      { name: "Jennifer K.", text: "Had standing water in our crawl space after heavy spring rains. They installed a sump pump and drainage system. Haven't had a drop of water since. Excellent service from start to finish.", rating: 5 },
      { name: "David & Sarah W.", text: "We got quotes from three crawl space companies in Florence. Shoals offered the best value and their work quality was top-notch. Our crawl space is now fully encapsulated and dry.", rating: 5 },
    ],
  },
  {
    slug: "muscle-shoals-al",
    name: "Muscle Shoals",
    fullName: "Muscle Shoals, AL",
    metaTitle: "Crawl Space Repair & Encapsulation in Muscle Shoals, AL | Shoals Crawl Space",
    metaDescription: "Trusted crawl space contractor in Muscle Shoals, AL. Shoals Crawl Space offers encapsulation, vapor barriers & moisture control. Call (256) 415-7610!",
    population: "14,000+",
    county: "Colbert County",
    description: "Professional crawl space services for Muscle Shoals, Alabama homeowners",
    content: `Muscle Shoals, Alabama — famous for its legendary music studios and rich cultural heritage — is also home to thousands of residents who need reliable crawl space moisture control. Shoals Crawl Space Encapsulation proudly serves the Muscle Shoals community.

The residential neighborhoods of Muscle Shoals feature a mix of established homes and newer construction. Areas along Avalon Avenue, Woodward Avenue, and the neighborhoods near Muscle Shoals Golf Club require contractors who understand both traditional and modern crawl space challenges. Our team has worked on homes throughout every Muscle Shoals neighborhood.

Muscle Shoals' proximity to the Tennessee River means the area can experience elevated crawl space moisture due to the high water table and clay soil. These conditions make proper vapor barriers and encapsulation especially important. Many Muscle Shoals homeowners are choosing full encapsulation to eliminate musty odors, prevent mold, and reduce energy bills.

We understand that crawl space work is a significant investment for Muscle Shoals homeowners. That's why we offer free inspections, transparent pricing, and financing options to make quality crawl space protection accessible.`,
    landmarks: [
      "FAME Recording Studios",
      "Muscle Shoals Sound Studio",
      "Muscle Shoals Golf Club",
      "Wilson Dam",
      "Avalon Avenue corridor",
      "River Heritage Park",
      "Colbert County area schools",
    ],
    services: [
      "Crawl space encapsulation",
      "Vapor barrier installation",
      "Moisture control systems",
      "Sump pump installation",
      "Structural repair",
      "Drainage systems",
    ],
    testimonials: [
      { name: "Michael T.", text: "Living near the golf course, our crawl space had chronic moisture problems. Shoals Crawl Space encapsulated the entire space and installed a dehumidifier. The musty smell is completely gone.", rating: 5 },
      { name: "Lisa R.", text: "They replaced our deteriorating vapor barrier and added wall encapsulation in just two days. Clean, professional crew. The whole process was smooth and the price was fair.", rating: 5 },
      { name: "Chris B.", text: "After finding mold in our crawl space, Shoals Crawl Space handled everything — remediation, encapsulation, and a sump pump. We didn't have to worry about a thing. They truly took care of us.", rating: 5 },
    ],
  },
  {
    slug: "sheffield-al",
    name: "Sheffield",
    fullName: "Sheffield, AL",
    metaTitle: "Crawl Space Repair & Encapsulation in Sheffield, AL | Shoals Crawl Space",
    metaDescription: "Sheffield, AL's trusted crawl space company. Shoals Crawl Space provides encapsulation, waterproofing & moisture control. Call (256) 415-7610!",
    population: "9,000+",
    county: "Colbert County",
    description: "Professional crawl space services for Sheffield, Alabama homeowners",
    content: `Sheffield, Alabama — one of the original "Quad Cities" of the Shoals area — has a proud history and a strong community of homeowners who take pride in their properties. Shoals Crawl Space Encapsulation is honored to serve Sheffield residents with top-quality crawl space services.

Sheffield's housing stock includes many charming older homes as well as newer constructions. The neighborhoods near the Tennessee River, the historic downtown area, and the residential streets off Montgomery Avenue all have unique crawl space needs. Our team has extensive experience working with the diverse crawl space conditions found throughout Sheffield.

The proximity to the Tennessee River and Wilson Dam means Sheffield can experience higher humidity levels and more intense water intrusion events. These conditions make proper vapor barriers, sump pumps, and drainage systems especially important. We help Sheffield homeowners choose crawl space solutions that perform well in these specific conditions.

Whether you live near Spring Creek, along the river, or in any Sheffield neighborhood, Shoals Crawl Space Encapsulation is your local crawl space expert. We offer free inspections, honest assessments, and quality workmanship on every project.`,
    landmarks: [
      "Wilson Dam",
      "Tennessee River waterfront",
      "Sheffield Historic Downtown",
      "Spring Creek area",
      "Montgomery Avenue corridor",
      "Sheffield Industrial Park",
      "Riverfront Park",
    ],
    services: [
      "Crawl space encapsulation",
      "Waterproofing systems",
      "Sump pump installation",
      "Vapor barrier installation",
      "Structural repair",
      "Drainage solutions",
    ],
    testimonials: [
      { name: "James P.", text: "Our older home in Sheffield had a dirt crawl space with standing water. Shoals Crawl Space installed drainage, a sump pump, and full encapsulation. Our crawl space is bone dry now. Great team!", rating: 5 },
      { name: "Amanda S.", text: "Fast response after we discovered water in our crawl space. They assessed the problem, gave us a fair quote, and had the full system installed within a week. Very impressed.", rating: 5 },
      { name: "Mark D.", text: "Best crawl space company in the Shoals area, hands down. Fair prices, quality work, and they actually show up when they say they will. Highly recommended.", rating: 5 },
    ],
  },
  {
    slug: "tuscumbia-al",
    name: "Tuscumbia",
    fullName: "Tuscumbia, AL",
    metaTitle: "Crawl Space Repair & Encapsulation in Tuscumbia, AL | Shoals Crawl Space",
    metaDescription: "Professional crawl space services in Tuscumbia, AL. Shoals Crawl Space handles encapsulation, repair & moisture control. Call (256) 415-7610!",
    population: "8,500+",
    county: "Colbert County",
    description: "Professional crawl space services for Tuscumbia, Alabama homeowners",
    content: `Tuscumbia, Alabama — the county seat of Colbert County and birthplace of Helen Keller — is a city rich in history and Southern charm. The beautiful historic homes and well-maintained properties throughout Tuscumbia deserve crawl space services that match their character and quality.

The historic homes near Spring Park and throughout downtown Tuscumbia often feature crawl spaces with dirt floors, original construction, and decades of moisture accumulation leading to wood rot and mold. Our team has the experience to work on these special properties while addressing the unique challenges of older crawl space construction.

Newer Tuscumbia neighborhoods and the growing areas along US-72 benefit from our modern crawl space solutions. Whether you're building a new home and need proper crawl space preparation, or your existing home needs moisture protection, we offer a full range of services.

Shoals Crawl Space Encapsulation has built a reputation in Tuscumbia for honest, reliable service. We provide free inspections, transparent estimates, and quality workmanship backed by our warranty.`,
    landmarks: [
      "Ivy Green (Helen Keller Birthplace)",
      "Spring Park",
      "Tuscumbia Historic Downtown",
      "Colbert County Courthouse",
      "Cane Creek Canyon",
      "US-72 corridor",
      "Tuscumbia Railway Depot",
    ],
    services: [
      "Historic home crawl space repair",
      "Full encapsulation",
      "Vapor barrier installation",
      "Mold remediation",
      "Sump pump installation",
      "Drainage systems",
    ],
    testimonials: [
      { name: "Patricia H.", text: "Our historic home near Spring Park had a crawl space that hadn't been touched in decades. Shoals Crawl Space cleaned it up, treated the mold, and fully encapsulated it. The result is amazing.", rating: 5 },
      { name: "Tommy L.", text: "Called them for a crawl space moisture issue and they had it assessed the same day. Fair price, great communication, and they cleaned up everything. Couldn't ask for better service.", rating: 5 },
      { name: "Karen M.", text: "We chose full encapsulation for our Tuscumbia home and couldn't be happier. Shoals Crawl Space explained all our options and the installation was flawless.", rating: 5 },
    ],
  },
  {
    slug: "killen-al",
    name: "Killen",
    fullName: "Killen, AL",
    metaTitle: "Crawl Space Repair & Encapsulation in Killen, AL | Shoals Crawl Space",
    metaDescription: "Reliable crawl space contractor serving Killen, AL. Shoals Crawl Space offers encapsulation, repair & moisture control. Call (256) 415-7610!",
    population: "1,100+",
    county: "Lauderdale County",
    description: "Professional crawl space services for Killen, Alabama homeowners",
    content: `Killen, Alabama may be a small town, but its residents deserve the same quality crawl space services as any larger city. Shoals Crawl Space Encapsulation proudly serves Killen and the surrounding Lauderdale County area.

Killen's rural character means many homes sit on larger lots with mature trees and clay-heavy soil. The combination of high water table, Alabama's humidity, and aging construction means many Killen homes have crawl spaces with significant moisture problems that have gone unaddressed for years.

The mix of older farmhouses, manufactured homes, and newer constructions in Killen requires a versatile crawl space contractor. We work on all types of homes and crawl space configurations, from tight crawl spaces to full basements. No job is too big or too small.

At Shoals Crawl Space Encapsulation, we treat every Killen customer like a neighbor — because you are. We provide free inspections, honest recommendations, and quality workmanship at fair prices.`,
    landmarks: [
      "Wheeler Lake / Wilson Lake area",
      "Killen town center",
      "Lauderdale County rural areas",
      "Joe Wheeler State Park (nearby)",
      "Tennessee Valley farms",
      "Local schools and churches",
    ],
    services: [
      "Crawl space encapsulation",
      "Vapor barrier installation",
      "Sump pump installation",
      "Structural repair",
      "Moisture control",
      "Drainage systems",
    ],
    testimonials: [
      { name: "Gary W.", text: "Had standing water in our crawl space during heavy rains. Shoals Crawl Space came out quickly, installed a sump pump and drainage system. No more water issues. They then helped us with full encapsulation.", rating: 5 },
      { name: "Nancy R.", text: "We live outside Killen on a farm and were worried about finding a contractor willing to come out this far. Shoals Crawl Space didn't hesitate. Great service and fair pricing.", rating: 5 },
      { name: "Billy T.", text: "Full encapsulation on our Killen home — the crawl space looks incredible and we know our floors and air quality are protected. Shoals Crawl Space is the real deal. Honest, hardworking folks.", rating: 5 },
    ],
  },
  {
    slug: "rogersville-al",
    name: "Rogersville",
    fullName: "Rogersville, AL",
    metaTitle: "Crawl Space Repair & Encapsulation in Rogersville, AL | Shoals Crawl Space",
    metaDescription: "Rogersville, AL's trusted crawl space contractor. Shoals Crawl Space provides encapsulation, vapor barriers & moisture control. Call (256) 415-7610!",
    population: "1,300+",
    county: "Lauderdale County",
    description: "Professional crawl space services for Rogersville, Alabama homeowners",
    content: `Rogersville, Alabama is a friendly community in Lauderdale County known for its beautiful countryside and proximity to Wheeler Lake. Shoals Crawl Space Encapsulation is proud to serve Rogersville homeowners with reliable, professional crawl space services.

The homes in and around Rogersville range from charming older properties to modern constructions, each with its own crawl space needs. Whether you have a traditional farmhouse that needs moisture protection or a newer home ready for encapsulation, our team has the skills and experience to deliver exceptional results.

Rogersville's location near the Tennessee River means the area can experience elevated crawl space moisture due to the high water table and clay soil. Many Rogersville homeowners are choosing encapsulation for its ability to eliminate moisture problems and reduce energy costs.

Shoals Crawl Space Encapsulation believes in building long-term relationships with our customers. We provide honest assessments, competitive pricing, and quality craftsmanship on every job.`,
    landmarks: [
      "Wheeler Lake",
      "Rogersville town center",
      "Joe Wheeler State Park",
      "Lauderdale County countryside",
      "Elk River (nearby)",
      "Local farmland and rural properties",
    ],
    services: [
      "Crawl space encapsulation",
      "Vapor barrier installation",
      "Moisture control",
      "Sump pump installation",
      "Farm and rural property crawl space services",
      "Drainage systems",
    ],
    testimonials: [
      { name: "Steve H.", text: "Living near Wheeler Lake, our crawl space was constantly damp. Shoals Crawl Space installed a complete encapsulation system with a dehumidifier. Couldn't be happier with the result.", rating: 5 },
      { name: "Rhonda P.", text: "They replaced our old vapor barrier with full encapsulation. The crew was professional, hardworking, and left our property spotless. Great company!", rating: 5 },
      { name: "Don & Betty K.", text: "Shoals Crawl Space has done work for us and several of our neighbors in Rogersville. They're honest, fairly priced, and their work speaks for itself. Highly recommend.", rating: 5 },
    ],
  },
];

export function getCityBySlug(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}
