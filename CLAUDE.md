# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## MANDATORY: ONE STEP AT A TIME

**Do ONE action, then STOP and wait for user direction.**

- Run ONE command, then stop and report
- Make ONE edit, then stop and report
- Do not chain actions together
- Do not assume approval for the next step
- Wait for explicit user instruction before proceeding

**This is the most important rule. Violating it wastes the user's time and money.**

---

## CRITICAL: DO NOT EDIT THIS REPOSITORY DIRECTLY

**This is PRODUCTION.** All changes must go through the dev repository first.

| What | Where |
|------|-------|
| **Make changes here** | `/Users/brianhirschfield/Claude/dev-repos/math_academy_dev` |
| **NOT here** | `/Users/brianhirschfield/Claude/math_academy` (this repo) |

### Workflow
```
DEV (math_academy_dev) → Test → User Approval → promote-to-production.sh → PROD
```

### If you need to make changes:
1. `cd /Users/brianhirschfield/Claude/dev-repos/math_academy_dev`
2. Make changes there
3. Test locally
4. Ask user for approval
5. Run `./scripts/promote-to-production.sh`

**See `/Users/brianhirschfield/Claude/dev-repos/math_academy_dev/CLAUDE.md` for full dev workflow.**

---

## MANDATORY: Production is Read-Only

**The ONLY commands allowed in this repository:**
- `vercel --prod` (deploying already-promoted code)
- `git push` (pushing already-committed changes)
- `./scripts/promote-to-production.sh` (receiving from dev)
- `./scripts/deploy-with-hub.sh` (deploying courses)

**NOT allowed in production:**
- `npm run build` ❌
- Editing any `.tsx`, `.ts`, `.js`, `.css` file ❌
- `git add` of new changes ❌
- Any file creation or modification ❌

If you find yourself about to do any of the above, STOP. Go to dev first:
```bash
cd /Users/brianhirschfield/Claude/dev-repos/math_academy_dev
```

**Violations cost the user time and money. There are no exceptions.**

---

## CRITICAL: External URL Policy

**NEVER fabricate, guess, or invent URLs.** This rule has been violated twice and caused production failures.

Before using ANY external URL in code or content:
1. **STOP** - Do not write the URL until verified
2. **SEARCH** - Use WebSearch to find the actual URL
3. **FETCH** - Use WebFetch to confirm it returns 200 (not 404/403)
4. **ONLY THEN** - Use the verified URL in code

If you cannot verify a URL exists, you must either:
- Ask the user to provide the correct URL
- Do not include that reference at all

**No exceptions. No "plausible-looking" URLs. No educated guesses.**

## CRITICAL: Hub Deployment Is MANDATORY

