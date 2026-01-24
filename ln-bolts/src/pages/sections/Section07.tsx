import { LessonLayout } from '@/components/layout';
import { Definition, Example, Theorem } from '@/components/common';
import { Callout } from '@/components/common/Callout';
import { HTLCFlowSimulator } from '@/components/visualizations';

export default function Section07() {
  return (
    <LessonLayout sectionId={7}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Channel Operations</h2>

      <HTLCFlowSimulator className="mb-8" />

      <p className="mb-4">
        Once a channel is established and both parties have exchanged channel_ready, the channel
        enters "normal operation." This section covers how HTLCs are added, removed, and how
        commitment transactions are updated.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Adding HTLCs</h3>

      <Definition title="update_add_htlc (type 128)">
        Offers a new HTLC to the remote peer:
        <div className="font-mono text-sm bg-dark-800 p-3 rounded mt-2 space-y-1">
          <p>channel_id: 32 bytes</p>
          <p>id: 8 bytes (unique per channel, increments from 0)</p>
          <p>amount_msat: 8 bytes (payment amount in millisatoshis)</p>
          <p>payment_hash: 32 bytes</p>
          <p>cltv_expiry: 4 bytes (absolute block height timeout)</p>
          <p>onion_routing_packet: 1366 bytes</p>
        </div>
      </Definition>

      <p className="mt-4 mb-4">
        The onion_routing_packet contains encrypted instructions for the next hop (or the final
        recipient). This is the BOLT #4 Sphinx packet.
      </p>

      <Callout type="warning" title="HTLC Limits">
        Each peer specifies limits during channel setup:
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>max_accepted_htlcs:</strong> Maximum concurrent HTLCs</li>
          <li><strong>max_htlc_value_in_flight_msat:</strong> Max total pending value</li>
          <li><strong>htlc_minimum_msat:</strong> Minimum HTLC value</li>
        </ul>
        Violating these limits results in a channel error.
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Removing HTLCs</h3>

      <p className="mb-4">
        HTLCs can be removed in three ways: fulfilled (payment succeeded), failed (payment
        failed), or failed with malformed onion:
      </p>

      <Definition title="update_fulfill_htlc (type 130)">
        Fulfills an HTLC by revealing the preimage:
        <div className="font-mono text-sm bg-dark-800 p-3 rounded mt-2 space-y-1">
          <p>channel_id: 32 bytes</p>
          <p>id: 8 bytes (matches the update_add_htlc)</p>
          <p>payment_preimage: 32 bytes</p>
        </div>
      </Definition>

      <Definition title="update_fail_htlc (type 131)">
        Fails an HTLC with an encrypted reason:
        <div className="font-mono text-sm bg-dark-800 p-3 rounded mt-2 space-y-1">
          <p>channel_id: 32 bytes</p>
          <p>id: 8 bytes</p>
          <p>reason: variable (encrypted error message)</p>
        </div>
      </Definition>

      <Definition title="update_fail_malformed_htlc (type 135)">
        Fails an HTLC due to unparseable onion packet:
        <div className="font-mono text-sm bg-dark-800 p-3 rounded mt-2 space-y-1">
          <p>channel_id: 32 bytes</p>
          <p>id: 8 bytes</p>
          <p>sha256_of_onion: 32 bytes</p>
          <p>failure_code: 2 bytes</p>
        </div>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Commitment Update Flow</h3>

      <p className="mb-4">
        After sending one or more update messages, the sender must eventually commit them:
      </p>

      <Theorem title="The Commitment Dance">
        <ol className="list-decimal list-inside space-y-2 mt-2">
          <li>Alice sends update_add_htlc (and possibly other updates)</li>
          <li>Alice sends commitment_signed with signatures for Bob's new commitment</li>
          <li>Bob verifies and stores the new commitment</li>
          <li>Bob sends revoke_and_ack with his old commitment's revocation key</li>
          <li>Alice can now discard Bob's old commitment state</li>
          <li>Bob sends commitment_signed for Alice's new commitment</li>
          <li>Alice sends revoke_and_ack</li>
        </ol>
      </Theorem>

      <Example title="Commitment Update Sequence">
        <div className="font-mono text-sm space-y-2">
          <p className="text-blue-400">Alice → Bob: update_add_htlc</p>
          <p className="text-blue-400">Alice → Bob: commitment_signed</p>
          <p className="text-green-400">Bob → Alice: revoke_and_ack</p>
          <p className="text-green-400">Bob → Alice: commitment_signed</p>
          <p className="text-blue-400">Alice → Bob: revoke_and_ack</p>
          <p className="text-gray-400">--- HTLC is now irrevocably committed ---</p>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Commitment Messages</h3>

      <Definition title="commitment_signed (type 132)">
        Provides signatures for the remote peer's next commitment transaction:
        <div className="font-mono text-sm bg-dark-800 p-3 rounded mt-2 space-y-1">
          <p>channel_id: 32 bytes</p>
          <p>signature: 64 bytes (for the commitment tx)</p>
          <p>num_htlcs: 2 bytes</p>
          <p>htlc_signature: 64 bytes each (for HTLC transactions)</p>
        </div>
      </Definition>

      <Definition title="revoke_and_ack (type 133)">
        Revokes the previous commitment and acknowledges the new one:
        <div className="font-mono text-sm bg-dark-800 p-3 rounded mt-2 space-y-1">
          <p>channel_id: 32 bytes</p>
          <p>per_commitment_secret: 32 bytes (reveals old commitment's secret)</p>
          <p>next_per_commitment_point: 33 bytes (for N+2 commitment)</p>
        </div>
      </Definition>

      <Callout type="info" title="Why Revocation Matters">
        The per_commitment_secret allows the counterparty to construct the revocation key
        for the old commitment. If the revoked commitment is ever broadcast, the counterparty
        can claim ALL funds using this key.
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Fee Updates</h3>

      <p className="mb-4">
        The funder (channel initiator) can propose fee changes for commitment transactions:
      </p>

      <Definition title="update_fee (type 134)">
        Proposes a new fee rate for commitment transactions:
        <div className="font-mono text-sm bg-dark-800 p-3 rounded mt-2 space-y-1">
          <p>channel_id: 32 bytes</p>
          <p>feerate_per_kw: 4 bytes (satoshis per 1000 weight units)</p>
        </div>
      </Definition>

      <Callout type="warning" title="Fee Update Rules">
        <ul className="list-disc list-inside space-y-1">
          <li>Only the funder can send update_fee</li>
          <li>Fee changes are applied to BOTH commitment transactions</li>
          <li>The fundee can reject unreasonable fee rates</li>
          <li>Fee must be paid from the funder's balance</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Channel Reserve</h3>

      <p className="mb-4">
        Each peer must maintain a minimum balance (channel_reserve) to ensure they have
        "skin in the game":
      </p>

      <Theorem title="Channel Reserve Purpose">
        The channel reserve ensures each party has something to lose if they broadcast a
        revoked commitment. A node cannot send funds that would reduce their balance below
        the remote peer's specified channel_reserve_satoshis.
      </Theorem>

      <Example title="Channel Reserve Example">
        <p className="mb-2">In a 1 BTC channel with 1% reserves:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Alice must keep at least 0.01 BTC</li>
          <li>Bob must keep at least 0.01 BTC</li>
          <li>Maximum transferable: 0.98 BTC in either direction</li>
        </ul>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Concurrent Updates</h3>

      <p className="mb-4">
        Both peers can send updates simultaneously. The protocol handles this through careful
        state management—each peer tracks both their proposed state and the acknowledged state.
      </p>

      <Callout type="success" title="State Tracking">
        Each peer maintains:
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Local commitment (what we'd broadcast if needed)</li>
          <li>Remote commitment (what peer would broadcast)</li>
          <li>Proposed changes not yet committed</li>
          <li>Revocation keys for all old states</li>
        </ul>
      </Callout>
    </LessonLayout>
  );
}
