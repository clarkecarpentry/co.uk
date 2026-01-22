# Handoff Document

Current status for context continuity between sessions. Update this at the end of every session or major task.

---

## Last Updated

2026-01-22

---

## Current Focus

**Phase 2.3 Sanity CMS** - PARTIAL COMPLETE

Sanity Studio and schemas are ready. Content migration is next.

---

## Recent Work

1. **Sanity CMS Setup (Phase 2.3 partial)**
   - Embedded Studio at `/studio` route using `next-sanity`
   - Created 6 schema types: service, project, blogPost, testimonial, siteSettings, blockContent
   - Configured Sanity client with GROQ queries
   - Added env vars to `env.js` and `.env.example`
   - Structured Studio with siteSettings as singleton

2. Enhanced content agents with market research + Portable Text

3. Created Claude Code subagents and Codex skills

4. Earlier: Implemented contact form with Resend SDK (Phase 2.4)

---

## What's Next

### Immediate (Phase 2.3 completion)

1. **Run the Studio** - `pnpm dev` then visit `http://localhost:3000/studio`
2. **Test schemas** - Create a test service/project in Studio to verify
3. **Content migration** - Create script to migrate static data to Sanity
4. **Switch pages** - Update pages to fetch from Sanity instead of static data

### Then

- **2.2 Content Generation** - Use content agents to generate improved copy
- **2.5 Design Beautification** - Need model website URL from user
- **2.6 SEO Technical**
- **2.7 Testing**
- **2.8 Launch**

---

## Sanity Quick Reference

| Item | Value |
|------|-------|
| Project ID | `07w52gq6` |
| Dataset | `production` |
| Studio URL | `http://localhost:3000/studio` |
| Schemas | `src/sanity/schemaTypes/` |
| Client | `src/sanity/lib/client.ts` |
| Queries | `src/sanity/lib/queries.ts` |
| Fetch helpers | `src/sanity/lib/fetch.ts` |

**Commands:**
```bash
pnpm dev              # Run Next.js + Studio
# Visit http://localhost:3000/studio
```

---

## Blockers / Pending Decisions

- **Content migration**: Need to decide whether to migrate via script or manual entry
- **Design**: Need model website reference before starting 2.5
- **Resend API**: Placeholder key in `.env` - user needs to add real key for testing

---

## Environment Notes

- On `develop` branch
- Sanity deps installed: `sanity@4`, `next-sanity@11`, `@sanity/vision@4`, `@sanity/image-url@1`
- Studio configured for MCP (VS Code, Claude Code)

---

## File Changes This Session

**Created:**
- `src/sanity/schemaTypes/blockContent.ts`
- `src/sanity/schemaTypes/service.ts`
- `src/sanity/schemaTypes/project.ts`
- `src/sanity/schemaTypes/blogPost.ts`
- `src/sanity/schemaTypes/testimonial.ts`
- `src/sanity/schemaTypes/siteSettings.ts`
- `src/sanity/lib/queries.ts`
- `src/sanity/lib/fetch.ts`

**Modified:**
- `src/sanity/schemaTypes/index.ts` - exports all schemas
- `src/sanity/structure.ts` - custom structure with siteSettings singleton
- `src/env.js` - added Sanity client vars
- `.env.example` - added Sanity vars documentation
- `docs/llm.md` - updated Sanity status
- `docs/roadmap.md` - ticked 2.3 setup items
- `docs/handoff.md` - this file

**Created by Sanity CLI:**
- `sanity.config.ts`
- `sanity.cli.ts`
- `src/app/studio/[[...tool]]/page.tsx`
- `src/sanity/env.ts`
- `src/sanity/lib/client.ts`
- `src/sanity/lib/image.ts`
- `src/sanity/lib/live.ts`
