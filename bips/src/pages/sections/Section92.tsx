import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section92() {
  return (
    <LessonLayout sectionId={92}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Sidechains and Drivechains</h2>

      <p className="mb-4">
        Sidechains are separate blockchains pegged to Bitcoin, enabling experimentation
        with different features while leveraging Bitcoin's security. BIP-300/301 propose
        "drivechains" as a trustless mechanism for Bitcoin-sidechain transfers.
      </p>

      <Callout type="info" title="Two-Way Pegs">
        <p>
          Sidechains require a mechanism to move BTC between chains. Different approaches
          offer different trust trade-offs, from federated custody to miner-enforced rules.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Sidechain Concept</h3>

      <Definition title="Sidechain">
        <p>
          A separate blockchain whose native currency is pegged 1:1 to Bitcoin.
          BTC is "locked" on the main chain and "unlocked" on the sidechain,
          enabling transfer between the two.
        </p>
      </Definition>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># Sidechain peg flow:</p>
        <p className="text-dark-300">1. Lock 1 BTC on Bitcoin mainchain</p>
        <p className="text-dark-300">2. Prove lock to sidechain</p>
        <p className="text-dark-300">3. Receive 1 sBTC on sidechain</p>
        <p className="text-dark-300">4. Use sBTC with sidechain features</p>
        <p className="text-dark-300">5. Burn sBTC on sidechain</p>
        <p className="text-dark-300">6. Unlock original BTC on mainchain</p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Peg Mechanisms</h3>

      <div className="space-y-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">Federated Peg</p>
          <p className="text-sm text-dark-300">
            A multisig of known entities controls the locked BTC. Simple to implement
            but requires trust in the federation.
          </p>
          <p className="text-sm text-dark-500 mt-1">Example: Liquid Network</p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">SPV Proof</p>
          <p className="text-sm text-dark-300">
            Cryptographic proofs of Bitcoin transactions verified by sidechain.
            Trust-minimized but requires sidechain to verify Bitcoin headers.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-amber-400 font-bold mb-2">Drivechain (BIP-300/301)</p>
          <p className="text-sm text-dark-300">
            Bitcoin miners enforce sidechain withdrawals through hashrate voting.
            Requires Bitcoin soft fork to enable.
          </p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">BIP-300: Hashrate Escrows</h3>

      <Definition title="Drivechain">
        <p>
          A sidechain construction where Bitcoin miners collectively control the peg.
          Withdrawals require sustained miner voting over a long period, making theft
          expensive and publicly visible.
        </p>
      </Definition>

      <Example title="BIP-300 Withdrawal Process">
        <div className="space-y-3 font-mono text-xs">
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-2"># 1. Create withdrawal bundle:</p>
            <p className="text-dark-300">Sidechain proposes: "Pay 100 BTC to these addresses"</p>
            <p className="text-dark-300">Bundle hash committed to sidechain</p>
          </div>
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-2"># 2. Miner voting (3-6 months):</p>
            <p className="text-dark-300">Each block: miner votes ACK/NACK on bundle</p>
            <p className="text-dark-300">Threshold: ~13,150 ACKs needed</p>
            <p className="text-dark-300">Progress: +1 for ACK, -1 for NACK</p>
          </div>
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-2"># 3. If threshold reached:</p>
            <p className="text-emerald-400">Bundle transaction becomes valid</p>
            <p className="text-emerald-400">BTC unlocked to specified addresses</p>
          </div>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">BIP-301: Blind Merged Mining</h3>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># Blind merged mining:</p>
        <p className="text-dark-300">Bitcoin miners can mine sidechains without running them</p>
        <p className="text-dark-300">Sidechain nodes provide "work" to miners</p>
        <p className="text-dark-300">Miners include commitment in Bitcoin blocks</p>
        <p className="text-dark-400 mt-3 mb-2"># Benefits:</p>
        <p className="text-dark-300">• Sidechains inherit Bitcoin's hashrate security</p>
        <p className="text-dark-300">• Miners earn sidechain fees with no extra work</p>
        <p className="text-dark-300">• No need for separate sidechain mining</p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Security Analysis</h3>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4 border border-emerald-500/30">
          <p className="text-emerald-400 font-bold mb-2">Drivechain Security</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>Theft requires months of sustained attack</li>
            <li>Attack is publicly visible</li>
            <li>Attackers identified (miner hashrate)</li>
            <li>Community can respond (UASF-style)</li>
          </ul>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 border border-rose-500/30">
          <p className="text-rose-400 font-bold mb-2">Risks & Concerns</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>51% miners could steal (with patience)</li>
            <li>Increases miner influence over Bitcoin</li>
            <li>Soft fork required on Bitcoin</li>
            <li>Complex consensus rules</li>
          </ul>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Existing Sidechains</h3>

      <div className="overflow-x-auto">
        <table className="w-full text-sm mb-6">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-3 text-dark-300">Sidechain</th>
              <th className="text-left py-3 text-dark-300">Peg Type</th>
              <th className="text-left py-3 text-dark-300">Features</th>
            </tr>
          </thead>
          <tbody className="text-dark-400">
            <tr className="border-b border-dark-800">
              <td className="py-3 font-mono text-amber-400">Liquid</td>
              <td>Federated (15-of-15)</td>
              <td>Confidential txs, fast blocks, assets</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3 font-mono text-amber-400">RSK</td>
              <td>Federated + merged mining</td>
              <td>EVM compatibility, smart contracts</td>
            </tr>
            <tr>
              <td className="py-3 font-mono text-amber-400">Stacks</td>
              <td>Proof of Transfer</td>
              <td>Smart contracts, NFTs</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Drivechain Debate</h3>

      <Callout type="warning" title="Controversial Proposal">
        <p>
          Drivechains (BIP-300/301) are controversial in the Bitcoin community:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>Proponents:</strong> Enable permissionless innovation, opt-in risk</li>
          <li><strong>Critics:</strong> Miners could steal, increases miner power</li>
          <li><strong>Status:</strong> Not activated, ongoing debate</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Sidechain Use Cases</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>
            <strong>Confidential transactions:</strong> Hidden amounts (Liquid)
          </li>
          <li>
            <strong>Fast confirmations:</strong> 1-minute blocks instead of 10
          </li>
          <li>
            <strong>Smart contracts:</strong> EVM or other VMs
          </li>
          <li>
            <strong>Experimental features:</strong> Test before mainnet
          </li>
          <li>
            <strong>Scalability:</strong> Offload traffic from mainchain
          </li>
        </ul>
      </div>

      <Callout type="success" title="Layer 2 Diversity">
        <p>
          Sidechains offer a different scaling and feature trade-off than Lightning
          or other L2s. Whether through federated custody or drivechain mechanics,
          they enable Bitcoin-backed experimentation while keeping the base layer
          conservative. The ongoing drivechain debate reflects Bitcoin's careful
          approach to protocol changes.
        </p>
      </Callout>
    </LessonLayout>
  );
}
