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
 *   3. Upload images from legacy/content/images
 *   4. Create documents in Sanity (or update if they exist)
 */

import {createClient, type SanityClient} from '@sanity/client'
import {createReadStream, existsSync} from 'fs'
import {basename} from 'path'
import {services} from '../src/lib/data/services'
import {projects} from '../src/lib/data/projects'
import {testimonials} from '../src/lib/data/testimonials'
import {blogPosts} from '../src/lib/data/blog-posts'

// Check for API key
const token = process.env.SANITY_API_KEY
if (!token) {
  console.error('❌ SANITY_API_KEY environment variable is required')
  console.error('   Get a token from: https://www.sanity.io/manage/project/07w52gq6/api')
  process.exit(1)
}

// Get dataset from env var (defaults to 'production')
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production'

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

// Image paths for services (slug -> filename)
const serviceImages: Record<string, string> = {
  'project-management': 'service-project-management.jpg',
  'first-fix': 'service-first-fix.jpg',
  'second-fix': 'service-second-fix.jpg',
  // 'dry-lining': no image available
  'extensions': 'service-extensions.jpg',
  'traditional-cut-roofs': 'service-traditional-cut-roofs.jpg',
  'new-build': 'service-new-build.jpg',
  'renovations': 'service-renovations.jpg',
  'bespoke-joinery': 'service-bespoke-joinery.jpg',
  'kitchen-fitting': 'service-kitchen-fitting.jpg',
  'timber-frame-construction': 'service-timber-frame.jpg',
}

// Image paths for projects (slug -> filename)
const projectImages: Record<string, string> = {
  'wilder-house': 'project-wilder-house.jpg',
  'walcot-house': 'project-walcot-house.png',
  'box-hill': 'project-box-hill.jpg',
}

const LEGACY_IMAGES_DIR = './legacy/content/images'

// Upload an image to Sanity and return the asset reference
async function uploadImage(
  sanityClient: SanityClient,
  imagePath: string,
  altText: string
): Promise<{_type: 'image'; asset: {_type: 'reference'; _ref: string}; alt: string} | null> {
  const fullPath = `${LEGACY_IMAGES_DIR}/${imagePath}`

  if (!existsSync(fullPath)) {
    console.log(`    ⚠ Image not found: ${imagePath}`)
    return null
  }

  try {
    const imageAsset = await sanityClient.assets.upload('image', createReadStream(fullPath), {
      filename: basename(imagePath),
    })

    return {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: imageAsset._id,
      },
      alt: altText,
    }
  } catch (error) {
    console.log(`    ⚠ Failed to upload ${imagePath}:`, error)
    return null
  }
}

async function migrateServices() {
  console.log('\n📦 Migrating services...')

  for (let i = 0; i < services.length; i++) {
    const service = services[i]!
    const imageFile = serviceImages[service.slug]

    // Upload image if available
    let image = null
    if (imageFile) {
      console.log(`  📷 Uploading image for ${service.name}...`)
      image = await uploadImage(client, imageFile, `${service.name} - Clarke Carpentry`)
    }

    const doc = {
      _id: slugToId('service', service.slug),
      _type: 'service' as const,
      name: service.name,
      slug: {_type: 'slug' as const, current: service.slug},
      description: service.description,
      features: service.features,
      order: i,
      ...(image && {image}),
    }

    try {
      await client.createOrReplace(doc)
      console.log(`  ✓ ${service.name}${image ? ' (with image)' : ''}`)
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

    const imageFile = projectImages[project.slug]

    // Upload featured image if available
    let featuredImage = null
    if (imageFile) {
      console.log(`  📷 Uploading image for ${project.name}...`)
      featuredImage = await uploadImage(client, imageFile, `${project.name} - Clarke Carpentry project`)
    }

    const doc = {
      _id: slugToId('project', project.slug),
      _type: 'project' as const,
      name: project.name,
      slug: {_type: 'slug' as const, current: project.slug},
      type: project.type,
      client: project.client ?? undefined,
      description: project.description,
      completedDate: project.completedDate,
      services: serviceRefs,
      ...(featuredImage && {
        featuredImage,
        // Also add to images array as first gallery image
        images: [{...featuredImage, _key: 'featured'}],
      }),
    }

    try {
      await client.createOrReplace(doc)
      console.log(`  ✓ ${project.name}${featuredImage ? ' (with image)' : ''}`)
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

async function migrateBlogPosts() {
  console.log('\n📝 Migrating blog posts...')

  for (const post of blogPosts) {
    // Map service slugs to service references
    const serviceRefs = post.relatedServices.map((serviceSlug) => {
      return {
        _type: 'reference',
        _ref: slugToId('service', serviceSlug),
        _key: serviceSlug,
      }
    })

    // Transform content blocks to include unique keys
    let blockIndex = 0
    const contentWithKeys = post.content.map((contentBlock) => {
      blockIndex++
      const blockKey = `block-${blockIndex}`

      // Process children to ensure unique keys
      let spanIndex = 0
      const childrenWithKeys = contentBlock.children.map((child) => {
        spanIndex++
        return {
          ...child,
          _key: `${blockKey}-span-${spanIndex}`,
        }
      })

      // Process markDefs if present
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
  console.log('🚀 Starting Sanity migration...')
  console.log(`   Project: 07w52gq6`)
  console.log(`   Dataset: ${dataset}`)

  await migrateServices()
  await migrateProjects()
  await migrateTestimonials()
  await migrateBlogPosts()
  await migrateSiteSettings()

  console.log('\n✅ Migration complete!')
  console.log('   Visit http://localhost:3000/studio to see the content')
}

main().catch((error) => {
  console.error('Migration failed:', error)
  process.exit(1)
})
