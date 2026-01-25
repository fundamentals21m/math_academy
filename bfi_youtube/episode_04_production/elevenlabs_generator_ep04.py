#!/usr/bin/env python3
"""
ElevenLabs Audio Generator for Episode 4
Bitcoin for Institutions - Bitcoin Custody Requires Higher Understanding

Usage:
    export ELEVENLABS_API_KEY='your-api-key'
    python elevenlabs_generator_ep04.py
"""

import sys
from pathlib import Path

# Add project root to path for imports
sys.path.insert(0, str(Path(__file__).parent.parent))

from audio_generator import AudioGenerator

EPISODE_NUMBER = 4
EPISODE_TITLE = "Bitcoin Custody Requires Higher Understanding"

SECTIONS = {
    "01_cold_open": """"Cryptography is ruthless, and there are two types of people in the world — those who have been burned and those who have yet to be."

Everybody is early to bitcoin. It is only sixteen years old, after all. In 2024, stories of bitcoin being lost on hard drives are becoming rarer, but we still see high-profile reports of lost bitcoin in significant amounts.

This chapter explores why custody is perhaps the most critical challenge for institutions.""",

    "02_stories_of_lost_bitcoin": """In 2023, a former Bitcoin Core developer, Luke Dashjr, reportedly lost hundreds of bitcoins in a setup that was supposedly too complicated for anybody to rescue.

These stories are becoming rarer because the hardware available to individuals for self-custody has improved greatly in the past half-decade. Hardware wallets have become extremely intuitive and easy to use.

The only real obstacle to bitcoin self-custody now is one's ability to protect a 12- or 24-word seed phrase.

That ability is no small thing. There are a number of tradeoffs to consider, and the reality is that it takes a long time of mulling through one's personal discomfort before the security of your bitcoin allows you to sleep soundly at night.

The soundest sleepers are those who have the least issue trusting someone to hold their seed for them—but this is backwards and untenable. It's not a foundation for individuals or institutions to build on.""",

    "03_no_bailouts": """Holding bitcoin in self-custody is not like holding fiat for a simple reason: The likelihood of a mistake that makes the bitcoin unspendable is much higher, and there is no bailout possible.

Let me paint you a nightmare scenario for 2030.

Imagine BlackRock's IBIT ETF has acquired 2 million bitcoin on behalf of its users. Bitcoin reaches gold's market capitalization of 20 trillion dollars—that's about one million dollars per bitcoin.

BlackRock's ETF would represent 10% of that value, or two trillion dollars. That's two trillion dollars of value on balance sheets of companies all over the world.

Now imagine we discover that BlackRock cannot sell back that bitcoin because its custodian cannot perform the signatures required to move the keys.

BlackRock loses two trillion dollars. All of their customers have to write down 100% of that value on their balance sheets.

Poof.

Institutions that fail to take custody seriously will not only fail first, but also the most severely—with the potential to take down their industry and a portion of the financial system with them.""",

    "04_the_coinbase_problem": """The world that understands BlackRock knows very little about their custodian, Coinbase. The problems with Coinbase being trusted to hold that much bitcoin should concern everybody greatly.

Let's look at the pros and cons.

On the pro side: Coinbase has been doing custody for a long time. That's about the only item in the pro column.

On the con side: Their custody technology predates best practices developed since the Blocksize War—particularly Segregated Witness, or Segwit. Pre-Segwit addresses are vulnerable to the "transaction malleability" problem that led to the legendary failure of Mt. Gox exchange.

BlackRock spent the majority of the last decade hating bitcoin until 2023. They wanted to fast-track their adoption, choosing speed over security.

When Bitwise made their addresses public, we discovered that Coinbase was holding the bitcoin for the ETF in "pre-Segwit" addresses. The "1" in front of the bitcoin address told us this.

This is now a ticking time bomb on the scenario that in 2030, Coinbase's failure leads to the destruction of two trillion dollars of value.""",

    "05_fidelity_alternative": """Fidelity Investments has a very successful spot bitcoin ETF—FBTC—and, in contrast to BlackRock, they manage all of the custody in-house themselves.

Fidelity has been in bitcoin for a very long time—the majority of the past decade. They understood they could not trust Coinbase with their customers' keys. They understood they couldn't trust any of the "qualified custodians" with their keys.

This gives Fidelity a substantial advantage over BlackRock due to their experience.

Under the current level of opacity, there is no way to know if Fidelity is a more reliable custodian than Coinbase. The only reason we know about Coinbase's technology limitations is because Bitwise made their addresses public and we were able to see the details.""",

    "06_etf_tradeoff": """The larger calculation of the ETF with regard to custody is that companies and individuals who aren't ready to deal with their own self-custody of bitcoin can gain exposure through the ETF.

Here's what the ETF provides: Easy exposure to bitcoin's price volatility. No need to understand self-custody. It fits into existing brokerage accounts. It's a familiar investment vehicle structure.

Here's what the ETF costs: An enormous level of counterparty risk. No ability to verify custody yourself. Dependence on the custodian's competence. And it's not true bitcoin ownership.

While gaining ETF exposure is a rational position for those not ready for self-custody, it does not make for a landscape to provide robust solutions to the public using bitcoin.

The ETF is capable of capturing the volatility of bitcoin's price exposure—but at an enormous level of counterparty risk.""",

    "07_closing": """Let's recap what we learned in this chapter.

Hardware wallets have made self-custody accessible, but the only real obstacle remains one's ability to protect a 12- or 24-word seed phrase.

There is no bailout in bitcoin—mistakes that make bitcoin unspendable are permanent and irreversible.

Institutional custody failures could be catastrophic—potentially destroying trillions in value and taking down the financial system.

Coinbase's legacy technology predates Segwit best practices, creating systemic risk for ETFs using them as custodian.

ETFs provide price exposure but enormous counterparty risk—they are not a substitute for true bitcoin ownership through self-custody.

In the next episode, we'll explore Chapter Four: Bitcoin Requires More Patience and Time Than Institutions Have. We'll examine why understanding bitcoin is like learning multiple instruments at the same time.

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
