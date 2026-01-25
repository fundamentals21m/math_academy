import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section04() {
  return (
    <LessonLayout sectionId={4}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Understanding BIP Classification</h2>

      <p className="mb-4">
        Not all BIPs are created equal. A change to how wallets display addresses is fundamentally
        different from a change to what makes a block valid. BIPs are classified by <strong>layer</strong>{' '}
        to help developers and users understand the scope and impact of each proposal.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Bitcoin Stack</h3>

      <p className="mb-4">
        Think of Bitcoin as a layered system, similar to the OSI model for networking:
      </p>

      <div className="bg-dark-900 rounded-xl overflow-hidden mb-6">
        <div className="bg-emerald-500/20 p-4 border-b border-dark-700">
          <div className="flex justify-between items-center">
            <span className="text-emerald-400 font-bold">Applications Layer</span>
            <span className="text-xs text-dark-400">Wallets, Exchanges, Payment Processors</span>
          </div>
        </div>
        <div className="bg-blue-500/20 p-4 border-b border-dark-700">
          <div className="flex justify-between items-center">
            <span className="text-blue-400 font-bold">API/RPC Layer</span>
            <span className="text-xs text-dark-400">JSON-RPC, REST APIs</span>
          </div>
        </div>
        <div className="bg-amber-500/20 p-4 border-b border-dark-700">
          <div className="flex justify-between items-center">
            <span className="text-amber-400 font-bold">Peer Services Layer</span>
            <span className="text-xs text-dark-400">P2P Protocol, Message Types</span>
          </div>
        </div>
        <div className="bg-rose-500/20 p-4">
          <div className="flex justify-between items-center">
            <span className="text-rose-400 font-bold">Consensus Layer</span>
            <span className="text-xs text-dark-400">Block/Transaction Validity Rules</span>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Consensus Layer</h3>

      <Definition title="Consensus Layer BIP">
        <p>
          A BIP that changes the rules for what constitutes a valid block or transaction.
          All full nodes must implement these rules identically, or they risk following
          a different chain. These are the most critical and contentious BIPs.
        </p>
      </Definition>

      <p className="mb-4">
        Consensus changes can be either <strong>soft forks</strong> or <strong>hard forks</strong>:
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4 border border-amber-500/30">
          <p className="text-amber-400 font-bold mb-2">Soft Fork</p>
          <p className="text-sm text-dark-300 mb-2">
            Tightens rules. Old nodes still consider new blocks valid (but may not understand all features).
          </p>
          <p className="text-xs text-dark-500">Examples: SegWit (BIP-141), Taproot (BIP-341)</p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 border border-rose-500/30">
          <p className="text-rose-400 font-bold mb-2">Hard Fork</p>
          <p className="text-sm text-dark-300 mb-2">
            Loosens rules. Old nodes reject new blocks. Requires all nodes to upgrade or risk chain split.
          </p>
          <p className="text-xs text-dark-500">Examples: Block size increase would require hard fork</p>
        </div>
      </div>

      <Example title="Consensus BIP Examples">
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li><strong>BIP-16:</strong> P2SH — New address type with embedded script</li>
          <li><strong>BIP-66:</strong> Strict DER signatures — Removed malleability vector</li>
          <li><strong>BIP-141:</strong> Segregated Witness — Signature separation, new weight system</li>
          <li><strong>BIP-341:</strong> Taproot — MAST, Schnorr signatures</li>
        </ul>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Peer Services Layer</h3>

      <Definition title="Peer Services BIP">
        <p>
          A BIP that changes how nodes communicate with each other. These don't affect which
          blocks/transactions are valid, but do affect how efficiently the network propagates
          data and how nodes discover each other.
        </p>
      </Definition>

      <p className="mb-4">
        Peer Services changes typically involve:
      </p>

      <ul className="list-disc list-inside space-y-2 mb-6 text-dark-300">
        <li>New message types in the P2P protocol</li>
        <li>Changes to handshake procedures</li>
        <li>Privacy improvements for network communication</li>
        <li>Efficiency improvements for block/transaction relay</li>
      </ul>

      <Example title="Peer Services BIP Examples">
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li><strong>BIP-31:</strong> Pong message — Connection liveness testing</li>
          <li><strong>BIP-152:</strong> Compact blocks — Faster block propagation</li>
          <li><strong>BIP-155:</strong> addrv2 — Support for Tor v3 addresses</li>
          <li><strong>BIP-324:</strong> Encrypted P2P — Protection against eavesdropping</li>
        </ul>
      </Example>

      <Callout type="info" title="Backwards Compatibility">
        <p>
          Peer Services changes can usually be deployed gradually. Nodes using old protocols
          can still communicate with upgraded nodes (with reduced efficiency). This makes
          deployment less risky than consensus changes.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">API/RPC Layer</h3>

      <Definition title="API/RPC BIP">
        <p>
          A BIP that defines interfaces for applications to interact with Bitcoin nodes.
          This includes the JSON-RPC interface used by wallets, block explorers, and other
          software that connects to Bitcoin Core.
        </p>
      </Definition>

      <p className="mb-4">
        API BIPs are generally implementation-specific and don't require network-wide
        consensus. Different node implementations may have different APIs.
      </p>

      <Example title="API/RPC BIP Examples">
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li><strong>BIP-22:</strong> getblocktemplate — Mining interface for pools</li>
          <li><strong>BIP-23:</strong> Pooled mining extensions — Enhanced mining API</li>
        </ul>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Applications Layer</h3>

      <Definition title="Applications Layer BIP">
        <p>
          A BIP that defines standards for Bitcoin applications like wallets. These don't
          affect the Bitcoin protocol itself but ensure interoperability between different
          wallet implementations.
        </p>
      </Definition>

      <p className="mb-4">
        Most wallet-related BIPs fall into this category:
      </p>

      <Example title="Applications BIP Examples">
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li><strong>BIP-21:</strong> URI scheme — bitcoin: payment links</li>
          <li><strong>BIP-32:</strong> HD wallets — Deterministic key derivation</li>
          <li><strong>BIP-39:</strong> Mnemonics — Seed phrase word lists</li>
          <li><strong>BIP-44:</strong> Multi-account hierarchy — Standard derivation paths</li>
          <li><strong>BIP-174:</strong> PSBT — Partially signed transaction format</li>
        </ul>
      </Example>

      <Callout type="success" title="Why This Matters">
        <p>
          Applications layer BIPs are why you can import a seed phrase from one wallet into
          another and see the same addresses. Without standards like BIP-39 and BIP-44,
          wallet interoperability would be impossible.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Classification Summary</h3>

      <div className="overflow-x-auto">
        <table className="w-full text-sm mb-6">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-3 text-dark-300">Layer</th>
              <th className="text-left py-3 text-dark-300">Scope</th>
              <th className="text-left py-3 text-dark-300">Deployment</th>
              <th className="text-left py-3 text-dark-300">Risk</th>
            </tr>
          </thead>
          <tbody className="text-dark-400">
            <tr className="border-b border-dark-800">
              <td className="py-3 text-rose-400">Consensus</td>
              <td>All full nodes</td>
              <td>Soft/Hard fork</td>
              <td className="text-rose-400">Highest</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3 text-amber-400">Peer Services</td>
              <td>Network nodes</td>
              <td>Gradual rollout</td>
              <td className="text-amber-400">Medium</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3 text-blue-400">API/RPC</td>
              <td>Node implementations</td>
              <td>Per-implementation</td>
              <td className="text-blue-400">Low</td>
            </tr>
            <tr>
              <td className="py-3 text-emerald-400">Applications</td>
              <td>Wallets, tools</td>
              <td>Voluntary adoption</td>
              <td className="text-emerald-400">Lowest</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Callout type="note" title="Looking Ahead">
        <p>
          In the following sections, we'll explore the BIP status lifecycle in detail, then
          discuss how Bitcoin upgrades actually get deployed. Understanding layers helps you
          evaluate which BIPs require which level of scrutiny.
        </p>
      </Callout>
    </LessonLayout>
  );
}
