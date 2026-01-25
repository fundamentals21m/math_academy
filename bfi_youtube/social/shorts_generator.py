#!/usr/bin/env python3
"""
YouTube Shorts Clip Extractor for Bitcoin for Institutions

Extracts 30-60 second vertical clips from each episode for YouTube Shorts:
- Uses chapter timestamps as extraction points
- Vertical format (1080x1920)
- Adds captions overlay from SRT files
- Adds "Full episode in bio" text

Requirements:
    pip install moviepy

Usage:
    python shorts_generator.py [--episode N]

Output:
    bfi_youtube/output/shorts/ep{N}_short_{M}.mp4

Note: This script requires the full episode MP4 files to be present in:
    bfi_youtube/episode_{N}_production/episode_{N}_audio/Episode_{N}_Complete.mp4

If you only have audio files, you'll need to combine with visuals first.
"""

import os
import re
import json
import subprocess
from pathlib import Path
from dataclasses import dataclass
from typing import List, Optional, Tuple
import argparse

# Configuration
BASE_DIR = Path(__file__).parent.parent
CAPTIONS_DIR = BASE_DIR / "captions"
OUTPUT_DIR = BASE_DIR / "output" / "shorts"
COURSE_URL = "https://bfi-liart.vercel.app"

# Shorts clip definitions
# Each episode has 2-3 clip points based on chapter timestamps
# Format: (start_time_seconds, end_time_seconds, title, description)
SHORTS_CLIPS = {
    1: [
        (0, 25, "The Promise of Bitcoin", "Hard money aligns incentives of savers, entrepreneurs, and planners."),
        (72, 130, "Ownership Changes Properties", "The power of Bitcoin is determined by its owner."),
        (213, 270, "The Tyranny of Soft Money", "No group with printing power has resisted temptation."),
    ],
    2: [
        (0, 30, "The Irrational Act", "HODL'ing requires willful irrationality."),
        (90, 150, "Why HODL'ing is Irrational", "Corporate governance prevents long-term holding."),
        (270, 330, "Strategy vs Tesla", "Only dominant individuals overcome institutional pressure."),
    ],
    3: [
        (0, 30, "Thinking in Bitcoin", "Can you measure success in BTC terms?"),
        (90, 150, "The Inflationary Default", "Every institution assumes money loses value."),
        (210, 270, "Quarterly Reporting Traps", "Bitcoin's volatility spans years, not quarters."),
    ],
    4: [
        (0, 30, "The Custody Problem", "Not your keys, not your coins."),
        (90, 150, "Self-Custody vs Institutional", "Adding intermediaries adds risk."),
        (210, 270, "Every Solution Has Tradeoffs", "Security vs convenience vs complexity."),
    ],
    5: [
        (0, 30, "The Time Factor", "Time preference is the key concept."),
        (90, 150, "Institutional Time Horizons", "3-5 year tenures vs 4-year cycles."),
        (210, 270, "Patience as Competitive Advantage", "Low time preference wins in Bitcoin."),
    ],
    6: [
        (0, 30, "Bearer Instruments Explained", "Ownership by possession—no intermediary."),
        (90, 150, "First Digital Bearer Asset", "Before Bitcoin, digital required trust."),
        (180, 240, "Settlement Finality", "Final and irreversible transactions."),
    ],
    7: [
        (0, 30, "Privacy vs Secrecy", "Privacy is selective disclosure."),
        (90, 150, "Bitcoin's Privacy Model", "Pseudonymous, not anonymous."),
        (180, 240, "Part 1 Conclusion", "Bitcoin IS for individuals."),
    ],
    8: [
        (0, 30, "The Strategy Story", "How Saylor transformed MicroStrategy."),
        (90, 150, "The 2020 Decision", "Cash was melting—Bitcoin was the solution."),
        (270, 330, "Balance Sheet Transformation", "From $1B to $100B+ market cap."),
    ],
    9: [
        (0, 30, "The BlackRock Shift", "From skeptic to ETF leader."),
        (90, 150, "Larry Fink's Evolution", "'Index of money laundering' to IBIT."),
        (210, 270, "Making Bitcoin Invisible", "ETFs enable frictionless exposure."),
    ],
    10: [
        (0, 30, "Deferred Comp Intro", "Long-term incentives meet Bitcoin."),
        (90, 150, "Available Options", "401(k), IRA, deferred bonuses."),
        (210, 270, "Start Today", "Most people can add Bitcoin now."),
    ],
    11: [
        (0, 30, "The ETF Revolution", "Spot ETFs changed everything."),
        (90, 150, "Major ETF Comparison", "IBIT vs FBTC vs ARKB."),
        (210, 270, "Fee Wars", "Competition benefits investors."),
    ],
    12: [
        (0, 30, "Treasury Bitcoin Basics", "Corporate cash has to go somewhere."),
        (90, 150, "Board Support Required", "Strategic decision, not finance decision."),
        (210, 270, "The Hard Truth", "Most companies aren't Strategy."),
    ],
    13: [
        (0, 30, "Structured Products Warning", "Yield on Bitcoin is a red flag."),
        (90, 150, "Why Yield Products Failed", "Celsius, BlockFi, Voyager—all gone."),
        (210, 270, "Overcollateralization Works", "2x+ collateral, no yield promises."),
    ],
    14: [
        (0, 30, "The Pension Question", "30+ year horizons match Bitcoin."),
        (90, 150, "Fiduciary Duty Problem", "'Prudent' is defined by old rules."),
        (210, 270, "Wisconsin Led the Way", "First pension to buy Bitcoin."),
    ],
    15: [
        (0, 30, "Bringing It Together", "3 parts, 15 episodes, 1 framework."),
        (90, 150, "The Framework Summary", "Individuals → Institutions → Vehicles."),
        (210, 270, "The Path Forward", "Work with Bitcoin's nature."),
    ],
}


