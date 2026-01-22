# Documentation Guide for LLM Coding Assistants

This project uses an LLM-agnostic documentation structure that works with any AI coding assistant (Claude Code, Codex, Cursor, etc.).

## Start Here

**Read `docs/llm.md` first** - it contains all essential context for working on this project.

## Documentation Structure

```
docs/
├── GUIDE.md      # This file - explains the docs structure
├── llm.md        # Essential context for LLM assistants (READ THIS FIRST)
├── roadmap.md    # Current phase and task checklist
├── progress.md   # Completed work history
└── README.md     # Human-readable project overview
```

## File Purposes

| File | Purpose | When to Read |
|------|---------|--------------|
| **llm.md** | Project summary, current state, key decisions, tech stack, file locations | Start of every session |
| **roadmap.md** | Phase breakdown, task checklists, what's left to build | When planning work |
| **progress.md** | Completed work log, what's been built, when it was done | When catching up on history |
| **README.md** | Quick start guide, project structure (for humans) | Optional reference |

## Tool-Specific Files

- **Claude Code**: See `CLAUDE.md` in project root for Claude-specific instructions
- **Other tools**: Use the `docs/` directory directly

## Key Information Quick Reference

All of these are detailed in `docs/llm.md`:

- **Current Phase**: 2.4 complete (contact form), working on 2.2-2.8
- **Launch Date**: Wednesday, January 29, 2026
- **Tech Stack**: Next.js 15, tRPC, Tailwind v4, Sanity CMS (planned)
- **Package Manager**: pnpm only
- **Git Workflow**: git flow (main/develop/feature/* branches)
- **Build Status**: 32 pages, all passing

## How to Use This Structure

1. **First session**: Read `docs/llm.md` completely
2. **Subsequent sessions**: Skim `docs/llm.md` to refresh context
3. **Starting new work**: Check `docs/roadmap.md` for current phase tasks
4. **After completing work**: Update `docs/progress.md` and `docs/roadmap.md`

---

**Note**: This structure was created in Phase 2.1b specifically to enable switching between different LLM coding tools while maintaining consistent context.
