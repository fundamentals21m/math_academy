#!/usr/bin/env python3
"""
SSML Helper Utilities for Atlas Shrugged Audio Generation

Provides utilities to enhance narration with:
- Dramatic pauses
- Emphasis on key phrases
- Pacing variations for different content types
- Quote styling

ElevenLabs supports a subset of SSML:
- <break time="Xs"/> or <break time="Xms"/>
- <prosody rate="slow|medium|fast">
- <emphasis level="strong|moderate|reduced">
"""


def add_pause(seconds=1):
    """Add a pause of specified duration."""
    if seconds < 1:
        return f'<break time="{int(seconds * 1000)}ms"/>'
    return f'<break time="{seconds}s"/>'


def emphasize(text, level="strong"):
    """Add emphasis to text. Levels: strong, moderate, reduced."""
    return f'<emphasis level="{level}">{text}</emphasis>'


def slow_pace(text):
    """Slow down pacing for dramatic effect."""
    return f'<prosody rate="slow">{text}</prosody>'


def fast_pace(text):
    """Speed up pacing for lists or quick transitions."""
    return f'<prosody rate="fast">{text}</prosody>'


def dramatic_quote(text):
    """Format a quote with dramatic pacing and pauses."""
    return f'{add_pause(0.5)}<prosody rate="slow"><emphasis level="strong">"{text}"</emphasis></prosody>{add_pause(1)}'


def format_cold_open(text):
    """
    Format cold open text with dramatic pacing.
    Adds pauses after sentences and slows key phrases.
    """
    # Add pauses after sentences
    text = text.replace('. ', f'.{add_pause(0.5)} ')
    text = text.replace('? ', f'?{add_pause(0.7)} ')
    text = text.replace('— ', f'—{add_pause(0.3)} ')

    return f'<speak>{text}</speak>'


def format_quote_block(quote, attribution=None):
    """Format a standalone quote with proper pacing."""
    result = f'{add_pause(0.5)}<prosody rate="slow">"{quote}"</prosody>{add_pause(0.8)}'
    if attribution:
        result += f' — {attribution}'
    return result


def format_section_transition(text):
    """Add transition pause before new section."""
    return f'{add_pause(1.5)}{text}'


def format_key_insight(text):
    """Emphasize a key insight or important point."""
    return f'{add_pause(0.5)}<emphasis level="strong">{text}</emphasis>{add_pause(0.5)}'


def format_list_intro(intro, items):
    """Format a list with proper pacing."""
    result = f'{intro}{add_pause(0.5)}'
    for item in items:
        result += f'{add_pause(0.3)}{item}. '
    return result


def wrap_ssml(text):
    """Wrap text in SSML speak tags if not already wrapped."""
    if not text.strip().startswith('<speak>'):
        return f'<speak>{text}</speak>'
    return text


# Voice setting presets for different content types
VOICE_SETTINGS = {
    "cold_open": {
        "stability": 0.50,
        "similarity_boost": 0.80,
        "style": 0.50,  # More dramatic
        "use_speaker_boost": True
    },
    "introduction": {
        "stability": 0.65,
        "similarity_boost": 0.80,
        "style": 0.35,
        "use_speaker_boost": True
    },
    "main_content": {
        "stability": 0.70,
        "similarity_boost": 0.80,
        "style": 0.30,  # Clear, educational
        "use_speaker_boost": True
    },
    "quotes": {
        "stability": 0.55,
        "similarity_boost": 0.85,
        "style": 0.45,  # Character-like
        "use_speaker_boost": True
    },
    "closing": {
        "stability": 0.65,
        "similarity_boost": 0.80,
        "style": 0.35,  # Warm
        "use_speaker_boost": True
    },
    "recap": {
        "stability": 0.60,
        "similarity_boost": 0.80,
        "style": 0.40,
        "use_speaker_boost": True
    }
}


def get_voice_settings(section_type):
    """Get voice settings for a specific section type."""
    return VOICE_SETTINGS.get(section_type, VOICE_SETTINGS["main_content"])


# Example usage and transformations
EXAMPLE_TRANSFORMATIONS = {
    "original": '''Who is John Galt?

A question asked in despair. A phrase muttered when there's no answer.''',

    "enhanced": '''<speak>
<prosody rate="slow"><emphasis level="strong">"Who is John Galt?"</emphasis></prosody>
<break time="1s"/>
A question asked in despair.<break time="500ms"/>
A phrase muttered when there's no answer.
</speak>'''
}


if __name__ == "__main__":
    # Demo the helpers
    print("SSML Helper Examples:")
    print("=" * 50)
    print()
    print("Dramatic quote:")
    print(dramatic_quote("Who is John Galt?"))
    print()
    print("Key insight:")
    print(format_key_insight("The victim's sanction enables the looter's power."))
    print()
    print("Cold open formatting:")
    sample = "Who is John Galt? A question asked in despair."
    print(format_cold_open(sample))
