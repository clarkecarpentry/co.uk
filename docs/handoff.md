# Handoff Document

Current status for context continuity between sessions. Update this at the end of every session or major task.

---

## Last Updated

2026-01-23

---

## Current Focus

**Phase 2.7 Testing** - COMPLETE

Testing infrastructure set up with Vitest for unit tests and Playwright for E2E tests. All tests passing.

---

## Recent Work

1. **Testing with Sanity Development Dataset**
   - Created development Sanity dataset for safe E2E testing
   - Added `.env.test` for test environment configuration
   - Created `scripts/setup-test-data.ts` to populate dev dataset with test marker
   - Added Playwright global setup to auto-run migration before tests
   - Added `e2e/sanity-content.spec.ts` to verify Sanity content appears
   - Tests gracefully skip when development dataset is empty

2. **Testing (Phase 2.7)**
   - Configured Vitest for unit testing
   - Configured Playwright for E2E testing
   - Added unit tests for contact form validation (9 tests)
   - Added unit tests for utility functions (6 tests)
   - Added E2E tests for homepage, navigation, contact form, services, and projects (8 tests)
   - All 15 unit tests and 8 E2E tests passing (6 Sanity content tests skip when no API key)

2. **SEO Technical (Phase 2.6)**
   - Added comprehensive metadata to root layout (title template, description, keywords)
   - Added Open Graph and Twitter card tags to all pages
   - Created JSON-LD components for LocalBusiness, Service, and Article schemas
   - Installed and configured `next-sitemap` for automatic sitemap generation
   - Generated `robots.txt` with proper disallow rules for `/studio` and `/api/`
   - Sitemap includes all 32 public URLs with appropriate priorities

3. **Blog Functionality (Previous Session)**
   - Wired up `/blog` and `/blog/[slug]` pages to fetch from Sanity
   - Created `src/components/portable-text.tsx` for rich content rendering
   - Created `src/lib/data/blog-posts.ts` with 4 launch posts
   - Migrated all blog posts to Sanity

---

## What's Next

### Immediate

- **2.5 Design Beautification** - Need model website URL from user
- **2.8 Launch** - Deploy to production

---

## Testing Quick Reference

### Commands
```bash
pnpm test          # Run unit tests with Vitest
pnpm test:watch    # Run unit tests in watch mode
pnpm test:e2e      # Run E2E tests with Playwright
pnpm test:setup    # Populate development Sanity dataset with test data
```

### Test Files
| File | Type | Tests |
|------|------|-------|
| `src/lib/validations/contact.test.ts` | Unit | 9 tests - Contact form validation |
| `src/lib/utils.test.ts` | Unit | 6 tests - cn() utility function |
| `e2e/homepage.spec.ts` | E2E | Homepage loads correctly |
| `e2e/navigation.spec.ts` | E2E | Navigation between pages |
| `e2e/contact-form.spec.ts` | E2E | Contact form UI and validation |
| `e2e/services.spec.ts` | E2E | Services page and navigation |
| `e2e/projects.spec.ts` | E2E | Projects page and navigation |
| `e2e/sanity-content.spec.ts` | E2E | Sanity CMS content verification |

### Sanity Development Dataset Testing

E2E tests use a **development** Sanity dataset (not production) to allow safe testing of content mutations.

**Setup:**
1. Create a `development` dataset in Sanity (already done)
2. Set `SANITY_API_KEY` in `.env.local` (write token from Sanity)
3. Run `pnpm test:e2e` - it will auto-populate development dataset

**How it works:**
- `.env.test` sets `NEXT_PUBLIC_SANITY_DATASET=development`
- `e2e/global-setup.ts` loads env and runs test data migration
- Test data has `[TEST]` marker on first service to verify Sanity content
- Tests gracefully skip if development dataset is empty

**Key files:**
- `.env.test` - Test environment variables
- `scripts/setup-test-data.ts` - Populates development dataset with test marker
- `e2e/global-setup.ts` - Playwright global setup that runs migration

### Configuration
- `vitest.config.ts` - Vitest configuration with path aliases
- `playwright.config.ts` - Playwright configuration with Chromium, loads .env.test

