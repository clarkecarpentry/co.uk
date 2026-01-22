import { type Metadata } from "next";
import { Card, CardContent } from "~/components/ui/card";
import { ContactForm } from "~/components/contact-form";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Clarke Carpentry Contractors Ltd for a quote or to discuss your carpentry project. Based in Keynsham, serving Bristol, Bath and the South West.",
  openGraph: {
    title: "Contact Us | Clarke Carpentry Contractors Ltd",
    description:
      "Get in touch with Clarke Carpentry Contractors Ltd for a quote or to discuss your carpentry project. Based in Keynsham, serving Bristol, Bath and the South West.",
    url: "/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Clarke Carpentry Contractors Ltd",
    description:
      "Get in touch with Clarke Carpentry Contractors Ltd for a quote or to discuss your carpentry project.",
  },
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="border-border/50 via-background to-background border-b bg-gradient-to-b from-neutral-900/50 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Contact Us
            </h1>
            <p className="text-muted-foreground mt-4 text-lg">
              Get in touch for a quote or to discuss your project
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-semibold">Send Us a Message</h2>
              <p className="text-muted-foreground mt-2">
                Fill out the form below and we&apos;ll get back to you as soon
                as possible.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-semibold">Contact Information</h3>
                  <dl className="mt-4 space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-green-500" />
                      <div>
                        <dt className="font-medium">Head Office</dt>
                        <dd className="text-muted-foreground mt-1 text-sm">
                          Unit 5 Wansdyke Workshops
                          <br />
                          Unity Road, Keynsham
                          <br />
                          Bristol BS31 1NH
                        </dd>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="mt-0.5 h-5 w-5 shrink-0 text-green-500" />
                      <div>
                        <dt className="font-medium">Phone</dt>
                        <dd className="text-muted-foreground mt-1 space-y-1 text-sm">
                          <a
                            href="tel:01225350376"
                            className="hover:text-foreground block"
                          >
                            01225 350376 (Office)
                          </a>
                          <a
                            href="tel:07540150412"
                            className="hover:text-foreground block"
                          >
                            07540 150412 (Mobile)
                          </a>
                        </dd>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="mt-0.5 h-5 w-5 shrink-0 text-green-500" />
                      <div>
                        <dt className="font-medium">Email</dt>
                        <dd className="text-muted-foreground mt-1 text-sm">
                          <a
                            href="mailto:info@clarkecarpentry.co.uk"
                            className="hover:text-foreground"
                          >
                            info@clarkecarpentry.co.uk
                          </a>
                        </dd>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="mt-0.5 h-5 w-5 shrink-0 text-green-500" />
                      <div>
                        <dt className="font-medium">Working Hours</dt>
                        <dd className="text-muted-foreground mt-1 text-sm">
                          Monday - Friday: 7:30am - 5:00pm
                          <br />
                          Saturday - Sunday: Closed
                        </dd>
                      </div>
                    </div>
                  </dl>
                </CardContent>
              </Card>

              {/* Quick Call CTA */}
              <Card className="border-green-500/20 bg-green-950/20">
                <CardContent className="p-6">
                  <h3 className="font-semibold">Prefer to Talk?</h3>
                  <p className="text-muted-foreground mt-2 text-sm">
                    Give us a call and speak directly with our team about your
                    project.
                  </p>
                  <a
                    href="tel:01225350376"
                    className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-md bg-green-600 px-4 py-3 font-medium text-white transition-colors hover:bg-green-500"
                  >
                    <Phone className="h-4 w-4" />
                    Call 01225 350376
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
