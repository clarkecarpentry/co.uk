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
      "Working with Juniper Homes, Clarke Carpentry Contractors Ltd was awarded the contract to complete the entire second fix of these 41 high end flats. Originally an office block, this project in the centre of Bristol included raising structural floor levels to accommodate a new storey. The work was completed on time and on budget.",
    completedDate: "August 2018",
    services: ["Second Fix Carpentry"],
  },
  {
    name: "Feltmakers Lane",
    slug: "feltmakers-lane",
    type: "Commercial",
    client: "Juniper Homes",
    description:
      "A new build development in Rangeworthy, working with Juniper Homes on a multi-unit residential project requiring comprehensive carpentry services.",
    completedDate: "February 2020",
    services: ["First Fix Carpentry", "Second Fix Carpentry", "New Build"],
  },
  {
    name: "Weavers Lane",
    slug: "weavers-lane",
    type: "Commercial",
    client: "Juniper Homes",
    description:
      "New build development in Bristol, delivering complete carpentry packages for this residential project with Juniper Homes.",
    completedDate: "September 2020",
    services: ["First Fix Carpentry", "Second Fix Carpentry", "New Build"],
  },
  {
    name: "Walcot House",
    slug: "walcot-house",
    type: "Commercial",
    description:
      "Commercial refurbishment project in the heart of Bath, transforming an existing building with high-quality carpentry work.",
    completedDate: "December 2017",
    services: ["Second Fix Carpentry", "Renovations"],
  },
  {
    name: "Claverham House",
    slug: "claverham-house",
    type: "Domestic",
    client: "CTS Design",
    description:
      "Grade 2 listed property extension requiring sensitive carpentry work that respects the building's heritage while delivering modern functionality.",
    completedDate: "April 2018",
    services: ["Extensions", "Bespoke Joinery"],
  },
  {
    name: "Rockview",
    slug: "rockview",
    type: "Domestic",
    description:
      "Domestic extension improvement project delivering high-quality carpentry work to enhance the property.",
    completedDate: "December 2019",
    services: ["Extensions", "Second Fix Carpentry"],
  },
  {
    name: "Sherwood Road",
    slug: "sherwood-road",
    type: "Domestic",
    client: "By Design",
    description:
      "First and second fix carpentry package delivered to an exceptional finish, working closely with By Design to meet their high standards.",
    completedDate: "July 2020",
    services: ["First Fix Carpentry", "Second Fix Carpentry"],
  },
  {
    name: "Porlock Road",
    slug: "porlock-road",
    type: "Domestic",
    description:
      "Kitchen installation project in Bath, delivering a complete kitchen fitting service with attention to detail.",
    completedDate: "June 2019",
    services: ["Kitchen Fitting"],
  },
  {
    name: "Number Three Hair Salon",
    slug: "number-three-hair-salon",
    type: "Commercial",
    description:
      "Bespoke joinery project for a hair salon in Bath, creating custom mirrors and features for their new studio space.",
    completedDate: "November 2017",
    services: ["Bespoke Joinery"],
  },
  {
    name: "Box Hill",
    slug: "box-hill",
    type: "Domestic",
    description:
      "Decking and outdoor space project, creating a beautiful external area for the client.",
    completedDate: "March 2019",
    services: ["Bespoke Joinery"],
  },
  {
    name: "Masters Church",
    slug: "masters-church",
    type: "Commercial",
    description:
      "Terrace houses development in Kingswood, providing comprehensive carpentry services for this multi-unit project.",
    completedDate: "November 2020",
    services: ["First Fix Carpentry", "Second Fix Carpentry", "New Build"],
  },
  {
    name: "Oldland Common",
    slug: "oldland-common",
    type: "Domestic",
    description:
      "New build bungalow project delivering complete carpentry packages from first fix through to completion.",
    completedDate: "2021",
    services: ["First Fix Carpentry", "Second Fix Carpentry", "New Build"],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
