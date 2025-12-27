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

      <Theorem title="Sequential Characterization">
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

      <Theorem title="Heine-Cantor Theorem">
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
