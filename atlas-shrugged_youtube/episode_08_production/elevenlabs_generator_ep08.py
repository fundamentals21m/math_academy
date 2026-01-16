#!/usr/bin/env python3
"""
ElevenLabs Audio Generator for Episode 8
Atlas Shrugged - The John Galt Line
"""

import os, requests, time
from pathlib import Path

ELEVENLABS_API_URL = "https://api.elevenlabs.io/v1/text-to-speech"
VOICE_ID = "TxGEqnHWrfWFTfGW9XjX"  # Josh - Deep, authoritative
VOICE_SETTINGS = {"stability": 0.65, "similarity_boost": 0.80, "style": 0.35, "use_speaker_boost": True}
EPISODE_NUMBER = 8
EPISODE_TITLE = "The John Galt Line"

SECTIONS = {
    "01_cold_open": """"Miss Taggart, who is John Galt?"
"We are!"

The crowd roars as the John Galt Line opens. After months of predictions of disaster, attacks from the media, and condemnation from the intellectual establishment, Dagny Taggart and Hank Rearden are about to stake their lives on their own work.""",

    "02_introduction": """Previously: The Equalization of Opportunity Bill passed. No person may own more than one business. Wesley Mouch—Rearden's own lobbyist—betrayed his employer to gain political power.

The pattern is undeniable: in this new world, success is not earned through ability, but through political connection.

Welcome back to Atlas Shrugged. In our last episode, we saw the Equalization of Opportunity Bill strip Rearden of his ore mines.

Today is the triumphant culmination of Part One. The John Galt Line opens, proving that Rearden Metal is safe and that achievement is possible despite every attempt to stop it. Dagny and Rearden will ride the first train themselves, risking their lives on their own creation.

This is what it means to be a producer: to stake everything on your own judgment, to trust your work with your life, to answer your enemies not with words but with achievement.""",

    "03_opening_ceremony": """The John Galt Line is complete. Eddie Willers cuts the ribbon to open the line. When photographers ask him to stage the moment for multiple shots, he refuses: "It's not going to be a phony."

This small act of integrity captures the spirit of the enterprise. Everything about the John Galt Line is real—the rails, the bridge, the achievement. No pretense, no public relations, no lies.

Crowds have gathered from all over to watch. Some hope the train will crash—vindication of their predictions. Others cheer for success. The line has become a symbol of the battle between achievement and destruction, between those who create and those who tear down.""",

    "04_the_first_run": """Dagny and Rearden climb into the engine cab. They will ride the first train themselves—staking their lives on the safety of Rearden Metal and the soundness of their work.

The train begins to move. The green-blue rails run to meet them, like two jets shot from a single point beyond the curve of the earth. The crossties melt into a smooth stream rolling down under the wheels.

Listen to Dagny's experience: "She felt no wheels under the floor. The motion was a smooth flight on a sustained impulse." This is the joy of achievement—the integration of mind and matter, purpose and action. Everything she is rides on those rails.

The train reaches speeds never before achieved. It crosses the revolutionary Rearden Metal bridge without incident. The bridge holds. The rails hold. The achievement is real.""",

    "05_triumph": """The run is a complete success.

Rearden Metal has been vindicated—not by arguments or press releases, but by reality itself. The train that everyone said would crash has arrived safely. The bridge that everyone said would collapse has held.

This is how truth is established: not by authority, not by committee vote, not by public opinion—but by the facts of reality. Rearden Metal is safe because it is safe, regardless of what the State Science Institute implies or what the media predicts.

When someone asks Dagny "Who is John Galt?" she has her answer: "We are." The producers. The creators. The people who refuse to accept that achievement is impossible. They have answered the question not with words but with deeds—with rails of Rearden Metal stretching across Colorado.""",

    "06_closing": """Let's recap what we learned today.

The John Galt Line opens triumphantly, proving that Rearden Metal is safe and that achievement is still possible.

Dagny and Rearden stake their lives on their own work, riding in the engine cab of the first train.

Truth is established by reality, not authority. The train runs, the bridge holds, the metal is vindicated.

And the question "Who is John Galt?" receives its first answer: the producers are John Galt. Those who create despite every obstacle.

In the next episode, we'll explore the deepening relationship between Dagny and Rearden—and Rearden's internal conflict about the mind-body split he has accepted. Even in triumph, he struggles with guilt imposed by conventional morality.

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
