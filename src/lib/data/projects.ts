export interface Project {
  name: string;
  slug: string;
  type: "Commercial" | "Domestic";
  client?: string;
  description: string;
  completedDate: string;
  services: string[];
}

export const projects: Project[] = [
  {
    name: "Wilder House",
    slug: "wilder-house",
    type: "Commercial",
    client: "Juniper Homes",
    description:
      "A major conversion project in Bristol city centre, transforming a former office block into 41 high-end residential flats. We were awarded the complete second fix carpentry contract, which included work across all units plus communal areas. The project presented particular challenges with structural floor levels being raised to accommodate an additional storey. Working to Juniper Homes' exacting standards, we delivered the full package on time and on budget.",
    completedDate: "August 2018",
    services: ["Second Fix Carpentry"],
  },
  {
    name: "Feltmakers Lane",
    slug: "feltmakers-lane",
    type: "Commercial",
    client: "Juniper Homes",
    description:
      "A new build residential development in Rangeworthy comprising multiple units. We delivered the complete carpentry package from first fix through to second fix, working alongside other trades to maintain the build programme. This was our second major project with Juniper Homes, building on the successful delivery at Wilder House.",
    completedDate: "February 2020",
    services: ["First Fix Carpentry", "Second Fix Carpentry", "New Build"],
  },
  {
    name: "Weavers Lane",
    slug: "weavers-lane",
    type: "Commercial",
    client: "Juniper Homes",
    description:
      "Another new build development with Juniper Homes, this time in Bristol. We provided comprehensive carpentry services across the scheme, handling both structural first fix work and the finishing second fix elements. Our ongoing relationship with Juniper Homes reflects the consistent quality and reliability we bring to multi-unit developments.",
    completedDate: "September 2020",
    services: ["First Fix Carpentry", "Second Fix Carpentry", "New Build"],
  },
  {
    name: "Walcot House",
    slug: "walcot-house",
    type: "Commercial",
    client: undefined,
    description:
      "A commercial refurbishment project in central Bath, bringing a tired building back to life. The work involved stripping back to the structure and completing a full internal fit-out, requiring careful coordination with other trades in a constrained city centre site. The finished space now serves its new commercial purpose while respecting the character of this historic Bath location.",
    completedDate: "December 2017",
    services: ["Second Fix Carpentry", "Renovations"],
  },
  {
    name: "Claverham House",
    slug: "claverham-house",
    type: "Domestic",
    client: "CTS Design",
    description:
      "Extension work on a Grade 2 listed property, where heritage requirements added significant complexity to the carpentry specification. Working in collaboration with CTS Design, we delivered bespoke joinery that complemented the building's period features while meeting modern building regulations. Listed building work demands particular care - both in protecting existing fabric and in ensuring new elements are sympathetic to the original architecture.",
    completedDate: "April 2018",
    services: ["Extensions", "Bespoke Joinery"],
  },
  {
    name: "Rockview",
    slug: "rockview",
    type: "Domestic",
    description:
      "A domestic extension project delivering additional living space for the homeowner. We handled the complete carpentry package including the structural extension work and all second fix finishing. The project required careful integration between the new extension and existing property to ensure a seamless result.",
    completedDate: "December 2019",
    services: ["Extensions", "Second Fix Carpentry"],
  },
  {
    name: "Sherwood Road",
    slug: "sherwood-road",
    type: "Domestic",
    client: "By Design",
    description:
      "A complete first and second fix carpentry package working alongside By Design. The project demanded high standards throughout - from the structural first fix elements through to the finishing details. We delivered an exceptional finish that met the exacting requirements of both the designer and homeowner. This project demonstrates our capability to work within design-led briefs where quality of finish is paramount.",
    completedDate: "July 2020",
    services: ["First Fix Carpentry", "Second Fix Carpentry"],
  },
  {
    name: "Porlock Road",
    slug: "porlock-road",
    type: "Domestic",
    description:
      "A kitchen installation project in Bath, fitting a complete new kitchen for a domestic client. Kitchen work requires particular precision - units must be perfectly level, doors properly aligned, and worktops fitted with tight joints. We handled the full installation including all units, worktops and appliance housing, delivering a finished kitchen ready for the client to enjoy.",
    completedDate: "June 2019",
    services: ["Kitchen Fitting"],
  },
  {
    name: "Number Three Hair Salon",
    slug: "number-three-hair-salon",
    type: "Commercial",
    description:
      "Bespoke joinery for a hair salon in Bath, creating custom mirrors and features for their new studio space. Commercial joinery work needs to be both attractive and durable - standing up to daily use in a busy salon environment. We worked efficiently to minimise disruption to the business, completing the installation on schedule so the salon could open as planned.",
    completedDate: "November 2017",
    services: ["Bespoke Joinery"],
  },
  {
    name: "Box Hill",
    slug: "box-hill",
    type: "Domestic",
    description:
      "An external project creating a new decking area and outdoor living space. Good decking requires proper groundwork, appropriate timber selection, and careful construction to ensure longevity. We delivered a finished outdoor space that extends the usable living area of the property and has been built to last.",
    completedDate: "March 2019",
    services: ["Bespoke Joinery"],
  },
  {
    name: "Masters Church",
    slug: "masters-church",
    type: "Commercial",
    description:
      "A terrace housing development in Kingswood comprising multiple new build units. We provided comprehensive carpentry services across the scheme, from structural first fix through to all second fix finishing work. Multi-unit developments require consistent quality across every plot while maintaining the programme - we delivered both.",
    completedDate: "November 2020",
    services: ["First Fix Carpentry", "Second Fix Carpentry", "New Build"],
  },
  {
    name: "Oldland Common",
    slug: "oldland-common",
    type: "Domestic",
    description:
      "A new build bungalow project where we delivered the complete carpentry package from foundation to finish. Bungalow construction presents its own considerations - particularly around roof structure where there's no upper floor to work from. We completed all first fix and second fix elements, handing over a property ready for decoration and occupation.",
    completedDate: "2021",
    services: ["First Fix Carpentry", "Second Fix Carpentry", "New Build"],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
