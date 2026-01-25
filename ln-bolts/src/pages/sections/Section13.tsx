import { LessonLayout } from '@/components/layout';
import { Definition, Example, Theorem } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section13() {
  return (
    <LessonLayout sectionId={13}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">BOLT #5: Mutual Close</h2>

      <p className="mb-4">
        BOLT #5 specifies how to handle on-chain transactions when a channel closes. A mutual
        close is the cooperative path where both parties agree to close the channel and sign
        a closing transaction together.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Mutual Close Overview</h3>

      <p className="mb-4">
        A mutual close occurs when both parties cooperatively close the channel using the
        negotiation process defined in BOLT #2 (shutdown → closing_signed/closing_complete).
      </p>

      <Definition title="Closing Transaction">
        A simple transaction that distributes the channel balance:
        <ul className="mt-2 list-disc list-inside space-y-1">
          <li><strong>Input:</strong> The funding output (2-of-2 multisig)</li>
          <li><strong>Outputs:</strong> One per party (if above dust)</li>
          <li><strong>No timelocks:</strong> Immediately spendable</li>
          <li><strong>No HTLCs:</strong> All must be resolved first</li>
        </ul>
      </Definition>

      <Theorem title="Mutual Close Benefits">
        Compared to unilateral close:
        <ul className="mt-2 list-disc list-inside space-y-1">
          <li>Lower fees (simpler transaction, no HTLC outputs)</li>
          <li>Immediate access to funds (no CSV delay)</li>
          <li>Better privacy (indistinguishable from normal 2-of-2 spends)</li>
          <li>Smaller on-chain footprint</li>
        </ul>
      </Theorem>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Prerequisites for Mutual Close</h3>

      <p className="mb-4">
        Before a mutual close can proceed:
      </p>

      <Example title="Mutual Close Requirements">
        <ol className="list-decimal list-inside space-y-2">
          <li>Both parties have exchanged shutdown messages</li>
          <li>No pending update_add_htlc messages after shutdown</li>
          <li>All existing HTLCs have been resolved (fulfilled or failed)</li>
          <li>All pending commitments have been irrevocably committed</li>
        </ol>
      </Example>

      <Callout type="warning" title="HTLC Resolution">
        HTLCs cannot be removed from the closing transaction. They must be resolved off-chain
        before the closing negotiation begins. If an HTLC times out during the closing process,
        the node should fail it with update_fail_htlc.
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Closing Transaction Construction</h3>

      <p className="mb-4">
        The closing transaction follows a simple format:
      </p>

      <Definition title="Closing Transaction Format">
        <div className="font-mono text-xs bg-dark-800 p-3 rounded space-y-1">
          <p>version: 2</p>
          <p>locktime: 0</p>
          <p>vin[0]:</p>
          <p className="pl-4">txid: funding_txid</p>
          <p className="pl-4">vout: funding_output_index</p>
          <p className="pl-4">sequence: 0xFFFFFFFF</p>
          <p>vout[0..1]: outputs to each party's scriptpubkey</p>
        </div>
      </Definition>

      <Theorem title="Output Ordering">
        Outputs are ordered according to BIP-69:
        <ol className="list-decimal list-inside mt-2 space-y-1">
          <li>By value (ascending)</li>
          <li>By scriptPubKey length (ascending)</li>
          <li>By scriptPubKey bytes (lexicographic)</li>
        </ol>
        Outputs below the dust limit are omitted (value goes to fees).
      </Theorem>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Signature Exchange</h3>

      <p className="mb-4">
        Each party signs the closing transaction and exchanges signatures:
      </p>

      <Example title="Mutual Close Signature">
        <div className="font-mono text-xs bg-dark-800 p-3 rounded space-y-1">
          <p>witness[0]: (empty for CHECKMULTISIG)</p>
          <p>witness[1]: &lt;signature from party A&gt;</p>
          <p>witness[2]: &lt;signature from party B&gt;</p>
          <p>witness[3]: &lt;2-of-2 multisig script&gt;</p>
        </div>
        <p className="mt-2 text-sm text-dark-300">
          Signatures ordered by public key (same ordering as in the multisig script).
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Node Requirements</h3>

      <p className="mb-4">
        After the closing transaction is broadcast, nodes must:
      </p>

      <Theorem title="Post-Mutual-Close Actions">
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>
            <strong>Monitor for confirmation:</strong> Wait for the closing transaction to
            be mined in a block.
          </li>
          <li>
            <strong>Handle reorgs:</strong> If the closing transaction becomes unconfirmed
            due to a reorg, continue monitoring.
          </li>
          <li>
            <strong>Resolve at depth 100:</strong> After 100 confirmations, the output is
            considered "irrevocably resolved."
          </li>
          <li>
            <strong>Cleanup state:</strong> Channel data can be archived or deleted after
            funds are resolved.
          </li>
        </ul>
      </Theorem>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Fee Considerations</h3>

      <p className="mb-4">
        In the legacy protocol, the funder pays the closing transaction fee. In the simple
        close protocol, each party pays their own fee based on their output.
      </p>

      <Example title="Fee Distribution Examples">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-2">Protocol</th>
              <th className="text-left py-2">Fee Payment</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-dark-800">
              <td className="py-2">Legacy (closing_signed)</td>
              <td className="py-2">Funder pays entire fee</td>
            </tr>
            <tr>
              <td className="py-2">Simple (closing_complete)</td>
              <td className="py-2">Each pays for own transaction</td>
            </tr>
          </tbody>
        </table>
      </Example>

      <Callout type="info" title="RBF for Closing Transactions">
        If the closing transaction doesn't confirm in a timely manner, nodes can:
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Re-negotiate a higher fee (if peer is cooperative)</li>
          <li>Use CPFP if they have an output (spend their output with a higher fee)</li>
          <li>As a last resort, broadcast commitment transaction (unilateral close)</li>
        </ul>
      </Callout>
    </LessonLayout>
  );
}
