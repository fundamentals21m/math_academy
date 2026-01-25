# Math Academy DEV Repository Structure Plan

## Overview
Create 8 idempotent DEV repositories that mirror production functionality, allowing independent development and testing before syncing to production.

**Production Repos (unchanged):**
- `math_academy` - Main production repo
- Existing bot repos

**New DEV Repos to Create:**

---

## 1. `math-academy-hub-dev`
**Purpose:** Hub landing page and admin panel

**Contents to extract:**
```
/index.html
/admin.html
/styles/
  main.css
  hub.css
  admin.css
/scripts/
  courses.js
  hubRenderer.js
  adminRenderer.js
  firebase-config.js
  main.js
/images/
/vercel.json
/.vercelignore
```

**Setup:**
- Standalone static site
- Can run with `python -m http.server` or `npx serve`
- Firebase config for course data fetching
- No build step required

---

## 2. `math-academy-shared-dev`
**Purpose:** Shared module (gamification, components, contexts)

**Contents to extract:**
```
/shared/
  gamification/
  components/
  contexts/
  leaderboard/
  routing/
  firebase/
  nostr/
  validation/
  utils/
  types/
  templates/
  config/
  test/
  .storybook/
  package.json
  vite.base.config.ts
  vitest.config.ts
  tsconfig.course.json
  QUIZ_GUIDELINES.md
```

**Setup:**
- Publishable as `@math-academy/shared` npm package
- Includes Storybook for component development
- Full test suite with Vitest
- TypeScript definitions

---

## 3. `math-academy-courses-dev`
**Purpose:** All 60+ interactive courses

**Contents to extract:**
```
/basic-algebra/
/calc1-course/
/calc2-course/
/secp256k1/
/branta/
/bips/
... (all 60+ course directories)
/chunks/ (PDF source material)
```

**Setup:**
- pnpm workspace configuration
- Each course as workspace member
- Depends on `@math-academy/shared`
- Build scripts for individual/batch builds
- Deploy directories excluded (generated)

---

## 4. `math-academy-firebase-dev`
**Purpose:** Firebase Cloud Functions and Firestore config

**Contents to extract:**
```
/firebase/
  functions/
    src/
      courseConfig.ts
      seedCourseConfig.ts
      scores.ts
      progress.ts
      nostrAuth.ts
      admin.ts
      adminAudit.ts
      modRace.ts
      errorLogging.ts
      securityLogger.ts
      index.ts
    package.json
    tsconfig.json
  firestore.rules
  firestore.indexes.json
  firebase.json
  .firebaserc
```

**Setup:**
- Standalone Firebase project configuration
- Emulator support for local testing
- Separate Firebase project for DEV environment
- Deploy scripts for functions

---

## 5. `math-academy-nostr-dev`
**Purpose:** Nostr authentication and automation bots

**Contents to extract:**
```
/scripts/nostrAuth.js
/scripts/nostr-bot/
  index.js (daily leaderboard)
  educationalBot.js
  bfiBot.js
  dailyReport.js
  postToNostr.js
  fetchLeaderboard.js
  fetchNostrProfiles.js
  setProfile.js
  setBfiProfile.js
  contentSources/
  firebase/
  package.json
/shared/nostr/
  utils.ts
  types.ts
/shared/contexts/NostrAuthContext.tsx
/.github/workflows/
  daily-leaderboard.yml
  educational-posts.yml
  bfi-posts.yml
  nostr-daily-report.yml
```

**Setup:**
- Standalone bot runner
- GitHub Actions workflows
- Firebase Admin SDK for data access
- Environment variables for secrets
- Can run bots locally with `--dry-run`

---

## 6. `math-academy-youtube-dev`
**Purpose:** YouTube video production pipeline

