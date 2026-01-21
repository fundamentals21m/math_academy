# YouTube Playlist Pipeline - Best Practices Guide

## Overview

This document defines the end-to-end process for creating YouTube video playlists from course content. Following this process prevents wasted time, quota, and ensures quality.

---

## Quick Start - Pipeline Tool

The `pipeline.py` tool enforces checkpoints and prevents bulk operations without verification.

```bash
cd video_pipeline

# Check current state
python3 pipeline.py status

# Standard workflow:
python3 pipeline.py checkpoint -m "Before changes"   # Git commit
python3 pipeline.py render --episode 1               # Render one
python3 pipeline.py verify --render                  # Verify it
python3 pipeline.py render --all                     # Render all

python3 pipeline.py video --episode 1                # Generate one
python3 pipeline.py verify --video                   # Verify it
python3 pipeline.py video --all                      # Generate all

python3 pipeline.py upload --episode 1               # Upload one
python3 pipeline.py verify --upload                  # Verify it
python3 pipeline.py upload --all                     # Upload all
```

**The tool will block bulk operations until you verify the single episode first.**

---

## Golden Rules

1. **Never run bulk operations without verifying a single sample first**
2. **Always have a rollback plan before making changes**
3. **Git commit before any modifications**
4. **Verify at every checkpoint before proceeding**

---

## Directory Structure

```
project/
├── assets/
│   └── generated/           # Rendered slide PNGs (gitignored)
│       └── episode_XX/
├── episode_XX_production/
│   └── episode_XX_audio/    # Audio files per episode
├── output/                  # Generated videos (gitignored)
│   └── episode_XX_video/
├── video_pipeline/
│   ├── slides/              # Source HTML slides (git tracked)
│   │   └── styles/
│   ├── render_slides.py
│   ├── fast_video_generator.py
│   └── youtube_uploader.py
├── config.py
└── YOUTUBE_PIPELINE_GUIDE.md
```

---

## Pre-Flight Checklist

Before starting any pipeline work:

```bash
# 1. Ensure git is clean
git status

# 2. Commit current state
git add -A && git commit -m "Checkpoint before pipeline changes"

# 3. Verify source files exist
ls video_pipeline/slides/ep01_section_*.html
ls episode_01_production/episode_01_audio/*.mp3

# 4. Check YouTube quota (resets midnight PT)
python3 video_pipeline/youtube_uploader.py --status
```

---

## Pipeline Stages

### Stage 1: Slide Creation/Modification

**Input:** Course content, scripts
**Output:** HTML slides in `video_pipeline/slides/`

#### Process:
1. Create/edit HTML slides
2. **CHECKPOINT:** Open 1 slide in browser, verify it looks correct
3. Git commit: `git add video_pipeline/slides/ && git commit -m "Update slides for episode X"`

#### Verification:
```bash
# Open slide in browser to visually inspect
open video_pipeline/slides/ep01_section_01.html
```

---

### Stage 2: Slide Rendering

**Input:** HTML slides
**Output:** PNG images in `assets/generated/`

#### Process:
1. Render ONE episode first
2. **CHECKPOINT:** Verify PNG dimensions and visual quality
3. Only then render remaining episodes

#### Commands:
```bash
# Step 1: Render single episode
python3 video_pipeline/render_slides.py --episode 1

# Step 2: VERIFY dimensions (must be 1920x1080)
sips -g pixelWidth -g pixelHeight assets/generated/episode_01/section_01.png

# Step 3: VERIFY visual quality
open assets/generated/episode_01/section_01.png

# Step 4: Only after verification, render all
python3 video_pipeline/render_slides.py --all
```

#### Failure Recovery:
```bash
# If renders are wrong, fix the issue, then re-render
# No git recovery needed - PNGs are regenerated from HTML source
```

---

### Stage 3: Video Generation

**Input:** Rendered PNGs + Audio files
**Output:** MP4 videos in `output/`

#### Process:
1. Generate ONE video first
2. **CHECKPOINT:** Watch the video, verify quality
3. Only then generate remaining videos

#### Commands:
```bash
# Step 1: Generate single episode
python3 video_pipeline/fast_video_generator.py --episode 1

# Step 2: VERIFY by watching
open output/episode_01_video/Episode_01_*.mp4

# Step 3: Check file size is reasonable
ls -lh output/episode_01_video/

# Step 4: Only after verification, generate all (runs in background)
for ep in $(seq 1 30); do
  python3 video_pipeline/fast_video_generator.py --episode $ep
done
```

#### Failure Recovery:
```bash
# Videos can be regenerated from slides + audio
# No permanent data loss possible at this stage
```

---

### Stage 4: YouTube Upload

**Input:** MP4 videos
**Output:** Videos on YouTube playlist

