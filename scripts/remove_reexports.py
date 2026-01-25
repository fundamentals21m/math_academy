#!/usr/bin/env python3
"""Remove re-export boilerplate from courses."""

import os
import re
import shutil

BASE_DIR = "/Users/brianhirschfield/Claude/math_academy"

# Courses to skip (they have full implementations, not just re-exports)
SKIP_COURSES = {"basic-algebra", "abstract-algebra"}

def get_courses_with_reexports():
    """Find courses with lib/gamification directories."""
    courses = []
    for item in os.listdir(BASE_DIR):
        if item.startswith('.') or item in SKIP_COURSES:
            continue
        lib_path = os.path.join(BASE_DIR, item, "src", "lib", "gamification")
        if os.path.isdir(lib_path):
            courses.append(item)
    return courses

def update_imports_in_file(filepath):
    """Update imports from @/lib/gamification to @shared/gamification."""
    with open(filepath, 'r') as f:
        content = f.read()

    # Replace various import patterns
    patterns = [
        (r"from '@/lib/gamification/masteryCalculator'", "from '@shared/gamification'"),
        (r"from '@/lib/gamification/xpCalculator'", "from '@shared/gamification'"),
        (r"from '@/lib/gamification/index'", "from '@shared/gamification'"),
        (r"from '@/lib/gamification'", "from '@shared/gamification'"),
    ]

    new_content = content
    for pattern, replacement in patterns:
        new_content = re.sub(pattern, replacement, new_content)

    if new_content != content:
        with open(filepath, 'w') as f:
            f.write(new_content)
        return True
    return False

def update_course(course):
    """Update imports and remove re-export directory for a course."""
    course_dir = os.path.join(BASE_DIR, course)
    src_dir = os.path.join(course_dir, "src")
    lib_gam_dir = os.path.join(src_dir, "lib", "gamification")

    if not os.path.isdir(lib_gam_dir):
        print(f"{course}: no lib/gamification directory")
        return False

    # Update imports in all .ts and .tsx files
    files_updated = 0
    for root, dirs, files in os.walk(src_dir):
        # Skip the lib/gamification directory itself
        if "lib/gamification" in root:
            continue
        for filename in files:
            if filename.endswith(('.ts', '.tsx')):
                filepath = os.path.join(root, filename)
                if update_imports_in_file(filepath):
                    files_updated += 1

    # Remove the lib/gamification directory
    shutil.rmtree(lib_gam_dir)

    # Check if lib directory is now empty and remove it
    lib_dir = os.path.join(src_dir, "lib")
    if os.path.isdir(lib_dir) and not os.listdir(lib_dir):
        os.rmdir(lib_dir)

    print(f"{course}: updated {files_updated} files, removed lib/gamification")
    return True

if __name__ == "__main__":
    courses = get_courses_with_reexports()
    print(f"Found {len(courses)} courses with re-export directories")
    print(f"Skipping: {SKIP_COURSES}")
    print()

    updated = 0
    for course in sorted(courses):
        if update_course(course):
            updated += 1

    print(f"\nUpdated {updated} courses")
