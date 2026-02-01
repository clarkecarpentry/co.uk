import { type Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "~/components/ui/badge";
import { ArrowRight, Calendar, BookOpen } from "lucide-react";
import { getBlogPosts } from "~/sanity/lib/fetch";
import { urlFor } from "~/sanity/lib/image";

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
              <div className="mb-6 flex justify-center">
                <div className="rounded-full bg-green-500/10 p-3 ring-1 ring-green-500/20">
                  <BookOpen className="h-8 w-8 text-green-500" />
                </div>
              </div>
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

  const featuredPost = posts[0];
  const remainingPosts = posts.slice(1);

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
            <div className="mb-6 flex justify-center">
              <div className="rounded-full bg-green-500/10 p-3 ring-1 ring-green-500/20">
                <BookOpen className="h-8 w-8 text-green-500" />
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Blog
            </h1>
            <p className="text-muted-foreground mt-4 text-lg">
              Insights, tips, and project spotlights from 15+ years in the trade
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl">
              <Link href={`/blog/${featuredPost.slug}`} className="group block">
                <article className="grid gap-8 lg:grid-cols-2 lg:items-center">
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-800/50 ring-1 ring-white/10">
                    {featuredPost.image ? (
                      <Image
                        src={urlFor(featuredPost.image).width(800).height(600).url()}
                        alt={featuredPost.image.alt ?? featuredPost.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        priority
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center">
                        <BookOpen className="h-16 w-16 text-neutral-700" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col">
                    <div className="flex flex-wrap items-center gap-3">
                      {featuredPost.categories && featuredPost.categories.length > 0 && (
                        <Badge className="bg-green-500/10 text-green-400 ring-1 ring-green-500/20 hover:bg-green-500/20">
                          {featuredPost.categories[0]}
                        </Badge>
                      )}
                      <div className="text-muted-foreground flex items-center gap-1.5 text-sm">
                        <Calendar className="h-4 w-4" />
                        {new Date(featuredPost.publishedAt).toLocaleDateString("en-GB", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </div>
                    </div>

                    <h2 className="mt-4 text-2xl font-bold tracking-tight transition-colors group-hover:text-green-500 sm:text-3xl lg:text-4xl">
                      {featuredPost.title}
                    </h2>

                    <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
                      {featuredPost.excerpt}
                    </p>

                    <div className="mt-6 flex items-center gap-2 font-medium text-green-500">
                      <span>Read article</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </article>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Remaining Posts */}
      {remainingPosts.length > 0 && (
        <section className="border-border/50 bg-card/30 border-t py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl">
              <h2 className="mb-10 text-xl font-semibold">More Articles</h2>

              <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                {remainingPosts.map((post) => (
                  <Link key={post._id} href={`/blog/${post.slug}`} className="group block">
                    <article className="flex h-full flex-col">
                      {/* Image */}
                      <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-neutral-800/50 ring-1 ring-white/5">
                        {post.image ? (
                          <Image
                            src={urlFor(post.image).width(500).height(313).url()}
                            alt={post.image.alt ?? post.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
                        ) : (
                          <div className="flex h-full items-center justify-center">
                            <BookOpen className="h-10 w-10 text-neutral-700" />
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="mt-4 flex flex-1 flex-col">
                        <div className="flex flex-wrap items-center gap-2">
                          {post.categories && post.categories.length > 0 && (
                            <Badge
                              variant="secondary"
                              className="bg-neutral-800/50 text-neutral-400 text-xs"
                            >
                              {post.categories[0]}
                            </Badge>
                          )}
                          <span className="text-muted-foreground text-xs">
                            {new Date(post.publishedAt).toLocaleDateString("en-GB", {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            })}
                          </span>
                        </div>

                        <h3 className="mt-3 text-lg font-semibold leading-snug transition-colors group-hover:text-green-500">
                          {post.title}
                        </h3>

                        <p className="text-muted-foreground mt-2 line-clamp-2 flex-1 text-sm">
                          {post.excerpt}
                        </p>

                        <div className="mt-4 flex items-center gap-1.5 text-sm font-medium text-green-500">
                          <span>Read more</span>
                          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-semibold">Have a Project in Mind?</h2>
            <p className="text-muted-foreground mt-2">
              Get in touch to discuss your carpentry requirements with our experienced team.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 font-medium text-white transition-colors hover:bg-green-500"
            >
              Get a Free Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
