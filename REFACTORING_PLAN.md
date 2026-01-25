# Math Academy Codebase Refactoring Plan

## Overview

This plan addresses **~40,000+ lines of duplicated code** across 44 courses through incremental, low-risk phases.

**Current State:**
- 56 courses registered, 44 course directories in workspace
- ~1,200 lines of identical code per course
- GamificationContext: 461 lines duplicated × 2 courses (basic-algebra, abstract-algebra), 42 courses already use thin wrapper
- Build configs: 100% identical across all courses
- Layout components: 100% identical across all courses

---

## Implementation Progress

| Phase | Status | Notes |
|-------|--------|-------|
| 1. Build Config | **DONE** | All 44 courses updated, ~3,700 lines removed |
| 2. GamificationContext | **PARTIAL** | Template created; only 2 courses need migration (basic-algebra, abstract-algebra have chapter completion logic not in shared) |
| 3. Layout Components | **IN PROGRESS** | CourseConfigContext created |
| 4. Section Loader | **DONE** | All 34 courses with section loaders updated, ~3,200 lines removed |
| 5. Re-export Cleanup | PENDING | |

### Files Created
- `shared/config/tailwind.base.config.js`
- `shared/config/postcss.config.js`
- `shared/config/eslint.base.config.js`
- `shared/routing/sectionLoader.ts`
- `shared/routing/index.ts`
- `shared/templates/GamificationContext.tsx`
- `shared/contexts/CourseConfigContext.tsx`

### Files Updated (all 44 courses)
- `*/tailwind.config.js` - Now 2 lines (was 47)
- `*/postcss.config.js` - Now 1 line (was 6)
- `*/eslint.config.js` - Now 2 lines (was 28)
- `*/src/App.tsx` - Section loaders now 6 lines (was ~50-100 lines) - 34 courses updated

---

## Phase 1: Build Configuration Consolidation

**Impact:** ~4,300 lines removed | **Risk:** Very Low | **Effort:** 1-2 days

### Problem
Each course has identical copies of:
- `tailwind.config.js` (47 lines)
- `postcss.config.js` (6 lines)
- `eslint.config.js` (28 lines)
- `tsconfig.app.json` (17 lines)

### Solution
Follow the existing `vite.base.config.ts` pattern to create shared config factories.

**Files to create:**
```
shared/config/
  tailwind.base.config.js   # createTailwindConfig(options)
  postcss.config.js         # Direct export
  eslint.base.config.js     # createEslintConfig(options)
```

**Course files become:**
```javascript
// tailwind.config.js (3 lines)
import { createTailwindConfig } from '../shared/config/tailwind.base.config.js';
export default createTailwindConfig();

// postcss.config.js (1 line)
export { default } from '../shared/config/postcss.config.js';

// eslint.config.js (3 lines)
import { createEslintConfig } from '../shared/config/eslint.base.config.js';
export default createEslintConfig();
```

### Verification
1. Build df-course after migration
2. Run `pnpm run test:shared`
3. Run e2e tests: `pnpm --filter e2e test`

---

## Phase 2: GamificationContext Migration (CRITICAL)

**Impact:** ~19,000 lines removed | **Risk:** Medium | **Effort:** 3-5 days

### Problem
- 43 courses have **461-line old implementations** with full reducer logic
- 1 course (df-course) has **34-line thin wrapper** that delegates to shared
- Risk of XP/mastery calculation drift between implementations

### Solution
Migrate all courses to df-course's thin wrapper pattern.

**Target pattern** (from `df-course/src/contexts/GamificationContext.tsx`):
```typescript
import { type ReactNode } from 'react';
import { COURSE_ID } from '@/config';
import {
  GamificationProvider as SharedGamificationProvider,
  useGamification,
  type SectionId,
} from '@shared/gamification';

export { useGamification };

const COURSE_PREFIX = COURSE_ID;

export function makeSectionId(numericId: number): SectionId {
  return `${COURSE_PREFIX}:${numericId}` as SectionId;
}

export function GamificationProvider({ children }: { children: ReactNode }) {
  return (
    <SharedGamificationProvider courseId={COURSE_ID}>
      {children}
    </SharedGamificationProvider>
  );
}
```

### Migration Batches
1. **Batch 1** (Low Risk): Newer courses - tontines, tao-analysis-1, frost, lcn, saylor-diss
2. **Batch 2** (Medium Risk): Standard courses - most workspace courses
3. **Batch 3** (Higher Risk): Legacy courses - aa, ba, cryptography

### Verification
1. Run `pnpm run test:shared` (mastery/XP baseline tests)
2. Manual test: Complete a quiz, verify XP awarded correctly
3. Verify localStorage state structure matches expected format
4. Test server sync if authenticated with Nostr

---

## Phase 3: Layout Component Consolidation

**Impact:** ~40,000 lines removed | **Risk:** Medium | **Effort:** 5-7 days

### Problem
Each course has ~986 lines of identical layout components:
- `Header.tsx` (114 lines)
- `Sidebar.tsx` (191 lines)
- `LessonLayout.tsx` (229 lines)
- `Callout.tsx` (79-98 lines)
- `Card.tsx`, `MathBlock.tsx`, `ContentBlocks.tsx`

