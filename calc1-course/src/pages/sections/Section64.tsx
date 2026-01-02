import { LessonLayout } from '../../components/layout/LessonLayout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';

export default function Section64() {
  return (
    <LessonLayout sectionId={64}>
      <p>
        A <strong>sequence</strong> is an ordered list of numbers. Understanding when
        sequences approach a limit is fundamental to analysis and provides the foundation
        for infinite series.
      </p>

      <h2>Definition of a Sequence</h2>

      <Callout type="definition" title="Sequence">
        <p>
          A <strong>sequence</strong> is a function <InlineMath>{`a: \\mathbb{N} \\to \\mathbb{R}`}</InlineMath>
          (or <InlineMath>{`\\mathbb{C}`}</InlineMath>). We write <InlineMath>{`a_n`}</InlineMath> for
          <InlineMath>{`a(n)`}</InlineMath> and denote the sequence by <InlineMath>{`\\{a_n\\}`}</InlineMath>
          or <InlineMath>{`(a_n)_{n=1}^{\\infty}`}</InlineMath>.
        </p>
      </Callout>

      <Callout type="example" title="Example 1: Common Sequences">
        <ul className="list-disc pl-6 space-y-1">
          <li><InlineMath>{`a_n = \\frac{1}{n}`}</InlineMath>: <InlineMath>{`1, \\frac{1}{2}, \\frac{1}{3}, \\frac{1}{4}, \\ldots`}</InlineMath></li>
          <li><InlineMath>{`a_n = \\frac{n}{n+1}`}</InlineMath>: <InlineMath>{`\\frac{1}{2}, \\frac{2}{3}, \\frac{3}{4}, \\frac{4}{5}, \\ldots`}</InlineMath></li>
          <li><InlineMath>{`a_n = (-1)^n`}</InlineMath>: <InlineMath>{`-1, 1, -1, 1, \\ldots`}</InlineMath></li>
          <li><InlineMath>{`a_n = 2^n`}</InlineMath>: <InlineMath>{`2, 4, 8, 16, \\ldots`}</InlineMath></li>
          <li><InlineMath>{`a_n = \\frac{1}{2^n}`}</InlineMath>: <InlineMath>{`\\frac{1}{2}, \\frac{1}{4}, \\frac{1}{8}, \\frac{1}{16}, \\ldots`}</InlineMath></li>
        </ul>
      </Callout>

      <h2>Convergence</h2>

      <Callout type="definition" title="Limit of a Sequence">
        <p>
          A sequence <InlineMath>{`\\{a_n\\}`}</InlineMath> <strong>converges</strong> to the limit
          <InlineMath>{`L`}</InlineMath> if for every <InlineMath>{`\\varepsilon > 0`}</InlineMath>, there
          exists <InlineMath>{`N`}</InlineMath> such that:
        </p>
        <MathBlock>{`n > N \\quad \\Rightarrow \\quad |a_n - L| < \\varepsilon`}</MathBlock>
        <p>We write <InlineMath>{`\\lim_{n \\to \\infty} a_n = L`}</InlineMath> or <InlineMath>{`a_n \\to L`}</InlineMath>.</p>
      </Callout>

      <Callout type="info" title="Intuition">
        <p>
          The terms <InlineMath>{`a_n`}</InlineMath> get arbitrarily close to <InlineMath>{`L`}</InlineMath>
          and stay close. No matter how small the tolerance <InlineMath>{`\\varepsilon`}</InlineMath>,
          eventually all terms are within <InlineMath>{`\\varepsilon`}</InlineMath> of <InlineMath>{`L`}</InlineMath>.
        </p>
      </Callout>

      <Callout type="definition" title="Divergence">
        <p>
          A sequence that does not converge is said to <strong>diverge</strong>. This can
          happen if the terms grow without bound, oscillate, or behave erratically.
        </p>
      </Callout>

      <Callout type="example" title="Example 2: Proving Convergence">
        <p>Prove that <InlineMath>{`\\lim_{n \\to \\infty} \\frac{1}{n} = 0`}</InlineMath>.</p>
        <p><strong>Proof:</strong></p>
        <p>
          Let <InlineMath>{`\\varepsilon > 0`}</InlineMath> be given. We need <InlineMath>{`|1/n - 0| < \\varepsilon`}</InlineMath>,
          i.e., <InlineMath>{`1/n < \\varepsilon`}</InlineMath>, i.e., <InlineMath>{`n > 1/\\varepsilon`}</InlineMath>.
        </p>
        <p>
          Choose <InlineMath>{`N = \\lceil 1/\\varepsilon \\rceil`}</InlineMath>. Then for <InlineMath>{`n > N`}</InlineMath>:
        </p>
        <MathBlock>{`\\frac{1}{n} < \\frac{1}{N} \\leq \\varepsilon`}</MathBlock>
        <p>Therefore <InlineMath>{`1/n \\to 0`}</InlineMath>. ∎</p>
      </Callout>

      <h2>Limit Laws</h2>

      <Callout type="theorem" title="Algebraic Properties of Limits">
        <p>
          If <InlineMath>{`a_n \\to L`}</InlineMath> and <InlineMath>{`b_n \\to M`}</InlineMath>, then:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li><InlineMath>{`a_n + b_n \\to L + M`}</InlineMath></li>
          <li><InlineMath>{`a_n - b_n \\to L - M`}</InlineMath></li>
          <li><InlineMath>{`c \\cdot a_n \\to c \\cdot L`}</InlineMath> for any constant <InlineMath>{`c`}</InlineMath></li>
          <li><InlineMath>{`a_n \\cdot b_n \\to L \\cdot M`}</InlineMath></li>
          <li><InlineMath>{`a_n / b_n \\to L / M`}</InlineMath> if <InlineMath>{`M \\neq 0`}</InlineMath></li>
        </ul>
      </Callout>

      <Callout type="example" title="Example 3: Using Limit Laws">
        <p>Find <InlineMath>{`\\lim_{n \\to \\infty} \\frac{3n^2 + 2n}{n^2 + 1}`}</InlineMath>.</p>
        <p><strong>Solution:</strong></p>
        <p>Divide numerator and denominator by <InlineMath>{`n^2`}</InlineMath>:</p>
        <MathBlock>{`\\frac{3n^2 + 2n}{n^2 + 1} = \\frac{3 + \\frac{2}{n}}{1 + \\frac{1}{n^2}}`}</MathBlock>
        <p>
          As <InlineMath>{`n \\to \\infty`}</InlineMath>: <InlineMath>{`\\frac{2}{n} \\to 0`}</InlineMath> and
          <InlineMath>{`\\frac{1}{n^2} \\to 0`}</InlineMath>.
        </p>
        <MathBlock>{`\\lim_{n \\to \\infty} \\frac{3n^2 + 2n}{n^2 + 1} = \\frac{3 + 0}{1 + 0} = 3`}</MathBlock>
      </Callout>

      <h2>Important Limits</h2>

      <Callout type="theorem" title="Standard Limits">
        <ul className="list-disc pl-6 space-y-1">
          <li><InlineMath>{`\\lim_{n \\to \\infty} \\frac{1}{n^p} = 0`}</InlineMath> for <InlineMath>{`p > 0`}</InlineMath></li>
          <li><InlineMath>{`\\lim_{n \\to \\infty} r^n = 0`}</InlineMath> for <InlineMath>{`|r| < 1`}</InlineMath></li>
          <li><InlineMath>{`\\lim_{n \\to \\infty} n^{1/n} = 1`}</InlineMath></li>
          <li><InlineMath>{`\\lim_{n \\to \\infty} \\left(1 + \\frac{1}{n}\\right)^n = e`}</InlineMath></li>
          <li><InlineMath>{`\\lim_{n \\to \\infty} \\frac{n!}{n^n} = 0`}</InlineMath></li>
        </ul>
      </Callout>

      <Callout type="example" title="Example 4: Geometric Sequence">
        <p>For what values of <InlineMath>{`r`}</InlineMath> does <InlineMath>{`\\{r^n\\}`}</InlineMath> converge?</p>
        <p><strong>Solution:</strong></p>
        <ul className="list-disc pl-6 space-y-1">
          <li>If <InlineMath>{`|r| < 1`}</InlineMath>: <InlineMath>{`r^n \\to 0`}</InlineMath></li>
          <li>If <InlineMath>{`r = 1`}</InlineMath>: <InlineMath>{`r^n = 1 \\to 1`}</InlineMath></li>
          <li>If <InlineMath>{`r > 1`}</InlineMath>: <InlineMath>{`r^n \\to \\infty`}</InlineMath> (diverges)</li>
          <li>If <InlineMath>{`r \\leq -1`}</InlineMath>: oscillates (diverges)</li>
        </ul>
      </Callout>

      <h2>Squeeze Theorem</h2>

      <Callout type="theorem" title="Squeeze Theorem">
        <p>
          If <InlineMath>{`a_n \\leq b_n \\leq c_n`}</InlineMath> for all <InlineMath>{`n`}</InlineMath>, and
          <InlineMath>{`a_n \\to L`}</InlineMath> and <InlineMath>{`c_n \\to L`}</InlineMath>, then
          <InlineMath>{`b_n \\to L`}</InlineMath>.
        </p>
      </Callout>

      <Callout type="example" title="Example 5: Using the Squeeze Theorem">
        <p>Find <InlineMath>{`\\lim_{n \\to \\infty} \\frac{\\sin n}{n}`}</InlineMath>.</p>
        <p><strong>Solution:</strong></p>
        <p>Since <InlineMath>{`-1 \\leq \\sin n \\leq 1`}</InlineMath>:</p>
        <MathBlock>{`-\\frac{1}{n} \\leq \\frac{\\sin n}{n} \\leq \\frac{1}{n}`}</MathBlock>
        <p>
          Both <InlineMath>{`-1/n \\to 0`}</InlineMath> and <InlineMath>{`1/n \\to 0`}</InlineMath>.
          By the Squeeze Theorem, <InlineMath>{`\\frac{\\sin n}{n} \\to 0`}</InlineMath>.
        </p>
      </Callout>

      <h2>Monotonic Sequences</h2>

      <Callout type="definition" title="Monotonic Sequences">
        <p>A sequence <InlineMath>{`\\{a_n\\}`}</InlineMath> is:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Increasing</strong> if <InlineMath>{`a_n \\leq a_{n+1}`}</InlineMath> for all <InlineMath>{`n`}</InlineMath></li>
          <li><strong>Strictly increasing</strong> if <InlineMath>{`a_n < a_{n+1}`}</InlineMath> for all <InlineMath>{`n`}</InlineMath></li>
          <li><strong>Decreasing</strong> if <InlineMath>{`a_n \\geq a_{n+1}`}</InlineMath> for all <InlineMath>{`n`}</InlineMath></li>
          <li><strong>Monotonic</strong> if it is either increasing or decreasing</li>
        </ul>
      </Callout>

      <Callout type="theorem" title="Monotone Convergence Theorem">
        <p>
          Every bounded monotonic sequence converges.
        </p>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li>A bounded increasing sequence converges to its supremum</li>
          <li>A bounded decreasing sequence converges to its infimum</li>
        </ul>
      </Callout>

      <Callout type="example" title="Example 6: Applying Monotone Convergence">
        <p>
          Let <InlineMath>{`a_1 = 1`}</InlineMath> and <InlineMath>{`a_{n+1} = \\frac{1}{2}(a_n + 2)`}</InlineMath>.
          Show the sequence converges and find its limit.
        </p>
        <p><strong>Solution:</strong></p>
        <p>First few terms: <InlineMath>{`1, 1.5, 1.75, 1.875, \\ldots`}</InlineMath></p>
        <p><strong>Bounded above:</strong> We claim <InlineMath>{`a_n < 2`}</InlineMath> for all <InlineMath>{`n`}</InlineMath>.</p>
        <p>
          Base: <InlineMath>{`a_1 = 1 < 2`}</InlineMath>. If <InlineMath>{`a_n < 2`}</InlineMath>, then
          <InlineMath>{`a_{n+1} = \\frac{1}{2}(a_n + 2) < \\frac{1}{2}(2 + 2) = 2`}</InlineMath>.
        </p>
        <p><strong>Increasing:</strong></p>
        <MathBlock>{`a_{n+1} - a_n = \\frac{1}{2}(a_n + 2) - a_n = 1 - \\frac{a_n}{2} = \\frac{2 - a_n}{2} > 0`}</MathBlock>
        <p>since <InlineMath>{`a_n < 2`}</InlineMath>.</p>
        <p><strong>Find limit:</strong> By monotone convergence, the limit <InlineMath>{`L`}</InlineMath> exists.</p>
        <MathBlock>{`L = \\frac{1}{2}(L + 2) \\quad \\Rightarrow \\quad 2L = L + 2 \\quad \\Rightarrow \\quad L = 2`}</MathBlock>
      </Callout>

      <h2>Zeno's Paradox</h2>

      <Callout type="info" title="Zeno's Dichotomy Paradox">
        <p>
          To travel from A to B, you must first travel half the distance, then half the
          remaining distance, then half again, and so on. This seems to require infinitely
          many steps—how can you ever arrive?
        </p>
      </Callout>

      <Callout type="example" title="Example 7: Resolving Zeno's Paradox">
        <p>
          Let the total distance be 1. The partial distances traveled form a sequence:
        </p>
        <MathBlock>{`S_n = \\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} + \\cdots + \\frac{1}{2^n}`}</MathBlock>
        <p>This is a geometric series with first term <InlineMath>{`a = 1/2`}</InlineMath> and ratio <InlineMath>{`r = 1/2`}</InlineMath>:</p>
        <MathBlock>{`S_n = \\frac{1/2(1 - (1/2)^n)}{1 - 1/2} = 1 - \\frac{1}{2^n}`}</MathBlock>
        <p>As <InlineMath>{`n \\to \\infty`}</InlineMath>, <InlineMath>{`S_n \\to 1`}</InlineMath>.</p>
        <p>
          The paradox is resolved: infinitely many steps can be completed in finite time
          if the time for each step decreases appropriately.
        </p>
      </Callout>

      <h2>Subsequences</h2>

      <Callout type="definition" title="Subsequence">
        <p>
          A <strong>subsequence</strong> of <InlineMath>{`\\{a_n\\}`}</InlineMath> is a sequence
          <InlineMath>{`\\{a_{n_k}\\}`}</InlineMath> where <InlineMath>{`n_1 < n_2 < n_3 < \\cdots`}</InlineMath>.
        </p>
      </Callout>

      <Callout type="theorem" title="Subsequence Theorem">
        <p>
          If <InlineMath>{`a_n \\to L`}</InlineMath>, then every subsequence of <InlineMath>{`\\{a_n\\}`}</InlineMath>
          also converges to <InlineMath>{`L`}</InlineMath>.
        </p>
        <p className="mt-2">
          <strong>Contrapositive:</strong> If two subsequences converge to different limits,
          the original sequence diverges.
        </p>
      </Callout>

      <Callout type="example" title="Example 8: Using Subsequences to Show Divergence">
        <p>Show that <InlineMath>{`\\{(-1)^n\\}`}</InlineMath> diverges.</p>
        <p><strong>Solution:</strong></p>
        <p>
          The subsequence of even terms: <InlineMath>{`a_2, a_4, a_6, \\ldots = 1, 1, 1, \\ldots \\to 1`}</InlineMath>
        </p>
        <p>
          The subsequence of odd terms: <InlineMath>{`a_1, a_3, a_5, \\ldots = -1, -1, -1, \\ldots \\to -1`}</InlineMath>
        </p>
        <p>
          Since these subsequences have different limits, <InlineMath>{`\\{(-1)^n\\}`}</InlineMath> diverges.
        </p>
      </Callout>

      <h2>Recursive Sequences</h2>

      <Callout type="example" title="Example 9: Fibonacci-Type">
        <p>
          Let <InlineMath>{`a_1 = a_2 = 1`}</InlineMath> and <InlineMath>{`a_{n+2} = a_{n+1} + a_n`}</InlineMath>.
          Find <InlineMath>{`\\lim_{n \\to \\infty} \\frac{a_{n+1}}{a_n}`}</InlineMath> if it exists.
        </p>
        <p><strong>Solution:</strong></p>
        <p>
          Assume the limit <InlineMath>{`L = \\lim \\frac{a_{n+1}}{a_n}`}</InlineMath> exists.
          From the recurrence:
        </p>
        <MathBlock>{`\\frac{a_{n+2}}{a_{n+1}} = \\frac{a_{n+1} + a_n}{a_{n+1}} = 1 + \\frac{a_n}{a_{n+1}}`}</MathBlock>
        <p>Taking limits:</p>
        <MathBlock>{`L = 1 + \\frac{1}{L}`}</MathBlock>
        <MathBlock>{`L^2 = L + 1 \\quad \\Rightarrow \\quad L^2 - L - 1 = 0`}</MathBlock>
        <MathBlock>{`L = \\frac{1 + \\sqrt{5}}{2} = \\varphi \\approx 1.618`}</MathBlock>
        <p>This is the golden ratio.</p>
      </Callout>

      <Callout type="example" title="Example 10: Square Root Iteration">
        <p>
          Let <InlineMath>{`a_1 = 2`}</InlineMath> and <InlineMath>{`a_{n+1} = \\frac{1}{2}\\left(a_n + \\frac{3}{a_n}\\right)`}</InlineMath>.
          Find the limit.
        </p>
        <p><strong>Solution:</strong></p>
        <p>This is Newton's method for <InlineMath>{`\\sqrt{3}`}</InlineMath>. If the limit <InlineMath>{`L`}</InlineMath> exists:</p>
        <MathBlock>{`L = \\frac{1}{2}\\left(L + \\frac{3}{L}\\right)`}</MathBlock>
        <MathBlock>{`2L = L + \\frac{3}{L} \\quad \\Rightarrow \\quad L = \\frac{3}{L} \\quad \\Rightarrow \\quad L^2 = 3`}</MathBlock>
        <p>So <InlineMath>{`L = \\sqrt{3}`}</InlineMath> (taking positive root since <InlineMath>{`a_n > 0`}</InlineMath>).</p>
      </Callout>

      <h2>Summary</h2>
      <ul>
        <li>
          <strong>Sequence:</strong> Function from <InlineMath>{`\\mathbb{N}`}</InlineMath> to <InlineMath>{`\\mathbb{R}`}</InlineMath>
        </li>
        <li>
          <strong>Convergence:</strong> <InlineMath>{`a_n \\to L`}</InlineMath> means terms get and stay arbitrarily close to <InlineMath>{`L`}</InlineMath>
        </li>
        <li>
          <strong>Limit laws:</strong> Limits respect arithmetic operations
        </li>
        <li>
          <strong>Squeeze theorem:</strong> Bound a sequence between two that converge to the same limit
        </li>
        <li>
          <strong>Monotone convergence:</strong> Bounded monotonic sequences converge
        </li>
        <li>
          <strong>Subsequences:</strong> If <InlineMath>{`a_n \\to L`}</InlineMath>, all subsequences → <InlineMath>{`L`}</InlineMath>
        </li>
        <li>
          <strong>Zeno's paradox:</strong> Resolved by the convergence of geometric series
        </li>
      </ul>
    </LessonLayout>
  );
}
