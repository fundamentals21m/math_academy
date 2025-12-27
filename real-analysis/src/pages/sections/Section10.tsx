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

      <Theorem
        title="Intermediate Value Theorem"
        proof={
          <>
            <p className="mb-3">WLOG assume <Math>{`f(a) < k < f(b)`}</Math>. Let <Math>{`S = \\{x \\in [a,b] : f(x) < k\\}`}</Math>.</p>
            <p className="mb-3"><Math>{`S`}</Math> is non-empty (<Math>{`a \\in S`}</Math>) and bounded above (by <Math>{`b`}</Math>). Let <Math>{`c = \\sup S`}</Math>.</p>
            <p className="mb-3">By continuity, <Math>{`f(c)`}</Math> cannot be greater than <Math>{`k`}</Math>: if <Math>{`f(c) > k`}</Math>, then by continuity <Math>{`f(x) > k`}</Math> for <Math>{`x`}</Math> near <Math>{`c`}</Math>, contradicting <Math>{`c = \\sup S`}</Math>.</p>
            <p className="mb-3">Similarly, <Math>{`f(c)`}</Math> cannot be less than <Math>{`k`}</Math>: if <Math>{`f(c) < k`}</Math>, then <Math>{`f(x) < k`}</Math> for <Math>{`x`}</Math> slightly greater than <Math>{`c`}</Math>, contradicting <Math>{`c = \\sup S`}</Math>.</p>
            <p className="mb-3">Therefore <Math>{`f(c) = k`}</Math>.</p>
          </>
        }
      >
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

      <Theorem
        title="Extreme Value Theorem"
        proof={
          <>
            <p className="mb-3"><strong>Step 1 (Boundedness):</strong> Suppose <Math>{`f`}</Math> is unbounded. Then <Math>{`\\exists x_n`}</Math> with <Math>{`|f(x_n)| \\to \\infty`}</Math>.</p>
            <p className="mb-3">By Bolzano-Weierstrass, <Math>{`(x_n)`}</Math> has a convergent subsequence <Math>{`x_{n_k} \\to c \\in [a,b]`}</Math>.</p>
            <p className="mb-3">By continuity, <Math>{`f(x_{n_k}) \\to f(c)`}</Math>, contradicting <Math>{`|f(x_{n_k})| \\to \\infty`}</Math>. So <Math>{`f`}</Math> is bounded.</p>
            <p className="mb-3"><strong>Step 2 (Maximum attained):</strong> Let <Math>{`M = \\sup f`}</Math>. Choose <Math>{`(x_n)`}</Math> with <Math>{`f(x_n) \\to M`}</Math>.</p>
            <p className="mb-3">By B-W, <Math>{`x_{n_k} \\to c \\in [a,b]`}</Math>. By continuity, <Math>{`f(c) = \\lim f(x_{n_k}) = M`}</Math>. The minimum case is similar.</p>
          </>
        }
      >
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

      <Theorem
        title="Image of Compact Set"
        proof={
          <>
            <p className="mb-3">Let <Math>{`\\{U_\\alpha\\}`}</Math> be an open cover of <Math>{`f(K)`}</Math>. For each <Math>{`\\alpha`}</Math>, <Math>{`f^{-1}(U_\\alpha)`}</Math> is open (continuity).</p>
            <p className="mb-3">The collection <Math>{`\\{f^{-1}(U_\\alpha)\\}`}</Math> is an open cover of <Math>{`K`}</Math>.</p>
            <p className="mb-3">By compactness of <Math>{`K`}</Math>, there's a finite subcover <Math>{`f^{-1}(U_{\\alpha_1}), \\ldots, f^{-1}(U_{\\alpha_n})`}</Math>.</p>
            <p className="mb-3">Then <Math>{`U_{\\alpha_1}, \\ldots, U_{\\alpha_n}`}</Math> covers <Math>{`f(K)`}</Math>. So <Math>{`f(K)`}</Math> is compact.</p>
            <p className="mb-3">In <Math>{`\\mathbb{R}`}</Math>, Heine-Borel: compact <Math>{`\\Leftrightarrow`}</Math> closed and bounded.</p>
          </>
        }
      >
        <p>
          The continuous image of a compact set is compact. In <Math>{"\\mathbb{R}"}</Math>, this means:
          if <Math>{"K"}</Math> is closed and bounded and <Math>{"f"}</Math> is continuous, then <Math>{"f(K)"}</Math>
          is closed and bounded.
        </p>
      </Theorem>

      <Theorem
        title="Preservation of Connectedness"
        proof={
          <>
            <p className="mb-3">Suppose <Math>{`f(S)`}</Math> is not connected: <Math>{`f(S) = A \\cup B`}</Math> with <Math>{`A, B`}</Math> nonempty, disjoint, and separated.</p>
            <p className="mb-3">Then <Math>{`S = f^{-1}(A) \\cup f^{-1}(B)`}</Math> with <Math>{`f^{-1}(A)`}</Math> and <Math>{`f^{-1}(B)`}</Math> nonempty and disjoint.</p>
            <p className="mb-3">Since <Math>{`f`}</Math> is continuous and <Math>{`A, B`}</Math> are separated, <Math>{`f^{-1}(A)`}</Math> and <Math>{`f^{-1}(B)`}</Math> are separated.</p>
            <p className="mb-3">This contradicts <Math>{`S`}</Math> being connected. So <Math>{`f(S)`}</Math> is connected.</p>
            <p className="mb-3">In <Math>{`\\mathbb{R}`}</Math>, connected sets are exactly the intervals, so intervals map to intervals.</p>
          </>
        }
      >
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
