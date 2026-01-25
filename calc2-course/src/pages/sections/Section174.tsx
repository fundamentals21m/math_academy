import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section174() {
  return (
    <LessonLayout sectionId={174}>
      <h2>Two-Dimensional Continuous Distributions</h2>

      <p>
        For continuous two-dimensional random variables, probabilities are
        computed by double integration of a joint density function.
      </p>

      <h3>Joint Density Functions</h3>

      <Callout type="info">
        <strong>Definition:</strong> A two-dimensional random variable{' '}
        <InlineMath>{'(X, Y)'}</InlineMath> with continuous joint distribution{' '}
        <InlineMath>F</InlineMath> has a <strong>joint probability density</strong>{' '}
        <InlineMath>f</InlineMath> if <InlineMath>f</InlineMath> is nonnegative
        and:
        <MathBlock>
          {`P[(X, Y) \\in Q] = \\iint_Q f(x, y)\\,dx\\,dy`}
        </MathBlock>
        for suitable regions <InlineMath>Q</InlineMath> in the plane.
      </Callout>

      <h3>Key Formulas</h3>

      <p>The joint distribution function is:</p>
      <MathBlock>
        {`F(a, b) = \\int_{-\\infty}^{a} \\int_{-\\infty}^{b} f(x, y)\\,dy\\,dx`}
      </MathBlock>

      <p>The density integrates to 1 over the whole plane:</p>
      <MathBlock>
        {`\\int_{-\\infty}^{\\infty} \\int_{-\\infty}^{\\infty} f(x, y)\\,dx\\,dy = 1`}
      </MathBlock>

      <p>Rectangular probabilities:</p>
      <MathBlock>
        {`P(a < X \\leq b, c < Y \\leq d) = \\int_a^b \\int_c^d f(x, y)\\,dy\\,dx`}
      </MathBlock>

      <h3>Marginal Densities</h3>

      <p>
        The marginal density functions are obtained by integrating out the
        other variable:
      </p>
      <MathBlock>
        {`f_X(x) = \\int_{-\\infty}^{\\infty} f(x, y)\\,dy`}
      </MathBlock>
      <MathBlock>
        {`f_Y(y) = \\int_{-\\infty}^{\\infty} f(x, y)\\,dx`}
      </MathBlock>

      <h3>Independence for Continuous Variables</h3>

      <Callout type="info">
        <strong>Theorem:</strong> If <InlineMath>X</InlineMath> and{' '}
        <InlineMath>Y</InlineMath> have continuous distributions with densities{' '}
        <InlineMath>{'f_X'}</InlineMath> and <InlineMath>{'f_Y'}</InlineMath>,
        and joint density <InlineMath>f</InlineMath>, then{' '}
        <InlineMath>X</InlineMath> and <InlineMath>Y</InlineMath> are
        independent if and only if:
        <MathBlock>
          {`f(x, y) = f_X(x) \\cdot f_Y(y) \\quad \\text{for all } (x, y)`}
        </MathBlock>
      </Callout>

      <h3>Example: Uniform Distribution on a Square</h3>

      <p>
        Let <InlineMath>f(x,y) = 1</InlineMath> for{' '}
        <InlineMath>{'(x,y) \\in [0,1] \\times [0,1]'}</InlineMath> and{' '}
        <InlineMath>{'f(x,y) = 0'}</InlineMath> elsewhere. This is a{' '}
        <strong>uniform distribution</strong> on the unit square.
      </p>

      <p>The joint distribution function is:</p>
      <MathBlock>
        {`F(a, b) = \\begin{cases} ab & \\text{if } (a,b) \\in [0,1] \\times [0,1] \\\\ \\text{(other cases as needed)} \\end{cases}`}
      </MathBlock>

      <p>The marginal densities are:</p>
      <MathBlock>
        {`f_X(x) = \\int_0^1 1\\,dy = 1 \\quad \\text{for } x \\in [0,1]`}
      </MathBlock>

      <p>
        Since <InlineMath>{'f(x,y) = f_X(x) f_Y(y) = 1 \\cdot 1 = 1'}</InlineMath>,{' '}
        <InlineMath>X</InlineMath> and <InlineMath>Y</InlineMath> are independent.
        Each is uniformly distributed on <InlineMath>{'[0, 1]'}</InlineMath>.
      </p>

      <h3>Conditional Densities</h3>

      <p>
        The conditional density of <InlineMath>X</InlineMath> given{' '}
        <InlineMath>{'Y = y'}</InlineMath> is:
      </p>
      <MathBlock>
        {`f_X(x \\mid Y = y) = \\frac{f(x, y)}{f_Y(y)}`}
      </MathBlock>

      <Callout type="success">
        <strong>Key Insight:</strong> Two-dimensional continuous distributions
        extend the calculus of probabilities to the plane. Joint densities allow
        us to compute probabilities of any planar region by double integration,
        and the relationship between variables—including independence—is encoded
        in the factorization (or non-factorization) of the joint density.
      </Callout>
    </LessonLayout>
  );
}
