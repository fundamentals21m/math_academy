import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section159() {
  return (
    <LessonLayout sectionId={159}>
      <h2>Bernoulli Trials</h2>

      <p>
        A <strong>Bernoulli sequence of trials</strong> is one of the most
        important examples of a compound experiment. It was studied extensively
        by Jakob Bernoulli and forms the foundation for much of probability
        theory.
      </p>

      <h3>Definition</h3>

      <Callout type="info">
        <strong>Bernoulli Trials:</strong> A sequence of repeated trials
        executed under the same conditions, where each result is stochastically
        independent of all the others. Each trial has just two possible
        outcomes:
        <ul>
          <li><strong>Success</strong> with probability <InlineMath>p</InlineMath></li>
          <li><strong>Failure</strong> with probability <InlineMath>{'q = 1 - p'}</InlineMath></li>
        </ul>
      </Callout>

      <h3>Bernoulli's Formula</h3>

      <Callout type="info">
        <strong>Theorem (Bernoulli's Formula):</strong> The probability of
        exactly <InlineMath>k</InlineMath> successes in <InlineMath>n</InlineMath>{' '}
        Bernoulli trials is:
        <MathBlock>
          {'P(\\text{exactly } k \\text{ successes}) = \\binom{n}{k} p^k q^{n-k}'}
        </MathBlock>
        where <InlineMath>{'q = 1 - p'}</InlineMath> and{' '}
        <InlineMath>{'\\binom{n}{k} = \\frac{n!}{k!(n-k)!}'}</InlineMath>.
      </Callout>

      <h3>Proof</h3>

      <p>
        Consider a particular sequence of <InlineMath>n</InlineMath> results,
        represented as an <InlineMath>n</InlineMath>-tuple{' '}
        <InlineMath>{'(x_1, x_2, \\ldots, x_n)'}</InlineMath> where each{' '}
        <InlineMath>{'x_i'}</InlineMath> is either <InlineMath>S</InlineMath>{' '}
        (success) or <InlineMath>F</InlineMath> (failure).
      </p>

      <p>
        <strong>Step 1:</strong> The probability of any specific{' '}
        <InlineMath>n</InlineMath>-tuple with exactly <InlineMath>k</InlineMath>{' '}
        successes is:
      </p>
      <MathBlock>
        {'P(x_1, x_2, \\ldots, x_n) = p^k q^{n-k}'}
      </MathBlock>
      <p>
        (product of <InlineMath>k</InlineMath> factors of <InlineMath>p</InlineMath>{' '}
        and <InlineMath>n-k</InlineMath> factors of <InlineMath>q</InlineMath>).
      </p>

      <p>
        <strong>Step 2:</strong> The number of <InlineMath>n</InlineMath>-tuples
        with exactly <InlineMath>k</InlineMath> successes is{' '}
        <InlineMath>{'\\binom{n}{k}'}</InlineMath> (choosing which{' '}
        <InlineMath>k</InlineMath> positions have successes).
      </p>

      <p>
        <strong>Step 3:</strong> By additivity:
      </p>
      <MathBlock>
        {'P(\\text{exactly } k \\text{ successes}) = \\binom{n}{k} p^k q^{n-k}'}
      </MathBlock>

      <h3>Example 1: Coin Tossing</h3>

      <p>
        An unbiased coin is tossed 50 times. What is the probability of exactly
        25 heads?
      </p>

      <p>
        Here <InlineMath>n = 50</InlineMath>,{' '}
        <InlineMath>{'p = q = 1/2'}</InlineMath>, and <InlineMath>k = 25</InlineMath>:
      </p>
      <MathBlock>
        {'P(\\text{25 heads}) = \\binom{50}{25} \\left(\\frac{1}{2}\\right)^{50} = \\frac{50!}{25! \\cdot 25!} \\cdot \\frac{1}{2^{50}}'}
      </MathBlock>

      <p>
        Using logarithms, this evaluates to approximately <InlineMath>0.112</InlineMath>.
      </p>

      <h3>Example 2: At Least <InlineMath>r</InlineMath> Successes</h3>

      <p>
        What is the probability of at least <InlineMath>r</InlineMath> successes
        in <InlineMath>n</InlineMath> Bernoulli trials?
      </p>

      <p>
        Let <InlineMath>{'A_k'}</InlineMath> = "exactly <InlineMath>k</InlineMath>{' '}
        successes." Then "at least <InlineMath>r</InlineMath> successes" is:
      </p>
      <MathBlock>
        {'E = A_r \\cup A_{r+1} \\cup \\cdots \\cup A_n'}
      </MathBlock>

      <p>Since the <InlineMath>{'A_k'}</InlineMath> are disjoint:</p>
      <MathBlock>
        {'P(E) = \\sum_{k=r}^{n} \\binom{n}{k} p^k q^{n-k}'}
      </MathBlock>

      <h3>Complementary Probability</h3>

      <p>
        The probability of <strong>at most</strong>{' '}
        <InlineMath>r - 1</InlineMath> successes is:
      </p>
      <MathBlock>
        {'P(E\') = 1 - P(E) = \\sum_{k=0}^{r-1} \\binom{n}{k} p^k q^{n-k}'}
      </MathBlock>

      <h3>The Binomial Distribution</h3>

      <p>
        The probabilities <InlineMath>{'\\binom{n}{k} p^k q^{n-k}'}</InlineMath>{' '}
        for <InlineMath>k = 0, 1, \ldots, n</InlineMath> form the{' '}
        <strong>binomial distribution</strong>. Note that:
      </p>
      <MathBlock>
        {'\\sum_{k=0}^{n} \\binom{n}{k} p^k q^{n-k} = (p + q)^n = 1'}
      </MathBlock>

      <p>
        This confirms that the probabilities sum to 1, as required for a
        probability distribution.
      </p>

      <Callout type="success">
        <strong>Key Insight:</strong> Bernoulli's formula reduces the problem of
        computing probabilities in repeated independent trials to counting
        combinations. The binomial coefficient <InlineMath>{'\\binom{n}{k}'}</InlineMath>{' '}
        counts the number of ways to arrange <InlineMath>k</InlineMath> successes
        among <InlineMath>n</InlineMath> trials, while{' '}
        <InlineMath>{'p^k q^{n-k}'}</InlineMath> gives the probability of any
        specific arrangement.
      </Callout>
    </LessonLayout>
  );
}
