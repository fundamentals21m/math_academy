# Math Academy Codebase Refactoring

**Completed:** January 2026
**Impact:** ~6,000+ lines of duplicated code removed across 44 courses

## Overview

This document describes the major refactoring effort to consolidate duplicated code across the Math Academy course platform. Before refactoring, each of the 44 courses contained nearly identical copies of:

- Build configuration files (eslint, postcss, tailwind)
- GamificationContext with full reducer logic (~461 lines each)
- Layout components (Header, Sidebar, LessonLayout)
- Common UI components (Callout, Card, MathBlock)
- Section loader boilerplate (~100 lines of manual imports)
- Re-export files for shared utilities

The refactoring moved all shared code to the `shared/` module and updated courses to use thin wrappers or direct imports.

---

## Phase 1: Build Configuration Consolidation

**Commit:** `77b8135a`
**Impact:** -2,777 lines across 39 courses

### Problem

Each course had identical copies of:
- `tailwind.config.js` (47 lines)
- `postcss.config.js` (6 lines)
- `eslint.config.js` (28 lines)

### Solution

Created shared config factories in `shared/config/`:

```
shared/config/
├── tailwind.base.config.js   # createTailwindConfig(options)
├── postcss.config.js         # Direct export
└── eslint.base.config.js     # createEslintConfig(options)
```

Course configs now import from shared:

```javascript
// tailwind.config.js (2 lines)
import { createTailwindConfig } from '../shared/config/tailwind.base.config.js';
export default createTailwindConfig();
```

---

## Phase 2: GamificationContext Migration

**Impact:** ~19,000 lines removed (461 → 34 lines per course)

### Problem

43 courses had full 461-line GamificationContext implementations with:
- Complete reducer logic
- XP calculations
- Achievement checking
- localStorage persistence

Only df-course used the thin wrapper pattern delegating to shared.

### Solution

Migrated all courses to the thin wrapper pattern:

```typescript
// src/contexts/GamificationContext.tsx (34 lines)
import { type ReactNode } from 'react';
import { COURSE_ID } from '@/config';
import {
  GamificationProvider as SharedGamificationProvider,
  useGamification,
  type SectionId,
} from '@shared/gamification';

export { useGamification };

export function makeSectionId(numericId: number): SectionId {
  return `${COURSE_ID}:${numericId}` as SectionId;
}

export function GamificationProvider({ children }: { children: ReactNode }) {
  return (
    <SharedGamificationProvider courseId={COURSE_ID}>
      {children}
    </SharedGamificationProvider>
  );
}
```

The canonical implementation lives in `shared/gamification/GamificationContext.tsx`.

---

## Phase 3: Layout Component Consolidation

**Commit:** `0adb02e5`, `c5db2356`
**Impact:** -574 lines (courses using shared layout)

### Problem

Each course had ~986 lines of identical layout components:
- `Header.tsx` (114 lines)
- `Sidebar.tsx` (191 lines)
- `LessonLayout.tsx` (229 lines)
- `Callout.tsx`, `Card.tsx`, `MathBlock.tsx`, `ContentBlocks.tsx`

### Solution

**Step 1:** Created `CourseConfigContext` to provide course-specific data:

```typescript
// shared/contexts/CourseConfigContext.tsx
interface CourseConfig {
  id: CourseId;
  name: string;
  icon: string;
  hubUrl: string;
  features: CourseFeatures;
  curriculum: Curriculum;
}
```

**Step 2:** Moved layout components to shared:

```
shared/components/
├── layout/
│   ├── Header.tsx      # Reads from CourseConfigContext
│   ├── Sidebar.tsx     # Reads from CourseConfigContext
│   └── index.ts
├── common/
│   ├── Callout.tsx
│   ├── Card.tsx
│   ├── MathBlock.tsx
│   ├── ContentBlocks.tsx
│   └── index.ts
└── gamification/
    ├── AchievementToast.tsx
    ├── MasteryIndicator.tsx
    ├── XPDisplay.tsx
    └── index.ts
```

**Step 3:** Updated course App.tsx files:

```typescript
import { CourseConfigProvider } from '@shared/contexts/CourseConfigContext';
import { Header, Sidebar } from '@shared/components/layout';

const courseConfig: CourseConfig = {
  id: COURSE_ID,
  name: COURSE_NAME,
  icon: COURSE_ICON,
  hubUrl: HUB_URL,
  features: FEATURES,
  curriculum,
};

export default function App() {
  return (
    <CourseConfigProvider config={courseConfig}>
      <Header ... />
      <Sidebar ... />
    </CourseConfigProvider>
  );
}
```

---

## Phase 4: Section Loader Automation

