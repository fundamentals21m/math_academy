#!/usr/bin/env python3
"""
ElevenLabs Audio Generator for Episode 2
Bitcoin for Institutions - HODL'ing Bitcoin is Irrational

Usage:
    export ELEVENLABS_API_KEY='your-api-key'
    python elevenlabs_generator_ep02.py
"""

import sys
from pathlib import Path

# Add project root to path for imports
sys.path.insert(0, str(Path(__file__).parent.parent))

from audio_generator import AudioGenerator

EPISODE_NUMBER = 2
EPISODE_TITLE = "HODL'ing Bitcoin is Irrational"

SECTIONS = {
    "01_cold_open": """"The crux of the matter is the notion that HODL'ing is an irrational and unreasonable act, or at least requires a willful ability to be irrational or unreasonable."

It might seem odd to begin a book about institutional Bitcoin with a section titled "Bitcoin is for Individuals." But this foundation is critical to any organization that aspires to use Bitcoin successfully.

Many have tried, and few have succeeded.""",

    "02_the_graveyard": """The very short history of Bitcoin has many examples of institutions that have either perished or brought themselves to the brink of destruction trying to offer consumer products.

Their failures share common themes.

First: Products that didn't have the structural integrity to withstand Bitcoin's volatility.

Second: Products that didn't respect the constraints of Bitcoin.

Third: Products that went against the natural order of human action.

Consider the graveyard of Bitcoin institutions. Exchanges like Mt. Gox and FTX failed due to custody failures and fraud. Yield products like Celsius, BlockFi, and Anchor collapsed from unsustainable yield promises. Altcoins like TERRA/LUNA, BSV, and BCash proved to be failed hard forks and ponzi schemes. Custodians like Prime Trust fell to mismanagement of client assets.

All of these companies' failures took down large chunks of the industry and did a lot to slow the worldwide adoption of Bitcoin.""",

    "03_why_hodling_is_irrational": """The author realized how distinct a human act it was to HODL Bitcoin—Holding On for Dear Life—when considering whether some Artificial Intelligence could ever buy, sell, or HODL it.

Even amongst humans, the vast majority of bitcoin that has ever been acquired has changed hands several times over. If humans have a hard time hanging on to their bitcoin, why would AI be any different?

Here's the core insight: HODL'ing requires a willful ability to be irrational or unreasonable.

This ability is difficult to model into software, and even more difficult to execute through corporate or institutional governance, where reputations are built and destroyed at these crucial points.""",

    "04_human_action": """Human action is based on an individual's unique set of circumstances at a given moment—specifically, the largest source of dissatisfaction that can be removed at the lowest cost.

This is the water/diamond paradox: a person would forgo all the diamonds in the world for their first glass of water.

At an institutional level, the decision to remove the largest source of dissatisfaction stems from the human beings who have the power, and their particular source of pain.

Theoretically—and legally—corporate governors are bound by a fiduciary duty to deliver profits to shareholders. However, in practice, other incentives often prove more powerful.

Consider job security—keeping their job is often a more powerful incentive than maximizing shareholder value. External pressure from activist investors and political forces can override profit motives. And short-term thinking driven by quarterly reporting cycles creates pressure to show immediate results rather than long-term value creation.""",

    "05_case_studies": """In 2020, two companies—MicroStrategy (now Strategy) and Tesla—made the bold move to put bitcoin on their balance sheet.

Neither was in the S&P 500. Both were extensions of an individual who believed in bitcoin: Michael Saylor and Elon Musk.

The outcomes were dramatically different.

Strategy continued accumulating bitcoin aggressively. They now have a nearly 100 billion dollar market capitalization. They await S&P 500 entry despite meeting the criteria. They demonstrate long-term HODL commitment.

Tesla initially purchased bitcoin for treasury. They exited their position shortly after S&P 500 inclusion. Their experience demonstrates institutional pressure to sell—and shows the limits of corporate bitcoin holding.

This contrast perfectly illustrates why institutional Bitcoin holdings require a dominant individual to succeed.""",

    "06_misguided_hopes": """Many bitcoiners are waiting for mega-companies like Apple or Facebook to put bitcoin on their balance sheet. Some think governments will get into the game. Others are waiting for pensions and endowments to commit asset allocation to bitcoin.

They are all misguided.

Even bitcoin institutions like publicly traded mining companies eventually succumb to the pressure of selling their bitcoin. The structural incentives of institutional governance work against long-term bitcoin holding.

El Salvador is the nation with the most aggressive strategy to publicly accumulate and use bitcoin. President Bukele has a superior understanding of both bitcoin and his country. But even with all of this in place, we don't know what El Salvador will look like when Bukele is no longer the president.

Countries can have a longer time horizon than companies. However, most nations are unable to develop a long horizon and end up endlessly borrowing from the IMF and World Bank. Western democracies have generally short time horizons as leaders are elected every few years.""",

    "07_closing": """Let's recap what we learned in this chapter.

Bitcoin is peer-to-peer. It is a cash system designed for individuals, and companies are always an individual acting on their behalf.

HODL'ing is irrational—it requires a willful ability to resist selling pressure that institutions are structurally incapable of.

Institutional failures in bitcoin—FTX, Celsius, and others—share common themes of not respecting bitcoin's nature.

Corporate balance sheet holdings require a dominant individual—like Saylor—to overcome institutional pressure to sell.

BlackRock's ETF may be the vehicle that finally brings institutional bitcoin exposure—by making it indirect and almost invisible.

In the next episode, we'll explore Chapter Two: Bitcoin Requires a Deflationary Mindset. We'll examine why Bitcoin's fixed supply creates unique challenges for institutions accustomed to inflationary thinking.

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
