---
name: content-generation
description: Generate structured copy for services/projects/about/blog using market research for topics and factual sources for company info, outputs Portable Text for Sanity
metadata:
  short-description: Content writing with market research and Portable Text output
---

# Content Generation Skill

Generates contractor-focused copy for services, projects, about page, and blog drafts. Performs market research for blog topics and outputs Sanity-ready Portable Text.

## Constraints

- **No invented company facts**: Only use information from documented sources for company facts.
- **Research blog topics**: Use web search to find trending keywords and topics before writing.
- **No code edits**: Output paste-ready content, do not edit code files.
- **Portable Text for blogs**: Output blog content as Sanity Portable Text JSON.

## Step-by-Step Workflow

### 1. Read Required Docs
```
Read: AGENTS.md
Read: docs/llm.md
Read: docs/content-brief.md  # Primary source for brand voice, key messages, SEO keywords
```

### 2. Market Research (for Blog Topics)

Before writing blog content, research trending topics and keywords:

**Keyword Research:**
```
WebSearch: "Bristol carpentry contractor blog topics 2026"
WebSearch: "commercial carpentry trends UK"
WebSearch: "construction industry content marketing"
```

**Competitor Analysis:**
```
WebSearch: "site:carpentry contractor blog UK"
firecrawl_search: "carpentry contractor case studies Bristol Bath"
```

**Local SEO Keywords to Target:**
- "commercial carpentry Bristol"
- "fit-out contractors Bath"
- "timber frame construction South West"
- "shopfitting contractors Bristol"

**Topic Selection Criteria:**
- Can be written using Clarke Carpentry's actual project experience
- Targets local search intent
- Demonstrates expertise (E-E-A-T)
- Has verifiable facts from company sources

### 3. Read Factual Sources (for Company Facts)
```
Read: docs/content-brief.md  # Brand voice, company facts, Mike Clarke bio, CTA strategy
Read: legacy/content/home/index.md
Read: legacy/content/services/*.md
Read: legacy/content/projects/*.md
Read: legacy/content/other/testimonials.md
Read: src/lib/data/services.ts
Read: src/lib/data/projects.ts
Read: src/lib/data/testimonials.ts
```

### 4. Understand Data Structures

**Service Interface:**
```typescript
interface Service {
  name: string;
  slug: string;
  description: string;
  features: string[];
}
```

**Project Interface:**
```typescript
interface Project {
  name: string;
  slug: string;
  type: "Commercial" | "Domestic";
  client?: string;
  description: string;
  completedDate: string;
  services: string[];
}
```

### 5. Company Facts (verified)

From `docs/llm.md`:
- **Company**: Clarke Carpentry Contractors Ltd
- **Location**: Bristol, Bath, South West England
- **Address**: Unit 5 Wansdyke Workshops, Unity Road, Keynsham, Bristol BS31 1NH
- **Office**: 01225 350376
- **Mobile**: 07540 150412
- **Email**: info@clarkecarpentry.co.uk
- **Services**: 11 total (see data file for list)
- **Projects**: 12 total (see data file for list)

### 6. Generate Content

**For Service Content:**
```typescript
{
  name: "Service Name",
  slug: "service-slug",
  description: "Professional description based on legacy content...",
  features: ["Feature from legacy content", "Another feature", ...]
}
```

**For Project Content:**
```typescript
{
  name: "Project Name",
  slug: "project-slug",
  type: "Commercial",
  client: "Client from legacy content",
  description: "Description based on legacy content...",
  completedDate: "Month Year from legacy",
  services: ["service-slug-1"]
}
```

**For Blog Posts (Markdown Draft):**
```markdown
---
title: "Post Title"
slug: "post-slug"
excerpt: "Brief excerpt..."
---

# Post Title

Content based on factual sources...
```

**For Blog Posts (Portable Text for Sanity):**
```typescript
{
  _type: "post",
  title: "Post Title",
  slug: { current: "post-slug" },
  excerpt: "Brief excerpt...",
  publishedAt: "2026-01-22T00:00:00Z",
  body: [
    {
      _type: "block",
      _key: "intro1",
      style: "normal",
      children: [
        { _type: "span", _key: "span1", marks: [], text: "Paragraph text here. " },
        { _type: "span", _key: "span2", marks: ["strong"], text: "Bold text" },
        { _type: "span", _key: "span3", marks: [], text: " continues." }
      ],
      markDefs: []
    },
    {
      _type: "block",
      _key: "heading1",
      style: "h2",
      children: [
        { _type: "span", _key: "span4", marks: [], text: "Section Heading" }
      ],
      markDefs: []
    },
    {
      _type: "block",
      _key: "para2",
      style: "normal",
      children: [
        { _type: "span", _key: "span5", marks: [], text: "More content with a " },
        { _type: "span", _key: "span6", marks: ["link1"], text: "link" },
        { _type: "span", _key: "span7", marks: [], text: "." }
      ],
      markDefs: [
        { _type: "link", _key: "link1", href: "https://example.com" }
      ]
    },
    {
      _type: "block",
      _key: "list1",
      style: "normal",
      listItem: "bullet",
      level: 1,
      children: [
        { _type: "span", _key: "span8", marks: [], text: "List item one" }
      ],
      markDefs: []
    }
  ]
}
```

**Portable Text Key Points:**
- Each `_key` must be unique within the document
- `style`: "normal", "h1", "h2", "h3", "h4", "blockquote"
- `marks`: Decorators ("strong", "em", "underline", "code") OR keys referencing `markDefs`
- `markDefs`: Annotations with `_type`, `_key`, and custom fields
- `listItem`: "bullet" or "number" with `level` for nesting

### 7. Output Format

```markdown
## Generated Content

### Type
[Service / Project / Blog Post / About Page]

### Market Research (for blog posts)
- **Keywords targeted**: [list of keywords]
- **Topic rationale**: [why this topic was chosen]
- **Competitor examples**: [what others wrote about]

### Content
[Paste-ready TypeScript object, Markdown, or Portable Text JSON]

### Sources Used
- [Which files were used as sources]
- [Which web searches informed topic selection]

### Verification
- [ ] All company facts traceable to source documents
- [ ] Topic backed by Clarke Carpentry's actual experience
- [ ] Matches required data structure (TS/Markdown/Portable Text)
- [ ] Professional tone for construction industry
- [ ] Local SEO keywords incorporated naturally
```

## Writing Guidelines

- Professional, technical, expert-focused tone
- Plain English, no marketing hyperbole
- Target audience: construction companies reviewing tenders
- Emphasize: quality, reliability, professionalism

## Do Not

- Invent **company facts**, statistics, dates, or claims not in sources
- Make up client names or project details
- Edit code files (output paste-ready content only)
- Use casual or overly promotional language
- Write about topics that can't be backed by Clarke Carpentry's actual experience
- Skip market research when generating blog topic ideas
