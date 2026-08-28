import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import BlogArticleBody from "@/components/BlogArticleBody";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQSection from "@/components/FAQSection";
import { ArticleSchema, BreadcrumbSchema, FAQSchema, WebPageSchema } from "@/components/PageSchemas";
import TrackedLink from "@/components/TrackedLink";
import { ANALYTICS_EVENTS, COMPANY } from "@/lib/constants";
import { BLOG_POSTS, getBlogPost } from "@/lib/blog-posts";
import { buildPageMetadata } from "@/lib/metadata";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

const imageDimensions: Record<string, { width: number; height: number }> = {
  "/images/photo-1.jpg": { width: 1800, height: 1269 },
  "/images/photo-2.jpg": { width: 1800, height: 1352 },
  "/images/photo-4.jpg": { width: 1579, height: 1800 },
  "/images/photo-5.jpg": { width: 1800, height: 1246 },
  "/images/photo-6.jpg": { width: 1800, height: 1249 },
};

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {};
  }

  const dimensions = imageDimensions[post.image] ?? { width: 1800, height: 1269 };

  return buildPageMetadata({
    title: post.shortTitle,
    description: post.description,
    path: `/blog/${post.slug}`,
    image: post.image,
    imageAlt: post.imageAlt,
    imageWidth: dimensions.width,
    imageHeight: dimensions.height,
  });
}

function displayDate(value: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${value}T12:00:00Z`));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const path = `/blog/${post.slug}`;
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Guides", href: "/blog" },
    { label: post.shortTitle, href: path },
  ];
  const relatedPosts = BLOG_POSTS.filter((item) => item.slug !== post.slug);

  return (
    <>
      <WebPageSchema title={post.title} description={post.description} path={path} />
      <BreadcrumbSchema items={breadcrumbs} />
      <ArticleSchema
        title={post.title}
        description={post.description}
        path={path}
        image={post.image}
        datePublished={post.published}
        dateModified={post.modified}
      />
      <FAQSchema items={post.faq} />

      <article>
        <header className="relative isolate min-h-[calc(100svh-5rem)] overflow-hidden bg-primary-dark text-white">
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            priority
            sizes="100vw"
            className="editorial-hero-image object-cover motion-safe:scale-[1.02]"
            style={{ objectPosition: post.imagePosition }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,20,34,0.96)_0%,rgba(13,33,55,0.84)_45%,rgba(13,33,55,0.24)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-primary-dark/80 to-transparent" />
          <div className="relative mx-auto flex min-h-[calc(100svh-5rem)] max-w-7xl flex-col justify-between px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <Breadcrumbs items={breadcrumbs} theme="dark" />
            <div className="max-w-4xl pb-8 pt-20 sm:pb-12">
              <p className="mb-5 font-sans text-sm font-bold uppercase tracking-[0.2em] text-accent">
                {post.eyebrow}
              </p>
              <h1 className="max-w-4xl text-5xl font-bold leading-[0.95] tracking-[-0.03em] text-balance sm:text-6xl lg:text-7xl">
                {post.title}
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/78 sm:text-xl">
                {post.intro}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/62">
                <span>Reviewed by {COMPANY.name}</span>
                <span aria-hidden="true">•</span>
                <time dateTime={post.modified}>Updated {displayDate(post.modified)}</time>
                <span aria-hidden="true">•</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </header>

        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[minmax(0,1fr)_18rem] lg:px-8">
          <div className="min-w-0">
            <div className="mb-12 border-y border-surface-dark py-7 sm:py-9">
              <p className="mb-3 font-sans text-sm font-bold uppercase tracking-[0.16em] text-accent-dark">
                Quick answer
              </p>
              <p className="text-2xl font-semibold leading-9 text-primary-dark sm:text-3xl sm:leading-10">
                {post.answer}
              </p>
            </div>

            <BlogArticleBody slug={post.slug} />

            <section className="mt-10 bg-primary-dark px-6 py-9 text-white sm:px-10 sm:py-11">
              <p className="font-sans text-sm font-bold uppercase tracking-[0.16em] text-accent">
                Get a clear next step
              </p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Need help with the actual project?</h2>
              <p className="mt-4 max-w-2xl leading-7 text-white/75">
                Send the address, a short description, and clear photos. Kidd&apos;s Clean Up can review the scope and help you plan the next step across the Kansas City metro.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <TrackedLink
                  href="/contact"
                  eventName={ANALYTICS_EVENTS.CTA_REQUEST_QUOTE_CLICK}
                  eventParams={{ cta_location: `blog_${post.slug}` }}
                  className="premium-cta inline-flex justify-center rounded-md bg-accent px-6 py-3 font-bold text-white hover:bg-accent-dark"
                >
                  Request a Quote
                </TrackedLink>
                <TrackedLink
                  href={COMPANY.phoneTel}
                  eventName={ANALYTICS_EVENTS.CTA_CALL_CLICK}
                  eventParams={{ cta_location: `blog_${post.slug}` }}
                  className="inline-flex justify-center rounded-md border border-white/30 px-6 py-3 font-bold text-white transition-colors hover:bg-white hover:text-primary-dark"
                >
                  Call {COMPANY.phone}
                </TrackedLink>
              </div>
            </section>
          </div>

          <aside className="lg:order-none">
            <div className="top-28 border-t-4 border-accent bg-surface p-6 lg:sticky">
              <h2 className="text-xl font-bold text-primary-dark">In this guide</h2>
              <ol className="mt-5 space-y-3 border-l border-surface-dark pl-4">
                {post.sections.map((section) => (
                  <li key={section.id}>
                    <a href={`#${section.id}`} className="text-sm font-semibold leading-5 text-foreground/65 transition-colors hover:text-primary">
                      {section.label}
                    </a>
                  </li>
                ))}
              </ol>
              <div className="mt-7 border-t border-surface-dark pt-6">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-foreground/45">Related service</p>
                <Link href={post.primaryService.href} className="mt-2 inline-flex items-center gap-2 font-bold text-primary hover:text-accent-dark">
                  {post.primaryService.label}
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </aside>
        </div>

        <FAQSection
          title="Frequently Asked Questions"
          intro={`Practical answers related to ${post.primaryService.label} across the Kansas City metro.`}
          items={post.faq}
        />

        <section className="border-t border-surface-dark bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between gap-6 border-b border-surface-dark pb-5">
              <div>
                <p className="font-sans text-sm font-bold uppercase tracking-[0.16em] text-accent-dark">Keep planning</p>
                <h2 className="mt-2 text-3xl font-bold text-primary-dark">Related Kansas City guides</h2>
              </div>
              <Link href="/blog" className="hidden font-bold text-primary hover:text-accent-dark sm:block">View all guides →</Link>
            </div>
            <div className="grid gap-0 md:grid-cols-2">
              {relatedPosts.map((related) => (
                <Link key={related.slug} href={`/blog/${related.slug}`} className="group border-b border-surface-dark py-7 md:odd:pr-8 md:even:border-l md:even:pl-8">
                  <p className="text-sm font-bold uppercase tracking-[0.14em] text-accent-dark">{related.eyebrow}</p>
                  <h3 className="mt-2 text-2xl font-bold leading-tight text-primary-dark transition-colors group-hover:text-primary-light">{related.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-foreground/65">{related.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
