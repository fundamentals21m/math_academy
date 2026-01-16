#!/usr/bin/env python3
"""Episode 17 - The Moratorium on Brains"""
import os, requests, time
from pathlib import Path

ELEVENLABS_API_URL = "https://api.elevenlabs.io/v1/text-to-speech"
VOICE_ID = "TxGEqnHWrfWFTfGW9XjX"  # Josh - Deep, authoritative
VOICE_SETTINGS = {"stability": 0.65, "similarity_boost": 0.80, "style": 0.35, "use_speaker_boost": True}
EPISODE_NUMBER = 17
EPISODE_TITLE = "The Moratorium on Brains"

SECTIONS = {
    "01_cold_open": """What would you call a law that forbids people from thinking?

Not explicitly, of course. No legislation announces itself as a ban on intelligence. But what if the effect of a law is to punish anyone who uses their mind to create something new?

What if innovation itself becomes illegal?

This is the moratorium on brains—and it's not science fiction. It's the logical endpoint of a system that treats achievement as a threat.""",

    "02_introduction": """Previously: Rearden Metal—the miracle that could transform civilization—has been seized by the government. Not purchased, not traded for, but taken by decree.

Because a miracle, they say, is too important to belong to one man.

Welcome back to Atlas Shrugged. In our last episode, we saw Rearden Metal seized by the government.

Today we witness something even more chilling: a systematic effort to prevent new thinking. The title "The Moratorium on Brains" refers to policies that effectively outlaw innovation. No new inventions. No new processes. No new products. Everything must stay as it is.

The official reason is stability. The real reason is fear—fear of anyone who might create something the looters can't control.""",

    "03_the_freeze": """The new directives freeze everything in place.

No business may expand beyond its current size. No new businesses may be created. No worker may change jobs. No producer may introduce new methods or products.

The rationale sounds reasonable: in a time of crisis, we need stability. Change is disruptive. Innovation creates winners and losers. Better to freeze everything until the emergency passes.

But the emergency will never pass—because the freeze itself prevents the innovation that could solve it. The only way out of the crisis is to let minds work. And minds have been forbidden to work.

This is the moratorium on brains: a ban on the very faculty that could save civilization.""",

    "04_the_consequences": """The consequences are immediate and devastating.

Problems that could be solved aren't—because solving them would require new thinking. Shortages that could be addressed aren't—because addressing them would require new methods. Opportunities that could be seized aren't—because seizing them would require innovation.

The economy doesn't stabilize. It stagnates. Then it declines. Then it collapses.

Because an economy isn't a machine that runs by itself. It's the product of countless minds making countless decisions. Stop the minds, and you stop the economy.

The looters thought they could freeze society and still maintain prosperity. They learned that prosperity is the result of minds in motion. Freeze the motion, and the prosperity dies.""",

    "05_closing": """The moratorium on brains is the ultimate confession of the looters' worldview.

They believe that wealth exists independent of the minds that create it. They believe that society can function without the thinking that sustains it. They believe they can ban innovation and keep the benefits of innovation.

They are wrong. Fatally wrong.

Every day the freeze continues, more problems go unsolved. Every day minds are forbidden to work, more wealth disappears. Every day the moratorium holds, civilization slides further into darkness.

And somewhere, the best minds have found a place where thinking is still allowed. A place where innovation is celebrated, not criminalized. A place where brains are welcome.

The moratorium on brains is driving the best minds away. Which is, perhaps, exactly what John Galt intended.

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
