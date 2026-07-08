# SEO Action Plan From July 6, 2026 Ranking Report

Source report: `/Users/kylecoffelt/Downloads/httpskiddscleanup.com-Project-Report_2026_07_06.pdf`

Report period: Jun 30, 2026 to Jul 6, 2026

## Baseline

- 62% of tracked keywords are in SERPs.
- 0 keywords are in the top 3.
- 8 keywords are in the top 10, up 5.
- 38 keywords are in the top 30, up 14.
- Search visibility is still 0%.
- Average position is 58, improved by 13.
- AI Overview presence is 100%, but Kidd's has 0% mention presence and 0% link presence.

## What The Report Says

The site is starting to earn visibility, but most of that visibility is not yet strong enough to create dependable traffic. The immediate opportunity is to push keywords already sitting in positions 4-30 into top-10 and top-3 results while fixing the query groups that are still out of index.

The strongest current clusters are:

- Garage demolition Kansas City, around top 5.
- Lead-safe demolition Kansas City, around top 4.
- Deck removal Kansas City, around top 4.
- Several lead-related searches, generally around positions 13-27.
- Some demolition city pages, especially Lenexa, Shawnee, and Overland Park, with volatile but visible rankings.

The weakest current clusters are:

- Core junk removal searches, including `junk removal kansas city`, `junk removal near me`, `furniture removal kansas city`, `mattress removal kansas city`, `hot tub removal kansas city`, and most city junk removal terms.
- Water mitigation searches, including `water mitigation kansas city`, `water damage cleanup kansas city`, `flood cleanup kansas city`, `water extraction kansas city`, and `basement water cleanup kansas city`.
- City-specific Olathe terms, especially `demolition olathe` and `junk removal olathe`.
- Dropped pages/queries: `house demolition kansas city`, `demolition olathe`, `basement cleanout kansas city`, and `junk removal olathe`.

## Priority 1: Confirm Indexing And Technical Signals

Do this before adding more content so ranking changes are measurable.

1. Deploy the current sitemap and submit `https://kiddscleanup.com/sitemap.xml` in Google Search Console.
2. Request indexing for these URLs first:
   - `https://kiddscleanup.com/services/demolition`
   - `https://kiddscleanup.com/services/garage-demolition`
   - `https://kiddscleanup.com/services/lead-safe`
   - `https://kiddscleanup.com/services/deck-removal`
   - `https://kiddscleanup.com/services/house-demolition`
   - `https://kiddscleanup.com/services/basement-cleanouts`
   - `https://kiddscleanup.com/services/junk-removal`
   - `https://kiddscleanup.com/services/water-mitigation`
   - `https://kiddscleanup.com/junk-removal/overland-park`
   - `https://kiddscleanup.com/junk-removal/olathe`
   - `https://kiddscleanup.com/junk-removal/shawnee-ks`
   - `https://kiddscleanup.com/junk-removal/lenexa`
   - `https://kiddscleanup.com/demolition/overland-park`
   - `https://kiddscleanup.com/demolition/olathe`
   - `https://kiddscleanup.com/demolition/shawnee-ks`
   - `https://kiddscleanup.com/demolition/lenexa`
3. Run local checks before each deployment:
   - `npm run build`
   - `npm run lint`
   - Start the site and run `npm run seo:validate`
4. In Search Console, inspect pages that are ranking as `-` in SE Ranking. Confirm they are indexed, canonicalized to themselves, and not discovered-but-not-indexed.

Relevant code:

- `src/app/sitemap.ts`
- `src/app/robots.ts`
- `scripts/validate-seo.mjs`

## Priority 2: Push Near-Winning Pages Into Top 3 And Top 10

These are the highest-ROI content changes because the pages already have enough relevance to rank.

### Garage Demolition

Target query: `garage demolition kansas city`

Current report signal: around position 5 on desktop and mobile.

Recommended changes:

- Expand `/services/garage-demolition` with a stronger project-scope section: detached garages, damaged garages, contents removal, concrete pad/debris handling, access constraints, and cleanup after teardown.
- Add a quote-prep section that answers what affects price: size, materials, access, utilities, debris volume, and whether contents are included.
- Link from the homepage, residential page, demolition page, city demolition pages, and footer using exact or near-exact anchors like `garage demolition in Kansas City`.
- Add at least one recent garage/demo project photo if available, with descriptive alt text.

### Lead-Safe Demolition

Target queries: `lead safe demolition kansas city`, `lead paint removal kansas city`, `lead removal contractor kansas city`, `lead abatement kansas city`

Current report signal: lead-safe demolition is around top 4; related lead terms sit mostly between positions 13-27.

Recommended changes:

