import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { BreadcrumbSchema, WebPageSchema } from "@/components/PageSchemas";
import TrackedLink from "@/components/TrackedLink";
import { ANALYTICS_EVENTS, COMPANY } from "@/lib/constants";
import { BLOG_POSTS } from "@/lib/blog-posts";
import { buildPageMetadata } from "@/lib/metadata";

const pageTitle = "Kansas City Cleanup & Demolition Guides";
const pageDescription =
  "Practical Kansas City guides to junk removal costs, bulky-item disposal, demolition planning, garage cleanouts, and flooded-basement cleanup.";

export const metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: "/blog",
  image: "/images/photo-5.jpg",
  imageAlt: "Kansas City cleanup and demolition debris ready for haul-away",
  imageWidth: 1800,
  imageHeight: 1246,
});

export default function BlogIndexPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Guides", href: "/blog" },
  ];

  return (
    <>
      <WebPageSchema title={pageTitle} description={pageDescription} path="/blog" />
      <BreadcrumbSchema items={breadcrumbs} />

      <section className="relative isolate min-h-[calc(100svh-5rem)] overflow-hidden bg-primary-dark text-white">
        <Image
          src="/images/photo-5.jpg"
          alt="Kansas City cleanup and demolition debris ready for haul-away"
          fill
          priority
          sizes="100vw"
          className="editorial-hero-image object-cover object-center motion-safe:scale-[1.02]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,20,34,0.97)_0%,rgba(13,33,55,0.84)_48%,rgba(13,33,55,0.28)_100%)]" />
        <div className="relative mx-auto flex min-h-[calc(100svh-5rem)] max-w-7xl flex-col justify-between px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <Breadcrumbs items={breadcrumbs} theme="dark" />
          <div className="max-w-4xl pb-10 pt-24 sm:pb-14">
            <p className="font-sans text-sm font-bold uppercase tracking-[0.2em] text-accent">The Field Guide</p>
            <h1 className="mt-5 text-6xl font-bold leading-[0.88] tracking-[-0.04em] text-balance sm:text-7xl lg:text-8xl">
              Clear answers before the work starts.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/76 sm:text-xl">
              Practical local guidance for clearing, removing, demolishing, and recovering property across the Kansas City metro.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#guides" className="premium-cta inline-flex justify-center rounded-md bg-accent px-7 py-3.5 font-bold text-white hover:bg-accent-dark">
                Browse the Guides
              </a>
              <TrackedLink
                href="/contact"
                eventName={ANALYTICS_EVENTS.CTA_REQUEST_QUOTE_CLICK}
                eventParams={{ cta_location: "blog_index_hero" }}
                className="inline-flex justify-center rounded-md border border-white/30 px-7 py-3.5 font-bold text-white transition-colors hover:bg-white hover:text-primary-dark"
              >
                Request a Quote
              </TrackedLink>
            </div>
          </div>
        </div>
      </section>

      <section id="guides" className="scroll-mt-24 bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <p className="font-sans text-sm font-bold uppercase tracking-[0.18em] text-accent-dark">Six local planning resources</p>
            <h2 className="mt-3 text-4xl font-bold leading-tight text-primary-dark sm:text-5xl">
              Start with the question in front of you.
            </h2>
          </div>

          <div className="border-t border-surface-dark">
            {BLOG_POSTS.map((post, index) => (
              <article key={post.slug} className="group border-b border-surface-dark py-8 sm:py-10">
                <Link href={`/blog/${post.slug}`} className="grid items-center gap-6 lg:grid-cols-[4rem_minmax(0,1fr)_16rem]">
                  <span className="font-sans text-3xl font-bold text-surface-dark transition-colors group-hover:text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <div className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-[0.14em] text-accent-dark">
                      <span>{post.eyebrow}</span>
                      <span className="text-foreground/25">•</span>
                      <span className="text-foreground/45">{post.readTime}</span>
                    </div>
                    <h3 className="mt-3 max-w-3xl text-3xl font-bold leading-tight text-primary-dark transition-colors group-hover:text-primary-light sm:text-4xl">
                      {post.title}
                    </h3>
                    <p className="mt-3 max-w-3xl leading-7 text-foreground/65">{post.description}</p>
                  </div>
                  <div className="relative hidden aspect-[4/3] overflow-hidden bg-surface lg:block">
                    <Image
                      src={post.image}
                      alt={post.imageAlt}
                      fill
                      sizes="16rem"
                      className="object-cover transition duration-500 ease-out group-hover:scale-[1.04]"
                      style={{ objectPosition: post.imagePosition }}
                    />
                    <div className="absolute inset-0 bg-primary-dark/10 transition-colors group-hover:bg-transparent" />
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_auto] lg:px-8">
          <div>
            <p className="font-sans text-sm font-bold uppercase tracking-[0.16em] text-accent-dark">Serving the KC metro</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-bold text-primary-dark sm:text-4xl">
              Advice is useful. A clear project scope is better.
            </h2>
            <p className="mt-4 max-w-3xl leading-7 text-foreground/68">
              Kidd&apos;s Clean Up handles demolition, junk removal, cleanouts, lead-safe work, and water mitigation across Kansas City and surrounding communities.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <TrackedLink
              href="/contact"
              eventName={ANALYTICS_EVENTS.CTA_REQUEST_QUOTE_CLICK}
              eventParams={{ cta_location: "blog_index_bottom" }}
              className="premium-cta inline-flex justify-center rounded-md bg-primary px-7 py-3.5 font-bold text-white hover:bg-primary-light"
            >
              Request a Quote
            </TrackedLink>
            <TrackedLink
              href={COMPANY.phoneTel}
              eventName={ANALYTICS_EVENTS.CTA_CALL_CLICK}
              eventParams={{ cta_location: "blog_index_bottom" }}
              className="inline-flex justify-center rounded-md border border-primary px-7 py-3.5 font-bold text-primary transition-colors hover:bg-primary hover:text-white"
            >
              Call {COMPANY.phone}
            </TrackedLink>
          </div>
        </div>
      </section>
    </>
  );
}
