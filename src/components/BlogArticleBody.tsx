import type { ReactNode } from "react";
import Link from "next/link";

function Section({
  id,
  number,
  title,
  children,
}: {
  id: string;
  number: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28 border-t border-surface-dark py-10 sm:py-12">
      <div className="mb-5 flex items-baseline gap-4">
        <span className="font-sans text-sm font-bold tracking-[0.16em] text-accent-dark">
          {number}
        </span>
        <h2 className="text-3xl font-bold leading-tight text-primary-dark sm:text-4xl">{title}</h2>
      </div>
      <div className="article-copy space-y-5 text-[1.03rem] leading-8 text-foreground/78">
        {children}
      </div>
    </section>
  );
}

function Checklist({ children }: { children: ReactNode }) {
  return <ul className="article-checklist my-7 space-y-3">{children}</ul>;
}

function Check({ children }: { children: ReactNode }) {
  return (
    <li className="flex gap-3">
      <svg className="mt-1 h-5 w-5 shrink-0 text-accent-dark" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
      </svg>
      <span>{children}</span>
    </li>
  );
}

function Note({ title, children }: { title: string; children: ReactNode }) {
  return (
    <aside className="my-8 border-l-4 border-accent bg-surface px-6 py-5 sm:px-8">
      <p className="mb-2 font-sans text-sm font-bold uppercase tracking-[0.14em] text-primary">
        {title}
      </p>
      <div className="leading-7 text-foreground/75">{children}</div>
    </aside>
  );
}

function JunkRemovalCost() {
  return (
    <>
      <Section id="pricing" number="01" title="How full-service junk removal pricing works">
        <p>
          Most junk removal jobs are scoped around the space the material takes, the labor required to load it, and the disposal route it needs. A few light items at the end of a driveway are a different job from dense basement contents, broken concrete, or a packed two-car garage—even when the photos make the piles look similar.
        </p>
        <p>
          This is why a flat online number can be misleading. A useful quote should connect the price to a defined scope: what is being removed, where it is located, what preparation is expected, whether lifting and loading are included, and how the area will be left afterward.
        </p>
        <Note title="The short version">
          The clearest estimate starts with wide photos, close-ups of heavy or unusual items, an approximate item count, and a picture of the path to the loading area.
        </Note>
      </Section>

      <Section id="factors" number="02" title="The five details that change a quote">
        <Checklist>
          <Check><strong>Volume:</strong> how much truck or container space the material occupies after practical loading.</Check>
          <Check><strong>Weight:</strong> books, roofing, plaster, tile, soil, and concrete can be far heavier than household furniture.</Check>
          <Check><strong>Access:</strong> stairs, elevators, narrow halls, long carries, gates, soft yards, and limited parking add handling time.</Check>
          <Check><strong>Preparation:</strong> disassembly, bagging, sorting, or disconnecting approved items changes the work required on site.</Check>
          <Check><strong>Disposal:</strong> mixed household junk, recyclable metal, yard debris, construction material, and regulated items may need different destinations.</Check>
        </Checklist>
        <p>
          Travel can also matter across a large metro. Kidd&apos;s Clean Up serves both sides of Kansas City and surrounding communities, including Overland Park, Olathe, Shawnee, Lenexa, Lee&apos;s Summit, Independence, Blue Springs, Leawood, Prairie Village, Mission, Raytown, Liberty, Belton, and Grandview. The property address helps the crew plan the right route and equipment.
        </p>
      </Section>

      <Section id="job-types" number="03" title="What kind of junk-removal job do you have?">
        <p>
          A single bulky-item pickup is usually the simplest scope. Multi-item pickups add loading and disposal volume. A <Link href="/services/garage-cleanouts">garage cleanout</Link>, <Link href="/services/basement-cleanouts">basement cleanout</Link>, or <Link href="/services/estate-cleanouts">estate cleanout</Link> may also require sorting decisions, multiple rooms, and a plan for belongings that should stay.
        </p>
        <p>
          Construction material is its own category. Drywall, lumber, cabinets, fixtures, flooring, and demo debris should be identified before pickup because weight and accepted-material rules can differ from ordinary household junk. See the <Link href="/services/construction-debris-removal">construction debris removal service</Link> for project-specific planning.
        </p>
        <p>
          For rental turnovers and sale preparation, define the finish line. “Remove the marked contents” is not the same scope as “empty the property, remove exterior piles, and leave access areas broom-clean.” Clear language prevents surprises for everyone.
        </p>
      </Section>

      <Section id="options" number="04" title="City pickup, dumpster, self-haul, or a removal crew?">
        <p>
          City collection can be a good fit when the residence is eligible, the items are accepted, you can meet the appointment and curb-placement rules, and someone can safely move everything outside. A dumpster can work for projects spread across several days when you have room for the container and labor available to load it.
        </p>
        <p>
          Self-hauling makes sense when you have a suitable vehicle, tie-downs, help with lifting, and a confirmed disposal destination. Full-service <Link href="/services/junk-removal">junk removal in Kansas City</Link> is the practical choice when the material is inside, bulky, spread across the property, time-sensitive, or more than you can safely load yourself.
        </p>
        <Note title="Compare the complete job">
          When comparing options, count loading labor, vehicle or container cost, fuel, disposal fees, repeat trips, surface protection, and the time needed to finish—not just the advertised starting price.
        </Note>
      </Section>

      <Section id="quote" number="05" title="How to prepare for a clearer quote">
        <Checklist>
          <Check>Take one wide photo of every room, pile, or outdoor area included.</Check>
          <Check>List appliances, mattresses, furniture, exercise equipment, and especially heavy items.</Check>
          <Check>Show stairs, doors, gates, elevators, driveways, and the intended loading location.</Check>
          <Check>Separate anything staying and mark it clearly.</Check>
          <Check>Disclose paint, fuel, chemicals, batteries, tires, liquids, and unknown containers.</Check>
          <Check>State whether the project has a closing, move-out, contractor, or inspection deadline.</Check>
        </Checklist>
        <p>
          Ready to scope the job? Review <Link href="/services/junk-removal">Kidd&apos;s Clean Up&apos;s junk removal service</Link>, then text photos or request a quote with the address and access details.
        </p>
      </Section>
    </>
  );
}

