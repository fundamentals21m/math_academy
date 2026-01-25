#!/usr/bin/env python3
"""
LinkedIn Post Generator for Bitcoin for Institutions

Generates 45 LinkedIn posts (3 per episode) from episode transcripts:
- Type A: Key insight/quote with episode link
- Type B: Contrarian take (thought-provoking statement)
- Type C: Question to drive engagement + episode link

Usage:
    python linkedin_generator.py

Output:
    bfi_youtube/social/linkedin_posts/ep{N}_post_{type}.md
"""

import os
import re
from pathlib import Path
from dataclasses import dataclass
from typing import List, Dict

# Configuration
BASE_DIR = Path(__file__).parent.parent
CAPTIONS_DIR = BASE_DIR / "captions"
OUTPUT_DIR = BASE_DIR / "social" / "linkedin_posts"
COURSE_URL = "https://bfi-liart.vercel.app"
BOOK_URL_AMAZON = "https://www.amazon.com/Bitcoin-Institutions-Brian-Hirschfield/dp/B0FCZHXFGS/"
BOOK_URL_BTC = "https://zeuspay.com/btc-for-institutions"
YOUTUBE_PLAYLIST = "https://www.youtube.com/playlist?list=YOUR_PLAYLIST_ID"  # Update with actual playlist

# Episode metadata
EPISODES = [
    {"num": 1, "title": "Introduction", "theme": "Bitcoin favors individuals", "part": 1},
    {"num": 2, "title": "HODL'ing Bitcoin is Irrational", "theme": "Institutional failure patterns", "part": 1},
    {"num": 3, "title": "Bitcoin Requires a Deflationary Mindset", "theme": "Mental shift required", "part": 1},
    {"num": 4, "title": "Bitcoin Custody Requires Higher Understanding", "theme": "Not your keys, not your coins", "part": 1},
    {"num": 5, "title": "Bitcoin Requires More Patience and Time", "theme": "Time preference advantages", "part": 1},
    {"num": 6, "title": "Bitcoin is a Bearer Asset", "theme": "Digital bearer instruments", "part": 1},
    {"num": 7, "title": "Bitcoin Users Value Privacy", "theme": "Privacy vs transparency", "part": 1},
    {"num": 8, "title": "Strategy (Balance Sheet Strength)", "theme": "Saylor's conviction", "part": 2},
    {"num": 9, "title": "BlackRock (Redefining Portfolio Construction)", "theme": "Fink's evolution", "part": 2},
    {"num": 10, "title": "Deferred Compensation", "theme": "Retirement planning", "part": 3},
    {"num": 11, "title": "Mutual Funds / ETFs", "theme": "ETF revolution", "part": 3},
    {"num": 12, "title": "Treasury / Balance Sheet", "theme": "Corporate treasury", "part": 3},
    {"num": 13, "title": "Structured Credit", "theme": "Credit products", "part": 3},
    {"num": 14, "title": "Pensions", "theme": "Long-term horizons", "part": 3},
    {"num": 15, "title": "Epilogue (Metrics and Frameworks)", "theme": "Actionable frameworks", "part": 3},
]

