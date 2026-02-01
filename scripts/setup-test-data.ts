/**
 * Test data setup script - migrates content to development dataset with a test marker.
 *
 * This script is run before E2E tests to:
 * 1. Populate the development dataset with test data
 * 2. Add a TEST_MARKER to one service name to verify content comes from Sanity
 *
 * Usage:
 *   NEXT_PUBLIC_SANITY_DATASET=development pnpm test:setup
 *
 * The marker allows E2E tests to verify that:
 * - Content is actually being fetched from Sanity (not static fallback)
 * - The correct dataset (development) is being used
 */

import {createClient} from '@sanity/client'
import {services} from '../src/lib/data/services'
import {projects} from '../src/lib/data/projects'
import {testimonials} from '../src/lib/data/testimonials'
import {blogPosts} from '../src/lib/data/blog-posts'

// Test marker that will be prepended to the first service name
export const TEST_MARKER = '[TEST]'

// Check for API key
const token = process.env.SANITY_API_KEY
if (!token) {
  console.error('❌ SANITY_API_KEY environment variable is required')
  console.error('   Get a token from: https://www.sanity.io/manage/project/07w52gq6/api')
  process.exit(1)
}

// Get dataset from env var - should be 'development' for tests
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'development'

if (dataset === 'production') {
  console.error('❌ Cannot run test setup against production dataset!')
  console.error('   Set NEXT_PUBLIC_SANITY_DATASET=development')
  process.exit(1)
}

// Create client with write access
const client = createClient({
  projectId: '07w52gq6',
  dataset,
  apiVersion: '2026-01-22',
  token,
  useCdn: false,
})

// Generate a deterministic ID from a slug
function slugToId(type: string, slug: string): string {
  return `${type}-${slug}`
}

async function migrateServices() {
  console.log('\n📦 Migrating services (with test marker on first service)...')

  for (let i = 0; i < services.length; i++) {
    const service = services[i]!

    // Add TEST_MARKER to the first service name
    const name = i === 0 ? `${TEST_MARKER} ${service.name}` : service.name

    const doc = {
      _id: slugToId('service', service.slug),
      _type: 'service',
      name,
      slug: {_type: 'slug', current: service.slug},
      description: service.description,
      features: service.features,
      order: i,
    }

    try {
      await client.createOrReplace(doc)
      console.log(`  ✓ ${name}`)
    } catch (error) {
      console.error(`  ✗ ${name}:`, error)
    }
  }

  console.log(`  → ${services.length} services migrated`)
}

async function migrateProjects() {
  console.log('\n🏗️  Migrating projects...')

  for (const project of projects) {
    const serviceRefs = project.services.map((serviceName) => {
      const service = services.find((s) => s.name === serviceName)
      if (service) {
        return {
          _type: 'reference',
          _ref: slugToId('service', service.slug),
          _key: service.slug,
        }
      }
      return null
    }).filter(Boolean)

    const doc = {
      _id: slugToId('project', project.slug),
      _type: 'project',
      name: project.name,
      slug: {_type: 'slug', current: project.slug},
      type: project.type,
      client: project.client ?? undefined,
      description: project.description,
      completedDate: project.completedDate,
      services: serviceRefs,
    }

    try {
      await client.createOrReplace(doc)
      console.log(`  ✓ ${project.name}`)
    } catch (error) {
      console.error(`  ✗ ${project.name}:`, error)
    }
  }

  console.log(`  → ${projects.length} projects migrated`)
}

async function migrateTestimonials() {
  console.log('\n💬 Migrating testimonials...')

  for (let i = 0; i < testimonials.length; i++) {
    const testimonial = testimonials[i]!
    const slug = testimonial.clientName
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '')

    const doc = {
      _id: slugToId('testimonial', slug),
      _type: 'testimonial',
      quote: testimonial.quote,
      clientName: testimonial.clientName,
      company: testimonial.company ?? undefined,
      project: testimonial.project ?? undefined,
      featured: i < 3,
      order: i,
    }

    try {
      await client.createOrReplace(doc)
      console.log(`  ✓ ${testimonial.clientName}`)
    } catch (error) {
      console.error(`  ✗ ${testimonial.clientName}:`, error)
    }
  }

  console.log(`  → ${testimonials.length} testimonials migrated`)
}

async function migrateBlogPosts() {
  console.log('\n📝 Migrating blog posts...')

  for (const post of blogPosts) {
    const serviceRefs = post.relatedServices.map((serviceSlug) => {
      return {
        _type: 'reference',
        _ref: slugToId('service', serviceSlug),
        _key: serviceSlug,
      }
    })

    let blockIndex = 0
    const contentWithKeys = post.content.map((contentBlock) => {
      blockIndex++
      const blockKey = `block-${blockIndex}`

      let spanIndex = 0
      const childrenWithKeys = contentBlock.children.map((child) => {
        spanIndex++
        return {
          ...child,
          _key: `${blockKey}-span-${spanIndex}`,
        }
      })

      let markIndex = 0
      const markDefsWithKeys = contentBlock.markDefs.map((mark) => {
        markIndex++
        return {
          ...mark,
          _key: `${blockKey}-mark-${markIndex}`,
        }
      })

      return {
        ...contentBlock,
        _key: blockKey,
        children: childrenWithKeys,
        markDefs: markDefsWithKeys,
      }
    })

    const doc = {
      _id: slugToId('blogPost', post.slug),
      _type: 'blogPost',
      title: post.title,
      slug: {_type: 'slug', current: post.slug},
      excerpt: post.excerpt,
      author: post.author,
      publishedAt: post.publishedAt,
      categories: post.categories,
      relatedServices: serviceRefs,
      content: contentWithKeys,
    }

    try {
      await client.createOrReplace(doc)
      console.log(`  ✓ ${post.title}`)
    } catch (error) {
      console.error(`  ✗ ${post.title}:`, error)
    }
  }

  console.log(`  → ${blogPosts.length} blog posts migrated`)
}

async function migrateSiteSettings() {
  console.log('\n⚙️  Creating site settings...')

  const doc = {
    _id: 'siteSettings',
    _type: 'siteSettings',
    companyName: 'Clarke Carpentry Contractors Ltd',
    tagline: 'Professional Carpentry Services in Bristol, Bath & South West England',
    description:
      'Clarke Carpentry Contractors Ltd provides professional carpentry services including first fix, second fix, dry lining, extensions, and more across Bristol, Bath and the South West.',
    contact: {
      address: 'Unit 5 Wansdyke Workshops, Unity Road, Keynsham, Bristol BS31 1NH',
      phone: '01225 350376',
      mobile: '07540 150412',
      email: 'info@clarkecarpentry.co.uk',
    },
    serviceAreas: ['Bristol', 'Bath', 'South West England'],
  }

  try {
    await client.createOrReplace(doc)
    console.log('  ✓ Site settings created')
  } catch (error) {
    console.error('  ✗ Site settings:', error)
  }
}

async function main() {
  console.log('🧪 Setting up test data...')
  console.log(`   Project: 07w52gq6`)
  console.log(`   Dataset: ${dataset}`)
  console.log(`   Test marker: "${TEST_MARKER}" will be added to first service`)

  await migrateServices()
  await migrateProjects()
  await migrateTestimonials()
  await migrateBlogPosts()
  await migrateSiteSettings()

  console.log('\n✅ Test data setup complete!')
  console.log(`   First service should now be named "${TEST_MARKER} Project Management"`)
}

main().catch((error) => {
  console.error('Test setup failed:', error)
  process.exit(1)
})
