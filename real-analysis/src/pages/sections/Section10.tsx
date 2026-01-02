import { LessonLayout } from '@/components/layout/LessonLayout';
import { Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
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
            <p className="mb-3">WLOG assume <InlineMath>{`f(a) < k < f(b)`}</InlineMath>. Let <InlineMath>{`S = \\{x \\in [a,b] : f(x) < k\\}`}</InlineMath>.</p>
            <p className="mb-3"><InlineMath>{`S`}</InlineMath> is non-empty (<InlineMath>{`a \\in S`}</InlineMath>) and bounded above (by <InlineMath>{`b`}</InlineMath>). Let <InlineMath>{`c = \\sup S`}</InlineMath>.</p>
            <p className="mb-3">By continuity, <InlineMath>{`f(c)`}</InlineMath> cannot be greater than <InlineMath>{`k`}</InlineMath>: if <InlineMath>{`f(c) > k`}</InlineMath>, then by continuity <InlineMath>{`f(x) > k`}</InlineMath> for <InlineMath>{`x`}</InlineMath> near <InlineMath>{`c`}</InlineMath>, contradicting <InlineMath>{`c = \\sup S`}</InlineMath>.</p>
            <p className="mb-3">Similarly, <InlineMath>{`f(c)`}</InlineMath> cannot be less than <InlineMath>{`k`}</InlineMath>: if <InlineMath>{`f(c) < k`}</InlineMath>, then <InlineMath>{`f(x) < k`}</InlineMath> for <InlineMath>{`x`}</InlineMath> slightly greater than <InlineMath>{`c`}</InlineMath>, contradicting <InlineMath>{`c = \\sup S`}</InlineMath>.</p>
            <p className="mb-3">Therefore <InlineMath>{`f(c) = k`}</InlineMath>.</p>
          </>
        }
      >
        <p>
          If <InlineMath>{"f"}</InlineMath> is continuous on <InlineMath>{"[a, b]"}</InlineMath> and <InlineMath>{"k"}</InlineMath> is between
          <InlineMath>{"f(a)"}</InlineMath> and <InlineMath>{"f(b)"}</InlineMath>, then there exists <InlineMath>{"c \\in (a, b)"}</InlineMath>
          such that <InlineMath>{"f(c) = k"}</InlineMath>.
        </p>
      </Theorem>

      <Callout type="info">
        <strong>Applications:</strong> IVT proves existence of roots. For instance, if <InlineMath>{"f(a) < 0"}</InlineMath>
        and <InlineMath>{"f(b) > 0"}</InlineMath>, then <InlineMath>{"f(c) = 0"}</InlineMath> for some <InlineMath>{"c \\in (a, b)"}</InlineMath>.
      </Callout>

      <Example title="Existence of Square Roots">
        <p>
          Consider <InlineMath>{"f(x) = x^2 - 2"}</InlineMath> on <InlineMath>{"[1, 2]"}</InlineMath>. Since <InlineMath>{"f(1) = -1 < 0"}</InlineMath>
          and <InlineMath>{"f(2) = 2 > 0"}</InlineMath>, by IVT there exists <InlineMath>{"c \\in (1, 2)"}</InlineMath> with <InlineMath>{"c^2 = 2"}</InlineMath>.
          This proves <InlineMath>{"\\sqrt{2}"}</InlineMath> exists.
        </p>
      </Example>

      <Theorem
        title="Extreme Value Theorem"
        proof={
          <>
            <p className="mb-3"><strong>Step 1 (Boundedness):</strong> Suppose <InlineMath>{`f`}</InlineMath> is unbounded. Then <InlineMath>{`\\exists x_n`}</InlineMath> with <InlineMath>{`|f(x_n)| \\to \\infty`}</InlineMath>.</p>
            <p className="mb-3">By Bolzano-Weierstrass, <InlineMath>{`(x_n)`}</InlineMath> has a convergent subsequence <InlineMath>{`x_{n_k} \\to c \\in [a,b]`}</InlineMath>.</p>
            <p className="mb-3">By continuity, <InlineMath>{`f(x_{n_k}) \\to f(c)`}</InlineMath>, contradicting <InlineMath>{`|f(x_{n_k})| \\to \\infty`}</InlineMath>. So <InlineMath>{`f`}</InlineMath> is bounded.</p>
            <p className="mb-3"><strong>Step 2 (Maximum attained):</strong> Let <InlineMath>{`M = \\sup f`}</InlineMath>. Choose <InlineMath>{`(x_n)`}</InlineMath> with <InlineMath>{`f(x_n) \\to M`}</InlineMath>.</p>
            <p className="mb-3">By B-W, <InlineMath>{`x_{n_k} \\to c \\in [a,b]`}</InlineMath>. By continuity, <InlineMath>{`f(c) = \\lim f(x_{n_k}) = M`}</InlineMath>. The minimum case is similar.</p>
          </>
        }
      >
        <p>
          If <InlineMath>{"f"}</InlineMath> is continuous on a closed bounded interval <InlineMath>{"[a, b]"}</InlineMath>, then
          <InlineMath>{"f"}</InlineMath> attains its maximum and minimum values.
        </p>
        <MathBlock>
          {`\\exists x_m, x_M \\in [a, b]: f(x_m) = \\inf f \\text{ and } f(x_M) = \\sup f`}
        </MathBlock>
      </Theorem>

      <Callout type="warning">
        <strong>Compactness is Essential:</strong> On open or unbounded intervals, continuous functions
        may not attain extrema. For example, <InlineMath>{"f(x) = 1/x"}</InlineMath> on <InlineMath>{"(0, 1]"}</InlineMath> has no maximum.
      </Callout>

      <h3>Compactness and Continuity</h3>

      <Theorem
        title="Image of Compact Set"
        proof={
          <>
            <p className="mb-3">Let <InlineMath>{`\\{U_\\alpha\\}`}</InlineMath> be an open cover of <InlineMath>{`f(K)`}</InlineMath>. For each <InlineMath>{`\\alpha`}</InlineMath>, <InlineMath>{`f^{-1}(U_\\alpha)`}</InlineMath> is open (continuity).</p>
            <p className="mb-3">The collection <InlineMath>{`\\{f^{-1}(U_\\alpha)\\}`}</InlineMath> is an open cover of <InlineMath>{`K`}</InlineMath>.</p>
            <p className="mb-3">By compactness of <InlineMath>{`K`}</InlineMath>, there's a finite subcover <InlineMath>{`f^{-1}(U_{\\alpha_1}), \\ldots, f^{-1}(U_{\\alpha_n})`}</InlineMath>.</p>
            <p className="mb-3">Then <InlineMath>{`U_{\\alpha_1}, \\ldots, U_{\\alpha_n}`}</InlineMath> covers <InlineMath>{`f(K)`}</InlineMath>. So <InlineMath>{`f(K)`}</InlineMath> is compact.</p>
            <p className="mb-3">In <InlineMath>{`\\mathbb{R}`}</InlineMath>, Heine-Borel: compact <InlineMath>{`\\Leftrightarrow`}</InlineMath> closed and bounded.</p>
          </>
        }
      >
        <p>
          The continuous image of a compact set is compact. In <InlineMath>{"\\mathbb{R}"}</InlineMath>, this means:
          if <InlineMath>{"K"}</InlineMath> is closed and bounded and <InlineMath>{"f"}</InlineMath> is continuous, then <InlineMath>{"f(K)"}</InlineMath>
          is closed and bounded.
        </p>
      </Theorem>

      <Theorem
        title="Preservation of Connectedness"
        proof={
          <>
            <p className="mb-3">Suppose <InlineMath>{`f(S)`}</InlineMath> is not connected: <InlineMath>{`f(S) = A \\cup B`}</InlineMath> with <InlineMath>{`A, B`}</InlineMath> nonempty, disjoint, and separated.</p>
            <p className="mb-3">Then <InlineMath>{`S = f^{-1}(A) \\cup f^{-1}(B)`}</InlineMath> with <InlineMath>{`f^{-1}(A)`}</InlineMath> and <InlineMath>{`f^{-1}(B)`}</InlineMath> nonempty and disjoint.</p>
            <p className="mb-3">Since <InlineMath>{`f`}</InlineMath> is continuous and <InlineMath>{`A, B`}</InlineMath> are separated, <InlineMath>{`f^{-1}(A)`}</InlineMath> and <InlineMath>{`f^{-1}(B)`}</InlineMath> are separated.</p>
            <p className="mb-3">This contradicts <InlineMath>{`S`}</InlineMath> being connected. So <InlineMath>{`f(S)`}</InlineMath> is connected.</p>
            <p className="mb-3">In <InlineMath>{`\\mathbb{R}`}</InlineMath>, connected sets are exactly the intervals, so intervals map to intervals.</p>
          </>
        }
      >
        <p>
          Continuous functions preserve connectedness. In <InlineMath>{"\\mathbb{R}"}</InlineMath>, intervals map to intervals.
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
