import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { section07Quiz } from '@/data/quizzes';

export default function Section07() {
  return (
    <LessonLayout sectionId={7}>
      <h2>Convergence Tests</h2>

      <p>
        Beyond the comparison and integral tests, we have several powerful tools for determining
        whether a series converges. These tests are essential for analyzing power series and
        other important series in analysis.
      </p>

      <h3>Ratio and Root Tests</h3>

      <Theorem
        title="Ratio Test"
        proof={
          <>
            <p className="mb-3">If <InlineMath>{`L < 1`}</InlineMath>, choose <InlineMath>{`r`}</InlineMath> with <InlineMath>{`L < r < 1`}</InlineMath>. For large <InlineMath>{`n`}</InlineMath>: <InlineMath>{`|a_{n+1}/a_n| < r`}</InlineMath>.</p>
            <p className="mb-3">Then <InlineMath>{`|a_n| < |a_N| \\cdot r^{n-N}`}</InlineMath> for <InlineMath>{`n \\geq N`}</InlineMath>, so <InlineMath>{`\\sum |a_n|`}</InlineMath> converges by comparison with geometric series <InlineMath>{`\\sum r^n`}</InlineMath>.</p>
            <p className="mb-3">If <InlineMath>{`L > 1`}</InlineMath>, then <InlineMath>{`|a_{n+1}| > |a_n|`}</InlineMath> for large <InlineMath>{`n`}</InlineMath>, so <InlineMath>{`a_n \\not\\to 0`}</InlineMath>, and the series diverges by the divergence test.</p>
            <p className="mb-3">When <InlineMath>{`L = 1`}</InlineMath>: both <InlineMath>{`\\sum 1/n`}</InlineMath> (diverges) and <InlineMath>{`\\sum 1/n^2`}</InlineMath> (converges) have ratio limit 1.</p>
          </>
        }
      >
        <p>
          For a series <InlineMath>\sum a_n</InlineMath> with <InlineMath>a_n \neq 0</InlineMath>, let:
        </p>
        <MathBlock>
          {`L = \\lim_{n \\to \\infty} \\left| \\frac{a_{n+1}}{a_n} \\right|`}
        </MathBlock>
        <ul className="list-disc list-inside space-y-2 mt-4">
          <li>If <InlineMath>L &lt; 1</InlineMath>, the series converges absolutely</li>
          <li>If <InlineMath>L &gt; 1</InlineMath>, the series diverges</li>
          <li>If <InlineMath>L = 1</InlineMath>, the test is inconclusive</li>
        </ul>
      </Theorem>

      <Theorem
        title="Root Test"
        proof={
          <>
            <p className="mb-3">If <InlineMath>{`L < 1`}</InlineMath>, choose <InlineMath>{`r`}</InlineMath> with <InlineMath>{`L < r < 1`}</InlineMath>. Then <InlineMath>{`|a_n|^{1/n} < r`}</InlineMath> for all large <InlineMath>{`n`}</InlineMath>, so <InlineMath>{`|a_n| < r^n`}</InlineMath>.</p>
            <p className="mb-3">By comparison with <InlineMath>{`\\sum r^n`}</InlineMath> (geometric, converges since <InlineMath>{`r < 1`}</InlineMath>), <InlineMath>{`\\sum |a_n|`}</InlineMath> converges.</p>
            <p className="mb-3">If <InlineMath>{`L > 1`}</InlineMath>, then <InlineMath>{`|a_n|^{1/n} > 1`}</InlineMath> infinitely often, so <InlineMath>{`|a_n| > 1`}</InlineMath> infinitely often. Thus <InlineMath>{`a_n \\not\\to 0`}</InlineMath> and series diverges.</p>
            <p className="mb-3">The root test uses limsup, making it slightly more powerful than the ratio test in some cases.</p>
          </>
        }
      >
        <p>
          For a series <InlineMath>\sum a_n</InlineMath>, let:
        </p>
        <MathBlock>
          {`L = \\limsup_{n \\to \\infty} |a_n|^{1/n}`}
        </MathBlock>
        <ul className="list-disc list-inside space-y-2 mt-4">
          <li>If <InlineMath>L &lt; 1</InlineMath>, the series converges absolutely</li>
          <li>If <InlineMath>L &gt; 1</InlineMath>, the series diverges</li>
          <li>If <InlineMath>L = 1</InlineMath>, the test is inconclusive</li>
        </ul>
      </Theorem>

      <Callout type="info">
        <strong>When to Use Which:</strong> The root test is stronger in theory (when it works,
        so does the ratio test, but not vice versa). In practice, use the ratio test for
        factorials and the root test for expressions raised to the nth power.
      </Callout>

      <h3>Alternating Series</h3>

      <Theorem
        title="Alternating Series Test (Leibniz)"
        proof={
          <>
            <p className="mb-3">Consider partial sums <InlineMath>{`s_n = a_1 - a_2 + a_3 - \\cdots \\pm a_n`}</InlineMath>.</p>
            <p className="mb-3">The even partial sums <InlineMath>{`s_{2n} = (a_1 - a_2) + (a_3 - a_4) + \\cdots`}</InlineMath> are increasing (each parenthesis <InlineMath>{`\\geq 0`}</InlineMath>).</p>
            <p className="mb-3">Also <InlineMath>{`s_{2n} = a_1 - (a_2 - a_3) - (a_4 - a_5) - \\cdots \\leq a_1`}</InlineMath>, so <InlineMath>{`(s_{2n})`}</InlineMath> is bounded above.</p>
            <p className="mb-3">By Monotone Convergence, <InlineMath>{`s_{2n} \\to S`}</InlineMath> for some <InlineMath>{`S`}</InlineMath>. Since <InlineMath>{`s_{2n+1} = s_{2n} + a_{2n+1}`}</InlineMath> and <InlineMath>{`a_{2n+1} \\to 0`}</InlineMath>, <InlineMath>{`s_{2n+1} \\to S`}</InlineMath> also.</p>
            <p className="mb-3">Therefore <InlineMath>{`s_n \\to S`}</InlineMath>.</p>
          </>
        }
      >
        <p>
          If <InlineMath>(a_n)</InlineMath> is a decreasing sequence with <InlineMath>{"a_n \\to 0"}</InlineMath>, then the
          alternating series converges:
        </p>
        <MathBlock>
          {`\\sum_{n=1}^\\infty (-1)^{n+1} a_n \\text{ converges}`}
        </MathBlock>
      </Theorem>

      <Example title="Alternating Harmonic Series">
        <p>
          The alternating harmonic series converges (conditionally):
        </p>
        <MathBlock>
          {`\\sum_{n=1}^\\infty \\frac{(-1)^{n+1}}{n} = 1 - \\frac{1}{2} + \\frac{1}{3} - \\frac{1}{4} + \\cdots = \\ln 2`}
        </MathBlock>
      </Example>

      <h3>Absolute and Conditional Convergence</h3>

      <Definition title="Absolute Convergence">
        <p>
          A series <InlineMath>\sum a_n</InlineMath> converges absolutely if <InlineMath>\sum |a_n|</InlineMath> converges.
        </p>
      </Definition>

      <Theorem
        title="Absolute Convergence Implies Convergence"
        proof={
          <>
            <p className="mb-3">Define <InlineMath>{`a_n^+ = \\max(a_n, 0)`}</InlineMath> and <InlineMath>{`a_n^- = \\max(-a_n, 0)`}</InlineMath>. Then <InlineMath>{`a_n = a_n^+ - a_n^-`}</InlineMath> and <InlineMath>{`|a_n| = a_n^+ + a_n^-`}</InlineMath>.</p>
            <p className="mb-3">Since <InlineMath>{`0 \\leq a_n^+ \\leq |a_n|`}</InlineMath> and <InlineMath>{`0 \\leq a_n^- \\leq |a_n|`}</InlineMath>, by comparison both <InlineMath>{`\\sum a_n^+`}</InlineMath> and <InlineMath>{`\\sum a_n^-`}</InlineMath> converge.</p>
            <p className="mb-3">Therefore <InlineMath>{`\\sum a_n = \\sum a_n^+ - \\sum a_n^-`}</InlineMath> converges by algebra of limits for series.</p>
          </>
        }
      >
        <p>
          If <InlineMath>\sum |a_n|</InlineMath> converges, then <InlineMath>\sum a_n</InlineMath> converges.
        </p>
      </Theorem>

      <Callout type="warning">
        <strong>Conditional Convergence:</strong> A series that converges but not absolutely
        can be rearranged to sum to any value (Riemann rearrangement theorem)!
      </Callout>

      <SectionQuiz
        sectionId={7}
        questions={section07Quiz}
        title="Convergence Tests Quiz"
      />
    </LessonLayout>
  );
}
