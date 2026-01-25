#!/bin/bash
#
# Rebuild all courses with latest shared module
# Run this after making changes to shared/gamification or shared/components
#
# Usage:
#   ./scripts/rebuild-all-courses.sh          # Rebuild all courses
#   ./scripts/rebuild-all-courses.sh --clean  # Clean dist directories first
#

set -e

cd "$(dirname "$0")/.."

echo "=== Rebuilding All Courses with Latest Shared Module ==="
echo ""

# Check for --clean flag
if [ "$1" == "--clean" ]; then
    echo "Cleaning dist directories..."
    pnpm -r exec rm -rf dist 2>/dev/null || true
    echo ""
fi

# Get list of courses (directories with vite.config.ts, excluding shared and node_modules)
COURSES=$(find . -maxdepth 2 -name "vite.config.ts" -not -path "./node_modules/*" -not -path "./shared/*" | xargs -I {} dirname {} | sort)

TOTAL=$(echo "$COURSES" | wc -l | tr -d ' ')
CURRENT=0
FAILED=()

echo "Found $TOTAL courses to rebuild"
echo ""

for COURSE_PATH in $COURSES; do
    CURRENT=$((CURRENT + 1))
    COURSE_NAME=$(basename "$COURSE_PATH")

    echo "[$CURRENT/$TOTAL] Building $COURSE_NAME..."

    if (cd "$COURSE_PATH" && pnpm run build 2>&1 | tail -3); then
        echo "  Done"
    else
        echo "  FAILED"
        FAILED+=("$COURSE_NAME")
    fi
done

echo ""
echo "=== Build Complete ==="

if [ ${#FAILED[@]} -gt 0 ]; then
    echo ""
    echo "FAILED COURSES (${#FAILED[@]}):"
    for f in "${FAILED[@]}"; do
        echo "  - $f"
    done
    exit 1
else
    echo "All $TOTAL courses rebuilt successfully!"
fi
