---
description: Deploy a Math Academy course to Vercel (standard deployment method)
---

# Deploy Course to Hub

Deploy a course by building, copying to the deploy directory, deploying to Vercel, AND deploying the hub.

**CRITICAL: This skill MUST deploy the hub. The hub is the primary product.**

## Arguments: $ARGUMENTS

Parse the arguments:
- First argument: `course-id` (required) - The course identifier (e.g., `calc1`, `df`, `coding-theory`)
- `--smoke-test` - Run E2E smoke tests after deployment
- `--skip-commit` - Build and copy only, don't commit/push

## USE THE DEPLOYMENT SCRIPT

**PREFERRED METHOD** - Use the script that enforces hub deployment:

```bash
./scripts/deploy-with-hub.sh <course-id>
```

This script:
1. Builds the course
2. Copies to deploy directory
3. Deploys course to Vercel
4. **Deploys the HUB to Vercel** (mandatory)
5. Verifies hub returns HTTP 200

If the script fails, proceed with manual steps below but **YOU MUST STILL DEPLOY THE HUB**.

## Manual Deployment Workflow (if script fails)

```
Source directory (*-course/)
    ↓
npm run build → dist/
    ↓
Copy dist/* → *-deploy/
    ↓
Deploy course: cd *-deploy && npx vercel --prod
    ↓
DEPLOY HUB: cd /Users/brianhirschfield/Claude/math_academy && npx vercel --prod  ← MANDATORY
    ↓
Verify hub: curl https://mathacademy-cyan.vercel.app returns 200
```

## Steps

### 1. Determine directory names

The course may follow one of these naming patterns:
- `<course-id>-course/` (newer pattern) → `<course-id>-deploy/`
- `<course-id>/` (standalone) → `<course-id>-deploy/`

Check which exists:
```bash
ls -d /Users/brianhirschfield/Claude/math_academy/<course-id>-course 2>/dev/null || \
ls -d /Users/brianhirschfield/Claude/math_academy/<course-id> 2>/dev/null
```

Set `SOURCE_DIR` to the found directory.
Set `DEPLOY_DIR` to `<course-id>-deploy`.

### 2. Verify source directory exists

```bash
test -d "/Users/brianhirschfield/Claude/math_academy/$SOURCE_DIR" || echo "ERROR: Source directory not found"
```

### 3. Build the course

```bash
cd /Users/brianhirschfield/Claude/math_academy/$SOURCE_DIR
npm run build
```

Verify build succeeded:
```bash
test -d "/Users/brianhirschfield/Claude/math_academy/$SOURCE_DIR/dist" || echo "ERROR: Build failed - no dist directory"
```

### 4. Prepare deploy directory

Create deploy directory if it doesn't exist:
```bash
mkdir -p /Users/brianhirschfield/Claude/math_academy/$DEPLOY_DIR
```

Clear existing assets (preserve .vercel if present):
```bash
cd /Users/brianhirschfield/Claude/math_academy/$DEPLOY_DIR
rm -rf assets *.html *.js *.css
```

### 5. Copy built assets

```bash
cp -r /Users/brianhirschfield/Claude/math_academy/$SOURCE_DIR/dist/* /Users/brianhirschfield/Claude/math_academy/$DEPLOY_DIR/
```

Verify copy succeeded:
```bash
test -f "/Users/brianhirschfield/Claude/math_academy/$DEPLOY_DIR/index.html" || echo "ERROR: Copy failed"
```

### 6. Deploy course to Vercel

```bash
cd /Users/brianhirschfield/Claude/math_academy/$DEPLOY_DIR
npx vercel --prod
```

### 7. DEPLOY THE HUB (MANDATORY - DO NOT SKIP)

**THIS STEP IS NOT OPTIONAL. THE HUB MUST BE DEPLOYED.**

```bash
cd /Users/brianhirschfield/Claude/math_academy
npx vercel --prod
```

### 8. Verify hub is live

```bash
curl -s -o /dev/null -w "%{http_code}" https://mathacademy-cyan.vercel.app
# Must return 200
```

Or use Playwright to verify the hub loads and shows courses.

### 9. Run smoke tests (if --smoke-test)

```bash
cd /Users/brianhirschfield/Claude/math_academy/e2e
COURSE_ID=<course-id> npm run test:smoke
```

### 10. Report completion

Report:
- Source directory used
- Deploy directory updated
- Course URL: `https://<course-id>-deploy.vercel.app`
- **Hub URL: https://mathacademy-cyan.vercel.app** (must confirm deployed)
- Hub HTTP status (must be 200)
- Smoke test results (if run)

**DO NOT report "deployed" unless BOTH the course AND the hub are live.**

## Failure History

- 2026-01-23: Claude deployed bips course 3 times without deploying the hub, despite explicit user instructions. This skill was updated to mandate hub deployment.

## Common Issues

### Deploy directory doesn't exist

Create it:
```bash
mkdir -p /Users/brianhirschfield/Claude/math_academy/<course-id>-deploy
```

### Build fails

Check for:
1. Missing dependencies: `npm install`
2. TypeScript errors: `npm run typecheck`
3. Vite config issues: verify `vite.config.ts`

### Hub not deployed

**THIS IS THE MOST CRITICAL ERROR.** Always run:
```bash
cd /Users/brianhirschfield/Claude/math_academy && npx vercel --prod
```
