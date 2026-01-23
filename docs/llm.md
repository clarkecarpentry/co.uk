# LLM Assistant Context

Essential context for LLM coding assistants. Read this at session start alongside AGENTS.md.

## Quick Navigation

| File | Purpose |
|------|---------|
| `AGENTS.md` | Operational rules, agent conduct, working agreement |
| `docs/state.json` | Machine-readable project state (phases, integrations) |
| `docs/roadmap.md` | Task checklist with completion status |
| `docs/handoff.md` | Where the last session left off |

---

## Project Summary

**Client:** Clarke Carpentry Contractors Ltd
**What:** Professional website for tender submissions to construction companies
**Audience:** Main contractors in construction industry (B2B)
**Region:** Bristol, Bath, South West England
**Launch:** Wednesday, January 29, 2026

### Business Context

Clarke Carpentry is an established carpentry subcontractor with 15+ years experience. The website serves as a professional presence for:
- Tender submissions to construction companies
- Showcasing completed projects and capabilities
- First point of contact for potential clients

This is **not** a consumer-facing site. The audience is construction professionals who need reliable subcontractors.

---

## Brand Guidelines

### Voice & Tone
- Professional but approachable
- Technical expertise without jargon
- Straightforward, no-nonsense
- Focus on reliability, quality, and experience

### Visual Identity
- **Theme:** Dark mode only (no light mode)
- **Accent color:** Green for CTAs and highlights
- **Logo:** Diamond shape, located at `public/logo.png`

### Key Messages
- 15+ years of experience
- On time, on budget delivery
- Handpicked staff for quality
- Long-term client relationships
- Full H&S credentials (CSCS, CITB, SSSTS, SMSTS, PASMA)

---

## Contact Information

Use this for content and testing:

| Field | Value |
|-------|-------|
| Company | Clarke Carpentry Contractors Ltd |
| Address | Unit 5 Wansdyke Workshops, Unity Road, Keynsham, Bristol BS31 1NH |
| Office | 01225 350376 |
| Mobile | 07540 150412 |
| Email | info@clarkecarpentry.co.uk |
| Dev email | clarkecarpentry@proton.me (for testing) |

---

## Content Structure

### Services (11 total)
1. Project Management
2. First Fix Carpentry
3. Second Fix Carpentry
4. Dry Lining
5. Extensions
6. Traditional Cut Roofs
7. New Build
8. Renovations
9. Bespoke Joinery
10. Kitchen Fitting
11. Timber Frame Construction

*Note: "Loft Conversions" and "Loft Extensions" were removed (spinning off to separate brand)*

### Projects (12 total)
Mix of residential and commercial work showcasing range of capabilities. See `src/lib/data/projects.ts` for full list.

### Blog (4 posts)
- Technical explainers (First Fix vs Second Fix)
- Industry insights (Traditional Roofs, Contractor Expectations)
- Project spotlights (Wilder House)

---

## Tech Stack Summary

- **Framework:** Next.js 15 (App Router, React 19)
- **Styling:** Tailwind CSS v4 + shadcn/ui
- **API:** tRPC with Zod validation
- **CMS:** Sanity.io (project: `07w52gq6`)
- **Email:** Resend
- **Testing:** Vitest (unit) + Playwright (E2E)
- **Hosting:** Vercel

For detailed tech setup, see `CLAUDE.md` (tRPC architecture) and `AGENTS.md` (file locations, commands).

---

## Sanity CMS

| Item | Value |
|------|-------|
| Project ID | `07w52gq6` |
| Production dataset | `production` |
| Development dataset | `development` (for testing) |
| Studio URL | `http://localhost:3000/studio` |
| Schemas | `src/sanity/schemaTypes/` |

Content is fully migrated. Sanity is the source of truth. Static data in `src/lib/data/` is fallback only.

---

## Phase Reminders

### Phase 2.5 (Design Beautification) - BLOCKED
Before starting, ask user for:
- Model website URL(s) for design reference
- Any specific design preferences

### Phase 2.8 (Launch)
- Deploy to Vercel
- Configure production domain
- Enable Vercel Analytics
- Verify contact form with production email
