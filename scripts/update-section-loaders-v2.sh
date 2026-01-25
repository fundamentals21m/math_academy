#!/bin/bash
# Update section loaders in all courses to use glob pattern - v2 with flexible matching

COURSES=(
  abstract-algebra
  advanced-linalg
  atlas-shrugged
  calc1-course
  crypto-react
  euclid
  four-pillars
  frost
  gauss
  human-action
  islr
  koblitz-course
  linalg
  men-of-math-course
  numbers-geometry-course
  only-the-strong-survive
  road-to-serfdom
  thales
  why-math
)

for course in "${COURSES[@]}"; do
  APP_FILE="/Users/brianhirschfield/Claude/math_academy/$course/src/App.tsx"

  if [ ! -f "$APP_FILE" ]; then
    echo "Skipping $course - no App.tsx"
    continue
  fi

  # Check if already updated
  if grep -q "createSectionLoadersFromGlob" "$APP_FILE"; then
    echo "Skipping $course - already updated"
    continue
  fi

  echo "Updating $course..."

  python3 << 'PYTHON_SCRIPT'
import re
import sys

app_file = "/Users/brianhirschfield/Claude/math_academy/COURSE/src/App.tsx".replace("COURSE", "PLACEHOLDER_COURSE")

with open(app_file, 'r') as f:
    content = f.read()

# More flexible pattern - matches any comment block followed by sectionLoaders
# Look for: comment lines, then "const sectionLoaders: Record<number..." up to closing "};"
pattern = r'''(// =+\n// [^\n]+\n// =+\n(?://[^\n]*\n)*)const sectionLoaders: Record<number, \(\) => Promise<\{ default: React\.ComponentType \}>> = \{[^}]+(?:\}[^}]+)*\};'''

replacement = '''// =============================================================================
// SECTION CONFIGURATION
// =============================================================================
// Sections are auto-discovered using Vite's glob imports. Just add Section files
// to src/pages/sections/ following the naming convention Section00.tsx, Section01.tsx, etc.
// =============================================================================
import { createSectionLoadersFromGlob, type SectionLoaders } from '@shared/routing/sectionLoader';

const sectionModules = import.meta.glob('./pages/sections/Section*.tsx');
const sectionLoaders: SectionLoaders = createSectionLoadersFromGlob(sectionModules);'''

new_content = re.sub(pattern, replacement, content, flags=re.DOTALL)

if new_content != content:
    with open(app_file, 'w') as f:
        f.write(new_content)
    print("  Updated successfully")
else:
    print("  No changes made (pattern not matched)")
PYTHON_SCRIPT

done

echo "Done!"