#### CRITICAL: This stage consumes YouTube API quota (10,000 units/day)
- Each video upload: ~1,600 units
- With thumbnails/captions: ~2,100 units
- **Maximum ~5-6 full uploads per day**

#### Process:
1. **VERIFY quota availability first**
2. Upload ONE video first
3. **CHECKPOINT:** Check video on YouTube - quality, metadata, thumbnail
4. Only then upload remaining videos

#### Commands:
```bash
# Step 1: Check quota status
python3 video_pipeline/youtube_uploader.py --status

# Step 2: Upload single episode
python3 video_pipeline/youtube_uploader.py --episode 1

# Step 3: VERIFY on YouTube
# - Watch the video
# - Check thumbnail
# - Check description
# - Check it's in playlist

# Step 4: Only after verification, upload more
python3 video_pipeline/youtube_uploader.py --range 2 6  # ~5 per day max
```

#### Failure Recovery:
- Videos can be deleted from YouTube Studio
- Quota CANNOT be recovered - must wait for daily reset (midnight PT)
- Plan uploads across multiple days if needed

---

## Modification Workflow

When making changes to existing slides:

### Small Changes (1-2 slides)
```bash
# 1. Git checkpoint
git add -A && git commit -m "Before slide modifications"

# 2. Make changes to HTML

# 3. Preview in browser
open video_pipeline/slides/epXX_section_YY.html

# 4. Render just that episode
python3 video_pipeline/render_slides.py --episode XX

# 5. Verify PNG
open assets/generated/episode_XX/section_YY.png

# 6. Generate video
python3 video_pipeline/fast_video_generator.py --episode XX

# 7. Watch video locally
open output/episode_XX_video/*.mp4

# 8. Only if all good, commit and upload
git add -A && git commit -m "Updated episode XX slides"
python3 video_pipeline/youtube_uploader.py --episode XX --force
```

### Bulk Changes (CSS, colors, fonts)
```bash
# 1. Git checkpoint
git add -A && git commit -m "Before bulk modifications"

# 2. Make changes

# 3. Render ONE episode
python3 video_pipeline/render_slides.py --episode 1

# 4. VERIFY thoroughly
open assets/generated/episode_01/section_01.png
# Check: dimensions, colors, fonts, layout

# 5. Generate ONE video
python3 video_pipeline/fast_video_generator.py --episode 1

# 6. WATCH the full video
open output/episode_01_video/*.mp4

# 7. GET APPROVAL before proceeding

# 8. Only after approval, run bulk operations
python3 video_pipeline/render_slides.py --all
# ... etc
```

---

## Rollback Procedures

### Revert slide changes:
```bash
git checkout -- video_pipeline/slides/
```

### Revert specific file:
```bash
git checkout -- video_pipeline/slides/ep01_section_01.html
```

### Revert to specific commit:
```bash
git log --oneline  # Find commit hash
git checkout <hash> -- video_pipeline/slides/
```

### Regenerate everything from clean state:
```bash
git checkout -- video_pipeline/slides/
python3 video_pipeline/render_slides.py --all
# Then regenerate videos as needed
```

---

## Audit Checklist

Before any major changes, verify current state:

```bash
# 1. Slide count
ls video_pipeline/slides/ep*_section_*.html | wc -l

# 2. Sample slide dimensions (should be defined in HTML/CSS as 1920x1080)
grep -E "width|height" video_pipeline/slides/styles/main.css | head -10

# 3. Rendered PNG dimensions
sips -g pixelWidth -g pixelHeight assets/generated/episode_01/section_01.png

# 4. Video dimensions
ffprobe -v error -select_streams v:0 -show_entries stream=width,height -of csv=p=0 output/episode_01_video/*.mp4

# 5. Git status
git status
git log --oneline -5
```

---

## YouTube Quota Management

| Operation | Quota Cost |
|-----------|------------|
| Video upload | 1,600 |
| Thumbnail set | 50 |
| Playlist insert | 50 |
| Caption upload | 400 |
| **Full upload** | **~2,100** |

**Daily limit:** 10,000 units
**Practical limit:** ~5 full video uploads per day

### Multi-day upload plan for 30 episodes:
- Day 1: Episodes 1-5
- Day 2: Episodes 6-10
- Day 3: Episodes 11-15
- Day 4: Episodes 16-20
- Day 5: Episodes 21-25
- Day 6: Episodes 26-30

---

## Common Mistakes to Avoid

1. **Running bulk renders without verifying one first**
2. **Uploading to YouTube before watching the video locally**
3. **Making CSS changes without checking sample output**
4. **Not committing to git before modifications**
5. **Assuming quota will be available**
6. **Ignoring dimension mismatches (941px vs 1080px)**

---

## Emergency Contacts

- YouTube API Quota Reset: Midnight Pacific Time
- YouTube Studio: https://studio.youtube.com
- Delete uploaded videos: YouTube Studio > Content > Select > Delete
