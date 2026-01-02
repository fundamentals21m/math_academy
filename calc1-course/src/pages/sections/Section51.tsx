import { LessonLayout } from '../../components/layout/LessonLayout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';

export default function Section51() {
  return (
    <LessonLayout sectionId={51}>
      <p>
        Understanding how functions behave as <InlineMath>{`x \\to \\infty`}</InlineMath> or
        <InlineMath>{`x \\to -\\infty`}</InlineMath> is essential for analyzing long-term behavior,
        asymptotic growth, and convergence of series. This section establishes the
        fundamental hierarchy of growth rates.
      </p>

      <h2>Limits at Infinity</h2>

      <Callout type="definition" title="Limit as x → ∞">
        <p>
          We write <InlineMath>{`\\lim_{x \\to \\infty} f(x) = L`}</InlineMath> if for every
          <InlineMath>{`\\epsilon > 0`}</InlineMath>, there exists <InlineMath>{`M > 0`}</InlineMath> such that:
        </p>
        <MathBlock>{`|f(x) - L| < \\epsilon \\quad \\text{whenever } x > M`}</MathBlock>
        <p>
          Similarly, <InlineMath>{`\\lim_{x \\to \\infty} f(x) = \\infty`}</InlineMath> means
          <InlineMath>{`f(x)`}</InlineMath> grows without bound as <InlineMath>{`x \\to \\infty`}</InlineMath>.
        </p>
      </Callout>

      <h2>The Hierarchy of Growth</h2>

      <p>
        Among the common functions, there is a strict ordering of growth rates:
      </p>

      <Callout type="theorem" title="Growth Rate Hierarchy">
        <p>As <InlineMath>{`x \\to \\infty`}</InlineMath>, for any <InlineMath>{`a > 0`}</InlineMath> and <InlineMath>{`b > 1`}</InlineMath>:</p>
        <MathBlock>{`\\ln x \\ll x^a \\ll b^x \\ll x! \\ll x^x`}</MathBlock>
        <p>
          The notation <InlineMath>{`f \\ll g`}</InlineMath> means <InlineMath>{`\\lim_{x \\to \\infty} \\frac{f(x)}{g(x)} = 0`}</InlineMath>.
        </p>
        <p>More precisely:</p>
        <MathBlock>{`\\lim_{x \\to \\infty} \\frac{\\ln x}{x^a} = 0, \\quad \\lim_{x \\to \\infty} \\frac{x^n}{e^x} = 0, \\quad \\lim_{x \\to \\infty} \\frac{e^x}{x!} = 0`}</MathBlock>
      </Callout>

      <h2>Logarithmic Growth</h2>

      <Callout type="theorem" title="Logarithm Grows Slower Than Any Power">
        <p>For any <InlineMath>{`a > 0`}</InlineMath>:</p>
        <MathBlock>{`\\lim_{x \\to \\infty} \\frac{\\ln x}{x^a} = 0`}</MathBlock>
      </Callout>

      <Callout type="info" title="Proof">
        <p>
          Let <InlineMath>{`y = x^a`}</InlineMath>, so <InlineMath>{`x = y^{1/a}`}</InlineMath> and
          <InlineMath>{`\\ln x = \\frac{1}{a} \\ln y`}</InlineMath>. Then:
        </p>
        <MathBlock>{`\\frac{\\ln x}{x^a} = \\frac{\\ln y}{ay}`}</MathBlock>
        <p>
          Using L'Hôpital's rule (or the known limit <InlineMath>{`\\lim_{y \\to \\infty} \\frac{\\ln y}{y} = 0`}</InlineMath>):
        </p>
        <MathBlock>{`\\lim_{y \\to \\infty} \\frac{\\ln y}{ay} = \\frac{1}{a} \\lim_{y \\to \\infty} \\frac{1/y}{1} = 0`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 1: Logarithm vs Square Root">
        <p>Evaluate <InlineMath>{`\\displaystyle\\lim_{x \\to \\infty} \\frac{\\ln x}{\\sqrt{x}}`}</InlineMath>.</p>
        <p><strong>Solution:</strong></p>
        <p>This is <InlineMath>{`\\infty/\\infty`}</InlineMath>. By L'Hôpital:</p>
        <MathBlock>{`\\lim_{x \\to \\infty} \\frac{\\ln x}{\\sqrt{x}} = \\lim_{x \\to \\infty} \\frac{1/x}{1/(2\\sqrt{x})} = \\lim_{x \\to \\infty} \\frac{2\\sqrt{x}}{x} = \\lim_{x \\to \\infty} \\frac{2}{\\sqrt{x}} = 0`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 2: Powers of Logarithm">
        <p>Evaluate <InlineMath>{`\\displaystyle\\lim_{x \\to \\infty} \\frac{(\\ln x)^{100}}{x}`}</InlineMath>.</p>
        <p><strong>Solution:</strong></p>
        <p>
          Even <InlineMath>{`(\\ln x)^{100}`}</InlineMath> grows slower than <InlineMath>{`x`}</InlineMath>.
          Let <InlineMath>{`y = \\ln x`}</InlineMath>, so <InlineMath>{`x = e^y`}</InlineMath>:
        </p>
        <MathBlock>{`\\frac{(\\ln x)^{100}}{x} = \\frac{y^{100}}{e^y} \\to 0 \\text{ as } y \\to \\infty`}</MathBlock>
        <p>
          (since polynomials grow slower than exponentials).
        </p>
      </Callout>

      <h2>Exponential Growth</h2>

      <Callout type="theorem" title="Exponential Grows Faster Than Any Polynomial">
        <p>For any polynomial <InlineMath>{`P(x)`}</InlineMath> and any <InlineMath>{`b > 1`}</InlineMath>:</p>
        <MathBlock>{`\\lim_{x \\to \\infty} \\frac{P(x)}{b^x} = 0`}</MathBlock>
        <p>In particular, for any <InlineMath>{`n \\geq 0`}</InlineMath>:</p>
        <MathBlock>{`\\lim_{x \\to \\infty} \\frac{x^n}{e^x} = 0`}</MathBlock>
      </Callout>

      <Callout type="info" title="Proof">
        <p>
          Apply L'Hôpital's rule <InlineMath>{`n`}</InlineMath> times. Each differentiation reduces
          the power of <InlineMath>{`x`}</InlineMath> by 1, but <InlineMath>{`e^x`}</InlineMath> remains unchanged:
        </p>
        <MathBlock>{`\\lim_{x \\to \\infty} \\frac{x^n}{e^x} = \\lim_{x \\to \\infty} \\frac{nx^{n-1}}{e^x} = \\cdots = \\lim_{x \\to \\infty} \\frac{n!}{e^x} = 0`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 3: Polynomial vs Exponential">
        <p>Evaluate <InlineMath>{`\\displaystyle\\lim_{x \\to \\infty} \\frac{x^5 - 3x^3 + 2}{e^x}`}</InlineMath>.</p>
        <p><strong>Solution:</strong></p>
        <p>
          The numerator is dominated by <InlineMath>{`x^5`}</InlineMath>. Since any polynomial
          grows slower than <InlineMath>{`e^x`}</InlineMath>:
        </p>
        <MathBlock>{`\\lim_{x \\to \\infty} \\frac{x^5 - 3x^3 + 2}{e^x} = 0`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 4: Exponential Competition">
        <p>Evaluate <InlineMath>{`\\displaystyle\\lim_{x \\to \\infty} \\frac{e^{2x}}{e^{3x}}`}</InlineMath>.</p>
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
        <p>Evaluate <InlineMath>{`\\displaystyle\\lim_{x \\to 0^+} x \\ln x`}</InlineMath>.</p>
        <p><strong>Solution:</strong></p>
        <p>This is <InlineMath>{`0 \\cdot (-\\infty)`}</InlineMath>. Rewrite as:</p>
        <MathBlock>{`x \\ln x = \\frac{\\ln x}{1/x}`}</MathBlock>
        <p>Apply L'Hôpital (<InlineMath>{`-\\infty/\\infty`}</InlineMath> form):</p>
        <MathBlock>{`\\lim_{x \\to 0^+} \\frac{\\ln x}{1/x} = \\lim_{x \\to 0^+} \\frac{1/x}{-1/x^2} = \\lim_{x \\to 0^+} (-x) = 0`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 6: Higher Powers">
        <p>Evaluate <InlineMath>{`\\displaystyle\\lim_{x \\to 0^+} x^2 \\ln x`}</InlineMath>.</p>
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
        <p>Evaluate <InlineMath>{`\\displaystyle\\lim_{x \\to -\\infty} x^3 e^x`}</InlineMath>.</p>
        <p><strong>Solution:</strong></p>
        <p>Let <InlineMath>{`y = -x`}</InlineMath>, so as <InlineMath>{`x \\to -\\infty`}</InlineMath>, <InlineMath>{`y \\to \\infty`}</InlineMath>:</p>
        <MathBlock>{`x^3 e^x = (-y)^3 e^{-y} = \\frac{-y^3}{e^y} \\to 0`}</MathBlock>
        <p>since polynomials grow slower than exponentials.</p>
      </Callout>

      <h2>Mixed Limits</h2>

      <Callout type="example" title="Example 8: Combining Growth Rates">
        <p>Evaluate <InlineMath>{`\\displaystyle\\lim_{x \\to \\infty} \\frac{x^2 \\ln x}{e^x}`}</InlineMath>.</p>
        <p><strong>Solution:</strong></p>
        <p>
          Both <InlineMath>{`x^2`}</InlineMath> and <InlineMath>{`\\ln x`}</InlineMath> grow slower than
          <InlineMath>{`e^x`}</InlineMath>, so their product does too:
        </p>
        <MathBlock>{`\\frac{x^2 \\ln x}{e^x} = \\frac{x^2}{e^{x/2}} \\cdot \\frac{\\ln x}{e^{x/2}} \\to 0 \\cdot 0 = 0`}</MathBlock>
        <p>Or apply L'Hôpital repeatedly until the polynomial is exhausted.</p>
      </Callout>

      <Callout type="example" title="Example 9: Logarithm of Polynomial">
        <p>Evaluate <InlineMath>{`\\displaystyle\\lim_{x \\to \\infty} \\frac{\\ln(x^2 + 1)}{x}`}</InlineMath>.</p>
        <p><strong>Solution:</strong></p>
        <p>
          Note that <InlineMath>{`\\ln(x^2 + 1) \\sim 2\\ln x`}</InlineMath> for large <InlineMath>{`x`}</InlineMath>.
          Using L'Hôpital:
        </p>
        <MathBlock>{`\\lim_{x \\to \\infty} \\frac{\\ln(x^2+1)}{x} = \\lim_{x \\to \\infty} \\frac{2x/(x^2+1)}{1} = \\lim_{x \\to \\infty} \\frac{2x}{x^2+1} = 0`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 10: Exponential Dominates Everything">
        <p>Evaluate <InlineMath>{`\\displaystyle\\lim_{x \\to \\infty} \\frac{e^x}{x^x}`}</InlineMath>.</p>
        <p><strong>Solution:</strong></p>
        <p>Write <InlineMath>{`x^x = e^{x \\ln x}`}</InlineMath>:</p>
        <MathBlock>{`\\frac{e^x}{x^x} = \\frac{e^x}{e^{x\\ln x}} = e^{x - x\\ln x} = e^{x(1 - \\ln x)}`}</MathBlock>
        <p>
          As <InlineMath>{`x \\to \\infty`}</InlineMath>, <InlineMath>{`\\ln x \\to \\infty`}</InlineMath>, so
          <InlineMath>{`1 - \\ln x \\to -\\infty`}</InlineMath>, and thus <InlineMath>{`x(1-\\ln x) \\to -\\infty`}</InlineMath>.
        </p>
        <MathBlock>{`\\lim_{x \\to \\infty} \\frac{e^x}{x^x} = e^{-\\infty} = 0`}</MathBlock>
        <p>So <InlineMath>{`x^x`}</InlineMath> grows faster than <InlineMath>{`e^x`}</InlineMath>!</p>
      </Callout>

      <h2>Applications to Series</h2>

      <Callout type="info" title="Connection to Convergence">
        <p>
          These limits are crucial for convergence tests. For example, the ratio test
          and root test rely on comparing with geometric series, which involves
          understanding exponential growth.
        </p>
        <p>
          If <InlineMath>{`\\lim_{n \\to \\infty} \\frac{a_{n+1}}{a_n} = L`}</InlineMath>:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>If <InlineMath>{`L < 1`}</InlineMath>, the series <InlineMath>{`\\sum a_n`}</InlineMath> converges absolutely</li>
          <li>If <InlineMath>{`L > 1`}</InlineMath>, the series diverges</li>
          <li>If <InlineMath>{`L = 1`}</InlineMath>, the test is inconclusive</li>
        </ul>
      </Callout>

      <Callout type="example" title="Example 11: Applying to Series">
        <p>
          Consider <InlineMath>{`\\sum_{n=1}^{\\infty} \\frac{n^{10}}{2^n}`}</InlineMath>.
          Does it converge?
        </p>
        <p><strong>Solution:</strong></p>
        <p>
          Since <InlineMath>{`\\lim_{n \\to \\infty} \\frac{n^{10}}{2^n} = 0`}</InlineMath> (polynomial vs
          exponential), the terms go to zero. Using the ratio test:
        </p>
        <MathBlock>{`\\frac{a_{n+1}}{a_n} = \\frac{(n+1)^{10}}{2^{n+1}} \\cdot \\frac{2^n}{n^{10}} = \\frac{1}{2}\\left(\\frac{n+1}{n}\\right)^{10} \\to \\frac{1}{2}`}</MathBlock>
        <p>
          Since <InlineMath>{`1/2 < 1`}</InlineMath>, the series converges.
        </p>
      </Callout>

      <h2>Horizontal Asymptotes</h2>

      <Callout type="definition" title="Horizontal Asymptote">
        <p>
          The line <InlineMath>{`y = L`}</InlineMath> is a <strong>horizontal asymptote</strong>
          of <InlineMath>{`f`}</InlineMath> if:
        </p>
        <MathBlock>{`\\lim_{x \\to \\infty} f(x) = L \\quad \\text{or} \\quad \\lim_{x \\to -\\infty} f(x) = L`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 12: Finding Horizontal Asymptotes">
        <p>Find the horizontal asymptotes of <InlineMath>{`f(x) = \\frac{2x^2 - 1}{x^2 + 3}`}</InlineMath>.</p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`\\lim_{x \\to \\pm\\infty} \\frac{2x^2 - 1}{x^2 + 3} = \\lim_{x \\to \\pm\\infty} \\frac{2 - 1/x^2}{1 + 3/x^2} = \\frac{2}{1} = 2`}</MathBlock>
        <p>
          The horizontal asymptote is <InlineMath>{`y = 2`}</InlineMath> (in both directions).
        </p>
      </Callout>

      <Callout type="example" title="Example 13: Different Asymptotes">
        <p>Find the horizontal asymptotes of <InlineMath>{`f(x) = \\frac{e^x}{1 + e^x}`}</InlineMath>.</p>
        <p><strong>Solution:</strong></p>
        <p>As <InlineMath>{`x \\to \\infty`}</InlineMath>:</p>
        <MathBlock>{`\\frac{e^x}{1 + e^x} = \\frac{1}{e^{-x} + 1} \\to \\frac{1}{0 + 1} = 1`}</MathBlock>
        <p>As <InlineMath>{`x \\to -\\infty`}</InlineMath>:</p>
        <MathBlock>{`\\frac{e^x}{1 + e^x} \\to \\frac{0}{1 + 0} = 0`}</MathBlock>
        <p>
          Horizontal asymptotes: <InlineMath>{`y = 1`}</InlineMath> (as <InlineMath>{`x \\to \\infty`}</InlineMath>)
          and <InlineMath>{`y = 0`}</InlineMath> (as <InlineMath>{`x \\to -\\infty`}</InlineMath>).
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
          <strong>Growth hierarchy:</strong> <InlineMath>{`\\ln x \\ll x^a \\ll b^x \\ll x!`}</InlineMath> for <InlineMath>{`a > 0, b > 1`}</InlineMath>.
        </li>
        <li>
          <strong>Logarithms:</strong> Grow slower than any positive power of <InlineMath>{`x`}</InlineMath>.
        </li>
        <li>
          <strong>Exponentials:</strong> Grow faster than any polynomial.
        </li>
        <li>
          <strong>Near zero:</strong> <InlineMath>{`x^a \\ln x \\to 0`}</InlineMath> as <InlineMath>{`x \\to 0^+`}</InlineMath>.
        </li>
        <li>
          <strong>At <InlineMath>{`-\\infty`}</InlineMath>:</strong> <InlineMath>{`e^x \\to 0`}</InlineMath> faster than any polynomial blows up.
        </li>
        <li>
          <strong>Applications:</strong> Series convergence, asymptotic analysis, horizontal asymptotes.
        </li>
        <li>
          <strong>Super-exponential:</strong> <InlineMath>{`x^x`}</InlineMath> grows faster than <InlineMath>{`e^x`}</InlineMath>.
        </li>
      </ul>
    </LessonLayout>
  );
}
