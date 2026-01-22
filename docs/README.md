# Clarke Carpentry Website

Professional website for Clarke Carpentry Contractors Ltd, a carpentry business serving Bristol, Bath and the South West.

## Quick Start

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Status

**Current Phase:** Full website build (Phase 2)
**Target Launch:** Wednesday, January 29, 2026

See [roadmap.md](./roadmap.md) for detailed task breakdown.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS v4 + shadcn/ui
- **CMS:** Sanity.io (planned)
- **Email:** Resend (integrated)
- **Hosting:** Vercel

## Project Structure

```
src/
├── app/                  # Pages (Next.js App Router)
│   ├── about/
│   ├── blog/
│   ├── contact/
│   ├── projects/
│   ├── services/
│   ├── layout.tsx
│   └── page.tsx
├── components/           # React components
│   ├── ui/              # shadcn/ui components
│   ├── nav.tsx
│   └── footer.tsx
├── lib/
│   ├── data/            # Static data (services, projects, testimonials)
│   └── utils.ts
└── server/api/          # tRPC routers

docs/                    # Project documentation
legacy/content/          # Scraped content from old Wix site
```

## Documentation

| File | Description |
|------|-------------|
| [roadmap.md](./roadmap.md) | Current phase, tasks, and checklist |
| [progress.md](./progress.md) | Completed work history |
| [llm.md](./llm.md) | Context for LLM coding assistants |

## Environments

| Environment | Domain | Status |
|-------------|--------|--------|
| Production | clarkecarpentry.co.uk | Not deployed |
| Staging | next.clarkecarpentry.co.uk | Not deployed |

## Key Commands

```bash
pnpm dev          # Development server
pnpm build        # Production build
pnpm check        # Lint + typecheck
pnpm format:write # Format code
```

## Git Workflow

This project uses **git flow**:

```bash
git flow feature start my-feature   # Start feature
git flow feature finish my-feature  # Merge to develop
git flow release start 1.0.0        # Start release
git flow release finish 1.0.0       # Merge to main, tag
```

See [CLAUDE.md](../CLAUDE.md) for full workflow details.
