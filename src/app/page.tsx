import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";
import { Phone, ArrowRight, Quote } from "lucide-react";
import { getServices, getFeaturedTestimonials } from "~/sanity/lib/fetch";

export default async function Home() {
  const [services, featuredTestimonials] = await Promise.all([
    getServices(),
    getFeaturedTestimonials(),
  ]);

  return (
    <main className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="border-border/50 via-background to-background relative overflow-hidden border-b bg-gradient-to-b from-neutral-900/50 py-24">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/4 -left-1/4 h-96 w-96 rounded-full bg-white/[0.02] blur-3xl" />
          <div className="absolute top-0 -right-1/4 h-80 w-80 rounded-full bg-white/[0.02] blur-3xl" />
        </div>

        <div className="relative container mx-auto px-4 text-center">
          <div className="mx-auto mb-8 flex h-28 w-28 items-center justify-center rounded-2xl bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 p-1 ring-1 ring-white/10">
            <Image
              src="/logo.png"
              alt="Clarke Carpentry Logo"
              width={96}
              height={96}
              className="h-24 w-24"
            />
          </div>
          <h1 className="font-sans text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Clarke Carpentry
            <span className="text-foreground/80 mt-2 block">
              Contractors Ltd
            </span>
          </h1>
          <p className="text-muted-foreground mx-auto mt-6 max-w-2xl text-lg">
            Specialist carpenters covering projects across Bristol, Bath and the
            South West
          </p>
          <div className="mt-6 flex justify-center gap-2">
            <Badge
              variant="secondary"
              className="bg-neutral-800/50 text-neutral-300 ring-1 ring-white/10"
            >
              CITB Registered
            </Badge>
            <Badge
              variant="secondary"
              className="bg-neutral-800/50 text-neutral-300 ring-1 ring-white/10"
            >
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
            <p className="text-muted-foreground mt-4 leading-relaxed">
              With 15 years in the industry, we deliver quality carpentry across
              Bristol, Bath and the South West. From domestic extensions to
              multi-unit residential developments, our CSCS-certified team
              handles projects of all scales.
            </p>
            <p className="text-muted-foreground mt-3 leading-relaxed">
              Every carpenter is handpicked for their skill and professionalism.
              Our repeat relationships with clients like Juniper Homes reflect
              what we deliver: quality work, on time and on budget.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-flex items-center text-sm font-medium text-green-500 hover:text-green-400"
            >
              Learn more about us
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
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
          <p className="text-muted-foreground mt-2 text-center">
            Comprehensive carpentry for commercial and domestic projects
          </p>
          <div className="mx-auto mt-8 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            {services.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`}>
                <Card className="border-border/50 bg-card/50 hover:bg-card/80 h-full text-center transition-colors hover:border-green-500/30">
                  <CardContent className="p-3">
                    <p className="text-sm">{service.name}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/services"
              className="inline-flex items-center text-sm font-medium text-green-500 hover:text-green-400"
            >
              View all services
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4">
        <Separator />
      </div>

      {/* Testimonials Section */}
      <section className="py-14">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-2xl font-semibold">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground mt-2 text-center">
            Trusted by contractors and homeowners across the South West
          </p>
          <div className="mx-auto mt-8 grid max-w-4xl gap-6 md:grid-cols-2">
            {featuredTestimonials.slice(0, 2).map((testimonial) => (
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

      <div className="container mx-auto px-4">
        <Separator />
      </div>

      {/* CTA Section */}
      <section className="py-14">
        <div className="container mx-auto px-4">
          <Card className="mx-auto max-w-2xl border-green-500/20 bg-green-950/20">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-semibold">
                Ready to Start Your Project?
              </h2>
              <p className="text-muted-foreground mt-2">
                Get in touch for a free quote or to discuss your carpentry
                requirements.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-green-600 hover:bg-green-500"
                >
                  <a href="tel:01225350376">
                    <Phone className="mr-2 h-4 w-4" />
                    Call 01225 350376
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">Request a Quote</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
