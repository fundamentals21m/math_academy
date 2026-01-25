import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section88() {
  return (
    <LessonLayout sectionId={88}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Channel Factories</h2>

      <p className="mb-4">
        Channel factories enable multiple parties to share a single on-chain UTXO while
        opening and closing payment channels between them off-chain. This dramatically
        reduces Lightning Network's on-chain footprint.
      </p>

      <Callout type="info" title="Scaling Lightning's Scaling">
        <p>
          If Lightning scales Bitcoin, channel factories scale Lightning. A single
          on-chain transaction can enable thousands of payment channels.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The On-Chain Bottleneck</h3>

      <p className="mb-4">
        Current Lightning has an on-chain requirement problem:
      </p>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># Lightning on-chain requirements:</p>
        <p className="text-dark-300">Each channel: 1 funding tx + 1 close tx minimum</p>
        <p className="text-dark-300">Per user: Multiple channels needed for routing</p>
        <p className="text-dark-400 mt-3 mb-2"># At scale:</p>
        <p className="text-dark-300">8 billion people × 2+ channels each × 2 txs</p>
        <p className="text-rose-400">= 32+ billion on-chain transactions needed</p>
        <p className="text-dark-500 mt-2">
          At 7 tps, that's ~145 years just for channel operations
        </p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Channel Factory Concept</h3>

      <Definition title="Channel Factory">
        <p>
          A shared UTXO among N parties that can be subdivided into bilateral payment
          channels without additional on-chain transactions. Channels can be opened,
          closed, and rebalanced entirely off-chain.
        </p>
      </Definition>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <div className="space-y-4">
          <div>
            <p className="text-amber-400 font-bold">Structure</p>
            <p className="text-sm text-dark-300">
              One N-of-N multisig funding output containing all participants' funds.
              Off-chain "allocation" transactions determine how funds are split into channels.
            </p>
          </div>
          <div>
            <p className="text-amber-400 font-bold">Channel Operations</p>
            <p className="text-sm text-dark-300">
              Participants can create, modify, or close channels between any pair
              by updating the shared allocation—no on-chain transaction required.
            </p>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Factory Architecture</h3>

      <Example title="Three-Layer Structure">
        <div className="bg-dark-800 rounded-lg p-4 font-mono text-xs">
          <p className="text-dark-400 mb-2"># Layer 1: Funding (on-chain)</p>
          <p className="text-dark-300">N-of-N multisig UTXO</p>
          <p className="text-dark-400 mt-3 mb-2"># Layer 2: Allocation (off-chain)</p>
          <p className="text-dark-300">Divides funds into channels</p>
          <p className="text-dark-300">Alice-Bob: 1 BTC</p>
          <p className="text-dark-300">Bob-Carol: 0.5 BTC</p>
          <p className="text-dark-300">Alice-Carol: 0.3 BTC</p>
          <p className="text-dark-400 mt-3 mb-2"># Layer 3: Channels (off-chain)</p>
          <p className="text-dark-300">Standard Lightning commitment transactions</p>
          <p className="text-dark-300">HTLCs, routing, etc.</p>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Operations</h3>

      <div className="space-y-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">Open Channel</p>
          <p className="text-sm text-dark-300">
            All parties sign new allocation that includes the channel. No on-chain tx.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">Close Channel</p>
          <p className="text-sm text-dark-300">
            All parties sign new allocation without the channel. Funds return to
            owners' allocations. No on-chain tx.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">Rebalance</p>
          <p className="text-sm text-dark-300">
            Move liquidity between channels by updating allocation. All parties sign.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">Exit</p>
          <p className="text-sm text-dark-300">
            Participant can exit by closing channels and withdrawing their allocation.
            Can be cooperative or unilateral.
          </p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Coordination Challenges</h3>

      <Callout type="warning" title="N-Party Coordination">
        <ul className="list-disc list-inside space-y-1">
          <li>All N parties must be online to update allocation</li>
          <li>Unresponsive party blocks factory updates</li>
          <li>Larger N = higher coordination cost</li>
          <li>Solutions: Subset updates, Eltoo, timeout mechanisms</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Eltoo for Factories</h3>

      <p className="mb-4">
        BIP-118 (ANYPREVOUT) dramatically improves channel factories:
      </p>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># Without Eltoo (current):</p>
        <p className="text-dark-300">Each update requires new signatures from all N</p>
        <p className="text-dark-300">Revocation secrets grow: O(updates × N)</p>
        <p className="text-dark-400 mt-3 mb-2"># With Eltoo:</p>
        <p className="text-emerald-400">Updates replace previous (no revocation)</p>
        <p className="text-emerald-400">State size: O(1) regardless of updates</p>
        <p className="text-emerald-400">Simpler unilateral close</p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Scaling Impact</h3>

      <div className="overflow-x-auto">
        <table className="w-full text-sm mb-6">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-3 text-dark-300">Metric</th>
              <th className="text-left py-3 text-dark-300">Traditional LN</th>
              <th className="text-left py-3 text-dark-300">With Factories</th>
            </tr>
          </thead>
          <tbody className="text-dark-400">
            <tr className="border-b border-dark-800">
              <td className="py-3">On-chain txs per channel</td>
              <td>2 (open + close)</td>
              <td className="text-emerald-400">2/N (amortized)</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3">Channel creation time</td>
              <td>~1 hour (6 confirms)</td>
              <td className="text-emerald-400">Instant (off-chain)</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3">Channel creation cost</td>
              <td>On-chain fee</td>
              <td className="text-emerald-400">~Free</td>
            </tr>
            <tr>
              <td className="py-3">Rebalancing</td>
              <td>Circular routes or splice</td>
              <td className="text-emerald-400">Off-chain update</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Virtual Channels</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <p className="text-dark-400 mb-3">
          Factories enable "virtual channels" between non-adjacent participants:
        </p>
        <div className="bg-dark-800 rounded-lg p-4 font-mono text-xs">
          <p className="text-dark-300">Factory: [Alice, Bob, Carol, Dave]</p>
          <p className="text-dark-300">Virtual channel: Alice ↔ Dave</p>
          <p className="text-dark-300">Routed through: Alice → Bob → Carol → Dave</p>
          <p className="text-amber-400 mt-2">But appears as direct channel to LN</p>
        </div>
      </div>

      <Callout type="success" title="Path to Billions">
        <p>
          Channel factories are essential for Lightning to serve billions of users.
          By amortizing on-chain costs across many channels and enabling instant
          off-chain channel operations, factories transform Lightning from a scaling
          solution into a truly global payment network.
        </p>
      </Callout>
    </LessonLayout>
  );
}
