# Project Roadmap

## Phase 1: Placeholder Landing Page (MVP)

**Goal:** Ship a simple, professional landing page quickly for tender submissions.

**Target:** Single page with essential business information.

### Requirements

- [x] Company logo (centered/prominent) - using Hammer icon placeholder
- [x] Brief company description / tagline
- [x] Services overview (list of what they offer)
- [x] Contact information (address, phone, email)
- [x] Professional, clean design
- [x] Mobile responsive

### Content Source

All content available in `legacy/content/`:
- Logo: `legacy/content/images/logo-diamond.png`
- About text: `legacy/content/home/index.md` (About section)
- Services list: 12 services from `legacy/content/services/`
- Contact: `legacy/content/home/index.md` (Contact section)

### Tech Notes

- Static page, no backend needed for Phase 1
- Can use existing T3/Next.js setup or just edit `src/app/page.tsx`
- Deploy to staging first, then production

---

## Phase 2: Full Website (Future)

**Goal:** Complete multi-page site with all content from legacy Wix site.

### Pages

- [ ] Landing page (enhanced version of Phase 1)
  - Hero section with background image
  - Featured projects carousel
  - Testimonial highlights
  - Contact form (functional)
- [ ] About page
  - Company history and values
  - Team/qualifications
  - Certifications (CITB, CSCS, etc.)
- [ ] Services page
  - All 12 services with descriptions
  - Links to related projects
- [ ] Projects/Portfolio page
  - Project gallery
  - Individual project pages (12 total)
- [ ] Testimonials page
- [ ] Contact page with form

### Backend Requirements

- Contact form submission (tRPC + email service)
- Possibly a simple CMS for content updates

---

## Deployment

| Environment | Domain | Status |
|-------------|--------|--------|
| Staging | next.clarkecarpentry.co.uk | Not deployed |
| Production | clarkecarpentry.co.uk | Not deployed |
