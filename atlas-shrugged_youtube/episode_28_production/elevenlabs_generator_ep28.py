#!/usr/bin/env python3
"""Episode 28 - The Egoist"""
import os, requests, time
from pathlib import Path

ELEVENLABS_API_URL = "https://api.elevenlabs.io/v1/text-to-speech"
VOICE_ID = "TxGEqnHWrfWFTfGW9XjX"  # Josh - Deep, authoritative
VOICE_SETTINGS = {"stability": 0.65, "similarity_boost": 0.80, "style": 0.35, "use_speaker_boost": True}
EPISODE_NUMBER = 28
EPISODE_TITLE = "The Egoist"

SECTIONS = {
    "01_cold_open": """Egoist. Selfish. Self-interested.

These words are meant as insults. To be called selfish is to be accused of a moral crime—of caring more about yourself than about others.

But what if selfishness isn't a crime? What if it's a virtue? What if caring about yourself is not just permitted but required for a good life?

This chapter explores the concept at the heart of Rand's philosophy: rational self-interest.""",

    "02_introduction": """Previously: "This is John Galt speaking." In a broadcast that interrupted every station in the country, John Galt explained why the producers went on strike and what they demand for their return.

The morality of sacrifice is wrong. The strike will continue until the mind is respected.

Welcome back to Atlas Shrugged. In our last episode, we heard John Galt's radio address laying out his philosophy.

Today we go deeper into one of its most controversial elements: egoism. The title "The Egoist" refers to the moral stance that your own life is your highest value and your own happiness is your moral purpose.

This isn't the egoism of common understanding—the petty grabbing of immediate desires. This is something more profound: a systematic philosophy of self-value.""",

    "03_what_selfishness_means": """Let's be clear about what Rand means by selfishness.

She doesn't mean grabbing whatever you want without thought. That's not self-interest—that's self-destruction. The addict who ruins his health for pleasure isn't being selfish; he's being stupid.

Real selfishness is rational. It means identifying what actually serves your life—long term, comprehensively, realistically—and pursuing it with discipline and integrity.

The rational egoist doesn't steal, because theft undermines the system of property rights that protects him. He doesn't lie, because honesty is essential to the clear thinking his survival requires. He doesn't exploit others, because exploitation creates enemies and destroys the trust that makes trade possible.

The rational egoist is, paradoxically, the most reliable person you could meet. His self-interest is aligned with honesty, productivity, and respect for others' rights. He's selfish—and that makes him trustworthy.""",

    "04_why_altruism_fails": """The alternative to selfishness is altruism—the doctrine that your moral duty is to serve others.

But altruism, taken seriously, is impossible to practice and destructive to attempt.

If others' needs are your moral obligation, there's no end to obligation. There's always someone needier. There's always more you could sacrifice. The altruist who's consistent becomes a martyr, giving until nothing remains.

And notice what altruism implies about the recipients of sacrifice. If someone else's sacrifice is your rightful due, then you're a parasite—someone who lives off the destruction of others. Altruism degrades everyone: the givers become servants, the receivers become beggars.

The egoist escapes this trap. He doesn't demand others' sacrifice, and he doesn't offer his own. He trades—giving value for value, benefiting himself while benefiting others. That's not exploitation; that's civilization.""",

    "05_closing": """The Egoist presents selfishness as a virtue—perhaps the fundamental virtue.

To be selfish, in Rand's sense, is to take yourself seriously. To treat your life as something worth living, your happiness as something worth pursuing, your values as something worth achieving.

The alternative is to live as a servant, always subordinating your needs to others' demands, always apologizing for your existence, always sacrificing your joy on the altar of duty.

The egoist refuses. He says: my life is mine. My happiness matters. My achievements are not crimes.

This isn't cruelty. It's integrity. It's the recognition that you cannot give what you don't have, cannot help others by destroying yourself, cannot serve life by embracing death.

John Galt is the novel's supreme egoist. He has claimed his life as his own and refuses to surrender it to anyone's demands. He is selfish—completely, unapologetically, proudly selfish. And he's the hero.

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
