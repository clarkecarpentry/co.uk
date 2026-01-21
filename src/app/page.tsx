import Image from "next/image";
import { Card, CardContent } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";
import { Mail, Phone, MapPin, Instagram } from "lucide-react";

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
      <header className="border-b border-border/50">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Clarke Carpentry Logo"
              width={40}
              height={40}
              className="h-10 w-10"
            />
            <span className="text-lg font-semibold">Clarke Carpentry</span>
          </div>
          <div className="hidden items-center gap-3 sm:flex">
            <a
              href="tel:01225350376"
              className="flex items-center gap-2 rounded-full bg-green-600/10 px-4 py-2 text-sm font-medium text-green-500 ring-1 ring-green-500/20 transition-all duration-200 hover:bg-green-600/20 hover:ring-green-500/40"
            >
              <Phone className="h-4 w-4" />
              01225 350376
            </a>
            <a
              href="mailto:info@clarkecarpentry.co.uk"
              className="flex items-center gap-2 rounded-full bg-foreground/5 px-4 py-2 text-sm font-medium text-foreground/80 ring-1 ring-foreground/10 transition-all duration-200 hover:bg-foreground/10 hover:text-foreground hover:ring-foreground/20"
            >
              <Mail className="h-4 w-4" />
              info@clarkecarpentry.co.uk
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border/50 bg-gradient-to-b from-neutral-900/50 via-background to-background py-24">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-1/4 -top-1/4 h-96 w-96 rounded-full bg-white/[0.02] blur-3xl" />
          <div className="absolute -right-1/4 top-0 h-80 w-80 rounded-full bg-white/[0.02] blur-3xl" />
        </div>

        <div className="container relative mx-auto px-4 text-center">
          <div className="mx-auto mb-8 flex h-28 w-28 items-center justify-center rounded-2xl bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 p-1 ring-1 ring-white/10">
            <Image
              src="/logo.png"
              alt="Clarke Carpentry Logo"
              width={96}
              height={96}
              className="h-24 w-24"
            />
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Clarke Carpentry
            <span className="mt-2 block text-foreground/80">
              Contractors Ltd
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Specialist carpenters covering projects across Bristol, Bath and the
            South West
          </p>
          <div className="mt-6 flex justify-center gap-2">
            <Badge variant="secondary" className="bg-neutral-800/50 text-neutral-300 ring-1 ring-white/10">
              CITB Registered
            </Badge>
            <Badge variant="secondary" className="bg-neutral-800/50 text-neutral-300 ring-1 ring-white/10">
              CSCS Approved
            </Badge>
          </div>
          <Button
            asChild
            size="lg"
            className="mt-10 bg-gradient-to-r from-green-600 to-emerald-600 px-8 py-6 text-lg font-semibold shadow-lg shadow-green-900/30 transition-all duration-300 hover:scale-105 hover:from-green-500 hover:to-emerald-500 hover:shadow-xl hover:shadow-green-900/40"
          >
            <a href="tel:01225350376">
              <Phone className="mr-2.5 h-5 w-5" />
              Call Us Today
            </a>
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-14">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-semibold">About Us</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Clarke Carpentry Contractors Ltd comes from a wealth of experience
              with over 10 years in the industry. We pride ourselves on
              delivering high quality carpentry at a fair price.
            </p>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Based between Bristol and Bath, we undertake all aspects of
              carpentry no matter how large or small the project. All work is
              carried out by fully qualified staff, handpicked for their quality
              and professionalism.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4">
        <Separator />
      </div>

      {/* Services Section */}
      <section className="py-14">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-2xl font-semibold">Our Services</h2>
          <p className="mt-2 text-center text-muted-foreground">
            Comprehensive carpentry for commercial and domestic projects
          </p>
          <div className="mx-auto mt-8 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            {services.map((service) => (
              <Card
                key={service}
                className="border-border/50 bg-card/50 text-center"
              >
                <CardContent className="p-3">
                  <p className="text-sm">{service}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4">
        <Separator />
      </div>

      {/* Contact Section */}
      <section className="py-14">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-2xl font-semibold">Contact Us</h2>
          <p className="mt-2 text-center text-muted-foreground">
            Get in touch for a quote or to discuss your project
          </p>

          <div className="mx-auto mt-8 max-w-sm">
            <Card className="border-border/50">
              <CardContent className="space-y-4 p-5">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Head Office</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      Unit 5 Wansdyke Workshops
                      <br />
                      Unity Road, Keynsham
                      <br />
                      Bristol BS31 1NH
                    </p>
                  </div>
                </div>

                <Separator className="bg-border/50" />

                <div className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Phone</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      <a href="tel:01225350376" className="hover:underline">
                        01225 350376
                      </a>
                      <span className="mx-1.5 text-border">·</span>
                      <a href="tel:07540150412" className="hover:underline">
                        07540 150412
                      </a>
                    </p>
                  </div>
                </div>

                <Separator className="bg-border/50" />

                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 shrink-0 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Email</p>
                    <a
                      href="mailto:info@clarkecarpentry.co.uk"
                      className="mt-1 text-sm text-muted-foreground hover:underline"
                    >
                      info@clarkecarpentry.co.uk
                    </a>
                  </div>
                </div>

                <Separator className="bg-border/50" />

                <div className="flex items-center gap-3">
                  <Instagram className="h-5 w-5 shrink-0 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Instagram</p>
                    <a
                      href="https://www.instagram.com/clarkecarpentrycontractorsltd/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 text-sm text-muted-foreground hover:underline"
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
      <footer className="border-t border-border/50 py-6">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Clarke Carpentry Contractors Ltd
        </div>
      </footer>
    </main>
  );
}
