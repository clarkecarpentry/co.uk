# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with this repository.

## Start Here

1. **Read `AGENTS.md`** - shared rules, agent conduct, and workflow (applies to all LLM tools)
2. **Read `docs/llm.md`** - full project context, current state, decisions
3. **Read `docs/handoff.md`** - where the last session left off

This file contains **Claude Code specific** architecture details that supplement the shared documentation.

---

## Project Overview

T3 Stack project (Next.js + tRPC + TypeScript + Tailwind CSS) initialized with `create-t3-app` v7.40.0.

- **Framework**: Next.js 15 App Router, React 19
- **Styling**: Tailwind CSS v4 + shadcn/ui
- **API**: tRPC with SuperJSON
- **Package Manager**: pnpm only

### Business Context

**Client**: Clarke Carpentry Contractors Ltd
**Purpose**: Professional website for tender submissions to construction companies
**Domains**: `clarkecarpentry.co.uk` (prod), `next.clarkecarpentry.co.uk` (staging)

---

## Architecture Details

### tRPC Setup

The project uses full-stack type-safe API with tRPC:

| Location | Purpose |
|----------|---------|
| `src/server/api/routers/` | Router files (procedures/mutations) |
| `src/server/api/root.ts` | Main router - **register new routers here** |
| `src/server/api/trpc.ts` | tRPC init, context, middleware |
| `src/trpc/react.tsx` | Client-side `api` hook and provider |
| `src/trpc/server.ts` | Server-side caller for RSC |
| `src/app/api/trpc/[trpc]/route.ts` | API endpoint handler |

**Features:**
- SuperJSON transformer (Dates, Maps, Sets serialization)
- Dev timing delay (100-500ms) to catch waterfalls
- Logging middleware (execution time)
- ZodError formatting for frontend validation errors

### Adding a New tRPC Router

1. Create router in `src/server/api/routers/`
2. Use `publicProcedure` from `~/server/api/trpc`
3. **Register in `src/server/api/root.ts`** (required!)
4. Client: `api.yourRouter.yourProcedure.useQuery()` or `.useMutation()`
5. Server: `await api.yourRouter.yourProcedure()`

### Server vs Client Components

- Default: Server Components
- Add `"use client"` only for interactivity or browser APIs
- tRPC hooks (`useQuery`, `useMutation`) require `"use client"`
- Server Components use caller from `~/trpc/server`

---

## Project Structure

```
src/
├── app/                      # Next.js App Router pages
│   ├── api/trpc/[trpc]/     # tRPC API handler
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Homepage
├── components/              # React components
│   └── ui/                  # shadcn/ui components
├── emails/                  # React Email templates
├── lib/
│   ├── data/               # Static data (services, projects)
│   ├── validations/        # Zod schemas
│   └── utils.ts            # Utilities
├── server/api/
│   ├── routers/            # tRPC routers
│   ├── root.ts             # Router registry
│   └── trpc.ts             # tRPC setup
├── trpc/                   # tRPC client setup
├── styles/globals.css      # Tailwind theme
└── env.js                  # Env validation (Zod)
```

### Path Aliases

`~/*` → `./src/*`

Example: `import { api } from "~/trpc/react"`

---

## Environment Variables

Validated with `@t3-oss/env-nextjs` in `src/env.js`.

**To add a new variable:**
1. Add to Zod schema (server or client section)
2. Add to `runtimeEnv` object
3. Add to `.env.example`

Client-side vars must be prefixed with `NEXT_PUBLIC_`.

---

## TypeScript Configuration

- Strict mode with `noUncheckedIndexedAccess`
- Path alias: `~/*` → `./src/*`
- Unused vars allowed if prefixed with `_`
- Consistent type imports (inline style)

---

## Commands

```bash
pnpm dev              # Dev server (Turbopack)
pnpm build            # Production build
pnpm check            # Lint + typecheck
pnpm format:write     # Format with Prettier
```

---

## Git Workflow

Uses **git flow**. See `AGENTS.md` for full details.

```bash
git flow feature start <name>    # Create feature
git flow feature finish <name>   # Merge to develop
```

**Rules:**
- Never commit directly to `main`
- Features branch from `develop`
- No `Co-Authored-By` in commit messages

---

## Living Documentation

Update these as you work:

| File | When |
|------|------|
| `docs/handoff.md` | End of session |
| `docs/progress.md` | After completing features |
| `docs/roadmap.md` | Tick completed items |
