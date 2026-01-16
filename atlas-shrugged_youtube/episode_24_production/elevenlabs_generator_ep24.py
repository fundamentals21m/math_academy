#!/usr/bin/env python3
"""Episode 24 - Anti-Life"""
import os, requests, time
from pathlib import Path

ELEVENLABS_API_URL = "https://api.elevenlabs.io/v1/text-to-speech"
VOICE_ID = "TxGEqnHWrfWFTfGW9XjX"  # Josh - Deep, authoritative
VOICE_SETTINGS = {"stability": 0.65, "similarity_boost": 0.80, "style": 0.35, "use_speaker_boost": True}
EPISODE_NUMBER = 24
EPISODE_TITLE = "Anti-Life"

SECTIONS = {
    "01_cold_open": """Every philosophy has an ultimate value—the thing it considers most important, the standard by which everything else is judged.

For some philosophies, that value is life. Human flourishing, achievement, happiness—these are good because they serve life.

For other philosophies, the ultimate value is something else: duty, sacrifice, equality, the collective. Life isn't the standard—it's what must be sacrificed to achieve the standard.

This is the anti-life philosophy. And its logical conclusion is death.""",

    "02_introduction": """Previously: The outside world continues its descent into anti-greed—policies driven not by love of the poor, but by hatred of the successful.

The policies aren't designed to produce prosperity. They're designed to prevent it. Their goal isn't abundance—it's equality of misery.

Welcome back to Atlas Shrugged. In our last episode, we saw anti-greed—envy disguised as compassion.

Today we go deeper to the philosophical roots. The title "Anti-Life" describes the fundamental orientation of the looters' worldview. They don't value human life—they value sacrifice. They don't celebrate achievement—they demand renunciation.

When life itself is not the standard, everything becomes permissible in service of the "higher" cause. Including death.""",

    "03_the_philosophy": """What does it mean to be anti-life?

It means treating death as noble and life as guilt. The martyr who dies for the cause is celebrated. The producer who lives well is condemned.

It means treating sacrifice as virtue and achievement as sin. Giving up what you value proves your worth. Gaining what you value makes you suspect.

It means treating suffering as redemptive and happiness as shallow. Pain purifies. Joy corrupts.

These ideas sound extreme, but they're everywhere in the looters' rhetoric. They praise the self-sacrificing worker and condemn the self-interested businessman. They admire the struggling poor and despise the successful rich. They speak of duty and obligation, never of reward and happiness.

The common thread: life is not the goal. Something else is—and life must be sacrificed to it.""",

    "04_the_consequences": """When a society adopts an anti-life philosophy, the consequences are predictable.

Policies that promote life—production, achievement, innovation—are attacked. Policies that destroy life—sacrifice, redistribution, control—are embraced.

The result isn't equality or justice. The result is universal suffering. But that's not a failure—it's a success. A philosophy that values sacrifice over life has achieved its goal when everyone is sacrificing.

The looters aren't disappointed by the collapse. They're vindicated by it. The more people suffer, the more noble the cause must be. The more life is destroyed, the more sacrifice has been achieved.

This is the horror of anti-life thinking: suffering isn't a problem to be solved. It's a virtue to be cultivated.""",

    "05_closing": """Anti-Life is the deepest level of the novel's critique.

The looters aren't just economically wrong—they're morally inverted. They've taken everything that serves human life and called it evil. They've taken everything that destroys human life and called it good.

Selfishness is evil—even though it motivates production. Sacrifice is good—even though it demands destruction. Happiness is suspicious—even though it's the goal of living. Suffering is noble—even though it's the negation of life.

John Galt's strike is, ultimately, a strike against this philosophy. The producers have withdrawn not just their labor but their sanction of the anti-life creed. They refuse to agree that their achievements are sins, that their happiness is shameful, that their lives are fuel for others' demands.

They choose life. And that choice is the foundation of everything else.

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
