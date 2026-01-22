---
name: content-generation
description: Generate structured copy for services/projects/about/blog using only factual sources, no code edits
metadata:
  short-description: Content writing without inventing facts
---

# Content Generation Skill

Generates contractor-focused copy for services, projects, about page, and blog drafts.

## Constraints

- **No invented facts**: Only use information from documented sources.
- **No code edits**: Output paste-ready content, do not edit code files.

## Step-by-Step Workflow

### 1. Read Required Docs
```
Read: AGENTS.md
Read: docs/llm.md
```

### 2. Read Factual Sources
```
Read: legacy/content/home/index.md
Read: legacy/content/services/*.md
Read: legacy/content/projects/*.md
Read: legacy/content/other/testimonials.md
Read: src/lib/data/services.ts
Read: src/lib/data/projects.ts
Read: src/lib/data/testimonials.ts
```

### 3. Understand Data Structures

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

### 4. Company Facts (verified)

From `docs/llm.md`:
- **Company**: Clarke Carpentry Contractors Ltd
- **Location**: Bristol, Bath, South West England
- **Address**: Unit 5 Wansdyke Workshops, Unity Road, Keynsham, Bristol BS31 1NH
- **Office**: 01225 350376
- **Mobile**: 07540 150412
- **Email**: info@clarkecarpentry.co.uk
- **Services**: 11 total (see data file for list)
- **Projects**: 12 total (see data file for list)

### 5. Generate Content

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

**For Blog Posts:**
Save as markdown:
```markdown
---
title: "Post Title"
slug: "post-slug"
excerpt: "Brief excerpt..."
---

# Post Title

Content based on factual sources...
```

### 6. Output Format

```markdown
## Generated Content

### Type
[Service / Project / Blog Post / About Page]

### Content
[Paste-ready TypeScript object or Markdown]

### Sources Used
- [Which files were used as sources]

### Verification
- [ ] All facts traceable to source documents
- [ ] Matches required data structure
- [ ] Professional tone for construction industry
```

## Writing Guidelines

- Professional, technical, expert-focused tone
- Plain English, no marketing hyperbole
- Target audience: construction companies reviewing tenders
- Emphasize: quality, reliability, professionalism

## Do Not

- Invent statistics, dates, or claims not in sources
- Make up client names or project details
- Edit code files (output paste-ready content only)
- Use casual or overly promotional language
