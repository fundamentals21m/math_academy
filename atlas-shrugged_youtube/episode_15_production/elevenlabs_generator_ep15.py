#!/usr/bin/env python3
"""Episode 15 - Account Overdrawn"""
import os, requests, time
from pathlib import Path

ELEVENLABS_API_URL = "https://api.elevenlabs.io/v1/text-to-speech"
VOICE_ID = "ErXwobaYiN019PkySvjV"
VOICE_SETTINGS = {"stability": 0.65, "similarity_boost": 0.80, "style": 0.35, "use_speaker_boost": True}
EPISODE_NUMBER = 15
EPISODE_TITLE = "Account Overdrawn"

SECTIONS = {
    "01_cold_open": """A bank account works on a simple principle: you can only withdraw what you've deposited, plus any interest earned.

Try to withdraw more than you have, and the check bounces. The bank doesn't create money from nothing to cover your overdraft.

Society works the same way. You can only consume what has been produced. And for decades, America has been writing checks against an account that's running dry.""",

    "02_introduction": """Previously: The sanction of the victim. Evil is powerless without the cooperation of the good. The looters cannot function without producers to loot. They depend entirely on the producers' compliance.

The moment the producers withdraw their sanction—they are free. And the looters are powerless.

Welcome back to Atlas Shrugged. In our last episode, we examined the sanction of the victim—how the producers enable their own exploitation.

Today we see the economic consequences of that exploitation. The title "Account Overdrawn" captures what happens when a society consumes more than it produces, when it destroys creators faster than they can be replaced, when it writes checks against a shrinking balance.

The bill is coming due. And there's not enough left in the account to pay it.""",

    "03_the_economic_reality": """Economics has an unforgiving logic. Consumption requires production. Services require providers. Goods require makers.

When you tax producers, some stop producing. When you regulate creators, some stop creating. When you punish success, some stop succeeding.

Each producer who vanishes is a withdrawal from the account. Each regulation that prevents production is a withdrawal. Each entrepreneur who gives up is a withdrawal.

Meanwhile, the withdrawals continue. The government still spends. The dependents still consume. The bureaucracy still grows. Everyone assumes the money will be there—because it always has been.

But the account is overdrawn. The producers who filled it are gone.""",

    "04_the_collapse": """The chapter shows us what happens when the account runs dry.

Trains stop running—not because of mechanical failure, but because there's no one left who knows how to run them. Factories close—not because of lack of demand, but because there's no one left who can manage them. Crops rot in fields—not because of drought, but because there's no one left to organize the harvest.

The looters are bewildered. They've done nothing different. They're still making the same demands, passing the same regulations, expecting the same compliance. Why isn't the system working?

Because the system was never the source of wealth. The producers were. And the producers are gone.""",

    "05_closing": """The account is overdrawn, and no amount of legislation can change that fact.

You cannot consume what has not been produced. You cannot spend what does not exist. You cannot demand services from people who have vanished.

The looters thought they could tax and regulate indefinitely, that the producers would always be there to supply whatever was demanded. They were wrong.

Reality doesn't negotiate. The laws of economics don't compromise. When you destroy the creators of wealth, the wealth stops being created. When your account is overdrawn, the checks bounce.

America is learning this lesson the hard way. Every day, more producers disappear. Every day, the account shrinks further. And somewhere, John Galt is waiting for the final collapse.

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
