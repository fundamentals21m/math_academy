# Men of Mathematics YouTube Project - Handoff

## Current State (2026-01-26)

### Completed
- 34 episode scripts written (`episode_XX_production/episode_XX_script.md`)
- 34 ElevenLabs audio generators created (`elevenlabs_generator_epXX.py`)
- 581 HTML slides created and rendered to PNG (`video_pipeline/slides/`, `assets/images/`)
- Video generator updated with hardware encoding support

### In Progress
- Episode 1 video generating with CPU encoding (FFmpeg 8.0 broke VideoToolbox GPU)
- Task ID: `bfc05b5` - check `/private/tmp/claude/-Users-brianhirschfield-Claude/tasks/bfc05b5.output`

### Issue: FFmpeg 8.0 + VideoToolbox
FFmpeg 8.0 broke `h264_videotoolbox` compatibility with `zoompan` filter.
- Error: "Invalid argument" when using GPU encoder
- Workaround: Use `--no-hardware` flag for CPU encoding (slower)
- Permanent fix: Downgrade FFmpeg or wait for fix

### Key Commands

```bash
# Generate video (CPU - works but slow)
cd /Users/brianhirschfield/Claude/men-of-mathematics_youtube/video_pipeline
python video_generator.py --episode 1 --no-hardware

# Generate video (GPU - broken on FFmpeg 8.0)
python video_generator.py --episode 1

# Render slides to PNG
python render_slides.py --all

# Check video status
./check_status.sh
```

### Video Generator Specs (from youtube-series skill)
- Encoder: `h264_videotoolbox` (or `libx264` with `--no-hardware`)
- Quality: `-q:v 65` (GPU) or `-crf 23` (CPU)
- Ken Burns: Always enabled, 8% zoom
- Upscale: 4000px (balanced)
- Output: 1920x1080 @ 30fps

### Reference Implementation
`/Users/brianhirschfield/Claude/math_academy/bfi_youtube/video_pipeline/fast_video_generator.py`

### Files Structure
```
men-of-mathematics_youtube/
├── config.py                 # Episode metadata, colors
├── episode_XX_production/    # Scripts and audio generators
│   ├── episode_XX_script.md
│   ├── elevenlabs_generator_epXX.py
│   └── episode_XX_audio/     # Generated MP3s (need API key)
├── video_pipeline/
│   ├── video_generator.py    # Main video generator
│   ├── render_slides.py      # HTML to PNG renderer
│   ├── check_status.sh       # Status checker
│   └── slides/               # 581 HTML slides
│       └── styles/main.css
├── assets/images/            # Rendered PNGs by episode
└── output/                   # Final videos
```

### Next Steps
1. Fix FFmpeg/VideoToolbox or continue with CPU encoding
2. Generate all 34 episode videos
3. Generate audio with ElevenLabs API key
4. Upload to YouTube
