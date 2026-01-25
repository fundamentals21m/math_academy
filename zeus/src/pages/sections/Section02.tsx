import { LessonLayout } from '@/components/layout';
import { Definition, Theorem } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section02() {
  return (
    <LessonLayout sectionId={2}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Lightning Network Basics</h2>

      <p className="mb-4">
        The Lightning Network is a "Layer 2" protocol built on top of Bitcoin. It enables instant,
        nearly-free payments by conducting transactions off the main blockchain, settling them
        on-chain only when necessary.
      </p>

      <Definition title="Layer 2">
        A secondary protocol built on top of a base blockchain (Layer 1). Layer 2 solutions inherit
        the security of the base layer while adding features like speed and scalability.
        The Lightning Network is Bitcoin's most widely adopted Layer 2.
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Scaling Problem</h3>

      <p className="mb-4">
        Bitcoin's base layer can process roughly 7 transactions per second. For comparison, Visa
        processes thousands. To become a global payment network, Bitcoin needs scaling solutions.
      </p>

      <Theorem title="Lightning Scalability">
        <p>
          Lightning Network can theoretically handle millions of transactions per second across
          the network because most transactions happen off-chain, only touching the blockchain
          for channel opens, closes, and dispute resolution.
        </p>
      </Theorem>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Payment Channels</h3>

      <Definition title="Payment Channel">
        A two-party ledger that allows participants to make unlimited transactions between themselves
        off-chain. The channel is opened with an on-chain transaction, and closed with another,
        but everything in between happens instantly and privately.
      </Definition>

      <p className="mb-4 mt-4">
        When you open a channel, you lock bitcoin into a 2-of-2 multisignature address. This bitcoin
        can only be moved if both parties agree (by signing). The channel maintains a balance sheet:
      </p>

      <MathBlock>{`\\text{Channel Capacity} = \\text{Your Balance} + \\text{Their Balance}`}</MathBlock>

      <p className="mb-4">
        For example, if you open a 500,000 sat channel and push 100,000 sats to the other party:
      </p>

      <ul className="list-disc list-inside mb-6 space-y-2 text-dark-200">
        <li><strong>Your Balance (Local):</strong> 400,000 sats</li>
        <li><strong>Their Balance (Remote):</strong> 100,000 sats</li>
        <li><strong>Total Capacity:</strong> 500,000 sats</li>
      </ul>

      <Callout type="info" title="Balance Updates">
        Every payment updates the balance sheet. If you pay them 50,000 sats, your balance becomes
        350,000 and theirs becomes 150,000. The channel capacity stays the same.
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Routing Payments</h3>

      <p className="mb-4">
        The magic of Lightning is that you don't need a direct channel to pay someone. Payments
        can be routed through multiple channels, creating a network effect.
      </p>

      <Definition title="Multi-Hop Routing">
        A payment that travels through multiple channels to reach its destination. Each hop
        (intermediate node) earns a small routing fee for forwarding the payment.
      </Definition>

      <p className="mb-4 mt-4">
        If Alice wants to pay Carol but only has a channel with Bob, and Bob has a channel with Carol:
      </p>

      <MathBlock>{`\\text{Alice} \\xrightarrow{\\text{channel}} \\text{Bob} \\xrightarrow{\\text{channel}} \\text{Carol}`}</MathBlock>

      <p className="mb-4">
        Bob forwards the payment and earns a routing fee. This all happens in seconds using a
        technique called Hash Time-Locked Contracts (HTLCs).
      </p>

      <Definition title="HTLC (Hash Time-Locked Contract)">
        A conditional payment that requires the recipient to prove knowledge of a secret (preimage)
        within a time limit. This enables trustless multi-hop payments - if the recipient doesn't
        claim the payment in time, it automatically refunds.
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Lightning Invoices</h3>

      <p className="mb-4">
        To receive a Lightning payment, you generate an invoice - a one-time payment request
        containing the amount, destination, and other metadata.
      </p>

      <Definition title="BOLT11 Invoice">
        The standard Lightning invoice format. It encodes the payment amount, destination node,
        payment hash, expiry time, and routing hints. Invoices start with "lnbc" (mainnet)
        or "lntb" (testnet).
      </Definition>

      <Callout type="note" title="Invoice vs. Address">
        Unlike Bitcoin addresses which can be reused (though not recommended), Lightning invoices
        are typically single-use. Once paid, the same invoice cannot be paid again.
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Inbound vs. Outbound Liquidity</h3>

      <p className="mb-4">
        A crucial concept for Lightning users is understanding liquidity:
      </p>

      <Definition title="Outbound Liquidity">
        The amount you can send through your channels. This is the sum of your local balances
        across all channels.
      </Definition>

      <Definition title="Inbound Liquidity">
        The amount others can send you through your channels. This is the sum of remote balances
        across all channels. You need inbound liquidity to receive payments.
      </Definition>

      <Callout type="warning" title="Common Pitfall">
        New Lightning users often open channels and immediately have outbound liquidity but no
        inbound. To receive payments, you first need to spend some sats or have someone open
        a channel to you.
      </Callout>
    </LessonLayout>
  );
}