@dataclass
class ShortClip:
    """Represents a YouTube Short clip"""
    episode: int
    clip_num: int
    start_time: int  # seconds
    end_time: int    # seconds
    title: str
    description: str


def parse_srt_file(srt_path: Path) -> List[Tuple[float, float, str]]:
    """Parse SRT file and return list of (start, end, text) tuples"""
    captions = []

    if not srt_path.exists():
        return captions

    with open(srt_path, 'r') as f:
        content = f.read()

    # Split by double newline to get individual entries
    entries = re.split(r'\n\n+', content.strip())

    for entry in entries:
        lines = entry.strip().split('\n')
        if len(lines) >= 3:
            # Parse timestamp line (format: 00:00:00,000 --> 00:00:03,439)
            time_match = re.match(
                r'(\d{2}):(\d{2}):(\d{2}),(\d{3}) --> (\d{2}):(\d{2}):(\d{2}),(\d{3})',
                lines[1]
            )
            if time_match:
                g = time_match.groups()
                start = int(g[0])*3600 + int(g[1])*60 + int(g[2]) + int(g[3])/1000
                end = int(g[4])*3600 + int(g[5])*60 + int(g[6]) + int(g[7])/1000
                text = ' '.join(lines[2:])
                captions.append((start, end, text))

    return captions


def get_captions_for_timerange(captions: List[Tuple[float, float, str]],
                                start_time: float, end_time: float) -> List[Tuple[float, float, str]]:
    """Get captions that fall within a time range"""
    result = []
    for cap_start, cap_end, text in captions:
        # Include if any overlap
        if cap_start < end_time and cap_end > start_time:
            # Adjust times relative to clip start
            adj_start = max(0, cap_start - start_time)
            adj_end = min(end_time - start_time, cap_end - start_time)
            result.append((adj_start, adj_end, text))
    return result


