import { LessonLayout } from '@/components/layout';
import { Definition } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section06() {
  return (
    <LessonLayout sectionId={6}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Sending & Receiving Payments</h2>

      <p className="mb-4">
        Zeus supports both on-chain Bitcoin payments and Lightning payments. Understanding when
        and how to use each is essential for effective wallet management.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Receiving Payments</h3>

      <p className="mb-4">
        To receive a payment in Zeus, tap the "Receive" button. You'll have options for:
      </p>

      <Definition title="Lightning Invoice">
        A one-time payment request for a specific amount. Generate this when you know exactly
        how much you're receiving. The invoice expires after a set time (default 1 hour).
      </Definition>

      <Definition title="On-Chain Address">
        A Bitcoin address for receiving funds directly on the blockchain. Use this for larger
        amounts or when the sender doesn't support Lightning.
      </Definition>

      <Callout type="info" title="Invoice Amounts">
        Lightning invoices can be "zero-amount" (sender chooses) or for a specific amount.
        For business use, specify the exact amount to ensure correct payment.
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Sending Lightning Payments</h3>

      <p className="mb-4">
        To send a Lightning payment:
      </p>

      <ol className="list-decimal list-inside mb-6 space-y-2 text-dark-200">
        <li><strong>Tap "Send"</strong> from the main screen</li>
        <li><strong>Paste or scan</strong> a Lightning invoice (starts with lnbc...)</li>
        <li><strong>Review the details:</strong> amount, recipient, description</li>
        <li><strong>Confirm</strong> to send the payment</li>
      </ol>

      <p className="mb-4">
        Zeus calculates the optimal route and total fees before you confirm:
      </p>

      <MathBlock>{`\\text{Total Cost} = \\text{Invoice Amount} + \\text{Routing Fees}`}</MathBlock>

      <Definition title="Routing Fees">
        Small fees charged by intermediate nodes that forward your payment. Typically
        a base fee (few sats) plus a percentage (<InlineMath>{'\\sim'}</InlineMath>0.01-0.1%) of the amount.
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Sending On-Chain Payments</h3>

      <p className="mb-4">
        For on-chain payments:
      </p>

      <ol className="list-decimal list-inside mb-6 space-y-2 text-dark-200">
        <li><strong>Tap "Send"</strong> and select On-Chain</li>
        <li><strong>Enter the Bitcoin address</strong> (starts with bc1, 3, or 1)</li>
        <li><strong>Enter the amount</strong> or use "Max" for entire balance</li>
        <li><strong>Set fee rate</strong> based on urgency</li>
        <li><strong>Confirm</strong> to broadcast the transaction</li>
      </ol>

      <Definition title="Fee Rate">
        On-chain fees are measured in satoshis per virtual byte (sat/vB). Higher rates mean
        faster confirmation. Zeus shows estimated confirmation times for different rates.
      </Definition>

      <Callout type="warning" title="Fee Considerations">
        On-chain fees don't depend on amount - a 100 sat transfer costs the same as a 1 BTC transfer.
        For small amounts, Lightning is almost always more economical.
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Unified QR Codes</h3>

      <p className="mb-4">
        Zeus supports unified QR codes that work with both Lightning and on-chain:
      </p>

      <Definition title="BIP21 with Lightning">
        A format that embeds a Lightning invoice inside a Bitcoin URI. Compatible wallets
        try Lightning first and fall back to on-chain if needed.
      </Definition>

      <p className="mb-4">
        Example format:
      </p>

      <pre className="bg-dark-800 p-4 rounded-lg text-sm text-dark-200 overflow-x-auto mb-4">
        bitcoin:bc1q...?amount=0.001&lightning=lnbc...
      </pre>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Payment Status</h3>

      <p className="mb-4">
        After sending, you'll see the payment status:
      </p>

      <ul className="list-disc list-inside mb-6 space-y-2 text-dark-200">
        <li><strong>Lightning:</strong> Success/Failure is instant (seconds)</li>
        <li><strong>On-Chain:</strong> Pending until confirmed (10-60 minutes typically)</li>
      </ul>

      <Definition title="Payment Preimage">
        Proof that a Lightning payment was received. Zeus stores this automatically.
        You can use it to prove payment if there's ever a dispute.
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Keysend (Spontaneous Payments)</h3>

      <p className="mb-4">
        Zeus supports keysend - sending Lightning payments without an invoice:
      </p>

      <Definition title="Keysend">
        A spontaneous payment that only requires the recipient's node public key.
        Useful for tips, donations, or when you can't get an invoice. The sender
        chooses the amount.
      </Definition>

      <Callout type="note" title="Keysend Support">
        Not all nodes support keysend. The recipient's node must have it enabled.
        Most modern nodes do, but it's not guaranteed.
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Payment History</h3>

      <p className="mb-4">
        Zeus keeps a complete history of all payments:
      </p>

      <ul className="list-disc list-inside mb-6 space-y-2 text-dark-200">
        <li>Date and time</li>
        <li>Amount and fees paid</li>
        <li>Invoice memo/description</li>
        <li>Payment status and preimage</li>
        <li>Route taken (for Lightning)</li>
      </ul>

      <Callout type="success" title="You're Ready!">
        With sending and receiving mastered, you can use Zeus for everyday payments.
        Next, we'll explore channel management for advanced users.
      </Callout>
    </LessonLayout>
  );
}
