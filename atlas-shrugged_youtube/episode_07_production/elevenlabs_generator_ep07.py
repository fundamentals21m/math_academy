#!/usr/bin/env python3
"""
ElevenLabs Audio Generator for Episode 7
Atlas Shrugged - The Exploiters and the Exploited
"""

import os, requests, time
from pathlib import Path

ELEVENLABS_API_URL = "https://api.elevenlabs.io/v1/text-to-speech"
VOICE_ID = "TxGEqnHWrfWFTfGW9XjX"  # Josh - Deep, authoritative
VOICE_SETTINGS = {"stability": 0.65, "similarity_boost": 0.80, "style": 0.35, "use_speaker_boost": True}
EPISODE_NUMBER = 7
EPISODE_TITLE = "The Exploiters and the Exploited"

SECTIONS = {
    "01_cold_open": """"The man who speaks to you of sacrifice, speaks of slaves and masters. And intends to be the master."

The Equalization of Opportunity Bill has passed. Hank Rearden must sell his ore mines—property he built through decades of work—to men who could never dig a single chunk of ore from the earth. The looters call this "fairness." Rand calls it exploitation.""",

    "02_introduction": """Previously: The State Science Institute published a report attacking Rearden Metal. Not because it's dangerous—but because Rearden succeeded without their permission.

Even Dr. Robert Stadler, a brilliant physicist who knows the truth, signed off on the false report. Science has been corrupted by politics.

Welcome back to Atlas Shrugged. In our last episode, we saw how the intellectual establishment attacks producers through institutions like the State Science Institute.

Today, the assault becomes direct. The Equalization of Opportunity Bill passes, forcing Rearden to sell his ore mines. We'll see who truly exploits whom in a society corrupted by political pull—and watch as Dagny and Rearden race to complete the John Galt Line before their enemies can stop them.

The title "The Exploiters and the Exploited" inverts the Marxist narrative that capitalists exploit workers. Rand argues the opposite: it is the looters who exploit the producers, using government force to seize what they cannot earn.""",

    "03_equalization_bill": """The Equalization of Opportunity Bill passes. This legislation forces any business owner who operates in multiple industries to divest from all but one. Rearden, who owns steel mills and ore mines, must sell his mines.

The bill is presented as helping the "little guy"—giving smaller competitors a chance against industrial giants. But look at what it actually does: it strips a productive man of property he built through decades of work, transferring it to competitors who never demonstrated the ability to create it themselves.

The men who voted for this bill—who knows by what minds? Who knows whose will placed them in power, what motive moved them, what was their knowledge? Which one of them, unaided, could bring a single chunk of ore out of the earth?

This is the inversion of exploitation. The productive are forced to surrender their creations to the unproductive. Achievement is punished. Incompetence is rewarded.""",

    "04_wesley_mouch_betrayal": """Wesley Mouch reveals his true colors. Rearden had employed Mouch as his Washington lobbyist—paid him to represent his interests. But Mouch has been working with the conspirators all along.

His reward for betrayal? Appointment as Assistant Coordinator of the Bureau of Economic Planning and National Resources. Mouch traded his integrity for power—and in the new system, that's a profitable trade.

The lesson is clear: you cannot work within a corrupt system. Hiring lobbyists to deal with government is futile when the government rewards those who serve the looters, not those who create value.

Rearden realizes too late that he was funding his own destruction. Every dollar he paid Mouch was used against him.""",

    "05_john_galt_line_prep": """Meanwhile, Dagny and Rearden work frantically to complete the John Galt Line—the railroad through Colorado built with Rearden Metal.

They face opposition from every direction: the media predicts disaster, the State Science Institute questions the metal's safety, James Taggart undermines his own sister. But they press forward, determined to prove that achievement is possible despite every attempt to stop it.

The John Galt Line becomes more than a railroad—it becomes a symbol. A test of whether productive people can still accomplish great things in a world designed to prevent them.

Dagny names it after the question that haunts the world: "Who is John Galt?" Her answer: We are. The producers. The creators. The people who refuse to give up.""",

    "06_closing": """Let's recap what we learned today.

The Equalization of Opportunity Bill forces Rearden to sell his ore mines—rewarding the incompetent at the expense of the productive.

Wesley Mouch's betrayal shows that working within the system is futile—the system rewards those who serve the looters.

The true exploiters are not the industrialists but the looters who use government force to seize what they cannot create.

And Dagny and Rearden prepare to answer the question "Who is John Galt?" with their own achievement—the John Galt Line.

In the next episode, we'll witness the triumphant first run of the John Galt Line. Dagny and Rearden will stake their lives on their own work, riding in the engine cab as the train crosses the revolutionary Rearden Metal bridge.

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
