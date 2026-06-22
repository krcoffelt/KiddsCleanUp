# SEO/GEO Visibility Loop

## Benchmark State

- Date of benchmark: 2026-06-22
- Site URL: https://kiddscleanup.com
- Locale/location: en-US; Kansas City metro, with priority pages for Kansas City, Overland Park, Olathe, Lee's Summit, Independence, Shawnee, Lenexa, and Blue Springs.
- Search engines checked: live deployed fetches for site pages, robots.txt, and sitemap.xml; limited web-search probe for exact brand/site queries. Live SERP position benchmarking was not reliable from this environment.
- AI answer engines checked: not directly accessible from this environment. This benchmark uses repo inspection, deployed-page inspection, and answer-readiness heuristics.
- SEO type: local SEO for service-area business.
- Target audience: Kansas City metro homeowners, landlords, businesses, property managers, and contractors needing cleanup, demolition, junk removal, lead-safe work, or water mitigation.
- Target services/topics: residential demolition, commercial demolition, junk removal, property cleanouts, lead-safe removal/demolition, water mitigation.
- Main competitors: not provided.
- Build/lint/test commands found: `npm run build`, `npm run lint`; no `test` or `typecheck` script.

## Repo Inspection

- Framework/CMS/static setup: Next.js App Router app, React 19, Next 16, deployed via Netlify with `@netlify/plugin-nextjs`.
- Routing structure: homepage, about, contact, privacy, thank-you, API quote route, five service pages, and generated service-area pages under `/service-areas/[slug]`.
- Page templates: service pages are individual App Router pages; city pages are generated from `PRIORITY_CITY_PAGES` in `src/lib/local-seo.ts`.
- Metadata handling: root metadata in `src/app/layout.tsx`; service, city, about, contact, privacy, and thank-you pages define page-level metadata/canonicals.
- Sitemap/robots setup: generated through `src/app/sitemap.ts` and `src/app/robots.ts`; deployed robots allows `/`, disallows `/api/` and `/thank-you`, and references sitemap.
- Structured data: global `WebSite` and `LocalBusiness`; service pages have `WebPage`, `BreadcrumbList`, `Service`, and `FAQPage`; city pages had `WebPage`, `BreadcrumbList`, and `FAQPage` before iteration 1.
- Internal linking: header links to service pages; footer links to service and city pages; homepage links to service and city pages; service pages link to city pages; city pages link back to services and nearby city pages.
- Content structure: service and city pages use clear H1/H2 structure, service cards, trust signals, FAQs, and CTAs.
- Existing SEO utilities: `src/lib/local-seo.ts`, `src/components/PageSchemas.tsx`, `src/components/StructuredData.tsx`.
- Docs/conventions: README is stock Next.js guidance; no repo-specific SEO conventions found.

## Target Query Set

