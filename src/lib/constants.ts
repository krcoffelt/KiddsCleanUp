export const COMPANY = {
  name: "Kidds Clean Up And Demolition",
  shortName: "Kidds Clean Up",
  phone: "816-457-4363",
  phoneTel: "tel:+18164574363",
  emails: ["Chris@kiddscleanup.com"],
  hours: "Everyday 8AM - 6PM",
  area: "Kansas City Metro",
  since: "April 2017",
  address: "Kansas City, MO",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Residential", href: "/services/residential" },
  { label: "Commercial", href: "/services/commercial" },
  { label: "Lead-Safe", href: "/services/lead-safe" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICE_TYPES = [
  "Junk Removal",
  "Commercial Demo",
  "Residential Demo",
  "Lead Demo",
  "Water Mitigation",
];

export const ALLOWED_SERVICE_TYPES = [
  "Junk Removal",
  "Commercial Demo",
  "Residential Demo",
  "Lead Demo",
  "Water Mitigation",
] as const;

export const SERVICE_AREA_CITIES = [
  "Kansas City, MO",
  "Kansas City, KS",
  "Overland Park",
  "Olathe",
  "Shawnee",
  "Lenexa",
  "Leawood",
  "Prairie Village",
  "Mission",
  "Lee's Summit",
  "Independence",
  "Blue Springs",
  "Raytown",
  "Liberty",
  "Belton",
  "Grandview",
] as const;

export const ANALYTICS_EVENTS = {
  CTA_CALL_CLICK: "cta_call_click",
  CTA_REQUEST_QUOTE_CLICK: "cta_request_quote_click",
  SERVICE_PAGE_VIEW: "service_page_view",
  FORM_SUBMIT_SUCCESS: "form_submit_success",
  FORM_SUBMIT_ERROR: "form_submit_error",
} as const;
