import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section179() {
  return (
    <LessonLayout sectionId={179}>
      <h2>Laws of Large Numbers</h2>

      <p>
        The <strong>laws of large numbers</strong> make precise the intuition
        that averages of many random observations stabilize near the expected
        value.
      </p>

      <h3>The Setting</h3>

      <p>
        Consider tossing a fair coin many times. If{' '}
        <InlineMath>{'h(n)'}</InlineMath> is the number of heads in{' '}
        <InlineMath>n</InlineMath> tosses, we expect{' '}
        <InlineMath>{'h(n)/n \\approx 1/2'}</InlineMath> for large{' '}
        <InlineMath>n</InlineMath>.
      </p>

      <p>
        However, we cannot prove{' '}
        <InlineMath>{'\\lim_{n \\to \\infty} h(n)/n = 1/2'}</InlineMath> in the
        ordinary sense—it's possible (though very unlikely) for every toss to
        be heads! Instead, we prove a probabilistic limit.
      </p>

      <h3>Law of Large Numbers for Bernoulli Trials</h3>

      <p>
        Let <InlineMath>X</InlineMath> count successes in{' '}
        <InlineMath>n</InlineMath> independent Bernoulli trials with success
        probability <InlineMath>p</InlineMath>. By Chebyshev's inequality:
      </p>
      <MathBlock>
        {`P\\left(\\left|\\frac{X}{n} - p\\right| > \\epsilon\\right) \\leq \\frac{pq}{n\\epsilon^2}`}
      </MathBlock>

      <p>Taking <InlineMath>{'n \\to \\infty'}</InlineMath>:</p>
      <MathBlock>
        {`\\lim_{n \\to \\infty} P\\left(\\left|\\frac{X}{n} - p\\right| > \\epsilon\\right) = 0 \\quad \\text{for every } \\epsilon > 0`}
      </MathBlock>

      <h3>The Weak Law of Large Numbers</h3>

      <Callout type="info">
        <strong>Theorem (Weak Law of Large Numbers):</strong> Let{' '}
        <InlineMath>{'X_1, X_2, \\ldots, X_n'}</InlineMath> be independent
        random variables with the same expectation{' '}
        <InlineMath>m</InlineMath> and variance{' '}
        <InlineMath>{'\\sigma^2'}</InlineMath>. Let{' '}
        <InlineMath>{'\\bar{X} = \\frac{1}{n}\\sum_{k=1}^n X_k'}</InlineMath>.
        Then for every <InlineMath>{'\\epsilon > 0'}</InlineMath>:
        <MathBlock>
          {`\\lim_{n \\to \\infty} P(|\\bar{X} - m| > \\epsilon) = 0`}
        </MathBlock>
        Equivalently: <InlineMath>{'\\lim_{n \\to \\infty} P(|\\bar{X} - m| \\leq \\epsilon) = 1'}</InlineMath>
      </Callout>

      <h3>Proof</h3>

      <p>
        We have <InlineMath>{'E(\\bar{X}) = m'}</InlineMath> and{' '}
        <InlineMath>{'\\text{Var}(\\bar{X}) = \\sigma^2/n'}</InlineMath>. By
        Chebyshev's inequality:
      </p>
      <MathBlock>
        {`P(|\\bar{X} - m| > \\epsilon) \\leq \\frac{\\sigma^2}{n\\epsilon^2} \\to 0 \\quad \\text{as } n \\to \\infty`}
      </MathBlock>

      <h3>Interpretation</h3>

      <p>
        The Weak Law says that the probability of{' '}
        <InlineMath>{'\\bar{X}'}</InlineMath> being far from{' '}
        <InlineMath>m</InlineMath> becomes arbitrarily small as{' '}
        <InlineMath>n</InlineMath> increases. This is{' '}
        <strong>convergence in probability</strong>.
      </p>

      <p>
        It justifies using sample averages to estimate population means, and
        explains why the relative frequency of an event approaches its
        probability over many trials.
      </p>

      <h3>The Strong Law</h3>

      <p>
        There is also a <strong>Strong Law of Large Numbers</strong>, which
        states that <InlineMath>{'\\bar{X} \\to m'}</InlineMath> with
        probability 1 (almost sure convergence). This is a stronger result
        requiring more sophisticated tools.
      </p>

      <Callout type="success">
        <strong>Key Insight:</strong> The Law of Large Numbers provides the
        mathematical foundation for probability's interpretation as long-run
        relative frequency. It justifies Monte Carlo methods, statistical
        estimation, and the entire edifice of applied statistics. The sample
        mean is a consistent estimator of the population mean.
      </Callout>
    </LessonLayout>
  );
}
