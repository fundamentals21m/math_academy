import { LessonLayout } from '@/components/layout';
import { Definition, Example, Theorem } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function Section04() {
  return (
    <LessonLayout sectionId={4}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Feature Negotiation (BOLT #9)</h2>

      <p className="mb-4">
        BOLT #9 defines the feature flag system that allows Lightning implementations to evolve
        while maintaining backward compatibility. Features are negotiated during connection
        establishment and announced in node/channel advertisements.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Bit-Pairing System</h3>

      <p className="mb-4">
        Features use pairs of consecutive bits: even bits indicate mandatory support, odd bits
        indicate optional support.
      </p>

      <Theorem title="Feature Bit Pairing">
        For feature N:
        <ul className="mt-2 list-disc list-inside space-y-1">
          <li><strong>Bit 2N (even):</strong> Feature is mandatory - peers MUST support it</li>
          <li><strong>Bit 2N+1 (odd):</strong> Feature is optional - nice to have but not required</li>
        </ul>
        <p className="mt-2">
          Setting the even bit implies the odd bit is also set. Receivers should treat
          the mandatory bit as superseding the optional one.
        </p>
      </Theorem>

      <Example title="Understanding Feature Pairs">
        <p className="mb-2">Consider "data_loss_protect" at feature pair 0:</p>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Bit 0 (even):</strong> Data loss protection is REQUIRED</li>
          <li><strong>Bit 1 (odd):</strong> Data loss protection is OPTIONAL</li>
        </ul>
        <p className="mt-2 text-sm text-dark-300">
          If a node sets bit 0, peers without this feature cannot connect.
          If bit 1 is set instead, the feature is used when both peers support it.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Feature Contexts</h3>

      <p className="mb-4">
        Features are signaled in different contexts, each serving a specific purpose:
      </p>

      <Definition title="Init Features">
        Announced in the <code className="bg-dark-800 px-1 rounded">init</code> message during
        connection establishment. Determines what protocol features the connection will use.
      </Definition>

      <Definition title="Node Features">
        Included in <code className="bg-dark-800 px-1 rounded">node_announcement</code> gossip
        messages. Advertises a node's general capabilities to the network.
      </Definition>

      <Definition title="Channel Features">
        Found in <code className="bg-dark-800 px-1 rounded">channel_announcement</code> messages.
        Indicates features supported by a specific channel.
      </Definition>

      <Definition title="Invoice Features">
        Encoded in BOLT #11 invoices. Specifies what features the payment requires.
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Key Features</h3>

      <Example title="Important Feature Flags">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-2">Bits</th>
              <th className="text-left py-2">Name</th>
              <th className="text-left py-2">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-dark-800">
              <td className="py-2 font-mono">0/1</td>
              <td className="py-2">data_loss_protect</td>
              <td className="py-2">Channel backup/recovery support</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2 font-mono">4/5</td>
              <td className="py-2">upfront_shutdown_script</td>
              <td className="py-2">Pre-commit closing address</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2 font-mono">8/9</td>
              <td className="py-2">gossip_queries</td>
              <td className="py-2">Query-based gossip sync</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2 font-mono">12/13</td>
              <td className="py-2">static_remotekey</td>
              <td className="py-2">Static to_remote key derivation</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2 font-mono">14/15</td>
              <td className="py-2">payment_secret</td>
              <td className="py-2">Payment secret in HTLCs</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2 font-mono">16/17</td>
              <td className="py-2">basic_mpp</td>
              <td className="py-2">Basic multi-part payments</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2 font-mono">20/21</td>
              <td className="py-2">anchor_outputs</td>
              <td className="py-2">Anchor outputs for fee bumping</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2 font-mono">22/23</td>
              <td className="py-2">anchors_zero_fee_htlc_tx</td>
              <td className="py-2">Zero-fee HTLC transactions</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2 font-mono">24/25</td>
              <td className="py-2">route_blinding</td>
              <td className="py-2">Blinded route support</td>
            </tr>
            <tr>
              <td className="py-2 font-mono">44/45</td>
              <td className="py-2">dual_fund</td>
              <td className="py-2">Dual-funded channels (v2)</td>
            </tr>
          </tbody>
        </table>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Assumed Features</h3>

      <p className="mb-4">
        Some features are so widely adopted that they're considered "assumed"—all implementations
        are expected to support them regardless of signaling:
      </p>

      <Callout type="info" title="Assumed Features">
        <ul className="list-disc list-inside space-y-1">
          <li><strong>data_loss_protect:</strong> Essential for channel recovery</li>
          <li><strong>gossip_queries:</strong> Modern gossip synchronization</li>
          <li><strong>static_remotekey:</strong> Simplified key management</li>
          <li><strong>payment_secret:</strong> Required for payment security</li>
        </ul>
        <p className="mt-2">
          These features don't need to be advertised—peers assume they're present.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Feature Dependencies</h3>

      <p className="mb-4">
        Some features depend on other features being present. When advertising a feature,
        all its dependencies must also be advertised.
      </p>

      <Example title="Feature Dependency Example">
        <p className="mb-2">
          The <code className="bg-dark-800 px-1 rounded">basic_mpp</code> feature (multi-part
          payments) requires <code className="bg-dark-800 px-1 rounded">payment_secret</code>.
        </p>
        <p className="text-sm text-dark-300">
          If you advertise basic_mpp, you MUST also advertise payment_secret.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Negotiation Process</h3>

      <p className="mb-4">
        When two nodes connect, they exchange init messages and negotiate features:
      </p>

      <Theorem title="Feature Negotiation Rules">
        <ol className="list-decimal list-inside space-y-2 mt-2">
          <li>Both nodes send their feature bitmaps in the init message</li>
          <li>If either node requires a feature (even bit) the other lacks, disconnect</li>
          <li>Optional features (odd bits) are used if both peers support them</li>
          <li>Unknown odd features are ignored; unknown even features cause disconnection</li>
        </ol>
      </Theorem>

      <Example title="Negotiation Example">
        <div className="space-y-3">
          <div>
            <p className="font-semibold">Alice's features: 0b00001011</p>
            <p className="text-sm text-dark-300">Bits 0, 1, 3 set (mandatory 0, optional 1 and 3)</p>
          </div>
          <div>
            <p className="font-semibold">Bob's features: 0b00000111</p>
            <p className="text-sm text-dark-300">Bits 0, 1, 2 set (mandatory 0, optional 1 and 2)</p>
          </div>
          <div className="pt-2 border-t border-dark-700">
            <p className="font-semibold">Result:</p>
            <ul className="list-disc list-inside text-sm">
              <li>Both support mandatory feature 0: ✓</li>
              <li>Both support optional feature 1: enabled</li>
              <li>Bob has optional feature 2, Alice doesn't: not used</li>
              <li>Alice has optional feature 3, Bob doesn't: not used</li>
            </ul>
          </div>
        </div>
      </Example>

      <Callout type="warning" title="Graceful Degradation">
        Nodes should aim to set features as optional (odd bits) whenever possible. This allows
        connections with older nodes while still benefiting from new features with updated peers.
      </Callout>
    </LessonLayout>
  );
}
