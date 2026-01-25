import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section184() {
  return (
    <LessonLayout sectionId={184}>
      <h2>Error in Polynomial Interpolation</h2>

      <p>
        When we approximate a function <InlineMath>f</InlineMath> by its
        interpolating polynomial <InlineMath>p</InlineMath>, we need to
        understand the error <InlineMath>{'f(x) - p(x)'}</InlineMath>. The
        error formula reveals how the choice of interpolation points affects
        accuracy.
      </p>

      <h3>The Error Formula</h3>

      <Callout type="info">
        <strong>Theorem (Interpolation Error):</strong> Let{' '}
        <InlineMath>f</InlineMath> have <InlineMath>{'n + 1'}</InlineMath>{' '}
        continuous derivatives on an interval <InlineMath>{'[a, b]'}</InlineMath>{' '}
        containing the distinct points{' '}
        <InlineMath>{'x_0, x_1, \\ldots, x_n'}</InlineMath>. Let{' '}
        <InlineMath>p</InlineMath> be the polynomial of degree at most{' '}
        <InlineMath>n</InlineMath> interpolating <InlineMath>f</InlineMath> at
        these points. Then for any <InlineMath>{'x \\in [a, b]'}</InlineMath>:
        <MathBlock>
          {`f(x) - p(x) = \\frac{f^{(n+1)}(\\xi)}{(n+1)!} \\omega(x)`}
        </MathBlock>
        where <InlineMath>{'\\omega(x) = (x - x_0)(x - x_1)\\cdots(x - x_n)'}</InlineMath>{' '}
        and <InlineMath>{'\\xi'}</InlineMath> is some point in the smallest
        interval containing <InlineMath>{'x, x_0, x_1, \\ldots, x_n'}</InlineMath>.
      </Callout>

      <h3>Proof</h3>

      <p>
        If <InlineMath>x</InlineMath> is one of the interpolation points, both
        sides are zero. Otherwise, define:
      </p>
      <MathBlock>
        {`g(t) = f(t) - p(t) - \\frac{f(x) - p(x)}{\\omega(x)} \\omega(t)`}
      </MathBlock>

      <p>
        Then <InlineMath>g</InlineMath> has <InlineMath>{'n + 2'}</InlineMath>{' '}
        zeros: at <InlineMath>{'x_0, x_1, \\ldots, x_n'}</InlineMath> and at{' '}
        <InlineMath>x</InlineMath>. By Rolle's theorem,{' '}
        <InlineMath>{"g'"}</InlineMath> has at least{' '}
        <InlineMath>{'n + 1'}</InlineMath> zeros. Continuing,{' '}
        <InlineMath>{'g^{(n+1)}'}</InlineMath> has at least one zero{' '}
        <InlineMath>{'\\xi'}</InlineMath>.
      </p>

      <p>
        Since <InlineMath>p</InlineMath> has degree at most <InlineMath>n</InlineMath>,{' '}
        <InlineMath>{'p^{(n+1)} = 0'}</InlineMath>. Also,{' '}
        <InlineMath>{'\\omega^{(n+1)} = (n+1)!'}</InlineMath>. Therefore:
      </p>
      <MathBlock>
        {`g^{(n+1)}(\\xi) = f^{(n+1)}(\\xi) - \\frac{f(x) - p(x)}{\\omega(x)}(n+1)! = 0`}
      </MathBlock>

      <p>Solving gives the result.</p>

      <h3>Similarity to Taylor's Remainder</h3>

      <p>
        Compare with Taylor's formula with Lagrange remainder:
      </p>
      <MathBlock>
        {`f(x) - T_n(x) = \\frac{f^{(n+1)}(\\xi)}{(n+1)!}(x - a)^{n+1}`}
      </MathBlock>

      <p>
        In interpolation, <InlineMath>{'(x - a)^{n+1}'}</InlineMath> is replaced
        by <InlineMath>{'\\omega(x)'}</InlineMath>. Taylor expansion "interpolates"
        at <InlineMath>a</InlineMath> with multiplicity <InlineMath>{'n + 1'}</InlineMath>.
      </p>

      <h3>Error Bound</h3>

      <p>
        If <InlineMath>{'M = \\max_{t \\in [a,b]} |f^{(n+1)}(t)|'}</InlineMath>, then:
      </p>
      <MathBlock>
        {`|f(x) - p(x)| \\leq \\frac{M}{(n+1)!} |\\omega(x)|`}
      </MathBlock>

      <h3>The Role of ω(x)</h3>

      <p>
        The error depends on <InlineMath>{'|\\omega(x)|'}</InlineMath>, which
        measures how far <InlineMath>x</InlineMath> is from the interpolation
        points. Key observations:
      </p>
      <ul>
        <li><InlineMath>{'\\omega(x) = 0'}</InlineMath> at each interpolation point</li>
        <li><InlineMath>{'|\\omega(x)|'}</InlineMath> grows rapidly outside <InlineMath>{'[x_0, x_n]'}</InlineMath></li>
        <li>Between interpolation points, <InlineMath>{'|\\omega(x)|'}</InlineMath> depends on point spacing</li>
      </ul>

      <h3>Equally Spaced Points</h3>

      <p>
        For <InlineMath>{'n + 1'}</InlineMath> equally spaced points on{' '}
        <InlineMath>{'[a, b]'}</InlineMath> with spacing{' '}
        <InlineMath>{'h = (b - a)/n'}</InlineMath>:
      </p>
      <MathBlock>
        {`\\max_{x \\in [a,b]} |\\omega(x)| \\leq \\frac{n! \\, h^{n+1}}{4}`}
      </MathBlock>

      <p>
        While equally spaced points are convenient, they are not optimal for
        minimizing interpolation error. The Chebyshev points, which we study
        later, provide a better choice.
      </p>

      <Callout type="warning">
        <strong>Caution:</strong> More interpolation points don't always mean
        better approximation! For some functions, the interpolation error can
        actually <em>grow</em> as <InlineMath>n</InlineMath> increases with
        equally spaced points—this is known as Runge's phenomenon.
      </Callout>

      <Callout type="success">
        <strong>Key Insight:</strong> The interpolation error has the same
        structure as Taylor's remainder, with{' '}
        <InlineMath>{'(x - a)^{n+1}'}</InlineMath> replaced by{' '}
        <InlineMath>{'\\omega(x)'}</InlineMath>. This reveals that minimizing
        interpolation error requires choosing points that make{' '}
        <InlineMath>{'|\\omega(x)|'}</InlineMath> small across the interval—a
        problem that leads us to Chebyshev polynomials.
      </Callout>
    </LessonLayout>
  );
}