- Preserve the cautious compliance language already used on `/services/lead-safe`.
- Add clearer entity/trust proof: certification language, service area, when testing is needed, how containment and disposal are handled, and when another licensed specialist may be required.
- Add internal links from demolition, interior demolition, residential demolition, and city pages to `/services/lead-safe`.
- Consider a dedicated `/services/lead-paint-removal` page only if Search Console confirms impressions for that exact query group.

### Deck Removal And Concrete Removal

Target queries: `deck removal kansas city`, `concrete removal kansas city`

Current report signal: deck removal is around top 4; concrete removal is visible but inconsistent.

Recommended changes:

- Add more job-type specificity to `/services/deck-removal` and `/services/concrete-removal`.
- Add FAQs for deck stairs, railing, footings, concrete slabs, patios, sidewalks, and haul-away.
- Link these pages from demolition city pages as common project types.

Relevant code:

- `src/lib/seo-pages.ts`
- `src/app/services/[slug]/page.tsx`
- `src/app/page.tsx`
- `src/components/Footer.tsx`

## Priority 3: Rescue Dropped Or Out-Of-Index Query Groups

### House Demolition

Target query: `house demolition kansas city`

Report signal: dropped to position 100.

Recommended changes:

- Rework `/services/house-demolition` so it does not read like a thin variation of general demolition.
- Make scope boundaries clear: full structure demolition, partial house demolition, interior tear-outs, debris cleanup, permit/disconnect expectations, and what Kidd's can quote directly.
- Link to and from `/services/demolition`, `/services/residential`, `/services/interior-demolition`, and `/services/construction-debris-removal`.
- Add a short FAQ answering whether Kidd's handles full house demolition, partial demolition, and debris removal.

### Basement Cleanouts

Target query: `basement cleanout kansas city`

Report signal: dropped sharply, around position 66.

Recommended changes:

- Expand `/services/basement-cleanouts` with content around stairs, heavy items, water-damaged contents, mold-sensitive items, estate/move-out basements, and pre-renovation clearing.
- Add internal links from `/services/cleanouts`, `/services/junk-removal`, `/services/water-mitigation`, and `/services/house-cleanouts`.
- Add an FAQ for whether customers need to carry items upstairs first.

### Olathe

Target queries: `demolition olathe`, `junk removal olathe`

Report signal: demolition Olathe fell to 100/out of index; junk removal Olathe is out of index.

Recommended changes:

- Make `/demolition/olathe` and `/junk-removal/olathe` less templated than the other city pages.
- Add Olathe-specific sections for residential subdivisions, rental turnover, commercial cleanup, garage/shed/deck projects, and fast haul-away.
- Add contextual links from `/service-areas/olathe`, `/services/junk-removal`, `/services/demolition`, and the footer.
- Request indexing again after deployment.

Relevant code:

- `src/lib/seo-pages.ts`
- `src/app/junk-removal/[citySlug]/page.tsx`
- `src/app/demolition/[citySlug]/page.tsx`
- `src/components/CityServiceLandingPage.tsx`

## Priority 4: Build The Junk Removal Cluster

The report shows the junk removal cluster is the largest gap. The site has many of the right URLs, but several pages are generated from a shared template and likely need more unique content and stronger internal links.

Target queries:

- `junk removal kansas city`
- `junk removal near me`
- `furniture removal kansas city`
- `appliance removal kansas city`
- `yard debris removal kansas city`
- `hot tub removal kansas city`
- `mattress removal kansas city`
- `trash removal kansas city`
- `haul away junk kansas city`
- `junk removal overland park`
- `junk removal olathe`
- `junk removal shawnee ks`
- `junk removal lenexa`

Recommended changes:

- Expand `/services/junk-removal` with city links, item-removal summaries, cleanout links, and visible service proof.
- Rewrite item-removal pages so each has unique sections instead of only generic generated copy. Start with furniture, appliance, mattress, hot tub, yard debris, bulk trash pickup, and haul-away junk.
- Add a `Junk Removal Service Areas` block to the footer or a high-authority internal link section so city junk pages get more crawl equity.
- On city junk pages, add links to the item-removal pages that match the common jobs shown on that page.
- Add review-request prompts and Google Business Profile service updates for junk removal subservices.

Relevant code:

- `src/app/services/junk-removal/page.tsx`
- `src/lib/seo-pages.ts`
- `src/components/CityServiceLandingPage.tsx`
- `src/components/Footer.tsx`
- `docs/offsite-seo-action-plan.md`

## Priority 5: Build The Water Mitigation Cluster

The water mitigation page includes the right language, but the report still shows most water keywords as out of index.

Target queries:

- `water mitigation kansas city`
- `water damage cleanup kansas city`
- `flood cleanup kansas city`
- `burst pipe cleanup kansas city`
- `water extraction kansas city`
- `basement water cleanup kansas city`

