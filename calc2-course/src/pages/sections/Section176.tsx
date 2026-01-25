import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section176() {
  return (
    <LessonLayout sectionId={176}>
      <h2>Expectation</h2>

      <p>
        The <strong>expectation</strong> (or <strong>expected value</strong> or{' '}
        <strong>mean</strong>) of a random variable is a weighted average of its
        possible values, weighted by their probabilities.
      </p>

      <h3>Definition</h3>

      <Callout type="info">
        <strong>Definition:</strong> Let <InlineMath>X</InlineMath> be a random
        variable.
        <p style={{ marginTop: '0.5rem' }}>
          <strong>(a)</strong> For a <strong>continuous</strong> random variable
          with density <InlineMath>{'f_X'}</InlineMath>:
        </p>
        <MathBlock>
          {`E(X) = \\int_{-\\infty}^{\\infty} t \\, f_X(t)\\,dt`}
        </MathBlock>
        <p>
          <strong>(b)</strong> For a <strong>discrete</strong> random variable
          with mass points <InlineMath>{'x_1, x_2, \\ldots'}</InlineMath> and
          probabilities <InlineMath>{'p_k = P(X = x_k)'}</InlineMath>:
        </p>
        <MathBlock>
          {`E(X) = \\sum_{k=1}^{\\infty} x_k p_k`}
        </MathBlock>
        provided the integral or series converges absolutely.
      </Callout>

      <h3>Properties of Expectation</h3>

      <p>Expectation satisfies these important properties:</p>

      <ul>
        <li><strong>Linearity:</strong> <InlineMath>{'E(aX + bY) = aE(X) + bE(Y)'}</InlineMath></li>
        <li><strong>Constants:</strong> <InlineMath>{'E(c) = c'}</InlineMath></li>
        <li><strong>Independence:</strong> If <InlineMath>X, Y</InlineMath> are independent, then <InlineMath>{'E(XY) = E(X)E(Y)'}</InlineMath></li>
      </ul>

      <h3>Expectation of a Function</h3>

      <p>
        If <InlineMath>{'Y = \\varphi(X)'}</InlineMath>, then the expectation
        can be computed directly from <InlineMath>{'f_X'}</InlineMath>:
      </p>
      <MathBlock>
        {`E(Y) = E[\\varphi(X)] = \\int_{-\\infty}^{\\infty} \\varphi(t) f_X(t)\\,dt`}
      </MathBlock>

      <p>or in the discrete case:</p>
      <MathBlock>
        {`E[\\varphi(X)] = \\sum_k \\varphi(x_k) p_k`}
      </MathBlock>

      <h3>Examples</h3>

      <p>
        <strong>Uniform distribution on <InlineMath>{'[a, b]'}</InlineMath>:</strong>
      </p>
      <MathBlock>
        {`E(X) = \\int_a^b \\frac{t}{b-a}\\,dt = \\frac{b^2 - a^2}{2(b-a)} = \\frac{a+b}{2}`}
      </MathBlock>

      <p><strong>Binomial distribution:</strong></p>
      <MathBlock>
        {`E(X) = \\sum_{k=0}^n k \\binom{n}{k} p^k q^{n-k} = np`}
      </MathBlock>

      <p><strong>Normal distribution:</strong></p>
      <MathBlock>
        {`E(X) = \\frac{1}{\\sigma\\sqrt{2\\pi}} \\int_{-\\infty}^{\\infty} t \\, e^{-[(t-m)/\\sigma]^2/2}\\,dt = m`}
      </MathBlock>

      <h3>Interpretation: Fair Games</h3>

      <p>
        In gambling, the expectation represents the average gain or loss. A
        game is <strong>fair</strong> if <InlineMath>{'E(X) = 0'}</InlineMath>,
        where <InlineMath>X</InlineMath> is the player's profit.
      </p>

      <p>
        <strong>Example (Roulette):</strong> Betting $1 on red with probability{' '}
        <InlineMath>{'18/37'}</InlineMath> of winning $1 and{' '}
        <InlineMath>{'19/37'}</InlineMath> of losing $1:
      </p>
      <MathBlock>
        {`E(X) = (+1)\\frac{18}{37} + (-1)\\frac{19}{37} = -\\frac{1}{37} \\approx -0.027`}
      </MathBlock>

      <p>The game is unfavorable to the player.</p>

      <Callout type="success">
        <strong>Key Insight:</strong> The expectation is the "center of mass" of
        a probability distribution. It represents the long-run average value of
        a random variable if the experiment is repeated many times. This
        interpretation is made precise by the Law of Large Numbers.
      </Callout>
    </LessonLayout>
  );
}
