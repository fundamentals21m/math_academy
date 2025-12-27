import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { Math, MathBlock } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { section15Quiz } from '@/data/quizzes';

export default function Section15() {
  return (
    <LessonLayout sectionId={15}>
      <h2>Sequences of Functions</h2>

      <p>
        When can we interchange limits with other operations like integration or differentiation?
        The key is uniform convergence, which ensures the limit process behaves well.
      </p>

      <h3>Pointwise vs Uniform Convergence</h3>

      <Definition title="Pointwise Convergence">
        <p>
          A sequence <Math>{"(f_n)"}</Math> converges pointwise to <Math>{"f"}</Math> on <Math>{"S"}</Math> if:
        </p>
        <MathBlock>
          {`\\forall x \\in S, \\forall \\varepsilon > 0, \\exists N: n > N \\Rightarrow |f_n(x) - f(x)| < \\varepsilon`}
        </MathBlock>
        <p>Here <Math>{"N"}</Math> may depend on both <Math>{"\\varepsilon"}</Math> and <Math>{"x"}</Math>.</p>
      </Definition>

      <Definition title="Uniform Convergence">
        <p>
          A sequence <Math>{"(f_n)"}</Math> converges uniformly to <Math>{"f"}</Math> on <Math>{"S"}</Math> if:
        </p>
        <MathBlock>
          {`\\forall \\varepsilon > 0, \\exists N: n > N \\Rightarrow \\sup_{x \\in S} |f_n(x) - f(x)| < \\varepsilon`}
        </MathBlock>
        <p>Equivalently, <Math>{"\\|f_n - f\\|_\\infty \\to 0"}</Math>.</p>
      </Definition>

      <Example title="Non-Uniform Convergence">
        <p>
          Let <Math>{"f_n(x) = x^n"}</Math> on <Math>{"[0, 1]"}</Math>. Pointwise limit is <Math>{"f(x) = 0"}</Math>
          for <Math>{"x < 1"}</Math> and <Math>{"f(1) = 1"}</Math>. But convergence is not uniform:
          continuous <Math>{"f_n"}</Math> converge to discontinuous <Math>{"f"}</Math>.
        </p>
      </Example>

      <h3>Preservation Theorems</h3>

      <Theorem
        title="Uniform Limit of Continuous Functions"
        proof={
          <>
            <p className="mb-3">Fix c and ε &gt; 0. By uniform convergence, ∃N: |fₙ(x) - f(x)| &lt; ε/3 for all x.</p>
            <p className="mb-3">Since fₙ is continuous at c, ∃δ: |x - c| &lt; δ ⇒ |fₙ(x) - fₙ(c)| &lt; ε/3.</p>
            <p className="mb-3">For |x - c| &lt; δ:</p>
            <p className="mb-3">|f(x) - f(c)| ≤ |f(x) - fₙ(x)| + |fₙ(x) - fₙ(c)| + |fₙ(c) - f(c)| &lt; ε/3 + ε/3 + ε/3 = ε.</p>
            <p className="mb-3">So f is continuous at c. Since c was arbitrary, f is continuous on S.</p>
          </>
        }
      >
        <p>
          If <Math>{"(f_n)"}</Math> are continuous and <Math>{"f_n \\to f"}</Math> uniformly, then <Math>{"f"}</Math>
          is continuous.
        </p>
      </Theorem>

      <Theorem
        title="Integration of Uniform Limit"
        proof={
          <>
            <p className="mb-3">By uniform convergence, given ε &gt; 0, ∃N: |fₙ(x) - f(x)| &lt; ε/(b-a) for all x and n &gt; N.</p>
            <p className="mb-3">Then: |∫ₐᵇ fₙ - ∫ₐᵇ f| = |∫ₐᵇ (fₙ - f)| ≤ ∫ₐᵇ |fₙ - f|.</p>
            <p className="mb-3">≤ [ε/(b-a)] · (b-a) = ε for n &gt; N.</p>
            <p className="mb-3">Therefore lim ∫ₐᵇ fₙ = ∫ₐᵇ f.</p>
            <p className="mb-3">This justifies exchanging limit and integral under uniform convergence.</p>
          </>
        }
      >
        <p>
          If <Math>{"f_n \\to f"}</Math> uniformly on <Math>{"[a, b]"}</Math>, then:
        </p>
        <MathBlock>
          {`\\int_a^b f = \\lim_{n \\to \\infty} \\int_a^b f_n`}
        </MathBlock>
      </Theorem>

      <Theorem
        title="Differentiation of Limit"
        proof={
          <>
            <p className="mb-3">By FTC2: fₙ(x) - fₙ(c) = ∫ₓᶜ fₙ'(t) dt for each n.</p>
            <p className="mb-3">Since fₙ' → g uniformly, by integration of uniform limits:</p>
            <p className="mb-3">lim[fₙ(x) - fₙ(c)] = lim ∫ₓᶜ fₙ' = ∫ₓᶜ g.</p>
            <p className="mb-3">The left side equals f(x) - f(c) (pointwise convergence of fₙ).</p>
            <p className="mb-3">So f(x) - f(c) = ∫ₓᶜ g. By FTC1, f'(x) = g(x).</p>
          </>
        }
      >
        <p>
          If <Math>{"f_n \\to f"}</Math> pointwise, <Math>{"f_n' \\to g"}</Math> uniformly, and each <Math>{"f_n"}</Math>
          is differentiable, then <Math>{"f' = g"}</Math>.
        </p>
      </Theorem>

      <Callout type="important">
        <strong>Key Insight:</strong> For differentiation, we need uniform convergence of the
        derivatives, not the original functions.
      </Callout>

      <h3>Weierstrass M-Test</h3>

      <Theorem
        title="Weierstrass M-Test"
        proof={
          <>
            <p className="mb-3"><strong>Absolute convergence:</strong> For each x, |fₙ(x)| ≤ Mₙ, so Σ|fₙ(x)| ≤ ΣMₙ &lt; ∞.</p>
            <p className="mb-3"><strong>Uniform convergence:</strong> Let Sₙ(x) = Σₖ₌₁ⁿ fₖ(x) and S(x) = Σfₖ(x).</p>
            <p className="mb-3">|S(x) - Sₙ(x)| = |Σₖ₌ₙ₊₁^∞ fₖ(x)| ≤ Σₖ₌ₙ₊₁^∞ |fₖ(x)| ≤ Σₖ₌ₙ₊₁^∞ Mₖ.</p>
            <p className="mb-3">The tail Σₖ₌ₙ₊₁^∞ Mₖ → 0 as n → ∞ (since ΣMₙ converges), independent of x.</p>
            <p className="mb-3">So supₓ |S(x) - Sₙ(x)| → 0, i.e., Sₙ → S uniformly.</p>
          </>
        }
      >
        <p>
          If <Math>{"|f_n(x)| \\leq M_n"}</Math> for all <Math>{"x \\in S"}</Math> and <Math>{"\\sum M_n < \\infty"}</Math>,
          then <Math>{"\\sum f_n"}</Math> converges uniformly and absolutely on <Math>{"S"}</Math>.
        </p>
      </Theorem>

      <Example title="Uniform Convergence of Power Series">
        <p>
          The series <Math>{"\\sum \\frac{x^n}{n!}"}</Math> converges uniformly on <Math>{"[-R, R]"}</Math>
          for any <Math>{"R > 0"}</Math>, since <Math>{"|x^n/n!| \\leq R^n/n!"}</Math> and <Math>{"\\sum R^n/n! = e^R"}</Math>.
        </p>
      </Example>

      <SectionQuiz
        sectionId={15}
        questions={section15Quiz}
        title="Sequences of Functions Quiz"
      />
    </LessonLayout>
  );
}
