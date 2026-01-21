import { TranscriptLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Musig2Rwc() {
  return (
    <TranscriptLayout transcriptId="musig2-rwc">
      {/* Key Takeaways */}
      <Callout type="success" title="Key Takeaways">
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>MuSig2 reduces multi-signatures from 3 rounds to 2 rounds</li>
          <li>The first round can be precomputed without knowing the message</li>
          <li>Multiple signers produce a single, standard Schnorr signature</li>
          <li>FROST extends these ideas to threshold (t-of-n) settings</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">From MuSig to MuSig2</h3>

      <p className="mb-4">
        Tim Ruffing presents the evolution of Schnorr multi-signatures at Real World Crypto 2021:
      </p>

      <blockquote className="border-l-4 border-indigo-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          "MuSig2 enables multiple signers to produce a single signature that appears as an
          ordinary Schnorr signature. The innovation reduces the protocol from three rounds
          to two rounds by allowing the first round to be performed without knowing the
          message to sign."
        </p>
        <cite className="block text-sm text-dark-500 mt-2 not-italic">— Tim Ruffing</cite>
      </blockquote>

      <Definition title="Multi-Signature vs Threshold Signature">
        <p>
          Understanding the distinction:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>Multi-signature (n-of-n):</strong> All n parties must sign</li>
          <li><strong>Threshold (t-of-n):</strong> Any t parties can sign</li>
        </ul>
        <p className="mt-2">
          MuSig2 is for n-of-n; FROST generalizes the approach to t-of-n.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Key Innovation</h3>

      <p className="mb-4">
        The breakthrough in MuSig2 involves nonce handling:
      </p>

      <blockquote className="border-l-4 border-indigo-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          "Every signer uses a random linear combination of multiple pre-nonces as a nonce."
        </p>
        <cite className="block text-sm text-dark-500 mt-2 not-italic">— Tim Ruffing</cite>
      </blockquote>

      <Example title="MuSig Evolution">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left border-b border-dark-700">
              <th className="pb-2">Version</th>
              <th className="pb-2">Rounds</th>
              <th className="pb-2">Notes</th>
            </tr>
          </thead>
          <tbody className="text-dark-300">
            <tr className="border-b border-dark-800">
              <td className="py-2">MuSig1</td>
              <td>3</td>
              <td className="text-red-400">Vulnerable to parallel signing attacks</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2">MuSig-DN</td>
              <td>2</td>
              <td>Requires zero-knowledge proofs</td>
            </tr>
            <tr>
              <td className="py-2">MuSig2</td>
              <td className="text-indigo-400">2</td>
              <td className="text-indigo-400">Precomputable first round</td>
            </tr>
          </tbody>
        </table>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Security Foundations</h3>

      <p className="mb-4">
        The security proof relies on several cryptographic assumptions:
      </p>

      <Definition title="Security Model">
        <p>
          MuSig2 is proven secure:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Under concurrent sessions</li>
          <li>In the Random Oracle Model (ROM)</li>
          <li>Plus the Algebraic Group Model (AGM)</li>
          <li>Under the One-More Discrete Logarithm (OMDL) assumption</li>
        </ul>
        <p className="mt-2 text-dark-400">
          Using 4 pre-nonces instead of 2 removes the AGM requirement.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Schnorr Linearity Advantage</h3>

      <p className="mb-4">
        Why Schnorr signatures enable these constructions:
      </p>

      <blockquote className="border-l-4 border-indigo-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          "The scheme exploits the nice linearity of Schnorr signatures, which ECDSA
          deliberately breaks, making multisignature protocols for ECDSA considerably
          more cumbersome."
        </p>
        <cite className="block text-sm text-dark-500 mt-2 not-italic">— Tim Ruffing</cite>
      </blockquote>

      <div className="bg-dark-800 rounded-lg p-4 mb-6">
        <p className="text-dark-300 text-sm">
          <strong className="text-dark-100">Linearity Property:</strong> For Schnorr signatures,
          partial signatures can be <em>added together</em> to produce a valid aggregate
          signature. ECDSA's modular inverse operation prevents this straightforward
          combination.
        </p>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Connection to FROST</h3>

      <p className="mb-4">
        The transcript notes that FROST emerged from similar insights:
      </p>

      <Callout type="info" title="Independent Discovery">
        <p>
          The pre-nonce technique was independently discovered by three research groups:
        </p>
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>MuSig2 team (Ruffing, Nick, Seurin)</li>
          <li>FROST team (Komlo, Goldberg) - extended to threshold</li>
          <li>DWMS team (threshold multi-signatures)</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Bitcoin Applications</h3>

      <p className="mb-4">
        MuSig2 enables several Bitcoin use cases:
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-indigo-400 font-bold mb-2">Shared Ownership</p>
          <p className="text-sm text-dark-300">
            Multiple parties jointly control funds with a single public key.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-indigo-400 font-bold mb-2">Payment Channels</p>
          <p className="text-sm text-dark-300">
            Lightning channels with improved privacy and efficiency.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-indigo-400 font-bold mb-2">Sidechains</p>
          <p className="text-sm text-dark-300">
            Federation multi-signatures that appear as single-key spends.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-indigo-400 font-bold mb-2">Privacy</p>
          <p className="text-sm text-dark-300">
            Observers see only a standard Schnorr signature.
          </p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Related Course Sections</h3>

      <div className="grid md:grid-cols-2 gap-3">
        <a
          href="#/section/2"
          className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 hover:border-amber-500/30 transition-colors group"
        >
          <p className="text-dark-200 font-medium group-hover:text-amber-400 transition-colors">
            Section 2: Multi-Signatures
          </p>
          <p className="text-sm text-dark-500">n-of-n signing schemes</p>
        </a>
        <a
          href="#/section/3"
          className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 hover:border-amber-500/30 transition-colors group"
        >
          <p className="text-dark-200 font-medium group-hover:text-amber-400 transition-colors">
            Section 3: Schnorr Signatures
          </p>
          <p className="text-sm text-dark-500">The foundation for MuSig</p>
        </a>
      </div>
    </TranscriptLayout>
  );
}