---

## SEO Quick Reference

### Metadata
- Root layout uses title template: `%s | Clarke Carpentry Contractors Ltd`
- All pages have OG and Twitter card tags
- Canonical URLs set for all pages

### JSON-LD Schemas
- **LocalBusiness**: In root layout (`src/app/layout.tsx`)
- **Service**: On individual service pages (`src/app/services/[slug]/page.tsx`)
- **Article**: On blog post pages (`src/app/blog/[slug]/page.tsx`)

### Sitemap & Robots
- Sitemap: `public/sitemap.xml` (generated at build time)
- Robots: `public/robots.txt` (generated at build time)
- Config: `next-sitemap.config.cjs`
- Generated files are in `.gitignore` (regenerated on each build)

---

## Blog Quick Reference

| Route | Description |
|-------|-------------|
| `/blog` | Blog listing page with all posts |
| `/blog/[slug]` | Individual blog post pages |

**4 Blog Posts:**
- `/blog/first-fix-vs-second-fix-carpentry`
- `/blog/why-we-still-cut-traditional-roofs`
- `/blog/what-main-contractors-should-expect`
- `/blog/wilder-house-project-spotlight`

---

## Sanity Quick Reference

| Item | Value |
|------|-------|
| Project ID | `07w52gq6` |
| Production Dataset | `production` |
| Development Dataset | `development` (for testing) |
| Studio URL | `http://localhost:3000/studio` |
| Schemas | `src/sanity/schemaTypes/` |
| Client | `src/sanity/lib/client.ts` |
| Queries | `src/sanity/lib/queries.ts` |
| Fetch helpers | `src/sanity/lib/fetch.ts` |
| Types | `src/sanity/lib/types.ts` |
| Migration | `scripts/migrate-to-sanity.ts` |
| Test Migration | `scripts/setup-test-data.ts` |

**Commands:**
```bash
pnpm dev                                    # Run Next.js + Studio
export $(grep -v '^#' .env.local | xargs) && pnpm migrate   # Migrate content to Sanity (production)
export $(grep -v '^#' .env.local | xargs) && NEXT_PUBLIC_SANITY_DATASET=development pnpm test:setup  # Populate dev dataset
```

---

## Blockers / Pending Decisions

- **Design**: Need model website reference before starting 2.5
- **Resend API**: Placeholder key in `.env` - user needs to add real key for contact form
- **OG Image**: `public/og-image.png` referenced but not created - need to create or update to use existing logo

---

## Environment Notes

- On `develop` branch
- Build passes with `pnpm build`
- Sitemap generated automatically via `postbuild` script
- All pages statically generated at build time
- Tests pass: 15 unit tests, 8 E2E tests

---

## File Changes This Session

**Created:**
- `vitest.config.ts` - Vitest configuration
- `playwright.config.ts` - Playwright configuration (with .env.test loading)
- `src/lib/validations/contact.test.ts` - Contact form validation unit tests
- `src/lib/utils.test.ts` - Utility function unit tests
- `e2e/homepage.spec.ts` - Homepage E2E test
- `e2e/navigation.spec.ts` - Navigation E2E test
- `e2e/contact-form.spec.ts` - Contact form E2E tests
- `e2e/services.spec.ts` - Services page E2E tests
- `e2e/projects.spec.ts` - Projects page E2E tests
- `e2e/sanity-content.spec.ts` - Sanity content verification tests
- `e2e/global-setup.ts` - Playwright global setup for test data migration
- `.env.test` - Test environment variables (development dataset)
- `scripts/setup-test-data.ts` - Test data migration with [TEST] marker

**Modified:**
- `package.json` - Added Vitest, Playwright, and test scripts (test:setup)
- `scripts/migrate-to-sanity.ts` - Now reads dataset from env var
- `docs/roadmap.md` - Marked Phase 2.7 complete
- `docs/handoff.md` - Updated with Sanity testing documentation

---

## Git Status

- Branch: `develop`
- Previous commits: Phase 2.6 SEO, Phase 2.7 Testing
- Uncommitted: Sanity development dataset testing setup
