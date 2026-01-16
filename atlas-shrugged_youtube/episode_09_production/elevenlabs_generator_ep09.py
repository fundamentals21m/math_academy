#!/usr/bin/env python3
"""
ElevenLabs Audio Generator for Episode 9
Atlas Shrugged - The Sacred and the Profane
"""

import os, requests, time
from pathlib import Path

ELEVENLABS_API_URL = "https://api.elevenlabs.io/v1/text-to-speech"
VOICE_ID = "ErXwobaYiN019PkySvjV"
VOICE_SETTINGS = {"stability": 0.65, "similarity_boost": 0.80, "style": 0.35, "use_speaker_boost": True}
EPISODE_NUMBER = 9
EPISODE_TITLE = "The Sacred and the Profane"

SECTIONS = {
    "01_cold_open": """"I have been thinking of nothing but you for the past week. I have been thinking of the way you carry your head, of the manner of your walk, of the sound of your voice."

Hank Rearden has achieved everything he set out to achieve. His metal is vindicated, his line is running, his enemies are silenced. Yet he cannot accept happiness without guilt. The mind-body split that conventional morality has taught him makes triumph feel like sin.""",

    "02_introduction": """Previously: Against all predictions of disaster, the John Galt Line's first run was a triumph. Dagny and Rearden rode the new rails at unprecedented speed, the bridge held, and they proved that achievement is still possible.

It was the novel's high point—and the last moment of pure triumph before everything changes.

Welcome back to Atlas Shrugged. In our last episode, we witnessed the triumphant first run of the John Galt Line.

Today we explore the deepening relationship between Dagny and Rearden—and Rearden's internal conflict about it. While the John Galt Line flourishes, Rearden struggles with guilt imposed by conventional morality, unable to integrate his physical desires with his self-respect.

The title "The Sacred and the Profane" refers to the false dichotomy Rearden has accepted: that the spiritual—his work, his mind, his achievements—is sacred, while the physical—his body, his desires—is profane. This split tortures him even in the midst of joy.""",

    "03_reardens_conflict": """In the aftermath of success, Rearden and Dagny continue their relationship. But Rearden cannot accept happiness without guilt.

He has internalized the conventional view that physical desire is base and shameful, separate from—and opposed to—his spiritual values. His mind created Rearden Metal, and that is noble. His body desires Dagny, and that must be base.

He felt the desire to have her, and fought it. He had held desire as something to be conquered. He had won every battle against inanimate nature—but this was a battle he lost.

And yet—why should he want to win it? Why should desire for someone he admires be something to conquer rather than celebrate?""",

    "04_lillians_influence": """The chapter reveals how Lillian has shaped Rearden's view of physical desire.

Lillian has made him feel that his desires are degrading. To her, sex is something base that a wife tolerates as a duty—a necessary evil of marriage. She performs it with cold resignation, making Rearden feel that his passion is an imposition, his desire a flaw.

This has left Rearden unable to integrate his physical and spiritual nature. He believes that to desire someone physically is to degrade them—even when that desire springs from admiration.

Dagny sees things differently. She does not separate body from mind, desire from value. To her, physical attraction is the expression of spiritual admiration—not its opposite. She desires Rearden because she admires him, and her desire is an act of celebration, not degradation.""",

    "05_the_world_outside": """Meanwhile, the world outside continues to deteriorate.

James Taggart, rather than celebrating the success of his own railroad's line, is resentful and bitter. The success was Dagny's, not his—achieved despite his opposition. He cannot enjoy prosperity he did not earn.

The looters begin planning their next assault. The John Galt Line's success has proven that achievement is possible—and that threatens everything they believe. If Rearden Metal works, if producers can still triumph, then the looters' philosophy of inevitable decline is wrong.

They cannot allow that. New restrictions must be imposed. New obstacles must be created. Achievement must be punished until it becomes impossible.""",

    "06_closing": """Let's recap what we learned today.

Rearden struggles with the mind-body split—the false dichotomy between sacred spiritual values and profane physical desires.

Lillian has taught him to feel ashamed of his desires, to see passion as degradation rather than celebration.

Dagny offers a different view: physical desire as the expression of spiritual values, not their opposite.

And the looters, threatened by the John Galt Line's success, plan their next assault on achievement.

In the next episode, Part One concludes with a shocking image: Ellis Wyatt sets fire to his own oil fields and vanishes, leaving behind "Wyatt's Torch"—a symbol of the producers' rebellion against those who would seize their creations.

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
