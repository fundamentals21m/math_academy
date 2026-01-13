import { LessonLayout } from '@/components/layout';
import { Definition } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { FunctionGrowthComparison } from '@/components/visualizations';

export default function Section00() {
  return (
    <LessonLayout sectionId={0}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Notation</h2>

      <p className="mb-4">
        This section establishes the notation used throughout the course. Understanding these
        conventions is essential for following the cryptographic proofs and protocols.
      </p>

      <Definition title="Polynomially-Bounded Functions">
        <p>
          We denote the set of <strong>polynomially-bounded functions</strong> in the security
          parameter <InlineMath>\lambda</InlineMath> by:
        </p>
        <MathBlock>
          {`\\text{poly}(\\lambda) = \\{f : \\exists a \\in \\mathbb{N}, f(\\lambda) \\in O(\\lambda^a)\\}`}
        </MathBlock>
      </Definition>

      <Definition title="Negligible Functions">
        <p>
          The set of <strong>negligible functions</strong> in the security parameter <InlineMath>\lambda</InlineMath> is:
        </p>
        <MathBlock>
          {`\\text{negl}(\\lambda) = \\{f : f(\\lambda)^{-1} \\notin \\text{poly}(\\lambda)\\}`}
        </MathBlock>
        <p className="mt-2">
          Intuitively, a negligible function decreases faster than the inverse of any polynomial.
          These functions represent probabilities so small that they can be safely ignored in
          security analyses.
        </p>
      </Definition>

      <FunctionGrowthComparison className="my-8" />

      <Definition title="Probabilistic Polynomial-Time (PPT)">
        <p>
          A probabilistic interactive Turing machine is <strong>probabilistic polynomial-time (PPT)</strong> if
          its runtime is in <InlineMath>\text{'{poly}'}(\lambda)</InlineMath>.
        </p>
        <p className="mt-2">
          PPT algorithms are the computational model for "efficient" adversaries in cryptography.
          Any adversary we consider must run in polynomial time.
        </p>
      </Definition>

      <Definition title="Cyclic Group Notation">
        <p>
          <InlineMath>\mathbb{'{G}'}</InlineMath> denotes a cyclic group of order <InlineMath>p</InlineMath>,
          where <InlineMath>p</InlineMath> is a <InlineMath>\lambda</InlineMath>-bit prime.
        </p>
        <p className="mt-2">
          We use <strong>additive notation</strong> for the group operation of <InlineMath>\mathbb{'{G}'}</InlineMath>.
          This means:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            Group operation: <InlineMath>P + Q</InlineMath> (instead of <InlineMath>P \cdot Q</InlineMath>)
          </li>
          <li>
            Scalar multiplication: <InlineMath>n \cdot G</InlineMath> (instead of <InlineMath>G^n</InlineMath>)
          </li>
          <li>
            Identity element: <InlineMath>0</InlineMath> (instead of <InlineMath>1</InlineMath>)
          </li>
        </ul>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Why Additive Notation?</h3>

      <p className="mb-4">
        Additive notation is standard in elliptic curve cryptography. When working with elliptic
        curves, point addition is the natural group operation, so additive notation aligns with
        the geometric intuition.
      </p>

      <p className="mb-4">
        For example, if <InlineMath>G</InlineMath> is a generator of <InlineMath>\mathbb{'{G}'}</InlineMath> and{' '}
        <InlineMath>x \in \mathbb{'{Z}'}_p</InlineMath>, then:
      </p>

      <MathBlock>
        {`X = x \\cdot G`}
      </MathBlock>

      <p className="mt-4">
        represents scalar multiplication: adding <InlineMath>G</InlineMath> to itself <InlineMath>x</InlineMath> times.
        The discrete logarithm problem asks: given <InlineMath>G</InlineMath> and <InlineMath>X</InlineMath>,
        find <InlineMath>x</InlineMath>.
      </p>
    </LessonLayout>
  );
}