function BulkyItemDisposal() {
  return (
    <>
      <Section id="choose" number="01" title="Choose the route by condition, weight, and access">
        <p>
          If an item is clean, safe, and usable, reuse or donation may keep it out of the waste stream. Confirm acceptance before driving anywhere: organizations can limit upholstered furniture, mattresses, large appliances, or items with stains, damage, missing parts, or pest exposure.
        </p>
        <p>
          If the item cannot be reused, compare municipal bulky collection, an approved recycling or drop-off program, self-haul disposal, and full-service pickup. Your best option depends on eligibility, timing, whether the item is already at the curb, and whether it can be moved without injury or property damage.
        </p>
      </Section>

      <Section id="furniture" number="02" title="Furniture and mattress disposal">
        <p>
          Couches, sectionals, bed frames, dressers, tables, and mattresses are mostly an access problem. Measure the item and the narrowest doorway, identify stairs and tight turns, and decide whether disassembly is possible before moving day.
        </p>
        <p>
          For inside pickup, send photos of the item and carrying path. Kidd&apos;s Clean Up offers <Link href="/services/furniture-removal">furniture removal</Link> and <Link href="/services/mattress-removal">mattress removal</Link> across the Kansas City metro, including loading and haul-away as defined in the quote.
        </p>
        <Note title="Protect the property">
          Clear small objects from the route, secure pets, open gates, and identify floors, railings, walls, or doors that need protection. Do not attempt to move an item that is unstable or beyond your safe lifting capacity.
        </Note>
      </Section>

      <Section id="appliances" number="03" title="Old appliance removal needs more information up front">
        <p>
          Refrigerators, freezers, air conditioners, washers, dryers, stoves, and water heaters are not interchangeable. Some contain refrigerant, some hold residual water, and some may be connected to gas, power, plumbing, or venting.
        </p>
        <Checklist>
          <Check>Empty food, clothing, water, and loose contents.</Check>
          <Check>Say whether the appliance is disconnected and easy to reach.</Check>
          <Check>Identify refrigerating equipment when scheduling.</Check>
          <Check>Show stairs, basement access, counters, doors, and tight turns.</Check>
          <Check>Leave utility disconnection to an appropriately qualified person when needed.</Check>
        </Checklist>
        <p>
          The <Link href="/services/appliance-removal">appliance removal page</Link> explains what to share before pickup. Disclosure is important because an appliance that is ready in a driveway is a different scope from one connected in a basement.
        </p>
      </Section>

      <Section id="hot-tubs" number="04" title="Hot tubs usually need dismantling, not just hauling">
        <p>
          A hot tub may need to be disconnected, drained, cut into manageable sections, carried through a gate, and loaded without damaging nearby decking, fencing, landscaping, or utilities. Size, construction, access, and the condition of the surrounding surface drive the plan.
        </p>
        <p>
          Do not start cutting until electrical service is safely disconnected and the work area is understood. For a professional scope, send photos from all four sides, the equipment area, the nearest gate, and the path to the street. Learn more about <Link href="/services/hot-tub-removal">Kansas City hot-tub removal</Link>.
        </p>
      </Section>

      <Section id="local-rules" number="05" title="Kansas City collection rules depend on the address">
        <p>
          Kansas City, Missouri currently describes an appointment-based bulky collection program for eligible single-family homes and apartments with six units or fewer. Its official guidance lists furniture, mattresses, and several appliances among accepted items, with scheduling, item, weight, placement, and preparation rules. Check the <a href="https://www.kcmo.gov/city-hall/trash/bulky" target="_blank" rel="noreferrer">KCMO bulky item pickup page</a> immediately before setting anything out.
        </p>
        <p>
          Kansas City, Kansas, Overland Park, Olathe, Shawnee, Lenexa, Lee&apos;s Summit, Independence, Blue Springs, and other metro jurisdictions operate under their own hauler contracts and collection programs. Never assume the rule at a nearby address is the rule at yours. Use your city or county&apos;s official site, confirm the property is eligible, and verify accepted items and set-out timing.
        </p>
      </Section>

      <Section id="pickup" number="06" title="Prepare for a smooth full-service pickup">
        <Checklist>
          <Check>Send a complete item list and photos; do not hide add-on pieces.</Check>
          <Check>Tell the crew where every item is located.</Check>
          <Check>Empty appliances and furniture compartments.</Check>
          <Check>Disclose stains, sharp edges, broken glass, pests, or structural damage.</Check>
          <Check>Keep chemicals, fuels, paint, and unknown liquids separate.</Check>
          <Check>Reserve legal loading access when parking is limited.</Check>
        </Checklist>
        <p>
          For multiple items or a larger property project, start with <Link href="/services/junk-removal">Kansas City junk removal</Link> or the <Link href="/services/bulk-trash-pickup">bulk trash pickup alternative</Link> page.
        </p>
      </Section>
    </>
  );
}

