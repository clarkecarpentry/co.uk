import { type Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Card, CardContent } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { ArrowLeft, Calendar, User, Phone, ArrowRight, BookOpen } from "lucide-react";
import { getBlogPosts, getBlogPostBySlug, getSiteSettings } from "~/sanity/lib/fetch";
import { PortableText } from "~/components/portable-text";
import type { PortableTextBlock } from "next-sanity";
import { ArticleJsonLd } from "~/components/json-ld";
import { urlFor } from "~/sanity/lib/image";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found | Clarke Carpentry",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | Clarke Carpentry Contractors Ltd`,
      description: post.excerpt,
      url: `/blog/${slug}`,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author ?? "Mike Clarke"],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | Clarke Carpentry Contractors Ltd`,
      description: post.excerpt,
    },
    alternates: {
      canonical: `/blog/${slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const [postData, allPosts, settings] = await Promise.all([
    getBlogPostBySlug(slug),
    getBlogPosts(),
    getSiteSettings(),
  ]);
  const phone = settings?.contact?.mobile ?? "07540 150412";
  const phoneTel = phone.replace(/\s/g, '');

  if (!postData) {
    notFound();
  }

  const { excerpt, title, publishedAt, author, categories, content, relatedServices, image } = postData;

  // Get other posts for "More Articles" section (exclude current post)
  const otherPosts = allPosts.filter(p => p.slug !== slug).slice(0, 2);

  return (
    <main className="min-h-screen">
      <ArticleJsonLd
        title={title}
        description={excerpt}
        slug={slug}
        publishedAt={publishedAt}
        author={author}
      />

      {/* Article Header */}
      <article>
        {/* Hero Section */}
        <header className="border-border/50 relative overflow-hidden border-b bg-gradient-to-b from-neutral-900/50 via-background to-background">
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-1/4 -right-1/4 h-96 w-96 rounded-full bg-green-500/[0.03] blur-3xl" />
            <div className="absolute -bottom-1/4 -left-1/4 h-80 w-80 rounded-full bg-green-500/[0.03] blur-3xl" />
          </div>

          <div className="relative container mx-auto px-4 py-12 lg:py-16">
            <div className="mx-auto max-w-3xl">
              {/* Back Link */}
              <Link
                href="/blog"
                className="text-muted-foreground hover:text-foreground inline-flex items-center text-sm transition-colors"
              >
                <ArrowLeft className="mr-1.5 h-4 w-4" />
                Back to Blog
              </Link>

              {/* Meta */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                {categories && categories.length > 0 && (
                  <Badge className="bg-green-500/10 text-green-400 ring-1 ring-green-500/20">
                    {categories[0]}
                  </Badge>
                )}
                <div className="text-muted-foreground flex items-center gap-1.5 text-sm">
                  <Calendar className="h-4 w-4" />
                  {new Date(publishedAt).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </div>
                {author && (
                  <div className="text-muted-foreground flex items-center gap-1.5 text-sm">
                    <User className="h-4 w-4" />
                    {author}
                  </div>
                )}
              </div>

              {/* Title */}
              <h1 className="mt-6 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                {title}
              </h1>

              {/* Excerpt/Lead */}
              <p className="text-muted-foreground mt-6 text-xl leading-relaxed">
                {excerpt}
              </p>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        {image && (
          <div className="container mx-auto px-4 py-8 lg:py-12">
            <div className="mx-auto max-w-4xl">
              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-neutral-800/50 ring-1 ring-white/10">
                <Image
                  src={urlFor(image).width(1200).height(675).url()}
                  alt={image.alt ?? title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 1000px"
                  priority
                />
              </div>
            </div>
          </div>
        )}

        {/* Content */}
        <div className="container mx-auto px-4 pb-16">
          <div className="mx-auto max-w-3xl">
            {/* Main Content */}
            {content ? (
              <div className="prose-article">
                <PortableText value={content as PortableTextBlock[]} />
              </div>
            ) : null}

            {/* Related Services */}
            {relatedServices && relatedServices.length > 0 && (
              <div className="mt-12 rounded-xl border border-border/50 bg-card/30 p-6">
                <h3 className="text-lg font-semibold">Related Services</h3>
                <p className="text-muted-foreground mt-1 text-sm">
                  Explore our services mentioned in this article
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {relatedServices.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                    >
                      <Badge
                        variant="secondary"
                        className="bg-neutral-800/50 px-3 py-1.5 text-sm hover:bg-neutral-700/50 transition-colors"
                      >
                        {service.name}
                      </Badge>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* CTA Section */}
            <Card className="mt-12 border-green-500/20 bg-gradient-to-br from-green-950/30 to-green-900/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold">
                  Ready to Discuss Your Project?
                </h3>
                <p className="text-muted-foreground mt-3 text-lg">
                  Get in touch to discuss your carpentry requirements. We
                  provide free quotes for all work.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Button asChild size="lg" className="bg-green-600 hover:bg-green-500">
                    <a href={`tel:${phoneTel}`}>
                      <Phone className="mr-2 h-4 w-4" />
                      Call {phone}
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/contact">Request a Quote</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </article>

      {/* More Articles Section */}
      {otherPosts.length > 0 && (
        <section className="border-border/50 bg-card/30 border-t py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-2xl font-semibold">More Articles</h2>
              <p className="text-muted-foreground mt-2">
                Continue reading from our blog
              </p>

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {otherPosts.map((post) => (
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
                            sizes="(max-width: 640px) 100vw, 50vw"
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

              <div className="mt-10 text-center">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-sm font-medium text-green-500 hover:text-green-400"
                >
                  View all articles
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
