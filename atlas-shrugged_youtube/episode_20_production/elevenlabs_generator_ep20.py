#!/usr/bin/env python3
"""Episode 20 - The Sign of the Dollar"""
import os, requests, time
from pathlib import Path

ELEVENLABS_API_URL = "https://api.elevenlabs.io/v1/text-to-speech"
VOICE_ID = "ErXwobaYiN019PkySvjV"
VOICE_SETTINGS = {"stability": 0.65, "similarity_boost": 0.80, "style": 0.35, "use_speaker_boost": True}
EPISODE_NUMBER = 20
EPISODE_TITLE = "The Sign of the Dollar"

SECTIONS = {
    "01_cold_open": """The dollar sign. To some, it represents greed, exploitation, the worst of human nature.

But what does it actually stand for?

It's the symbol of trade—of people exchanging value for value. It's the sign of a transaction where both parties benefit. It's the mark of an economy based on production, not plunder.

The looters despise the dollar sign. The producers are about to reclaim it.""",

    "02_introduction": """Previously: Dagny glimpsed a face without pain or fear or guilt—someone who has solved the problem of living. A face that shows serenity, resolution, inner peace.

Part Two draws toward its climax. The answer is close.

Welcome back to Atlas Shrugged. This is the final episode of Part Two: Either-Or.

In our last episode, Dagny glimpsed the face of someone who has solved the problem of living. Today we see the symbol of how he did it.

The title "The Sign of the Dollar" refers to the emblem chosen by the strikers. Not an eagle or a torch or a raised fist—but the sign of free exchange between free people. The dollar sign represents everything the looters hate and everything the producers value.

This chapter brings Part Two to its climax.""",

    "03_the_symbol_reclaimed": """The dollar sign has been corrupted in the public mind.

It's been made to represent exploitation—the rich getting richer while the poor suffer. It's been made to represent greed—the pursuit of money over morality. It's been made to represent everything that's wrong with capitalism.

But the strikers see it differently. To them, the dollar sign represents achievement. It represents the moment when someone creates something valuable and another person voluntarily pays for it. It represents the alternative to force.

Think about what a dollar actually is. It's a certificate of production. You can only honestly earn a dollar by creating something others want to buy. The dollar represents work done, value created, needs fulfilled.

The strikers choose the dollar sign as their emblem because it represents their cause: the right of producers to keep what they produce, the virtue of trade over theft, the nobility of earning over taking.""",

    "04_either_or": """Part Two is called "Either-Or," and the choice is now clear.

Either you live by production or by looting. Either you create value or you seize it. Either you trade or you steal.

There is no middle ground. You cannot be half a producer and half a parasite. You cannot earn your living honestly while supporting a system of theft. You cannot claim the virtues of the dollar sign while denouncing what it represents.

The world outside is collapsing because it rejected this choice. It tried to have production without producers, wealth without creators, prosperity without the people who make it possible.

The strikers have made the opposite choice. They've chosen production, creation, trade. And they've marked their choice with the sign of the dollar.""",

    "05_closing": """The Sign of the Dollar—it's the banner of the striking producers.

Part Two ends with the lines clearly drawn. On one side, a society that punishes production, seizes wealth, and is collapsing under the weight of its contradictions. On the other side, a hidden community of producers who have withdrawn their sanction and wait for the collapse to complete.

The dollar sign is their symbol because it represents everything they believe: that trade is moral, that production is noble, that earning is better than taking.

We're about to enter Part Three: A Is A. The title refers to the law of identity—the foundation of logic itself. A thing is what it is. Reality cannot be wished away or voted out of existence.

In Part Three, the mystery will be revealed. John Galt will speak. The full philosophy behind the strike will be presented. And Dagny will finally reach the hidden valley where the producers have built their own world.

The choice has been made. Now we'll see how it ends.

See you in Part Three."""
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