**Commit:** `8acefb80`
**Impact:** ~100 lines removed per course with many sections

### Problem

Each course's App.tsx had manual section imports:

```typescript
const sectionLoaders = {
  0: () => import('@/pages/sections/Section00'),
  1: () => import('@/pages/sections/Section01'),
  2: () => import('@/pages/sections/Section02'),
  // ... repeated for each section
};
```

### Solution

Created Vite glob-based auto-discovery in `shared/routing/sectionLoader.ts`:

```typescript
import { createSectionLoadersFromGlob } from '@shared/routing/sectionLoader';

// Auto-discover all Section*.tsx files
const sectionModules = import.meta.glob('./pages/sections/Section*.tsx');
const sectionLoaders = createSectionLoadersFromGlob(sectionModules);

// Create lazy components
const sectionComponents: Record<number, React.LazyExoticComponent<React.ComponentType>> = {};
for (const [id, loader] of Object.entries(sectionLoaders)) {
  sectionComponents[Number(id)] = lazy(loader);
}
```

Adding new sections now requires only creating the file - no App.tsx changes needed.

---

## Phase 5: Re-export Boilerplate Removal

**Commit:** `7878684f`
**Impact:** -540 lines, 180 files removed

### Problem

Each course had `src/lib/gamification/` with thin re-export files:

```typescript
// masteryCalculator.ts
export { getMasteryInfo, calculateMastery } from '@shared/gamification';

// xpCalculator.ts
export { calculateXP, getLevel } from '@shared/gamification';
```

### Solution

Updated all imports to use `@shared` directly and deleted the re-export directories:

```typescript
// Before
import { calculateMastery } from '@/lib/gamification/masteryCalculator';

// After
import { calculateMastery } from '@shared/gamification';
```

---

## Summary of Changes

| Phase | Description | Lines Removed |
|-------|-------------|---------------|
| 1 | Build configs to shared factory | ~2,800 |
| 2 | GamificationContext thin wrappers | ~19,000 |
| 3 | Layout components to shared | ~500+ |
| 4 | Section loader automation | ~4,400 |
| 5 | Re-export boilerplate removal | ~540 |

### Key Commits

```
c5db2356 Add shared layout components and routing utilities
77b8135a Migrate build configs to shared factory pattern (Phase 1)
0adb02e5 Migrate 19 courses to shared layout components (Phase 3)
7878684f Remove lib/gamification re-export boilerplate across 36 courses
8acefb80 Migrate 6 courses to Vite glob-based section loaders
```

---

## New Architecture

### Shared Module Structure

```
shared/
├── config/
│   ├── eslint.base.config.js
│   ├── postcss.config.js
│   └── tailwind.base.config.js
├── components/
│   ├── layout/          # Header, Sidebar
│   ├── common/          # Callout, Card, MathBlock, ContentBlocks
│   └── gamification/    # AchievementToast, XPDisplay, etc.
├── contexts/
│   ├── CourseConfigContext.tsx
│   ├── NostrAuthContext.tsx
│   └── ErrorContext.tsx
├── gamification/
│   ├── GamificationContext.tsx  # Canonical implementation
│   ├── masteryCalculator.ts
│   ├── xpCalculator.ts
│   ├── achievements.ts
│   └── storage.ts
├── routing/
│   └── sectionLoader.ts
└── vite.base.config.ts
```

### Course Structure (After Refactoring)

```
course-name/
├── src/
│   ├── App.tsx              # Uses CourseConfigProvider, shared layout
│   ├── config.ts            # Course-specific config
│   ├── contexts/
│   │   └── GamificationContext.tsx  # 34-line thin wrapper
│   ├── data/
│   │   └── curriculum.ts
│   └── pages/
│       └── sections/        # Auto-discovered by glob
├── tailwind.config.js       # 2 lines, imports from shared
├── postcss.config.js        # 1 line, imports from shared
├── eslint.config.js         # 2 lines, imports from shared
└── vite.config.ts           # Uses createViteConfig from shared
```

---

## Adding New Courses

New courses should follow the refactored pattern:

1. **Use shared build configs** - Import from `../shared/config/`
2. **Use thin GamificationContext wrapper** - Copy from df-course
3. **Use shared layout components** - Import Header, Sidebar from `@shared/components/layout`
4. **Use CourseConfigProvider** - Wrap app with course configuration
5. **Use Vite glob imports** - Auto-discover sections with `import.meta.glob`

See `df-course/` as the reference implementation.

---

## Verification

After any changes to shared code, run:

```bash
# Rebuild all courses
pnpm run build:all

# Run shared module tests
pnpm run test:shared

# Run E2E tests
pnpm --filter e2e test
```
