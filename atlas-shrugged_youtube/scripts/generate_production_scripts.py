#!/usr/bin/env python3
"""
Generate Missing Production Scripts from Episode Generators

This script extracts content from the elevenlabs_generator_epXX.py files
and creates corresponding episode_XX_script.md production scripts.

Usage:
    python generate_production_scripts.py              # Preview all
    python generate_production_scripts.py --apply      # Create files
    python generate_production_scripts.py --episode 5  # Single episode
"""

import os
import re
import sys
import ast
import argparse
from pathlib import Path
from textwrap import dedent

BASE_DIR = Path(__file__).parent.parent

# Episode metadata
EPISODES = {
    1: {"title": "The Theme", "part": 1, "part_name": "Non-Contradiction"},
    2: {"title": "The Chain", "part": 1, "part_name": "Non-Contradiction"},
    3: {"title": "The Top and the Bottom", "part": 1, "part_name": "Non-Contradiction"},
    4: {"title": "The Immovable Movers", "part": 1, "part_name": "Non-Contradiction"},
    5: {"title": "The Climax of the d'Anconias", "part": 1, "part_name": "Non-Contradiction"},
    6: {"title": "The Non-Commercial", "part": 1, "part_name": "Non-Contradiction"},
    7: {"title": "The Exploiters and the Exploited", "part": 1, "part_name": "Non-Contradiction"},
    8: {"title": "The John Galt Line", "part": 1, "part_name": "Non-Contradiction"},
    9: {"title": "The Sacred and the Profane", "part": 1, "part_name": "Non-Contradiction"},
    10: {"title": "Wyatt's Torch", "part": 1, "part_name": "Non-Contradiction"},
    11: {"title": "The Aristocracy of Pull", "part": 2, "part_name": "Either-Or"},
    12: {"title": "The Anniversary", "part": 2, "part_name": "Either-Or"},
    13: {"title": "White Blackmail", "part": 2, "part_name": "Either-Or"},
    14: {"title": "The Sanction of the Victim", "part": 2, "part_name": "Either-Or"},
    15: {"title": "Account Overdrawn", "part": 2, "part_name": "Either-Or"},
    16: {"title": "Miracle Metal", "part": 2, "part_name": "Either-Or"},
    17: {"title": "The Moratorium on Brains", "part": 2, "part_name": "Either-Or"},
    18: {"title": "By Our Love", "part": 2, "part_name": "Either-Or"},
    19: {"title": "The Face Without Pain or Fear or Guilt", "part": 2, "part_name": "Either-Or"},
    20: {"title": "The Sign of the Dollar", "part": 2, "part_name": "Either-Or"},
    21: {"title": "Atlantis", "part": 3, "part_name": "A Is A"},
    22: {"title": "The Utopia of Greed", "part": 3, "part_name": "A Is A"},
    23: {"title": "Anti-Greed", "part": 3, "part_name": "A Is A"},
    24: {"title": "Anti-Life", "part": 3, "part_name": "A Is A"},
    25: {"title": "Their Brothers' Keepers", "part": 3, "part_name": "A Is A"},
    26: {"title": "The Concerto of Deliverance", "part": 3, "part_name": "A Is A"},
    27: {"title": "This is John Galt Speaking", "part": 3, "part_name": "A Is A"},
    28: {"title": "The Egoist", "part": 3, "part_name": "A Is A"},
    29: {"title": "The Generator", "part": 3, "part_name": "A Is A"},
    30: {"title": "In the Name of the Best Within Us", "part": 3, "part_name": "A Is A"},
}


def extract_sections_from_generator(generator_path):
    """Extract SECTIONS dict from a generator Python file."""
    with open(generator_path, 'r') as f:
        content = f.read()

    # Find the SECTIONS dictionary
    match = re.search(r'SECTIONS\s*=\s*\{', content)
    if not match:
        return None

    # Find the matching closing brace
    start = match.start()
    brace_count = 0
    in_string = False
    string_char = None
    escape_next = False

    for i, char in enumerate(content[start:], start):
        if escape_next:
            escape_next = False
            continue

        if char == '\\':
            escape_next = True
            continue

        if char in '"\'':
            if not in_string:
                # Check for triple quotes
                if content[i:i+3] == '"""' or content[i:i+3] == "'''":
                    in_string = True
                    string_char = content[i:i+3]
                else:
                    in_string = True
                    string_char = char
            elif char == string_char[0]:
                # Check if it's end of triple quote
                if len(string_char) == 3 and content[i:i+3] == string_char:
                    in_string = False
                    string_char = None
                elif len(string_char) == 1:
                    in_string = False
                    string_char = None
            continue

        if in_string:
            continue

        if char == '{':
            brace_count += 1
        elif char == '}':
            brace_count -= 1
            if brace_count == 0:
                end = i + 1
                break
    else:
        return None

    sections_str = content[start:end]

    # Parse it as Python
    try:
        # Create a minimal context
        local_vars = {}
        exec(sections_str, {}, local_vars)
        return local_vars.get('SECTIONS', {})
    except:
        return None


def section_name_to_title(name):
    """Convert section name like '03_the_collapse' to 'The Collapse'."""
    # Remove numeric prefix
    clean = re.sub(r'^\d+_', '', name)
    # Convert underscores to spaces and title case
    return clean.replace('_', ' ').title()


