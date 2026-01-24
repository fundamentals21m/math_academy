import { TranscriptLayout } from '@/components/layout/TranscriptLayout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function BoltByBolt() {
  return (
    <TranscriptLayout transcriptId="bolt-by-bolt">
      {/* Key Takeaways */}
      <Callout type="success" title="Key Takeaways">
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>Lightning has 11 BOLT specifications for interoperability</li>
          <li>Payment channels work like a &quot;bar tab&quot; - multiple transactions, one settlement</li>
          <li>HTLCs enable trustless multi-hop payments</li>
          <li>Revocation keys punish cheating with total fund loss</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Bar Tab Analogy</h3>

      <p className="mb-4">
        Jim Posen explains payment channels using a relatable scenario:
      </p>

      <blockquote className="border-l-4 border-amber-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          &quot;Think of a payment channel like opening a bar tab. You put $100 down when you arrive.
          Every drink you order, the bartender just updates the tab. At the end of the night,
          you settle up once. Lightning channels work the same way—one transaction to open,
          unlimited updates in between, one transaction to close.&quot;
        </p>
        <cite className="block text-sm text-dark-500 mt-2 not-italic">— Jim Posen</cite>
      </blockquote>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The 11 BOLTs</h3>

      <p className="mb-4">
        Posen walks through each specification:
      </p>

      <Example title="BOLT Specification Overview">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-2">BOLT</th>
              <th className="text-left py-2">Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-dark-800">
              <td className="py-2 font-mono">#1</td>
              <td className="py-2">Base protocol and TLV encoding</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2 font-mono">#2</td>
              <td className="py-2">Peer protocol for channel management</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2 font-mono">#3</td>
              <td className="py-2">Bitcoin transaction formats</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2 font-mono">#4</td>
              <td className="py-2">Onion routing protocol</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2 font-mono">#5</td>
              <td className="py-2">On-chain transaction handling</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2 font-mono">#7</td>
              <td className="py-2">P2P node and channel discovery</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2 font-mono">#8</td>
              <td className="py-2">Encrypted transport protocol</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2 font-mono">#9</td>
              <td className="py-2">Feature flags</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2 font-mono">#10</td>
              <td className="py-2">DNS bootstrap</td>
            </tr>
            <tr>
              <td className="py-2 font-mono">#11</td>
              <td className="py-2">Invoice protocol</td>
            </tr>
          </tbody>
        </table>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Commitment Transactions</h3>

      <Definition title="The Revocation Mechanism">
        <p>
          Each channel update creates new commitment transactions. Old states are &quot;revoked&quot;
          by exchanging revocation keys:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>If you broadcast a revoked state, your counterparty can take ALL funds</li>
          <li>This punishment mechanism ensures honest behavior</li>
          <li>Both parties must store all revocation secrets they&apos;ve received</li>
        </ul>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">HTLCs: Chaining Channels</h3>

      <p className="mb-4">
        The magic of Lightning is routing payments through multiple channels:
      </p>

      <blockquote className="border-l-4 border-amber-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          &quot;HTLCs are how we chain channels together. Alice can pay Carol through Bob,
          even though Alice has no direct channel with Carol. The hash lock ensures
          atomicity—either the entire payment succeeds, or nothing happens.&quot;
        </p>
        <cite className="block text-sm text-dark-500 mt-2 not-italic">— Jim Posen</cite>
      </blockquote>

      <Definition title="HTLC Structure">
        <p>Hash Time-Locked Contracts have two spending conditions:</p>
        <ol className="list-decimal list-inside mt-2 space-y-1">
          <li><strong>Hash lock:</strong> Recipient can claim with the preimage</li>
          <li><strong>Time lock:</strong> Sender can reclaim after timeout</li>
        </ol>
        <p className="mt-2">
          The preimage travels backward through the route, settling each hop atomically.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Onion Routing for Privacy</h3>

      <p className="mb-4">
        BOLT #4 specifies Sphinx-based onion routing:
      </p>

      <Callout type="info" title="Privacy Properties">
        <ul className="list-disc list-inside space-y-1">
          <li>Each hop only knows the previous and next hop</li>
          <li>Packet size is constant (1366 bytes) to hide route length</li>
          <li>Only the sender can read error messages</li>
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
          <p className="text-sm text-dark-500">Encrypted communications</p>
        </a>
        <a
          href="#/section/18"
          className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 hover:border-amber-500/30 transition-colors group"
        >
          <p className="text-dark-200 font-medium group-hover:text-amber-400 transition-colors">
            Section 18: BOLT #4 Onion Routing
          </p>
          <p className="text-sm text-dark-500">Privacy through encryption layers</p>
        </a>
      </div>
    </TranscriptLayout>
  );
}