def generate_shorts_metadata(episode_num: Optional[int] = None):
    """Generate metadata JSON for each short"""
    clips_to_process = SHORTS_CLIPS if episode_num is None else {episode_num: SHORTS_CLIPS.get(episode_num, [])}

    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    metadata_dir = OUTPUT_DIR / "metadata"
    metadata_dir.mkdir(exist_ok=True)

    for ep_num, clips in clips_to_process.items():
        for i, (start, end, title, desc) in enumerate(clips, 1):
            clip = ShortClip(
                episode=ep_num,
                clip_num=i,
                start_time=start,
                end_time=end,
                title=title,
                description=desc
            )

            # Generate YouTube metadata
            yt_title = f"{title} | BFI Ep {ep_num} #Bitcoin #Shorts"
            utm_link = f"{COURSE_URL}?utm_source=youtube&utm_medium=shorts&utm_campaign=ep{ep_num}"

            yt_description = f"""{desc}

Full episode: Episode {ep_num} of Bitcoin for Institutions

🎓 FREE Interactive Course: {utm_link}
📖 Get the Book: https://zeuspay.com/btc-for-institutions

#Bitcoin #BitcoinForInstitutions #InstitutionalBitcoin #Shorts"""

            metadata = {
                "episode": ep_num,
                "clip": i,
                "title": yt_title,
                "description": yt_description,
                "start_time": start,
                "end_time": end,
                "duration": end - start,
                "tags": [
                    "Bitcoin",
                    "BitcoinForInstitutions",
                    "InstitutionalBitcoin",
                    "Shorts",
                    "BitcoinEducation",
                    "CorporateBitcoin"
                ]
            }

            filename = f"ep{ep_num:02d}_short_{i:02d}_metadata.json"
            with open(metadata_dir / filename, 'w') as f:
                json.dump(metadata, f, indent=2)

            print(f"Created metadata: {filename}")


def generate_ffmpeg_commands(episode_num: Optional[int] = None):
    """Generate FFmpeg commands for extracting clips"""
    clips_to_process = SHORTS_CLIPS if episode_num is None else {episode_num: SHORTS_CLIPS.get(episode_num, [])}

    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    scripts_dir = OUTPUT_DIR / "scripts"
    scripts_dir.mkdir(exist_ok=True)

    commands = []

    for ep_num, clips in clips_to_process.items():
        # Path to source video (adjust based on your actual file structure)
        # This assumes you have MP4 files somewhere
        source_patterns = [
            BASE_DIR / f"output/videos/episode_{ep_num:02d}.mp4",
            BASE_DIR / f"episode_{ep_num:02d}_production/episode_{ep_num:02d}_video/Episode_{ep_num:02d}_Complete.mp4",
            BASE_DIR / f"output/Episode_{ep_num:02d}_Complete.mp4",
        ]

        source = None
        for pattern in source_patterns:
            if pattern.exists():
                source = pattern
                break

        for i, (start, end, title, _) in enumerate(clips, 1):
            output_file = OUTPUT_DIR / f"ep{ep_num:02d}_short_{i:02d}.mp4"

            # FFmpeg command for vertical short with captions
            # This is a template - adjust based on your video setup
            cmd = f"""
# Episode {ep_num}, Short {i}: {title}
# Duration: {end - start} seconds

ffmpeg -i "{source or 'INPUT_VIDEO.mp4'}" \\
    -ss {start} -t {end - start} \\
    -vf "scale=1080:1920:force_original_aspect_ratio=decrease,pad=1080:1920:(ow-iw)/2:(oh-ih)/2,
         drawtext=text='Full episode in description':
         fontcolor=white:fontsize=32:
         x=(w-text_w)/2:y=h-100" \\
    -c:v libx264 -preset fast -crf 23 \\
    -c:a aac -b:a 128k \\
    "{output_file}"
"""
            commands.append(cmd)

    # Write extraction script
    script_path = scripts_dir / "extract_shorts.sh"
    with open(script_path, 'w') as f:
        f.write("#!/bin/bash\n")
        f.write("# YouTube Shorts Extraction Script\n")
        f.write("# Generated by shorts_generator.py\n\n")
        f.write("set -e\n\n")
        for cmd in commands:
            f.write(cmd)
            f.write("\n")

    # Make executable
    script_path.chmod(0o755)

    print(f"\n✅ Generated extraction script: {script_path}")
    print(f"   Run: bash {script_path}")


