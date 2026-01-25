#!/usr/bin/env python3
"""Update section loaders in all courses to use glob pattern."""

import re
import os

BASE_DIR = "/Users/brianhirschfield/Claude/math_academy"

COURSES = [
    "frost", "abstract-algebra", "advanced-linalg", "atlas-shrugged",
    "calc1-course", "crypto-react", "euclid", "four-pillars", "gauss",
    "human-action", "islr", "koblitz-course", "linalg", "men-of-math-course",
    "numbers-geometry-course", "only-the-strong-survive", "road-to-serfdom",
    "thales", "why-math"
]

NEW_SECTION_LOADER = '''// =============================================================================
// SECTION CONFIGURATION
// =============================================================================
// Sections are auto-discovered using Vite's glob imports. Just add Section files
// to src/pages/sections/ following the naming convention Section00.tsx, Section01.tsx, etc.
// =============================================================================
import { createSectionLoadersFromGlob, type SectionLoaders } from '@shared/routing/sectionLoader';

const sectionModules = import.meta.glob('./pages/sections/Section*.tsx');
const sectionLoaders: SectionLoaders = createSectionLoadersFromGlob(sectionModules);'''

def update_course(course):
    app_file = os.path.join(BASE_DIR, course, "src", "App.tsx")

    if not os.path.exists(app_file):
        print(f"{course}: no App.tsx")
        return False

    with open(app_file, 'r') as f:
        content = f.read()

    if "createSectionLoadersFromGlob" in content:
        print(f"{course}: already updated")
        return False

    # Find the start: look for comment block before sectionLoaders
    # Pattern: // ===+ line, then any lines starting with //, then const sectionLoaders
    start_pattern = r'// =+\n(?://[^\n]*\n)+const sectionLoaders: Record<number'
    match = re.search(start_pattern, content)

    if not match:
        # Try alternative: just find const sectionLoaders directly
        match = re.search(r'const sectionLoaders: Record<number', content)
        if match:
            start_pos = match.start()
        else:
            print(f"{course}: no sectionLoaders found")
            return False
    else:
        start_pos = match.start()

    # Find the end: closing }; of sectionLoaders object
    # Count braces to find matching close
    brace_start = content.find('{', start_pos)
    if brace_start == -1:
        print(f"{course}: malformed sectionLoaders")
        return False

    depth = 0
    end_pos = brace_start
    for i, char in enumerate(content[brace_start:], brace_start):
        if char == '{':
            depth += 1
        elif char == '}':
            depth -= 1
            if depth == 0:
                end_pos = i + 1
                break

    # Include the semicolon
    if content[end_pos:end_pos+1] == ';':
        end_pos += 1

    # Replace
    new_content = content[:start_pos] + NEW_SECTION_LOADER + content[end_pos:]

    with open(app_file, 'w') as f:
        f.write(new_content)

    print(f"{course}: updated successfully")
    return True

if __name__ == "__main__":
    updated = 0
    for course in COURSES:
        if update_course(course):
            updated += 1
    print(f"\nUpdated {updated} courses")
