import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section73() {
  return (
    <LessonLayout sectionId={73}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">BIP-22: getblocktemplate Fundamentals</h2>

      <p className="mb-4">
        BIP-22 introduced the getblocktemplate (GBT) RPC method, replacing the older
        getwork protocol. GBT gives miners more flexibility in block construction while
        reducing reliance on pool operators.
      </p>

      <Callout type="info" title="Decentralized Mining">
        <p>
          Before GBT, pool operators had complete control over block contents. GBT
          empowers miners to validate and modify block templates, improving decentralization.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Problem</h3>

      <p className="mb-4">
        The old getwork protocol had limitations:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-rose-500/30 mb-6">
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>Limited nonce space (~4 billion attempts before rollover)</li>
          <li>Miners couldn't see or modify transactions</li>
          <li>Pools had complete control over block contents</li>
          <li>No support for variable difficulty work</li>
          <li>Inefficient polling model</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">getblocktemplate Method</h3>

      <Definition title="Block Template">
        <p>
          A complete specification for constructing a valid block, including the block
          header fields, coinbase transaction, and list of transactions to include.
        </p>
      </Definition>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># RPC call:</p>
        <p className="text-dark-300">getblocktemplate {'{'}"rules": ["segwit"]{'}'}</p>
        <p className="text-dark-400 mt-4 mb-2"># Returns template with:</p>
        <p className="text-dark-300">version, previousblockhash, transactions,</p>
        <p className="text-dark-300">coinbasevalue, target, mutable, ...</p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Template Fields</h3>

      <div className="overflow-x-auto">
        <table className="w-full text-sm mb-6">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-3 text-dark-300">Field</th>
              <th className="text-left py-3 text-dark-300">Description</th>
            </tr>
          </thead>
          <tbody className="text-dark-400">
            <tr className="border-b border-dark-800">
              <td className="py-3 font-mono text-amber-400">version</td>
              <td>Block version number</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3 font-mono text-amber-400">previousblockhash</td>
              <td>Hash of the best known block</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3 font-mono text-amber-400">transactions</td>
              <td>Array of transaction objects</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3 font-mono text-amber-400">coinbasevalue</td>
              <td>Maximum coinbase output value (subsidy + fees)</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3 font-mono text-amber-400">target</td>
              <td>Required target for valid block</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3 font-mono text-amber-400">bits</td>
              <td>Compact target representation</td>
            </tr>
            <tr>
              <td className="py-3 font-mono text-amber-400">curtime</td>
              <td>Current timestamp</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Mutable Fields</h3>

      <p className="mb-4">
        The "mutable" array indicates what miners can modify:
      </p>

      <Example title="Mutable Options">
        <div className="space-y-3 text-dark-300">
          <div className="bg-dark-800 rounded-lg p-4 font-mono text-xs">
            <p className="text-amber-400">"mutable": [</p>
            <p className="text-dark-300 ml-4">"time",        // Can adjust timestamp</p>
            <p className="text-dark-300 ml-4">"transactions", // Can add/remove txs</p>
            <p className="text-dark-300 ml-4">"prevblock",   // Can update parent</p>
            <p className="text-dark-300 ml-4">"coinbase/append", // Can add to coinbase</p>
            <p className="text-amber-400">]</p>
          </div>
          <p className="text-dark-500 text-sm mt-2">
            Miners can customize within these bounds
          </p>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Transaction Format</h3>

      <p className="mb-4">
        Each transaction in the template includes:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li><strong>data:</strong> Hex-encoded transaction</li>
          <li><strong>txid:</strong> Transaction ID (for Merkle tree)</li>
          <li><strong>hash:</strong> wtxid for SegWit transactions</li>
          <li><strong>fee:</strong> Transaction fee in satoshis</li>
          <li><strong>sigops:</strong> Signature operations count</li>
          <li><strong>depends:</strong> Indices of parent transactions</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Block Submission</h3>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># After finding valid nonce:</p>
        <p className="text-dark-300">submitblock "hexdata"</p>
        <p className="text-dark-400 mt-3 mb-2"># Returns:</p>
        <p className="text-dark-300">null (success) or error reason</p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Miner Workflow</h3>

      <Example title="GBT Mining Flow">
        <div className="space-y-3 font-mono text-xs">
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-2"># 1. Get template:</p>
            <p className="text-dark-300">template = getblocktemplate()</p>
          </div>
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-2"># 2. Construct block header:</p>
            <p className="text-dark-300">header = build_header(template)</p>
            <p className="text-dark-300">merkle_root = compute_merkle(coinbase, txs)</p>
          </div>
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-2"># 3. Search for valid nonce:</p>
            <p className="text-dark-300">while hash(header) &gt; target:</p>
            <p className="text-dark-500 ml-4">header.nonce++</p>
            <p className="text-dark-500 ml-4">if nonce exhausted: modify extranonce, recalc merkle</p>
          </div>
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-2"># 4. Submit found block:</p>
            <p className="text-amber-400">submitblock(serialize(header, txs))</p>
          </div>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Capabilities</h3>

      <Callout type="info" title="Request Capabilities">
        <p>
          Miners specify capabilities when requesting templates:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>longpoll:</strong> Wait for new block notification</li>
          <li><strong>coinbasetxn:</strong> Include full coinbase transaction</li>
          <li><strong>workid:</strong> Track which template was used</li>
        </ul>
      </Callout>

      <Callout type="success" title="Foundation for Mining">
        <p>
          GBT remains the standard interface between Bitcoin nodes and mining software.
          It gives miners transparency into block contents while maintaining compatibility
          with pool infrastructure. BIP-23 extends it for pooled mining scenarios.
        </p>
      </Callout>
    </LessonLayout>
  );
}
