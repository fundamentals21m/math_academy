import { LessonLayout } from '../../components/layout/LessonLayout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';

export default function Section65() {
  return (
    <LessonLayout sectionId={65}>
      <p>
        An <strong>infinite series</strong> is the sum of infinitely many terms. While
        this seems paradoxical, we can make precise sense of it using limits of partial sums.
      </p>

      <h2>Definition of Infinite Series</h2>

      <Callout type="definition" title="Infinite Series">
        <p>
          Given a sequence <InlineMath>{`\\{a_n\\}`}</InlineMath>, the <strong>infinite series</strong>
          <InlineMath>{`\\sum_{n=1}^{\\infty} a_n`}</InlineMath> is defined as the limit of its
          <strong> partial sums</strong>:
        </p>
        <MathBlock>{`S_N = \\sum_{n=1}^{N} a_n = a_1 + a_2 + \\cdots + a_N`}</MathBlock>
        <MathBlock>{`\\sum_{n=1}^{\\infty} a_n = \\lim_{N \\to \\infty} S_N`}</MathBlock>
        <p>if this limit exists.</p>
      </Callout>

      <Callout type="definition" title="Convergence and Divergence">
        <ul className="list-disc pl-6 space-y-1">
          <li>
            The series <strong>converges</strong> if <InlineMath>{`\\lim_{N \\to \\infty} S_N = S`}</InlineMath>
            exists and is finite. We say the series has sum <InlineMath>{`S`}</InlineMath>.
          </li>
          <li>
            The series <strong>diverges</strong> if the limit does not exist or is infinite.
          </li>
        </ul>
      </Callout>

      <h2>The Geometric Series</h2>

      <Callout type="theorem" title="Geometric Series">
        <p>
          For <InlineMath>{`|r| < 1`}</InlineMath>, the geometric series converges:
        </p>
        <MathBlock>{`\\sum_{n=0}^{\\infty} r^n = \\frac{1}{1-r}`}</MathBlock>
        <p>
          For <InlineMath>{`|r| \\geq 1`}</InlineMath>, the series diverges.
        </p>
      </Callout>

      <Callout type="info" title="Proof">
        <p>The partial sum of a geometric series is:</p>
        <MathBlock>{`S_N = 1 + r + r^2 + \\cdots + r^N = \\frac{1 - r^{N+1}}{1 - r}`}</MathBlock>
        <p>
          If <InlineMath>{`|r| < 1`}</InlineMath>, then <InlineMath>{`r^{N+1} \\to 0`}</InlineMath>, so:
        </p>
        <MathBlock>{`\\lim_{N \\to \\infty} S_N = \\frac{1}{1-r}`}</MathBlock>
        <p>
          If <InlineMath>{`|r| \\geq 1`}</InlineMath>, then <InlineMath>{`r^{N+1}`}</InlineMath> does not approach 0,
          and the series diverges.
        </p>
      </Callout>

      <Callout type="example" title="Example 1: Basic Geometric Series">
        <MathBlock>{`\\sum_{n=0}^{\\infty} \\left(\\frac{1}{2}\\right)^n = \\frac{1}{1 - 1/2} = 2`}</MathBlock>
        <p>
          Verification: <InlineMath>{`1 + \\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} + \\cdots = 2`}</InlineMath>
        </p>
      </Callout>

      <Callout type="example" title="Example 2: Shifted Geometric Series">
        <MathBlock>{`\\sum_{n=1}^{\\infty} \\left(\\frac{1}{3}\\right)^n = \\frac{1/3}{1 - 1/3} = \\frac{1/3}{2/3} = \\frac{1}{2}`}</MathBlock>
        <p>Or: Start from <InlineMath>{`n=0`}</InlineMath> and subtract the first term:</p>
        <MathBlock>{`\\sum_{n=1}^{\\infty} \\left(\\frac{1}{3}\\right)^n = \\frac{1}{1-1/3} - 1 = \\frac{3}{2} - 1 = \\frac{1}{2}`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 3: Geometric with Coefficient">
        <MathBlock>{`\\sum_{n=0}^{\\infty} \\frac{5}{4^n} = 5 \\sum_{n=0}^{\\infty} \\left(\\frac{1}{4}\\right)^n = 5 \\cdot \\frac{1}{1 - 1/4} = 5 \\cdot \\frac{4}{3} = \\frac{20}{3}`}</MathBlock>
      </Callout>

      <h2>The Harmonic Series</h2>

      <Callout type="theorem" title="Harmonic Series Diverges">
        <p>The harmonic series diverges:</p>
        <MathBlock>{`\\sum_{n=1}^{\\infty} \\frac{1}{n} = 1 + \\frac{1}{2} + \\frac{1}{3} + \\frac{1}{4} + \\cdots = \\infty`}</MathBlock>
      </Callout>

      <Callout type="info" title="Proof (Oresme)">
        <p>Group terms:</p>
        <MathBlock>{`1 + \\frac{1}{2} + \\left(\\frac{1}{3} + \\frac{1}{4}\\right) + \\left(\\frac{1}{5} + \\frac{1}{6} + \\frac{1}{7} + \\frac{1}{8}\\right) + \\cdots`}</MathBlock>
        <MathBlock>{`> 1 + \\frac{1}{2} + \\left(\\frac{1}{4} + \\frac{1}{4}\\right) + \\left(\\frac{1}{8} + \\frac{1}{8} + \\frac{1}{8} + \\frac{1}{8}\\right) + \\cdots`}</MathBlock>
        <MathBlock>{`= 1 + \\frac{1}{2} + \\frac{1}{2} + \\frac{1}{2} + \\cdots = \\infty`}</MathBlock>
      </Callout>

      <h2>Necessary Condition for Convergence</h2>

      <Callout type="theorem" title="Divergence Test (nth Term Test)">
        <p>
          If <InlineMath>{`\\sum a_n`}</InlineMath> converges, then <InlineMath>{`\\lim_{n \\to \\infty} a_n = 0`}</InlineMath>.
        </p>
        <p className="mt-2">
          <strong>Contrapositive:</strong> If <InlineMath>{`a_n \\not\\to 0`}</InlineMath>, then
          <InlineMath>{`\\sum a_n`}</InlineMath> diverges.
        </p>
      </Callout>

      <Callout type="info" title="Warning">
        <p>
          The converse is <strong>false</strong>: <InlineMath>{`a_n \\to 0`}</InlineMath> does NOT
          guarantee convergence. The harmonic series is a counterexample.
        </p>
      </Callout>

      <Callout type="example" title="Example 4: Using the Divergence Test">
        <p>
          <InlineMath>{`\\sum_{n=1}^{\\infty} \\frac{n}{n+1}`}</InlineMath> diverges because
          <InlineMath>{`\\frac{n}{n+1} \\to 1 \\neq 0`}</InlineMath>.
        </p>
        <p className="mt-2">
          <InlineMath>{`\\sum_{n=1}^{\\infty} (-1)^n`}</InlineMath> diverges because
          <InlineMath>{`(-1)^n`}</InlineMath> does not approach any limit.
        </p>
      </Callout>

      <h2>Properties of Convergent Series</h2>

      <Callout type="theorem" title="Algebraic Properties">
        <p>
          If <InlineMath>{`\\sum a_n = A`}</InlineMath> and <InlineMath>{`\\sum b_n = B`}</InlineMath> converge:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li><InlineMath>{`\\sum (a_n + b_n) = A + B`}</InlineMath></li>
          <li><InlineMath>{`\\sum (a_n - b_n) = A - B`}</InlineMath></li>
          <li><InlineMath>{`\\sum c \\cdot a_n = c \\cdot A`}</InlineMath> for any constant <InlineMath>{`c`}</InlineMath></li>
        </ul>
      </Callout>

      <Callout type="info" title="Convergent ± Divergent">
        <p>
          If <InlineMath>{`\\sum a_n`}</InlineMath> converges and <InlineMath>{`\\sum b_n`}</InlineMath> diverges,
          then <InlineMath>{`\\sum (a_n + b_n)`}</InlineMath> diverges.
        </p>
      </Callout>

      <h2>Telescoping Series</h2>

      <Callout type="definition" title="Telescoping Series">
        <p>
          A <strong>telescoping series</strong> has terms that cancel in the partial sums.
          Typically, we write <InlineMath>{`a_n = b_n - b_{n+1}`}</InlineMath> so most terms cancel.
        </p>
      </Callout>

      <Callout type="example" title="Example 5: Basic Telescoping">
        <p>Evaluate <InlineMath>{`\\sum_{n=1}^{\\infty} \\frac{1}{n(n+1)}`}</InlineMath>.</p>
        <p><strong>Solution:</strong></p>
        <p>Use partial fractions:</p>
        <MathBlock>{`\\frac{1}{n(n+1)} = \\frac{1}{n} - \\frac{1}{n+1}`}</MathBlock>
        <p>Partial sum:</p>
        <MathBlock>{`S_N = \\sum_{n=1}^{N} \\left(\\frac{1}{n} - \\frac{1}{n+1}\\right)`}</MathBlock>
        <MathBlock>{`= \\left(1 - \\frac{1}{2}\\right) + \\left(\\frac{1}{2} - \\frac{1}{3}\\right) + \\cdots + \\left(\\frac{1}{N} - \\frac{1}{N+1}\\right)`}</MathBlock>
        <MathBlock>{`= 1 - \\frac{1}{N+1}`}</MathBlock>
        <p>Taking the limit:</p>
        <MathBlock>{`\\sum_{n=1}^{\\infty} \\frac{1}{n(n+1)} = \\lim_{N \\to \\infty} \\left(1 - \\frac{1}{N+1}\\right) = 1`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 6: Another Telescoping Series">
        <p>Evaluate <InlineMath>{`\\sum_{n=1}^{\\infty} \\frac{1}{n(n+2)}`}</InlineMath>.</p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`\\frac{1}{n(n+2)} = \\frac{1}{2}\\left(\\frac{1}{n} - \\frac{1}{n+2}\\right)`}</MathBlock>
        <MathBlock>{`S_N = \\frac{1}{2}\\sum_{n=1}^{N} \\left(\\frac{1}{n} - \\frac{1}{n+2}\\right)`}</MathBlock>
        <MathBlock>{`= \\frac{1}{2}\\left[\\left(1 - \\frac{1}{3}\\right) + \\left(\\frac{1}{2} - \\frac{1}{4}\\right) + \\left(\\frac{1}{3} - \\frac{1}{5}\\right) + \\cdots\\right]`}</MathBlock>
        <MathBlock>{`= \\frac{1}{2}\\left(1 + \\frac{1}{2} - \\frac{1}{N+1} - \\frac{1}{N+2}\\right)`}</MathBlock>
        <MathBlock>{`\\to \\frac{1}{2} \\cdot \\frac{3}{2} = \\frac{3}{4}`}</MathBlock>
      </Callout>

      <h2>p-Series</h2>

      <Callout type="theorem" title="p-Series">
        <p>
          The series <InlineMath>{`\\sum_{n=1}^{\\infty} \\frac{1}{n^p}`}</InlineMath> converges if and only if <InlineMath>{`p > 1`}</InlineMath>.
        </p>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li><InlineMath>{`p = 1`}</InlineMath>: Harmonic series, diverges</li>
          <li><InlineMath>{`p = 2`}</InlineMath>: Converges to <InlineMath>{`\\frac{\\pi^2}{6}`}</InlineMath></li>
          <li><InlineMath>{`p = 4`}</InlineMath>: Converges to <InlineMath>{`\\frac{\\pi^4}{90}`}</InlineMath></li>
        </ul>
      </Callout>

      <Callout type="example" title="Example 7: Comparing with p-Series">
        <p>
          <InlineMath>{`\\sum \\frac{1}{n^2}`}</InlineMath> converges (p = 2 &gt; 1).
        </p>
        <p>
          <InlineMath>{`\\sum \\frac{1}{\\sqrt{n}}`}</InlineMath> diverges (p = 1/2 &lt; 1).
        </p>
      </Callout>

      <h2>Decimal Expansions</h2>

      <Callout type="example" title="Example 8: Repeating Decimals">
        <p>Express <InlineMath>{`0.333\\ldots`}</InlineMath> as a fraction.</p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`0.333\\ldots = \\frac{3}{10} + \\frac{3}{100} + \\frac{3}{1000} + \\cdots`}</MathBlock>
        <MathBlock>{`= 3\\left(\\frac{1}{10} + \\frac{1}{100} + \\cdots\\right) = 3 \\cdot \\frac{1/10}{1 - 1/10} = 3 \\cdot \\frac{1}{9} = \\frac{1}{3}`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 9: More Complex Repeating Decimal">
        <p>Express <InlineMath>{`0.142857142857\\ldots`}</InlineMath> as a fraction.</p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`0.\\overline{142857} = \\frac{142857}{10^6} + \\frac{142857}{10^{12}} + \\cdots`}</MathBlock>
        <MathBlock>{`= \\frac{142857}{10^6} \\cdot \\frac{1}{1 - 10^{-6}} = \\frac{142857}{999999} = \\frac{1}{7}`}</MathBlock>
      </Callout>

      <h2>The Tail of a Series</h2>

      <Callout type="theorem" title="Tail Convergence">
        <p>
          If <InlineMath>{`\\sum_{n=1}^{\\infty} a_n`}</InlineMath> converges to <InlineMath>{`S`}</InlineMath>, then
          the tail <InlineMath>{`\\sum_{n=N+1}^{\\infty} a_n \\to 0`}</InlineMath> as <InlineMath>{`N \\to \\infty`}</InlineMath>.
        </p>
        <p className="mt-2">More precisely:</p>
        <MathBlock>{`\\sum_{n=N+1}^{\\infty} a_n = S - S_N \\to 0`}</MathBlock>
      </Callout>

      <Callout type="info" title="Finite Changes Don't Affect Convergence">
        <p>
          Adding, removing, or changing finitely many terms of a series does not affect
          whether it converges (though it may change the sum).
        </p>
      </Callout>

      <h2>Examples</h2>

      <Callout type="example" title="Example 10: Combined Series">
        <p>Evaluate <InlineMath>{`\\sum_{n=0}^{\\infty} \\frac{2^n + 3^n}{6^n}`}</InlineMath>.</p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`\\sum_{n=0}^{\\infty} \\frac{2^n + 3^n}{6^n} = \\sum_{n=0}^{\\infty} \\left(\\frac{2}{6}\\right)^n + \\sum_{n=0}^{\\infty} \\left(\\frac{3}{6}\\right)^n`}</MathBlock>
        <MathBlock>{`= \\sum_{n=0}^{\\infty} \\left(\\frac{1}{3}\\right)^n + \\sum_{n=0}^{\\infty} \\left(\\frac{1}{2}\\right)^n`}</MathBlock>
        <MathBlock>{`= \\frac{1}{1 - 1/3} + \\frac{1}{1 - 1/2} = \\frac{3}{2} + 2 = \\frac{7}{2}`}</MathBlock>
      </Callout>

      <Callout type="example" title="Example 11: Factoring Out Constants">
        <p>Evaluate <InlineMath>{`\\sum_{n=2}^{\\infty} \\frac{(-1)^n}{5^n}`}</InlineMath>.</p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`\\sum_{n=2}^{\\infty} \\frac{(-1)^n}{5^n} = \\sum_{n=2}^{\\infty} \\left(-\\frac{1}{5}\\right)^n`}</MathBlock>
        <MathBlock>{`= \\sum_{n=0}^{\\infty} \\left(-\\frac{1}{5}\\right)^n - 1 - \\left(-\\frac{1}{5}\\right)`}</MathBlock>
        <MathBlock>{`= \\frac{1}{1 - (-1/5)} - 1 + \\frac{1}{5} = \\frac{1}{6/5} - \\frac{4}{5} = \\frac{5}{6} - \\frac{4}{5}`}</MathBlock>
        <MathBlock>{`= \\frac{25 - 24}{30} = \\frac{1}{30}`}</MathBlock>
      </Callout>

      <h2>Summary</h2>
      <ul>
        <li>
          <strong>Infinite series:</strong> <InlineMath>{`\\sum a_n = \\lim_{N \\to \\infty} S_N`}</InlineMath> where <InlineMath>{`S_N = a_1 + \\cdots + a_N`}</InlineMath>
        </li>
        <li>
          <strong>Geometric series:</strong> <InlineMath>{`\\sum r^n = \\frac{1}{1-r}`}</InlineMath> for <InlineMath>{`|r| < 1`}</InlineMath>
        </li>
        <li>
          <strong>Harmonic series:</strong> <InlineMath>{`\\sum \\frac{1}{n}`}</InlineMath> diverges
        </li>
        <li>
          <strong>Divergence test:</strong> If <InlineMath>{`a_n \\not\\to 0`}</InlineMath>, then <InlineMath>{`\\sum a_n`}</InlineMath> diverges
        </li>
        <li>
          <strong>Telescoping:</strong> Write <InlineMath>{`a_n = b_n - b_{n+1}`}</InlineMath> to collapse partial sums
        </li>
        <li>
          <strong>p-Series:</strong> <InlineMath>{`\\sum \\frac{1}{n^p}`}</InlineMath> converges iff <InlineMath>{`p > 1`}</InlineMath>
        </li>
        <li>
          <strong>Repeating decimals:</strong> Are geometric series in disguise
        </li>
      </ul>
    </LessonLayout>
  );
}
