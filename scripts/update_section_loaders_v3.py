#!/usr/bin/env python3
"""Update section loaders in remaining courses to use glob pattern - v3 with better parsing."""

import re
import os

BASE_DIR = "/Users/brianhirschfield/Claude/math_academy"

COURSES = [
    "frost", "islr", "koblitz-course", "linalg", "gauss", "human-action",
    "four-pillars", "euclid", "crypto-react", "calc1-course", "atlas-shrugged",
    "advanced-linalg", "men-of-math-course", "numbers-geometry-course",
    "only-the-strong-survive", "road-to-serfdom", "thales", "why-math"
]

NEW_SECTION_BLOCK = '''// =============================================================================
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

    # Strategy: Find the line with "const sectionLoaders: Record<number"
    # Then find the start of the comment block above it (// ===)
    # Then find the closing }; by counting braces

    lines = content.split('\n')

    # Find the sectionLoaders line
    loader_line_idx = None
    for i, line in enumerate(lines):
        if 'const sectionLoaders: Record<number' in line or 'const sectionLoaders: Record<number' in line:
            loader_line_idx = i
            break

    if loader_line_idx is None:
        print(f"{course}: no sectionLoaders found")
        return False

    # Find the start of the comment block above
    start_idx = loader_line_idx
    for i in range(loader_line_idx - 1, -1, -1):
        line = lines[i].strip()
        if line.startswith('//'):
            start_idx = i
        elif line == '':
            continue
        else:
            break

    # Find the end of the sectionLoaders object
    # Look for the line that ends with "};" at the same indentation
    end_idx = loader_line_idx
    brace_count = 0
    in_object = False

    for i in range(loader_line_idx, len(lines)):
        line = lines[i]
        for char in line:
            if char == '{':
                brace_count += 1
                in_object = True
            elif char == '}':
                brace_count -= 1

        if in_object and brace_count == 0:
            end_idx = i
            break

    # Build new content
    new_lines = lines[:start_idx] + [NEW_SECTION_BLOCK] + lines[end_idx + 1:]
    new_content = '\n'.join(new_lines)

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
