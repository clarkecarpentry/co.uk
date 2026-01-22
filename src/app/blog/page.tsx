import { type Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { getBlogPosts } from "~/sanity/lib/fetch";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "News, tips, and insights from Clarke Carpentry Contractors Ltd. Read about carpentry projects, industry updates, and expert advice.",
  openGraph: {
    title: "Blog | Clarke Carpentry Contractors Ltd",
    description:
      "News, tips, and insights from Clarke Carpentry Contractors Ltd. Read about carpentry projects, industry updates, and expert advice.",
    url: "/blog",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Clarke Carpentry Contractors Ltd",
    description:
      "News, tips, and insights from Clarke Carpentry Contractors Ltd. Read about carpentry projects and expert advice.",
  },
  alternates: {
    canonical: "/blog",
  },
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  // Show empty state if no posts
  if (!posts || posts.length === 0) {
    return (
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="border-border/50 via-background to-background border-b bg-gradient-to-b from-neutral-900/50 py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Blog
              </h1>
              <p className="text-muted-foreground mt-4 text-lg">
                News, tips, and insights from our team of expert carpenters
              </p>
            </div>
          </div>
        </section>

        {/* Empty State */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <div className="rounded-lg border border-amber-500/20 bg-amber-950/20 p-8 text-center">
                <h2 className="text-xl font-semibold text-amber-400">
                  Coming Soon
                </h2>
                <p className="text-muted-foreground mt-2">
                  Blog posts are on the way. Check back soon for expert
                  carpentry advice and project insights.
                </p>
                <Link
                  href="/"
                  className="mt-4 inline-flex items-center text-sm font-medium text-green-500 hover:text-green-400"
                >
                  Return to Home
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="border-border/50 via-background to-background border-b bg-gradient-to-b from-neutral-900/50 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Blog
            </h1>
            <p className="text-muted-foreground mt-4 text-lg">
              News, tips, and insights from our team of expert carpenters
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl space-y-6">
            {posts.map((post) => (
              <Link key={post._id} href={`/blog/${post.slug}`}>
                <Card className="group border-border/50 hover:bg-card/80 transition-all duration-200 hover:border-green-500/30">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3">
                      {post.categories && post.categories.length > 0 && (
                        <Badge
                          variant="secondary"
                          className="bg-neutral-800/50 text-neutral-300"
                        >
                          {post.categories[0]}
                        </Badge>
                      )}
                      <span className="text-muted-foreground text-xs">
                        {new Date(post.publishedAt).toLocaleDateString("en-GB", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                    <h2 className="mt-3 text-xl font-semibold group-hover:text-green-500 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground mt-2">{post.excerpt}</p>
                    <div className="mt-4 flex items-center text-sm font-medium text-green-500">
                      Read more
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
