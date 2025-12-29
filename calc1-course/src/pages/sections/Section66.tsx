import { LessonLayout } from '../../components/layout/LessonLayout';
import { Math as MathInline, MathBlock } from '../../components/common/MathBlock';
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
        <p>Suppose <MathInline>{`0 \\leq a_n \\leq b_n`}</MathInline> for all <MathInline>{`n`}</MathInline>.</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>If <MathInline>{`\\sum b_n`}</MathInline> converges, then <MathInline>{`\\sum a_n`}</MathInline> converges</li>
          <li>If <MathInline>{`\\sum a_n`}</MathInline> diverges, then <MathInline>{`\\sum b_n`}</MathInline> diverges</li>
        </ul>
      </Callout>

      <Callout type="info" title="Strategy">
        <p>
          To show convergence, find a larger convergent series. To show divergence,
          find a smaller divergent series.
        </p>
      </Callout>

      <Callout type="example" title="Example 1: Comparison with Geometric">
        <p>Does <MathInline>{`\\sum_{n=1}^{\\infty} \\frac{1}{2^n + 1}`}</MathInline> converge?</p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`\\frac{1}{2^n + 1} < \\frac{1}{2^n}`}</MathBlock>
        <p>
          Since <MathInline>{`\\sum \\frac{1}{2^n}`}</MathInline> is a convergent geometric series,
          by comparison, <MathInline>{`\\sum \\frac{1}{2^n + 1}`}</MathInline> converges.
        </p>
      </Callout>

      <Callout type="example" title="Example 2: Comparison with Harmonic">
        <p>Does <MathInline>{`\\sum_{n=2}^{\\infty} \\frac{1}{\\ln n}`}</MathInline> converge?</p>
        <p><strong>Solution:</strong></p>
        <p>For <MathInline>{`n \\geq 2`}</MathInline>, <MathInline>{`\\ln n < n`}</MathInline>, so:</p>
        <MathBlock>{`\\frac{1}{\\ln n} > \\frac{1}{n}`}</MathBlock>
        <p>
          Since <MathInline>{`\\sum \\frac{1}{n}`}</MathInline> diverges, by comparison,
          <MathInline>{`\\sum \\frac{1}{\\ln n}`}</MathInline> diverges.
        </p>
      </Callout>

      <h2>Limit Comparison Test</h2>

      <Callout type="theorem" title="Limit Comparison Test">
        <p>
          Suppose <MathInline>{`a_n, b_n > 0`}</MathInline> and
          <MathInline>{`\\lim_{n \\to \\infty} \\frac{a_n}{b_n} = L`}</MathInline>.
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>If <MathInline>{`0 < L < \\infty`}</MathInline>, then <MathInline>{`\\sum a_n`}</MathInline> and <MathInline>{`\\sum b_n`}</MathInline> both converge or both diverge</li>
          <li>If <MathInline>{`L = 0`}</MathInline> and <MathInline>{`\\sum b_n`}</MathInline> converges, then <MathInline>{`\\sum a_n`}</MathInline> converges</li>
          <li>If <MathInline>{`L = \\infty`}</MathInline> and <MathInline>{`\\sum b_n`}</MathInline> diverges, then <MathInline>{`\\sum a_n`}</MathInline> diverges</li>
        </ul>
      </Callout>

      <Callout type="example" title="Example 3: Limit Comparison">
        <p>Does <MathInline>{`\\sum_{n=1}^{\\infty} \\frac{n}{n^3 + 1}`}</MathInline> converge?</p>
        <p><strong>Solution:</strong></p>
        <p>For large <MathInline>{`n`}</MathInline>, <MathInline>{`\\frac{n}{n^3 + 1} \\approx \\frac{n}{n^3} = \\frac{1}{n^2}`}</MathInline>.</p>
        <MathBlock>{`\\lim_{n \\to \\infty} \\frac{n/(n^3+1)}{1/n^2} = \\lim_{n \\to \\infty} \\frac{n^3}{n^3 + 1} = 1`}</MathBlock>
        <p>
          Since <MathInline>{`L = 1`}</MathInline> (finite, positive) and <MathInline>{`\\sum \\frac{1}{n^2}`}</MathInline> converges,
          <MathInline>{`\\sum \\frac{n}{n^3+1}`}</MathInline> converges.
        </p>
      </Callout>

      <Callout type="example" title="Example 4: Another Limit Comparison">
        <p>Does <MathInline>{`\\sum_{n=1}^{\\infty} \\frac{1}{\\sqrt{n^2 + n}}`}</MathInline> converge?</p>
        <p><strong>Solution:</strong></p>
        <p>Compare with <MathInline>{`\\frac{1}{n}`}</MathInline>:</p>
        <MathBlock>{`\\lim_{n \\to \\infty} \\frac{1/\\sqrt{n^2+n}}{1/n} = \\lim_{n \\to \\infty} \\frac{n}{\\sqrt{n^2+n}} = \\lim_{n \\to \\infty} \\frac{1}{\\sqrt{1 + 1/n}} = 1`}</MathBlock>
        <p>
          Since <MathInline>{`\\sum \\frac{1}{n}`}</MathInline> diverges, so does <MathInline>{`\\sum \\frac{1}{\\sqrt{n^2+n}}`}</MathInline>.
        </p>
      </Callout>

      <h2>Integral Test</h2>

      <Callout type="theorem" title="Integral Test">
        <p>
          Let <MathInline>{`f(x)`}</MathInline> be continuous, positive, and decreasing for
          <MathInline>{`x \\geq 1`}</MathInline>. Then:
        </p>
        <MathBlock>{`\\sum_{n=1}^{\\infty} f(n) \\text{ converges} \\quad \\Leftrightarrow \\quad \\int_1^{\\infty} f(x)\\,dx \\text{ converges}`}</MathBlock>
      </Callout>

      <Callout type="info" title="Intuition">
        <p>
          The sum <MathInline>{`\\sum f(n)`}</MathInline> and integral <MathInline>{`\\int f(x)\\,dx`}</MathInline>
          approximate each other. They need not be equal, but they converge or diverge together.
        </p>
      </Callout>

      <Callout type="example" title="Example 5: p-Series via Integral Test">
        <p>For what <MathInline>{`p`}</MathInline> does <MathInline>{`\\sum \\frac{1}{n^p}`}</MathInline> converge?</p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`\\int_1^{\\infty} \\frac{1}{x^p}\\,dx = \\begin{cases} \\left[\\frac{x^{1-p}}{1-p}\\right]_1^{\\infty} & p \\neq 1 \\ [\\ln x]_1^{\\infty} & p = 1 \\end{cases}`}</MathBlock>
        <ul className="list-disc pl-6 space-y-1">
          <li>If <MathInline>{`p > 1`}</MathInline>: <MathInline>{`x^{1-p} \\to 0`}</MathInline>, integral = <MathInline>{`\\frac{1}{p-1}`}</MathInline> (converges)</li>
          <li>If <MathInline>{`p = 1`}</MathInline>: <MathInline>{`\\ln x \\to \\infty`}</MathInline> (diverges)</li>
          <li>If <MathInline>{`p < 1`}</MathInline>: <MathInline>{`x^{1-p} \\to \\infty`}</MathInline> (diverges)</li>
        </ul>
        <p>Therefore <MathInline>{`\\sum \\frac{1}{n^p}`}</MathInline> converges iff <MathInline>{`p > 1`}</MathInline>.</p>
      </Callout>

      <Callout type="example" title="Example 6: Logarithmic Series">
        <p>Does <MathInline>{`\\sum_{n=2}^{\\infty} \\frac{1}{n \\ln n}`}</MathInline> converge?</p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`\\int_2^{\\infty} \\frac{1}{x \\ln x}\\,dx = [\\ln(\\ln x)]_2^{\\infty} = \\infty`}</MathBlock>
        <p>The integral diverges, so the series diverges.</p>
      </Callout>

      <Callout type="example" title="Example 7: Higher Power of Logarithm">
        <p>Does <MathInline>{`\\sum_{n=2}^{\\infty} \\frac{1}{n(\\ln n)^2}`}</MathInline> converge?</p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`\\int_2^{\\infty} \\frac{1}{x(\\ln x)^2}\\,dx = \\left[-\\frac{1}{\\ln x}\\right]_2^{\\infty} = 0 - \\left(-\\frac{1}{\\ln 2}\\right) = \\frac{1}{\\ln 2}`}</MathBlock>
        <p>The integral converges, so the series converges.</p>
      </Callout>

      <h2>Ratio Test</h2>

      <Callout type="theorem" title="Ratio Test">
        <p>Let <MathInline>{`a_n > 0`}</MathInline> and <MathInline>{`L = \\lim_{n \\to \\infty} \\frac{a_{n+1}}{a_n}`}</MathInline>.</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>If <MathInline>{`L < 1`}</MathInline>, the series converges</li>
          <li>If <MathInline>{`L > 1`}</MathInline> (or <MathInline>{`L = \\infty`}</MathInline>), the series diverges</li>
          <li>If <MathInline>{`L = 1`}</MathInline>, the test is inconclusive</li>
        </ul>
      </Callout>

      <Callout type="info" title="When to Use">
        <p>
          The ratio test is especially useful when <MathInline>{`a_n`}</MathInline> involves
          factorials, exponentials, or products.
        </p>
      </Callout>

      <Callout type="example" title="Example 8: Factorial in Denominator">
        <p>Does <MathInline>{`\\sum_{n=1}^{\\infty} \\frac{n^2}{n!}`}</MathInline> converge?</p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`\\frac{a_{n+1}}{a_n} = \\frac{(n+1)^2/(n+1)!}{n^2/n!} = \\frac{(n+1)^2}{n^2} \\cdot \\frac{n!}{(n+1)!} = \\frac{(n+1)^2}{n^2(n+1)} = \\frac{n+1}{n^2}`}</MathBlock>
        <MathBlock>{`L = \\lim_{n \\to \\infty} \\frac{n+1}{n^2} = 0 < 1`}</MathBlock>
        <p>The series converges.</p>
      </Callout>

      <Callout type="example" title="Example 9: Exponential vs Factorial">
        <p>Does <MathInline>{`\\sum_{n=0}^{\\infty} \\frac{2^n}{n!}`}</MathInline> converge?</p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`\\frac{a_{n+1}}{a_n} = \\frac{2^{n+1}/(n+1)!}{2^n/n!} = \\frac{2}{n+1}`}</MathBlock>
        <MathBlock>{`L = \\lim_{n \\to \\infty} \\frac{2}{n+1} = 0 < 1`}</MathBlock>
        <p>
          The series converges. (In fact, <MathInline>{`\\sum \\frac{2^n}{n!} = e^2`}</MathInline>.)
        </p>
      </Callout>

      <Callout type="example" title="Example 10: Ratio Test Inconclusive">
        <p>Apply the ratio test to <MathInline>{`\\sum \\frac{1}{n}`}</MathInline>.</p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`\\frac{a_{n+1}}{a_n} = \\frac{1/(n+1)}{1/n} = \\frac{n}{n+1} \\to 1`}</MathBlock>
        <p>
          The ratio test is inconclusive. (We know this series diverges by other methods.)
        </p>
      </Callout>

      <h2>Root Test</h2>

      <Callout type="theorem" title="Root Test">
        <p>Let <MathInline>{`a_n \\geq 0`}</MathInline> and <MathInline>{`L = \\lim_{n \\to \\infty} \\sqrt[n]{a_n}`}</MathInline>.</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>If <MathInline>{`L < 1`}</MathInline>, the series converges</li>
          <li>If <MathInline>{`L > 1`}</MathInline>, the series diverges</li>
          <li>If <MathInline>{`L = 1`}</MathInline>, the test is inconclusive</li>
        </ul>
      </Callout>

      <Callout type="info" title="When to Use">
        <p>
          The root test is useful when <MathInline>{`a_n`}</MathInline> has the form
          <MathInline>{`(\\text{something})^n`}</MathInline>.
        </p>
      </Callout>

      <Callout type="example" title="Example 11: Perfect for Root Test">
        <p>Does <MathInline>{`\\sum_{n=1}^{\\infty} \\left(\\frac{n}{2n+1}\\right)^n`}</MathInline> converge?</p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`\\sqrt[n]{a_n} = \\frac{n}{2n+1} \\to \\frac{1}{2}`}</MathBlock>
        <p>Since <MathInline>{`L = \\frac{1}{2} < 1`}</MathInline>, the series converges.</p>
      </Callout>

      <Callout type="example" title="Example 12: Another Root Test">
        <p>Does <MathInline>{`\\sum_{n=1}^{\\infty} \\frac{n^n}{3^n \\cdot n!}`}</MathInline> converge?</p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`\\sqrt[n]{a_n} = \\frac{n}{3 \\cdot (n!)^{1/n}}`}</MathBlock>
        <p>Using Stirling's approximation <MathInline>{`(n!)^{1/n} \\approx n/e`}</MathInline>:</p>
        <MathBlock>{`\\sqrt[n]{a_n} \\approx \\frac{n}{3 \\cdot n/e} = \\frac{e}{3} \\approx 0.91`}</MathBlock>
        <p>Since <MathInline>{`L = e/3 < 1`}</MathInline>, the series converges.</p>
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
            <strong>Always check first:</strong> If <MathInline>{`a_n \\not\\to 0`}</MathInline>, series diverges
          </li>
        </ul>
      </Callout>

      <h2>More Examples</h2>

      <Callout type="example" title="Example 13: Mixed Techniques">
        <p>Does <MathInline>{`\\sum_{n=1}^{\\infty} \\frac{n!}{n^n}`}</MathInline> converge?</p>
        <p><strong>Solution (Ratio Test):</strong></p>
        <MathBlock>{`\\frac{a_{n+1}}{a_n} = \\frac{(n+1)!/(n+1)^{n+1}}{n!/n^n} = \\frac{(n+1) \\cdot n^n}{(n+1)^{n+1}} = \\left(\\frac{n}{n+1}\\right)^n`}</MathBlock>
        <MathBlock>{`= \\frac{1}{(1 + 1/n)^n} \\to \\frac{1}{e} < 1`}</MathBlock>
        <p>The series converges.</p>
      </Callout>

      <Callout type="example" title="Example 14: Tricky Comparison">
        <p>Does <MathInline>{`\\sum_{n=1}^{\\infty} \\frac{\\sin^2 n}{n^2}`}</MathInline> converge?</p>
        <p><strong>Solution:</strong></p>
        <p>Since <MathInline>{`0 \\leq \\sin^2 n \\leq 1`}</MathInline>:</p>
        <MathBlock>{`0 \\leq \\frac{\\sin^2 n}{n^2} \\leq \\frac{1}{n^2}`}</MathBlock>
        <p>
          Since <MathInline>{`\\sum \\frac{1}{n^2}`}</MathInline> converges, by comparison,
          <MathInline>{`\\sum \\frac{\\sin^2 n}{n^2}`}</MathInline> converges.
        </p>
      </Callout>

      <Callout type="example" title="Example 15: Limit Comparison Strategy">
        <p>Does <MathInline>{`\\sum_{n=1}^{\\infty} \\frac{n^2 + 3n}{n^4 - 2}`}</MathInline> converge?</p>
        <p><strong>Solution:</strong></p>
        <p>Dominant terms: <MathInline>{`\\frac{n^2}{n^4} = \\frac{1}{n^2}`}</MathInline></p>
        <MathBlock>{`\\lim_{n \\to \\infty} \\frac{(n^2 + 3n)/(n^4 - 2)}{1/n^2} = \\lim_{n \\to \\infty} \\frac{n^4 + 3n^3}{n^4 - 2} = 1`}</MathBlock>
        <p>
          Since <MathInline>{`\\sum \\frac{1}{n^2}`}</MathInline> converges, so does the given series.
        </p>
      </Callout>

      <h2>Summary</h2>
      <ul>
        <li>
          <strong>Comparison:</strong> <MathInline>{`a_n \\leq b_n`}</MathInline> and <MathInline>{`\\sum b_n`}</MathInline> converges ⟹ <MathInline>{`\\sum a_n`}</MathInline> converges
        </li>
        <li>
          <strong>Limit Comparison:</strong> If <MathInline>{`a_n/b_n \\to L`}</MathInline> (finite, positive), series behave alike
        </li>
        <li>
          <strong>Integral Test:</strong> <MathInline>{`\\sum f(n)`}</MathInline> and <MathInline>{`\\int f(x)\\,dx`}</MathInline> converge or diverge together
        </li>
        <li>
          <strong>Ratio Test:</strong> <MathInline>{`a_{n+1}/a_n \\to L`}</MathInline>; converges if <MathInline>{`L < 1`}</MathInline>, diverges if <MathInline>{`L > 1`}</MathInline>
        </li>
        <li>
          <strong>Root Test:</strong> <MathInline>{`\\sqrt[n]{a_n} \\to L`}</MathInline>; converges if <MathInline>{`L < 1`}</MathInline>, diverges if <MathInline>{`L > 1`}</MathInline>
        </li>
        <li>
          <strong>Inconclusive:</strong> When ratio or root gives <MathInline>{`L = 1`}</MathInline>, try another test
        </li>
      </ul>
    </LessonLayout>
  );
}
