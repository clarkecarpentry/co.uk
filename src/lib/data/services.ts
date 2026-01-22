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
      "Clarke Carpentry Contractors Ltd offers comprehensive project management services, overseeing all aspects of your construction project from start to finish.",
    features: [
      "Full project coordination",
      "Timeline management",
      "Quality control",
      "Budget oversight",
      "Contractor coordination",
    ],
  },
  {
    name: "First Fix Carpentry",
    slug: "first-fix",
    description:
      "Clarke Carpentry Contractors Ltd implements all aspects of first fix carpentry, working in both commercial and domestic areas.",
    features: [
      "Joists (including wood chipboard and timber flooring)",
      "Wooden stud partitions and boxings",
      "Structural stud work",
      "Traditional cut roof",
      "Truss roof install",
      "Timber cladding",
      "Timber staircase installation",
      "Timber frame houses",
    ],
  },
  {
    name: "Second Fix Carpentry",
    slug: "second-fix",
    description:
      "Clarke Carpentry Contractors Ltd offers all aspects of second fix carpentry, working in both commercial and domestic areas.",
    features: [
      "Skirting & architrave",
      "Door hanging (internal & external)",
      "Handrails & spindles",
      "Kitchens",
      "Bespoke joinery",
      "MDF features",
      "Window boards",
    ],
  },
  {
    name: "Dry Lining",
    slug: "dry-lining",
    description:
      "Clarke Carpentry Contractors Ltd offers all aspects of dry lining, working in both commercial and domestic areas.",
    features: [
      "Metal & timber frame",
      "Acoustic partitions",
      "Fire rated partitions",
      "Boxing & bulkheads",
      "Dot & dab",
      "Suspended ceilings",
    ],
  },
  {
    name: "Extensions",
    slug: "extensions",
    description:
      "Clarke Carpentry Contractors Ltd offers all aspects of extensions, working in both commercial and domestic areas.",
    features: [
      "Single storey extensions",
      "Double storey extensions",
      "Side return extensions",
      "Wrap around extensions",
      "Garage conversions",
    ],
  },
  {
    name: "Traditional Cut Roofs",
    slug: "traditional-cut-roofs",
    description:
      "Clarke Carpentry Contractors Ltd offers all aspects of traditional cut roofs, working in both commercial and domestic areas.",
    features: [
      "Cut & pitch roofs",
      "Valley roofs",
      "Hip roofs",
      "Dormer construction",
      "Roof repairs & maintenance",
    ],
  },
  {
    name: "New Build",
    slug: "new-build",
    description:
      "Clarke Carpentry Contractors Ltd offers all aspects of new build construction, working in both commercial and domestic areas.",
    features: [
      "Complete carpentry packages",
      "First and second fix",
      "Timber frame installation",
      "Roof construction",
      "Internal fit-out",
    ],
  },
  {
    name: "Renovations",
    slug: "renovations",
    description:
      "Clarke Carpentry Contractors Ltd offers all aspects of renovations, working in both commercial and domestic areas.",
    features: [
      "Full property renovations",
      "Period property restoration",
      "Listed building work",
      "Structural alterations",
      "Internal reconfigurations",
    ],
  },
  {
    name: "Bespoke Joinery",
    slug: "bespoke-joinery",
    description:
      "Clarke Carpentry Contractors Ltd offers bespoke joinery services, creating custom pieces tailored to your specific requirements.",
    features: [
      "Custom furniture",
      "Built-in wardrobes",
      "Shelving units",
      "Feature walls",
      "Bespoke mirrors & frames",
    ],
  },
  {
    name: "Kitchen Fitting",
    slug: "kitchen-fitting",
    description:
      "Clarke Carpentry Contractors Ltd offers professional kitchen fitting services for both commercial and domestic clients.",
    features: [
      "Full kitchen installation",
      "Cabinet fitting",
      "Worktop installation",
      "Appliance fitting",
      "Kitchen refurbishment",
    ],
  },
  {
    name: "Timber Frame Construction",
    slug: "timber-frame-construction",
    description:
      "Clarke Carpentry Contractors Ltd offers timber frame construction services for sustainable, energy-efficient building solutions.",
    features: [
      "Timber frame erection",
      "SIPs panel installation",
      "Structural timber work",
      "Pre-fabricated systems",
      "Energy efficient construction",
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
