import type { FAQItem } from "@/components/FAQSection";

export interface SpecialtyServicePageData {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  intro: string;
  serviceType: string;
  priorityKeywords?: string[];
  parentCategory?: "demolition" | "junk-removal" | "cleanouts" | "lead-safe" | "water-mitigation";
  commonJobs: string[];
  jobDetails: { title: string; description: string }[];
  whyUs: string[];
  faq: FAQItem[];
  relatedServices: { label: string; href: string }[];
}

export interface CityServicePageData {
  service: "junk-removal" | "demolition";
  citySlug: string;
  city: string;
  state: "KS" | "MO";
  title: string;
  description: string;
  h1: string;
  intro: string;
  serviceType: string;
  services: string[];
  commonJobs: string[];
  localExamples?: { title: string; description: string }[];
  quoteFactors?: string[];
  relatedJobLinks?: { label: string; href: string }[];
  whyUs: string[];
  faq: FAQItem[];
}

const residentialRelated = [
  { label: "Demolition Services", href: "/services/demolition" },
  { label: "Residential Demo", href: "/services/residential" },
  { label: "Garage Demolition", href: "/services/garage-demolition" },
  { label: "Shed Demolition", href: "/services/shed-demolition" },
  { label: "Deck Removal", href: "/services/deck-removal" },
];

const cleanoutRelated = [
  { label: "Junk Removal", href: "/services/junk-removal" },
  { label: "Cleanouts", href: "/services/cleanouts" },
  { label: "House Cleanouts", href: "/services/house-cleanouts" },
  { label: "Estate Cleanouts", href: "/services/estate-cleanouts" },
  { label: "Commercial Cleanouts", href: "/services/commercial-cleanouts" },
];

const commercialRelated = [
  { label: "Demolition Services", href: "/services/demolition" },
  { label: "Commercial Demo", href: "/services/commercial" },
  { label: "Construction Debris", href: "/services/construction-debris-removal" },
  { label: "Concrete Removal", href: "/services/concrete-removal" },
  { label: "Commercial Cleanouts", href: "/services/commercial-cleanouts" },
  { label: "Rental Cleanouts", href: "/services/rental-property-cleanouts" },
];

const junkRemovalRelated = [
  { label: "Junk Removal", href: "/services/junk-removal" },
  { label: "Furniture Removal", href: "/services/furniture-removal" },
  { label: "Appliance Removal", href: "/services/appliance-removal" },
  { label: "Mattress Removal", href: "/services/mattress-removal" },
  { label: "Yard Debris Removal", href: "/services/yard-debris-removal" },
  { label: "Hot Tub Removal", href: "/services/hot-tub-removal" },
  { label: "Bulk Trash Pickup", href: "/services/bulk-trash-pickup" },
  { label: "Haul Away Junk", href: "/services/haul-away-junk" },
];

const waterMitigationRelated = [
  { label: "Water Mitigation", href: "/services/water-mitigation" },
  { label: "Water Damage Cleanup", href: "/services/water-damage-cleanup" },
  { label: "Flood Cleanup", href: "/services/flood-cleanup" },
  { label: "Burst Pipe Cleanup", href: "/services/burst-pipe-cleanup" },
  { label: "Water Extraction", href: "/services/water-extraction" },
  { label: "Basement Water Cleanup", href: "/services/basement-water-cleanup" },
  { label: "Basement Cleanouts", href: "/services/basement-cleanouts" },
];

function createItemRemovalPage({
  slug,
  title,
  eyebrow,
  item,
  examples,
}: {
  slug: string;
  title: string;
  eyebrow: string;
  item: string;
  examples: string[];
}): SpecialtyServicePageData {
  const keyword = `${item.toLowerCase()} kansas city`;

  return {
    slug,
    title,
    description: `${eyebrow} in Kansas City for ${examples.slice(0, 3).join(", ")}, loading, haul-away, cleanup, and property cleanout support.`,
    eyebrow,
    h1: `${eyebrow} in Kansas City`,
    intro: `We handle ${item.toLowerCase()} across the Kansas City metro when bulky, awkward, or high-volume material needs to be loaded and hauled away.`,
    serviceType: `${eyebrow} services`,
    priorityKeywords: [keyword],
    parentCategory: "junk-removal",
    commonJobs: [
      `${examples[0]} removal`,
      `${examples[1]} haul-away`,
      `${examples[2]} cleanup`,
      "Inside, garage, basement, or exterior pickup",
      "Loading, hauling, and disposal coordination",
    ],
    jobDetails: [
      {
        title: "Heavy Lifting and Loading",
        description:
          "Our crew handles the lifting and loading so you do not have to move everything to the curb before the job.",
      },
      {
        title: "Haul-Away Included",
        description:
          "The scope includes getting unwanted material off the property, not just moving it from one place to another.",
      },
      {
        title: "Inside or Outside Pickup",
        description:
          "Items can be removed from living areas, garages, basements, storage spaces, rental properties, or exterior areas depending on the job.",
      },
      {
        title: "Good Fit for Cleanouts",
        description:
          "This service can be bundled with garage, basement, rental, estate, or whole-property cleanout work.",
      },
      {
        title: "Clear Quote Factors",
        description:
          "Pricing depends on item size, quantity, access, weight, stairs, loading time, and whether the job includes additional junk or debris.",
      },
    ],
    whyUs: [
      "Owner-operated communication before and during the job",
      "Own dumpsters and equipment help keep haul-away practical",
      "Clean finish for homes, rentals, garages, basements, and job sites",
    ],
    faq: [
      {
        question: `Do you offer ${eyebrow.toLowerCase()} in Kansas City?`,
        answer: `Yes. We provide ${eyebrow.toLowerCase()} and related haul-away support across the Kansas City metro.`,
      },
      {
        question: "Do I need to move items outside first?",
        answer:
          "No. We can remove items from inside the property, garage, basement, or exterior areas as part of the job.",
      },
      {
        question: "Can this be part of a larger cleanout?",
        answer:
          "Yes. Item removal can be combined with cleanouts, junk removal, demolition debris, or property turnover cleanup.",
      },
      {
        question: `What affects a ${eyebrow.toLowerCase()} quote?`,
        answer:
          "Common quote factors include the number of items, size, weight, stairs, access, loading time, and whether other junk or debris is included.",
      },
    ],
    relatedServices: junkRemovalRelated,
  };
}

