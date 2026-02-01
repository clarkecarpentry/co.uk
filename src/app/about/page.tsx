import { type Metadata } from "next";
import Link from "next/link";
import { Badge } from "~/components/ui/badge";
import { Card, CardContent } from "~/components/ui/card";
import { CheckCircle, Quote, ArrowRight, Users } from "lucide-react";
import { getFeaturedTestimonials } from "~/sanity/lib/fetch";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Clarke Carpentry Contractors Ltd - 15 years experience delivering quality carpentry across Bristol, Bath and the South West. CSCS certified team.",
  openGraph: {
    title: "About Us | Clarke Carpentry Contractors Ltd",
    description:
      "Learn about Clarke Carpentry Contractors Ltd - 15 years experience delivering quality carpentry across Bristol, Bath and the South West.",
    url: "/about",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Clarke Carpentry Contractors Ltd",
    description:
      "Learn about Clarke Carpentry Contractors Ltd - 15 years experience delivering quality carpentry across Bristol, Bath and the South West.",
  },
  alternates: {
    canonical: "/about",
  },
};

const certifications = [
  {
    name: "CSCS",
    fullName: "Construction Skills Certification Scheme",
    description: "All carpenters hold valid CSCS cards proving their qualifications",
  },
  {
    name: "CITB",
    fullName: "Construction Industry Training Board",
    description: "Registered with the industry training and standards body",
  },
  {
    name: "SSSTS",
    fullName: "Site Supervisor Safety Training Scheme",
    description: "Site supervisors trained in health, safety and welfare management",
  },
  {
    name: "SMSTS",
    fullName: "Site Management Safety Training Scheme",
    description: "Site managers hold full safety management certification",
  },
  {
    name: "PASMA",
    fullName: "Prefabricated Access Suppliers and Manufacturers Association",
    description: "Trained and certified for safe use of mobile access towers",
  },
];

const values = [
  {
    title: "Quality Workmanship",
    description:
      "Every carpenter is handpicked for their skill and attention to detail. We deliver work that stands up to close inspection.",
  },
  {
    title: "On Time, On Budget",
    description:
      "We deliver when we say we will, at the price we quoted. Main contractors rely on us to keep their programmes on track.",
  },
  {
    title: "Straightforward Approach",
    description:
      "We say what we mean and deliver what we promise. No surprises, no excuses - just reliable carpentry.",
  },
  {
    title: "Repeat Clients",
    description:
      "Our best evidence is that clients come back. Juniper Homes has trusted us with multiple developments.",
  },
];

export default async function AboutPage() {
  const testimonials = await getFeaturedTestimonials();

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="border-border/50 via-background to-background border-b bg-gradient-to-b from-neutral-900/50 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 flex justify-center">
              <div className="rounded-full bg-green-500/10 p-3 ring-1 ring-green-500/20">
                <Users className="h-8 w-8 text-green-500" />
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              About Us
            </h1>
            <p className="text-muted-foreground mt-4 text-lg">
              15 years of experience delivering quality carpentry across
              Bristol, Bath and the South West
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-semibold">Our Story</h2>
            <div className="text-muted-foreground mt-6 space-y-4">
              <p>
                Clarke Carpentry started when Mike Clarke set out as a sole
                trader, taking on domestic carpentry work across Bristol and
                Bath. With a relentless work ethic and genuine attention to
                detail, the business grew through word of mouth and repeat
                custom.
              </p>
              <p>
                Over 15 years, that reputation has opened doors to larger
                projects. Today we handle everything from kitchen installations
                to multi-unit residential developments - including a 41-flat
                conversion in Bristol city centre. The scale has changed, but
                the approach hasn&apos;t: do the job right, finish on time, and
                stand behind the work.
              </p>
              <p>
                Every carpenter on our team is CSCS-certified and handpicked for
                their quality of workmanship. Mike remains hands-on with project
                delivery, bringing the same straightforward approach that built
                the business from day one.
              </p>
              <p>
                Based in Keynsham between Bristol and Bath, we cover the South
                West and work with main contractors, developers and private
                clients. Our repeat relationships - particularly with Juniper
                Homes across multiple developments - reflect the trust we&apos;ve
                earned through consistent delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="border-border/50 bg-card/30 border-t py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-2xl font-semibold">Our Values</h2>
          <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-2">
            {values.map((value) => (
              <Card key={value.title} className="border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-500" />
                    <div>
                      <h3 className="font-semibold">{value.title}</h3>
                      <p className="text-muted-foreground mt-1 text-sm">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-2xl font-semibold">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground mt-2 text-center">
            Don&apos;t just take our word for it
          </p>
          <div className="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-2">
            {testimonials.slice(0, 2).map((testimonial) => (
              <Card key={testimonial._id} className="border-border/50">
                <CardContent className="p-6">
                  <Quote className="h-8 w-8 text-green-500/20" />
                  <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="mt-4">
                    <p className="font-medium">{testimonial.clientName}</p>
                    {testimonial.company && (
                      <p className="text-sm text-green-500">
                        {testimonial.company}
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/testimonials"
              className="inline-flex items-center text-sm font-medium text-green-500 hover:text-green-400"
            >
              Read all testimonials
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="border-border/50 bg-card/30 border-t py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-2xl font-semibold">
            Certifications & Accreditations
          </h2>
          <p className="text-muted-foreground mt-2 text-center">
            Fully qualified and certified to industry standards
          </p>
          <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert) => (
              <Card key={cert.name} className="border-border/50">
                <CardContent className="p-4">
                  <Badge
                    variant="secondary"
                    className="bg-green-950/50 text-green-400 ring-1 ring-green-500/20"
                  >
                    {cert.name}
                  </Badge>
                  <p className="mt-2 text-sm font-medium">{cert.fullName}</p>
                  <p className="text-muted-foreground mt-1 text-xs">
                    {cert.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
