#!/usr/bin/env python3
"""
ElevenLabs Audio Generator for Episode 6
Bitcoin for Institutions - Bitcoin is a Bearer Asset

Usage:
    export ELEVENLABS_API_KEY='your-api-key'
    python elevenlabs_generator_ep06.py
"""

import sys
from pathlib import Path

# Add project root to path for imports
sys.path.insert(0, str(Path(__file__).parent.parent))

from audio_generator import AudioGenerator

EPISODE_NUMBER = 6
EPISODE_TITLE = "Bitcoin is a Bearer Asset"

SECTIONS = {
    "01_cold_open": """If you are a typical institution wanting to use bitcoin, chances are that you are unfamiliar with bearer assets. You may be wondering why you are even reading about them.

A lot of the confusion that exists around bitcoin stems from the extraordinary property that it has of being a bearer asset.

This property is what makes bitcoin fundamentally different from every other financial instrument.""",

    "02_what_is_bearer_asset": """A bearer asset is a type of financial asset where ownership is determined by physical possession, rather than by registration or the holder's identity.

In the past, traditional bearer assets included cash, because back in the gold standard era, cash represented a claim on the Central Bank gold reserve.

The key characteristic of these assets was that whoever physically held cash could claim the value it represented.

However, in modern times, cash is no longer considered a bearer asset because it no longer means a direct claim on gold or any other asset.

Bitcoin can be viewed as a bearer asset due to its ownership model. Ownership of bitcoin is established through the possession of private keys, which allow the holder to control and transfer the bitcoin associated with a specific address.

Unlike traditional bearer assets, bitcoin does not represent a claim on any other asset. Instead, it is a digital asset directly owned and controlled by the key holder. This digital form of bearer asset emphasizes the importance of securing private keys.""",

    "03_physical_bearer_problems": """The key feature of a bearer asset is that its ownership is entirely determined by physical possession. This property exists with other assets like gold and silver, but the cost of custodying a bearer asset with a physical form is prohibitively expensive.

Consider security costs: Depending on how much you have, you might need a military to secure it. The value must justify the costs of defending it.

Consider validation costs: Even if secured, it's extremely expensive to prove its existence and authenticity. Gold bars need to be melted down and assayed. Gold and silver bars must be verified to ensure they are not just gold-plated tungsten.

The one benefit: When legal structures break down in society, these assets don't require institutions to retain their value.

Compare these three bearer assets. Gold and silver require physical vaults, possibly military protection. Validation requires melting and assaying. They're heavy and can be seized.

Cash before 1971 could be stored in banks or safes. Validation was relatively easy. It represented a claim on gold.

Bitcoin requires only a 12-24 word seed phrase. Validation is trivial—just a digital signature. And unlimited value can be stored in your mind.""",

    "04_rise_and_fall_of_cash": """Banks were born to secure and validate gold. Prior to Nixon's closing of the gold window in 1971, cash was considered to be a bearer asset because it represented a claim on gold owned by the central bank without the need to prove ownership outside of possession.

Cash was a technological breakthrough as a bearer asset because, while it still required professional protection at a high enough value, authenticity was typically not difficult or expensive to validate.

When cash could no longer be exchanged directly for gold, it lost its power as a bearer asset. It put a significant friction between the paper and the gold it represented.

People didn't want to be holding a significant amount of it out of fear of their government placing further frictions on it.""",

    "05_bitcoin_special_bearer": """That leaves us with bitcoin—a very special bearer asset.

It has all the benefits of frictionless proof of ownership and validation that reserve notes had over gold, and much much more.

There is no risk of devaluation or frictions imposed by a central issuer because there is no central issuer. Bitcoin is created and issued by the protocol set in motion by Satoshi Nakamoto on January 3rd, 2009.

It runs on a decentralized network of "nodes"—validating computers all over the world that run the open source Bitcoin software and contain a record of every block ever issued and every transaction ever made.

No node or even group of nodes has the power to change the rules of the protocol, nor can they be exempted. Every node does its own validation, but it is part of the larger network.

A node that wants to run different rules is free to do so, but they are unlikely to be able to spend their version of bitcoin as other nodes will not recognize their coins as valid.

The cryptographic model behind bitcoin is based on the fact that private keys do not exist physically and are virtually impossible to guess, yet are incredibly easy to validate.""",

    "06_diamonds_from_kiev": """My great-grandmother came to the US in the early 1900s from Ukraine at the age of ten, when she was put on a boat by herself with five diamond stones sewn into her pillowcase.

The miraculous end of the story—somehow finding family and not being robbed—is one of the great inspirations when thinking about what a special store of wealth bitcoin private keys are.

Imagine that those diamonds were bought with whatever money the family could muster. Instead, they could have bought bitcoin and stored them in a 12-word seed.

My great-grandmother could have just memorized the 12 words—maybe in a song—and never had the terrorizing thoughts of her family's life work being stolen.

All she would have needed upon arrival is a phone with internet access, and she could convert all of that bitcoin into the local currency.

Your bitcoin cannot be stolen through violence. If you memorize a 12- or 24-word private key, you can store an unlimited amount of wealth in your mind.

Anyone who has been a refugee, experienced a bank run, or crossed a border fearing seizure understands this power.

Knowing one can just sell everything they own and put it on a 12-word seed and go anywhere they want in the world is a level of individual sovereignty previously unavailable to human beings.""",

    "07_closing": """Let's recap what we learned in this chapter.

Bearer assets derive ownership from possession—whoever holds it owns it, without requiring registration or identity.

Bitcoin is the most powerful bearer asset ever created—non-physical, easy to validate, and impossible to seize without consent.

Physical bearer assets have prohibitive costs—gold requires military-level security and expensive assaying for validation.

Cash lost its bearer status in 1971 when Nixon closed the gold window, breaking the direct link to gold.

Self-custody enables unprecedented sovereignty—unlimited wealth stored in a 12-word seed phrase, accessible anywhere on Earth.

Institutions must understand that the people they share the bitcoin market with will place a significant premium on bearer ownership—and they are going to apply a deep discount towards every layer of institutional ownership they have to yield this power to.

In the next episode, we'll explore Chapter Six: Bitcoin Users Value Privacy. We'll examine why privacy is fundamental to bitcoin's value proposition—and why institutions struggle with this concept.

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
