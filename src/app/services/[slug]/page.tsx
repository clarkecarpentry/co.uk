import { type Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Card, CardContent } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { ArrowLeft, ArrowRight, CheckCircle, Phone } from "lucide-react";
import { getServices, getServiceBySlug, getProjects, getSiteSettings } from "~/sanity/lib/fetch";
import { ServiceJsonLd } from "~/components/json-ld";
import { urlFor } from "~/sanity/lib/image";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const services = await getServices();
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found | Clarke Carpentry",
    };
  }

  return {
    title: service.name,
    description: service.description,
    openGraph: {
      title: `${service.name} | Clarke Carpentry Contractors Ltd`,
      description: service.description,
      url: `/services/${slug}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.name} | Clarke Carpentry Contractors Ltd`,
      description: service.description,
    },
    alternates: {
      canonical: `/services/${slug}`,
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const [service, services, projects, settings] = await Promise.all([
    getServiceBySlug(slug),
    getServices(),
    getProjects(),
    getSiteSettings(),
  ]);
  const phone = settings?.contact?.mobile ?? "07540 150412";
  const phoneTel = phone.replace(/\s/g, '');

  if (!service) {
    notFound();
  }

  // Find related projects - handle both Sanity (array of objects) and static (string[]) formats
  const relatedProjects = projects.filter((project) => {
    const projectServices = project.services;
    if (!projectServices || projectServices.length === 0) return false;

    // Check if services is array of objects with name property or array of strings
    const firstService = projectServices[0];
    if (typeof firstService === "string") {
      return (projectServices as string[]).includes(service.name);
    } else {
      return (projectServices as Array<{ name: string }>).some(
        (s) => s.name === service.name,
      );
    }
  });

  // Find other services for navigation
  const currentIndex = services.findIndex((s) => s.slug === slug);
  const prevService = services[currentIndex - 1];
  const nextService = services[currentIndex + 1];

  return (
    <main className="min-h-screen">
      <ServiceJsonLd
        name={service.name}
        description={service.description}
        slug={service.slug}
      />
      {/* Hero Section */}
      <section className="border-border/50 via-background to-background border-b bg-gradient-to-b from-neutral-900/50 py-16">
        <div className="container mx-auto px-4">
          <Link
            href="/services"
            className="text-muted-foreground hover:text-foreground inline-flex items-center text-sm"
          >
            <ArrowLeft className="mr-1 h-4 w-4" />
            All Services
          </Link>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            {service.name}
          </h1>
          <p className="text-muted-foreground mt-4 max-w-2xl text-lg">
            {service.description}
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Features List */}
            <div>
              <h2 className="text-2xl font-semibold">What We Offer</h2>
              <p className="text-muted-foreground mt-2">
                Our {service.name.toLowerCase()} services include:
              </p>
              <ul className="mt-6 space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground mt-6 text-sm">
                If you require another service not listed then please get in
                touch.
              </p>
            </div>

            {/* Service Image or CTA Card */}
            <div>
              {service.image ? (
                <div className="relative aspect-video overflow-hidden rounded-lg">
                  <Image
                    src={urlFor(service.image).width(800).height(450).url()}
                    alt={service.image.alt ?? service.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>
              ) : (
                <Card className="border-border/50 bg-card/50">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold">
                      Interested in {service.name}?
                    </h3>
                    <p className="text-muted-foreground mt-2">
                      Get in touch to discuss your project requirements. We
                      provide free quotes for all work.
                    </p>
                    <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                      <Button asChild className="bg-green-600 hover:bg-green-500">
                        <a href={`tel:${phoneTel}`}>
                          <Phone className="mr-2 h-4 w-4" />
                          Call Us
                        </a>
                      </Button>
                      <Button asChild variant="outline">
                        <Link href="/contact">Request a Quote</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>

          {/* CTA Card - shown when there's an image above */}
          {service.image && (
            <Card className="border-border/50 bg-card/50 mt-12">
              <CardContent className="p-6">
                <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                  <div>
                    <h3 className="text-xl font-semibold">
                      Interested in {service.name}?
                    </h3>
                    <p className="text-muted-foreground mt-1">
                      Get in touch to discuss your project requirements. We provide free quotes for all work.
                    </p>
                  </div>
                  <div className="flex shrink-0 gap-3">
                    <Button asChild className="bg-green-600 hover:bg-green-500">
                      <a href={`tel:${phoneTel}`}>
                        <Phone className="mr-2 h-4 w-4" />
                        Call Us
                      </a>
                    </Button>
                    <Button asChild variant="outline">
                      <Link href="/contact">Request a Quote</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="border-border/50 bg-card/30 border-t py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-semibold">Related Projects</h2>
            <p className="text-muted-foreground mt-2">
              See examples of our {service.name.toLowerCase()} work
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProjects.slice(0, 3).map((project) => (
                <Link key={project.slug} href={`/projects/${project.slug}`}>
                  <Card className="group border-border/50 h-full transition-all hover:border-green-500/30">
                    <CardContent className="p-6">
                      <Badge
                        variant="secondary"
                        className="bg-neutral-800/50 text-neutral-300"
                      >
                        {project.type}
                      </Badge>
                      <h3 className="mt-3 font-semibold">{project.name}</h3>
                      <p className="text-muted-foreground mt-1 text-sm">
                        {project.completedDate}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Service Navigation */}
      <section className="border-border/50 border-t py-8">
        <div className="container mx-auto flex items-center justify-between px-4">
          {prevService ? (
            <Link
              href={`/services/${prevService.slug}`}
              className="text-muted-foreground hover:text-foreground flex items-center text-sm"
            >
              <ArrowLeft className="mr-1 h-4 w-4" />
              {prevService.name}
            </Link>
          ) : (
            <div />
          )}
          {nextService && (
            <Link
              href={`/services/${nextService.slug}`}
              className="text-muted-foreground hover:text-foreground flex items-center text-sm"
            >
              {nextService.name}
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          )}
        </div>
      </section>
    </main>
  );
}
