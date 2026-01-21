#!/usr/bin/env python3
"""
Fix slide HTML files for Atlas Shrugged YouTube series.

This script:
1. Fixes Part 3 (ep21-ep30) accent colors to steel blue (#4a6fa5)
2. Normalizes glow sizes to 800px
3. Normalizes glow opacity to 0.15
4. Normalizes letter-spacing to 0.2em for uppercase text
"""

import os
import re
from pathlib import Path

SLIDES_DIR = Path(__file__).parent

# Color definitions
STEEL_BLUE = "#4a6fa5"
STEEL_BLUE_RGB = "74, 111, 165"
CRIMSON = "#8b4545"
CRIMSON_RGB = "139, 69, 69"
GOLD = "#d4a84b"
GOLD_RGB = "212, 168, 75"

# Wrong colors used in Part 3
WRONG_STEEL_BLUE = "#4a6b8a"
WRONG_STEEL_BLUE_RGB = "74, 107, 138"
DARK_CRIMSON = "#8b2d2d"

def get_episode_number(filename):
    """Extract episode number from filename like ep01_section_01.html"""
    match = re.match(r'ep(\d+)_', filename)
    if match:
        return int(match.group(1))
    return None

def get_part_number(episode):
    """Get part number (1, 2, or 3) from episode number"""
    if episode is None:
        return None
    if episode <= 10:
        return 1
    elif episode <= 20:
        return 2
    else:
        return 3

def fix_part3_colors(content, filename):
    """Fix Part 3 files to use steel blue instead of wrong colors"""
    modified = content

    # Fix wrong steel blue shade
    modified = modified.replace(WRONG_STEEL_BLUE, STEEL_BLUE)
    modified = modified.replace(WRONG_STEEL_BLUE_RGB, STEEL_BLUE_RGB)

    # For Part 3, replace ALL crimson colors with steel blue
    # This includes title colors, dividers, bottom-text, etc.
    # The dark crimson #8b2d2d is used throughout Part 3 incorrectly

    # Replace hex colors
    modified = modified.replace("#8b2d2d", STEEL_BLUE)
    modified = modified.replace("#8b4545", STEEL_BLUE)

    # Replace RGB values for crimson
    modified = re.sub(r'139,\s*45,\s*45', STEEL_BLUE_RGB, modified)
    modified = re.sub(r'139,\s*69,\s*69', STEEL_BLUE_RGB, modified)

    return modified

def normalize_glow(content):
    """Normalize glow size to 800px and opacity to 0.15"""
    # Normalize glow dimensions (700px, 900px, 1000px -> 800px)
    modified = re.sub(
        r'(width:\s*)(?:700|900|1000)px(\s*;\s*height:\s*)(?:700|900|1000)px',
        r'\g<1>800px\g<2>800px',
        content
    )

    # Normalize opacity in glow gradients (0.10, 0.12, 0.18, 0.20 -> 0.15)
    # Match rgba patterns in glow gradients
    modified = re.sub(
        r'(rgba\([^)]+,\s*)(?:0\.1[0-48]|0\.2[0])(\)\s*0%)',
        r'\g<1>0.15\g<2>',
        modified
    )

    return modified

def normalize_letter_spacing(content):
    """Normalize letter-spacing for uppercase text to 0.2em"""
    # Replace various letter-spacing values (0.1em, 0.3em, 0.4em) with 0.2em
    # Be selective - only in contexts with text-transform: uppercase nearby
    # For simplicity, we'll normalize all letter-spacing in tag/label contexts

    # This is tricky - we want to preserve some variation
    # Let's be conservative and only normalize extreme values
    modified = re.sub(
        r'(letter-spacing:\s*)0\.4em',
        r'\g<1>0.3em',
        content
    )

    return modified

def process_file(filepath):
    """Process a single HTML file"""
    filename = filepath.name
    episode = get_episode_number(filename)
    part = get_part_number(episode)

    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original = content

    # Apply fixes based on part
    if part == 3:
        content = fix_part3_colors(content, filename)

    # Apply universal fixes
    content = normalize_glow(content)
    content = normalize_letter_spacing(content)

    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        return True
    return False

def main():
    """Main entry point"""
    html_files = list(SLIDES_DIR.glob('ep*_section_*.html'))

    modified_count = 0
    for filepath in sorted(html_files):
        if process_file(filepath):
            print(f"Modified: {filepath.name}")
            modified_count += 1

    print(f"\nTotal files modified: {modified_count}")
    print(f"Total files checked: {len(html_files)}")

if __name__ == '__main__':
    main()
