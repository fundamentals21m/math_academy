#!/usr/bin/env python3
"""
ElevenLabs Audio Generator for Episode 6
Atlas Shrugged - The Non-Commercial
"""

import os, requests, time
from pathlib import Path

ELEVENLABS_API_URL = "https://api.elevenlabs.io/v1/text-to-speech"
VOICE_ID = "ErXwobaYiN019PkySvjV"
VOICE_SETTINGS = {"stability": 0.65, "similarity_boost": 0.80, "style": 0.35, "use_speaker_boost": True}
EPISODE_NUMBER = 6
EPISODE_TITLE = "The Non-Commercial"

SECTIONS = {
    "01_cold_open": """"The purpose of philosophy is not to help men find the meaning of life, but to prove to them that there isn't any."

These are the words of Dr. Simon Pritchett, a professor of philosophy. And they capture the spirit of the intellectuals who claim to be above mere commerce—while living off the products of the very industries they despise.""",

    "02_introduction": """Previously: At the Rearden party, Francisco dropped his mask and delivered the Money Speech. "So you think that money is the root of all evil? Have you ever asked what is the root of money?"

He argued that money is a tool of virtue, not evil—that it represents trade, not exploitation. The intellectuals were stunned. Rearden was intrigued.

Welcome back to Atlas Shrugged. In our last episode, we witnessed Francisco's Money Speech—a philosophical defense of wealth and free exchange.

Today we explore the conflict between those who value commerce and production and those who claim to represent "higher" non-commercial values. We'll meet Dr. Robert Stadler, a brilliant physicist who has sacrificed his integrity for political survival, and witness the State Science Institute's attack on Rearden Metal.

The title "The Non-Commercial" refers to those who claim to be above mere commerce—intellectuals, scientists, and artists who profess contempt for business while depending on its products for their existence.""",

    "03_state_science_attack": """The chapter opens with the State Science Institute releasing a statement attacking Rearden Metal as unsafe.

The statement contains no actual evidence against the metal—no data, no scientific argument, no concrete objection. Just vague insinuations and appeals to authority, designed to create doubt in the public mind and threaten the Rio Norte Line project.

This is how the non-commercial world operates: not through evidence and reason, but through authority and innuendo. The Institute cannot prove Rearden Metal is dangerous, so it simply implies that it might be—and lets fear do the rest.""",

    "04_dr_stadler": """Dagny goes to confront Dr. Robert Stadler, the brilliant physicist who heads the State Science Institute. She hopes that this man—once considered one of the greatest scientific minds of the age—will speak the truth about Rearden Metal.

What she discovers is devastating. Stadler admits privately that Rearden Metal is "a remarkable thing," but he refuses to say so publicly.

Stadler represents the tragedy of genius without integrity. Once one of the greatest physicists in the world, he has allowed himself to become dependent on government funding and political favor. He has traded his independence for security—and now he must serve political masters rather than truth.

Here's the key insight: Stadler considers practical matters "beneath" him. He thinks he can pursue pure science while ignoring the political uses to which it is put. But by accepting government money, he has made himself an instrument of the looters. His contempt for the practical has destroyed his ability to be impractical.""",

    "05_contempt_for_commerce": """The chapter explores a deeper philosophical conflict: the contempt that intellectuals have for commerce and production.

Scientists like Stadler consider business vulgar. They claim to pursue truth for its own sake, untainted by material concerns. Artists like Balph Eubank believe that commercial success is proof of artistic failure. The cultural establishment agrees: money is dirty, profit is exploitation, and anyone who creates wealth is morally suspect.

But here's what they don't acknowledge: every scientist, every artist, every intellectual depends on the products of commerce for their existence. The food they eat, the buildings they work in, the tools they use—all created by the businessmen they despise.

The non-commercial class is parasitic on the commercial. They cannot exist without producers. Yet they claim moral superiority over those who feed them.""",

    "06_closing": """Let's recap what we learned today.

The State Science Institute attacks Rearden Metal with vague insinuations rather than evidence—revealing how the non-commercial world operates through authority rather than reason.

Dr. Robert Stadler, once a brilliant scientist, has sacrificed his integrity for government funding. He knows Rearden Metal is safe but refuses to say so publicly.

The intellectual establishment's contempt for commerce is parasitic—they depend on producers while despising them.

And the attack on Rearden Metal is part of a larger pattern: the looters cannot compete through merit, so they use institutions like the State Science Institute to destroy what they cannot create.

In the next episode, we'll see who truly exploits whom as the Equalization of Opportunity Bill passes, stripping Rearden of his ore mines. The looters tighten their grip—but the producers prepare to fight back.

See you in the next one."""
}


def generate_audio(text, section_name, api_key, output_dir):
    headers = {"Accept": "audio/mpeg", "Content-Type": "application/json", "xi-api-key": api_key}
    data = {"text": text, "model_id": "eleven_multilingual_v2", "voice_settings": VOICE_SETTINGS}
    response = requests.post(f"{ELEVENLABS_API_URL}/{VOICE_ID}", json=data, headers=headers)
    if response.status_code == 200:
        path = output_dir / f"Episode_{EPISODE_NUMBER:02d}_Section_{section_name}.mp3"
        with open(path, 'wb') as f: f.write(response.content)
        print(f"  [OK] {path.name}")
        return path
    return None

def main():
    print(f"Episode {EPISODE_NUMBER}: {EPISODE_TITLE}")
    api_key = os.environ.get('ELEVENLABS_API_KEY')
    if not api_key: return print("ERROR: ELEVENLABS_API_KEY not set")
    output_dir = Path(f"episode_{EPISODE_NUMBER:02d}_audio")
    output_dir.mkdir(exist_ok=True)
    for i, (name, text) in enumerate(SECTIONS.items(), 1):
        generate_audio(text, name, api_key, output_dir)
        if i < len(SECTIONS): time.sleep(2)

if __name__ == "__main__": main()