# LinkedIn-optimized quotes and insights for each episode
# These are manually curated from the transcripts for maximum engagement
EPISODE_CONTENT = {
    1: {
        "quote": "The power of Bitcoin as capital is fundamentally determined by its owner. Under a system of hard money, capital flows into the strongest and most capable hands.",
        "contrarian": "Bitcoin is NOT for institutions. That's the first thing any institution needs to understand to use Bitcoin successfully.",
        "question": "Does ownership change Bitcoin's properties? Surprisingly, yes. The power of capital depends on WHO holds it, not just HOW MUCH.",
    },
    2: {
        "quote": "HODL'ing requires willful irrationality that institutions cannot model. Every corporate governance structure is built to prevent exactly this kind of behavior.",
        "contrarian": "HODL'ing is irrational. That's not an insult—it's the point. Rationality is what destroyed FTX, Celsius, and Mt. Gox.",
        "question": "Why did the vast majority of institutional Bitcoin holders fail? They were too rational.",
    },
    3: {
        "quote": "Bitcoin's fixed supply requires a complete mental shift. You can't think in fiat terms and succeed with Bitcoin.",
        "contrarian": "Your accountant's spreadsheet is lying to you. Every institutional reporting framework was built for inflationary money.",
        "question": "Can you think in Bitcoin terms? Most institutions can't. Quarterly reporting creates structural barriers to a deflationary mindset.",
    },
    4: {
        "quote": "Not your keys, not your coins. Every custody solution involves tradeoffs—the question is which risks you're willing to accept.",
        "contrarian": "Institutional custody is a contradiction in terms. The moment you add intermediaries, you've negated Bitcoin's core value proposition.",
        "question": "Is self-custody realistic for institutions? The answer reveals why individuals have structural advantages.",
    },
    5: {
        "quote": "Low time preference individuals outperform in Bitcoin. Quarterly reporting creates high time preference by design.",
        "contrarian": "Bitcoin's 4-year halving cycle is longer than most executives' tenure. That's not a bug—it's a filter.",
        "question": "Can institutions really have a 10+ year time horizon? Or is 'long-term institutional thinking' an oxymoron?",
    },
    6: {
        "quote": "Bitcoin is the first digital bearer asset. Whoever controls the private keys controls the Bitcoin—no intermediary required.",
        "contrarian": "Bearer assets were supposed to be extinct. Then Bitcoin created the first digital bearer instrument.",
        "question": "What does it mean that Bitcoin settles finally and irreversibly? For institutions built on reversible transactions, this changes everything.",
    },
    7: {
        "quote": "Privacy is not secrecy—it's selective disclosure. Institutions face transparency requirements that often conflict with Bitcoin's value proposition.",
        "contrarian": "Privacy and compliance aren't opposites. Understanding this distinction separates successful institutional adoption from failure.",
        "question": "Can institutions balance regulatory transparency with Bitcoin's privacy model? Part 1 concludes with this essential tension.",
    },
    8: {
        "quote": "Only dominant individuals like Saylor can overcome institutional pressure. Strategy's success proves that individuals run institutions.",
        "contrarian": "MicroStrategy's Bitcoin strategy shouldn't work. Every MBA textbook says it's wrong. That's why it worked.",
        "question": "How did one individual transform a struggling software company into a Bitcoin powerhouse? The answer: corporate governance be damned.",
    },
    9: {
        "quote": "IBIT became the fastest-growing ETF in history. The same Larry Fink who called Bitcoin an 'index of money laundering' now runs it.",
        "contrarian": "BlackRock's Bitcoin ETF makes Bitcoin 'invisible' to institutions. That's the feature, not the bug.",
        "question": "What changed Larry Fink's mind on Bitcoin? The answer reveals how individuals—not committees—drive institutional adoption.",
    },
    10: {
        "quote": "Deferred compensation aligns long-term incentives with Bitcoin. Various vehicles—401(k), IRA, deferred bonuses—enable institutional exposure.",
        "contrarian": "Want Bitcoin exposure without corporate drama? Start with your retirement account. Most people can do this TODAY.",
        "question": "Is Bitcoin in a 401(k) still Bitcoin? For individuals within institutions, deferred comp may be the optimal path.",
    },
    11: {
        "quote": "ETFs enable 'invisible' institutional exposure. Fee wars between IBIT, FBTC, and ARKB benefit all investors.",
        "contrarian": "ETFs are training wheels for institutions. But some institutions will never take them off—and that's okay.",
        "question": "Spot vs futures ETFs: which is right for institutional portfolios? The answer determines whether you're getting Bitcoin or Bitcoin exposure.",
    },
    12: {
        "quote": "Treasury allocation requires board support. FASB 2023 changes how Bitcoin appears on balance sheets—for better and worse.",
        "contrarian": "Strategy's approach isn't replicable for most companies. That's the uncomfortable truth about corporate Bitcoin.",
        "question": "Can your company hold Bitcoin on its balance sheet? The checklist is shorter—and harder—than you think.",
    },
    13: {
        "quote": "Convertible notes provide asymmetric exposure. Bitcoin-backed lending requires overcollateralization—the failures of Celsius and BlockFi prove why.",
        "contrarian": "Yield on Bitcoin is a red flag. Every 'Bitcoin yield product' has either failed or will fail.",
        "question": "Is structured credit the safe path to Bitcoin exposure? Only if you understand why every yield product failed.",
    },
    14: {
        "quote": "Pension time horizons align with Bitcoin's thesis. Wisconsin Investment Board pioneered pension Bitcoin—more will follow.",
        "contrarian": "Pension funds have the perfect time horizon for Bitcoin. Yet fiduciary duty keeps most on the sidelines.",
        "question": "Should pension funds hold Bitcoin? Their multi-decade horizons make them ideal holders—if regulators allow it.",
    },
    15: {
        "quote": "Part 1: Bitcoin IS for individuals. Part 2: Individuals run institutions. Part 3: Institutional vehicles exist but require careful implementation.",
        "contrarian": "After 15 episodes, here's the uncomfortable conclusion: most institutions shouldn't hold Bitcoin directly. Here's what they should do instead.",
        "question": "What's the institutional path forward? It starts with understanding why Bitcoin favors individuals—then working with that truth, not against it.",
    },
}


@dataclass
class LinkedInPost:
    """Represents a LinkedIn post"""
    episode_num: int
    post_type: str  # 'A', 'B', or 'C'
    content: str
    hashtags: List[str]
    cta: str


