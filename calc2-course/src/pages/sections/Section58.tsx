import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section58() {
  return (
    <LessonLayout sectionId={58}>
      <h2>Power Series Solutions</h2>

      <p>
        When the coefficients of a linear differential equation are analytic
        (have power series expansions), we can often find solutions as power
        series. This approach is particularly valuable for equations that
        cannot be solved by the algebraic methods used for constant coefficients.
      </p>

      <h3>Analytic Functions</h3>

      <Callout type="info">
        <strong>Definition:</strong> A function <InlineMath>f</InlineMath> is{' '}
        <strong>analytic</strong> on an interval{' '}
        <InlineMath>{`(x_0 - r, x_0 + r)`}</InlineMath> if it has a power-series
        expansion convergent in this interval:
        <MathBlock>
          {`f(x) = \\sum_{n=0}^\\infty a_n (x - x_0)^n`}
        </MathBlock>
      </Callout>

      <h3>The Main Theorem</h3>

      <Callout type="info">
        <strong>Theorem 6.13:</strong> Let <InlineMath>{`P_1`}</InlineMath> and{' '}
        <InlineMath>{`P_2`}</InlineMath> be analytic on an open interval{' '}
        <InlineMath>{`(x_0 - r, x_0 + r)`}</InlineMath>, say:
        <MathBlock>
          {`P_1(x) = \\sum_{n=0}^\\infty b_n(x - x_0)^n, \\quad P_2(x) = \\sum_{n=0}^\\infty c_n(x - x_0)^n`}
        </MathBlock>
        Then the differential equation:
        <MathBlock>{`y'' + P_1(x)y' + P_2(x)y = 0`}</MathBlock>
        has two independent solutions <InlineMath>{`u_1`}</InlineMath> and{' '}
        <InlineMath>{`u_2`}</InlineMath> which are analytic on the same interval.
      </Callout>

      <h3>Finding Power Series Solutions</h3>

      <p>
        To find a power-series solution, we:
      </p>

      <ol>
        <li>
          Assume a solution of the form{' '}
          <InlineMath>{`y = \\sum_{n=0}^\\infty a_n(x - x_0)^n`}</InlineMath>
        </li>
        <li>
          Differentiate term by term:
          <MathBlock>
            {`y' = \\sum_{n=0}^\\infty (n+1)a_{n+1}(x - x_0)^n`}
          </MathBlock>
          <MathBlock>
            {`y'' = \\sum_{n=0}^\\infty (n+2)(n+1)a_{n+2}(x - x_0)^n`}
          </MathBlock>
        </li>
        <li>Substitute into the differential equation</li>
        <li>Equate coefficients to obtain a recursion formula</li>
        <li>Verify convergence of the resulting series</li>
      </ol>

      <h3>The Recursion Formula</h3>

      <p>
        After substituting and multiplying the power series, we obtain:
      </p>
      <MathBlock>
        {`(n+2)(n+1)a_{n+2} = -\\sum_{k=0}^n [(k+1)a_{k+1}b_{n-k} + a_k c_{n-k}]`}
      </MathBlock>

      <p>
        This expresses <InlineMath>{`a_{n+2}`}</InlineMath> in terms of earlier
        coefficients <InlineMath>{`a_0, a_1, \\ldots, a_{n+1}`}</InlineMath> and
        the known coefficients of <InlineMath>{`P_1`}</InlineMath> and{' '}
        <InlineMath>{`P_2`}</InlineMath>.
      </p>

      <h3>Two Independent Solutions</h3>

      <p>
        The first two coefficients <InlineMath>{`a_0`}</InlineMath> and{' '}
        <InlineMath>{`a_1`}</InlineMath> represent initial values{' '}
        <InlineMath>{`y(x_0)`}</InlineMath> and <InlineMath>{`y'(x_0)`}</InlineMath>.
      </p>

      <ul>
        <li>
          <InlineMath>{`u_1`}</InlineMath>: Set{' '}
          <InlineMath>{`a_0 = 1, a_1 = 0`}</InlineMath>, giving{' '}
          <InlineMath>{`u_1(x_0) = 1, u_1'(x_0) = 0`}</InlineMath>
        </li>
        <li>
          <InlineMath>{`u_2`}</InlineMath>: Set{' '}
          <InlineMath>{`a_0 = 0, a_1 = 1`}</InlineMath>, giving{' '}
          <InlineMath>{`u_2(x_0) = 0, u_2'(x_0) = 1`}</InlineMath>
        </li>
      </ul>

      <p>
        These solutions are independent because their Wronskian at{' '}
        <InlineMath>{`x_0`}</InlineMath> is:
      </p>
      <MathBlock>
        {`W(x_0) = u_1(x_0)u_2'(x_0) - u_1'(x_0)u_2(x_0) = 1 \\cdot 1 - 0 \\cdot 0 = 1 \\neq 0`}
      </MathBlock>

      <h3>Proof of Convergence</h3>

      <p>
        The convergence proof uses a domination argument. For any{' '}
        <InlineMath>{`x_1 \\neq x_0`}</InlineMath> in the interval, we bound the
        coefficients and show that the series{' '}
        <InlineMath>{`\\sum a_n(x - x_0)^n`}</InlineMath> is dominated by a
        convergent series.
      </p>

      <Callout type="success">
        <strong>Key Insight:</strong> The power series method transforms the
        differential equation into an algebraic recursion for the coefficients.
        The analyticity of the coefficient functions guarantees that the
        solution series converges in the same interval. This is a fundamental
        connection between analysis (convergence) and algebra (recursion).
      </Callout>
    </LessonLayout>
  );
}
