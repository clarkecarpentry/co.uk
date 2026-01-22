# Handoff Document

Current status for context continuity between sessions. Update this at the end of every session or major task.

---

## Last Updated

2026-01-22

---

## Current Focus

**Phase 2.6 SEO Technical** - COMPLETE

All SEO technical implementation complete: meta tags, OG/Twitter cards, JSON-LD structured data, sitemap, and robots.txt.

---

## Recent Work

1. **SEO Technical (Phase 2.6)**
   - Added comprehensive metadata to root layout (title template, description, keywords)
   - Added Open Graph and Twitter card tags to all pages
   - Created JSON-LD components for LocalBusiness, Service, and Article schemas
   - Installed and configured `next-sitemap` for automatic sitemap generation
   - Generated `robots.txt` with proper disallow rules for `/studio` and `/api/`
   - Sitemap includes all 32 public URLs with appropriate priorities

2. **Blog Functionality (Previous Session)**
   - Wired up `/blog` and `/blog/[slug]` pages to fetch from Sanity
   - Created `src/components/portable-text.tsx` for rich content rendering
   - Created `src/lib/data/blog-posts.ts` with 4 launch posts
   - Migrated all blog posts to Sanity

3. **Content Rewrite (Phase 2.2.3)**
   - Improved services and projects descriptions following content brief
   - Applied brand voice guidelines (professional, technical, expert-focused)

---

## What's Next

### Immediate

- **2.5 Design Beautification** - Need model website URL from user
- **2.7 Testing** - Cross-browser, mobile, accessibility
- **2.8 Launch** - Deploy to production

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
| Dataset | `production` |
| Studio URL | `http://localhost:3000/studio` |
| Schemas | `src/sanity/schemaTypes/` |
| Client | `src/sanity/lib/client.ts` |
| Queries | `src/sanity/lib/queries.ts` |
| Fetch helpers | `src/sanity/lib/fetch.ts` |
| Types | `src/sanity/lib/types.ts` |
| Migration | `scripts/migrate-to-sanity.ts` |

**Commands:**
```bash
pnpm dev                                    # Run Next.js + Studio
export $(grep -v '^#' .env | xargs) && pnpm migrate   # Migrate content to Sanity
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

---

## File Changes This Session

**Created:**
- `src/components/json-ld.tsx` - JSON-LD components (LocalBusiness, Service, Article, Breadcrumb)
- `next-sitemap.config.cjs` - Sitemap generation config
- `public/sitemap.xml` - Generated sitemap (32 URLs)
- `public/robots.txt` - Generated robots.txt

**Modified:**
- `src/app/layout.tsx` - Added comprehensive metadata, OG/Twitter tags, LocalBusiness JSON-LD
- `src/app/about/page.tsx` - Added OG/Twitter metadata
- `src/app/services/page.tsx` - Added OG/Twitter metadata
- `src/app/services/[slug]/page.tsx` - Added OG/Twitter metadata, Service JSON-LD
- `src/app/projects/page.tsx` - Added OG/Twitter metadata
- `src/app/projects/[slug]/page.tsx` - Added OG/Twitter metadata
- `src/app/contact/page.tsx` - Added OG/Twitter metadata
- `src/app/blog/page.tsx` - Added OG/Twitter metadata
- `src/app/blog/[slug]/page.tsx` - Added OG/Twitter metadata, Article JSON-LD
- `package.json` - Added `next-sitemap` dependency and `postbuild` script
- `.gitignore` - Added generated sitemap/robots files
- `docs/roadmap.md` - Marked Phase 2.6 complete

---

## Git Status

- Branch: `develop`
- Changes: Phase 2.6 SEO Technical implementation (uncommitted)
