import Image from "next/image";
import Link from "next/link";
import TrackedLink from "@/components/TrackedLink";
import { ANALYTICS_EVENTS, COMPANY } from "@/lib/constants";
import { PRIORITY_CITY_LINKS } from "@/lib/local-seo";

const FOOTER_LINKS = [
  { label: "Home", href: "/" },
  { label: "Residential", href: "/services/residential" },
  { label: "Commercial", href: "/services/commercial" },
  { label: "Lead-Safe", href: "/services/lead-safe" },
  { label: "Water Mitigation", href: "/services/water-mitigation" },
  { label: "Junk Removal", href: "/services/junk-removal" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

const POPULAR_SERVICE_LINKS = [
  { label: "Demolition Services", href: "/services/demolition" },
  { label: "Garage Demolition", href: "/services/garage-demolition" },
  { label: "House Demolition", href: "/services/house-demolition" },
  { label: "Interior Demo", href: "/services/interior-demolition" },
  { label: "Deck Removal", href: "/services/deck-removal" },
  { label: "Concrete Removal", href: "/services/concrete-removal" },
  { label: "Furniture Removal", href: "/services/furniture-removal" },
  { label: "Appliance Removal", href: "/services/appliance-removal" },
  { label: "Bulk Trash Pickup", href: "/services/bulk-trash-pickup" },
  { label: "Cleanouts", href: "/services/cleanouts" },
  { label: "Basement Cleanouts", href: "/services/basement-cleanouts" },
  { label: "Commercial Cleanouts", href: "/services/commercial-cleanouts" },
  { label: "Estate Cleanouts", href: "/services/estate-cleanouts" },
  { label: "Rental Cleanouts", href: "/services/rental-property-cleanouts" },
  { label: "Construction Debris", href: "/services/construction-debris-removal" },
  { label: "Water Damage Cleanup", href: "/services/water-damage-cleanup" },
  { label: "Burst Pipe Cleanup", href: "/services/burst-pipe-cleanup" },
] as const;

const CITY_SERVICE_LINKS = [
  { label: "Overland Park Junk Removal", href: "/junk-removal/overland-park" },
  { label: "Olathe Junk Removal", href: "/junk-removal/olathe" },
  { label: "Shawnee Junk Removal", href: "/junk-removal/shawnee-ks" },
  { label: "Lenexa Junk Removal", href: "/junk-removal/lenexa" },
  { label: "Overland Park Demolition", href: "/demolition/overland-park" },
  { label: "Olathe Demolition", href: "/demolition/olathe" },
  { label: "Shawnee Demolition", href: "/demolition/shawnee-ks" },
  { label: "Lenexa Demolition", href: "/demolition/lenexa" },
] as const;

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      {/* CTA band */}
      <div className="bg-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            Get a free, no-obligation quote for your cleanup or demolition project.
            Family-owned and serving the KC metro since {COMPANY.since}.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <TrackedLink
              href="/contact"
              eventName={ANALYTICS_EVENTS.CTA_REQUEST_QUOTE_CLICK}
              eventParams={{ cta_location: "footer_cta" }}
              className="premium-cta inline-flex w-full sm:w-auto justify-center items-center px-8 py-3 bg-accent hover:bg-accent-dark text-white font-bold rounded-md transition-colors text-lg"
            >
              Request a Quote
            </TrackedLink>
            <TrackedLink
              href={COMPANY.phoneTel}
              eventName={ANALYTICS_EVENTS.CTA_CALL_CLICK}
              eventParams={{ cta_location: "footer_cta" }}
              className="inline-flex w-full sm:w-auto justify-center items-center px-8 py-3 bg-white hover:bg-surface text-primary font-bold rounded-md transition-colors text-lg border border-white"
            >
              Call {COMPANY.phone}
            </TrackedLink>
            <TrackedLink
              href={COMPANY.textTel}
              eventName={ANALYTICS_EVENTS.CTA_SMS_CLICK}
              eventParams={{ cta_location: "footer_cta" }}
              className="inline-flex w-full sm:w-auto justify-center items-center px-8 py-3 bg-white/10 hover:bg-white/15 text-white font-bold rounded-md transition-colors text-lg border border-white/20"
            >
              <svg className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9A2.25 2.25 0 0118.75 10.5v4.5a2.25 2.25 0 01-2.25 2.25h-5.69a2.25 2.25 0 00-1.006.238L6 19.5v-1.875A2.25 2.25 0 013.75 15.375V12A3.75 3.75 0 017.5 8.25z" />
              </svg>
              Text Us 24/7
            </TrackedLink>
          </div>
        </div>
      </div>

      {/* Footer content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {/* Company info */}
          <div>
            <Link href="/" className="mb-3 inline-flex items-center">
              <Image
                src="/images/Visby (500 x 500 px) (400 x 200 px) (1).png"
                alt={`${COMPANY.name} logo`}
                width={2500}
                height={200}
                className="h-[1.8rem] sm:h-[2rem] w-auto max-w-full"
              />
            </Link>
            <div className="space-y-2 text-sm leading-relaxed text-white/70">
              <p className="font-semibold text-white">Kidd&apos;s Clean Up and Demo</p>
              <p>Kansas City Metro Service-Area Business</p>
              <p>
                <TrackedLink
                  href={COMPANY.phoneTel}
                  eventName={ANALYTICS_EVENTS.CTA_CALL_CLICK}
                  eventParams={{ cta_location: "footer_company_info" }}
                  className="hover:text-accent transition-colors"
                >
                  (816) 457-4363
                </TrackedLink>
              </p>
              <p>Open Daily: 8:00 AM &ndash; 6:00 PM</p>
              <p>
                Residential Demo | Commercial Demo | Junk Removal | Lead-Safe |
                {" "}Water Mitigation
              </p>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-3 text-white/50">
              Quick Links
            </h3>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-sm font-bold uppercase tracking-wider mt-6 mb-3 text-white/50">
              Popular Services
            </h3>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2">
              {POPULAR_SERVICE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-3 text-white/50">
              Service Areas
            </h3>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2">
              {PRIORITY_CITY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-sm font-bold uppercase tracking-wider mt-6 mb-3 text-white/50">
              Focused City Services
            </h3>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2">
              {CITY_SERVICE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-3 text-white/50">
              Contact
            </h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <TrackedLink
                  href={COMPANY.phoneTel}
                  eventName={ANALYTICS_EVENTS.CTA_CALL_CLICK}
                  eventParams={{ cta_location: "footer_contact" }}
                  className="hover:text-accent transition-colors"
                >
                  {COMPANY.phone}
                </TrackedLink>
              </li>
              {COMPANY.emails.map((email) => (
                <li key={email}>
                  <a href={`mailto:${email}`} className="hover:text-accent transition-colors">
                    {email}
                  </a>
                </li>
              ))}
              <li>{COMPANY.hours}</li>
              <li>{COMPANY.area}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/50">
          <p>&copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</p>
          <div className="flex flex-col items-center gap-2 sm:items-end">
            <a
              href="https://hometownkc.agency"
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent transition-colors"
            >
              Website by Hometown Marketing Agency
            </a>
            <Link href="/privacy" className="hover:text-accent transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
