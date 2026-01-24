import { TranscriptLayout } from '@/components/layout/TranscriptLayout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';

export default function HighwayToHex() {
  return (
    <TranscriptLayout transcriptId="highway-to-hex">
      {/* Key Takeaways */}
      <Callout type="success" title="Key Takeaways">
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>SHA256 is a one-way function - easy to compute, impossible to reverse</li>
          <li>Hexadecimal notation is the &quot;amino acids&quot; of Bitcoin transactions</li>
          <li>Elliptic-curve cryptography protects secrets without revealing them</li>
          <li>Bitcoin represents freedom from state monetary control</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">One-Way Functions</h3>

      <p className="mb-4">
        The article uses cultural metaphor to explain Bitcoin&apos;s cryptographic foundations:
      </p>

      <Definition title="SHA256 Hashing">
        <p>
          SHA256 is a cryptographic hash function with a critical property:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>Easy to compute:</strong> Any input produces a fixed 256-bit output</li>
          <li><strong>Impossible to reverse:</strong> Cannot determine input from output</li>
          <li><strong>Collision resistant:</strong> Virtually impossible to find two inputs with same output</li>
          <li><strong>Deterministic:</strong> Same input always produces same output</li>
        </ul>
      </Definition>

      <blockquote className="border-l-4 border-indigo-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          &quot;The &apos;one-way rides&apos; of elliptic-curve cryptography protect Bitcoin secrets without
          revealing them. Like a locked door you can see is locked, but can&apos;t open.&quot;
        </p>
      </blockquote>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Hexadecimal Systems</h3>

      <p className="mb-4">
        Hexadecimal notation serves as the foundational representation for Bitcoin transactions:
      </p>

      <Example title="Hexadecimal Basics">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-2">Hex</th>
              <th className="text-left py-2">Decimal</th>
              <th className="text-left py-2">Binary</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-dark-800">
              <td className="py-2 font-mono">0-9</td>
              <td className="py-2">0-9</td>
              <td className="py-2 font-mono">0000-1001</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2 font-mono">A</td>
              <td className="py-2">10</td>
              <td className="py-2 font-mono">1010</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2 font-mono">B</td>
              <td className="py-2">11</td>
              <td className="py-2 font-mono">1011</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2 font-mono">C</td>
              <td className="py-2">12</td>
              <td className="py-2 font-mono">1100</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2 font-mono">D</td>
              <td className="py-2">13</td>
              <td className="py-2 font-mono">1101</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2 font-mono">E</td>
              <td className="py-2">14</td>
              <td className="py-2 font-mono">1110</td>
            </tr>
            <tr>
              <td className="py-2 font-mono">F</td>
              <td className="py-2">15</td>
              <td className="py-2 font-mono">1111</td>
            </tr>
          </tbody>
        </table>
      </Example>

      <Callout type="info" title="Why Hexadecimal?">
        <p>
          Hexadecimal is ideal for representing binary data because each hex digit maps to exactly
          4 bits. A 256-bit hash becomes a 64-character hex string, much more readable than 256
          ones and zeros.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Elliptic-Curve Cryptography</h3>

      <p className="mb-4">
        Bitcoin uses the secp256k1 elliptic curve for public-key cryptography:
      </p>

      <Definition title="Public-Key Cryptography">
        <p>
          The system works through mathematical one-way functions:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>Private key:</strong> A random 256-bit number (your secret)</li>
          <li><strong>Public key:</strong> Derived from private key via curve multiplication</li>
          <li><strong>Address:</strong> Hash of public key (what you share)</li>
          <li><strong>Signature:</strong> Proves ownership without revealing private key</li>
        </ul>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Bitcoin as Liberation</h3>

      <p className="mb-4">
        The article reinterprets classic rock themes as a metaphor for Bitcoin adoption:
      </p>

      <blockquote className="border-l-4 border-indigo-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          &quot;Bitcoin offers freedom from state monetary control and traditional financial tyranny—
          a &apos;road to salvation&apos; through decentralized, cryptographically-secured money.&quot;
        </p>
      </blockquote>

      <Example title="The Liberation Framework">
        <div className="space-y-3">
          <div className="p-3 bg-dark-800/50 rounded-lg">
            <p className="font-medium text-dark-200">Traditional System</p>
            <p className="text-sm text-dark-400">Contractual exploitation, inflation tax, capital controls</p>
          </div>
          <div className="p-3 bg-indigo-500/10 border border-indigo-500/20 rounded-lg">
            <p className="font-medium text-indigo-400">Bitcoin Alternative</p>
            <p className="text-sm text-dark-400">Self-sovereign wealth, fixed supply, borderless transfer</p>
          </div>
        </div>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Institutional Significance</h3>

      <Definition title="Technical Understanding for Institutions">
        <p>
          For institutional investors, understanding these fundamentals is critical:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Cryptographic security underpins all Bitcoin value propositions</li>
          <li>Private key management is the core operational challenge</li>
          <li>One-way functions enable trustless verification</li>
          <li>No central point of failure or control</li>
        </ul>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Related Sections</h3>

      <div className="grid md:grid-cols-2 gap-3">
        <a
          href="#/section/11"
          className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 hover:border-indigo-500/30 transition-colors group"
        >
          <p className="text-dark-200 font-medium group-hover:text-indigo-400 transition-colors">
            Section 11: Cryptographic Foundations
          </p>
          <p className="text-sm text-dark-500">Deep dive into Bitcoin cryptography</p>
        </a>
        <a
          href="#/section/12"
          className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 hover:border-indigo-500/30 transition-colors group"
        >
          <p className="text-dark-200 font-medium group-hover:text-indigo-400 transition-colors">
            Section 12: Key Management
          </p>
          <p className="text-sm text-dark-500">Institutional custody best practices</p>
        </a>
      </div>
    </TranscriptLayout>
  );
}
