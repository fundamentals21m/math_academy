import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section46() {
  return (
    <LessonLayout sectionId={46}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">
        Comparison with the Riemann Integral
      </h2>

      <p className="mb-4">
        We now address the relationship between the Lebesgue and Riemann integrals. The
        Lebesgue integral is a strict generalization of the Riemann integral.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">
        Riemann Implies Lebesgue
      </h3>

      <Definition title="Main Comparison Theorem">
        <p>
          Let <InlineMath>{`I \\subseteq \\mathbf{R}`}</InlineMath> be an interval, and let{' '}
          <InlineMath>{`f : I \\to \\mathbf{R}`}</InlineMath> be Riemann integrable.
        </p>
        <p className="mt-2">
          Then <InlineMath>f</InlineMath> is also absolutely integrable, and:
        </p>
        <MathBlock>{`\\int_I f \\, dm = R.\\!\\int_I f`}</MathBlock>
        <p className="mt-2">
          (where <InlineMath>{`R.\\!\\int`}</InlineMath> denotes the Riemann integral)
        </p>
      </Definition>

      <Callout type="info" title="Proof Idea">
        <p>
          For any partition <InlineMath>{`\\mathbf{P}`}</InlineMath>, construct simple
          functions <InlineMath>{`f_\\varepsilon^-`}</InlineMath> and{' '}
          <InlineMath>{`f_\\varepsilon^+`}</InlineMath> that minorize and majorize{' '}
          <InlineMath>f</InlineMath>, with integrals arbitrarily close to the Riemann
          integral.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">
        Lebesgue Does Not Imply Riemann
      </h3>

      <Example title="Characteristic Function of Q">
        <p>
          Let <InlineMath>{`f : [0, 1] \\to \\mathbf{R}`}</InlineMath> be defined by{' '}
          <InlineMath>{`f(x) = 1`}</InlineMath> if <InlineMath>x</InlineMath> is rational,
          and <InlineMath>{`f(x) = 0`}</InlineMath> if <InlineMath>x</InlineMath> is
          irrational.
        </p>
        <p className="mt-2">
          <strong>Riemann:</strong> <InlineMath>f</InlineMath> is not Riemann integrable
          (upper and lower integrals differ).
        </p>
        <p className="mt-2">
          <strong>Lebesgue:</strong> <InlineMath>{`f = \\chi_{\\mathbf{Q} \\cap [0,1]}`}</InlineMath>{' '}
          is measurable. Since <InlineMath>{`\\mathbf{Q} \\cap [0,1]`}</InlineMath> is
          countable, it has measure zero, so:
        </p>
        <MathBlock>{`\\int_{[0,1]} f = 0`}</MathBlock>
      </Example>

      <Callout type="success" title="Key Advantage">
        <p>
          The Lebesgue integral can handle more functions than the Riemann integral. This is
          one primary reason for using the Lebesgue integral in analysis.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">
        Better Behavior Under Limits
      </h3>

      <Definition title="Limit Theorems Comparison">
        <p>
          <strong>Lebesgue integral:</strong> Has powerful theorems for interchanging limits
          and integrals:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Monotone convergence theorem</li>
          <li>Fatou's lemma</li>
          <li>Dominated convergence theorem</li>
        </ul>
        <p className="mt-4">
          <strong>Riemann integral:</strong> There are no comparable theorems. Uniform
          convergence is required to interchange limits and Riemann integrals.
        </p>
      </Definition>

      <Example title="Pointwise Limit Failure">
        <p>
          The pointwise limit of Riemann integrable functions need not be Riemann
          integrable. The Lebesgue integral handles such limits much better.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Summary</h3>

      <Callout type="success" title="Lebesgue vs Riemann">
        <ul className="list-disc list-inside space-y-2">
          <li>
            Every Riemann integrable function is Lebesgue integrable (with the same value)
          </li>
          <li>
            Many Lebesgue integrable functions are not Riemann integrable
          </li>
          <li>
            The Lebesgue integral has superior limit interchange theorems
          </li>
          <li>
            For computation, we can use the same techniques (antiderivatives, substitution,
            etc.)
          </li>
        </ul>
      </Callout>
    </LessonLayout>
  );
}
