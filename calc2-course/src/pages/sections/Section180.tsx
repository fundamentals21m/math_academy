import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section180() {
  return (
    <LessonLayout sectionId={180}>
      <h2>The Central Limit Theorem</h2>

      <p>
        The <strong>Central Limit Theorem</strong> (CLT) is one of the most
        remarkable results in all of mathematics. It explains why the normal
        distribution appears so frequently in nature.
      </p>

      <h3>Statement</h3>

      <Callout type="info">
        <strong>Theorem (Central Limit Theorem):</strong> Let{' '}
        <InlineMath>{`X_1, X_2, \\ldots, X_n`}</InlineMath> be independent
        random variables with the same distribution, expectation{' '}
        <InlineMath>m</InlineMath>, and variance{' '}
        <InlineMath>{`\\sigma^2 > 0`}</InlineMath>. Let:
        <MathBlock>
          {`S_n = X_1 + X_2 + \\cdots + X_n`}
        </MathBlock>
        Then the standardized sum:
        <MathBlock>
          {`Z_n = \\frac{S_n - nm}{\\sigma\\sqrt{n}}`}
        </MathBlock>
        converges in distribution to the standard normal:
        <MathBlock>
          {`\\lim_{n \\to \\infty} P(Z_n \\leq t) = \\Phi(t) = \\frac{1}{\\sqrt{2\\pi}} \\int_{-\\infty}^t e^{-u^2/2}\\,du`}
        </MathBlock>
      </Callout>

      <h3>Practical Form</h3>

      <p>
        For large <InlineMath>n</InlineMath>, the sum{' '}
        <InlineMath>{`S_n`}</InlineMath> is approximately normal with mean{' '}
        <InlineMath>nm</InlineMath> and variance{' '}
        <InlineMath>{`n\\sigma^2`}</InlineMath>:
      </p>
      <MathBlock>
        {`P(a < S_n \\leq b) \\approx \\Phi\\left(\\frac{b - nm}{\\sigma\\sqrt{n}}\\right) - \\Phi\\left(\\frac{a - nm}{\\sigma\\sqrt{n}}\\right)`}
      </MathBlock>

      <h3>Normal Approximation to Binomial</h3>

      <p>
        For the binomial distribution with parameters{' '}
        <InlineMath>n</InlineMath> and <InlineMath>p</InlineMath>:
      </p>
      <MathBlock>
        {`P(a \\leq X \\leq b) \\approx \\Phi\\left(\\frac{b + \\frac{1}{2} - np}{\\sqrt{npq}}\\right) - \\Phi\\left(\\frac{a - \\frac{1}{2} - np}{\\sqrt{npq}}\\right)`}
      </MathBlock>

      <p>
        The <InlineMath>{`\\pm 1/2`}</InlineMath> terms are a{' '}
        <strong>continuity correction</strong> that improves accuracy.
      </p>

      <h3>Why It's Remarkable</h3>

      <p>
        The CLT says that sums of many independent random variables are
        approximately normal, <em>regardless of the original distribution</em>.
        The individual variables could be:
      </p>
      <ul>
        <li>Discrete or continuous</li>
        <li>Symmetric or skewed</li>
        <li>Uniform, exponential, or any other distribution</li>
      </ul>

      <p>
        As long as they're independent with the same distribution and finite
        variance, their sum tends toward normality.
      </p>

      <h3>Applications</h3>

      <ul>
        <li><strong>Measurement errors:</strong> Many small independent sources sum to approximately normal error</li>
        <li><strong>Statistical inference:</strong> Sample means are approximately normal for large samples</li>
        <li><strong>Quality control:</strong> Process variations sum to normal</li>
        <li><strong>Finance:</strong> Portfolio returns aggregate many small effects</li>
      </ul>

      <h3>Example: Coin Tosses</h3>

      <p>
        Toss a fair coin 100 times. Let <InlineMath>X</InlineMath> be the
        number of heads. Then <InlineMath>{`E(X) = 50`}</InlineMath> and{' '}
        <InlineMath>{`\\sigma = 5`}</InlineMath>.
      </p>
      <MathBlock>
        {`P(45 \\leq X \\leq 55) \\approx \\Phi(1.1) - \\Phi(-1.1) \\approx 0.73`}
      </MathBlock>

      <Callout type="success">
        <strong>Key Insight:</strong> The Central Limit Theorem explains the
        ubiquity of the bell curve. Whenever a random phenomenon results from
        the sum of many small independent contributions, the normal distribution
        emerges. This is why Gauss called the normal distribution the "law of
        errors"—measurement errors arise from many small independent sources.
      </Callout>

      <h3>Looking Back</h3>

      <p>
        This chapter has developed the calculus of probabilities from random
        variables through distributions, expectations, and the fundamental limit
        theorems. Together with the axiomatic foundations from the previous
        chapter, we now have a complete mathematical theory of probability that
        connects ancient questions about games of chance to the deepest results
        of modern analysis.
      </p>
    </LessonLayout>
  );
}
