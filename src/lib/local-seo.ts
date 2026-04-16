import type { FAQItem } from "@/components/FAQSection";
import type { BreadcrumbItem } from "@/components/Breadcrumbs";

export interface CityPageData {
  slug: string;
  city: string;
  state?: string;
  heroTitle: string;
  intro: string;
  serviceIntro: string;
  whyUs: string[];
  faq: FAQItem[];
}

export const PRIORITY_CITY_PAGES: CityPageData[] = [
  {
    slug: "kansas-city",
    city: "Kansas City",
    state: "MO",
    heroTitle: "Kansas City Cleanup, Demolition, and Junk Removal",
    intro:
      "We handle demolition, cleanouts, junk removal, lead-safe work, and water mitigation across Kansas City with owner-operated service and honest pricing.",
    serviceIntro:
      "From single-property cleanups to larger demolition jobs, these are the services Kansas City customers call us for most often.",
    whyUs: [
      "Direct communication with the owner from quote to completion.",
      "Our own dumpsters and equipment keep jobs moving without rental delays.",
      "Clean, safe job sites with straightforward pricing and no loaded bids.",
    ],
    faq: [
      {
        question: "Do you offer demolition and cleanout services throughout Kansas City?",
        answer:
          "Yes. We work across Kansas City for residential demo, commercial cleanup, junk removal, lead-safe work, and water mitigation.",
      },
      {
        question: "Can you handle haul-away and disposal after a Kansas City demolition project?",
        answer:
          "Yes. We bring our own dumpsters and handle debris removal so the site is left clean and ready for what comes next.",
      },
      {
        question: "How do I get a quote for a Kansas City project?",
        answer:
          "Call, text, or request a quote through the site. We can review the scope, schedule an estimate if needed, and give you a clear next step quickly.",
      },
    ],
  },
  {
    slug: "overland-park",
    city: "Overland Park",
    state: "KS",
    heroTitle: "Overland Park Demolition, Cleanouts, and Junk Removal",
    intro:
      "We help Overland Park homeowners, businesses, and property managers clear space fast with demolition, cleanouts, junk removal, and water mitigation services.",
    serviceIntro:
      "Overland Park jobs often need clean scheduling, careful site protection, and fast debris removal. These are the services we’re most often called for there.",
    whyUs: [
      "Reliable scheduling for occupied homes, offices, and rental properties.",
      "Lead-safe and selective demolition options for remodel and prep work.",
      "One crew handling demolition, cleanup, and haul-away from start to finish.",
    ],
    faq: [
      {
        question: "Do you work on residential properties in Overland Park?",
        answer:
          "Yes. We handle home cleanouts, garage and shed demo, interior demo, junk removal, and related property cleanup in Overland Park.",
      },
      {
        question: "Can you help with commercial cleanouts in Overland Park?",
        answer:
          "Yes. We work with businesses, landlords, and contractors on office, retail, and turnover cleanup projects in Overland Park.",
      },
      {
        question: "Do you offer emergency water mitigation in Overland Park?",
        answer:
          "Yes. We respond to burst pipes, leaks, and flooding situations by removing standing water and starting the drying process quickly.",
      },
    ],
  },
  {
    slug: "olathe",
    city: "Olathe",
    state: "KS",
    heroTitle: "Olathe Cleanup, Demo, and Junk Removal Services",
    intro:
      "Olathe customers call us when they need straightforward demolition, junk removal, cleanouts, or water mitigation without drawn-out timelines or messy job sites.",
    serviceIntro:
      "These services cover the most common Olathe projects we see, from property cleanups to selective demolition and debris haul-away.",
    whyUs: [
      "Great fit for renovation prep, move-out cleanups, and property turnovers.",
      "Owner-operated service with direct communication and clear pricing.",
      "Fast haul-away and cleanup that leaves the property ready for the next step.",
    ],
    faq: [
      {
        question: "What kinds of jobs do you handle in Olathe?",
        answer:
          "We handle residential and commercial cleanup, demolition, junk removal, lead-safe work, and water mitigation in Olathe.",
      },
      {
        question: "Do you bring your own dumpsters to Olathe projects?",
        answer:
          "Yes. We bring our own dumpsters and equipment so debris removal stays part of the same job instead of becoming a separate vendor issue.",
      },
      {
        question: "Can you clear out a property before it goes on the market in Olathe?",
        answer:
          "Yes. We regularly help with pre-sale cleanouts, junk removal, and demolition work that gets a property ready for updates or listing.",
      },
    ],
  },
  {
    slug: "lees-summit",
    city: "Lee's Summit",
    state: "MO",
    heroTitle: "Lee's Summit Demolition and Property Cleanup",
    intro:
      "From Lee’s Summit home cleanouts to job-site demolition and junk removal, we help property owners get spaces cleared safely and efficiently.",
    serviceIntro:
      "Lee’s Summit projects often combine demolition and cleanup. These are the services we use most to move those jobs forward.",
    whyUs: [
      "Single-source demolition, cleanup, and debris hauling.",
      "Honest quotes with practical scope discussions before work begins.",
      "Clean finish work that helps properties move straight into the next phase.",
    ],
    faq: [
      {
        question: "Do you provide junk removal in Lee's Summit?",
        answer:
          "Yes. We haul away furniture, debris, household junk, and general cleanup material from homes, rentals, and job sites in Lee's Summit.",
      },
      {
        question: "Can you help with demolition before a remodel in Lee's Summit?",
        answer:
          "Yes. We handle selective interior demo, garage and shed removal, and other prep work that gets remodel projects started cleanly.",
      },
      {
        question: "Do you serve both residential and commercial properties in Lee's Summit?",
        answer:
          "Yes. We work with homeowners, landlords, businesses, and contractors throughout Lee's Summit.",
      },
    ],
  },
  {
    slug: "independence",
    city: "Independence",
    state: "MO",
    heroTitle: "Independence Junk Removal, Cleanouts, and Demo",
    intro:
      "We help Independence property owners clear out clutter, handle demolition prep, and finish cleanup work with a crew that shows up ready to haul everything away.",
    serviceIntro:
      "These are the most common Independence projects we support, especially when a property needs to be stabilized or cleared quickly.",
    whyUs: [
      "Fast junk removal and cleanout help for occupied, vacant, and turnover properties.",
      "Demolition and cleanup services that can be bundled into one scope.",
      "Owner-operated oversight with fewer delays and fewer handoffs.",
    ],
    faq: [
      {
        question: "Can you help clear out an inherited or estate property in Independence?",
        answer:
          "Yes. We handle estate cleanouts, move-out junk removal, and demolition prep when a property needs to be cleared quickly and practically.",
      },
      {
        question: "Do you offer commercial cleanup in Independence?",
        answer:
          "Yes. We work on commercial cleanups, contractor debris, and site prep projects throughout Independence.",
      },
      {
        question: "Do you leave the site clean after the job?",
        answer:
          "Yes. Clean, safe job sites are a core part of our process, not an afterthought after the demolition or haul-away is done.",
      },
    ],
  },
  {
    slug: "shawnee",
    city: "Shawnee",
    state: "KS",
    heroTitle: "Shawnee Cleanup and Demolition Services",
    intro:
      "Shawnee property owners call us for demolition, junk removal, lead-safe work, and cleanouts when they need the job done cleanly and without surprises.",
    serviceIntro:
      "These service areas cover the work we most often handle in Shawnee for homes, rentals, and commercial properties.",
    whyUs: [
      "Selective demolition for remodels and property improvements.",
      "Straightforward communication from the first call through cleanup.",
      "Haul-away built into the job with our own dumpsters and equipment.",
    ],
    faq: [
      {
        question: "Do you handle garage, shed, and interior demolition in Shawnee?",
        answer:
          "Yes. We handle a range of residential demolition work in Shawnee, including garages, sheds, decks, and selective interior demo.",
      },
      {
        question: "Can you remove junk and debris after cleanup work in Shawnee?",
        answer:
          "Yes. Debris and haul-away are part of what we do, and we bring the equipment needed to keep the site moving.",
      },
      {
        question: "Do you offer lead-safe work in Shawnee homes?",
        answer:
          "Yes. We follow certified lead-safe practices when working on properties where lead-containing materials may be present.",
      },
    ],
  },
  {
    slug: "lenexa",
    city: "Lenexa",
    state: "KS",
    heroTitle: "Lenexa Demolition, Cleanouts, and Water Mitigation",
    intro:
      "We serve Lenexa with demolition, cleanouts, junk removal, and fast-response water mitigation for properties that need practical help and a clear next step.",
    serviceIntro:
      "Lenexa jobs range from property cleanouts to urgent mitigation work. These are the core services we most often provide there.",
    whyUs: [
      "Fast response for cleanup and mitigation work that cannot sit for days.",
      "Direct owner communication for smoother scheduling and quoting.",
      "A clean, professional finish that helps the property move into repairs or rebuilds faster.",
    ],
    faq: [
      {
        question: "Do you offer water mitigation in Lenexa?",
        answer:
          "Yes. We handle water extraction, drying, and moisture control in Lenexa after burst pipes, leaks, and indoor flooding events.",
      },
      {
        question: "Can you combine demolition and cleanup on the same Lenexa job?",
        answer:
          "Yes. Many projects need both, and we regularly handle demolition, haul-away, and cleanup as one scope.",
      },
      {
        question: "Do you work with contractors and commercial properties in Lenexa?",
        answer:
          "Yes. We support both residential and commercial projects in Lenexa, including contractor cleanup and site-prep work.",
      },
    ],
  },
  {
    slug: "blue-springs",
    city: "Blue Springs",
    state: "MO",
    heroTitle: "Blue Springs Property Cleanup and Junk Removal",
    intro:
      "Blue Springs homeowners and businesses use us for junk removal, demolition, and property cleanup when they want honest pricing and a crew that leaves the site ready for what’s next.",
    serviceIntro:
      "These are the core services we most often provide in Blue Springs for homes, rentals, and commercial spaces.",
    whyUs: [
      "Strong fit for turnover work, cleanouts, and pre-renovation demolition.",
      "No loaded bids or hidden disposal surprises after the quote.",
      "Family-owned service with a reputation built on clean, safe work.",
    ],
    faq: [
      {
        question: "Do you offer full-property cleanouts in Blue Springs?",
        answer:
          "Yes. We help with full-property cleanouts, junk removal, and related demolition work in Blue Springs.",
      },
      {
        question: "Can you remove debris from remodeling or construction projects in Blue Springs?",
        answer:
          "Yes. We handle debris removal, haul-away, and post-demo cleanup for residential and commercial projects in Blue Springs.",
      },
      {
        question: "How quickly can you respond to a Blue Springs quote request?",
        answer:
          "Response time depends on scope and scheduling, but we aim to review requests promptly and move estimate conversations forward quickly.",
      },
    ],
  },
];

