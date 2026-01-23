# Clarke Carpentry Website

Professional website for Clarke Carpentry Contractors Ltd, a carpentry business serving Bristol, Bath and the South West.

## Quick Start

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Status

**Current Phase:** 2.5 Design (blocked), 2.8 Launch next
**Target Launch:** Wednesday, January 29, 2026

See [docs/roadmap.md](docs/roadmap.md) for detailed task breakdown and [docs/state.json](docs/state.json) for machine-readable status.

## Tech Stack

- **Framework:** Next.js 15 (App Router, React 19)
- **Styling:** Tailwind CSS v4 + shadcn/ui
- **API:** tRPC with Zod validation
- **CMS:** Sanity.io (fully integrated)
- **Email:** Resend
- **Testing:** Vitest + Playwright
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
│   ├── studio/          # Sanity Studio
│   ├── layout.tsx
│   └── page.tsx
├── components/           # React components
│   └── ui/              # shadcn/ui components
├── lib/
│   ├── data/            # Static data (fallback)
│   └── validations/     # Zod schemas
├── sanity/              # Sanity schemas & client
├── server/api/          # tRPC routers
└── emails/              # React Email templates

docs/                    # Project documentation
legacy/content/          # Scraped content from old Wix site (read-only)
e2e/                     # Playwright E2E tests
scripts/                 # Migration and setup scripts
```

## Documentation

| File | Description |
|------|-------------|
| [AGENTS.md](AGENTS.md) | LLM assistant rules and working agreement |
| [CLAUDE.md](CLAUDE.md) | Claude Code specific architecture details |
| [docs/roadmap.md](docs/roadmap.md) | Current phase, tasks, and checklist |
| [docs/handoff.md](docs/handoff.md) | Session handoff notes |
| [docs/llm.md](docs/llm.md) | Project context for LLM assistants |
| [docs/state.json](docs/state.json) | Machine-readable project state |

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
pnpm test         # Unit tests (Vitest)
pnpm test:e2e     # E2E tests (Playwright)
pnpm migrate      # Migrate content to Sanity
```

## Git Workflow

This project uses **git flow**:

```bash
git flow feature start my-feature   # Start feature
git flow feature finish my-feature  # Merge to develop
git flow release start 1.0.0        # Start release
git flow release finish 1.0.0       # Merge to main, tag
```

See [AGENTS.md](AGENTS.md) for full workflow details.
