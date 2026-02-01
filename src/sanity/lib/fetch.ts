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
  featuredTestimonialsQuery,
  siteSettingsQuery,
} from './queries'
import type {
  SanityService,
  SanityProject,
  SanityTestimonial,
  SanityBlogPost,
  SanitySiteSettings,
} from './types'

// Static data imports for fallback
import {services as staticServices, getServiceBySlug as getStaticServiceBySlug} from '~/lib/data/services'
import {projects as staticProjects, getProjectBySlug as getStaticProjectBySlug} from '~/lib/data/projects'
import {testimonials as staticTestimonials} from '~/lib/data/testimonials'

/**
 * Server-side Sanity fetch functions with static data fallback.
 *
 * These functions are for use in Server Components and server actions.
 * They fetch from Sanity first, falling back to static data if empty.
 */

// ============================================================================
// Services
// ============================================================================

export async function getServices(): Promise<SanityService[]> {
  const sanityData = await client.fetch<SanityService[]>(servicesQuery)
  if (sanityData && sanityData.length > 0) {
    return sanityData
  }
  // Fallback to static data
  return staticServices.map((s, i) => ({
    _id: `static-service-${s.slug}`,
    name: s.name,
    slug: s.slug,
    description: s.description,
    features: s.features,
    order: i,
  }))
}

export async function getServiceBySlug(slug: string): Promise<SanityService | null> {
  const sanityData = await client.fetch<SanityService | null>(serviceBySlugQuery, {slug})
  if (sanityData) {
    return sanityData
  }
  // Fallback to static data
  const staticService = getStaticServiceBySlug(slug)
  if (staticService) {
    const index = staticServices.findIndex((s) => s.slug === slug)
    return {
      _id: `static-service-${staticService.slug}`,
      name: staticService.name,
      slug: staticService.slug,
      description: staticService.description,
      features: staticService.features,
      order: index,
    }
  }
  return null
}

// ============================================================================
// Projects
// ============================================================================

export async function getProjects(): Promise<SanityProject[]> {
  const sanityData = await client.fetch<SanityProject[]>(projectsQuery)
  if (sanityData && sanityData.length > 0) {
    return sanityData
  }
  // Fallback to static data
  return staticProjects.map((p) => ({
    _id: `static-project-${p.slug}`,
    name: p.name,
    slug: p.slug,
    type: p.type,
    client: p.client,
    description: p.description,
    completedDate: p.completedDate,
    services: p.services,
  }))
}

export async function getProjectBySlug(slug: string): Promise<SanityProject | null> {
  const sanityData = await client.fetch<SanityProject | null>(projectBySlugQuery, {slug})
  if (sanityData) {
    return sanityData
  }
  // Fallback to static data
  const staticProject = getStaticProjectBySlug(slug)
  if (staticProject) {
    return {
      _id: `static-project-${staticProject.slug}`,
      name: staticProject.name,
      slug: staticProject.slug,
      type: staticProject.type,
      client: staticProject.client,
      description: staticProject.description,
      completedDate: staticProject.completedDate,
      services: staticProject.services,
    }
  }
  return null
}

// ============================================================================
// Testimonials
// ============================================================================

export async function getTestimonials(): Promise<SanityTestimonial[]> {
  const sanityData = await client.fetch<SanityTestimonial[]>(testimonialsQuery)
  if (sanityData && sanityData.length > 0) {
    return sanityData
  }
  // Fallback to static data
  return staticTestimonials.map((t, i) => ({
    _id: `static-testimonial-${i}`,
    quote: t.quote,
    clientName: t.clientName,
    company: t.company,
    project: t.project,
    featured: i < 3,
    order: i,
  }))
}

export async function getFeaturedTestimonials(): Promise<SanityTestimonial[]> {
  const sanityData = await client.fetch<SanityTestimonial[]>(featuredTestimonialsQuery)
  if (sanityData && sanityData.length > 0) {
    return sanityData
  }
  // Fallback to first 3 static testimonials
  return staticTestimonials.slice(0, 3).map((t, i) => ({
    _id: `static-testimonial-${i}`,
    quote: t.quote,
    clientName: t.clientName,
    company: t.company,
    project: t.project,
    featured: true,
    order: i,
  }))
}

// ============================================================================
// Blog Posts
// ============================================================================

export async function getBlogPosts(): Promise<SanityBlogPost[]> {
  return client.fetch<SanityBlogPost[]>(blogPostsQuery)
}

export async function getBlogPostBySlug(slug: string): Promise<SanityBlogPost | null> {
  return client.fetch<SanityBlogPost | null>(blogPostBySlugQuery, {slug})
}

// ============================================================================
// Site Settings
// ============================================================================

export async function getSiteSettings(): Promise<SanitySiteSettings | null> {
  return client.fetch<SanitySiteSettings | null>(siteSettingsQuery)
}
