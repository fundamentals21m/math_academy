import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section53() {
  return (
    <LessonLayout sectionId={53}>
      <h2>Lagrange Coefficient Computation</h2>

      <p>
        Computing Lagrange coefficients correctly is essential for FROST. These coefficients
        enable the reconstruction of the secret through polynomial interpolation, but the
        computation involves rational arithmetic in a finite field.
      </p>

      <h3>The Lagrange Coefficient Formula</h3>

      <Definition title="Lagrange Coefficient">
        <p>
          For a signing set <InlineMath>{`S`}</InlineMath> and participant{' '}
          <InlineMath>{`i \\in S`}</InlineMath>, the Lagrange coefficient at{' '}
          <InlineMath>{`x = 0`}</InlineMath> is:
        </p>
        <MathBlock>
          {`\\lambda_i = \\prod_{j \\in S, j \\neq i} \\frac{0 - j}{i - j} = \\prod_{j \\in S, j \\neq i} \\frac{-j}{i - j}`}
        </MathBlock>
      </Definition>

      <h3>Naive Implementation (Wrong)</h3>

      <Example title="Incorrect Floating-Point Approach">
        <pre className="bg-gray-800 p-4 rounded text-sm overflow-x-auto">
{`# WRONG: Uses floating-point division
lambda = 1
for j in S:
    if j != i:
        lambda *= (-j) / (i - j)  # Division!`}
        </pre>
        <p className="mt-3 text-red-400">
          This fails because division in a finite field requires modular inverse,
          not floating-point division!
        </p>
      </Example>

      <Callout type="warning">
        <strong>Common Pitfall:</strong> Division in <InlineMath>{`\\mathbb{Z}_q`}</InlineMath>{' '}
        is not the same as regular division. The expression{' '}
        <InlineMath>{`a/b \\pmod{q}`}</InlineMath> means{' '}
        <InlineMath>{`a \\cdot b^{-1} \\pmod{q}`}</InlineMath> where{' '}
        <InlineMath>{`b^{-1}`}</InlineMath> is the modular multiplicative inverse of{' '}
        <InlineMath>{`b`}</InlineMath>.
      </Callout>

      <h3>Correct Implementation</h3>

      <Example title="Proper Finite Field Computation">
        <pre className="bg-gray-800 p-4 rounded text-sm overflow-x-auto">
{`lambda_num = 1  # numerator
lambda_den = 1  # denominator

for j in S:
    if j != i:
        lambda_num = (lambda_num * (-j)) % q
        lambda_den = (lambda_den * (i - j)) % q

lambda_i = (lambda_num * mod_inverse(lambda_den, q)) % q`}
        </pre>
        <p className="mt-3">
          We accumulate the numerator and denominator separately, then compute
          the final result using one modular inverse operation.
        </p>
      </Example>

      <h3>Computing Modular Inverse</h3>

      <Theorem title="Fermat's Little Theorem">
        <p>
          For prime <InlineMath>{`q`}</InlineMath> and{' '}
          <InlineMath>{`a \\not\\equiv 0 \\pmod{q}`}</InlineMath>:
        </p>
        <MathBlock>
          {`a^{-1} \\equiv a^{q-2} \\pmod{q}`}
        </MathBlock>
        <p className="mt-4">
          This provides a straightforward way to compute modular inverses using
          modular exponentiation.
        </p>
      </Theorem>

      <h3>Precomputation for Efficiency</h3>

      <p>
        For common threshold configurations, Lagrange coefficients can be precomputed:
      </p>

      <Example title="2-of-3 Precomputed Coefficients">
        <p>For a 2-of-3 threshold, there are only 3 possible signing sets:</p>
        <ul className="list-disc list-inside space-y-2 mt-4">
          <li>
            <InlineMath>{`S = \\{1, 2\\}`}</InlineMath>:{' '}
            <InlineMath>{`\\lambda_1 = 2, \\lambda_2 = -1`}</InlineMath>
          </li>
          <li>
            <InlineMath>{`S = \\{1, 3\\}`}</InlineMath>:{' '}
            <InlineMath>{`\\lambda_1 = 3/2, \\lambda_3 = -1/2`}</InlineMath>
          </li>
          <li>
            <InlineMath>{`S = \\{2, 3\\}`}</InlineMath>:{' '}
            <InlineMath>{`\\lambda_2 = 3, \\lambda_3 = -2`}</InlineMath>
          </li>
        </ul>
        <p className="mt-3">
          These can be stored as precomputed values (in the finite field) to avoid
          runtime computation.
        </p>
      </Example>

      <Callout type="info">
        <strong>Critical Requirement:</strong> All participants in a signing session must
        compute Lagrange coefficients for the <em>same</em> signing set{' '}
        <InlineMath>{`S`}</InlineMath>. If participants disagree on who is in the signing
        set, the signature will be invalid.
      </Callout>

      <h3>Verification of Coefficients</h3>

      <Theorem title="Lagrange Coefficient Sum">
        <p>
          For any valid signing set <InlineMath>{`S`}</InlineMath> with{' '}
          <InlineMath>{`|S| \\geq t`}</InlineMath>, the Lagrange coefficients satisfy:
        </p>
        <MathBlock>
          {`\\sum_{i \\in S} \\lambda_i = 1`}
        </MathBlock>
        <p className="mt-4">
          This property can be used as a sanity check for implementations.
        </p>
      </Theorem>
    </LessonLayout>
  );
}
