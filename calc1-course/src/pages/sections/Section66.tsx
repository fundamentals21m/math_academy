import { LessonLayout } from '../../components/layout/LessonLayout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';

export default function Section66() {
  return (
    <LessonLayout sectionId={66}>
      <p>
        Determining whether a series converges often requires more sophisticated
        techniques than computing partial sums directly. This section presents
        the main convergence tests for series with positive terms.
      </p>

      <h2>Comparison Test</h2>

      <Callout type="theorem" title="Direct Comparison Test">
        <p>Suppose <InlineMath>{`0 \\leq a_n \\leq b_n`}</InlineMath> for all <InlineMath>{`n`}</InlineMath>.</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>If <InlineMath>{`\\sum b_n`}</InlineMath> converges, then <InlineMath>{`\\sum a_n`}</InlineMath> converges</li>
          <li>If <InlineMath>{`\\sum a_n`}</InlineMath> diverges, then <InlineMath>{`\\sum b_n`}</InlineMath> diverges</li>
        </ul>
      </Callout>

      <Callout type="info" title="Strategy">
        <p>
          To show convergence, find a larger convergent series. To show divergence,
          find a smaller divergent series.
        </p>
      </Callout>

      <Callout type="example" title="Example 1: Comparison with Geometric">
        <p>Does <InlineMath>{`\\sum_{n=1}^{\\infty} \\frac{1}{2^n + 1}`}</InlineMath> converge?</p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`\\frac{1}{2^n + 1} < \\frac{1}{2^n}`}</MathBlock>
        <p>
          Since <InlineMath>{`\\sum \\frac{1}{2^n}`}</InlineMath> is a convergent geometric series,
          by comparison, <InlineMath>{`\\sum \\frac{1}{2^n + 1}`}</InlineMath> converges.
        </p>
      </Callout>

      <Callout type="example" title="Example 2: Comparison with Harmonic">
        <p>Does <InlineMath>{`\\sum_{n=2}^{\\infty} \\frac{1}{\\ln n}`}</InlineMath> converge?</p>
        <p><strong>Solution:</strong></p>
        <p>For <InlineMath>{`n \\geq 2`}</InlineMath>, <InlineMath>{`\\ln n < n`}</InlineMath>, so:</p>
        <MathBlock>{`\\frac{1}{\\ln n} > \\frac{1}{n}`}</MathBlock>
        <p>
          Since <InlineMath>{`\\sum \\frac{1}{n}`}</InlineMath> diverges, by comparison,
          <InlineMath>{`\\sum \\frac{1}{\\ln n}`}</InlineMath> diverges.
        </p>
      </Callout>

      <h2>Limit Comparison Test</h2>

      <Callout type="theorem" title="Limit Comparison Test">
        <p>
          Suppose <InlineMath>{`a_n, b_n > 0`}</InlineMath> and
          <InlineMath>{`\\lim_{n \\to \\infty} \\frac{a_n}{b_n} = L`}</InlineMath>.
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>If <InlineMath>{`0 < L < \\infty`}</InlineMath>, then <InlineMath>{`\\sum a_n`}</InlineMath> and <InlineMath>{`\\sum b_n`}</InlineMath> both converge or both diverge</li>
          <li>If <InlineMath>{`L = 0`}</InlineMath> and <InlineMath>{`\\sum b_n`}</InlineMath> converges, then <InlineMath>{`\\sum a_n`}</InlineMath> converges</li>
          <li>If <InlineMath>{`L = \\infty`}</InlineMath> and <InlineMath>{`\\sum b_n`}</InlineMath> diverges, then <InlineMath>{`\\sum a_n`}</InlineMath> diverges</li>
        </ul>
      </Callout>

      <Callout type="example" title="Example 3: Limit Comparison">
        <p>Does <InlineMath>{`\\sum_{n=1}^{\\infty} \\frac{n}{n^3 + 1}`}</InlineMath> converge?</p>
        <p><strong>Solution:</strong></p>
        <p>For large <InlineMath>{`n`}</InlineMath>, <InlineMath>{`\\frac{n}{n^3 + 1} \\approx \\frac{n}{n^3} = \\frac{1}{n^2}`}</InlineMath>.</p>
        <MathBlock>{`\\lim_{n \\to \\infty} \\frac{n/(n^3+1)}{1/n^2} = \\lim_{n \\to \\infty} \\frac{n^3}{n^3 + 1} = 1`}</MathBlock>
        <p>
          Since <InlineMath>{`L = 1`}</InlineMath> (finite, positive) and <InlineMath>{`\\sum \\frac{1}{n^2}`}</InlineMath> converges,
          <InlineMath>{`\\sum \\frac{n}{n^3+1}`}</InlineMath> converges.
        </p>
      </Callout>

      <Callout type="example" title="Example 4: Another Limit Comparison">
        <p>Does <InlineMath>{`\\sum_{n=1}^{\\infty} \\frac{1}{\\sqrt{n^2 + n}}`}</InlineMath> converge?</p>
        <p><strong>Solution:</strong></p>
        <p>Compare with <InlineMath>{`\\frac{1}{n}`}</InlineMath>:</p>
        <MathBlock>{`\\lim_{n \\to \\infty} \\frac{1/\\sqrt{n^2+n}}{1/n} = \\lim_{n \\to \\infty} \\frac{n}{\\sqrt{n^2+n}} = \\lim_{n \\to \\infty} \\frac{1}{\\sqrt{1 + 1/n}} = 1`}</MathBlock>
        <p>
          Since <InlineMath>{`\\sum \\frac{1}{n}`}</InlineMath> diverges, so does <InlineMath>{`\\sum \\frac{1}{\\sqrt{n^2+n}}`}</InlineMath>.
        </p>
      </Callout>

      <h2>Integral Test</h2>

      <Callout type="theorem" title="Integral Test">
        <p>
          Let <InlineMath>{`f(x)`}</InlineMath> be continuous, positive, and decreasing for
          <InlineMath>{`x \\geq 1`}</InlineMath>. Then:
        </p>
        <MathBlock>{`\\sum_{n=1}^{\\infty} f(n) \\text{ converges} \\quad \\Leftrightarrow \\quad \\int_1^{\\infty} f(x)\\,dx \\text{ converges}`}</MathBlock>
      </Callout>

      <Callout type="info" title="Intuition">
        <p>
          The sum <InlineMath>{`\\sum f(n)`}</InlineMath> and integral <InlineMath>{`\\int f(x)\\,dx`}</InlineMath>
          approximate each other. They need not be equal, but they converge or diverge together.
        </p>
      </Callout>

      <Callout type="example" title="Example 5: p-Series via Integral Test">
        <p>For what <InlineMath>{`p`}</InlineMath> does <InlineMath>{`\\sum \\frac{1}{n^p}`}</InlineMath> converge?</p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`\\int_1^{\\infty} \\frac{1}{x^p}\\,dx = \\begin{cases} \\left[\\frac{x^{1-p}}{1-p}\\right]_1^{\\infty} & p \\neq 1 \\ [\\ln x]_1^{\\infty} & p = 1 \\end{cases}`}</MathBlock>
        <ul className="list-disc pl-6 space-y-1">
          <li>If <InlineMath>{`p > 1`}</InlineMath>: <InlineMath>{`x^{1-p} \\to 0`}</InlineMath>, integral = <InlineMath>{`\\frac{1}{p-1}`}</InlineMath> (converges)</li>
          <li>If <InlineMath>{`p = 1`}</InlineMath>: <InlineMath>{`\\ln x \\to \\infty`}</InlineMath> (diverges)</li>
          <li>If <InlineMath>{`p < 1`}</InlineMath>: <InlineMath>{`x^{1-p} \\to \\infty`}</InlineMath> (diverges)</li>
        </ul>
        <p>Therefore <InlineMath>{`\\sum \\frac{1}{n^p}`}</InlineMath> converges iff <InlineMath>{`p > 1`}</InlineMath>.</p>
      </Callout>

      <Callout type="example" title="Example 6: Logarithmic Series">
        <p>Does <InlineMath>{`\\sum_{n=2}^{\\infty} \\frac{1}{n \\ln n}`}</InlineMath> converge?</p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`\\int_2^{\\infty} \\frac{1}{x \\ln x}\\,dx = [\\ln(\\ln x)]_2^{\\infty} = \\infty`}</MathBlock>
        <p>The integral diverges, so the series diverges.</p>
      </Callout>

      <Callout type="example" title="Example 7: Higher Power of Logarithm">
        <p>Does <InlineMath>{`\\sum_{n=2}^{\\infty} \\frac{1}{n(\\ln n)^2}`}</InlineMath> converge?</p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`\\int_2^{\\infty} \\frac{1}{x(\\ln x)^2}\\,dx = \\left[-\\frac{1}{\\ln x}\\right]_2^{\\infty} = 0 - \\left(-\\frac{1}{\\ln 2}\\right) = \\frac{1}{\\ln 2}`}</MathBlock>
        <p>The integral converges, so the series converges.</p>
      </Callout>

      <h2>Ratio Test</h2>

      <Callout type="theorem" title="Ratio Test">
        <p>Let <InlineMath>{`a_n > 0`}</InlineMath> and <InlineMath>{`L = \\lim_{n \\to \\infty} \\frac{a_{n+1}}{a_n}`}</InlineMath>.</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>If <InlineMath>{`L < 1`}</InlineMath>, the series converges</li>
          <li>If <InlineMath>{`L > 1`}</InlineMath> (or <InlineMath>{`L = \\infty`}</InlineMath>), the series diverges</li>
          <li>If <InlineMath>{`L = 1`}</InlineMath>, the test is inconclusive</li>
        </ul>
      </Callout>

      <Callout type="info" title="When to Use">
        <p>
          The ratio test is especially useful when <InlineMath>{`a_n`}</InlineMath> involves
          factorials, exponentials, or products.
        </p>
      </Callout>

      <Callout type="example" title="Example 8: Factorial in Denominator">
        <p>Does <InlineMath>{`\\sum_{n=1}^{\\infty} \\frac{n^2}{n!}`}</InlineMath> converge?</p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`\\frac{a_{n+1}}{a_n} = \\frac{(n+1)^2/(n+1)!}{n^2/n!} = \\frac{(n+1)^2}{n^2} \\cdot \\frac{n!}{(n+1)!} = \\frac{(n+1)^2}{n^2(n+1)} = \\frac{n+1}{n^2}`}</MathBlock>
        <MathBlock>{`L = \\lim_{n \\to \\infty} \\frac{n+1}{n^2} = 0 < 1`}</MathBlock>
        <p>The series converges.</p>
      </Callout>

      <Callout type="example" title="Example 9: Exponential vs Factorial">
        <p>Does <InlineMath>{`\\sum_{n=0}^{\\infty} \\frac{2^n}{n!}`}</InlineMath> converge?</p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`\\frac{a_{n+1}}{a_n} = \\frac{2^{n+1}/(n+1)!}{2^n/n!} = \\frac{2}{n+1}`}</MathBlock>
        <MathBlock>{`L = \\lim_{n \\to \\infty} \\frac{2}{n+1} = 0 < 1`}</MathBlock>
        <p>
          The series converges. (In fact, <InlineMath>{`\\sum \\frac{2^n}{n!} = e^2`}</InlineMath>.)
        </p>
      </Callout>

      <Callout type="example" title="Example 10: Ratio Test Inconclusive">
        <p>Apply the ratio test to <InlineMath>{`\\sum \\frac{1}{n}`}</InlineMath>.</p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`\\frac{a_{n+1}}{a_n} = \\frac{1/(n+1)}{1/n} = \\frac{n}{n+1} \\to 1`}</MathBlock>
        <p>
          The ratio test is inconclusive. (We know this series diverges by other methods.)
        </p>
      </Callout>

      <h2>Root Test</h2>

      <Callout type="theorem" title="Root Test">
        <p>Let <InlineMath>{`a_n \\geq 0`}</InlineMath> and <InlineMath>{`L = \\lim_{n \\to \\infty} \\sqrt[n]{a_n}`}</InlineMath>.</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>If <InlineMath>{`L < 1`}</InlineMath>, the series converges</li>
          <li>If <InlineMath>{`L > 1`}</InlineMath>, the series diverges</li>
          <li>If <InlineMath>{`L = 1`}</InlineMath>, the test is inconclusive</li>
        </ul>
      </Callout>

      <Callout type="info" title="When to Use">
        <p>
          The root test is useful when <InlineMath>{`a_n`}</InlineMath> has the form
          <InlineMath>{`(\\text{something})^n`}</InlineMath>.
        </p>
      </Callout>

      <Callout type="example" title="Example 11: Perfect for Root Test">
        <p>Does <InlineMath>{`\\sum_{n=1}^{\\infty} \\left(\\frac{n}{2n+1}\\right)^n`}</InlineMath> converge?</p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`\\sqrt[n]{a_n} = \\frac{n}{2n+1} \\to \\frac{1}{2}`}</MathBlock>
        <p>Since <InlineMath>{`L = \\frac{1}{2} < 1`}</InlineMath>, the series converges.</p>
      </Callout>

      <Callout type="example" title="Example 12: Another Root Test">
        <p>Does <InlineMath>{`\\sum_{n=1}^{\\infty} \\frac{n^n}{3^n \\cdot n!}`}</InlineMath> converge?</p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`\\sqrt[n]{a_n} = \\frac{n}{3 \\cdot (n!)^{1/n}}`}</MathBlock>
        <p>Using Stirling's approximation <InlineMath>{`(n!)^{1/n} \\approx n/e`}</InlineMath>:</p>
        <MathBlock>{`\\sqrt[n]{a_n} \\approx \\frac{n}{3 \\cdot n/e} = \\frac{e}{3} \\approx 0.91`}</MathBlock>
        <p>Since <InlineMath>{`L = e/3 < 1`}</InlineMath>, the series converges.</p>
      </Callout>

      <h2>Choosing the Right Test</h2>

      <Callout type="info" title="Guidelines">
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Factorials or products:</strong> Try the ratio test
          </li>
          <li>
            <strong>nth powers:</strong> Try the root test
          </li>
          <li>
            <strong>Rational functions of n:</strong> Try limit comparison with p-series
          </li>
          <li>
            <strong>Decreasing function:</strong> Try the integral test
          </li>
          <li>
            <strong>Simple bounds available:</strong> Try direct comparison
          </li>
          <li>
            <strong>Always check first:</strong> If <InlineMath>{`a_n \\not\\to 0`}</InlineMath>, series diverges
          </li>
        </ul>
      </Callout>

      <h2>More Examples</h2>

      <Callout type="example" title="Example 13: Mixed Techniques">
        <p>Does <InlineMath>{`\\sum_{n=1}^{\\infty} \\frac{n!}{n^n}`}</InlineMath> converge?</p>
        <p><strong>Solution (Ratio Test):</strong></p>
        <MathBlock>{`\\frac{a_{n+1}}{a_n} = \\frac{(n+1)!/(n+1)^{n+1}}{n!/n^n} = \\frac{(n+1) \\cdot n^n}{(n+1)^{n+1}} = \\left(\\frac{n}{n+1}\\right)^n`}</MathBlock>
        <MathBlock>{`= \\frac{1}{(1 + 1/n)^n} \\to \\frac{1}{e} < 1`}</MathBlock>
        <p>The series converges.</p>
      </Callout>

      <Callout type="example" title="Example 14: Tricky Comparison">
        <p>Does <InlineMath>{`\\sum_{n=1}^{\\infty} \\frac{\\sin^2 n}{n^2}`}</InlineMath> converge?</p>
        <p><strong>Solution:</strong></p>
        <p>Since <InlineMath>{`0 \\leq \\sin^2 n \\leq 1`}</InlineMath>:</p>
        <MathBlock>{`0 \\leq \\frac{\\sin^2 n}{n^2} \\leq \\frac{1}{n^2}`}</MathBlock>
        <p>
          Since <InlineMath>{`\\sum \\frac{1}{n^2}`}</InlineMath> converges, by comparison,
          <InlineMath>{`\\sum \\frac{\\sin^2 n}{n^2}`}</InlineMath> converges.
        </p>
      </Callout>

      <Callout type="example" title="Example 15: Limit Comparison Strategy">
        <p>Does <InlineMath>{`\\sum_{n=1}^{\\infty} \\frac{n^2 + 3n}{n^4 - 2}`}</InlineMath> converge?</p>
        <p><strong>Solution:</strong></p>
        <p>Dominant terms: <InlineMath>{`\\frac{n^2}{n^4} = \\frac{1}{n^2}`}</InlineMath></p>
        <MathBlock>{`\\lim_{n \\to \\infty} \\frac{(n^2 + 3n)/(n^4 - 2)}{1/n^2} = \\lim_{n \\to \\infty} \\frac{n^4 + 3n^3}{n^4 - 2} = 1`}</MathBlock>
        <p>
          Since <InlineMath>{`\\sum \\frac{1}{n^2}`}</InlineMath> converges, so does the given series.
        </p>
      </Callout>

      <h2>Summary</h2>
      <ul>
        <li>
          <strong>Comparison:</strong> <InlineMath>{`a_n \\leq b_n`}</InlineMath> and <InlineMath>{`\\sum b_n`}</InlineMath> converges ⟹ <InlineMath>{`\\sum a_n`}</InlineMath> converges
        </li>
        <li>
          <strong>Limit Comparison:</strong> If <InlineMath>{`a_n/b_n \\to L`}</InlineMath> (finite, positive), series behave alike
        </li>
        <li>
          <strong>Integral Test:</strong> <InlineMath>{`\\sum f(n)`}</InlineMath> and <InlineMath>{`\\int f(x)\\,dx`}</InlineMath> converge or diverge together
        </li>
        <li>
          <strong>Ratio Test:</strong> <InlineMath>{`a_{n+1}/a_n \\to L`}</InlineMath>; converges if <InlineMath>{`L < 1`}</InlineMath>, diverges if <InlineMath>{`L > 1`}</InlineMath>
        </li>
        <li>
          <strong>Root Test:</strong> <InlineMath>{`\\sqrt[n]{a_n} \\to L`}</InlineMath>; converges if <InlineMath>{`L < 1`}</InlineMath>, diverges if <InlineMath>{`L > 1`}</InlineMath>
        </li>
        <li>
          <strong>Inconclusive:</strong> When ratio or root gives <InlineMath>{`L = 1`}</InlineMath>, try another test
        </li>
      </ul>
    </LessonLayout>
  );
}
