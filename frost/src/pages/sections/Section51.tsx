import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section51() {
  return (
    <LessonLayout sectionId={51}>
      <h2>Elliptic Curve Point Arithmetic</h2>

      <p>
        Implementing FROST requires efficient and secure elliptic curve operations.
        The fundamental operation is <strong>scalar multiplication</strong>: computing{' '}
        <InlineMath>{`[k]G`}</InlineMath> where <InlineMath>{`k`}</InlineMath> is a scalar
        and <InlineMath>{`G`}</InlineMath> is the generator point.
      </p>

      <h3>The Naive Double-and-Add Method</h3>

      <p>
        Given the binary representation of <InlineMath>{`k`}</InlineMath>:
      </p>

      <MathBlock>
        {`k = k_0 + k_1 \\cdot 2 + k_2 \\cdot 4 + \\ldots`}
      </MathBlock>

      <p>The basic algorithm computes:</p>

      <Example title="Double-and-Add Algorithm">
        <pre className="bg-gray-800 p-4 rounded text-sm overflow-x-auto">
{`Q = O (identity)
P = G
for each bit k_i of k:
    if k_i == 1: Q = Q + P
    P = 2P  (point doubling)
return Q`}
        </pre>
      </Example>

      <Callout type="warning">
        <strong>Timing Attack Vulnerability:</strong> The branch on secret bit{' '}
        <InlineMath>{`k_i`}</InlineMath> leaks information through timing differences.
        An attacker measuring execution time can potentially recover the secret scalar.
      </Callout>

      <h3>Constant-Time Scalar Multiplication</h3>

      <p>
        For cryptographic security, we must eliminate timing variations that depend on
        secret values. The solution is constant-time operations:
      </p>

      <Example title="Constant-Time Double-and-Add">
        <pre className="bg-gray-800 p-4 rounded text-sm overflow-x-auto">
{`for each bit k_i:
    Q_temp = Q + P
    Q = conditional_select(k_i, Q_temp, Q)  // no branch!
    P = 2P`}
        </pre>
        <p className="mt-3">
          The <code>conditional_select</code> function always performs the same operations
          regardless of the condition value, using bitwise operations instead of branches.
        </p>
      </Example>

      <h3>Fixed-Base Optimization</h3>

      <p>
        For the known generator point <InlineMath>{`G`}</InlineMath>, we can precompute
        a table of multiples:
      </p>

      <MathBlock>
        {`[G], [2]G, [3]G, \\ldots, [15]G`}
      </MathBlock>

      <p>
        Using a windowed method that processes 4 bits at a time provides significant speedup
        while maintaining security.
      </p>

      <Definition title="Multi-Scalar Multiplication">
        <p>
          Computing <InlineMath>{`[a]P + [b]Q`}</InlineMath> together is more efficient than
          computing each separately:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-4">
          <li><strong>Shamir's trick:</strong> approximately 25% faster</li>
          <li><strong>Straus algorithm:</strong> approximately 40% faster for many points</li>
        </ul>
      </Definition>

      <h3>Variable-Time Operations</h3>

      <p>
        For <em>public</em> values only, we can use faster variable-time algorithms.
        In verification, both <InlineMath>{`z`}</InlineMath> and <InlineMath>{`c`}</InlineMath> are
        public, so computing <InlineMath>{`[z]G`}</InlineMath> and{' '}
        <InlineMath>{`[c]Y`}</InlineMath> can use optimized non-constant-time code.
      </p>

      <Callout type="info">
        <strong>Implementation Principle:</strong> Use constant-time operations for any computation
        involving secret values. Variable-time optimizations are only safe for public inputs.
      </Callout>
    </LessonLayout>
  );
}