function createWaterMitigationPage({
  slug,
  title,
  eyebrow,
  event,
  keyword,
  examples,
}: {
  slug: string;
  title: string;
  eyebrow: string;
  event: string;
  keyword: string;
  examples: string[];
}): SpecialtyServicePageData {
  return {
    slug,
    title,
    description: `${eyebrow} in Kansas City for ${examples.slice(0, 3).join(", ")}, water removal, drying support, damaged-content cleanup, and property stabilization.`,
    eyebrow,
    h1: `${eyebrow} in Kansas City`,
    intro: `When ${event.toLowerCase()} affects a home, rental, or commercial space, fast cleanup and moisture control help keep the damage from spreading.`,
    serviceType: `${eyebrow} services`,
    priorityKeywords: [keyword],
    parentCategory: "water-mitigation",
    commonJobs: [
      `${examples[0]} response`,
      `${examples[1]} cleanup`,
      `${examples[2]} drying support`,
      "Damaged contents, debris, and moisture control planning",
    ],
    jobDetails: [
      {
        title: "Water Removal First",
        description:
          "The first priority is removing standing water and wet material so the affected area can begin drying.",
      },
      {
        title: "Drying and Moisture Control",
        description:
          "We focus on practical drying support and moisture control for floors, walls, contents, and affected rooms.",
      },
      {
        title: "Contents and Debris Cleanup",
        description:
          "Water events often create damaged contents and debris that need to be removed before repair work can move forward.",
      },
      {
        title: "Basement and Lower-Level Work",
        description:
          "Many Kansas City water calls involve basements, lower levels, storage areas, and tight spaces that need careful removal.",
      },
      {
        title: "Ready for Repair",
        description:
          "The goal is to stabilize the space so property owners, managers, or repair contractors can take the next step.",
      },
    ],
    whyUs: [
      "Fast-response cleanup and haul-away support when water damage cannot sit",
      "Can combine water cleanup, damaged-content removal, and light demolition needs",
      "Owner-operated communication about scope, access, and next steps",
    ],
    faq: [
      {
        question: `Do you provide ${eyebrow.toLowerCase()} in Kansas City?`,
        answer: `Yes. We provide ${eyebrow.toLowerCase()} and related water mitigation support across the Kansas City metro.`,
      },
      {
        question: "Can you remove water-damaged contents?",
        answer:
          "Yes. Damaged contents, debris, and wet material can be included in the cleanup scope when removal is needed.",
      },
      {
        question: "Can this include basement water cleanup?",
        answer:
          "Yes. Basement water removal, damaged-content cleanup, and drying support can be scoped together when appropriate.",
      },
      {
        question: "What should happen first after water damage?",
        answer:
          "Standing water and wet material should be addressed quickly so drying can begin and the damage does not continue spreading.",
      },
    ],
    relatedServices: waterMitigationRelated,
  };
}

const ADDITIONAL_SPECIALTY_SERVICE_PAGES: SpecialtyServicePageData[] = [
  {
    slug: "demolition",
    title: "Kansas City Demolition Company",
    description:
      "Kansas City demolition company for residential demolition, commercial demolition, interior tear-outs, garage demo, shed removal, deck removal, concrete removal, and debris cleanup.",
    eyebrow: "Demolition Services",
    h1: "Kansas City Demolition Company and Cleanup Crew",
    intro:
      "Kidd's Clean Up and Demo handles practical demolition work for homeowners, landlords, businesses, contractors, and property managers across the Kansas City metro.",
    serviceType: "Demolition contractor services",
    priorityKeywords: [
      "demolition company kansas city",
      "demolition contractors kansas city",
      "residential demolition kansas city",
      "commercial demolition kansas city",
    ],
    parentCategory: "demolition",
    commonJobs: [
      "Residential and commercial demolition",
      "Interior demolition and selective tear-outs",
      "Garage, shed, deck, and small structure removal",
      "Concrete removal and construction debris cleanup",
    ],
    jobDetails: [
      {
        title: "Residential Demolition",
        description:
          "Garage demo, shed removal, deck removal, interior tear-outs, and prep work for homeowners and landlords.",
      },
      {
        title: "Commercial Demolition",
        description:
          "Office buildout demo, retail strip-outs, warehouse cleanup, construction debris removal, and site-prep support.",
      },
      {
        title: "Cleanup and Haul-Away",
        description:
          "Demolition debris is loaded, hauled, and cleaned up so the site is ready for the next phase.",
      },
    ],
    whyUs: [
      "Family-owned, owner-operated service across the KC metro",
      "Own dumpsters and equipment reduce delays and handoffs",
      "Straightforward quotes for demolition, cleanup, and haul-away",
    ],
    faq: [
      {
        question: "What demolition services do you provide in Kansas City?",
        answer:
          "We handle residential demolition, commercial demolition, interior tear-outs, garage demolition, shed removal, deck removal, concrete removal, and debris cleanup.",
      },
      {
        question: "Are you a good fit for small demolition jobs?",
        answer:
          "Yes. Many projects are selective tear-outs, garages, sheds, decks, and cleanup jobs where a practical crew and haul-away plan matter.",
      },
      {
        question: "Do you remove demolition debris?",
        answer:
          "Yes. Debris loading, haul-away, and cleanup are part of how we scope demolition projects.",
      },
    ],
    relatedServices: [
      { label: "Residential Demo", href: "/services/residential" },
      { label: "Commercial Demo", href: "/services/commercial" },
      { label: "Interior Demolition", href: "/services/interior-demolition" },
      { label: "Construction Debris", href: "/services/construction-debris-removal" },
    ],
  },
  {
    slug: "house-demolition",
    title: "House Demolition Kansas City",
    description:
      "House demolition in Kansas City for full and partial residential structure removal, interior tear-outs, debris loading, haul-away, and site cleanup.",
    eyebrow: "House Demolition",
    h1: "Kansas City House Demolition and Residential Structure Removal",
    intro:
      "When a house or residential structure needs full demolition, partial removal, or major tear-out work, we help property owners plan access, debris, cleanup, and the next step for the site.",
    serviceType: "House demolition services",
    priorityKeywords: ["house demolition kansas city"],
    parentCategory: "demolition",
    commonJobs: [
      "Full residential structure demolition planning",
      "Partial house demolition and interior tear-outs",
      "Garage, porch, deck, and attached structure removal",
      "Debris loading, haul-away, and site cleanup",
    ],
    jobDetails: [
      {
        title: "Full or Partial Structure Scope",
        description:
          "We discuss whether the job involves a full structure, a partial removal, attached structures, or interior demolition before quoting the work.",
      },
      {
        title: "Access, Utilities, and Site Conditions",
        description:
          "House demolition planning depends on access for equipment and dumpsters, utility status, structure condition, nearby surfaces, and debris volume.",
      },
      {
        title: "Debris and Site Cleanup",
        description:
          "The plan includes loading and hauling debris so the property is easier to evaluate, repair, or prepare for reuse.",
      },
      {
        title: "Cleanout Before Demolition",
        description:
          "If contents, furniture, or abandoned material are still inside, we can scope cleanout and demolition together instead of treating them as separate jobs.",
      },
      {
        title: "Ready for Repair, Sale, or Rebuild",
        description:
          "The goal is to leave the property safer, cleaner, and easier for the next contractor, inspector, buyer, or owner to evaluate.",
      },
    ],
    whyUs: [
      "Practical residential demolition and cleanup experience",
      "Clear communication around scope, access, and debris",
      "Can combine house demolition needs with cleanouts, dumpsters, and haul-away",
    ],
    faq: [
      {
        question: "Do you provide house demolition in Kansas City?",
        answer:
          "Yes. We can discuss full or partial residential demolition needs, including access, debris haul-away, cleanup, and whether contents need to be removed first.",
      },
      {
        question: "Can you help with partial house demolition?",
        answer:
          "Yes. We can quote selective or partial demolition work when only certain rooms, attached structures, porches, garages, or damaged areas need removal.",
      },
      {
        question: "Can house demolition include a property cleanout?",
        answer:
          "Yes. Cleanout, junk removal, and demolition debris can be scoped together when the property needs more than one service.",
      },
      {
        question: "What affects a house demolition quote?",
        answer:
          "Common quote factors include structure size, access, materials, utility status, debris volume, cleanup expectations, and whether contents or attached structures are included.",
      },
    ],
    relatedServices: [
      { label: "Demolition Services", href: "/services/demolition" },
      { label: "Residential Demo", href: "/services/residential" },
      { label: "Interior Demolition", href: "/services/interior-demolition" },
      { label: "Construction Debris", href: "/services/construction-debris-removal" },
      { label: "Garage Demolition", href: "/services/garage-demolition" },
      { label: "House Cleanouts", href: "/services/house-cleanouts" },
    ],
  },
  {
    slug: "commercial-cleanouts",
    title: "Commercial Cleanout Kansas City",
    description:
      "Commercial cleanout services in Kansas City for offices, retail spaces, warehouses, tenant turnovers, debris removal, and property cleanup.",
    eyebrow: "Commercial Cleanouts",
    h1: "Kansas City Commercial Cleanout Services",
    intro:
      "We help businesses, landlords, contractors, and property managers clear commercial spaces after move-outs, buildouts, remodels, and turnovers.",
    serviceType: "Commercial cleanout services",
    priorityKeywords: ["commercial cleanout kansas city"],
    parentCategory: "cleanouts",
    commonJobs: [
      "Office and retail cleanouts",
      "Warehouse and storage space clearing",
      "Tenant turnover cleanup",
      "Commercial debris loading and haul-away",
    ],
    jobDetails: [
      {
        title: "Business and Tenant Turnovers",
        description:
          "Clear furniture, fixtures, leftover contents, packaging, debris, and junk after a commercial space changes hands.",
      },
      {
        title: "Contractor Cleanup",
        description:
          "Remove remodel debris and leftover materials so crews and property managers can keep the project moving.",
      },
      {
        title: "Large-Volume Hauling",
        description:
          "Commercial cleanouts often need equipment, dumpsters, and a crew ready for heavier material and bigger spaces.",
      },
    ],
    whyUs: [
      "Good fit for businesses, landlords, contractors, and property managers",
      "Demolition, cleanout, and debris hauling can be bundled",
      "Owner-operated communication for scheduling and scope clarity",
    ],
    faq: [
      {
        question: "Do you handle commercial cleanouts in Kansas City?",
        answer:
          "Yes. We handle office, retail, warehouse, tenant turnover, and commercial debris cleanout projects.",
      },
      {
        question: "Can you remove office furniture and fixtures?",
        answer:
          "Yes. Furniture, fixtures, contents, debris, and leftover materials can be included in the cleanout scope.",
      },
      {
        question: "Can commercial cleanouts include demolition?",
        answer:
          "Yes. Commercial cleanout and selective demolition needs can be scoped together when appropriate.",
      },
    ],
    relatedServices: commercialRelated,
  },
  createItemRemovalPage({
    slug: "furniture-removal",
    title: "Furniture Removal Kansas City",
    eyebrow: "Furniture Removal",
    item: "furniture removal",
    examples: ["Couches and sectionals", "Tables, chairs, and desks", "Dressers, cabinets, and bulky furniture"],
  }),
  createItemRemovalPage({
    slug: "appliance-removal",
    title: "Appliance Removal Kansas City",
    eyebrow: "Appliance Removal",
    item: "appliance removal",
    examples: ["Refrigerators and freezers", "Washers, dryers, and dishwashers", "Stoves, ovens, and bulky appliances"],
  }),
  createItemRemovalPage({
    slug: "mattress-removal",
    title: "Mattress Removal Kansas City",
    eyebrow: "Mattress Removal",
    item: "mattress removal",
    examples: ["Mattresses and box springs", "Bedroom furniture and frames", "Move-out bedroom junk"],
  }),
  createItemRemovalPage({
    slug: "yard-debris-removal",
    title: "Yard Debris Removal Kansas City",
    eyebrow: "Yard Debris Removal",
    item: "yard debris removal",
    examples: ["Branches and brush", "Outdoor junk and fencing debris", "Storm and cleanup debris"],
  }),
  createItemRemovalPage({
    slug: "hot-tub-removal",
    title: "Hot Tub Removal Kansas City",
    eyebrow: "Hot Tub Removal",
    item: "hot tub removal",
    examples: ["Old hot tubs", "Spa surrounds and covers", "Deck or patio debris"],
  }),
  createItemRemovalPage({
    slug: "trash-removal",
    title: "Trash Removal Kansas City",
    eyebrow: "Trash Removal",
    item: "trash removal",
    examples: ["Bagged trash and loose debris", "Move-out trash", "Garage and basement debris"],
  }),
  createItemRemovalPage({
    slug: "bulk-trash-pickup",
    title: "Bulk Trash Pickup Kansas City",
    eyebrow: "Bulk Trash Pickup",
    item: "bulk trash pickup",
    examples: ["Bulky furniture", "Large household items", "Overflow junk and debris"],
  }),
  createItemRemovalPage({
    slug: "haul-away-junk",
    title: "Haul Away Junk Kansas City",
    eyebrow: "Haul Away Junk",
    item: "haul away junk",
    examples: ["Mixed household junk", "Rental turnover debris", "Garage, basement, and job-site junk"],
  }),
  createWaterMitigationPage({
    slug: "water-damage-cleanup",
    title: "Water Damage Cleanup Kansas City",
    eyebrow: "Water Damage Cleanup",
    event: "water damage",
    keyword: "water damage cleanup kansas city",
    examples: ["Burst pipes and plumbing leaks", "Wet flooring and contents", "Basement or lower-level water"],
  }),
  createWaterMitigationPage({
    slug: "flood-cleanup",
    title: "Flood Cleanup Kansas City",
    eyebrow: "Flood Cleanup",
    event: "flooding",
    keyword: "flood cleanup kansas city",
    examples: ["Indoor flooding", "Storm water intrusion", "Standing water and wet debris"],
  }),
  createWaterMitigationPage({
    slug: "burst-pipe-cleanup",
    title: "Burst Pipe Cleanup Kansas City",
    eyebrow: "Burst Pipe Cleanup",
    event: "a burst pipe",
    keyword: "burst pipe cleanup kansas city",
    examples: ["Pipe breaks", "Ceiling or wall leaks", "Wet floors and contents"],
  }),
  createWaterMitigationPage({
    slug: "water-extraction",
    title: "Water Extraction Kansas City",
    eyebrow: "Water Extraction",
    event: "standing water",
    keyword: "water extraction kansas city",
    examples: ["Standing water removal", "Basement extraction", "Wet floors and affected rooms"],
  }),
  createWaterMitigationPage({
    slug: "basement-water-cleanup",
    title: "Basement Water Cleanup Kansas City",
    eyebrow: "Basement Water Cleanup",
    event: "basement water",
    keyword: "basement water cleanup kansas city",
    examples: ["Basement water removal", "Wet storage and contents", "Lower-level drying support"],
  }),
];

