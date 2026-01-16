# Atlas Shrugged Thumbnail Design Specifications

## Dimensions
- **Size:** 1280 x 720 pixels (YouTube recommended)
- **Aspect Ratio:** 16:9
- **Format:** PNG (high quality)

---

## Color Scheme by Part

### Part One: Non-Contradiction (Episodes 1-10)
| Element | Color | Hex |
|---------|-------|-----|
| Background | Deep Navy | #1a1a2e |
| Accent | Gold | #d4af37 |
| Title Text | White | #ffffff |
| Subtitle | Gold | #d4af37 |
| Episode Badge BG | Gold | #d4af37 |
| Episode Badge Text | Navy | #1a1a2e |

### Part Two: Either-Or (Episodes 11-20)
| Element | Color | Hex |
|---------|-------|-----|
| Background | Deep Navy | #1a1a2e |
| Accent | Crimson | #c41e3a |
| Title Text | White | #ffffff |
| Subtitle | Crimson | #c41e3a |
| Episode Badge BG | Crimson | #c41e3a |
| Episode Badge Text | White | #ffffff |

### Part Three: A Is A (Episodes 21-30)
| Element | Color | Hex |
|---------|-------|-----|
| Background | Deep Navy | #1a1a2e |
| Accent | Steel Blue | #4682b4 |
| Title Text | White | #ffffff |
| Subtitle | Steel Blue | #4682b4 |
| Episode Badge BG | Steel Blue | #4682b4 |
| Episode Badge Text | White | #ffffff |

---

## Layout Elements

```
┌─────────────────────────────────────────────────────────────┐
│ [ACCENT BAR - 8px]                                          │
├─────────────────────────────────────────────────────────────┤
│ ┌──────────────┐                    PART X: NAME           │
│ │ EPISODE XX   │                                           │
│ └──────────────┘                                           │
│                                                             │
│ ATLAS SHRUGGED                                              │
│                                                             │
│ EPISODE TITLE                                    $          │
│ Subtitle text                                    (large,    │
│ ────────────                                     faded)     │
│                                                             │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│ [ACCENT BAR - 8px]                                          │
└─────────────────────────────────────────────────────────────┘
```

### Position Guide
| Element | Position | Size |
|---------|----------|------|
| Top accent bar | (0, 0) → (1280, 8) | 8px height |
| Left stripe | (0, 0) → (12, 720) | 12px width |
| Episode badge | (50, 50) | 180 x 70px |
| Part indicator | Right-aligned, 60px from top | ~28pt font |
| Series title | (50, 160) | ~32pt font |
| Episode title | (50, 280) | ~72pt font, bold |
| Subtitle | Below title | ~42pt font |
| Decorative $ | Right side, centered vertically | ~350pt, 40% opacity |
| Bottom accent | (0, 712) → (1280, 720) | 8px height |

---

## Typography

### Font Hierarchy
| Element | Size | Weight | Color |
|---------|------|--------|-------|
| Episode Badge | 36pt | Bold | Part-specific |
| Part Indicator | 28pt | Regular | Accent color |
| Series Title | 32pt | Regular | White |
| Episode Title | 72pt | Bold | White |
| Subtitle | 42pt | Regular | Accent color |

### Font Recommendations
- **Primary:** Helvetica, Arial, or system sans-serif
- **Fallback:** DejaVu Sans, Liberation Sans

---

## Episode Data

### Part One: Non-Contradiction
| Ep | Title | Subtitle |
|----|-------|----------|
| 1 | The Theme | "Who Is John Galt?" |
| 2 | The Chain | Rearden Metal |
| 3 | The Top and the Bottom | The Looters Conspire |
| 4 | The Immovable Movers | Francisco's Secret |
| 5 | The Climax of the d'Anconias | The Money Speech |
| 6 | The Non-Commercial | Science Against Achievement |
| 7 | The Exploiters and the Exploited | Wesley Mouch's Betrayal |
| 8 | The John Galt Line | Triumph of Achievement |
| 9 | The Sacred and the Profane | Mind and Body |
| 10 | Wyatt's Torch | Part One Finale |

### Part Two: Either-Or
| Ep | Title | Subtitle |
|----|-------|----------|
| 11 | The Man Who Belonged on Earth | Part Two Begins |
| 12 | The Aristocracy of Pull | Connections Over Merit |
| 13 | White Blackmail | Guilt as a Weapon |
| 14 | The Sanction of the Victim | Evil Needs Permission |
| 15 | Account Overdrawn | When the Bill Comes Due |
| 16 | Miracle Metal | Government Seizure |
| 17 | The Moratorium on Brains | Outlawing Innovation |
| 18 | By Our Love | What Romance Reveals |
| 19 | The Face Without Pain or Fear or Guilt | A Life Resolved |
| 20 | The Sign of the Dollar | Part Two Finale |

### Part Three: A Is A
| Ep | Title | Subtitle |
|----|-------|----------|
| 21 | Atlantis | The Hidden Valley |
| 22 | The Utopia of Greed | Self-Interest Succeeds |
| 23 | Anti-Greed | Envy vs. Creation |
| 24 | Anti-Life | Death as Virtue |
| 25 | Their Brothers' Keepers | Brotherhood as Slavery |
| 26 | The Concerto of Deliverance | Art and Liberation |
| 27 | This Is John Galt Speaking | The Speech |
| 28 | The Egoist | Selfishness as Virtue |
| 29 | The Generator | The Motor and the Mind |
| 30 | In the Name of the Best Within Us | Series Finale |

---

## Generation Command

```bash
# Install dependencies
pip install Pillow

# Generate all thumbnails
python generate_thumbnails.py

# Generate specific episode
python generate_thumbnails.py --episode 5

# Generate specific part
python generate_thumbnails.py --part 2

# Generate series thumbnail only
python generate_thumbnails.py --series

# Custom output directory
python generate_thumbnails.py --output /path/to/output
```

---

## Design Rationale

### Color Psychology
- **Gold (Part One):** Achievement, value, the "golden" age before collapse
- **Crimson (Part Two):** Conflict, choice, the blood of sacrifice demanded
- **Steel Blue (Part Three):** Truth, clarity, Rearden Metal, industrial strength

### Dollar Sign Motif
The faded $ symbol in the background serves multiple purposes:
- Connects to the novel's "Sign of the Dollar" chapter
- Represents free trade and capitalism
- Provides visual interest without distraction
- Maintains brand consistency across all thumbnails

### Consistency vs. Variety
All thumbnails share:
- Same background color
- Same layout structure
- Same typography
- Same decorative elements

Thumbnails vary by:
- Accent color (by part)
- Episode number
- Title/subtitle text

This creates recognizable branding while allowing each thumbnail to stand alone.
