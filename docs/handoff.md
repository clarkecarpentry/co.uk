# Handoff Document

Current status for context continuity between sessions. Update this at the end of every session or major task.

---

## Last Updated

2026-01-22

---

## Current Focus

**Phase 2.2.4 Blog Content** - COMPLETE

Blog pages are wired up to Sanity, 4 launch blog posts generated and migrated to Sanity CMS.

---

## Recent Work

1. **Blog Functionality**
   - Wired up `/blog` and `/blog/[slug]` pages to fetch from Sanity
   - Created `src/components/portable-text.tsx` for rich content rendering
   - Created `src/lib/data/blog-posts.ts` with 4 launch posts
   - Updated migration script to include blog posts
   - Migrated all blog posts to Sanity

2. **Blog Posts Created**
   - "First Fix vs Second Fix Carpentry: What's Involved" (Technical Explainer)
   - "Why We Still Cut Traditional Roofs" (Industry Insight)
   - "What Main Contractors Should Expect from Their Carpentry Subcontractor" (Industry Insight)
   - "Wilder House: 41 Flats in Bristol City Centre" (Project Spotlight)

3. **Content Rewrite (Phase 2.2.3)**
   - Improved services and projects descriptions following content brief
   - Applied brand voice guidelines (professional, technical, expert-focused)
   - Re-migrated all content to Sanity

4. **Sanity CMS (Phase 2.3)**
   - Embedded Studio at `/studio` route
   - All schemas working: service, project, blogPost, testimonial, siteSettings, blockContent
   - Migration script handles all content types
   - Pages fetch from Sanity with static fallback

---

## What's Next

### Immediate

- **2.5 Design Beautification** - Need model website URL from user
- **2.6 SEO Technical** - Meta tags, structured data, sitemap
- **2.7 Testing** - Cross-browser, mobile, accessibility
- **2.8 Launch** - Deploy to production

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

---

## Environment Notes

- On `develop` branch
- Build passes with `pnpm build`
- All blog pages are statically generated at build time
- Blog content stored in Sanity, editable via `/studio`

---

## File Changes This Session

**Created:**
- `src/components/portable-text.tsx` - PortableText renderer for blog content
- `src/lib/data/blog-posts.ts` - 4 blog posts with Portable Text content

**Modified:**
- `scripts/migrate-to-sanity.ts` - Added blog posts migration
- `src/app/blog/page.tsx` - Fetches from Sanity
- `src/app/blog/[slug]/page.tsx` - Fetches from Sanity, renders PortableText

---

## Git Status

- Branch: `develop`
- Recent commits:
  1. Add blog functionality with 4 launch posts
  2. Rewrite content for Phase 2.2.3 quality improvements
  3. Update pages to fetch from Sanity with static fallback
