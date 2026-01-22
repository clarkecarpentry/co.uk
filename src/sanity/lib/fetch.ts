import 'server-only'

import {client} from './client'
import {
  servicesQuery,
  serviceBySlugQuery,
  projectsQuery,
  projectBySlugQuery,
  blogPostsQuery,
  blogPostBySlugQuery,
  testimonialsQuery,
  siteSettingsQuery,
} from './queries'

/**
 * Server-side Sanity fetch functions.
 *
 * These functions are for use in Server Components and server actions.
 * They use the Sanity client configured in ./client.ts
 *
 * Note: Until content is migrated to Sanity, these will return empty arrays/null.
 * The static data in src/lib/data/ remains the source of truth until migration.
 */

// ============================================================================
// Services
// ============================================================================

export async function getServices(): Promise<unknown[]> {
  return client.fetch(servicesQuery)
}

export async function getServiceBySlug(slug: string): Promise<unknown> {
  return client.fetch(serviceBySlugQuery, {slug})
}

// ============================================================================
// Projects
// ============================================================================

export async function getProjects(): Promise<unknown[]> {
  return client.fetch(projectsQuery)
}

export async function getProjectBySlug(slug: string): Promise<unknown> {
  return client.fetch(projectBySlugQuery, {slug})
}

// ============================================================================
// Blog Posts
// ============================================================================

export async function getBlogPosts(): Promise<unknown[]> {
  return client.fetch(blogPostsQuery)
}

export async function getBlogPostBySlug(slug: string): Promise<unknown> {
  return client.fetch(blogPostBySlugQuery, {slug})
}

// ============================================================================
// Testimonials
// ============================================================================

export async function getTestimonials(): Promise<unknown[]> {
  return client.fetch(testimonialsQuery)
}

// ============================================================================
// Site Settings
// ============================================================================

export async function getSiteSettings(): Promise<unknown> {
  return client.fetch(siteSettingsQuery)
}
