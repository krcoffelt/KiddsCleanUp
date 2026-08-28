import type { FAQItem } from "@/components/FAQSection";

export interface BlogPost {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  eyebrow: string;
  readTime: string;
  published: string;
  modified: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
  intro: string;
  answer: string;
  sections: { id: string; label: string }[];
  faq: FAQItem[];
  primaryService: { label: string; href: string };
}

const sharedDates = {
  published: "2026-08-28",
  modified: "2026-08-28",
};

export const BLOG_POSTS: BlogPost[] = [
  {
    ...sharedDates,
    slug: "junk-removal-cost-kansas-city",
    title: "How Much Does Junk Removal Cost in Kansas City?",
    shortTitle: "Kansas City Junk Removal Cost Guide",
    description:
      "Learn what affects junk removal cost in Kansas City, how jobs are scoped, and what details help you get a clearer haul-away quote.",
    eyebrow: "Junk Removal Guide",
    readTime: "7 min read",
    image: "/images/photo-5.jpg",
    imageAlt: "Mixed demolition and cleanup debris staged for haul-away",
    imagePosition: "center 56%",
    intro:
      "Junk removal prices are shaped by what is leaving, how much space it takes, how heavy it is, and how difficult it is to reach. A useful Kansas City quote starts with the job—not a one-size-fits-all number.",
    answer:
      "For most Kansas City jobs, the fastest route to a useful price is to send clear photos, an item count, and access details. Volume, weight, labor, disposal requirements, and travel are the main quote factors.",
    sections: [
      { id: "pricing", label: "How pricing works" },
      { id: "factors", label: "What changes the quote" },
      { id: "job-types", label: "Common job types" },
      { id: "options", label: "Removal options" },
      { id: "quote", label: "Prepare for a quote" },
    ],
    primaryService: { label: "Kansas City junk removal", href: "/services/junk-removal" },
    faq: [
      {
        question: "What is the biggest factor in a Kansas City junk removal quote?",
        answer:
          "The amount and type of material usually establish the basic scope. Weight, stairs, carrying distance, disassembly, and special disposal needs can change the labor and hauling plan.",
      },
      {
        question: "Can I get a junk removal quote from photos?",
        answer:
          "Photos are often the best starting point. Include every pile or room, show the route to the truck, and note heavy items, stairs, gates, elevators, or anything that needs disassembly.",
      },
      {
        question: "Is labor included in full-service junk removal?",
        answer:
          "Full-service removal normally means the crew handles lifting, loading, and haul-away. Confirm the exact scope, cleanup expectations, and any preparation requirements in your quote.",
      },
      {
        question: "Does Kidd's Clean Up serve both sides of the Kansas City metro?",
        answer:
          "Yes. Kidd's Clean Up serves Kansas City, Missouri, Kansas City, Kansas, and communities across Johnson and Jackson counties and the surrounding metro service area.",
      },
    ],
  },
  {
    ...sharedDates,
    slug: "bulky-item-disposal-kansas-city",
    title: "How to Get Rid of Bulky Items in Kansas City",
    shortTitle: "Kansas City Bulky-Item Disposal Guide",
    description:
      "Compare Kansas City options for furniture, mattress, appliance, and hot-tub disposal, from donation and city pickup to full-service removal.",
    eyebrow: "Local Disposal Guide",
    readTime: "8 min read",
    image: "/images/photo-4.jpg",
    imageAlt: "Cleared outdoor project area after debris removal",
    imagePosition: "center 58%",
    intro:
      "A couch, mattress, refrigerator, or hot tub rarely fits the normal trash routine. The right disposal route depends on condition, item type, city rules, lifting needs, and how quickly the space must be cleared.",
    answer:
      "Start with reuse or donation if the item is clean and usable. For items that cannot be reused, compare your city’s scheduled bulky collection, an approved drop-off or recycling program, and full-service removal that includes lifting and haul-away.",
    sections: [
      { id: "choose", label: "Choose the right route" },
      { id: "furniture", label: "Furniture and mattresses" },
      { id: "appliances", label: "Appliances" },
      { id: "hot-tubs", label: "Hot tubs" },
      { id: "local-rules", label: "Local collection rules" },
      { id: "pickup", label: "Prepare for pickup" },
    ],
    primaryService: { label: "bulky-item removal", href: "/services/junk-removal" },
    faq: [
      {
        question: "Will Kansas City pick up a couch or mattress?",
        answer:
          "Kansas City, Missouri offers appointment-based bulky collection for eligible residences and lists furniture and mattresses among accepted items. Eligibility, item limits, preparation rules, and scheduling can change, so verify the current city guidance before setting anything out.",
      },
      {
        question: "Can a junk removal crew pick up furniture from inside the house?",
        answer:
          "Full-service crews can often remove items from inside, including upstairs or basements. Share photos of stairs, doorways, and the carrying path so labor and access can be scoped before arrival.",
      },
      {
        question: "What should I do before appliance pickup?",
        answer:
          "Empty the appliance and disclose whether it is connected, contains refrigerant, or requires unusual handling. Do not disconnect gas, electrical, or plumbing connections unless you can do so safely and are authorized to do the work.",
      },
      {
        question: "Can Kidd's Clean Up remove a hot tub?",
        answer:
          "Yes. Hot-tub removal can include dismantling, loading, and haul-away. The quote depends on size, construction, access, electrical disconnection status, and whether decking or other surfaces limit the work area.",
      },
    ],
  },
  {
    ...sharedDates,
    slug: "demolition-cost-kansas-city",
    title: "What Affects Demolition Cost in Kansas City?",
    shortTitle: "Kansas City Demolition Cost Guide",
    description:
      "Plan a Kansas City demolition estimate with the major cost factors, common project types, permit questions, and a complete bid checklist.",
    eyebrow: "Demolition Planning Guide",
    readTime: "9 min read",
    image: "/images/photo-1.jpg",
    imageAlt: "Kansas City interior after selective demolition",
    imagePosition: "center 48%",
    intro:
      "Demolition cost is not just a square-foot calculation. The structure, materials, access, utilities, protection work, debris, disposal route, and finish condition all shape the real scope.",
    answer:
      "The most reliable Kansas City demolition estimate comes from a site-specific scope that states what will be removed, what must remain protected, how utilities and permits are handled, where debris goes, and what condition the site will be left in.",
    sections: [
      { id: "cost-drivers", label: "Major cost drivers" },
      { id: "project-types", label: "Project types" },
      { id: "permits", label: "Permits and utilities" },
      { id: "bid", label: "What a bid should include" },
      { id: "estimate", label: "Prepare for an estimate" },
    ],
    primaryService: { label: "Kansas City demolition services", href: "/services/demolition" },
    faq: [
      {
        question: "Can demolition be priced accurately by square foot?",
        answer:
          "Square footage can help establish scale, but it does not capture material type, structural conditions, access, utilities, protection, debris weight, disposal, or cleanup. A site-specific scope is more reliable.",
      },
      {
        question: "Do I need a demolition permit in Kansas City?",
        answer:
          "Permit requirements depend on the jurisdiction and scope. Kansas City, Missouri directs permit and plan activity through its City Planning and Development resources and Compass KC. Confirm the current requirements for the exact property before work begins.",
      },
      {
        question: "Does a demolition quote include debris removal?",
        answer:
          "It should say clearly. Ask whether containers, loading, hauling, disposal fees, final cleanup, and any concrete or foundation work are included or listed separately.",
      },
      {
        question: "What information helps with a demolition estimate?",
        answer:
          "Share the property address, photos, approximate dimensions, material types, access points, utility status, occupied areas, surfaces that must be protected, and the finish condition needed after removal.",
      },
    ],
  },
  {
    ...sharedDates,
    slug: "garage-cleanout-cost-kansas-city",
    title: "How to Plan a Garage Cleanout in Kansas City",
    shortTitle: "Garage Cleanout Cost & Checklist",
    description:
      "Use this Kansas City garage cleanout checklist to compare DIY and full-service removal, understand quote factors, and prepare for pickup.",
    eyebrow: "Cleanout Checklist",
    readTime: "7 min read",
    image: "/images/photo-6.jpg",
    imageAlt: "Cleared interior work area ready for the next project phase",
    imagePosition: "center 54%",
    intro:
      "A garage cleanout moves faster when decisions happen before the lifting starts. Separate what stays, what can be reused, what needs special handling, and what is ready to leave—then choose DIY hauling or a crew based on the volume and access.",
    answer:
      "For a practical quote, photograph every garage wall, the floor piles, and the path to the driveway. Note heavy equipment, liquids, chemicals, tires, batteries, appliances, stairs, and anything that needs disassembly.",
    sections: [
      { id: "checklist", label: "The cleanout checklist" },
      { id: "scope", label: "What changes the scope" },
      { id: "diy", label: "DIY or full service" },
      { id: "special-items", label: "Items to separate" },
      { id: "quote", label: "Photo-quote checklist" },
    ],
    primaryService: { label: "Kansas City garage cleanouts", href: "/services/garage-cleanouts" },
    faq: [
      {
        question: "How long does it take to clean out a garage?",
        answer:
          "Timing depends on garage size, how tightly it is packed, how much sorting is required, item weight, and access. A pre-sorted garage with clear decisions is usually faster than a space that needs item-by-item review.",
      },
      {
        question: "Do I need to move everything to the curb first?",
        answer:
          "Not for full-service removal when inside pickup is part of the agreed scope. Show the carrying route and disclose stairs, narrow doors, locked gates, or limited driveway access when requesting a quote.",
      },
      {
        question: "Can paint, fuel, chemicals, batteries, or tires go with regular garage junk?",
        answer:
          "These items can have separate handling or disposal requirements. Set them aside, keep labels intact, do not mix or pour liquids together, and disclose them before scheduling.",
      },
      {
        question: "What photos are useful for a garage cleanout quote?",
        answer:
          "Take one wide photo of each wall, closer photos of dense piles or heavy items, and a photo of the path from the garage to the loading area. Add an item count for appliances or equipment.",
      },
    ],
  },
  {
    ...sharedDates,
    slug: "flooded-basement-kansas-city",
    title: "What to Do After a Basement Flood in Kansas City",
    shortTitle: "Kansas City Flooded-Basement Guide",
    description:
      "Follow safe first steps after a Kansas City basement flood, from electrical hazards and documentation to extraction, drying, and damaged-material removal.",
    eyebrow: "Water Damage Guide",
    readTime: "8 min read",
    image: "/images/photo-2.jpg",
    imageAlt: "Interior with lower wall materials removed for access and cleanup",
    imagePosition: "center 52%",
    intro:
      "A flooded basement is first a safety problem, then a water-removal and drying problem. The source and water type matter: a clean supply-line leak, storm intrusion, and sewage backup do not call for the same response.",
    answer:
      "Do not enter standing water until electrical and structural hazards are addressed. If it is safe, stop the source, document the damage, protect unaffected areas, and begin professional extraction and drying as quickly as practical.",
    sections: [
      { id: "safety", label: "Start with safety" },
      { id: "source", label: "Identify the source" },
      { id: "document", label: "Document the damage" },
      { id: "drying", label: "Extraction and drying" },
      { id: "materials", label: "Damaged materials" },
      { id: "call", label: "What to report" },
    ],
    primaryService: { label: "Kansas City water mitigation", href: "/services/water-mitigation" },
    faq: [
      {
        question: "Is it safe to walk into a flooded basement?",
        answer:
          "Standing water can create electrical, contamination, slip, and structural hazards. Do not enter until you are confident electricity is off and the space is safe. Contact emergency services or qualified professionals when conditions are uncertain.",
      },
      {
        question: "How quickly should wet materials be dried?",
        answer:
          "EPA guidance emphasizes drying wet materials as quickly as possible and generally within 24 to 48 hours when conditions allow. Contaminated water and extensive damage can require professional removal and cleaning instead of simple drying.",
      },
      {
        question: "Should I turn on fans after a basement flood?",
        answer:
          "Not automatically. Electricity must be safe, and moving air can spread contaminants from sewage, mold, or damaged materials. The source and contamination level should be understood before using fans or the HVAC system.",
      },
      {
        question: "What should I tell a water mitigation company?",
        answer:
          "Share the address, likely source, estimated depth and affected area, when the water started, whether it may contain sewage or chemicals, whether power is off, and photos taken from a safe location.",
      },
    ],
  },
];

export const BLOG_POST_SLUGS = BLOG_POSTS.map((post) => post.slug);

export function getBlogPost(slug: string) {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