function DemolitionCost() {
  return (
    <>
      <Section id="cost-drivers" number="01" title="The scope matters more than a generic price per square foot">
        <p>
          Two demolition projects with the same floor area can require completely different crews, equipment, protection, and disposal. A detached shed with open access is not comparable to selective interior demolition inside an occupied home. A concrete pad is not comparable to a wood deck.
        </p>
        <Checklist>
          <Check><strong>Structure and material:</strong> wood framing, masonry, concrete, finishes, roofing, fixtures, and mixed assemblies behave differently.</Check>
          <Check><strong>Selective or structural:</strong> removing finishes while preserving framing and utilities demands more controlled work.</Check>
          <Check><strong>Access:</strong> gate width, slopes, adjacent buildings, overhead lines, parking, and container placement affect equipment choices.</Check>
          <Check><strong>Utilities:</strong> confirmed status of electrical, gas, water, sewer, and communications is essential.</Check>
          <Check><strong>Debris:</strong> volume, density, sorting, containers, trucking, disposal, and final cleanup belong in the scope.</Check>
        </Checklist>
      </Section>

      <Section id="project-types" number="02" title="Common Kansas City demolition projects">
        <p>
          <Link href="/services/interior-demolition">Interior demolition</Link> often involves kitchens, bathrooms, flooring, ceilings, partitions, or commercial buildouts while protecting the shell or adjacent finishes. The careful separation of “remove” and “remain” is central to the estimate.
        </p>
        <p>
          Exterior projects include <Link href="/services/garage-demolition">garage demolition</Link>, <Link href="/services/shed-demolition">shed demolition</Link>, <Link href="/services/deck-removal">deck removal</Link>, and <Link href="/services/concrete-removal">concrete removal</Link>. Each needs dimensions, material details, access, attachment points, utility information, and a decision about slabs, footings, piers, or foundations.
        </p>
        <p>
          Whole-structure and <Link href="/services/commercial">commercial demolition</Link> can add engineering, environmental review, pedestrian or traffic control, neighbor protection, hauling coordination, and more extensive permitting. Ask for a scope that makes those responsibilities visible.
        </p>
      </Section>

      <Section id="permits" number="03" title="Permits and utility coordination are address-specific">
        <p>
          Demolition rules vary across Kansas City, Missouri, Kansas City, Kansas, and surrounding municipalities. The responsible party should confirm the current requirements for the exact parcel and work type before demolition begins.
        </p>
        <p>
          Kansas City, Missouri&apos;s <a href="https://www.kcmo.gov/city-hall/departments/city-planning-development/permits-division/" target="_blank" rel="noreferrer">Permits Division</a> directs applicants to its building-code resources and Compass KC for permit activity. The city also identifies separate contacts that may be involved in demolition, including permitting, contractor licensing, air quality, historic preservation, utilities, and public-works permits. That is a strong reason to verify the full process rather than assuming one application covers every requirement.
        </p>
        <Note title="Do not guess about hidden hazards">
          Age alone does not prove that a building contains lead or asbestos, but older materials can require testing, controls, or specialized handling before disturbance. Treat unknown materials as a scope question, not an afterthought.
        </Note>
      </Section>

      <Section id="bid" number="04" title="What a complete demolition bid should tell you">
        <Checklist>
          <Check>The exact structures, rooms, materials, fixtures, or surfaces included.</Check>
          <Check>Items that must remain and how they will be protected.</Check>
          <Check>Who handles permits, utility coordination, testing, and required notices.</Check>
          <Check>Equipment, containers, loading areas, and site access assumptions.</Check>
          <Check>Whether debris hauling, disposal fees, and final cleanup are included.</Check>
          <Check>The condition of the site at handoff, including slabs, footings, openings, and grading.</Check>
          <Check>Known exclusions and how changes or concealed conditions are priced.</Check>
        </Checklist>
        <p>
          A lower number is not necessarily a lower total if hauling, permits, protection, or cleanup appear later as separate costs. Compare bids line by line against the same requested finish condition.
        </p>
      </Section>

      <Section id="estimate" number="05" title="Prepare the property information before the walkthrough">
        <p>
          Start with the property address, approximate dimensions, photos from multiple angles, known construction types, occupied areas, access constraints, and your end goal. Explain whether the next phase is a remodel, sale, rebuild, landscaping project, or simple site clearing.
        </p>
        <p>
          Note the status of gas, electrical, water, and other utilities without making assumptions. Identify known environmental reports, historic restrictions, easements, shared walls, nearby structures, and deadlines. For interior work, mark the boundaries on photos or drawings.
        </p>
        <p>
          Kidd&apos;s Clean Up combines demolition, loading, and debris haul-away in one practical scope. Explore <Link href="/services/demolition">Kansas City demolition services</Link> or a focused city page for <Link href="/demolition/overland-park">Overland Park</Link>, <Link href="/demolition/olathe">Olathe</Link>, <Link href="/demolition/shawnee-ks">Shawnee</Link>, or <Link href="/demolition/lenexa">Lenexa</Link>.
        </p>
      </Section>
    </>
  );
}

