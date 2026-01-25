import { LessonLayout } from '@/components/layout';
import { Definition, Example, Theorem } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section08() {
  return (
    <LessonLayout sectionId={8}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Channel Closure</h2>

      <p className="mb-4">
        Channels can be closed cooperatively (mutual close) or non-cooperatively (unilateral
        close). This section covers the cooperative closing flow defined in BOLT #2.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Initiating Closure</h3>

      <Definition title="shutdown (type 38)">
        Signals intent to close the channel. After this, no new HTLCs can be added:
        <div className="font-mono text-sm bg-dark-800 p-3 rounded mt-2 space-y-1">
          <p>channel_id: 32 bytes</p>
          <p>scriptpubkey: variable (where to send funds)</p>
        </div>
      </Definition>

      <p className="mt-4 mb-4">
        Either peer can initiate shutdown. Once both peers have sent shutdown:
      </p>

      <ul className="list-disc list-inside mb-6 space-y-2 text-dark-200">
        <li>No new HTLCs can be added (update_add_htlc is forbidden)</li>
        <li>Existing HTLCs must be resolved (fulfilled or failed)</li>
        <li>After all HTLCs are cleared, the closing negotiation begins</li>
      </ul>

      <Callout type="info" title="Upfront Shutdown Script">
        With the <code className="bg-dark-800 px-1 rounded">option_upfront_shutdown_script</code>
        feature, peers can commit to a closing address during channel opening. This prevents an
        attacker from redirecting funds after compromising a node.
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Simple Close Protocol</h3>

      <p className="mb-4">
        The modern closing protocol (<code className="bg-dark-800 px-1 rounded">option_simple_close</code>)
        is straightforward: each party creates and signs their own closing transaction.
      </p>

      <Definition title="closing_complete (type 40)">
        Sent by the initiator with their proposed closing transaction:
        <div className="font-mono text-sm bg-dark-800 p-3 rounded mt-2 space-y-1">
          <p>channel_id: 32 bytes</p>
          <p>fee_satoshis: 8 bytes (fee for the closer's tx)</p>
          <p>signature: 64 bytes</p>
          <p>tlvs: optional (including closer_script)</p>
        </div>
      </Definition>

      <Definition title="closing_sig (type 41)">
        Response with the counterparty's signature:
        <div className="font-mono text-sm bg-dark-800 p-3 rounded mt-2 space-y-1">
          <p>channel_id: 32 bytes</p>
          <p>signature: 64 bytes</p>
          <p>tlvs: optional (including closer_script)</p>
        </div>
      </Definition>

      <Theorem title="Simple Close Properties">
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>Each party pays their own transaction fees</li>
          <li>The closing initiator goes first with closing_complete</li>
          <li>Multiple rounds are allowed to adjust fees or addresses</li>
          <li>Either party can broadcast once they have both signatures</li>
        </ul>
      </Theorem>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Legacy Closing Protocol</h3>

      <p className="mb-4">
        The older protocol uses fee negotiation between peers:
      </p>

      <Definition title="closing_signed (type 39)">
        Proposes a closing transaction with a specific fee:
        <div className="font-mono text-sm bg-dark-800 p-3 rounded mt-2 space-y-1">
          <p>channel_id: 32 bytes</p>
          <p>fee_satoshis: 8 bytes</p>
          <p>signature: 64 bytes</p>
          <p>fee_range: optional TLV (min/max acceptable fees)</p>
        </div>
      </Definition>

      <Example title="Legacy Fee Negotiation">
        <div className="font-mono text-sm space-y-2">
          <p className="text-blue-400">Funder → Fundee: closing_signed (fee=1000 sats)</p>
          <p className="text-green-400">Fundee → Funder: closing_signed (fee=500 sats)</p>
          <p className="text-blue-400">Funder → Fundee: closing_signed (fee=750 sats)</p>
          <p className="text-green-400">Fundee → Funder: closing_signed (fee=750 sats)</p>
          <p className="text-gray-400">--- Agreement reached, channel closed ---</p>
        </div>
      </Example>

      <Callout type="warning" title="Fee Negotiation Rules">
        <ul className="list-disc list-inside space-y-1">
          <li>The funder proposes the initial fee</li>
          <li>Each subsequent proposal must be closer to the peer's last proposal</li>
          <li>Agreement is reached when both propose the same fee</li>
          <li>Fee is deducted from the funder's balance</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Closing Transaction Structure</h3>

      <p className="mb-4">
        The closing transaction is simple compared to commitment transactions:
      </p>

      <Theorem title="Closing Transaction Format">
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li><strong>Version:</strong> 2</li>
          <li><strong>Input:</strong> The funding output (2-of-2 multisig)</li>
          <li><strong>Outputs:</strong> One for each party with balance above dust</li>
          <li><strong>Locktime:</strong> 0</li>
          <li><strong>No HTLCs:</strong> All must be resolved before closing</li>
        </ul>
      </Theorem>

      <Example title="Closing Transaction Example">
        <div className="font-mono text-sm bg-dark-800 p-3 rounded space-y-2">
          <p className="text-gray-400">// Input</p>
          <p>vin[0]: funding_txid:funding_output_index</p>
          <p className="text-gray-400 mt-2">// Outputs (ordered by value, then script)</p>
          <p>vout[0]: 0.6 BTC → Alice's scriptpubkey</p>
          <p>vout[1]: 0.3999 BTC → Bob's scriptpubkey</p>
          <p className="text-gray-400">// Fee: 0.0001 BTC (from funder)</p>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">When to Use Each Method</h3>

      <p className="mb-4">
        The closing method depends on peer availability and cooperation:
      </p>

      <Example title="Closing Method Selection">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-2">Scenario</th>
              <th className="text-left py-2">Method</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-dark-800">
              <td className="py-2">Both peers online, cooperative</td>
              <td className="py-2">Mutual close (simple or legacy)</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2">Peer unresponsive</td>
              <td className="py-2">Unilateral close (BOLT #5)</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2">Dispute over state</td>
              <td className="py-2">Unilateral close (BOLT #5)</td>
            </tr>
            <tr>
              <td className="py-2">Peer broadcast old state</td>
              <td className="py-2">Penalty transaction (BOLT #5)</td>
            </tr>
          </tbody>
        </table>
      </Example>

      <Callout type="success" title="Benefits of Mutual Close">
        <ul className="list-disc list-inside space-y-1">
          <li>Lower fees (simpler transaction)</li>
          <li>Immediate access to funds (no timelock)</li>
          <li>Better privacy (looks like regular transaction)</li>
          <li>Faster confirmation (no CSV delays)</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Reconnection During Close</h3>

      <p className="mb-4">
        If peers disconnect during the closing process:
      </p>

      <ul className="list-disc list-inside mb-6 space-y-2 text-dark-200">
        <li>Upon reconnection, use channel_reestablish to sync state</li>
        <li>If shutdown was sent, continue the closing process</li>
        <li>If the closing transaction was signed, either can broadcast</li>
        <li>Partially completed negotiations resume from last state</li>
      </ul>
    </LessonLayout>
  );
}
