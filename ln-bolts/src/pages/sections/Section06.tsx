import { LessonLayout } from '@/components/layout';
import { Definition, Example, Theorem } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section06() {
  return (
    <LessonLayout sectionId={6}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Interactive Transaction Construction</h2>

      <p className="mb-4">
        The v2 channel protocol introduces interactive transaction construction, enabling
        both parties to contribute inputs and outputs to the funding transaction. This enables
        "dual-funded" channels where both peers provide initial capital.
      </p>

      <Callout type="info" title="V2 Channel Protocol">
        Interactive transaction construction was introduced with
        <code className="bg-dark-800 px-1 rounded mx-1">option_dual_fund</code>. It replaces
        the v1 funding_created/funding_signed flow with a more flexible negotiation.
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Opening a V2 Channel</h3>

      <p className="mb-4">
        V2 channels use open_channel2 and accept_channel2 messages:
      </p>

      <Definition title="open_channel2 (type 64)">
        Similar to open_channel but with key differences:
        <ul className="mt-2 list-disc list-inside space-y-1">
          <li><strong>funding_feerate_perkw:</strong> Fee rate for the funding transaction</li>
          <li><strong>locktime:</strong> nLockTime for the funding transaction</li>
          <li>No funding_satoshis—determined during interactive construction</li>
        </ul>
      </Definition>

      <Definition title="accept_channel2 (type 65)">
        Accepts the v2 channel proposal. The fundee can indicate willingness to contribute:
        <ul className="mt-2 list-disc list-inside space-y-1">
          <li><strong>funding_satoshis:</strong> Amount the acceptor will contribute (can be 0)</li>
        </ul>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Construction Protocol</h3>

      <p className="mb-4">
        After open_channel2/accept_channel2, peers enter interactive construction. They take
        turns adding inputs and outputs until both signal completion.
      </p>

      <Theorem title="Serial ID Assignment">
        Each input and output gets a unique 64-bit serial ID:
        <ul className="mt-2 list-disc list-inside space-y-1">
          <li><strong>Initiator:</strong> Uses even serial IDs (0, 2, 4, ...)</li>
          <li><strong>Non-initiator:</strong> Uses odd serial IDs (1, 3, 5, ...)</li>
        </ul>
        Inputs and outputs are ordered by serial ID in the final transaction.
      </Theorem>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Construction Messages</h3>

      <Definition title="tx_add_input (type 66)">
        Adds an input to the transaction:
        <div className="font-mono text-sm bg-dark-800 p-3 rounded mt-2 space-y-1">
          <p>channel_id: 32 bytes</p>
          <p>serial_id: 8 bytes (unique identifier)</p>
          <p>prevtx: complete serialized previous tx</p>
          <p>prevtx_vout: 4 bytes (output index)</p>
          <p>sequence: 4 bytes</p>
        </div>
      </Definition>

      <Definition title="tx_add_output (type 67)">
        Adds an output to the transaction:
        <div className="font-mono text-sm bg-dark-800 p-3 rounded mt-2 space-y-1">
          <p>channel_id: 32 bytes</p>
          <p>serial_id: 8 bytes</p>
          <p>sats: 8 bytes (output amount)</p>
          <p>script: variable (output script)</p>
        </div>
      </Definition>

      <Definition title="tx_remove_input (type 68)">
        Removes a previously added input:
        <div className="font-mono text-sm bg-dark-800 p-3 rounded mt-2">
          <p>channel_id: 32 bytes, serial_id: 8 bytes</p>
        </div>
      </Definition>

      <Definition title="tx_remove_output (type 69)">
        Removes a previously added output:
        <div className="font-mono text-sm bg-dark-800 p-3 rounded mt-2">
          <p>channel_id: 32 bytes, serial_id: 8 bytes</p>
        </div>
      </Definition>

      <Definition title="tx_complete (type 70)">
        Signals that a peer has no more changes to make:
        <div className="font-mono text-sm bg-dark-800 p-3 rounded mt-2">
          <p>channel_id: 32 bytes</p>
        </div>
      </Definition>

      <Example title="Interactive Construction Flow">
        <div className="font-mono text-sm space-y-2">
          <p className="text-blue-400">Initiator: tx_add_input (serial_id=0, their UTXO)</p>
          <p className="text-green-400">Acceptor: tx_add_input (serial_id=1, their UTXO)</p>
          <p className="text-blue-400">Initiator: tx_add_output (serial_id=2, funding output)</p>
          <p className="text-green-400">Acceptor: tx_add_output (serial_id=3, their change)</p>
          <p className="text-blue-400">Initiator: tx_add_output (serial_id=4, their change)</p>
          <p className="text-blue-400">Initiator: tx_complete</p>
          <p className="text-green-400">Acceptor: tx_complete</p>
          <p className="text-gray-400">--- Construction complete ---</p>
        </div>
      </Example>

      <Callout type="warning" title="Completion Requirement">
        Construction is only complete when <strong>both</strong> peers send consecutive
        tx_complete messages. If either peer sends another modification after tx_complete,
        both must send tx_complete again.
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Signature Exchange</h3>

      <p className="mb-4">
        Once construction is complete, peers exchange signatures for the funding transaction:
      </p>

      <Definition title="tx_signatures (type 71)">
        Contains witness data for all inputs a peer contributed:
        <div className="font-mono text-sm bg-dark-800 p-3 rounded mt-2 space-y-1">
          <p>channel_id: 32 bytes</p>
          <p>txid: 32 bytes (the funding txid)</p>
          <p>num_witnesses: 2 bytes</p>
          <p>witnesses: array of witness stacks</p>
        </div>
      </Definition>

      <Theorem title="Signature Ordering">
        The <strong>non-initiator</strong> sends tx_signatures first. This protects the
        initiator from creating a valid transaction that the non-initiator refuses to sign.
      </Theorem>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Fee Responsibility</h3>

      <p className="mb-4">
        In dual-funded channels, fees are split based on contribution:
      </p>

      <Example title="Fee Calculation">
        <p className="mb-2">For a dual-funded channel:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Common fields (version, locktime, funding output) split 50/50</li>
          <li>Each peer pays for their own inputs and change outputs</li>
          <li>Fees are based on the negotiated funding_feerate_perkw</li>
        </ul>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Replace-By-Fee (RBF)</h3>

      <p className="mb-4">
        V2 channels support fee bumping via RBF if the funding transaction hasn't confirmed:
      </p>

      <Definition title="tx_init_rbf (type 72)">
        Proposes an RBF of the funding transaction:
        <ul className="mt-2 list-disc list-inside space-y-1">
          <li><strong>channel_id:</strong> The channel being modified</li>
          <li><strong>locktime:</strong> New transaction locktime</li>
          <li><strong>feerate:</strong> New (higher) fee rate</li>
        </ul>
      </Definition>

      <Definition title="tx_ack_rbf (type 73)">
        Accepts the RBF proposal, then peers re-enter interactive construction with the
        new fee rate.
      </Definition>

      <Callout type="info" title="RBF Constraints">
        <ul className="list-disc list-inside space-y-1">
          <li>New feerate must be higher than the original</li>
          <li>The funding output must remain the same</li>
          <li>Peers can add/remove other inputs/outputs as needed</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Transaction Abort</h3>

      <Definition title="tx_abort (type 74)">
        Either peer can abort the construction at any time. No channel is created, and any
        broadcast transactions should not be spent (though there's no enforcement).
      </Definition>
    </LessonLayout>
  );
}