def get_utm_link(episode_num: int, post_type: str) -> str:
    """Generate UTM-tagged course link"""
    return f"{COURSE_URL}?utm_source=linkedin&utm_medium=post&utm_campaign=ep{episode_num}&utm_content=type_{post_type.lower()}"


def generate_type_a_post(episode: Dict, content: Dict) -> LinkedInPost:
    """Generate Type A: Key insight/quote post"""
    ep_num = episode["num"]

    text = f"""💡 {content['quote']}

From Episode {ep_num} of Bitcoin for Institutions: "{episode['title']}"

This is Part {episode['part']} of our 15-episode series exploring how institutional investors can approach Bitcoin.

🎓 Take the free interactive course: {get_utm_link(ep_num, 'A')}

📖 Get the book:
• Amazon: {BOOK_URL_AMAZON}
• Buy with Bitcoin: {BOOK_URL_BTC}

What do you think? Does this resonate with your experience?"""

    hashtags = ["#Bitcoin", "#InstitutionalBitcoin", "#BitcoinForInstitutions",
                "#CorporateTreasury", "#BitcoinStrategy"]

    return LinkedInPost(
        episode_num=ep_num,
        post_type='A',
        content=text,
        hashtags=hashtags,
        cta=f"Course: {get_utm_link(ep_num, 'A')}"
    )


def generate_type_b_post(episode: Dict, content: Dict) -> LinkedInPost:
    """Generate Type B: Contrarian take post"""
    ep_num = episode["num"]

    text = f"""🔥 Contrarian take:

{content['contrarian']}

I explore this idea in Episode {ep_num} of Bitcoin for Institutions.

The series challenges conventional wisdom about institutional Bitcoin adoption—starting with this: Bitcoin was designed for individuals, not institutions.

Understanding this tension is the first step to successful institutional strategy.

Full episode: {get_utm_link(ep_num, 'B')}

Agree? Disagree? I want to hear your perspective."""

    hashtags = ["#Bitcoin", "#ContrarianThinking", "#InstitutionalInvesting",
                "#BitcoinEducation", "#CryptoStrategy"]

    return LinkedInPost(
        episode_num=ep_num,
        post_type='B',
        content=text,
        hashtags=hashtags,
        cta=f"Episode link: {get_utm_link(ep_num, 'B')}"
    )


def generate_type_c_post(episode: Dict, content: Dict) -> LinkedInPost:
    """Generate Type C: Question/engagement post"""
    ep_num = episode["num"]

    text = f"""❓ {content['question']}

I tackle this question in Episode {ep_num}: "{episode['title']}"

Part of the Bitcoin for Institutions series—15 episodes breaking down how institutions can (and can't) approach Bitcoin.

🎬 Watch: {get_utm_link(ep_num, 'C')}

Drop your answer below. I'll share my thoughts from the episode."""

    hashtags = ["#Bitcoin", "#InstitutionalAdoption", "#BitcoinQuestions",
                "#FinancialEducation", "#BitcoinDebate"]

    return LinkedInPost(
        episode_num=ep_num,
        post_type='C',
        content=text,
        hashtags=hashtags,
        cta=f"Watch: {get_utm_link(ep_num, 'C')}"
    )


def save_post(post: LinkedInPost, output_dir: Path):
    """Save post to markdown file"""
    filename = f"ep{post.episode_num:02d}_post_{post.post_type.lower()}.md"
    filepath = output_dir / filename

    content = f"""# Episode {post.episode_num} - Post Type {post.post_type}

## Post Content

{post.content}

---

## Hashtags
{' '.join(post.hashtags)}

## CTA
{post.cta}

---

*Generated by linkedin_generator.py*
"""

    with open(filepath, 'w') as f:
        f.write(content)

    return filepath


def main():
    """Generate all 45 LinkedIn posts"""
    # Create output directory
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    posts_created = 0

    for episode in EPISODES:
        ep_num = episode["num"]
        content = EPISODE_CONTENT.get(ep_num, {})

        if not content:
            print(f"Warning: No content for episode {ep_num}")
            continue

        # Generate all three post types
        posts = [
            generate_type_a_post(episode, content),
            generate_type_b_post(episode, content),
            generate_type_c_post(episode, content),
        ]

        for post in posts:
            filepath = save_post(post, OUTPUT_DIR)
            print(f"Created: {filepath.name}")
            posts_created += 1

    print(f"\n✅ Generated {posts_created} LinkedIn posts in {OUTPUT_DIR}")
    print(f"\nNext steps:")
    print(f"1. Review and customize posts in {OUTPUT_DIR}")
    print(f"2. Schedule posts using your preferred tool (Buffer, Hootsuite, etc.)")
    print(f"3. See posting_schedule.md for recommended timing")


if __name__ == "__main__":
    main()