export const PRIORITY_CITY_SLUGS = PRIORITY_CITY_PAGES.map((city) => city.slug);

export const PRIORITY_CITY_LINKS = PRIORITY_CITY_PAGES.map((city) => ({
  label: city.state ? `${city.city}, ${city.state}` : city.city,
  href: `/service-areas/${city.slug}`,
}));

export const SERVICE_PAGE_FAQS: Record<string, FAQItem[]> = {
  residential: [
    {
      question: "What kinds of residential demo jobs do you handle in Kansas City?",
      answer:
        "We handle home cleanouts, garage and shed demo, deck and patio removal, interior demolition, fence removal, and related residential cleanup work across the KC metro.",
    },
    {
      question: "Do you haul away debris after residential demolition?",
      answer:
        "Yes. We bring our own dumpsters and handle cleanup and haul-away so you are not left coordinating a separate debris removal step.",
    },
    {
      question: "Can you help prep a house for renovation or sale?",
      answer:
        "Yes. Many residential projects are pre-sale cleanouts or pre-renovation demo jobs where the goal is to leave the property clean, open, and ready for the next phase.",
    },
  ],
  commercial: [
    {
      question: "Do you handle commercial demolition in occupied business environments?",
      answer:
        "Yes. We work with businesses, property managers, and contractors to plan cleanup and demolition work in a way that minimizes disruption where possible.",
    },
    {
      question: "What commercial jobs do you most commonly take on in Kansas City?",
      answer:
        "Common projects include office buildout demo, warehouse cleanup, retail strip-outs, site prep, and construction waste hauling.",
    },
    {
      question: "Can you provide cleanup and haul-away as part of the same commercial job?",
      answer:
        "Yes. Cleanup and debris removal are built into the way we work so commercial sites are left safer and more usable after demolition.",
    },
  ],
  "junk-removal": [
    {
      question: "What types of junk removal jobs do you take in the KC metro?",
      answer:
        "We remove furniture, appliances, household junk, yard debris, rental turnover debris, and cleanup material from homes, garages, basements, and job sites.",
    },
    {
      question: "Do you handle large cleanouts, not just single-item pickups?",
      answer:
        "Yes. We regularly handle larger cleanouts for estates, move-outs, rental turnovers, and properties that need to be cleared in one pass.",
    },
    {
      question: "Do I need to pile everything up before you arrive?",
      answer:
        "No. We can remove items from the property as part of the job, which is especially helpful for heavy, bulky, or scattered material.",
    },
  ],
  "lead-safe": [
    {
      question: "When is lead-safe demolition necessary in Kansas City properties?",
      answer:
        "Lead-safe practices are especially important in homes and buildings that may contain lead-based paint or materials, particularly older properties built before 1978.",
    },
    {
      question: "Do you follow certified lead-safe practices?",
      answer:
        "Yes. We use containment, careful removal methods, and proper cleanup procedures designed to reduce lead dust and protect the property and its occupants.",
    },
    {
      question: "Can you help if a property needs both demo work and lead-safe handling?",
      answer:
        "Yes. We can scope projects that need demolition plus lead-safe procedures so the work is handled in one coordinated process.",
    },
  ],
  "water-mitigation": [
    {
      question: "How quickly should water mitigation start after a leak or flood?",
      answer:
        "As quickly as possible. Fast extraction and drying help reduce the chance of deeper structural damage and mold growth.",
    },
    {
      question: "What does water mitigation include?",
      answer:
        "Typical mitigation includes removing standing water, drying affected materials, monitoring moisture, and helping stabilize the property for repair work.",
    },
    {
      question: "Do you handle burst pipes and appliance failures in the Kansas City metro?",
      answer:
        "Yes. We respond to water damage caused by burst pipes, roof leaks, appliance failures, and similar events throughout the KC metro.",
    },
  ],
};

export function buildServiceAreaBreadcrumbs(
  label: string,
  href: string
): BreadcrumbItem[] {
  return [
    { label: "Home", href: "/" },
    { label, href },
  ];
}
