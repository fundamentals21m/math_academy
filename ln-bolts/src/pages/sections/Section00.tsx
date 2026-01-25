import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section00() {
  return (
    <LessonLayout sectionId={0}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Introduction to the Lightning Network</h2>

      <p className="mb-4">
        The Lightning Network is a "layer 2" payment protocol designed to operate on top of Bitcoin.
        It enables fast, low-cost payments between participating nodes by creating a network of
        bidirectional payment channels.
      </p>

      <Definition title="BOLT (Basis of Lightning Technology)">
        BOLT specifications are the technical standards that define how Lightning Network
        implementations should behave. They ensure interoperability between different Lightning
        clients such as LND, c-lightning (CLN), Eclair, and LDK.
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Problem Lightning Solves</h3>

      <p className="mb-4">
        Bitcoin's base layer can process approximately 7 transactions per second, with confirmation
        times averaging 10 minutes. The Lightning Network addresses these limitations by:
      </p>

      <ul className="list-disc list-inside mb-6 space-y-2 text-dark-200">
        <li>Enabling instant payments (milliseconds vs. minutes)</li>
        <li>Supporting millions of transactions per second across the network</li>
        <li>Reducing transaction fees to near-zero for most payments</li>
        <li>Enabling micropayments down to 1 satoshi (0.00000001 BTC)</li>
      </ul>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Core Concepts</h3>

      <Definition title="Payment Channel">
        A payment channel is a two-party relationship where Bitcoin is locked in a 2-of-2 multisig
        transaction. Both parties can update the balance allocation through signed "commitment
        transactions" without broadcasting to the blockchain.
      </Definition>

      <Definition title="HTLC (Hash Time-Locked Contract)">
        HTLCs enable conditional payments across multiple channels. A payment can be claimed by
        revealing a secret (preimage) before a timeout expires, allowing secure multi-hop payments
        through intermediary nodes.
      </Definition>

      <Definition title="Commitment Transaction">
        A commitment transaction represents the current state of a channel's balance distribution.
        Each party holds their own version, allowing either to close the channel unilaterally if needed.
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The BOLT Specifications</h3>

      <p className="mb-4">
        The BOLT specifications are organized into numbered documents, each covering a specific
        aspect of the Lightning Network protocol:
      </p>

      <Example title="BOLT Specification Overview">
        <ul className="space-y-2">
          <li><strong>BOLT #1:</strong> Base Protocol Messaging</li>
          <li><strong>BOLT #2:</strong> Peer Protocol for Channel Management</li>
          <li><strong>BOLT #3:</strong> Bitcoin Transaction and Script Formats</li>
          <li><strong>BOLT #4:</strong> Onion Routing Protocol</li>
          <li><strong>BOLT #5:</strong> On-chain Transaction Handling</li>
          <li><strong>BOLT #7:</strong> P2P Node and Channel Discovery</li>
          <li><strong>BOLT #8:</strong> Encrypted and Authenticated Transport</li>
          <li><strong>BOLT #9:</strong> Assigned Feature Flags</li>
          <li><strong>BOLT #10:</strong> DNS Bootstrap and Assisted Node Location</li>
          <li><strong>BOLT #11:</strong> Invoice Protocol for Lightning Payments</li>
          <li><strong>BOLT #12:</strong> Offer Protocol (Offers and Invoice Requests)</li>
        </ul>
      </Example>

      <Callout type="info" title="Note on BOLT #6">
        You may notice BOLT #6 is missing from the sequence. This specification was originally
        planned for an intermediate routing packet format but was never finalized and has been
        incorporated into other specifications.
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">How Lightning Payments Work</h3>

      <p className="mb-4">
        A Lightning payment follows these fundamental steps:
      </p>

      <ol className="list-decimal list-inside mb-6 space-y-2 text-dark-200">
        <li>The recipient generates a payment hash from a random secret (preimage)</li>
        <li>The sender finds a route through the network to the recipient</li>
        <li>The sender creates an onion-encrypted packet with payment instructions</li>
        <li>Each hop forwards the payment, locked to the same payment hash</li>
        <li>The recipient reveals the preimage to claim the payment</li>
        <li>The preimage propagates back, allowing each hop to claim their portion</li>
      </ol>

      <Callout type="success" title="Trustless Multi-Hop Payments">
        The genius of HTLCs is that no intermediary can steal funds. Either the payment completes
        atomically across all hops, or it fails and all funds are returned to the sender.
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Course Overview</h3>

      <p className="mb-4">
        This course will take you through each BOLT specification, explaining the technical details
        and the rationale behind design decisions. By the end, you will understand:
      </p>

      <ul className="list-disc list-inside mb-6 space-y-2 text-dark-200">
        <li>How encrypted connections are established between nodes (BOLT #8)</li>
        <li>The message format and protocol messages (BOLT #1)</li>
        <li>Channel lifecycle from opening to closing (BOLT #2)</li>
        <li>Transaction structures and scripts (BOLT #3)</li>
        <li>On-chain dispute resolution (BOLT #5)</li>
        <li>Network discovery and routing (BOLT #7, #4)</li>
        <li>Payment encoding and invoices (BOLT #11, #12)</li>
      </ul>
    </LessonLayout>
  );
}
