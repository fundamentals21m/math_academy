import { TranscriptLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function FrostFundamentals() {
  return (
    <TranscriptLayout transcriptId="frost-fundamentals">
      {/* Key Takeaways */}
      <Callout type="success" title="Key Takeaways">
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>FROST is a 2-round threshold signing protocol that is concurrently secure</li>
          <li>The signing key is partitioned among signers; the full secret is never reconstructed</li>
          <li>FROST2 optimization reduces exponentiations from t to 1 for threshold scenarios</li>
          <li>There's a performance vs. malleability trade-off between FROST1 and FROST2</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">What is FROST?</h3>

      <p className="mb-4">
        Chelsea Komlo and Elizabeth Crites, the authors of the FROST paper, explain their threshold
        signature scheme from first principles at Zcon3:
      </p>

      <blockquote className="border-l-4 border-indigo-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          "A flexible round optimized Schnorr Threshold Signature Scheme that introduced a 2 round
          threshold signing protocol which is concurrently secure."
        </p>
        <cite className="block text-sm text-dark-500 mt-2 not-italic">— Chelsea Komlo</cite>
      </blockquote>

      <Definition title="Threshold Signatures">
        <p>
          In a <InlineMath>t</InlineMath>-of-<InlineMath>n</InlineMath> threshold signature scheme:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>The signing key is partitioned among <InlineMath>n</InlineMath> signers</li>
          <li>Any <InlineMath>t</InlineMath> signers can collaboratively produce a valid signature</li>
          <li>Fewer than <InlineMath>t</InlineMath> signers cannot forge signatures</li>
          <li>The full secret key is <em>never reconstructed</em></li>
        </ul>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">FROST1 vs FROST2</h3>

      <p className="mb-4">
        The presenters explain a crucial design decision that affects both performance and security:
      </p>

      <Example title="FROST1 vs FROST2 Trade-off">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left border-b border-dark-700">
              <th className="pb-2">Property</th>
              <th className="pb-2">FROST1</th>
              <th className="pb-2">FROST2</th>
            </tr>
          </thead>
          <tbody className="text-dark-300">
            <tr className="border-b border-dark-800">
              <td className="py-2">Exponentiations</td>
              <td><InlineMath>t</InlineMath> per signer</td>
              <td className="text-indigo-400">1 per signer</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2">Hash includes signer index</td>
              <td>Yes</td>
              <td>No</td>
            </tr>
            <tr>
              <td className="py-2">Signing set malleability</td>
              <td className="text-indigo-400">Protected</td>
              <td>Vulnerable</td>
            </tr>
          </tbody>
        </table>
      </Example>

      <blockquote className="border-l-4 border-indigo-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          "There is this performance versus malleability trade-off between FROST1 and FROST2.
          It depends on your application."
        </p>
        <cite className="block text-sm text-dark-500 mt-2 not-italic">— Elizabeth Crites</cite>
      </blockquote>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Distributed Key Generation (DKG)</h3>

      <p className="mb-4">
        Before signing can occur, participants must generate their key shares through a
        Distributed Key Generation protocol:
      </p>

      <Definition title="PedPop (Pedersen DKG with Proofs of Possession)">
        <p>
          The recommended DKG protocol for FROST, which ensures:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Each participant proves knowledge of their secret</li>
          <li>No single party learns the combined secret key</li>
          <li>Misbehaving participants can be identified</li>
        </ul>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">ROS Attack Defense</h3>

      <p className="mb-4">
        FROST incorporates defenses against the ROS (Rogue-Key or Sum) attack that affected
        earlier threshold schemes:
      </p>

      <Callout type="warning" title="Security Consideration">
        <p>
          The ROS attack allows a malicious participant to manipulate the aggregate signature
          by choosing their public key adversarially. FROST's binding techniques prevent this
          by committing to the set of participants before signing begins.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Unlinkable FROST</h3>

      <p className="mb-4">
        The presenters discuss ongoing research into privacy-preserving variants:
      </p>

      <div className="bg-dark-800 rounded-lg p-4 mb-6">
        <p className="text-dark-300 text-sm">
          <strong className="text-dark-100">Unlinkable FROST</strong> aims to prevent observers
          from linking multiple signatures to the same threshold group, enhancing privacy for
          applications like anonymous credentials.
        </p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Practical Adoption</h3>

      <p className="mb-4">
        The transcript notes growing real-world interest in FROST:
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-indigo-400 font-bold mb-2">Coinbase</p>
          <p className="text-sm text-dark-300">
            Published discussions of FROST deployment for institutional custody.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-indigo-400 font-bold mb-2">Bitcoin BIP</p>
          <p className="text-sm text-dark-300">
            Interest in standardizing FROST for Bitcoin similar to BIP340 for Schnorr.
          </p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Related Course Sections</h3>

      <div className="grid md:grid-cols-2 gap-3">
        <a
          href="#/section/1"
          className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 hover:border-amber-500/30 transition-colors group"
        >
          <p className="text-dark-200 font-medium group-hover:text-amber-400 transition-colors">
            Section 1: Introduction to Threshold Signatures
          </p>
          <p className="text-sm text-dark-500">Foundational concepts</p>
        </a>
        <a
          href="#/section/3"
          className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 hover:border-amber-500/30 transition-colors group"
        >
          <p className="text-dark-200 font-medium group-hover:text-amber-400 transition-colors">
            Section 3: Schnorr Signatures
          </p>
          <p className="text-sm text-dark-500">The basis for FROST</p>
        </a>
      </div>
    </TranscriptLayout>
  );
}
