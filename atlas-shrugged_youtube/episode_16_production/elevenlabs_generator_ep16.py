#!/usr/bin/env python3
"""Episode 16 - Miracle Metal"""
import os, requests, time
from pathlib import Path

ELEVENLABS_API_URL = "https://api.elevenlabs.io/v1/text-to-speech"
VOICE_ID = "TxGEqnHWrfWFTfGW9XjX"  # Josh - Deep, authoritative
VOICE_SETTINGS = {"stability": 0.65, "similarity_boost": 0.80, "style": 0.35, "use_speaker_boost": True}
EPISODE_NUMBER = 16
EPISODE_TITLE = "Miracle Metal"

SECTIONS = {
    "01_cold_open": """They called it a miracle. A metal stronger than steel at half the weight. A material that could revolutionize construction, transportation, manufacturing.

Hank Rearden spent ten years creating it. He risked everything—his fortune, his reputation, his company—to bring it into existence.

Now the government wants to take it from him. Not by purchase. Not by trade. By decree. Because a miracle, they say, is too important to belong to one man.""",

    "02_introduction": """Previously: The economic account is overdrawn. You can only consume what has been produced. And for decades, America has been writing checks against a shrinking account.

Trains stop running. Factories close. Crops rot. Not from external disaster—but from the absence of the minds that made everything work.

Welcome back to Atlas Shrugged. In our last episode, we saw the economic account running dry as producers vanished.

Today we witness a direct assault on one producer who hasn't vanished—Hank Rearden. His metal, once denounced as dangerous, is now recognized as indispensable. And that makes it a target.

The chapter "Miracle Metal" shows what happens when the state decides that your creation belongs to everyone—which means, in practice, that it belongs to whoever has political power.""",

    "03_the_seizure": """The logic is simple and devastating.

Rearden Metal is too valuable to be controlled by one man. The public interest requires that it be available to all. Therefore, the government will take control of its production and distribution.

Notice what's missing from this logic: any recognition of the man who created it. Rearden spent a decade of his life making this metal possible. He took the risks. He did the work. He made the choices that led to success.

None of that matters. The metal exists—and existence is all that counts to the looters. They cannot create miracles, but they can seize them.

Rearden faces a choice. Comply with the seizure and watch his creation be mismanaged by people who don't understand it. Or resist and face the full power of the state.""",

    "04_the_deeper_meaning": """The seizure of Rearden Metal reveals something important about the relationship between creators and looters.

The looters need the creators. Without Rearden, there would be no metal to seize. Without his knowledge, there's no way to produce more. Without his judgment, there's no way to improve it.

But the looters cannot admit this. To admit it would be to acknowledge that some people create value while others merely consume it. That would undermine the whole premise of their system—that everyone contributes equally, that no one deserves more than anyone else.

So they seize the metal while denouncing its creator. They take the miracle while punishing the miracle-worker. They need him desperately—and they hate him for it.""",

    "05_closing": """Miracle Metal—the name captures both the wonder of human achievement and the tragedy of its persecution.

Rearden created something unprecedented. He made the impossible possible through years of dedicated effort. His reward is to have his creation confiscated by people who could never create it themselves.

This is the fate of every producer in a society of looters. Create something valuable, and it will be taken. Solve a problem, and you'll be blamed for not solving it sooner. Produce a miracle, and you'll be told you don't deserve to control it.

Yet Rearden doesn't give up. He continues to produce, continues to fight, continues to be the man who creates miracles. Some part of him still believes the system can be reformed, that justice can prevail.

He hasn't yet learned what John Galt knows: you can't reform a system designed to punish the good for being good. You can only withdraw from it.

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
