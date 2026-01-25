import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section64() {
  return (
    <LessonLayout sectionId={64}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">BIP-111: NODE_BLOOM Service Bit</h2>

      <p className="mb-4">
        BIP-111 added the NODE_BLOOM service bit, allowing nodes to advertise whether they
        support BIP-37 Bloom filter messages. This enabled a graceful deprecation path as
        the network moved away from Bloom filters.
      </p>

      <Callout type="info" title="Deprecation Mechanism">
        <p>
          NODE_BLOOM allowed Bloom filter support to become opt-in rather than mandatory.
          Nodes could disable it to avoid DoS attacks while still participating in the network.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Problem</h3>

      <p className="mb-4">
        Before BIP-111, all nodes were expected to process Bloom filters:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-rose-500/30 mb-6">
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>No way for nodes to refuse Bloom filter requests</li>
          <li>SPV clients couldn't know which peers support filtering</li>
          <li>DoS-vulnerable nodes had no opt-out mechanism</li>
          <li>Network couldn't transition away from BIP-37</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Service Bit</h3>

      <Definition title="NODE_BLOOM">
        <p>
          A service bit in the version message indicating that a node will accept and
          process BIP-37 filterload, filteradd, and filterclear messages.
        </p>
        <div className="font-mono text-sm text-amber-400 mt-3">
          NODE_BLOOM = 1 &lt;&lt; 2 = 0x04
        </div>
      </Definition>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># Service flags in version message:</p>
        <p className="text-dark-300">services = NODE_NETWORK  // 0x01</p>
        <p className="text-dark-300">services |= NODE_BLOOM   // 0x04</p>
        <p className="text-dark-300">services |= NODE_WITNESS // 0x08</p>
        <p className="text-amber-400 mt-2">Final: 0x0D (full node + bloom + segwit)</p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Node Behavior</h3>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">NODE_BLOOM Set</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>Process filterload messages</li>
            <li>Filter transactions/blocks per request</li>
            <li>Send merkleblock messages</li>
            <li>Vulnerable to DoS attacks</li>
          </ul>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">NODE_BLOOM Not Set</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>Ignore filter messages</li>
            <li>May disconnect filter senders</li>
            <li>Protected from Bloom DoS</li>
            <li>SPV clients should avoid</li>
          </ul>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">SPV Client Behavior</h3>

      <Example title="SPV Peer Selection">
        <div className="space-y-3 text-dark-300">
          <p className="text-dark-400 mb-2">When connecting to peers:</p>
          <div className="bg-dark-800 rounded-lg p-4 font-mono text-xs">
            <p className="text-dark-300">for peer in potential_peers:</p>
            <p className="text-dark-500 ml-4">if peer.services & NODE_BLOOM:</p>
            <p className="text-emerald-400 ml-8">connect(peer)  # Can use Bloom filters</p>
            <p className="text-dark-500 ml-4">else:</p>
            <p className="text-rose-400 ml-8">skip(peer)     # Won't process our filters</p>
          </div>
          <p className="text-dark-500 text-sm mt-3">
            Clients must check NODE_BLOOM before sending filterload
          </p>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Protocol Version</h3>

      <p className="mb-4">
        BIP-111 was introduced with protocol version 70011:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>
            <strong>Before 70011:</strong> Bloom filters assumed supported
          </li>
          <li>
            <strong>70011+:</strong> Must check NODE_BLOOM service bit
          </li>
          <li>
            <strong>Transition:</strong> Old clients might not check the bit
          </li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Bitcoin Core Settings</h3>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># Bitcoin Core configuration:</p>
        <p className="text-dark-300">-peerbloomfilters=0  # Disable (default since 0.19)</p>
        <p className="text-dark-300">-peerbloomfilters=1  # Enable for SPV clients</p>
        <p className="text-dark-500 mt-3">
          When disabled, node won't advertise NODE_BLOOM
        </p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Network Evolution</h3>

      <p className="mb-4">
        NODE_BLOOM enabled gradual network transition:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <ol className="list-decimal list-inside space-y-2 text-dark-300">
          <li>BIP-111 introduced - nodes can opt out of Bloom</li>
          <li>Node operators begin disabling for DoS protection</li>
          <li>SPV clients learn to check service bit</li>
          <li>BIP-157/158 provides better alternative</li>
          <li>Default changed to off (Bloom disabled by default)</li>
          <li>Most network no longer supports BIP-37</li>
        </ol>
      </div>

      <Callout type="warning" title="SPV Today">
        <p>
          SPV clients using Bloom filters increasingly struggle to find supporting peers.
          Modern light clients should use:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>BIP-157/158 compact block filters</li>
          <li>Electrum protocol servers</li>
          <li>Esplora or similar block explorer APIs</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Other Service Bits</h3>

      <p className="mb-4">
        BIP-111 followed the pattern of other service bits:
      </p>

      <div className="overflow-x-auto">
        <table className="w-full text-sm mb-6">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-3 text-dark-300">Bit</th>
              <th className="text-left py-3 text-dark-300">Name</th>
              <th className="text-left py-3 text-dark-300">Meaning</th>
            </tr>
          </thead>
          <tbody className="text-dark-400">
            <tr className="border-b border-dark-800">
              <td className="py-3 font-mono">0</td>
              <td>NODE_NETWORK</td>
              <td>Full node, serves blocks</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3 font-mono text-amber-400">2</td>
              <td className="text-amber-400">NODE_BLOOM</td>
              <td className="text-amber-400">Supports Bloom filters</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3 font-mono">3</td>
              <td>NODE_WITNESS</td>
              <td>Supports SegWit</td>
            </tr>
            <tr>
              <td className="py-3 font-mono">10</td>
              <td>NODE_NETWORK_LIMITED</td>
              <td>Pruned node</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Callout type="success" title="Graceful Deprecation">
        <p>
          BIP-111 demonstrates how to deprecate features without breaking the network.
          By making Bloom filter support advertised rather than assumed, nodes could
          individually opt out while SPV clients could still find supporting peers during
          the transition.
        </p>
      </Callout>
    </LessonLayout>
  );
}
