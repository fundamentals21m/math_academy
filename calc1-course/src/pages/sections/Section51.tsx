import { LessonLayout } from '../../components/layout/LessonLayout';
import { Math as MathInline, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';

export default function Section51() {
  return (
    <LessonLayout sectionId={51}>
      <p>
        Understanding how functions behave as <MathInline>{`x \\to \\infty`}</MathInline> or
        <MathInline>{`x \\to -\\infty`}</MathInline> is essential for analyzing long-term behavior,
        asymptotic growth, and convergence of series. This section establishes the
        fundamental hierarchy of growth rates.
      </p>

      <h2>Limits at Infinity</h2>

      <Callout type="definition" title="Limit as x → ∞">
        <p>
          We write <MathInline>{`\\lim_{x \\to \\infty} f(x) = L`}</MathInline> if for every
          <MathInline>{`\\epsilon > 0`}</MathInline>, there exists <MathInline>{`M > 0`}</MathInline> such that:
        </p>
        <MathBlock>{`|f(x) - L| < \\epsilon \\quad \\text{whenever } x > M`}</MathBlock>
        <p>
          Similarly, <MathInline>{`\\lim_{x \\to \\infty} f(x) = \\infty`}</MathInline> means
          <MathInline>{`f(x)`}</MathInline> grows without bound as <MathInline>{`x \\to \\infty`}</MathInline>.
        </p>
      </Callout>

      <h2>The Hierarchy of Growth</h2>

      <p>
        Among the common functions, there is a strict ordering of growth rates:
      </p>

      <Callout type="theorem" title="Growth Rate Hierarchy">
        <p>As <MathInline>{`x \\to \\infty`}</MathInline>, for any <MathInline>{`a > 0`}</MathInline> and <MathInline>{`b > 1`}</MathInline>:</p>
        <MathBlock>{`\\ln x \\ll x^a \\ll b^x \\ll x! \\ll x^x`}</MathBlock>
        <p>
          The notation <MathInline>{`f \\ll g`}</MathInline> means <MathInline>{`\\lim_{x \\to \\infty} \\frac{f(x)}{g(x)} = 0`}</MathInline>.
        </p>
        <p>More precisely:</p>
        <MathBlock>{`\\lim_{x \\to \\infty} \\frac{\\ln x}{x^a} = 0, \\quad \\lim_{x \\to \\infty} \\frac{x^n}{e^x} = 0, \\quad \\lim_{x \\to \\infty} \\frac{e^x}{x!} = 0`}</MathBlock>
      </Callout>

      <h2>Logarithmic Growth</h2>

      <Callout type="theorem" title="Logarithm Grows Slower Than Any Power">
        <p>For any <MathInline>{`a > 0`}</MathInline>:</p>
        <MathBlock>{`\\lim_{x \\to \\infty} \\frac{\\ln x}{x^a} = 0`}</MathBlock>
      </Callout>

      <Callout type="info" title="Proof">
        <p>
          Let <MathInline>{`y = x^a`}</MathInline>, so <MathInline>{`x = y^{1/a}`}</MathInline> and
          <MathInline>{`\\ln x = \\frac{1}{a} \\ln y`}</MathInline>. Then:
        </p>
        <MathBlock>{`\\frac{\\ln x}{x^a} = \\frac{\\ln y}{ay}`}</MathBlock>
        <p>
          Using L'Hôpital's rule (or the known limit <MathInline>{`\\lim_{y \\to \\infty} \\frac{\\ln y}{y} = 0`}</MathInline>):
        </p>
        <MathBlock>{`\\lim_{y \\to \\infty} \\frac{\\ln y}{ay} = \\frac{1}{a} \\lim_{y \\to \\infty} \\frac{1/y}{1} = 0`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 1: Logarithm vs Square Root">
        <p>Evaluate <MathInline>{`\\displaystyle\\lim_{x \\to \\infty} \\frac{\\ln x}{\\sqrt{x}}`}</MathInline>.</p>
        <p><strong>Solution:</strong></p>
        <p>This is <MathInline>{`\\infty/\\infty`}</MathInline>. By L'Hôpital:</p>
        <MathBlock>{`\\lim_{x \\to \\infty} \\frac{\\ln x}{\\sqrt{x}} = \\lim_{x \\to \\infty} \\frac{1/x}{1/(2\\sqrt{x})} = \\lim_{x \\to \\infty} \\frac{2\\sqrt{x}}{x} = \\lim_{x \\to \\infty} \\frac{2}{\\sqrt{x}} = 0`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 2: Powers of Logarithm">
        <p>Evaluate <MathInline>{`\\displaystyle\\lim_{x \\to \\infty} \\frac{(\\ln x)^{100}}{x}`}</MathInline>.</p>
        <p><strong>Solution:</strong></p>
        <p>
          Even <MathInline>{`(\\ln x)^{100}`}</MathInline> grows slower than <MathInline>{`x`}</MathInline>.
          Let <MathInline>{`y = \\ln x`}</MathInline>, so <MathInline>{`x = e^y`}</MathInline>:
        </p>
        <MathBlock>{`\\frac{(\\ln x)^{100}}{x} = \\frac{y^{100}}{e^y} \\to 0 \\text{ as } y \\to \\infty`}</MathBlock>
        <p>
          (since polynomials grow slower than exponentials).
        </p>
      </Callout>

      <h2>Exponential Growth</h2>

      <Callout type="theorem" title="Exponential Grows Faster Than Any Polynomial">
        <p>For any polynomial <MathInline>{`P(x)`}</MathInline> and any <MathInline>{`b > 1`}</MathInline>:</p>
        <MathBlock>{`\\lim_{x \\to \\infty} \\frac{P(x)}{b^x} = 0`}</MathBlock>
        <p>In particular, for any <MathInline>{`n \\geq 0`}</MathInline>:</p>
        <MathBlock>{`\\lim_{x \\to \\infty} \\frac{x^n}{e^x} = 0`}</MathBlock>
      </Callout>

      <Callout type="info" title="Proof">
        <p>
          Apply L'Hôpital's rule <MathInline>{`n`}</MathInline> times. Each differentiation reduces
          the power of <MathInline>{`x`}</MathInline> by 1, but <MathInline>{`e^x`}</MathInline> remains unchanged:
        </p>
        <MathBlock>{`\\lim_{x \\to \\infty} \\frac{x^n}{e^x} = \\lim_{x \\to \\infty} \\frac{nx^{n-1}}{e^x} = \\cdots = \\lim_{x \\to \\infty} \\frac{n!}{e^x} = 0`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 3: Polynomial vs Exponential">
        <p>Evaluate <MathInline>{`\\displaystyle\\lim_{x \\to \\infty} \\frac{x^5 - 3x^3 + 2}{e^x}`}</MathInline>.</p>
        <p><strong>Solution:</strong></p>
        <p>
          The numerator is dominated by <MathInline>{`x^5`}</MathInline>. Since any polynomial
          grows slower than <MathInline>{`e^x`}</MathInline>:
        </p>
        <MathBlock>{`\\lim_{x \\to \\infty} \\frac{x^5 - 3x^3 + 2}{e^x} = 0`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 4: Exponential Competition">
        <p>Evaluate <MathInline>{`\\displaystyle\\lim_{x \\to \\infty} \\frac{e^{2x}}{e^{3x}}`}</MathInline>.</p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`\\frac{e^{2x}}{e^{3x}} = e^{2x-3x} = e^{-x} \\to 0 \\text{ as } x \\to \\infty`}</MathBlock>
        <p>The larger exponent dominates.</p>
      </Callout>

      <h2>Behavior as x → 0⁺</h2>

      <Callout type="theorem" title="Logarithm Near Zero">
        <MathBlock>{`\\lim_{x \\to 0^+} \\ln x = -\\infty`}</MathBlock>
        <MathBlock>{`\\lim_{x \\to 0^+} x^a \\ln x = 0 \\quad \\text{for any } a > 0`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 5: x ln x as x → 0⁺">
        <p>Evaluate <MathInline>{`\\displaystyle\\lim_{x \\to 0^+} x \\ln x`}</MathInline>.</p>
        <p><strong>Solution:</strong></p>
        <p>This is <MathInline>{`0 \\cdot (-\\infty)`}</MathInline>. Rewrite as:</p>
        <MathBlock>{`x \\ln x = \\frac{\\ln x}{1/x}`}</MathBlock>
        <p>Apply L'Hôpital (<MathInline>{`-\\infty/\\infty`}</MathInline> form):</p>
        <MathBlock>{`\\lim_{x \\to 0^+} \\frac{\\ln x}{1/x} = \\lim_{x \\to 0^+} \\frac{1/x}{-1/x^2} = \\lim_{x \\to 0^+} (-x) = 0`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 6: Higher Powers">
        <p>Evaluate <MathInline>{`\\displaystyle\\lim_{x \\to 0^+} x^2 \\ln x`}</MathInline>.</p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`x^2 \\ln x = \\frac{\\ln x}{1/x^2}`}</MathBlock>
        <MathBlock>{`\\lim_{x \\to 0^+} \\frac{\\ln x}{x^{-2}} = \\lim_{x \\to 0^+} \\frac{1/x}{-2x^{-3}} = \\lim_{x \\to 0^+} \\frac{-x^2}{2} = 0`}</MathBlock>
      </Callout>

      <h2>Behavior as x → -∞</h2>

      <Callout type="theorem" title="Exponential as x → -∞">
        <MathBlock>{`\\lim_{x \\to -\\infty} e^x = 0`}</MathBlock>
        <MathBlock>{`\\lim_{x \\to -\\infty} x^n e^x = 0 \\quad \\text{for any } n`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 7: Polynomial Times Decaying Exponential">
        <p>Evaluate <MathInline>{`\\displaystyle\\lim_{x \\to -\\infty} x^3 e^x`}</MathInline>.</p>
        <p><strong>Solution:</strong></p>
        <p>Let <MathInline>{`y = -x`}</MathInline>, so as <MathInline>{`x \\to -\\infty`}</MathInline>, <MathInline>{`y \\to \\infty`}</MathInline>:</p>
        <MathBlock>{`x^3 e^x = (-y)^3 e^{-y} = \\frac{-y^3}{e^y} \\to 0`}</MathBlock>
        <p>since polynomials grow slower than exponentials.</p>
      </Callout>

      <h2>Mixed Limits</h2>

      <Callout type="example" title="Example 8: Combining Growth Rates">
        <p>Evaluate <MathInline>{`\\displaystyle\\lim_{x \\to \\infty} \\frac{x^2 \\ln x}{e^x}`}</MathInline>.</p>
        <p><strong>Solution:</strong></p>
        <p>
          Both <MathInline>{`x^2`}</MathInline> and <MathInline>{`\\ln x`}</MathInline> grow slower than
          <MathInline>{`e^x`}</MathInline>, so their product does too:
        </p>
        <MathBlock>{`\\frac{x^2 \\ln x}{e^x} = \\frac{x^2}{e^{x/2}} \\cdot \\frac{\\ln x}{e^{x/2}} \\to 0 \\cdot 0 = 0`}</MathBlock>
        <p>Or apply L'Hôpital repeatedly until the polynomial is exhausted.</p>
      </Callout>

      <Callout type="example" title="Example 9: Logarithm of Polynomial">
        <p>Evaluate <MathInline>{`\\displaystyle\\lim_{x \\to \\infty} \\frac{\\ln(x^2 + 1)}{x}`}</MathInline>.</p>
        <p><strong>Solution:</strong></p>
        <p>
          Note that <MathInline>{`\\ln(x^2 + 1) \\sim 2\\ln x`}</MathInline> for large <MathInline>{`x`}</MathInline>.
          Using L'Hôpital:
        </p>
        <MathBlock>{`\\lim_{x \\to \\infty} \\frac{\\ln(x^2+1)}{x} = \\lim_{x \\to \\infty} \\frac{2x/(x^2+1)}{1} = \\lim_{x \\to \\infty} \\frac{2x}{x^2+1} = 0`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 10: Exponential Dominates Everything">
        <p>Evaluate <MathInline>{`\\displaystyle\\lim_{x \\to \\infty} \\frac{e^x}{x^x}`}</MathInline>.</p>
        <p><strong>Solution:</strong></p>
        <p>Write <MathInline>{`x^x = e^{x \\ln x}`}</MathInline>:</p>
        <MathBlock>{`\\frac{e^x}{x^x} = \\frac{e^x}{e^{x\\ln x}} = e^{x - x\\ln x} = e^{x(1 - \\ln x)}`}</MathBlock>
        <p>
          As <MathInline>{`x \\to \\infty`}</MathInline>, <MathInline>{`\\ln x \\to \\infty`}</MathInline>, so
          <MathInline>{`1 - \\ln x \\to -\\infty`}</MathInline>, and thus <MathInline>{`x(1-\\ln x) \\to -\\infty`}</MathInline>.
        </p>
        <MathBlock>{`\\lim_{x \\to \\infty} \\frac{e^x}{x^x} = e^{-\\infty} = 0`}</MathBlock>
        <p>So <MathInline>{`x^x`}</MathInline> grows faster than <MathInline>{`e^x`}</MathInline>!</p>
      </Callout>

      <h2>Applications to Series</h2>

      <Callout type="info" title="Connection to Convergence">
        <p>
          These limits are crucial for convergence tests. For example, the ratio test
          and root test rely on comparing with geometric series, which involves
          understanding exponential growth.
        </p>
        <p>
          If <MathInline>{`\\lim_{n \\to \\infty} \\frac{a_{n+1}}{a_n} = L`}</MathInline>:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>If <MathInline>{`L < 1`}</MathInline>, the series <MathInline>{`\\sum a_n`}</MathInline> converges absolutely</li>
          <li>If <MathInline>{`L > 1`}</MathInline>, the series diverges</li>
          <li>If <MathInline>{`L = 1`}</MathInline>, the test is inconclusive</li>
        </ul>
      </Callout>

      <Callout type="example" title="Example 11: Applying to Series">
        <p>
          Consider <MathInline>{`\\sum_{n=1}^{\\infty} \\frac{n^{10}}{2^n}`}</MathInline>.
          Does it converge?
        </p>
        <p><strong>Solution:</strong></p>
        <p>
          Since <MathInline>{`\\lim_{n \\to \\infty} \\frac{n^{10}}{2^n} = 0`}</MathInline> (polynomial vs
          exponential), the terms go to zero. Using the ratio test:
        </p>
        <MathBlock>{`\\frac{a_{n+1}}{a_n} = \\frac{(n+1)^{10}}{2^{n+1}} \\cdot \\frac{2^n}{n^{10}} = \\frac{1}{2}\\left(\\frac{n+1}{n}\\right)^{10} \\to \\frac{1}{2}`}</MathBlock>
        <p>
          Since <MathInline>{`1/2 < 1`}</MathInline>, the series converges.
        </p>
      </Callout>

      <h2>Horizontal Asymptotes</h2>

      <Callout type="definition" title="Horizontal Asymptote">
        <p>
          The line <MathInline>{`y = L`}</MathInline> is a <strong>horizontal asymptote</strong>
          of <MathInline>{`f`}</MathInline> if:
        </p>
        <MathBlock>{`\\lim_{x \\to \\infty} f(x) = L \\quad \\text{or} \\quad \\lim_{x \\to -\\infty} f(x) = L`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 12: Finding Horizontal Asymptotes">
        <p>Find the horizontal asymptotes of <MathInline>{`f(x) = \\frac{2x^2 - 1}{x^2 + 3}`}</MathInline>.</p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`\\lim_{x \\to \\pm\\infty} \\frac{2x^2 - 1}{x^2 + 3} = \\lim_{x \\to \\pm\\infty} \\frac{2 - 1/x^2}{1 + 3/x^2} = \\frac{2}{1} = 2`}</MathBlock>
        <p>
          The horizontal asymptote is <MathInline>{`y = 2`}</MathInline> (in both directions).
        </p>
      </Callout>

      <Callout type="example" title="Example 13: Different Asymptotes">
        <p>Find the horizontal asymptotes of <MathInline>{`f(x) = \\frac{e^x}{1 + e^x}`}</MathInline>.</p>
        <p><strong>Solution:</strong></p>
        <p>As <MathInline>{`x \\to \\infty`}</MathInline>:</p>
        <MathBlock>{`\\frac{e^x}{1 + e^x} = \\frac{1}{e^{-x} + 1} \\to \\frac{1}{0 + 1} = 1`}</MathBlock>
        <p>As <MathInline>{`x \\to -\\infty`}</MathInline>:</p>
        <MathBlock>{`\\frac{e^x}{1 + e^x} \\to \\frac{0}{1 + 0} = 0`}</MathBlock>
        <p>
          Horizontal asymptotes: <MathInline>{`y = 1`}</MathInline> (as <MathInline>{`x \\to \\infty`}</MathInline>)
          and <MathInline>{`y = 0`}</MathInline> (as <MathInline>{`x \\to -\\infty`}</MathInline>).
        </p>
      </Callout>

      <h2>Summary of Key Limits</h2>

      <Callout type="theorem" title="Reference: Fundamental Limits">
        <MathBlock>{`\\lim_{x \\to \\infty} \\frac{\\ln x}{x^a} = 0 \\quad (a > 0)`}</MathBlock>
        <MathBlock>{`\\lim_{x \\to \\infty} \\frac{x^n}{e^x} = 0 \\quad (\\text{any } n)`}</MathBlock>
        <MathBlock>{`\\lim_{x \\to \\infty} \\frac{x^n}{b^x} = 0 \\quad (b > 1, \\text{ any } n)`}</MathBlock>
        <MathBlock>{`\\lim_{x \\to 0^+} x^a \\ln x = 0 \\quad (a > 0)`}</MathBlock>
        <MathBlock>{`\\lim_{x \\to -\\infty} x^n e^x = 0 \\quad (\\text{any } n)`}</MathBlock>
        <MathBlock>{`\\lim_{x \\to \\infty} \\left(1 + \\frac{1}{x}\\right)^x = e`}</MathBlock>
      </Callout>

      <h2>Summary</h2>
      <ul>
        <li>
          <strong>Growth hierarchy:</strong> <MathInline>{`\\ln x \\ll x^a \\ll b^x \\ll x!`}</MathInline> for <MathInline>{`a > 0, b > 1`}</MathInline>.
        </li>
        <li>
          <strong>Logarithms:</strong> Grow slower than any positive power of <MathInline>{`x`}</MathInline>.
        </li>
        <li>
          <strong>Exponentials:</strong> Grow faster than any polynomial.
        </li>
        <li>
          <strong>Near zero:</strong> <MathInline>{`x^a \\ln x \\to 0`}</MathInline> as <MathInline>{`x \\to 0^+`}</MathInline>.
        </li>
        <li>
          <strong>At <MathInline>{`-\\infty`}</MathInline>:</strong> <MathInline>{`e^x \\to 0`}</MathInline> faster than any polynomial blows up.
        </li>
        <li>
          <strong>Applications:</strong> Series convergence, asymptotic analysis, horizontal asymptotes.
        </li>
        <li>
          <strong>Super-exponential:</strong> <MathInline>{`x^x`}</MathInline> grows faster than <MathInline>{`e^x`}</MathInline>.
        </li>
      </ul>
    </LessonLayout>
  );
}
