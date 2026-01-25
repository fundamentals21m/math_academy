import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section85() {
  return (
    <LessonLayout sectionId={85}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Lightning Network Overview</h2>

      <p className="mb-4">
        The Lightning Network is Bitcoin's primary Layer 2 scaling solution, enabling
        instant, low-cost payments through a network of payment channels. While not
        defined by a single BIP, it builds on numerous Bitcoin improvements.
      </p>

      <Callout type="info" title="BOLTs, Not BIPs">
        <p>
          Lightning is specified by BOLTs (Basis of Lightning Technology), a separate
          specification process. However, it relies heavily on BIPs including SegWit
          (BIP-141), HTLCs (BIP-199), and various signature schemes.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Core Concept</h3>

      <Definition title="Payment Channel">
        <p>
          A two-party agreement backed by on-chain Bitcoin that enables unlimited
          off-chain transactions. Only opening and closing transactions require
          blockchain confirmation.
        </p>
      </Definition>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># Lightning channel lifecycle:</p>
        <p className="text-dark-300">1. Open: Fund 2-of-2 multisig on-chain</p>
        <p className="text-dark-300">2. Transact: Exchange signed "commitment" txs</p>
        <p className="text-dark-300">3. Route: Payments hop across channels</p>
        <p className="text-dark-300">4. Close: Broadcast final state to chain</p>
        <p className="text-dark-500 mt-3">
          Thousands of payments, only 2 on-chain transactions
        </p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Channel Architecture</h3>

      <Example title="Commitment Transaction Structure">
        <div className="space-y-3 font-mono text-xs">
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-2"># Funding transaction (on-chain):</p>
            <p className="text-dark-300">Input: Alice's UTXO(s)</p>
            <p className="text-dark-300">Output: 2-of-2 multisig(Alice, Bob)</p>
          </div>
          <div className="bg-dark-800 rounded-lg p-4">
            <p className="text-dark-400 mb-2"># Commitment transaction (off-chain):</p>
            <p className="text-dark-300">Input: Funding tx output</p>
            <p className="text-dark-300">Outputs:</p>
            <p className="text-dark-300 ml-4">- Alice's balance (immediately spendable by Alice)</p>
            <p className="text-dark-300 ml-4">- Bob's balance (timelocked OR revocation key)</p>
          </div>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Revocation Mechanism</h3>

      <p className="mb-4">
        Old channel states must be revocable to prevent fraud:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <div className="space-y-4">
          <div>
            <p className="text-amber-400 font-bold">Commitment Transaction Asymmetry</p>
            <p className="text-sm text-dark-300">
              Each party holds a different version where their own output has a
              timelock + revocation condition.
            </p>
          </div>
          <div>
            <p className="text-amber-400 font-bold">Revocation Keys</p>
            <p className="text-sm text-dark-300">
              When updating state, parties exchange revocation secrets for old
              commitments. Publishing old state allows counterparty to claim all funds.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># Bob's output in Alice's commitment:</p>
        <p className="text-dark-300">IF</p>
        <p className="text-dark-300 ml-4">Alice_revocation_key</p>
        <p className="text-dark-300">ELSE</p>
        <p className="text-dark-300 ml-4">to_self_delay CSV AND Bob_delayed_key</p>
        <p className="text-dark-300">ENDIF</p>
        <p className="text-dark-500 mt-2">
          If Alice broadcasts old state, Bob uses revocation key
        </p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Multi-Hop Routing</h3>

      <p className="mb-4">
        Lightning's power comes from routing payments across multiple channels:
      </p>

      <div className="bg-dark-800 rounded-lg p-5 font-mono text-sm mb-6">
        <p className="text-dark-400 mb-2"># Payment routing with HTLCs:</p>
        <p className="text-dark-300">Alice wants to pay Dave 10,000 sats</p>
        <p className="text-dark-300">Path: Alice → Bob → Carol → Dave</p>
        <p className="text-dark-400 mt-3 mb-2"># HTLC chain:</p>
        <p className="text-dark-300">Alice→Bob: HTLC 10,300 sats (fees)</p>
        <p className="text-dark-300">Bob→Carol: HTLC 10,150 sats</p>
        <p className="text-dark-300">Carol→Dave: HTLC 10,000 sats</p>
        <p className="text-amber-400 mt-2">Dave reveals preimage → all HTLCs settle atomically</p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Channel States</h3>

      <div className="overflow-x-auto">
        <table className="w-full text-sm mb-6">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-3 text-dark-300">State</th>
              <th className="text-left py-3 text-dark-300">Description</th>
            </tr>
          </thead>
          <tbody className="text-dark-400">
            <tr className="border-b border-dark-800">
              <td className="py-3 font-mono text-amber-400">PENDING_OPEN</td>
              <td>Funding tx broadcast, awaiting confirmations</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3 font-mono text-amber-400">OPEN</td>
              <td>Channel active, can route payments</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-3 font-mono text-amber-400">PENDING_CLOSE</td>
              <td>Closing tx broadcast, awaiting confirmation</td>
            </tr>
            <tr>
              <td className="py-3 font-mono text-amber-400">CLOSED</td>
              <td>Funds returned to respective parties</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Closing Channels</h3>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4 border border-emerald-500/30">
          <p className="text-emerald-400 font-bold mb-2">Cooperative Close</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>Both parties sign closing tx</li>
            <li>No timelocks needed</li>
            <li>Lowest fees, fastest</li>
          </ul>
        </div>
        <div className="bg-dark-800 rounded-lg p-4 border border-amber-500/30">
          <p className="text-amber-400 font-bold mb-2">Force Close</p>
          <ul className="text-sm text-dark-300 space-y-1">
            <li>Broadcast commitment tx</li>
            <li>Timelock delay for initiator</li>
            <li>Used when peer unresponsive</li>
          </ul>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">BIP Dependencies</h3>

      <Callout type="info" title="Required Bitcoin Features">
        <ul className="list-disc list-inside space-y-1">
          <li><strong>BIP-141 SegWit:</strong> Fixes malleability for commitment txs</li>
          <li><strong>BIP-68/112 CSV:</strong> Relative timelocks for revocation</li>
          <li><strong>BIP-65 CLTV:</strong> Absolute timelocks for HTLCs</li>
          <li><strong>BIP-199 HTLCs:</strong> Atomic multi-hop payments</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Network Statistics</h3>

      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700/50 mb-6">
        <p className="text-dark-400 mb-3">Lightning Network capabilities:</p>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>
            <strong>Capacity:</strong> Thousands of BTC in channels
          </li>
          <li>
            <strong>Nodes:</strong> Tens of thousands active nodes
          </li>
          <li>
            <strong>Speed:</strong> Sub-second payments
          </li>
          <li>
            <strong>Cost:</strong> Typically &lt;1 satoshi per hop
          </li>
        </ul>
      </div>

      <Callout type="success" title="Bitcoin's Scaling Solution">
        <p>
          Lightning Network demonstrates that Bitcoin can scale to millions of
          transactions per second while preserving its security model. By moving
          most transactions off-chain and settling only when necessary, Lightning
          transforms Bitcoin from digital gold into digital cash.
        </p>
      </Callout>
    </LessonLayout>
  );
}
