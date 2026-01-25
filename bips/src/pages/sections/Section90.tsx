import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section90() {
  return (
    <LessonLayout sectionId={90}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">RGB Protocol</h2>

      <p className="mb-4">
        RGB is a client-side validated smart contract protocol built on Bitcoin.
        It enables tokens, NFTs, and complex contracts using Bitcoin as a commitment
        layer while keeping all contract logic and data off-chain.
      </p>

      <Callout type="info" title="Client-Side Validation">
        <p>
          Unlike blockchain-based smart contracts, RGB validation happens on the
          client side. Only cryptographic commitments are anchored to Bitcoin,
          enabling unlimited scalability and privacy.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Core Philosophy</h3>

      <Definition title="Client-Side Validation (CSV)">
        <p>
          A paradigm where contract state and validation rules are held by interested
          parties, not stored globally. The blockchain only provides a timestamped
          commitment anchor—proof that something existed at a particular time.
        </p>
      </Definition>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># RGB vs Traditional Smart Contracts:</p>
        <p className="text-dark-300">Ethereum: All nodes validate all contracts</p>
        <p className="text-dark-300 ml-4">↳ Global consensus on all state</p>
        <p className="text-dark-300 mt-2">RGB: Only parties to contract validate</p>
        <p className="text-dark-300 ml-4">↳ Bitcoin just timestamps commitments</p>
        <p className="text-amber-400 mt-3">Result: Unlimited scalability, maximum privacy</p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">How RGB Works</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">1.</span>
            <div>
              <p className="text-dark-300 font-bold">Single-Use Seals</p>
              <p className="text-sm text-dark-400">
                RGB state is bound to Bitcoin UTXOs. Spending the UTXO "opens the seal"
                and transitions the RGB state.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">2.</span>
            <div>
              <p className="text-dark-300 font-bold">Commitments</p>
              <p className="text-sm text-dark-400">
                State transitions are committed to Bitcoin transactions using
                OP_RETURN or Taproot tweaks.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">3.</span>
            <div>
              <p className="text-dark-300 font-bold">Off-Chain Data</p>
              <p className="text-sm text-dark-400">
                Actual contract data, ownership, and history are exchanged
                directly between parties.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-amber-400 font-bold">4.</span>
            <div>
              <p className="text-dark-300 font-bold">Client Validation</p>
              <p className="text-sm text-dark-400">
                Recipients validate the full history back to contract genesis
                to verify current state.
              </p>
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Single-Use Seals</h3>

      <Example title="UTXO as Seal">
        <div className="space-y-3 font-mono text-xs">
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-2"># RGB state bound to UTXO:</p>
            <p className="text-dark-300">UTXO abc123:0 = "sealed"</p>
            <p className="text-dark-300">Contains: 100 RGB tokens owned by Alice</p>
          </div>
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-2"># State transition (transfer):</p>
            <p className="text-dark-300">Alice spends UTXO abc123:0 → "seal opened"</p>
            <p className="text-dark-300">New tx output def456:0 = "new seal"</p>
            <p className="text-dark-300">Contains: 100 RGB tokens now owned by Bob</p>
          </div>
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-2"># Key property:</p>
            <p className="text-amber-400">UTXO can only be spent once → state can only transition once</p>
          </div>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">RGB Capabilities</h3>

      <div className="space-y-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">Fungible Tokens (RGB20)</p>
          <p className="text-sm text-dark-300">
            Issue tokens with customizable properties: supply, divisibility,
            transfer rules. Like ERC-20 but private and scalable.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">NFTs (RGB21)</p>
          <p className="text-sm text-dark-300">
            Unique digital assets with provable ownership and transfer history.
            Media stored off-chain with content addressing.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">Smart Contracts</p>
          <p className="text-sm text-dark-300">
            Complex logic including DEXs, DAOs, and multi-party contracts—all
            validated client-side.
          </p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Privacy Properties</h3>

      <Callout type="info" title="Maximum Privacy">
        <ul className="list-disc list-inside space-y-1">
          <li><strong>No global state:</strong> Only parties see contract data</li>
          <li><strong>Blinded UTXOs:</strong> Receivers can hide which UTXO receives assets</li>
          <li><strong>Confidential amounts:</strong> Transfer amounts can be hidden</li>
          <li><strong>No metadata on-chain:</strong> Bitcoin tx looks like any other</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Lightning Integration</h3>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># RGB over Lightning:</p>
        <p className="text-dark-300">Lightning channels can carry RGB assets</p>
        <p className="text-dark-300">State transitions happen within channel updates</p>
        <p className="text-dark-400 mt-3 mb-2"># Benefits:</p>
        <p className="text-dark-300">• Instant RGB asset transfers</p>
        <p className="text-dark-300">• Near-zero fees</p>
        <p className="text-dark-300">• Multi-hop routing for RGB tokens</p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Comparison</h3>

      <div className="overflow-x-auto">
        <table className="w-full text-sm mb-6">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-3 text-dark-300">Property</th>
              <th className="text-left py-3 text-dark-300">Ethereum</th>
              <th className="text-left py-3 text-dark-300">RGB</th>
            </tr>
          </thead>
          <tbody className="text-dark-400">
            <tr className="border-b border-dark-800">
              <td className="py-3">Validation</td>
              <td>All nodes</td>
              <td className="text-emerald-400">Only parties</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3">Privacy</td>
              <td className="text-rose-400">Public by default</td>
              <td className="text-emerald-400">Private by default</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3">Scalability</td>
              <td>Limited by global consensus</td>
              <td className="text-emerald-400">Unlimited (parallel)</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3">Security model</td>
              <td>ETH security</td>
              <td className="text-emerald-400">Bitcoin security</td>
            </tr>
            <tr>
              <td className="py-3">Data availability</td>
              <td>On-chain</td>
              <td className="text-amber-400">Off-chain (user managed)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Trade-offs</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-rose-500/30 mb-6">
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>
            <strong>Data management:</strong> Users must store/backup their contract data
          </li>
          <li>
            <strong>History validation:</strong> New owners validate full history (can be heavy)
          </li>
          <li>
            <strong>Interactivity:</strong> Transfers require sender/receiver coordination
          </li>
          <li>
            <strong>Ecosystem maturity:</strong> Younger than EVM-based systems
          </li>
        </ul>
      </div>

      <Callout type="success" title="Bitcoin-Native Smart Contracts">
        <p>
          RGB demonstrates that sophisticated smart contracts are possible on Bitcoin
          without changing the base protocol. By moving validation off-chain while
          anchoring to Bitcoin's security, RGB achieves the trifecta of scalability,
          privacy, and security that other smart contract platforms struggle to provide.
        </p>
      </Callout>
    </LessonLayout>
  );
}
