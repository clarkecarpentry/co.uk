/**
 * GROQ queries for fetching content from Sanity.
 * These queries are used by the Sanity client to fetch content.
 *
 * GROQ Reference: https://www.sanity.io/docs/groq
 */

// ============================================================================
// Services
// ============================================================================

export const servicesQuery = `*[_type == "service"] | order(order asc) {
  _id,
  name,
  "slug": slug.current,
  description,
  features,
  image
}`

export const serviceBySlugQuery = `*[_type == "service" && slug.current == $slug][0] {
  _id,
  name,
  "slug": slug.current,
  description,
  features,
  image
}`

// ============================================================================
// Projects
// ============================================================================

export const projectsQuery = `*[_type == "project"] | order(completedDate desc) {
  _id,
  name,
  "slug": slug.current,
  type,
  client,
  description,
  completedDate,
  "services": services[]->{ name, "slug": slug.current },
  featuredImage
}`

export const projectBySlugQuery = `*[_type == "project" && slug.current == $slug][0] {
  _id,
  name,
  "slug": slug.current,
  type,
  client,
  description,
  completedDate,
  "services": services[]->{ name, "slug": slug.current },
  images,
  featuredImage
}`

// ============================================================================
// Blog Posts
// ============================================================================

export const blogPostsQuery = `*[_type == "blogPost"] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  author,
  publishedAt,
  image,
  categories
}`

export const blogPostBySlugQuery = `*[_type == "blogPost" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  content,
  author,
  publishedAt,
  image,
  categories,
  "relatedServices": relatedServices[]->{ name, "slug": slug.current }
}`

// ============================================================================
// Testimonials
// ============================================================================

export const testimonialsQuery = `*[_type == "testimonial"] | order(order asc) {
  _id,
  quote,
  clientName,
  company,
  project
}`

export const featuredTestimonialsQuery = `*[_type == "testimonial" && featured == true] | order(order asc) {
  _id,
  quote,
  clientName,
  company,
  project
}`

// ============================================================================
// Site Settings
// ============================================================================

export const siteSettingsQuery = `*[_type == "siteSettings"][0] {
  _id,
  companyName,
  tagline,
  description,
  contact,
  social,
  serviceAreas,
  accreditations
}`
