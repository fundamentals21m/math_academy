import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Theorem, Example } from '../../components/common/ContentBlocks';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section78() {
  return (
    <LessonLayout sectionId={78}>
      <h2 className="text-2xl font-semibold mb-4">Construction of the Lebesgue Measure</h2>

      <p className="mb-4">
        Lebesgue measure extends the notion of length, area, and volume to a much larger class
        of sets than just intervals and rectangles. The construction proceeds via outer measure,
        then identifies the measurable sets.
      </p>

      <Definition title="11.6 - k-cells and Volume">
        <p className="mb-3">
          A <em>k-cell</em> (or interval) in <InlineMath>{'\\mathbb{R}^k'}</InlineMath> is a set of the form
        </p>
        <MathBlock>{'I = [a_1, b_1] \\times [a_2, b_2] \\times \\cdots \\times [a_k, b_k]'}</MathBlock>
        <p className="mb-3">
          where <InlineMath>{'a_i \\leq b_i'}</InlineMath> for each <InlineMath>{'i'}</InlineMath>. The <em>volume</em> of <InlineMath>{'I'}</InlineMath> is
        </p>
        <MathBlock>{'\\text{vol}(I) = (b_1 - a_1)(b_2 - a_2) \\cdots (b_k - a_k)'}</MathBlock>
      </Definition>

      <Definition title="11.7 - Lebesgue Outer Measure">
        <p className="mb-3">
          For any subset <InlineMath>{'A \\subset \\mathbb{R}^k'}</InlineMath>, the <em>Lebesgue outer measure</em> is
        </p>
        <MathBlock>{'m^*(A) = \\inf \\left\\{\\sum_{n=1}^\\infty \\text{vol}(I_n) : A \\subset \\bigcup_{n=1}^\\infty I_n\\right\\}'}</MathBlock>
        <p>
          where the infimum is over all countable covers of <InlineMath>{'A'}</InlineMath> by <InlineMath>{'k'}</InlineMath>-cells.
        </p>
      </Definition>

      <Theorem
        title="11.8 - Outer Measure Properties"
        proof={
          <>
            <p className="mb-3">
              (a) is clear since <InlineMath>{'\\emptyset'}</InlineMath> is covered by cells of arbitrarily small volume.
            </p>
            <p className="mb-3">
              (b) follows because any cover of <InlineMath>{'B'}</InlineMath> also covers <InlineMath>{'A'}</InlineMath>.
            </p>
            <p className="mb-3">
              For (c): Given <InlineMath>{'\\epsilon > 0'}</InlineMath>, for each <InlineMath>{'n'}</InlineMath> choose a cover
              <InlineMath>{'\\{I_{n,j}\\}_j'}</InlineMath> of <InlineMath>{'A_n'}</InlineMath> with
              <InlineMath>{'\\sum_j \\text{vol}(I_{n,j}) < m^*(A_n) + \\epsilon/2^n'}</InlineMath>.
              Then <InlineMath>{'\\{I_{n,j}\\}_{n,j}'}</InlineMath> covers <InlineMath>{'\\bigcup A_n'}</InlineMath> and
            </p>
            <MathBlock>{'\\sum_{n,j} \\text{vol}(I_{n,j}) < \\sum_n m^*(A_n) + \\epsilon'}</MathBlock>
            <p>Taking <InlineMath>{'\\epsilon \\to 0'}</InlineMath> gives the result.</p>
          </>
        }
      >
        <p className="mb-3">
          The Lebesgue outer measure <InlineMath>{'m^*'}</InlineMath> satisfies:
        </p>
        <p className="mb-2">(a) <InlineMath>{'m^*(\\emptyset) = 0'}</InlineMath></p>
        <p className="mb-2">(b) <InlineMath>{'A \\subset B'}</InlineMath> implies <InlineMath>{'m^*(A) \\leq m^*(B)'}</InlineMath></p>
        <p>(c) <InlineMath>{'m^*\\left(\\bigcup_n A_n\\right) \\leq \\sum_n m^*(A_n)'}</InlineMath> (countable subadditivity)</p>
      </Theorem>

      <Definition title="11.9 - Measurable Sets (Caratheodory)">
        <p className="mb-3">
          A set <InlineMath>{'E \\subset \\mathbb{R}^k'}</InlineMath> is <em>Lebesgue measurable</em> if for every <InlineMath>{'A \\subset \\mathbb{R}^k'}</InlineMath>:
        </p>
        <MathBlock>{'m^*(A) = m^*(A \\cap E) + m^*(A \\cap E^c)'}</MathBlock>
        <p>
          This says <InlineMath>{'E'}</InlineMath> "splits" every set <InlineMath>{'A'}</InlineMath> additively with respect to outer measure.
        </p>
      </Definition>

      <Theorem
        title="11.10 - Measurable Sets Form a Sigma-Algebra"
        proof={
          <>
            <p className="mb-3">
              Clearly <InlineMath>{'\\emptyset'}</InlineMath> and <InlineMath>{'\\mathbb{R}^k'}</InlineMath> are measurable.
              If <InlineMath>{'E'}</InlineMath> is measurable, so is <InlineMath>{'E^c'}</InlineMath> (by symmetry of the definition).
            </p>
            <p className="mb-3">
              For countable unions: if <InlineMath>{'E_1, E_2, \\ldots'}</InlineMath> are measurable, one shows by
              induction that finite unions are measurable, then uses a limiting argument for countable unions.
            </p>
            <p>
              The key is that the Caratheodory condition is "hereditary" - it passes to unions.
            </p>
          </>
        }
      >
        <p>
          The collection <InlineMath>{'\\mathfrak{M}'}</InlineMath> of Lebesgue measurable subsets of <InlineMath>{'\\mathbb{R}^k'}</InlineMath>
          is a <InlineMath>{'\\sigma'}</InlineMath>-algebra, and <InlineMath>{'m^*'}</InlineMath> restricted to <InlineMath>{'\\mathfrak{M}'}</InlineMath>
          is countably additive.
        </p>
      </Theorem>

      <Definition title="11.11 - Lebesgue Measure">
        <p className="mb-3">
          The <em>Lebesgue measure</em> <InlineMath>{'m'}</InlineMath> on <InlineMath>{'\\mathbb{R}^k'}</InlineMath> is the restriction of
          <InlineMath>{'m^*'}</InlineMath> to the <InlineMath>{'\\sigma'}</InlineMath>-algebra of measurable sets:
        </p>
        <MathBlock>{'m(E) = m^*(E) \\quad \\text{for } E \\in \\mathfrak{M}'}</MathBlock>
      </Definition>

      <Example title="Cells are Measurable">
        <p className="mb-3">
          Every <InlineMath>{'k'}</InlineMath>-cell <InlineMath>{'I'}</InlineMath> is measurable, and <InlineMath>{'m(I) = \\text{vol}(I)'}</InlineMath>.
          This follows from the fact that for any set <InlineMath>{'A'}</InlineMath>:
        </p>
        <MathBlock>{'m^*(A) = m^*(A \\cap I) + m^*(A \\cap I^c)'}</MathBlock>
        <p>
          The Lebesgue measure thus extends the classical notion of volume to the much larger class of measurable sets.
        </p>
      </Example>

      <Callout type="info" title="What is Measurable?">
        <p>
          All open sets, closed sets, <InlineMath>{'G_\\delta'}</InlineMath> sets, <InlineMath>{'F_\\sigma'}</InlineMath> sets,
          and Borel sets are Lebesgue measurable. Measurable sets include all "reasonable" sets,
          but there exist non-measurable sets (by the Axiom of Choice).
        </p>
      </Callout>

      <h3 className="text-xl font-semibold mt-8 mb-4">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-2 text-dark-300">
        <li>Outer measure is defined via infimum over covers by cells</li>
        <li>Outer measure is countably subadditive (but not additive on all sets)</li>
        <li>Measurable sets satisfy the Caratheodory condition</li>
        <li>Measurable sets form a <InlineMath>{'\\sigma'}</InlineMath>-algebra</li>
        <li>Lebesgue measure is countably additive on measurable sets</li>
        <li>For cells, Lebesgue measure equals classical volume</li>
      </ul>
    </LessonLayout>
  );
}
