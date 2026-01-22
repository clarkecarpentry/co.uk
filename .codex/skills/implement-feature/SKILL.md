---
name: implement-feature
description: Implement narrowly-scoped Next.js/tRPC/Tailwind feature with smallest diff, verify with pnpm check/build
metadata:
  short-description: Feature implementation with minimal diffs
---

# Implement Feature Skill

Implements a narrowly-scoped feature with the smallest possible diff.

## Constraints

- **Smallest diff**: Only change what's needed. No unrelated refactors.
- **Verify changes**: Must run `pnpm check`, and `pnpm build` if routing/metadata changed.

## Step-by-Step Workflow

### 1. Read Required Docs
```
Read: AGENTS.md
Read: docs/llm.md
Read: docs/roadmap.md
```

### 2. Understand the Task
- What exactly needs to be implemented?
- What's the scope boundary? (Do not exceed it)

### 3. Search for Existing Patterns
Before creating anything new:
```
Search: src/app/ for similar page patterns
Search: src/components/ for similar component patterns
Search: src/server/api/routers/ for similar tRPC patterns
```

### 4. Implement with Smallest Diff
- Default to Server Components
- Add `"use client"` only when browser APIs or tRPC hooks required
- Use shadcn/ui components from `src/components/ui/`
- Use Tailwind CSS v4 classes
- Green accent: `bg-green-600`, `text-green-500`

### 5. If Adding tRPC Router
1. Create router in `src/server/api/routers/[name].ts`
2. **MUST** register in `src/server/api/root.ts`:
   ```typescript
   import { newRouter } from "~/server/api/routers/name";
   export const appRouter = createTRPCRouter({
     // ... existing routers
     new: newRouter,
   });
   ```
3. Use Zod for input validation
4. Use `publicProcedure` from `~/server/api/trpc`

### 6. If Adding Environment Variables
1. Add to `src/env.js` Zod schema (server or client section)
2. Add to `runtimeEnv` object in same file
3. Add to `.env.example` with placeholder value
4. **NEVER** edit `.env` or `.env.local` directly

### 7. Verify Changes
```bash
pnpm check
```
If routing or metadata changed:
```bash
pnpm build
```

### 8. Output Format

```markdown
## Implementation Complete

### Files Touched
- `path/to/file.ts` - [what changed]
- ...

### tRPC Changes
- [Router added/modified, if applicable]
- [Registered in root.ts: Yes/No/NA]

### Env Vars
- [Added to env.js: Yes/No/NA]
- [Added to .env.example: Yes/No/NA]

### Verification
- `pnpm check`: [PASS/FAIL]
- `pnpm build`: [PASS/FAIL/Not needed]

### Notes
[Any relevant implementation notes]
```

## Rules from AGENTS.md

- pnpm only (never npm or yarn)
- git flow only (features branch from develop)
- No Co-Authored-By in commits
- Dark mode only, green accent color
- Static data in `src/lib/data/` until Sanity integration

## Do Not

- Refactor code not directly related to the task
- Add features beyond what was requested
- Skip verification commands
- Modify `.env` or `.env.local` directly
- Invent business facts in content