export const SPECIALTY_SERVICE_PAGES: SpecialtyServicePageData[] = [
  ...ADDITIONAL_SPECIALTY_SERVICE_PAGES,
  {
    slug: "interior-demolition",
    title: "Kansas City Interior Demolition",
    description:
      "Interior demolition in Kansas City for kitchens, bathrooms, walls, flooring, remodel prep, and selective tear-outs. Call Kidd's Clean Up and Demo for a free quote.",
    eyebrow: "Interior Demolition",
    h1: "Kansas City Interior Demolition for Remodel Prep",
    intro:
      "We handle selective interior demolition when a home, rental, or commercial space needs to be opened up cleanly before the next phase of work.",
    serviceType: "Interior demolition services",
    commonJobs: [
      "Kitchen and bathroom tear-outs",
      "Flooring, cabinet, and fixture removal",
      "Wall, ceiling, and trim removal",
      "Interior cleanout and debris haul-away",
    ],
    jobDetails: [
      {
        title: "Selective Tear-Outs",
        description:
          "Remove only the materials that need to go while keeping the rest of the property protected and ready for renovation.",
      },
      {
        title: "Debris Control",
        description:
          "Demolition debris is loaded, hauled, and cleaned up as part of the same scope so the site is not left half-finished.",
      },
      {
        title: "Residential and Commercial Spaces",
        description:
          "Good fit for homes, rentals, offices, retail spaces, and contractor-led remodel projects across the KC metro.",
      },
    ],
    whyUs: [
      "Owner-operated communication from quote through cleanup",
      "Own dumpsters and equipment for faster debris removal",
      "Clean job sites that are easier for the next trade to work in",
    ],
    faq: [
      {
        question: "What does interior demolition include?",
        answer:
          "Interior demolition can include removing cabinets, flooring, drywall, fixtures, trim, non-structural walls, and debris from the work area.",
      },
      {
        question: "Do you haul away interior demolition debris?",
        answer:
          "Yes. Debris removal and cleanup are part of the way we scope interior demolition projects.",
      },
      {
        question: "Can you help before a kitchen or bathroom remodel?",
        answer:
          "Yes. We regularly help clear interior spaces so remodel work can begin with a clean, open area.",
      },
    ],
    relatedServices: residentialRelated,
  },
  {
    slug: "garage-demolition",
    title: "Garage Demolition Kansas City",
    description:
      "Garage demolition in Kansas City for detached garages, damaged structures, old outbuildings, concrete pad cleanup, debris removal, and haul-away.",
    eyebrow: "Garage Demolition",
    h1: "Garage Demolition in Kansas City",
    intro:
      "Old, damaged, or unused garages can block parking, repairs, and yard projects. We handle garage demolition, contents removal, debris loading, and haul-away so the property is ready for what comes next.",
    serviceType: "Garage demolition services",
    priorityKeywords: ["garage demolition kansas city"],
    parentCategory: "demolition",
    commonJobs: [
      "Detached garage teardown and haul-away",
      "Damaged garage and outbuilding removal",
      "Garage contents, shelving, and debris cleanout",
      "Concrete pad, access, and site cleanup planning",
    ],
    jobDetails: [
      {
        title: "Detached Garage Removal",
        description:
          "We remove aging detached garages and haul away the structure, roofing, wood, and general debris.",
      },
      {
        title: "Contents and Interior Material",
        description:
          "If the garage still has contents, shelves, scrap, or stored material inside, we can include that cleanout in the same scope.",
      },
      {
        title: "Concrete Pad and Access Review",
        description:
          "Quotes account for driveway access, nearby fences or structures, concrete pads, utilities, and how debris will be loaded safely.",
      },
      {
        title: "Bundled Cleanup",
        description:
          "The demolition plan includes cleanup and debris removal so you are not coordinating separate vendors after the teardown.",
      },
      {
        title: "Ready for the Next Use",
        description:
          "Garage demolition can open space for parking, a replacement structure, landscaping, or a cleaner yard.",
      },
    ],
    whyUs: [
      "Practical demolition planning before work begins",
      "Crew, dumpsters, and haul-away managed by one company",
      "Straightforward pricing for the full teardown and cleanup",
    ],
    faq: [
      {
        question: "Can you remove an old detached garage?",
        answer:
          "Yes. We handle detached garage demolition and the debris removal that follows.",
      },
      {
        question: "Do you clean up after garage demolition?",
        answer:
          "Yes. We load and haul away debris and leave the area cleaner and safer for the next use.",
      },
      {
        question: "Can garage demolition be combined with a property cleanout?",
        answer:
          "Yes. If the garage or property also needs junk removed, we can scope that work together.",
      },
      {
        question: "What affects the cost of garage demolition?",
        answer:
          "Common factors include garage size, materials, access, utility status, concrete pad conditions, debris volume, and whether contents need to be removed first.",
      },
    ],
    relatedServices: residentialRelated,
  },
  {
    slug: "shed-demolition",
    title: "Shed Demolition Kansas City",
    description:
      "Shed demolition in Kansas City for old sheds, small outbuildings, yard structures, debris haul-away, and exterior cleanup.",
    eyebrow: "Shed Demolition",
    h1: "Kansas City Shed Demolition and Removal",
    intro:
      "We remove old sheds and small outbuildings when they are damaged, unused, or in the way of a cleaner yard or new project.",
    serviceType: "Shed demolition services",
    commonJobs: [
      "Wood and metal shed removal",
      "Small outbuilding demolition",
      "Contents and debris haul-away",
      "Yard cleanup after removal",
    ],
    jobDetails: [
      {
        title: "Small Structure Removal",
        description:
          "We tear down and remove backyard sheds, storage buildings, and similar small structures.",
      },
      {
        title: "Contents Plus Structure",
        description:
          "If the shed still has junk inside, we can remove contents and the structure in one project.",
      },
      {
        title: "Ready-To-Use Space",
        description:
          "After removal, the area is cleared so the yard is easier to maintain or prepare for a new use.",
      },
    ],
    whyUs: [
      "Fast fit for smaller residential demolition jobs",
      "Haul-away included with the teardown scope",
      "Clear communication about access, debris, and cleanup",
    ],
    faq: [
      {
        question: "Do I need to empty the shed first?",
        answer:
          "Not always. We can include shed contents in the quote if you want the contents removed too.",
      },
      {
        question: "Can you remove metal and wood sheds?",
        answer:
          "Yes. We remove common backyard sheds and small storage structures made from wood, metal, or mixed materials.",
      },
      {
        question: "Do you haul away the shed debris?",
        answer:
          "Yes. We load and haul away the demolition debris as part of the project.",
      },
    ],
    relatedServices: residentialRelated,
  },
  {
    slug: "deck-removal",
    title: "Deck Removal Kansas City",
    description:
      "Deck removal in Kansas City for old decks, porch structures, railings, stairs, footings, patio tear-outs, debris removal, and cleanup.",
    eyebrow: "Deck Removal",
    h1: "Kansas City Deck Removal and Haul-Away",
    intro:
      "When an old deck is unsafe, weathered, or in the way of a new outdoor project, we remove deck boards, framing, railings, stairs, and debris so the area is ready for replacement or repair.",
    serviceType: "Deck removal services",
    priorityKeywords: ["deck removal kansas city"],
    parentCategory: "demolition",
    commonJobs: [
      "Wood deck tear-downs",
      "Railing and stair removal",
      "Small porch and landing removal",
      "Outdoor debris cleanup",
    ],
    jobDetails: [
      {
        title: "Deck Tear-Downs",
        description:
          "We dismantle old deck boards, framing, stairs, and railings while keeping the surrounding property in mind.",
      },
      {
        title: "Stairs, Railings, and Footings",
        description:
          "The scope can include stairs, railing sections, loose boards, surface fasteners, and footing or post cleanup depending on the project.",
      },
      {
        title: "Material Haul-Away",
        description:
          "Wood, fasteners, railing pieces, and related debris are hauled away so the area is not left cluttered.",
      },
      {
        title: "Outdoor Project Prep",
        description:
          "Deck removal helps prepare for a replacement deck, patio, landscaping, or open yard space.",
      },
    ],
    whyUs: [
      "Good fit for homeowners planning exterior updates",
      "Own dumpsters for efficient haul-away",
      "Clean finish after the old deck is removed",
    ],
    faq: [
      {
        question: "Can you remove an old backyard deck?",
        answer:
          "Yes. We remove old decks, stairs, railings, and related debris.",
      },
      {
        question: "Do you remove deck debris from the property?",
        answer:
          "Yes. Haul-away is part of the project scope.",
      },
      {
        question: "Can you remove a deck before a replacement is built?",
        answer:
          "Yes. We can clear the old structure so the area is ready for the next contractor or project.",
      },
      {
        question: "Can deck removal include stairs and railings?",
        answer:
          "Yes. Deck removal can include deck boards, framing, stairs, railings, landings, and related debris.",
      },
    ],
    relatedServices: residentialRelated,
  },
  {
    slug: "concrete-removal",
    title: "Concrete Removal Kansas City",
    description:
      "Concrete removal in Kansas City for slabs, patios, sidewalks, garage pads, broken concrete, heavy debris hauling, and cleanup.",
    eyebrow: "Concrete Removal",
    h1: "Concrete Removal in Kansas City",
    intro:
      "We remove unwanted concrete from residential and commercial properties, including small slabs, patios, walkways, garage pads, and broken concrete debris that needs heavy hauling.",
    serviceType: "Concrete removal services",
    priorityKeywords: ["concrete removal kansas city"],
    parentCategory: "demolition",
    commonJobs: [
      "Patio and sidewalk removal",
      "Small slab and garage pad tear-outs",
      "Broken concrete haul-away",
      "Commercial concrete debris cleanup",
    ],
    jobDetails: [
      {
        title: "Slab, Pad, and Patio Removal",
        description:
          "Remove concrete that is cracked, failing, or blocking a new project, including patios, pads, walkways, and similar flatwork.",
      },
      {
        title: "Debris Loading",
        description:
          "Concrete is heavy and difficult to move. We handle loading and haul-away with the right equipment.",
      },
      {
        title: "Residential and Commercial Jobs",
        description:
          "Useful for homeowners, contractors, landlords, and property managers with concrete that needs to go.",
      },
      {
        title: "Cleanup After Heavy Removal",
        description:
          "Concrete removal is scoped with the haul-away and cleanup plan in mind so heavy debris is not left sitting on the property.",
      },
    ],
    whyUs: [
      "Crew and hauling planned around heavy debris",
      "Single scope for removal, loading, and cleanup",
      "Straightforward quote for the concrete you need removed",
    ],
    faq: [
      {
        question: "What concrete can you remove?",
        answer:
          "Common jobs include patios, sidewalks, small slabs, garage pads, broken concrete piles, and similar concrete debris.",
      },
      {
        question: "Do you haul away broken concrete?",
        answer:
          "Yes. We can load and haul away concrete debris after removal.",
      },
      {
        question: "Do you handle commercial concrete removal?",
        answer:
          "Yes. We can quote residential and commercial concrete removal or concrete debris cleanup.",
      },
      {
        question: "Do you haul away concrete after removal?",
        answer:
          "Yes. Heavy debris loading and haul-away are part of how we scope concrete removal work.",
      },
    ],
    relatedServices: commercialRelated,
  },
  {
    slug: "construction-debris-removal",
    title: "Construction Debris Removal Kansas City",
    description:
      "Construction debris removal in Kansas City for renovation waste, demo debris, job-site cleanup, contractor debris, and haul-away.",
    eyebrow: "Construction Debris Removal",
    h1: "Kansas City Construction Debris Removal",
    intro:
      "We help keep remodels, rental turns, and job sites moving by removing construction debris, demolition waste, and leftover materials.",
    serviceType: "Construction debris removal services",
    commonJobs: [
      "Renovation debris haul-away",
      "Post-demolition cleanup",
      "Contractor job-site debris",
      "Wood, drywall, fixtures, and packaging removal",
    ],
    jobDetails: [
      {
        title: "Job-Site Cleanup",
        description:
          "Clear piles of debris that slow down crews, tenants, or the next phase of construction.",
      },
      {
        title: "Renovation Waste",
        description:
          "Remove old fixtures, cabinets, flooring, drywall, trim, and other materials from remodel projects.",
      },
      {
        title: "Flexible Project Support",
        description:
          "Useful for one-time cleanup, turnover work, and demolition jobs that need debris hauled away quickly.",
      },
    ],
    whyUs: [
      "Own dumpsters and equipment help avoid rental delays",
      "Works well alongside demolition and cleanout projects",
      "Clean, safer spaces for contractors and property owners",
    ],
    faq: [
      {
        question: "Do you remove construction debris after remodels?",
        answer:
          "Yes. We haul away common renovation and demolition debris after remodels and tear-outs.",
      },
      {
        question: "Can contractors use you for job-site cleanup?",
        answer:
          "Yes. We work with contractors, landlords, property managers, and homeowners on debris removal.",
      },
      {
        question: "Can debris removal be bundled with demolition?",
        answer:
          "Yes. Many projects include both demolition and debris haul-away in one scope.",
      },
    ],
    relatedServices: commercialRelated,
  },
  {
    slug: "cleanouts",
    title: "Cleanout Services Kansas City",
    description:
      "Cleanout services in Kansas City for homes, garages, basements, estates, rentals, foreclosures, and commercial properties.",
    eyebrow: "Cleanout Services",
    h1: "Kansas City Cleanout Services",
    intro:
      "We clear unwanted items, debris, and leftover contents from properties that need to be emptied, cleaned up, and made usable again.",
    serviceType: "Property cleanout services",
    commonJobs: [
      "Whole-property cleanouts",
      "Move-out and rental cleanouts",
      "Estate and foreclosure cleanouts",
      "Garage, basement, and commercial cleanouts",
    ],
    jobDetails: [
      {
        title: "Full Property Cleanouts",
        description:
          "Clear rooms, storage areas, garages, basements, and exterior debris in one coordinated cleanup.",
      },
      {
        title: "Turnover Support",
        description:
          "Useful when a property needs to be ready for repairs, listing, tenants, or sale.",
      },
      {
        title: "Junk Removal Plus Cleanup",
        description:
          "We handle heavy lifting, loading, hauling, and practical cleanup so the property can move forward.",
      },
    ],
    whyUs: [
      "Good fit for urgent or large-volume property cleanouts",
      "Direct owner communication on scope and scheduling",
      "Demolition and debris hauling can be combined when needed",
    ],
    faq: [
      {
        question: "What kinds of cleanouts do you handle?",
        answer:
          "We handle home, garage, basement, estate, rental, foreclosure, commercial, and general property cleanouts.",
      },
      {
        question: "Do you remove large items during cleanouts?",
        answer:
          "Yes. We remove furniture, appliances, boxes, debris, and other bulky items as part of cleanout work.",
      },
      {
        question: "Can you clean out a property before repairs or sale?",
        answer:
          "Yes. We often help clear properties before renovation, listing, tenant turnover, or sale.",
      },
    ],
    relatedServices: cleanoutRelated,
  },
  {
    slug: "house-cleanouts",
    title: "House Cleanout Kansas City",
    description:
      "House cleanout services in Kansas City for move-outs, inherited homes, renovation prep, clutter removal, furniture, appliances, and debris.",
    eyebrow: "House Cleanouts",
    h1: "Kansas City House Cleanout Services",
    intro:
      "We help clear homes that need unwanted items, old furniture, clutter, and debris removed before the next chapter.",
    serviceType: "House cleanout services",
    commonJobs: [
      "Whole-home cleanouts",
      "Move-out debris removal",
      "Furniture and appliance removal",
      "Pre-sale or pre-renovation cleanup",
    ],
    jobDetails: [
      {
        title: "Rooms, Storage, and Exterior Areas",
        description:
          "House cleanouts can include living areas, bedrooms, basements, garages, sheds, and exterior junk piles.",
      },
      {
        title: "Heavy Lifting",
        description:
          "Our crew handles bulky items and loaded areas so you do not have to move everything to the curb first.",
      },
      {
        title: "Ready for the Next Step",
        description:
          "A cleanout can prepare the home for repairs, sale, rental, renovation, or a fresh start.",
      },
    ],
    whyUs: [
      "Practical help for full-home and partial-home cleanouts",
      "One crew for loading, hauling, and cleanup",
      "Straightforward pricing based on the scope",
    ],
    faq: [
      {
        question: "Do you handle full house cleanouts?",
        answer:
          "Yes. We can clear full homes or selected areas depending on the project.",
      },
      {
        question: "Can you remove furniture and appliances?",
        answer:
          "Yes. Furniture, appliances, boxes, clutter, and general household junk can be included.",
      },
      {
        question: "Do I need to move items outside first?",
        answer:
          "No. We can remove items from inside the home as part of the cleanout.",
      },
    ],
    relatedServices: cleanoutRelated,
  },
  {
    slug: "estate-cleanouts",
    title: "Estate Cleanout Kansas City",
    description:
      "Estate cleanout services in Kansas City for inherited homes, family properties, furniture removal, household contents, and practical haul-away.",
    eyebrow: "Estate Cleanouts",
    h1: "Kansas City Estate Cleanout Services",
    intro:
      "Estate cleanouts can be sensitive and overwhelming. We provide practical removal, loading, and cleanup help when a family property needs to be cleared.",
    serviceType: "Estate cleanout services",
    commonJobs: [
      "Inherited home cleanouts",
      "Furniture and contents removal",
      "Garage and basement clearing",
      "Pre-sale property cleanup",
    ],
    jobDetails: [
      {
        title: "Respectful Property Clearing",
        description:
          "We focus on clear communication, practical scope, and careful removal of unwanted contents.",
      },
      {
        title: "Large-Volume Haul-Away",
        description:
          "Estate cleanouts often include furniture, boxes, stored items, garage contents, and general debris.",
      },
      {
        title: "Ready for Sale or Repairs",
        description:
          "The goal is to leave the property easier to inspect, repair, list, or transfer.",
      },
    ],
    whyUs: [
      "Owner-operated communication during a stressful project",
      "Able to handle bulky and high-volume removal",
      "Cleanout and light demolition needs can be scoped together",
    ],
    faq: [
      {
        question: "Can you clear out an inherited property?",
        answer:
          "Yes. We help with inherited homes and estate properties that need contents removed.",
      },
      {
        question: "Can you remove items from garages and basements too?",
        answer:
          "Yes. Estate cleanouts can include garages, basements, storage areas, sheds, and exterior debris.",
      },
      {
        question: "Can you work with family members or property contacts?",
        answer:
          "Yes. We can coordinate scope and access with the appropriate property contact.",
      },
    ],
    relatedServices: cleanoutRelated,
  },
  {
    slug: "garage-cleanouts",
    title: "Garage Cleanout Kansas City",
    description:
      "Garage cleanout services in Kansas City for clutter, boxes, tools, furniture, debris, old appliances, and storage cleanups.",
    eyebrow: "Garage Cleanouts",
    h1: "Kansas City Garage Cleanout Services",
    intro:
      "We clear overfilled garages so homeowners, landlords, and property managers can reclaim parking, storage, and usable work space.",
    serviceType: "Garage cleanout services",
    commonJobs: [
      "Packed garage cleanouts",
      "Old furniture and appliance removal",
      "Boxes, debris, and storage items",
      "Garage cleanout plus shed or garage demo",
    ],
    jobDetails: [
      {
        title: "Clutter and Bulk Items",
        description:
          "Remove old furniture, appliances, boxes, scrap, broken items, and other garage clutter.",
      },
      {
        title: "Turnover and Move-Out Help",
        description:
          "Garage cleanouts are useful before selling, renting, moving, or starting a renovation.",
      },
      {
        title: "Cleanup Options",
        description:
          "If a garage structure also needs to come down, we can discuss demolition and cleanout together.",
      },
    ],
    whyUs: [
      "Heavy lifting handled by our crew",
      "Haul-away included in the cleanout scope",
      "Good fit for packed garages and rental turnovers",
    ],
    faq: [
      {
        question: "Can you clean out a packed garage?",
        answer:
          "Yes. We handle garage cleanouts ranging from a few bulky items to full garages.",
      },
      {
        question: "Can you remove old appliances from the garage?",
        answer:
          "Yes. Appliances, furniture, boxes, and general junk can be included.",
      },
      {
        question: "Can you also demolish an old garage?",
        answer:
          "Yes. If the structure needs removal, we can quote garage demolition separately or with the cleanout.",
      },
    ],
    relatedServices: cleanoutRelated,
  },
  {
    slug: "basement-cleanouts",
    title: "Basement Cleanout Kansas City",
    description:
      "Basement cleanout services in Kansas City for stored items, furniture, appliances, boxes, debris, water-damaged contents, and pre-renovation clearing.",
    eyebrow: "Basement Cleanouts",
    h1: "Kansas City Basement Cleanout Services",
    intro:
      "Basements collect years of storage, bulky items, difficult stair carries, and sometimes water-damaged contents. We remove unwanted material and haul it away so the space is safer and easier to repair or reuse.",
    serviceType: "Basement cleanout services",
    priorityKeywords: ["basement cleanout kansas city"],
    parentCategory: "cleanouts",
    commonJobs: [
      "Stored boxes, clutter, and household junk removal",
      "Furniture, appliance, and heavy item removal",
      "Water-damaged contents haul-away",
      "Move-out, estate, and pre-renovation basement clearing",
    ],
    jobDetails: [
      {
        title: "Heavy Items From Tight Spaces",
        description:
          "Basement cleanouts often involve stairs, tight access, and bulky items that need careful removal.",
      },
      {
        title: "Water-Damage Cleanup Support",
        description:
          "If a basement has been affected by water, we can remove damaged contents and discuss mitigation needs.",
      },
      {
        title: "Estate, Move-Out, and Rental Cleanouts",
        description:
          "Basement cleanouts often happen before a sale, rental turnover, estate cleanout, or repair project where access matters.",
      },
      {
        title: "Pre-Renovation Clearing",
        description:
          "We clear stored items, damaged material, old fixtures, and general debris so basement repair or remodel work can start cleanly.",
      },
      {
        title: "Better Use of the Space",
        description:
          "Clear the basement for storage, repairs, renovation, or simply a safer home.",
      },
    ],
    whyUs: [
      "Experienced with heavy lifting and difficult access",
      "Can coordinate cleanout with water mitigation or demo needs",
      "Leaves the basement easier to repair or reuse",
    ],
    faq: [
      {
        question: "Do you remove items from basements?",
        answer:
          "Yes. We remove stored items, furniture, appliances, boxes, debris, and other unwanted contents from basements.",
      },
      {
        question: "Can you remove water-damaged basement contents?",
        answer:
          "Yes. Water-damaged contents can be included in the cleanout scope.",
      },
      {
        question: "Do I need to carry items upstairs?",
        answer:
          "No. Our crew can remove items from the basement as part of the job.",
      },
      {
        question: "Can you clean out a basement before renovation or sale?",
        answer:
          "Yes. We handle basement cleanouts before repairs, remodeling, listing, rental turnover, and estate property work.",
      },
    ],
    relatedServices: [
      { label: "Cleanout Services", href: "/services/cleanouts" },
      { label: "Junk Removal", href: "/services/junk-removal" },
      { label: "House Cleanouts", href: "/services/house-cleanouts" },
      { label: "Estate Cleanouts", href: "/services/estate-cleanouts" },
      { label: "Rental Cleanouts", href: "/services/rental-property-cleanouts" },
      { label: "Water Mitigation", href: "/services/water-mitigation" },
    ],
  },
  {
    slug: "hoarder-cleanouts",
    title: "Hoarder Cleanout Kansas City",
    description:
      "Hoarder cleanout services in Kansas City for high-volume clutter removal, property clearing, debris haul-away, and practical cleanup support.",
    eyebrow: "Hoarder Cleanouts",
    h1: "Kansas City Hoarder Cleanout Services",
    intro:
      "High-volume cleanouts require a practical plan, steady hauling, and clear communication. We help clear heavy clutter so the property can be addressed safely.",
    serviceType: "Hoarder cleanout services",
    commonJobs: [
      "High-volume clutter removal",
      "Furniture, boxes, and debris hauling",
      "Room-by-room property clearing",
      "Cleanup before repairs or sale",
    ],
    jobDetails: [
      {
        title: "Room-by-Room Removal",
        description:
          "We can work through packed areas and remove unwanted material according to the agreed scope.",
      },
      {
        title: "Large-Volume Hauling",
        description:
          "Own dumpsters and equipment help manage projects with more material than a normal junk pickup.",
      },
      {
        title: "Next-Step Cleanup",
        description:
          "The goal is to create access for cleaning, repairs, inspections, or property turnover.",
      },
    ],
    whyUs: [
      "Practical, direct communication about a difficult scope",
      "Built for heavy hauling and large-volume cleanouts",
      "Can combine junk removal, cleanout, and light demo needs",
    ],
    faq: [
      {
        question: "Do you handle large clutter cleanouts?",
        answer:
          "Yes. We can quote high-volume cleanouts where multiple rooms or large areas need to be cleared.",
      },
      {
        question: "Can you remove furniture and debris?",
        answer:
          "Yes. Furniture, boxes, bagged material, debris, and general unwanted contents can be included.",
      },
      {
        question: "Can the cleanout be done in phases?",
        answer:
          "Depending on the size and access, we can discuss whether the project should be handled in one pass or phases.",
      },
    ],
    relatedServices: cleanoutRelated,
  },
  {
    slug: "foreclosure-cleanouts",
    title: "Foreclosure Cleanout Kansas City",
    description:
      "Foreclosure cleanout services in Kansas City for banks, investors, agents, landlords, and property managers needing fast property clearing.",
    eyebrow: "Foreclosure Cleanouts",
    h1: "Kansas City Foreclosure Cleanout Services",
    intro:
      "Foreclosed and vacant properties often need contents, debris, and exterior junk removed before inspection, repair, listing, or resale.",
    serviceType: "Foreclosure cleanout services",
    commonJobs: [
      "Vacant property cleanouts",
      "Left-behind contents removal",
      "Garage, basement, and yard debris",
      "Cleanup before repairs or listing",
    ],
    jobDetails: [
      {
        title: "Vacant Property Clearing",
        description:
          "Remove abandoned contents, trash, old furniture, and property debris after a foreclosure or vacancy.",
      },
      {
        title: "Investor and Manager Support",
        description:
          "Useful for banks, investors, real estate agents, landlords, and property managers preparing a property.",
      },
      {
        title: "Ready for Repair",
        description:
          "A cleanout gives contractors and inspectors better access to evaluate and improve the property.",
      },
    ],
    whyUs: [
      "Good fit for vacant homes and turnover timelines",
      "Can combine interior, garage, basement, and exterior debris",
      "Clear quotes and direct communication with the property contact",
    ],
    faq: [
      {
        question: "Do you clean out foreclosed properties?",
        answer:
          "Yes. We remove left-behind contents, junk, and debris from foreclosed or vacant properties.",
      },
      {
        question: "Can you work with investors or property managers?",
        answer:
          "Yes. We support investors, landlords, agents, banks, and property managers with cleanout needs.",
      },
      {
        question: "Can you remove exterior debris too?",
        answer:
          "Yes. Exterior junk piles, garage contents, basement debris, and yard debris can be included.",
      },
    ],
    relatedServices: cleanoutRelated,
  },
  {
    slug: "rental-property-cleanouts",
    title: "Rental Property Cleanout Kansas City",
    description:
      "Rental property cleanout services in Kansas City for landlords and property managers after move-outs, evictions, turnovers, and tenant junk.",
    eyebrow: "Rental Property Cleanouts",
    h1: "Kansas City Rental Property Cleanouts",
    intro:
      "When tenants leave items, debris, or cleanup work behind, we help landlords and property managers clear the rental so repairs and showings can move forward.",
    serviceType: "Rental property cleanout services",
    commonJobs: [
      "Move-out and eviction cleanouts",
      "Furniture and appliance removal",
      "Trash, boxes, and debris hauling",
      "Turnover cleanup before repairs",
    ],
    jobDetails: [
      {
        title: "Turnover Cleanouts",
        description:
          "Remove left-behind contents so maintenance, repairs, and listing photos are not delayed.",
      },
      {
        title: "Landlord Support",
        description:
          "Good fit for single-family rentals, duplexes, apartments, garages, basements, and exterior debris.",
      },
      {
        title: "Cleanup and Haul-Away",
        description:
          "We handle loading and haul-away so the property is easier to repair and rent again.",
      },
    ],
    whyUs: [
      "Built for practical property turnover work",
      "Can handle cleanouts, junk removal, and light demo needs",
      "Direct communication for landlords and managers",
    ],
    faq: [
      {
        question: "Do you clean out rentals after tenants move out?",
        answer:
          "Yes. We remove left-behind items, furniture, trash, and debris after move-outs or turnovers.",
      },
      {
        question: "Can you help after an eviction?",
        answer:
          "Yes. Once the property is ready for cleanout, we can remove unwanted contents and debris.",
      },
      {
        question: "Can you remove junk from garages and yards too?",
        answer:
          "Yes. Rental cleanouts can include interior rooms, garages, basements, sheds, and exterior debris.",
      },
    ],
    relatedServices: cleanoutRelated,
  },
];

