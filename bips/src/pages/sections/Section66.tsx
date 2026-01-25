import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section66() {
  return (
    <LessonLayout sectionId={66}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">BIP-133: feefilter Message</h2>

      <p className="mb-4">
        BIP-133 introduced the feefilter message, allowing nodes to tell peers the minimum
        fee rate for transactions they want to receive. This reduces bandwidth waste by
        preventing announcement of transactions that will just be rejected.
      </p>

      <Callout type="info" title="Bandwidth Optimization">
        <p>
          Without feefilter, nodes receive inv messages for low-fee transactions they'll
          reject anyway. feefilter lets nodes proactively communicate their fee floor.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Problem</h3>

      <p className="mb-4">
        Without fee filtering, bandwidth is wasted:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-rose-500/30 mb-6">
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>Node A relays low-fee transaction inv to Node B</li>
          <li>Node B requests the transaction with getdata</li>
          <li>Node A sends the full transaction</li>
          <li>Node B rejects it (below mempool min fee)</li>
          <li>Bandwidth wasted on both sides</li>
        </ul>
        <p className="text-rose-400 text-sm mt-3">
          During high-fee periods, this happens constantly!
        </p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The feefilter Message</h3>

      <Definition title="feefilter">
        <p>
          A message containing a single value: the minimum fee rate (in satoshis per
          kilobyte) that a node wants to receive transaction announcements for.
        </p>
        <div className="font-mono text-sm text-amber-400 mt-3">
          feefilter: 1000 (= 1 sat/vbyte minimum)
        </div>
      </Definition>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># Message format:</p>
        <p className="text-dark-300">command: "feefilter"</p>
        <p className="text-amber-400">feerate: uint64 (satoshis per 1000 bytes)</p>
        <p className="text-dark-500 mt-3">
          1000 sat/kvB = 1 sat/vB (common minimum relay fee)
        </p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Protocol Flow</h3>

      <Example title="feefilter in Action">
        <div className="space-y-3 font-mono text-xs">
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-2"># 1. Node B's mempool is filling up:</p>
            <p className="text-dark-300">min_mempool_fee = 5000 sat/kvB (5 sat/vB)</p>
          </div>
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-2"># 2. Node B tells Node A:</p>
            <p className="text-amber-400">B → A: feefilter(5000)</p>
          </div>
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-2"># 3. Node A gets 2 sat/vB transaction:</p>
            <p className="text-emerald-400">A: Skip inv to B (below B's filter)</p>
          </div>
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-2"># 4. Node A gets 10 sat/vB transaction:</p>
            <p className="text-dark-300">A → B: inv(txid)</p>
            <p className="text-dark-500">Above filter, announce normally</p>
          </div>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Dynamic Updates</h3>

      <p className="mb-4">
        The feefilter value changes as mempool conditions change:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>
            <strong>Mempool fills:</strong> Raise feefilter to minimum accepted fee
          </li>
          <li>
            <strong>Block mined:</strong> May lower feefilter as mempool empties
          </li>
          <li>
            <strong>Mempool clears:</strong> Reset to static minimum relay fee
          </li>
          <li>
            <strong>Periodic updates:</strong> Sent when threshold changes significantly
          </li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Implementation Details</h3>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># Bitcoin Core behavior:</p>
        <p className="text-dark-300">- Send feefilter after version/verack</p>
        <p className="text-dark-300">- Update when mempool min fee changes &gt; 10%</p>
        <p className="text-dark-300">- Add random delay to updates (privacy)</p>
        <p className="text-dark-300">- Poisson-distributed timing between updates</p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Privacy Considerations</h3>

      <Callout type="warning" title="Fingerprinting Risk">
        <p>
          Exact feefilter values could fingerprint nodes (reveal mempool size/config).
          Mitigations include:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Randomized update timing</li>
          <li>Not sending for small changes</li>
          <li>Quantizing to reduce precision</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Bandwidth Savings</h3>

      <p className="mb-4">
        feefilter significantly reduces unnecessary traffic:
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4 border border-rose-500/30">
          <p className="text-rose-400 font-bold mb-2">Without feefilter</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>Receive all tx invs</li>
            <li>Request txs blindly</li>
            <li>Reject after download</li>
            <li>Wasted bandwidth</li>
          </ul>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 border border-emerald-500/30">
          <p className="text-emerald-400 font-bold mb-2">With feefilter</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>Only relevant invs</li>
            <li>Request useful txs only</li>
            <li>Minimal rejection</li>
            <li>Efficient bandwidth</li>
          </ul>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Sender Behavior</h3>

      <Example title="Respecting feefilter">
        <div className="space-y-3 text-dark-300">
          <p className="text-dark-400 mb-2">When relaying transactions:</p>
          <div className="bg-dark-800 rounded-lg p-4 font-mono text-xs">
            <p className="text-dark-300">for peer in peers:</p>
            <p className="text-dark-500 ml-4">if tx.feerate &gt;= peer.feefilter:</p>
            <p className="text-emerald-400 ml-8">send inv(tx) to peer</p>
            <p className="text-dark-500 ml-4">else:</p>
            <p className="text-rose-400 ml-8">skip  # Below their threshold</p>
          </div>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Related BIPs</h3>

      <p className="mb-4">
        feefilter works alongside other transaction relay optimizations:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>
            <strong>BIP-130 (sendheaders):</strong> Efficient block announcements
          </li>
          <li>
            <strong>BIP-152 (compact blocks):</strong> Efficient block transfer
          </li>
          <li>
            <strong>BIP-330 (Erlay):</strong> Efficient tx announcement reconciliation
          </li>
        </ul>
      </div>

      <Callout type="success" title="Essential Optimization">
        <p>
          feefilter is especially valuable during high-fee periods when mempools fill.
          It prevents a cascade of useless traffic as nodes announce transactions that
          peers can't accept. Simple in concept, highly effective in practice.
        </p>
      </Callout>
    </LessonLayout>
  );
}
