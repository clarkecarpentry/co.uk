import { type Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug: _slug } = await params;

  return {
    title: `Blog Post | Clarke Carpentry Contractors Ltd`,
    description: "Read our latest blog post about carpentry and construction.",
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug: _slug } = await params;

  // Placeholder - will be replaced with Sanity data fetching
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="border-b border-border/50 bg-gradient-to-b from-neutral-900/50 via-background to-background py-16">
        <div className="container mx-auto px-4">
          <Link
            href="/blog"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="mr-1 h-4 w-4" />
            Back to Blog
          </Link>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Blog Post
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <div className="rounded-lg border border-amber-500/20 bg-amber-950/20 p-8 text-center">
              <h2 className="text-xl font-semibold text-amber-400">
                Coming Soon
              </h2>
              <p className="mt-2 text-muted-foreground">
                This blog post is not yet available. Check back soon for expert
                carpentry advice and project insights.
              </p>
              <Link
                href="/blog"
                className="mt-4 inline-flex items-center text-sm font-medium text-green-500 hover:text-green-400"
              >
                <ArrowLeft className="mr-1 h-4 w-4" />
                Return to Blog
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
