#!/bin/bash
# deploy-with-hub.sh - Deploys a course AND the hub together
# This script exists because Claude repeatedly failed to deploy the hub
# when deploying individual courses, despite explicit instructions.
#
# USAGE: ./scripts/deploy-with-hub.sh <course-name>
# EXAMPLE: ./scripts/deploy-with-hub.sh bips

set -e  # Exit on any error

COURSE_NAME="$1"

if [ -z "$COURSE_NAME" ]; then
    echo "ERROR: Course name required"
    echo "Usage: ./scripts/deploy-with-hub.sh <course-name>"
    exit 1
fi

COURSE_DIR="/Users/brianhirschfield/Claude/math_academy/$COURSE_NAME"
DEPLOY_DIR="/Users/brianhirschfield/Claude/math_academy/${COURSE_NAME}-deploy"
ROOT_DIR="/Users/brianhirschfield/Claude/math_academy"

# Verify course exists
if [ ! -d "$COURSE_DIR" ]; then
    echo "ERROR: Course directory not found: $COURSE_DIR"
    exit 1
fi

echo "========================================"
echo "DEPLOYING: $COURSE_NAME"
echo "========================================"

# Step 1: Build the course
echo ""
echo "Step 1/5: Building course..."
cd "$COURSE_DIR"
pnpm run build

# Step 2: Copy to deploy directory
echo ""
echo "Step 2/5: Copying to deploy directory..."
if [ -d "$DEPLOY_DIR" ]; then
    rm -rf "$DEPLOY_DIR/assets"
    cp -r dist/* "$DEPLOY_DIR/"
else
    echo "ERROR: Deploy directory not found: $DEPLOY_DIR"
    exit 1
fi

# Step 3: Deploy the individual course
echo ""
echo "Step 3/5: Deploying course to Vercel..."
cd "$DEPLOY_DIR"
npx vercel --prod

# Step 4: Deploy the HUB (THIS IS MANDATORY)
echo ""
echo "========================================"
echo "Step 4/5: DEPLOYING THE HUB (MANDATORY)"
echo "========================================"
cd "$ROOT_DIR"
npx vercel --prod

# Step 5: Verify hub is live
echo ""
echo "Step 5/5: Verifying hub..."
HUB_STATUS=$(curl -s -o /dev/null -w "%{http_code}" https://mathacademy-cyan.vercel.app)
if [ "$HUB_STATUS" = "200" ]; then
    echo "✅ Hub is live (HTTP $HUB_STATUS)"
else
    echo "❌ WARNING: Hub returned HTTP $HUB_STATUS"
    exit 1
fi

echo ""
echo "========================================"
echo "DEPLOYMENT COMPLETE"
echo "========================================"
echo "Course: https://${COURSE_NAME}-deploy.vercel.app"
echo "Hub:    https://mathacademy-cyan.vercel.app"
echo "========================================"
