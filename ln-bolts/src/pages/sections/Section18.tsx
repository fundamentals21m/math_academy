import { LessonLayout } from '@/components/layout';
import { Definition, Example, Theorem } from '@/components/common';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { OnionRoutingVisualizer } from '@/components/visualizations';

export default function Section18() {
  return (
    <LessonLayout sectionId={18}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">BOLT #4: Onion Routing</h2>

      <OnionRoutingVisualizer className="mb-8" />

      <p className="mb-4">
        BOLT #4 defines how payment instructions are encrypted using the Sphinx construction.
        This creates "onion" packets where each hop can only see their own instructions—providing
        strong privacy for the payment route.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Sphinx Construction</h3>

      <p className="mb-4">
        Sphinx is an onion routing protocol that provides:
      </p>

      <Definition title="Sphinx Properties">
        <ul className="mt-2 list-disc list-inside space-y-1">
          <li><strong>Per-hop Encryption:</strong> Each hop decrypts only their layer</li>
          <li><strong>Unlinkability:</strong> Packets look different at each hop</li>
          <li><strong>Constant Size:</strong> Packet size doesn't reveal position in route</li>
          <li><strong>Integrity:</strong> HMAC prevents tampering</li>
        </ul>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Onion Packet Structure</h3>

      <p className="mb-4">
        The onion packet has a fixed structure:
      </p>

      <Example title="Onion Packet Format">
        <table className="w-full text-sm font-mono">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-2">Field</th>
              <th className="text-left py-2">Size</th>
              <th className="text-left py-2">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-dark-800">
              <td className="py-2">version</td>
              <td className="py-2">1 byte</td>
              <td className="py-2">Currently 0</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2">public_key</td>
              <td className="py-2">33 bytes</td>
              <td className="py-2">Ephemeral key for this hop</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2">hop_payloads</td>
              <td className="py-2">1300 bytes</td>
              <td className="py-2">Encrypted per-hop data</td>
            </tr>
            <tr>
              <td className="py-2">hmac</td>
              <td className="py-2">32 bytes</td>
              <td className="py-2">Authentication for current hop</td>
            </tr>
          </tbody>
        </table>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Shared Secret Generation</h3>

      <p className="mb-4">
        Each hop derives a shared secret using ECDH:
      </p>

      <Theorem title="Shared Secret Derivation">
        <MathBlock>
          {`\\text{shared\\_secret} = \\text{SHA256}(\\text{ECDH}(\\text{ephemeral\\_key}, \\text{node\\_key}))`}
        </MathBlock>
        Where ECDH produces a curve point that is serialized (compressed) before hashing.
      </Theorem>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Key Derivation</h3>

      <p className="mb-4">
        From the shared secret, several keys are derived using HMAC-SHA256:
      </p>

      <Example title="Derived Keys">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-2">Key</th>
              <th className="text-left py-2">Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-dark-800">
              <td className="py-2 font-mono">rho</td>
              <td className="py-2">ChaCha20 stream for payload obfuscation</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2 font-mono">mu</td>
              <td className="py-2">HMAC key for packet authentication</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2 font-mono">um</td>
              <td className="py-2">HMAC key for error message obfuscation</td>
            </tr>
            <tr>
              <td className="py-2 font-mono">pad</td>
              <td className="py-2">Padding generation for packet filler</td>
            </tr>
          </tbody>
        </table>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Ephemeral Key Blinding</h3>

      <p className="mb-4">
        The ephemeral key changes at each hop to prevent linking:
      </p>

      <Theorem title="Key Blinding">
        <MathBlock>
          {`\\text{next\\_ephemeral} = \\text{current\\_ephemeral} \\times \\text{SHA256}(\\text{ephemeral} \\| \\text{shared\\_secret})`}
        </MathBlock>
        This "blinds" the key so observers cannot correlate packets across hops.
      </Theorem>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Hop Payload Format</h3>

      <p className="mb-4">
        Each hop's payload is encoded using TLV format:
      </p>

      <Definition title="Hop Payload TLV Fields">
        <ul className="mt-2 list-disc list-inside space-y-1">
          <li><strong>amt_to_forward (type 2):</strong> Amount to forward to next hop</li>
          <li><strong>outgoing_cltv_value (type 4):</strong> CLTV for outgoing HTLC</li>
          <li><strong>short_channel_id (type 6):</strong> Channel to forward on</li>
          <li><strong>payment_data (type 8):</strong> Payment secret + total amount (final hop)</li>
          <li><strong>encrypted_recipient_data (type 10):</strong> For blinded paths</li>
        </ul>
      </Definition>

      <Example title="Processing a Hop">
        <ol className="list-decimal list-inside space-y-2">
          <li>Compute shared secret using ECDH with our private key</li>
          <li>Derive rho and mu keys from shared secret</li>
          <li>Verify HMAC using mu key</li>
          <li>Decrypt payload using ChaCha20 with rho key</li>
          <li>Parse TLV payload to get forwarding instructions</li>
          <li>Blind the ephemeral key for the next hop</li>
          <li>Shift hop_payloads left and pad with filler</li>
        </ol>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Filler Generation</h3>

      <p className="mb-4">
        To maintain constant packet size, filler is generated deterministically:
      </p>

      <Callout type="info" title="Why Filler Matters">
        As each hop removes their payload, the packet would shrink—revealing position in the
        route. Instead, the sender pre-computes filler that each hop will add, keeping the
        packet at 1300 bytes throughout.
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Error Handling</h3>

      <p className="mb-4">
        Errors are returned using a similar onion structure:
      </p>

      <Definition title="Error Packet">
        Each hop wraps the error using their shared secret:
        <ol className="mt-2 list-decimal list-inside space-y-1">
          <li>Create HMAC of the error message</li>
          <li>XOR with a ChaCha20 stream (using um key)</li>
          <li>Forward back toward the sender</li>
        </ol>
        The sender can unwrap each layer to find where the error originated.
      </Definition>

      <Callout type="success" title="Privacy Guarantees">
        <ul className="list-disc list-inside space-y-1">
          <li>Hops don't know total route length</li>
          <li>Hops don't know if they're first, last, or middle</li>
          <li>Hops can't correlate incoming and outgoing packets</li>
          <li>Only the sender can read error messages</li>
        </ul>
      </Callout>
    </LessonLayout>
  );
}
