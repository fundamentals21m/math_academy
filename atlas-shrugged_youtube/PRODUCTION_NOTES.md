# Atlas Shrugged YouTube Series - Production Notes

## Audio Generation Guidelines

### Pronunciation Guide (Critical)

When generating TTS audio, use phonetic spellings to ensure correct pronunciation:

| Character | WRONG | CORRECT | Phonetic for TTS |
|-----------|-------|---------|------------------|
| Rearden | Re-YAR-den | REER-den | "Reerden" or "Rear-den" |
| Taggart | - | TAG-art | "Taggart" |
| Dagny | - | DAG-nee | "Dagny" |
| d'Anconia | - | dan-CONE-ya | "dan-Cone-ya" |
| Galt | - | GAWLT | "Gawlt" |

**TIP**: Before generating audio, find-replace character names with phonetic versions, then revert after generation.

### Audio Quality Checklist

- [ ] Verify all character names are pronounced correctly
- [ ] Check for unnatural pauses or elongated words
- [ ] Ensure consistent pacing throughout sections
- [ ] Listen for TTS artifacts (robotic sounds, glitches)

---

## Video Generation Guidelines

### FFmpeg Settings (Tested & Working)

The video generator at `video_pipeline/fast_video_generator.py` has been tuned to avoid audio issues:

**DO NOT USE:**
- `-af aresample=async=1` - This stretches audio unpredictably, causing words to elongate

**RECOMMENDED Settings:**
```python
cmd = [
    'ffmpeg', '-y',
    '-loop', '1',
    '-i', image_path,
    '-i', audio_path,
    '-vf', video_filter,
    '-t', str(duration),      # Explicit duration from audio
    '-c:v', 'libx264',
    '-preset', 'fast',
    '-crf', '23',
    '-c:a', 'aac',
    '-b:a', '192k',
    '-ar', '44100',           # Consistent sample rate
    '-ac', '2',               # Stereo output
    '-movflags', '+faststart',
    output_path
]
```

### Ken Burns Effect

- Alternates between zoom-in, zoom-out, and pan
- Uses 8000px upscale for smooth motion
- Add +1 frame buffer to prevent audio cutoff

---

## Slide Generation

### Visual Style

- Background: `#0a0908` (dark)
- Gold accent: `#d4a84b`
- Teal accent (Rearden Metal): `#5ea9a8`
- Typography: Georgia, serif
- Title color: `#f5f0e6` (cream)
- Body text: `#a09080` (muted)

### Rendering

Use `video_pipeline/render_slides.py` with Selenium/Chrome headless to render HTML slides to 1920x1080 PNG.

---

## Issue Log

| Date | Episode | Issue | Resolution |
|------|---------|-------|------------|
| 2025-01-17 | 1, 2 | Audio breaks/gaps in video | Removed `-shortest`, added explicit `-t duration` |
| 2025-01-17 | 1 | "punishes achievement" stretched | Removed `aresample=async=1` filter |
| 2025-01-17 | 2 | "Rearden" mispronounced as "Re-yar-den" | Note for future: use phonetic spelling in TTS input |

---

## Pre-Flight Checklist (Before Publishing)

1. [ ] Watch full video, listen for pronunciation errors
2. [ ] Check audio sync - no stretching or gaps
3. [ ] Verify Ken Burns motion is smooth
4. [ ] Confirm all slides render correctly (no placeholders)
5. [ ] Check video duration matches expected runtime
