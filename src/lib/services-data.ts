export interface Service {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  metaTitle: string;
  metaDescription: string;
  heroDescription: string;
  directAnswer?: string;
  description: string;
  content: string;
  benefits: { title: string; description: string }[];
  process: { step: number; title: string; description: string }[];
  faqs: { question: string; answer: string }[];
}

export const services: Service[] = [
  {
    slug: "encapsulation",
    name: "Crawl Space Encapsulation",
    shortName: "Encapsulation",
    tagline: "Complete crawl space encapsulation to eliminate moisture, mold, and energy loss",
    metaTitle: "Crawl Space Encapsulation Florence AL | Shoals Crawl Space",
    metaDescription: "Need crawl space encapsulation in Florence, AL? Shoals Crawl Space Encapsulation offers complete moisture protection. Save up to 30% on energy bills. Call (256) 415-7610!",
    heroDescription: "Expert crawl space encapsulation services for homeowners throughout the Shoals area. Seal out moisture, mold, and energy loss for good.",
    description: "Professional crawl space encapsulation services in Florence, AL and surrounding areas",
    directAnswer: "Crawl space encapsulation in Florence, AL seals your crawl space with heavy-duty 12-20 mil reinforced vapor barriers on floors, walls, and piers. Shoals Crawl Space Repair installs commercial-grade barriers backed by a 25-year material warranty. Most homeowners see 15-30% energy savings and complete mold elimination.",
    content: `<p>When your crawl space needs protection in Florence, AL, you need a contractor you can trust to do the job right. Shoals Crawl Space Encapsulation has been providing expert encapsulation services to homeowners throughout Florence, Muscle Shoals, Sheffield, Tuscumbia, and the greater Shoals area for over 15 years. Alabama's average relative humidity exceeds 70% throughout the year, and the crawl spaces beneath older homes are especially vulnerable to moisture buildup that leads to mold, wood rot, and energy loss.</p>

<p>Our encapsulation process seals your entire crawl space with heavy-duty polyethylene barriers on the floor, walls, and piers, creating a controlled environment that blocks ground moisture, outside air, and pests. We use <strong>12-mil to 20-mil reinforced vapor barriers</strong> that are puncture-resistant, antimicrobial-treated, and backed by a 25-year warranty. Unlike thin contractor-grade barriers that tear and deteriorate, our commercial-quality materials are built to last decades.</p>

<p>Alabama's climate is particularly demanding on crawl spaces. The Shoals area experiences heavy spring rains, extreme summer heat with temperatures regularly exceeding 90°F, and high humidity year-round. These conditions cause <strong>wood rot</strong> on floor joists and subfloor, <strong>mold growth</strong> on organic materials, <strong>pest infestations</strong> from moisture-loving insects, and <strong>energy loss</strong> as humid air infiltrates your living space. Encapsulation addresses all of these problems at the source by creating a sealed, conditioned environment beneath your home.</p>

<p>Encapsulated crawl spaces typically see <strong>energy savings of 15-30%</strong> because your HVAC system no longer has to fight against the hot, humid air rising from below. We also install dehumidifiers and sump pumps as needed to maintain optimal humidity levels below 55%. Every encapsulation project includes a thorough inspection, mold treatment if necessary, and a written warranty on materials and labor.</p>

<p>Whether you've noticed musty odors in your home, found standing water under your house, spotted mold on floor joists, or simply want to improve your home's energy efficiency, Shoals Crawl Space Encapsulation is here to help. We provide free, no-obligation inspections and honest assessments — we'll never recommend a service you don't need. Call us at <strong>(256) 415-7610</strong> to schedule your free crawl space inspection today.</p>`,
    benefits: [
      { title: "Full Floor & Wall Barrier", description: "Heavy-duty 12-20 mil reinforced polyethylene covering floors, walls, and piers" },
      { title: "Sealed Vents & Access", description: "All foundation vents and access doors sealed to prevent outside air infiltration" },
      { title: "Energy Savings", description: "Typically 15-30% reduction in energy costs from reduced HVAC load" },
      { title: "Mold Prevention", description: "Eliminates the moisture that mold needs to grow, protecting your family's health" },
      { title: "Written Warranty", description: "Every project backed by our workmanship warranty plus 25-year material warranty" },
      { title: "Clean Job Sites", description: "We protect your property and clean up thoroughly after every job" },
    ],
    process: [
      { step: 1, title: "Free Inspection", description: "Call us or fill out our online form to schedule a free crawl space inspection at your convenience." },
      { step: 2, title: "Thorough Assessment", description: "Our technician inspects your crawl space, documents all issues, and provides a detailed report." },
      { step: 3, title: "Honest Estimate", description: "We provide a transparent, itemized estimate with no hidden fees or surprise charges." },
      { step: 4, title: "Expert Installation", description: "Our skilled crew completes the encapsulation using premium materials and proven techniques." },
      { step: 5, title: "Final Inspection", description: "We conduct a thorough final inspection and walk you through the completed work." },
    ],
    faqs: [
      { question: "How much does crawl space encapsulation cost in Florence, AL?", answer: "Crawl space encapsulation in the Florence area typically ranges from $5,000 to $15,000 depending on the size of your crawl space, the condition of existing moisture barriers, and whether additional services like sump pump installation or mold remediation are needed. We provide free inspections and detailed estimates." },
      { question: "How long does encapsulation take?", answer: "Most crawl space encapsulation projects in the Shoals area are completed in 2-4 days. Larger crawl spaces or those requiring extensive mold remediation or structural repair may take up to a week." },
      { question: "Will encapsulation really lower my energy bills?", answer: "Yes. Studies show that encapsulating your crawl space can reduce energy costs by 15-30%. In Alabama's hot, humid climate, an unsealed crawl space allows moisture-laden air to infiltrate your home, forcing your HVAC system to work harder." },
      { question: "Do I need encapsulation if I already have a vapor barrier?", answer: "A basic 6-mil vapor barrier laid on the crawl space floor provides minimal protection. Full encapsulation seals the floor, walls, piers, and vents — creating a completely closed system that addresses all sources of moisture." },
    ],
  },
  {
    slug: "vapor-barrier",
    name: "Vapor Barrier Installation",
    shortName: "Vapor Barrier",
    tagline: "Heavy-duty vapor barrier installation to block ground moisture from entering your crawl space",
    metaTitle: "Vapor Barrier Installation Florence AL | Shoals Crawl Space",
    metaDescription: "Need a vapor barrier in Florence, AL? Shoals Crawl Space installs 12-20 mil reinforced barriers. 25-year warranty. Call (256) 415-7610 for a free inspection!",
    heroDescription: "Professional vapor barrier installation to block ground moisture and protect your home's foundation, floors, and indoor air quality.",
    description: "Professional vapor barrier installation in Florence, AL and surrounding areas",
    directAnswer: "Vapor barrier installation in Florence, AL protects crawl spaces from ground moisture using 12-20 mil reinforced polyethylene barriers. Shoals Crawl Space Repair installs antimicrobial-treated barriers with sealed seams and mechanical fastening. Barrier installations start at $1,500 with a 25-year material warranty.",
    content: `<p>In the Shoals area, the red clay soil common throughout Lauderdale and Colbert counties holds significant moisture that migrates upward through the crawl space floor. Our team installs 12-mil to 20-mil reinforced polyethylene vapor barriers that cover the entire crawl space floor and extend up the foundation walls. Unlike thin, contractor-grade barriers that tear and deteriorate, our commercial-quality barriers are puncture-resistant, antimicrobial-treated, and backed by a 25-year warranty.</p>

<p>Proper vapor barrier installation can reduce crawl space humidity by 15-20% and prevent wood rot, mold growth, and structural damage to floor joists and subfloor. For crawl spaces in the Shoals area, we recommend at least <strong>12-mil reinforced polyethylene</strong>. Higher-traffic crawl spaces or those with sharp gravel benefit from 20-mil barrier.</p>

<p>Our commercial-grade reinforced vapor barriers are rated for 25+ years. Thin builder-grade barriers (6 mil) often deteriorate within 5-7 years. Call <strong>(256) 415-7610</strong> for a free vapor barrier inspection and estimate.</p>`,
    benefits: [
      { title: "12-20 Mil Reinforced", description: "Commercial-grade puncture-resistant barrier material rated for 25+ years" },
      { title: "Full Coverage", description: "Complete floor and wall coverage with seam taping and mechanical fastening" },
      { title: "Antimicrobial Treated", description: "Built-in antimicrobial protection prevents mold growth on the barrier surface" },
      { title: "Humidity Reduction", description: "Reduces crawl space humidity by 15-20% when properly installed" },
      { title: "25-Year Warranty", description: "Every barrier installation backed by our 25-year material warranty" },
      { title: "Affordable Protection", description: "Cost-effective first step toward a fully protected crawl space" },
    ],
    process: [
      { step: 1, title: "Free Inspection", description: "We assess your crawl space conditions and recommend the right barrier thickness." },
      { step: 2, title: "Preparation", description: "We clear debris, level the ground, and prepare the crawl space for installation." },
      { step: 3, title: "Barrier Installation", description: "Heavy-duty barrier installed on floors, walls, and piers with sealed seams." },
      { step: 4, title: "Quality Check", description: "We inspect every seam and fastener to ensure complete, lasting coverage." },
      { step: 5, title: "Final Walkthrough", description: "We walk you through the completed work and provide warranty documentation." },
    ],
    faqs: [
      { question: "What thickness vapor barrier do I need?", answer: "For crawl spaces in the Shoals area, we recommend at least 12-mil reinforced polyethylene. Higher-traffic crawl spaces or those with sharp gravel benefit from 20-mil barrier." },
      { question: "How is a vapor barrier different from encapsulation?", answer: "A vapor barrier covers only the crawl space floor to block ground moisture. Full encapsulation includes floor barriers, wall barriers, pier wrapping, vent sealing, and often a dehumidifier." },
      { question: "How long does a vapor barrier last?", answer: "Our commercial-grade reinforced vapor barriers are rated for 25+ years. Thin builder-grade barriers (6 mil) often deteriorate within 5-7 years." },
    ],
  },
  {
    slug: "crawl-space-waterproofing",
    name: "Crawl Space Waterproofing",
    shortName: "Waterproofing",
    tagline: "Complete waterproofing solutions to keep your crawl space permanently dry and protected",
    metaTitle: "Crawl Space Waterproofing Florence AL | Shoals Crawl Space",
    metaDescription: "Need crawl space waterproofing in Florence, AL? Shoals Crawl Space offers drainage systems, sump pumps & moisture barriers. Call (256) 415-7610!",
    heroDescription: "Comprehensive waterproofing solutions including drainage systems, sump pumps, and sealed barriers to keep your crawl space bone dry.",
    description: "Professional crawl space waterproofing in Florence, AL and surrounding areas",
    directAnswer: "Crawl space waterproofing in Florence, AL stops water intrusion with interior drainage systems, sump pumps, and wall sealants. Shoals Crawl Space Repair installs French drain systems that channel water to sump pumps, keeping crawl spaces permanently dry. Systems start at $3,500 with lifetime warranty options.",
    content: `<p>Many homes in the Shoals area experience crawl space flooding during heavy rains, spring thaw, and rising water table events. Our waterproofing solutions combine interior drainage channels, sump pump systems, and sealed vapor barriers to create a complete moisture management system. We install French drains along the interior perimeter that channel water to a recessed sump pit, where a high-capacity pump removes it safely away from your foundation.</p>

<p>Combined with wall encapsulation and sealed access points, our waterproofing systems keep crawl spaces bone dry year-round, even during North Alabama's heaviest rain events. Waterproofing focuses on actively removing water through drainage and pumping systems, while encapsulation focuses on preventing moisture from entering. Most homes benefit from both working together as a complete system.</p>

<p>If your crawl space shows signs of moisture — damp walls, condensation, musty odors — waterproofing can prevent the problem from escalating. Standing water is a late-stage symptom; early intervention saves money. Call <strong>(256) 415-7610</strong> for a free waterproofing assessment.</p>`,
    benefits: [
      { title: "Interior Perimeter Drainage", description: "French drains channel water to sump pit for safe removal" },
      { title: "Sump Pump Integration", description: "High-capacity pumps with battery backup for power outages" },
      { title: "Wall Barrier Sealing", description: "Complete wall coverage prevents moisture migration" },
      { title: "Discharge Line Routing", description: "Water directed safely away from your foundation" },
      { title: "Lifetime System Warranty", description: "Our waterproofing systems are warrantied for the life of your home" },
      { title: "Complete Protection", description: "Addresses all sources of water intrusion permanently" },
    ],
    process: [
      { step: 1, title: "Water Assessment", description: "We identify all sources of water intrusion and drainage issues." },
      { step: 2, title: "System Design", description: "Custom waterproofing plan based on your property's specific conditions." },
      { step: 3, title: "Drain Installation", description: "Interior French drains installed along the foundation perimeter." },
      { step: 4, title: "Sump Pump Setup", description: "Recessed sump pit with primary and backup pumps installed." },
      { step: 5, title: "System Testing", description: "Full system test to ensure proper water flow and pump operation." },
    ],
    faqs: [
      { question: "How is waterproofing different from encapsulation?", answer: "Waterproofing focuses on actively removing water through drainage and pumping systems. Encapsulation focuses on preventing moisture from entering. Most homes benefit from both working together." },
      { question: "Do I need waterproofing if I don't have standing water?", answer: "If your crawl space shows signs of moisture — damp walls, condensation, musty odors — waterproofing can prevent the problem from escalating." },
      { question: "How much does crawl space waterproofing cost?", answer: "Crawl space waterproofing in the Florence area typically ranges from $3,000 to $10,000 depending on the scope of the system needed." },
    ],
  },
  {
    slug: "crawl-space-repair",
    name: "Crawl Space Repair",
    shortName: "Repair",
    tagline: "Structural crawl space repair for sagging floors, damaged joists, and settling foundations",
    metaTitle: "Crawl Space Repair Florence AL | Shoals Crawl Space",
    metaDescription: "Need crawl space repair in Florence, AL? Shoals Crawl Space fixes sagging floors, damaged joists & settling foundations. Call (256) 415-7610!",
    heroDescription: "Expert structural repair for sagging floors, damaged joists, and settling foundations. Restore your home's structural integrity.",
    description: "Professional crawl space repair in Florence, AL and surrounding areas",
    directAnswer: "Crawl space repair in Florence, AL fixes sagging floors, damaged joists, and deteriorating support posts caused by moisture and wood rot. Shoals Crawl Space Repair sistering joists, replacing posts, and re-leveling floors with steel supports. Repairs start at $2,000 with transferable structural warranties.",
    content: `<p>Over time, the crawl spaces beneath Shoals area homes deteriorate due to moisture damage, wood rot, and settling. Common problems include sagging floors, bouncy floor joists, cracked or leaning piers, and deteriorated support beams. Our repair team installs adjustable steel support posts, sistered joists, and new beam sections to permanently stabilize your floor system.</p>

<p>Warning signs include sagging or bouncy floors, doors that won't close properly, visible cracks in drywall, and gaps between the floor and baseboards. In most cases, we can stabilize and level your floors from below by installing steel support posts, sistering damaged joists, and replacing deteriorated piers.</p>

<p>We also address the root cause of the damage — typically moisture — by combining structural repairs with encapsulation or vapor barrier installation. Call <strong>(256) 415-7610</strong> for a free structural assessment.</p>`,
    benefits: [
      { title: "Steel Support Posts", description: "Adjustable steel posts permanently stabilize sagging floors" },
      { title: "Sistered Floor Joists", description: "Damaged joists reinforced with new lumber for lasting strength" },
      { title: "Pier Replacement", description: "Deteriorated piers replaced with new concrete or steel supports" },
      { title: "Floor Leveling", description: "Floors leveled and stabilized from below without disrupting your living space" },
      { title: "Transferable Warranty", description: "Our repair warranties transfer to new homeowners, adding property value" },
      { title: "Root Cause Repair", description: "We fix the moisture problem that caused the damage to prevent recurrence" },
    ],
    process: [
      { step: 1, title: "Structural Assessment", description: "We inspect joists, piers, beams, and subfloor to identify all damage." },
      { step: 2, title: "Repair Plan", description: "Detailed repair plan with transparent pricing and timeline." },
      { step: 3, title: "Material Staging", description: "Steel posts, lumber, and hardware staged for efficient installation." },
      { step: 4, title: "Expert Repair", description: "Our crew installs supports, sisters joists, and levels floors from below." },
      { step: 5, title: "Final Inspection", description: "We verify structural integrity and clean up the work area." },
    ],
    faqs: [
      { question: "How do I know if my crawl space needs structural repair?", answer: "Warning signs include sagging or bouncy floors, doors that won't close properly, visible cracks in drywall, and gaps between the floor and baseboards." },
      { question: "Can sagging floors be fixed without replacing the floor?", answer: "Yes. In most cases, we can stabilize and level your floors from below by installing steel support posts, sistering damaged joists, and replacing deteriorated piers." },
      { question: "How much does crawl space repair cost?", answer: "Structural crawl space repairs in the Florence area range from $2,000 to $10,000 depending on the extent of damage." },
    ],
  },
  {
    slug: "moisture-control",
    name: "Moisture Control",
    shortName: "Moisture Control",
    tagline: "Comprehensive moisture management systems for optimal crawl space humidity control",
    metaTitle: "Crawl Space Moisture Control Florence AL | Shoals Crawl Space",
    metaDescription: "Need moisture control in Florence, AL? Shoals Crawl Space installs dehumidifiers, ventilation & monitoring systems. Call (256) 415-7610!",
    heroDescription: "Commercial-grade dehumidifiers, humidity monitoring, and smart ventilation to maintain optimal crawl space conditions year-round.",
    description: "Professional crawl space moisture control in Florence, AL and surrounding areas",
    directAnswer: "Crawl space moisture control in Florence, AL combines commercial dehumidifiers, sealed vents, and proper ventilation to maintain optimal humidity levels. Shoals Crawl Space Repair installs Santa Fe dehumidifiers rated for crawl spaces up to 3,000 sq ft. Systems start at $1,800 with annual maintenance plans available.",
    content: `<p>Alabama's subtropical climate means crawl spaces are under constant assault from moisture. Our moisture control approach addresses every source: ground moisture through vapor barriers, air moisture through encapsulation and dehumidifiers, and water intrusion through drainage systems. We install commercial-grade dehumidifiers with automatic humidity sensing, hygrometer monitoring systems, and smart ventilation solutions that maintain optimal humidity below 55% year-round.</p>

<p>We recommend maintaining crawl space humidity below 55% relative humidity. Above this level, mold growth, wood rot, and pest activity increase significantly. Our energy-efficient crawl space dehumidifiers typically cost $30-$60 per month to operate, and the energy savings from reduced HVAC load often offset most of the operating cost.</p>

<p>Every moisture control system is custom-designed for your specific crawl space conditions. Call <strong>(256) 415-7610</strong> for a free moisture assessment.</p>`,
    benefits: [
      { title: "Commercial Dehumidifiers", description: "High-capacity units designed specifically for crawl space environments" },
      { title: "Humidity Monitoring", description: "Digital hygrometers track conditions and alert you to problems" },
      { title: "Smart Ventilation", description: "Automated systems adjust to changing conditions throughout the year" },
      { title: "Automated Controls", description: "Set-and-forget systems maintain optimal humidity without manual intervention" },
      { title: "Energy Efficient", description: "Low operating costs — typically $30-$60 per month" },
      { title: "Annual Maintenance", description: "Optional maintenance plans keep your system running at peak performance" },
    ],
    process: [
      { step: 1, title: "Moisture Assessment", description: "We measure current humidity levels and identify all moisture sources." },
      { step: 2, title: "System Design", description: "Custom moisture control plan based on your crawl space conditions." },
      { step: 3, title: "Equipment Installation", description: "Dehumidifier, sensors, and controls professionally installed." },
      { step: 4, title: "System Calibration", description: "Controls set to maintain optimal humidity levels automatically." },
      { step: 5, title: "Ongoing Support", description: "We provide maintenance recommendations and remain available for service." },
    ],
    faqs: [
      { question: "What humidity level should my crawl space be?", answer: "We recommend maintaining crawl space humidity below 55% relative humidity. Above this level, mold growth, wood rot, and pest activity increase significantly." },
      { question: "How much does a crawl space dehumidifier cost?", answer: "Crawl space dehumidifier installation ranges from $1,800 to $3,500 including the unit, installation, and electrical connection." },
      { question: "How much does it cost to run a dehumidifier?", answer: "Our energy-efficient crawl space dehumidifiers typically cost $30-$60 per month to operate. The energy savings from reduced HVAC load often offset most of the operating cost." },
    ],
  },
  {
    slug: "sump-pump",
    name: "Sump Pump Installation",
    shortName: "Sump Pump",
    tagline: "Sump pump installation to remove standing water and prevent flooding in your crawl space",
    metaTitle: "Sump Pump Installation Florence AL | Shoals Crawl Space",
    metaDescription: "Need a sump pump in Florence, AL? Shoals Crawl Space installs primary & battery backup sump pumps. Call (256) 415-7610 for a free estimate!",
    heroDescription: "Primary and battery backup sump pump systems to keep your crawl space dry during storms and power outages.",
    description: "Professional sump pump installation in Florence, AL and surrounding areas",
    directAnswer: "Sump pump installation in Florence, AL removes standing water from crawl spaces and prevents flooding during heavy rains. Shoals Crawl Space Repair installs primary and battery backup sump pump systems with sealed lids and alarm systems. Installations start at $1,200 with annual maintenance plans.",
    content: `<p>Many homes in the Shoals area, particularly those near the Tennessee River in Sheffield and Muscle Shoals, experience periodic water intrusion in their crawl spaces. Our sump pump systems are designed specifically for crawl space environments, featuring a recessed sump pit, a high-capacity submersible pump, and a discharge line that directs water safely away from your foundation.</p>

<p>We install primary and battery backup pumps so your crawl space stays dry even during power outages. When the primary pump loses power, the backup automatically activates and can run for 8-12 hours. Every system includes an airtight sealed lid, check valve, and properly routed discharge line.</p>

<p>If you see standing water, damp spots, or consistently high humidity in your crawl space, a sump pump is essential. Call <strong>(256) 415-7610</strong> for a free sump pump consultation.</p>`,
    benefits: [
      { title: "Primary & Backup Pumps", description: "Battery backup ensures protection during power outages" },
      { title: "Recessed Sump Pit", description: "Professionally installed pit with airtight sealed lid" },
      { title: "Check Valve Included", description: "Prevents water backflow into the sump pit" },
      { title: "Discharge Routing", description: "Water directed safely away from your foundation" },
      { title: "Power Outage Protection", description: "Backup pump runs 8-12 hours on battery power" },
      { title: "Peace of Mind", description: "Your crawl space stays dry through any storm" },
    ],
    process: [
      { step: 1, title: "Site Assessment", description: "We evaluate water patterns and determine optimal sump pit location." },
      { step: 2, title: "Pit Installation", description: "Recessed sump pit installed in the lowest point of the crawl space." },
      { step: 3, title: "Pump Setup", description: "Primary and battery backup pumps installed and connected." },
      { step: 4, title: "Discharge Routing", description: "Discharge line routed to direct water safely away from foundation." },
      { step: 5, title: "System Test", description: "Full system test to verify pump operation and water flow." },
    ],
    faqs: [
      { question: "Do I need a sump pump in my crawl space?", answer: "If you see standing water, damp spots, or consistently high humidity in your crawl space, a sump pump is essential." },
      { question: "What happens if the power goes out?", answer: "We install battery backup sump pumps on every system. When the primary pump loses power, the backup automatically activates and can run for 8-12 hours." },
      { question: "How much does sump pump installation cost?", answer: "Sump pump installation in the Florence area typically ranges from $1,500 to $3,500 depending on the pump capacity and complexity." },
    ],
  },
  {
    slug: "crawl-space-insulation",
    name: "Crawl Space Insulation",
    shortName: "Insulation",
    tagline: "High-performance crawl space insulation to improve energy efficiency and home comfort",
    metaTitle: "Crawl Space Insulation Florence AL | Shoals Crawl Space",
    metaDescription: "Need crawl space insulation in Florence, AL? Shoals Crawl Space installs spray foam & rigid insulation. Call (256) 415-7610 for a free estimate!",
    heroDescription: "Professional crawl space insulation installation to improve energy efficiency, floor comfort, and indoor air quality.",
    description: "Professional crawl space insulation in Florence, AL and surrounding areas",
    directAnswer: "Crawl space insulation in Florence, AL reduces energy costs and prevents cold floors using spray foam or rigid foam board insulation. Shoals Crawl Space Repair installs R-10 to R-19 insulation on crawl space walls and rim joists. Insulation projects start at $2,000 with 15-year material warranties.",
    content: `<p>Many Shoals area homes have little or no insulation in their crawl spaces, allowing cold winter air and hot summer heat to transfer directly through your floors. We install spray foam, rigid foam board, and fiberglass insulation solutions rated for crawl space environments.</p>

<p>Our insulation installations are always paired with moisture control measures to prevent condensation and mold growth within the insulation itself. Proper crawl space insulation can reduce energy costs by 15-25% and make your floors noticeably warmer in winter.</p>

<p>In the Shoals area, we recommend insulating crawl space walls (not the ceiling/floor joists) when the crawl space is sealed and encapsulated. Closed-cell spray foam is the gold standard — it provides both insulation and a moisture barrier. Call <strong>(256) 415-7610</strong> for a free insulation assessment.</p>`,
    benefits: [
      { title: "Spray Foam Insulation", description: "Closed-cell spray foam provides insulation and moisture barrier in one" },
      { title: "Rigid Foam Board", description: "Budget-friendly option with excellent R-value per inch" },
      { title: "Moisture Resistant", description: "All materials rated for crawl space environments" },
      { title: "R-Value Optimization", description: "Proper R-value for Alabama's climate zone" },
      { title: "Floor Comfort", description: "Warmer floors in winter, cooler in summer" },
      { title: "Energy Savings", description: "15-25% reduction in energy costs from reduced thermal transfer" },
    ],
    process: [
      { step: 1, title: "Insulation Assessment", description: "We evaluate current insulation levels and recommend the best solution." },
      { step: 2, title: "Material Selection", description: "Choose from spray foam, rigid board, or fiberglass based on your needs." },
      { step: 3, title: "Preparation", description: "Crawl space cleaned and prepped for insulation installation." },
      { step: 4, title: "Professional Install", description: "Insulation installed on walls and rim joists for maximum efficiency." },
      { step: 5, title: "Quality Verification", description: "R-value verification and complete coverage inspection." },
    ],
    faqs: [
      { question: "Should I insulate my crawl space walls or ceiling?", answer: "In the Shoals area, we recommend insulating crawl space walls (not the ceiling/floor joists) when the crawl space is sealed and encapsulated." },
      { question: "What type of insulation is best for crawl spaces?", answer: "Closed-cell spray foam is the gold standard — it provides both insulation and a moisture barrier. Rigid foam board is a close second and more budget-friendly." },
      { question: "How much does crawl space insulation cost?", answer: "Crawl space insulation in the Florence area ranges from $2,000 to $6,000 depending on the area to be insulated and the type of insulation used." },
    ],
  },
  {
    slug: "drainage-systems",
    name: "Drainage Systems",
    shortName: "Drainage",
    tagline: "Interior and exterior drainage solutions to redirect water away from your foundation",
    metaTitle: "Drainage Systems Florence AL | Shoals Crawl Space",
    metaDescription: "Need drainage in Florence, AL? Shoals Crawl Space installs French drains, curtain drains & grading corrections. Call (256) 415-7610!",
    heroDescription: "Professional interior and exterior drainage solutions to permanently redirect water away from your foundation.",
    description: "Professional drainage system installation in Florence, AL and surrounding areas",
    directAnswer: "Crawl space drainage systems in Florence, AL channel water away from foundations using French drains, channel drains, and grading corrections. Shoals Crawl Space Repair installs interior and exterior drainage systems with sump pump integration. Drainage projects start at $2,500 with transferable warranties.",
    content: `<p>Poor drainage is one of the most common causes of crawl space moisture problems in the Shoals area. Clay-heavy soils, improper grading, and clogged gutters all contribute to water pooling around and beneath homes. Our drainage solutions include interior French drains, exterior curtain drains, downspout extensions, and grading corrections.</p>

<p>Interior systems channel water along the foundation perimeter to a sump pump, while exterior systems intercept water before it reaches your foundation. We design each system based on your property's specific topography and water flow patterns.</p>

<p>Most Shoals area homes benefit from interior drainage systems because they're less disruptive to install and work regardless of exterior conditions. Call <strong>(256) 415-7610</strong> for a free drainage assessment.</p>`,
    benefits: [
      { title: "Interior French Drains", description: "Perimeter drainage channels water to sump pump for removal" },
      { title: "Exterior Curtain Drains", description: "Intercept water before it reaches your foundation" },
      { title: "Downspout Extensions", description: "Direct roof water safely away from your home" },
      { title: "Grading Corrections", description: "Proper grading ensures water flows away from foundation" },
      { title: "Sump Pump Integration", description: "Drainage systems work with sump pumps for complete water management" },
      { title: "Custom Design", description: "Every system designed for your specific property conditions" },
    ],
    process: [
      { step: 1, title: "Drainage Assessment", description: "We evaluate water flow patterns, soil conditions, and existing drainage." },
      { step: 2, title: "System Design", description: "Custom drainage plan based on your property's specific needs." },
      { step: 3, title: "Excavation", description: "Trenching and preparation for drain line installation." },
      { step: 4, title: "Drain Installation", description: "French drains, pipes, and fittings professionally installed." },
      { step: 5, title: "System Testing", description: "Water flow testing to verify proper drainage operation." },
    ],
    faqs: [
      { question: "Do I need interior or exterior drainage?", answer: "Most Shoals area homes benefit from interior drainage systems because they're less disruptive to install and work regardless of exterior conditions." },
      { question: "How much does a drainage system cost?", answer: "Drainage system installation in the Florence area ranges from $2,500 to $8,000 depending on the scope and whether interior or exterior systems are needed." },
      { question: "Will a drainage system fix my wet crawl space?", answer: "Drainage systems are one component of a complete moisture control solution. Most wet crawl spaces benefit from drainage combined with encapsulation and a sump pump." },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