| Query/question | Intent | Best matching page | Indexable? | Answer-ready? | Title quality | Meta description quality | H1 quality | Internal link support | Structured data present? | Source/citation strength | Traditional search visibility notes | AI answer engine visibility notes | Priority score | Recommended fix |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| kansas city demolition company | Local service | `/` or `/services/residential` | Yes | Partial on homepage; strong on service page | Strong | Strong | Strong | Strong | Global only on homepage; Service schema on service page | Medium | Broad local query may split between homepage and service pages | Homepage answers broadly but has less page-specific schema | 90 | Add/verify page-level schema and concise answer block on homepage in a later pass. |
| residential demolition kansas city | Local service | `/services/residential` | Yes | Yes | Strong | Strong | Strong | Strong | Yes | Medium | Dedicated route and sitemap entry exist | FAQ and Service schema support summarization | 88 | No immediate fix. |
| commercial demolition kansas city | Local service | `/services/commercial` | Yes | Yes | Strong | Strong | Strong | Strong | Yes | Medium | Dedicated route and sitemap entry exist | FAQ and Service schema support summarization | 86 | No immediate fix. |
| junk removal kansas city | Local service | `/services/junk-removal` | Yes | Yes | Strong | Strong | Strong | Strong | Yes | Medium | Dedicated route and sitemap entry exist | Direct service explanation and FAQ are good | 88 | No immediate fix. |
| water mitigation kansas city | Urgent local service | `/services/water-mitigation` | Yes | Yes | Adequate | Strong | Strong | Strong | Yes | Medium | Dedicated route and sitemap entry exist | Good early answer to urgency and mitigation steps | 84 | Consider emergency/response language refinement later. |
| lead safe demolition kansas city | Local regulated service | `/services/lead-safe` | Yes | Yes | Strong | Strong | Strong | Strong | Yes | Medium | Dedicated route and sitemap entry exist | Strong FAQ and visible regulatory context | 82 | Add external citation only if business wants authority references. |
| overland park junk removal | Local service-area | `/service-areas/overland-park` | Yes | Yes | Strong | Strong | Strong | Strong | Partial before iteration 1 | Medium | Dedicated city route and sitemap entry exist | Visible service cards answer, but machine-readable service/entity signal was weak | 92 | Add city-specific Service structured data. |
| olathe demolition and cleanouts | Local service-area | `/service-areas/olathe` | Yes | Yes | Strong | Strong | Strong | Strong | Partial before iteration 1 | Medium | Dedicated city route and sitemap entry exist | Local service entity could be clearer for answer engines | 90 | Add city-specific Service structured data. |
| lee's summit demolition | Local service-area | `/service-areas/lees-summit` | Yes | Yes | Strong | Strong | Strong | Strong | Partial before iteration 1 | Medium | Dedicated city route and sitemap entry exist | Local service entity could be clearer for answer engines | 88 | Add city-specific Service structured data. |
| blue springs property cleanup | Local service-area | `/service-areas/blue-springs` | Yes | Yes | Strong | Strong | Strong | Strong | Partial before iteration 1 | Medium | Dedicated city route and sitemap entry exist | Local service entity could be clearer for answer engines | 86 | Add city-specific Service structured data. |

## Baseline Findings

- Live `robots.txt` is crawlable and correctly points to the sitemap.
- Live `sitemap.xml` includes homepage, all service pages, eight priority city pages, about, contact, and privacy.
- `/services/junk-removal` returned HTTP 200 in deployed route check.
- `/thank-you` is intentionally noindexed and disallowed in robots.
- No broad noindex/nofollow issue found in source.
- Canonicals are defined for indexable routes inspected.
- Titles and descriptions are unique for service pages and generated city pages.
- Homepage inherits root metadata but does not emit page-level `WebPage` schema.
- Service pages have strong `Service` and FAQ schema.
- City pages had visible answer-ready content and FAQ schema, but no explicit `Service` schema scoped to the city.
- Footer and homepage provide strong internal links to service and city pages.
- Image alt text is present for inspected `Image` usage.
- Local NAP is consistent at the business level: Kidd's Clean Up and Demo, 816-457-4363, Kansas City Metro.

## Technical SEO Audit

| Check | Status | Notes |
| --- | --- | --- |
| robots.txt | Pass | Allows `/`, blocks `/api/` and `/thank-you`, references sitemap. |
| sitemap.xml | Pass | Generated and deployed; includes priority routes. |
| canonical tags | Pass | Root, service, city, about, contact, privacy pages define canonicals. |
| noindex/nofollow | Pass | `thank-you` is intentionally noindexed. |
| route accessibility | Pass | Deployed homepage and sampled service page are reachable. |
| broken internal links | Not fully crawled | Static link inventory looks consistent; full crawl not run. |
| duplicate/missing titles | Pass by inspection | Service and city pages use unique titles. |
| duplicate/missing descriptions | Pass by inspection | Service and city pages use unique descriptions. |
| weak H1s | Low issue | About/contact H1s are generic but not priority search pages. |
| heading hierarchy | Pass by inspection | Priority pages use one H1 and logical H2/H3 sections. |
| image alt text | Pass by inspection | Next images inspected have alt text. |
| Open Graph/Twitter | Medium issue | Root OG/Twitter exists; page-specific OG titles/descriptions are not defined on service/city pages. |
| structured data | Medium issue before iteration 1 | City pages lacked city-scoped Service schema. |
| performance risks | Low issue | Next/Image is used; remote font dependency from `next/font/google` may affect build/network. |
| mobile/responsive risks | Not audited visually | Classes are responsive; no Playwright pass run in this iteration. |
| local NAP consistency | Pass | Name, phone, hours, and service area appear consistently in constants/footer/schema. |

