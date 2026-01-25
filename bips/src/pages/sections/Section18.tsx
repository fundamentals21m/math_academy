import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section18() {
  return (
    <LessonLayout sectionId={18}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Network Protocol Extensions</h2>

      <p className="mb-4">
        BIP-144 extends the Bitcoin P2P protocol to support SegWit transactions. While BIP-141
        defines the consensus rules, BIP-144 specifies how nodes communicate SegWit data over
        the network—including new message types and serialization formats.
      </p>

      <Callout type="info" title="Part of SegWit">
        <p>
          BIP-144 deployed alongside BIP-141 and BIP-143 in August 2017. It ensures backward
          compatibility by allowing old nodes to continue functioning while new nodes can
          exchange witness data.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Serialization Problem</h3>

      <p className="mb-4">
        SegWit introduces witness data that old nodes don't understand. BIP-144 solves this
        with two serialization formats:
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4 border border-blue-500/30">
          <p className="text-blue-400 font-bold mb-2">Legacy Format</p>
          <p className="text-sm text-dark-300">
            Used when sending to old nodes or computing txid. No witness data included.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 border border-amber-500/30">
          <p className="text-amber-400 font-bold mb-2">Witness Format</p>
          <p className="text-sm text-dark-300">
            Used between SegWit-aware nodes. Includes marker, flag, and witness data.
          </p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Witness Serialization</h3>

      <p className="mb-4">
        The extended transaction format includes new fields:
      </p>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># Extended transaction serialization</p>
        <div className="space-y-1 text-dark-300">
          <p>[version: 4 bytes]</p>
          <p className="text-amber-400">[marker: 1 byte = 0x00]</p>
          <p className="text-amber-400">[flag: 1 byte = 0x01]</p>
          <p>[input count: varint]</p>
          <p>[inputs: variable]</p>
          <p>[output count: varint]</p>
          <p>[outputs: variable]</p>
          <p className="text-emerald-400">[witness: variable, per-input]</p>
          <p>[locktime: 4 bytes]</p>
        </div>
        <p className="text-xs text-dark-500 mt-3">
          Marker 0x00 followed by flag 0x01 indicates witness serialization
        </p>
      </div>

      <Definition title="Witness Structure">
        <p>
          For each input, the witness is a stack of items. Each item is a length-prefixed
          byte array. Empty witnesses (for non-SegWit inputs) have zero items.
        </p>
        <div className="mt-3 font-mono text-xs">
          <p>[item_count: varint]</p>
          <p>[item_1_length: varint] [item_1_data: bytes]</p>
          <p>[item_2_length: varint] [item_2_data: bytes]</p>
          <p>...</p>
        </div>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Service Bit: NODE_WITNESS</h3>

      <p className="mb-4">
        BIP-144 defines a new service bit to advertise SegWit support:
      </p>

      <Example title="NODE_WITNESS Service Bit">
        <div className="space-y-3 text-dark-300">
          <p>
            <span className="text-amber-400 font-mono">NODE_WITNESS = (1 &lt;&lt; 3) = 8</span>
          </p>
          <p>Nodes advertising this bit:</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Can provide witness data for transactions and blocks</li>
            <li>Understand witness-serialized messages</li>
            <li>Validate witness programs and scripts</li>
          </ul>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">New Message Types</h3>

      <p className="mb-4">
        BIP-144 introduces variants of existing messages:
      </p>

      <div className="overflow-x-auto">
        <table className="w-full text-sm mb-6">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-3 text-dark-300">Message</th>
              <th className="text-left py-3 text-dark-300">Type</th>
              <th className="text-left py-3 text-dark-300">Description</th>
            </tr>
          </thead>
          <tbody className="text-dark-400">
            <tr className="border-b border-dark-800">
              <td className="py-3 text-amber-400">MSG_WITNESS_TX</td>
              <td>0x40000001</td>
              <td>Request transaction with witness</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3 text-amber-400">MSG_WITNESS_BLOCK</td>
              <td>0x40000002</td>
              <td>Request block with witness</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3 text-amber-400">MSG_FILTERED_WITNESS_BLOCK</td>
              <td>0x40000003</td>
              <td>Filtered block with witness (for SPV)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Relay Behavior</h3>

      <p className="mb-4">
        Nodes handle transaction relay based on peer capabilities:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <div className="space-y-4">
          <div>
            <p className="text-amber-400 font-semibold mb-1">To NODE_WITNESS peers:</p>
            <p className="text-dark-300">
              Send full witness serialization. Include all witness data.
            </p>
          </div>
          <div>
            <p className="text-amber-400 font-semibold mb-1">To non-witness peers:</p>
            <p className="text-dark-300">
              Send legacy serialization only. Witness data is stripped.
            </p>
          </div>
          <div>
            <p className="text-amber-400 font-semibold mb-1">Requesting data:</p>
            <p className="text-dark-300">
              Use MSG_WITNESS_* types when requesting from NODE_WITNESS peers.
            </p>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">wtxid: Witness Transaction ID</h3>

      <Definition title="wtxid">
        <p>
          The hash of the full transaction including witness data. Unlike txid (which excludes
          witness), wtxid changes if witness data changes. Used for relay and mempool
          management.
        </p>
        <div className="mt-3 font-mono text-sm">
          <p>txid = SHA256d(legacy serialization)</p>
          <p>wtxid = SHA256d(witness serialization)</p>
        </div>
      </Definition>

      <Example title="txid vs wtxid">
        <div className="space-y-3 text-dark-300">
          <p>For a SegWit transaction:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>
              <strong>txid:</strong> Used in block merkle tree, output references, consensus
            </li>
            <li>
              <strong>wtxid:</strong> Used in witness commitment, relay deduplication
            </li>
          </ul>
          <p className="text-dark-500 mt-2 text-sm">
            For legacy transactions, txid == wtxid (no witness data to include)
          </p>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Witness Commitment in Blocks</h3>

      <p className="mb-4">
        SegWit blocks include a commitment to all wtxids in the coinbase transaction:
      </p>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># Coinbase witness commitment</p>
        <p className="text-dark-300">OP_RETURN</p>
        <p className="text-amber-400">0xaa21a9ed</p>
        <p className="text-dark-300">[32-byte commitment]</p>
        <p className="text-xs text-dark-500 mt-3">
          Commitment = SHA256d(witness_root || witness_reserved_value)
        </p>
      </div>

      <Callout type="info" title="Commitment Purpose">
        <p>
          The witness commitment allows SPV clients to verify they have complete witness data.
          Without it, a malicious node could omit witness data, and the client couldn't tell.
          The commitment ties witness integrity to the block's proof-of-work.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Backward Compatibility</h3>

      <p className="mb-4">
        BIP-144 maintains compatibility through careful design:
      </p>

      <ul className="list-disc list-inside space-y-2 mb-6 text-dark-300">
        <li>Old nodes receive legacy-serialized transactions (still valid)</li>
        <li>The marker byte 0x00 can't start a valid legacy transaction (zero inputs)</li>
        <li>Service bits allow nodes to discover peer capabilities</li>
        <li>Blocks are valid to old nodes (they ignore witness data)</li>
      </ul>

      <Callout type="success" title="Seamless Upgrade">
        <p>
          BIP-144's careful protocol design allowed the network to upgrade gradually. Nodes
          could adopt SegWit at their own pace while maintaining full connectivity with
          peers using either serialization format.
        </p>
      </Callout>
    </LessonLayout>
  );
}
