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
            <p className="mb-3">If L &lt; 1, choose r with L &lt; r &lt; 1. For large n: |aₙ₊₁/aₙ| &lt; r.</p>
            <p className="mb-3">Then |aₙ| &lt; |aₙ| · rᴺ⁻ⁿ for n ≥ N, so Σ|aₙ| converges by comparison with geometric series Σrⁿ.</p>
            <p className="mb-3">If L &gt; 1, then |aₙ₊₁| &gt; |aₙ| for large n, so aₙ ↛ 0, and the series diverges by the divergence test.</p>
            <p className="mb-3">When L = 1: both Σ1/n (diverges) and Σ1/n² (converges) have ratio limit 1.</p>
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
            <p className="mb-3">If L &lt; 1, choose r with L &lt; r &lt; 1. Then |aₙ|^(1/n) &lt; r for all large n, so |aₙ| &lt; rⁿ.</p>
            <p className="mb-3">By comparison with Σrⁿ (geometric, converges since r &lt; 1), Σ|aₙ| converges.</p>
            <p className="mb-3">If L &gt; 1, then |aₙ|^(1/n) &gt; 1 infinitely often, so |aₙ| &gt; 1 infinitely often. Thus aₙ ↛ 0 and series diverges.</p>
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
            <p className="mb-3">Consider partial sums sₙ = a₁ - a₂ + a₃ - ... ± aₙ.</p>
            <p className="mb-3">The even partial sums s₂ₙ = (a₁ - a₂) + (a₃ - a₄) + ... are increasing (each parenthesis ≥ 0).</p>
            <p className="mb-3">Also s₂ₙ = a₁ - (a₂ - a₃) - (a₄ - a₅) - ... ≤ a₁, so (s₂ₙ) is bounded above.</p>
            <p className="mb-3">By Monotone Convergence, s₂ₙ → S for some S. Since s₂ₙ₊₁ = s₂ₙ + a₂ₙ₊₁ and a₂ₙ₊₁ → 0, s₂ₙ₊₁ → S also.</p>
            <p className="mb-3">Therefore sₙ → S.</p>
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
            <p className="mb-3">Define aₙ⁺ = max(aₙ, 0) and aₙ⁻ = max(-aₙ, 0). Then aₙ = aₙ⁺ - aₙ⁻ and |aₙ| = aₙ⁺ + aₙ⁻.</p>
            <p className="mb-3">Since 0 ≤ aₙ⁺ ≤ |aₙ| and 0 ≤ aₙ⁻ ≤ |aₙ|, by comparison both Σaₙ⁺ and Σaₙ⁻ converge.</p>
            <p className="mb-3">Therefore Σaₙ = Σaₙ⁺ - Σaₙ⁻ converges by algebra of limits for series.</p>
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
