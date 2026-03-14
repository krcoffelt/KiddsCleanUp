import Image from "next/image";
import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import TrustBadge from "@/components/TrustBadge";
import { COMPANY, SERVICE_AREA_CITIES } from "@/lib/constants";

const PROJECT_PHOTOS = [
  {
    src: "/images/photo-1.png",
    alt: "Cleanup and demolition job site from Kidd's Clean Up and Demo",
    className: "md:col-span-7 md:row-span-2 min-h-[260px] md:min-h-[520px]",
    sizes: "(min-width: 768px) 58vw, 100vw",
  },
  {
    src: "/images/photo-2.png",
    alt: "Project photo showing Kidd's Clean Up and Demo on-site work",
    className: "md:col-span-5 min-h-[210px]",
    sizes: "(min-width: 768px) 40vw, 100vw",
  },
  {
    src: "/images/photo-3.png",
    alt: "Cleanup project example from Kidd's Clean Up and Demo",
    className: "md:col-span-5 min-h-[210px]",
    sizes: "(min-width: 768px) 40vw, 100vw",
  },
  {
    src: "/images/photo-4.png",
    alt: "Demolition and cleanup work completed by Kidd's Clean Up and Demo",
    className: "md:col-span-4 min-h-[190px]",
    sizes: "(min-width: 768px) 32vw, 100vw",
  },
  {
    src: "/images/photo-5.png",
    alt: "Kansas City cleanup and demolition project by Kidd's Clean Up and Demo",
    className: "md:col-span-4 min-h-[190px]",
    sizes: "(min-width: 768px) 32vw, 100vw",
  },
  {
    src: "/images/photo-6.png",
    alt: "Example of a Kidd's Clean Up and Demo project site",
    className: "md:col-span-4 min-h-[190px]",
    sizes: "(min-width: 768px) 32vw, 100vw",
  },
];

function HeroSection() {
  return (
    <section className="relative bg-primary-dark text-white overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(30,58,95,0.95),rgba(15,39,68,0.98))]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-28 lg:py-36">
        <div className="max-w-3xl">
          <p className="inline-block rounded-full bg-accent/20 text-white px-3 py-1.5 text-xs sm:px-4 sm:text-sm font-semibold mb-5 leading-tight">
            Family-Owned &middot; Owner-Operated &middot; Since {COMPANY.since}
          </p>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-5">
            Kansas City&apos;s Trusted
            <span className="text-accent"> Cleanup &amp; Demolition</span> Team
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mb-8 leading-relaxed">
            Honest work, fair pricing, and clean job sites from a family team
            that brings its own dumpsters and handles the full job.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="premium-cta inline-flex w-full sm:w-auto items-center justify-center px-8 py-4 bg-accent hover:bg-accent-dark text-white font-bold rounded-md transition-colors text-lg"
            >
              Request a Free Quote
            </Link>
            <a
              href={COMPANY.phoneTel}
              className="inline-flex w-full sm:w-auto items-center justify-center px-8 py-4 bg-white hover:bg-surface text-primary font-bold rounded-md transition-colors text-lg border border-white"
            >
              <svg className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              {COMPANY.phone}
            </a>
            <a
              href={COMPANY.textTel}
              className="inline-flex w-full sm:w-auto items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/15 text-white font-bold rounded-md transition-colors text-lg border border-white/20"
            >
              <svg className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9A2.25 2.25 0 0118.75 10.5v4.5a2.25 2.25 0 01-2.25 2.25h-5.69a2.25 2.25 0 00-1.006.238L6 19.5v-1.875A2.25 2.25 0 013.75 15.375V12A3.75 3.75 0 017.5 8.25z" />
              </svg>
              Text Us 24/7
            </a>
          </div>
        </div>
        <div className="mt-7 grid max-w-4xl grid-cols-2 gap-x-4 gap-y-2.5 text-white/90 sm:flex sm:flex-wrap sm:items-center sm:gap-x-8">
            <div className="flex min-w-0 items-center gap-2 whitespace-nowrap">
              <svg className="h-4.5 w-4.5 shrink-0 text-white sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.079-.481 1.079-1.102a1.44 1.44 0 00-.148-.643l-2.37-4.305A2.25 2.25 0 0016.764 11.25H14.25m3 7.5H9.75m5.25-12.75v4.5m0 0H3.375m11.625 0L12.375 3.375" />
              </svg>
              <span className="text-[0.82rem] font-medium sm:text-sm">Own Dumpsters</span>
            </div>
            <div className="flex min-w-0 items-center gap-2 whitespace-nowrap">
              <svg className="h-4.5 w-4.5 shrink-0 text-white sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
              <span className="text-[0.82rem] font-medium sm:text-sm">Lead Certified</span>
            </div>
            <div className="flex min-w-0 items-center gap-2 whitespace-nowrap">
              <svg className="h-4.5 w-4.5 shrink-0 text-white sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2.25m5.25-2.25a9.75 9.75 0 11-19.5 0 9.75 9.75 0 0119.5 0z" />
              </svg>
              <span className="text-[0.82rem] font-medium sm:text-sm">Since 2017</span>
            </div>
            <div className="flex min-w-0 items-center gap-2 whitespace-nowrap">
              <svg className="h-4.5 w-4.5 shrink-0 text-white sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <span className="text-[0.82rem] font-medium sm:text-sm">{COMPANY.area}</span>
            </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="py-16 sm:py-24 bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-dark mb-4">
            Our Services
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            From junk removal and residential cleanouts to emergency water
            mitigation, we handle every job with the same commitment to quality and safety.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6">
          <ServiceCard
            title="Residential Services"
            description="Complete home cleanouts, garage and shed demolition, deck removal, interior demolition, and property cleanup for homeowners across the KC metro."
            href="/services/residential"
            icon={
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
            }
          />
          <ServiceCard
            title="Commercial Services"
            description="Office buildout demolition, warehouse cleanup, retail space clearing, and large-scale site preparation for businesses and contractors."
            href="/services/commercial"
            icon={
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
              </svg>
            }
          />
          <ServiceCard
            title="Junk Removal"
            description="Fast pickup and haul-away for household junk, furniture, appliances, yard debris, and property cleanouts."
            href="/services/junk-removal"
            icon={
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M9.75 6.75V5.25c0-.828.672-1.5 1.5-1.5h1.5c.828 0 1.5.672 1.5 1.5v1.5m-8.25 0v11.25c0 .828.672 1.5 1.5 1.5h9c.828 0 1.5-.672 1.5-1.5V6.75M9.75 10.5v5.25m4.5-5.25v5.25" />
              </svg>
            }
          />
          <ServiceCard
            title="Lead-Safe Services"
            description="Certified lead-safe removal and demolition for properties with lead paint or materials. Protect your family and comply with EPA regulations."
            href="/services/lead-safe"
            icon={
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
            }
          />
          <ServiceCard
            title="Water Mitigation"
            description="Fast response for burst pipes, flooding, leaks, and water damage with extraction, drying, and moisture control."
            href="/services/water-mitigation"
            icon={
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3.75c-2.94 3.31-6 7.029-6 10.5a6 6 0 0012 0c0-3.471-3.06-7.19-6-10.5z" />
              </svg>
            }
          />
        </div>
      </div>
    </section>
  );
}