const cityJunkRelatedJobLinks = [
  { label: "Furniture Removal", href: "/services/furniture-removal" },
  { label: "Appliance Removal", href: "/services/appliance-removal" },
  { label: "Mattress Removal", href: "/services/mattress-removal" },
  { label: "Yard Debris Removal", href: "/services/yard-debris-removal" },
  { label: "Basement Cleanouts", href: "/services/basement-cleanouts" },
  { label: "Rental Cleanouts", href: "/services/rental-property-cleanouts" },
];

const cityDemolitionRelatedJobLinks = [
  { label: "Garage Demolition", href: "/services/garage-demolition" },
  { label: "Shed Demolition", href: "/services/shed-demolition" },
  { label: "Deck Removal", href: "/services/deck-removal" },
  { label: "Concrete Removal", href: "/services/concrete-removal" },
  { label: "Interior Demolition", href: "/services/interior-demolition" },
  { label: "Construction Debris", href: "/services/construction-debris-removal" },
];

const cityTargets = [
  {
    citySlug: "overland-park",
    city: "Overland Park",
    state: "KS" as const,
    junkLocalExamples: [
      {
        title: "Furniture and Appliance Haul-Away",
        description:
          "Useful for occupied homes, apartments, offices, and rental turnovers where bulky items need to be removed without a long cleanup timeline.",
      },
      {
        title: "Garage and Basement Cleanouts",
        description:
          "A strong fit for packed storage areas, old boxes, tools, appliances, and household junk that needs to be loaded from inside the property.",
      },
      {
        title: "Exterior and Yard Debris",
        description:
          "We can remove branches, fencing debris, outdoor junk, and leftover material from garage, deck, or yard projects.",
      },
    ],
    demoLocalExamples: [
      {
        title: "Interior Demo Before Remodels",
        description:
          "Selective tear-outs for kitchens, bathrooms, flooring, fixtures, and other remodel prep work in homes and commercial spaces.",
      },
      {
        title: "Garage, Shed, and Deck Removal",
        description:
          "Small-structure demolition for detached garages, sheds, decks, porches, and damaged outdoor structures.",
      },
      {
        title: "Commercial Turnover Cleanup",
        description:
          "Demo and debris removal for offices, retail spaces, tenant improvements, and contractor-led cleanup work.",
      },
    ],
  },
  {
    citySlug: "olathe",
    city: "Olathe",
    state: "KS" as const,
    junkLocalExamples: [
      {
        title: "Move-Out and Pre-Sale Cleanouts",
        description:
          "Olathe homeowners and agents often call when furniture, boxes, storage items, and leftover junk need to be cleared before listing or moving.",
      },
      {
        title: "Garage and Basement Junk",
        description:
          "We remove packed garage, basement, and storage-area material without requiring customers to haul everything to the curb first.",
      },
      {
        title: "Rental Turnover Debris",
        description:
          "Landlords and property managers can bundle junk removal, cleanout work, and light debris hauling between tenants.",
      },
    ],
    demoLocalExamples: [
      {
        title: "Garage and Shed Demolition",
        description:
          "Detached garages, sheds, and small outbuildings can be torn down, loaded, hauled, and cleaned up as one project.",
      },
      {
        title: "Interior Tear-Outs Before Updates",
        description:
          "Selective demolition for kitchens, bathrooms, flooring, cabinets, fixtures, and other pre-renovation work.",
      },
      {
        title: "Deck, Concrete, and Debris Removal",
        description:
          "Olathe demolition jobs often include deck removal, patio or slab removal, and construction debris haul-away.",
      },
    ],
  },
  {
    citySlug: "shawnee-ks",
    city: "Shawnee",
    state: "KS" as const,
    junkLocalExamples: [
      {
        title: "Home and Garage Cleanouts",
        description:
          "Junk removal for garages, basements, sheds, and storage spaces where heavy lifting and loading are the hard part.",
      },
      {
        title: "Move-Out and Estate Support",
        description:
          "Furniture, appliances, boxes, mattresses, and general household contents can be removed during move-out or estate cleanout work.",
      },
      {
        title: "Outdoor Cleanup",
        description:
          "Yard debris, fencing, storm debris, and exterior junk can be hauled away as part of a larger cleanup project.",
      },
    ],
    demoLocalExamples: [
      {
        title: "Remodel Prep Demolition",
        description:
          "Interior demolition for homeowners, landlords, and contractors preparing spaces for repairs or upgrades.",
      },
      {
        title: "Deck and Small Structure Removal",
        description:
          "Decks, sheds, small outbuildings, and related debris can be removed and hauled away cleanly.",
      },
      {
        title: "Lead-Safe Project Coordination",
        description:
          "For older properties, demolition and cleanup can be discussed alongside lead-safe handling needs.",
      },
    ],
  },
  {
    citySlug: "lenexa",
    city: "Lenexa",
    state: "KS" as const,
    junkLocalExamples: [
      {
        title: "Commercial and Office Cleanouts",
        description:
          "Furniture, fixtures, packaging, and leftover tenant material can be removed from office, retail, and light commercial spaces.",
      },
      {
        title: "Basement and Water-Damaged Contents",
        description:
          "Lenexa cleanup calls often involve basements, storage areas, and damaged contents that need removal before repairs.",
      },
      {
        title: "Household and Rental Junk",
        description:
          "We haul away furniture, appliances, mattresses, boxes, and turnover debris from homes, rentals, and garages.",
      },
    ],
    demoLocalExamples: [
      {
        title: "Interior and Commercial Demo",
        description:
          "Selective demo for offices, retail spaces, homes, and contractor-led projects that need debris handled quickly.",
      },
      {
        title: "Garage, Deck, and Concrete Removal",
        description:
          "Small demolition work can include garages, sheds, decks, patios, slabs, and related construction debris.",
      },
      {
        title: "Cleanup After Demolition",
        description:
          "Demolition work is scoped with loading, dumpsters, haul-away, and site cleanup in mind.",
      },
    ],
  },
];

