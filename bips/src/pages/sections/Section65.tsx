import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section65() {
  return (
    <LessonLayout sectionId={65}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">BIP-130: sendheaders Message</h2>

      <p className="mb-4">
        BIP-130 introduced the sendheaders message, allowing nodes to request direct
        header announcements instead of inventory-based block notification. This reduces
        latency in learning about new blocks.
      </p>

      <Callout type="info" title="Faster Block Awareness">
        <p>
          With sendheaders, nodes learn about new blocks immediately when their peer
          receives them, without waiting for an inv/getdata round trip.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Problem</h3>

      <p className="mb-4">
        Traditional block announcement required multiple message round trips:
      </p>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># Old block announcement:</p>
        <p className="text-dark-300">1. Peer A finds/receives new block</p>
        <p className="text-dark-300">2. Peer A → Peer B: inv(block_hash)</p>
        <p className="text-dark-300">3. Peer B → Peer A: getheaders()</p>
        <p className="text-dark-300">4. Peer A → Peer B: headers()</p>
        <p className="text-dark-300">5. Peer B → Peer A: getdata(block)</p>
        <p className="text-dark-300">6. Peer A → Peer B: block()</p>
        <p className="text-rose-400 mt-2">Many round trips before block data received!</p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Solution</h3>

      <Definition title="sendheaders Message">
        <p>
          A signal message (empty payload) that tells a peer: "Please announce new blocks
          by sending headers directly, not via inv messages."
        </p>
      </Definition>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># With sendheaders:</p>
        <p className="text-dark-300">1. After connection: send "sendheaders"</p>
        <p className="text-dark-300">2. Peer finds/receives new block</p>
        <p className="text-amber-400">3. Peer → Us: headers(new_block_header)</p>
        <p className="text-dark-300">4. Us → Peer: getdata(block)</p>
        <p className="text-dark-300">5. Peer → Us: block()</p>
        <p className="text-emerald-400 mt-2">Saves one round trip!</p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Protocol Flow</h3>

      <Example title="sendheaders Negotiation">
        <div className="space-y-3 font-mono text-xs">
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-2"># 1. Connection established:</p>
            <p className="text-dark-300">A ↔ B: version/verack exchange</p>
          </div>
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-2"># 2. Request headers mode:</p>
            <p className="text-dark-300">A → B: sendheaders</p>
            <p className="text-dark-300">B → A: sendheaders</p>
          </div>
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-2"># 3. When new block arrives at A:</p>
            <p className="text-amber-400">A → B: headers(new block header)</p>
            <p className="text-dark-500">Instead of: A → B: inv(block_hash)</p>
          </div>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Header vs Inv Comparison</h3>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4 border border-rose-500/30">
          <p className="text-rose-400 font-bold mb-2">Inv-based (Old)</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>inv → getheaders → headers → getdata → block</li>
            <li>4 round trips minimum</li>
            <li>Higher latency</li>
            <li>More messages</li>
          </ul>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 border border-emerald-500/30">
          <p className="text-emerald-400 font-bold mb-2">Headers-based (BIP-130)</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>headers → getdata → block</li>
            <li>2 round trips</li>
            <li>Lower latency</li>
            <li>Fewer messages</li>
          </ul>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Multiple New Blocks</h3>

      <p className="mb-4">
        When a peer catches up after being offline:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>
            <strong>Single block:</strong> Send one header in headers message
          </li>
          <li>
            <strong>Multiple blocks:</strong> Send chain of headers (up to 2000)
          </li>
          <li>
            <strong>Large gaps:</strong> May require multiple headers messages
          </li>
          <li>
            <strong>Reorg:</strong> Include headers back to common ancestor
          </li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Integration with Compact Blocks</h3>

      <p className="mb-4">
        BIP-130 works well with BIP-152 compact blocks:
      </p>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># Optimal modern flow:</p>
        <p className="text-dark-300">1. sendheaders + sendcmpct negotiated</p>
        <p className="text-dark-300">2. New block at peer</p>
        <p className="text-amber-400">3. Peer → Us: cmpctblock (header + short IDs)</p>
        <p className="text-dark-300">4. Us: reconstruct block from mempool</p>
        <p className="text-dark-300">5. If missing txs: getblocktxn → blocktxn</p>
        <p className="text-emerald-400 mt-2">Often just 1 message for entire block!</p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Why It Matters</h3>

      <Callout type="info" title="Block Propagation Speed">
        <p>
          Faster block propagation is critical for:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Reducing orphan/stale block rates</li>
          <li>Improving mining fairness (less advantage for fast connections)</li>
          <li>Network security (faster convergence on longest chain)</li>
          <li>User experience (quicker confirmation awareness)</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Implementation</h3>

      <Example title="Node Behavior">
        <div className="space-y-3 text-dark-300">
          <p className="text-dark-400 mb-2">After receiving sendheaders:</p>
          <div className="bg-dark-800 rounded-lg p-4 font-mono text-xs">
            <p className="text-dark-300">peer.prefer_headers = true</p>
            <p className="text-dark-300 mt-2">when new_block:</p>
            <p className="text-dark-500 ml-4">if peer.prefer_headers:</p>
            <p className="text-emerald-400 ml-8">send headers(block.header)</p>
            <p className="text-dark-500 ml-4">else:</p>
            <p className="text-dark-300 ml-8">send inv(block.hash)</p>
          </div>
        </div>
      </Example>

      <Callout type="success" title="Standard Practice">
        <p>
          sendheaders is now universally used. All modern Bitcoin nodes send this message
          after connection, and all peers respond by announcing blocks via headers. It's
          a simple optimization that significantly improved block propagation network-wide.
        </p>
      </Callout>
    </LessonLayout>
  );
}
