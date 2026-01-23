/**
 * TypeScript types for Sanity data.
 *
 * These types mirror the static data interfaces in src/lib/data/
 * to ensure type compatibility when switching between data sources.
 */

// ============================================================================
// Common Types
// ============================================================================

export interface SanityImage {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
  alt?: string
  caption?: string
  hotspot?: {
    x: number
    y: number
    height: number
    width: number
  }
  crop?: {
    top: number
    bottom: number
    left: number
    right: number
  }
}

// ============================================================================
// Services
// ============================================================================

export interface SanityService {
  _id: string
  name: string
  slug: string
  description: string
  features: string[]
  image?: SanityImage
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
  featuredImage?: SanityImage
  images?: SanityImage[]
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
  image?: SanityImage
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
