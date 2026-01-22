import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";
import { Phone, ArrowRight, Quote } from "lucide-react";
import { services } from "~/lib/data/services";
import { testimonials } from "~/lib/data/testimonials";

export default function Home() {
  // Get featured testimonials (first 2)
  const featuredTestimonials = testimonials.slice(0, 2);

  return (
    <main className="min-h-screen bg-background">
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
          <p className="mt-2 text-center text-muted-foreground">
            Comprehensive carpentry for commercial and domestic projects
          </p>
          <div className="mx-auto mt-8 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            {services.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`}>
                <Card className="h-full border-border/50 bg-card/50 text-center transition-colors hover:border-green-500/30 hover:bg-card/80">
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
          <p className="mt-2 text-center text-muted-foreground">
            Trusted by contractors and homeowners across the South West
          </p>
          <div className="mx-auto mt-8 grid max-w-4xl gap-6 md:grid-cols-2">
            {featuredTestimonials.map((testimonial, index) => (
              <Card key={index} className="border-border/50">
                <CardContent className="p-6">
                  <Quote className="h-8 w-8 text-green-500/20" />
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
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
              <p className="mt-2 text-muted-foreground">
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
