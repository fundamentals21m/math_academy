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
            <p className="mb-3">WLOG assume f(a) &lt; k &lt; f(b). Let S = &#123;x ∈ [a,b] : f(x) &lt; k&#125;.</p>
            <p className="mb-3">S is non-empty (a ∈ S) and bounded above (by b). Let c = sup S.</p>
            <p className="mb-3">By continuity, f(c) cannot be greater than k: if f(c) &gt; k, then by continuity f(x) &gt; k for x near c, contradicting c = sup S.</p>
            <p className="mb-3">Similarly, f(c) cannot be less than k: if f(c) &lt; k, then f(x) &lt; k for x slightly greater than c, contradicting c = sup S.</p>
            <p className="mb-3">Therefore f(c) = k.</p>
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
            <p className="mb-3"><strong>Step 1 (Boundedness):</strong> Suppose f is unbounded. Then ∃xₙ with |f(xₙ)| → ∞.</p>
            <p className="mb-3">By Bolzano-Weierstrass, (xₙ) has a convergent subsequence xₙₖ → c ∈ [a,b].</p>
            <p className="mb-3">By continuity, f(xₙₖ) → f(c), contradicting |f(xₙₖ)| → ∞. So f is bounded.</p>
            <p className="mb-3"><strong>Step 2 (Maximum attained):</strong> Let M = sup f. Choose (xₙ) with f(xₙ) → M.</p>
            <p className="mb-3">By B-W, xₙₖ → c ∈ [a,b]. By continuity, f(c) = lim f(xₙₖ) = M. The minimum case is similar.</p>
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
            <p className="mb-3">Let &#123;Uα&#125; be an open cover of f(K). For each α, f⁻¹(Uα) is open (continuity).</p>
            <p className="mb-3">The collection &#123;f⁻¹(Uα)&#125; is an open cover of K.</p>
            <p className="mb-3">By compactness of K, there's a finite subcover f⁻¹(Uα₁), ..., f⁻¹(Uαₙ).</p>
            <p className="mb-3">Then Uα₁, ..., Uαₙ covers f(K). So f(K) is compact.</p>
            <p className="mb-3">In ℝ, Heine-Borel: compact ⟺ closed and bounded.</p>
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
            <p className="mb-3">Suppose f(S) is not connected: f(S) = A ∪ B with A, B nonempty, disjoint, and separated.</p>
            <p className="mb-3">Then S = f⁻¹(A) ∪ f⁻¹(B) with f⁻¹(A) and f⁻¹(B) nonempty and disjoint.</p>
            <p className="mb-3">Since f is continuous and A, B are separated, f⁻¹(A) and f⁻¹(B) are separated.</p>
            <p className="mb-3">This contradicts S being connected. So f(S) is connected.</p>
            <p className="mb-3">In ℝ, connected sets are exactly the intervals, so intervals map to intervals.</p>
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
