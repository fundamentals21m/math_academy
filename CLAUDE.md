# CLAUDE.md - Magic Internet Math

## Project Overview

**Magic Internet Math** is a React 19 + TypeScript educational platform featuring interactive mathematics courses with gamification, leaderboards, and Nostr-based authentication. It's a monorepo with courses in separate directories sharing code via `@magic-internet-math/shared`.

**Live Hub:** https://mathacademy-cyan.vercel.app/

## Directory Structure

```
math_academy/
├── shared/                    # @magic-internet-math/shared - Shared library
├── firebase/functions/        # Firebase Cloud Functions backend
├── course-template/           # Template for creating new courses
├── scripts/                   # Deployment and utility scripts
│
├── # ACTIVE COURSES (with source)
├── linalg/                    # Introduction to Linear Algebra
├── advanced-linalg/           # Advanced Linear Algebra
├── crypto-react/              # Cryptography (React-based)
├── euclid/                    # Euclid's Elements
├── four-pillars/              # Four Pillars of Geometry
├── calc1-course/              # Calculus I
├── calc_lib_art/              # Calculus, Liberal Arts
├── calc_easy/                 # Calculus (Beginner)
├── gauss/                     # Gauss course
├── islr/                      # Intro to Statistical Learning
├── real-analysis/             # Real Analysis
├── men-of-math-course/        # Men of Mathematics (History)
├── thales/                    # Thales course
├── why-math/                  # Why Math course
│
├── # DEPLOYED BUILDS (*-deploy directories)
├── aa/, ba/, cryptography/    # Legacy built sites
├── *-deploy/                  # Pre-built course distributions
│
└── books/                     # PDF chunks for source material (gitignored)
```

## Tech Stack

| Category | Technologies |
|----------|-------------|
| Frontend | React 19, TypeScript 5.9, Vite 5.4, Tailwind CSS 3.4 |
| Math | KaTeX 0.16, D3.js 7.9 |
| Animation | Framer Motion 12 |
| Testing | Vitest 4.0, React Testing Library 16 |
| Backend | Firebase 10.14, Cloud Functions (Node 20) |
| Auth | Nostr (NIP-07), nostr-tools 2.7 |
| Validation | Zod 4.2, DOMPurify 3.3 |

## Build/Lint/Test Commands

Run from any course directory (e.g., `cd linalg`):

```bash
npm run dev              # Start Vite dev server (port 5173)
npm run build            # Production build
npm run typecheck        # TypeScript check
npm run lint             # ESLint

# Testing (Vitest)
npm run test             # Watch mode
npm run test:run         # Single run
npm run test:coverage    # Coverage report (requires Node 20+)
npx vitest run path/to/file.test.ts      # Single file
npx vitest run -t "pattern"              # Pattern match
```

## Path Aliases

```typescript
import { Component } from '@/components/Component';              // ./src/*
import { config } from '@shared/config';                         // ./shared/*
import { Button } from '@components/Button';                     // ./src/components/*
import { type CourseId } from '@magic-internet-math/shared';     // Shared package
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

### Import Order
1. React and external libraries
2. Path aliases (`@/`, `@components/`)
3. Relative imports
4. Types last (using `import type`)

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

## CourseId System

**Single source of truth:** `shared/types/courses.ts`

```typescript
type CourseId = 'ba' | 'aa' | 'crypto' | 'linalg' | 'advlinalg' | 'template' |
                'islr' | 'ra' | 'calc1' | 'calc_lib_art' | 'calc_easy' |
                'wm' | 'four_pillars' | 'mom' | 'euclid';
```

Use `isValidCourseId(value)` for runtime validation. CourseIds are used for localStorage keys, XP tracking, and URL routing.

## Error Handling & Logging

```typescript
import { getLogger } from '@magic-internet-math/shared';

const logger = getLogger('MyModule');
logger.debug('Debug message');
logger.info('Info message');
logger.warn('Warning message');
logger.error('Error message', error);
```

- Use Zod schemas from `shared/validation/schemas.ts` for validation
- Validate all external data (localStorage, API, Nostr)
- Wrap components in `ErrorBoundary` for graceful error recovery
- Use `ErrorProvider` + `ErrorDisplay` for user-facing errors

## Math & Content Components

### Math Rendering (KaTeX)
```tsx
import { Math, MathBlock } from '@components/common/MathBlock';

<p>Inline: <Math>x^2 + y^2</Math></p>
<MathBlock>{\int_0^\infty e^{-x^2} dx}</MathBlock>
```

### Content Blocks
```tsx
import { Definition, Theorem, Example, Callout } from '@components/common/ContentBlocks';

