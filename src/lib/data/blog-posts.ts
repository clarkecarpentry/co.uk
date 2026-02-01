/**
 * Blog posts data for Clarke Carpentry website.
 *
 * These posts are designed to demonstrate expertise, improve SEO,
 * and build trust with potential clients.
 */

export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  categories: string[];
  relatedServices: string[]; // service slugs
  content: PortableTextBlock[];
}

export interface PortableTextBlock {
  _type: "block";
  _key: string;
  style: "normal" | "h2" | "h3" | "h4" | "blockquote";
  children: PortableTextSpan[];
  markDefs: PortableTextMarkDef[];
  listItem?: "bullet" | "number";
  level?: number;
}

export interface PortableTextSpan {
  _type: "span";
  _key: string;
  marks: string[];
  text: string;
}

export interface PortableTextMarkDef {
  _type: "link";
  _key: string;
  href: string;
}

// Helper to create a unique key
let keyCounter = 0;
function key(): string {
  return `k${++keyCounter}`;
}

// Helper to create a text block
function block(
  style: PortableTextBlock["style"],
  text: string,
  marks: string[] = []
): PortableTextBlock {
  return {
    _type: "block",
    _key: key(),
    style,
    children: [{ _type: "span", _key: key(), marks, text }],
    markDefs: [],
  };
}

// Helper to create a list item
function listItem(text: string, listType: "bullet" | "number" = "bullet"): PortableTextBlock {
  return {
    _type: "block",
    _key: key(),
    style: "normal",
    listItem: listType,
    level: 1,
    children: [{ _type: "span", _key: key(), marks: [], text }],
    markDefs: [],
  };
}

