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

## 2026-01-22: Phase 2.1 Foundation & Structure

**Goal:** Create all page routes and foundational components for full website.

### Completed

#### Pages Created
- Home (enhanced with testimonials, service links, CTA section)
- About (company story, values, 5 certifications)
- Services overview + 11 individual service pages
- Projects overview + 12 individual project pages
- Contact (form UI, contact info, call CTA)
- Blog list + post template (placeholders for Sanity integration)

#### Components
- `Nav` - Sticky responsive navigation with mobile hamburger menu
- `Footer` - 4-column footer (company info, services links, company links, contact)

#### Data Layer
- `src/lib/data/services.ts` - 11 services (removed loft conversions/extensions)
- `src/lib/data/projects.ts` - 12 projects with metadata
- `src/lib/data/testimonials.ts` - 6 client testimonials

### Build Output

32 pages statically generated:
- 11 service pages (SSG)
- 12 project pages (SSG)
- 6 static pages (home, about, services, projects, contact, blog)
- Blog post template (dynamic)

---

## 2026-01-22: Phase 2.1b LLM-Agnostic Documentation

**Goal:** Restructure documentation for compatibility with any LLM coding assistant.

### Completed

- Moved `roadmap.md` from `.claude/` to `docs/`
- Moved `progress.md` from `.claude/` to `docs/`
- Created `docs/README.md` with project overview for LLM assistants
- Updated `CLAUDE.md` to reference new `docs/` locations
- `.claude/` now reserved for Claude-specific settings only

### Rationale

Project documentation is now in a standard `docs/` directory that any LLM tool can access (Claude Code, Codex, Cursor, etc.), enabling seamless switching between tools.

---

## Next Steps

See [roadmap.md](./roadmap.md) for current phase and task breakdown.
