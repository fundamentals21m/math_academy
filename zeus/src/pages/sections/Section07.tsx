import { LessonLayout } from '@/components/layout';
import { Definition, Theorem } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section07() {
  return (
    <LessonLayout sectionId={7}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Channel Management</h2>

      <p className="mb-4">
        Lightning channels are the foundation of Lightning Network payments. Understanding how to
        open, manage, and close channels effectively is crucial for a smooth Lightning experience.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Viewing Your Channels</h3>

      <p className="mb-4">
        In Zeus, navigate to the Channels screen to see:
      </p>

      <ul className="list-disc list-inside mb-6 space-y-2 text-dark-200">
        <li><strong>Channel List:</strong> All open channels with their peers</li>
        <li><strong>Local Balance:</strong> What you can send through each channel</li>
        <li><strong>Remote Balance:</strong> What others can send you through each channel</li>
        <li><strong>Channel Status:</strong> Active, pending, or inactive</li>
      </ul>

      <Definition title="Channel Capacity">
        The total amount of bitcoin locked in a channel. It equals local balance plus remote balance
        and never changes unless the channel is closed or spliced.
      </Definition>

      <MathBlock>{`\\text{Capacity} = \\text{Local Balance} + \\text{Remote Balance}`}</MathBlock>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Opening Channels</h3>

      <p className="mb-4">
        To open a new channel:
      </p>

      <ol className="list-decimal list-inside mb-6 space-y-2 text-dark-200">
        <li><strong>Navigate to Channels</strong> and tap "Open Channel"</li>
        <li><strong>Enter the peer's node URI</strong> or select from suggestions</li>
        <li><strong>Set channel capacity</strong> (amount to lock in the channel)</li>
        <li><strong>Choose fee rate</strong> for the opening transaction</li>
        <li><strong>Confirm</strong> to broadcast the funding transaction</li>
      </ol>

      <Definition title="Node URI">
        A unique identifier for a Lightning node containing its public key and network address:
        <pre className="bg-dark-800 p-2 rounded mt-2 text-xs">
          pubkey@host:port
        </pre>
      </Definition>

      <Callout type="info" title="Choosing Peers">
        Open channels with well-connected, reliable nodes. Good peers have:
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>High uptime (always online)</li>
          <li>Good connectivity to the rest of the network</li>
          <li>Reasonable fee policies</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Channel States</h3>

      <Definition title="Pending Open">
        The funding transaction has been broadcast but not yet confirmed. Typically requires
        3 confirmations (<InlineMath>{'\\sim'}</InlineMath>30 minutes) before the channel is usable.
      </Definition>

      <Definition title="Active">
        The channel is open, confirmed, and ready to route payments. Both you and your peer
        are online.
      </Definition>

      <Definition title="Inactive">
        The channel is open but your peer is currently offline. Payments cannot route through
        this channel until they come back online.
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Managing Liquidity</h3>

      <p className="mb-4">
        Effective channel management means maintaining balanced liquidity:
      </p>

      <Theorem title="Liquidity Balance">
        <MathBlock>{`\\text{Outbound} = \\sum \\text{Local Balances}`}</MathBlock>
        <MathBlock>{`\\text{Inbound} = \\sum \\text{Remote Balances}`}</MathBlock>
        <p className="mt-2 text-sm">
          For receiving, you need inbound liquidity. For sending, you need outbound.
        </p>
      </Theorem>

      <p className="mb-4 mt-4">
        Strategies for getting inbound liquidity:
      </p>

      <ul className="list-disc list-inside mb-6 space-y-2 text-dark-200">
        <li><strong>Spend First:</strong> Use your outbound to make purchases</li>
        <li><strong>Channel from Others:</strong> Have others open channels to you</li>
        <li><strong>Loop Out:</strong> Move funds from Lightning to on-chain</li>
        <li><strong>LSP Services:</strong> Pay for on-demand inbound liquidity</li>
      </ul>

      <Callout type="warning" title="Common Mistake">
        Opening many channels doesn't help if they all have 100% local balance.
        You'll be able to send but not receive.
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Closing Channels</h3>

      <p className="mb-4">
        Zeus supports multiple channel close types:
      </p>

      <Definition title="Cooperative Close">
        Both parties agree to close the channel. Creates a single on-chain transaction that
        pays out final balances. Fastest and cheapest method.
      </Definition>

      <Definition title="Force Close">
        Unilateral close when your peer is unresponsive. Requires waiting for a timeout period
        before you can access funds. More expensive and takes longer.
      </Definition>

      <Callout type="danger" title="Force Close Delays">
        Force closes have a timelock - typically 144 blocks (about 24 hours) - during which
        your funds are locked. Only force close if your peer is permanently unavailable.
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Channel Fees</h3>

      <p className="mb-4">
        As a node operator, you set fees for routing through your channels:
      </p>

      <Definition title="Base Fee">
        A flat fee (in millisatoshis) charged per forwarded payment regardless of size.
        Common values: 0-1000 msat.
      </Definition>

      <Definition title="Fee Rate">
        A percentage of the payment amount, measured in parts per million (ppm).
        1 ppm = 0.0001%. Common values: 1-1000 ppm.
      </Definition>

      <MathBlock>{`\\text{Total Fee} = \\text{Base Fee} + \\frac{\\text{Amount} \\times \\text{Fee Rate}}{1{,}000{,}000}`}</MathBlock>

      <Callout type="note" title="Fee Strategy">
        Lower fees attract more routing but earn less per transaction.
        Higher fees earn more but may be bypassed by routing algorithms.
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Routing Reports</h3>

      <p className="mb-4">
        Zeus provides detailed routing reports showing:
      </p>

      <ul className="list-disc list-inside mb-6 space-y-2 text-dark-200">
        <li>Forwarded payments and earned fees</li>
        <li>Failed routing attempts and reasons</li>
        <li>Channel flow patterns</li>
        <li>Revenue per channel</li>
      </ul>

      <Callout type="success" title="Channel Mastery">
        Understanding channels transforms you from a Lightning user to a Lightning operator.
        Well-managed channels provide reliable payments and potentially earn routing fees.
      </Callout>
    </LessonLayout>
  );
}
