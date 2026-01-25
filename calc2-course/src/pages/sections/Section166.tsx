import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section166() {
  return (
    <LessonLayout sectionId={166}>
      <h2>Discrete Distributions</h2>

      <p>
        A random variable is <strong>discrete</strong> if its possible values
        form a finite or countably infinite set. Discrete distributions are
        characterized by their <strong>probability mass functions</strong>.
      </p>

      <h3>Probability Mass Function</h3>

      <Callout type="info">
        <strong>Definition:</strong> Let <InlineMath>X</InlineMath> be a discrete
        random variable with possible values{' '}
        <InlineMath>{'x_1, x_2, x_3, \\ldots'}</InlineMath>. The{' '}
        <strong>probability mass function</strong> (pmf) of{' '}
        <InlineMath>X</InlineMath> is the function <InlineMath>p</InlineMath>{' '}
        defined by:
        <MathBlock>
          {`p(x_k) = P(X = x_k)`}
        </MathBlock>
        The values <InlineMath>{'x_k'}</InlineMath> with{' '}
        <InlineMath>{'p(x_k) > 0'}</InlineMath> are called the{' '}
        <strong>mass points</strong> of the distribution.
      </Callout>

      <h3>Properties of Mass Functions</h3>

      <p>A probability mass function satisfies:</p>
      <ol>
        <li><InlineMath>{'p(x_k) \\geq 0'}</InlineMath> for all <InlineMath>k</InlineMath></li>
        <li><InlineMath>{'\\sum_k p(x_k) = 1'}</InlineMath></li>
      </ol>

      <p>The distribution function is obtained by summation:</p>
      <MathBlock>
        {`F(t) = \\sum_{x_k \\leq t} p(x_k)`}
      </MathBlock>

      <h3>Important Discrete Distributions</h3>

      <p><strong>Binomial Distribution:</strong></p>
      <MathBlock>
        {`P(X = k) = \\binom{n}{k} p^k (1-p)^{n-k}, \\quad k = 0, 1, \\ldots, n`}
      </MathBlock>
      <p>
        Models the number of successes in <InlineMath>n</InlineMath> independent
        Bernoulli trials with success probability <InlineMath>p</InlineMath>.
      </p>

      <p><strong>Geometric Distribution:</strong></p>
      <MathBlock>
        {`P(X = k) = (1-p)^{k-1} p, \\quad k = 1, 2, 3, \\ldots`}
      </MathBlock>
      <p>
        Models the number of trials until the first success.
      </p>

      <p><strong>Poisson Distribution:</strong></p>
      <MathBlock>
        {`P(X = k) = \\frac{\\lambda^k e^{-\\lambda}}{k!}, \\quad k = 0, 1, 2, \\ldots`}
      </MathBlock>
      <p>
        Models the number of rare events in a fixed time or space, where{' '}
        <InlineMath>{'\\lambda > 0'}</InlineMath> is the expected count.
      </p>

      <h3>Example: The Poisson Distribution</h3>

      <p>
        Let's verify that the Poisson probabilities sum to 1:
      </p>
      <MathBlock>
        {`\\sum_{k=0}^{\\infty} \\frac{\\lambda^k e^{-\\lambda}}{k!} = e^{-\\lambda} \\sum_{k=0}^{\\infty} \\frac{\\lambda^k}{k!} = e^{-\\lambda} \\cdot e^{\\lambda} = 1`}
      </MathBlock>

      <p>
        The Poisson distribution arises as a limit of the binomial distribution
        when <InlineMath>n</InlineMath> is large, <InlineMath>p</InlineMath> is
        small, and <InlineMath>{'np \\approx \\lambda'}</InlineMath>.
      </p>

      <h3>Computing Probabilities</h3>

      <p>
        For discrete distributions, probabilities of events are computed by
        summing the mass function over relevant points:
      </p>
      <MathBlock>
        {`P(X \\in A) = \\sum_{x_k \\in A} p(x_k)`}
      </MathBlock>

      <p>For example, if <InlineMath>X</InlineMath> has a Poisson distribution:</p>
      <MathBlock>
        {`P(X \\geq 2) = 1 - P(X = 0) - P(X = 1) = 1 - e^{-\\lambda} - \\lambda e^{-\\lambda}`}
      </MathBlock>

      <Callout type="success">
        <strong>Key Insight:</strong> Discrete distributions arise naturally when
        counting outcomes. The probability mass function assigns a positive
        probability to each possible count, and these probabilities sum to 1.
        In the calculus of probabilities, sums replace integrals when working
        with discrete distributions.
      </Callout>
    </LessonLayout>
  );
}
