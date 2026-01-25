# Atlas Shrugged YouTube Series - Video Production Pipeline

A Python-based video production pipeline for creating a 30-episode educational YouTube series.

## Project Structure

```
atlas-shrugged_youtube/
├── config.py                  # Shared configuration (episodes, paths, settings)
├── audio_generator.py         # Shared ElevenLabs audio generation module
├── requirements.txt           # Python dependencies
├── video_pipeline/
│   ├── fast_video_generator.py   # FFmpeg-based video generation (recommended)
│   ├── video_generator.py        # MoviePy-based video generation (legacy)
│   ├── render_slides.py          # HTML slide to PNG renderer
│   └── slides/                   # HTML slide templates
│       └── styles/main.css       # Shared CSS styles
├── episode_XX_production/     # Per-episode production files
│   ├── elevenlabs_generator_epXX.py  # Episode script & audio generator
│   └── episode_XX_audio/             # Generated MP3 files
├── assets/
│   └── generated/             # Rendered slide images
│       └── episode_XX/
└── output/                    # Final video output
    └── episode_XX_video/
```

## Setup

### 1. Install Dependencies

```bash
pip install -r requirements.txt
```

### 2. Install FFmpeg

**macOS:**
```bash
brew install ffmpeg
```

**Ubuntu/Debian:**
```bash
sudo apt install ffmpeg
```

**Windows:**
Download from https://ffmpeg.org/download.html

### 3. Install Chrome (for slide rendering)

Chrome is required for headless HTML-to-PNG rendering.

### 4. Set API Key (for audio generation)

```bash
export ELEVENLABS_API_KEY='your-api-key-here'
```

## Usage

### Generate Audio for an Episode

```bash
cd episode_01_production
python elevenlabs_generator_ep01.py
```

Or use the shared module:

```python
from audio_generator import AudioGenerator

sections = {
    "01_intro": "Your script text here...",
    "02_main": "More script text...",
}

generator = AudioGenerator(episode_number=1, episode_title="The Theme")
generator.generate_all(sections)
```

### Render HTML Slides to PNG

```bash
cd video_pipeline

# Render specific episode
python render_slides.py --episode 1

# Render all defined episodes
python render_slides.py

# Render all 30 episodes (auto-detect)
python render_slides.py --all
```

### Generate Video

**Recommended: Fast Video Generator (FFmpeg)**
```bash
cd video_pipeline

# Generate with Ken Burns effect
python fast_video_generator.py --episode 1

# Without Ken Burns (faster)
python fast_video_generator.py --episode 1 --no-ken-burns

# Use placeholder images if slides not ready
python fast_video_generator.py --episode 1 --placeholders
```

**Legacy: MoviePy Video Generator**
```bash
python video_generator.py --episode 1
```

## Production Workflow

1. **Write Script**: Add episode content to `episode_XX_production/elevenlabs_generator_epXX.py`
2. **Generate Audio**: Run the episode's audio generator script
3. **Create Slides**: Add HTML slides in `video_pipeline/slides/epXX_section_YY.html`
4. **Render Slides**: Run `render_slides.py --episode XX`
5. **Generate Video**: Run `fast_video_generator.py --episode XX`

## Configuration

Edit `config.py` to modify:
- Episode metadata (titles, parts)
- Video dimensions (1920x1080 default)
- ElevenLabs voice settings
- Section counts per episode

## File Conventions

### Audio Files
```
Episode_01_Section_01_cold_open.mp3
Episode_01_Section_02_introduction.mp3
```

### Slide Files
```
ep01_section_01.html
ep01_section_02.html
```

### Output Files
```
Episode_01_The_Theme.mp4
```

## Episode Status

| Episodes | Audio | Slides | Video |
|----------|-------|--------|-------|
| 1-14     | Done  | Done   | Done  |
| 15-30    | TBD   | TBD    | TBD   |

## Troubleshooting

### FFmpeg not found
Ensure FFmpeg is installed and in your PATH:
```bash
ffmpeg -version
```

### Chrome driver issues
Update to latest Chrome and ensure `chromedriver` matches your Chrome version:
```bash
pip install --upgrade selenium
```

### Missing fonts
The pipeline auto-detects system fonts. On Linux, install:
```bash
sudo apt install fonts-dejavu
```
