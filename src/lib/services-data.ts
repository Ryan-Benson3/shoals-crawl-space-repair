export interface Service {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  features: string[];
  faqs: { question: string; answer: string }[];
}

export const services: Service[] = [
  {
    slug: 'encapsulation',
    name: 'Crawl Space Encapsulation',
    shortDescription: 'Complete crawl space encapsulation to eliminate moisture, mold, and energy loss in your Shoals area home.',
    description: 'Professional crawl space encapsulation in Florence, Alabama — the most effective solution for moisture problems in the Shoals area. Alabama\'s average relative humidity exceeds 70% throughout the year, and the crawl spaces beneath older homes in Florence, Muscle Shoals, Sheffield, and Tuscumbia are especially vulnerable to moisture buildup. Our encapsulation process seals your entire crawl space with heavy-duty polyethylene barriers on the floor, walls, and piers, creating a controlled environment that blocks ground moisture, outside air, and pests. Encapsulated crawl spaces typically see energy savings of 15-30% because your HVAC system no longer has to fight against the hot, humid air rising from below. We also install dehumidifiers and sump pumps as needed to maintain optimal humidity levels below 55%. Every encapsulation project includes a thorough inspection, mold treatment if necessary, and a written warranty on materials and labor.',
    features: ['Full floor & wall vapor barrier', 'Pier and column wrapping', 'Sealed vents and access doors', 'Energy savings up to 30%', 'Mold prevention', 'Written warranty included'],
    faqs: [
      { question: 'How much does crawl space encapsulation cost in Florence, AL?', answer: 'Crawl space encapsulation in the Florence area typically ranges from $5,000 to $15,000 depending on the size of your crawl space, the condition of existing moisture barriers, and whether additional services like sump pump installation or mold remediation are needed. We provide free inspections and detailed estimates.' },
      { question: 'How long does encapsulation take?', answer: 'Most crawl space encapsulation projects in the Shoals area are completed in 2-4 days. Larger crawl spaces or those requiring extensive mold remediation or structural repair may take up to a week.' },
      { question: 'Will encapsulation really lower my energy bills?', answer: 'Yes. Studies show that encapsulating your crawl space can reduce energy costs by 15-30%. In Alabama\'s hot, humid climate, an unsealed crawl space allows moisture-laden air to infiltrate your home, forcing your HVAC system to work harder.' },
      { question: 'Do I need encapsulation if I already have a vapor barrier?', answer: 'A basic 6-mil vapor barrier laid on the crawl space floor provides minimal protection. Full encapsulation seals the floor, walls, piers, and vents — creating a completely closed system.' },
    ],
  },
  {
    slug: 'vapor-barrier',
    name: 'Vapor Barrier Installation',
    shortDescription: 'Heavy-duty vapor barrier installation to block ground moisture from entering your crawl space.',
    description: 'Professional vapor barrier installation in Florence, Alabama — your first line of defense against crawl space moisture. In the Shoals area, the red clay soil common throughout Lauderdale and Colbert counties holds significant moisture that migrates upward through the crawl space floor. Our team installs 12-mil to 20-mil reinforced polyethylene vapor barriers that cover the entire crawl space floor and extend up the foundation walls. Unlike thin, contractor-grade barriers that tear and deteriorate, our commercial-quality barriers are puncture-resistant, antimicrobial-treated, and backed by a 25-year warranty. Proper vapor barrier installation can reduce crawl space humidity by 15-20% and prevent wood rot, mold growth, and structural damage to floor joists and subfloor.',
    features: ['12-mil to 20-mil reinforced barrier', 'Full floor and wall coverage', 'Seam taping and mechanical fastening', 'Antimicrobial-treated material', '25-year material warranty', 'Reduces humidity by 15-20%'],
    faqs: [
      { question: 'What thickness vapor barrier do I need?', answer: 'For crawl spaces in the Shoals area, we recommend at least 12-mil reinforced polyethylene. Higher-traffic crawl spaces or those with sharp gravel benefit from 20-mil barrier.' },
      { question: 'How is a vapor barrier different from encapsulation?', answer: 'A vapor barrier covers only the crawl space floor to block ground moisture. Full encapsulation includes floor barriers, wall barriers, pier wrapping, vent sealing, and often a dehumidifier.' },
      { question: 'How long does a vapor barrier last?', answer: 'Our commercial-grade reinforced vapor barriers are rated for 25+ years. Thin builder-grade barriers (6 mil) often deteriorate within 5-7 years.' },
    ],
  },
  {
    slug: 'crawl-space-waterproofing',
    name: 'Crawl Space Waterproofing',
    shortDescription: 'Complete waterproofing solutions to keep your crawl space permanently dry and protected.',
    description: 'Professional crawl space waterproofing in Florence, Alabama — comprehensive protection against water intrusion. Many homes in the Shoals area experience crawl space flooding during heavy rains, spring thaw, and rising water table events. Our waterproofing solutions combine interior drainage channels, sump pump systems, and sealed vapor barriers to create a complete moisture management system. We install French drains along the interior perimeter that channel water to a recessed sump pit, where a high-capacity pump removes it safely away from your foundation. Combined with wall encapsulation and sealed access points, our waterproofing systems keep crawl spaces bone dry year-round, even during North Alabama\'s heaviest rain events.',
    features: ['Interior perimeter drainage', 'Sump pump integration', 'Wall barrier sealing', 'Access door sealing', 'Discharge line routing', 'Lifetime system warranty'],
    faqs: [
      { question: 'How is waterproofing different from encapsulation?', answer: 'Waterproofing focuses on actively removing water through drainage and pumping systems. Encapsulation focuses on preventing moisture from entering. Most homes benefit from both working together as a complete system.' },
      { question: 'Do I need waterproofing if I don\'t have standing water?', answer: 'If your crawl space shows signs of moisture — damp walls, condensation, musty odors — waterproofing can prevent the problem from escalating. Standing water is a late-stage symptom; early intervention saves money.' },
      { question: 'How much does crawl space waterproofing cost?', answer: 'Crawl space waterproofing in the Florence area typically ranges from $3,000 to $10,000 depending on the scope of the system needed. We provide free inspections and detailed estimates.' },
    ],
  },
  {
    slug: 'crawl-space-repair',
    name: 'Crawl Space Repair',
    shortDescription: 'Structural crawl space repair for sagging floors, damaged joists, and settling foundations.',
    description: 'Professional crawl space repair in Florence, Alabama — restoring the structural integrity of your home from below. Over time, the crawl spaces beneath Shoals area homes deteriorate due to moisture damage, wood rot, and settling. Common problems include sagging floors, bouncy floor joists, cracked or leaning piers, and deteriorated support beams. Our repair team installs adjustable steel support posts, sistered joists, and new beam sections to permanently stabilize your floor system. We also address the root cause of the damage — typically moisture — by combining structural repairs with encapsulation or vapor barrier installation.',
    features: ['Adjustable steel support posts', 'Sistered floor joists', 'Pier and beam replacement', 'Floor leveling', 'Structural engineer assessment', 'Transferable warranty'],
    faqs: [
      { question: 'How do I know if my crawl space needs structural repair?', answer: 'Warning signs include sagging or bouncy floors, doors that won\'t close properly, visible cracks in drywall, and gaps between the floor and baseboards.' },
      { question: 'Can sagging floors be fixed without replacing the floor?', answer: 'Yes. In most cases, we can stabilize and level your floors from below by installing steel support posts, sistering damaged joists, and replacing deteriorated piers.' },
      { question: 'How much does crawl space repair cost?', answer: 'Structural crawl space repairs in the Florence area range from $2,000 to $10,000 depending on the extent of damage.' },
    ],
  },
  {
    slug: 'moisture-control',
    name: 'Moisture Control',
    shortDescription: 'Comprehensive moisture management systems for optimal crawl space humidity control.',
    description: 'Professional crawl space moisture control in Florence, Alabama — the foundation of a healthy home. Alabama\'s subtropical climate means crawl spaces are under constant assault from moisture. Our moisture control approach addresses every source: ground moisture through vapor barriers, air moisture through encapsulation and dehumidifiers, and water intrusion through drainage systems. We install commercial-grade dehumidifiers with automatic humidity sensing, hygrometer monitoring systems, and smart ventilation solutions that maintain optimal humidity below 55% year-round. Every moisture control system is custom-designed for your specific crawl space conditions.',
    features: ['Commercial dehumidifiers', 'Humidity monitoring systems', 'Smart ventilation', 'Vapor barrier integration', 'Automated controls', 'Annual maintenance plans'],
    faqs: [
      { question: 'What humidity level should my crawl space be?', answer: 'We recommend maintaining crawl space humidity below 55% relative humidity. Above this level, mold growth, wood rot, and pest activity increase significantly.' },
      { question: 'How much does a crawl space dehumidifier cost?', answer: 'Crawl space dehumidifier installation ranges from $1,800 to $3,500 including the unit, installation, and electrical connection.' },
      { question: 'How much does it cost to run a dehumidifier?', answer: 'Our energy-efficient crawl space dehumidifiers typically cost $30-$60 per month to operate. The energy savings from reduced HVAC load often offset most of the operating cost.' },
    ],
  },
  {
    slug: 'sump-pump',
    name: 'Sump Pump Installation',
    shortDescription: 'Sump pump installation to remove standing water and prevent flooding in your crawl space.',
    description: 'Professional sump pump installation in Florence, Alabama — essential protection against crawl space flooding. Many homes in the Shoals area, particularly those near the Tennessee River in Sheffield and Muscle Shoals, experience periodic water intrusion in their crawl spaces. Our sump pump systems are designed specifically for crawl space environments, featuring a recessed sump pit, a high-capacity submersible pump, and a discharge line that directs water safely away from your foundation. We install primary and battery backup pumps so your crawl space stays dry even during power outages.',
    features: ['Primary & battery backup pumps', 'Recessed sump pit installation', 'Airtight sealed lid', 'Check valve included', 'Discharge line routing', 'Power outage protection'],
    faqs: [
      { question: 'Do I need a sump pump in my crawl space?', answer: 'If you see standing water, damp spots, or consistently high humidity in your crawl space, a sump pump is essential.' },
      { question: 'What happens if the power goes out?', answer: 'We install battery backup sump pumps on every system. When the primary pump loses power, the backup automatically activates and can run for 8-12 hours.' },
      { question: 'How much does sump pump installation cost?', answer: 'Sump pump installation in the Florence area typically ranges from $1,500 to $3,500 depending on the pump capacity and complexity.' },
    ],
  },
  {
    slug: 'crawl-space-insulation',
    name: 'Crawl Space Insulation',
    shortDescription: 'High-performance crawl space insulation to improve energy efficiency and home comfort.',
    description: 'Professional crawl space insulation in Florence, Alabama — improving your home\'s energy efficiency from below. Many Shoals area homes have little or no insulation in their crawl spaces, allowing cold winter air and hot summer heat to transfer directly through your floors. We install spray foam, rigid foam board, and fiberglass insulation solutions rated for crawl space environments. Our insulation installations are always paired with moisture control measures to prevent condensation and mold growth within the insulation itself. Proper crawl space insulation can reduce energy costs by 15-25% and make your floors noticeably warmer in winter.',
    features: ['Spray foam insulation', 'Rigid foam board', 'Fiberglass batt options', 'Moisture-resistant materials', 'R-value optimization', 'Floor comfort improvement'],
    faqs: [
      { question: 'Should I insulate my crawl space walls or ceiling?', answer: 'In the Shoals area, we recommend insulating crawl space walls (not the ceiling/floor joists) when the crawl space is sealed and encapsulated. This approach keeps the crawl space within the home\'s thermal envelope.' },
      { question: 'What type of insulation is best for crawl spaces?', answer: 'Closed-cell spray foam is the gold standard for crawl spaces — it provides both insulation and a moisture barrier. Rigid foam board is a close second and more budget-friendly.' },
      { question: 'How much does crawl space insulation cost?', answer: 'Crawl space insulation in the Florence area ranges from $2,000 to $6,000 depending on the area to be insulated and the type of insulation used.' },
    ],
  },
  {
    slug: 'drainage-systems',
    name: 'Drainage Systems',
    shortDescription: 'Interior and exterior drainage solutions to redirect water away from your foundation.',
    description: 'Professional drainage system installation in Florence, Alabama — keeping water away from your foundation permanently. Poor drainage is one of the most common causes of crawl space moisture problems in the Shoals area. Clay-heavy soils, improper grading, and clogged gutters all contribute to water pooling around and beneath homes. Our drainage solutions include interior French drains, exterior curtain drains, downspout extensions, and grading corrections. Interior systems channel water along the foundation perimeter to a sump pump, while exterior systems intercept water before it reaches your foundation. We design each system based on your property\'s specific topography and water flow patterns.',
    features: ['Interior French drains', 'Exterior curtain drains', 'Downspout extensions', 'Grading corrections', 'Sump pump integration', 'Custom system design'],
    faqs: [
      { question: 'Do I need interior or exterior drainage?', answer: 'Most Shoals area homes benefit from interior drainage systems because they\'re less disruptive to install and work regardless of exterior conditions. Exterior drainage is best for properties with severe grading issues.' },
      { question: 'How much does a drainage system cost?', answer: 'Drainage system installation in the Florence area ranges from $2,500 to $8,000 depending on the scope and whether interior or exterior systems are needed.' },
      { question: 'Will a drainage system fix my wet crawl space?', answer: 'Drainage systems are one component of a complete moisture control solution. Most wet crawl spaces benefit from drainage combined with encapsulation and a sump pump for comprehensive protection.' },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(s => s.slug === slug);
}
