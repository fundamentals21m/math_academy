import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Theorem, Example } from '../../components/common/ContentBlocks';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section77() {
  return (
    <LessonLayout sectionId={77}>
      <h2 className="text-2xl font-semibold mb-4">Set Functions</h2>

      <p className="mb-4">
        Chapter 11 develops Lebesgue's theory of measure and integration. We begin with the concept
        of set functions, which assign numerical values to sets. The key distinction is between
        finitely additive and countably additive set functions.
      </p>

      <Definition title="11.1 - Set Function">
        <p className="mb-3">
          Let <InlineMath>{'\\mathfrak{M}'}</InlineMath> be a collection of subsets of a set <InlineMath>{'X'}</InlineMath>.
          A <em>set function</em> <InlineMath>{'\\varphi'}</InlineMath> defined on <InlineMath>{'\\mathfrak{M}'}</InlineMath>
          assigns to each <InlineMath>{'A \\in \\mathfrak{M}'}</InlineMath> an extended real number <InlineMath>{'\\varphi(A) \\in [-\\infty, \\infty]'}</InlineMath>.
        </p>
      </Definition>

      <Definition title="11.2 - Additive Set Functions">
        <p className="mb-3">
          A set function <InlineMath>{'\\varphi'}</InlineMath> is <em>additive</em> if
        </p>
        <MathBlock>{'\\varphi(A \\cup B) = \\varphi(A) + \\varphi(B)'}</MathBlock>
        <p className="mb-3">
          whenever <InlineMath>{'A, B \\in \\mathfrak{M}'}</InlineMath>, <InlineMath>{'A \\cap B = \\emptyset'}</InlineMath>,
          and <InlineMath>{'A \\cup B \\in \\mathfrak{M}'}</InlineMath>.
        </p>
        <p className="mb-3">
          It is <em>countably additive</em> (or <InlineMath>{'\\sigma'}</InlineMath>-additive) if
        </p>
        <MathBlock>{'\\varphi\\left(\\bigcup_{n=1}^\\infty A_n\\right) = \\sum_{n=1}^\\infty \\varphi(A_n)'}</MathBlock>
        <p>
          for any sequence of pairwise disjoint sets <InlineMath>{'\\{A_n\\}'}</InlineMath> in <InlineMath>{'\\mathfrak{M}'}</InlineMath>
          whose union is also in <InlineMath>{'\\mathfrak{M}'}</InlineMath>.
        </p>
      </Definition>

      <Callout type="warning" title="Finite vs Countable Additivity">
        <p>
          Finite additivity is weaker than countable additivity. For Lebesgue measure to work properly,
          we need countable additivity. This is what distinguishes measure theory from naive volume calculations.
        </p>
      </Callout>

      <Definition title="11.3 - Positive Set Functions">
        <p>
          A set function <InlineMath>{'\\varphi'}</InlineMath> is <em>positive</em> if <InlineMath>{'\\varphi(A) \\geq 0'}</InlineMath>
          for all <InlineMath>{'A \\in \\mathfrak{M}'}</InlineMath>. We typically also require <InlineMath>{'\\varphi(\\emptyset) = 0'}</InlineMath>.
        </p>
      </Definition>

      <Theorem
        title="11.4 - Properties of Additive Set Functions"
        proof={
          <>
            <p className="mb-3">
              For (a): Take <InlineMath>{'A = B = \\emptyset'}</InlineMath>. Then <InlineMath>{'\\varphi(\\emptyset) = \\varphi(\\emptyset) + \\varphi(\\emptyset)'}</InlineMath>,
              so <InlineMath>{'\\varphi(\\emptyset) = 0'}</InlineMath> (assuming <InlineMath>{'\\varphi(\\emptyset)'}</InlineMath> is finite).
            </p>
            <p className="mb-3">
              For (b): If <InlineMath>{'A \\subset B'}</InlineMath>, then <InlineMath>{'B = A \\cup (B \\setminus A)'}</InlineMath>
              with <InlineMath>{'A \\cap (B \\setminus A) = \\emptyset'}</InlineMath>.
              So <InlineMath>{'\\varphi(B) = \\varphi(A) + \\varphi(B \\setminus A) \\geq \\varphi(A)'}</InlineMath> if <InlineMath>{'\\varphi \\geq 0'}</InlineMath>.
            </p>
            <p>
              For (c): Write <InlineMath>{'A \\cup B = A \\cup (B \\setminus A)'}</InlineMath>, a disjoint union, and
              note <InlineMath>{'B \\setminus A \\subset B'}</InlineMath>.
            </p>
          </>
        }
      >
        <p className="mb-3">
          Let <InlineMath>{'\\varphi'}</InlineMath> be a positive additive set function on <InlineMath>{'\\mathfrak{M}'}</InlineMath>. Then:
        </p>
        <p className="mb-2">(a) <InlineMath>{'\\varphi(\\emptyset) = 0'}</InlineMath></p>
        <p className="mb-2">(b) <InlineMath>{'A \\subset B'}</InlineMath> implies <InlineMath>{'\\varphi(A) \\leq \\varphi(B)'}</InlineMath> (monotonicity)</p>
        <p>(c) <InlineMath>{'\\varphi(A \\cup B) \\leq \\varphi(A) + \\varphi(B)'}</InlineMath> (subadditivity)</p>
      </Theorem>

      <Example title="Counting Measure">
        <p className="mb-3">
          Let <InlineMath>{'X'}</InlineMath> be any set and <InlineMath>{'\\mathfrak{M} = \\mathcal{P}(X)'}</InlineMath> (all subsets).
          Define
        </p>
        <MathBlock>{'\\varphi(A) = \\begin{cases} |A| & \\text{if } A \\text{ is finite} \\\\ \\infty & \\text{if } A \\text{ is infinite} \\end{cases}'}</MathBlock>
        <p>
          This <em>counting measure</em> is countably additive: <InlineMath>{'\\varphi(\\bigcup A_n) = \\sum \\varphi(A_n)'}</InlineMath>
          for disjoint <InlineMath>{'A_n'}</InlineMath>.
        </p>
      </Example>

      <Example title="Dirac Measure">
        <p className="mb-3">
          Fix a point <InlineMath>{'p \\in X'}</InlineMath>. The <em>Dirac measure</em> (or point mass) at <InlineMath>{'p'}</InlineMath> is
        </p>
        <MathBlock>{'\\delta_p(A) = \\begin{cases} 1 & \\text{if } p \\in A \\\\ 0 & \\text{if } p \\notin A \\end{cases}'}</MathBlock>
        <p>
          This is countably additive: if <InlineMath>{'\\{A_n\\}'}</InlineMath> are disjoint and <InlineMath>{'p \\in \\bigcup A_n'}</InlineMath>,
          then <InlineMath>{'p'}</InlineMath> is in exactly one <InlineMath>{'A_n'}</InlineMath>.
        </p>
      </Example>

      <Definition title="11.5 - Outer Measure">
        <p className="mb-3">
          An <em>outer measure</em> on <InlineMath>{'X'}</InlineMath> is a function <InlineMath>{'\\mu^*: \\mathcal{P}(X) \\to [0, \\infty]'}</InlineMath> such that:
        </p>
        <p className="mb-2">(a) <InlineMath>{'\\mu^*(\\emptyset) = 0'}</InlineMath></p>
        <p className="mb-2">(b) <InlineMath>{'A \\subset B'}</InlineMath> implies <InlineMath>{'\\mu^*(A) \\leq \\mu^*(B)'}</InlineMath></p>
        <p>(c) <InlineMath>{'\\mu^*\\left(\\bigcup_{n=1}^\\infty A_n\\right) \\leq \\sum_{n=1}^\\infty \\mu^*(A_n)'}</InlineMath> (countable subadditivity)</p>
      </Definition>

      <Callout type="info" title="From Outer Measure to Measure">
        <p>
          Outer measures are defined on all subsets but are only subadditive. The construction of
          Lebesgue measure proceeds by defining an outer measure on <InlineMath>{'\\mathbb{R}^k'}</InlineMath>,
          then restricting to "measurable" sets where true additivity holds.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold mt-8 mb-4">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-2 text-dark-300">
        <li>Set functions assign values to sets in a collection</li>
        <li>Additivity: <InlineMath>{'\\varphi(A \\cup B) = \\varphi(A) + \\varphi(B)'}</InlineMath> for disjoint sets</li>
        <li>Countable additivity extends this to countable disjoint unions</li>
        <li>Positive additive functions satisfy monotonicity and subadditivity</li>
        <li>Outer measures are countably subadditive but defined on all subsets</li>
        <li>Countable additivity is essential for measure theory to work</li>
      </ul>
    </LessonLayout>
  );
}
