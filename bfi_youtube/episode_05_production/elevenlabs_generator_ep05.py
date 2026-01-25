#!/usr/bin/env python3
"""
ElevenLabs Audio Generator for Episode 5
Bitcoin for Institutions - Bitcoin Requires More Patience and Time

Usage:
    export ELEVENLABS_API_KEY='your-api-key'
    python elevenlabs_generator_ep05.py
"""

import sys
from pathlib import Path

# Add project root to path for imports
sys.path.insert(0, str(Path(__file__).parent.parent))

from audio_generator import AudioGenerator

EPISODE_NUMBER = 5
EPISODE_TITLE = "Bitcoin Requires More Patience and Time"

SECTIONS = {
    "01_cold_open": """The most common solutions to basic human problems take time. Many entail building new skills that require habits and structure, and it's a long way towards mastery.

Understanding bitcoin is no different—except it's far more demanding than most realize.

This chapter explores why the time required to master bitcoin creates a fundamental mismatch with institutional timelines.""",

    "02_guitar_analogy": """Imagine wanting to learn to play the guitar. It would take an ordinary person with a 40-hour-a-week job several years just to be able to play something competent for a recital.

The first year of guitar involves learning to read music, learning basic fingering techniques, learning how to hold a pick and strike the strings, learning basic open chords—E, A, G, C, D.

Perhaps after a year, you're strumming these chords without muffled strings. With significant time investment, you might successfully play a song.

A person holding down a demanding job would have to carve out two hours a day just to do something minimally competent on the guitar at the end of the year.

This will have significant consequences: You can't socialize with friends. You can't spend time with spouse and children. You're sacrificing career prospects.

It is what it is—you're not gonna play the guitar without putting in the time, and time is very costly. It can't be faked, and it's a particularly gratifying win when it is realized for that reason.""",

    "03_bitcoin_is_harder": """Since the launch of the Bitcoin Core protocol in 2009, more and more people have decided that it is important to understand "this thing."

It turns out that understanding bitcoin is like learning to play multiple instruments at the same time.

Guitar, piano, drums, horns—and you've got to know how they all come together. You also need to learn music theory, how to conduct an orchestra, and understand why music exists in the first place.

Learning bitcoin requires having minimal competence in many disparate fields: Austrian Economics—understanding sound money and time preference. Computer Science—how the protocol and network function. History—monetary history and why bitcoin matters. Mathematics—the cryptographic foundations. Game Theory—network incentives and Nash equilibrium. Cryptography—public and private key infrastructure.

Deciding to "master" bitcoin is accepting a lifetime of study—as well as being likely fated to never completely understand it. The type of person who takes on such a challenge is in quite a predicament.""",

    "04_the_predicament": """It's one thing to tell your wife you'll be a badass rock star in a year or two, but it's quite another to tell her that you're going to be a scholar that nobody appreciates and all of your wealth is going into "magic internet money."

Would you expect anything less from somebody who would devote a large portion of their wealth to this discovery? Would you expect anything less than the pursuit of mastery?

Bitcoin will experience the types of ups and downs that all but a few seasoned investors have the stomach for. The commitment is not for the faint of heart.""",

    "05_why_companies_struggle": """Companies are not used to thinking of time in this way. Yes, they have projects and project managers, and governance structures to try to achieve long-term and large ambitions. But these ambitions are ones that require and receive permission.

A company wishing to carry out a five-year project will likely first get permission from their board. This entails buying opinions from management consultants like McKinsey, bankers like JP Morgan and Goldman Sachs, and auditors like EY and PwC.

It requires severance packages to executives who fought the effort and lost, and promoting new executives around the CEO who championed it.

It usually requires an existential problem to get all of the battleships aligned around a single long-term objective.

Here's the fundamental problem: Outside of an existential desire, companies like easy and quick solutions. They think in terms of quarters, not years, and not multiple years.""",

    "06_talent_scarcity": """The timeframe from a person seeing bitcoin as a solution to a problem, and gaining the understanding of bitcoin to have the skill and conviction to successfully implement such a solution, is multi-year—and closer to a human lifetime than a quarter.

Companies which embark on this path will need to develop new optics to determine the success of these efforts. Traditional quarterly metrics won't apply.

Most companies consist of employees who haven't spent more than an hour developing the competent skills to feel any confidence implementing a bitcoin strategy.

Training current staff will take years—if they can be encouraged to learn. Companies can hire bitcoin experts, but we're in the early days.

Arguably, there aren't more than 5,000 people on Earth that have the mastery required to successfully implement institutional bitcoin strategies.

There are no easy answers. Companies need to accept that they won't contribute much to bitcoin for quite a while, but starting today will get them there faster.""",

    "07_closing": """Let's recap what we learned in this chapter.

Mastery takes time—just as learning guitar requires years of dedicated practice, understanding bitcoin requires sustained commitment.

Bitcoin requires multi-disciplinary knowledge—economics, computer science, history, mathematics, game theory, and cryptography.

Companies think in quarters, not years—but bitcoin mastery is closer to a human lifetime than a quarter.

Bitcoin expertise is scarce—arguably fewer than 5,000 people on Earth have the required mastery for institutional implementation.

The only advice: Start today. There are no easy answers, but beginning the journey now will get institutions there faster than waiting.

In the next episode, we'll explore Chapter Five: Bitcoin is a Bearer Asset. We'll examine why this extraordinary property makes bitcoin fundamentally different from everything else.

See you in the next one."""
}


def main():
    generator = AudioGenerator(
        episode_number=EPISODE_NUMBER,
        episode_title=EPISODE_TITLE
    )

    generator.generate_all(SECTIONS)


if __name__ == "__main__":
    main()
