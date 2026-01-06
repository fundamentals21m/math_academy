# AGENTS.md - Magic Internet Math

Guidelines for AI agents working in this codebase.

## Project Overview

React 19 + TypeScript educational platform. Monorepo with courses in separate directories sharing code via `@magic-internet-math/shared`.

**Source courses**: 26 courses across mathematics, economics, and philosophy  
**Shared library**: `shared/` | **Firebase**: `firebase/functions/` | **Template**: `course-template/`

## Regression Testing

**Baseline Regression Tests** - 93 tests protecting critical functionality
- Location: `shared/test/regression/`
- Coverage: XP calculations, mastery levels, math rendering, quiz logic
- Status: ✅ 100% passing
- CI: Integrated into `.github/workflows/regression.yml`
- Documentation: `REGRESSION_BASELINES.md`

**How to Run**:
```bash
cd shared && npm run test:regression
```

**What's Protected**:
- XP values (Easy: 15, Medium: 25, Hard: 40)
- Mastery level thresholds (learning/familiar/mastered criteria)
- Math rendering behavior (KaTeX integration)
- Quiz logic (scoring formulas, randomization)

**Blocking Behavior**: Regression test failures block deployments by default

## Build/Lint/Test Commands

Run from course directory (e.g., `cd linalg`):

```bash
npm run dev              # Start dev server
npm run build            # Production build
npm run typecheck        # TypeScript check
npm run lint             # ESLint

# Testing (Vitest)
npm run test             # Watch mode
npm run test:run         # Single run
npx vitest run path/to/file.test.ts      # Single file
npx vitest run -t "pattern"              # Pattern match
npx vitest run shared/gamification/      # Directory
```

## Path Aliases

```typescript
import { Component } from '@/components/Component';    // ./src/*
import { config } from '@shared/config';               // ./src/shared/*
import { Button } from '@components/Button';           // ./src/components/*
import { type CourseId } from '@magic-internet-math/shared';
```

## Code Style

### TypeScript
- Strict mode enabled, no unused locals/parameters
- Use `import type` for type-only imports
- Target: ES2022, Module resolution: bundler

### Naming Conventions
| Element | Convention | Example |
|---------|------------|---------|
| Components | PascalCase | `SectionQuiz.tsx` |
| Hooks | camelCase + `use` | `useGamification` |
| Constants | SCREAMING_SNAKE | `XP_CONFIG` |
| Types | PascalCase | `QuizQuestion` |

## Recent Security & Code Quality Improvements

### ✅ Completed Fixes (2024 Audit)
- **TypeScript Errors**: Fixed 157+ type errors in crypto-react course
- **ESLint Issues**: Resolved unused imports, variables, and setState warnings
- **XSS Protection**: Enhanced LaTeX sanitization with DOMPurify
- **Input Validation**: Added comprehensive Zod schema validation
- **Error Handling**: Implemented global error context and boundaries
- **Bundle Optimization**: Manual chunking for better caching

### 🔒 Security Measures
- **No console statements** in production code (all use structured logging)
- **Environment variables** properly gitignored and validated
- **Firebase rules** enforce proper access control
- **Nostr authentication** with challenge-response protocol
- **Admin actions** logged for accountability

### 🏗️ Architecture Patterns
- **Lazy loading** for all section components
- **Error boundaries** wrap critical components
- **Shared library** for consistent functionality across courses
- **Monorepo structure** with proper dependency management

### Import Order
1. React and external libraries
2. Path aliases (`@/`, `@components/`)
3. Relative imports
4. Types last

### Component Pattern
```typescript
interface Props {
  title: string;
  children: ReactNode;
  className?: string;
}

export function Component({ title, children, className = '' }: Props) {
  const [state, setState] = useState(false);
  return <div className={`base-classes ${className}`}>{children}</div>;
}
```

### Error Handling
- Use Zod schemas from `shared/validation/schemas.ts` for validation
- Use centralized logger: `const logger = getLogger('ModuleName')`
- Log levels: `debug`, `info`, `warn`, `error`
- Validate external data (localStorage, API, Nostr)
- Wrap components in `ErrorBoundary` for graceful error recovery
- Use `ErrorProvider` + `ErrorDisplay` for user-facing errors

```typescript
import { getLogger } from '@magic-internet-math/shared';
const logger = getLogger('MyModule');
logger.error('Failed to load:', error);
```

### Math Rendering (KaTeX)
```tsx
import { Math, MathBlock } from '@components/common/MathBlock';

<p>Inline: <Math>x^2 + y^2</Math></p>
<MathBlock>{\int_0^\infty e^{-x^2} dx}</MathBlock>
```

### Content Blocks
```tsx
import { Definition, Theorem, Example } from '@components/common/ContentBlocks';

<Definition title="Vector Space">...</Definition>
<Theorem title="Rank-Nullity" proof={<>...</>}>...</Theorem>
<Example title="Finding Eigenvalues">...</Example>
```

### Styling
- Tailwind CSS, always dark mode
- Colors: `primary-*` (indigo), `dark-*` (slate)
- Fonts: Inter (sans), JetBrains Mono (mono)

## Testing
```typescript
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

describe('calculateXP', () => {
  it('returns base XP for perfect score', () => {
    expect(calculateXP('easy', 100)).toBe(XP_CONFIG.QUIZ_EASY);
  });
});
```

