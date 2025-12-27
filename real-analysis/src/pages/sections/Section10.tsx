import { LessonLayout } from '@/components/layout/LessonLayout';
import { Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { Math, MathBlock } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { section10Quiz } from '@/data/quizzes';

export default function Section10() {
  return (
    <LessonLayout sectionId={10}>
      <h2>Continuous Functions</h2>

      <p>
        Continuous functions on intervals have remarkable properties. The Intermediate Value
        Theorem and Extreme Value Theorem are cornerstones of analysis and depend crucially
        on the completeness of the real numbers.
      </p>

      <Theorem title="Intermediate Value Theorem">
        <p>
          If <Math>{"f"}</Math> is continuous on <Math>{"[a, b]"}</Math> and <Math>{"k"}</Math> is between
          <Math>{"f(a)"}</Math> and <Math>{"f(b)"}</Math>, then there exists <Math>{"c \\in (a, b)"}</Math>
          such that <Math>{"f(c) = k"}</Math>.
        </p>
      </Theorem>

      <Callout type="info">
        <strong>Applications:</strong> IVT proves existence of roots. For instance, if <Math>{"f(a) < 0"}</Math>
        and <Math>{"f(b) > 0"}</Math>, then <Math>{"f(c) = 0"}</Math> for some <Math>{"c \\in (a, b)"}</Math>.
      </Callout>

      <Example title="Existence of Square Roots">
        <p>
          Consider <Math>{"f(x) = x^2 - 2"}</Math> on <Math>{"[1, 2]"}</Math>. Since <Math>{"f(1) = -1 < 0"}</Math>
          and <Math>{"f(2) = 2 > 0"}</Math>, by IVT there exists <Math>{"c \\in (1, 2)"}</Math> with <Math>{"c^2 = 2"}</Math>.
          This proves <Math>{"\\sqrt{2}"}</Math> exists.
        </p>
      </Example>

      <Theorem title="Extreme Value Theorem">
        <p>
          If <Math>{"f"}</Math> is continuous on a closed bounded interval <Math>{"[a, b]"}</Math>, then
          <Math>{"f"}</Math> attains its maximum and minimum values.
        </p>
        <MathBlock>
          {`\\exists x_m, x_M \\in [a, b]: f(x_m) = \\inf f \\text{ and } f(x_M) = \\sup f`}
        </MathBlock>
      </Theorem>

      <Callout type="warning">
        <strong>Compactness is Essential:</strong> On open or unbounded intervals, continuous functions
        may not attain extrema. For example, <Math>{"f(x) = 1/x"}</Math> on <Math>{"(0, 1]"}</Math> has no maximum.
      </Callout>

      <h3>Compactness and Continuity</h3>

      <Theorem title="Image of Compact Set">
        <p>
          The continuous image of a compact set is compact. In <Math>{"\\mathbb{R}"}</Math>, this means:
          if <Math>{"K"}</Math> is closed and bounded and <Math>{"f"}</Math> is continuous, then <Math>{"f(K)"}</Math>
          is closed and bounded.
        </p>
      </Theorem>

      <Theorem title="Preservation of Connectedness">
        <p>
          Continuous functions preserve connectedness. In <Math>{"\\mathbb{R}"}</Math>, intervals map to intervals.
        </p>
      </Theorem>

      <SectionQuiz
        sectionId={10}
        questions={section10Quiz}
        title="Continuous Functions Quiz"
      />
    </LessonLayout>
  );
}
