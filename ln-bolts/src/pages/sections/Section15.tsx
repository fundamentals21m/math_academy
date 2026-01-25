import { LessonLayout } from '@/components/layout';
import { Definition, Example, Theorem } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section15() {
  return (
    <LessonLayout sectionId={15}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Revoked Transaction Close</h2>

      <p className="mb-4">
        A revoked transaction close occurs when a peer broadcasts an old (revoked) commitment
        transaction. The honest party can use the revocation key to claim ALL channel funds
        as a penalty. This is Lightning's primary fraud prevention mechanism.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Detecting Revoked Commitments</h3>

      <p className="mb-4">
        Nodes must monitor the blockchain for any commitment transactions from their channels.
        If an old commitment appears, it's a breach attempt:
      </p>

      <Definition title="Breach Detection">
        For each confirmed transaction spending a funding output:
        <ol className="mt-2 list-decimal list-inside space-y-1">
          <li>Identify which channel it belongs to</li>
          <li>Check if it's the current commitment or an old one</li>
          <li>If old: retrieve the corresponding per_commitment_secret</li>
          <li>Construct and broadcast the penalty transaction</li>
        </ol>
      </Definition>

      <Callout type="danger" title="Time-Critical Response">
        The penalty transaction must be broadcast and confirmed BEFORE the cheater's
        to_self_delay expires. If the cheater spends their to_local output first,
        those funds are lost forever.
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Constructing Penalty Transactions</h3>

      <p className="mb-4">
        With the revocation key, the honest party can spend multiple outputs:
      </p>

      <Theorem title="Revocable Outputs">
        The revocation key can claim:
        <ul className="mt-2 list-disc list-inside space-y-1">
          <li><strong>to_local:</strong> The cheater's main balance</li>
          <li><strong>Offered HTLCs:</strong> HTLCs the cheater offered (via revocation path)</li>
          <li><strong>Received HTLCs:</strong> HTLCs to the cheater (via revocation path)</li>
          <li><strong>HTLC-success/timeout outputs:</strong> If cheater used second-stage txs</li>
        </ul>
      </Theorem>

      <Example title="Penalty Transaction Structure">
        <div className="font-mono text-xs bg-dark-800 p-3 rounded space-y-1">
          <p className="text-gray-400">// Inputs - all revocable outputs</p>
          <p>vin[0]: commitment_tx:to_local (using revocation key)</p>
          <p>vin[1]: commitment_tx:htlc_0 (using revocation key)</p>
          <p>vin[2]: commitment_tx:htlc_1 (using revocation key)</p>
          <p>...</p>
          <p className="text-gray-400 mt-2">// Single output to self</p>
          <p>vout[0]: (total - fee) → honest_party_address</p>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Spending Revoked Outputs</h3>

      <p className="mb-4">
        Each output type has a revocation spending path:
      </p>

      <Definition title="to_local Revocation Spend">
        <div className="font-mono text-xs bg-dark-800 p-3 rounded space-y-1">
          <p>witness[0]: &lt;signature with revocation_privkey&gt;</p>
          <p>witness[1]: 0x01 (selects OP_IF branch)</p>
          <p>witness[2]: &lt;to_local script&gt;</p>
        </div>
      </Definition>

      <Definition title="HTLC Revocation Spend">
        <div className="font-mono text-xs bg-dark-800 p-3 rounded space-y-1">
          <p>witness[0]: &lt;revocation_sig&gt;</p>
          <p>witness[1]: &lt;revocationpubkey&gt;</p>
          <p>witness[2]: &lt;htlc script&gt;</p>
        </div>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Racing Conditions</h3>

      <p className="mb-4">
        After a revoked commitment is broadcast, there's a race between:
      </p>

      <Example title="The Race">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-2">Cheater's Goal</th>
              <th className="text-left py-2">Honest Party's Goal</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-dark-800">
              <td className="py-2">Wait out CSV delay</td>
              <td className="py-2">Broadcast penalty tx</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2">Spend to_local after delay</td>
              <td className="py-2">Claim everything with revocation</td>
            </tr>
            <tr>
              <td className="py-2">Maybe claim HTLCs</td>
              <td className="py-2">Beat them to all outputs</td>
            </tr>
          </tbody>
        </table>
      </Example>

      <Callout type="success" title="Why the Honest Party Wins">
        The to_self_delay (typically 144-2016 blocks) gives the honest party plenty of time
        to detect the breach and broadcast penalty transactions. The revocation key allows
        immediate spending, while the cheater must wait.
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Watchtowers</h3>

      <p className="mb-4">
        Watchtowers are third-party services that monitor for breaches when you're offline:
      </p>

      <Definition title="Watchtower Operation">
        <ol className="mt-2 list-decimal list-inside space-y-1">
          <li>You provide encrypted breach remedy data for each commitment</li>
          <li>Watchtower monitors the blockchain for your channel's funding output</li>
          <li>If a breach is detected, watchtower decrypts the remedy data</li>
          <li>Watchtower broadcasts the penalty transaction</li>
          <li>Watchtower may take a fee; rest goes to your address</li>
        </ol>
      </Definition>

      <Example title="Watchtower Data">
        <p className="mb-2 text-sm">For each commitment state, you provide:</p>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>Encrypted blob containing penalty tx or construction info</li>
          <li>A "hint" derived from the commitment transaction</li>
          <li>If the hint appears on-chain, decrypt and broadcast</li>
        </ul>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Penalty Transaction Fees</h3>

      <p className="mb-4">
        Penalty transactions should use high fees to ensure quick confirmation:
      </p>

      <Theorem title="Fee Strategy">
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>Use the highest reasonable fee rate (this is an emergency!)</li>
          <li>Consider batching all revocable outputs into one transaction</li>
          <li>If using anchors, CPFP can boost the commitment transaction too</li>
          <li>Leave enough value in the penalty transaction for fees</li>
        </ul>
      </Theorem>

      <Callout type="warning" title="Incomplete Penalty">
        If you miss claiming some outputs (e.g., an HTLC you didn't notice), the cheater
        might still get that portion. Always claim ALL revocable outputs in your penalty
        transaction.
      </Callout>
    </LessonLayout>
  );
}
