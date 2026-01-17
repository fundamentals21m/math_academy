import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';
import { ContractionMappingVisualizer } from '@/components/visualizations';

export default function Section35() {
  return (
    <LessonLayout sectionId={35}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">The Contraction Mapping Theorem</h2>

      <p className="mb-4">
        Before proving the inverse function theorem, we need a fundamental result from the
        theory of complete metric spaces: the contraction mapping theorem.
      </p>

      <Definition title="Contraction">
        <p>
          Let <InlineMath>{`(X, d)`}</InlineMath> be a metric space and{' '}
          <InlineMath>{`f : X \\to X`}</InlineMath> be a map.
        </p>
        <ul className="list-disc list-inside mt-2 space-y-2">
          <li>
            <InlineMath>f</InlineMath> is a <strong>contraction</strong> if{' '}
            <InlineMath>{`d(f(x), f(y)) \\leq d(x, y)`}</InlineMath> for all{' '}
            <InlineMath>{`x, y \\in X`}</InlineMath>.
          </li>
          <li>
            <InlineMath>f</InlineMath> is a <strong>strict contraction</strong> if there exists{' '}
            <InlineMath>{`0 < c < 1`}</InlineMath> such that{' '}
            <InlineMath>{`d(f(x), f(y)) \\leq c \\cdot d(x, y)`}</InlineMath> for all{' '}
            <InlineMath>{`x, y \\in X`}</InlineMath>. We call <InlineMath>c</InlineMath> the{' '}
            <strong>contraction constant</strong>.
          </li>
        </ul>
      </Definition>

      <Example title="Examples of Contractions">
        <ul className="list-disc list-inside space-y-2">
          <li>
            <InlineMath>{`f(x) = x + 1`}</InlineMath> on <InlineMath>{`\\mathbf{R}`}</InlineMath> is
            a contraction but not a strict contraction.
          </li>
          <li>
            <InlineMath>{`f(x) = x/2`}</InlineMath> on <InlineMath>{`\\mathbf{R}`}</InlineMath> is
            a strict contraction with <InlineMath>{`c = 1/2`}</InlineMath>.
          </li>
          <li>
            <InlineMath>{`f(x) = x - x^2`}</InlineMath> on <InlineMath>{`[0, 1]`}</InlineMath> is
            a contraction but not a strict contraction.
          </li>
        </ul>
      </Example>

      <Definition title="Fixed Point">
        <p>
          Let <InlineMath>{`f : X \\to X`}</InlineMath> be a map. We say{' '}
          <InlineMath>{`x \\in X`}</InlineMath> is a <strong>fixed point</strong> of{' '}
          <InlineMath>f</InlineMath> if <InlineMath>{`f(x) = x`}</InlineMath>.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Interactive: Fixed Point Iteration</h3>

      <ContractionMappingVisualizer />

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">
        The Contraction Mapping Theorem
      </h3>

      <Definition title="Contraction Mapping Theorem">
        <p>
          Let <InlineMath>{`(X, d)`}</InlineMath> be a metric space, and let{' '}
          <InlineMath>{`f : X \\to X`}</InlineMath> be a strict contraction.
        </p>
        <ul className="list-disc list-inside mt-2 space-y-2">
          <li>
            <InlineMath>f</InlineMath> can have <strong>at most one</strong> fixed point.
          </li>
          <li>
            If <InlineMath>X</InlineMath> is non-empty and <strong>complete</strong>, then{' '}
            <InlineMath>f</InlineMath> has <strong>exactly one</strong> fixed point.
          </li>
        </ul>
      </Definition>

      <Callout type="info" title="Proof Idea">
        <p>
          <strong>Uniqueness:</strong> If <InlineMath>{`x, y`}</InlineMath> are both fixed points,
          then <InlineMath>{`d(x, y) = d(f(x), f(y)) \\leq c \\cdot d(x, y)`}</InlineMath>. Since{' '}
          <InlineMath>{`c < 1`}</InlineMath>, this forces <InlineMath>{`d(x, y) = 0`}</InlineMath>.
        </p>
        <p className="mt-2">
          <strong>Existence:</strong> Pick any <InlineMath>{`x_0 \\in X`}</InlineMath> and define{' '}
          <InlineMath>{`x_{n+1} = f(x_n)`}</InlineMath>. Show{' '}
          <InlineMath>{`d(x_{n+1}, x_n) \\leq c^n d(x_1, x_0)`}</InlineMath>, so{' '}
          <InlineMath>{`(x_n)`}</InlineMath> is Cauchy. Its limit is the fixed point.
        </p>
      </Callout>

      <Callout type="success" title="Other Fixed Point Theorems">
        <p>
          The contraction mapping theorem is one example of a <strong>fixed point theorem</strong>.
          Another famous example is the <strong>Brouwer fixed point theorem</strong>, which states
          that any continuous map from a closed ball to itself has a fixed point.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">
        Application: Perturbations of the Identity
      </h3>

      <Definition title="Perturbation Lemma">
        <p>
          Let <InlineMath>{`B(0, r)`}</InlineMath> be a ball in{' '}
          <InlineMath>{`\\mathbf{R}^n`}</InlineMath>, and let{' '}
          <InlineMath>{`g : B(0, r) \\to \\mathbf{R}^n`}</InlineMath> satisfy{' '}
          <InlineMath>{`g(0) = 0`}</InlineMath> and:
        </p>
        <MathBlock>{`\\|g(x) - g(y)\\| \\leq \\frac{1}{2}\\|x - y\\|`}</MathBlock>
        <p className="mt-2">
          Then <InlineMath>{`f(x) := x + g(x)`}</InlineMath> is <strong>one-to-one</strong>, and
          its image contains <InlineMath>{`B(0, r/2)`}</InlineMath>.
        </p>
      </Definition>

      <Callout type="info" title="Why This Matters">
        <p>
          This lemma shows that any map which is a "small" perturbation of the identity remains
          one-to-one and cannot create internal holes in the ball. This is crucial for proving the
          inverse function theorem.
        </p>
      </Callout>

      <Example title="Finding a Preimage">
        <p>
          To show <InlineMath>{`f(B(0, r)) \\supseteq B(0, r/2)`}</InlineMath>, given{' '}
          <InlineMath>{`y \\in B(0, r/2)`}</InlineMath>, we need to find{' '}
          <InlineMath>x</InlineMath> with <InlineMath>{`f(x) = y`}</InlineMath>, i.e.,{' '}
          <InlineMath>{`x = y - g(x)`}</InlineMath>.
        </p>
        <p className="mt-2">
          Define <InlineMath>{`F(x) := y - g(x)`}</InlineMath>. One shows{' '}
          <InlineMath>F</InlineMath> maps <InlineMath>{`B(0, r)`}</InlineMath> to itself and is a
          strict contraction. By the contraction mapping theorem, <InlineMath>F</InlineMath> has a
          fixed point, which is exactly the <InlineMath>x</InlineMath> we need.
        </p>
      </Example>
    </LessonLayout>
  );
}
