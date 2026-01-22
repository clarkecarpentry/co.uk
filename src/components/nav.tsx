"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Clarke Carpentry Logo"
            width={40}
            height={40}
            className="h-10 w-10"
          />
          <span className="text-lg font-semibold">Clarke Carpentry</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                pathname === link.href
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Contact */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:01225350376"
            className="flex items-center gap-2 rounded-full bg-green-600/10 px-4 py-2 text-sm font-medium text-green-500 ring-1 ring-green-500/20 transition-all duration-200 hover:bg-green-600/20 hover:ring-green-500/40"
          >
            <Phone className="h-4 w-4" />
            01225 350376
          </a>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-border/50 md:hidden">
          <nav className="container mx-auto flex flex-col px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "rounded-md px-3 py-3 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                  pathname === link.href
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-2 border-t border-border/50 pt-4">
              <a
                href="tel:01225350376"
                className="flex items-center gap-2 rounded-full bg-green-600/10 px-4 py-3 text-sm font-medium text-green-500 ring-1 ring-green-500/20"
              >
                <Phone className="h-4 w-4" />
                01225 350376
              </a>
              <a
                href="mailto:info@clarkecarpentry.co.uk"
                className="flex items-center gap-2 rounded-full bg-foreground/5 px-4 py-3 text-sm font-medium text-foreground/80 ring-1 ring-foreground/10"
              >
                <Mail className="h-4 w-4" />
                info@clarkecarpentry.co.uk
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
