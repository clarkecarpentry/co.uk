---
name: pm-audit
description: Audit roadmap/handoff/state docs for consistency, output top 1-3 next tasks with assigned agents
metadata:
  short-description: Project audit and task planning (no code changes)
---

# PM Audit Skill

Audits project documentation and outputs prioritized next tasks.

## Constraints

- **No code changes**: This skill reads docs only, never edits code.
- **Factual only**: Do not invent business facts.

## Step-by-Step Workflow

### 1. Read Required Docs
```
Read: AGENTS.md
Read: docs/llm.md
Read: docs/roadmap.md
Read: docs/handoff.md
Read: docs/state.json
```

### 2. Check Consistency
- Does `docs/handoff.md` reflect the current focus from `docs/roadmap.md`?
- Are completed items in `docs/roadmap.md` actually marked `[x]`?
- Does `docs/state.json` match the current phase?

### 3. Identify Next Tasks
Based on roadmap phase order (2.2 → 2.3 → 2.5 → 2.6 → 2.7 → 2.8):
- What's the current phase?
- What's the top unchecked item?
- Are there blockers noted in `docs/handoff.md`?

### 4. Output Format

```markdown
## Audit Results

### Consistency Issues
- [List any doc inconsistencies, or "None found"]

### Current State
- **Phase**: 2.X
- **Last Completed**: [item]
- **Blockers**: [if any]

## Next Tasks (1-3)

### 1. [Task Name]
- **Phase**: 2.X
- **Assign to**: [pm-audit | implement-feature | content-generation | test-happy-paths | seo-nextjs]
- **Success Criteria**: [what "done" looks like]
- **Prerequisites**: [if any]

### 2. [Task Name]
...

## Suggested Doc Updates
- [ ] `docs/roadmap.md`: [specific update]
- [ ] `docs/handoff.md`: [specific update]
- [ ] `docs/state.json`: [specific update]
```

## Rules from AGENTS.md

- pnpm only
- git flow only
- No Co-Authored-By in commits
- Dark mode only, green accent
- Static data in `src/lib/data/` until Sanity integration

## Do Not

- Edit any code files
- Suggest more than 3 tasks
- Invent business facts
- Skip reading the required docs
