/**
 * TypeScript types for Sanity data.
 *
 * These types mirror the static data interfaces in src/lib/data/
 * to ensure type compatibility when switching between data sources.
 */

// ============================================================================
// Services
// ============================================================================

export interface SanityService {
  _id: string
  name: string
  slug: string
  description: string
  features: string[]
  order?: number
}

// ============================================================================
// Projects
// ============================================================================

export interface SanityProject {
  _id: string
  name: string
  slug: string
  type: 'Commercial' | 'Domestic'
  client?: string
  description: string
  completedDate: string
  services: Array<{name: string; slug: string}> | string[]
}

// ============================================================================
// Testimonials
// ============================================================================

export interface SanityTestimonial {
  _id: string
  quote: string
  clientName: string
  company?: string
  project?: string
  featured?: boolean
  order?: number
}

// ============================================================================
// Blog Posts
// ============================================================================

export interface SanityBlogPost {
  _id: string
  title: string
  slug: string
  excerpt: string
  content?: unknown // Portable Text blocks
  author?: string
  publishedAt: string
  categories?: string[]
  relatedServices?: Array<{name: string; slug: string}>
}

// ============================================================================
// Site Settings
// ============================================================================

export interface SanitySiteSettings {
  _id: string
  companyName: string
  tagline?: string
  description?: string
  contact?: {
    address?: string
    phone?: string
    mobile?: string
    email?: string
  }
  social?: {
    facebook?: string
    instagram?: string
    linkedin?: string
  }
  serviceAreas?: string[]
  accreditations?: Array<{name: string; logo?: unknown}>
}
