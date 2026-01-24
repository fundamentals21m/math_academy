import { TranscriptLayout } from '@/components/layout/TranscriptLayout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function BtcTalent44() {
  return (
    <TranscriptLayout transcriptId="btc-talent-44">
      {/* Key Takeaways */}
      <Callout type="success" title="Key Takeaways">
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>Branta was founded in 2023 to solve the address verification problem</li>
          <li>Keith's background spans enterprise software and Bitcoin development</li>
          <li>The startup focuses exclusively on Bitcoin—no altcoin distractions</li>
          <li>Building for Bitcoin requires long-term thinking and community trust</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Path to Bitcoin</h3>

      <p className="mb-4">
        Keith Gardner shares his journey into Bitcoin and what led him to found Branta:
      </p>

      <blockquote className="border-l-4 border-amber-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          "I remember my first Bitcoin transaction. There was this moment of realization—I just
          sent value across the internet without asking anyone's permission. No bank, no payment
          processor, just me and math. That feeling never went away."
        </p>
        <cite className="block text-sm text-dark-500 mt-2 not-italic">— Keith Gardner</cite>
      </blockquote>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Identifying the Problem</h3>

      <p className="mb-4">
        Keith describes the security gap that inspired Branta:
      </p>

      <Example title="The Verification Gap">
        <p className="mb-2">
          When sending traditional payments, multiple verification layers exist:
        </p>
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>Bank account names must match</li>
          <li>Routing numbers are validated</li>
          <li>Transactions can be reversed if fraudulent</li>
        </ul>
        <p className="mt-3 text-amber-400">
          Bitcoin has none of these safety nets. Once sent, it's gone.
        </p>
      </Example>

      <blockquote className="border-l-4 border-amber-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          "I kept asking myself: why doesn't this exist? Bitcoin has been around since 2009,
          and we still don't have a standard way to verify that an address belongs to who
          claims it does. That question became Branta."
        </p>
        <cite className="block text-sm text-dark-500 mt-2 not-italic">— Keith Gardner</cite>
      </blockquote>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Founding Branta</h3>

      <p className="mb-4">
        The early days of building a Bitcoin-focused startup:
      </p>

      <Definition title="Bitcoin-Only Philosophy">
        <p>
          Branta made a deliberate choice to focus exclusively on Bitcoin and Lightning Network.
          This means no support for altcoins or other chains—a decision that signals long-term
          commitment to the Bitcoin ecosystem.
        </p>
      </Definition>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">Founded</p>
          <p className="text-sm text-dark-300">
            2023 in North Carolina, USA
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">Focus</p>
          <p className="text-sm text-dark-300">
            Pre-payment verification for Bitcoin and Lightning
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">Product</p>
          <p className="text-sm text-dark-300">
            Guardrail API for address registration and verification
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">Philosophy</p>
          <p className="text-sm text-dark-300">
            Bitcoin-only, open source where possible, privacy-preserving
          </p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Building in Bitcoin</h3>

      <p className="mb-4">
        Keith discusses the unique challenges of building a Bitcoin startup:
      </p>

      <blockquote className="border-l-4 border-amber-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          "The Bitcoin community is skeptical by default—and they should be. Trust is earned
          through code, through transparency, through showing up day after day. You can't just
          launch a product and expect adoption. You have to build relationships."
        </p>
        <cite className="block text-sm text-dark-500 mt-2 not-italic">— Keith Gardner</cite>
      </blockquote>

      <Example title="Community-First Approach">
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Open Source:</strong> Core verification logic available for inspection
          </li>
          <li>
            <strong>Partnerships:</strong> Working with established Bitcoin companies like Amboss
          </li>
          <li>
            <strong>Conference Presence:</strong> Regular attendance at TABConf, Bitcoin conferences
          </li>
          <li>
            <strong>Developer Focus:</strong> Building tools developers actually want to integrate
          </li>
        </ul>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Product Development Philosophy</h3>

      <p className="mb-4">
        The approach to building Guardrail:
      </p>

      <blockquote className="border-l-4 border-amber-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          "We believe the best money deserves the best UX. Bitcoin's technical properties are
          incredible, but sending it feels dangerous. We want to change that feeling without
          compromising on the properties that make Bitcoin special."
        </p>
        <cite className="block text-sm text-dark-500 mt-2 not-italic">— Keith Gardner</cite>
      </blockquote>

      <Callout type="info" title="Design Principles">
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>Never touch user keys or funds</li>
          <li>Work outside the transaction flow</li>
          <li>Preserve user privacy</li>
          <li>Simple API, powerful results</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Advice for Bitcoin Entrepreneurs</h3>

      <p className="mb-4">
        Keith shares insights for others building in the Bitcoin space:
      </p>

      <div className="space-y-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4 border-l-4 border-amber-500">
          <p className="text-amber-400 font-bold mb-1">Think Long-Term</p>
          <p className="text-sm text-dark-300">
            "Bitcoin is a multi-generational technology. Build for decades, not quarters."
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 border-l-4 border-amber-500">
          <p className="text-amber-400 font-bold mb-1">Solve Real Problems</p>
          <p className="text-sm text-dark-300">
            "Don't build features looking for problems. Find the pain points first."
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 border-l-4 border-amber-500">
          <p className="text-amber-400 font-bold mb-1">Earn Trust</p>
          <p className="text-sm text-dark-300">
            "The community's skepticism is a feature, not a bug. Embrace it."
          </p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Future of Branta</h3>

      <p className="mb-4">
        Looking ahead at what Branta aims to achieve:
      </p>

      <blockquote className="border-l-4 border-amber-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          "Our mission is to make every Bitcoin transaction safer. Not by adding friction or
          surveillance, but by giving users the information they need to make confident decisions.
          Verification should be as natural as checking a URL before entering a password."
        </p>
        <cite className="block text-sm text-dark-500 mt-2 not-italic">— Keith Gardner</cite>
      </blockquote>

      <Callout type="success" title="Key Insight">
        Building a successful Bitcoin company requires patience, transparency, and genuine
        commitment to solving problems that matter to the community. There are no shortcuts
        to earning trust in the Bitcoin ecosystem.
      </Callout>
    </TranscriptLayout>
  );
}