function GarageCleanout() {
  return (
    <>
      <Section id="checklist" number="01" title="Make the decisions before the lifting begins">
        <p>
          A garage cleanout becomes slow and expensive when every object needs a new decision while the crew is waiting. Set up clear zones for keep, donate or reuse, recycle, remove, and special handling. Use visible labels and make sure every decision-maker agrees before pickup day.
        </p>
        <Checklist>
          <Check>Photograph the garage before moving anything so the original scope is recorded.</Check>
          <Check>Pull out documents, keys, photos, tools, keepsakes, and valuables first.</Check>
          <Check>Group small loose items in sturdy containers when safe to do so.</Check>
          <Check>Keep removal items together and physically separate from belongings that stay.</Check>
          <Check>Create a clear walking path without building unstable stacks.</Check>
        </Checklist>
      </Section>

      <Section id="scope" number="02" title="What changes garage cleanout cost and timing">
        <p>
          Bay count is only a rough starting point. A one-car garage packed to the ceiling may hold more material than an orderly two-car garage. The estimate should account for actual volume, item weight, sorting status, disassembly, carrying distance, driveway access, and disposal needs.
        </p>
        <p>
          Dense items deserve special attention. Boxes of books, tile, auto parts, exercise weights, wet material, and renovation debris can add substantial weight without filling much visual space. Large cabinets, workbenches, shelving, and equipment may need disassembly or special lifting.
        </p>
        <Note title="A useful photo set">
          Stand near the center and photograph each wall. Then add close-ups of heavy items, floor piles, attic or loft areas, and the full route from the garage to the street.
        </Note>
      </Section>

      <Section id="diy" number="03" title="DIY hauling or full-service cleanout?">
        <p>
          DIY can be a good fit when the volume is manageable, you have help, a suitable vehicle, safe tie-downs, and confirmed destinations for every material. Include dump or recycling fees, fuel, protective supplies, vehicle cleanup, and repeat trips when comparing the true cost.
        </p>
        <p>
          Full-service <Link href="/services/garage-cleanouts">garage cleanout help</Link> is useful when the space is densely packed, large pieces need lifting, the property has a deadline, or the job is part of a move, estate transition, rental turnover, or renovation. Confirm whether sorting, inside pickup, loading, hauling, and basic cleanup are part of the quote.
        </p>
        <p>
          If the garage itself is coming down, that is a different scope. Visit the <Link href="/services/garage-demolition">garage demolition page</Link> for structure, utility, access, slab, and debris questions.
        </p>
      </Section>

      <Section id="special-items" number="04" title="Separate items that need special handling">
        <p>
          Paint, solvents, pesticides, fuels, propane cylinders, batteries, fluorescent lamps, tires, motor oil, and unknown liquids should not be buried in general junk. Keep containers closed and upright, preserve original labels, and never mix liquids together.
        </p>
        <p>
          Refrigerators, freezers, and air conditioners may contain refrigerant. Mowers and other engines may contain fuel or oil. Sharp metal, broken glass, needles, pest-contaminated material, and unstable compressed-gas cylinders need to be disclosed before anyone handles them.
        </p>
        <p>
          Your city or county can direct residents to current household hazardous-waste and recycling programs. Verify eligibility and appointment requirements on the official local government site rather than leaving questionable material at the curb.
        </p>
      </Section>

      <Section id="quote" number="05" title="The garage cleanout photo-quote checklist">
        <Checklist>
          <Check>Property address and the deadline, if there is one.</Check>
          <Check>One photo of every wall, plus attic, loft, driveway, and exterior piles.</Check>
          <Check>Counts for appliances, tires, mattresses, large cabinets, and equipment.</Check>
          <Check>Notes on stairs, gates, parking, carrying distance, and loading access.</Check>
          <Check>A separate list of chemicals, liquids, batteries, fuel, or unknown containers.</Check>
          <Check>The desired finish: removal only, basic sweep, or another clearly stated handoff.</Check>
        </Checklist>
        <p>
          For a larger project, Kidd&apos;s Clean Up also handles <Link href="/services/house-cleanouts">house cleanouts</Link>, <Link href="/services/estate-cleanouts">estate cleanouts</Link>, <Link href="/services/rental-property-cleanouts">rental property cleanouts</Link>, and general <Link href="/services/junk-removal">junk removal throughout the Kansas City metro</Link>.
        </p>
      </Section>
    </>
  );
}

