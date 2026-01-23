import { type Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Quote, Phone, ArrowRight, Star } from "lucide-react";
import { getTestimonials } from "~/sanity/lib/fetch";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Read what our clients say about Clarke Carpentry Contractors Ltd. Trusted by contractors and homeowners across Bristol, Bath and the South West.",
  openGraph: {
    title: "Testimonials | Clarke Carpentry Contractors Ltd",
    description:
      "Read what our clients say about Clarke Carpentry Contractors Ltd. Trusted by contractors and homeowners across Bristol, Bath and the South West.",
    url: "/testimonials",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Testimonials | Clarke Carpentry Contractors Ltd",
    description:
      "Read what our clients say about Clarke Carpentry Contractors Ltd. Trusted by contractors and homeowners across the South West.",
  },
  alternates: {
    canonical: "/testimonials",
  },
};

export default async function TestimonialsPage() {
  const testimonials = await getTestimonials();

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="border-border/50 via-background to-background relative overflow-hidden border-b bg-gradient-to-b from-neutral-900/50 py-16">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/4 -right-1/4 h-96 w-96 rounded-full bg-green-500/[0.03] blur-3xl" />
          <div className="absolute -bottom-1/4 -left-1/4 h-80 w-80 rounded-full bg-green-500/[0.03] blur-3xl" />
        </div>

        <div className="relative container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 flex justify-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-6 w-6 fill-green-500 text-green-500"
                />
              ))}
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              What Our Clients Say
            </h1>
            <p className="text-muted-foreground mt-4 text-lg">
              Trusted by main contractors, developers and homeowners across
              Bristol, Bath and the South West
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-6 md:grid-cols-2">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={testimonial._id}
                  className={`border-border/50 bg-card/50 relative overflow-hidden transition-all duration-300 hover:border-green-500/30 hover:bg-card/80 ${
                    index === 0 ? "md:col-span-2" : ""
                  }`}
                >
                  {/* Decorative gradient */}
                  <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-green-500/[0.03] blur-2xl" />

                  <CardContent className={`relative p-6 ${index === 0 ? "md:p-8" : ""}`}>
                    <Quote
                      className={`text-green-500/20 ${
                        index === 0 ? "h-12 w-12" : "h-8 w-8"
                      }`}
                    />
                    <blockquote
                      className={`text-muted-foreground mt-4 leading-relaxed ${
                        index === 0 ? "text-lg md:text-xl" : "text-sm"
                      }`}
                    >
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>
                    <div className="mt-6 flex items-center justify-between">
                      <div>
                        <p className="font-semibold">{testimonial.clientName}</p>
                        {testimonial.company && (
                          <p className="text-sm text-green-500">
                            {testimonial.company}
                          </p>
                        )}
                        {testimonial.project && (
                          <p className="text-muted-foreground mt-1 text-xs">
                            Project: {testimonial.project}
                          </p>
                        )}
                      </div>
                      <div className="flex gap-0.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-green-500/50 text-green-500/50"
                          />
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-border/50 bg-card/30 border-y py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 text-center md:grid-cols-4">
            <div>
              <p className="text-3xl font-bold text-green-500">15+</p>
              <p className="text-muted-foreground mt-1 text-sm">Years Experience</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-green-500">100+</p>
              <p className="text-muted-foreground mt-1 text-sm">Projects Completed</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-green-500">100%</p>
              <p className="text-muted-foreground mt-1 text-sm">CSCS Certified</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-green-500">5</p>
              <p className="text-muted-foreground mt-1 text-sm">Star Service</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="mx-auto max-w-2xl border-green-500/20 bg-green-950/20">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-semibold">
                Ready to Experience the Difference?
              </h2>
              <p className="text-muted-foreground mt-2">
                Join our growing list of satisfied clients. Get in touch for a
                free quote on your carpentry project.
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

      {/* View Projects Link */}
      <section className="pb-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            See examples of our work across Bristol, Bath and the South West
          </p>
          <Link
            href="/projects"
            className="mt-2 inline-flex items-center text-sm font-medium text-green-500 hover:text-green-400"
          >
            View our projects
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
