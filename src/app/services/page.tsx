import { ArrowRight } from "lucide-react";
import { type Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "~/components/ui/card";
import { getServices } from "~/sanity/lib/fetch";
import { urlFor } from "~/sanity/lib/image";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Comprehensive carpentry services for commercial and domestic projects across Bristol, Bath and the South West. First fix, second fix, extensions, new builds and more.",
  openGraph: {
    title: "Our Services | Clarke Carpentry Contractors Ltd",
    description:
      "Comprehensive carpentry services for commercial and domestic projects across Bristol, Bath and the South West. First fix, second fix, extensions, new builds and more.",
    url: "/services",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services | Clarke Carpentry Contractors Ltd",
    description:
      "Comprehensive carpentry services for commercial and domestic projects across Bristol, Bath and the South West.",
  },
  alternates: {
    canonical: "/services",
  },
};

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="border-border/50 via-background to-background border-b bg-gradient-to-b from-neutral-900/50 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Our Services
            </h1>
            <p className="text-muted-foreground mt-4 text-lg">
              Comprehensive carpentry services for commercial and domestic
              projects across Bristol, Bath and the South West
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`} className="group block h-full">
                <Card className="h-full overflow-hidden border-border/50 bg-card p-0 gap-0 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-green-500/50">
                  {service.image && (
                    <div className="relative aspect-video w-full overflow-hidden">
                      <Image
                        src={urlFor(service.image).width(600).height(340).url()}
                        alt={service.image.alt ?? service.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                  )}
                  <CardContent className="flex h-full flex-col p-6">
                    <h2 className="text-2xl font-bold tracking-tight text-foreground transition-colors group-hover:text-green-600">
                      {service.name}
                    </h2>
                    <p className="text-muted-foreground mt-3 flex-1 text-base leading-relaxed line-clamp-3">
                      {service.description}
                    </p>
                    <div className="mt-6 flex items-center text-sm font-semibold text-green-600 group-hover:text-green-500">
                      Learn more
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-border/50 bg-card/30 border-t py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-semibold">Need a Service Not Listed?</h2>
          <p className="text-muted-foreground mt-2">
            We undertake all aspects of carpentry. Get in touch to discuss your
            project.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 font-medium text-white transition-colors hover:bg-green-500"
          >
            Contact Us
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