export const blogPosts: BlogPost[] = [
  // ============================================================================
  // Post 1: First Fix vs Second Fix Carpentry
  // ============================================================================
  {
    title: "First Fix vs Second Fix Carpentry: What's Involved",
    slug: "first-fix-vs-second-fix-carpentry",
    excerpt:
      "Understanding the difference between first fix and second fix carpentry is essential for anyone planning a construction project. We explain what each stage involves and why getting both right matters.",
    author: "Mike Clarke",
    publishedAt: "2026-01-22T09:00:00Z",
    categories: ["Technical"],
    relatedServices: ["first-fix", "second-fix"],
    content: [
      block("normal", "If you've been involved in a construction project, you'll have heard the terms 'first fix' and 'second fix' thrown around. But what do they actually mean? And why does it matter whether your carpentry contractor understands the difference?"),
      block("normal", "At Clarke Carpentry, we handle both first and second fix carpentry across Bristol, Bath and the South West. After 15 years in the trade, we've seen what happens when either stage is rushed or poorly executed. Here's what you need to know about each phase."),

      block("h2", "What is First Fix Carpentry?"),
      block("normal", "First fix is the structural stage of carpentry - the work that happens before plastering, before the building is watertight, and before any finishing can begin. It's the skeleton of the build, and everything that follows depends on it being done correctly."),
      block("normal", "First fix work typically includes:"),
      listItem("Floor joists and timber flooring systems"),
      listItem("Wooden stud partitions and structural stud work"),
      listItem("Roof construction - whether traditional cut roofs or truss installation"),
      listItem("Staircase installation (the structural element, not the finishing)"),
      listItem("Timber frame erection"),
      listItem("Boxing and structural supports"),
      listItem("Door linings and frames"),
      block("normal", "This work needs to be precise. Floor joists must be level. Stud partitions must be plumb. Roof structures must be cut accurately and assembled to handle the loads they'll carry for decades. There's no hiding mistakes at this stage - they'll show up in every subsequent trade's work."),

      block("h2", "What is Second Fix Carpentry?"),
      block("normal", "Second fix is the finishing stage - the work that happens after plastering, decoration, and when the building is approaching completion. This is where a property starts to feel like a finished space rather than a construction site."),
      block("normal", "Second fix work includes:"),
      listItem("Skirting boards and architrave"),
      listItem("Internal and external door hanging"),
      listItem("Handrails, spindles and balustrades"),
      listItem("Window boards and surrounds"),
      listItem("Built-in storage and shelving"),
      listItem("Kitchen fitting"),
      listItem("MDF features and detailing"),
      block("normal", "Second fix requires a different mindset to first fix. While first fix is about structural integrity, second fix is about precision and finish. Every joint needs to be tight. Every door needs to close properly. Every piece of skirting needs to sit flush against the wall and floor. This is the work that clients will see and touch every day."),

      block("h2", "Why Both Stages Matter"),
      block("normal", "We've seen projects where corners were cut during first fix. The stud partitions weren't quite square. The floor joists weren't perfectly level. These mistakes don't disappear - they compound. Try fitting a perfectly square door into a frame that's 5mm out of plumb. Try laying flooring on joists that undulate. Every trade that follows pays for earlier mistakes."),
      block("normal", "Similarly, we've seen buildings with solid first fix work let down by poor second fix. Skirting with visible gaps. Doors that swing open on their own. Architrave with open mitres. The finishing is what people notice, and poor second fix undermines all the good work that came before."),

      block("h2", "The Clarke Carpentry Approach"),
      block("normal", "When we take on a project, we often handle both first and second fix. There's an advantage to this - we're accountable for the full carpentry package. We can't blame first fix problems on someone else, and we have every incentive to get the structural work right because we'll be the ones fitting the finishes."),
      block("normal", "All our carpenters are CSCS certified and understand both phases of the work. Whether we're installing floor joists on a new build development or fitting the final piece of skirting in a domestic extension, the same attention to detail applies."),

      block("h2", "Planning Your Project"),
      block("normal", "If you're a main contractor putting together a build programme, or a homeowner planning an extension, understanding first and second fix helps you plan realistically. First fix needs to happen before the plasterers. Second fix needs to happen after decoration is largely complete. Getting this sequencing wrong causes delays that ripple through the whole project."),
      block("normal", "We work with clients to coordinate both stages with other trades. Our experience across commercial developments and domestic projects means we understand how carpentry fits into the broader build programme."),
      block("normal", "Call us on 01225 350376 to discuss your carpentry requirements. Whether you need first fix, second fix, or a complete carpentry package, we're here to help."),
    ],
  },

  // ============================================================================
  // Post 2: Why We Still Cut Traditional Roofs
  // ============================================================================
  {
    title: "Why We Still Cut Traditional Roofs",
    slug: "why-we-still-cut-traditional-roofs",
    excerpt:
      "Pre-fabricated roof trusses dominate modern construction, but traditional cut roofs still have their place. We explain when cut roofs are the right choice and why this increasingly rare skill matters.",
    author: "Mike Clarke",
    publishedAt: "2026-01-20T09:00:00Z",
    categories: ["Technical", "Industry"],
    relatedServices: ["traditional-cut-roofs", "extensions", "renovations"],
    content: [
      block("normal", "Walk onto most modern building sites and you'll see roof trusses arriving on a lorry, pre-fabricated in a factory and ready to lift into place. It's efficient. It's cost-effective. For many projects, it's the right choice."),
      block("normal", "But there are situations where pre-fab trusses simply don't work. That's when you need a carpenter who can cut a traditional roof - measuring, marking and assembling each timber on site. It's a skill that's becoming increasingly rare, and at Clarke Carpentry, it's one we're proud to maintain."),

      block("h2", "What is a Traditional Cut Roof?"),
      block("normal", "A cut roof is constructed from individual timbers - rafters, purlins, ridge boards, hip rafters, valley rafters - that are measured, cut and assembled on site. Before factory-made trusses became standard, this is how every roof was built."),
      block("normal", "The carpenter calculates the angles based on the roof pitch and span, marks out each timber, and cuts the birdsmouth seats, plumb cuts and level cuts needed to assemble the structure. It requires an understanding of geometry, practical experience, and the ability to work accurately under varying conditions."),

      block("h2", "When Cut Roofs Are the Right Choice"),
      block("normal", "We don't advocate cut roofs for every project. When trusses work, they're often the better option. But several situations call for traditional construction:"),

      block("h3", "Complex Roof Geometry"),
      block("normal", "When a roof has multiple hips, valleys, dormers or unusual shapes, factory trusses become impractical. Each intersection needs to be worked out and cut on site. Extensions that tie into existing roofs often fall into this category - the new structure needs to match the old, not the other way around."),

      block("h3", "Restricted Access"),
      block("normal", "Trusses arrive on large vehicles and often need a crane to lift them into position. On tight urban sites, terraced properties, or locations with poor access, getting trusses in place can be impossible or prohibitively expensive. Individual timbers can be carried through a house and assembled in situ."),

      block("h3", "Period Properties"),
      block("normal", "Listed buildings and conservation areas often require traditional construction methods. A Victorian extension shouldn't have a visible steel plate gang-nailed truss in the loft. Cut roofs allow you to match the construction style of the original building."),

      block("h3", "Loft Conversions"),
      block("normal", "When you're converting a loft space, you typically want to use as much of the volume as possible. Cut roof structures can be designed to maximise headroom and usable floor area in ways that standard trusses can't."),

      block("h2", "The Skill Behind Cut Roofs"),
      block("normal", "Cutting a traditional roof isn't something you learn from a book. It takes years of practice to develop the speed and accuracy needed to do it commercially. You need to understand:"),
      listItem("How to calculate rafter lengths and angles for any given pitch and span"),
      listItem("The relationships between common rafters, hip rafters and valley rafters"),
      listItem("How to set out and cut compound angles where roof planes intersect"),
      listItem("How to build purlins and struts to support the structure"),
      listItem("How to tie a new roof into an existing structure"),
      block("normal", "Many younger carpenters have never cut a roof - they've only ever installed trusses. This is understandable given how the industry has evolved, but it means the skill is becoming harder to find."),

      block("h2", "Our Experience"),
      block("normal", "At Clarke Carpentry, we've been cutting roofs for 15 years. We've worked on new builds where access made trusses impractical, extensions where the roof needed to tie into existing structures, and renovations on period properties where traditional construction was required."),
      block("normal", "We've handled hip roofs, valley roofs, and complex dormers. We know how to set out the geometry on site and cut the timbers accurately. When the job calls for a cut roof, we have the skills to deliver it."),

      block("h2", "Is a Cut Roof Right for Your Project?"),
      block("normal", "If you're planning an extension, renovation, or new build with a complex or restricted site, a cut roof might be the answer. We're happy to discuss your project and advise whether traditional construction makes sense."),
      block("normal", "Call us on 01225 350376 to talk through your requirements. We cover Bristol, Bath and the South West."),
    ],
  },

  // ============================================================================
  // Post 3: What Main Contractors Should Expect
  // ============================================================================
  {
    title: "What Main Contractors Should Expect from Their Carpentry Subcontractor",
    slug: "what-main-contractors-should-expect",
    excerpt:
      "Choosing the right carpentry subcontractor can make or break your build programme. Based on 15 years working with main contractors across the South West, here's what you should expect.",
    author: "Mike Clarke",
    publishedAt: "2026-01-18T09:00:00Z",
    categories: ["Industry"],
    relatedServices: ["new-build", "first-fix", "second-fix", "project-management"],
    content: [
      block("normal", "When you're tendering for a project, the quality of your subcontractors directly affects your reputation. A reliable carpentry sub makes your life easier. An unreliable one creates problems that consume management time and eat into your margins."),
      block("normal", "After 15 years working with main contractors across Bristol, Bath and the South West, we understand what you're looking for. Here's what you should expect from your carpentry subcontractor - and what we aim to deliver on every project."),

      block("h2", "Programme Compliance"),
      block("normal", "The most common complaint about subcontractors is that they don't show up when they're supposed to. Materials aren't ready. Another job overran. The excuses vary, but the result is the same - your programme slips."),
      block("normal", "We commit to the dates we agree. If we say we'll be on site Monday, we're there Monday. If we encounter a genuine problem, we communicate it immediately - not when you're chasing us wondering where we are."),
      block("normal", "Our relationship with developers like Juniper Homes spans multiple projects precisely because we understand that programme reliability isn't optional. On multi-plot developments, a delay in one property affects handover dates across the whole site."),

      block("h2", "Quality That Stands Up to Inspection"),
      block("normal", "Every piece of carpentry will be inspected - by building control, by your site manager, and ultimately by the end client. Poor quality work gets flagged, requires rework, and damages relationships."),
      block("normal", "We aim for quality that passes without comment. Stud partitions that are plumb. Skirting that sits tight. Doors that close properly. The details that seem minor are the ones that get noticed when they're wrong."),
      block("normal", "All our carpenters hold valid CSCS cards. Our supervisors are SSSTS or SMSTS qualified. We have the training and experience to deliver work that meets specifications."),

      block("h2", "Site Safety and Compliance"),
      block("normal", "We won't compromise on health and safety. All our team are CSCS certified, and our supervisors hold SSSTS or SMSTS qualifications. We're PASMA trained for mobile access equipment."),
      block("normal", "We carry the appropriate insurance, provide up-to-date documentation when requested, and follow site rules without pushback. When you're managing a complex site, the last thing you need is a subcontractor who treats H&S as optional."),

      block("h2", "Clear Communication"),
      block("normal", "Construction projects change. Specifications evolve. Problems emerge. What matters is how these are handled."),
      block("normal", "We flag issues early rather than hoping they'll resolve themselves. If we spot a discrepancy between drawings and site conditions, we raise it before it becomes a problem. If we need clarification on a specification, we ask rather than assume."),
      block("normal", "We're not difficult to get hold of. When you need an answer, you'll get one. When you need someone on site to look at a snag, we'll be there."),

      block("h2", "Pricing That Sticks"),
      block("normal", "We quote based on what we see in the documentation. If we later discover additional work that wasn't shown, we'll discuss it - but we don't build low to win and then recover through variations."),
      block("normal", "Our pricing is realistic for the quality of work we deliver. If we're not the cheapest quote you receive, there's usually a reason. We'd rather lose a job than take it on at a price that forces us to cut corners."),

      block("h2", "The Relationship We're Looking For"),
      block("normal", "We work best with main contractors who value reliability over price alone. If you're looking for the cheapest possible labour, we're probably not the right fit."),
      block("normal", "But if you want a carpentry subcontractor who turns up when agreed, delivers quality work, and communicates clearly throughout the project, we'd like to hear from you."),
      block("normal", "Call us on 01225 350376 to discuss your upcoming projects. We handle first fix, second fix, and complete carpentry packages across Bristol, Bath and the South West."),
    ],
  },

  // ============================================================================
  // Post 4: Wilder House Project Spotlight
  // ============================================================================
  {
    title: "Wilder House: 41 Flats in Bristol City Centre",
    slug: "wilder-house-project-spotlight",
    excerpt:
      "A look back at our largest project to date - delivering second fix carpentry across 41 high-end residential flats in a Bristol city centre conversion for Juniper Homes.",
    author: "Mike Clarke",
    publishedAt: "2026-01-15T09:00:00Z",
    categories: ["Project Spotlight"],
    relatedServices: ["second-fix", "new-build"],
    content: [
      block("normal", "Wilder House was a turning point for Clarke Carpentry. This major conversion project in Bristol city centre involved transforming a former office block into 41 high-end residential flats, and we were awarded the complete second fix carpentry contract. It remains one of our largest projects to date, and our successful delivery led to an ongoing relationship with Juniper Homes that has now spanned multiple developments."),

      block("h2", "The Project"),
      block("normal", "The building was a substantial commercial property in central Bristol that Juniper Homes was converting to residential use. The scope included 41 individual flats plus communal areas - corridors, stairwells and entrance lobbies. Second fix carpentry was needed throughout: skirting, architrave, doors, built-in storage, and all the finishing details that turn shells into homes."),
      block("normal", "The specification was high-end. These weren't basic rental units - they were designed to sell at premium prices, and the quality of finish needed to match the asking price. Every flat would be inspected by buyers looking for reasons to negotiate, so there was no room for visible defects."),

      block("h2", "The Challenges"),
      block("normal", "Converting an office block into residential accommodation presents unique challenges. The original structure wasn't designed for 41 separate units, each with their own layout requirements. Structural floor levels had been raised to accommodate the additional residential storey, which affected dimensions throughout."),
      block("normal", "Working in a city centre location added logistical complications. Material deliveries had to be coordinated carefully. Storage space was limited. Access for larger items required planning."),
      block("normal", "The programme was demanding. With 41 flats to complete, we needed to maintain consistent quality while hitting the handover dates that Juniper Homes had committed to. Their reputation was on the line with each buyer."),

      block("h2", "Our Approach"),
      block("normal", "We assembled a team of experienced carpenters specifically for this project. Everyone understood the specification and the quality standards expected. We established consistent working methods so that flat 41 would match flat 1 - buyers comparing units shouldn't see variation in finish quality."),
      block("normal", "Material ordering was planned carefully to ensure we never stopped work waiting for supplies. We coordinated closely with other trades on site, particularly the decorators who needed access between our work phases."),
      block("normal", "Quality control was ongoing, not a final check. Every door was tested before we moved on. Every piece of skirting was inspected as it was fitted. Problems were caught and fixed immediately, not left for a snagging list at the end."),

      block("h2", "The Outcome"),
      block("normal", "We completed the project on time and on budget. The finish quality met Juniper Homes' exacting standards, and the relationship we built during the project led to further work. Since Wilder House, we've delivered carpentry packages for Juniper Homes at Feltmakers Lane in Rangeworthy and Weavers Lane in Bristol."),
      block("normal", "For us, Wilder House demonstrated that we could handle larger commercial projects without compromising on quality. It established our capability with multi-unit residential work and opened doors to similar projects with other developers."),

      block("h2", "Work With Us"),
      block("normal", "If you're planning a multi-unit residential development or a commercial conversion in Bristol, Bath or the South West, we'd welcome the opportunity to discuss your carpentry requirements."),
      block("normal", "Call us on 01225 350376 or email info@clarkecarpentry.co.uk."),
    ],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
