# Project Roadmap

**Target Launch:** Wednesday, January 29, 2026

---

## Phase 1: Placeholder Landing Page (MVP) ✅

**Status:** Complete

- [x] Company logo
- [x] Brief company description / tagline
- [x] Services overview
- [x] Contact information
- [x] Professional dark mode design
- [x] Mobile responsive

---

## Phase 2: Full Website

### 2.1 Foundation & Structure ✅

**Status:** Complete

#### Routes & Pages
- [x] Home (enhanced with nav/footer, testimonials, service links)
- [x] About page (company story, values, certifications)
- [x] Services overview page
- [x] Individual service pages (11 total)
- [x] Projects overview page
- [x] Individual project pages (12 total)
- [x] Contact page (form UI ready for backend)
- [x] Blog list page (placeholder)
- [x] Blog post page template (placeholder)

#### Content Cleanup
- [x] Remove "Loft Conversions" from services
- [x] Remove "Loft Extensions" from services
- [x] Services data file updated (11 services)

#### Components Created
- [x] Nav (responsive with mobile menu)
- [x] Footer (4-column with links and contact)

#### Data Layer
- [x] `src/lib/data/services.ts` - 11 services
- [x] `src/lib/data/projects.ts` - 12 projects
- [x] `src/lib/data/testimonials.ts` - 6 testimonials

---

### 2.1b LLM-Agnostic Documentation ✅

**Status:** Complete

Restructure project documentation for compatibility with any LLM coding assistant (Claude Code, Codex, Cursor, etc.).

- [x] Create `docs/` directory for shared documentation
- [x] Move `roadmap.md` from `.claude/` to `docs/`
- [x] Create `docs/llm.md` with project context for LLMs
- [x] Create `docs/handoff.md` for session continuity
- [x] Create `docs/state.json` for machine-readable state
- [x] Update `CLAUDE.md` to reference new locations
- [x] Keep `.claude/` for Claude-specific settings only
- [x] Consolidate redundant docs (progress.md → roadmap.md, docs/README.md → root README.md)

---

### 2.2 Content Brief & Generation

> **Note:** This phase can run in parallel with 2.1 and 2.3. Content generation can happen in a separate LLM session while technical work proceeds.

#### 2.2.1 Create Content Brief Document ✅

**Status:** Complete

Created `docs/content-brief.md` with:

- [x] Brand voice guidelines (professional, technical, expert-focused, plain English)
- [x] Company facts (15 years experience, Bristol/Bath/South West, accreditations list)
- [x] Mike Clarke bio points (sole trader origin, business growth over time, relentless work ethic, attention to detail, straightforward demeanour)
- [x] Key messages to weave throughout:
  - On time and on budget delivery
  - Handpicked staff for quality and professionalism
  - Repeat client relationships (Juniper Homes etc.)
  - H&S credentials (CSCS, CITB, SSSTS, SMSTS, PASMA)
- [x] CTA strategy:
  - Phone primary (prominent on every page, construction industry norm)
  - Contact form secondary (out-of-hours, written project details)
  - Context-specific wording per page type
- [x] SEO target keywords per page type

#### 2.2.2 Content Templates ✅

**Status:** Complete (included in content-brief.md section 7-8)

- [x] Service template (`name`, `slug`, `description`, `features[]`)
- [x] Project template (`name`, `slug`, `type`, `client?`, `description`, `completedDate`, `services[]`)
- [x] About page template (story paragraphs, values, certifications)
- [x] Blog post template (4 types with structures, checklist, voice notes)

#### 2.2.3 Generate Page Content ✅

**Status:** Complete

Update existing data files with improved copy:

- [x] Update `src/lib/data/services.ts` - flesh out all 11 service descriptions:
  - [x] Project Management
  - [x] First Fix Carpentry
  - [x] Second Fix Carpentry
  - [x] Dry Lining
  - [x] Extensions
  - [x] Traditional Cut Roofs
  - [x] New Build
  - [x] Renovations
  - [x] Bespoke Joinery
  - [x] Kitchen Fitting
  - [x] Timber Frame Construction
- [x] Update `src/lib/data/projects.ts` - expand 12 project descriptions
- [x] Update `src/app/about/page.tsx`:
  - [x] Change "10 years" to "15 years"
  - [x] Add Mike Clarke's story (sole trader to larger projects)
  - [x] Review/update values and certifications copy
- [x] Review homepage copy (`src/app/page.tsx`)

#### 2.2.4 Generate Blog Content (3-5 posts) ✅

**Status:** Complete