function TrustSection() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-dark mb-4">
            Why Choose Kidd&apos;s Clean Up and Demo?
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            We&apos;re not just another contractor. We&apos;re a family that
            stands behind every job.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <TrustBadge
            title={`Serving KC Since ${COMPANY.since}`}
            description="Years of experience in the Kansas City metro area with a proven track record of satisfied customers."
            icon={
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
            }
          />
          <TrustBadge
            title="Owner-Operated Integrity"
            description="The owner is on every job. You deal directly with the decision-maker, not a middleman."
            icon={
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            }
          />
          <TrustBadge
            title="Our Own Dumpsters"
            description="We own our dumpsters and equipment. No markups from third-party rental companies passed on to you."
            icon={
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.079-.481 1.079-1.102a1.44 1.44 0 00-.148-.643l-2.37-4.305A2.25 2.25 0 0016.764 11.25H14.25m3 7.5H9.75m5.25-12.75v4.5m0 0H3.375m11.625 0L12.375 3.375" />
              </svg>
            }
          />
          <TrustBadge
            title="No Loaded Bids"
            description="Transparent pricing with no hidden fees. What we quote is what you pay — honest and upfront."
            icon={
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
          />
          <TrustBadge
            title="Clean & Safe Job Sites"
            description="We leave every site cleaner than we found it. Safety is always our top priority on every project."
            icon={
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
              </svg>
            }
          />
          <TrustBadge
            title="Family-Owned Business"
            description="We treat every project like it's our own home. Your satisfaction is our reputation."
            icon={
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
            }
          />
        </div>
      </div>
    </section>
  );
}

function ProjectGallerySection() {
  return (
    <section className="py-14 sm:py-24 bg-primary-dark text-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Recent Work
          </h2>
          <p className="text-white/75 max-w-2xl">
            A few examples of the cleanup and demolition work we do across the KC metro.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 auto-rows-fr">
          {PROJECT_PHOTOS.map((photo) => (
            <figure
              key={photo.src}
              className={`flex flex-col overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 ${photo.className}`}
            >
              <div className="relative flex-1 min-h-[180px] sm:min-h-[220px]">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes={photo.sizes}
                  className="object-cover transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceAreaSection() {
  return (
    <section className="py-16 sm:py-24 bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-dark mb-4">
              Proudly Serving the KC Metro
            </h2>
            <p className="text-foreground/70 max-w-xl leading-relaxed">
              We work throughout the Kansas City metro for cleanup, demolition,
              lead-safe work, and water mitigation. If you&apos;re nearby and do
              not see your city listed, contact us. We may still be able to help.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {SERVICE_AREA_CITIES.map((city) => (
              <span
                key={city}
                className="rounded-full border border-surface-dark bg-white px-4 py-2 text-sm font-medium text-primary shadow-sm transition-colors duration-200 hover:border-primary hover:bg-primary hover:text-white"
              >
                {city}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ProjectGallerySection />
      <TrustSection />
      <ServiceAreaSection />
    </>
  );
}
