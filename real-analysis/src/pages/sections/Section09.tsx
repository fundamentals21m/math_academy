import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { Math, MathBlock } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { section09Quiz } from '@/data/quizzes';

export default function Section09() {
  return (
    <LessonLayout sectionId={9}>
      <h2>Limits and Continuity</h2>

      <p>
        The ε-δ definition of limits provides a rigorous foundation for calculus.
        Continuity, defined via limits, is the gateway to deeper properties of functions.
      </p>

      <Definition title="Limit of a Function">
        <p>
          We say <Math>{"\\lim_{x \\to c} f(x) = L"}</Math> if:
        </p>
        <MathBlock>
          {`\\forall \\varepsilon > 0, \\exists \\delta > 0: 0 < |x - c| < \\delta \\Rightarrow |f(x) - L| < \\varepsilon`}
        </MathBlock>
      </Definition>

      <Callout type="info">
        <strong>Key Difference from Sequences:</strong> We require <Math>0 &lt; |x - c|</Math>,
        meaning we never evaluate at <Math>c</Math> itself. The limit depends only on behavior near <Math>c</Math>.
      </Callout>

      <Theorem
        title="Sequential Characterization"
        proof={
          <>
            <p className="mb-3"><strong>(⇒)</strong> Suppose lim(x→c) f(x) = L. Let xₙ → c with xₙ ≠ c.</p>
            <p className="mb-3">Given ε &gt; 0, ∃δ: 0 &lt; |x - c| &lt; δ ⇒ |f(x) - L| &lt; ε.</p>
            <p className="mb-3">Since xₙ → c, ∃N: n &gt; N ⇒ |xₙ - c| &lt; δ. Also xₙ ≠ c, so |f(xₙ) - L| &lt; ε for n &gt; N.</p>
            <p className="mb-3"><strong>(⇐)</strong> Contrapositive: if lim ≠ L, ∃ε &gt; 0 such that for all δ, ∃x with 0 &lt; |x - c| &lt; δ but |f(x) - L| ≥ ε.</p>
            <p className="mb-3">Taking δ = 1/n, get sequence xₙ → c but f(xₙ) ↛ L. Contradiction!</p>
          </>
        }
      >
        <p>
          <Math>{"\\lim_{x \\to c} f(x) = L"}</Math> if and only if for every sequence <Math>(x_n)</Math>
          with <Math>{"x_n \\to c"}</Math> and <Math>x_n \neq c</Math>, we have <Math>{"f(x_n) \\to L"}</Math>.
        </p>
      </Theorem>

      <h3>Continuity</h3>

      <Definition title="Continuity at a Point">
        <p>
          A function <Math>f</Math> is continuous at <Math>c</Math> if:
        </p>
        <MathBlock>
          {`\\lim_{x \\to c} f(x) = f(c)`}
        </MathBlock>
        <p>Equivalently, <Math>{"\\forall \\varepsilon > 0, \\exists \\delta > 0: |x - c| < \\delta \\Rightarrow |f(x) - f(c)| < \\varepsilon"}</Math>.</p>
      </Definition>

      <Example title="Discontinuous Function">
        <p>The function <Math>f(x) = \sin(1/x)</Math> for <Math>x \neq 0</Math> has no limit at 0,
        since it oscillates infinitely. There is no way to define <Math>f(0)</Math> to make <Math>f</Math> continuous.</p>
      </Example>

      <h3>Uniform Continuity</h3>

      <Definition title="Uniform Continuity">
        <p>
          A function <Math>f</Math> is uniformly continuous on <Math>S</Math> if:
        </p>
        <MathBlock>
          {`\\forall \\varepsilon > 0, \\exists \\delta > 0: |x - y| < \\delta \\Rightarrow |f(x) - f(y)| < \\varepsilon \\text{ for all } x, y \\in S`}
        </MathBlock>
      </Definition>

      <Callout type="important">
        <strong>Key Difference:</strong> In uniform continuity, δ depends only on ε, not on the point.
        This is crucial for exchanging limits with integrals.
      </Callout>

      <Theorem
        title="Heine-Cantor Theorem"
        proof={
          <>
            <p className="mb-3">Let f be continuous on compact K. Suppose f is not uniformly continuous.</p>
            <p className="mb-3">Then ∃ε &gt; 0 and sequences (xₙ), (yₙ) in K with |xₙ - yₙ| &lt; 1/n but |f(xₙ) - f(yₙ)| ≥ ε.</p>
            <p className="mb-3">By compactness (Bolzano-Weierstrass), (xₙ) has a convergent subsequence xₙₖ → x ∈ K.</p>
            <p className="mb-3">Then yₙₖ → x also (since |xₙₖ - yₙₖ| → 0).</p>
            <p className="mb-3">By continuity at x: f(xₙₖ) → f(x) and f(yₙₖ) → f(x). But |f(xₙₖ) - f(yₙₖ)| ≥ ε. Contradiction!</p>
          </>
        }
      >
        <p>
          A continuous function on a compact set is uniformly continuous.
        </p>
      </Theorem>

      <SectionQuiz
        sectionId={9}
        questions={section09Quiz}
        title="Limits and Continuity Quiz"
      />
    </LessonLayout>
  );
}
