/**
 * JSON-LD Structured Data Components
 *
 * Schema.org markup for SEO - LocalBusiness, Service, and Article schemas.
 */

interface LocalBusinessProps {
  url?: string;
  telephone?: string;
}

export function LocalBusinessJsonLd({ url = "https://clarkecarpentry.co.uk", telephone = "+447540150412" }: LocalBusinessProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${url}/#organization`,
    name: "Clarke Carpentry Contractors Ltd",
    description:
      "Professional carpentry contractors serving Bristol, Bath and the South West. 15 years experience delivering quality carpentry for commercial and domestic projects.",
    url: url,
    logo: `${url}/logo.png`,
    image: `${url}/og-image.png`,
    telephone: telephone,
    email: "info@clarkecarpentry.co.uk",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Unit 5 Wansdyke Workshops, Unity Road",
      addressLocality: "Keynsham",
      addressRegion: "Bristol",
      postalCode: "BS31 1NH",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.4133,
      longitude: -2.4969,
    },
    areaServed: [
      {
        "@type": "City",
        name: "Bristol",
      },
      {
        "@type": "City",
        name: "Bath",
      },
      {
        "@type": "State",
        name: "South West England",
      },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:30",
        closes: "17:00",
      },
    ],
    priceRange: "$$",
    paymentAccepted: "Cash, Credit Card, Bank Transfer",
    currenciesAccepted: "GBP",
    sameAs: [],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Carpentry Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "First Fix Carpentry",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Second Fix Carpentry",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "New Build Carpentry",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Extensions",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Renovations",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

interface ServiceJsonLdProps {
  name: string;
  description: string;
  slug: string;
  url?: string;
}

export function ServiceJsonLd({
  name,
  description,
  slug,
  url = "https://clarkecarpentry.co.uk",
}: ServiceJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}/services/${slug}#service`,
    name: name,
    description: description,
    url: `${url}/services/${slug}`,
    provider: {
      "@type": "LocalBusiness",
      "@id": `${url}/#organization`,
      name: "Clarke Carpentry Contractors Ltd",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Bristol",
      },
      {
        "@type": "City",
        name: "Bath",
      },
      {
        "@type": "State",
        name: "South West England",
      },
    ],
    serviceType: "Carpentry",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

interface ArticleJsonLdProps {
  title: string;
  description: string;
  slug: string;
  publishedAt: string;
  author?: string;
  url?: string;
}

export function ArticleJsonLd({
  title,
  description,
  slug,
  publishedAt,
  author = "Mike Clarke",
  url = "https://clarkecarpentry.co.uk",
}: ArticleJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}/blog/${slug}#article`,
    headline: title,
    description: description,
    url: `${url}/blog/${slug}`,
    datePublished: publishedAt,
    dateModified: publishedAt,
    author: {
      "@type": "Person",
      name: author,
    },
    publisher: {
      "@type": "Organization",
      "@id": `${url}/#organization`,
      name: "Clarke Carpentry Contractors Ltd",
      logo: {
        "@type": "ImageObject",
        url: `${url}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${url}/blog/${slug}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

interface BreadcrumbJsonLdProps {
  items: Array<{
    name: string;
    url: string;
  }>;
}

export function BreadcrumbJsonLd({ items }: BreadcrumbJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
