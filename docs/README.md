# Project Documentation

This directory contains project documentation designed to be consumed by any LLM-based coding assistant (Claude Code, Codex, Cursor, etc.).

## Quick Links

- **[Roadmap](./roadmap.md)** - Current phase, planned work, task checklists
- **[Progress](./progress.md)** - Completed work history

## Project Overview

**Client:** Clarke Carpentry Contractors Ltd
**Purpose:** Professional business website for tender submissions
**Stack:** Next.js 15, Tailwind CSS v4, shadcn/ui, tRPC, Sanity.io (CMS)

### Domains

| Environment | Domain |
|-------------|--------|
| Production | clarkecarpentry.co.uk |
| Staging | next.clarkecarpentry.co.uk |

### Key Directories

```
src/
├── app/              # Next.js App Router pages
├── components/       # React components (nav, footer, ui/)
├── lib/data/         # Static data (services, projects, testimonials)
├── server/api/       # tRPC routers
└── styles/           # Global CSS

docs/                 # Project documentation (this directory)
legacy/content/       # Scraped content from old Wix site
```

## For LLM Assistants

When working on this project:

1. **Check the roadmap** (`docs/roadmap.md`) to understand current priorities
2. **Check progress** (`docs/progress.md`) for context on completed work
3. **Use git flow** for branching (see CLAUDE.md for workflow details)
4. **Services list** has 11 items (loft conversions/extensions removed)
5. **Content** will come from Sanity CMS (not yet integrated)

### Content Sources

- Legacy Wix content: `legacy/content/`
- Static data files: `src/lib/data/`
- Generated content (future): `content/generated/`
