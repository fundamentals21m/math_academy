import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section177() {
  return (
    <LessonLayout sectionId={177}>
      <h2>Variance</h2>

      <p>
        While expectation tells us the center of a distribution, the{' '}
        <strong>variance</strong> measures how spread out the distribution is
        around that center.
      </p>

      <h3>Definition</h3>

      <Callout type="info">
        <strong>Definition:</strong> The <strong>variance</strong> of a random
        variable <InlineMath>X</InlineMath> with expectation{' '}
        <InlineMath>{'E(X)'}</InlineMath> is:
        <MathBlock>
          {`\\text{Var}(X) = E[(X - E(X))^2]`}
        </MathBlock>
        For continuous variables:
        <MathBlock>
          {`\\text{Var}(X) = \\int_{-\\infty}^{\\infty} [t - E(X)]^2 f_X(t)\\,dt`}
        </MathBlock>
        For discrete variables:
        <MathBlock>
          {`\\text{Var}(X) = \\sum_k [x_k - E(X)]^2 p_k`}
        </MathBlock>
      </Callout>

      <h3>Standard Deviation</h3>

      <p>
        The variance is often denoted <InlineMath>{'\\sigma^2'}</InlineMath>.
        The <strong>standard deviation</strong> is{' '}
        <InlineMath>{'\\sigma = \\sqrt{\\text{Var}(X)}'}</InlineMath>, which
        has the same units as <InlineMath>X</InlineMath>.
      </p>

      <h3>Alternative Formula</h3>

      <p>A useful computational formula:</p>
      <MathBlock>
        {`\\text{Var}(X) = E(X^2) - [E(X)]^2`}
      </MathBlock>

      <h3>Properties</h3>

      <ul>
        <li><InlineMath>{'\\text{Var}(X) \\geq 0'}</InlineMath></li>
        <li><InlineMath>{'\\text{Var}(c) = 0'}</InlineMath> for constants</li>
        <li><InlineMath>{'\\text{Var}(aX) = a^2 \\text{Var}(X)'}</InlineMath></li>
        <li><InlineMath>{'\\text{Var}(X + c) = \\text{Var}(X)'}</InlineMath></li>
        <li>If <InlineMath>X, Y</InlineMath> are independent: <InlineMath>{'\\text{Var}(X + Y) = \\text{Var}(X) + \\text{Var}(Y)'}</InlineMath></li>
      </ul>

      <h3>Examples</h3>

      <p>
        <strong>Uniform distribution on <InlineMath>{'[a, b]'}</InlineMath>:</strong>
      </p>
      <MathBlock>
        {`\\text{Var}(X) = \\frac{(b-a)^2}{12}`}
      </MathBlock>

      <p><strong>Binomial distribution:</strong></p>
      <MathBlock>
        {`\\text{Var}(X) = npq`}
      </MathBlock>

      <p>
        <strong>Normal distribution</strong> with parameters{' '}
        <InlineMath>m</InlineMath> and <InlineMath>{'\\sigma'}</InlineMath>:
      </p>
      <MathBlock>
        {`\\text{Var}(X) = \\sigma^2`}
      </MathBlock>

      <h3>Variance of Sample Means</h3>

      <p>
        Let <InlineMath>{'X_1, X_2, \\ldots, X_n'}</InlineMath> be independent
        random variables, each with expectation <InlineMath>m</InlineMath> and
        variance <InlineMath>{'\\sigma^2'}</InlineMath>. The sample mean is:
      </p>
      <MathBlock>
        {`\\bar{X} = \\frac{1}{n} \\sum_{k=1}^n X_k`}
      </MathBlock>

      <p>Then:</p>
      <MathBlock>
        {`E(\\bar{X}) = m, \\quad \\text{Var}(\\bar{X}) = \\frac{\\sigma^2}{n}`}
      </MathBlock>

      <p>
        The variance of the sample mean decreases as <InlineMath>n</InlineMath>{' '}
        increases. This is key to understanding why averaging many measurements
        gives better estimates.
      </p>

      <Callout type="success">
        <strong>Key Insight:</strong> Variance measures the "moment of inertia"
        of a probability distribution about its center. A small variance means
        the distribution is concentrated near its expectation; a large variance
        means it is spread out. The standard deviation gives this spread in the
        original units of measurement.
      </Callout>
    </LessonLayout>
  );
}