Recommended changes:

- Keep `/services/water-mitigation` as the parent page.
- Add dedicated child pages if Search Console confirms impressions:
  - `/services/water-damage-cleanup`
  - `/services/flood-cleanup`
  - `/services/burst-pipe-cleanup`
  - `/services/water-extraction`
  - `/services/basement-water-cleanup`
- If dedicated pages are too much for the first pass, add stronger sections to `/services/water-mitigation` and link directly to anchors from city/service-area pages.
- Add emergency-response language carefully, only where the business can actually support it.
- Add structured FAQ content for burst pipes, basement water, extraction, drying, and when demolition or contents removal is needed.

Relevant code:

- `src/app/services/water-mitigation/page.tsx`
- `src/lib/seo-pages.ts`
- `src/app/service-areas/[slug]/page.tsx`

## Priority 6: Improve City-Service Pages

The city-service pages are important, but they share a lot of structure. The report shows city terms are volatile, so these pages need more unique local usefulness and stronger links.

Recommended changes:

- Add optional city-specific content fields to `CityServicePageData`, such as `localExamples`, `nearbyAreas`, `quoteFactors`, and `relatedJobLinks`.
- For each tracked city-service page, add 2-3 unique paragraphs and local project examples.
- Add project-type links:
  - Junk pages should link to furniture removal, appliance removal, mattress removal, yard debris removal, cleanouts, and rental cleanouts.
  - Demolition pages should link to garage demolition, shed demolition, deck removal, concrete removal, interior demolition, and construction debris removal.
- Keep Overland Park, Olathe, Shawnee, and Lenexa as the first city-service priorities because they are tracked in the report.

Relevant code:

- `src/lib/seo-pages.ts`
- `src/components/CityServiceLandingPage.tsx`
- `src/app/service-areas/[slug]/page.tsx`

## Priority 7: Improve AI Overview Mention And Link Presence

The report shows AI Overview presence at 100%, but Kidd's has 0% mention presence and 0% link presence. This is not only a schema issue. AI systems need corroborated entity signals and external references.

On-site changes:

- Add stable `@id` values in JSON-LD so `LocalBusiness`, `Service`, `WebPage`, `FAQPage`, and `BreadcrumbList` can reference the same entity.
- Expand `LocalBusinessSchema` with `sameAs` once profiles are live, including Google Business Profile, Bing Places, Apple Business Connect, Yelp, Facebook, and other real profiles.
- Add `hasOfferCatalog` or equivalent service inventory to the LocalBusiness schema for demolition, junk removal, cleanouts, lead-safe work, and water mitigation.
- Add visible business facts near the homepage and about page: service area, phone, hours, owner-operated, since 2017, own dumpsters, lead-safe capability, and main service categories.
- Use original project photos with descriptive captions where possible.

Off-site changes:

- Complete and align Google Business Profile services with the site taxonomy.
- Build or clean up citations listed in `docs/offsite-seo-action-plan.md`.
- Ask customers for reviews that mention service type and city.
- Add GBP posts for top priority services: garage demolition, lead-safe demolition, junk removal, water mitigation, and Olathe/Overland Park service pages.

Relevant code:

- `src/components/StructuredData.tsx`
- `src/components/PageSchemas.tsx`
- `src/app/about/page.tsx`
- `docs/offsite-seo-action-plan.md`

## Measurement Plan

Weekly:

- Track top-3, top-10, and top-30 counts against the July 6 baseline.
- Track average position and search visibility.
- Export Search Console queries for the priority URLs.
- Check whether the pages marked out of index in the report are indexed.
- Record phone clicks, quote clicks, and form submissions by landing page.

After 14 days:

- Compare indexed pages and impressions for newly strengthened URLs.
- Prioritize the pages that gained impressions but not clicks for title/meta testing.
- Prioritize pages that still have no impressions for crawl/internal-link fixes.

After 30 days:

- Recheck the dropped queries: `house demolition kansas city`, `demolition olathe`, `basement cleanout kansas city`, and `junk removal olathe`.
- Recheck AI mention and link presence.
- Decide whether to add the dedicated water-mitigation child pages based on Search Console impressions.

## Suggested Implementation Order

1. Confirm indexing, sitemap, robots, canonicals, and SEO validator status.
2. Strengthen near-winning pages: garage demolition, lead-safe, deck removal, concrete removal.
3. Rescue dropped pages: house demolition, basement cleanouts, Olathe demolition, Olathe junk removal.
4. Expand junk removal cluster and city junk pages.
5. Expand water mitigation cluster.
6. Improve structured data and AI/entity signals.
7. Complete GBP, citations, review prompts, and off-site corroboration.
