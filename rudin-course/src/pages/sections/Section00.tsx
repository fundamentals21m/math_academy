import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Theorem, Example } from '../../components/common/ContentBlocks';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section00() {
  return (
    <LessonLayout sectionId={0}>
      <h2 className="text-2xl font-semibold mb-4">Introduction</h2>

      <p className="mb-4">
        A satisfactory discussion of the main concepts of analysis (such as convergence,
        continuity, differentiation, and integration) must be based on an accurately
        defined number concept. We shall not, however, enter into any discussion of
        the axioms that govern the arithmetic of the integers, but assume familiarity
        with the rational numbers (i.e., the numbers of the form <InlineMath>{'m/n'}</InlineMath>,
        where <InlineMath>{'m'}</InlineMath> and <InlineMath>{'n'}</InlineMath> are
        integers and <InlineMath>{'n \\neq 0'}</InlineMath>).
      </p>

      <Callout type="info" title="The Central Problem">
        <p>
          The rational number system is inadequate for many purposes, both as a
          field and as an ordered set. For instance, there is no rational <InlineMath>{'p'}</InlineMath> such
          that <InlineMath>{'p^2 = 2'}</InlineMath>. This leads to the introduction of
          so-called "irrational numbers" which are often written as infinite decimal
          expansions and are considered to be "approximated" by the corresponding
          finite decimals.
        </p>
      </Callout>

      <Example title="1.1 - No rational satisfies p^2 = 2">
        <p className="mb-3">
          We now show that the equation
        </p>
        <MathBlock>{'p^2 = 2'}</MathBlock>
        <p className="mb-3">
          is not satisfied by any rational <InlineMath>{'p'}</InlineMath>. If there were such
          a <InlineMath>{'p'}</InlineMath>, we could write <InlineMath>{'p = m/n'}</InlineMath> where <InlineMath>{'m'}</InlineMath> and <InlineMath>{'n'}</InlineMath> are
          integers that are not both even. Let us assume this is done. Then the
          equation implies
        </p>
        <MathBlock>{'m^2 = 2n^2'}</MathBlock>
        <p className="mb-3">
          This shows that <InlineMath>{'m^2'}</InlineMath> is even. Hence <InlineMath>{'m'}</InlineMath> is
          even (if <InlineMath>{'m'}</InlineMath> were odd, <InlineMath>{'m^2'}</InlineMath> would
          be odd), and so <InlineMath>{'m^2'}</InlineMath> is divisible by 4. It follows that
          the right side of the equation is divisible by 4, so that <InlineMath>{'n^2'}</InlineMath> is
          even, which implies that <InlineMath>{'n'}</InlineMath> is even.
        </p>
        <p>
          The assumption that the equation holds thus leads to the conclusion that both <InlineMath>{'m'}</InlineMath> and <InlineMath>{'n'}</InlineMath> are
          even, contrary to our choice of <InlineMath>{'m'}</InlineMath> and <InlineMath>{'n'}</InlineMath>.
          Hence the equation is impossible for rational <InlineMath>{'p'}</InlineMath>.
        </p>
      </Example>

      <p className="mb-4">
        We now examine this situation a little more closely. Let <InlineMath>{'A'}</InlineMath> be
        the set of all positive rationals <InlineMath>{'p'}</InlineMath> such
        that <InlineMath>{'p^2 < 2'}</InlineMath> and let <InlineMath>{'B'}</InlineMath> consist
        of all positive rationals <InlineMath>{'p'}</InlineMath> such
        that <InlineMath>{'p^2 > 2'}</InlineMath>. We shall show
        that <InlineMath>{'A'}</InlineMath> contains no largest number
        and <InlineMath>{'B'}</InlineMath> contains no smallest.
      </p>

      <p className="mb-4">
        More explicitly, for every <InlineMath>{'p'}</InlineMath> in <InlineMath>{'A'}</InlineMath> we
        can find a rational <InlineMath>{'q'}</InlineMath> in <InlineMath>{'A'}</InlineMath> such
        that <InlineMath>{'p < q'}</InlineMath>, and for every <InlineMath>{'p'}</InlineMath> in <InlineMath>{'B'}</InlineMath> we
        can find a rational <InlineMath>{'q'}</InlineMath> in <InlineMath>{'B'}</InlineMath> such
        that <InlineMath>{'q < p'}</InlineMath>.
      </p>

      <p className="mb-4">
        To do this, we associate with each rational <InlineMath>{'p > 0'}</InlineMath> the number
      </p>
      <MathBlock>{'q = p - \\frac{p^2 - 2}{p + 2} = \\frac{2p + 2}{p + 2}'}</MathBlock>
      <p className="mb-4">
        Then
      </p>
      <MathBlock>{'q^2 - 2 = \\frac{2(p^2 - 2)}{(p + 2)^2}'}</MathBlock>

      <p className="mb-4">
        If <InlineMath>{'p'}</InlineMath> is in <InlineMath>{'A'}</InlineMath> then <InlineMath>{'p^2 - 2 < 0'}</InlineMath>,
        so <InlineMath>{'q > p'}</InlineMath>, and <InlineMath>{'q^2 < 2'}</InlineMath>.
        Thus <InlineMath>{'q'}</InlineMath> is in <InlineMath>{'A'}</InlineMath>.
      </p>

      <p className="mb-4">
        If <InlineMath>{'p'}</InlineMath> is in <InlineMath>{'B'}</InlineMath> then <InlineMath>{'p^2 - 2 > 0'}</InlineMath>,
        so <InlineMath>{'0 < q < p'}</InlineMath>, and <InlineMath>{'q^2 > 2'}</InlineMath>.
        Thus <InlineMath>{'q'}</InlineMath> is in <InlineMath>{'B'}</InlineMath>.
      </p>

      <Callout type="note" title="1.2 - Remark">
        <p>
          The purpose of the above discussion has been to show that the rational
          number system has certain gaps, in spite of the fact that between any
          two rationals there is another: If <InlineMath>{'r < s'}</InlineMath> then <InlineMath>{'r < (r + s)/2 < s'}</InlineMath>.
          The real number system fills these gaps. This is the principal reason for
          the fundamental role which it plays in analysis.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold mt-8 mb-4">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-2 text-dark-300">
        <li>The rational numbers are inadequate for analysis because they have "gaps"</li>
        <li>There is no rational number whose square equals 2</li>
        <li>The set of rationals <InlineMath>{'p'}</InlineMath> with <InlineMath>{'p^2 < 2'}</InlineMath> has no largest element</li>
        <li>The set of rationals <InlineMath>{'p'}</InlineMath> with <InlineMath>{'p^2 > 2'}</InlineMath> has no smallest element</li>
        <li>The real numbers will be constructed to fill these gaps</li>
      </ul>
    </LessonLayout>
  );
}
