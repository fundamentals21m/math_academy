#!/usr/bin/env python3
"""
ElevenLabs Audio Generator for Episode 4
Atlas Shrugged - The Immovable Movers
"""

import os, requests, time
from pathlib import Path

ELEVENLABS_API_URL = "https://api.elevenlabs.io/v1/text-to-speech"
VOICE_ID = "ErXwobaYiN019PkySvjV"
VOICE_SETTINGS = {"stability": 0.65, "similarity_boost": 0.80, "style": 0.35, "use_speaker_boost": True}
EPISODE_NUMBER = 4
EPISODE_TITLE = "The Immovable Movers"

SECTIONS = {
    "01_cold_open": """"He was the kind of man who had never thought of his own existence as important enough to require an explanation. He worked, he loved his work, he did not ask why."

This is the prime mover—the creative mind that drives civilization forward. And in this chapter, we'll see both the heights such minds can reach and the forces gathering to destroy them.""",

    "02_introduction": """Previously: We saw the looters' conspiracy take shape. The "Anti-dog-eat-dog Rule" destroyed Dan Conway's Phoenix-Durango Railroad—all in the name of preventing "destructive competition."

The pattern is becoming clear: use the language of fairness to destroy the capable.

Welcome back to Atlas Shrugged. In our last episode, we exposed the looters' conspiracy and the Anti-dog-eat-dog Rule.

Today we explore the concept of the "prime movers"—the industrialists, inventors, and creators who drive civilization forward. We'll learn about Francisco d'Anconia's brilliant youth and see the devastating consequences of the Anti-dog-eat-dog Rule as it takes effect.

The title "The Immovable Movers" alludes to Aristotle's concept of the "unmoved mover"—the source of all action that is not itself moved by anything external. The prime movers of industry are the human equivalent: they create value without being driven by forces outside themselves.""",

    "03_francisco_backstory": """Through Dagny's memories, we learn about Francisco d'Anconia's extraordinary childhood.

The d'Anconia fortune was built over centuries by generations of brilliant industrialists. Francisco was raised to be the crown jewel of the line—educated to continue and expand the family's legacy of achievement.

Even as a child, Francisco was a prodigy. He excelled at everything: mathematics, science, business, sports. He seemed to embody the human potential for greatness that the novel celebrates.

Francisco spent summers with the Taggarts, where he and Dagny became close friends. Their friendship was based on shared values—a love of productive work and contempt for those who merely existed without creating.

Here's a striking detail: As a teenager, Francisco once worked incognito in a d'Anconia copper foundry to learn the business from the ground up. He rose to become one of the most valued workers before revealing his identity. He was committed to earning everything, despite being born to wealth.""",

    "04_dan_conway_defeat": """The Anti-dog-eat-dog Rule takes effect, and Dan Conway is forced to close the Phoenix-Durango railroad.

Conway's words capture the tragedy: "I've never asked anyone to give me anything. I thought people got things by working for them. But it's not so simple... I built something good—and they're taking it away from me."

Conway represents the producer who plays by the rules and loses. He built a better railroad through years of hard work and superior service. His reward is destruction through political manipulation.

This scene illustrates what happens when the rules of the game are rigged against the competent. Those who cannot compete through merit turn to force—and the best are punished for their excellence.""",

    "05_colorado_crisis": """With Phoenix-Durango forced out of Colorado, the state's industrial economy faces disaster.

Ellis Wyatt and other producers in the region depend on reliable transportation. Taggart Transcontinental cannot provide it—the Rio Norte Line is crumbling from years of neglect.

Here's the irony: The Anti-dog-eat-dog Rule, designed to help Taggart Transcontinental by eliminating competition, actually threatens to destroy Colorado's economy. The looters' victory may become their defeat, as the industrial system they feed upon collapses.

Dagny must rebuild the Rio Norte Line quickly or lose Colorado's business entirely. She commits to using Rearden Metal—a controversial decision that will bring her into conflict with both her brother and the public.""",

    "06_themes": """The key themes in this chapter:

First, the Prime Mover. The creative minds who drive civilization forward are like the "unmoved mover" of philosophy—they are the source of productive action, driving the economy through their vision and effort.

Second, the Cost of Looting. When looters destroy producers, they destroy the source of the wealth they seek to seize. You cannot consume what has not been produced.

Third, Human Potential. Francisco's backstory illustrates the heights humans can achieve when free to develop their abilities. His apparent fall from these heights makes his current behavior all the more mysterious.

Fourth, the Race Against Time. Dagny must rebuild before the system collapses completely. The question is whether creation can outpace destruction.""",

    "07_closing": """Let's recap what we learned today.

The prime movers are the creative minds who drive civilization forward—without them, society cannot function.

Francisco d'Anconia's brilliant youth is revealed through Dagny's memories, deepening the mystery of his current behavior as a seemingly idle playboy.

Dan Conway's defeat illustrates how the productive are punished in a society corrupted by political manipulation.

The Colorado crisis shows the consequences of destroying producers—the looters' victory threatens the economy they feed upon.

And Dagny's commitment to rebuilding the Rio Norte Line with Rearden Metal sets up the novel's central conflict.

In the next episode, we'll witness one of the most famous scenes in literature—Francisco d'Anconia's Money Speech. When someone declares that "money is the root of all evil," Francisco responds with a philosophical defense that will change how you think about wealth, trade, and freedom.

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
