import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section183() {
  return (
    <LessonLayout sectionId={183}>
      <h2>Interpolating Polynomials</h2>

      <p>
        Having established that a unique interpolating polynomial exists, we now
        develop explicit formulas for constructing it. The{' '}
        <strong>Lagrange interpolation formula</strong> provides an elegant
        solution.
      </p>

      <h3>Lagrange Basis Polynomials</h3>

      <Callout type="info">
        <strong>Definition:</strong> Given distinct points{' '}
        <InlineMath>{'x_0, x_1, \\ldots, x_n'}</InlineMath>, the{' '}
        <strong>Lagrange basis polynomials</strong> are:
        <MathBlock>
          {`L_k(x) = \\prod_{j \\neq k} \\frac{x - x_j}{x_k - x_j} = \\frac{(x - x_0)\\cdots(x - x_{k-1})(x - x_{k+1})\\cdots(x - x_n)}{(x_k - x_0)\\cdots(x_k - x_{k-1})(x_k - x_{k+1})\\cdots(x_k - x_n)}`}
        </MathBlock>
      </Callout>

      <h3>Key Property of Lagrange Basis</h3>

      <p>
        Each <InlineMath>{'L_k(x)'}</InlineMath> is a polynomial of degree{' '}
        <InlineMath>n</InlineMath> satisfying:
      </p>
      <MathBlock>
        {`L_k(x_j) = \\delta_{kj} = \\begin{cases} 1 & \\text{if } j = k \\\\ 0 & \\text{if } j \\neq k \\end{cases}`}
      </MathBlock>

      <p>
        In other words, <InlineMath>{'L_k'}</InlineMath> equals 1 at{' '}
        <InlineMath>{'x_k'}</InlineMath> and 0 at all other interpolation points.
      </p>

      <h3>The Lagrange Interpolation Formula</h3>

      <Callout type="info">
        <strong>Theorem (Lagrange Interpolation):</strong> The unique polynomial
        of degree at most <InlineMath>n</InlineMath> that interpolates the values{' '}
        <InlineMath>{'y_0, y_1, \\ldots, y_n'}</InlineMath> at distinct points{' '}
        <InlineMath>{'x_0, x_1, \\ldots, x_n'}</InlineMath> is:
        <MathBlock>
          {`p(x) = \\sum_{k=0}^{n} y_k L_k(x) = \\sum_{k=0}^{n} y_k \\prod_{j \\neq k} \\frac{x - x_j}{x_k - x_j}`}
        </MathBlock>
      </Callout>

      <h3>Verification</h3>

      <p>
        To verify this formula, evaluate at any interpolation point{' '}
        <InlineMath>{'x_i'}</InlineMath>:
      </p>
      <MathBlock>
        {`p(x_i) = \\sum_{k=0}^{n} y_k L_k(x_i) = \\sum_{k=0}^{n} y_k \\delta_{ki} = y_i`}
      </MathBlock>

      <h3>Example: Linear Interpolation</h3>

      <p>
        For two points <InlineMath>{'(x_0, y_0)'}</InlineMath> and{' '}
        <InlineMath>{'(x_1, y_1)'}</InlineMath>:
      </p>
      <MathBlock>
        {`L_0(x) = \\frac{x - x_1}{x_0 - x_1}, \\quad L_1(x) = \\frac{x - x_0}{x_1 - x_0}`}
      </MathBlock>
      <MathBlock>
        {`p(x) = y_0 \\frac{x - x_1}{x_0 - x_1} + y_1 \\frac{x - x_0}{x_1 - x_0}`}
      </MathBlock>
      <p>
        This is the familiar formula for the line through two points.
      </p>

      <h3>Example: Quadratic Interpolation</h3>

      <p>
        For three points <InlineMath>{'(x_0, y_0)'}</InlineMath>,{' '}
        <InlineMath>{'(x_1, y_1)'}</InlineMath>, <InlineMath>{'(x_2, y_2)'}</InlineMath>:
      </p>
      <MathBlock>
        {`p(x) = y_0 \\frac{(x-x_1)(x-x_2)}{(x_0-x_1)(x_0-x_2)} + y_1 \\frac{(x-x_0)(x-x_2)}{(x_1-x_0)(x_1-x_2)} + y_2 \\frac{(x-x_0)(x-x_1)}{(x_2-x_0)(x_2-x_1)}`}
      </MathBlock>

      <h3>An Alternative Form</h3>

      <p>
        Let <InlineMath>{'\\omega(x) = (x - x_0)(x - x_1)\\cdots(x - x_n)'}</InlineMath>.
        Then:
      </p>
      <MathBlock>
        {`\\omega'(x_k) = \\prod_{j \\neq k}(x_k - x_j)`}
      </MathBlock>

      <p>
        The Lagrange formula can be written as:
      </p>
      <MathBlock>
        {`p(x) = \\sum_{k=0}^{n} \\frac{\\omega(x)}{(x - x_k)\\omega'(x_k)} y_k`}
      </MathBlock>

      <h3>Computational Considerations</h3>

      <p>
        While the Lagrange formula is elegant, it has practical drawbacks:
      </p>
      <ul>
        <li>Adding a new point requires recomputing all basis polynomials</li>
        <li>It doesn't reveal patterns for equally spaced points</li>
        <li>Numerical stability can be an issue for many points</li>
      </ul>
      <p>
        Newton's formula, which we develop later, addresses these concerns.
      </p>

      <Callout type="success">
        <strong>Key Insight:</strong> The Lagrange formula elegantly expresses
        the interpolating polynomial as a linear combination of basis polynomials,
        each designed to "pick out" exactly one data value. This construction
        generalizes the familiar two-point line formula to polynomials of any
        degree. The formula also connects interpolation to linear algebra—the
        Lagrange basis forms a basis for the space of polynomials of degree at
        most <InlineMath>n</InlineMath>.
      </Callout>
    </LessonLayout>
  );
}
