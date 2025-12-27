#!/bin/bash
# Deploy a course to the GitHub Pages hub (math_academy repository)
#
# Usage: ./scripts/deploy-to-hub.sh <source-dir> <deploy-dir>
# Example: ./scripts/deploy-to-hub.sh abstract-algebra aa
#
# This script:
# 1. Verifies the vite.config.ts has the correct base path
# 2. Builds the course
# 3. Copies the dist/ to the deploy directory
# 4. Verifies the built files have correct paths

set -e

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

if [ $# -ne 2 ]; then
    echo -e "${RED}Usage: $0 <source-dir> <deploy-dir>${NC}"
    echo "Example: $0 abstract-algebra aa"
    exit 1
fi

SOURCE_DIR="$1"
DEPLOY_DIR="$2"
EXPECTED_BASE="/math_academy/${DEPLOY_DIR}/"

# Get script directory and project root
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"

cd "$PROJECT_ROOT"

# Check source directory exists
if [ ! -d "$SOURCE_DIR" ]; then
    echo -e "${RED}Error: Source directory '$SOURCE_DIR' not found${NC}"
    exit 1
fi

# Check vite.config.ts has correct base path
VITE_CONFIG="$SOURCE_DIR/vite.config.ts"
if [ ! -f "$VITE_CONFIG" ]; then
    echo -e "${RED}Error: $VITE_CONFIG not found${NC}"
    exit 1
fi

echo -e "${YELLOW}Checking base path in $VITE_CONFIG...${NC}"

# Extract base path from vite config
ACTUAL_BASE=$(grep -E "^\s*base:" "$VITE_CONFIG" | head -1 | sed "s/.*base:[[:space:]]*['\"]\\([^'\"]*\\)['\"].*/\\1/")

if [ -z "$ACTUAL_BASE" ]; then
    # Try to find BASE_PATH variable
    ACTUAL_BASE=$(grep -E "const BASE_PATH" "$VITE_CONFIG" | sed "s/.*=[[:space:]]*['\"]\\([^'\"]*\\)['\"].*/\\1/")
fi

if [ "$ACTUAL_BASE" != "$EXPECTED_BASE" ]; then
    echo -e "${RED}Error: Base path mismatch!${NC}"
    echo -e "  Expected: ${GREEN}$EXPECTED_BASE${NC}"
    echo -e "  Found:    ${RED}$ACTUAL_BASE${NC}"
    echo ""
    echo "Please update $VITE_CONFIG to use:"
    echo "  base: '$EXPECTED_BASE'"
    exit 1
fi

echo -e "${GREEN}Base path is correct: $ACTUAL_BASE${NC}"

# Build the course
echo -e "${YELLOW}Building $SOURCE_DIR...${NC}"
cd "$SOURCE_DIR"
npm run build
cd "$PROJECT_ROOT"

# Verify built files have correct paths
echo -e "${YELLOW}Verifying built files...${NC}"
BUILT_INDEX="$SOURCE_DIR/dist/index.html"
if ! grep -q "$EXPECTED_BASE" "$BUILT_INDEX"; then
    echo -e "${RED}Error: Built index.html does not contain expected base path${NC}"
    echo "Expected to find: $EXPECTED_BASE"
    echo "Check your vite.config.ts"
    exit 1
fi

echo -e "${GREEN}Build verified successfully${NC}"

# Copy to deploy directory
echo -e "${YELLOW}Deploying to $DEPLOY_DIR/...${NC}"
rm -rf "$DEPLOY_DIR"
cp -r "$SOURCE_DIR/dist" "$DEPLOY_DIR"

# Final verification
echo -e "${YELLOW}Final verification...${NC}"
if grep -q "$EXPECTED_BASE" "$DEPLOY_DIR/index.html"; then
    echo -e "${GREEN}Deployment successful!${NC}"
    echo ""
    echo "Files deployed to: $DEPLOY_DIR/"
    echo "Base path: $EXPECTED_BASE"
    echo ""
    echo "Next steps:"
    echo "  git add $DEPLOY_DIR/"
    echo "  git commit -m 'Deploy $SOURCE_DIR to $DEPLOY_DIR'"
    echo "  git push"
else
    echo -e "${RED}Error: Final verification failed${NC}"
    exit 1
fi
