import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section182() {
  return (
    <LessonLayout sectionId={182}>
      <h2>Polynomial Approximation</h2>

      <p>
        The fundamental goal of polynomial approximation is to find a polynomial{' '}
        <InlineMath>{'p(x)'}</InlineMath> that closely approximates a given function{' '}
        <InlineMath>{'f(x)'}</InlineMath> over some interval{' '}
        <InlineMath>{'[a, b]'}</InlineMath>.
      </p>

      <h3>Taylor Polynomials</h3>

      <p>
        The most familiar approach is Taylor's expansion about a point{' '}
        <InlineMath>{'x = a'}</InlineMath>:
      </p>

      <Callout type="info">
        <strong>Definition:</strong> The <strong>Taylor polynomial</strong> of
        degree <InlineMath>n</InlineMath> for <InlineMath>f</InlineMath> centered
        at <InlineMath>a</InlineMath> is:
        <MathBlock>
          {`T_n(x) = \\sum_{k=0}^{n} \\frac{f^{(k)}(a)}{k!}(x - a)^k`}
        </MathBlock>
      </Callout>

      <p>
        Taylor polynomials are optimal near the expansion point, but their accuracy
        degrades as we move away from <InlineMath>a</InlineMath>.
      </p>

      <h3>Error in Taylor Approximation</h3>

      <p>
        If <InlineMath>f</InlineMath> has <InlineMath>{'n + 1'}</InlineMath>{' '}
        continuous derivatives on an interval containing <InlineMath>a</InlineMath>{' '}
        and <InlineMath>x</InlineMath>, the error is:
      </p>
      <MathBlock>
        {`f(x) - T_n(x) = \\frac{f^{(n+1)}(\\xi)}{(n+1)!}(x - a)^{n+1}`}
      </MathBlock>
      <p>
        for some <InlineMath>{'\\xi'}</InlineMath> between <InlineMath>a</InlineMath>{' '}
        and <InlineMath>x</InlineMath>.
      </p>

      <h3>Limitations of Taylor Polynomials</h3>

      <p>
        Taylor polynomials have significant drawbacks for practical approximation:
      </p>
      <ul>
        <li>They require knowledge of derivatives, which may be unavailable</li>
        <li>Accuracy is concentrated near the expansion point</li>
        <li>For global approximation on an interval, they may perform poorly</li>
      </ul>

      <h3>A Different Approach: Interpolation</h3>

      <p>
        Instead of matching derivatives at one point, we can construct a polynomial
        that passes through <em>multiple points</em> of the function. Given{' '}
        <InlineMath>{'n + 1'}</InlineMath> points:
      </p>
      <MathBlock>
        {`(x_0, f(x_0)), (x_1, f(x_1)), \\ldots, (x_n, f(x_n))`}
      </MathBlock>
      <p>
        we seek a polynomial <InlineMath>{'p(x)'}</InlineMath> of degree at most{' '}
        <InlineMath>n</InlineMath> such that{' '}
        <InlineMath>{'p(x_k) = f(x_k)'}</InlineMath> for each <InlineMath>k</InlineMath>.
      </p>

      <h3>Existence and Uniqueness</h3>

      <Callout type="info">
        <strong>Theorem:</strong> Given <InlineMath>{'n + 1'}</InlineMath> distinct
        points <InlineMath>{'x_0, x_1, \\ldots, x_n'}</InlineMath> and corresponding
        values <InlineMath>{'y_0, y_1, \\ldots, y_n'}</InlineMath>, there exists a
        unique polynomial <InlineMath>p</InlineMath> of degree at most{' '}
        <InlineMath>n</InlineMath> such that{' '}
        <InlineMath>{'p(x_k) = y_k'}</InlineMath> for <InlineMath>{'k = 0, 1, \\ldots, n'}</InlineMath>.
      </Callout>

      <h3>Proof of Existence</h3>

      <p>
        The system of equations <InlineMath>{'p(x_k) = y_k'}</InlineMath> can be
        written as:
      </p>
      <MathBlock>
        {`\\begin{pmatrix} 1 & x_0 & x_0^2 & \\cdots & x_0^n \\\\ 1 & x_1 & x_1^2 & \\cdots & x_1^n \\\\ \\vdots & \\vdots & \\vdots & \\ddots & \\vdots \\\\ 1 & x_n & x_n^2 & \\cdots & x_n^n \\end{pmatrix} \\begin{pmatrix} a_0 \\\\ a_1 \\\\ \\vdots \\\\ a_n \\end{pmatrix} = \\begin{pmatrix} y_0 \\\\ y_1 \\\\ \\vdots \\\\ y_n \\end{pmatrix}`}
      </MathBlock>

      <p>
        This is a <strong>Vandermonde system</strong>. The determinant of the
        Vandermonde matrix is:
      </p>
      <MathBlock>
        {`\\prod_{0 \\leq i < j \\leq n} (x_j - x_i)`}
      </MathBlock>
      <p>
        which is nonzero when the <InlineMath>{'x_k'}</InlineMath> are distinct.
        Hence the system has a unique solution.
      </p>

      <Callout type="success">
        <strong>Key Insight:</strong> Interpolation provides an alternative to
        Taylor expansion that uses function values instead of derivatives. This
        is practical when we only know the function at discrete points, as in
        experimental data or tabulated functions. The interpolating polynomial
        distributes its accuracy across the interpolation points rather than
        concentrating it at a single point.
      </Callout>
    </LessonLayout>
  );
}
