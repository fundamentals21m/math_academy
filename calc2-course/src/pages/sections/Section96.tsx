import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section96() {
  return (
    <LessonLayout sectionId={96}>
      <h2>Second-Order Taylor Formula for Scalar Fields</h2>

      <p>
        If a differentiable scalar field <InlineMath>f</InlineMath> has a
        stationary point at <InlineMath>a</InlineMath>, the nature of that point
        is determined by the algebraic sign of{' '}
        <InlineMath>f(x) - f(a)</InlineMath> for <InlineMath>x</InlineMath> near{' '}
        <InlineMath>a</InlineMath>.
      </p>

      <h3>First-Order Taylor Formula at Stationary Points</h3>

      <p>
        At a stationary point, <InlineMath>{`\\nabla f(a) = 0`}</InlineMath>, so
        the first-order Taylor formula becomes:
      </p>
      <MathBlock>
        f(a + y) - f(a) = \|y\| E(a, y)
      </MathBlock>
      <p>
        where <InlineMath>{`E(a, y) \\to 0`}</InlineMath> as{' '}
        <InlineMath>{`y \\to 0`}</InlineMath>. To determine the sign of{' '}
        <InlineMath>f(a + y) - f(a)</InlineMath>, we need more information about
        the error term.
      </p>

      <h3>The Hessian Matrix</h3>

      <Callout type="info">
        <strong>Definition:</strong> The <InlineMath>n \times n</InlineMath>{' '}
        matrix of second-order partial derivatives{' '}
        <InlineMath>{`D_{ij}f(x)`}</InlineMath> is called the{' '}
        <strong>Hessian matrix</strong> and is denoted by{' '}
        <InlineMath>H(x)</InlineMath>:
        <MathBlock>{`H(x) = [D_{ij}f(x)]_{i,j=1}^n = \\begin{bmatrix} D_{11}f(x) & D_{12}f(x) & \\cdots & D_{1n}f(x) \\\\ D_{21}f(x) & D_{22}f(x) & \\cdots & D_{2n}f(x) \\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ D_{n1}f(x) & D_{n2}f(x) & \\cdots & D_{nn}f(x) \\end{bmatrix}`}</MathBlock>
        When the partial derivatives <InlineMath>{`D_{ij}f`}</InlineMath> are
        continuous, we have <InlineMath>{`D_{ij}f = D_{ji}f`}</InlineMath> and
        the Hessian is <strong>symmetric</strong>.
      </Callout>

      <h3>The Quadratic Form</h3>

      <p>
        The quadratic form associated with the Hessian can be written:
      </p>
      <MathBlock>{`\\sum_{i=1}^n \\sum_{j=1}^n D_{ij}f(a)y_i y_j = yH(a)y^t`}</MathBlock>
      <p>
        where <InlineMath>{`y = (y_1, \\ldots, y_n)`}</InlineMath> is a row
        matrix and <InlineMath>y^t</InlineMath> is its transpose.
      </p>

      <h3>Second-Order Taylor Formula</h3>

      <Callout type="info">
        <strong>Theorem 9.4 (Second-Order Taylor Formula):</strong> Let{' '}
        <InlineMath>f</InlineMath> be a scalar field with continuous
        second-order partial derivatives <InlineMath>{`D_{ij}f`}</InlineMath> in
        an <InlineMath>n</InlineMath>-ball <InlineMath>B(a)</InlineMath>. Then
        for all <InlineMath>y</InlineMath> in <InlineMath>{`\\mathbb{R}^n`}</InlineMath>{' '}
        such that <InlineMath>{`a + y \\in B(a)`}</InlineMath>:
        <MathBlock>{`f(a + y) - f(a) = \\nabla f(a) \\cdot y + \\frac{1}{2!} yH(a + cy)y^t`}</MathBlock>
        where <InlineMath>{`0 < c < 1`}</InlineMath>. This can also be written:
        <MathBlock>{`f(a + y) - f(a) = \\nabla f(a) \\cdot y + \\frac{1}{2!} yH(a)y^t + \\|y\\|^2 E_2(a, y)`}</MathBlock>
        where <InlineMath>{`E_2(a, y) \\to 0`}</InlineMath> as{' '}
        <InlineMath>{`y \\to 0`}</InlineMath>.
      </Callout>

      <h3>Proof Sketch</h3>

      <p>
        Keep <InlineMath>y</InlineMath> fixed and define{' '}
        <InlineMath>g(u) = f(a + uy)</InlineMath> for <InlineMath>u</InlineMath>{' '}
        in <InlineMath>[0, 1]</InlineMath>. Then:
      </p>
      <MathBlock>
        f(a + y) - f(a) = g(1) - g(0)
      </MathBlock>

      <p>
        Apply the one-dimensional second-order Taylor formula with Lagrange's
        remainder:
      </p>
      <MathBlock>{`g(1) - g(0) = g'(0) + \\frac{1}{2!} g''(c)`}</MathBlock>
      <p>
        where <InlineMath>{`0 < c < 1`}</InlineMath>.
      </p>

      <p>
        By the chain rule, <InlineMath>{`g'(u) = \\nabla f(a + uy) \\cdot y`}</InlineMath>,
        so <InlineMath>{`g'(0) = \\nabla f(a) \\cdot y`}</InlineMath>. Also:
      </p>
      <MathBlock>
        g''(u) = yH(a + uy)y^t
      </MathBlock>

      <p>
        Substituting gives the Taylor formula. The error bound follows from
        continuity of the second-order partials.
      </p>

      <h3>Application at Stationary Points</h3>

      <p>
        At a stationary point where <InlineMath>{`\\nabla f(a) = 0`}</InlineMath>:
      </p>
      <MathBlock>{`f(a + y) - f(a) = \\frac{1}{2} yH(a)y^t + \\|y\\|^2 E_2(a, y)`}</MathBlock>

      <p>
        Since <InlineMath>{`\\|y\\|^2 E_2(a, y)`}</InlineMath> tends to zero
        faster than <InlineMath>{`\\|y\\|^2`}</InlineMath>, for small{' '}
        <InlineMath>y</InlineMath> the sign of{' '}
        <InlineMath>f(a + y) - f(a)</InlineMath> is determined by the sign of
        the quadratic form <InlineMath>yH(a)y^t</InlineMath>.
      </p>

      <Callout type="success">
        <strong>Key Insight:</strong> The second-order Taylor formula shows that
        near a stationary point, a scalar field is approximated by a quadratic
        form. The Hessian matrix encodes all information about this quadratic
        approximation. The nature of the stationary point (max, min, or saddle)
        is determined by the definiteness of the Hessian.
      </Callout>
    </LessonLayout>
  );
}
