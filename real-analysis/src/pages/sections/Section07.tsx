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

      <Theorem title="Ratio Test">
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

      <Theorem title="Root Test">
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

      <Theorem title="Alternating Series Test (Leibniz)">
        <p>
          If <Math>(a_n)</Math> is a decreasing sequence with <Math>a_n \to 0</Math>, then the
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

      <Theorem title="Absolute Convergence Implies Convergence">
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
