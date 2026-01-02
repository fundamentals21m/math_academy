import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
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
          We say <InlineMath>{"\\lim_{x \\to c} f(x) = L"}</InlineMath> if:
        </p>
        <MathBlock>
          {`\\forall \\varepsilon > 0, \\exists \\delta > 0: 0 < |x - c| < \\delta \\Rightarrow |f(x) - L| < \\varepsilon`}
        </MathBlock>
      </Definition>

      <Callout type="info">
        <strong>Key Difference from Sequences:</strong> We require <InlineMath>0 &lt; |x - c|</InlineMath>,
        meaning we never evaluate at <InlineMath>c</InlineMath> itself. The limit depends only on behavior near <InlineMath>c</InlineMath>.
      </Callout>

      <Theorem
        title="Sequential Characterization"
        proof={
          <>
            <p className="mb-3"><strong>(⇒)</strong> Suppose <InlineMath>{`\\lim_{x \\to c} f(x) = L`}</InlineMath>. Let <InlineMath>{`x_n \\to c`}</InlineMath> with <InlineMath>{`x_n \\neq c`}</InlineMath>.</p>
            <p className="mb-3">Given <InlineMath>{`\\varepsilon > 0`}</InlineMath>, <InlineMath>{`\\exists \\delta: 0 < |x - c| < \\delta \\Rightarrow |f(x) - L| < \\varepsilon`}</InlineMath>.</p>
            <p className="mb-3">Since <InlineMath>{`x_n \\to c`}</InlineMath>, <InlineMath>{`\\exists N: n > N \\Rightarrow |x_n - c| < \\delta`}</InlineMath>. Also <InlineMath>{`x_n \\neq c`}</InlineMath>, so <InlineMath>{`|f(x_n) - L| < \\varepsilon`}</InlineMath> for <InlineMath>{`n > N`}</InlineMath>.</p>
            <p className="mb-3"><strong>(⇐)</strong> Contrapositive: if limit <InlineMath>{`\\neq L`}</InlineMath>, <InlineMath>{`\\exists \\varepsilon > 0`}</InlineMath> such that for all <InlineMath>{`\\delta`}</InlineMath>, <InlineMath>{`\\exists x`}</InlineMath> with <InlineMath>{`0 < |x - c| < \\delta`}</InlineMath> but <InlineMath>{`|f(x) - L| \\geq \\varepsilon`}</InlineMath>.</p>
            <p className="mb-3">Taking <InlineMath>{`\\delta = 1/n`}</InlineMath>, get sequence <InlineMath>{`x_n \\to c`}</InlineMath> but <InlineMath>{`f(x_n) \\not\\to L`}</InlineMath>. Contradiction!</p>
          </>
        }
      >
        <p>
          <InlineMath>{"\\lim_{x \\to c} f(x) = L"}</InlineMath> if and only if for every sequence <InlineMath>(x_n)</InlineMath>
          with <InlineMath>{"x_n \\to c"}</InlineMath> and <InlineMath>x_n \neq c</InlineMath>, we have <InlineMath>{"f(x_n) \\to L"}</InlineMath>.
        </p>
      </Theorem>

      <h3>Continuity</h3>

      <Definition title="Continuity at a Point">
        <p>
          A function <InlineMath>f</InlineMath> is continuous at <InlineMath>c</InlineMath> if:
        </p>
        <MathBlock>
          {`\\lim_{x \\to c} f(x) = f(c)`}
        </MathBlock>
        <p>Equivalently, <InlineMath>{"\\forall \\varepsilon > 0, \\exists \\delta > 0: |x - c| < \\delta \\Rightarrow |f(x) - f(c)| < \\varepsilon"}</InlineMath>.</p>
      </Definition>

      <Example title="Discontinuous Function">
        <p>The function <InlineMath>f(x) = \sin(1/x)</InlineMath> for <InlineMath>x \neq 0</InlineMath> has no limit at 0,
        since it oscillates infinitely. There is no way to define <InlineMath>f(0)</InlineMath> to make <InlineMath>f</InlineMath> continuous.</p>
      </Example>

      <h3>Uniform Continuity</h3>

      <Definition title="Uniform Continuity">
        <p>
          A function <InlineMath>f</InlineMath> is uniformly continuous on <InlineMath>S</InlineMath> if:
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
            <p className="mb-3">Let <InlineMath>{`f`}</InlineMath> be continuous on compact <InlineMath>{`K`}</InlineMath>. Suppose <InlineMath>{`f`}</InlineMath> is not uniformly continuous.</p>
            <p className="mb-3">Then <InlineMath>{`\\exists \\varepsilon > 0`}</InlineMath> and sequences <InlineMath>{`(x_n), (y_n)`}</InlineMath> in <InlineMath>{`K`}</InlineMath> with <InlineMath>{`|x_n - y_n| < 1/n`}</InlineMath> but <InlineMath>{`|f(x_n) - f(y_n)| \\geq \\varepsilon`}</InlineMath>.</p>
            <p className="mb-3">By compactness (Bolzano-Weierstrass), <InlineMath>{`(x_n)`}</InlineMath> has a convergent subsequence <InlineMath>{`x_{n_k} \\to x \\in K`}</InlineMath>.</p>
            <p className="mb-3">Then <InlineMath>{`y_{n_k} \\to x`}</InlineMath> also (since <InlineMath>{`|x_{n_k} - y_{n_k}| \\to 0`}</InlineMath>).</p>
            <p className="mb-3">By continuity at <InlineMath>{`x`}</InlineMath>: <InlineMath>{`f(x_{n_k}) \\to f(x)`}</InlineMath> and <InlineMath>{`f(y_{n_k}) \\to f(x)`}</InlineMath>. But <InlineMath>{`|f(x_{n_k}) - f(y_{n_k})| \\geq \\varepsilon`}</InlineMath>. Contradiction!</p>
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