**The HUB (https://mathacademy-cyan.vercel.app) is the primary product.** Individual course deployments mean NOTHING if the hub is not deployed.

### USE THIS SCRIPT FOR ALL DEPLOYMENTS:

```bash
./scripts/deploy-with-hub.sh <course-name>

# Example:
./scripts/deploy-with-hub.sh bips
```

This script:
1. Builds the course
2. Copies to deploy directory
3. Deploys the course to Vercel
4. **Deploys the HUB to Vercel** (mandatory, cannot be skipped)
5. Verifies the hub returns HTTP 200

**DO NOT deploy courses manually.** Use the script. It exists because manual deployment repeatedly failed.

### If you must deploy manually (NOT RECOMMENDED):

1. Deploy the course: `cd <course>-deploy && npx vercel --prod`
2. **IMMEDIATELY deploy the hub:** `cd /Users/brianhirschfield/Claude/math_academy && npx vercel --prod`
3. **Verify the hub loads:** Open https://mathacademy-cyan.vercel.app and confirm courses appear
4. **Never claim "deployed" until the hub is verified live.**

**Git push does NOT auto-deploy the hub.** The hub is a separate Vercel project.

### Failure History (DO NOT REPEAT)
- 2026-01-23: Deployed bips course 3 times without deploying the hub, despite explicit user instructions

---

## CRITICAL: Hub Deployment Files

**NEVER exclude these directories/files from `.vercelignore`:**

- `scripts/` - Contains hubRenderer.js, courses.js, nostrAuth.js, etc.
- `styles/` - Contains main.css, hub.css, admin.css
- `index.html` - Main hub page
- `admin.html` - Admin interface

The hub is a **static site** that loads JavaScript directly via `<script>` tags. If any of these files are missing from deployment, the entire hub breaks with infinite loading.

**CI Safeguard:** The `hub-critical-files` job in `regression.yml` will fail if `.vercelignore` excludes any of these.

## Build & Development Commands

- No build step required — plain HTML/CSS/JS for the hub
- Open `index.html` directly in a browser, or use a local server:
  ```bash
  python -m http.server 8000
  # or
  npx serve .
  ```

## Adding New Courses

**IMPORTANT**: When adding a new course, you must update BOTH files:

### 1. Static fallback data (`scripts/courses.js`)
Add the course object with all required fields:
```javascript
{
  id: 'course_id',
  title: 'Course Title',
  description: 'Course description.',
  icon: '📚',
  url: 'https://course-url.vercel.app/',
  tags: ['X Parts', 'Y Sections'],
  sections: ['category_id'],  // e.g., 'algebra', 'calculus', 'featured'
  totalSections: 50,
  progressPrefix: 'course_id:',
  leaderboardUrl: 'https://course-url.vercel.app/#/leaderboard',
  shortName: 'Short Name',
  progressGradient: 'linear-gradient(90deg, #color1, #color2)',
}
```

### 2. Firebase seed data (`firebase/functions/src/seedCourseConfig.ts`)
Add the same course to the `COURSES` array in the seed file.

### 3. Re-seed Firebase (required for hub to show the course)
After deploying the updated seed function, run:
```bash
# Secret is stored in Firebase Functions config - get it from there or from your team
curl "https://us-central1-magic-internet-math-96630.cloudfunctions.net/seedCourseConfig?secret=$SEED_SECRET"
```

**SECURITY NOTE:** Never commit the seed secret to source control. The secret is stored in Firebase Functions config:
```bash
# To set the secret (admin only):
firebase functions:config:set seed.secret="YOUR_NEW_SECRET"
```

This adds only NEW courses to Firebase - existing courses and admin GUI changes are preserved.

### 4. Validate course data (recommended)
After adding a course, run the validation script to check for consistency:
```bash
pnpm run validate:courses
```

## Course Data Validation

The `validate:courses` script checks for common issues that can cause bugs:

```bash
pnpm run validate:courses
```

### What It Checks

1. **progressPrefix Uniqueness** - Prevents localStorage key collisions that corrupt user progress
2. **Section References** - Ensures courses reference valid category IDs (featured, calculus, etc.)
3. **totalSections Accuracy** - Compares declared section count vs actual `Section*.tsx` files
4. **Static/Seed Sync** - Detects mismatches between `courses.js` and `seedCourseConfig.ts`
5. **Required Fields** - Validates all required course fields are present

### Example Output
```
Course Validation Results
=========================

✅ progressPrefix uniqueness: PASS (42 unique prefixes)
❌ Section references: FAIL
   - Course 'calc1' references non-existent section 'advanced'
✅ totalSections accuracy: PASS (38 courses validated)
⚠️  Static/Seed sync: WARN (in sync with 1 field mismatches)
   ⚠️  Course 'ross-prob' totalSections mismatch: static=9, seed=66
✅ Required fields: PASS

Summary: 1 error, 1 warning
```

### When to Run
- Before committing changes to course data files
- After adding a new course
- Before deploying to production
- As part of CI/PR checks (exits with code 1 on errors)

## Shared Module & Course Builds

The `shared/` directory contains the gamification system, components, and utilities used by all courses. Courses import via the `@shared` alias (e.g., `@shared/gamification`).

### After Modifying the Shared Module

**IMPORTANT**: When you modify files in `shared/` (especially `shared/gamification/`), ALL courses must be rebuilt to pick up the changes:

```bash
# Rebuild all courses with latest shared module
pnpm run build:all

# Or with clean dist directories first
pnpm run build:all:clean
```

### Key Shared Module Files
- `shared/gamification/masteryCalculator.ts` - Mastery level calculation (>80% = mastered)
- `shared/gamification/xpCalculator.ts` - XP and level calculations
- `shared/gamification/achievements.ts` - Achievement definitions
- `shared/gamification/storage.ts` - LocalStorage persistence
- `shared/components/` - Shared React components (Leaderboard, Quiz, etc.)

### Mastery Thresholds (as of 2026-01-13)
- **Mastered** (green ✓): Best score >80% (81%+) OR avg ≥90% with 3+ attempts
- **Familiar** (yellow ◐): Best score ≥70% OR avg ≥70% with 2+ attempts
- **Learning** (blue ○): Default state or scores below 70%

### Running Tests
```bash
# Run all shared module tests
pnpm run test:shared

# Run all tests across workspace
pnpm test
```

## Firebase Functions

Deploy functions from the `firebase/` directory:
```bash
cd firebase
npx firebase deploy --only functions
```

Deploy specific function:
```bash
npx firebase deploy --only functions:functionName
```

## PDF Chunker

Split large PDFs into chunks no larger than 300KB for processing:

```bash
python3 /Users/brianhirschfield/Claude/math_academy/chunk_pdf_by_size.py "<input.pdf>" "<output_dir>" 300
```

## Architecture Overview

Magic Internet Math - Interactive educational platform for mathematics courses.

### Hub Structure
```
├── index.html              # Main hub landing page
├── admin.html              # Course management admin GUI
├── styles/
│   ├── main.css            # Shared styles (dark theme, components)
│   ├── hub.css             # Hub-specific styles
│   └── admin.css           # Admin panel styles
├── scripts/
│   ├── courses.js          # Static course data (fallback)
│   ├── hubRenderer.js      # Renders course categories on hub
│   ├── adminRenderer.js    # Admin panel functionality
│   ├── nostrAuth.js        # Nostr authentication
│   └── firebase-config.js  # Firebase configuration
└── firebase/
    └── functions/src/
        ├── courseConfig.ts     # Course CRUD operations
        ├── seedCourseConfig.ts # Initial data seeding
        ├── nostrAuth.ts        # Nostr auth functions
        └── scores.ts           # Leaderboard/XP functions
```

### Data Flow
1. Hub loads course config from Firebase (`getCourseConfig`)
2. Falls back to `scripts/courses.js` if Firebase unavailable
3. Admin panel uses callable functions to modify Firebase data
4. Changes require re-seeding or using admin GUI to appear on hub

### Key Categories
- `featured` - Flagship courses (highlighted)
- `beginners` - Foundation courses
- `calculus`, `algebra`, `geometry` - Math subjects
- `history` - Math history courses
- `seminal` - Foundational mathematical texts
- `austrian` - Economics courses

## Admin Authorization Models

**IMPORTANT**: The system has TWO separate admin authorization models. Be aware of which one applies to your use case:

### 1. User-Level Admins (`users/{npub}.isAdmin`)
- **Purpose**: User moderation (ban/unban users, reset scores)
- **Location**: `firebase/functions/src/admin.ts`
- **Check**: `userDoc.data()?.isAdmin === true`
- **Functions**: `banUser`, `unbanUser`, `resetUserScores`

### 2. Course-Config Admins (`courseConfig/config/admins/{npub}`)
- **Purpose**: Course and category management
- **Location**: `firebase/functions/src/courseConfig.ts`
- **Check**: Document exists in `courseConfig/config/admins/{npub}`
- **Functions**: `updateCourse`, `createSection`, `updateSection`, `deleteSection`, `reorderSections`, `reorderCourses`, `addCourseAdmin`, `removeCourseAdmin`

### Why Two Models?
- **User-Level Admins**: Higher privilege, can affect user accounts and data
- **Course-Config Admins**: Content management, cannot affect user accounts
- A user can be one, both, or neither type of admin
- The initial course-config admin is seeded via `seedCourseConfig.ts`

### Adding a New Admin
- **User-Level Admin**: Set `isAdmin: true` on the user's document in `users/{npub}`
- **Course-Config Admin**: Use the admin panel or call `addCourseAdmin` function

## E2E Testing

End-to-end tests are in the `e2e/` directory using Playwright.

### Running Tests

```bash
cd e2e

# Quick smoke tests (deployment validation)
npm run test:smoke

# Visual regression tests
npm run test:visual

# PR validation suite (smoke + visual + forms + gamification)
npm run test:pr

# Full nightly cross-browser tests
npm run test:nightly

# Run specific test file
npm test -- tests/smoke/course-loads.spec.ts
```

### Test Categories

| Category | Purpose |
|----------|---------|
| `smoke/` | Deployment validation (course loads, sections render) |
| `visual/` | Visual regression (responsive, components, math rendering) |
| `forms/` | Quiz interactions (multiple choice, numeric, text, scoring) |
| `gamification/` | XP, mastery, streaks, level progression |
| `auth/` | Nostr authentication |
| `interactive/` | Math visualizers |
| `accessibility/` | a11y compliance |
| `performance/` | Performance metrics |

### Updating Visual Snapshots

When intentionally changing UI, update baseline screenshots:

```bash
npm run update-snapshots
```

## CI/CD

### GitHub Actions Workflows

**E2E Tests** (`.github/workflows/e2e-tests.yml`):
- Runs smoke tests on every PR to main
- Runs smoke tests on every push to main
- Nightly full cross-browser tests at 3:00 AM UTC
- Manual trigger with test suite selection

### Deployment Workflow

Standard deployment pattern for courses:

1. Build: `npm run build` in the course directory
2. Copy: `cp -r dist/* <course-id>-deploy/`
3. Commit & push: Vercel auto-deploys from `*-deploy/` directories

Use the `/deploy-course` command for guided deployment.
