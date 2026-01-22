export interface Testimonial {
  quote: string;
  clientName: string;
  company?: string;
  project?: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "We have worked with Clarke Carpentry Contractors Ltd on various projects for a number of years. They are highly professional hard working, determined and approachable. They have always been pleasant to work alongside and look forward to working with again. Highly recommended.",
    clientName: "Pete Sarre",
    company: "Juniper Homes",
    project: "Site Manager",
  },
  {
    quote:
      "Clarke Carpentry Contractors Ltd made and installed a bespoke mirror for our new studio space. They were very efficient in carrying out the work to meet our deadline. They were also friendly to our staff and customers. We would definitely use them again.",
    clientName: "Katie Cofferon",
    company: "Number Three",
    project: "Manager",
  },
  {
    quote:
      "Mike's standard of work is very high, his employees are all courteous and worked to a high standard. I would highly recommend Clarke Carpentry. His timekeeping is excellent and always left everything tidy, never left a mess. Very polite, would use again.",
    clientName: "Debbie Townsend",
    project: "Rockview House",
  },
  {
    quote:
      "Excellent work carried out by Mike and his team. We are very pleased with our new decking.",
    clientName: "Enzo Baio",
    project: "Box Hill",
  },
  {
    quote:
      "They were great to work with and listened to all our requirements and came up with great solutions to the problems that arose, would definitely have them back. Excellent job.",
    clientName: "Debbie Hearse",
    project: "Hillside Court",
  },
  {
    quote:
      "Clarke Carpentry undertook a 1st & 2nd fix carpentry package for us. It was clear to see from the outset, Mike has a very high standard of workmanship combined with time served knowledge. Mike and his team worked tirelessly to give an exceptional finish. Look forward to working with this company again.",
    clientName: "Byron Jefferies",
    project: "Sherwood House",
  },
];
