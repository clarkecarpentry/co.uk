import { PortableText as SanityPortableText } from "next-sanity";
import type { PortableTextBlock } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "~/sanity/lib/image";

// Custom components for Portable Text rendering
const components = {
  types: {
    image: ({
      value,
    }: {
      value: { asset: { _ref: string }; alt?: string; caption?: string };
    }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <figure className="my-8">
          <Image
            src={urlFor(value).width(800).url()}
            alt={value.alt ?? "Blog image"}
            width={800}
            height={450}
            className="rounded-lg"
          />
          {value.caption && (
            <figcaption className="text-muted-foreground mt-2 text-center text-sm">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
  marks: {
    link: ({
      children,
      value,
    }: {
      children: React.ReactNode;
      value?: { href?: string };
    }) => {
      const href = value?.href ?? "#";
      const isExternal = href.startsWith("http");
      if (isExternal) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 underline hover:text-green-400"
          >
            {children}
          </a>
        );
      }
      return (
        <Link href={href} className="text-green-500 underline hover:text-green-400">
          {children}
        </Link>
      );
    },
  },
  block: {
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 className="mb-4 mt-8 text-2xl font-semibold">{children}</h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 className="mb-3 mt-6 text-xl font-semibold">{children}</h3>
    ),
    h4: ({ children }: { children?: React.ReactNode }) => (
      <h4 className="mb-2 mt-4 text-lg font-semibold">{children}</h4>
    ),
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="text-muted-foreground mb-4 leading-relaxed">{children}</p>
    ),
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <blockquote className="border-l-4 border-green-500/30 pl-4 italic text-muted-foreground my-6">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <ul className="text-muted-foreground mb-4 list-disc space-y-2 pl-6">
        {children}
      </ul>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <ol className="text-muted-foreground mb-4 list-decimal space-y-2 pl-6">
        {children}
      </ol>
    ),
  },
};

interface PortableTextProps {
  value: PortableTextBlock[];
}

export function PortableText({ value }: PortableTextProps) {
  return <SanityPortableText value={value} components={components} />;
}
