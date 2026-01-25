"""
Shared Configuration for BFI (Bitcoin for Institutions) YouTube Series

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
VOICE_ID = "TxGEqnHWrfWFTfGW9XjX"  # Josh - Corporate presenter, news anchor quality

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
    1: {"title": "Introduction", "part": 1, "part_name": "Bitcoin is for Individuals"},
    2: {"title": "HODL'ing Bitcoin is Irrational", "part": 1, "part_name": "Bitcoin is for Individuals"},
    3: {"title": "Bitcoin Requires a Deflationary Mindset", "part": 1, "part_name": "Bitcoin is for Individuals"},
    4: {"title": "Bitcoin Custody Requires Higher Understanding", "part": 1, "part_name": "Bitcoin is for Individuals"},
    5: {"title": "Bitcoin Requires More Patience and Time", "part": 1, "part_name": "Bitcoin is for Individuals"},
    6: {"title": "Bitcoin is a Bearer Asset", "part": 1, "part_name": "Bitcoin is for Individuals"},
    7: {"title": "Bitcoin Users Value Privacy", "part": 1, "part_name": "Bitcoin is for Individuals"},
    8: {"title": "Strategy (Balance Sheet Strength)", "part": 2, "part_name": "Individuals Run Institutions"},
    9: {"title": "BlackRock (Redefining Portfolio Construction)", "part": 2, "part_name": "Individuals Run Institutions"},
    10: {"title": "Deferred Compensation", "part": 3, "part_name": "Institutional Bitcoin"},
    11: {"title": "Mutual Funds / ETFs", "part": 3, "part_name": "Institutional Bitcoin"},
    12: {"title": "Treasury / Balance Sheet", "part": 3, "part_name": "Institutional Bitcoin"},
    13: {"title": "Structured Credit", "part": 3, "part_name": "Institutional Bitcoin"},
    14: {"title": "Pensions", "part": 3, "part_name": "Institutional Bitcoin"},
    15: {"title": "Epilogue (Metrics and Frameworks)", "part": 3, "part_name": "Institutional Bitcoin"},
}

# Colors by part (RGB) for video generation
PART_COLORS = {
    1: (30, 40, 70),      # Deep indigo for Part 1: Bitcoin is for Individuals
    2: (45, 35, 60),      # Purple-indigo for Part 2: Individuals Run Institutions
    3: (25, 50, 65),      # Teal-blue for Part 3: Institutional Bitcoin
}

# Section count by episode (for render_slides.py)
EPISODE_SECTIONS = {
    1: 8, 2: 7, 3: 7, 4: 7, 5: 7,
    6: 7, 7: 7, 8: 7, 9: 7, 10: 7,
    11: 7, 12: 7, 13: 7, 14: 7, 15: 8,
}

# Part definitions for build.py
PARTS = {
    1: range(1, 8),    # Episodes 1-7: Bitcoin is for Individuals
    2: range(8, 10),   # Episodes 8-9: Individuals Run Institutions
    3: range(10, 16),  # Episodes 10-15: Institutional Bitcoin
}

# Total number of episodes
TOTAL_EPISODES = 15