<Definition title="Vector Space">...</Definition>
<Theorem title="Rank-Nullity" proof={<>...</>}>...</Theorem>
<Example title="Finding Eigenvalues">...</Example>
<Callout type="info|warning|danger">Text</Callout>
```

## Course Structure

```
{course}/
├── src/
│   ├── config/course.ts      # Course metadata & features
│   ├── data/
│   │   ├── curriculum.ts     # Parts/Sections structure
│   │   ├── theorems.ts       # Theorem index
│   │   └── quizzes/          # Quiz questions
│   ├── pages/sections/       # Section content (lazy-loaded)
│   └── App.tsx               # Routing with lazy imports
├── shared/                   # Local copy of shared package
├── vite.config.ts
└── vitest.config.ts
```

### Quiz Question Format
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

## Deployment

### GitHub Pages Hub (Primary)

**CRITICAL:** Base path must be `/math_academy/{deploy-dir}/` (NOT just `/{deploy-dir}/`).

Use the deploy script for safety:
```bash
./scripts/deploy-to-hub.sh abstract-algebra aa
./scripts/deploy-to-hub.sh basic-algebra ba
```

The script verifies `vite.config.ts` has the correct base path, builds the course, and copies to the deploy directory.

**Manual verification:**
```bash
grep "math_academy" aa/index.html  # Should show /math_academy/aa/assets/...
```

### Standalone Vercel

For individual course deployments, set `base: '/'` in vite.config.ts.

**Important:** Never deploy `*-deploy` directories as standalone Vercel projects - they use hub-relative base paths.

## Common Tasks

### Create New Course
1. Copy `course-template/` to new directory
2. Update `src/config/course.ts`, `vite.config.ts`
3. Define `curriculum.ts`, create sections, add quizzes
4. If using book source: add chunks to `books/` and create symlink
5. For GitHub Pages: Set `base: '/math_academy/{deploy-dir}/'` in vite.config.ts

### Add New Section
1. Add to `curriculum.ts`
2. Create `Section{N}.tsx` in `pages/sections/`
3. Add lazy import in `App.tsx`:
   ```typescript
   N: () => import('@/pages/sections/SectionN'),
   ```
4. Create `quizzes/section{N}.ts`

### Book Chunks (PDF Source Material)
```bash
# Chunk a PDF into the books directory
python chunk_pdf_by_size.py path/to/textbook.pdf books/my-book/

# Create symlink in course
cd my-course
ln -s ../books/my-book chunks
```

## Environment Variables

```bash
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=...
VITE_FIREBASE_PROJECT_ID=...
VITE_FIREBASE_STORAGE_BUCKET=...
VITE_FIREBASE_MESSAGING_SENDER_ID=...
VITE_FIREBASE_APP_ID=...

# Optional logging control
VITE_LOGGING_ENABLED=false        # Disable logs in production
VITE_LOG_LEVEL=debug|info|warn|error
```

## Architecture Notes

### Code Splitting
- All section pages are lazy-loaded via `React.lazy()` and `Suspense`
- Vendor chunks: `vendor-react`, `vendor-math` (KaTeX), `vendor-animation` (Framer), `vendor-firebase`
- Use `LoadingSpinner` from shared for Suspense fallbacks

### Styling
- Tailwind CSS, always dark mode
- Colors: `primary-*` (indigo), `dark-*` (slate)
- Fonts: Inter (sans), JetBrains Mono (mono)

### Testing
- Unit tests with Vitest + React Testing Library
- Use `@vitest-environment happy-dom` for React component tests
- Use `@vitest-environment node` for pure function tests
- Mock Firebase and external services in tests
- Coverage requires Node 20+ (uses `node:inspector/promises`)

### Firebase Functions
- Located in `firebase/functions/`
- Run with `npm run test:run` from that directory
- Uses Vitest with mocked Firebase Admin SDK

## Security

### Input Validation
- Nostr keys: 64-char hex or npub1 bech32 format
- Display names: 1-50 chars, alphanumeric + spaces
- URLs: HTTP/HTTPS only (XSS prevention)
- LaTeX: DOMPurify sanitization before rendering
- Firebase responses: Schema validation with Zod

### Authentication
- Nostr NIP-07 challenge-response (5-min token expiry)
- Firebase Admin SDK for token verification
- Role-based access control for admin functions
- Action logging for accountability

### No Secrets in Code
- Firebase credentials via `.env` files (gitignored)
- Admin config in `.firebaserc` (not committed)
- Environment variables only loaded at build time

## Gamification

### XP Rewards
| Action | XP |
|--------|-----|
| Visit section | 10 |
| Complete section | 25 |
| Easy quiz | 15 |
| Medium quiz | 25 |
| Hard quiz | 40 |
| Perfect quiz | +50% bonus |
| Use visualization | 5 |
| Complete part | 50 |

### Mastery Levels
- **None** (○) - Not started
- **Learning** (◐) - Started but not mastered
- **Familiar** (◑) - Good quiz performance
- **Mastered** (●) - Excellent performance

## Key Patterns to Follow

1. **Always validate external data with Zod**
2. **Use centralized logger** - never use bare `console.*`
3. **Wrap components in ErrorBoundary** for graceful error recovery
4. **Code-split section components** via lazy loading
5. **Feature flags** for optional functionality in `config/course.ts`
6. **Test coverage** for business logic (gamification, validation)
7. **No console statements** in production code

## Repository Size

- Current size: ~44 MB (well under GitHub's 1 GB limit)
- PDFs in `books/` are gitignored
- Built assets use content hashing (old builds auto-cleanup)
- Git LFS is NOT needed unless `.git` exceeds 500 MB
