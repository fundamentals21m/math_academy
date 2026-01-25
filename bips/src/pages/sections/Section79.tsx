import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section79() {
  return (
    <LessonLayout sectionId={79}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">BIP-145: getblocktemplate for SegWit</h2>

      <p className="mb-4">
        BIP-145 extends the getblocktemplate protocol (BIP-22/23) to support Segregated
        Witness transactions. It adds new fields and rules for miners to properly include
        SegWit transactions in block templates.
      </p>

      <Callout type="info" title="Mining SegWit Blocks">
        <p>
          Without BIP-145, mining software couldn't properly construct SegWit blocks.
          This BIP ensures miners can include witness data and calculate correct weights.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">New Requirements</h3>

      <p className="mb-4">
        SegWit changes block structure in ways that affect mining:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>
            <strong>Witness data:</strong> Must be included in blocks but not txid
          </li>
          <li>
            <strong>Weight limit:</strong> Replaces size limit (4 million WU)
          </li>
          <li>
            <strong>Witness commitment:</strong> Required in coinbase output
          </li>
          <li>
            <strong>wtxid:</strong> Needed for witness merkle tree
          </li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Requesting SegWit Templates</h3>

      <Definition title="SegWit Capability">
        <p>
          Miners signal SegWit support by including "segwit" in the rules array when
          calling getblocktemplate.
        </p>
      </Definition>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># Request with SegWit support:</p>
        <p className="text-dark-300">getblocktemplate {'{'}</p>
        <p className="text-amber-400 ml-4">"rules": ["segwit"]</p>
        <p className="text-dark-300">{'}'}</p>
        <p className="text-dark-500 mt-3">
          Server includes SegWit transactions and witness data
        </p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">New Transaction Fields</h3>

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
              <td className="py-3 font-mono text-amber-400">txid</td>
              <td>Transaction ID (excludes witness)</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3 font-mono text-amber-400">hash</td>
              <td>wtxid (includes witness)</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3 font-mono text-amber-400">weight</td>
              <td>Transaction weight units</td>
            </tr>
            <tr>
              <td className="py-3 font-mono text-amber-400">data</td>
              <td>Full transaction including witness</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Template Changes</h3>

      <Example title="SegWit Template Fields">
        <div className="space-y-3 font-mono text-xs">
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-2"># New global fields:</p>
            <p className="text-dark-300">"weightlimit": 4000000,  // Max block weight</p>
            <p className="text-dark-300">"sigoplimit": 80000,     // Adjusted for SegWit</p>
          </div>
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-2"># Witness commitment:</p>
            <p className="text-dark-300">"default_witness_commitment":</p>
            <p className="text-dark-500 ml-4">"6a24aa21a9ed..."  // OP_RETURN commitment</p>
          </div>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Witness Commitment</h3>

      <p className="mb-4">
        SegWit blocks require a commitment in the coinbase:
      </p>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># Coinbase witness commitment output:</p>
        <p className="text-dark-300">OP_RETURN (0x6a)</p>
        <p className="text-dark-300">OP_PUSHBYTES_36 (0x24)</p>
        <p className="text-dark-300">0xaa21a9ed  // Commitment header</p>
        <p className="text-amber-400">witness_root || nonce_commitment  // 32 bytes</p>
        <p className="text-dark-500 mt-3">
          Commits to all witness data in the block
        </p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Weight Calculation</h3>

      <Callout type="info" title="Block Weight">
        <p>
          SegWit uses weight instead of raw size:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Base data: 4 WU per byte</li>
          <li>Witness data: 1 WU per byte</li>
          <li>Maximum block weight: 4,000,000 WU</li>
          <li>Equivalent to ~1-4 MB depending on witness ratio</li>
        </ul>
      </Callout>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># Weight calculation:</p>
        <p className="text-dark-300">tx_weight = (base_size × 4) + witness_size</p>
        <p className="text-dark-300">block_weight = sum(tx_weights) + header_weight</p>
        <p className="text-dark-400 mt-2 mb-2"># Must satisfy:</p>
        <p className="text-amber-400">block_weight ≤ 4,000,000</p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Miner Workflow</h3>

      <Example title="Building SegWit Block">
        <div className="space-y-3 text-dark-300">
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li>Request template with "segwit" rule</li>
            <li>Select transactions respecting weight limit</li>
            <li>Build witness merkle tree from wtxids</li>
            <li>Create witness commitment for coinbase</li>
            <li>Build regular merkle tree from txids</li>
            <li>Construct block header</li>
            <li>Mine (search for valid nonce)</li>
            <li>Submit block with full witness data</li>
          </ol>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Backward Compatibility</h3>

      <p className="mb-4">
        Mining software handles SegWit gracefully:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>
            <strong>Without "segwit" rule:</strong> Server returns pre-SegWit format
          </li>
          <li>
            <strong>With "segwit" rule:</strong> Server includes witness data
          </li>
          <li>
            <strong>Transition:</strong> Software can upgrade incrementally
          </li>
        </ul>
      </div>

      <Callout type="success" title="Essential for Mining">
        <p>
          BIP-145 is essential infrastructure for SegWit mining. Without it, miners
          couldn't properly construct blocks containing SegWit transactions, and the
          network couldn't take advantage of SegWit's capacity increase.
        </p>
      </Callout>
    </LessonLayout>
  );
}