function FloodedBasement() {
  return (
    <>
      <Section id="safety" number="01" title="Do not enter until the space is safe">
        <p>
          Water and electricity are a dangerous combination. Standing water can reach outlets, appliances, extension cords, panels, and damaged wiring that you cannot see. If electricity has not been safely shut off or you are uncertain, stay out and contact the utility, emergency services, or a qualified electrician as appropriate.
        </p>
        <p>
          Also watch for sagging ceilings, cracked walls or foundations, shifting stairs, gas odors, sewage, chemical containers, broken glass, and slippery surfaces. The EPA&apos;s <a href="https://www.epa.gov/flooded-homes/coming-home" target="_blank" rel="noreferrer">flooded-home reentry guidance</a> warns that wet outlets can create shock hazards and recommends protective clothing once entry is safe.
        </p>
        <Note title="Leave immediately if conditions feel unsafe">
          Do not rely on smell or appearance to judge electrical, gas, contamination, or structural hazards. Call the appropriate emergency or utility service when there is immediate danger.
        </Note>
      </Section>

      <Section id="source" number="02" title="The source determines the response">
        <p>
          A broken clean-water supply line, water entering through a foundation after heavy rain, a failed sump pump, an appliance leak, and a sewer backup are not equivalent. Water can become more contaminated as it contacts soil, drains, chemicals, building materials, or stored contents.
        </p>
        <p>
          If it can be done safely, stop a supply-line source at the proper shutoff or contact the responsible utility or plumber. Do not wade through water to reach equipment. For storm or drainage problems, extraction may need to wait until active entry slows enough for removal and drying to make progress.
        </p>
      </Section>

      <Section id="document" number="03" title="Document the damage before cleanup changes the scene">
        <p>
          From a safe location, take wide photos and video of the affected rooms, the apparent source, water line, damaged contents, flooring, walls, and mechanical equipment. Record when the water was first noticed and any steps already taken.
        </p>
        <p>
          Contact the property owner, landlord, property manager, and insurer as applicable. Ask what documentation they require and whether emergency work can begin immediately. Do not delay necessary life-safety action just to gather better pictures.
        </p>
        <Checklist>
          <Check>Address, contact information, and access instructions.</Check>
          <Check>Likely source and whether the water may contain sewage or chemicals.</Check>
          <Check>Approximate depth, square footage, and rooms affected.</Check>
          <Check>When the loss began and whether water is still entering.</Check>
          <Check>Electrical status, HVAC involvement, and any structural concerns.</Check>
        </Checklist>
      </Section>

      <Section id="drying" number="04" title="Extraction is only the first step">
        <p>
          Removing visible water does not mean the structure is dry. Water can remain in carpet pad, wall cavities, insulation, subfloors, sill plates, cabinets, and stored contents. A mitigation plan may include extraction, controlled material removal, air movement, dehumidification, moisture measurements, and repeated monitoring.
        </p>
        <p>
          EPA guidance says wet materials should be dried as quickly as possible, generally within 24 to 48 hours when conditions allow, because prolonged moisture supports mold growth. Its <a href="https://www.epa.gov/emergencies-iaq/flood-cleanup-protect-indoor-air-and-your-health" target="_blank" rel="noreferrer">flood cleanup guidance</a> also notes that flood water may contain bacteria, chemicals, or other hazards and that materials that cannot be cleaned and dried may need to be discarded.
        </p>
        <p>
          Do not automatically turn on the HVAC system or place fans in contaminated areas. Air movement can spread contaminants. The water source, electrical safety, affected materials, and clean/dirty work zones should guide equipment decisions.
        </p>
      </Section>

      <Section id="materials" number="05" title="Some materials can dry; others may need removal">
        <p>
          Hard, nonporous surfaces may be cleanable depending on the water source and condition. Porous contents and assemblies—such as carpet pad, insulation, paper-faced drywall, ceiling tile, upholstered furniture, and composite wood—can hold water and contamination where surface drying does not reach.
        </p>
        <p>
          The decision to clean, dry, or remove material should account for contamination, how long it remained wet, whether it can be accessed, and whether it can be verified dry. Older buildings may also contain lead-based paint or asbestos-containing materials that need appropriate evaluation before disturbance.
        </p>
        <p>
          Kidd&apos;s Clean Up can coordinate <Link href="/services/water-extraction">water extraction</Link>, <Link href="/services/basement-water-cleanup">basement water cleanup</Link>, damaged-material removal, and <Link href="/services/basement-cleanouts">basement contents cleanout</Link> within an agreed scope.
        </p>
      </Section>

      <Section id="call" number="06" title="What to report when you call for help">
        <Checklist>
          <Check>Give the address and the safest way to reach the property.</Check>
          <Check>Describe the likely source and whether water is still entering.</Check>
          <Check>Say whether sewage, fuel, chemicals, or other contaminants may be present.</Check>
          <Check>Report the approximate depth and affected rooms.</Check>
          <Check>State whether electricity is off and who made that determination.</Check>
          <Check>Share photos only when they can be taken safely.</Check>
        </Checklist>
        <p>
          Visit <Link href="/services/water-mitigation">Kansas City water mitigation</Link> for service details. For a burst supply line, see <Link href="/services/burst-pipe-cleanup">burst-pipe cleanup</Link>; for a broader event, see <Link href="/services/flood-cleanup">flood cleanup</Link> and <Link href="/services/water-damage-cleanup">water-damage cleanup</Link>.
        </p>
      </Section>
    </>
  );
}

export default function BlogArticleBody({ slug }: { slug: string }) {
  switch (slug) {
    case "junk-removal-cost-kansas-city":
      return <JunkRemovalCost />;
    case "bulky-item-disposal-kansas-city":
      return <BulkyItemDisposal />;
    case "demolition-cost-kansas-city":
      return <DemolitionCost />;
    case "garage-cleanout-cost-kansas-city":
      return <GarageCleanout />;
    case "flooded-basement-kansas-city":
      return <FloodedBasement />;
    default:
      return null;
  }
}

