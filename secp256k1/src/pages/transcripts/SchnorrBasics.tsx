import { TranscriptLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function SchnorrBasics() {
  return (
    <TranscriptLayout transcriptId="schnorr-basics">
      {/* Key Takeaways */}
      <Callout type="success" title="Key Takeaways">
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>Schnorr signatures are simpler and more efficient than ECDSA</li>
          <li>Linear signature structure enables key aggregation (MuSig)</li>
          <li>Batch verification provides significant speedups for node validation</li>
          <li>BIP340 defines Bitcoin's specific Schnorr implementation</li>
        </ul>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Why Schnorr?</h3>

      <p className="mb-4">
        Pieter Wuille opens with the historical context of Schnorr signatures and why Bitcoin
        initially used ECDSA instead:
      </p>

      <blockquote className="border-l-4 border-cyan-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          "Schnorr signatures were patented until 2008. By the time Bitcoin launched in 2009,
          ECDSA was the established standard with extensive testing and deployment. But
          mathematically, Schnorr is the more elegant choice."
        </p>
        <cite className="block text-sm text-dark-500 mt-2 not-italic">— Pieter Wuille</cite>
      </blockquote>

      <Definition title="Schnorr Signature Scheme">
        <p>
          A Schnorr signature on message <InlineMath>m</InlineMath> with private key{' '}
          <InlineMath>d</InlineMath> and public key <InlineMath>P = dG</InlineMath>:
        </p>
        <ol className="list-decimal list-inside mt-3 space-y-2">
          <li>Choose random nonce <InlineMath>k</InlineMath>, compute <InlineMath>R = kG</InlineMath></li>
          <li>Compute challenge <InlineMath>e = H(R \| P \| m)</InlineMath></li>
          <li>Compute <InlineMath>s = k + ed</InlineMath></li>
          <li>Signature is <InlineMath>(R, s)</InlineMath></li>
        </ol>
        <p className="mt-3">
          Verification: check that <InlineMath>sG = R + eP</InlineMath>
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Schnorr vs ECDSA</h3>

      <Example title="Comparing Signature Schemes">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left border-b border-dark-700">
              <th className="pb-2">Property</th>
              <th className="pb-2">ECDSA</th>
              <th className="pb-2">Schnorr</th>
            </tr>
          </thead>
          <tbody className="text-dark-300">
            <tr className="border-b border-dark-800">
              <td className="py-2">Provable Security</td>
              <td>No proof*</td>
              <td className="text-cyan-400">Proven secure (ROM)</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2">Key Aggregation</td>
              <td>Complex</td>
              <td className="text-cyan-400">Natural (linear)</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2">Batch Verification</td>
              <td>No</td>
              <td className="text-cyan-400">Yes (~2x speedup)</td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2">Signature Size</td>
              <td>71-72 bytes</td>
              <td className="text-cyan-400">64 bytes</td>
            </tr>
            <tr>
              <td className="py-2">Malleability</td>
              <td>Malleable</td>
              <td className="text-cyan-400">Non-malleable</td>
            </tr>
          </tbody>
        </table>
        <p className="mt-3 text-dark-400 text-xs">
          *ECDSA security relies on assumptions but lacks a formal proof in standard models.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Linearity Advantage</h3>

      <p className="mb-4">
        The key insight is that Schnorr signatures have a <strong>linear structure</strong>.
        Pieter explains why this matters:
      </p>

      <Definition title="Signature Linearity">
        <p>
          For Schnorr signatures with the same <InlineMath>R</InlineMath>:
        </p>
        <MathBlock>
          {`(s_1 + s_2)G = (k_1 + k_2)G + e(d_1 + d_2)G`}
        </MathBlock>
        <p className="mt-2">
          This means you can <em>add signatures together</em> and get a valid signature
          for the sum of the keys. ECDSA's structure (involving modular inverse) prevents this.
        </p>
      </Definition>

      <p className="mb-4">
        This linearity enables powerful applications:
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-cyan-400 font-bold mb-2">Multi-Signatures</p>
          <p className="text-sm text-dark-300">
            Multiple parties can create a single signature indistinguishable from a regular one.
            On-chain, this looks like a single-key spend, preserving privacy.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-cyan-400 font-bold mb-2">Adaptor Signatures</p>
          <p className="text-sm text-dark-300">
            "Incomplete" signatures that can be completed by revealing a secret.
            Enables atomic swaps without hash time-locks.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-cyan-400 font-bold mb-2">Threshold Signatures</p>
          <p className="text-sm text-dark-300">
            t-of-n signing where any t participants can sign, but fewer cannot.
            No special script needed.
          </p>
        </div>
        <div className="bg-dark-800 rounded-lg p-4">
          <p className="text-cyan-400 font-bold mb-2">Blind Signatures</p>
          <p className="text-sm text-dark-300">
            Signer can sign a message without knowing its content.
            Useful for privacy protocols.
          </p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Batch Verification</h3>

      <p className="mb-4">
        One of the most practical benefits for Bitcoin nodes is batch verification:
      </p>

      <blockquote className="border-l-4 border-cyan-500/50 pl-4 py-2 my-6 text-dark-300 italic bg-dark-800/30 rounded-r-lg">
        <p>
          "Instead of verifying n signatures individually with n point multiplications,
          we can batch them into roughly one verification. For a block with 2000 signatures,
          this is close to a 2x speedup in validation time."
        </p>
        <cite className="block text-sm text-dark-500 mt-2 not-italic">— Pieter Wuille</cite>
      </blockquote>

      <Definition title="Batch Verification">
        <p>
          To verify <InlineMath>n</InlineMath> signatures{' '}
          <InlineMath>(R_1, s_1), ..., (R_n, s_n)</InlineMath> on messages{' '}
          <InlineMath>m_1, ..., m_n</InlineMath> with public keys <InlineMath>P_1, ..., P_n</InlineMath>:
        </p>
        <ol className="list-decimal list-inside mt-3 space-y-2">
          <li>Choose random weights <InlineMath>a_1, ..., a_n</InlineMath></li>
          <li>Compute <InlineMath>{`\\sum a_i s_i G = \\sum a_i R_i + \\sum a_i e_i P_i`}</InlineMath></li>
        </ol>
        <p className="mt-3">
          If any signature is invalid, the equation fails with overwhelming probability.
          This requires one multi-scalar multiplication instead of <InlineMath>n</InlineMath> separate ones.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">BIP340 Design Choices</h3>

      <p className="mb-4">
        Pieter discusses the specific choices made for Bitcoin's Schnorr implementation:
      </p>

      <Example title="BIP340 Key Decisions">
        <div className="space-y-4">
          <div>
            <p className="font-semibold text-dark-100">32-byte Public Keys (x-only)</p>
            <p className="text-sm text-dark-300 mt-1">
              Only store the x-coordinate. The y-coordinate is implicitly the even one,
              saving 1 byte per pubkey and simplifying key aggregation.
            </p>
          </div>
          <div>
            <p className="font-semibold text-dark-100">Tagged Hashes</p>
            <p className="text-sm text-dark-300 mt-1">
              <code className="text-cyan-400">H(tag || tag || data)</code> prevents
              cross-protocol attacks where a hash from one context is reused in another.
            </p>
          </div>
          <div>
            <p className="font-semibold text-dark-100">Nonce Commitment in Challenge</p>
            <p className="text-sm text-dark-300 mt-1">
              Challenge hash includes <InlineMath>R</InlineMath>, <InlineMath>P</InlineMath>,
              and <InlineMath>m</InlineMath>—stronger than textbook Schnorr which omits{' '}
              <InlineMath>P</InlineMath>.
            </p>
          </div>
          <div>
            <p className="font-semibold text-dark-100">No Signature Encoding Flexibility</p>
            <p className="text-sm text-dark-300 mt-1">
              Unlike ECDSA's DER encoding, Schnorr signatures are always exactly 64 bytes.
              This eliminates malleability vectors.
            </p>
          </div>
        </div>
      </Example>

      <Callout type="warning" title="Security Considerations">
        <p>
          <strong>Nonce reuse is fatal.</strong> If the same <InlineMath>k</InlineMath> is
          used twice with different messages, the private key can be computed:
        </p>
        <MathBlock>
          {`d = \\frac{s_1 - s_2}{e_1 - e_2}`}
        </MathBlock>
        <p className="mt-2">
          BIP340 mandates deterministic nonce generation using RFC 6979 style derivation
          from the private key and message.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Related Course Sections</h3>

      <div className="grid md:grid-cols-2 gap-3">
        <a
          href="#/section/8"
          className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 hover:border-amber-500/30 transition-colors group"
        >
          <p className="text-dark-200 font-medium group-hover:text-amber-400 transition-colors">
            Section 8: Schnorr Signatures
          </p>
          <p className="text-sm text-dark-500">Deep dive into the mathematics</p>
        </a>
        <a
          href="#/section/6"
          className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 hover:border-amber-500/30 transition-colors group"
        >
          <p className="text-dark-200 font-medium group-hover:text-amber-400 transition-colors">
            Section 6: ECDSA Signing
          </p>
          <p className="text-sm text-dark-500">Compare with the original scheme</p>
        </a>
      </div>
    </TranscriptLayout>
  );
}
