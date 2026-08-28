# SEO/GEO Audit — 2026-08-28

## Outcome

The rendered local site passes the technical and on-page acceptance gate for all 55 sitemap URLs and all 28 priority query-to-page mappings. No critical crawlability, indexation, canonical, title, description, internal-link, structured-data, citation, or answer-readiness issue remains in the current build.

External visibility is mixed. Google shows Kidd's Clean Up and Demo in the local pack and Google AI Mode names and links the business for `Kansas City demolition company`. The sampled organic web results do not show the site among the leading results for the four benchmark queries, and Perplexity does not name the business for the same demolition query. This remaining authority gap cannot be closed or measured from an undeployed code change alone.

## Scope and benchmark conditions

- Site: `https://kiddscleanup.com`
- Local acceptance URL: `http://127.0.0.1:3007`
- Locale: English; Kansas City metro
- Search benchmark queries:
  - `Kansas City demolition company`
  - `Kansas City junk removal`
  - `Overland Park junk removal`
  - `lead safe demolition Kansas City`
- Search surfaces: Google web/local results, Bing/web-search sample
- AI answer surfaces: Google AI Mode and Perplexity
- Limitation: repository fixes were not deployed during this run, so the external rerun is a control benchmark and not a post-indexing ranking test.

## Ranked gaps at baseline

| Rank | Gap | Expected impact | Confidence | Resolution |
| ---: | --- | --- | --- | --- |
| 1 | Weak corroborating authority in organic and AI results | High | High | On-page EPA citations and claim precision improved; off-site authority remains |
| 2 | 11 titles and 15 descriptions exceeded the benchmark display limits | Medium-high | High | Fixed across shared templates and affected pages |
| 3 | Two specialty pages had fewer than two internal linking pages | Medium | High | Fixed through contextual and global service links |
| 4 | The crawl test did not enforce duplicates, length limits, JSON-LD parsing, link depth, citations, or query ownership | Medium | High | Fixed in `scripts/validate-seo.mjs` |

## Fix iterations

### Iteration 1 — metadata and internal links

- Shortened the global title suffix while preserving the business name.
- Shortened all over-limit page titles and descriptions.
- Added crawl paths to trash-removal and hoarder-cleanout pages.
- Result: title issues `11 → 0`; description issues `15 → 4`; pages with fewer than two inbound internal links `2 → 0`.

### Iteration 2 — water-template descriptions

- Tightened the shared water-event description template.
- Result: description issues `4 → 0`.

### Iteration 3 — source-backed lead-safe content

- Replaced overly broad compliance wording with scope-dependent language.
- Added primary citations to the [EPA RRP program](https://www.epa.gov/lead/lead-renovation-repair-and-painting-program) and [EPA lead-based paint and demolition guidance](https://www.epa.gov/large-scale-residential-demolition/lead-based-paint-and-demolition).
- Added citation presence to the automated acceptance gate.

### Iteration 4 — repeatable acceptance gate

The crawler now fails on:

- non-200 sitemap URLs;
- missing, mismatched, or non-canonical URLs;
- missing, weak, overlong, or duplicate titles and descriptions;
- unexpected `noindex`;
- missing or multiple H1s;
- missing or invalid JSON-LD;
- internal links to non-sitemap URLs;
- fewer than two sitemap pages linking to an indexable page;
- missing answer-ready text on a priority target;
- missing primary citations on the lead-safe page.

## Priority query ownership

| Query family | Answer-ready page |
| --- | --- |
| demolition company Kansas City | `/services/demolition` |
| residential demolition Kansas City | `/services/residential` |
| commercial demolition Kansas City | `/services/commercial` |
| house demolition Kansas City | `/services/house-demolition` |
| interior demolition Kansas City | `/services/interior-demolition` |
| garage demolition Kansas City | `/services/garage-demolition` |
| shed demolition Kansas City | `/services/shed-demolition` |
| deck removal Kansas City | `/services/deck-removal` |
| concrete removal Kansas City | `/services/concrete-removal` |
| junk removal Kansas City | `/services/junk-removal` |
| furniture removal Kansas City | `/services/furniture-removal` |
| mattress removal Kansas City | `/services/mattress-removal` |
| trash removal Kansas City | `/services/trash-removal` |
| bulk trash pickup Kansas City | `/services/bulk-trash-pickup` |
| cleanout services Kansas City | `/services/cleanouts` |
| basement cleanout Kansas City | `/services/basement-cleanouts` |
| hoarder cleanout Kansas City | `/services/hoarder-cleanouts` |
| water mitigation Kansas City | `/services/water-mitigation` |
| burst pipe cleanup Kansas City | `/services/burst-pipe-cleanup` |
| lead-safe demolition Kansas City | `/services/lead-safe` |
| junk removal: Overland Park, Olathe, Shawnee, Lenexa | matching `/junk-removal/{city}` page |
| demolition: Overland Park, Olathe, Shawnee, Lenexa | matching `/demolition/{city}` page |

The exact 28-query executable mapping is maintained in `scripts/validate-seo.mjs` so page ownership cannot silently regress.

## Before/after crawl

| Check | Baseline | Final local build |
| --- | ---: | ---: |
| Sitemap URLs | 55 | 55 |
| Non-200 sitemap URLs | 0 | 0 |
| Canonical errors | 0 | 0 |
| Unexpected noindex | 0 | 0 |
| Missing/multiple H1 | 0 | 0 |
| Invalid/missing JSON-LD | 0 | 0 |
| Duplicate titles/H1s | 0 | 0 |
| Over-limit titles | 11 | 0 |
| Over-limit descriptions | 15 | 0 |
| Pages with fewer than two internal linking pages | 2 | 0 |
| Priority query mappings checked | manual/stale | 28 passing |
| Required primary-source citations | 0 | 2 |

## External benchmark rerun

| Surface | Baseline | Rerun | Interpretation |
| --- | --- | --- | --- |
| Google web/local | Business appears in the local pack for the demolition query; not a leading sampled organic result | Unchanged | Strong local entity signal; weaker organic authority |
| Bing/web-search sample | Site is indexed on exact site queries; absent from leading generic sample | Unchanged | Crawl/indexation works; authority is the constraint |
| Google AI Mode | Brand mentioned and website linked for the demolition query | Brand mentioned and website linked | Positive AI/entity result |
| Perplexity | Brand not named for the demolition query | Brand not named | External corroboration gap remains |

## Stop state and remaining work

Technical/on-site stop condition: **success**. Repeating more code edits without fresh ranking or business evidence would be speculative and risks weakening pages that already rank.

External authority stop condition: **approval/input required**. The highest-impact remaining work is deployment, recrawl, verified profile/citation consistency, and real project/review evidence. It requires the controlled profile URLs, verified certification and service-boundary details, approved project photos/case facts, and Search Console or rank-tracker exports. Do not invent or publish those signals.

After deployment, rerun this exact crawl immediately, then rerun the four-query search/AI benchmark after the pages have been recrawled. Use Search Console query-to-page data as the acceptance evidence for ranking changes rather than making further copy changes from spot checks alone.
