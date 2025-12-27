import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { Math, MathBlock } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { section05Quiz } from '@/data/quizzes';

export default function Section05() {
  return (
    <LessonLayout sectionId={5}>
      <h2>Sequences and Their Limits</h2>

      <p>
        Sequences are the foundation of analysis. A sequence is a function from the natural numbers
        to the real numbers, and understanding when and how sequences converge is essential for
        all subsequent topics in real analysis.
      </p>

      <Definition title="Sequence">
        <p>
          A sequence is a function <Math>{"a: \\mathbb{N} \\to \\mathbb{R}"}</Math>. We write <Math>a_n</Math> for <Math>a(n)</Math>
          and denote the sequence as <Math>(a_n)</Math> or <Math>{"\\{a_n\\}_{n=1}^\\infty"}</Math>.
        </p>
      </Definition>

      <Definition title="Convergence of a Sequence">
        <p>
          A sequence <Math>{"(a_n)"}</Math> converges to <Math>{"L \\in \\mathbb{R}"}</Math> if:
        </p>
        <MathBlock>
          {`\\forall \\varepsilon > 0, \\exists N \\in \\mathbb{N}: n > N \\Rightarrow |a_n - L| < \\varepsilon`}
        </MathBlock>
        <p>We write <Math>{"\\lim_{n \\to \\infty} a_n = L"}</Math> or <Math>{"a_n \\to L"}</Math>.</p>
      </Definition>

      <Callout type="info">
        <strong>Intuition:</strong> The ε-N definition says that for any error tolerance ε,
        we can find a point N after which all terms are within ε of L.
      </Callout>

      <h3>Limit Theorems for Sequences</h3>

      <Theorem
        title="Algebra of Limits"
        proof={
          <>
            <p className="mb-3"><strong>Sum rule:</strong> Given <Math>{`\\varepsilon > 0`}</Math>, choose <Math>{`N_1`}</Math> so <Math>{`n > N_1 \\Rightarrow |a_n - L| < \\varepsilon/2`}</Math>, and <Math>{`N_2`}</Math> so <Math>{`n > N_2 \\Rightarrow |b_n - M| < \\varepsilon/2`}</Math>.</p>
            <p className="mb-3">For <Math>{`n > \\max(N_1, N_2)`}</Math>:</p>
            <MathBlock>{`|(a_n + b_n) - (L + M)| \\leq |a_n - L| + |b_n - M| < \\varepsilon/2 + \\varepsilon/2 = \\varepsilon`}</MathBlock>
            <p className="mb-3"><strong>Product rule:</strong> Write <Math>{`a_n b_n - LM = a_n(b_n - M) + M(a_n - L)`}</Math>. Since <Math>{`(a_n)`}</Math> is convergent, it's bounded: <Math>{`|a_n| \\leq K`}</Math> for some <Math>{`K`}</Math>.</p>
            <p className="mb-3">Given <Math>{`\\varepsilon > 0`}</Math>, choose <Math>{`N`}</Math> so that <Math>{`|b_n - M| < \\varepsilon/(2K)`}</Math> and <Math>{`|a_n - L| < \\varepsilon/(2|M| + 1)`}</Math> for <Math>{`n > N`}</Math>.</p>
            <p className="mb-3">Then <Math>{`|a_n b_n - LM| \\leq K \\cdot \\varepsilon/(2K) + |M| \\cdot \\varepsilon/(2|M| + 1) < \\varepsilon`}</Math>.</p>
          </>
        }
      >
        <p>
          If <Math>{"\\lim a_n = L"}</Math> and <Math>{"\\lim b_n = M"}</Math>, then:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-4">
          <li><Math>{"\\lim (a_n + b_n) = L + M"}</Math></li>
          <li><Math>{"\\lim (a_n \\cdot b_n) = L \\cdot M"}</Math></li>
          <li><Math>{"\\lim (c \\cdot a_n) = c \\cdot L"}</Math> for any constant <Math>c</Math></li>
          <li><Math>{"\\lim (a_n / b_n) = L / M"}</Math> if <Math>{"M \\neq 0"}</Math></li>
        </ul>
      </Theorem>

      <Theorem
        title="Squeeze Theorem"
        proof={
          <>
            <p className="mb-3">Given <Math>{`\\varepsilon > 0`}</Math>, since <Math>{`a_n \\to L`}</Math>, <Math>{`\\exists N_1: n > N_1 \\Rightarrow |a_n - L| < \\varepsilon`}</Math>, i.e., <Math>{`L - \\varepsilon < a_n`}</Math>.</p>
            <p className="mb-3">Since <Math>{`c_n \\to L`}</Math>, <Math>{`\\exists N_2: n > N_2 \\Rightarrow |c_n - L| < \\varepsilon`}</Math>, i.e., <Math>{`c_n < L + \\varepsilon`}</Math>.</p>
            <p className="mb-3">For <Math>{`n > \\max(N_1, N_2)`}</Math>:</p>
            <MathBlock>{`L - \\varepsilon < a_n \\leq b_n \\leq c_n < L + \\varepsilon`}</MathBlock>
            <p className="mb-3">Thus <Math>{`|b_n - L| < \\varepsilon`}</Math>, proving <Math>{`b_n \\to L`}</Math>.</p>
          </>
        }
      >
        <p>
          If <Math>{"a_n \\leq b_n \\leq c_n"}</Math> for all <Math>n</Math> and <Math>{"\\lim a_n = \\lim c_n = L"}</Math>,
          then <Math>{"\\lim b_n = L"}</Math>.
        </p>
      </Theorem>

      <Example title="Convergent Sequence">
        <p>Show that <Math>{"\\lim_{n \\to \\infty} \\frac{1}{n} = 0"}</Math>.</p>
        <p className="mt-2">
          Given <Math>{"\\varepsilon > 0"}</Math>, choose <Math>{"N > 1/\\varepsilon"}</Math>. Then for <Math>{"n > N"}</Math>:
        </p>
        <MathBlock>
          {`\\left| \\frac{1}{n} - 0 \\right| = \\frac{1}{n} < \\frac{1}{N} < \\varepsilon`}
        </MathBlock>
      </Example>

      <h3>Monotone Sequences</h3>

      <Theorem
        title="Monotone Convergence Theorem"
        proof={
          <>
            <p className="mb-3">Let <Math>{`(a_n)`}</Math> be increasing and bounded above. Let <Math>{`L = \\sup\\{a_n : n \\in \\mathbb{N}\\}`}</Math>.</p>
            <p className="mb-3">Given <Math>{`\\varepsilon > 0`}</Math>, by definition of supremum, <Math>{`\\exists N: L - \\varepsilon < a_N \\leq L`}</Math>.</p>
            <p className="mb-3">Since <Math>{`(a_n)`}</Math> is increasing, for all <Math>{`n > N`}</Math>: <Math>{`L - \\varepsilon < a_N \\leq a_n \\leq L`}</Math>.</p>
            <p className="mb-3">Thus <Math>{`|a_n - L| < \\varepsilon`}</Math> for <Math>{`n > N`}</Math>, so <Math>{`a_n \\to L = \\sup(a_n)`}</Math>.</p>
            <p className="mb-3">The decreasing case is analogous using infimum.</p>
          </>
        }
      >
        <p>
          Every bounded monotone sequence converges. Specifically:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-4">
          <li>A monotone increasing sequence bounded above converges to its supremum</li>
          <li>A monotone decreasing sequence bounded below converges to its infimum</li>
        </ul>
      </Theorem>

      <Callout type="important">
        <strong>Key Connection:</strong> The Monotone Convergence Theorem is a direct consequence
        of the completeness of the real numbers (the least upper bound property).
      </Callout>

      <SectionQuiz
        sectionId={5}
        questions={section05Quiz}
        title="Sequences and Their Limits Quiz"
      />
    </LessonLayout>
  );
}
