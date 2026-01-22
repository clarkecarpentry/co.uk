# LLM Assistant Context

This file contains essential context for LLM coding assistants working on this project. Read this file at the start of a session.

## Project Summary

**What:** Professional website for Clarke Carpentry Contractors Ltd
**Client:** Carpentry business serving Bristol, Bath, South West England
**Purpose:** Business card site for tender submissions to construction companies
**Launch:** Wednesday, January 29, 2026

## Current State

### What's Done (Phase 1 + 2.1 + 2.4)

- ✅ All page routes created and rendering
- ✅ Responsive navigation and footer
- ✅ Static data layer (services, projects, testimonials)
- ✅ Build passes cleanly (32 static pages)
- ✅ Git flow workflow established
- ✅ v1.0.0 released (placeholder landing page)
- ✅ Contact form with Resend email integration

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

## Tech Stack

- Next.js 15 (App Router, React 19)
- Tailwind CSS v4 + shadcn/ui
- tRPC for API routes
- Sanity.io for CMS (not yet integrated)
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

### When starting 2.3 (Sanity CMS)
Prompt user to:
1. Create Sanity project at sanity.io
2. Provide project ID and dataset name
3. Create API token with write access
4. Add credentials to `.env.local`

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