## GEO / Answer-Engine Audit

- Priority service pages directly answer core service questions early and include FAQs.
- Priority city pages directly state services and service area early, then list popular services and FAQs.
- Trust signals are present: family-owned, owner-operated, own dumpsters, lead certified, since 2017, clean/safe job sites.
- Location signals are strong for the KC metro and eight priority city pages.
- Citation/source-like support is moderate; the site mostly supports claims through first-party business details rather than external references.
- Structured data was strongest on service pages and weaker on city pages before iteration 1.

## Ranked Issues

| Issue | Impact | Confidence | Effort | Risk | Decision |
| --- | --- | --- | --- | --- | --- |
| City service-area pages lacked city-scoped Service structured data | High | High | Small | Low | Fixed in iteration 1 |
| Homepage lacks page-level WebPage schema and a compact answer block for broad local queries | Medium | Medium | Small | Low | Candidate next iteration |
| Page-specific Open Graph/Twitter metadata is not defined for service/city pages | Medium | Medium | Medium | Low | Candidate later iteration |
| About/contact H1s are generic | Low | Medium | Small | Low | Defer |
| No full internal link crawl harness | Medium | Medium | Medium | Low | Candidate tooling iteration |
| No live SERP/AI answer benchmark available from this environment | Medium | High | External dependency | Low | Needs external tool/access |

## Current Iteration

- Iteration: 1 of 3
- Selected issue: City service-area pages lacked explicit city-scoped Service structured data.
- Why selected: It improves all priority local landing pages at once, directly supports city plus service query understanding, has high confidence, requires a small reusable code change, and has low UX/regression risk.
- Files changed:
  - `src/components/PageSchemas.tsx`
  - `src/app/service-areas/[slug]/page.tsx`
  - `seo-geo-visibility-loop.md`

## Fixes Made

- Added `CityServiceSchema` to emit a city-scoped `Service` JSON-LD block with provider, service types, area served, service URL, and description.
- Added `CityServiceSchema` to every generated city service-area page.

## Validation Commands

- Passed: `npm run lint`
- Passed: `npm run build`
- Passed: static built-output inspection confirmed city service pages emit the new `Service` JSON-LD with city-specific `areaServed` and service URL.

## Rerun Benchmark Notes

- The priority city pages now have `WebPage`, city-scoped `Service`, `BreadcrumbList`, and `FAQPage` schema.
- The selected issue is resolved by source inspection, build validation, and built-output inspection.

## Remaining Issues

- Homepage broad-query answer readiness could be improved with page-level schema and a tighter visible answer block.
- Page-specific OG/Twitter metadata could be added for service and city pages.
- Full internal-link crawl and rendered metadata extraction would make future iterations more repeatable.
- Live SERP and AI-answer visibility still require external benchmark access or a dedicated SEO tool.

## Stop Condition Status

- No critical crawlability/indexation issues remain: likely yes based on repo and live robots/sitemap checks.
- Every priority query maps to a clear answer-ready page: yes for first-pass query set.
- Priority pages have unique, intent-matched titles/descriptions: yes by inspection.
- Internal links support priority pages: yes by inspection.
- Structured data is present where appropriate: yes for service and city priority pages after iteration 1; homepage page-specific schema remains a lower-priority improvement.
- No high-impact content gap remains: not fully satisfied because live SERP/AI benchmarking was limited and homepage broad-query support can still improve.
- Stop reason for this pass: one focused high-leverage iteration completed; additional iterations should proceed only after validation and, ideally, external benchmark inputs.
