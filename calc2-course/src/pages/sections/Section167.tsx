import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section167() {
  return (
    <LessonLayout sectionId={167}>
      <h2>Continuous Distributions and Density Functions</h2>

      <p>
        A random variable <InlineMath>X</InlineMath> is <strong>continuous</strong>{' '}
        if <InlineMath>{'P(X = t) = 0'}</InlineMath> for every real number{' '}
        <InlineMath>t</InlineMath>. For continuous distributions, probabilities
        are computed by integration rather than summation.
      </p>

      <h3>Probability Density Functions</h3>

      <Callout type="info">
        <strong>Definition:</strong> Let <InlineMath>X</InlineMath> be a
        continuous random variable with distribution function{' '}
        <InlineMath>F</InlineMath>. A nonnegative function{' '}
        <InlineMath>f</InlineMath> is called a{' '}
        <strong>probability density function</strong> (pdf) of{' '}
        <InlineMath>X</InlineMath> if <InlineMath>f</InlineMath> is integrable
        on every interval <InlineMath>{'[a, t]'}</InlineMath> and:
        <MathBlock>
          {`F(t) - F(a) = \\int_a^t f(u)\\,du`}
        </MathBlock>
      </Callout>

      <h3>Key Properties</h3>

      <p>If <InlineMath>f</InlineMath> is a probability density, then:</p>

      <MathBlock>
        {`F(t) = P(X \\leq t) = \\int_{-\\infty}^t f(u)\\,du`}
      </MathBlock>

      <MathBlock>
        {`\\int_{-\\infty}^{\\infty} f(u)\\,du = 1`}
      </MathBlock>

      <MathBlock>
        {`P(a < X \\leq b) = \\int_a^b f(u)\\,du`}
      </MathBlock>

      <p>
        When <InlineMath>F</InlineMath> is differentiable at{' '}
        <InlineMath>t</InlineMath> and <InlineMath>f</InlineMath> is continuous
        there, we have:
      </p>
      <MathBlock>
        {`f(t) = F'(t)`}
      </MathBlock>

      <h3>Important Distinction</h3>

      <Callout type="warning">
        <strong>Caution:</strong> For continuous distributions,{' '}
        <InlineMath>{'f(t)'}</InlineMath> is <strong>not</strong> the probability
        that <InlineMath>{'X = t'}</InlineMath>. In fact,{' '}
        <InlineMath>{'P(X = t) = 0'}</InlineMath> for all{' '}
        <InlineMath>t</InlineMath>. The density <InlineMath>f(t)</InlineMath>{' '}
        represents the rate of probability accumulation, not probability itself.
      </Callout>

      <p>This has an important consequence:</p>
      <MathBlock>
        {`P(a < X < b) = P(a < X \\leq b) = P(a \\leq X < b) = P(a \\leq X \\leq b)`}
      </MathBlock>

      <h3>Geometric Interpretation</h3>

      <p>
        The probability <InlineMath>{'P(a < X \\leq b)'}</InlineMath> equals the
        area under the density curve between <InlineMath>a</InlineMath> and{' '}
        <InlineMath>b</InlineMath>. The total area under the curve is 1.
      </p>

      <p>
        Think of the density <InlineMath>f</InlineMath> as describing how
        probability mass is "smeared" along the real line. Where{' '}
        <InlineMath>f</InlineMath> is large, probability is concentrated; where{' '}
        <InlineMath>f</InlineMath> is small, probability is sparse.
      </p>

      <h3>Example: Constructing a Density</h3>

      <p>
        Suppose we want a density supported on <InlineMath>{'[0, 2]'}</InlineMath>{' '}
        with <InlineMath>{'f(t) = ct'}</InlineMath>. To find <InlineMath>c</InlineMath>:
      </p>
      <MathBlock>
        {`1 = \\int_0^2 ct\\,dt = c \\cdot \\frac{t^2}{2}\\Big|_0^2 = 2c`}
      </MathBlock>

      <p>
        So <InlineMath>{'c = 1/2'}</InlineMath> and{' '}
        <InlineMath>{'f(t) = t/2'}</InlineMath> for{' '}
        <InlineMath>{'0 \\leq t \\leq 2'}</InlineMath>.
      </p>

      <p>The distribution function is:</p>
      <MathBlock>
        {`F(t) = \\int_0^t \\frac{u}{2}\\,du = \\frac{t^2}{4} \\quad \\text{for } 0 \\leq t \\leq 2`}
      </MathBlock>

      <Callout type="success">
        <strong>Key Insight:</strong> The density function is the continuous
        analog of the probability mass function. While the pmf gives actual
        probabilities at discrete points, the pdf gives probability{' '}
        <em>density</em>—probabilities are obtained by integrating the density
        over intervals. This is the fundamental connection between calculus and
        continuous probability.
      </Callout>
    </LessonLayout>
  );
}
