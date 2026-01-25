#!/usr/bin/env python3
"""
ElevenLabs Audio Generator for Episode 1
Bitcoin for Institutions - Introduction

Usage:
    export ELEVENLABS_API_KEY='your-api-key'
    python elevenlabs_generator_ep01.py
"""

import sys
from pathlib import Path

# Add project root to path for imports
sys.path.insert(0, str(Path(__file__).parent.parent))

from audio_generator import AudioGenerator

EPISODE_NUMBER = 1
EPISODE_TITLE = "Introduction"

SECTIONS = {
    "01_cold_open": """"When the money used by the world is hard to make and easy to validate, it becomes an exceptional tool for capital accumulation, coordination of trade, and generally aligning the incentives of spenders, savers, entrepreneurs, and planners."

This is the promise of Bitcoin. But can institutions capture this promise? That's the question this series will answer.

Welcome to Bitcoin for Institutions.""",

    "02_introduction": """I'm Brian, and this is Bitcoin for Institutions—an interactive video course exploring how institutional investors can approach the world's largest fixed-supply asset.

Over the next 15 episodes, we'll work through three parts: "Bitcoin is for Individuals," "Individuals Run Institutions," and "Institutional Bitcoin." We'll explore why Bitcoin favors individuals, how key people drive institutional adoption, and specific strategies for institutional Bitcoin exposure.

A note before we begin: This course presents a thesis that Bitcoin is fundamentally designed for individuals, not institutions. Understanding this tension is critical for any organization that aspires to use Bitcoin successfully.

Let's begin.""",

    "03_what_is_bfi": """Is bitcoin not bitcoin? Does its ownership change its properties?

The answer, perhaps surprisingly, is yes. The power of bitcoin as capital is fundamentally determined by its owner.

Under a system of hard money, capital flows into the strongest and most capable hands. Entrepreneurs who make the best capital allocation decisions end up keeping their capital, while those who make poor decisions see their capital flow to those who better meet the demands of the market.

This creates a fundamental asymmetry. Individuals who hold their own keys have full control. They can build circular economies. They have patient, long-term time horizons. They value privacy and sovereignty.

Institutions face structural challenges. Custody requires intermediaries. Quarterly performance pressure drives short-term thinking. Regulatory and compliance constraints limit flexibility. Fiduciary duties override individual conviction.""",

    "04_tyranny_of_soft_money": """Money "by decree" is no different from that which is counterfeit.

No group of humans in history with the power to print money has ever proven itself capable of resisting the temptation to do so.

From the earliest traders with glass beads, through the coin-clipping Roman emperors, to the counterfeiting politicians and central bankers of today—the pattern repeats endlessly.

A decree that cannot be resisted is considered tyranny.

Bitcoin frees individuals from a kind of tyranny that most people don't realize exists. By creating money that cannot be debased by decree, Bitcoin enables individuals to preserve the fruits of their labor across time—a capability that was previously available only to those with access to scarce physical assets like gold or land.""",

    "05_power_of_capital": """It is a misconception that the game is to build the biggest stack.

The game is to accumulate the most powerful form of capital.

While all bitcoin is treated as fungible, the truth is that the power of the capital is determined by its owner.

Strong holders—those with earning potential and value-add capabilities—have more optionality and power with their bitcoin.

Bitcoin holders who build circular economies and trading networks create more powerful capital than passive accumulators.

Even dedicated institutions like Strategy will act like individuals with limited power in the Bitcoin economy.

This is the first insight institutions must grasp: the quantity of bitcoin matters less than the quality of the holder.""",

    "06_course_structure": """This course is organized into three parts, progressing from the fundamental nature of Bitcoin to specific institutional strategies.

Part One: Bitcoin is for Individuals. We'll explore why individuals have structural advantages over institutions in holding Bitcoin. Topics include why HODL'ing is irrational, the deflationary mindset, custody tradeoffs, time preference, bearer asset properties, and privacy.

Part Two: Individuals Run Institutions. We'll examine how key individuals drive institutional adoption, focusing on Michael Saylor's Strategy and BlackRock's transformation under Larry Fink.

Part Three: Institutional Bitcoin. We'll cover specific use cases—deferred compensation, ETFs, treasury management, structured credit, and pensions—culminating in frameworks for institutional Bitcoin exposure.

Each episode builds on the previous, creating a comprehensive understanding of Bitcoin from an institutional perspective.""",

    "07_key_concepts": """Before diving into the chapters, let's establish five foundational concepts.

First: Hard Money. Money that is difficult to produce and easy to verify, enabling capital accumulation and rational economic calculation. Bitcoin is the hardest money ever created—with a fixed supply cap of 21 million and global, instant verifiability.

Second: Bearer Asset. An asset that grants ownership to whoever possesses it, without requiring any intermediary to validate the claim. Bitcoin is a digital bearer asset—whoever controls the private keys controls the bitcoin.

Third: Circular Economy. An economic system where goods and services are exchanged directly for Bitcoin without converting back to fiat currency. Individuals who build circular economies have more powerful Bitcoin than those who simply accumulate.

Fourth: Counterparty Risk. The risk that another party in a financial transaction will fail to fulfill their obligations. Institutional Bitcoin often introduces counterparty risks that self-custody eliminates.

Fifth: Time Preference. The relative valuation placed on present goods versus future goods. Individuals typically have lower time preference than institutions, giving them an advantage in holding Bitcoin long-term.""",

    "08_closing": """Let's recap what we covered in this introduction.

Bitcoin empowers individuals in ways that institutions cannot fully replicate due to structural constraints.

The power of bitcoin as capital depends on its owner—not just the quantity held.

Hard money enables capital to flow to those who make the best allocation decisions.

Soft money—fiat currency—represents a form of tyranny that Bitcoin seeks to address.

Institutions must understand why individuals value bitcoin to successfully integrate it into their strategies.

In the next episode, we'll examine Chapter One: HODL'ing Bitcoin is Irrational. We'll explore why the rational approach to Bitcoin may not be what you think, and why institutional failures like FTX and Celsius share common themes.

If you found this helpful, subscribe and check out the interactive course at the link in the description.

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
