import { LessonLayout } from '../../components/layout/LessonLayout';
import { Math as MathInline, MathBlock } from '../../components/common/MathBlock';
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
          A <strong>sequence</strong> is a function <MathInline>{`a: \\mathbb{N} \\to \\mathbb{R}`}</MathInline>
          (or <MathInline>{`\\mathbb{C}`}</MathInline>). We write <MathInline>{`a_n`}</MathInline> for
          <MathInline>{`a(n)`}</MathInline> and denote the sequence by <MathInline>{`\\{a_n\\}`}</MathInline>
          or <MathInline>{`(a_n)_{n=1}^{\\infty}`}</MathInline>.
        </p>
      </Callout>

      <Callout type="example" title="Example 1: Common Sequences">
        <ul className="list-disc pl-6 space-y-1">
          <li><MathInline>{`a_n = \\frac{1}{n}`}</MathInline>: <MathInline>{`1, \\frac{1}{2}, \\frac{1}{3}, \\frac{1}{4}, \\ldots`}</MathInline></li>
          <li><MathInline>{`a_n = \\frac{n}{n+1}`}</MathInline>: <MathInline>{`\\frac{1}{2}, \\frac{2}{3}, \\frac{3}{4}, \\frac{4}{5}, \\ldots`}</MathInline></li>
          <li><MathInline>{`a_n = (-1)^n`}</MathInline>: <MathInline>{`-1, 1, -1, 1, \\ldots`}</MathInline></li>
          <li><MathInline>{`a_n = 2^n`}</MathInline>: <MathInline>{`2, 4, 8, 16, \\ldots`}</MathInline></li>
          <li><MathInline>{`a_n = \\frac{1}{2^n}`}</MathInline>: <MathInline>{`\\frac{1}{2}, \\frac{1}{4}, \\frac{1}{8}, \\frac{1}{16}, \\ldots`}</MathInline></li>
        </ul>
      </Callout>

      <h2>Convergence</h2>

      <Callout type="definition" title="Limit of a Sequence">
        <p>
          A sequence <MathInline>{`\\{a_n\\}`}</MathInline> <strong>converges</strong> to the limit
          <MathInline>{`L`}</MathInline> if for every <MathInline>{`\\varepsilon > 0`}</MathInline>, there
          exists <MathInline>{`N`}</MathInline> such that:
        </p>
        <MathBlock>{`n > N \\quad \\Rightarrow \\quad |a_n - L| < \\varepsilon`}</MathBlock>
        <p>We write <MathInline>{`\\lim_{n \\to \\infty} a_n = L`}</MathInline> or <MathInline>{`a_n \\to L`}</MathInline>.</p>
      </Callout>

      <Callout type="info" title="Intuition">
        <p>
          The terms <MathInline>{`a_n`}</MathInline> get arbitrarily close to <MathInline>{`L`}</MathInline>
          and stay close. No matter how small the tolerance <MathInline>{`\\varepsilon`}</MathInline>,
          eventually all terms are within <MathInline>{`\\varepsilon`}</MathInline> of <MathInline>{`L`}</MathInline>.
        </p>
      </Callout>

      <Callout type="definition" title="Divergence">
        <p>
          A sequence that does not converge is said to <strong>diverge</strong>. This can
          happen if the terms grow without bound, oscillate, or behave erratically.
        </p>
      </Callout>

      <Callout type="example" title="Example 2: Proving Convergence">
        <p>Prove that <MathInline>{`\\lim_{n \\to \\infty} \\frac{1}{n} = 0`}</MathInline>.</p>
        <p><strong>Proof:</strong></p>
        <p>
          Let <MathInline>{`\\varepsilon > 0`}</MathInline> be given. We need <MathInline>{`|1/n - 0| < \\varepsilon`}</MathInline>,
          i.e., <MathInline>{`1/n < \\varepsilon`}</MathInline>, i.e., <MathInline>{`n > 1/\\varepsilon`}</MathInline>.
        </p>
        <p>
          Choose <MathInline>{`N = \\lceil 1/\\varepsilon \\rceil`}</MathInline>. Then for <MathInline>{`n > N`}</MathInline>:
        </p>
        <MathBlock>{`\\frac{1}{n} < \\frac{1}{N} \\leq \\varepsilon`}</MathBlock>
        <p>Therefore <MathInline>{`1/n \\to 0`}</MathInline>. ∎</p>
      </Callout>

      <h2>Limit Laws</h2>

      <Callout type="theorem" title="Algebraic Properties of Limits">
        <p>
          If <MathInline>{`a_n \\to L`}</MathInline> and <MathInline>{`b_n \\to M`}</MathInline>, then:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li><MathInline>{`a_n + b_n \\to L + M`}</MathInline></li>
          <li><MathInline>{`a_n - b_n \\to L - M`}</MathInline></li>
          <li><MathInline>{`c \\cdot a_n \\to c \\cdot L`}</MathInline> for any constant <MathInline>{`c`}</MathInline></li>
          <li><MathInline>{`a_n \\cdot b_n \\to L \\cdot M`}</MathInline></li>
          <li><MathInline>{`a_n / b_n \\to L / M`}</MathInline> if <MathInline>{`M \\neq 0`}</MathInline></li>
        </ul>
      </Callout>

      <Callout type="example" title="Example 3: Using Limit Laws">
        <p>Find <MathInline>{`\\lim_{n \\to \\infty} \\frac{3n^2 + 2n}{n^2 + 1}`}</MathInline>.</p>
        <p><strong>Solution:</strong></p>
        <p>Divide numerator and denominator by <MathInline>{`n^2`}</MathInline>:</p>
        <MathBlock>{`\\frac{3n^2 + 2n}{n^2 + 1} = \\frac{3 + \\frac{2}{n}}{1 + \\frac{1}{n^2}}`}</MathBlock>
        <p>
          As <MathInline>{`n \\to \\infty`}</MathInline>: <MathInline>{`\\frac{2}{n} \\to 0`}</MathInline> and
          <MathInline>{`\\frac{1}{n^2} \\to 0`}</MathInline>.
        </p>
        <MathBlock>{`\\lim_{n \\to \\infty} \\frac{3n^2 + 2n}{n^2 + 1} = \\frac{3 + 0}{1 + 0} = 3`}</MathBlock>
      </Callout>

      <h2>Important Limits</h2>

      <Callout type="theorem" title="Standard Limits">
        <ul className="list-disc pl-6 space-y-1">
          <li><MathInline>{`\\lim_{n \\to \\infty} \\frac{1}{n^p} = 0`}</MathInline> for <MathInline>{`p > 0`}</MathInline></li>
          <li><MathInline>{`\\lim_{n \\to \\infty} r^n = 0`}</MathInline> for <MathInline>{`|r| < 1`}</MathInline></li>
          <li><MathInline>{`\\lim_{n \\to \\infty} n^{1/n} = 1`}</MathInline></li>
          <li><MathInline>{`\\lim_{n \\to \\infty} \\left(1 + \\frac{1}{n}\\right)^n = e`}</MathInline></li>
          <li><MathInline>{`\\lim_{n \\to \\infty} \\frac{n!}{n^n} = 0`}</MathInline></li>
        </ul>
      </Callout>

      <Callout type="example" title="Example 4: Geometric Sequence">
        <p>For what values of <MathInline>{`r`}</MathInline> does <MathInline>{`\\{r^n\\}`}</MathInline> converge?</p>
        <p><strong>Solution:</strong></p>
        <ul className="list-disc pl-6 space-y-1">
          <li>If <MathInline>{`|r| < 1`}</MathInline>: <MathInline>{`r^n \\to 0`}</MathInline></li>
          <li>If <MathInline>{`r = 1`}</MathInline>: <MathInline>{`r^n = 1 \\to 1`}</MathInline></li>
          <li>If <MathInline>{`r > 1`}</MathInline>: <MathInline>{`r^n \\to \\infty`}</MathInline> (diverges)</li>
          <li>If <MathInline>{`r \\leq -1`}</MathInline>: oscillates (diverges)</li>
        </ul>
      </Callout>

      <h2>Squeeze Theorem</h2>

      <Callout type="theorem" title="Squeeze Theorem">
        <p>
          If <MathInline>{`a_n \\leq b_n \\leq c_n`}</MathInline> for all <MathInline>{`n`}</MathInline>, and
          <MathInline>{`a_n \\to L`}</MathInline> and <MathInline>{`c_n \\to L`}</MathInline>, then
          <MathInline>{`b_n \\to L`}</MathInline>.
        </p>
      </Callout>

      <Callout type="example" title="Example 5: Using the Squeeze Theorem">
        <p>Find <MathInline>{`\\lim_{n \\to \\infty} \\frac{\\sin n}{n}`}</MathInline>.</p>
        <p><strong>Solution:</strong></p>
        <p>Since <MathInline>{`-1 \\leq \\sin n \\leq 1`}</MathInline>:</p>
        <MathBlock>{`-\\frac{1}{n} \\leq \\frac{\\sin n}{n} \\leq \\frac{1}{n}`}</MathBlock>
        <p>
          Both <MathInline>{`-1/n \\to 0`}</MathInline> and <MathInline>{`1/n \\to 0`}</MathInline>.
          By the Squeeze Theorem, <MathInline>{`\\frac{\\sin n}{n} \\to 0`}</MathInline>.
        </p>
      </Callout>

      <h2>Monotonic Sequences</h2>

      <Callout type="definition" title="Monotonic Sequences">
        <p>A sequence <MathInline>{`\\{a_n\\}`}</MathInline> is:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Increasing</strong> if <MathInline>{`a_n \\leq a_{n+1}`}</MathInline> for all <MathInline>{`n`}</MathInline></li>
          <li><strong>Strictly increasing</strong> if <MathInline>{`a_n < a_{n+1}`}</MathInline> for all <MathInline>{`n`}</MathInline></li>
          <li><strong>Decreasing</strong> if <MathInline>{`a_n \\geq a_{n+1}`}</MathInline> for all <MathInline>{`n`}</MathInline></li>
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
          Let <MathInline>{`a_1 = 1`}</MathInline> and <MathInline>{`a_{n+1} = \\frac{1}{2}(a_n + 2)`}</MathInline>.
          Show the sequence converges and find its limit.
        </p>
        <p><strong>Solution:</strong></p>
        <p>First few terms: <MathInline>{`1, 1.5, 1.75, 1.875, \\ldots`}</MathInline></p>
        <p><strong>Bounded above:</strong> We claim <MathInline>{`a_n < 2`}</MathInline> for all <MathInline>{`n`}</MathInline>.</p>
        <p>
          Base: <MathInline>{`a_1 = 1 < 2`}</MathInline>. If <MathInline>{`a_n < 2`}</MathInline>, then
          <MathInline>{`a_{n+1} = \\frac{1}{2}(a_n + 2) < \\frac{1}{2}(2 + 2) = 2`}</MathInline>.
        </p>
        <p><strong>Increasing:</strong></p>
        <MathBlock>{`a_{n+1} - a_n = \\frac{1}{2}(a_n + 2) - a_n = 1 - \\frac{a_n}{2} = \\frac{2 - a_n}{2} > 0`}</MathBlock>
        <p>since <MathInline>{`a_n < 2`}</MathInline>.</p>
        <p><strong>Find limit:</strong> By monotone convergence, the limit <MathInline>{`L`}</MathInline> exists.</p>
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
        <p>This is a geometric series with first term <MathInline>{`a = 1/2`}</MathInline> and ratio <MathInline>{`r = 1/2`}</MathInline>:</p>
        <MathBlock>{`S_n = \\frac{1/2(1 - (1/2)^n)}{1 - 1/2} = 1 - \\frac{1}{2^n}`}</MathBlock>
        <p>As <MathInline>{`n \\to \\infty`}</MathInline>, <MathInline>{`S_n \\to 1`}</MathInline>.</p>
        <p>
          The paradox is resolved: infinitely many steps can be completed in finite time
          if the time for each step decreases appropriately.
        </p>
      </Callout>

      <h2>Subsequences</h2>

      <Callout type="definition" title="Subsequence">
        <p>
          A <strong>subsequence</strong> of <MathInline>{`\\{a_n\\}`}</MathInline> is a sequence
          <MathInline>{`\\{a_{n_k}\\}`}</MathInline> where <MathInline>{`n_1 < n_2 < n_3 < \\cdots`}</MathInline>.
        </p>
      </Callout>

      <Callout type="theorem" title="Subsequence Theorem">
        <p>
          If <MathInline>{`a_n \\to L`}</MathInline>, then every subsequence of <MathInline>{`\\{a_n\\}`}</MathInline>
          also converges to <MathInline>{`L`}</MathInline>.
        </p>
        <p className="mt-2">
          <strong>Contrapositive:</strong> If two subsequences converge to different limits,
          the original sequence diverges.
        </p>
      </Callout>

      <Callout type="example" title="Example 8: Using Subsequences to Show Divergence">
        <p>Show that <MathInline>{`\\{(-1)^n\\}`}</MathInline> diverges.</p>
        <p><strong>Solution:</strong></p>
        <p>
          The subsequence of even terms: <MathInline>{`a_2, a_4, a_6, \\ldots = 1, 1, 1, \\ldots \\to 1`}</MathInline>
        </p>
        <p>
          The subsequence of odd terms: <MathInline>{`a_1, a_3, a_5, \\ldots = -1, -1, -1, \\ldots \\to -1`}</MathInline>
        </p>
        <p>
          Since these subsequences have different limits, <MathInline>{`\\{(-1)^n\\}`}</MathInline> diverges.
        </p>
      </Callout>

      <h2>Recursive Sequences</h2>

      <Callout type="example" title="Example 9: Fibonacci-Type">
        <p>
          Let <MathInline>{`a_1 = a_2 = 1`}</MathInline> and <MathInline>{`a_{n+2} = a_{n+1} + a_n`}</MathInline>.
          Find <MathInline>{`\\lim_{n \\to \\infty} \\frac{a_{n+1}}{a_n}`}</MathInline> if it exists.
        </p>
        <p><strong>Solution:</strong></p>
        <p>
          Assume the limit <MathInline>{`L = \\lim \\frac{a_{n+1}}{a_n}`}</MathInline> exists.
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
          Let <MathInline>{`a_1 = 2`}</MathInline> and <MathInline>{`a_{n+1} = \\frac{1}{2}\\left(a_n + \\frac{3}{a_n}\\right)`}</MathInline>.
          Find the limit.
        </p>
        <p><strong>Solution:</strong></p>
        <p>This is Newton's method for <MathInline>{`\\sqrt{3}`}</MathInline>. If the limit <MathInline>{`L`}</MathInline> exists:</p>
        <MathBlock>{`L = \\frac{1}{2}\\left(L + \\frac{3}{L}\\right)`}</MathBlock>
        <MathBlock>{`2L = L + \\frac{3}{L} \\quad \\Rightarrow \\quad L = \\frac{3}{L} \\quad \\Rightarrow \\quad L^2 = 3`}</MathBlock>
        <p>So <MathInline>{`L = \\sqrt{3}`}</MathInline> (taking positive root since <MathInline>{`a_n > 0`}</MathInline>).</p>
      </Callout>

      <h2>Summary</h2>
      <ul>
        <li>
          <strong>Sequence:</strong> Function from <MathInline>{`\\mathbb{N}`}</MathInline> to <MathInline>{`\\mathbb{R}`}</MathInline>
        </li>
        <li>
          <strong>Convergence:</strong> <MathInline>{`a_n \\to L`}</MathInline> means terms get and stay arbitrarily close to <MathInline>{`L`}</MathInline>
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
          <strong>Subsequences:</strong> If <MathInline>{`a_n \\to L`}</MathInline>, all subsequences → <MathInline>{`L`}</MathInline>
        </li>
        <li>
          <strong>Zeno's paradox:</strong> Resolved by the convergence of geometric series
        </li>
      </ul>
    </LessonLayout>
  );
}