export const CITY_SERVICE_PAGES: CityServicePageData[] = cityTargets.flatMap(
  ({ citySlug, city, state, junkLocalExamples, demoLocalExamples }) => [
    {
      service: "junk-removal" as const,
      citySlug,
      city,
      state,
      title: `${city} Junk Removal`,
      description: `Junk removal in ${city}, ${state} for furniture, appliances, cleanouts, yard debris, rental turnovers, and haul-away. Call Kidd's Clean Up and Demo for a free quote.`,
      h1: `${city}, ${state} Junk Removal`,
      intro: `We provide junk removal in ${city} for homes, rentals, garages, basements, and job sites that need unwanted items hauled away without a drawn-out cleanup process.`,
      serviceType: "Junk removal services",
      services: [
        "Junk removal",
        "Furniture removal",
        "Appliance removal",
        "Property cleanouts",
        "Yard debris removal",
      ],
      commonJobs: [
        "Furniture, mattresses, and bulky item removal",
        "Appliance and household junk haul-away",
        "Garage, basement, and rental property cleanouts",
        "Yard debris and exterior junk removal",
      ],
      localExamples: junkLocalExamples,
      quoteFactors: [
        "Item size, weight, and quantity",
        "Garage, basement, stair, or exterior access",
        "Whether the job includes cleanout, yard debris, or rental turnover material",
        "Loading time, disposal needs, and haul-away volume",
      ],
      relatedJobLinks: cityJunkRelatedJobLinks,
      whyUs: [
        `Local KC metro crew serving ${city} and nearby communities`,
        "Heavy lifting, loading, and haul-away handled by our team",
        "Clean, practical finish for homes, rentals, and job sites",
      ],
      faq: [
        {
          question: `Do you provide junk removal in ${city}, ${state}?`,
          answer: `Yes. We provide junk removal and cleanout support in ${city} and nearby KC metro communities.`,
        },
        {
          question: "What items can you remove?",
          answer:
            "Common junk removal jobs include furniture, appliances, mattresses, boxes, household junk, yard debris, and rental turnover debris.",
        },
        {
          question: "Do I need to move everything outside first?",
          answer:
            "No. We can remove items from inside the property, garage, basement, or exterior areas as part of the job.",
        },
      ],
    },
    {
      service: "demolition" as const,
      citySlug,
      city,
      state,
      title: `${city} Demolition Services`,
      description: `Demolition services in ${city}, ${state} for interior demolition, garage demo, shed removal, deck removal, concrete removal, and debris cleanup.`,
      h1: `${city}, ${state} Demolition Services`,
      intro: `We handle practical demolition work in ${city}, including selective interior demo, garage and shed removal, deck tear-outs, concrete removal, and cleanup after the work is done.`,
      serviceType: "Demolition services",
      services: [
        "Interior demolition",
        "Garage demolition",
        "Shed demolition",
        "Deck removal",
        "Concrete removal",
        "Debris haul-away",
      ],
      commonJobs: [
        "Interior demolition before remodels",
        "Garage, shed, and small structure removal",
        "Deck, patio, and concrete removal",
        "Construction debris loading and cleanup",
      ],
      localExamples: demoLocalExamples,
      quoteFactors: [
        "Structure size, materials, and condition",
        "Access for crew, dumpsters, and equipment",
        "Utilities, nearby surfaces, and site protection needs",
        "Debris volume, haul-away, and final cleanup expectations",
      ],
      relatedJobLinks: cityDemolitionRelatedJobLinks,
      whyUs: [
        `Demolition and cleanup support for ${city} homeowners, landlords, and contractors`,
        "Own dumpsters and equipment keep debris removal part of the same job",
        "Owner-operated communication from quote through cleanup",
      ],
      faq: [
        {
          question: `Do you provide demolition services in ${city}, ${state}?`,
          answer: `Yes. We handle demolition and cleanup work in ${city} and nearby KC metro communities.`,
        },
        {
          question: "What types of demolition jobs do you handle?",
          answer:
            "Common jobs include interior demolition, garage demolition, shed removal, deck removal, concrete removal, and debris haul-away.",
        },
        {
          question: "Do you haul away demolition debris?",
          answer:
            "Yes. Debris removal and cleanup are built into the way we scope demolition projects.",
        },
      ],
    },
  ]
);

export function getSpecialtyServicePage(slug: string) {
  return SPECIALTY_SERVICE_PAGES.find((page) => page.slug === slug);
}

export function getCityServicePage(service: CityServicePageData["service"], citySlug: string) {
  return CITY_SERVICE_PAGES.find((page) => page.service === service && page.citySlug === citySlug);
}
