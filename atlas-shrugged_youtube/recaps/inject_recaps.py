#!/usr/bin/env python3
"""
Inject Previously On... recaps into existing episode generators.

This script updates episodes 2-30 to include recap sections at the start
of their introduction.

Usage:
    python inject_recaps.py              # Preview changes
    python inject_recaps.py --apply      # Apply changes to files
"""

import re
import sys
from pathlib import Path

# Import recaps
from all_recaps import RECAPS

BASE_DIR = Path(__file__).parent.parent


def find_episode_generators():
    """Find all episode generator Python files."""
    generators = []

    for ep_num in range(2, 31):
        # Try different naming patterns
        patterns = [
            f"episode_{ep_num:02d}_production/elevenlabs_generator_ep{ep_num:02d}.py",
            f"episode_{ep_num:02d}_production/elevenlabs_generator_ep{ep_num}.py",
        ]

        for pattern in patterns:
            path = BASE_DIR / pattern
            if path.exists():
                generators.append((ep_num, path))
                break

    return generators


def inject_recap_into_generator(ep_num, file_path, apply=False):
    """Inject recap into an episode generator's introduction section."""

    if ep_num not in RECAPS:
        return False, "No recap available"

    recap = RECAPS[ep_num]

    with open(file_path, 'r') as f:
        content = f.read()

    # Check if recap already injected
    if "Previously" in content and ("Previously on Atlas Shrugged" in content or "Previously:" in content):
        return False, "Recap already present"

    # Find the introduction section
    # Pattern: "02_introduction": """text"""
    intro_pattern = r'("02_introduction":\s*""")(.*?)(""")'

    match = re.search(intro_pattern, content, re.DOTALL)

    if not match:
        # Try alternative patterns
        intro_pattern = r"('02_introduction':\s*\"\"\")(.*?)(\"\"\")"
        match = re.search(intro_pattern, content, re.DOTALL)

    if not match:
        return False, "Could not find introduction section"

    prefix = match.group(1)
    original_intro = match.group(2)
    suffix = match.group(3)

    # Inject recap at the start of introduction
    new_intro = f"{recap}\n\n{original_intro.strip()}"

    new_content = content[:match.start()] + prefix + new_intro + suffix + content[match.end():]

    if apply:
        with open(file_path, 'w') as f:
            f.write(new_content)
        return True, "Recap injected"
    else:
        return True, "Would inject recap"


def main():
    apply = "--apply" in sys.argv

    print("=" * 60)
    print("Atlas Shrugged - Recap Injection Tool")
    print("=" * 60)
    print()

    if apply:
        print("MODE: APPLYING CHANGES")
    else:
        print("MODE: PREVIEW (use --apply to make changes)")

    print()

    generators = find_episode_generators()
    print(f"Found {len(generators)} episode generators")
    print()

    success_count = 0
    skip_count = 0
    error_count = 0

    for ep_num, path in generators:
        success, message = inject_recap_into_generator(ep_num, path, apply)

        status = "✓" if success else "○"
        print(f"  {status} Episode {ep_num:02d}: {message}")

        if success:
            success_count += 1
        elif "already" in message.lower():
            skip_count += 1
        else:
            error_count += 1

    print()
    print("-" * 40)
    print(f"Success: {success_count}")
    print(f"Skipped: {skip_count}")
    print(f"Errors:  {error_count}")

    if not apply and success_count > 0:
        print()
        print("Run with --apply to make changes")


if __name__ == "__main__":
    main()
