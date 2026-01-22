# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Documentation

Documentation is kept in the `docs/` directory for LLM-agnostic access (works with Claude Code, Codex, Cursor, etc.):

- **[docs/README.md](docs/README.md)** - Project overview for LLM assistants
- **[docs/roadmap.md](docs/roadmap.md)** - Current phase and planned work
- **[docs/progress.md](docs/progress.md)** - Completed work log

**Current Phase:** 2 - Full Website (see roadmap for task breakdown)

## Project Overview

This is a T3 Stack project (Next.js + tRPC + TypeScript + Tailwind CSS) initialized with `create-t3-app` v7.40.0. It uses modern React 19, Next.js 15 App Router, and Tailwind CSS v4.

### Business Context

**Client**: Clarke Carpentry Contractors Ltd.
**Purpose**: Professional business website serving as a virtual business card for tender submissions to construction companies

**Domains**:
- Production: `clarkecarpentry.co.uk`
- Staging: `next.clarkecarpentry.co.uk`

**Services**: Carpentry and related building services for contractors working on projects like housing developments

**Site Structure**:
1. **Landing Page** (Home)
   - Company logo
   - Key values
   - Service overview
   - Contact form
2. **About Page**
   - Company information and background
3. **Services Page**
   - Detailed service offerings

**Target Audience**: Construction companies and building contractors reviewing tender submissions

## Development Commands

```bash
# Development
pnpm dev              # Start dev server with Turbopack
pnpm build            # Production build
pnpm start            # Start production server
pnpm preview          # Build and start production server

# Code Quality
pnpm check            # Run linting and type checking
pnpm lint             # Run ESLint
pnpm lint:fix         # Fix ESLint issues
pnpm typecheck        # Run TypeScript compiler without emitting
pnpm format:check     # Check code formatting with Prettier
pnpm format:write     # Format code with Prettier
```

## Git Workflow

This project uses **git flow** for branch management.

### Branch Structure

| Branch | Purpose |
|--------|---------|
| `main` | Production releases only |
| `develop` | Integration branch for features |
| `feature/*` | New features |
| `bugfix/*` | Bug fixes for develop |
| `release/*` | Release preparation |
| `hotfix/*` | Urgent production fixes |

### Common Commands

```bash
# Features
git flow feature start my-feature    # Create feature branch from develop
git flow feature finish my-feature   # Merge feature into develop

# Releases
git flow release start 1.0.0         # Create release branch
git flow release finish 1.0.0        # Merge to main and develop, tag

# Hotfixes
git flow hotfix start fix-name       # Create hotfix from main
git flow hotfix finish fix-name      # Merge to main and develop, tag
```

### Workflow Rules

1. **Never commit directly to `main`** - only via release or hotfix finish
2. **Features branch from `develop`** - not from main
3. **Use descriptive branch names** - e.g., `feature/contact-form`, `hotfix/phone-link`
4. **Tag releases** - git flow handles this automatically on release finish

### Commit Messages

- Use concise, descriptive commit messages
- Add bullet points for details when helpful
- **Do NOT include `Co-Authored-By` trailers** - keep messages clean

## Architecture

### tRPC Setup

The project uses a full-stack type-safe API pattern with tRPC:

- **API Routes**: Located in `src/server/api/routers/`. Each router is a collection of related procedures (queries/mutations).
- **Root Router**: `src/server/api/root.ts` is where all routers are combined into the main `appRouter`. New routers must be manually added here.
- **tRPC Context**: Defined in `src/server/api/trpc.ts`. This is where you add things like database connections, authentication, etc.
- **Client Setup**: `src/trpc/react.tsx` provides the `api` hook for client-side tRPC calls and the `TRPCReactProvider` wrapper.
- **Server Calls**: `src/trpc/server.ts` provides server-side tRPC caller for use in Server Components.
- **API Endpoint**: All tRPC requests go through `src/app/api/trpc/[trpc]/route.ts`.

The tRPC setup includes:
- SuperJSON transformer for serialization of complex types (Dates, Maps, Sets, etc.)
- Artificial timing delay in development (100-500ms) to catch unwanted waterfalls
- Logging middleware that logs execution time of each procedure
- ZodError formatting for type-safe validation errors on the frontend

### Project Structure

```
src/
├── app/                      # Next.js App Router
│   ├── _components/          # Server Components
│   ├── api/trpc/[trpc]/     # tRPC API handler
│   ├── layout.tsx           # Root layout with TRPCReactProvider
│   └── page.tsx             # Homepage
├── server/
│   └── api/
│       ├── routers/         # tRPC routers (add new ones here)
│       ├── root.ts          # Main router - register all routers here
│       └── trpc.ts          # tRPC initialization and context
├── trpc/
│   ├── query-client.ts      # React Query client configuration
│   ├── react.tsx            # Client-side tRPC provider and hooks
│   └── server.ts            # Server-side tRPC caller
├── styles/
│   └── globals.css          # Tailwind CSS v4 imports and theme
└── env.js                   # Environment variable validation with Zod
```

### Path Aliases

The project uses `~/*` as an alias for `./src/*`. Example: `import { api } from "~/trpc/react"`.

### Environment Variables

Environment variables are validated using `@t3-oss/env-nextjs` in `src/env.js`. Add new variables to the Zod schemas and the `runtimeEnv` object. Client-side variables must be prefixed with `NEXT_PUBLIC_`.

### Styling

- Uses Tailwind CSS v4 with the new `@theme` directive
- Custom font: Geist Sans (loaded via Google Fonts)
- Global styles: `src/styles/globals.css`
- Font variable: `--font-geist-sans`

### TypeScript Configuration

- Strict mode enabled with `noUncheckedIndexedAccess`
- Path alias: `~/*` maps to `./src/*`
- ESLint configured with TypeScript-specific rules, including:
  - Consistent type imports with inline style
  - Unused variables allowed if prefixed with `_`
  - Custom rules for Next.js and React patterns

## Adding New Features

### Adding a New tRPC Router

1. Create a new router file in `src/server/api/routers/`
2. Define procedures using `publicProcedure` from `~/server/api/trpc`
3. Import and add the router to `appRouter` in `src/server/api/root.ts`
4. Use the router on the client with `api.yourRouter.yourProcedure.useQuery()` or `.useMutation()`
5. Use on the server with `await api.yourRouter.yourProcedure()`

### Server vs Client Components

- By default, components in `src/app/_components/` are Server Components
- Use `"use client"` directive for components that need interactivity or browser APIs
- tRPC client hooks (`useQuery`, `useMutation`) require `"use client"`
- Server Components can call tRPC procedures directly using the server-side caller from `~/trpc/server`

## Package Manager

This project uses `pnpm@10.28.1` as specified in package.json. Always use `pnpm` instead of `npm` or `yarn`.
