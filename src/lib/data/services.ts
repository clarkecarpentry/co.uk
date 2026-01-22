export interface Service {
  name: string;
  slug: string;
  description: string;
  features: string[];
}

export const services: Service[] = [
  {
    name: "Project Management",
    slug: "project-management",
    description:
      "We run construction projects from concept to completion, coordinating all trades on site and managing timelines to keep your build on track. With 15 years of experience overseeing both commercial developments and domestic builds, we understand what it takes to deliver projects on time and on budget.",
    features: [
      "Full project coordination from start to finish",
      "Timeline and schedule management",
      "Quality control and site inspections",
      "Budget oversight and cost management",
      "Multi-trade contractor coordination",
      "Client communication and progress reporting",
    ],
  },
  {
    name: "First Fix Carpentry",
    slug: "first-fix",
    description:
      "First fix carpentry is the structural backbone of any build - the work that happens before plastering and finishing. Our CSCS-certified carpenters handle everything from floor joists and stud partitions to roof structures, ensuring a solid foundation for the trades that follow.",
    features: [
      "Floor joists and timber flooring systems",
      "Wooden stud partitions and boxing",
      "Structural stud work",
      "Traditional cut roof construction",
      "Truss roof installation",
      "Timber cladding",
      "Staircase installation",
      "Timber frame erection",
    ],
  },
  {
    name: "Second Fix Carpentry",
    slug: "second-fix",
    description:
      "Second fix is where a building starts to feel like a finished space. We fit skirting, architrave, doors, and all the internal joinery that gives a property its character. Our attention to detail at this stage ensures a quality finish that stands up to close inspection.",
    features: [
      "Skirting boards and architrave",
      "Internal and external door hanging",
      "Handrails, spindles and balustrades",
      "Window boards and surrounds",
      "Built-in storage and shelving",
      "MDF features and detailing",
      "Kitchen fitting",
    ],
  },
  {
    name: "Dry Lining",
    slug: "dry-lining",
    description:
      "Dry lining creates the internal walls and ceilings that define a space. We work with both metal and timber framing systems, including acoustic and fire-rated partitions for commercial projects where building regulations demand specific performance standards.",
    features: [
      "Metal and timber stud framing",
      "Acoustic partition systems",
      "Fire-rated partition installation",
      "Boxing and bulkhead construction",
      "Dot and dab wall lining",
      "Suspended ceiling systems",
      "Insulation installation",
    ],
  },
  {
    name: "Extensions",
    slug: "extensions",
    description:
      "From single-storey rear extensions to full wrap-around builds, we deliver the complete carpentry package for extension projects. We work closely with main contractors and homeowners to ensure the new space integrates with the existing property.",
    features: [
      "Single storey extensions",
      "Double storey extensions",
      "Side return extensions",
      "Wrap-around extensions",
      "Garage conversions",
      "Structural carpentry for openings",
      "Roof construction for extensions",
    ],
  },
  {
    name: "Traditional Cut Roofs",
    slug: "traditional-cut-roofs",
    description:
      "Traditional cut roofs require genuine craftsmanship - measuring, cutting and assembling each timber on site rather than relying on pre-fabricated trusses. This skill is increasingly rare, but essential for period properties, complex roof shapes, and projects where truss delivery isn't practical.",
    features: [
      "Cut and pitch roof construction",
      "Valley roof intersections",
      "Hip roof construction",
      "Dormer construction and installation",
      "Roof repairs and maintenance",
      "Ridge and rafter work",
      "Complex roof geometry",
    ],
  },
  {
    name: "New Build",
    slug: "new-build",
    description:
      "We provide complete carpentry packages for new build developments, from single dwellings to multi-unit residential schemes. Our experience with developers like Juniper Homes means we understand the pace and standards required on larger sites.",
    features: [
      "Complete first and second fix packages",
      "Timber frame installation",
      "Roof construction (truss and cut)",
      "Internal fit-out",
      "Multi-plot coordination",
      "Developer specification compliance",
      "Site safety and H&S compliance",
    ],
  },
  {
    name: "Renovations",
    slug: "renovations",
    description:
      "Renovation work demands adaptability - no two properties present the same challenges. We handle everything from period property restoration to full internal reconfigurations, including work on Grade 2 listed buildings where heritage requirements add complexity.",
    features: [
      "Full property renovations",
      "Period property restoration",
      "Listed building carpentry",
      "Structural alterations and openings",
      "Internal layout reconfigurations",
      "Repair and replacement of existing timber",
      "Sympathetic restoration work",
    ],
  },
  {
    name: "Bespoke Joinery",
    slug: "bespoke-joinery",
    description:
      "When standard solutions don't fit, we create custom joinery pieces designed for the specific space. From built-in wardrobes to feature walls and bespoke shelving, we work to your exact requirements.",
    features: [
      "Custom-built furniture",
      "Built-in wardrobes and storage",
      "Bespoke shelving units",
      "Feature walls and panelling",
      "Custom mirrors and frames",
      "Window seats and alcove units",
      "Fitted home office solutions",
    ],
  },
  {
    name: "Kitchen Fitting",
    slug: "kitchen-fitting",
    description:
      "Kitchen installation requires precision - every unit must be level, every door aligned, every worktop joint tight. We fit kitchens for both domestic clients and commercial properties, handling everything from flat-pack assembly to high-end bespoke units.",
    features: [
      "Full kitchen installation",
      "Base and wall unit fitting",
      "Worktop templating and installation",
      "Appliance housing and fitting",
      "Kitchen refurbishment and upgrades",
      "Breakfast bars and islands",
      "Pantry and storage solutions",
    ],
  },
  {
    name: "Timber Frame Construction",
    slug: "timber-frame-construction",
    description:
      "Timber frame construction offers speed, sustainability and thermal efficiency. We erect timber frame structures and SIPs panels, working with pre-fabricated systems that allow the building envelope to be completed quickly and accurately.",
    features: [
      "Timber frame erection",
      "SIPs panel installation",
      "Structural timber work",
      "Pre-fabricated system assembly",
      "Breather membrane installation",
      "Energy-efficient construction methods",
      "Airtightness detailing",
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
