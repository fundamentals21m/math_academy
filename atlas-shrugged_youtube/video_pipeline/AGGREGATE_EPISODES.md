# Aggregate Episodes - Atlas Shrugged Complete Series

Combines all 30 episodes of the Atlas Shrugged YouTube series into a single video with professional title cards and YouTube chapter timestamps.

## Overview

The `aggregate_episodes.py` script creates a complete series video by:

1. Generating part title cards (3 total) before Episodes 1, 11, and 21
2. Generating episode title cards (30 total) before each episode
3. Concatenating all 63 video segments into a single MP4
4. Generating YouTube-ready chapter timestamps

## Output Files

| File | Location | Description |
|------|----------|-------------|
| Complete Series | `output/Atlas_Shrugged_Complete_Series.mp4` | Full 2h 24m video |
| Chapter Timestamps | `output/complete_series/complete_series_chapters.txt` | YouTube chapters |
| Concat List | `output/complete_series/concat_list.txt` | FFmpeg input file |

## Usage

### Full Generation
Renders all title cards from scratch and creates the complete video:
```bash
python video_pipeline/aggregate_episodes.py
```

### Skip Rendering (Faster)
Uses existing title card PNGs and videos:
```bash
python video_pipeline/aggregate_episodes.py --skip-render --skip-title-videos
```

### Chapters Only
Generate only the chapter timestamps without processing video:
```bash
python video_pipeline/aggregate_episodes.py --chapters-only
```

### Custom Output Filename
```bash
python video_pipeline/aggregate_episodes.py -o "My_Custom_Name.mp4"
```

## Title Card Design

### Part Title Cards (5 seconds each)

```
┌────────────────────────────────────┐
│                                    │
│         ATLAS SHRUGGED             │
│           PART ONE                 │
│       NON-CONTRADICTION            │
│                                    │
│        Episodes 1-10               │
│                                    │
└────────────────────────────────────┘
```

- Part 1: Gold accent (#d4a84b)
- Part 2: Crimson accent (#8b4545)
- Part 3: Steel blue accent (#4a6fa5)

### Episode Title Cards (3 seconds each)

```
┌────────────────────────────────────┐
│                                    │
│          EPISODE 1                 │
│          The Theme                 │
│                                    │
│   Part 1 • Non-Contradiction       │
│                                    │
└────────────────────────────────────┘
```

## Generated Assets

The script generates intermediate assets in `assets/generated/title_cards/`:

```
title_cards/
├── html/           # HTML source files (33)
├── png/            # Rendered screenshots (33)
└── video/          # Ken Burns effect videos (33)
```

## Video Specifications

| Attribute | Value |
|-----------|-------|
| Resolution | 1920x1080 (1080p) |
| Frame Rate | 30 fps |
| Video Codec | H.264 (libx264) |
| Audio Codec | AAC 192kbps |
| Container | MP4 |

## YouTube Chapters

The generated `complete_series_chapters.txt` file is formatted for direct copy-paste into YouTube video descriptions:

```
ATLAS SHRUGGED - COMPLETE SERIES

PART 1: NON-CONTRADICTION
0:08 Episode 1: The Theme
8:52 Episode 2: The Chain
15:18 Episode 3: The Top and the Bottom
...

PART 2: EITHER-OR
59:55 Episode 11: The Aristocracy of Pull
...

PART 3: A IS A
1:40:02 Episode 21: Atlantis
...
2:18:34 Episode 30: In the Name of the Best Within Us
```

## Requirements

- Python 3.8+
- FFmpeg (with libx264 support)
- Selenium + Chrome WebDriver (for PNG rendering)
- All 30 episode videos in `output/episode_XX_video/`

## Processing Time

Approximate times on a modern Mac:

| Step | Duration |
|------|----------|
| PNG Rendering | ~1 minute |
| Title Card Videos | ~20 minutes |
| Final Concatenation | ~2-3 hours |
| **Total** | **~3 hours** |

Using `--skip-render --skip-title-videos` reduces this to ~2-3 hours (concatenation only).

## Troubleshooting

### Apostrophes in Filenames
The script automatically escapes single quotes in file paths (e.g., "d'Anconias") for FFmpeg compatibility.

### Missing Episodes
The script will warn and abort if any of the 30 episode videos are missing. Ensure all episodes exist in `output/episode_XX_video/`.

### Memory Issues
If FFmpeg runs out of memory during concatenation, try closing other applications or encoding in segments.

## File Structure

```
video_pipeline/
├── aggregate_episodes.py       # Main script
├── slides/
│   └── title_cards/
│       ├── part_title.html     # Part card template
│       └── episode_title.html  # Episode card template
└── AGGREGATE_EPISODES.md       # This documentation

output/
├── Atlas_Shrugged_Complete_Series.mp4
└── complete_series/
    ├── concat_list.txt
    └── complete_series_chapters.txt
```
