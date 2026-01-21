# Project Progress

This file tracks completed work on the Clarke Carpentry website project.

---

## 2026-01-21: Legacy Site Content Scrape

**Goal:** Scrape existing Wix website content into structured markdown format for reference when building the new site.

**Source:** https://mc4167.wixsite.com/website

### Completed

- Scraped all 28 pages from the Wix site using Firecrawl MCP
- Created structured content directory at `legacy/content/`
- Organized content into categories:
  - `home/` - Landing page content
  - `services/` - 12 service pages (project management, first/second fix, dry lining, etc.)
  - `projects/` - 12 project case studies with descriptions and completion dates
  - `other/` - Testimonials, employment, health & safety pages
- Downloaded 21 key images (logos, service thumbnails, featured projects)
- Created master index file with:
  - Company contact details
  - Site structure map
  - Image manifest with original URLs

### Key Content Extracted

| Category | Count | Details |
|----------|-------|---------|
| Services | 12 | Full descriptions with bullet points |
| Projects | 12 | Dates, clients, work scope, image galleries |
| Testimonials | 6 | Client quotes with names/companies |
| Images | 21 | Logos, service images, project photos |

### Notable Clients Identified

- **Juniper Homes** - Primary client, multiple projects (Wilder House, Feltmakers Lane, Weavers Lane)
- **CTS Design** - Collaborative partner
- **By Design** - Collaborative partner

### Files Created

```
legacy/content/
├── index.md                    # Master index
├── home/index.md
├── services/*.md               # 12 files
├── projects/*.md               # 12 files
├── other/*.md                  # 3 files
└── images/                     # 21 images
```

---

## 2026-01-21: Phase 1 Landing Page Built

**Goal:** Build simple placeholder landing page for quick deployment.

### Completed

- Initialized shadcn/ui with Tailwind CSS v4
- Installed components: Card, Badge, Separator
- Built single-page landing with:
  - Header with logo placeholder (Hammer icon) and contact info
  - Hero section with company name, tagline, certification badges
  - About section with company description
  - Services grid (all 12 services in card layout)
  - Contact card with address, phone, email, Instagram
  - Footer with copyright
- Mobile responsive design
- Updated metadata (title, description)
- Removed T3 demo components

### Tech Stack Used

- Next.js 15 App Router
- shadcn/ui components (Card, Badge, Separator)
- Lucide React icons
- Tailwind CSS v4

### Files Modified

- `src/app/page.tsx` - New landing page
- `src/app/layout.tsx` - Updated metadata
- `src/styles/globals.css` - shadcn theme variables
- Added: `src/components/ui/` - shadcn components

---

## Next Steps

- [ ] Deploy to staging (next.clarkecarpentry.co.uk)
- [ ] Deploy to production (clarkecarpentry.co.uk)
- [ ] Add actual logo image (Phase 2)

Phase 2 (full site) deferred until after initial launch.
