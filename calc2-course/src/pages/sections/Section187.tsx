import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section187() {
  return (
    <LessonLayout sectionId={187}>
      <h2>The Chebyshev Polynomials</h2>

      <p>
        The <strong>Chebyshev polynomials</strong> solve the problem of optimal
        interpolation point placement. They minimize the maximum error in
        polynomial interpolation over an interval.
      </p>

      <h3>Definition</h3>

      <Callout type="info">
        <strong>Definition:</strong> The <strong>Chebyshev polynomial</strong>{' '}
        of degree <InlineMath>n</InlineMath> is defined on{' '}
        <InlineMath>{'[-1, 1]'}</InlineMath> by:
        <MathBlock>
          {`T_n(x) = \\cos(n \\arccos x)`}
        </MathBlock>
        Equivalently, if <InlineMath>{'x = \\cos\\theta'}</InlineMath>, then{' '}
        <InlineMath>{'T_n(x) = \\cos(n\\theta)'}</InlineMath>.
      </Callout>

      <h3>Why This Is a Polynomial</h3>

      <p>
        The trigonometric identity{' '}
        <InlineMath>{'\\cos(n\\theta)'}</InlineMath> can be expressed as a
        polynomial in <InlineMath>{'\\cos\\theta'}</InlineMath>. The first few are:
      </p>
      <MathBlock>
        {`T_0(x) = 1, \\quad T_1(x) = x, \\quad T_2(x) = 2x^2 - 1`}
      </MathBlock>
      <MathBlock>
        {`T_3(x) = 4x^3 - 3x, \\quad T_4(x) = 8x^4 - 8x^2 + 1`}
      </MathBlock>

      <h3>Recurrence Relation</h3>

      <Callout type="info">
        <strong>Theorem:</strong> The Chebyshev polynomials satisfy:
        <MathBlock>
          {`T_{n+1}(x) = 2x T_n(x) - T_{n-1}(x)`}
        </MathBlock>
        with <InlineMath>{'T_0(x) = 1'}</InlineMath> and{' '}
        <InlineMath>{'T_1(x) = x'}</InlineMath>.
      </Callout>

      <h3>Proof</h3>
      <p>
        Using the cosine addition formula with{' '}
        <InlineMath>{'x = \\cos\\theta'}</InlineMath>:
      </p>
      <MathBlock>
        {`\\cos((n+1)\\theta) + \\cos((n-1)\\theta) = 2\\cos\\theta\\cos(n\\theta)`}
      </MathBlock>
      <p>which gives the recurrence.</p>

      <h3>Zeros of Chebyshev Polynomials</h3>

      <Callout type="info">
        <strong>Theorem:</strong> The zeros of <InlineMath>{'T_n(x)'}</InlineMath>{' '}
        on <InlineMath>{'[-1, 1]'}</InlineMath> are:
        <MathBlock>
          {`x_k = \\cos\\left(\\frac{(2k+1)\\pi}{2n}\\right), \\quad k = 0, 1, \\ldots, n-1`}
        </MathBlock>
      </Callout>

      <p>
        These are called the <strong>Chebyshev nodes</strong>. They are clustered
        near the endpoints of the interval, which counteracts the tendency of
        polynomial interpolation to oscillate wildly near endpoints.
      </p>

      <h3>The Minimal Property</h3>

      <Callout type="info">
        <strong>Theorem (Chebyshev Minimax):</strong> Among all monic polynomials
        of degree <InlineMath>n</InlineMath>, the polynomial{' '}
        <InlineMath>{'2^{1-n}T_n(x)'}</InlineMath> has the smallest maximum
        absolute value on <InlineMath>{'[-1, 1]'}</InlineMath>:
        <MathBlock>
          {`\\max_{x \\in [-1,1]} |2^{1-n}T_n(x)| = 2^{1-n}`}
        </MathBlock>
      </Callout>

      <h3>Application to Interpolation</h3>

      <p>
        Recall the interpolation error formula:
      </p>
      <MathBlock>
        {`|f(x) - p(x)| \\leq \\frac{M}{(n+1)!} |\\omega(x)|`}
      </MathBlock>
      <p>
        where <InlineMath>{'\\omega(x) = (x - x_0)\\cdots(x - x_n)'}</InlineMath>.
      </p>

      <p>
        Choosing the interpolation points to be the Chebyshev nodes makes{' '}
        <InlineMath>{'\\omega(x)'}</InlineMath> a multiple of{' '}
        <InlineMath>{'T_{n+1}(x)'}</InlineMath>, minimizing{' '}
        <InlineMath>{'\\max |\\omega(x)|'}</InlineMath>.
      </p>

      <Callout type="info">
        <strong>Theorem:</strong> For interpolation on{' '}
        <InlineMath>{'[-1, 1]'}</InlineMath>, using Chebyshev nodes gives:
        <MathBlock>
          {`\\max_{x \\in [-1,1]} |\\omega(x)| = 2^{-n}`}
        </MathBlock>
        compared to the equally spaced case where{' '}
        <InlineMath>{'\\max |\\omega(x)|'}</InlineMath> can be much larger.
      </Callout>

      <h3>Scaling to [a, b]</h3>

      <p>
        For a general interval <InlineMath>{'[a, b]'}</InlineMath>, use the
        transformation:
      </p>
      <MathBlock>
        {`t = \\frac{2x - (a + b)}{b - a}`}
      </MathBlock>
      <p>
        The Chebyshev nodes on <InlineMath>{'[a, b]'}</InlineMath> are:
      </p>
      <MathBlock>
        {`x_k = \\frac{a + b}{2} + \\frac{b - a}{2}\\cos\\left(\\frac{(2k+1)\\pi}{2n}\\right)`}
      </MathBlock>

      <Callout type="success">
        <strong>Key Insight:</strong> Chebyshev polynomials arise from the
        surprising connection between polynomials and trigonometry. Their
        zeros cluster near the endpoints of the interval, which is exactly
        what's needed to minimize interpolation error. This is one of the
        most beautiful results in approximation theory: the optimal
        interpolation points come from a simple trigonometric formula.
      </Callout>
    </LessonLayout>
  );
}
