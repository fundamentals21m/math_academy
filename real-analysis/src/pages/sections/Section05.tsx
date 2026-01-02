import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
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
          A sequence is a function <InlineMath>{"a: \\mathbb{N} \\to \\mathbb{R}"}</InlineMath>. We write <InlineMath>a_n</InlineMath> for <InlineMath>a(n)</InlineMath>
          and denote the sequence as <InlineMath>(a_n)</InlineMath> or <InlineMath>{"\\{a_n\\}_{n=1}^\\infty"}</InlineMath>.
        </p>
      </Definition>

      <Definition title="Convergence of a Sequence">
        <p>
          A sequence <InlineMath>{"(a_n)"}</InlineMath> converges to <InlineMath>{"L \\in \\mathbb{R}"}</InlineMath> if:
        </p>
        <MathBlock>
          {`\\forall \\varepsilon > 0, \\exists N \\in \\mathbb{N}: n > N \\Rightarrow |a_n - L| < \\varepsilon`}
        </MathBlock>
        <p>We write <InlineMath>{"\\lim_{n \\to \\infty} a_n = L"}</InlineMath> or <InlineMath>{"a_n \\to L"}</InlineMath>.</p>
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
            <p className="mb-3"><strong>Sum rule:</strong> Given <InlineMath>{`\\varepsilon > 0`}</InlineMath>, choose <InlineMath>{`N_1`}</InlineMath> so <InlineMath>{`n > N_1 \\Rightarrow |a_n - L| < \\varepsilon/2`}</InlineMath>, and <InlineMath>{`N_2`}</InlineMath> so <InlineMath>{`n > N_2 \\Rightarrow |b_n - M| < \\varepsilon/2`}</InlineMath>.</p>
            <p className="mb-3">For <InlineMath>{`n > \\max(N_1, N_2)`}</InlineMath>:</p>
            <MathBlock>{`|(a_n + b_n) - (L + M)| \\leq |a_n - L| + |b_n - M| < \\varepsilon/2 + \\varepsilon/2 = \\varepsilon`}</MathBlock>
            <p className="mb-3"><strong>Product rule:</strong> Write <InlineMath>{`a_n b_n - LM = a_n(b_n - M) + M(a_n - L)`}</InlineMath>. Since <InlineMath>{`(a_n)`}</InlineMath> is convergent, it's bounded: <InlineMath>{`|a_n| \\leq K`}</InlineMath> for some <InlineMath>{`K`}</InlineMath>.</p>
            <p className="mb-3">Given <InlineMath>{`\\varepsilon > 0`}</InlineMath>, choose <InlineMath>{`N`}</InlineMath> so that <InlineMath>{`|b_n - M| < \\varepsilon/(2K)`}</InlineMath> and <InlineMath>{`|a_n - L| < \\varepsilon/(2|M| + 1)`}</InlineMath> for <InlineMath>{`n > N`}</InlineMath>.</p>
            <p className="mb-3">Then <InlineMath>{`|a_n b_n - LM| \\leq K \\cdot \\varepsilon/(2K) + |M| \\cdot \\varepsilon/(2|M| + 1) < \\varepsilon`}</InlineMath>.</p>
          </>
        }
      >
        <p>
          If <InlineMath>{"\\lim a_n = L"}</InlineMath> and <InlineMath>{"\\lim b_n = M"}</InlineMath>, then:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-4">
          <li><InlineMath>{"\\lim (a_n + b_n) = L + M"}</InlineMath></li>
          <li><InlineMath>{"\\lim (a_n \\cdot b_n) = L \\cdot M"}</InlineMath></li>
          <li><InlineMath>{"\\lim (c \\cdot a_n) = c \\cdot L"}</InlineMath> for any constant <InlineMath>c</InlineMath></li>
          <li><InlineMath>{"\\lim (a_n / b_n) = L / M"}</InlineMath> if <InlineMath>{"M \\neq 0"}</InlineMath></li>
        </ul>
      </Theorem>

      <Theorem
        title="Squeeze Theorem"
        proof={
          <>
            <p className="mb-3">Given <InlineMath>{`\\varepsilon > 0`}</InlineMath>, since <InlineMath>{`a_n \\to L`}</InlineMath>, <InlineMath>{`\\exists N_1: n > N_1 \\Rightarrow |a_n - L| < \\varepsilon`}</InlineMath>, i.e., <InlineMath>{`L - \\varepsilon < a_n`}</InlineMath>.</p>
            <p className="mb-3">Since <InlineMath>{`c_n \\to L`}</InlineMath>, <InlineMath>{`\\exists N_2: n > N_2 \\Rightarrow |c_n - L| < \\varepsilon`}</InlineMath>, i.e., <InlineMath>{`c_n < L + \\varepsilon`}</InlineMath>.</p>
            <p className="mb-3">For <InlineMath>{`n > \\max(N_1, N_2)`}</InlineMath>:</p>
            <MathBlock>{`L - \\varepsilon < a_n \\leq b_n \\leq c_n < L + \\varepsilon`}</MathBlock>
            <p className="mb-3">Thus <InlineMath>{`|b_n - L| < \\varepsilon`}</InlineMath>, proving <InlineMath>{`b_n \\to L`}</InlineMath>.</p>
          </>
        }
      >
        <p>
          If <InlineMath>{"a_n \\leq b_n \\leq c_n"}</InlineMath> for all <InlineMath>n</InlineMath> and <InlineMath>{"\\lim a_n = \\lim c_n = L"}</InlineMath>,
          then <InlineMath>{"\\lim b_n = L"}</InlineMath>.
        </p>
      </Theorem>

      <Example title="Convergent Sequence">
        <p>Show that <InlineMath>{"\\lim_{n \\to \\infty} \\frac{1}{n} = 0"}</InlineMath>.</p>
        <p className="mt-2">
          Given <InlineMath>{"\\varepsilon > 0"}</InlineMath>, choose <InlineMath>{"N > 1/\\varepsilon"}</InlineMath>. Then for <InlineMath>{"n > N"}</InlineMath>:
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
            <p className="mb-3">Let <InlineMath>{`(a_n)`}</InlineMath> be increasing and bounded above. Let <InlineMath>{`L = \\sup\\{a_n : n \\in \\mathbb{N}\\}`}</InlineMath>.</p>
            <p className="mb-3">Given <InlineMath>{`\\varepsilon > 0`}</InlineMath>, by definition of supremum, <InlineMath>{`\\exists N: L - \\varepsilon < a_N \\leq L`}</InlineMath>.</p>
            <p className="mb-3">Since <InlineMath>{`(a_n)`}</InlineMath> is increasing, for all <InlineMath>{`n > N`}</InlineMath>: <InlineMath>{`L - \\varepsilon < a_N \\leq a_n \\leq L`}</InlineMath>.</p>
            <p className="mb-3">Thus <InlineMath>{`|a_n - L| < \\varepsilon`}</InlineMath> for <InlineMath>{`n > N`}</InlineMath>, so <InlineMath>{`a_n \\to L = \\sup(a_n)`}</InlineMath>.</p>
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