def generate_upload_commands(episode_num: Optional[int] = None):
    """Generate YouTube upload commands using youtube-upload or similar"""
    clips_to_process = SHORTS_CLIPS if episode_num is None else {episode_num: SHORTS_CLIPS.get(episode_num, [])}

    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    scripts_dir = OUTPUT_DIR / "scripts"
    scripts_dir.mkdir(exist_ok=True)

    commands = []

    for ep_num, clips in clips_to_process.items():
        for i, (_, _, title, desc) in enumerate(clips, 1):
            video_file = OUTPUT_DIR / f"ep{ep_num:02d}_short_{i:02d}.mp4"
            metadata_file = OUTPUT_DIR / "metadata" / f"ep{ep_num:02d}_short_{i:02d}_metadata.json"

            utm_link = f"{COURSE_URL}?utm_source=youtube&utm_medium=shorts&utm_campaign=ep{ep_num}"
            yt_title = f"{title} | BFI Ep {ep_num} #Bitcoin #Shorts"

            # Using youtube-upload CLI (pip install youtube-upload)
            cmd = f"""
# Episode {ep_num}, Short {i}
youtube-upload \\
    --title="{yt_title}" \\
    --description="$(cat {metadata_file} | jq -r '.description')" \\
    --category="Education" \\
    --tags="Bitcoin,BitcoinForInstitutions,InstitutionalBitcoin,Shorts" \\
    --privacy="public" \\
    "{video_file}"
"""
            commands.append(cmd)

    # Write upload script
    script_path = scripts_dir / "upload_shorts.sh"
    with open(script_path, 'w') as f:
        f.write("#!/bin/bash\n")
        f.write("# YouTube Shorts Upload Script\n")
        f.write("# Generated by shorts_generator.py\n")
        f.write("# Requires: pip install youtube-upload\n\n")
        f.write("set -e\n\n")
        for cmd in commands:
            f.write(cmd)
            f.write("\n")

    script_path.chmod(0o755)

    print(f"✅ Generated upload script: {script_path}")


def main():
    parser = argparse.ArgumentParser(description='Generate YouTube Shorts from BFI episodes')
    parser.add_argument('--episode', '-e', type=int, help='Process only this episode number')
    parser.add_argument('--metadata-only', action='store_true', help='Only generate metadata')
    args = parser.parse_args()

    print("=" * 60)
    print("YouTube Shorts Generator for Bitcoin for Institutions")
    print("=" * 60)

    # Generate metadata for all clips
    print("\n📋 Generating metadata...")
    generate_shorts_metadata(args.episode)

    if not args.metadata_only:
        # Generate FFmpeg extraction commands
        print("\n🎬 Generating extraction script...")
        generate_ffmpeg_commands(args.episode)

        # Generate upload commands
        print("\n📤 Generating upload script...")
        generate_upload_commands(args.episode)

    total_clips = sum(len(clips) for clips in SHORTS_CLIPS.values())
    if args.episode:
        total_clips = len(SHORTS_CLIPS.get(args.episode, []))

    print(f"\n" + "=" * 60)
    print(f"✅ Generated assets for {total_clips} shorts")
    print(f"\nOutput directory: {OUTPUT_DIR}")
    print(f"\nNext steps:")
    print(f"1. Ensure source videos exist (or create from audio + slides)")
    print(f"2. Run: bash {OUTPUT_DIR}/scripts/extract_shorts.sh")
    print(f"3. Review extracted clips")
    print(f"4. Run: bash {OUTPUT_DIR}/scripts/upload_shorts.sh")


if __name__ == "__main__":
    main()
