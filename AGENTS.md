# AGENTS.md

Canonical entrypoint for LLM coding assistants. This file is auto-discovered by Codex, Claude Code, Cursor, and similar tools.

---

## How to Use This File

1. **Skim this file once** at session start to align on rules and workflow
2. **Read `docs/llm.md`** for full project context
3. **Check `docs/roadmap.md`** for current phase and tasks
4. **Check `docs/handoff.md`** to see where the last session left off
5. Follow project-specific rules below; ask the user when instructions conflict
6. **Codex users:** If you need deep, task-specific instructions, explicitly invoke the matching `.codex/skills/*` skill (Codex only preloads skill name/description/path, not the full body)

---

## Preflight Checklist (Every Session)

1. Read `docs/llm.md` (project context, tech stack, decisions)
2. Read `docs/roadmap.md` (current phase, task checklist)
3. Read `docs/handoff.md` (where we left off, current focus)
4. Identify the top priority task
5. Search for existing patterns before creating new ones

---

## Agent Conduct

### Work Doggedly
Be autonomous. If you know the user's goal and can still make progress, keep working. When you stop, be prepared to justify why.

### Work Smart
When debugging, step back and think deeply. Add logging to check assumptions. Don't guess - verify.

### Check Your Work
After writing code, find a way to run it and verify it works. Don't assume - confirm. Run `pnpm check` after changes. Run `pnpm build` if routing or metadata changed.

### Terminal Caution
Before every terminal command, consider: will it exit on its own, or run indefinitely? For dev servers, watchers, or long processes, warn the user or run in background. Never leave hanging processes.

### Stop on Failure
Don't plow ahead when something breaks. Stop, summarize the root cause, propose the smallest fix. Ask if unclear.

### Show Plan Before Large Edits
For multi-file changes or architectural decisions, summarize intent first so the user can redirect early.

### Incremental Steps
Break work into small steps. Confirm each with the smallest relevant check before moving on.

---

## Project Rules (Non-Negotiable)

| Rule | Details |
|------|---------|
| **Package manager** | `pnpm` only. Never npm or yarn. |
| **Git workflow** | git flow only. Features branch from develop. |
| **Commits** | No `Co-Authored-By` trailers. Concise messages. |
| **Theme** | Dark mode only. No light mode toggle. |
| **Accent color** | Green for CTAs and highlights. |
| **Data source** | Static files in `src/lib/data/` until Sanity integration. |

---

## File Locations

| What | Where |
|------|-------|
| Pages | `src/app/` |
| Components | `src/components/` |
| UI components (shadcn) | `src/components/ui/` |
| Static data | `src/lib/data/` |
| Validation schemas | `src/lib/validations/` |
| tRPC routers | `src/server/api/routers/` |
| Email templates | `src/emails/` |
| Legacy content | `legacy/content/` (read-only reference) |
| Documentation | `docs/` |

---

## Working Agreement

### Change Strategy
- Prefer the **smallest possible diff**
- Do **not** refactor unrelated code
- One feature per branch

### Component Rules
- Default to **Server Components**
- Add `"use client"` only when browser APIs or tRPC hooks are required
- Use shadcn/ui components where applicable

### Styling Rules
- Use Tailwind CSS v4 classes
- Theme defined in `src/styles/globals.css`
- Green accent: `bg-green-600`, `text-green-500`, etc.

### tRPC Rules
- Every new router **must** be registered in `src/server/api/root.ts`
- Use Zod for input validation
- Use `publicProcedure` from `~/server/api/trpc`

### Environment Variables
- New env vars **must** be added to:
  1. `src/env.js` Zod schema (server or client section)
  2. `runtimeEnv` object in same file
  3. `.env.example` with placeholder

### Data Rules
- Service/project slugs are source of truth
- Slugs must stay in sync with routes and data files
- Update `generateStaticParams` when adding/removing items

---

## Do Not Assume

These are **NOT** fully integrated yet:

- **Sanity CMS** - Studio + schemas ready, **no content migrated yet** (Phase 2.3)
- **Blog content** - pages are placeholders only
- **Database** - none exists, using static data
- **Light mode** - does not exist, dark only
- **Image CDN** - not configured yet
- **Analytics** - not integrated yet

**Static data in `src/lib/data/` is the source of truth until content migration is complete.**

---

## Sensitive Files

**Never modify without explicit user instruction:**

- `.env` / `.env.local` - contains secrets
- `package.json` dependencies - discuss first
- `src/env.js` - affects build validation
- Any file in `legacy/content/` - read-only reference

---

## Living Documentation

Keep these updated as you work:

| File | Purpose | When to Update |
|------|---------|----------------|
| `docs/handoff.md` | Current status, where we left off | End of every session or major task |
| `docs/progress.md` | Completed work log | After completing a feature/phase |
| `docs/roadmap.md` | Task checklist | Tick items as completed |

---

## Commit Discipline

- One feature per branch (`feature/descriptive-name`)
- No lockfile-only commits unless dependencies actually changed
- Commit messages: concise, descriptive, no `Co-Authored-By`
- If env vars changed, mention in `docs/progress.md`
- Run `pnpm check` before committing

---

## Commands Reference

```bash
pnpm dev          # Start dev server (Turbopack)
pnpm build        # Production build
pnpm check        # Lint + typecheck
pnpm format:write # Format with Prettier

# Git flow
git flow feature start <name>
git flow feature finish <name>
```

---

## Quick State Reference

See `docs/state.json` for machine-readable project state.

- **Current Phase**: 2.3 partial + 2.4 complete
- **Launch Date**: 2026-01-29
- **Services**: 11
- **Projects**: 12
- **CMS**: Sanity Studio ready at `/studio`, content pending
- **Contact Form**: Complete

---

## Tool-Specific Notes

- **Claude Code**: See `CLAUDE.md` for additional T3/tRPC architecture details
- **Codex**: This file is your primary reference
- **Cursor**: Use `docs/` directory for context
