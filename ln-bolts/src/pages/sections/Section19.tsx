import { LessonLayout } from '@/components/layout';
import { Definition, Example, Theorem } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section19() {
  return (
    <LessonLayout sectionId={19}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Blinded Paths</h2>

      <p className="mb-4">
        Blinded paths (route blinding) allow a recipient to hide their node identity and the
        final portion of the payment route. This provides strong privacy for merchants and
        recipients who don't want to reveal their network position.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Why Blinded Paths?</h3>

      <p className="mb-4">
        Standard Lightning payments require knowing the recipient's node ID and finding a route
        to them. This reveals:
      </p>

      <Example title="Privacy Concerns Without Blinding">
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Recipient Identity:</strong> Their public node ID is exposed</li>
          <li><strong>Network Position:</strong> Which channels lead to them</li>
          <li><strong>Channel Partners:</strong> Who they have channels with</li>
          <li><strong>Capacity Info:</strong> Details about their channels</li>
        </ul>
      </Example>

      <Definition title="Blinded Path">
        A path where node IDs are replaced with "blinded" identifiers and routing instructions
        are encrypted. Only the introduction point (first hop of the blinded portion) knows
        the real identity of the next hop.
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Blinded Path Structure</h3>

      <p className="mb-4">
        A blinded path consists of:
      </p>

      <Example title="Blinded Path Components">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-2">Field</th>
              <th className="text-left py-2">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-dark-800">
              <td className="py-2 font-mono">introduction_node_id</td>
              <td className="py-2">Real node ID of the entry point</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2 font-mono">blinding_point</td>
              <td className="py-2">Initial ephemeral key for blinding</td>
            </tr>
            <tr>
              <td className="py-2 font-mono">blinded_hops[]</td>
              <td className="py-2">List of (blinded_node_id, encrypted_data) pairs</td>
            </tr>
          </tbody>
        </table>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Creating Blinded Paths</h3>

      <p className="mb-4">
        The recipient creates blinded paths they include in invoices or offers:
      </p>

      <Theorem title="Blinded Node ID Creation">
        For each hop in the blinded portion:
        <ol className="list-decimal list-inside space-y-2 mt-2">
          <li>Compute shared secret with the hop's real node ID</li>
          <li>Derive blinding factor from shared secret</li>
          <li>Multiply real node ID by blinding factor to get blinded ID</li>
          <li>Encrypt routing data for that hop</li>
          <li>Derive next blinding point for the following hop</li>
        </ol>
      </Theorem>

      <Definition title="Encrypted Data Payload">
        Each hop's encrypted_data contains:
        <ul className="mt-2 list-disc list-inside space-y-1">
          <li><strong>short_channel_id:</strong> Which channel to forward on</li>
          <li><strong>next_blinding_override:</strong> Optional new blinding point</li>
          <li><strong>payment_relay:</strong> Fee and CLTV delta info</li>
          <li><strong>payment_constraints:</strong> Max CLTV, min amount</li>
        </ul>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Processing Blinded Hops</h3>

      <p className="mb-4">
        When a node receives a payment for a blinded path:
      </p>

      <Example title="Blinded Hop Processing">
        <ol className="list-decimal list-inside space-y-2">
          <li>Receive blinding_point from onion payload</li>
          <li>Compute shared secret: ECDH(blinding_point, node_privkey)</li>
          <li>Derive decryption key from shared secret</li>
          <li>Decrypt the encrypted_data to get routing instructions</li>
          <li>Compute next_blinding_point for the next hop</li>
          <li>Forward with the next blinded_node_id</li>
        </ol>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Security Properties</h3>

      <Theorem title="Blinded Path Privacy">
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>
            <strong>Recipient Hidden:</strong> Only the final hop knows it's the recipient
          </li>
          <li>
            <strong>Path Hidden:</strong> Intermediate hops only see blinded IDs
          </li>
          <li>
            <strong>Introduction Point:</strong> The only public node in the blinded portion
          </li>
          <li>
            <strong>Correlation Resistant:</strong> Same path can use different blinding points
          </li>
        </ul>
      </Theorem>

      <Callout type="info" title="Multiple Blinded Paths">
        Recipients often provide multiple blinded paths with different introduction points.
        This improves reliability (if one path fails) and privacy (sender chooses randomly).
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Use Cases</h3>

      <Example title="Blinded Path Applications">
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Private Merchants:</strong> Accept payments without revealing node identity
          </li>
          <li>
            <strong>Mobile Wallets:</strong> Receive payments without public channels
          </li>
          <li>
            <strong>BOLT #12 Offers:</strong> Include blinded paths for invoice requests
          </li>
          <li>
            <strong>Async Payments:</strong> Pre-generate paths for offline receiving
          </li>
        </ul>
      </Example>

      <Callout type="warning" title="Trade-offs">
        <ul className="list-disc list-inside space-y-1">
          <li>Longer paths = higher fees and more potential failures</li>
          <li>Introduction point knows it's an introduction point</li>
          <li>Path must be regenerated if channels change</li>
          <li>Sender doesn't know actual path cost until they try</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Compact Blinded Paths</h3>

      <p className="mb-4">
        To reduce invoice size, blinded paths can be compacted:
      </p>

      <Definition title="Path Compaction">
        <ul className="mt-2 list-disc list-inside space-y-1">
          <li>Use short_channel_id instead of full 33-byte node IDs where possible</li>
          <li>Omit optional fields with default values</li>
          <li>Aggregate fees for entire blinded portion</li>
        </ul>
      </Definition>
    </LessonLayout>
  );
}