**Contents to extract:**
```
From /math_academy/atlas-shrugged_youtube/:
  config.py
  build.py
  audio_generator.py
  render_slides.py
  video_pipeline/
  captions/
  recaps/
  youtube_metadata/
  slides/
  credentials/ (gitignored)
  episode_*_production/

From /YouTube Classes/Saylor DIssertation/:
  (same structure)

From /YouTube Classes/:
  CLAUDE.md
  SKILL.md
  youtube-series-skill/
  *.html templates
  *.sh scripts
```

**Setup:**
- Python environment with requirements.txt
- ElevenLabs API integration
- YouTube API OAuth2 credentials
- FFmpeg for video assembly
- Chrome/Selenium for slide rendering

---

## 7. `math-academy-skills-dev`
**Purpose:** Claude Code automation skills

**Contents to extract:**
```
From ~/.claude/skills/:
  create-course/
  lesson-builder/
  math-illustration-builder/
  textbook-importer/
  pdf-chunker/
  youtube-series/
  video-building/
  youtube-series-creator/
  redeploy-youtube-playlist/
  deploy-course/
  add-transcripts/
  course-status/
  chunk-remain/

From ~/.claude/commands/:
  *.md command files
```

**Setup:**
- Each skill in its own directory with SKILL.md
- Templates and assets included
- Documentation for skill usage
- Can be symlinked to ~/.claude/skills for testing

---

## 8. `math-academy-e2e-dev`
**Purpose:** End-to-end testing infrastructure

**Contents to extract:**
```
/e2e/
  tests/
    smoke/
    visual/
    forms/
    gamification/
    auth/
    interactive/
    accessibility/
    performance/
  baselines/
  fixtures/
  page-objects/
  config/
  playwright.config.ts
  global-setup.ts
  package.json
/.github/workflows/
  e2e-tests.yml
  e2e-nightly.yml
  e2e-update-baselines.yml
```

**Setup:**
- Playwright test runner
- Visual regression baselines
- Can run against local or deployed courses
- CI/CD integration ready

---

## Implementation Steps

### Phase 1: Create GitHub Repos
```bash
# Create all 8 repos on GitHub
gh repo create math-academy-hub-dev --private
gh repo create math-academy-shared-dev --private
gh repo create math-academy-courses-dev --private
gh repo create math-academy-firebase-dev --private
gh repo create math-academy-nostr-dev --private
gh repo create math-academy-youtube-dev --private
gh repo create math-academy-skills-dev --private
gh repo create math-academy-e2e-dev --private
```

### Phase 2: Extract and Initialize Each Repo
For each repo:
1. Clone empty repo
2. Copy relevant files from production
3. Add appropriate package.json / requirements.txt
4. Add README.md with setup instructions
5. Add .gitignore
6. Initial commit and push

### Phase 3: Configure Dependencies
- `shared-dev` publishes to npm (or use git submodule)
- `courses-dev` depends on shared
- `nostr-dev` includes shared/nostr utilities
- `e2e-dev` configured to test any environment

### Phase 4: Set Up CI/CD
- Each repo gets appropriate GitHub Actions
- DEV Firebase project for testing
- Vercel preview deployments for hub/courses

### Phase 5: Documentation
- Each repo gets comprehensive README
- CONTRIBUTING.md for workflow
- Link back to production repo

---

## Verification

After setup, verify each repo:

1. **hub-dev**: `npx serve` → opens at localhost, loads course cards
2. **shared-dev**: `pnpm test` → all tests pass, Storybook runs
3. **courses-dev**: `pnpm build` → courses build successfully
4. **firebase-dev**: `firebase emulators:start` → functions work locally
5. **nostr-dev**: `node educationalBot.js --dry-run` → simulates post
6. **youtube-dev**: `python build.py --dry-run --episode 1` → validates pipeline
7. **skills-dev**: Symlink to ~/.claude/skills, invoke skill
8. **e2e-dev**: `npm run test:smoke` → tests pass against deployed site

---

## Notes

- All DEV repos are **private** initially
- Secrets/credentials are **never committed** (use .env + .gitignore)
- Each repo should work **standalone** (idempotent)
- Production sync is **manual** until workflow is established
