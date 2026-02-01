---
name: test-happy-paths
description: Add minimal unit tests (contact validation) and E2E smoke tests (homepage, nav, contact, services, projects)
metadata:
  short-description: Minimal testing for Phase 2.7
---

# Test Happy Paths Skill

Adds minimal unit tests and E2E smoke tests aligned to Phase 2.7 scope.

## Constraints

- **Minimal scope**: Only test what's in Phase 2.7 roadmap.
- **No refactors**: Fix bugs with smallest possible change only.
- **Prefer existing tools**: Check for Vitest/Playwright before adding.

## Step-by-Step Workflow

### 1. Read Required Docs
```
Read: AGENTS.md
Read: docs/llm.md
Read: docs/roadmap.md (Phase 2.7 section)
```

### 2. Check Existing Test Setup
```bash
# Check package.json for test dependencies
cat package.json | grep -E "vitest|playwright|jest"

# Check for config files
ls vitest.config.* playwright.config.* 2>/dev/null
```

### 3. Phase 2.7 Scope (from roadmap)

**Unit Tests (Minimal):**
- [ ] Contact form validation (`src/lib/validations/contact.ts`)
- [ ] Utility functions (`src/lib/utils.ts`)

**E2E Tests (Happy Path Only):**
- [ ] Homepage loads correctly
- [ ] Navigation between pages works
- [ ] Contact form submission flow
- [ ] Services page displays all 11 services
- [ ] Projects page displays all 12 projects

### 4. Setup Testing (if not configured)

**For Vitest (unit tests):**
```bash
pnpm add -D vitest @testing-library/react
```

Create `vitest.config.ts`:
```typescript
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
  },
});
```

**For Playwright (E2E):**
```bash
pnpm add -D @playwright/test
npx playwright install
```

Create `playwright.config.ts`:
```typescript
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  use: {
    baseURL: 'http://localhost:3000',
  },
});
```

### 5. Write Unit Tests

**Contact Validation Test (`src/lib/validations/__tests__/contact.test.ts`):**
```typescript
import { describe, it, expect } from 'vitest';
import { contactFormSchema } from '../contact';

describe('contactFormSchema', () => {
  it('validates correct input', () => {
    const result = contactFormSchema.safeParse({
      firstName: 'John',
      lastName: 'Smith',
      email: 'john@example.com',
      message: 'Test message here',
    });
    expect(result.success).toBe(true);
  });

  it('rejects invalid email', () => {
    const result = contactFormSchema.safeParse({
      firstName: 'John',
      lastName: 'Smith',
      email: 'invalid',
      message: 'Test message',
    });
    expect(result.success).toBe(false);
  });
});
```

### 6. Write E2E Tests

**Homepage Test (`e2e/homepage.spec.ts`):**
```typescript
import { test, expect } from '@playwright/test';

test('homepage loads', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Clarke Carpentry/);
});

test('navigation works', async ({ page }) => {
  await page.goto('/');
  await page.click('text=Services');
  await expect(page).toHaveURL(/\/services/);
});
```

### 7. Run Tests
```bash
pnpm check
pnpm test        # Unit tests
pnpm test:e2e    # E2E tests (if configured)
```

### 8. Output Format

```markdown
## Testing Complete

### Setup
- Vitest: [Already configured / Added / NA]
- Playwright: [Already configured / Added / NA]

### Tests Added
- `path/to/test.ts` - [what it tests]
- ...

### Test Results
- Unit tests: [X passed, Y failed]
- E2E tests: [X passed, Y failed]

### Bugs Found
- [None / Description of bug and minimal fix]

### Verification
- `pnpm check`: [PASS/FAIL]
```

## Do Not

- Add tests beyond Phase 2.7 scope
- Refactor code (even if it could be "better")
- Add complex test utilities or abstractions
- Skip running tests after writing them
