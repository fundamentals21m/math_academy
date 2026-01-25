import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section67() {
  return (
    <LessonLayout sectionId={67}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">BIP-152: Compact Block Relay</h2>

      <p className="mb-4">
        BIP-152 introduced compact blocks, a major optimization for block propagation.
        Instead of sending full blocks, nodes send block headers with short transaction
        identifiers, allowing receivers to reconstruct blocks from their mempool.
      </p>

      <Callout type="info" title="Bandwidth Revolution">
        <p>
          Compact blocks reduced block propagation bandwidth by ~99% in typical cases.
          Most transactions are already in mempools, so only short IDs need to be sent.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Problem</h3>

      <p className="mb-4">
        Traditional block propagation is wasteful:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-rose-500/30 mb-6">
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>Full 1-4 MB blocks sent to each peer</li>
          <li>Most transactions already in receiver's mempool</li>
          <li>Same data transmitted multiple times</li>
          <li>Slow propagation = more orphan blocks</li>
          <li>Mining centralization pressure (fast connections win)</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Compact Block Structure</h3>

      <Definition title="Compact Block">
        <p>
          A block representation containing the header, short transaction IDs (6 bytes
          each), and prefilled transactions. The receiver reconstructs the full block
          using their mempool.
        </p>
      </Definition>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># Compact block contents:</p>
        <p className="text-dark-300">header: 80 bytes (standard block header)</p>
        <p className="text-dark-300">nonce: 8 bytes (for short ID calculation)</p>
        <p className="text-amber-400">shortids: [6 bytes × n transactions]</p>
        <p className="text-dark-300">prefilled_txs: [coinbase, + any missing]</p>
        <p className="text-dark-500 mt-3">
          6-byte IDs vs ~500 byte average transactions = 99% savings
        </p>
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
              <td className="py-3 font-mono text-amber-400">sendcmpct</td>
              <td>Negotiate compact block support + mode</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3 font-mono text-amber-400">cmpctblock</td>
              <td>Send compact block</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3 font-mono text-amber-400">getblocktxn</td>
              <td>Request missing transactions</td>
            </tr>
            <tr>
              <td className="py-3 font-mono text-amber-400">blocktxn</td>
              <td>Send requested transactions</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Two Modes</h3>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">Low Bandwidth Mode</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>sendcmpct(0, version)</li>
            <li>Wait for header announcement</li>
            <li>Request compact block</li>
            <li>Good for most peers</li>
          </ul>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">High Bandwidth Mode</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>sendcmpct(1, version)</li>
            <li>Receive compact block immediately</li>
            <li>No announcement first</li>
            <li>Fastest, for select peers</li>
          </ul>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Reconstruction Process</h3>

      <Example title="Compact Block Flow">
        <div className="space-y-3 font-mono text-xs">
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-2"># 1. Receive compact block:</p>
            <p className="text-dark-300">cmpctblock(header, nonce, shortids, prefilled)</p>
          </div>
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-2"># 2. Compute expected short IDs:</p>
            <p className="text-dark-300">for tx in mempool:</p>
            <p className="text-dark-500 ml-4">expected_id = siphash(nonce, tx.wtxid)[0:6]</p>
          </div>
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-2"># 3. Match short IDs to mempool txs:</p>
            <p className="text-dark-300">block_txs = match(shortids, mempool)</p>
          </div>
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-2"># 4. Request any missing:</p>
            <p className="text-dark-300">if missing_txs:</p>
            <p className="text-dark-500 ml-4">send getblocktxn(missing_indices)</p>
            <p className="text-dark-500 ml-4">receive blocktxn(missing_txs)</p>
          </div>
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-2"># 5. Validate complete block:</p>
            <p className="text-emerald-400">validate_block(header, all_txs)</p>
          </div>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Short ID Calculation</h3>

      <p className="mb-4">
        Short IDs use SipHash for collision resistance:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <div className="font-mono text-sm text-dark-300">
          <p>key = SHA256(header || nonce)[0:16]</p>
          <p className="mt-2">short_id = SipHash-2-4(key, wtxid)[0:6]</p>
        </div>
        <p className="text-dark-500 text-sm mt-3">
          6 bytes = 48 bits → very low collision probability in one block
        </p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Version 2</h3>

      <p className="mb-4">
        BIP-152 version 2 added SegWit support:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>
            <strong>Version 1:</strong> Uses txid for short ID calculation
          </li>
          <li>
            <strong>Version 2:</strong> Uses wtxid (includes witness data)
          </li>
          <li>
            <strong>SegWit required:</strong> Version 2 requires NODE_WITNESS
          </li>
          <li>
            <strong>Default today:</strong> All modern nodes use version 2
          </li>
        </ul>
      </div>

      <Callout type="warning" title="Mempool Sync Important">
        <p>
          Compact blocks work best when mempools are synchronized. If a receiver's mempool
          differs significantly (missing transactions), more round trips are needed.
          This motivates transaction relay optimizations like Erlay (BIP-330).
        </p>
      </Callout>

      <Callout type="success" title="Network Impact">
        <p>
          Compact blocks transformed Bitcoin block propagation. Combined with FIBRE and
          similar optimizations, block propagation times dropped from seconds to
          milliseconds, reducing orphan rates and improving mining decentralization.
        </p>
      </Callout>
    </LessonLayout>
  );
}
