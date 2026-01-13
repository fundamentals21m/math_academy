import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section03() {
  return (
    <LessonLayout sectionId={3}>
      <h2>What Makes FROST Special</h2>

      <p>
        FROST (Flexible Round-Optimized Schnorr Threshold Signatures) achieves something
        remarkable: threshold signatures that look <em>identical</em> to single-party Schnorr
        signatures, with no reconstruction of the private key ever required.
      </p>

      <h3>The Four Key Properties</h3>

      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="p-4 rounded-xl bg-gradient-to-br from-indigo-900/30 to-indigo-800/20 border border-indigo-700/50">
          <h4 className="text-lg font-semibold text-indigo-400 mb-3">1. Signature Indistinguishability</h4>
          <p className="text-sm text-dark-200">
            A FROST signature looks <strong>identical</strong> to a single-party Schnorr signature.
            On-chain: 1 public key, 1 signature - regardless of <InlineMath>{`t`}</InlineMath> or
            <InlineMath>{`n`}</InlineMath>.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-900/30 to-emerald-800/20 border border-emerald-700/50">
          <h4 className="text-lg font-semibold text-emerald-400 mb-3">2. No Secret Reconstruction</h4>
          <p className="text-sm text-dark-200">
            The private key <InlineMath>{`s`}</InlineMath> <strong>never exists</strong> in one place.
            Not during key generation. Not during signing. Never.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-gradient-to-br from-amber-900/30 to-amber-800/20 border border-amber-700/50">
          <h4 className="text-lg font-semibold text-amber-400 mb-3">3. Network Efficiency</h4>
          <p className="text-sm text-dark-200">
            Single-round signing with preprocessing. After setup, participants can sign
            with just <strong>one round</strong> of communication.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-gradient-to-br from-rose-900/30 to-rose-800/20 border border-rose-700/50">
          <h4 className="text-lg font-semibold text-rose-400 mb-3">4. True Threshold</h4>
          <p className="text-sm text-dark-200">
            Only <InlineMath>{`t`}</InlineMath> of <InlineMath>{`n`}</InlineMath> participants needed.
            Not all <InlineMath>{`n`}</InlineMath>. Any subset of size <InlineMath>{`t`}</InlineMath> works.
          </p>
        </div>
      </div>

      <h3>The Magic Equation</h3>

      <p>
        At its heart, FROST's elegance comes from a single equation that captures the entire protocol:
      </p>

      <MathBlock>
        {`z = k + s \\cdot c`}
      </MathBlock>

      <p>This is the standard Schnorr signature equation. But in FROST:</p>

      <ul className="list-disc list-inside space-y-3 my-4">
        <li>
          <InlineMath>{`k = \\sum_i k_i`}</InlineMath> — The nonce is additively shared
        </li>
        <li>
          <InlineMath>{`s = \\sum_i s_i \\cdot \\lambda_i`}</InlineMath> — The secret is Shamir-shared
        </li>
        <li>
          <InlineMath>{`c = H(R, Y, m)`}</InlineMath> — The challenge binds everything together
        </li>
      </ul>

      <Theorem title="FROST Correctness">
        <p>
          If each participant computes their signature share correctly, the aggregated signature
          is a valid Schnorr signature for the group public key.
        </p>
        <MathBlock>
          {`[z]G = R + [c]Y`}
        </MathBlock>
        <p className="mt-2">
          where <InlineMath>{`R = [k]G`}</InlineMath> and <InlineMath>{`Y = [s]G`}</InlineMath>
          are the commitment and public key respectively.
        </p>
      </Theorem>

      <h3>Comparison Table</h3>

      <div className="overflow-x-auto my-6">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-3 px-4 text-dark-300">Property</th>
              <th className="text-center py-3 px-4 text-dark-300">Multisig</th>
              <th className="text-center py-3 px-4 text-dark-300">SSS</th>
              <th className="text-center py-3 px-4 text-indigo-400">FROST</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-dark-800">
            <tr>
              <td className="py-3 px-4">On-chain size</td>
              <td className="text-center py-3 px-4 text-red-400">~64t bytes</td>
              <td className="text-center py-3 px-4 text-amber-400">~64 bytes</td>
              <td className="text-center py-3 px-4 text-emerald-400">~64 bytes</td>
            </tr>
            <tr>
              <td className="py-3 px-4">Privacy</td>
              <td className="text-center py-3 px-4 text-red-400">Reveals t-of-n</td>
              <td className="text-center py-3 px-4 text-emerald-400">Hidden</td>
              <td className="text-center py-3 px-4 text-emerald-400">Hidden</td>
            </tr>
            <tr>
              <td className="py-3 px-4">Secret exposure</td>
              <td className="text-center py-3 px-4 text-emerald-400">Never</td>
              <td className="text-center py-3 px-4 text-red-400">At reconstruction</td>
              <td className="text-center py-3 px-4 text-emerald-400">Never</td>
            </tr>
            <tr>
              <td className="py-3 px-4">Threshold</td>
              <td className="text-center py-3 px-4 text-emerald-400">t-of-n</td>
              <td className="text-center py-3 px-4 text-emerald-400">t-of-n</td>
              <td className="text-center py-3 px-4 text-emerald-400">t-of-n</td>
            </tr>
            <tr>
              <td className="py-3 px-4">Signing rounds</td>
              <td className="text-center py-3 px-4 text-amber-400">1</td>
              <td className="text-center py-3 px-4 text-red-400">N/A</td>
              <td className="text-center py-3 px-4 text-emerald-400">1 (with prep)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Callout type="info">
        <strong>The FROST Innovation:</strong> Threshold signing without ever reconstructing the secret.
        The mathematical elegance lies in combining Schnorr signatures, Shamir secret sharing, and
        Lagrange interpolation in a way that "adds up" correctly without anyone seeing the whole picture.
      </Callout>

      <h3>What's Next</h3>

      <p>
        To understand how FROST achieves this magic, we need to build three mathematical tools:
      </p>
      <ol className="list-decimal list-inside space-y-2 my-4">
        <li><strong>Schnorr signatures</strong> — The atomic unit that FROST distributes</li>
        <li><strong>Shamir secret sharing</strong> — How to split secrets across participants</li>
        <li><strong>Lagrange interpolation</strong> — How to "evaluate" polynomials at zero</li>
      </ol>
      <p>
        We'll build each from scratch in the coming sections.
      </p>
    </LessonLayout>
  );
}
