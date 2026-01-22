import { type Metadata } from "next";
import { Card, CardContent } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog | Clarke Carpentry Contractors Ltd",
  description:
    "News, tips, and insights from Clarke Carpentry Contractors Ltd. Read about carpentry projects, industry updates, and expert advice.",
};

// Placeholder blog posts - will be replaced with Sanity data
const placeholderPosts = [
  {
    slug: "choosing-right-carpentry-contractor",
    title: "How to Choose the Right Carpentry Contractor for Your Project",
    excerpt:
      "Selecting the right carpentry contractor is crucial for your project's success. Here's what to look for when making your decision.",
    date: "Coming Soon",
    category: "Advice",
  },
  {
    slug: "first-fix-vs-second-fix",
    title: "First Fix vs Second Fix Carpentry: What's the Difference?",
    excerpt:
      "Understanding the difference between first fix and second fix carpentry can help you better plan your construction project.",
    date: "Coming Soon",
    category: "Education",
  },
  {
    slug: "sustainable-timber-construction",
    title: "The Benefits of Sustainable Timber Frame Construction",
    excerpt:
      "Timber frame construction offers numerous environmental and practical benefits. Learn why more people are choosing this method.",
    date: "Coming Soon",
    category: "Industry",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="border-b border-border/50 bg-gradient-to-b from-neutral-900/50 via-background to-background py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Blog
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              News, tips, and insights from our team of expert carpenters
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <div className="rounded-lg border border-amber-500/20 bg-amber-950/20 p-4 text-center">
              <p className="text-sm text-amber-400">
                Blog posts coming soon! Check back for expert carpentry advice
                and project insights.
              </p>
            </div>

            <div className="mt-8 space-y-6">
              {placeholderPosts.map((post) => (
                <Card
                  key={post.slug}
                  className="border-border/50 opacity-60 transition-opacity hover:opacity-80"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3">
                      <Badge
                        variant="secondary"
                        className="bg-neutral-800/50 text-neutral-400"
                      >
                        {post.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {post.date}
                      </span>
                    </div>
                    <h2 className="mt-3 text-xl font-semibold">{post.title}</h2>
                    <p className="mt-2 text-muted-foreground">{post.excerpt}</p>
                    <div className="mt-4 flex items-center text-sm font-medium text-muted-foreground">
                      Coming soon
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
