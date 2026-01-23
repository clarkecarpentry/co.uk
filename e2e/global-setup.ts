/**
 * Playwright global setup - runs before all E2E tests.
 *
 * This script:
 * 1. Loads .env.test environment variables (for test config)
 * 2. Loads .env.local for SANITY_API_KEY (for migration)
 * 3. Runs the test data migration to populate the development dataset
 */

import {execSync} from 'child_process'
import {readFileSync, existsSync} from 'fs'
import {resolve} from 'path'

function loadEnvFile(filePath: string): Record<string, string> {
  const envVars: Record<string, string> = {}
  if (!existsSync(filePath)) {
    return envVars
  }

  const envContent = readFileSync(filePath, 'utf-8')
  for (const line of envContent.split('\n')) {
    const trimmed = line.trim()
    if (trimmed && !trimmed.startsWith('#')) {
      const [key, ...valueParts] = trimmed.split('=')
      if (key) {
        let value = valueParts.join('=')
        value = value.replace(/^["']|["']$/g, '')
        envVars[key] = value
      }
    }
  }
  return envVars
}

export default async function globalSetup() {
  console.log('\n🧪 Running E2E test setup...')

  // Load .env.test file (test configuration)
  const envTestPath = resolve(process.cwd(), '.env.test')
  const envTestVars = loadEnvFile(envTestPath)

  // Load .env.local file (for SANITY_API_KEY)
  const envLocalPath = resolve(process.cwd(), '.env.local')
  const envLocalVars = loadEnvFile(envLocalPath)

  // Merge: .env.test takes precedence, but get SANITY_API_KEY from .env.local
  const envVars: Record<string, string> = {
    ...envLocalVars,
    ...envTestVars,
  }

  // Set all env vars
  for (const [key, value] of Object.entries(envVars)) {
    process.env[key] = value
  }

  console.log(`   Dataset: ${envVars['NEXT_PUBLIC_SANITY_DATASET']}`)

  // Check if SANITY_API_KEY is available
  const sanityApiKey = envVars['SANITY_API_KEY'] ?? process.env.SANITY_API_KEY
  if (!sanityApiKey) {
    console.warn('\n⚠️  SANITY_API_KEY not found - skipping test data migration')
    console.warn('   E2E tests will run against existing development dataset content')
    console.warn('   To enable migration, set SANITY_API_KEY in .env.local or environment\n')
    return
  }

  // Ensure SANITY_API_KEY is in envVars for the child process
  envVars['SANITY_API_KEY'] = sanityApiKey

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
