#!/usr/bin/env python3
"""
ElevenLabs Audio Generator for Episode 11
Bitcoin for Institutions - Mutual Funds / ETFs

Usage:
    export ELEVENLABS_API_KEY='your-api-key'
    python elevenlabs_generator_ep11.py
"""

import sys
from pathlib import Path

# Add project root to path for imports
sys.path.insert(0, str(Path(__file__).parent.parent))

from audio_generator import AudioGenerator

EPISODE_NUMBER = 11
EPISODE_TITLE = "Mutual Funds / ETFs"

SECTIONS = {
    "01_cold_open": """"Using bitcoin in funds is the most obvious and non-thinking way for a fund, their investors, and their investors' shareholders to sleepwalk their way to unimaginable wealth."

Despite being declared dead many times by mainstream media, declared useless by respected economists, and called "only useful to money launderers" by Larry Fink, bitcoin closed 2024 near all-time highs.

Ordinary people who simply held bitcoin outperformed every hedge fund, mutual fund, and special purpose fund.""",

    "02_professional_embarrassment": """If you are a mutual fund manager reading this and your company still isn't offering bitcoin, you must wonder what they're doing. What are all of those employees actually doing all day?

There are tens, maybe hundreds of thousands of ordinary people—most of whom would never pass the hiring process of any investment company—who have massively outperformed every professional fund manager simply by buying and holding bitcoin.

Bitcoin's 16-year return history makes it the best-performing asset class in history, despite massive drawdowns along the way. Professional money managers who ignored it have significant explaining to do.""",

    "03_small_allocations": """Research consistently shows that even small allocations to bitcoin can dramatically improve portfolio metrics.

A traditional 60/40 portfolio with zero bitcoin might return 8% with a Sharpe ratio of 0.53.

Add just 1% bitcoin and you're looking at over 9% returns with a Sharpe ratio of 0.60.

At 2% allocation, you're over 10% returns with a Sharpe ratio of 0.66.

At 5%, you're at 14% returns with a Sharpe ratio of 0.80.

The improvement in risk-adjusted returns is remarkable for such small allocations. The volatility increase is modest, but the return improvement is substantial.""",

    "04_fiduciary_shift": """The traditional concern is that fiduciaries face liability for including bitcoin and experiencing drawdowns. But the calculus is shifting.

The old view: "We can't include bitcoin because if it drops 50%, we'll be sued."

The new view: "If we don't include bitcoin and it 10x's while our competitors include it, we'll be sued for NOT including it."

Bitcoin drawdowns are temporary—historically always recovering to new highs. But missing bitcoin's appreciation is permanent. Fiduciaries face greater long-term risk from exclusion than inclusion.""",

    "05_hidden_shorts": """Many funds have unintentional short exposure to bitcoin through their positions.

Banks compete with bitcoin for the store-of-value function. Payment processors compete with bitcoin's payment rails. Fiat currencies are in direct competition for the monetary premium. Long-duration bonds serve the same role as a monetary hedge. Gold miners are in direct competition as hard money.

If your fund holds these assets without bitcoin exposure, you may be structurally short bitcoin even without intending to be.""",

    "06_target_date_funds": """Target date funds represent the single largest opportunity for bitcoin integration.

They hold trillions in assets—even 1% bitcoin allocation would create massive demand.

Young workers have 30 to 40-year horizons—perfect for bitcoin's volatility profile.

Target date fund investors are passive—they won't panic sell during drawdowns because they don't watch daily prices.

And the structure naturally rebalances, selling high and buying low over time.

These "set it and forget it" funds for retirement savers could include bitcoin in their equity allocation with minimal friction.""",

    "07_closing": """Let's recap what we learned in this chapter.

Ordinary bitcoin holders outperformed every professional fund—fund managers who ignored bitcoin have explaining to do.

Small allocations generate significant alpha—even 1 to 2% bitcoin can meaningfully improve portfolio Sharpe ratios.

Fiduciary risk is shifting—the greater liability may now be from NOT including bitcoin rather than including it.

Don't be unintentionally short bitcoin—holdings in banks, payment processors, and bonds may create hidden short exposure.

Target date funds are the biggest opportunity—trillions in assets with long horizons and passive investors.

In the next episode, we'll explore Treasury and Balance Sheet strategies—how companies can use bitcoin treasuries beyond just holding for appreciation.

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
