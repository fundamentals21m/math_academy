import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { Math, MathBlock } from '@/components/common/MathBlock';
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
            <p className="mb-3">If <Math>{`L < 1`}</Math>, choose <Math>{`r`}</Math> with <Math>{`L < r < 1`}</Math>. For large <Math>{`n`}</Math>: <Math>{`|a_{n+1}/a_n| < r`}</Math>.</p>
            <p className="mb-3">Then <Math>{`|a_n| < |a_N| \\cdot r^{n-N}`}</Math> for <Math>{`n \\geq N`}</Math>, so <Math>{`\\sum |a_n|`}</Math> converges by comparison with geometric series <Math>{`\\sum r^n`}</Math>.</p>
            <p className="mb-3">If <Math>{`L > 1`}</Math>, then <Math>{`|a_{n+1}| > |a_n|`}</Math> for large <Math>{`n`}</Math>, so <Math>{`a_n \\not\\to 0`}</Math>, and the series diverges by the divergence test.</p>
            <p className="mb-3">When <Math>{`L = 1`}</Math>: both <Math>{`\\sum 1/n`}</Math> (diverges) and <Math>{`\\sum 1/n^2`}</Math> (converges) have ratio limit 1.</p>
          </>
        }
      >
        <p>
          For a series <Math>\sum a_n</Math> with <Math>a_n \neq 0</Math>, let:
        </p>
        <MathBlock>
          {`L = \\lim_{n \\to \\infty} \\left| \\frac{a_{n+1}}{a_n} \\right|`}
        </MathBlock>
        <ul className="list-disc list-inside space-y-2 mt-4">
          <li>If <Math>L &lt; 1</Math>, the series converges absolutely</li>
          <li>If <Math>L &gt; 1</Math>, the series diverges</li>
          <li>If <Math>L = 1</Math>, the test is inconclusive</li>
        </ul>
      </Theorem>

      <Theorem
        title="Root Test"
        proof={
          <>
            <p className="mb-3">If <Math>{`L < 1`}</Math>, choose <Math>{`r`}</Math> with <Math>{`L < r < 1`}</Math>. Then <Math>{`|a_n|^{1/n} < r`}</Math> for all large <Math>{`n`}</Math>, so <Math>{`|a_n| < r^n`}</Math>.</p>
            <p className="mb-3">By comparison with <Math>{`\\sum r^n`}</Math> (geometric, converges since <Math>{`r < 1`}</Math>), <Math>{`\\sum |a_n|`}</Math> converges.</p>
            <p className="mb-3">If <Math>{`L > 1`}</Math>, then <Math>{`|a_n|^{1/n} > 1`}</Math> infinitely often, so <Math>{`|a_n| > 1`}</Math> infinitely often. Thus <Math>{`a_n \\not\\to 0`}</Math> and series diverges.</p>
            <p className="mb-3">The root test uses limsup, making it slightly more powerful than the ratio test in some cases.</p>
          </>
        }
      >
        <p>
          For a series <Math>\sum a_n</Math>, let:
        </p>
        <MathBlock>
          {`L = \\limsup_{n \\to \\infty} |a_n|^{1/n}`}
        </MathBlock>
        <ul className="list-disc list-inside space-y-2 mt-4">
          <li>If <Math>L &lt; 1</Math>, the series converges absolutely</li>
          <li>If <Math>L &gt; 1</Math>, the series diverges</li>
          <li>If <Math>L = 1</Math>, the test is inconclusive</li>
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
            <p className="mb-3">Consider partial sums <Math>{`s_n = a_1 - a_2 + a_3 - \\cdots \\pm a_n`}</Math>.</p>
            <p className="mb-3">The even partial sums <Math>{`s_{2n} = (a_1 - a_2) + (a_3 - a_4) + \\cdots`}</Math> are increasing (each parenthesis <Math>{`\\geq 0`}</Math>).</p>
            <p className="mb-3">Also <Math>{`s_{2n} = a_1 - (a_2 - a_3) - (a_4 - a_5) - \\cdots \\leq a_1`}</Math>, so <Math>{`(s_{2n})`}</Math> is bounded above.</p>
            <p className="mb-3">By Monotone Convergence, <Math>{`s_{2n} \\to S`}</Math> for some <Math>{`S`}</Math>. Since <Math>{`s_{2n+1} = s_{2n} + a_{2n+1}`}</Math> and <Math>{`a_{2n+1} \\to 0`}</Math>, <Math>{`s_{2n+1} \\to S`}</Math> also.</p>
            <p className="mb-3">Therefore <Math>{`s_n \\to S`}</Math>.</p>
          </>
        }
      >
        <p>
          If <Math>(a_n)</Math> is a decreasing sequence with <Math>{"a_n \\to 0"}</Math>, then the
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
          A series <Math>\sum a_n</Math> converges absolutely if <Math>\sum |a_n|</Math> converges.
        </p>
      </Definition>

      <Theorem
        title="Absolute Convergence Implies Convergence"
        proof={
          <>
            <p className="mb-3">Define <Math>{`a_n^+ = \\max(a_n, 0)`}</Math> and <Math>{`a_n^- = \\max(-a_n, 0)`}</Math>. Then <Math>{`a_n = a_n^+ - a_n^-`}</Math> and <Math>{`|a_n| = a_n^+ + a_n^-`}</Math>.</p>
            <p className="mb-3">Since <Math>{`0 \\leq a_n^+ \\leq |a_n|`}</Math> and <Math>{`0 \\leq a_n^- \\leq |a_n|`}</Math>, by comparison both <Math>{`\\sum a_n^+`}</Math> and <Math>{`\\sum a_n^-`}</Math> converge.</p>
            <p className="mb-3">Therefore <Math>{`\\sum a_n = \\sum a_n^+ - \\sum a_n^-`}</Math> converges by algebra of limits for series.</p>
          </>
        }
      >
        <p>
          If <Math>\sum |a_n|</Math> converges, then <Math>\sum a_n</Math> converges.
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
