import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist, Unbounded } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

import { TRPCReactProvider } from "~/trpc/react";
import { ThemeProvider } from "~/components/theme-provider";
import { Nav } from "~/components/nav";
import { Footer } from "~/components/footer";
import { LocalBusinessJsonLd } from "~/components/json-ld";

const siteUrl = "https://clarkecarpentry.co.uk";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Clarke Carpentry Contractors Ltd | Bristol and Bath",
    template: "%s | Clarke Carpentry Contractors Ltd",
  },
  description:
    "Professional carpentry contractors serving Bristol, Bath and the South West. 15 years experience delivering quality carpentry for commercial and domestic projects. CSCS certified team.",
  keywords: [
    "carpentry contractors",
    "Bristol carpenters",
    "Bath carpenters",
    "South West carpentry",
    "first fix carpentry",
    "second fix carpentry",
    "commercial carpentry",
    "domestic carpentry",
    "new build carpentry",
    "extensions",
    "renovations",
  ],
  authors: [{ name: "Clarke Carpentry Contractors Ltd" }],
  creator: "Clarke Carpentry Contractors Ltd",
  publisher: "Clarke Carpentry Contractors Ltd",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: [
    { rel: "icon", url: "/favicon.ico" },
    { rel: "apple-touch-icon", url: "/apple-touch-icon.png" },
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteUrl,
    siteName: "Clarke Carpentry Contractors Ltd",
    title: "Clarke Carpentry Contractors Ltd | Bristol and Bath",
    description:
      "Professional carpentry contractors serving Bristol, Bath and the South West. 15 years experience delivering quality carpentry for commercial and domestic projects.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Clarke Carpentry Contractors Ltd",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clarke Carpentry Contractors Ltd | Bristol and Bath",
    description:
      "Professional carpentry contractors serving Bristol, Bath and the South West. 15 years experience delivering quality carpentry.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const unbounded = Unbounded({
  subsets: ["latin"],
  variable: "--font-unbounded",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} ${unbounded.variable}`} suppressHydrationWarning>
      <head>
        <LocalBusinessJsonLd />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <TRPCReactProvider>
            <Nav />
            {children}
            <Footer />
          </TRPCReactProvider>
        </ThemeProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
