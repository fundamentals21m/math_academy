import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section72() {
  return (
    <LessonLayout sectionId={72}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">BIP-330: Erlay</h2>

      <p className="mb-4">
        BIP-330 proposes Erlay, a transaction relay protocol using set reconciliation to
        dramatically reduce bandwidth for transaction announcements. Instead of flooding
        transactions to all peers, nodes periodically reconcile their mempools.
      </p>

      <Callout type="info" title="Bandwidth Savings">
        <p>
          Erlay can reduce transaction relay bandwidth by ~40%, enabling more peer
          connections without proportional bandwidth increase.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Current Transaction Relay</h3>

      <p className="mb-4">
        The current "flooding" approach is inefficient:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-rose-500/30 mb-6">
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>New transaction → send inv to ALL peers</li>
          <li>Each peer typically already has it from another peer</li>
          <li>~44% of inv messages are redundant</li>
          <li>Bandwidth scales O(peers × transactions)</li>
          <li>Limits practical number of peer connections</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Erlay Approach</h3>

      <Definition title="Set Reconciliation">
        <p>
          Instead of announcing every transaction, nodes periodically compare their
          mempool sets and exchange only the differences. This is far more efficient
          when sets are mostly similar.
        </p>
      </Definition>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># Erlay vs Flooding:</p>
        <p className="text-dark-300">Flooding: Send inv for tx to 8 peers = 8 invs</p>
        <p className="text-amber-400">Erlay: Reconcile with 8 peers = ~1-2 invs equivalent</p>
        <p className="text-dark-500 mt-3">
          Most peers already have the transaction → reconciliation finds no difference
        </p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Hybrid Model</h3>

      <p className="mb-4">
        Erlay uses both flooding and reconciliation:
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">Outbound Peers (Flooding)</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>~8 outbound connections</li>
            <li>Flood new transactions</li>
            <li>Fast initial propagation</li>
            <li>Low latency</li>
          </ul>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">Inbound Peers (Reconciliation)</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>Many inbound connections</li>
            <li>Periodic set reconciliation</li>
            <li>Catch missed transactions</li>
            <li>Bandwidth efficient</li>
          </ul>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Minisketch</h3>

      <p className="mb-4">
        Erlay uses PinSketch, a set reconciliation algorithm:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>
            <strong>Sketch:</strong> Compact representation of a set
          </li>
          <li>
            <strong>Size:</strong> Proportional to set DIFFERENCE, not total size
          </li>
          <li>
            <strong>XOR-based:</strong> Sketches of similar sets can be combined to find differences
          </li>
          <li>
            <strong>Efficiency:</strong> ~32 bits per different element
          </li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Protocol Messages</h3>

      <div className="overflow-x-auto">
        <table className="w-full text-sm mb-6">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-3 text-dark-300">Message</th>
              <th className="text-left py-3 text-dark-300">Purpose</th>
            </tr>
          </thead>
          <tbody className="text-dark-400">
            <tr className="border-b border-dark-800">
              <td className="py-3 font-mono text-amber-400">sendtxrcncl</td>
              <td>Negotiate reconciliation support</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3 font-mono text-amber-400">reqtxrcncl</td>
              <td>Request reconciliation</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3 font-mono text-amber-400">sketch</td>
              <td>Send set sketch</td>
            </tr>
            <tr>
              <td className="py-3 font-mono text-amber-400">reqsketchext</td>
              <td>Request sketch extension</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Reconciliation Flow</h3>

      <Example title="Erlay Reconciliation">
        <div className="space-y-3 font-mono text-xs">
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-2"># 1. Initiate reconciliation:</p>
            <p className="text-dark-300">A → B: reqtxrcncl(set_size=1500)</p>
          </div>
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-2"># 2. Exchange sketches:</p>
            <p className="text-dark-300">B → A: sketch(B's sketch)</p>
            <p className="text-dark-300">A computes: A_sketch XOR B_sketch = difference_sketch</p>
          </div>
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-2"># 3. Decode differences:</p>
            <p className="text-dark-300">difference_sketch → [txid₁, txid₂, txid₃]</p>
            <p className="text-dark-500">Only 3 transactions different between mempools!</p>
          </div>
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-2"># 4. Request missing:</p>
            <p className="text-dark-300">A → B: getdata(txid₂) // B has, A doesn't</p>
            <p className="text-dark-300">B → A: getdata(txid₁, txid₃) // A has, B doesn't</p>
          </div>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Latency Considerations</h3>

      <Callout type="warning" title="Speed vs Bandwidth Tradeoff">
        <p>
          Reconciliation is slightly slower than flooding for initial propagation:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Flooding: ~milliseconds to reach peers</li>
          <li>Reconciliation: Periodic (every few seconds)</li>
          <li>Hybrid ensures fast propagation via flooding subset</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Benefits</h3>

      <div className="space-y-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-1">More Peer Connections</p>
          <p className="text-sm text-dark-300">
            Lower per-peer bandwidth enables more connections, improving network
            connectivity and eclipse attack resistance.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-1">Better Compact Blocks</p>
          <p className="text-sm text-dark-300">
            More synchronized mempools mean compact blocks work better—fewer missing
            transactions to request.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-1">Network Resilience</p>
          <p className="text-sm text-dark-300">
            More connections with less bandwidth improves overall network topology
            and resistance to partitioning.
          </p>
        </div>
      </div>

      <Callout type="success" title="Scaling Transaction Relay">
        <p>
          Erlay represents a fundamental improvement in how Bitcoin propagates
          transactions. By using set reconciliation instead of naive flooding, the
          network can scale to more connections while using less bandwidth—a rare
          win-win in protocol design.
        </p>
      </Callout>
    </LessonLayout>
  );
}
