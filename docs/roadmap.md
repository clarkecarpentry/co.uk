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
- [x] Move `progress.md` from `.claude/` to `docs/`
- [x] Create `docs/README.md` with project overview for LLMs
- [x] Update `CLAUDE.md` to reference new locations
- [x] Keep `.claude/` for Claude-specific settings only

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

#### 2.2.3 Generate Page Content

Update existing data files with improved copy:

- [ ] Update `src/lib/data/services.ts` - flesh out all 11 service descriptions:
  - [ ] Project Management
  - [ ] First Fix Carpentry
  - [ ] Second Fix Carpentry
  - [ ] Dry Lining
  - [ ] Extensions
  - [ ] Traditional Cut Roofs
  - [ ] New Build
  - [ ] Renovations
  - [ ] Bespoke Joinery
  - [ ] Kitchen Fitting
  - [ ] Timber Frame Construction
- [ ] Update `src/lib/data/projects.ts` - expand 12 project descriptions
- [ ] Update `src/app/about/page.tsx`:
  - [ ] Change "10 years" to "15 years"
  - [ ] Add Mike Clarke's story (sole trader to larger projects)
  - [ ] Review/update values and certifications copy
- [ ] Review homepage copy (`src/app/page.tsx`)

#### 2.2.4 Generate Blog Content (3-5 posts)

Save as markdown in `content/generated/blog/` for Sanity migration:

- [ ] "First Fix vs Second Fix Carpentry: What's Involved"
- [ ] "Why We Still Cut Traditional Roofs"
- [ ] "What Main Contractors Should Expect from Their Carpentry Subcontractor"
- [ ] Project spotlight: Wilder House case study
- [ ] (Optional) Building regs / industry update post

#### 2.2.5 Review & Consistency Check

- [ ] All content matches brand voice guidelines
- [ ] Key messages present across pages
- [ ] CTAs appropriate for each page context
- [ ] Ready for Sanity migration in phase 2.3

---

### 2.3 CMS Integration (Sanity.io)

> **REMINDER:** When starting this phase, prompt user to:
> 1. Create Sanity project at sanity.io
> 2. Provide project ID and dataset name
> 3. Create API token with write access
> 4. Add credentials to `.env.local`

#### Sanity Setup
- [ ] Install Sanity client packages
- [ ] Configure Sanity client with environment variables
- [ ] Set up Sanity Studio (embedded or separate)

#### Content Schemas
- [ ] `service` - name, slug, description, features, image
- [ ] `project` - name, slug, description, client, date, images, services
- [ ] `blogPost` - title, slug, content, excerpt, author, publishedAt, image
- [ ] `testimonial` - quote, clientName, company, project
- [ ] `siteSettings` - company info, contact details, social links

#### Content Migration Script
- [ ] Create script to convert markdown to Portable Text
- [ ] Map content structure to Sanity schemas
- [ ] Push generated content (from 2.2) to Sanity via API
- [ ] Push legacy project data to Sanity
- [ ] Verify all 12 projects migrated
- [ ] Verify all 11 services migrated
- [ ] Verify 6 testimonials migrated

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

> **REMINDER:** When starting this phase, ask user for:
> - Model website URL(s) for design reference
> - Any specific design preferences or brand guidelines

#### Design Tasks
- [ ] Review model website for inspiration
- [ ] Create consistent component library
- [ ] Design hero sections for each page
- [ ] Image optimization pipeline (next/image, WebP)
- [ ] Responsive design verification (mobile-first)
- [ ] Typography and spacing refinement
- [ ] Micro-interactions and hover states

---

### 2.6 SEO Technical

#### Implementation
- [ ] Schema.org markup (LocalBusiness, Service, Article for blog)
- [ ] Meta tags for all pages (title, description)
- [ ] Open Graph tags for social sharing
- [ ] Sitemap generation (`next-sitemap`)
- [ ] robots.txt configuration
- [ ] Semantic HTML structure
- [ ] Image alt tags
- [ ] Internal linking strategy

---

### 2.7 Testing

#### Unit Tests (Minimal Scope)
- [ ] Contact form validation logic
- [ ] Any utility functions

#### E2E Tests (Happy Path Only)
- [ ] Homepage loads correctly
- [ ] Navigation between pages works
- [ ] Contact form submission flow
- [ ] Services page displays all services
- [ ] Projects page displays all projects

#### Testing Setup
- [ ] Configure Vitest for unit tests
- [ ] Configure Playwright for E2E tests

---

### 2.8 Infrastructure & Launch

#### Vercel Setup
- [ ] Connect repository to Vercel
- [ ] Configure environment variables in Vercel dashboard
- [ ] Set up staging domain (next.clarkecarpentry.co.uk)
- [ ] Set up production domain (clarkecarpentry.co.uk)

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

---

## Deployment

| Environment | Domain | Status |
|-------------|--------|--------|
| Staging | next.clarkecarpentry.co.uk | Not deployed |
| Production | clarkecarpentry.co.uk | Not deployed |

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
