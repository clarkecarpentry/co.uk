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

### 2.1 Foundation & Structure

#### Routes & Pages
- [ ] Home (enhance existing placeholder)
- [ ] About page
- [ ] Services overview page
- [ ] Individual service pages (11 total - see services list below)
- [ ] Projects overview page
- [ ] Individual project pages (12 total from legacy content)
- [ ] Contact page (form added in 2.4)
- [ ] Blog list page
- [ ] Blog post page template

#### Content Cleanup
- [ ] Remove "Loft Conversions" from services (spinning off to separate brand)
- [ ] Remove "Loft Extensions" from services
- [ ] Update any references throughout the site

#### Services List (Final - 11 services)
1. Project Management
2. First Fix Carpentry
3. Second Fix Carpentry
4. Dry Lining
5. Extensions
6. Traditional Cut Roofs
7. New Build
8. Renovations
9. Bespoke Joinery
10. Kitchen Fitting
11. Timber Frame Construction

---

### 2.2 Content Brief & Generation

> **Note:** This phase can run in parallel with 2.1 and 2.3. Content generation can happen in a separate LLM session while technical work proceeds.

#### Content Brief
- [ ] Create LLM content generation instructions doc at `.claude/content-brief.md`
- [ ] Include brand voice guidelines
- [ ] Include target keywords for SEO
- [ ] Include content structure templates for each page type

#### Content Generation
- [ ] Homepage copy
- [ ] About page copy
- [ ] Each service page copy (11 pages)
- [ ] Projects overview copy
- [ ] Contact page copy
- [ ] Initial blog posts (3-5 for launch)

#### Output
- [ ] All generated content saved to `content/generated/` as markdown
- [ ] Ready for migration to Sanity in phase 2.3

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

### 2.4 Contact Form

#### Implementation
- [ ] Install Resend SDK
- [ ] Create contact form UI component
- [ ] Add Zod validation schema
- [ ] Create tRPC mutation for form submission
- [ ] Set up Resend email template (React Email)
- [ ] Configure environment variables

#### Email Configuration
- **Development/Testing:** `clarkecarpentry@proton.me`
- **Production:** Client's real email (to be provided)

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