Created blog posts in `src/lib/data/blog-posts.ts` and migrated to Sanity:

- [x] "First Fix vs Second Fix Carpentry: What's Involved" (Technical Explainer)
- [x] "Why We Still Cut Traditional Roofs" (Industry Insight)
- [x] "What Main Contractors Should Expect from Their Carpentry Subcontractor" (Industry Insight)
- [x] "Wilder House: 41 Flats in Bristol City Centre" (Project Spotlight)

#### 2.2.5 Review & Consistency Check ✅

**Status:** Complete

- [x] All content matches brand voice guidelines
- [x] Key messages present across pages
- [x] CTAs appropriate for each page context
- [x] Ready for Sanity migration in phase 2.3

---

### 2.3 CMS Integration (Sanity.io)

**Sanity Project:** `07w52gq6` | **Dataset:** `production`

#### Sanity Setup ✅
- [x] Install Sanity client packages (`sanity`, `next-sanity`, `@sanity/vision`, `@sanity/image-url`)
- [x] Configure Sanity client with environment variables
- [x] Set up Sanity Studio (embedded at `/studio`)

#### Content Schemas ✅
- [x] `service` - name, slug, description, features, image
- [x] `project` - name, slug, description, client, date, images, services
- [x] `blogPost` - title, slug, content, excerpt, author, publishedAt, image
- [x] `testimonial` - quote, clientName, company, project
- [x] `siteSettings` - company info, contact details, social links
- [x] `blockContent` - reusable Portable Text type

#### Content Migration Script ✅
- [x] Create script to convert static data to Sanity documents (`scripts/migrate-to-sanity.ts`)
- [x] Map content structure to Sanity schemas
- [x] Push generated content (from 2.2) to Sanity via API
- [x] Push legacy project data to Sanity
- [x] Verify all 12 projects migrated
- [x] Verify all 11 services migrated
- [x] Verify 6 testimonials migrated
- [x] Verify 4 blog posts migrated
- [x] Switch pages to fetch from Sanity (with static fallback)

---

### 2.4 Contact Form ✅

**Status:** Complete

#### Implementation
- [x] Install Resend SDK
- [x] Create contact form UI component
- [x] Add Zod validation schema
- [x] Create tRPC mutation for form submission
- [x] Set up Resend email template (React Email)
- [x] Configure environment variables

#### Email Configuration
- **Development/Testing:** `clarkecarpentry@proton.me`
- **Production:** `info@clarkecarpentry.co.uk`

#### Files Created
- `src/lib/validations/contact.ts` - Zod schema
- `src/emails/contact-form.tsx` - React Email template
- `src/server/api/routers/contact.ts` - tRPC router
- `src/components/contact-form.tsx` - Client form component

#### Setup Required
To enable the contact form, add to `.env.local`:
```
RESEND_API_KEY=re_your_api_key
CONTACT_EMAIL=clarkecarpentry@proton.me
```

---

### 2.5 Design Beautification

> **REMINDER:** When starting this phase:
> - User will provide screenshot images of websites for design inspiration
> - Complete image integration (2.5.1) before full design overhaul (2.5.2)

#### 2.5.1 Image Integration ✅

**Status:** Complete

- [x] Add image fields to Sanity schemas (service, project, blogPost) - already existed
- [x] Upload images to Sanity for services (10/11 have images, dry-lining missing)
- [x] Upload images to Sanity for projects (3/12: Wilder House, Walcot House, Box Hill)
- [ ] Upload featured images for blog posts (schema ready, no images yet)
- [x] Update service pages to display images
- [x] Update project pages to display images (gallery support)
- [x] Update blog listing and post pages to display featured images
- [x] Configure next/image for Sanity CDN optimization

#### 2.5.2 Design Overhaul
- [ ] Review provided design reference screenshots for inspiration
- [ ] Create consistent component library
- [ ] Design hero sections for each page
- [ ] Create Open Graph image (`public/og-image.png`, 1200×630px)
- [ ] Responsive design verification (mobile-first)
- [ ] Typography and spacing refinement
- [ ] Micro-interactions and hover states

---

### 2.6 SEO Technical

**Status:** Complete

#### Implementation
- [x] Schema.org markup (LocalBusiness, Service, Article for blog)
- [x] Meta tags for all pages (title, description)
- [x] Open Graph tags for social sharing
- [x] Twitter card tags
- [x] Sitemap generation (`next-sitemap`)
- [x] robots.txt configuration
- [x] Semantic HTML structure (already in place)
- [x] Image alt tags (already in place)
- [ ] Internal linking strategy (ongoing)

