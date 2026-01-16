#!/usr/bin/env python3
"""Episode 19 - The Face Without Pain or Fear or Guilt"""
import os, requests, time
from pathlib import Path

ELEVENLABS_API_URL = "https://api.elevenlabs.io/v1/text-to-speech"
VOICE_ID = "ErXwobaYiN019PkySvjV"
VOICE_SETTINGS = {"stability": 0.65, "similarity_boost": 0.80, "style": 0.35, "use_speaker_boost": True}
EPISODE_NUMBER = 19
EPISODE_TITLE = "The Face Without Pain or Fear or Guilt"

SECTIONS = {
    "01_cold_open": """Imagine a face that shows no pain—not because it hasn't suffered, but because suffering has been understood and overcome.

Imagine a face that shows no fear—not because dangers don't exist, but because they've been assessed and accepted.

Imagine a face that shows no guilt—not because mistakes haven't been made, but because the standard of judgment is reality, not the opinions of others.

This is the face of a man who has solved the problem of living. And Dagny is about to see it.""",

    "02_introduction": """Previously: We explored what love reveals about our values. Do we love people for their weaknesses or their strengths? Do we seek partners who need us or who inspire us?

The heroes of this story love strength. The villains seek weakness. By our love, we show who we are.

Welcome back to Atlas Shrugged. In our last episode, we explored love and what it reveals about our values.

Today we catch a glimpse of the answer to the novel's central mystery. The title "The Face Without Pain or Fear or Guilt" describes someone who has achieved what most people think impossible: a life without inner conflict, without self-doubt, without the chronic anxiety that plagues modern existence.

Who is this person? And how has he achieved what others cannot?""",

    "03_the_encounter": """Dagny's search for the vanishing producers leads her to an unexpected discovery.

She sees a face—briefly, tantalizingly—that embodies everything she's been seeking. A face that shows the serenity of someone who has resolved all contradictions, who lives without the war between mind and body, thought and feeling, self and world.

This is not the face of someone who has avoided life's challenges. It's the face of someone who has met them and won. Not by luck, but by understanding. Not by evasion, but by reason.

The glimpse is brief, but it changes everything. Dagny now knows that what she's seeking exists. The question is how to find it.""",

    "04_the_meaning": """What would it mean to live without pain, fear, or guilt?

Living without pain doesn't mean never experiencing difficulty. It means not adding suffering to difficulty—not tormenting yourself with "why me?" or "it's not fair." Pain comes from resistance to reality. Accept reality, and pain dissolves.

Living without fear doesn't mean ignoring danger. It means assessing threats rationally and responding appropriately—not magnifying them with imagination, not paralyzing yourself with worst-case thinking. Fear comes from uncertainty about your ability to cope. Know your abilities, and fear dissolves.

Living without guilt doesn't mean never making mistakes. It means judging yourself by rational standards—not by impossible ideals, not by others' arbitrary demands. Guilt comes from accepting standards you don't actually believe in. Hold only to rational standards, and guilt dissolves.

The face Dagny sees belongs to someone who has achieved all three.""",

    "05_closing": """The Face Without Pain or Fear or Guilt—it's a description of human potential fulfilled.

Most people assume that pain, fear, and guilt are inevitable. They're the price of consciousness, the burden of being human. To live is to suffer.

But Rand suggests otherwise. She suggests that suffering comes not from consciousness but from contradictions—from trying to live by incompatible premises, from accepting values that don't actually serve life, from surrendering judgment to others.

Resolve the contradictions, and the suffering ends. Not because you've escaped from reality, but because you've finally aligned with it.

This is what Dagny glimpses in that face: the possibility of a life lived without inner conflict. A life where thought and action are unified, where values are clear, where existence is not a burden but a joy.

The man behind that face has found the answer. And Part Two is drawing toward the moment when Dagny—and we—will learn what it is.

See you in the next episode."""
}

def generate_audio(text, section_name, api_key, output_dir):
    headers = {"Accept": "audio/mpeg", "Content-Type": "application/json", "xi-api-key": api_key}
    data = {"text": text, "model_id": "eleven_multilingual_v2", "voice_settings": VOICE_SETTINGS}
    response = requests.post(f"{ELEVENLABS_API_URL}/{VOICE_ID}", json=data, headers=headers)
    if response.status_code == 200:
        path = output_dir / f"Episode_{EPISODE_NUMBER:02d}_Section_{section_name}.mp3"
        with open(path, 'wb') as f: f.write(response.content)
        return path
    return None

def main():
    api_key = os.environ.get('ELEVENLABS_API_KEY')
    if not api_key: return print("ERROR: ELEVENLABS_API_KEY not set")
    output_dir = Path(f"episode_{EPISODE_NUMBER:02d}_audio")
    output_dir.mkdir(exist_ok=True)
    for i, (name, text) in enumerate(SECTIONS.items(), 1):
        generate_audio(text, name, api_key, output_dir)
        if i < len(SECTIONS): time.sleep(2)

if __name__ == "__main__": main()
