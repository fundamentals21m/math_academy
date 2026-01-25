#!/bin/bash
#
# validate-firebase-url.sh - Validate course URL against Firebase (source of truth)
#
# Usage: ./scripts/validate-firebase-url.sh <course-id>
#
# This script fetches the course URL from Firebase and validates that:
# 1. The course exists in Firebase
# 2. The URL in Firebase actually resolves (HTTP 200)
# 3. The URL doesn't show a Vercel error page
#
# Use this BEFORE deploying to catch URL mismatches early.
#

set -e

COURSE_ID="$1"

if [ -z "$COURSE_ID" ]; then
  echo "Usage: $0 <course-id>"
  echo "Example: $0 bfi"
  exit 1
fi

echo "=== Firebase URL Validation ==="
echo "Course ID: $COURSE_ID"
echo ""

# Fetch course config from Firebase
echo "Fetching course config from Firebase..."
FIREBASE_RESPONSE=$(curl -s -X POST \
  'https://us-central1-magic-internet-math-96630.cloudfunctions.net/getCourseConfig' \
  -H 'Content-Type: application/json' \
  -d '{"data": {}}')

# Check if we got a valid response
if [ -z "$FIREBASE_RESPONSE" ]; then
  echo "ERROR: Failed to fetch course config from Firebase"
  exit 1
fi

# Extract the course URL using jq
FIREBASE_URL=$(echo "$FIREBASE_RESPONSE" | jq -r ".result.courses[] | select(.id==\"$COURSE_ID\") | .url")

if [ -z "$FIREBASE_URL" ] || [ "$FIREBASE_URL" = "null" ]; then
  echo "ERROR: Course '$COURSE_ID' not found in Firebase"
  echo ""
  echo "Available courses:"
  echo "$FIREBASE_RESPONSE" | jq -r '.result.courses[].id' | sort | head -20
  exit 1
fi

# Resolve relative URLs
HUB_URL="https://mathacademy-cyan.vercel.app"
if [[ "$FIREBASE_URL" != http* ]]; then
  RESOLVED_URL="${HUB_URL}/${FIREBASE_URL}"
else
  RESOLVED_URL="$FIREBASE_URL"
fi

# Remove trailing slash for consistency
RESOLVED_URL="${RESOLVED_URL%/}"

echo "Firebase URL: $FIREBASE_URL"
echo "Resolved URL: $RESOLVED_URL"
echo ""

# Check if URL resolves
echo "Checking if URL is accessible..."
HTTP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" "$RESOLVED_URL")

if [ "$HTTP_STATUS" -ge 400 ]; then
  echo "ERROR: URL returns HTTP $HTTP_STATUS"
  echo ""
  echo "The Firebase URL for '$COURSE_ID' is broken!"
  echo "Firebase has: $FIREBASE_URL"
  echo "This resolves to: $RESOLVED_URL"
  echo "HTTP status: $HTTP_STATUS"
  echo ""
  echo "ACTION REQUIRED: Update the URL in Firebase to point to a working deployment."
  exit 1
fi

echo "HTTP Status: $HTTP_STATUS (OK)"
echo ""

# Check for Vercel error page
echo "Checking for Vercel error pages..."
PAGE_CONTENT=$(curl -s "$RESOLVED_URL" | head -1000)

if echo "$PAGE_CONTENT" | grep -q "404: NOT_FOUND\|DEPLOYMENT_NOT_FOUND\|This deployment does not exist"; then
  echo "ERROR: URL shows Vercel error page"
  echo ""
  echo "The Firebase URL for '$COURSE_ID' points to a broken Vercel deployment!"
  echo "Firebase has: $FIREBASE_URL"
  echo ""
  echo "ACTION REQUIRED: Either:"
  echo "  1. Deploy to the correct Vercel project: $RESOLVED_URL"
  echo "  2. Update Firebase to point to the actual deployment URL"
  exit 1
fi

echo "No Vercel errors detected."
echo ""
echo "=== VALIDATION PASSED ==="
echo "Course '$COURSE_ID' Firebase URL is valid and accessible."
echo "URL: $RESOLVED_URL"
