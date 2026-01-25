import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section98() {
  return (
    <LessonLayout sectionId={98}>
      <h2>Second-Derivative Test for Functions of Two Variables</h2>

      <p>
        For functions of two variables, the nature of a stationary point can be
        determined directly from the second-order partial derivatives without
        explicitly computing eigenvalues.
      </p>

      <h3>The Hessian Determinant</h3>

      <p>
        For a function <InlineMath>f(x_1, x_2)</InlineMath>, the Hessian matrix
        at a stationary point <InlineMath>a</InlineMath> is:
      </p>
      <MathBlock>{`H(a) = \\begin{bmatrix} A & B \\\\ B & C \\end{bmatrix}`}</MathBlock>
      <p>
        where <InlineMath>{`A = D_{1,1}f(a)`}</InlineMath>,{' '}
        <InlineMath>{`B = D_{1,2}f(a)`}</InlineMath>, and{' '}
        <InlineMath>{`C = D_{2,2}f(a)`}</InlineMath>.
      </p>

      <p>
        The <strong>Hessian determinant</strong> is:
      </p>
      <MathBlock>
        \Delta = \det H(a) = AC - B^2
      </MathBlock>

      <h3>The Second-Derivative Test</h3>

      <Callout type="info">
        <strong>Theorem 9.7 (Second-Derivative Test):</strong> Let{' '}
        <InlineMath>a</InlineMath> be a stationary point of a scalar field{' '}
        <InlineMath>f(x_1, x_2)</InlineMath> with continuous second-order partial
        derivatives in a 2-ball <InlineMath>B(a)</InlineMath>. Let:
        <MathBlock>{`A = D_{1,1}f(a), \\quad B = D_{1,2}f(a), \\quad C = D_{2,2}f(a)`}</MathBlock>
        and <InlineMath>{`\\Delta = AC - B^2`}</InlineMath>. Then:
        <br /><br />
        (a) If <InlineMath>{`\\Delta < 0`}</InlineMath>,{' '}
        <InlineMath>f</InlineMath> has a <strong>saddle point</strong> at{' '}
        <InlineMath>a</InlineMath>.
        <br /><br />
        (b) If <InlineMath>{`\\Delta > 0`}</InlineMath> and{' '}
        <InlineMath>{`A > 0`}</InlineMath>, <InlineMath>f</InlineMath> has a{' '}
        <strong>relative minimum</strong> at <InlineMath>a</InlineMath>.
        <br /><br />
        (c) If <InlineMath>{`\\Delta > 0`}</InlineMath> and{' '}
        <InlineMath>{`A < 0`}</InlineMath>, <InlineMath>f</InlineMath> has a{' '}
        <strong>relative maximum</strong> at <InlineMath>a</InlineMath>.
        <br /><br />
        (d) If <InlineMath>{`\\Delta = 0`}</InlineMath>, the test is{' '}
        <strong>inconclusive</strong>.
      </Callout>

      <h3>Proof</h3>

      <p>
        The characteristic equation <InlineMath>{`\\det(\\lambda I - H(a)) = 0`}</InlineMath>{' '}
        is the quadratic:
      </p>
      <MathBlock>
        \lambda^2 - (A + C)\lambda + \Delta = 0
      </MathBlock>

      <p>
        The eigenvalues <InlineMath>{`\\lambda_1, \\lambda_2`}</InlineMath> satisfy:
      </p>
      <MathBlock>
        \lambda_1 + \lambda_2 = A + C, \quad \lambda_1 \lambda_2 = \Delta
      </MathBlock>

      <p>
        <strong>If <InlineMath>{`\\Delta < 0`}</InlineMath>:</strong> The
        eigenvalues have opposite signs (since their product is negative), so{' '}
        <InlineMath>f</InlineMath> has a saddle point.
      </p>

      <p>
        <strong>If <InlineMath>{`\\Delta > 0`}</InlineMath>:</strong> The
        eigenvalues have the same sign. Since{' '}
        <InlineMath>{`AC > B^2 \\geq 0`}</InlineMath>, we have{' '}
        <InlineMath>A</InlineMath> and <InlineMath>C</InlineMath> with the same
        sign. This sign must be that of the eigenvalues (since{' '}
        <InlineMath>{`A + C = \\lambda_1 + \\lambda_2`}</InlineMath>). If{' '}
        <InlineMath>{`A > 0`}</InlineMath>, both eigenvalues are positive
        (minimum); if <InlineMath>{`A < 0`}</InlineMath>, both are negative
        (maximum).
      </p>

      <p>
        <strong>If <InlineMath>{`\\Delta = 0`}</InlineMath>:</strong> At least
        one eigenvalue is zero, so Theorem 9.6 does not apply.
      </p>

      <h3>Examples Revisited</h3>

      <p>
        <strong>Example:</strong> <InlineMath>{`f(x, y) = x^3 - 3xy^2`}</InlineMath>{' '}
        (monkey saddle). At the origin: <InlineMath>A = 0</InlineMath>,{' '}
        <InlineMath>B = 0</InlineMath>, <InlineMath>C = 0</InlineMath>, so{' '}
        <InlineMath>{`\\Delta = 0`}</InlineMath>. The test is inconclusive. (Direct
        inspection shows it's a saddle.)
      </p>

      <p>
        <strong>Example:</strong> <InlineMath>{`f(x, y) = x^2y^2`}</InlineMath>.
        At the origin: <InlineMath>A = 0</InlineMath>,{' '}
        <InlineMath>B = 0</InlineMath>, <InlineMath>C = 0</InlineMath>, so{' '}
        <InlineMath>{`\\Delta = 0`}</InlineMath>. The test is inconclusive.
        (Direct inspection shows it's a minimum.)
      </p>

      <h3>Practical Considerations</h3>

      <Callout type="warning">
        <strong>Caution:</strong> Even when the test is applicable, computing
        the Hessian determinant may not be the simplest approach. For example,
        if <InlineMath>{`f(x, y) = e^{1/g(x,y)}`}</InlineMath> where{' '}
        <InlineMath>{`g(x, y) = x^2 + 2 + \\cos^2 y - 2\\cos y`}</InlineMath>,
        the test is applicable but computations are lengthy. Writing{' '}
        <InlineMath>{`g(x, y) = 1 + x^2 + (1 - \\cos y)^2`}</InlineMath> as a sum
        of squares shows immediately that <InlineMath>f</InlineMath> has relative
        maxima at points where <InlineMath>x = 0</InlineMath> and{' '}
        <InlineMath>{`(1 - \\cos y)^2 = 0`}</InlineMath>.
      </Callout>

      <Callout type="success">
        <strong>Key Insight:</strong> For two-variable functions, the Hessian
        determinant <InlineMath>{`\\Delta = AC - B^2`}</InlineMath> and the sign
        of <InlineMath>A</InlineMath> completely classify stationary points.
        Negative <InlineMath>\Delta</InlineMath> means saddle; positive{' '}
        <InlineMath>\Delta</InlineMath> means extremum, with the type determined
        by the sign of <InlineMath>A</InlineMath> (or equivalently{' '}
        <InlineMath>C</InlineMath>).
      </Callout>
    </LessonLayout>
  );
}
