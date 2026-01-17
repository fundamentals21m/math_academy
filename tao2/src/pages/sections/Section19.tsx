import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section19() {
  return (
    <LessonLayout sectionId={19}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Real Analytic Functions</h2>

      <p className="mb-4">
        A function that is representable as a power series has a special name: it is a{' '}
        <strong>real analytic function</strong>.
      </p>

      <Definition title="Real Analytic Functions">
        <p>
          Let <InlineMath>E</InlineMath> be a subset of <InlineMath>{`\\mathbf{R}`}</InlineMath>,
          and let <InlineMath>{`f : E \\to \\mathbf{R}`}</InlineMath> be a function. If{' '}
          <InlineMath>a</InlineMath> is an interior point of <InlineMath>E</InlineMath>, we say
          that <InlineMath>f</InlineMath> is <strong>real analytic at</strong>{' '}
          <InlineMath>a</InlineMath> if there exists an open interval{' '}
          <InlineMath>{`(a - r, a + r)`}</InlineMath> in <InlineMath>E</InlineMath> for some{' '}
          <InlineMath>{`r > 0`}</InlineMath> such that there exists a power series{' '}
          <InlineMath>{`\\sum_{n=0}^{\\infty} c_n(x - a)^n`}</InlineMath> centered at{' '}
          <InlineMath>a</InlineMath> which converges to <InlineMath>f</InlineMath> on{' '}
          <InlineMath>{`(a - r, a + r)`}</InlineMath>.
        </p>
        <p className="mt-2">
          If <InlineMath>E</InlineMath> is an open set and <InlineMath>f</InlineMath> is real
          analytic at every point of <InlineMath>E</InlineMath>, we say that{' '}
          <InlineMath>f</InlineMath> is <strong>real analytic on</strong>{' '}
          <InlineMath>E</InlineMath>.
        </p>
      </Definition>

      <Example title="The Function 1/(1-x)">
        <p>
          Consider <InlineMath>{`f : \\mathbf{R} \\setminus \\{1\\} \\to \\mathbf{R}`}</InlineMath>{' '}
          defined by <InlineMath>{`f(x) := 1/(1 - x)`}</InlineMath>.
        </p>
        <p className="mt-2">
          This function is real analytic at 0 because{' '}
          <InlineMath>{`\\sum_{n=0}^{\\infty} x^n`}</InlineMath> converges to{' '}
          <InlineMath>{`1/(1 - x)`}</InlineMath> on <InlineMath>{`(-1, 1)`}</InlineMath>.
        </p>
        <p className="mt-2">
          It is also real analytic at 2 because{' '}
          <InlineMath>{`\\sum_{n=0}^{\\infty} (-1)^{n+1}(x - 2)^n`}</InlineMath> converges to{' '}
          <InlineMath>{`f(x)`}</InlineMath> on <InlineMath>{`(1, 3)`}</InlineMath>.
        </p>
        <p className="mt-2">
          In fact, this function is real analytic on all of{' '}
          <InlineMath>{`\\mathbf{R} \\setminus \\{1\\}`}</InlineMath>.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">
        Real Analytic Functions are Infinitely Differentiable
      </h3>

      <Definition title="k-times Differentiability">
        <p>
          Let <InlineMath>E</InlineMath> be a subset of{' '}
          <InlineMath>{`\\mathbf{R}`}</InlineMath>. A function{' '}
          <InlineMath>{`f : E \\to \\mathbf{R}`}</InlineMath> is <strong>k times differentiable</strong>{' '}
          iff <InlineMath>f</InlineMath> is differentiable and <InlineMath>{`f'`}</InlineMath> is{' '}
          <InlineMath>{`k - 1`}</InlineMath> times differentiable.
        </p>
        <p className="mt-2">
          A function is <strong>infinitely differentiable</strong> (or <strong>smooth</strong>) iff
          it is <InlineMath>k</InlineMath> times differentiable for every{' '}
          <InlineMath>{`k \\geq 0`}</InlineMath>.
        </p>
      </Definition>

      <Definition title="Derivatives of Real Analytic Functions">
        <p>
          Let <InlineMath>f</InlineMath> be real analytic at <InlineMath>a</InlineMath> with power
          series expansion <InlineMath>{`f(x) = \\sum_{n=0}^{\\infty} c_n(x - a)^n`}</InlineMath>{' '}
          for <InlineMath>{`x \\in (a - r, a + r)`}</InlineMath>.
        </p>
        <p className="mt-2">
          Then for every <InlineMath>{`k \\geq 0`}</InlineMath>, the function{' '}
          <InlineMath>f</InlineMath> is <InlineMath>k</InlineMath>-times differentiable on{' '}
          <InlineMath>{`(a - r, a + r)`}</InlineMath>, and the <InlineMath>k</InlineMath>th
          derivative is:
        </p>
        <MathBlock>{`f^{(k)}(x) = \\sum_{n=0}^{\\infty} c_{n+k} \\frac{(n+k)!}{n!} (x - a)^n`}</MathBlock>
      </Definition>

      <Callout type="success" title="Key Result">
        <p>
          If <InlineMath>f</InlineMath> is real analytic on an open set <InlineMath>E</InlineMath>,
          then <InlineMath>f</InlineMath> is infinitely differentiable on <InlineMath>E</InlineMath>,
          and all derivatives of <InlineMath>f</InlineMath> are also real analytic on{' '}
          <InlineMath>E</InlineMath>.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Taylor's Formula</h3>

      <Definition title="Taylor's Formula">
        <p>
          Let <InlineMath>f</InlineMath> be real analytic at <InlineMath>a</InlineMath> with power
          series expansion <InlineMath>{`f(x) = \\sum_{n=0}^{\\infty} c_n(x - a)^n`}</InlineMath>.
        </p>
        <p className="mt-2">
          Then for any integer <InlineMath>{`k \\geq 0`}</InlineMath>:
        </p>
        <MathBlock>{`f^{(k)}(a) = k! \\cdot c_k`}</MathBlock>
        <p className="mt-2">
          In particular, we have <strong>Taylor's formula</strong>:
        </p>
        <MathBlock>{`f(x) = \\sum_{n=0}^{\\infty} \\frac{f^{(n)}(a)}{n!}(x - a)^n`}</MathBlock>
      </Definition>

      <Callout type="info" title="Taylor Series">
        <p>
          The power series <InlineMath>{`\\sum_{n=0}^{\\infty} \\frac{f^{(n)}(a)}{n!}(x - a)^n`}</InlineMath>{' '}
          is called the <strong>Taylor series</strong> of <InlineMath>f</InlineMath> around{' '}
          <InlineMath>a</InlineMath>. Taylor's formula asserts that if a function is real analytic,
          then it equals its Taylor series.
        </p>
      </Callout>

      <Definition title="Uniqueness of Power Series">
        <p>
          Let <InlineMath>f</InlineMath> be real analytic at <InlineMath>a</InlineMath>. If{' '}
          <InlineMath>f</InlineMath> has two power series expansions:
        </p>
        <MathBlock>{`f(x) = \\sum_{n=0}^{\\infty} c_n(x - a)^n = \\sum_{n=0}^{\\infty} d_n(x - a)^n`}</MathBlock>
        <p className="mt-2">
          both centered at <InlineMath>a</InlineMath> with non-zero radii of convergence, then{' '}
          <InlineMath>{`c_n = d_n`}</InlineMath> for all <InlineMath>{`n \\geq 0`}</InlineMath>.
        </p>
      </Definition>

      <Callout type="warning" title="Smooth but Not Real Analytic">
        <p>
          The converse of the key result is <strong>not</strong> true: there are infinitely
          differentiable functions which are not real analytic. For example, the function{' '}
          <InlineMath>{`f(x) := e^{-1/x}`}</InlineMath> for <InlineMath>{`x > 0`}</InlineMath> and{' '}
          <InlineMath>{`f(x) := 0`}</InlineMath> for <InlineMath>{`x \\leq 0`}</InlineMath> is
          infinitely differentiable at 0 with all derivatives equal to 0, but is not real analytic
          at 0.
        </p>
      </Callout>
    </LessonLayout>
  );
}
