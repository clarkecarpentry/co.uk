---
name: seo-nextjs
description: Implement App Router SEO - metadata, OG/Twitter, sitemap/robots, JSON-LD schema, verify with pnpm check/build
metadata:
  short-description: Technical SEO for Phase 2.6
---

# SEO Next.js Skill

Implements technical SEO for Next.js App Router aligned to Phase 2.6.

## Constraints

- **Minimal diffs**: Only change what's needed for SEO.
- **No invented facts**: Use only documented company info.
- **Verify with build**: Must run `pnpm check` and `pnpm build`.

## Step-by-Step Workflow

### 1. Read Required Docs
```
Read: AGENTS.md
Read: docs/llm.md
Read: docs/roadmap.md (Phase 2.6 section)
```

### 2. Phase 2.6 Scope (from roadmap)

- [ ] Schema.org markup (LocalBusiness, Service, Article)
- [ ] Meta tags for all pages (title, description)
- [ ] Open Graph tags for social sharing
- [ ] Sitemap generation (`next-sitemap`)
- [ ] robots.txt configuration
- [ ] Semantic HTML structure
- [ ] Image alt tags
- [ ] Internal linking strategy

### 3. Company Info (for metadata)

From `docs/llm.md`:
- **Name**: Clarke Carpentry Contractors Ltd
- **Description**: Carpentry contractor serving Bristol, Bath, South West England
- **Address**: Unit 5 Wansdyke Workshops, Unity Road, Keynsham, Bristol BS31 1NH
- **Phone**: 01225 350376
- **Email**: info@clarkecarpentry.co.uk
- **URL**: https://clarkecarpentry.co.uk

### 4. Implement Metadata

**Root Layout (`src/app/layout.tsx`):**
```typescript
export const metadata: Metadata = {
  metadataBase: new URL('https://clarkecarpentry.co.uk'),
  title: {
    default: 'Clarke Carpentry Contractors Ltd | Bristol & Bath',
    template: '%s | Clarke Carpentry',
  },
  description: 'Professional carpentry contractors serving Bristol, Bath and South West England.',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    siteName: 'Clarke Carpentry Contractors Ltd',
  },
  twitter: {
    card: 'summary_large_image',
  },
};
```

**Per-Page Metadata:**
```typescript
// In each page.tsx
export const metadata: Metadata = {
  title: 'Page Title',
  description: 'Page-specific description...',
};
```

### 5. Add JSON-LD Schema

**LocalBusiness Schema (in layout or homepage):**
```typescript
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Clarke Carpentry Contractors Ltd',
  description: 'Professional carpentry contractors...',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Unit 5 Wansdyke Workshops, Unity Road',
    addressLocality: 'Keynsham',
    addressRegion: 'Bristol',
    postalCode: 'BS31 1NH',
    addressCountry: 'GB',
  },
  telephone: '01225 350376',
  email: 'info@clarkecarpentry.co.uk',
  url: 'https://clarkecarpentry.co.uk',
};

// In component:
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
/>
```

### 6. Setup Sitemap

**Install next-sitemap:**
```bash
pnpm add next-sitemap
```

**Create `next-sitemap.config.js`:**
```javascript
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://clarkecarpentry.co.uk',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
    ],
  },
};
```

**Add to `package.json` scripts:**
```json
"postbuild": "next-sitemap"
```

### 7. Verify Changes
```bash
pnpm check
pnpm build
```

### 8. Output Format

```markdown
## SEO Implementation Complete

### Files Touched
- `src/app/layout.tsx` - [metadata changes]
- `src/app/[page]/page.tsx` - [page metadata]
- `next-sitemap.config.js` - [created]
- ...

### SEO Elements Added
- [x] Root metadata with defaults
- [x] Per-page metadata for X pages
- [x] Open Graph tags
- [x] Twitter card tags
- [x] JSON-LD LocalBusiness schema
- [x] Sitemap generation
- [x] robots.txt

### Verification
- `pnpm check`: [PASS/FAIL]
- `pnpm build`: [PASS/FAIL]

### Notes
[Any relevant notes]
```

## Do Not

- Redesign pages or change visual appearance
- Invent business claims or statistics
- Add SEO beyond Phase 2.6 scope
- Skip build verification
- Use placeholder content for metadata (use real company info)
