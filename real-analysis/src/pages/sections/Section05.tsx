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
          A sequence is a function <Math>a: \mathbb{N} \to \mathbb{R}</Math>. We write <Math>a_n</Math> for <Math>a(n)</Math>
          and denote the sequence as <Math>(a_n)</Math> or <Math>\{a_n\}_{n=1}^\infty</Math>.
        </p>
      </Definition>

      <Definition title="Convergence of a Sequence">
        <p>
          A sequence <Math>(a_n)</Math> converges to <Math>L \in \mathbb{R}</Math> if:
        </p>
        <MathBlock>
          {`\\forall \\varepsilon > 0, \\exists N \\in \\mathbb{N}: n > N \\Rightarrow |a_n - L| < \\varepsilon`}
        </MathBlock>
        <p>We write <Math>\lim_{n \to \infty} a_n = L</Math> or <Math>a_n \to L</Math>.</p>
      </Definition>

      <Callout type="info">
        <strong>Intuition:</strong> The ε-N definition says that for any error tolerance ε,
        we can find a point N after which all terms are within ε of L.
      </Callout>

      <h3>Limit Theorems for Sequences</h3>

      <Theorem title="Algebra of Limits">
        <p>
          If <Math>\lim a_n = L</Math> and <Math>\lim b_n = M</Math>, then:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-4">
          <li><Math>\lim (a_n + b_n) = L + M</Math></li>
          <li><Math>\lim (a_n \cdot b_n) = L \cdot M</Math></li>
          <li><Math>\lim (c \cdot a_n) = c \cdot L</Math> for any constant <Math>c</Math></li>
          <li><Math>\lim (a_n / b_n) = L / M</Math> if <Math>M \neq 0</Math></li>
        </ul>
      </Theorem>

      <Theorem title="Squeeze Theorem">
        <p>
          If <Math>a_n \leq b_n \leq c_n</Math> for all <Math>n</Math> and <Math>\lim a_n = \lim c_n = L</Math>,
          then <Math>\lim b_n = L</Math>.
        </p>
      </Theorem>

      <Example title="Convergent Sequence">
        <p>Show that <Math>\lim_{n \to \infty} \frac{1}{n} = 0</Math>.</p>
        <p className="mt-2">
          Given <Math>\varepsilon > 0</Math>, choose <Math>N > 1/\varepsilon</Math>. Then for <Math>n > N</Math>:
        </p>
        <MathBlock>
          {`\\left| \\frac{1}{n} - 0 \\right| = \\frac{1}{n} < \\frac{1}{N} < \\varepsilon`}
        </MathBlock>
      </Example>

      <h3>Monotone Sequences</h3>

      <Theorem title="Monotone Convergence Theorem">
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
