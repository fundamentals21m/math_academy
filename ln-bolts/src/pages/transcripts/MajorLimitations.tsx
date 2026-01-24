import { TranscriptLayout } from '@/components/layout/TranscriptLayout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function MajorLimitations() {
  return (
    <TranscriptLayout transcriptId="major-limitations">
      {/* Key Takeaways */}
      <Callout type="success" title="Key Takeaways">
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>Channels have fixed capacity—can&apos;t exceed initial funding</li>
          <li>Small payments face fee pressure, large ones face liquidity limits</li>
          <li>Users must manage their own state and backups</li>
          <li>Layer 1 security is essential for Layer 2 trust</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Fundamental Tradeoff</h3>

      <p className="mb-4">
        Alex Bosworth gives an honest assessment of Lightning&apos;s constraints:
      </p>

      <blockquote className="border-l-4 border-amber-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          &quot;Lightning is based on channels with fixed balances. If you just want to
          randomly send somebody a huge amount you&apos;ve never sent before, these channels
          are not really well set up for that. That&apos;s the fundamental structure of
          Lightning&apos;s limitation.&quot;
        </p>
        <cite className="block text-sm text-dark-500 mt-2 not-italic">— Alex Bosworth</cite>
      </blockquote>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Fixed Channel Capacity</h3>

      <Definition title="Capacity Constraints">
        <p>When you open a channel, the total capacity is fixed:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>1 BTC channel can never handle 1.1 BTC payment</li>
          <li>Liquidity shifts between parties but total stays constant</li>
          <li>Splicing (adding/removing funds) helps but requires on-chain tx</li>
        </ul>
      </Definition>

      <Example title="The Liquidity Problem">
        <p className="mb-2">Alice has a 1 BTC channel with Bob:</p>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>Initially: Alice 1 BTC, Bob 0 BTC</li>
          <li>After payments: Alice 0.3 BTC, Bob 0.7 BTC</li>
          <li>Now Alice can only receive up to 0.7 BTC</li>
          <li>And can only send up to 0.3 BTC</li>
        </ul>
        <p className="mt-2 text-dark-500 text-sm">
          Balance affects what you can send AND receive.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Capital Efficiency</h3>

      <p className="mb-4">
        Bosworth explains the tension at both ends:
      </p>

      <blockquote className="border-l-4 border-amber-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          &quot;Small transactions—the fees to settle on-chain exceed the value of the
          payment. Large transactions—you hit liquidity limits. The sweet spot is
          somewhere in the middle, and that middle is where Lightning shines.&quot;
        </p>
        <cite className="block text-sm text-dark-500 mt-2 not-italic">— Alex Bosworth</cite>
      </blockquote>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Routing Challenges</h3>

      <Definition title="Network Knowledge Problem">
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Partial visibility:</strong> You only see public channels, not private ones</li>
          <li><strong>Stale information:</strong> Channel balances change constantly</li>
          <li><strong>Probe payments:</strong> Needed to discover actual liquidity</li>
          <li><strong>Path finding:</strong> Computing routes through billions of possible paths</li>
        </ul>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">User Responsibility</h3>

      <p className="mb-4">
        Lightning shifts more responsibility to users:
      </p>

      <Callout type="warning" title="What Users Must Manage">
        <ul className="list-disc list-inside space-y-1">
          <li>Channel state backups (lose them, lose funds)</li>
          <li>Monitoring for cheating counterparties</li>
          <li>Maintaining online presence or using watchtowers</li>
          <li>Managing inbound and outbound liquidity</li>
        </ul>
      </Callout>

      <blockquote className="border-l-4 border-amber-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          &quot;With Bitcoin on-chain, the infrastructure handles everything. With Lightning,
          you need to keep your own database of channel states, back it up properly,
          and hope your counterparty doesn&apos;t try to cheat while you&apos;re offline.&quot;
        </p>
        <cite className="block text-sm text-dark-500 mt-2 not-italic">— Alex Bosworth</cite>
      </blockquote>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Layer 1 Dependency</h3>

      <Definition title="Why Bitcoin Matters">
        <p>
          Lightning&apos;s security ultimately depends on Bitcoin:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Channel opens/closes settle on-chain</li>
          <li>Dispute resolution requires blockchain access</li>
          <li>If L1 is congested/expensive, L2 suffers</li>
          <li>Centralized L1 would centralize L2 trust</li>
        </ul>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Ecosystem Requirements</h3>

      <p className="mb-4">
        Lightning isn&apos;t plug-and-play:
      </p>

      <Example title="Infrastructure Needs">
        <ul className="list-disc list-inside space-y-1">
          <li>Routing nodes with sufficient capital</li>
          <li>Liquidity providers and market makers</li>
          <li>Wallet developers and LSPs</li>
          <li>User education and support</li>
        </ul>
      </Example>

      <Callout type="info" title="The Optimistic View">
        <p>
          Despite these limitations, Bosworth remains positive: &quot;These are engineering
          challenges, not fundamental impossibilities. We&apos;re building solutions—AMPs,
          splicing, better routing algorithms. Lightning is improving every month.&quot;
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Related Sections</h3>

      <div className="grid md:grid-cols-2 gap-3">
        <a
          href="#/transcript/lightning-overview"
          className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 hover:border-amber-500/30 transition-colors group"
        >
          <p className="text-dark-200 font-medium group-hover:text-amber-400 transition-colors">
            Lightning Overview
          </p>
          <p className="text-sm text-dark-500">Solutions like AMPs and splicing</p>
        </a>
        <a
          href="#/section/13"
          className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 hover:border-amber-500/30 transition-colors group"
        >
          <p className="text-dark-200 font-medium group-hover:text-amber-400 transition-colors">
            Section 13: Force Close
          </p>
          <p className="text-sm text-dark-500">When cooperation fails</p>
        </a>
      </div>
    </TranscriptLayout>
  );
}
