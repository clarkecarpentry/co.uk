# LLM Assistant Context

This file contains essential context for LLM coding assistants working on this project. Read this file at the start of a session.

> **See also:** `AGENTS.md` in repo root for operational rules, agent conduct, and session workflow.

## Project Summary

**What:** Professional website for Clarke Carpentry Contractors Ltd
**Client:** Carpentry business serving Bristol, Bath, South West England
**Purpose:** Business card site for tender submissions to construction companies
**Launch:** Wednesday, January 29, 2026

## Current State

### What's Done (Phase 1 + 2.1 + 2.3 partial + 2.4)

- ✅ All page routes created and rendering
- ✅ Responsive navigation and footer
- ✅ Static data layer (services, projects, testimonials)
- ✅ Build passes cleanly (32 static pages)
- ✅ Git flow workflow established
- ✅ v1.0.0 released (placeholder landing page)
- ✅ Contact form with Resend email integration
- ✅ Sanity Studio embedded at `/studio` route
- ✅ Sanity schemas created (service, project, blogPost, testimonial, siteSettings)
- ✅ Sanity client + GROQ queries ready for content fetch

### Pages Built

| Route | Status | Notes |
|-------|--------|-------|
| `/` | ✅ | Homepage with hero, services, testimonials |
| `/about` | ✅ | Company info, values, certifications |
| `/services` | ✅ | Overview of 11 services |
| `/services/[slug]` | ✅ | 11 individual service pages (SSG) |
| `/projects` | ✅ | Portfolio overview |
| `/projects/[slug]` | ✅ | 12 individual project pages (SSG) |
| `/contact` | ✅ | Form with Resend email (Phase 2.4 complete) |
| `/blog` | ✅ | Placeholder list |
| `/blog/[slug]` | ✅ | Placeholder template |

### What's Next

See `docs/roadmap.md` for full breakdown. Priority order:

1. **2.2 Content Brief & Generation** - Being done by separate agent
2. **2.3 Sanity CMS** - Schemas, client setup, content migration
3. ~~**2.4 Contact Form**~~ ✅ - Complete (Resend + tRPC + React Email)
4. **2.5 Design Beautification** - Ask user for model website reference
5. **2.6 SEO Technical** - Schema markup, sitemap, meta tags
6. **2.7 Testing** - Minimal: unit tests for form, E2E happy paths
7. **2.8 Launch** - Vercel deployment, analytics

## Key Decisions Made

1. **Services reduced to 11** - Removed "Loft Conversions" and "Loft Extensions" (spinning off to separate brand)

2. **Dark mode only** - No light mode toggle, defaultTheme="dark"

3. **Green accent color** - CTA buttons and highlights use green (brand color)

4. **Static data for now** - Services/projects/testimonials in `src/lib/data/` until Sanity integration

5. **Git flow branching** - Features branch from develop, releases merge to main

6. **No Co-Authored-By** - Don't include AI attribution in commit messages

7. **pnpm only** - Package manager is pnpm, not npm or yarn

## Working Agreement

### Change Strategy
- Prefer the **smallest possible diff**
- Do **not** refactor unrelated code
- One feature per branch
- Search for existing patterns before creating new ones

### Component Rules
- Default to **Server Components**
- Add `"use client"` only when browser APIs or tRPC hooks are required
- Use shadcn/ui components from `src/components/ui/` where applicable

### tRPC Rules
- Every new router **must** be registered in `src/server/api/root.ts`
- Use Zod for input validation
- Use `publicProcedure` from `~/server/api/trpc`

### Environment Variables
- New env vars **must** be added to:
  1. `src/env.js` Zod schema (server or client section)
  2. `runtimeEnv` object in same file
  3. `.env.example` with placeholder value

### Data Rules
- Service/project slugs are source of truth
- Slugs must stay in sync with routes and data files
- Update `generateStaticParams` when adding/removing items

## Do Not Assume

These are **NOT** fully integrated yet. Do not write code that depends on them:

| What | Status | Phase |
|------|--------|-------|
| Sanity CMS | Studio + schemas ready, **no content yet** | 2.3 |
| Blog content | Placeholders only | 2.3 |
| Database | None exists | - |
| Light mode | Does not exist | - |
| Image CDN | Not configured | 2.5 |
| Analytics | Not integrated | 2.8 |

**Static data in `src/lib/data/` is the source of truth until content migration is complete.**

### Sanity Integration Status

| Component | Status |
|-----------|--------|
| Studio | ✅ Embedded at `/studio` |
| Schemas | ✅ service, project, blogPost, testimonial, siteSettings |
| Client | ✅ Configured in `src/sanity/lib/client.ts` |
| Queries | ✅ Ready in `src/sanity/lib/queries.ts` |
| Content | ❌ Not migrated yet (use static data) |

## Tech Stack

- Next.js 15 (App Router, React 19)
- Tailwind CSS v4 + shadcn/ui
- tRPC for API routes
- Sanity.io for CMS (Studio + schemas ready, content pending)
- Resend for email (integrated - Phase 2.4 complete)
- Vercel for hosting

## File Locations

| What | Where |
|------|-------|
| Pages | `src/app/` |
| Components | `src/components/` |
| UI components | `src/components/ui/` |
| Static data | `src/lib/data/` |
| tRPC routers | `src/server/api/routers/` |
| Legacy content | `legacy/content/` |
| Project docs | `docs/` |

## Commands

```bash
pnpm dev          # Dev server
pnpm build        # Production build
pnpm check        # Lint + typecheck
pnpm format:write # Format code

# Git flow
git flow feature start <name>
git flow feature finish <name>
```

## Reminders for Specific Phases

### Phase 2.3 (Sanity CMS) - Partial Complete
Sanity is set up:
- **Project ID**: `07w52gq6`
- **Dataset**: `production`
- **Studio URL**: `http://localhost:3000/studio`

**Next steps for 2.3:**
1. Migrate static content from `src/lib/data/` to Sanity
2. Create migration script in `scripts/` folder
3. Switch pages to fetch from Sanity instead of static data

### When starting 2.5 (Design Beautification)
Ask user for:
- Model website URL(s) for design reference
- Any specific design preferences or brand guidelines

## Contact Info (for content)

- **Company:** Clarke Carpentry Contractors Ltd
- **Address:** Unit 5 Wansdyke Workshops, Unity Road, Keynsham, Bristol BS31 1NH
- **Office:** 01225 350376
- **Mobile:** 07540 150412
- **Email:** info@clarkecarpentry.co.uk
- **Dev email:** clarkecarpentry@proton.me (for testing contact form)
