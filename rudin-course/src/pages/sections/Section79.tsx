import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Theorem, Example } from '../../components/common/ContentBlocks';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section79() {
  return (
    <LessonLayout sectionId={79}>
      <h2 className="text-2xl font-semibold mb-4">Measure Spaces</h2>

      <p className="mb-4">
        Abstract measure theory generalizes Lebesgue measure to arbitrary sets. The key structures
        are sigma-algebras and measures, which together form a measure space.
      </p>

      <Definition title="11.12 - Sigma-Algebra">
        <p className="mb-3">
          A collection <InlineMath>{'\\mathfrak{M}'}</InlineMath> of subsets of a set <InlineMath>{'X'}</InlineMath> is
          a <em><InlineMath>{'\\sigma'}</InlineMath>-algebra</em> if:
        </p>
        <p className="mb-2">(a) <InlineMath>{'X \\in \\mathfrak{M}'}</InlineMath></p>
        <p className="mb-2">(b) <InlineMath>{'A \\in \\mathfrak{M}'}</InlineMath> implies <InlineMath>{'A^c \\in \\mathfrak{M}'}</InlineMath></p>
        <p>(c) <InlineMath>{'A_1, A_2, \\ldots \\in \\mathfrak{M}'}</InlineMath> implies <InlineMath>{'\\bigcup_{n=1}^\\infty A_n \\in \\mathfrak{M}'}</InlineMath></p>
      </Definition>

      <Theorem
        title="11.13 - Sigma-Algebra Properties"
        proof={
          <>
            <p className="mb-3">
              (a) <InlineMath>{'\\emptyset = X^c \\in \\mathfrak{M}'}</InlineMath>.
            </p>
            <p className="mb-3">
              (b) <InlineMath>{'\\bigcap A_n = \\left(\\bigcup A_n^c\\right)^c \\in \\mathfrak{M}'}</InlineMath>.
            </p>
            <p>
              (c) <InlineMath>{'A \\setminus B = A \\cap B^c \\in \\mathfrak{M}'}</InlineMath>.
            </p>
          </>
        }
      >
        <p className="mb-3">
          Every <InlineMath>{'\\sigma'}</InlineMath>-algebra <InlineMath>{'\\mathfrak{M}'}</InlineMath> satisfies:
        </p>
        <p className="mb-2">(a) <InlineMath>{'\\emptyset \\in \\mathfrak{M}'}</InlineMath></p>
        <p className="mb-2">(b) <InlineMath>{'\\mathfrak{M}'}</InlineMath> is closed under countable intersections</p>
        <p>(c) <InlineMath>{'\\mathfrak{M}'}</InlineMath> is closed under set differences</p>
      </Theorem>

      <Definition title="11.14 - Measure">
        <p className="mb-3">
          Let <InlineMath>{'\\mathfrak{M}'}</InlineMath> be a <InlineMath>{'\\sigma'}</InlineMath>-algebra on <InlineMath>{'X'}</InlineMath>.
          A <em>measure</em> on <InlineMath>{'\\mathfrak{M}'}</InlineMath> is a function <InlineMath>{'\\mu: \\mathfrak{M} \\to [0, \\infty]'}</InlineMath> such that:
        </p>
        <p className="mb-2">(a) <InlineMath>{'\\mu(\\emptyset) = 0'}</InlineMath></p>
        <p>
          (b) If <InlineMath>{'\\{A_n\\}'}</InlineMath> is a sequence of pairwise disjoint sets in <InlineMath>{'\\mathfrak{M}'}</InlineMath>, then
        </p>
        <MathBlock>{'\\mu\\left(\\bigcup_{n=1}^\\infty A_n\\right) = \\sum_{n=1}^\\infty \\mu(A_n)'}</MathBlock>
      </Definition>

      <Definition title="11.15 - Measure Space">
        <p>
          A <em>measure space</em> is a triple <InlineMath>{'(X, \\mathfrak{M}, \\mu)'}</InlineMath> where
          <InlineMath>{'X'}</InlineMath> is a set, <InlineMath>{'\\mathfrak{M}'}</InlineMath> is a <InlineMath>{'\\sigma'}</InlineMath>-algebra
          on <InlineMath>{'X'}</InlineMath>, and <InlineMath>{'\\mu'}</InlineMath> is a measure on <InlineMath>{'\\mathfrak{M}'}</InlineMath>.
          Sets in <InlineMath>{'\\mathfrak{M}'}</InlineMath> are called <em>measurable</em>.
        </p>
      </Definition>

      <Example title="Lebesgue Measure Space">
        <p>
          <InlineMath>{'(\\mathbb{R}^k, \\mathfrak{M}, m)'}</InlineMath> where <InlineMath>{'\\mathfrak{M}'}</InlineMath>
          is the collection of Lebesgue measurable sets and <InlineMath>{'m'}</InlineMath> is Lebesgue measure.
        </p>
      </Example>

      <Example title="Probability Space">
        <p>
          A measure space <InlineMath>{'(X, \\mathfrak{M}, P)'}</InlineMath> with <InlineMath>{'P(X) = 1'}</InlineMath>
          is called a <em>probability space</em>. Sets in <InlineMath>{'\\mathfrak{M}'}</InlineMath> are events,
          and <InlineMath>{'P(A)'}</InlineMath> is the probability of event <InlineMath>{'A'}</InlineMath>.
        </p>
      </Example>

      <Theorem
        title="11.16 - Continuity of Measure"
        proof={
          <>
            <p className="mb-3">
              For (a): Write <InlineMath>{'E = A_1 \\cup (A_2 \\setminus A_1) \\cup (A_3 \\setminus A_2) \\cup \\cdots'}</InlineMath>,
              a disjoint union. By countable additivity:
            </p>
            <MathBlock>{'\\mu(E) = \\mu(A_1) + \\sum_{n=1}^\\infty \\mu(A_{n+1} \\setminus A_n)'}</MathBlock>
            <p className="mb-3">
              Since <InlineMath>{'\\mu(A_n) + \\mu(A_{n+1} \\setminus A_n) = \\mu(A_{n+1})'}</InlineMath>,
              this telescopes to <InlineMath>{'\\lim \\mu(A_n)'}</InlineMath>.
            </p>
            <p>
              For (b): Apply (a) to <InlineMath>{'B_n = A_1 \\setminus A_n'}</InlineMath> if <InlineMath>{'\\mu(A_1) < \\infty'}</InlineMath>.
            </p>
          </>
        }
      >
        <p className="mb-3">
          Let <InlineMath>{'\\mu'}</InlineMath> be a measure on <InlineMath>{'\\mathfrak{M}'}</InlineMath>.
        </p>
        <p className="mb-3">
          (a) If <InlineMath>{'A_1 \\subset A_2 \\subset \\cdots'}</InlineMath> and <InlineMath>{'E = \\bigcup A_n'}</InlineMath>, then
          <InlineMath>{'\\mu(E) = \\lim_{n \\to \\infty} \\mu(A_n)'}</InlineMath>.
        </p>
        <p>
          (b) If <InlineMath>{'A_1 \\supset A_2 \\supset \\cdots'}</InlineMath>, <InlineMath>{'\\mu(A_1) < \\infty'}</InlineMath>,
          and <InlineMath>{'E = \\bigcap A_n'}</InlineMath>, then <InlineMath>{'\\mu(E) = \\lim_{n \\to \\infty} \\mu(A_n)'}</InlineMath>.
        </p>
      </Theorem>

      <Callout type="warning" title="Finite Measure Required">
        <p>
          In part (b), the condition <InlineMath>{'\\mu(A_1) < \\infty'}</InlineMath> is essential.
          Consider <InlineMath>{'A_n = [n, \\infty)'}</InlineMath> in <InlineMath>{'\\mathbb{R}'}</InlineMath>.
          Then <InlineMath>{'m(A_n) = \\infty'}</InlineMath> for all <InlineMath>{'n'}</InlineMath>, but
          <InlineMath>{'\\bigcap A_n = \\emptyset'}</InlineMath> has measure 0.
        </p>
      </Callout>

      <Definition title="11.17 - Complete Measure Space">
        <p>
          A measure space <InlineMath>{'(X, \\mathfrak{M}, \\mu)'}</InlineMath> is <em>complete</em> if
          every subset of a set of measure zero is measurable (and thus also has measure zero).
          Lebesgue measure on <InlineMath>{'\\mathbb{R}^k'}</InlineMath> is complete.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold mt-8 mb-4">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-2 text-dark-300">
        <li>A <InlineMath>{'\\sigma'}</InlineMath>-algebra is closed under complements and countable unions</li>
        <li>A measure is a countably additive set function with <InlineMath>{'\\mu(\\emptyset) = 0'}</InlineMath></li>
        <li>A measure space is a triple <InlineMath>{'(X, \\mathfrak{M}, \\mu)'}</InlineMath></li>
        <li>Measures are continuous from below (for increasing sequences)</li>
        <li>Measures are continuous from above for decreasing sequences with finite starting measure</li>
        <li>Complete measure spaces have "all negligible sets" measurable</li>
      </ul>
    </LessonLayout>
  );
}