def estimate_duration(text):
    """Estimate reading duration in seconds (150 words per minute)."""
    words = len(text.split())
    return int((words / 150) * 60)


def format_timestamp(seconds):
    """Format seconds as MM:SS."""
    minutes = seconds // 60
    secs = seconds % 60
    return f"{minutes}:{secs:02d}"


def generate_production_script(ep_num, sections):
    """Generate a production script markdown from sections."""
    meta = EPISODES.get(ep_num, {"title": f"Episode {ep_num}", "part": 1, "part_name": "Non-Contradiction"})

    # Calculate timestamps
    timestamps = []
    current_time = 0
    for section_name, text in sections.items():
        duration = estimate_duration(text)
        title = section_name_to_title(section_name)
        end_time = current_time + duration
        timestamps.append({
            "name": title,
            "start": format_timestamp(current_time),
            "end": format_timestamp(end_time),
            "content": text[:50] + "..." if len(text) > 50 else text
        })
        current_time = end_time

    total_duration = current_time
    duration_str = f"~{total_duration // 60} minutes"

    # Build the script
    script = f"""# Episode {ep_num} - {meta['title']}
## Atlas Shrugged | Part {meta['part']}: {meta['part_name']}

**Episode Duration:** {duration_str}
**Section ID:** {ep_num - 1}
**Prerequisites:** {"Episode " + str(ep_num - 1) if ep_num > 1 else "None (Series Introduction)"}

---

## PRODUCTION NOTES

### Required Visuals
- [ ] Title card with episode icon and series logo
- [ ] Episode-specific character cards
- [ ] Quote cards for key passages
- [ ] Theme summary cards
- [ ] B-roll footage suggestions

### B-Roll Suggestions
- Industrial/urban imagery appropriate to episode themes
- Character-appropriate settings
- Thematic visual metaphors
- 1950s America aesthetic

### Key Timestamps

| Section | Start | End | Content |
|---------|-------|-----|---------|
"""

    for ts in timestamps:
        script += f"| {ts['name']} | {ts['start']} | {ts['end']} | {ts['content'][:30]}... |\n"

    script += """
---

## SCRIPT

"""

    # Add each section
    for section_name, text in sections.items():
        title = section_name_to_title(section_name)
        idx = list(sections.keys()).index(section_name)
        start = timestamps[idx]['start']
        end = timestamps[idx]['end']

        script += f"""### {title.upper()} ({start}-{end})

[Visual: {title}-appropriate imagery]

{text}

---

"""

    # Add pronunciation guide and SEO keywords
    script += """## PRONUNCIATION GUIDE

- Taggart → TAG-art
- Dagny → DAG-nee
- Rearden → REAR-den
- d'Anconia → dan-CONE-ya
- Galt → GAWLT

---

## SEO KEYWORDS

- Atlas Shrugged
- Ayn Rand
- Objectivism
"""
    script += f"- {meta['title']}\n"
    script += """- Philosophical fiction
- Capitalism
- Individualism
- John Galt
"""

    return script


def main():
    parser = argparse.ArgumentParser(description="Generate production scripts from generators")
    parser.add_argument("--apply", action="store_true", help="Create files (default is preview)")
    parser.add_argument("--episode", "-e", type=int, help="Process single episode")
    parser.add_argument("--force", "-f", action="store_true", help="Overwrite existing scripts")

    args = parser.parse_args()

    # Determine episodes to process
    if args.episode:
        episodes = [args.episode]
    else:
        episodes = range(1, 31)

    print("=" * 60)
    print("Production Script Generator")
    print("=" * 60)
    print(f"Mode: {'APPLY' if args.apply else 'PREVIEW'}")
    print()

    created = 0
    skipped = 0
    errors = 0

    for ep_num in episodes:
        ep_dir = BASE_DIR / f"episode_{ep_num:02d}_production"
        generator = ep_dir / f"elevenlabs_generator_ep{ep_num:02d}.py"
        script_path = ep_dir / f"episode_{ep_num:02d}_script.md"

        # Check if script already exists
        if script_path.exists() and not args.force:
            print(f"  SKIP Episode {ep_num}: Script already exists")
            skipped += 1
            continue

        # Check if generator exists
        if not generator.exists():
            print(f"  ERROR Episode {ep_num}: Generator not found")
            errors += 1
            continue

        # Extract sections from generator
        sections = extract_sections_from_generator(generator)
        if not sections:
            print(f"  ERROR Episode {ep_num}: Could not extract sections")
            errors += 1
            continue

        # Generate production script
        script_content = generate_production_script(ep_num, sections)

        if args.apply:
            with open(script_path, 'w') as f:
                f.write(script_content)
            print(f"  CREATED Episode {ep_num}: {script_path.name}")
            created += 1
        else:
            print(f"  WOULD CREATE Episode {ep_num}: {script_path.name}")
            print(f"    Sections: {list(sections.keys())}")
            created += 1

    print()
    print("-" * 40)
    print(f"Created: {created}")
    print(f"Skipped: {skipped}")
    print(f"Errors:  {errors}")

    if not args.apply and created > 0:
        print()
        print("Run with --apply to create files")


if __name__ == "__main__":
    main()
