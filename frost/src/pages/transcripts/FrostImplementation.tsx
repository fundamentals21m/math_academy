import { TranscriptLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function FrostImplementation() {
  return (
    <TranscriptLayout transcriptId="frost-implementation">
      {/* Key Takeaways */}
      <Callout type="success" title="Key Takeaways">
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>FROST implementation uses share generation called iteratively, not all at once</li>
          <li>Participants are identified by public keys, not sequential numbers</li>
          <li>Session IDs ensure fresh coefficients across DKG rounds</li>
          <li>Key refresh is intentionally omitted due to security complexity</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Implementation Architecture</h3>

      <p className="mb-4">
        This Bitcoin Core Dev Tech discussion covers the practical implementation details
        of FROST, focusing on differences between the academic paper and production code:
      </p>

      <Definition title="Share Generation Approach">
        <p>
          The implementation uses an iterative share generation function rather than
          generating all shares simultaneously. This design choice:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Reduces memory requirements</li>
          <li>Allows for streaming generation in constrained environments</li>
          <li>Simplifies error handling per-participant</li>
        </ul>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Participant Identification</h3>

      <p className="mb-4">
        A key implementation detail concerns how participants are identified:
      </p>

      <blockquote className="border-l-4 border-indigo-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          "Participants are identified using public keys instead of sequential numbers."
        </p>
        <cite className="block text-sm text-dark-500 mt-2 not-italic">— Bitcoin Core Dev Tech</cite>
      </blockquote>

      <Example title="Participant ID Comparison">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left border-b border-dark-700">
              <th className="pb-2">Approach</th>
              <th className="pb-2">Academic Paper</th>
              <th className="pb-2">Implementation</th>
            </tr>
          </thead>
          <tbody className="text-dark-300">
            <tr className="border-b border-dark-800">
              <td className="py-2">Participant ID</td>
              <td>Sequential (1, 2, 3...)</td>
              <td className="text-indigo-400">Public Key</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2">ID Assignment</td>
              <td>Coordinator assigns</td>
              <td className="text-indigo-400">Self-selected</td>
            </tr>
            <tr>
              <td className="py-2">Collision Risk</td>
              <td>Possible</td>
              <td className="text-indigo-400">Cryptographically negligible</td>
            </tr>
          </tbody>
        </table>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Session Identifiers</h3>

      <p className="mb-4">
        The implementation requires session IDs to ensure security across multiple DKG rounds:
      </p>

      <blockquote className="border-l-4 border-indigo-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          "The session ID... the reason we need this is because the coefficients are generated
          deterministically from the inputs."
        </p>
        <cite className="block text-sm text-dark-500 mt-2 not-italic">— Bitcoin Core Dev Tech</cite>
      </blockquote>

      <Definition title="Session ID Purpose">
        <p>
          The session ID ensures:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Fresh randomness in each DKG execution</li>
          <li>Protection against replay attacks</li>
          <li>Binding between commitment and reveal phases</li>
        </ul>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Signing Mechanics</h3>

      <p className="mb-4">
        The signing process mirrors MuSig2's structure but uses Lagrange coefficients:
      </p>

      <div className="bg-dark-800 rounded-lg p-4 mb-6">
        <p className="text-dark-300 text-sm">
          <strong className="text-dark-100">Key Difference:</strong> Where MuSig2 uses key
          aggregation coefficients derived from all public keys, FROST substitutes Lagrange
          interpolation coefficients based on the signing set.
        </p>
      </div>

      <Callout type="warning" title="Nonce Security">
        <p>
          Nonce generation follows similar defensive patterns to MuSig2, including protection
          against Wagner's attack through careful commitment ordering and binding.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Key Refresh: Intentionally Omitted</h3>

      <p className="mb-4">
        The implementation notably excludes key refresh functionality:
      </p>

      <blockquote className="border-l-4 border-amber-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          "Key refresh is really dangerous, it might be more dangerous than DKG itself."
        </p>
        <cite className="block text-sm text-dark-500 mt-2 not-italic">— Bitcoin Core Dev Tech</cite>
      </blockquote>

      <Definition title="Why Key Refresh is Risky">
        <p>
          Key refresh allows participants to update their shares while maintaining the same
          aggregate public key. However:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Requires all participants to be online simultaneously</li>
          <li>A compromised old share combined with refresh data could recover the key</li>
          <li>Complex abort handling can leak information</li>
        </ul>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Lightning Network Integration</h3>

      <p className="mb-4">
        The discussion envisions FROST enabling new Lightning channel management patterns:
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-indigo-400 font-bold mb-2">Threshold Funding</p>
          <p className="text-sm text-dark-300">
            Channels could use threshold-secured funding keypairs, distributing control.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-indigo-400 font-bold mb-2">Cold Storage Integration</p>
          <p className="text-sm text-dark-300">
            Threshold signing could eliminate need for separate cold storage solutions.
          </p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Future Work: FROST BIP</h3>

      <p className="mb-4">
        The presenter outlines plans for standardization:
      </p>

      <ul className="space-y-2 text-dark-300">
        <li className="flex items-start gap-2">
          <span className="text-indigo-400">1.</span>
          <span>FROST BIP specification modeled on MuSig2's BIP327</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-indigo-400">2.</span>
          <span>Python reference implementation for testing</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-indigo-400">3.</span>
          <span>API visualization tools for developers</span>
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Related Course Sections</h3>

      <div className="grid md:grid-cols-2 gap-3">
        <a
          href="#/section/5"
          className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 hover:border-amber-500/30 transition-colors group"
        >
          <p className="text-dark-200 font-medium group-hover:text-amber-400 transition-colors">
            Section 5: Distributed Key Generation
          </p>
          <p className="text-sm text-dark-500">DKG protocols explained</p>
        </a>
        <a
          href="#/section/7"
          className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 hover:border-amber-500/30 transition-colors group"
        >
          <p className="text-dark-200 font-medium group-hover:text-amber-400 transition-colors">
            Section 7: FROST Signing Protocol
          </p>
          <p className="text-sm text-dark-500">Step-by-step signing</p>
        </a>
      </div>
    </TranscriptLayout>
  );
}
