# Deployment Runbook

This document provides step-by-step procedures for deploying Magic Internet Math components.

## Table of Contents

- [Hub Deployment](#hub-deployment)
- [Course Deployment](#course-deployment)
- [Firebase Functions Deployment](#firebase-functions-deployment)
- [Firebase Seeding](#firebase-seeding)
- [Rollback Procedures](#rollback-procedures)
- [Verification Checklist](#verification-checklist)
- [Troubleshooting](#troubleshooting)

---

## Hub Deployment

The hub is a static site (HTML/CSS/JS) that auto-deploys to Vercel on push to `main`.

### Prerequisites

- Node.js 20+
- pnpm 10.28.0+
- Access to the GitHub repository

### Deployment Steps

1. **Validate changes locally**
   ```bash
   # Run course data validation
   pnpm run validate:courses

   # Run quiz balance validation
   pnpm run validate:quiz-balance
   ```

2. **Commit and push to main**
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```

3. **Monitor deployment**
   - Vercel auto-deploys on push to `main`
   - Check [Vercel Dashboard](https://vercel.com) for deployment status
   - CI runs regression tests via GitHub Actions

4. **Verify deployment**
   - Visit https://mathacademy-cyan.vercel.app/
   - Run the [Verification Checklist](#verification-checklist)

### Files That Trigger Hub Rebuild

- `index.html`
- `admin.html`
- `styles/*.css`
- `scripts/*.js`

---

## Course Deployment

Individual courses are React apps that build to `*-deploy/` directories.

### Standard Course Deployment

1. **Build the course**
   ```bash
   cd <course-directory>
   npm run build
   ```

2. **Copy to deploy directory**
   ```bash
   cp -r dist/* ../<course-id>-deploy/
   ```

3. **Commit and push**
   ```bash
   git add <course-id>-deploy/
   git commit -m "Deploy <course-name>"
   git push origin main
   ```

### Rebuild All Courses

When shared module changes affect all courses:

```bash
# Clean rebuild all courses
pnpm run build:all:clean

# Or without cleaning first
pnpm run build:all
```

### Using the Deploy Skill

For guided deployment, use the `/deploy-course` command in Claude Code.

---

## Firebase Functions Deployment

### Deploy All Functions

```bash
cd firebase
npx firebase deploy --only functions
```

### Deploy Specific Function

```bash
cd firebase
npx firebase deploy --only functions:<functionName>
```

### Common Functions

| Function | Purpose |
|----------|---------|
| `getCourseConfig` | Fetches course configuration for hub |
| `updateCourse` | Admin course updates |
| `seedCourseConfig` | Seeds initial course data |
| `submitScore` | Leaderboard score submission |
| `getLeaderboard` | Fetches leaderboard data |

---

## Firebase Seeding

When adding a new course, you must seed Firebase after updating both data files.

### Prerequisites

1. Course added to `scripts/courses.js`
2. Course added to `firebase/functions/src/seedCourseConfig.ts`
3. Both files have matching `id`, `totalSections`, and `progressPrefix`

### Manual Seeding

```bash
# Get the seed secret from Firebase config or team
curl "https://us-central1-magic-internet-math-96630.cloudfunctions.net/seedCourseConfig?secret=$SEED_SECRET"
```

### Automated Seeding

The `seed-firebase.yml` workflow automatically seeds when `seedCourseConfig.ts` is modified on `main`.

Required GitHub Secrets:
- `FIREBASE_SEED_URL` - The seed function URL
- `FIREBASE_SEED_SECRET` - The authentication secret

### Verify Seeding

1. Check Firebase Console > Firestore > `courseConfig/config`
2. Verify the new course appears in the `courses` array
3. Refresh the hub and confirm the course is visible

---

## Rollback Procedures

### Hub Rollback (Vercel)

1. Go to [Vercel Dashboard](https://vercel.com)
2. Select the `mathacademy-cyan` project
3. Go to **Deployments**
4. Find the last known good deployment
5. Click **...** > **Promote to Production**

### Course Rollback

1. Find the last good commit hash
   ```bash
   git log --oneline <course-id>-deploy/
   ```

2. Restore the deploy directory
   ```bash
   git checkout <commit-hash> -- <course-id>-deploy/
   git add <course-id>-deploy/
   git commit -m "Rollback <course-name> to <commit-hash>"
   git push origin main
   ```

### Firebase Functions Rollback

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Select the project
3. Go to **Functions**
4. View function history and redeploy previous version

Or use CLI:
```bash
cd firebase
git checkout <commit-hash> -- functions/
npm run build
npx firebase deploy --only functions
```

### Firebase Data Rollback

If course config data is corrupted:

1. Restore `seedCourseConfig.ts` to known good state
2. Delete the corrupted documents in Firestore Console
3. Re-run the seed function

---

## Verification Checklist

Run these checks after any deployment:

### Hub Verification

- [ ] Hub loads at https://mathacademy-cyan.vercel.app/
- [ ] All course categories display correctly
- [ ] Featured courses section is visible
- [ ] At least 40 courses are displayed
- [ ] Course links navigate to correct URLs
- [ ] Progress bars display for logged-in users
- [ ] Leaderboard links work
- [ ] No console errors in browser DevTools

### Course Verification

- [ ] Course homepage loads without errors
- [ ] Navigation between sections works
- [ ] Quiz questions render correctly
- [ ] Math equations display properly (KaTeX)
- [ ] Interactive visualizations load
- [ ] Score submission works (if logged in)
- [ ] Progress is saved to localStorage

### Firebase Verification

- [ ] Leaderboard data loads
- [ ] Score submission succeeds
- [ ] Course config matches expected values
- [ ] No function errors in Firebase Console

### Automated Verification

```bash
# Run runtime validation (requires Playwright)
pnpm run validate:runtime

# Run with verbose output
pnpm run validate:runtime:all
```

---

## Troubleshooting

### Course Not Appearing on Hub

1. **Check Firebase**: Is the course in Firestore `courseConfig/config/courses`?
2. **Check static fallback**: Is the course in `scripts/courses.js`?
3. **Run validation**: `pnpm run validate:courses`
4. **Re-seed if needed**: Run the seed function

### Progress Not Tracking

1. Check `progressPrefix` matches between static and seed
2. Verify localStorage keys: `<progressPrefix>section<N>`
3. Check browser console for errors

### Deploy Directory Missing index.html

```bash
cd <course-directory>
npm run build
cp -r dist/* ../<course-id>-deploy/
```

### CI Validation Failing

1. **totalSections mismatch**: Update the count in both `courses.js` and `seedCourseConfig.ts`
2. **progressPrefix collision**: Each course needs a unique prefix
3. **Missing deploy directory**: Build and copy the course

### Firebase Function Errors

1. Check Firebase Console > Functions > Logs
2. Verify environment variables are set
3. Test locally with Firebase Emulator:
   ```bash
   cd firebase
   npm run serve
   ```

---

## Quick Reference

### Key URLs

| Resource | URL |
|----------|-----|
| Hub (Production) | https://mathacademy-cyan.vercel.app/ |
| Vercel Dashboard | https://vercel.com |
| Firebase Console | https://console.firebase.google.com |
| GitHub Actions | https://github.com/<org>/math_academy/actions |

### Key Commands

```bash
# Validate everything
pnpm run validate

# Build all courses
pnpm run build:all:clean

# Deploy Firebase functions
cd firebase && npx firebase deploy --only functions

# Run runtime checks
pnpm run validate:runtime
```

### Key Files

| File | Purpose |
|------|---------|
| `scripts/courses.js` | Static course data (fallback) |
| `firebase/functions/src/seedCourseConfig.ts` | Firebase seed data |
| `.github/workflows/regression.yml` | CI validation |
| `.github/workflows/seed-firebase.yml` | Auto-seeding |
