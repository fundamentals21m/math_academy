import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section01() {
  return (
    <LessonLayout sectionId={1}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Key Terminology</h2>

      <p className="mb-4">
        The BOLT specifications define a precise vocabulary that is essential for understanding
        the Lightning Network. This section covers the fundamental terms you will encounter
        throughout the specifications.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Node Roles</h3>

      <Definition title="Origin Node">
        The node that initiates a payment. Also called the "sender" or "payer." The origin node
        constructs the onion-encrypted routing packet and initiates the HTLC chain.
      </Definition>

      <Definition title="Final Node">
        The ultimate recipient of a payment. Also called the "recipient" or "payee." The final
        node holds the preimage that unlocks the HTLC chain.
      </Definition>

      <Definition title="Processing Node">
        An intermediate node that forwards payments between the origin and final nodes. Processing
        nodes earn routing fees for their service.
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Channel Terminology</h3>

      <Definition title="Funder / Fundee">
        In a channel opening, the <strong>funder</strong> (or "initiator") is the node that
        contributes the initial capital to the funding transaction. The <strong>fundee</strong>
        (or "acceptor") is the peer that accepts the channel opening request.
      </Definition>

      <Definition title="Local / Remote">
        Terms used to describe perspective within a channel. <strong>Local</strong> refers to
        "our" side of the channel, while <strong>remote</strong> refers to the peer's side.
        The same output is "to_local" from one peer's view and "to_remote" from the other's.
      </Definition>

      <Example title="Local vs Remote Perspective">
        <p className="mb-2">If Alice and Bob share a channel:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>From Alice's view: Alice's balance is "local," Bob's is "remote"</li>
          <li>From Bob's view: Bob's balance is "local," Alice's is "remote"</li>
        </ul>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Transaction Types</h3>

      <Definition title="Funding Transaction">
        The on-chain Bitcoin transaction that opens a channel. It creates a 2-of-2 multisig output
        that both parties must sign to spend. This output is the "funding output."
      </Definition>

      <Definition title="Commitment Transaction">
        An off-chain transaction that spends the funding output and distributes the channel balance
        according to the current state. Each party holds a different version of the commitment
        transaction.
      </Definition>

      <Definition title="HTLC Transaction">
        A transaction that spends an HTLC output from a commitment transaction. There are two types:
        <strong>HTLC-success</strong> (claims with preimage) and <strong>HTLC-timeout</strong>
        (refunds after timeout).
      </Definition>

      <Definition title="Closing Transaction">
        A cooperative close transaction that distributes the final channel balance directly to both
        parties' wallets. Created when both parties agree to close the channel.
      </Definition>

      <Definition title="Penalty Transaction">
        A transaction that claims all channel funds when a peer broadcasts a revoked commitment
        transaction. Also called a "justice transaction."
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Channel States</h3>

      <Definition title="Mutual Close">
        The cooperative closing of a channel where both parties agree to the final balance
        distribution. Results in a single closing transaction with no timelocks.
      </Definition>

      <Definition title="Unilateral Close">
        A non-cooperative close where one party broadcasts their commitment transaction. The
        broadcasting party's funds are typically timelocked to allow the other party to dispute.
      </Definition>

      <Definition title="Revoked Transaction Close">
        A situation where a party broadcasts an outdated (revoked) commitment transaction. The
        honest party can use the revocation key to claim all channel funds as a penalty.
      </Definition>

      <Callout type="warning" title="State Management Is Critical">
        Nodes must carefully track all commitment states and revocation secrets. Broadcasting an
        old state (even accidentally) allows the counterparty to claim all channel funds.
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">HTLC Terminology</h3>

      <Definition title="Offered HTLC">
        An HTLC where the local node is offering funds to the remote node, conditional on the
        remote providing the preimage. The local node adds this HTLC to send a payment.
      </Definition>

      <Definition title="Received HTLC">
        An HTLC where the local node will receive funds from the remote node upon providing the
        preimage. The local node receives this HTLC as part of an incoming payment.
      </Definition>

      <Definition title="Payment Hash">
        The SHA-256 hash of the payment preimage. Used to lock HTLCs across the payment route.
        Written as H = SHA256(preimage).
      </Definition>

      <Definition title="Payment Preimage">
        The secret value that, when hashed, produces the payment hash. Revealing the preimage
        unlocks all HTLCs in a payment route. Typically 32 bytes of random data.
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Network Terminology</h3>

      <Definition title="Short Channel ID (SCID)">
        A compact identifier for a channel on the network. Encoded as block height (3 bytes) +
        transaction index (3 bytes) + output index (2 bytes). Example: "539268x845x1"
      </Definition>

      <Definition title="Node ID">
        A node's public identity, derived from its public key. Used in channel announcements,
        routing, and the gossip protocol.
      </Definition>

      <Definition title="Channel Capacity">
        The total amount of Bitcoin locked in a channel's funding output. This is the maximum
        value that can be transferred in either direction at any given time.
      </Definition>

      <Example title="Understanding Channel Balance">
        <p className="mb-2">A 1 BTC capacity channel between Alice and Bob:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Alice's balance: 0.6 BTC (can send up to 0.6 BTC to Bob)</li>
          <li>Bob's balance: 0.4 BTC (can send up to 0.4 BTC to Alice)</li>
          <li>Total capacity: 1 BTC (always constant until channel closes)</li>
        </ul>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Protocol Terminology</h3>

      <Definition title="CLTV (CheckLockTimeVerify)">
        A Bitcoin script opcode that prevents an output from being spent until a specified block
        height. Used in HTLCs to enforce timeout conditions.
      </Definition>

      <Definition title="CSV (CheckSequenceVerify)">
        A Bitcoin script opcode that enforces a relative timelock from when a transaction is
        confirmed. Used in commitment transactions to delay fund access.
      </Definition>

      <Definition title="to_self_delay">
        The number of blocks a node must wait before spending their own output from a commitment
        transaction they broadcast. Provides time for the counterparty to submit a penalty.
      </Definition>

      <Callout type="info" title="Timelock Interplay">
        CLTV provides absolute timelocks (specific block height), while CSV provides relative
        timelocks (blocks after confirmation). Both are essential for Lightning's security model.
      </Callout>
    </LessonLayout>
  );
}
