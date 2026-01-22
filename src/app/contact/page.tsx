import { type Metadata } from "next";
import { Card, CardContent } from "~/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Clarke Carpentry Contractors Ltd",
  description:
    "Get in touch with Clarke Carpentry Contractors Ltd for a quote or to discuss your carpentry project. Based in Keynsham, serving Bristol, Bath and the South West.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="border-b border-border/50 bg-gradient-to-b from-neutral-900/50 via-background to-background py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Contact Us
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
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
              <p className="mt-2 text-muted-foreground">
                Fill out the form below and we&apos;ll get back to you as soon
                as possible.
              </p>
              <form className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="mt-1 block w-full rounded-md border border-border/50 bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="mt-1 block w-full rounded-md border border-border/50 bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
                      placeholder="Smith"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full rounded-md border border-border/50 bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium">
                    Phone (optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="mt-1 block w-full rounded-md border border-border/50 bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
                    placeholder="07123 456789"
                  />
                </div>
                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium"
                  >
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="mt-1 block w-full rounded-md border border-border/50 bg-background px-3 py-2 text-sm focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
                  >
                    <option value="">Select a service...</option>
                    <option value="project-management">
                      Project Management
                    </option>
                    <option value="first-fix">First Fix Carpentry</option>
                    <option value="second-fix">Second Fix Carpentry</option>
                    <option value="dry-lining">Dry Lining</option>
                    <option value="extensions">Extensions</option>
                    <option value="traditional-cut-roofs">
                      Traditional Cut Roofs
                    </option>
                    <option value="new-build">New Build</option>
                    <option value="renovations">Renovations</option>
                    <option value="bespoke-joinery">Bespoke Joinery</option>
                    <option value="kitchen-fitting">Kitchen Fitting</option>
                    <option value="timber-frame">
                      Timber Frame Construction
                    </option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="mt-1 block w-full rounded-md border border-border/50 bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-md bg-green-600 px-4 py-3 font-medium text-white transition-colors hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-background"
                >
                  Send Message
                </button>
              </form>
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
                        <dd className="mt-1 text-sm text-muted-foreground">
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
                        <dd className="mt-1 space-y-1 text-sm text-muted-foreground">
                          <a
                            href="tel:01225350376"
                            className="block hover:text-foreground"
                          >
                            01225 350376 (Office)
                          </a>
                          <a
                            href="tel:07540150412"
                            className="block hover:text-foreground"
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
                        <dd className="mt-1 text-sm text-muted-foreground">
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
                        <dd className="mt-1 text-sm text-muted-foreground">
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
                  <p className="mt-2 text-sm text-muted-foreground">
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
