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
            <p className="mb-3"><strong>(⇒)</strong> Suppose <Math>{`\\lim_{x \\to c} f(x) = L`}</Math>. Let <Math>{`x_n \\to c`}</Math> with <Math>{`x_n \\neq c`}</Math>.</p>
            <p className="mb-3">Given <Math>{`\\varepsilon > 0`}</Math>, <Math>{`\\exists \\delta: 0 < |x - c| < \\delta \\Rightarrow |f(x) - L| < \\varepsilon`}</Math>.</p>
            <p className="mb-3">Since <Math>{`x_n \\to c`}</Math>, <Math>{`\\exists N: n > N \\Rightarrow |x_n - c| < \\delta`}</Math>. Also <Math>{`x_n \\neq c`}</Math>, so <Math>{`|f(x_n) - L| < \\varepsilon`}</Math> for <Math>{`n > N`}</Math>.</p>
            <p className="mb-3"><strong>(⇐)</strong> Contrapositive: if limit <Math>{`\\neq L`}</Math>, <Math>{`\\exists \\varepsilon > 0`}</Math> such that for all <Math>{`\\delta`}</Math>, <Math>{`\\exists x`}</Math> with <Math>{`0 < |x - c| < \\delta`}</Math> but <Math>{`|f(x) - L| \\geq \\varepsilon`}</Math>.</p>
            <p className="mb-3">Taking <Math>{`\\delta = 1/n`}</Math>, get sequence <Math>{`x_n \\to c`}</Math> but <Math>{`f(x_n) \\not\\to L`}</Math>. Contradiction!</p>
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
            <p className="mb-3">Let <Math>{`f`}</Math> be continuous on compact <Math>{`K`}</Math>. Suppose <Math>{`f`}</Math> is not uniformly continuous.</p>
            <p className="mb-3">Then <Math>{`\\exists \\varepsilon > 0`}</Math> and sequences <Math>{`(x_n), (y_n)`}</Math> in <Math>{`K`}</Math> with <Math>{`|x_n - y_n| < 1/n`}</Math> but <Math>{`|f(x_n) - f(y_n)| \\geq \\varepsilon`}</Math>.</p>
            <p className="mb-3">By compactness (Bolzano-Weierstrass), <Math>{`(x_n)`}</Math> has a convergent subsequence <Math>{`x_{n_k} \\to x \\in K`}</Math>.</p>
            <p className="mb-3">Then <Math>{`y_{n_k} \\to x`}</Math> also (since <Math>{`|x_{n_k} - y_{n_k}| \\to 0`}</Math>).</p>
            <p className="mb-3">By continuity at <Math>{`x`}</Math>: <Math>{`f(x_{n_k}) \\to f(x)`}</Math> and <Math>{`f(y_{n_k}) \\to f(x)`}</Math>. But <Math>{`|f(x_{n_k}) - f(y_{n_k})| \\geq \\varepsilon`}</Math>. Contradiction!</p>
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
