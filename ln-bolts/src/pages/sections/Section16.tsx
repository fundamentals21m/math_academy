import { LessonLayout } from '@/components/layout';
import { Definition, Example, Theorem } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section16() {
  return (
    <LessonLayout sectionId={16}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">BOLT #7: Network Topology</h2>

      <p className="mb-4">
        BOLT #7 defines the gossip protocol that Lightning nodes use to discover each other
        and learn about the network topology. This enables decentralized routing without
        relying on central servers.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Gossip Message Types</h3>

      <p className="mb-4">
        The gossip protocol uses three main message types to share network information:
      </p>

      <Definition title="channel_announcement (type 256)">
        Announces a new channel to the network. Requires signatures from both nodes and
        proof of the funding transaction:
        <ul className="mt-2 list-disc list-inside space-y-1">
          <li><strong>node_signature_1, node_signature_2:</strong> Signatures from both nodes</li>
          <li><strong>bitcoin_signature_1, bitcoin_signature_2:</strong> Funding key signatures</li>
          <li><strong>short_channel_id:</strong> Compact channel identifier</li>
          <li><strong>node_id_1, node_id_2:</strong> Public keys of both nodes</li>
          <li><strong>bitcoin_key_1, bitcoin_key_2:</strong> Funding pubkeys</li>
        </ul>
      </Definition>

      <Definition title="node_announcement (type 257)">
        Announces node metadata such as alias, color, and connection addresses:
        <ul className="mt-2 list-disc list-inside space-y-1">
          <li><strong>signature:</strong> Signature from the node</li>
          <li><strong>timestamp:</strong> Unix timestamp (newer replaces older)</li>
          <li><strong>node_id:</strong> Node's public key</li>
          <li><strong>rgb_color:</strong> 3 bytes for node color</li>
          <li><strong>alias:</strong> 32-byte UTF-8 node name</li>
          <li><strong>addresses:</strong> How to connect (IPv4, IPv6, Tor, etc.)</li>
        </ul>
      </Definition>

      <Definition title="channel_update (type 258)">
        Updates channel routing parameters (one per direction):
        <ul className="mt-2 list-disc list-inside space-y-1">
          <li><strong>signature:</strong> Signature from the announcing node</li>
          <li><strong>short_channel_id:</strong> Which channel this updates</li>
          <li><strong>timestamp:</strong> For determining freshness</li>
          <li><strong>channel_flags:</strong> Direction and disabled status</li>
          <li><strong>cltv_expiry_delta:</strong> Timelock delta for forwarding</li>
          <li><strong>htlc_minimum_msat:</strong> Minimum HTLC size</li>
          <li><strong>fee_base_msat:</strong> Base routing fee</li>
          <li><strong>fee_proportional_millionths:</strong> Per-satoshi fee rate</li>
        </ul>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Short Channel ID</h3>

      <p className="mb-4">
        The short_channel_id is a compact 8-byte identifier for channels:
      </p>

      <Theorem title="Short Channel ID Format">
        <div className="font-mono text-sm bg-dark-800 p-3 rounded mt-2">
          block_height (3 bytes) || tx_index (3 bytes) || output_index (2 bytes)
        </div>
        <p className="mt-2">
          Human-readable format: block_height x tx_index x output_index
          <br />
          Example: 539268x845x1
        </p>
      </Theorem>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Announcement Signatures</h3>

      <p className="mb-4">
        Before a channel can be announced, both peers must exchange signatures:
      </p>

      <Definition title="announcement_signatures (type 259)">
        Exchanged directly between peers (not gossiped):
        <ul className="mt-2 list-disc list-inside space-y-1">
          <li><strong>channel_id:</strong> The channel being announced</li>
          <li><strong>short_channel_id:</strong> Derived from funding tx location</li>
          <li><strong>node_signature:</strong> Peer's signature for announcement</li>
          <li><strong>bitcoin_signature:</strong> Signature with funding key</li>
        </ul>
      </Definition>

      <Callout type="info" title="Confirmation Requirement">
        Channels can only be announced after 6 confirmations of the funding transaction.
        This prevents announcement of channels that might be reorganized away.
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Address Types</h3>

      <p className="mb-4">
        Node announcements can include multiple address types:
      </p>

      <Example title="Supported Address Types">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-2">Type</th>
              <th className="text-left py-2">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-dark-800">
              <td className="py-2 font-mono">1</td>
              <td className="py-2">IPv4 (4 bytes + 2 byte port)</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2 font-mono">2</td>
              <td className="py-2">IPv6 (16 bytes + 2 byte port)</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2 font-mono">4</td>
              <td className="py-2">Tor v3 onion (35 bytes + 2 byte port)</td>
            </tr>
            <tr>
              <td className="py-2 font-mono">5</td>
              <td className="py-2">DNS hostname (variable + 2 byte port)</td>
            </tr>
          </tbody>
        </table>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Gossip Propagation</h3>

      <p className="mb-4">
        Nodes share gossip messages with their peers, who forward to their peers:
      </p>

      <Theorem title="Gossip Rules">
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>
            <strong>Rate Limiting:</strong> Nodes should flush outgoing gossip every 60 seconds
          </li>
          <li>
            <strong>Deduplication:</strong> Don't forward messages already sent to a peer
          </li>
          <li>
            <strong>Validation:</strong> Verify signatures before forwarding
          </li>
          <li>
            <strong>Freshness:</strong> Only accept channel_updates with newer timestamps
          </li>
        </ul>
      </Theorem>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Channel Pruning</h3>

      <p className="mb-4">
        Stale channels are removed from the network view:
      </p>

      <Callout type="warning" title="Pruning Rules">
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>No updates:</strong> Channels with no channel_update in 2 weeks are pruned
          </li>
          <li>
            <strong>Closed on-chain:</strong> Channels closed on-chain (72+ blocks) are pruned
          </li>
          <li>
            <strong>Invalid funding:</strong> Funding tx not found or spent = prune
          </li>
        </ul>
      </Callout>
    </LessonLayout>
  );
}
