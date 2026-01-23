/**
 * Playwright global setup - runs before all E2E tests.
 *
 * This script:
 * 1. Loads .env.test environment variables
 * 2. Runs the test data migration to populate the development dataset
 */

import {execSync} from 'child_process'
import {readFileSync} from 'fs'
import {resolve} from 'path'

export default async function globalSetup() {
  console.log('\n🧪 Running E2E test setup...')

  // Load .env.test file
  const envTestPath = resolve(process.cwd(), '.env.test')
  const envContent = readFileSync(envTestPath, 'utf-8')

  // Parse and set environment variables
  const envVars: Record<string, string> = {}
  for (const line of envContent.split('\n')) {
    const trimmed = line.trim()
    if (trimmed && !trimmed.startsWith('#')) {
      const [key, ...valueParts] = trimmed.split('=')
      if (key) {
        // Remove quotes from value
        let value = valueParts.join('=')
        value = value.replace(/^["']|["']$/g, '')
        envVars[key] = value
        process.env[key] = value
      }
    }
  }

  console.log(`   Dataset: ${envVars['NEXT_PUBLIC_SANITY_DATASET']}`)

  // Check if SANITY_API_KEY is available (from .env.local or environment)
  if (!process.env.SANITY_API_KEY) {
    console.warn('\n⚠️  SANITY_API_KEY not found - skipping test data migration')
    console.warn('   E2E tests will run against existing development dataset content')
    console.warn('   To enable migration, set SANITY_API_KEY in .env.local or environment\n')
    return
  }

  // Run the test data setup script
  console.log('   Running test data migration...')
  try {
    execSync('pnpm test:setup', {
      stdio: 'inherit',
      env: {
        ...process.env,
        ...envVars,
      },
    })
    console.log('✅ Test setup complete\n')
  } catch (error) {
    console.error('❌ Test setup failed:', error)
    throw error
  }
}
