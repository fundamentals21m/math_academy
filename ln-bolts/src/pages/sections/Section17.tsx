import { LessonLayout } from '@/components/layout';
import { Definition, Example, Theorem } from '@/components/common';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section17() {
  return (
    <LessonLayout sectionId={17}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Channel Updates</h2>

      <p className="mb-4">
        Channel updates announce the routing parameters for a specific channel direction.
        Each channel has two channel_update messages—one from each endpoint—describing
        fees and policies for forwarding in that direction.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Fee Structure</h3>

      <p className="mb-4">
        Lightning routing fees have two components:
      </p>

      <Definition title="Routing Fee Formula">
        <MathBlock>
          {`\\text{fee} = \\text{fee\\_base\\_msat} + \\frac{\\text{amount\\_msat} \\times \\text{fee\\_proportional\\_millionths}}{1{,}000{,}000}`}
        </MathBlock>
        <ul className="mt-2 list-disc list-inside space-y-1">
          <li><strong>fee_base_msat:</strong> Flat fee per forwarded HTLC</li>
          <li><strong>fee_proportional_millionths:</strong> Rate per million satoshis</li>
        </ul>
      </Definition>

      <Example title="Fee Calculation">
        <p className="mb-2">For a 1,000,000 msat (1000 sat) payment through a node with:</p>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>fee_base_msat = 1000 (1 sat base fee)</li>
          <li>fee_proportional_millionths = 100 (0.01% = 100 ppm)</li>
        </ul>
        <MathBlock>
          {`\\text{fee} = 1000 + \\frac{1{,}000{,}000 \\times 100}{1{,}000{,}000} = 1000 + 100 = 1100 \\text{ msat}`}
        </MathBlock>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">CLTV Expiry Delta</h3>

      <p className="mb-4">
        The cltv_expiry_delta specifies how much timelock buffer a node requires:
      </p>

      <Definition title="CLTV Delta Purpose">
        When forwarding a payment:
        <ul className="mt-2 list-disc list-inside space-y-1">
          <li>Incoming HTLC has CLTV expiry T</li>
          <li>Outgoing HTLC must have CLTV expiry at most T - cltv_expiry_delta</li>
          <li>This buffer ensures time to claim incoming HTLC if outgoing is claimed on-chain</li>
        </ul>
      </Definition>

      <Callout type="warning" title="Security Implications">
        Too small a delta risks funds: if the outgoing HTLC is claimed on-chain, you need
        enough blocks to extract the preimage and claim the incoming HTLC. Typical values
        are 40-144 blocks.
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Channel Flags</h3>

      <p className="mb-4">
        The channel_flags field indicates direction and status:
      </p>

      <Example title="Channel Flags">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-2">Bit</th>
              <th className="text-left py-2">Meaning</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-dark-800">
              <td className="py-2 font-mono">0</td>
              <td className="py-2">Direction: 0 = node_id_1 → node_id_2, 1 = reverse</td>
            </tr>
            <tr>
              <td className="py-2 font-mono">1</td>
              <td className="py-2">Disabled: 1 = channel temporarily disabled</td>
            </tr>
          </tbody>
        </table>
      </Example>

      <Definition title="Channel Direction">
        In a channel_announcement, nodes are ordered lexicographically (node_id_1 {'<'} node_id_2).
        The direction bit indicates which way this update applies:
        <ul className="mt-2 list-disc list-inside space-y-1">
          <li><strong>Bit 0 = 0:</strong> For payments from node_id_1 to node_id_2</li>
          <li><strong>Bit 0 = 1:</strong> For payments from node_id_2 to node_id_1</li>
        </ul>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">HTLC Limits</h3>

      <p className="mb-4">
        Channel updates can specify limits on HTLCs:
      </p>

      <Example title="HTLC Constraints">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-2">Field</th>
              <th className="text-left py-2">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-dark-800">
              <td className="py-2 font-mono">htlc_minimum_msat</td>
              <td className="py-2">Smallest HTLC this node will forward</td>
            </tr>
            <tr>
              <td className="py-2 font-mono">htlc_maximum_msat</td>
              <td className="py-2">Largest HTLC this node will forward (optional)</td>
            </tr>
          </tbody>
        </table>
      </Example>

      <Callout type="info" title="Why Set Limits?">
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Minimum:</strong> Avoid routing tiny payments that aren't worth the fee</li>
          <li><strong>Maximum:</strong> Reserve capacity for multiple payments or avoid risk</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Timestamp and Freshness</h3>

      <p className="mb-4">
        Channel updates use timestamps to determine which version is current:
      </p>

      <Theorem title="Update Replacement Rules">
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>Updates with newer timestamps replace older ones</li>
          <li>Updates within the same second: accept if signature differs</li>
          <li>Nodes should update at least every 2 weeks to avoid pruning</li>
          <li>Don't accept updates with future timestamps (clock skew tolerance)</li>
        </ul>
      </Theorem>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Disabling Channels</h3>

      <p className="mb-4">
        Nodes can temporarily disable a channel direction without closing the channel:
      </p>

      <Example title="Reasons to Disable">
        <ul className="list-disc list-inside space-y-1">
          <li>Peer is offline</li>
          <li>Maintenance or upgrades</li>
          <li>Insufficient liquidity in that direction</li>
          <li>Rate limiting due to high traffic</li>
        </ul>
      </Example>

      <Callout type="success" title="Dynamic Fee Adjustment">
        Sophisticated routing nodes dynamically adjust their fees based on:
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Channel balance (higher fees when liquidity is scarce)</li>
          <li>Demand patterns (higher fees during peak times)</li>
          <li>Rebalancing needs (lower fees to attract inbound)</li>
        </ul>
      </Callout>
    </LessonLayout>
  );
}
