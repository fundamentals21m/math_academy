import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section28() {
  return (
    <LessonLayout sectionId={28}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Periodic Convolutions</h2>

      <p className="mb-4">
        To prove the Weierstrass approximation theorem for trigonometric polynomials, we
        introduce the concept of <strong>periodic convolution</strong>.
      </p>

      <Definition title="Weierstrass Approximation (Trigonometric)">
        <p>
          Let <InlineMath>{`f \\in C(\\mathbf{R}/\\mathbf{Z}; \\mathbf{C})`}</InlineMath>, and let{' '}
          <InlineMath>{`\\varepsilon > 0`}</InlineMath>. Then there exists a trigonometric
          polynomial <InlineMath>P</InlineMath> such that:
        </p>
        <MathBlock>{`\\|f - P\\|_{\\infty} \\leq \\varepsilon`}</MathBlock>
        <p className="mt-2">
          This theorem asserts that any continuous periodic function can be uniformly
          approximated by trigonometric polynomials.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Periodic Convolution</h3>

      <Definition title="Periodic Convolution">
        <p>
          Let <InlineMath>{`f, g \\in C(\\mathbf{R}/\\mathbf{Z}; \\mathbf{C})`}</InlineMath>. We
          define the <strong>periodic convolution</strong>{' '}
          <InlineMath>{`f * g : \\mathbf{R} \\to \\mathbf{C}`}</InlineMath> by:
        </p>
        <MathBlock>{`f * g(x) := \\int_{[0,1]} f(y)g(x - y) \\, dy`}</MathBlock>
      </Definition>

      <Definition title="Properties of Periodic Convolution">
        <p>
          Let <InlineMath>{`f, g, h \\in C(\\mathbf{R}/\\mathbf{Z}; \\mathbf{C})`}</InlineMath>.
        </p>
        <ul className="list-disc list-inside mt-2 space-y-2">
          <li>
            <strong>Closure:</strong> The convolution <InlineMath>{`f * g`}</InlineMath> is
            continuous and <InlineMath>{`\\mathbf{Z}`}</InlineMath>-periodic. In other words,{' '}
            <InlineMath>{`f * g \\in C(\\mathbf{R}/\\mathbf{Z}; \\mathbf{C})`}</InlineMath>.
          </li>
          <li>
            <strong>Commutativity:</strong> <InlineMath>{`f * g = g * f`}</InlineMath>
          </li>
          <li>
            <strong>Bilinearity:</strong> <InlineMath>{`f * (g + h) = f * g + f * h`}</InlineMath>{' '}
            and <InlineMath>{`c(f * g) = (cf) * g = f * (cg)`}</InlineMath>
          </li>
        </ul>
      </Definition>

      <Callout type="success" title="Key Identity">
        <p>
          For any <InlineMath>{`f \\in C(\\mathbf{R}/\\mathbf{Z}; \\mathbf{C})`}</InlineMath> and
          any integer <InlineMath>n</InlineMath>:
        </p>
        <MathBlock>{`f * e_n = \\hat{f}(n) e_n`}</MathBlock>
        <p className="mt-2">
          Thus the periodic convolution of any function with a trigonometric polynomial is
          again a trigonometric polynomial.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">
        Approximation to the Identity
      </h3>

      <Definition title="Periodic Approximation to Identity">
        <p>
          Let <InlineMath>{`\\varepsilon > 0`}</InlineMath> and{' '}
          <InlineMath>{`0 < \\delta < 1/2`}</InlineMath>. A function{' '}
          <InlineMath>{`f \\in C(\\mathbf{R}/\\mathbf{Z}; \\mathbf{C})`}</InlineMath> is said to
          be a <strong>periodic (ε, δ) approximation to the identity</strong> if:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            <InlineMath>{`f(x) \\geq 0`}</InlineMath> for all{' '}
            <InlineMath>{`x \\in \\mathbf{R}`}</InlineMath>, and{' '}
            <InlineMath>{`\\int_{[0,1]} f = 1`}</InlineMath>
          </li>
          <li>
            <InlineMath>{`f(x) < \\varepsilon`}</InlineMath> for all{' '}
            <InlineMath>{`\\delta \\leq |x| \\leq 1 - \\delta`}</InlineMath>
          </li>
        </ul>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">The Fejér Kernel</h3>

      <Definition title="Fejér Kernel">
        <p>
          Let <InlineMath>{`N \\geq 1`}</InlineMath> be an integer. The <strong>Fejér kernel</strong>{' '}
          <InlineMath>{`F_N`}</InlineMath> is defined as:
        </p>
        <MathBlock>{`F_N = \\sum_{n=-N}^{N} \\left(1 - \\frac{|n|}{N}\\right) e_n`}</MathBlock>
        <p className="mt-2">
          This can also be written as:
        </p>
        <MathBlock>{`F_N = \\frac{1}{N} \\left| \\sum_{n=0}^{N-1} e_n \\right|^2 = \\frac{\\sin(\\pi Nx)^2}{N \\sin(\\pi x)^2}`}</MathBlock>
        <p className="mt-2">
          (when <InlineMath>x</InlineMath> is not an integer; when <InlineMath>x</InlineMath> is
          an integer, <InlineMath>{`F_N(x) = N`}</InlineMath>).
        </p>
      </Definition>

      <Definition title="Properties of Fejér Kernel">
        <p>The Fejér kernel satisfies:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            <InlineMath>{`F_N(x) \\geq 0`}</InlineMath> for all <InlineMath>x</InlineMath>
          </li>
          <li>
            <InlineMath>{`\\int_{[0,1]} F_N(x) \\, dx = 1`}</InlineMath>
          </li>
          <li>
            <InlineMath>{`F_N(x) \\leq \\frac{1}{N \\sin(\\pi\\delta)^2}`}</InlineMath> whenever{' '}
            <InlineMath>{`\\delta < |x| < 1 - \\delta`}</InlineMath>
          </li>
        </ul>
        <p className="mt-2">
          By choosing <InlineMath>N</InlineMath> large enough, we can make{' '}
          <InlineMath>{`F_N`}</InlineMath> an <InlineMath>{`(\\varepsilon, \\delta)`}</InlineMath>{' '}
          approximation to the identity.
        </p>
      </Definition>

      <Example title="Proof Sketch of Weierstrass Approximation">
        <p>
          Let <InlineMath>{`f \\in C(\\mathbf{R}/\\mathbf{Z}; \\mathbf{C})`}</InlineMath> be
          bounded with <InlineMath>{`|f(x)| \\leq M`}</InlineMath>.
        </p>
        <p className="mt-2">
          By uniform continuity, there exists <InlineMath>{`\\delta > 0`}</InlineMath> such that{' '}
          <InlineMath>{`|f(x) - f(y)| \\leq \\varepsilon`}</InlineMath> whenever{' '}
          <InlineMath>{`|x - y| \\leq \\delta`}</InlineMath>.
        </p>
        <p className="mt-2">
          Taking <InlineMath>P</InlineMath> to be an{' '}
          <InlineMath>{`(\\varepsilon, \\delta)`}</InlineMath> approximation to the identity,
          the convolution <InlineMath>{`f * P`}</InlineMath> is a trigonometric polynomial with:
        </p>
        <MathBlock>{`\\|f - f * P\\|_{\\infty} \\leq (2M + 2)\\varepsilon`}</MathBlock>
      </Example>

      <Callout type="info" title="Stone-Weierstrass Theorem">
        <p>
          Both the polynomial Weierstrass approximation theorem and the trigonometric version
          are special cases of a much more general result known as the{' '}
          <strong>Stone-Weierstrass theorem</strong>.
        </p>
      </Callout>
    </LessonLayout>
  );
}
