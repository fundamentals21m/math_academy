#!/bin/bash
# Script to update VITE_FIREBASE_API_KEY across all Vercel projects

NEW_API_KEY="AIzaSyCqVuI2oAob24bqt1uUcvGoOZLBxhniQL0"
BASE_DIR="/Users/brianhirschfield/Claude/math_academy"

# List of deploy directories with Vercel projects
DEPLOY_DIRS=(
  "aa-deploy"
  "advanced-linalg-deploy"
  "advlinalg-deploy"
  "atlas-shrugged-deploy"
  "basic-algebra-deploy"
  "calc-lib-art-deploy"
  "calc1-deploy"
  "calceasy-deploy"
  "coding-theory-deploy"
  "euclid-deploy"
  "four-pillars-deploy"
  "gauss-deploy"
  "human-action-deploy"
  "intro-discrete-deploy"
  "islr-deploy"
  "koblitz-course-deploy"
  "linalg-deploy"
  "mod-race-deploy"
  "mom-deploy"
  "numbers-geometry-deploy"
  "only-the-strong-survive-deploy"
  "ra-deploy"
  "road-to-serfdom-deploy"
  "ross-prob-deploy"
  "rudin-deploy"
  "thales-deploy"
  "west-graphs-deploy"
  "why-math-deploy"
  "men-of-math-deploy"
)

echo "Updating VITE_FIREBASE_API_KEY for ${#DEPLOY_DIRS[@]} projects..."
echo "New API Key: ${NEW_API_KEY:0:10}..."
echo ""

SUCCESS=0
FAILED=0

for DIR in "${DEPLOY_DIRS[@]}"; do
  FULL_PATH="$BASE_DIR/$DIR"

  if [ -d "$FULL_PATH/.vercel" ]; then
    echo ">>> Updating: $DIR"

    # Add/update env var using --cwd
    echo "$NEW_API_KEY" | vercel env add VITE_FIREBASE_API_KEY production --force --cwd "$FULL_PATH" 2>&1

    if [ $? -eq 0 ]; then
      echo "    [OK]"
      ((SUCCESS++))
    else
      echo "    [FAILED]"
      ((FAILED++))
    fi
  else
    echo ">>> Skipping: $DIR (no .vercel directory)"
    ((FAILED++))
  fi
done

echo ""
echo "=========================================="
echo "Results: $SUCCESS succeeded, $FAILED failed/skipped"
echo ""
echo "Now trigger redeployments. You can either:"
echo "1. Wait for next git push to trigger auto-deploy"
echo "2. Go to Vercel dashboard and click 'Redeploy' for each project"
echo "3. Run: vercel --prod --cwd <project-dir>"