### Solution

**Step 1:** Create `CourseConfigContext` in shared:
```typescript
// shared/contexts/CourseConfigContext.tsx
interface CourseConfig {
  id: CourseId;
  name: string;
  icon: string;
  hubUrl: string;
  features: Features;
  getSectionById: (id: number) => Section | undefined;
  getAdjacentSections: (id: number) => { prev: Section | null; next: Section | null };
}
```

**Step 2:** Move layout components to shared:
```
shared/components/
  layout/
    Header.tsx        # Reads from CourseConfigContext
    Sidebar.tsx       # Reads from CourseConfigContext
    LessonLayout.tsx  # Reads from CourseConfigContext
  common/
    Callout.tsx       # Unified with all type variants
    Card.tsx
    MathBlock.tsx
    ContentBlocks.tsx
```

**Step 3:** Update course App.tsx to provide context:
```typescript
import { CourseConfigProvider } from '@shared/contexts/CourseConfigContext';
import { Header, Sidebar } from '@shared/components/layout';

const courseConfig = { id: COURSE_ID, name: COURSE_NAME, ... };

export default function App() {
  return (
    <CourseConfigProvider config={courseConfig}>
      {/* Components now read from context */}
    </CourseConfigProvider>
  );
}
```

### Verification
1. Visual comparison (screenshots) before/after
2. Test navigation flow through sections
3. Test responsive behavior on mobile
4. Verify all Callout variants render correctly

---

## Phase 4: Section Loader Automation

**Impact:** ~4,400 lines removed | **Risk:** Low | **Effort:** 1-2 days

### Problem
Each course's `App.tsx` has ~100 lines of manual section imports:
```typescript
const sectionLoaders = {
  0: () => import('@/pages/sections/Section00'),
  1: () => import('@/pages/sections/Section01'),
  // ... repeated for each section
};
```

### Solution

**Option A:** Factory function:
```typescript
// shared/routing/sectionLoader.ts
export function createSectionLoaders(totalSections: number) {
  const loaders = {};
  for (let i = 0; i <= totalSections; i++) {
    const padded = i.toString().padStart(2, '0');
    loaders[i] = () => import(`@/pages/sections/Section${padded}`);
  }
  return loaders;
}
```

**Option B:** Vite glob import:
```typescript
const modules = import.meta.glob('@/pages/sections/Section*.tsx');
const sectionLoaders = Object.fromEntries(
  Object.entries(modules).map(([path, loader]) => {
    const num = parseInt(path.match(/Section(\d+)/)[1], 10);
    return [num, loader];
  })
);
```

### Verification
1. Test section navigation: /section/0, /section/5, last section
2. Verify lazy loading in browser network tab
3. Test 404 for invalid section IDs

---

## Phase 5: Remove Re-export Boilerplate

**Impact:** ~880 files removed | **Risk:** Very Low | **Effort:** 0.5 days

### Problem
Each course has `src/lib/gamification/` with thin re-export files:
```typescript
// masteryCalculator.ts (5 lines)
export { getMasteryInfo, calculateMastery } from '@shared/gamification';
```

### Solution
Update imports throughout codebase to use `@shared` directly:
```typescript
// Before
import { calculateMastery } from '@/lib/gamification/masteryCalculator';

// After
import { calculateMastery } from '@shared/gamification';
```

Then delete `src/lib/gamification/` directories.

### Verification
1. TypeScript compilation succeeds
2. Build succeeds
3. Runtime smoke test

---

## Implementation Order

| Week | Phase | Description |
|------|-------|-------------|
| 1 | 1 + 4 | Build configs + Section loaders (parallel) |
| 2 | 2 (Batch 1) | GamificationContext - newer courses |
| 3 | 2 (Batch 2-3) | GamificationContext - remaining courses |
| 4 | 5 | Re-export cleanup |
| 5-6 | 3 | Layout components |

---

## Critical Files

**To modify:**
- `shared/config/` - New directory for build configs
- `shared/contexts/CourseConfigContext.tsx` - New context
- `shared/components/layout/` - Moved layout components
- `shared/routing/sectionLoader.ts` - New section loader utility
- Each course's `src/contexts/GamificationContext.tsx` - Replace with thin wrapper

**Reference implementations:**
- `df-course/src/contexts/GamificationContext.tsx` - The 34-line thin wrapper pattern to copy
- `shared/vite.base.config.ts` - Existing pattern for shared config factories
- `shared/gamification/GamificationContext.tsx` - The canonical 476-line implementation

---

## Verification Checklist

After each phase:
- [ ] `pnpm run build:all` succeeds
- [ ] `pnpm run test:shared` passes
- [ ] `pnpm --filter e2e test` passes
- [ ] Manual test: Quiz completion awards correct XP
- [ ] Manual test: Section navigation works
- [ ] Deploy to staging before merging

---

## Expected Outcome

| Metric | Before | After |
|--------|--------|-------|
| Duplicated lines | ~43,000 | ~5,000 |
| Files per course | ~25 | ~12 |
| GamificationContext lines/course | 461 | 34 |
| Build config lines/course | 98 | 7 |
