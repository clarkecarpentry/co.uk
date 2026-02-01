# Documentation Guide for LLM Coding Assistants

This project uses an LLM-agnostic documentation structure that works with any AI coding assistant (Claude Code, Codex, Cursor, etc.).

## Start Here

**Primary entrypoint:** `AGENTS.md` in repo root - contains operational rules, agent conduct, and session workflow.

Then read:
1. `docs/llm.md` - full project context
2. `docs/handoff.md` - where the last session left off
3. `docs/roadmap.md` - current phase and tasks

## Documentation Structure

```
AGENTS.md              # Primary entrypoint (repo root)
CLAUDE.md              # Claude Code specific (repo root)
README.md              # Project overview (repo root)

docs/
├── GUIDE.md           # This file - explains the docs structure
├── llm.md             # Essential project context
├── handoff.md         # Current status, where we left off
├── roadmap.md         # Phase breakdown, task checklist
├── state.json         # Machine-readable project state
└── content-brief.md   # Brand voice and content guidelines
```

## File Purposes

| File | Purpose | When to Read |
|------|---------|--------------|
| **AGENTS.md** | Operational rules, agent conduct, workflow | Start of every session |
| **llm.md** | Project summary, tech stack, brand guidelines | Start of every session |
| **handoff.md** | Current focus, where we left off | Start of every session |
| **roadmap.md** | Phase breakdown, task checklists | When planning work |
| **state.json** | Machine-readable state snapshot | For programmatic context |
| **README.md** | Quick start guide (repo root) | Optional reference |

## Tool-Specific Files

- **All tools**: Start with `AGENTS.md` in repo root
- **Claude Code**: See `CLAUDE.md` for additional T3/tRPC architecture details
- **Codex**: `AGENTS.md` is auto-discovered as primary reference

## Key Information Quick Reference

All of these are detailed in `docs/llm.md` and `docs/state.json`:

- **Current Phase**: 2.5 blocked (awaiting design images), then 2.8, 2.9
- **Completed Phases**: 2.1, 2.2, 2.3, 2.4, 2.6, 2.7
- **Hosting**: Vercel (dev.clarkecarpentry.co.uk active)
- **Launch Date**: Wednesday, January 29, 2026
- **Tech Stack**: Next.js 15, tRPC, Tailwind v4, Sanity CMS
- **Package Manager**: pnpm only
- **Git Workflow**: git flow (main/develop/feature/* branches)

## Session Workflow

1. **Start**: Read `AGENTS.md` → `docs/llm.md` → `docs/handoff.md`
2. **Plan**: Check `docs/roadmap.md` for current phase tasks
3. **Work**: Follow rules in `AGENTS.md`, verify with `pnpm check`
4. **End**: Update `docs/handoff.md`, `docs/roadmap.md`, `docs/state.json`
