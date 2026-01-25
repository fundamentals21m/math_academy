import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section175() {
  return (
    <LessonLayout sectionId={175}>
      <h2>Distributions of Functions of Random Variables</h2>

      <p>
        Given random variables <InlineMath>X</InlineMath> and{' '}
        <InlineMath>Y</InlineMath> with known distributions, how do we find the
        distributions of functions like <InlineMath>{'X + Y'}</InlineMath>,{' '}
        <InlineMath>{'XY'}</InlineMath>, or <InlineMath>{'X^2 + Y^2'}</InlineMath>?
      </p>

      <h3>The Change of Variables Method</h3>

      <p>
        Consider a one-to-one mapping from the <InlineMath>xy</InlineMath>-plane
        to the <InlineMath>uv</InlineMath>-plane:
      </p>
      <MathBlock>
        {`u = M(x, y), \\quad v = N(x, y)`}
      </MathBlock>

      <p>with inverse:</p>
      <MathBlock>
        {`x = Q(u, v), \\quad y = R(u, v)`}
      </MathBlock>

      <Callout type="info">
        <strong>Theorem:</strong> If <InlineMath>{'(X, Y)'}</InlineMath> has
        continuous joint density <InlineMath>f</InlineMath>, and we define new
        random variables <InlineMath>{'U = M(X, Y)'}</InlineMath>,{' '}
        <InlineMath>{'V = N(X, Y)'}</InlineMath>, then{' '}
        <InlineMath>{'(U, V)'}</InlineMath> has density:
        <MathBlock>
          {`g(u, v) = f[Q(u,v), R(u,v)] \\left|\\frac{\\partial(Q, R)}{\\partial(u, v)}\\right|`}
        </MathBlock>
        where the second factor is the absolute value of the Jacobian determinant.
      </Callout>

      <h3>Sum and Difference of Random Variables</h3>

      <p>
        Let <InlineMath>{'U = X + Y'}</InlineMath> and{' '}
        <InlineMath>{'V = X - Y'}</InlineMath>. The inverse transformation is:
      </p>
      <MathBlock>
        {`x = \\frac{u + v}{2}, \\quad y = \\frac{u - v}{2}`}
      </MathBlock>

      <p>
        The Jacobian is <InlineMath>{'-1/2'}</InlineMath>, so:
      </p>
      <MathBlock>
        {`g(u, v) = \\frac{1}{2} f\\left(\\frac{u+v}{2}, \\frac{u-v}{2}\\right)`}
      </MathBlock>

      <p>The density of <InlineMath>{'U = X + Y'}</InlineMath> alone is:</p>
      <MathBlock>
        {`f_{X+Y}(u) = \\int_{-\\infty}^{\\infty} f(x, u-x)\\,dx`}
      </MathBlock>

      <h3>Convolution for Independent Variables</h3>

      <p>
        When <InlineMath>X</InlineMath> and <InlineMath>Y</InlineMath> are
        independent with densities <InlineMath>{'f_X'}</InlineMath> and{' '}
        <InlineMath>{'f_Y'}</InlineMath>:
      </p>
      <MathBlock>
        {`f_{X+Y}(u) = \\int_{-\\infty}^{\\infty} f_X(x) f_Y(u - x)\\,dx = (f_X * f_Y)(u)`}
      </MathBlock>

      <p>
        This integral is called the <strong>convolution</strong> of{' '}
        <InlineMath>{'f_X'}</InlineMath> and <InlineMath>{'f_Y'}</InlineMath>.
      </p>

      <h3>Example: Sum of Two Exponentials</h3>

      <p>
        Let <InlineMath>X</InlineMath> and <InlineMath>Y</InlineMath> be
        independent with exponential distributions (parameters{' '}
        <InlineMath>{'\\lambda'}</InlineMath> and{' '}
        <InlineMath>{'\\mu'}</InlineMath>).
      </p>

      <p>
        If <InlineMath>{'\\lambda = \\mu'}</InlineMath>:
      </p>
      <MathBlock>
        {`f_{X+Y}(u) = \\lambda^2 u e^{-\\lambda u} \\quad \\text{for } u \\geq 0`}
      </MathBlock>

      <p>
        If <InlineMath>{'\\lambda \\neq \\mu'}</InlineMath>:
      </p>
      <MathBlock>
        {`f_{X+Y}(u) = \\frac{\\lambda\\mu}{\\mu - \\lambda}(e^{-\\lambda u} - e^{-\\mu u}) \\quad \\text{for } u \\geq 0`}
      </MathBlock>

      <h3>Maximum and Minimum</h3>

      <p>
        For independent <InlineMath>X</InlineMath> and <InlineMath>Y</InlineMath>{' '}
        with distributions <InlineMath>{'F_X'}</InlineMath> and{' '}
        <InlineMath>{'F_Y'}</InlineMath>:
      </p>
      <MathBlock>
        {`F_{\\max(X,Y)}(t) = F_X(t) \\cdot F_Y(t)`}
      </MathBlock>
      <MathBlock>
        {`F_{\\min(X,Y)}(t) = F_X(t) + F_Y(t) - F_X(t) F_Y(t)`}
      </MathBlock>

      <Callout type="success">
        <strong>Key Insight:</strong> The change of variables formula transforms
        joint densities under mappings, using the Jacobian to account for how
        area is stretched or compressed. This is the essential tool for finding
        distributions of combinations of random variables.
      </Callout>
    </LessonLayout>
  );
}
