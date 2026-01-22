import { type Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Card, CardContent } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Building2,
  Phone,
} from "lucide-react";
import { projects, getProjectBySlug } from "~/lib/data/projects";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found | Clarke Carpentry",
    };
  }

  return {
    title: `${project.name} | Clarke Carpentry Contractors Ltd`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  // Find other projects for navigation
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prevProject = projects[currentIndex - 1];
  const nextProject = projects[currentIndex + 1];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="border-b border-border/50 bg-gradient-to-b from-neutral-900/50 via-background to-background py-16">
        <div className="container mx-auto px-4">
          <Link
            href="/projects"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="mr-1 h-4 w-4" />
            All Projects
          </Link>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <Badge
              variant="secondary"
              className={
                project.type === "Commercial"
                  ? "bg-blue-950/50 text-blue-400 ring-1 ring-blue-500/20"
                  : "bg-amber-950/50 text-amber-400 ring-1 ring-amber-500/20"
              }
            >
              {project.type}
            </Badge>
            {project.client && (
              <Badge
                variant="secondary"
                className="bg-green-950/50 text-green-400 ring-1 ring-green-500/20"
              >
                {project.client}
              </Badge>
            )}
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            {project.name}
          </h1>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-semibold">Project Overview</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {project.description}
              </p>

              {/* Services Used */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold">Services Provided</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.services.map((service) => (
                    <Badge
                      key={service}
                      variant="secondary"
                      className="bg-neutral-800/50"
                    >
                      {service}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Project Info Card */}
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-semibold">Project Details</h3>
                  <dl className="mt-4 space-y-3">
                    <div className="flex items-center gap-3">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <dt className="text-xs text-muted-foreground">
                          Completed
                        </dt>
                        <dd className="text-sm">{project.completedDate}</dd>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Building2 className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <dt className="text-xs text-muted-foreground">Type</dt>
                        <dd className="text-sm">{project.type}</dd>
                      </div>
                    </div>
                    {project.client && (
                      <div className="flex items-center gap-3">
                        <Building2 className="h-4 w-4 text-muted-foreground" />
                        <div>
                          <dt className="text-xs text-muted-foreground">
                            Client
                          </dt>
                          <dd className="text-sm">{project.client}</dd>
                        </div>
                      </div>
                    )}
                  </dl>
                </CardContent>
              </Card>

              {/* CTA Card */}
              <Card className="border-border/50 bg-card/50">
                <CardContent className="p-6">
                  <h3 className="font-semibold">
                    Interested in Similar Work?
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Get in touch to discuss your project requirements.
                  </p>
                  <div className="mt-4 flex flex-col gap-2">
                    <Button
                      asChild
                      className="w-full bg-green-600 hover:bg-green-500"
                    >
                      <a href="tel:01225350376">
                        <Phone className="mr-2 h-4 w-4" />
                        Call Us
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/contact">Request a Quote</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Project Navigation */}
      <section className="border-t border-border/50 py-8">
        <div className="container mx-auto flex items-center justify-between px-4">
          {prevProject ? (
            <Link
              href={`/projects/${prevProject.slug}`}
              className="flex items-center text-sm text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="mr-1 h-4 w-4" />
              {prevProject.name}
            </Link>
          ) : (
            <div />
          )}
          {nextProject && (
            <Link
              href={`/projects/${nextProject.slug}`}
              className="flex items-center text-sm text-muted-foreground hover:text-foreground"
            >
              {nextProject.name}
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          )}
        </div>
      </section>
    </main>
  );
}
