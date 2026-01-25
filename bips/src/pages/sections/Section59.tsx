import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section59() {
  return (
    <LessonLayout sectionId={59}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">BIP-14: Protocol Version and User Agent</h2>

      <p className="mb-4">
        BIP-14 standardizes how Bitcoin nodes identify themselves to peers using version
        messages and user agent strings. This enables network monitoring, debugging, and
        ensuring protocol compatibility.
      </p>

      <Callout type="info" title="Network Diagnostics">
        <p>
          User agent strings help researchers understand network composition—what software
          versions are running, what features are supported, and how diverse the network is.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Version Message</h3>

      <Definition title="Version Handshake">
        <p>
          When two Bitcoin nodes connect, they exchange version messages containing protocol
          version, services, timestamp, addresses, and user agent. This handshake establishes
          compatibility before further communication.
        </p>
      </Definition>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># Version message fields:</p>
        <p className="text-dark-300">version: 70015  # Protocol version</p>
        <p className="text-dark-300">services: 0x0409  # Service flags</p>
        <p className="text-dark-300">timestamp: 1609459200</p>
        <p className="text-dark-300">addr_recv: peer's address</p>
        <p className="text-dark-300">addr_from: our address</p>
        <p className="text-dark-300">nonce: random u64</p>
        <p className="text-amber-400">user_agent: "/Satoshi:25.0.0/"</p>
        <p className="text-dark-300">start_height: 820000</p>
        <p className="text-dark-300">relay: true</p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">User Agent Format</h3>

      <p className="mb-4">
        BIP-14 defines a standardized user agent string format:
      </p>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># General format:</p>
        <p className="text-amber-400">/Name:Version/Name:Version/.../</p>
        <p className="text-dark-400 mt-4 mb-2"># Examples:</p>
        <p className="text-dark-300">/Satoshi:25.0.0/</p>
        <p className="text-dark-300">/Satoshi:24.0.1/btcwire:0.5.0/</p>
        <p className="text-dark-300">/bitcoinj:0.15.10/</p>
        <p className="text-dark-300">/Bitcoin ABC:0.29.0/</p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Common User Agents</h3>

      <div className="overflow-x-auto">
        <table className="w-full text-sm mb-6">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-3 text-dark-300">Software</th>
              <th className="text-left py-3 text-dark-300">User Agent Pattern</th>
            </tr>
          </thead>
          <tbody className="text-dark-400">
            <tr className="border-b border-dark-800">
              <td className="py-3">Bitcoin Core</td>
              <td className="font-mono text-xs">/Satoshi:XX.X.X/</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3">btcd</td>
              <td className="font-mono text-xs">/btcwire:X.X.X/btcd:X.X.X/</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3">libbitcoin</td>
              <td className="font-mono text-xs">/libbitcoin:X.X.X/</td>
            </tr>
            <tr>
              <td className="py-3">BitcoinJ</td>
              <td className="font-mono text-xs">/bitcoinj:X.X.X/</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Protocol Version Numbers</h3>

      <p className="mb-4">
        Protocol versions indicate supported features:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li><strong>70001:</strong> BIP-31 pong messages</li>
          <li><strong>70002:</strong> BIP-35 mempool message</li>
          <li><strong>70011:</strong> BIP-111 NODE_BLOOM service bit</li>
          <li><strong>70012:</strong> BIP-130 sendheaders</li>
          <li><strong>70013:</strong> BIP-133 feefilter</li>
          <li><strong>70014:</strong> BIP-152 compact blocks</li>
          <li><strong>70015:</strong> BIP-339 WTXID relay</li>
          <li><strong>70016:</strong> BIP-155 addrv2</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Service Flags</h3>

      <p className="mb-4">
        The services field is a bitfield indicating node capabilities:
      </p>

      <Example title="Common Service Bits">
        <div className="space-y-2 font-mono text-xs">
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-amber-400">NODE_NETWORK (1 &lt;&lt; 0)</p>
            <p className="text-dark-500 ml-4">Full node, can serve blocks</p>
            <p className="text-amber-400 mt-2">NODE_BLOOM (1 &lt;&lt; 2)</p>
            <p className="text-dark-500 ml-4">Supports Bloom filtering (BIP-37)</p>
            <p className="text-amber-400 mt-2">NODE_WITNESS (1 &lt;&lt; 3)</p>
            <p className="text-dark-500 ml-4">Supports SegWit</p>
            <p className="text-amber-400 mt-2">NODE_COMPACT_FILTERS (1 &lt;&lt; 6)</p>
            <p className="text-dark-500 ml-4">Serves compact filters (BIP-157/158)</p>
            <p className="text-amber-400 mt-2">NODE_NETWORK_LIMITED (1 &lt;&lt; 10)</p>
            <p className="text-dark-500 ml-4">Pruned node, serves recent blocks only</p>
          </div>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Handshake Process</h3>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># Connection handshake:</p>
        <p className="text-dark-300">1. Node A → Node B: version message</p>
        <p className="text-dark-300">2. Node B → Node A: version message</p>
        <p className="text-dark-300">3. Node A → Node B: verack (acknowledgment)</p>
        <p className="text-dark-300">4. Node B → Node A: verack</p>
        <p className="text-emerald-400 mt-2">Connection established, can exchange messages</p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Privacy Considerations</h3>

      <Callout type="warning" title="Fingerprinting Risk">
        <p>
          User agents can fingerprint nodes, potentially deanonymizing users. Some
          privacy-focused software uses generic or configurable user agents to reduce
          this risk.
        </p>
      </Callout>

      <div className="space-y-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-1">Detailed User Agent</p>
          <p className="text-sm text-dark-300">
            Reveals software, version, OS—useful for debugging but privacy-reducing.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-1">Anonymous Option</p>
          <p className="text-sm text-dark-300">
            Bitcoin Core's -uacomment option can customize user agent. Some run with
            generic strings.
          </p>
        </div>
      </div>

      <Callout type="success" title="Network Health">
        <p>
          BIP-14's standardized identification enables monitoring network diversity and
          upgrade adoption. Researchers can track SegWit adoption, identify outdated nodes,
          and understand the network's software composition—all crucial for protocol evolution.
        </p>
      </Callout>
    </LessonLayout>
  );
}
