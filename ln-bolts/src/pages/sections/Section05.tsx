import { LessonLayout } from '@/components/layout';
import { Definition, Example, Theorem } from '@/components/common';
import { Callout } from '@/components/common/Callout';
import { ChannelStateMachine } from '@/components/visualizations';

export default function Section05() {
  return (
    <LessonLayout sectionId={5}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">BOLT #2: Channel Establishment</h2>

      <ChannelStateMachine className="mb-8" />

      <p className="mb-4">
        BOLT #2 defines the peer protocol for managing payment channels. This section covers
        channel establishment—the process of opening a new Lightning channel between two nodes.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Channel Opening Flow</h3>

      <p className="mb-4">
        The v1 (single-funder) channel opening follows a specific message sequence. The
        "funder" initiates and provides all initial capital; the "fundee" accepts and contributes
        none.
      </p>

      <Example title="V1 Channel Opening Sequence">
        <div className="font-mono text-sm space-y-2">
          <p className="text-blue-400">Funder → Fundee: open_channel</p>
          <p className="text-green-400">Fundee → Funder: accept_channel</p>
          <p className="text-blue-400">Funder → Fundee: funding_created</p>
          <p className="text-green-400">Fundee → Funder: funding_signed</p>
          <p className="text-gray-400">--- Funder broadcasts funding tx ---</p>
          <p className="text-gray-400">--- Wait for confirmations ---</p>
          <p className="text-blue-400">Funder → Fundee: channel_ready</p>
          <p className="text-green-400">Fundee → Funder: channel_ready</p>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The open_channel Message</h3>

      <Definition title="open_channel (type 32)">
        Sent by the funder to propose a new channel. Contains all parameters for the channel.
      </Definition>

      <Example title="Key open_channel Fields">
        <table className="w-full text-sm">
          <tbody className="space-y-1">
            <tr className="border-b border-dark-800">
              <td className="py-2 font-mono">chain_hash</td>
              <td className="py-2">Identifies the blockchain (mainnet, testnet, etc.)</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2 font-mono">temporary_channel_id</td>
              <td className="py-2">32-byte random ID until funding tx is known</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2 font-mono">funding_satoshis</td>
              <td className="py-2">Amount to lock in the funding output</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2 font-mono">push_msat</td>
              <td className="py-2">Initial balance to give the fundee (gift)</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2 font-mono">dust_limit_satoshis</td>
              <td className="py-2">Minimum output value (below = "dust")</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2 font-mono">max_htlc_value_in_flight_msat</td>
              <td className="py-2">Max value of outstanding HTLCs</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2 font-mono">channel_reserve_satoshis</td>
              <td className="py-2">Minimum balance the peer must maintain</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2 font-mono">htlc_minimum_msat</td>
              <td className="py-2">Smallest HTLC this node will accept</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2 font-mono">feerate_per_kw</td>
              <td className="py-2">Initial fee rate for commitment transactions</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2 font-mono">to_self_delay</td>
              <td className="py-2">Timelock for the peer's outputs (in blocks)</td>
            </tr>
            <tr>
              <td className="py-2 font-mono">max_accepted_htlcs</td>
              <td className="py-2">Maximum concurrent HTLCs allowed</td>
            </tr>
          </tbody>
        </table>
      </Example>

      <p className="mt-4 mb-4">
        The message also includes several public keys needed for the channel's operation:
      </p>

      <Example title="Channel Keys in open_channel">
        <ul className="list-disc list-inside space-y-1">
          <li><strong>funding_pubkey:</strong> Used in the 2-of-2 multisig funding output</li>
          <li><strong>revocation_basepoint:</strong> For generating revocation keys</li>
          <li><strong>payment_basepoint:</strong> For the to_remote output</li>
          <li><strong>delayed_payment_basepoint:</strong> For the to_local output</li>
          <li><strong>htlc_basepoint:</strong> For HTLC outputs</li>
          <li><strong>first_per_commitment_point:</strong> For the first commitment transaction</li>
        </ul>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The accept_channel Message</h3>

      <Definition title="accept_channel (type 33)">
        Sent by the fundee to accept the channel proposal. Contains the fundee's parameters
        and keys.
      </Definition>

      <p className="mb-4">
        The fundee can adjust certain parameters within acceptable ranges but cannot change
        the funding amount. Key differences from open_channel:
      </p>

      <ul className="list-disc list-inside mb-6 space-y-2 text-dark-200">
        <li>No funding_satoshis or push_msat (funder controls these)</li>
        <li>No feerate (funder proposes, but fundee can reject)</li>
        <li>Includes minimum_depth: confirmations required before channel_ready</li>
      </ul>

      <Callout type="warning" title="Rejecting Channel Requests">
        The fundee can reject a channel by sending an error message instead of accept_channel.
        Common reasons include: unacceptable funding amount, incompatible parameters, or
        capacity limits.
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Creating the Funding Transaction</h3>

      <p className="mb-4">
        After accept_channel, the funder constructs the funding transaction. This is a standard
        Bitcoin transaction with a special output:
      </p>

      <Theorem title="Funding Output Structure">
        The funding output is a P2WSH (Pay-to-Witness-Script-Hash) with a 2-of-2 multisig:
        <div className="font-mono text-sm bg-dark-800 p-3 rounded mt-2">
          <p>OP_2 &lt;funder_pubkey&gt; &lt;fundee_pubkey&gt; OP_2 OP_CHECKMULTISIG</p>
        </div>
        <p className="mt-2">
          Keys are ordered lexicographically to ensure both parties derive the same script.
        </p>
      </Theorem>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Funding Messages</h3>

      <Definition title="funding_created (type 34)">
        Funder sends this after constructing the funding transaction:
        <ul className="mt-2 list-disc list-inside space-y-1">
          <li><strong>funding_txid:</strong> Transaction ID of the funding tx</li>
          <li><strong>funding_output_index:</strong> Which output is the funding output</li>
          <li><strong>signature:</strong> Funder's signature for fundee's commitment tx</li>
        </ul>
      </Definition>

      <Definition title="funding_signed (type 35)">
        Fundee responds with their signature, completing the exchange:
        <ul className="mt-2 list-disc list-inside space-y-1">
          <li><strong>channel_id:</strong> Derived from funding txid and output index</li>
          <li><strong>signature:</strong> Fundee's signature for funder's commitment tx</li>
        </ul>
      </Definition>

      <Callout type="info" title="Deriving Channel ID">
        <p>The permanent channel_id is derived from the funding transaction:</p>
        <div className="font-mono text-sm bg-dark-800 p-3 rounded mt-2">
          channel_id = funding_txid XOR funding_output_index
        </div>
        <p className="mt-2">
          The output index is left-padded with zeros to 32 bytes before XOR.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Channel Ready</h3>

      <p className="mb-4">
        After the funding transaction has sufficient confirmations (per minimum_depth), both
        parties send channel_ready:
      </p>

      <Definition title="channel_ready (type 36)">
        Signals that the channel is ready for use:
        <ul className="mt-2 list-disc list-inside space-y-1">
          <li><strong>channel_id:</strong> The permanent channel identifier</li>
          <li><strong>second_per_commitment_point:</strong> For the second commitment tx</li>
        </ul>
      </Definition>

      <p className="mb-4">
        Once both parties have exchanged channel_ready, the channel is operational and can
        route payments.
      </p>

      <Callout type="success" title="Zero-Conf Channels">
        With the <code className="bg-dark-800 px-1 rounded">option_zeroconf</code> feature,
        channels can be used before any confirmations. The fundee trusts the funder not to
        double-spend the funding transaction.
      </Callout>
    </LessonLayout>
  );
}
