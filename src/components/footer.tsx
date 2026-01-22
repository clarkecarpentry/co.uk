import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  services: [
    { href: "/services/first-fix", label: "First Fix Carpentry" },
    { href: "/services/second-fix", label: "Second Fix Carpentry" },
    { href: "/services/extensions", label: "Extensions" },
    { href: "/services/new-build", label: "New Build" },
    { href: "/services/kitchen-fitting", label: "Kitchen Fitting" },
    { href: "/services", label: "View All Services" },
  ],
  company: [
    { href: "/about", label: "About Us" },
    { href: "/projects", label: "Our Projects" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ],
};

export function Footer() {
  return (
    <footer className="border-border/50 bg-card/30 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold">Clarke Carpentry</h3>
            <p className="text-muted-foreground mt-2 text-sm">
              Specialist carpenters covering projects across Bristol, Bath and
              the South West. Over 10 years experience delivering high quality
              carpentry at a fair price.
            </p>
            <div className="mt-4 flex gap-2">
              <span className="rounded-full bg-green-950/50 px-2 py-1 text-xs text-green-400 ring-1 ring-green-500/20">
                CITB
              </span>
              <span className="rounded-full bg-green-950/50 px-2 py-1 text-xs text-green-400 ring-1 ring-green-500/20">
                CSCS
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-muted-foreground text-sm font-semibold tracking-wider uppercase">
              Services
            </h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-muted-foreground text-sm font-semibold tracking-wider uppercase">
              Company
            </h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-muted-foreground text-sm font-semibold tracking-wider uppercase">
              Contact
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="text-muted-foreground flex items-start gap-2 text-sm">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>
                  Unit 5 Wansdyke Workshops
                  <br />
                  Unity Road, Keynsham
                  <br />
                  Bristol BS31 1NH
                </span>
              </li>
              <li>
                <a
                  href="tel:01225350376"
                  className="text-muted-foreground hover:text-foreground flex items-center gap-2 text-sm transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  01225 350376
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@clarkecarpentry.co.uk"
                  className="text-muted-foreground hover:text-foreground flex items-center gap-2 text-sm transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  info@clarkecarpentry.co.uk
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-border/50 text-muted-foreground mt-12 border-t pt-6 text-center text-sm">
          &copy; {new Date().getFullYear()} Clarke Carpentry Contractors Ltd.
          All rights reserved.
        </div>
      </div>
    </footer>
  );
}
