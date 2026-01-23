import { type Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { ArrowRight, FolderKanban } from "lucide-react";
import { getProjects } from "~/sanity/lib/fetch";
import { urlFor } from "~/sanity/lib/image";
import type { SanityProject } from "~/sanity/lib/types";

export const metadata: Metadata = {
  title: "Our Projects",
  description:
    "View our portfolio of completed carpentry projects across Bristol, Bath and the South West. Commercial and domestic work including new builds, extensions, and renovations.",
  openGraph: {
    title: "Our Projects | Clarke Carpentry Contractors Ltd",
    description:
      "View our portfolio of completed carpentry projects across Bristol, Bath and the South West. Commercial and domestic work including new builds, extensions, and renovations.",
    url: "/projects",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Projects | Clarke Carpentry Contractors Ltd",
    description:
      "View our portfolio of completed carpentry projects across Bristol, Bath and the South West.",
  },
  alternates: {
    canonical: "/projects",
  },
};

function ProjectCard({ project }: { project: SanityProject }) {
  const badgeStyles =
    project.type === "Commercial"
      ? "bg-blue-950/50 text-blue-400 ring-1 ring-blue-500/20"
      : "bg-amber-950/50 text-amber-400 ring-1 ring-amber-500/20";

  return (
    <Link href={`/projects/${project.slug}`} className="group block h-full">
      <Card className="h-full overflow-hidden border-border/50 bg-card p-0 py-0 gap-0 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-green-500/50">
        {project.featuredImage && (
          <div className="relative aspect-video w-full overflow-hidden">
            <Image
              src={urlFor(project.featuredImage).width(600).height(340).url()}
              alt={project.featuredImage.alt ?? project.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
        )}
        <CardContent className="flex h-full flex-col p-6">
          <div className="flex items-center justify-between">
            <Badge variant="secondary" className={badgeStyles}>
              {project.type}
            </Badge>
            <span className="text-muted-foreground text-xs">
              {project.completedDate}
            </span>
          </div>
          <h3 className="mt-3 text-xl font-semibold transition-colors group-hover:text-green-600">{project.name}</h3>
          {project.client && (
            <p className="mt-1 text-sm text-green-500">{project.client}</p>
          )}
          <p className="text-muted-foreground mt-2 line-clamp-3 flex-1 text-sm leading-relaxed">
            {project.description}
          </p>
          <div className="mt-4 flex items-center text-sm font-semibold text-green-600 group-hover:text-green-500">
            View project
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

export default async function ProjectsPage() {
  const projects = await getProjects();

  // Sort projects by date (most recent first)
  const sortedProjects = [...projects].sort((a, b) => {
    const dateA = new Date(a.completedDate);
    const dateB = new Date(b.completedDate);
    return dateB.getTime() - dateA.getTime();
  });

  const commercialProjects = sortedProjects.filter(
    (p) => p.type === "Commercial",
  );
  const domesticProjects = sortedProjects.filter((p) => p.type === "Domestic");

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="border-border/50 via-background to-background border-b bg-gradient-to-b from-neutral-900/50 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 flex justify-center">
              <div className="rounded-full bg-green-500/10 p-3 ring-1 ring-green-500/20">
                <FolderKanban className="h-8 w-8 text-green-500" />
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Our Projects
            </h1>
            <p className="text-muted-foreground mt-4 text-lg">
              A selection of commercial and domestic projects we&apos;ve
              completed across Bristol, Bath and the South West
            </p>
          </div>
        </div>
      </section>

      {/* Commercial Projects */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold">Commercial Projects</h2>
          <p className="text-muted-foreground mt-2">
            Large-scale developments and commercial refurbishments
          </p>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {commercialProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Domestic Projects */}
      <section className="border-border/50 bg-card/30 border-t py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold">Domestic Projects</h2>
          <p className="text-muted-foreground mt-2">
            Home improvements, extensions, and bespoke carpentry
          </p>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {domesticProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
