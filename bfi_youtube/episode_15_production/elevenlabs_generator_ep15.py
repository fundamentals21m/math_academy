#!/usr/bin/env python3
"""
ElevenLabs Audio Generator for Episode 15
Bitcoin for Institutions - Epilogue (Metrics and Frameworks)

Usage:
    export ELEVENLABS_API_KEY='your-api-key'
    python elevenlabs_generator_ep15.py
"""

import sys
from pathlib import Path

# Add project root to path for imports
sys.path.insert(0, str(Path(__file__).parent.parent))

from audio_generator import AudioGenerator

EPISODE_NUMBER = 15
EPISODE_TITLE = "Epilogue (Metrics and Frameworks)"

SECTIONS = {
    "01_cold_open": """"If bitcoin is going to help the current financial system transcend the problems of previous systems, then institutions that wish to utilize it are going to need to develop optics and metrics that demonstrate success and failure."

After 30 years as an actuary—determining investment strategies for pensions, running hedging operations, and explaining P&L performance for guaranteed annuities—my career has followed a trajectory that fits perfectly with the moment we find ourselves in with bitcoin.

The lessons learned from institutional failures apply directly to bitcoin adoption today.""",

    "02_ldi_story": """In 2003, a mentor came up with a novel idea about how to manage pensions that would become known as Liability Driven Investing, or LDI.

The message was clear: investment returns aren't the key driver of a pension's ability to meet its liabilities—protection against rates dropping is.

Liabilities had large exposures to rates but very small exposures to equities. Equity returns were prioritized because of a confluence of incentives, and those with executives' ears were ignorant of the risks we were illustrating.

This is the most pertinent parallel to where we are today with bitcoin—the ruthless intractability of institutional incentives.

LDI became very popular in the UK, but companies that offset liability increases with investment gains ultimately leveraged them via borrowing, causing the very Bank of England bailout that demonstrated the system's fragility.""",

    "03_inadequate_reporting": """The agency problem that caused US corporate pensions to willfully ignore LDI was driven by inadequate reporting. This will be a common theme for all companies regarding bitcoin.

Pension managers only saw asset returns from investment consultants. Everything was in an "asset-only framework" that defined benchmarks, strategies, and the goal of "beating the S&P 500."

But beating the S&P by 50 basis points when it returns negative 20% doesn't help the pension at all. Without liability-integrated reporting, managers couldn't see this truth.

A CFO telling the CEO "the pension is doing great" when bonds lost 30% was too much career risk—even if liabilities also dropped 30%.

The market doesn't know how to value Strategy—MSTR—because they don't know how to associate value with their bitcoin treasury. Same problem, new asset.""",

    "04_bad_accounting": """The accounting standards FAS87 and FAS132 will go down in history as one of the great unintended consequences ever.

Companies could assume an 8% return regardless of actual performance, taking a direct credit toward earnings. Bad years were amortized over 15-plus years, masking the true impact of underperformance.

CFOs derived bonuses from these earnings and were obstinately unwilling to put them at risk. The tail wagged the dog—equity-heavy strategies were chosen to hit 8% regardless of liability exposure.

Just as these standards derailed pension reform, the goodwill treatment of bitcoin dissuaded companies from substantial balance sheet allocations—until FASB fixed it with mark-to-market treatment.""",

    "05_new_metrics": """If bitcoin is going to help the current financial system transcend the problems of previous systems, institutions will need to develop new optics and metrics.

Pensions need to measure overall funded status or projected time to termination—not just asset returns.

Corporate Balance Sheets need a redefinition of balance sheet strength emphasizing future value over present value.

Structured Credit needs a redefinition of credit quality factoring in bitcoin's impact on subordination and seniority.

Asset Managers like BlackRock need to track clients' overall allocation to bitcoin.

In the absence of these new optics, any institution's efforts to take advantage of bitcoin will be temporary, and they will be no more resilient to a calamity than they were before their participation in the space.""",

    "06_summary": """Let me summarize the key lessons from this entire series.

For investors: Bitcoin is the greatest performing asset in history despite drawdowns. Drawdowns are structural and have always recovered to all-time highs. Small allocations cause significant outperformance. Don't be unintentionally short bitcoin.

For fiduciaries: Fiduciary liability exposure exists from NOT offering bitcoin. Drawdowns are short, returns are enduring. You're more likely to face a lawsuit for lack of returns than drawdown losses.

For executives: You don't need to hold bitcoin on treasury to benefit. Less risky options include NQDC and selling into rising markets. You can lower operating costs without balance sheet risk.""",

    "07_final_thoughts": """The lessons from three decades of institutional finance are clear: incentives matter more than logic, reporting frameworks determine strategy, and accounting standards can derail even the most sensible reforms.

Bitcoin represents the opportunity to transcend these systemic failures—but only if institutions develop the right frameworks for measuring success. Without new metrics that capture bitcoin's unique properties, institutional adoption will remain temporary and fragile.

For those who want to dive deeper, I recommend The Bitcoin Standard by Saifedean Ammous, Broken Money by Lyn Alden, Bitcoin is Venice by Allen Farrington and Sacha Meyers, and Atlas Shrugged by Ayn Rand.

For podcasts, check out The Reorg, The Path to Bitcoin, The Block Reward, and Rock Paper Bitcoin.

For consulting services through Actuarial Bitcoin Advisors, reach out on Twitter at Fundamentals21m or email bh1r@pm.me.""",

    "08_closing": """This concludes Bitcoin for Institutions.

Thank you for watching this series. I hope it has provided valuable frameworks for thinking about bitcoin from an institutional perspective.

The key takeaways: Bitcoin is fundamentally for individuals—but individuals run institutions. Understanding this tension is critical for success.

Institutional resistance is ruthless—but it can be overcome with the right metrics, the right frameworks, and the right individuals driving change.

The opportunity is real—but only for those who develop proper institutional frameworks.

Subscribe for more content, and check out the interactive course at the link in the description.

I'm Brian Hirschfield. Until next time."""
}


def main():
    generator = AudioGenerator(
        episode_number=EPISODE_NUMBER,
        episode_title=EPISODE_TITLE
    )

    generator.generate_all(SECTIONS)


if __name__ == "__main__":
    main()
