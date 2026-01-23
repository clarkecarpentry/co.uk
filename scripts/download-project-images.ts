/**
 * Download project images from Wix URLs in legacy markdown files
 *
 * Usage: npx tsx scripts/download-project-images.ts
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs'
import { readdirSync } from 'fs'
import { join, basename } from 'path'
import https from 'https'
import http from 'http'

const LEGACY_PROJECTS_DIR = 'legacy/content/projects'
const OUTPUT_DIR = 'legacy/content/images/projects'

interface ProjectImage {
  description: string
  url: string
  filename: string
}

interface ProjectImages {
  slug: string
  images: ProjectImage[]
}

// Parse markdown file and extract image URLs from the table
function extractImagesFromMarkdown(filePath: string): ProjectImage[] {
  const content = readFileSync(filePath, 'utf-8')
  const images: ProjectImage[] = []

  // Find the Images section and parse the table
  const imagesSection = content.match(/## Images\s*\n\n\|[^\n]+\|\n\|[-|\s]+\|\n([\s\S]*?)(?=\n##|\n$|$)/)

  if (!imagesSection) {
    return images
  }

  const tableContent = imagesSection[1]
  const rows = tableContent.trim().split('\n').filter(row => row.trim())

  for (const row of rows) {
    // Parse table row: | Description | URL |
    const match = row.match(/\|\s*([^|]+)\s*\|\s*(https?:\/\/[^\s|]+)\s*\|?/)
    if (match) {
      const description = match[1].trim()
      const url = match[2].trim()

      // Skip non-image URLs (like Juniper Homes logo references)
      if (url.includes('juniper') || !url.includes('wixstatic.com')) {
        console.log(`  Skipping non-project image: ${description}`)
        continue
      }

      images.push({
        description,
        url,
        filename: '', // Will be set later
      })
    }
  }

  return images
}

// Download a file from URL
function downloadFile(url: string, outputPath: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http

    const request = protocol.get(url, (response) => {
      // Handle redirects
      if (response.statusCode === 301 || response.statusCode === 302) {
        const redirectUrl = response.headers.location
        if (redirectUrl) {
          downloadFile(redirectUrl, outputPath).then(resolve).catch(reject)
          return
        }
      }

      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download: ${response.statusCode}`))
        return
      }

      const chunks: Buffer[] = []
      response.on('data', (chunk: Buffer) => chunks.push(chunk))
      response.on('end', () => {
        const buffer = Buffer.concat(chunks)
        writeFileSync(outputPath, buffer)
        resolve()
      })
      response.on('error', reject)
    })

    request.on('error', reject)
    request.setTimeout(30000, () => {
      request.destroy()
      reject(new Error('Request timeout'))
    })
  })
}

// Get file extension from URL
function getExtension(url: string): string {
  // Extract extension before any query params or Wix modifiers
  const match = url.match(/\.(jpg|jpeg|png|gif|webp)/i)
  return match ? match[1].toLowerCase() : 'jpg'
}

async function main() {
  console.log('Downloading project images from Wix...\n')

  // Create output directory
  if (!existsSync(OUTPUT_DIR)) {
    mkdirSync(OUTPUT_DIR, { recursive: true })
  }

  // Get all project markdown files
  const files = readdirSync(LEGACY_PROJECTS_DIR)
    .filter(f => f.endsWith('.md'))

  const allProjects: ProjectImages[] = []

  // Extract images from each project
  for (const file of files) {
    const slug = basename(file, '.md')
    const filePath = join(LEGACY_PROJECTS_DIR, file)
    const images = extractImagesFromMarkdown(filePath)

    if (images.length > 0) {
      // Assign filenames
      images.forEach((img, index) => {
        const ext = getExtension(img.url)
        img.filename = `${slug}-${index + 1}.${ext}`
      })

      allProjects.push({ slug, images })
      console.log(`${slug}: ${images.length} images`)
    } else {
      console.log(`${slug}: No images found`)
    }
  }

  console.log(`\nTotal: ${allProjects.reduce((sum, p) => sum + p.images.length, 0)} images from ${allProjects.length} projects\n`)

  // Download all images
  let downloaded = 0
  let failed = 0

  for (const project of allProjects) {
    console.log(`\nDownloading ${project.slug}...`)

    for (const image of project.images) {
      const outputPath = join(OUTPUT_DIR, image.filename)

      // Skip if already downloaded
      if (existsSync(outputPath)) {
        console.log(`  ✓ ${image.filename} (already exists)`)
        downloaded++
        continue
      }

      try {
        await downloadFile(image.url, outputPath)
        console.log(`  ✓ ${image.filename}`)
        downloaded++
      } catch (error) {
        console.error(`  ✗ ${image.filename}: ${error instanceof Error ? error.message : 'Unknown error'}`)
        failed++
      }

      // Small delay to be nice to the server
      await new Promise(r => setTimeout(r, 200))
    }
  }

  console.log(`\n${'='.repeat(50)}`)
  console.log(`Downloaded: ${downloaded}`)
  console.log(`Failed: ${failed}`)

  // Write a mapping file for the migration script
  const mapping: Record<string, string[]> = {}
  for (const project of allProjects) {
    mapping[project.slug] = project.images.map(i => i.filename)
  }

  const mappingPath = join(OUTPUT_DIR, 'image-mapping.json')
  writeFileSync(mappingPath, JSON.stringify(mapping, null, 2))
  console.log(`\nImage mapping saved to: ${mappingPath}`)
}

main().catch(console.error)
