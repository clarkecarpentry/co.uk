# Handoff Document

Current status for context continuity between sessions. Update this at the end of every session or major task.

---

## Last Updated

2026-01-23 (Session 3)

---

## Current Focus

**Phase 2.5.2 Design Overhaul** - COMPLETE

- ✅ Image integration complete (11 services, 37 projects, 4 blog posts)
- ✅ Services page beautified
- ✅ Projects page beautified with lightbox gallery
- ✅ Testimonials page created and linked to navigation
- ✅ Blog list page beautified (featured post layout)
- ✅ Blog post pages beautified (typography, More Articles section)
- ✅ Unbounded display font for headers (Geist Sans kept for brand elements)
- ✅ Hero icons added to all pages for consistency
- ✅ Word-based truncation for card descriptions
- ✅ Animated glow effect on homepage CTA button
- ✅ Client handoff document created

**Next:** Pre-launch checklist and go-live

**Vercel hosting is live** at dev.clarkecarpentry.co.uk.

---

## Recent Work

1. **Design Beautification (Phase 2.5.2)** - COMPLETE
   - Services page layout and styling improvements
   - Projects page layout and styling improvements
   - Created `GalleryLightbox` component for project image galleries (click to view full-size, keyboard navigation)
   - Created testimonials page (`/testimonials`) showing all testimonials from Sanity
   - Added testimonials to header navigation
   - Beautified blog list page with featured post layout and 3-column grid for remaining posts
   - Beautified blog post pages with enhanced header, larger featured image, "More Articles" section
   - Fixed card gaps on projects and blog pages
   - Added Unbounded display font for headers (h1, h2, h3)
   - Kept Geist Sans for homepage hero and footer brand name
   - Added hero icons to about, services, projects, and contact pages
   - Added word-based truncation (`truncateWords()`) for project and service card descriptions
   - Added animated breathing glow effect to homepage CTA button
   - Created client handoff document (`docs/client-handoff.md`)

2. **Image Integration (Phase 2.5.1)** - COMPLETE
   - Updated migration script to upload images from `legacy/content/images`
   - Configured next/image for Sanity CDN
   - Added image display to service pages (list + detail)
   - Added image display to project pages (featured + gallery)
   - Added image display to blog pages (list + post)
   - Uploaded 10 service images to Sanity
   - Downloaded 37 project images from Wix URLs in legacy markdown
   - Uploaded all 37 project images to Sanity (all 12 projects now have 1-4 images)
   - Created `scripts/download-project-images.ts` for Wix image extraction
   - User upscaled and converted images to webp format
   - Updated migration to use new webp images for all 11 services and 4 blog posts
   - All content now has high-quality images in Sanity

2. **Roadmap Updates**
   - Marked Vercel setup complete (dev.clarkecarpentry.co.uk active)
   - Split Phase 2.5 into 2.5.1 (Image Integration) and 2.5.2 (Design Overhaul)
   - Changed design approach from model URL to reference images
   - Added client handoff document task to Phase 2.8
   - Added Phase 2.9 for automated content generation (post-launch)

2. **Documentation Cleanup**
   - Deleted `docs/progress.md` (redundant with `docs/roadmap.md`)
   - Deleted `docs/portability.md` (already implemented)
   - Moved `docs/README.md` content to root `README.md`
   - Updated all references in AGENTS.md, CLAUDE.md, docs/GUIDE.md
   - Updated pm-audit skill and project-manager agent configs

2. **Testing with Sanity Development Dataset**
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

### Immediate (Pre-Launch Checklist)

- [ ] Enable Vercel Web Analytics
- [ ] Verify all pages rendering correctly
- [ ] Verify contact form sending emails
- [ ] Mobile responsive verification on real devices
- [ ] Style 404 page
- [ ] Verify favicon and app icons
- [ ] Go live (merge develop → main)

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
- `docs/client-handoff.md` - Client handoff document for non-technical users

**Modified:**
- `src/app/layout.tsx` - Added Unbounded font
- `src/styles/globals.css` - Added display font theme, glow-pulse animation
- `src/app/page.tsx` - Geist Sans for hero, animated CTA glow, white button text
- `src/components/footer.tsx` - Geist Sans for brand name
- `src/app/about/page.tsx` - Added Users hero icon
- `src/app/services/page.tsx` - Added Hammer hero icon, truncateWords
- `src/app/projects/page.tsx` - Added FolderKanban hero icon, truncateWords
- `src/app/contact/page.tsx` - Added Send hero icon
- `src/lib/utils.ts` - Added truncateWords() utility
- `docs/roadmap.md` - Marked Phase 2.5.2 and client handoff complete
- `docs/handoff.md` - This file

---

## Git Status

- Branch: `develop`
- Up to date with origin
- Last commit: `6081be5` - Add animated glow effect to homepage CTA button
