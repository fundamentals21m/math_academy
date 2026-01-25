import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section178() {
  return (
    <LessonLayout sectionId={178}>
      <h2>Chebyshev's Inequality</h2>

      <p>
        <strong>Chebyshev's inequality</strong> provides a universal bound on
        how far a random variable can deviate from its mean, using only the
        variance.
      </p>

      <h3>The Inequality</h3>

      <Callout type="info">
        <strong>Theorem (Chebyshev's Inequality):</strong> Let{' '}
        <InlineMath>X</InlineMath> be a random variable with finite expectation{' '}
        <InlineMath>{'E(X)'}</InlineMath> and variance{' '}
        <InlineMath>{'\\text{Var}(X)'}</InlineMath>. Then for every{' '}
        <InlineMath>{'c > 0'}</InlineMath>:
        <MathBlock>
          {`P(|X - E(X)| > c) \\leq \\frac{\\text{Var}(X)}{c^2}`}
        </MathBlock>
      </Callout>

      <h3>Proof (Continuous Case)</h3>

      <p>Let <InlineMath>{'m = E(X)'}</InlineMath>. Then:</p>
      <MathBlock>
        {`\\text{Var}(X) = \\int_{-\\infty}^{\\infty} (t - m)^2 f_X(t)\\,dt`}
      </MathBlock>

      <p>
        Restricting to the region where{' '}
        <InlineMath>{'|t - m| > c'}</InlineMath>:
      </p>
      <MathBlock>
        {`\\text{Var}(X) \\geq \\int_{|t-m| > c} (t - m)^2 f_X(t)\\,dt \\geq c^2 \\int_{|t-m| > c} f_X(t)\\,dt = c^2 P(|X - m| > c)`}
      </MathBlock>

      <h3>Standard Deviation Form</h3>

      <p>
        Setting <InlineMath>{'c = k\\sigma'}</InlineMath> where{' '}
        <InlineMath>{'\\sigma = \\sqrt{\\text{Var}(X)}'}</InlineMath>:
      </p>
      <MathBlock>
        {`P(|X - E(X)| > k\\sigma) \\leq \\frac{1}{k^2}`}
      </MathBlock>

      <p>Important special cases:</p>
      <ul>
        <li><InlineMath>{'k = 2'}</InlineMath>: At most 25% of probability lies more than 2 standard deviations from the mean</li>
        <li><InlineMath>{'k = 3'}</InlineMath>: At most 11.1% lies more than 3 standard deviations away</li>
        <li><InlineMath>{'k = 10'}</InlineMath>: At most 1% lies more than 10 standard deviations away</li>
      </ul>

      <h3>Comparison with Normal Distribution</h3>

      <p>
        Chebyshev's inequality is very general but often weak. For the normal
        distribution, the actual probabilities are much smaller:
      </p>

      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ccc', padding: '0.5rem' }}>Deviations</th>
            <th style={{ border: '1px solid #ccc', padding: '0.5rem' }}>Chebyshev Bound</th>
            <th style={{ border: '1px solid #ccc', padding: '0.5rem' }}>Normal Distribution</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ccc', padding: '0.5rem' }}><InlineMath>{'2\\sigma'}</InlineMath></td>
            <td style={{ border: '1px solid #ccc', padding: '0.5rem' }}>25%</td>
            <td style={{ border: '1px solid #ccc', padding: '0.5rem' }}>4.6%</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ccc', padding: '0.5rem' }}><InlineMath>{'3\\sigma'}</InlineMath></td>
            <td style={{ border: '1px solid #ccc', padding: '0.5rem' }}>11.1%</td>
            <td style={{ border: '1px solid #ccc', padding: '0.5rem' }}>0.3%</td>
          </tr>
        </tbody>
      </table>

      <h3>Example: Testing a Coin</h3>

      <p>
        To test if a coin is fair, toss it <InlineMath>{'n = 10000'}</InlineMath>{' '}
        times. For a fair coin, the number of heads{' '}
        <InlineMath>X</InlineMath> has <InlineMath>{'E(X) = 5000'}</InlineMath>{' '}
        and <InlineMath>{'\\sigma = \\sqrt{npq} = 50'}</InlineMath>.
      </p>

      <p>
        Using <InlineMath>{'3\\sigma = 150'}</InlineMath>, the probability of
        getting fewer than 4850 or more than 5150 heads is about 0.003 for a
        fair coin. If we observe a count outside this range, we have evidence
        the coin is not fair.
      </p>

      <Callout type="success">
        <strong>Key Insight:</strong> Chebyshev's inequality is remarkable
        because it applies to <em>any</em> distribution with finite variance.
        It tells us that a small variance guarantees concentration near the
        mean, regardless of the shape of the distribution. This universality
        makes it a powerful theoretical tool.
      </Callout>
    </LessonLayout>
  );
}
