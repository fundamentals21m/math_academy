#!/usr/bin/env python3
"""
ElevenLabs Audio Generator for Episode 14
Bitcoin for Institutions - Pensions

Usage:
    export ELEVENLABS_API_KEY='your-api-key'
    python elevenlabs_generator_ep14.py
"""

import sys
from pathlib import Path

# Add project root to path for imports
sys.path.insert(0, str(Path(__file__).parent.parent))

from audio_generator import AudioGenerator

EPISODE_NUMBER = 14
EPISODE_TITLE = "Pensions"

SECTIONS = {
    "01_cold_open": """"I'd say that there are about six minutes left in the game, and it is time to pull the goalie. Bitcoin is ready."

Pensions are the king when it comes to OPM expertise. By OPM, I mean "Other People's Money." Everybody is an expert on how to manage other people's money, and nothing brings out people's greatest and wildest ideas like pensions.

There is very little written about pensions that is truly original—but as an actuary with 30 years of experience who understands both pensions and bitcoin deeply, some insights can be offered.""",

    "02_tax_advantage": """There is one juicy apple to pick from the tree of institutional finance: tax-qualified pension plans don't ever pay capital gains tax on their investments.

This is a known advantage that pension plans exploit by loading their trusts with equities.

What hasn't been done: Companies loading their pension trusts with bitcoin or bitcoin proxies, hoping to exploit their ability to enjoy bitcoin's superior returns, tax-free, over a significantly long time horizon.

What should happen: Companies starting new qualified pension plans to accumulate bitcoin tax-free. Outside of a Roth IRA, there aren't really any other ways to accumulate bitcoin gains on a tax-free basis.

It would make sense for owners of small companies—under 100 employees—to offer a defined benefit plan and maximize their contributions in bitcoin.""",

    "03_pension_failures": """Considering that some pension plans invested in criminal crypto enterprises, one would think that putting some small allocation into actual bitcoin would be obvious.

Ontario Teachers Pension Plan invested $100 million in FTX. Result: Bankrupt, CEO in prison.

CDPQ invested $150 million in Celsius. Result: Bankrupt, CEO in prison.

The irony is painful. Major pension funds invested hundreds of millions in fraudulent crypto enterprises that are now bankrupt with executives in prison—yet they hesitate to allocate even small amounts to actual bitcoin.""",

    "04_pulling_goalie": """In 2018, Aaron Brown—author of "Poker Face of Wall Street"—co-wrote a paper with Clifford Asness about a strategy called "Pulling the Goalie."

The name comes from hockey—when a team is losing near the end of a game, they pull their goalkeeper to add an extra attacker.

Compare this to football's "Hail Mary" with a success rate of about 8%—a desperate move with nearly no likelihood of success. Pulling the goalie has a success rate of 18 to 20%—more than double.

The key insight from the paper: "The most basic lesson is to make sure you are thinking about the right risk. Pulling the goalie actually reduces the risk of losing the game—it's an insurance move."

A key determinant of whether it pays to pull the goalie is how much time is left in the game. It made sense to pull the goalie with six minutes left—an uncomfortably long time that seems unintuitive but maximizes winning probability.""",

    "05_application_to_pensions": """Pensions are in need of a strategy that increases volatility, and bitcoin is the perfect solution.

There isn't much more that should be said as far as allocation goes—it should be 100% given that pensions are a medium-term problem, and most will outlive the next two bitcoin halving cycles—that's eight years.

Pensions are not a long-term issue nor impending doom. Most will survive at least eight more years.

There are only so many more bailouts available. Given the state of fiat money, we shouldn't be overconfident in pensions' lifespan.

There are about six minutes left in the game. Bitcoin is ready. The volatility increase is actually the correct risk measure for winning.

Pensions need to think about the right risk—not volatility of returns, but probability of meeting their obligations.""",

    "06_recommendations": """Here are specific recommendations for pension managers.

Embrace what BlackRock will do—leverage their bitcoin ETF and mutual fund infrastructure.

Offer bitcoin in NQDC—Non-Qualified Deferred Compensation plans can include bitcoin.

Utilize Enhanced Funds—use funds enhanced with bitcoin, consider higher allocations.

Avoid shorts in hedges—don't be unintentionally short bitcoin exposure.

Utilize structured credit arbitrage—take advantage of bitcoin as collateral opportunities.

Build robust self-custody operations—use BlackRock ETF while developing internal capabilities.

Create a 10-year termination plan—work toward pension termination over maximum 10 years.

Utilize the PBGC Put—knowing executives are taken care of with NQDC.""",

    "07_closing": """Let's recap what we learned in this chapter.

Tax-qualified pensions don't pay capital gains tax—a massive advantage for accumulating bitcoin gains over long time horizons.

Small employers should consider new pension plans as a tax-advantaged vehicle for bitcoin accumulation.

"Pulling the goalie" is the right analogy—increasing volatility through bitcoin actually reduces the risk of not meeting obligations.

There are six minutes left in the game—there are limited bailouts remaining, and pensions need to act now.

100% allocation is justified for pensions that will survive the next two halving cycles—eight years.

In the final episode, we'll explore the Epilogue—metrics and frameworks needed for institutions to successfully adopt bitcoin long-term.

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
