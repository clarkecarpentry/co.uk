You’re already 90% there. What Codex tends to need (vs Claude Code) is: (1) a single “source of truth” context file it always sees first, (2) explicit “how we work” rules (patch style, scope, tests, commits), and (3) guardrails that stop it from inventing architecture.

Below are the concrete changes to make so Codex gets correct context every run.

---

## 1) Add a canonical entrypoint: `AGENTS.md` (repo root)

Codex and many agent-based tools commonly auto-discover `AGENTS.md`. Even when not required, it acts as a strong convention and makes tool switching painless.

Create `AGENTS.md` in the project root. Keep it short, directive, and authoritative. It should not duplicate long explanations.

Include:
- **Read order**:
  1. `docs/llm.md`
  2. `docs/roadmap.md`
- **Hard rules**:
  - pnpm only
  - git flow only
  - no `Co-Authored-By`
  - dark-mode only
  - green accent color
  - static data until Sanity integration
- **Where things live**:
  - pages, components, data, routers (high-level table)
- **Session rules**:
  - After finishing a task, update `docs/progress.md`
  - Tick completed items in `docs/roadmap.md`
  - Run `pnpm check` after changes

Target length: under ~150 lines.

---

## 2) Add a tool-agnostic “Working Agreement”

You already have architecture docs. What’s missing are operational guardrails that stop Codex from over-refactoring or inventing patterns.

Add a section (either in `AGENTS.md` or `docs/llm.md`) covering:

- **Change strategy**
  - Prefer the smallest possible diff
  - Do not refactor unrelated code
- **Component rules**
  - Default to Server Components
  - Add `"use client"` only when browser APIs or tRPC hooks are required
- **Styling rules**
  - Use Tailwind v4 theme from `globals.css`
  - Prefer shadcn/ui components where applicable
- **tRPC rules**
  - Every new router must be registered in `src/server/api/root.ts`
- **Env rules**
  - New env vars must be added to `src/env.js` Zod schema and `runtimeEnv`
- **Data rules**
  - Service/project slugs are source-of-truth and must stay in sync with routes and SEO

This is critical for preventing regressions.

---

## 3) Add a machine-friendly project state snapshot

Codex performs better when it can quickly ground itself without parsing prose.

Create `docs/state.json` (or `docs/state.yaml`) containing:

- `currentPhase`
- `launchDate`
- `techStack`
- `domains` (production, staging)
- `serviceCount`
- `projectCount`
- `cmsStatus` (planned / integrated)
- `contactFormStatus` (complete)

This file is for agents, not humans.

---

## 4) Add a “Do Not Assume” list

Codex is more likely than Claude to hallucinate completed integrations.

Add a short explicit list:

- Sanity CMS is **not integrated yet**
- Blog pages are placeholders only
- No database exists
- No light mode
- Static data remains the source of truth until Phase 2.3

This prevents wasted edits.

---

## 5) Add “Where to look” pointers for common tasks

Codex works best with precise file targets.

Add mappings such as:

- **SEO**
  - Root metadata: `src/app/layout.tsx`
  - Per-route metadata: route-level `page.tsx`
  - Sitemap / robots: where applicable
- **Contact form**
  - tRPC router location
  - React Email templates
  - Required env vars
- **Services / Projects**
  - `src/lib/data/*` as canonical data source
  - Slugs must match route params

You already imply this, but explicit pointers save time.

---

## 6) Add a preflight checklist Codex can follow every session

At the top of `AGENTS.md`:

1. Read `docs/llm.md`
2. Read `docs/roadmap.md`
3. Identify the current phase and top priority task
4. Search for existing patterns before creating new ones
5. After changes:
   - Run `pnpm check`
   - Run `pnpm build` if routing or metadata changed
6. Update `docs/progress.md` and `docs/roadmap.md`

This makes agent runs predictable.

---

## 7) Add agent ignore rules

If your Codex setup supports ignore files, add one to reduce noise:

Ignore:
- `.git/`
- `.next/`
- `node_modules/`
- build outputs
- logs

If `legacy/content/` is for migration only, mark it as **read-only**.

---

## 8) Add commit discipline rules

Codex sometimes creates overly broad commits.

Specify:
- One feature per branch
- No lockfile changes unless dependencies changed
- Commit messages should be concise and descriptive
- If env vars change, mention it in `docs/progress.md`

---

## Highest-leverage minimal changes

If you only do two things:

1. Add a root `AGENTS.md` that points to existing docs and defines working rules
2. Add a “Working Agreement + Do Not Assume” section to `docs/llm.md`

Those two alone will dramatically improve Codex reliability.

---

Optional next step: paste `docs/roadmap.md` and refine `AGENTS.md` to be phase-aware and task-driven.

