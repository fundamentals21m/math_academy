import { TranscriptLayout } from '@/components/layout/TranscriptLayout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function SecurityAnalysis() {
  return (
    <TranscriptLayout transcriptId="security-analysis">
      {/* Key Takeaways */}
      <Callout type="success" title="Key Takeaways">
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>Brontide protocol provides encrypted, authenticated P2P communications</li>
          <li>Sphinx onion routing hides payment paths from intermediate nodes</li>
          <li>Hash-lock correlation remains a challenge for multi-hop privacy</li>
          <li>On-chain congestion can trigger &quot;thundering herd&quot; failures</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Transport Layer Security</h3>

      <p className="mb-4">
        Olaoluwa Osuntokun (roasbeef) explains the encryption layer:
      </p>

      <blockquote className="border-l-4 border-amber-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          &quot;Brontide is our variant of the Noise protocol framework. Every Lightning
          connection is encrypted and authenticated from the first byte. There&apos;s no
          plaintext handshake phase—passive observers can&apos;t even tell it&apos;s Lightning.&quot;
        </p>
        <cite className="block text-sm text-dark-500 mt-2 not-italic">— Olaoluwa Osuntokun</cite>
      </blockquote>

      <Definition title="Brontide Properties">
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Forward secrecy:</strong> Compromised keys don&apos;t reveal past sessions</li>
          <li><strong>Identity hiding:</strong> Node IDs aren&apos;t revealed to passive observers</li>
          <li><strong>Replay protection:</strong> Messages can&apos;t be captured and replayed</li>
        </ul>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Onion Routing with Sphinx</h3>

      <p className="mb-4">
        Payment privacy comes from layered encryption:
      </p>

      <Example title="Sphinx Packet Properties">
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Fixed size (1366 bytes):</strong> Packet doesn&apos;t shrink as it traverses hops,
            hiding route length
          </li>
          <li>
            <strong>Per-hop encryption:</strong> Each node decrypts only their layer
          </li>
          <li>
            <strong>Error wrapping:</strong> Errors are re-encrypted at each hop back,
            only the sender can read them
          </li>
        </ul>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Known Vulnerabilities</h3>

      <Callout type="warning" title="Security Concerns">
        <p className="mb-2">Roasbeef identifies several attack vectors:</p>
      </Callout>

      <Definition title="Hash-Lock Correlation">
        <p>
          The same payment hash is used across all hops in a payment path.
          Colluding nodes at different positions can correlate they&apos;re part
          of the same payment:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Node A sees payment hash H going to Node B</li>
          <li>Node C (much later in path) sees same hash H</li>
          <li>A and C can conclude they&apos;re on the same payment route</li>
        </ul>
      </Definition>

      <blockquote className="border-l-4 border-amber-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          &quot;PTLCs fix this. Instead of hash locks, you use point locks where each
          hop has a different adaptor. No correlation possible. But it requires
          Schnorr signatures, so we waited for Taproot.&quot;
        </p>
        <cite className="block text-sm text-dark-500 mt-2 not-italic">— Olaoluwa Osuntokun</cite>
      </blockquote>

      <Definition title="Thundering Herd Attack">
        <p>
          If blockchain fees spike during network stress:
        </p>
        <ol className="list-decimal list-inside mt-2 space-y-1">
          <li>HTLCs approach their timeouts</li>
          <li>Nodes must close channels to claim funds</li>
          <li>Mass channel closures create more on-chain congestion</li>
          <li>Fees spike further, more closures cascade</li>
        </ol>
        <p className="mt-2 text-amber-400">
          Mitigation: Anchor outputs allow fee bumping after broadcast.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Channel Announcement Security</h3>

      <p className="mb-4">
        Gossip messages require cryptographic proof:
      </p>

      <Example title="Four-Way Signature">
        <p className="mb-2">
          A channel_announcement must be signed by four keys:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Both node identity keys (proves nodes exist)</li>
          <li>Both funding keys (proves they control the channel)</li>
        </ul>
        <p className="mt-2 text-sm text-dark-500">
          This prevents announcing fake channels or impersonating other nodes.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Future Improvements</h3>

      <Callout type="info" title="Proposed Solutions">
        <ul className="list-disc list-inside space-y-1">
          <li><strong>PTLCs:</strong> Point time-locked contracts for decorrelated payments</li>
          <li><strong>Trampoline routing:</strong> Outsource pathfinding to reduce probing</li>
          <li><strong>Blinded paths:</strong> Hide receiver identity in invoices</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Related Sections</h3>

      <div className="grid md:grid-cols-2 gap-3">
        <a
          href="#/section/2"
          className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 hover:border-amber-500/30 transition-colors group"
        >
          <p className="text-dark-200 font-medium group-hover:text-amber-400 transition-colors">
            Section 2: BOLT #8 Transport
          </p>
          <p className="text-sm text-dark-500">Noise protocol encryption</p>
        </a>
        <a
          href="#/section/18"
          className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 hover:border-amber-500/30 transition-colors group"
        >
          <p className="text-dark-200 font-medium group-hover:text-amber-400 transition-colors">
            Section 18: BOLT #4 Onion Routing
          </p>
          <p className="text-sm text-dark-500">Sphinx packet construction</p>
        </a>
      </div>
    </TranscriptLayout>
  );
}
