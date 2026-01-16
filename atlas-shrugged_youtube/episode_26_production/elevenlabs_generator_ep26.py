#!/usr/bin/env python3
"""Episode 26 - The Concerto of Deliverance"""
import os, requests, time
from pathlib import Path

ELEVENLABS_API_URL = "https://api.elevenlabs.io/v1/text-to-speech"
VOICE_ID = "TxGEqnHWrfWFTfGW9XjX"  # Josh - Deep, authoritative
VOICE_SETTINGS = {"stability": 0.65, "similarity_boost": 0.80, "style": 0.35, "use_speaker_boost": True}
EPISODE_NUMBER = 26
EPISODE_TITLE = "The Concerto of Deliverance"

SECTIONS = {
    "01_cold_open": """Richard Halley was the greatest composer of his age. His music captured something no one else could express—the experience of human achievement, the joy of a mind in motion, the triumph of creation.

Then he vanished. His final work, the Concerto of Deliverance, was performed once and never heard again.

Until now. In the valley, Dagny finally hears the music that was hidden from the world. And she understands why it couldn't exist out there.""",

    "02_introduction": """Previously: Their brothers' keepers. Unlimited obligation. Need as a claim on life. If his need creates your obligation, then the needier he is, the more you owe him.

We saw brotherhood pushed to its logical conclusion—and it looked like slavery.

Welcome back to Atlas Shrugged. In our last episode, we examined brotherhood as slavery.

Today we turn to beauty. The title "The Concerto of Deliverance" refers to Halley's masterwork—a piece of music that expresses the emotional meaning of the producers' cause.

Art, in Rand's view, isn't decoration. It's philosophy made visible—or in this case, audible. Halley's concerto captures in sound what the strike represents in action: liberation.""",

    "03_why_halley_withdrew": """Richard Halley struggled for years. Critics dismissed his work. Audiences ignored it. He wrote for decades without recognition.

Then, finally, he succeeded. His opera was performed, and the audience erupted in applause. They loved him at last.

And he quit.

Why? Because of what the applause meant. They weren't celebrating his achievement—they were celebrating their own generosity in finally approving him. They thought they had given him success. They thought their acceptance was a gift.

Halley rejected that premise. His work was great regardless of whether they recognized it. Their approval added nothing; their disapproval had subtracted nothing. He didn't need them—and he refused to pretend he did.

So he took his music and left. Let them see what their approval was worth when there was nothing left to approve.""",

    "04_the_concerto": """The Concerto of Deliverance expresses in music what the strike embodies in action.

It's the sound of liberation—of a mind freed from the need for permission, validation, approval. It's the joy of creating for your own sake, answering to your own standards, living by your own judgment.

Dagny, hearing it for the first time, understands immediately. This is what she's been fighting for. This is what the world has been denying. This is what the looters cannot comprehend.

The concerto doesn't ask for approval. It doesn't apologize. It doesn't seek consensus. It simply exists—beautiful, complete, unapologetic—the sound of a human spirit that has claimed its right to live.

This is what the looters fear most: not just the material products of achievement, but the spiritual assertion that achievement is good. The concerto says, in pure sound: I am right to create. I am right to excel. I am right to exist.""",

    "05_closing": """The Concerto of Deliverance is more than music. It's a statement of philosophy in the purest possible form.

Halley didn't write it for the audience. He wrote it because it was in him to write—because creating beauty was his way of living. The fact that others might hear it was incidental. The fact that they might approve was irrelevant.

This is the artist as hero: someone who creates not for applause but for expression, not for validation but for actualization. Someone who would write the same music whether the world cheered or condemned it.

The valley is full of such people. Scientists who discover for the joy of knowing. Industrialists who build for the satisfaction of creating. Artists who compose for the experience of beauty.

They've been delivered—not by anyone else, but by themselves. They've claimed their own lives, their own work, their own joy. The Concerto of Deliverance is their anthem.

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
