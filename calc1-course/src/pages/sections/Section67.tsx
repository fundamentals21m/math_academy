import { LessonLayout } from '../../components/layout/LessonLayout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';

export default function Section67() {
  return (
    <LessonLayout sectionId={67}>
      <p>
        The convergence tests we've studied apply to series with positive terms.
        <strong> Alternating series</strong>, whose terms alternate in sign, have
        special properties that allow them to converge even when the corresponding
        positive series diverges.
      </p>

      <h2>Alternating Series</h2>

      <Callout type="definition" title="Alternating Series">
        <p>
          An <strong>alternating series</strong> has terms that alternate between
          positive and negative:
        </p>
        <MathBlock>{`\\sum_{n=1}^{\\infty} (-1)^{n+1} b_n = b_1 - b_2 + b_3 - b_4 + \\cdots`}</MathBlock>
        <p>
          or <InlineMath>{`\\sum (-1)^n b_n = -b_1 + b_2 - b_3 + \\cdots`}</InlineMath>,
          where <InlineMath>{`b_n > 0`}</InlineMath>.
        </p>
      </Callout>

      <Callout type="example" title="Example 1: Common Alternating Series">
        <ul className="list-disc pl-6 space-y-1">
          <li><InlineMath>{`\\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1}}{n} = 1 - \\frac{1}{2} + \\frac{1}{3} - \\frac{1}{4} + \\cdots`}</InlineMath> (alternating harmonic)</li>
          <li><InlineMath>{`\\sum_{n=0}^{\\infty} \\frac{(-1)^n}{n!} = 1 - 1 + \\frac{1}{2} - \\frac{1}{6} + \\cdots = \\frac{1}{e}`}</InlineMath></li>
          <li><InlineMath>{`\\sum_{n=0}^{\\infty} \\frac{(-1)^n}{2n+1} = 1 - \\frac{1}{3} + \\frac{1}{5} - \\frac{1}{7} + \\cdots = \\frac{\\pi}{4}`}</InlineMath></li>
        </ul>
      </Callout>

      <h2>The Alternating Series Test</h2>

      <Callout type="theorem" title="Alternating Series Test (Leibniz Test)">
        <p>
          The alternating series <InlineMath>{`\\sum (-1)^{n+1} b_n`}</InlineMath> converges if:
        </p>
        <ol className="list-decimal pl-6 space-y-1">
          <li><InlineMath>{`b_n > 0`}</InlineMath> for all <InlineMath>{`n`}</InlineMath></li>
          <li><InlineMath>{`b_{n+1} \\leq b_n`}</InlineMath> (terms decrease in absolute value)</li>
          <li><InlineMath>{`\\lim_{n \\to \\infty} b_n = 0`}</InlineMath></li>
        </ol>
      </Callout>

      <Callout type="info" title="Intuition">
        <p>
          The partial sums oscillate around the limit. Each positive term overshoots,
          then the next negative term corrects back. As terms shrink to zero, the
          oscillations dampen and the partial sums converge.
        </p>
      </Callout>

      <Callout type="example" title="Example 2: Alternating Harmonic Series">
        <p>Show that <InlineMath>{`\\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1}}{n}`}</InlineMath> converges.</p>
        <p><strong>Solution:</strong></p>
        <p>Let <InlineMath>{`b_n = \\frac{1}{n}`}</InlineMath>. Check the conditions:</p>
        <ol className="list-decimal pl-6 space-y-1">
          <li><InlineMath>{`b_n = \\frac{1}{n} > 0`}</InlineMath> ✓</li>
          <li><InlineMath>{`b_{n+1} = \\frac{1}{n+1} < \\frac{1}{n} = b_n`}</InlineMath> ✓</li>
          <li><InlineMath>{`\\lim_{n \\to \\infty} \\frac{1}{n} = 0`}</InlineMath> ✓</li>
        </ol>
        <p>
          By the alternating series test, the series converges.
          (It converges to <InlineMath>{`\\ln 2`}</InlineMath>.)
        </p>
      </Callout>

      <Callout type="example" title="Example 3: Another Alternating Series">
        <p>Does <InlineMath>{`\\sum_{n=1}^{\\infty} \\frac{(-1)^n n}{n+1}`}</InlineMath> converge?</p>
        <p><strong>Solution:</strong></p>
        <p>Check if <InlineMath>{`b_n = \\frac{n}{n+1} \\to 0`}</InlineMath>:</p>
        <MathBlock>{`\\lim_{n \\to \\infty} \\frac{n}{n+1} = 1 \\neq 0`}</MathBlock>
        <p>
          The limit is not zero, so the series <strong>diverges</strong> by the
          divergence test (terms don't approach 0).
        </p>
      </Callout>

      <Callout type="example" title="Example 4: Checking Decreasing">
        <p>Does <InlineMath>{`\\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1}}{n^2 + 1}`}</InlineMath> converge?</p>
        <p><strong>Solution:</strong></p>
        <p>Let <InlineMath>{`b_n = \\frac{1}{n^2 + 1}`}</InlineMath>.</p>
        <ol className="list-decimal pl-6 space-y-1">
          <li><InlineMath>{`b_n > 0`}</InlineMath> ✓</li>
          <li><InlineMath>{`b_{n+1} = \\frac{1}{(n+1)^2 + 1} < \\frac{1}{n^2 + 1} = b_n`}</InlineMath> ✓ (since denominator increases)</li>
          <li><InlineMath>{`\\lim_{n \\to \\infty} \\frac{1}{n^2+1} = 0`}</InlineMath> ✓</li>
        </ol>
        <p>The series converges by the alternating series test.</p>
      </Callout>

      <h2>Error Estimation</h2>

      <Callout type="theorem" title="Alternating Series Remainder">
        <p>
          If an alternating series <InlineMath>{`\\sum (-1)^{n+1} b_n`}</InlineMath> satisfies the
          conditions of the Leibniz test and converges to <InlineMath>{`S`}</InlineMath>, then:
        </p>
        <MathBlock>{`|S - S_N| \\leq b_{N+1}`}</MathBlock>
        <p>
          The error in using <InlineMath>{`S_N`}</InlineMath> to approximate <InlineMath>{`S`}</InlineMath> is
          at most the absolute value of the first omitted term.
        </p>
      </Callout>

      <Callout type="example" title="Example 5: Error Bound">
        <p>
          Approximate <InlineMath>{`\\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1}}{n!}`}</InlineMath> with
          error less than 0.001.
        </p>
        <p><strong>Solution:</strong></p>
        <p>We need <InlineMath>{`b_{N+1} = \\frac{1}{(N+1)!} < 0.001`}</InlineMath>.</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><InlineMath>{`6! = 720`}</InlineMath>, so <InlineMath>{`1/720 \\approx 0.00139`}</InlineMath></li>
          <li><InlineMath>{`7! = 5040`}</InlineMath>, so <InlineMath>{`1/5040 \\approx 0.0002`}</InlineMath></li>
        </ul>
        <p>We need <InlineMath>{`N = 6`}</InlineMath> terms:</p>
        <MathBlock>{`S_6 = 1 - 1 + \\frac{1}{2} - \\frac{1}{6} + \\frac{1}{24} - \\frac{1}{120} + \\frac{1}{720}`}</MathBlock>
        <MathBlock>{`\\approx 0.368056`}</MathBlock>
        <p>
          (The exact value is <InlineMath>{`1/e \\approx 0.367879`}</InlineMath>.)
        </p>
      </Callout>

      <h2>Absolute and Conditional Convergence</h2>

      <Callout type="definition" title="Absolute Convergence">
        <p>
          A series <InlineMath>{`\\sum a_n`}</InlineMath> <strong>converges absolutely</strong> if
          <InlineMath>{`\\sum |a_n|`}</InlineMath> converges.
        </p>
      </Callout>

      <Callout type="definition" title="Conditional Convergence">
        <p>
          A series <strong>converges conditionally</strong> if it converges but
          does not converge absolutely (i.e., <InlineMath>{`\\sum a_n`}</InlineMath> converges
          but <InlineMath>{`\\sum |a_n|`}</InlineMath> diverges).
        </p>
      </Callout>

      <Callout type="theorem" title="Absolute Convergence Implies Convergence">
        <p>
          If <InlineMath>{`\\sum |a_n|`}</InlineMath> converges, then <InlineMath>{`\\sum a_n`}</InlineMath> converges.
        </p>
        <p className="mt-2">
          In other words: absolute convergence ⟹ convergence.
        </p>
      </Callout>

      <Callout type="info" title="The Converse is False">
        <p>
          Convergence does NOT imply absolute convergence. The alternating harmonic
          series is the classic counterexample.
        </p>
      </Callout>

      <Callout type="example" title="Example 6: Classifying Convergence">
        <p>Classify the convergence of <InlineMath>{`\\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1}}{n}`}</InlineMath>.</p>
        <p><strong>Solution:</strong></p>
        <p>
          The series converges by the alternating series test (Example 2).
        </p>
        <p>
          Check absolute convergence: <InlineMath>{`\\sum \\left|\\frac{(-1)^{n+1}}{n}\\right| = \\sum \\frac{1}{n}`}</InlineMath>
          is the harmonic series, which diverges.
        </p>
        <p>
          Therefore, the alternating harmonic series <strong>converges conditionally</strong>.
        </p>
      </Callout>

      <Callout type="example" title="Example 7: Absolute Convergence">
        <p>Classify the convergence of <InlineMath>{`\\sum_{n=1}^{\\infty} \\frac{(-1)^n}{n^2}`}</InlineMath>.</p>
        <p><strong>Solution:</strong></p>
        <p>
          Check absolute convergence: <InlineMath>{`\\sum \\left|\\frac{(-1)^n}{n^2}\\right| = \\sum \\frac{1}{n^2}`}</InlineMath>
          converges (p-series with p = 2).
        </p>
        <p>
          Since it converges absolutely, it <strong>converges absolutely</strong>.
          (We don't even need the alternating series test!)
        </p>
      </Callout>

      <Callout type="example" title="Example 8: Another Classification">
        <p>Classify <InlineMath>{`\\sum_{n=1}^{\\infty} \\frac{(-1)^n}{\\sqrt{n}}`}</InlineMath>.</p>
        <p><strong>Solution:</strong></p>
        <p><strong>Convergence:</strong> Let <InlineMath>{`b_n = 1/\\sqrt{n}`}</InlineMath>.</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><InlineMath>{`b_n > 0`}</InlineMath> ✓</li>
          <li><InlineMath>{`b_{n+1} < b_n`}</InlineMath> ✓</li>
          <li><InlineMath>{`b_n \\to 0`}</InlineMath> ✓</li>
        </ul>
        <p>Converges by alternating series test.</p>
        <p><strong>Absolute convergence:</strong> <InlineMath>{`\\sum \\frac{1}{\\sqrt{n}}`}</InlineMath> is a p-series with p = 1/2 &lt; 1, so it diverges.</p>
        <p>The series <strong>converges conditionally</strong>.</p>
      </Callout>

      <h2>Rearrangements</h2>

      <Callout type="theorem" title="Rearrangement Theorem">
        <p>
          If <InlineMath>{`\\sum a_n`}</InlineMath> converges <strong>absolutely</strong>,
          any rearrangement of the terms converges to the same sum.
        </p>
        <p className="mt-2">
          If <InlineMath>{`\\sum a_n`}</InlineMath> converges <strong>conditionally</strong>,
          the terms can be rearranged to converge to any value, or to diverge!
        </p>
      </Callout>

      <Callout type="info" title="Riemann's Rearrangement Theorem">
        <p>
          This surprising result shows that conditional convergence is "fragile."
          The order of terms matters! For absolutely convergent series, the sum is
          independent of order.
        </p>
      </Callout>

      <h2>General Series with Mixed Signs</h2>

      <Callout type="info" title="Strategy for Mixed-Sign Series">
        <p>For a series with terms of varying signs:</p>
        <ol className="list-decimal pl-6 space-y-1">
          <li>First, check if <InlineMath>{`\\sum |a_n|`}</InlineMath> converges (absolute convergence)</li>
          <li>If yes, the original series converges absolutely</li>
          <li>If no, look for alternating structure or other patterns</li>
          <li>Apply the alternating series test if applicable</li>
        </ol>
      </Callout>

      <Callout type="example" title="Example 9: Using Absolute Convergence">
        <p>Does <InlineMath>{`\\sum_{n=1}^{\\infty} \\frac{\\sin n}{n^2}`}</InlineMath> converge?</p>
        <p><strong>Solution:</strong></p>
        <p>The terms aren't strictly alternating, but:</p>
        <MathBlock>{`\\left|\\frac{\\sin n}{n^2}\\right| \\leq \\frac{1}{n^2}`}</MathBlock>
        <p>
          Since <InlineMath>{`\\sum \\frac{1}{n^2}`}</InlineMath> converges, by comparison,
          <InlineMath>{`\\sum \\left|\\frac{\\sin n}{n^2}\\right|`}</InlineMath> converges.
        </p>
        <p>
          Therefore <InlineMath>{`\\sum \\frac{\\sin n}{n^2}`}</InlineMath> <strong>converges absolutely</strong>.
        </p>
      </Callout>

      <Callout type="example" title="Example 10: Ratio Test for Absolute Convergence">
        <p>Does <InlineMath>{`\\sum_{n=1}^{\\infty} \\frac{(-1)^n n}{2^n}`}</InlineMath> converge?</p>
        <p><strong>Solution:</strong></p>
        <p>Test for absolute convergence using the ratio test:</p>
        <MathBlock>{`\\frac{|a_{n+1}|}{|a_n|} = \\frac{(n+1)/2^{n+1}}{n/2^n} = \\frac{n+1}{2n} \\to \\frac{1}{2}`}</MathBlock>
        <p>
          Since <InlineMath>{`\\frac{1}{2} < 1`}</InlineMath>, the series converges absolutely.
        </p>
      </Callout>

      <h2>Summary Table</h2>

      <Callout type="info" title="Classification of Series">
        <div className="overflow-x-auto mt-2">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-dark-700">
                <th className="text-left p-2"><InlineMath>{`\\sum |a_n|`}</InlineMath></th>
                <th className="text-left p-2"><InlineMath>{`\\sum a_n`}</InlineMath></th>
                <th className="text-left p-2">Classification</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-dark-800">
                <td className="p-2">Converges</td>
                <td className="p-2">Converges</td>
                <td className="p-2">Absolutely convergent</td>
              </tr>
              <tr className="border-b border-dark-800">
                <td className="p-2">Diverges</td>
                <td className="p-2">Converges</td>
                <td className="p-2">Conditionally convergent</td>
              </tr>
              <tr>
                <td className="p-2">Diverges</td>
                <td className="p-2">Diverges</td>
                <td className="p-2">Divergent</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-2">
          Note: If <InlineMath>{`\\sum |a_n|`}</InlineMath> converges, <InlineMath>{`\\sum a_n`}</InlineMath> must converge.
        </p>
      </Callout>

      <h2>Summary</h2>
      <ul>
        <li>
          <strong>Alternating series:</strong> Terms alternate in sign
        </li>
        <li>
          <strong>Leibniz test:</strong> If <InlineMath>{`b_n \\downarrow 0`}</InlineMath>, then <InlineMath>{`\\sum (-1)^{n+1} b_n`}</InlineMath> converges
        </li>
        <li>
          <strong>Error bound:</strong> <InlineMath>{`|S - S_N| \\leq b_{N+1}`}</InlineMath>
        </li>
        <li>
          <strong>Absolute convergence:</strong> <InlineMath>{`\\sum |a_n|`}</InlineMath> converges
        </li>
        <li>
          <strong>Conditional convergence:</strong> <InlineMath>{`\\sum a_n`}</InlineMath> converges but <InlineMath>{`\\sum |a_n|`}</InlineMath> diverges
        </li>
        <li>
          <strong>Key fact:</strong> Absolute convergence ⟹ convergence (not conversely)
        </li>
        <li>
          <strong>Rearrangements:</strong> Only preserve sums for absolutely convergent series
        </li>
      </ul>
    </LessonLayout>
  );
}
