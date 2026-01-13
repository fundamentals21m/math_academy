import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section06() {
  return (
    <LessonLayout sectionId={6}>
      <h2>Why Verification Works (The Math)</h2>

      <p>
        Let's prove that Schnorr verification correctly accepts valid signatures.
        This derivation is at the heart of understanding threshold signatures.
      </p>

      <h3>The Verification Equation</h3>

      <p>We need to show that for a valid signature:</p>

      <MathBlock>
        {`[z]G = R + [c]Y`}
      </MathBlock>

      <Theorem
        title="Schnorr Verification Correctness"
        proof={
          <>
            <p className="mb-3">
              <strong>Starting point:</strong> The verification equation
            </p>
            <MathBlock>{`[z]G = R + [c]Y`}</MathBlock>

            <p className="mb-3 mt-4">
              <strong>Step 1:</strong> Substitute the definition of <InlineMath>{`z`}</InlineMath>:
            </p>
            <MathBlock>{`z = k + s \\cdot c`}</MathBlock>
            <MathBlock>{`[k + s \\cdot c]G = R + [c]Y`}</MathBlock>

            <p className="mb-3 mt-4">
              <strong>Step 2:</strong> Use scalar multiplication distributivity:
            </p>
            <MathBlock>{`[k]G + [s \\cdot c]G = R + [c]Y`}</MathBlock>

            <p className="mb-3 mt-4">
              <strong>Step 3:</strong> Recall that <InlineMath>{`R = [k]G`}</InlineMath> and
              <InlineMath>{`Y = [s]G`}</InlineMath>:
            </p>
            <MathBlock>{`R + [c]([s]G) = R + [c]Y`}</MathBlock>

            <p className="mb-3 mt-4">
              <strong>Step 4:</strong> Since <InlineMath>{`[c]([s]G) = [c \\cdot s]G = [c]Y`}</InlineMath>:
            </p>
            <MathBlock>{`R + [c]Y = R + [c]Y \\quad \\checkmark`}</MathBlock>
          </>
        }
      >
        <p>
          For a correctly computed signature <InlineMath>{`\\sigma = (R, z)`}</InlineMath>,
          the verification equation <InlineMath>{`[z]G = R + [c]Y`}</InlineMath> always holds.
        </p>
      </Theorem>

      <h3>Visual Intuition</h3>

      <p>
        Think of it geometrically:
      </p>

      <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 my-6">
        <ul className="space-y-3">
          <li>
            <InlineMath>{`[z]G`}</InlineMath> is a point on the curve determined by the response
          </li>
          <li>
            <InlineMath>{`R`}</InlineMath> is the commitment point (random, chosen by signer)
          </li>
          <li>
            <InlineMath>{`[c]Y`}</InlineMath> is a multiple of the public key (determined by challenge)
          </li>
          <li>
            <InlineMath>{`R + [c]Y`}</InlineMath> combines the random commitment with the public key
          </li>
        </ul>
        <p className="mt-4 text-dark-300">
          The signer proves they know <InlineMath>{`s`}</InlineMath> by producing a
          <InlineMath>{`z`}</InlineMath> that makes these two paths meet at the same point.
        </p>
      </div>

      <h3>The Key Insight</h3>

      <Callout type="important">
        <strong>Why This Proves Knowledge:</strong> To create a valid <InlineMath>{`z`}</InlineMath>,
        the signer needs to compute <InlineMath>{`z = k + s \\cdot c`}</InlineMath>. Without
        knowing <InlineMath>{`s`}</InlineMath>, they cannot produce a matching <InlineMath>{`z`}</InlineMath>
        for a commitment <InlineMath>{`R = [k]G`}</InlineMath> and challenge <InlineMath>{`c`}</InlineMath>.
      </Callout>

      <h3>Algebraic Properties Used</h3>

      <p>The proof relies on two key properties of elliptic curve groups:</p>

      <div className="grid md:grid-cols-2 gap-4 my-6">
        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50">
          <h4 className="font-semibold text-indigo-400 mb-2">Distributivity</h4>
          <MathBlock>{`[a + b]G = [a]G + [b]G`}</MathBlock>
          <p className="text-sm mt-2">
            Scalar addition distributes over point multiplication.
          </p>
        </div>
        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50">
          <h4 className="font-semibold text-emerald-400 mb-2">Associativity</h4>
          <MathBlock>{`[a \\cdot b]G = [a]([b]G)`}</MathBlock>
          <p className="text-sm mt-2">
            Scalar multiplication is associative with point multiplication.
          </p>
        </div>
      </div>

      <h3>For FROST: The Critical Observation</h3>

      <p>
        In FROST, we'll compute:
      </p>
      <ul className="list-disc list-inside space-y-2 my-4">
        <li><InlineMath>{`k = k_1 + k_2 + \\ldots + k_t`}</InlineMath> (sum of nonce shares)</li>
        <li><InlineMath>{`s = s_1 \\lambda_1 + s_2 \\lambda_2 + \\ldots + s_t \\lambda_t`}</InlineMath> (Lagrange interpolation)</li>
      </ul>

      <p>
        Because of linearity:
      </p>

      <MathBlock>
        {`z = \\sum_i z_i = \\sum_i (k_i + s_i \\lambda_i \\cdot c) = k + s \\cdot c`}
      </MathBlock>

      <p>
        Each participant computes a <InlineMath>{`z_i`}</InlineMath> using only their shares
        <InlineMath>{`k_i`}</InlineMath> and <InlineMath>{`s_i`}</InlineMath>. When summed,
        we get the correct Schnorr response!
      </p>
    </LessonLayout>
  );
}
