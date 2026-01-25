import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section59() {
  return (
    <LessonLayout sectionId={59}>
      <h2>The Legendre Equation</h2>

      <p>
        The <strong>Legendre equation</strong> is one of the most important
        differential equations in mathematical physics, arising in problems
        involving spherical symmetry, gravitational attraction, and heat flow.
      </p>

      <h3>The Equation</h3>

      <Callout type="info">
        <strong>Legendre Equation:</strong> For any real constant{' '}
        <InlineMath>{`\\alpha`}</InlineMath>:
        <MathBlock>
          {`(1 - x^2)y'' - 2xy' + \\alpha(\\alpha + 1)y = 0`}
        </MathBlock>
      </Callout>

      <h3>Sturm-Liouville Form</h3>

      <p>
        The Legendre equation can be written as:
      </p>
      <MathBlock>
        {`[(x^2 - 1)y']' = \\alpha(\\alpha + 1)y`}
      </MathBlock>

      <p>
        This has the form <InlineMath>{`T(y) = \\lambda y`}</InlineMath>, where{' '}
        <InlineMath>T</InlineMath> is a Sturm-Liouville operator with{' '}
        <InlineMath>{`p(x) = x^2 - 1`}</InlineMath> and{' '}
        <InlineMath>{`\\lambda = \\alpha(\\alpha + 1)`}</InlineMath>.
      </p>

      <p>
        Since <InlineMath>{`p(1) = p(-1) = 0`}</InlineMath>, the operator{' '}
        <InlineMath>T</InlineMath> is symmetric with respect to the inner
        product:
      </p>
      <MathBlock>
        {`(f, g) = \\int_{-1}^1 f(x)g(x)\\, dx`}
      </MathBlock>

      <h3>Power Series Solutions</h3>

      <p>
        Dividing by <InlineMath>{`1 - x^2`}</InlineMath>, we get{' '}
        <InlineMath>{`y'' + P_1(x)y' + P_2(x)y = 0`}</InlineMath> where:
      </p>
      <MathBlock>
        {`P_1(x) = -\\frac{2x}{1-x^2}, \\quad P_2(x) = \\frac{\\alpha(\\alpha+1)}{1-x^2}`}
      </MathBlock>

      <p>
        Both coefficients have power series expansions for{' '}
        <InlineMath>{`|x| < 1`}</InlineMath>, so Theorem 6.13 applies.
      </p>

      <h3>The Recursion Formula</h3>

      <p>
        Seeking a solution <InlineMath>{`y = \\sum a_n x^n`}</InlineMath>, we find:
      </p>
      <MathBlock>
        {`a_{n+2} = -\\frac{(\\alpha - n)(\\alpha + n + 1)}{(n+1)(n+2)} a_n`}
      </MathBlock>

      <h3>Two Independent Solutions</h3>

      <p>
        <strong>Even solution</strong> (with <InlineMath>{`a_0 = 1, a_1 = 0`}</InlineMath>):
      </p>
      <MathBlock>
        {`u_1(x) = 1 + \\sum_{n=1}^\\infty (-1)^n \\frac{\\alpha(\\alpha-2)\\cdots(\\alpha-2n+2) \\cdot (\\alpha+1)(\\alpha+3)\\cdots(\\alpha+2n-1)}{(2n)!} x^{2n}`}
      </MathBlock>

      <p>
        <strong>Odd solution</strong> (with <InlineMath>{`a_0 = 0, a_1 = 1`}</InlineMath>):
      </p>
      <MathBlock>
        {`u_2(x) = x + \\sum_{n=1}^\\infty (-1)^n \\frac{(\\alpha-1)(\\alpha-3)\\cdots(\\alpha-2n+1) \\cdot (\\alpha+2)(\\alpha+4)\\cdots(\\alpha+2n)}{(2n+1)!} x^{2n+1}`}
      </MathBlock>

      <h3>Polynomial Solutions</h3>

      <p>
        When <InlineMath>{`\\alpha`}</InlineMath> is a nonnegative integer:
      </p>

      <ul>
        <li>
          If <InlineMath>{`\\alpha = 2m`}</InlineMath> (even), then{' '}
          <InlineMath>{`u_1(x)`}</InlineMath> becomes a polynomial of degree{' '}
          <InlineMath>{`2m`}</InlineMath>
        </li>
        <li>
          If <InlineMath>{`\\alpha = 2m + 1`}</InlineMath> (odd), then{' '}
          <InlineMath>{`u_2(x)`}</InlineMath> becomes a polynomial of degree{' '}
          <InlineMath>{`2m + 1`}</InlineMath>
        </li>
      </ul>

      <p>
        These polynomial solutions are the <strong>Legendre polynomials</strong>.
      </p>

      <h3>Examples</h3>

      <p>
        For small values of <InlineMath>{`\\alpha`}</InlineMath>:
      </p>
      <ul>
        <li><InlineMath>{`\\alpha = 0`}</InlineMath>: <InlineMath>{`u_1(x) = 1`}</InlineMath></li>
        <li><InlineMath>{`\\alpha = 1`}</InlineMath>: <InlineMath>{`u_2(x) = x`}</InlineMath></li>
        <li><InlineMath>{`\\alpha = 2`}</InlineMath>: <InlineMath>{`u_1(x) = 1 - 3x^2`}</InlineMath></li>
        <li><InlineMath>{`\\alpha = 3`}</InlineMath>: <InlineMath>{`u_2(x) = x - \\frac{5}{3}x^3`}</InlineMath></li>
      </ul>

      <Callout type="success">
        <strong>Key Insight:</strong> The Legendre equation illustrates a
        beautiful phenomenon: for special values of the parameter{' '}
        <InlineMath>{`\\alpha`}</InlineMath>, the infinite series "terminates" and
        becomes a polynomial. This happens precisely when{' '}
        <InlineMath>{`\\alpha`}</InlineMath> is a nonnegative integer—the eigenvalue
        condition that makes the problem physically meaningful.
      </Callout>
    </LessonLayout>
  );
}
