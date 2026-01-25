import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section160() {
  return (
    <LessonLayout sectionId={160}>
      <h2>The Most Probable Number of Successes</h2>

      <p>
        Given <InlineMath>n</InlineMath> Bernoulli trials with success
        probability <InlineMath>p</InlineMath>, which value of{' '}
        <InlineMath>k</InlineMath> maximizes the probability of exactly{' '}
        <InlineMath>k</InlineMath> successes?
      </p>

      <h3>Motivating Problem</h3>

      <p>
        A pair of fair dice is rolled 28 times. What is the most probable
        number of sevens?
      </p>

      <p>
        The probability of rolling a seven is <InlineMath>{'p = 1/6'}</InlineMath>.
        Let <InlineMath>f(k)</InlineMath> denote the probability of exactly{' '}
        <InlineMath>k</InlineMath> sevens in 28 tosses:
      </p>
      <MathBlock>
        {'f(k) = \\binom{28}{k} \\left(\\frac{1}{6}\\right)^k \\left(\\frac{5}{6}\\right)^{28-k}'}
      </MathBlock>

      <p>
        We want to find which value(s) of <InlineMath>k</InlineMath> in{' '}
        <InlineMath>{'\\{0, 1, 2, \\ldots, 28\\}'}</InlineMath> maximize{' '}
        <InlineMath>f(k)</InlineMath>.
      </p>

      <h3>Main Theorem</h3>

      <Callout type="info">
        <strong>Theorem:</strong> Given an integer <InlineMath>{'n \\geq 1'}</InlineMath>{' '}
        and a real <InlineMath>p</InlineMath> with <InlineMath>{'0 < p < 1'}</InlineMath>,
        consider:
        <MathBlock>
          {'f(k) = \\binom{n}{k} p^k (1-p)^{n-k}, \\quad k = 0, 1, \\ldots, n'}
        </MathBlock>
        <p style={{ marginTop: '0.5rem', marginBottom: '0.5rem' }}>
          <strong>(a)</strong> If <InlineMath>{'(n+1)p'}</InlineMath> is{' '}
          <strong>not</strong> an integer, the maximum occurs for exactly one{' '}
          <InlineMath>k</InlineMath>:
        </p>
        <MathBlock>
          {'k = \\lfloor (n+1)p \\rfloor'}
        </MathBlock>
        <p style={{ marginTop: '0.5rem', marginBottom: 0 }}>
          <strong>(b)</strong> If <InlineMath>{'(n+1)p'}</InlineMath> is an
          integer, the maximum occurs for exactly two values:
        </p>
        <MathBlock>
          {'k = (n+1)p \\quad \\text{and} \\quad k = (n+1)p - 1'}
        </MathBlock>
      </Callout>

      <h3>Proof Strategy</h3>

      <p>
        To study the behavior of <InlineMath>f(k)</InlineMath>, consider the
        ratio of consecutive terms:
      </p>
      <MathBlock>
        {'r(k) = \\frac{f(k)}{f(k+1)} = \\frac{k+1}{n-k} \\cdot \\frac{1-p}{p}'}
      </MathBlock>

      <p>
        Key observation: <InlineMath>r(k)</InlineMath> is strictly increasing
        in <InlineMath>k</InlineMath>. This means:
      </p>
      <ul>
        <li>If <InlineMath>{'r(k) < 1'}</InlineMath>, then <InlineMath>{'f(k) < f(k+1)'}</InlineMath> (increasing)</li>
        <li>If <InlineMath>{'r(k) > 1'}</InlineMath>, then <InlineMath>{'f(k) > f(k+1)'}</InlineMath> (decreasing)</li>
        <li>If <InlineMath>{'r(k) = 1'}</InlineMath>, then <InlineMath>{'f(k) = f(k+1)'}</InlineMath> (equal)</li>
      </ul>

      <p>
        The proof considers six cases based on where <InlineMath>r(k)</InlineMath>{' '}
        crosses the value 1.
      </p>

      <h3>Example 1: Dice Rolling</h3>

      <p>
        For the problem of rolling 28 dice looking for sevens:
      </p>
      <ul>
        <li><InlineMath>n = 28</InlineMath>, <InlineMath>{'p = 1/6'}</InlineMath></li>
        <li><InlineMath>{'(n+1)p = 29/6 \\approx 4.83'}</InlineMath></li>
      </ul>

      <p>
        Since <InlineMath>29/6</InlineMath> is not an integer, the maximum
        occurs uniquely at:
      </p>
      <MathBlock>
        {'k = \\lfloor 29/6 \\rfloor = 4'}
      </MathBlock>

      <p>
        <strong>Note:</strong> If the dice were rolled 29 times, then{' '}
        <InlineMath>{'(n+1)p = 30/6 = 5'}</InlineMath> is an integer, so the
        maximum would occur at both <InlineMath>k = 4</InlineMath> and{' '}
        <InlineMath>k = 5</InlineMath>.
      </p>

      <h3>Example 2: Finding Minimum Trials</h3>

      <p>
        Find the smallest <InlineMath>n</InlineMath> such that if a pair of
        fair dice is thrown <InlineMath>n</InlineMath> times, the probability
        of exactly four sevens is at least as large as any other number of sevens.
      </p>

      <p>
        We need the maximum of <InlineMath>f(k)</InlineMath> to occur when{' '}
        <InlineMath>k = 4</InlineMath>. With <InlineMath>{'p = 1/6'}</InlineMath>,
        this requires either:
      </p>
      <ul>
        <li><InlineMath>{'\\lfloor (n+1)p \\rfloor = 4'}</InlineMath></li>
        <li><InlineMath>{'(n+1)p = 4'}</InlineMath> (integer case)</li>
        <li><InlineMath>{'(n+1)p - 1 = 4'}</InlineMath> (integer case)</li>
      </ul>

      <p>
        The smallest <InlineMath>n</InlineMath> satisfying any of these is{' '}
        <InlineMath>n = 23</InlineMath>.
      </p>

      <h3>Interpretation</h3>

      <p>
        The most probable number of successes in <InlineMath>n</InlineMath>{' '}
        Bernoulli trials is approximately <InlineMath>np</InlineMath>, the{' '}
        <strong>expected</strong> number of successes. More precisely:
      </p>
      <MathBlock>
        {'np - q \\leq k^* \\leq np + p'}
      </MathBlock>
      <p>
        where <InlineMath>{'k^*'}</InlineMath> is the most probable value.
      </p>

      <Callout type="success">
        <strong>Key Insight:</strong> The binomial distribution is unimodal
        (single peak) and the mode is located at or very near{' '}
        <InlineMath>np</InlineMath>, the "expected" number of successes. As{' '}
        <InlineMath>n</InlineMath> increases, the distribution becomes
        increasingly concentrated around this value (a preview of the Law of
        Large Numbers).
      </Callout>
    </LessonLayout>
  );
}
