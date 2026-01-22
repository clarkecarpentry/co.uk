/**
 * Migration script to push static data from src/lib/data/ to Sanity.
 *
 * Usage:
 *   pnpm migrate
 *
 * Requirements:
 *   - SANITY_API_KEY env var must be set (write token)
 *   - Run `sanity login` first if you haven't
 *
 * This script will:
 *   1. Read services, projects, and testimonials from static data files
 *   2. Transform them to match Sanity schema format
 *   3. Create documents in Sanity (or update if they exist)
 */

import {createClient} from '@sanity/client'
import {services} from '../src/lib/data/services'
import {projects} from '../src/lib/data/projects'
import {testimonials} from '../src/lib/data/testimonials'

// Check for API key
const token = process.env.SANITY_API_KEY
if (!token) {
  console.error('❌ SANITY_API_KEY environment variable is required')
  console.error('   Get a token from: https://www.sanity.io/manage/project/07w52gq6/api')
  process.exit(1)
}

// Create client with write access
const client = createClient({
  projectId: '07w52gq6',
  dataset: 'production',
  apiVersion: '2026-01-22',
  token,
  useCdn: false,
})

// Generate a deterministic ID from a slug
function slugToId(type: string, slug: string): string {
  return `${type}-${slug}`
}

async function migrateServices() {
  console.log('\n📦 Migrating services...')

  for (let i = 0; i < services.length; i++) {
    const service = services[i]!
    const doc = {
      _id: slugToId('service', service.slug),
      _type: 'service',
      name: service.name,
      slug: {_type: 'slug', current: service.slug},
      description: service.description,
      features: service.features,
      order: i,
    }

    try {
      await client.createOrReplace(doc)
      console.log(`  ✓ ${service.name}`)
    } catch (error) {
      console.error(`  ✗ ${service.name}:`, error)
    }
  }

  console.log(`  → ${services.length} services migrated`)
}

async function migrateProjects() {
  console.log('\n🏗️  Migrating projects...')

  for (const project of projects) {
    // Map service names to service references
    const serviceRefs = project.services.map((serviceName) => {
      // Find the service by name to get its slug
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
    // Create a slug from client name
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
      featured: i < 3, // First 3 are featured
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
  console.log('🚀 Starting Sanity migration...')
  console.log(`   Project: 07w52gq6`)
  console.log(`   Dataset: production`)

  await migrateServices()
  await migrateProjects()
  await migrateTestimonials()
  await migrateSiteSettings()

  console.log('\n✅ Migration complete!')
  console.log('   Visit http://localhost:3000/studio to see the content')
}

main().catch((error) => {
  console.error('Migration failed:', error)
  process.exit(1)
})
