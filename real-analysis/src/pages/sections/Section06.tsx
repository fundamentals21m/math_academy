import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { Math, MathBlock } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { section06Quiz } from '@/data/quizzes';

export default function Section06() {
  return (
    <LessonLayout sectionId={6}>
      <h2>Infinite Series</h2>

      <p>
        An infinite series is the limit of the sequence of partial sums of a sequence.
        Understanding series convergence is crucial for approximations, power series,
        and much of applied mathematics.
      </p>

      <Definition title="Infinite Series">
        <p>
          Given a sequence <Math>{"(a_n)"}</Math>, the infinite series <Math>{"\\sum_{n=1}^\\infty a_n"}</Math> is
          defined as the limit of the partial sums <Math>{"s_N = \\sum_{n=1}^N a_n"}</Math>, if it exists.
        </p>
        <MathBlock>
          {`\\sum_{n=1}^\\infty a_n = \\lim_{N \\to \\infty} \\sum_{n=1}^N a_n`}
        </MathBlock>
      </Definition>

      <Theorem
        title="Divergence Test"
        proof={
          <>
            <p className="mb-3">Suppose Σaₙ = S converges. Let sₙ = a₁ + a₂ + ... + aₙ be the partial sums.</p>
            <p className="mb-3">Then sₙ → S and sₙ₋₁ → S as n → ∞.</p>
            <p className="mb-3">Since aₙ = sₙ - sₙ₋₁, we have aₙ → S - S = 0.</p>
          </>
        }
      >
        <p>
          If <Math>{"\\sum a_n"}</Math> converges, then <Math>{"\\lim_{n \\to \\infty} a_n = 0"}</Math>.
        </p>
        <p className="mt-2 text-dark-400">
          Contrapositive: If <Math>{"a_n \\not\\to 0"}</Math>, then <Math>{"\\sum a_n"}</Math> diverges.
        </p>
      </Theorem>

      <Callout type="warning">
        <strong>Common Mistake:</strong> The converse is false! Just because <Math>{"a_n \\to 0"}</Math>
        does not mean <Math>{"\\sum a_n"}</Math> converges. The harmonic series is the classic counterexample.
      </Callout>

      <Example title="Harmonic Series Diverges">
        <p>
          The series <Math>{"\\sum_{n=1}^\\infty \\frac{1}{n}"}</Math> diverges despite <Math>{"1/n \\to 0"}</Math>.
        </p>
        <MathBlock>
          {`1 + \\frac{1}{2} + \\frac{1}{3} + \\frac{1}{4} + \\cdots = \\infty`}
        </MathBlock>
      </Example>

      <h3>Geometric Series</h3>

      <Theorem
        title="Geometric Series"
        proof={
          <>
            <p className="mb-3">The partial sum is sₙ = 1 + r + r² + ... + rⁿ = (1 - rⁿ⁺¹)/(1 - r) for r ≠ 1.</p>
            <p className="mb-3">If |r| &lt; 1, then rⁿ⁺¹ → 0 as n → ∞, so sₙ → 1/(1-r).</p>
            <p className="mb-3">If |r| ≥ 1, then rⁿ does not converge to 0, so by the divergence test, the series diverges.</p>
          </>
        }
      >
        <p>
          For <Math>{"|r| < 1"}</Math>, the geometric series converges:
        </p>
        <MathBlock>
          {`\\sum_{n=0}^\\infty r^n = \\frac{1}{1-r}`}
        </MathBlock>
        <p>For <Math>{"|r| \\geq 1"}</Math>, the series diverges.</p>
      </Theorem>

      <h3>Positive Series</h3>

      <Theorem
        title="Comparison Test"
        proof={
          <>
            <p className="mb-3">Let Aₙ = Σᵢ₌₁ⁿ aᵢ and Bₙ = Σᵢ₌₁ⁿ bᵢ be partial sums.</p>
            <p className="mb-3">Since aᵢ ≤ bᵢ for all i, we have Aₙ ≤ Bₙ for all n.</p>
            <p className="mb-3">If Σbₙ converges to B, then Aₙ ≤ Bₙ ≤ B, so (Aₙ) is bounded above.</p>
            <p className="mb-3">Since (Aₙ) is increasing (aₙ ≥ 0) and bounded, by the Monotone Convergence Theorem, Σaₙ converges.</p>
            <p className="mb-3">The second statement follows by contrapositive.</p>
          </>
        }
      >
        <p>
          Let <Math>{"0 \\leq a_n \\leq b_n"}</Math> for all <Math>{"n"}</Math>.
        </p>
        <ul className="list-disc list-inside space-y-2 mt-4">
          <li>If <Math>{"\\sum b_n"}</Math> converges, then <Math>{"\\sum a_n"}</Math> converges</li>
          <li>If <Math>{"\\sum a_n"}</Math> diverges, then <Math>{"\\sum b_n"}</Math> diverges</li>
        </ul>
      </Theorem>

      <Theorem
        title="Integral Test"
        proof={
          <>
            <p className="mb-3">Since f is decreasing, for x ∈ [n, n+1]: f(n+1) ≤ f(x) ≤ f(n).</p>
            <p className="mb-3">Integrating: f(n+1) ≤ ∫ₙⁿ⁺¹ f(x)dx ≤ f(n).</p>
            <p className="mb-3">Summing from n=1 to N-1: Σₙ₌₂ᴺ f(n) ≤ ∫₁ᴺ f(x)dx ≤ Σₙ₌₁ᴺ⁻¹ f(n).</p>
            <p className="mb-3">If the integral converges, the partial sums are bounded, so the series converges.</p>
            <p className="mb-3">If the series converges, the integral is bounded, so it converges.</p>
          </>
        }
      >
        <p>
          Let <Math>{"f"}</Math> be positive, continuous, and decreasing on <Math>{"[1, \\infty)"}</Math>. Then:
        </p>
        <MathBlock>
          {`\\sum_{n=1}^\\infty f(n) \\text{ converges } \\Leftrightarrow \\int_1^\\infty f(x)\\,dx \\text{ converges}`}
        </MathBlock>
      </Theorem>

      <Example title="p-Series">
        <p>
          By the integral test, the p-series <Math>{"\\sum \\frac{1}{n^p}"}</Math> converges iff <Math>{"p > 1"}</Math>.
        </p>
      </Example>

      <SectionQuiz
        sectionId={6}
        questions={section06Quiz}
        title="Infinite Series Quiz"
      />
    </LessonLayout>
  );
}
