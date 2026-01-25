"""
Shared Configuration for Atlas Shrugged YouTube Series

This module contains episode metadata and configuration shared across
the video pipeline, audio generators, and other scripts.
"""

from pathlib import Path

# =============================================================================
# PATHS
# =============================================================================

PROJECT_DIR = Path(__file__).parent
OUTPUT_DIR = PROJECT_DIR / "output"
ASSETS_DIR = PROJECT_DIR / "assets"
IMAGES_DIR = ASSETS_DIR / "generated"
VIDEO_PIPELINE_DIR = PROJECT_DIR / "video_pipeline"

# =============================================================================
# VIDEO SETTINGS
# =============================================================================

VIDEO_WIDTH = 1920
VIDEO_HEIGHT = 1080
FPS = 30

# =============================================================================
# ELEVENLABS CONFIGURATION
# =============================================================================

ELEVENLABS_API_URL = "https://api.elevenlabs.io/v1/text-to-speech"
VOICE_ID = "TxGEqnHWrfWFTfGW9XjX"  # Josh - Deep, authoritative

VOICE_SETTINGS = {
    "stability": 0.65,
    "similarity_boost": 0.80,
    "style": 0.35,
    "use_speaker_boost": True
}

# Request timeout in seconds
REQUEST_TIMEOUT = 60

# =============================================================================
# EPISODE METADATA
# =============================================================================

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

# Colors by part (RGB) for video generation
PART_COLORS = {
    1: (45, 45, 60),      # Dark blue-gray for Part 1: Non-Contradiction
    2: (60, 35, 35),      # Dark crimson for Part 2: Either-Or
    3: (35, 45, 55),      # Steel blue for Part 3: A Is A
}

# Section count by episode (for render_slides.py)
EPISODE_SECTIONS = {
    1: 8, 2: 7, 3: 7, 4: 7, 5: 8, 6: 6, 7: 6, 8: 6,
    9: 6, 10: 6, 11: 5, 12: 5, 13: 5, 14: 5, 15: 5,
    16: 5, 17: 5, 18: 5, 19: 5, 20: 5,
    21: 5, 22: 5, 23: 5, 24: 5, 25: 5, 26: 5,
    27: 6,
    28: 5,
    29: 5, 30: 6,
}
