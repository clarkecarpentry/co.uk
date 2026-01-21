import { Card, CardContent } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { Separator } from "~/components/ui/separator";
import {
  Mail,
  Phone,
  MapPin,
  Hammer,
  Instagram,
} from "lucide-react";

const services = [
  "Project Management",
  "First Fix Carpentry",
  "Second Fix Carpentry",
  "Dry Lining",
  "Loft Conversions",
  "Extensions",
  "Traditional Cut Roofs",
  "New Build",
  "Renovations",
  "Bespoke Joinery",
  "Kitchen Fitting",
  "Timber Frame Construction",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-2">
            <Hammer className="h-8 w-8" />
            <span className="text-xl font-bold">Clarke Carpentry</span>
          </div>
          <div className="hidden items-center gap-4 text-sm text-muted-foreground sm:flex">
            <a
              href="tel:01225350376"
              className="flex items-center gap-1 hover:text-foreground"
            >
              <Phone className="h-4 w-4" />
              01225 350376
            </a>
            <a
              href="mailto:info@clarkecarpentry.co.uk"
              className="flex items-center gap-1 hover:text-foreground"
            >
              <Mail className="h-4 w-4" />
              info@clarkecarpentry.co.uk
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Clarke Carpentry Contractors Ltd
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
            Specialist carpenters covering projects across Bristol, Bath and the
            South West
          </p>
          <div className="mt-6 flex justify-center gap-2">
            <Badge variant="secondary">CITB Registered</Badge>
            <Badge variant="secondary">CSCS Approved</Badge>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold">About Us</h2>
            <p className="mt-4 text-muted-foreground">
              Clarke Carpentry Contractors Ltd comes from a wealth of experience
              with over 10 years in the industry. We pride ourselves on
              delivering high quality carpentry at a fair price.
            </p>
            <p className="mt-4 text-muted-foreground">
              Based between Bristol and Bath, we undertake all aspects of
              carpentry no matter how large or small the project. All of the
              work is carried out by fully qualified staff that are handpicked
              for their quality of work and professionalism.
            </p>
          </div>
        </div>
      </section>

      <Separator />

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold">Our Services</h2>
          <p className="mt-2 text-center text-muted-foreground">
            Comprehensive carpentry services for commercial and domestic
            projects
          </p>
          <div className="mx-auto mt-8 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {services.map((service) => (
              <Card key={service} className="text-center">
                <CardContent className="p-4">
                  <p className="text-sm font-medium">{service}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold">Contact Us</h2>
          <p className="mt-2 text-center text-muted-foreground">
            Get in touch for a quote or to discuss your project
          </p>

          <div className="mx-auto mt-8 max-w-md">
            <Card>
              <CardContent className="space-y-4 p-6">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Head Office</p>
                    <p className="text-sm text-muted-foreground">
                      Unit 5 Wansdyke Workshops
                      <br />
                      Unity Road
                      <br />
                      Keynsham, Bristol
                      <br />
                      BS31 1NH
                    </p>
                  </div>
                </div>

                <Separator />

                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-sm text-muted-foreground">
                      <a href="tel:01225350376" className="hover:underline">
                        01225 350376
                      </a>{" "}
                      (Office)
                      <br />
                      <a href="tel:07540150412" className="hover:underline">
                        07540 150412
                      </a>{" "}
                      (Mobile)
                    </p>
                  </div>
                </div>

                <Separator />

                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a
                      href="mailto:info@clarkecarpentry.co.uk"
                      className="text-sm text-muted-foreground hover:underline"
                    >
                      info@clarkecarpentry.co.uk
                    </a>
                  </div>
                </div>

                <Separator />

                <div className="flex items-center gap-3">
                  <Instagram className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Social</p>
                    <a
                      href="https://www.instagram.com/clarkecarpentrycontractorsltd/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:underline"
                    >
                      @clarkecarpentrycontractorsltd
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/50 py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Clarke Carpentry Contractors Ltd.
            All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
