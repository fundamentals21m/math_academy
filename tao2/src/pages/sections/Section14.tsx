import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section14() {
  return (
    <LessonLayout sectionId={14}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">
        Series of Functions; the Weierstrass M-test
      </h2>

      <p className="mb-4">
        Having discussed sequences of functions, we now discuss <strong>infinite series</strong>{' '}
        <InlineMath>{`\\sum_{n=1}^{\\infty} f_n`}</InlineMath> of functions. We restrict our
        attention to <strong>real-valued functions</strong>{' '}
        <InlineMath>{`f : X \\to \\mathbf{R}`}</InlineMath> from a metric space to the real line.
      </p>

      <Definition title="Finite Sums of Functions">
        <p>
          Given any finite collection <InlineMath>{`f^{(1)}, \\ldots, f^{(N)}`}</InlineMath> of
          functions from <InlineMath>X</InlineMath> to <InlineMath>{`\\mathbf{R}`}</InlineMath>,
          we can define the finite sum{' '}
          <InlineMath>{`\\sum_{i=1}^{N} f^{(i)} : X \\to \\mathbf{R}`}</InlineMath> by:
        </p>
        <MathBlock>{`\\left(\\sum_{i=1}^{N} f^{(i)}\\right)(x) := \\sum_{i=1}^{N} f^{(i)}(x)`}</MathBlock>
      </Definition>

      <Example title="Sum of Polynomial Terms">
        <p>
          If <InlineMath>{`f^{(1)}(x) := x`}</InlineMath>,{' '}
          <InlineMath>{`f^{(2)}(x) := x^2`}</InlineMath>, and{' '}
          <InlineMath>{`f^{(3)}(x) := x^3`}</InlineMath>, then{' '}
          <InlineMath>{`f := \\sum_{i=1}^{3} f^{(i)}`}</InlineMath> is the function{' '}
          <InlineMath>{`f(x) := x + x^2 + x^3`}</InlineMath>.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Infinite Series of Functions</h3>

      <Definition title="Convergence of Infinite Series">
        <p>
          Let <InlineMath>{`(X, d_X)`}</InlineMath> be a metric space. Let{' '}
          <InlineMath>{`(f^{(n)})_{n=1}^{\\infty}`}</InlineMath> be a sequence of functions from{' '}
          <InlineMath>X</InlineMath> to <InlineMath>{`\\mathbf{R}`}</InlineMath>, and let{' '}
          <InlineMath>f</InlineMath> be another function from <InlineMath>X</InlineMath> to{' '}
          <InlineMath>{`\\mathbf{R}`}</InlineMath>.
        </p>
        <ul className="list-disc list-inside mt-3 space-y-2">
          <li>
            If the partial sums <InlineMath>{`\\sum_{n=1}^{N} f^{(n)}`}</InlineMath> converge{' '}
            <strong>pointwise</strong> to <InlineMath>f</InlineMath> as{' '}
            <InlineMath>{`N \\to \\infty`}</InlineMath>, we say{' '}
            <InlineMath>{`\\sum_{n=1}^{\\infty} f^{(n)}`}</InlineMath> converges{' '}
            <strong>pointwise</strong> to <InlineMath>f</InlineMath>.
          </li>
          <li>
            If the partial sums converge <strong>uniformly</strong> to <InlineMath>f</InlineMath>,
            we say <InlineMath>{`\\sum_{n=1}^{\\infty} f^{(n)}`}</InlineMath> converges{' '}
            <strong>uniformly</strong> to <InlineMath>f</InlineMath>.
          </li>
        </ul>
        <p className="mt-2">
          In either case, we write <InlineMath>{`f = \\sum_{n=1}^{\\infty} f^{(n)}`}</InlineMath>.
        </p>
      </Definition>

      <Example title="Geometric Series">
        <p>
          Let <InlineMath>{`f^{(n)} : (-1, 1) \\to \\mathbf{R}`}</InlineMath> be the sequence{' '}
          <InlineMath>{`f^{(n)}(x) := x^n`}</InlineMath>. Then{' '}
          <InlineMath>{`\\sum_{n=1}^{\\infty} f^{(n)}`}</InlineMath> converges{' '}
          <strong>pointwise</strong>, but <strong>not uniformly</strong>, to the function{' '}
          <InlineMath>{`x/(1-x)`}</InlineMath> on <InlineMath>{`(-1, 1)`}</InlineMath>.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Sup Norm</h3>

      <Definition title="Sup Norm">
        <p>
          If <InlineMath>{`f : X \\to \\mathbf{R}`}</InlineMath> is a bounded real-valued function,
          we define the <strong>sup norm</strong> <InlineMath>{`\\|f\\|_{\\infty}`}</InlineMath>{' '}
          of <InlineMath>f</InlineMath> to be:
        </p>
        <MathBlock>{`\\|f\\|_{\\infty} := \\sup\\{|f(x)| : x \\in X\\}`}</MathBlock>
        <p className="mt-2">
          This is the same as <InlineMath>{`d_{\\infty}(f, 0)`}</InlineMath>, where{' '}
          <InlineMath>0</InlineMath> is the zero function.
        </p>
      </Definition>

      <Example title="Sup Norm Calculation">
        <p>
          If <InlineMath>{`f : (-2, 1) \\to \\mathbf{R}`}</InlineMath> is the function{' '}
          <InlineMath>{`f(x) := 2x`}</InlineMath>, then:
        </p>
        <MathBlock>{`\\|f\\|_{\\infty} = \\sup\\{|2x| : x \\in (-2, 1)\\} = 4`}</MathBlock>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Weierstrass M-test</h3>

      <Definition title="Weierstrass M-test">
        <p>
          Let <InlineMath>{`(X, d)`}</InlineMath> be a metric space, and let{' '}
          <InlineMath>{`(f^{(n)})_{n=1}^{\\infty}`}</InlineMath> be a sequence of bounded
          real-valued continuous functions on <InlineMath>X</InlineMath> such that the series:
        </p>
        <MathBlock>{`\\sum_{n=1}^{\\infty} \\|f^{(n)}\\|_{\\infty}`}</MathBlock>
        <p className="mt-2">
          is <strong>convergent</strong>. (Note that this is a series of plain real numbers, not
          functions.)
        </p>
        <p className="mt-2">
          Then the series <InlineMath>{`\\sum_{n=1}^{\\infty} f^{(n)}`}</InlineMath> converges{' '}
          <strong>uniformly</strong> to some function <InlineMath>f</InlineMath> on{' '}
          <InlineMath>X</InlineMath>, and that function <InlineMath>f</InlineMath> is also{' '}
          <strong>continuous</strong>.
        </p>
      </Definition>

      <Callout type="success" title="The M-test Summarized">
        <p>
          <strong>Absolute convergence of sup norms implies uniform convergence of functions.</strong>
        </p>
        <p className="mt-2">
          The "M" in M-test stands for "majorant" — the real numbers{' '}
          <InlineMath>{`M_n := \\|f^{(n)}\\|_{\\infty}`}</InlineMath> that bound the functions.
        </p>
      </Callout>

      <Example title="Applying the M-test">
        <p>
          Let <InlineMath>{`0 < r < 1`}</InlineMath> be a real number, and let{' '}
          <InlineMath>{`f^{(n)} : [-r, r] \\to \\mathbf{R}`}</InlineMath> be{' '}
          <InlineMath>{`f^{(n)}(x) := x^n`}</InlineMath>. Then each{' '}
          <InlineMath>{`f^{(n)}`}</InlineMath> is continuous and bounded, with{' '}
          <InlineMath>{`\\|f^{(n)}\\|_{\\infty} = r^n`}</InlineMath>.
        </p>
        <p className="mt-2">
          Since <InlineMath>{`\\sum_{n=1}^{\\infty} r^n`}</InlineMath> is absolutely convergent
          (by the ratio test), the series <InlineMath>{`\\sum_{n=1}^{\\infty} x^n`}</InlineMath>{' '}
          converges <strong>uniformly</strong> on <InlineMath>{`[-r, r]`}</InlineMath> to the
          function <InlineMath>{`x/(1-x)`}</InlineMath>.
        </p>
        <p className="mt-2">
          Note: The series is pointwise but not uniformly convergent on <InlineMath>{`(-1, 1)`}</InlineMath>,
          but is uniformly convergent on any smaller closed interval <InlineMath>{`[-r, r]`}</InlineMath>.
        </p>
      </Example>

      <Callout type="info" title="Power Series Connection">
        <p>
          The Weierstrass M-test is especially useful for power series, which we will study in
          the next chapter. It provides a powerful tool for establishing uniform convergence.
        </p>
      </Callout>
    </LessonLayout>
  );
}