## Course Structure
```
{course}/
├── src/
│   ├── config/course.ts      # Course metadata
│   ├── data/
│   │   ├── curriculum.ts     # Parts/Sections structure
│   │   ├── theorems.ts       # Theorem index
│   │   └── quizzes/          # Quiz questions
│   ├── pages/sections/       # Section content
│   └── App.tsx
├── vite.config.ts
└── vitest.config.ts
```

## Quiz Question Format
```typescript
interface QuizQuestion {
  id: string;                    // 's01-e01'
  type: 'multiple-choice' | 'numeric';
  question: string;              // Supports LaTeX: $...$
  difficulty: 'easy' | 'medium' | 'hard';
  explanation: string;
  options?: string[];            // multiple-choice
  correctIndex?: number;
  correctAnswer?: number;        // numeric
}
```

## Curriculum Format
```typescript
interface Section { id: number; title: string; slug: string; description: string; }
interface Part { id: number; title: string; slug: string; sections: Section[]; }
```

## Book Chunks

PDF source materials are stored in `books/` (gitignored):

```
books/
├── README.md            # Documentation for adding books
├── four-pillars/        # Stillwell - Four Pillars of Geometry
├── linalg-book/         # Hoffman & Kunze - Linear Algebra
└── islr/                # James et al - Intro to Statistical Learning
```

When creating a new course with book source material:
1. Add book chunks to `books/[book-name]/` using chunking scripts
2. Create symlink in course: `ln -s ../books/[book-name] chunks`
3. Reference chunks via the symlink in your course

See `books/README.md` for detailed instructions.

## Common Tasks

### Deploying to GitHub Pages Hub

**CRITICAL**: Courses deployed to GitHub Pages (math_academy repo) MUST use the correct base path.

The base path must be `/math_academy/{deploy-dir}/` (NOT just `/{deploy-dir}/`).

**Use the deploy script** to build and deploy safely:
```bash
./scripts/deploy-to-hub.sh abstract-algebra aa
./scripts/deploy-to-hub.sh basic-algebra ba
```

The script will:
1. Verify `vite.config.ts` has the correct base path
2. Build the course
3. Copy to the deploy directory
4. Verify the built files have correct paths

**Manual verification**: Check `{deploy-dir}/index.html` contains `/math_academy/{deploy-dir}/assets/`:
```bash
grep "math_academy" aa/index.html  # Should show /math_academy/aa/assets/...
```

### New Course
1. Copy `course-template/` to new dir
2. Update `src/config/course.ts`, `vite.config.ts`
3. Define `curriculum.ts`, create sections, add quizzes
4. If using book source: add chunks to `books/` and create symlink
5. **For GitHub Pages deployment**: Set `base: '/math_academy/{deploy-dir}/'` in `vite.config.ts`

### New Section
1. Add to `curriculum.ts`
2. Create `Section{N}.tsx` in `pages/sections/`
3. Add lazy import in `App.tsx` (sections are code-split):
   ```typescript
   N: () => import('@/pages/sections/SectionN'),
   ```
4. Create `quizzes/section{N}.ts`

## Environment Variables
```bash
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=...
VITE_FIREBASE_PROJECT_ID=...
VITE_FIREBASE_STORAGE_BUCKET=...
VITE_FIREBASE_MESSAGING_SENDER_ID=...
VITE_FIREBASE_APP_ID=...
```

## Key Dependencies
React 19, Vite 5.4, TypeScript 5.9, Tailwind 3.4, Vitest, KaTeX, Framer Motion, Zod, nostr-tools, Firebase

## Architecture Notes

### Code Splitting
- All section pages are lazy-loaded via `React.lazy()` and `Suspense`
- Vendor chunks: `vendor-react`, `vendor-math` (KaTeX), `vendor-animation` (Framer)
- Use `LoadingSpinner` from shared for Suspense fallbacks

### Shared Package
- Single source of truth for `CourseId` type: `shared/types/courses.ts`
- Constants centralized in `shared/constants.ts`
- Each course has its own copy of `/shared` for standalone deployment
- See `shared/README.md` for detailed API documentation

### Testing
- Unit tests with Vitest + React Testing Library
- Use `@vitest-environment happy-dom` for React component tests
- Use `@vitest-environment node` for pure function tests
- Mock Firebase and external services in tests

### Firebase Functions Testing
- Tests located in `firebase/functions/test/`
- Run with `npm run test:run` from `firebase/functions/`
- Uses Vitest with mocked Firebase Admin SDK
- Tests cover: admin functions, scores, Nostr authentication

### Coverage Reports
- Requires Node 20+ (coverage uses `node:inspector/promises`)
- Run `npm run test:coverage` in `shared/` directory
- Current Node 18 users will see a helpful message with instructions

## Repository Size & Git LFS

**Current status (Dec 2024):** Git LFS is NOT needed

- Repository size: ~44 MB (well under GitHub's 1 GB limit)
- PDFs in `books/` are gitignored (not tracked)
- Built assets use content hashing (old builds auto-cleanup)
- Font files (~2 MB) are static and rarely change

**When to consider Git LFS:**
- If `.git` directory exceeds 500 MB
- If adding large binary assets that change frequently
- If GitHub warns about repository size

**What's tracked in deployed builds:**
- `aa/`, `ba/`, `cryptography/` - Built course sites
- `linalg-deploy/`, `advanced-linalg-deploy/` - Linear algebra builds
- KaTeX font files (~2 MB total across builds)
