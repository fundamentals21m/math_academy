#!/bin/bash
# Update section loaders in all courses to use glob pattern

COURSES=(
  abstract-algebra
  advanced-linalg
  atlas-shrugged
  base-race
  basic-algebra
  bfi
  calc_easy
  calc_lib_art
  calc1-course
  coding-theory-course
  course-template
  crypto-react
  euclid
  euler-intro
  four-pillars
  frost
  gauss
  human-action
  intro-discrete
  islr
  koblitz-course
  lcn
  linalg
  man-econ-state
  math_history
  men-of-math-course
  mod-race
  numbers-geometry-course
  only-the-strong-survive
  orange-is-new-green
  probability
  real-analysis
  road-to-serfdom
  rothbard_controversies
  rudin-course
  saylor-diss
  secp256k1
  tao-analysis-1
  tao2
  thales
  tontines
  west-graphs
  why-math
)

for course in "${COURSES[@]}"; do
  APP_FILE="/Users/brianhirschfield/Claude/math_academy/$course/src/App.tsx"

  if [ ! -f "$APP_FILE" ]; then
    echo "Skipping $course - no App.tsx"
    continue
  fi

  # Check if already updated (contains createSectionLoadersFromGlob)
  if grep -q "createSectionLoadersFromGlob" "$APP_FILE"; then
    echo "Skipping $course - already updated"
    continue
  fi

  # Check if has section loaders
  if ! grep -q "sectionLoaders.*Record<number" "$APP_FILE"; then
    echo "Skipping $course - no section loaders found"
    continue
  fi

  echo "Updating $course..."

  # Create a temporary file with the updated content
  python3 << EOF
import re

with open("$APP_FILE", 'r') as f:
    content = f.read()

# Pattern to match the entire section configuration block
# From "// ===...SECTION CONFIGURATION" to the closing "};" of sectionLoaders
pattern = r'''// =+\n// SECTION CONFIGURATION\n// =+\n// Add your section loaders here\..*?// =+\nconst sectionLoaders: Record<number, \(\) => Promise<\{ default: React\.ComponentType \}>> = \{[^}]+\};'''

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
    with open("$APP_FILE", 'w') as f:
        f.write(new_content)
    print(f"  Updated successfully")
else:
    print(f"  No changes made (pattern not matched)")
EOF

done

echo "Done!"
