import { type Metadata } from "next";
import { Badge } from "~/components/ui/badge";
import { Card, CardContent } from "~/components/ui/card";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Clarke Carpentry Contractors Ltd",
  description:
    "Learn about Clarke Carpentry Contractors Ltd - over 10 years experience delivering high quality carpentry across Bristol, Bath and the South West.",
};

const certifications = [
  {
    name: "CITB",
    fullName: "Construction Industry Training Board",
    description: "Registered with the industry training board",
  },
  {
    name: "CSCS",
    fullName: "Construction Skills Certification Scheme",
    description: "All staff hold valid CSCS cards",
  },
  {
    name: "SSSTS",
    fullName: "Site Supervisor Safety Training Scheme",
    description: "Site supervision qualifications",
  },
  {
    name: "SMSTS",
    fullName: "Site Management Safety Training Scheme",
    description: "Site management qualifications",
  },
  {
    name: "PASMA",
    fullName: "Prefabricated Access Suppliers and Manufacturers Association",
    description: "Mobile access tower trained",
  },
];

const values = [
  {
    title: "Quality Workmanship",
    description:
      "Every project is completed to the highest standards by fully qualified staff handpicked for their quality of work.",
  },
  {
    title: "Fair Pricing",
    description:
      "We pride ourselves on delivering high quality carpentry at a fair price, with no hidden costs.",
  },
  {
    title: "Professionalism",
    description:
      "Our team maintains the highest level of professionalism, from initial consultation through to project completion.",
  },
  {
    title: "Strong Relationships",
    description:
      "We build lasting relationships with our customers, demonstrated through numerous repeat order clients.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="border-b border-border/50 bg-gradient-to-b from-neutral-900/50 via-background to-background py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              About Us
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Over 10 years of experience delivering high quality carpentry
              across Bristol, Bath and the South West
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-semibold">Our Story</h2>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>
                Clarke Carpentry Contractors Ltd comes from a wealth of
                experience with over 10 years in the industry. We pride
                ourselves on delivering high quality carpentry at a fair price.
              </p>
              <p>
                Based between Bristol and Bath, we undertake all aspects of
                carpentry no matter how large or small the project. From
                domestic extensions to large commercial developments, our team
                has the expertise to deliver exceptional results.
              </p>
              <p>
                All of the work is carried out by fully qualified staff that are
                handpicked for their quality of work and professionalism. As a
                company it is important to us to build strong working
                relationships with all of our customers, and this is shown
                through a number of repeat order clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="border-t border-border/50 bg-card/30 py-16">
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
                      <p className="mt-1 text-sm text-muted-foreground">
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

      {/* Certifications Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-2xl font-semibold">
            Certifications & Accreditations
          </h2>
          <p className="mt-2 text-center text-muted-foreground">
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
                  <p className="mt-1 text-xs text-muted-foreground">
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
