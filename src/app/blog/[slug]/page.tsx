import { type Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Card, CardContent } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { ArrowLeft, Calendar, User, Phone } from "lucide-react";
import { getBlogPosts, getBlogPostBySlug } from "~/sanity/lib/fetch";
import { PortableText } from "~/components/portable-text";
import type { PortableTextBlock } from "next-sanity";
import { ArticleJsonLd } from "~/components/json-ld";

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
  const postData = await getBlogPostBySlug(slug);

  if (!postData) {
    notFound();
  }

  const { excerpt, title, publishedAt, author, categories, content, relatedServices } = postData;

  return (
    <main className="min-h-screen">
      <ArticleJsonLd
        title={title}
        description={excerpt}
        slug={slug}
        publishedAt={publishedAt}
        author={author}
      />
      {/* Hero Section */}
      <section className="border-border/50 via-background to-background border-b bg-gradient-to-b from-neutral-900/50 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <Link
              href="/blog"
              className="text-muted-foreground hover:text-foreground inline-flex items-center text-sm"
            >
              <ArrowLeft className="mr-1 h-4 w-4" />
              Back to Blog
            </Link>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              {categories && categories.length > 0 && (
                <Badge
                  variant="secondary"
                  className="bg-neutral-800/50 text-neutral-300"
                >
                  {categories[0]}
                </Badge>
              )}
            </div>
            <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              {title}
            </h1>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {new Date(publishedAt).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </div>
              {author && (
                <div className="flex items-center gap-1.5">
                  <User className="h-4 w-4" />
                  {author}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            {/* Excerpt/Lead */}
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {excerpt}
            </p>

            {/* Main Content */}
            {content ? (
              <div className="prose prose-invert max-w-none">
                <PortableText value={content as PortableTextBlock[]} />
              </div>
            ) : null}

            {/* CTA Section */}
            <Card className="mt-12 border-green-500/20 bg-green-950/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold">
                  Ready to Discuss Your Project?
                </h3>
                <p className="text-muted-foreground mt-2">
                  Get in touch to discuss your carpentry requirements. We
                  provide free quotes for all work.
                </p>
                <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                  <Button asChild className="bg-green-600 hover:bg-green-500">
                    <a href="tel:01225350376">
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

            {/* Related Services */}
            {relatedServices && relatedServices.length > 0 && (
              <div className="mt-8">
                <h3 className="text-lg font-semibold">Related Services</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {relatedServices.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                    >
                      <Badge
                        variant="secondary"
                        className="bg-neutral-800/50 hover:bg-neutral-700/50 transition-colors"
                      >
                        {service.name}
                      </Badge>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
