# Releasing

How to create a versioned release for Clarke Carpentry. Releases use **git flow** and keep the `package.json` version in sync with the git tag.

---

## Overview

```
develop ──► release/X.Y.Z ──► main + tag X.Y.Z
                │
                └─ bump package.json, final QA
```

1. A **release branch** is cut from `develop`.
2. On the release branch: bump `package.json`, run final checks, fix any last issues.
3. Finishing the release merges into `main` **and** back into `develop`, and creates a git tag.

---

## Version Scheme

[SemVer](https://semver.org/): `MAJOR.MINOR.PATCH`

| Bump  | When                                            | Example       |
|-------|-------------------------------------------------|---------------|
| Major | Breaking changes, large redesigns               | 1.0.0 → 2.0.0 |
| Minor | New features, new pages, significant additions  | 1.0.0 → 1.1.0 |
| Patch | Bug fixes, copy tweaks, config changes          | 1.1.0 → 1.1.1 |

---

## Step-by-Step

### 1. Start the release branch

```bash
git flow release start X.Y.Z
```

This creates `release/X.Y.Z` from `develop`.

### 2. Bump the package version

```bash
pnpm version:bump X.Y.Z
```

This updates `package.json` to `X.Y.Z`. It does **not** commit or tag — that happens when the release is finished.

### 3. Run final checks

```bash
pnpm check          # lint + typecheck
pnpm build:quiet    # production build
pnpm test           # unit tests
```

Fix anything that fails on this branch. Only release-critical fixes belong here — new features go on `develop`.

### 4. Commit the version bump (and any fixes)

```bash
git add package.json
git commit -m "Bump version to X.Y.Z"
```

### 5. Finish the release

```bash
git flow release finish X.Y.Z
```

This will:
- Merge `release/X.Y.Z` into `main`
- Create a git tag `X.Y.Z`
- Merge `release/X.Y.Z` back into `develop`
- Delete the release branch

You'll be prompted for a **tag message**. Use a short summary of what's in the release:

```
Release vX.Y.Z - Brief description

- Key change 1
- Key change 2
- Key change 3
```

### 6. Push everything

```bash
git push origin main develop --tags
```

---

## Quick Reference (Copy-Paste)

Replace `X.Y.Z` with the actual version:

```bash
git flow release start X.Y.Z
pnpm version:bump X.Y.Z
pnpm check && pnpm build:quiet && pnpm test
git add package.json && git commit -m "Bump version to X.Y.Z"
git flow release finish X.Y.Z
git push origin main develop --tags
```

---

## Hotfixes

For urgent fixes on `main` that can't wait for a full release:

```bash
git flow hotfix start X.Y.Z        # branch from main
# fix the issue, bump version
pnpm version:bump X.Y.Z
git add package.json && git commit -m "Bump version to X.Y.Z"
git flow hotfix finish X.Y.Z       # merge to main + develop, tag
git push origin main develop --tags
```

---

## Tools

| Tool | Purpose |
|------|---------|
| `scripts/bump-version.sh` | Updates `package.json` version (no git side-effects) |
| `pnpm version:bump X.Y.Z` | npm script wrapper for the above |
| `git flow release start/finish` | Manages release branches, merges, and tags |

---

## History

| Tag   | Date       | Summary                                |
|-------|------------|----------------------------------------|
| 1.0.0 | 2026-01-09 | Phase 1 MVP — placeholder landing page |
| 1.1.0 | TBD        | Phase 2 — full site with all content   |