#### Files Created/Modified
- `src/components/json-ld.tsx` - JSON-LD components for LocalBusiness, Service, Article
- `src/app/layout.tsx` - Root metadata with OG/Twitter tags, LocalBusiness JSON-LD
- `src/app/*/page.tsx` - All pages updated with OG/Twitter metadata
- `next-sitemap.config.cjs` - Sitemap configuration
- `public/sitemap.xml` - Generated sitemap (32 URLs)
- `public/robots.txt` - Generated robots.txt

---

### 2.7 Testing

**Status:** Complete

#### Unit Tests (Minimal Scope)
- [x] Contact form validation logic (`src/lib/validations/contact.test.ts`)
- [x] Utility functions (`src/lib/utils.test.ts`)

#### E2E Tests (Happy Path Only)
- [x] Homepage loads correctly (`e2e/homepage.spec.ts`)
- [x] Navigation between pages works (`e2e/navigation.spec.ts`)
- [x] Contact form submission flow (`e2e/contact-form.spec.ts`)
- [x] Services page displays all services (`e2e/services.spec.ts`)
- [x] Projects page displays all projects (`e2e/projects.spec.ts`)

#### Testing Setup
- [x] Configure Vitest for unit tests (`vitest.config.ts`)
- [x] Configure Playwright for E2E tests (`playwright.config.ts`)

#### Test Commands
```bash
pnpm test          # Run unit tests
pnpm test:watch    # Run unit tests in watch mode
pnpm test:e2e      # Run E2E tests
```

---

### 2.8 Infrastructure & Launch

#### Vercel Setup ✅
- [x] Connect repository to Vercel
- [x] Configure environment variables in Vercel dashboard
- [x] Set up staging domain (dev.clarkecarpentry.co.uk)
- [x] Set up production domain (clarkecarpentry.co.uk)

#### Analytics
- [ ] Enable Vercel Web Analytics (free tier)
- [ ] Verify tracking is working

#### Pre-Launch Checklist
- [ ] All pages rendering correctly
- [ ] Contact form sending emails
- [ ] All images optimized and loading
- [ ] Mobile responsive on real devices
- [ ] SEO meta tags verified
- [ ] Sitemap accessible
- [ ] 404 page styled
- [ ] Favicon and app icons

#### Client Handoff Document
- [ ] Create `docs/client-handoff.md` with:
  - [ ] Environment variables reference (what each one does, where to get new keys)
  - [ ] How the website works in plain English (pages, CMS, contact form flow)
  - [ ] Sanity login instructions and basic content editing guide
  - [ ] Resend login instructions and email monitoring
  - [ ] Vercel deployment overview (auto-deploys from main branch)

---

### 2.9 Automated Content Generation (Post-Launch)

> **Note:** This is a future enhancement to be planned after launch. Details TBD.

#### Concept
Automated blog content generation using GitHub Issues/Actions to trigger an AI content agent.

#### High-Level Goals
- [ ] Define trigger mechanism (GitHub Issue with specific labels/template)
- [ ] Set up GitHub Action workflow to spin up content generation agent
- [ ] Agent researches topic and writes draft blog post
- [ ] Draft pushed to Sanity as unpublished content for review
- [ ] Notification sent when draft is ready

#### Planning Notes
- Will break this down into detailed tasks when we reach this phase
- Consider: topic research sources, brand voice compliance, image generation
- Review existing `docs/content-brief.md` for voice guidelines

---

## Deployment

| Environment | Domain | Status |
|-------------|--------|--------|
| Development | dev.clarkecarpentry.co.uk | Active |
| Production | clarkecarpentry.co.uk | Configured (not live) |

---

## Content Sources

**Legacy content** (from Wix scrape) in `legacy/content/`:
- Logo: `legacy/content/images/logo-diamond.png` (also `public/logo.png`)
- About text: `legacy/content/home/index.md`
- Services: `legacy/content/services/*.md` (12 files, removing 2)
- Projects: `legacy/content/projects/*.md` (12 files)
- Testimonials: `legacy/content/other/testimonials.md` (6 quotes)
- Images: `legacy/content/images/` (21 images)

**Generated content** (from phase 2.2) will be in `content/generated/`

---

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS v4 + shadcn/ui
- **CMS:** Sanity.io
- **Email:** Resend
- **Analytics:** Vercel Web Analytics
- **Testing:** Vitest (unit) + Playwright (E2E)
- **Hosting:** Vercel (free tier)
