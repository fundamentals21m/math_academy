import { LessonLayout } from '@/components/layout';
import { Definition, Example, Theorem } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section14() {
  return (
    <LessonLayout sectionId={14}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Unilateral Close</h2>

      <p className="mb-4">
        A unilateral close occurs when one party broadcasts their commitment transaction
        without cooperation from the other party. This is the fallback when mutual close
        is not possible.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">When to Unilaterally Close</h3>

      <Example title="Unilateral Close Triggers">
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Peer Unresponsive:</strong> Cannot reach peer to negotiate mutual close</li>
          <li><strong>HTLC Expiring:</strong> Must claim HTLC on-chain before timeout</li>
          <li><strong>Protocol Violation:</strong> Peer sent invalid messages</li>
          <li><strong>Dispute:</strong> Disagreement about channel state</li>
          <li><strong>Emergency:</strong> Need funds immediately</li>
        </ul>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Broadcasting the Commitment</h3>

      <p className="mb-4">
        When you broadcast your commitment transaction, you're committing to the current
        channel state. Several outputs may need further transactions to resolve.
      </p>

      <Definition title="Outputs to Resolve">
        After broadcasting your commitment transaction:
        <ul className="mt-2 list-disc list-inside space-y-1">
          <li><strong>to_local:</strong> Wait for to_self_delay, then spend</li>
          <li><strong>to_remote:</strong> Immediately spendable by counterparty</li>
          <li><strong>Offered HTLCs:</strong> Wait for timeout, use HTLC-timeout tx</li>
          <li><strong>Received HTLCs:</strong> Claim with preimage via HTLC-success tx</li>
          <li><strong>Anchors:</strong> May use for CPFP fee bumping</li>
        </ul>
      </Definition>

      <Callout type="warning" title="The CSV Delay">
        Your to_local output cannot be spent until to_self_delay blocks after the commitment
        transaction confirms. This delay (typically 144 blocks / ~1 day) gives the counterparty
        time to submit a penalty if you broadcast a revoked commitment.
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Handling Local Commitment</h3>

      <p className="mb-4">
        When YOU broadcast your commitment transaction:
      </p>

      <Theorem title="Local Commitment Resolution">
        <ol className="list-decimal list-inside space-y-2 mt-2">
          <li>
            <strong>to_local:</strong> Wait for commitment to confirm, then wait to_self_delay
            blocks, then spend using your delayed_payment key.
          </li>
          <li>
            <strong>Offered HTLCs:</strong> If no preimage, wait for CLTV expiry, broadcast
            HTLC-timeout transaction, wait to_self_delay, spend the output.
          </li>
          <li>
            <strong>Received HTLCs:</strong> If you have the preimage, broadcast HTLC-success
            transaction immediately, wait to_self_delay, spend the output.
          </li>
        </ol>
      </Theorem>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Handling Remote Commitment</h3>

      <p className="mb-4">
        When your PEER broadcasts their commitment transaction:
      </p>

      <Theorem title="Remote Commitment Resolution">
        <ol className="list-decimal list-inside space-y-2 mt-2">
          <li>
            <strong>to_remote (your output):</strong> Immediately spendable with your
            payment key. No delay!
          </li>
          <li>
            <strong>Their Offered HTLCs (to you):</strong> If you have the preimage, spend
            directly from the commitment transaction using the preimage path.
          </li>
          <li>
            <strong>Your Offered HTLCs (to them):</strong> Monitor for preimage revelation.
            If they claim, extract preimage. If not, the value was already yours.
          </li>
        </ol>
      </Theorem>

      <Example title="Preimage Extraction">
        <p className="mb-2 text-sm">
          If the counterparty claims an HTLC you offered them, you MUST extract the preimage
          from their transaction:
        </p>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>The preimage is in the witness data</li>
          <li>Use it to claim corresponding upstream HTLCs</li>
          <li>This is critical for multi-hop payment security</li>
        </ul>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">HTLC Deadlines</h3>

      <p className="mb-4">
        HTLCs have strict timing requirements to maintain security:
      </p>

      <Definition title="CLTV Expiry Delta">
        For forwarded payments, you must ensure your outgoing HTLC's CLTV is at least
        cltv_expiry_delta blocks before your incoming HTLC's CLTV. This provides time to:
        <ul className="mt-2 list-disc list-inside space-y-1">
          <li>Detect the outgoing HTLC being claimed on-chain</li>
          <li>Extract the preimage from the transaction</li>
          <li>Use the preimage to claim the incoming HTLC</li>
        </ul>
      </Definition>

      <Callout type="danger" title="HTLC Timeout Risk">
        If you don't claim an HTLC before its CLTV expiry, the sender can reclaim it.
        For forwarded payments, you could lose money if:
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>The downstream HTLC is claimed (you paid out)</li>
          <li>But you fail to claim the upstream HTLC (you didn't receive)</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Transaction Confirmation</h3>

      <p className="mb-4">
        Nodes must monitor for confirmation of all on-chain transactions:
      </p>

      <Example title="Confirmation Depth Requirements">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-2">Transaction</th>
              <th className="text-left py-2">Required Depth</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-dark-800">
              <td className="py-2">Commitment</td>
              <td className="py-2">1 (then wait CSV delay)</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2">HTLC-success/timeout</td>
              <td className="py-2">1 (then wait CSV delay)</td>
            </tr>
            <tr>
              <td className="py-2">Final resolution</td>
              <td className="py-2">100 (irrevocably resolved)</td>
            </tr>
          </tbody>
        </table>
      </Example>

      <Callout type="info" title="Reorg Handling">
        If a blockchain reorganization occurs:
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Transactions may become unconfirmed</li>
          <li>Re-broadcast if necessary</li>
          <li>Adjust for new CLTV deadlines</li>
          <li>Continue monitoring until depth 100</li>
        </ul>
      </Callout>
    </LessonLayout>
  );
}
