import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section17() {
  return (
    <LessonLayout sectionId={17}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">
        Uniform Approximation by Polynomials
      </h2>

      <p className="mb-4">
        We have seen that continuous functions can be very badly behaved — for instance, they can
        be nowhere differentiable (like the Weierstrass function). On the other hand, polynomials
        are always very well behaved, being infinitely differentiable.
      </p>

      <p className="mb-4">
        Fortunately, while most continuous functions are not as well behaved as polynomials, they
        can always be <strong>uniformly approximated</strong> by polynomials. This important result
        is known as the <strong>Weierstrass approximation theorem</strong>.
      </p>

      <Definition title="Polynomial">
        <p>
          Let <InlineMath>{`[a, b]`}</InlineMath> be an interval. A <strong>polynomial</strong> on{' '}
          <InlineMath>{`[a, b]`}</InlineMath> is a function{' '}
          <InlineMath>{`f : [a, b] \\to \\mathbf{R}`}</InlineMath> of the form:
        </p>
        <MathBlock>{`f(x) := \\sum_{j=0}^{n} c_j x^j = c_0 + c_1 x + c_2 x^2 + \\cdots + c_n x^n`}</MathBlock>
        <p className="mt-2">
          where <InlineMath>{`n \\geq 0`}</InlineMath> is an integer and{' '}
          <InlineMath>{`c_0, \\ldots, c_n`}</InlineMath> are real numbers. If{' '}
          <InlineMath>{`c_n \\neq 0`}</InlineMath>, then <InlineMath>n</InlineMath> is called the{' '}
          <strong>degree</strong> of <InlineMath>f</InlineMath>.
        </p>
      </Definition>

      <Example title="A Degree 4 Polynomial">
        <p>
          The function <InlineMath>{`f : [1, 2] \\to \\mathbf{R}`}</InlineMath> defined by{' '}
          <InlineMath>{`f(x) := 3x^4 + 2x^3 - 4x + 5`}</InlineMath> is a polynomial on{' '}
          <InlineMath>{`[1, 2]`}</InlineMath> of degree 4.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">
        The Weierstrass Approximation Theorem
      </h3>

      <Definition title="Weierstrass Approximation Theorem">
        <p>
          If <InlineMath>{`[a, b]`}</InlineMath> is an interval,{' '}
          <InlineMath>{`f : [a, b] \\to \\mathbf{R}`}</InlineMath> is a continuous function, and{' '}
          <InlineMath>{`\\varepsilon > 0`}</InlineMath>, then there exists a polynomial{' '}
          <InlineMath>P</InlineMath> on <InlineMath>{`[a, b]`}</InlineMath> such that{' '}
          <InlineMath>{`d_{\\infty}(P, f) \\leq \\varepsilon`}</InlineMath>.
        </p>
        <p className="mt-2">
          In other words, <InlineMath>{`|P(x) - f(x)| \\leq \\varepsilon`}</InlineMath> for all{' '}
          <InlineMath>{`x \\in [a, b]`}</InlineMath>.
        </p>
      </Definition>

      <Callout type="success" title="Density of Polynomials">
        <p>
          Let <InlineMath>{`C([a, b] \\to \\mathbf{R})`}</InlineMath> be the space of continuous
          functions from <InlineMath>{`[a, b]`}</InlineMath> to <InlineMath>{`\\mathbf{R}`}</InlineMath>{' '}
          with the uniform metric, and let <InlineMath>{`P([a, b] \\to \\mathbf{R})`}</InlineMath> be
          the space of all polynomials on <InlineMath>{`[a, b]`}</InlineMath>.
        </p>
        <p className="mt-2">
          The Weierstrass approximation theorem says that every continuous function is an adherent
          point of <InlineMath>{`P([a, b] \\to \\mathbf{R})`}</InlineMath>:
        </p>
        <MathBlock>{`\\overline{P([a, b] \\to \\mathbf{R})} = C([a, b] \\to \\mathbf{R})`}</MathBlock>
        <p className="mt-2">
          In other words, the space of polynomials is <strong>dense</strong> in the space of
          continuous functions.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">
        Compactly Supported Functions
      </h3>

      <Definition title="Compactly Supported Functions">
        <p>
          Let <InlineMath>{`[a, b]`}</InlineMath> be an interval. A function{' '}
          <InlineMath>{`f : \\mathbf{R} \\to \\mathbf{R}`}</InlineMath> is said to be{' '}
          <strong>supported on</strong> <InlineMath>{`[a, b]`}</InlineMath> iff{' '}
          <InlineMath>{`f(x) = 0`}</InlineMath> for all{' '}
          <InlineMath>{`x \\notin [a, b]`}</InlineMath>.
        </p>
        <p className="mt-2">
          We say that <InlineMath>f</InlineMath> is <strong>compactly supported</strong> iff it is
          supported on some interval <InlineMath>{`[a, b]`}</InlineMath>.
        </p>
        <p className="mt-2">
          If <InlineMath>f</InlineMath> is continuous and supported on{' '}
          <InlineMath>{`[a, b]`}</InlineMath>, we define the improper integral:
        </p>
        <MathBlock>{`\\int_{-\\infty}^{\\infty} f := \\int_{[a, b]} f`}</MathBlock>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">
        Approximation to the Identity
      </h3>

      <Definition title="Approximation to the Identity">
        <p>
          Let <InlineMath>{`\\varepsilon > 0`}</InlineMath> and{' '}
          <InlineMath>{`0 < \\delta < 1`}</InlineMath>. A function{' '}
          <InlineMath>{`f : \\mathbf{R} \\to \\mathbf{R}`}</InlineMath> is said to be an{' '}
          <InlineMath>{`(\\varepsilon, \\delta)`}</InlineMath>-<strong>approximation to the identity</strong>{' '}
          if it obeys the following three properties:
        </p>
        <ul className="list-disc list-inside mt-3 space-y-2">
          <li>
            <InlineMath>f</InlineMath> is supported on <InlineMath>{`[-1, 1]`}</InlineMath>, and{' '}
            <InlineMath>{`f(x) \\geq 0`}</InlineMath> for all{' '}
            <InlineMath>{`-1 \\leq x \\leq 1`}</InlineMath>.
          </li>
          <li>
            <InlineMath>f</InlineMath> is continuous, and{' '}
            <InlineMath>{`\\int_{-\\infty}^{\\infty} f = 1`}</InlineMath>.
          </li>
          <li>
            <InlineMath>{`|f(x)| \\leq \\varepsilon`}</InlineMath> for all{' '}
            <InlineMath>{`\\delta \\leq |x| \\leq 1`}</InlineMath>.
          </li>
        </ul>
      </Definition>

      <Callout type="info" title="Connection to Dirac Delta">
        <p>
          For those familiar with the Dirac delta function <InlineMath>{`\\delta`}</InlineMath>,
          approximations to the identity are ways to approximate this (very discontinuous) delta
          function by a continuous function (which is easier to analyze).
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Convolution</h3>

      <Definition title="Convolution">
        <p>
          Let <InlineMath>{`f : \\mathbf{R} \\to \\mathbf{R}`}</InlineMath> and{' '}
          <InlineMath>{`g : \\mathbf{R} \\to \\mathbf{R}`}</InlineMath> be continuous, compactly
          supported functions. We define the <strong>convolution</strong>{' '}
          <InlineMath>{`f * g : \\mathbf{R} \\to \\mathbf{R}`}</InlineMath> of{' '}
          <InlineMath>f</InlineMath> and <InlineMath>g</InlineMath> by:
        </p>
        <MathBlock>{`(f * g)(x) := \\int_{-\\infty}^{\\infty} f(y) g(x - y) \\, dy`}</MathBlock>
      </Definition>

      <Definition title="Properties of Convolution">
        <p>
          Let <InlineMath>{`f, g, h : \\mathbf{R} \\to \\mathbf{R}`}</InlineMath> be continuous,
          compactly supported functions. Then:
        </p>
        <ul className="list-disc list-inside mt-3 space-y-2">
          <li>
            The convolution <InlineMath>{`f * g`}</InlineMath> is also continuous and compactly supported.
          </li>
          <li>
            <strong>Commutativity:</strong> <InlineMath>{`f * g = g * f`}</InlineMath>.
          </li>
          <li>
            <strong>Linearity:</strong> <InlineMath>{`f * (g + h) = f * g + f * h`}</InlineMath>, and{' '}
            <InlineMath>{`f * (cg) = (cf) * g = c(f * g)`}</InlineMath> for any real <InlineMath>c</InlineMath>.
          </li>
        </ul>
      </Definition>

      <Callout type="note" title="Importance of Convolution">
        <p>
          Convolutions play an important role in Fourier analysis and in partial differential
          equations (PDE), and are also important in physics, engineering, and signal processing.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Key Lemmas</h3>

      <Definition title="Polynomials Can Approximate the Identity">
        <p>
          For every <InlineMath>{`\\varepsilon > 0`}</InlineMath> and{' '}
          <InlineMath>{`0 < \\delta < 1`}</InlineMath>, there exists an{' '}
          <InlineMath>{`(\\varepsilon, \\delta)`}</InlineMath>-approximation to the identity which
          is a polynomial <InlineMath>P</InlineMath> on <InlineMath>{`[-1, 1]`}</InlineMath>.
        </p>
      </Definition>

      <Definition title="Convolution with Polynomials">
        <p>
          Let <InlineMath>{`f : \\mathbf{R} \\to \\mathbf{R}`}</InlineMath> be a continuous function
          supported on <InlineMath>{`[0, 1]`}</InlineMath>, and let{' '}
          <InlineMath>{`g : \\mathbf{R} \\to \\mathbf{R}`}</InlineMath> be a continuous function
          supported on <InlineMath>{`[-1, 1]`}</InlineMath> which is a polynomial on{' '}
          <InlineMath>{`[-1, 1]`}</InlineMath>.
        </p>
        <p className="mt-2">
          Then <InlineMath>{`f * g`}</InlineMath> is a polynomial on <InlineMath>{`[0, 1]`}</InlineMath>.
        </p>
      </Definition>

      <Definition title="Approximation via Convolution">
        <p>
          Let <InlineMath>{`f : \\mathbf{R} \\to \\mathbf{R}`}</InlineMath> be a continuous function
          supported on <InlineMath>{`[0, 1]`}</InlineMath>, bounded by some{' '}
          <InlineMath>{`M > 0`}</InlineMath>. Let <InlineMath>{`\\varepsilon > 0`}</InlineMath> and{' '}
          <InlineMath>{`0 < \\delta < 1`}</InlineMath> be such that{' '}
          <InlineMath>{`|f(x) - f(y)| < \\varepsilon`}</InlineMath> whenever{' '}
          <InlineMath>{`|x - y| < \\delta`}</InlineMath>.
        </p>
        <p className="mt-2">
          Let <InlineMath>g</InlineMath> be any{' '}
          <InlineMath>{`(\\varepsilon, \\delta)`}</InlineMath>-approximation to the identity. Then:
        </p>
        <MathBlock>{`|f * g(x) - f(x)| \\leq (3M + 2\\delta)\\varepsilon`}</MathBlock>
        <p className="mt-2">
          for all <InlineMath>{`x \\in [0, 1]`}</InlineMath>.
        </p>
      </Definition>

      <Callout type="success" title="Proof Strategy">
        <p>
          The Weierstrass approximation theorem follows by combining these lemmas:
        </p>
        <ol className="list-decimal list-inside mt-2 space-y-1">
          <li>Any continuous function on <InlineMath>{`[a, b]`}</InlineMath> can be shifted to <InlineMath>{`[0, 1]`}</InlineMath>.</li>
          <li>Use uniform continuity to choose <InlineMath>{`\\delta`}</InlineMath>.</li>
          <li>Construct a polynomial approximation to the identity.</li>
          <li>Convolve with this polynomial to get a polynomial approximation.</li>
        </ol>
      </Callout>
    </LessonLayout>
  );
}
