import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Theorem, Example } from '../../components/common/ContentBlocks';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section80() {
  return (
    <LessonLayout sectionId={80}>
      <h2 className="text-2xl font-semibold mb-4">Measurable Functions</h2>

      <p className="mb-4">
        Measurable functions are the appropriate class of functions for Lebesgue integration.
        They are defined by requiring that preimages of measurable sets are measurable.
      </p>

      <Definition title="11.18 - Measurable Function">
        <p className="mb-3">
          Let <InlineMath>{'(X, \\mathfrak{M})'}</InlineMath> be a measurable space and let <InlineMath>{'f: X \\to [-\\infty, \\infty]'}</InlineMath>.
          We say <InlineMath>{'f'}</InlineMath> is <em>measurable</em> if for every real <InlineMath>{'a'}</InlineMath>:
        </p>
        <MathBlock>{'\\{x : f(x) > a\\} \\in \\mathfrak{M}'}</MathBlock>
        <p>
          Equivalently, <InlineMath>{'f^{-1}((a, \\infty])'}</InlineMath> is measurable for all <InlineMath>{'a \\in \\mathbb{R}'}</InlineMath>.
        </p>
      </Definition>

      <Theorem
        title="11.19 - Equivalent Conditions for Measurability"
        proof={
          <>
            <p className="mb-3">
              (b) follows from (a) by taking complements: <InlineMath>{'\\{f \\leq a\\} = \\{f > a\\}^c'}</InlineMath>.
            </p>
            <p className="mb-3">
              (c) follows from (b) by: <InlineMath>{'\\{f < a\\} = \\bigcup_{n=1}^\\infty \\{f \\leq a - 1/n\\}'}</InlineMath>.
            </p>
            <p className="mb-3">
              (d) follows from (c) by taking complements.
            </p>
            <p>
              Conversely, (a) follows from any of (b), (c), or (d) by similar arguments.
            </p>
          </>
        }
      >
        <p className="mb-3">
          Each of the following conditions is equivalent to <InlineMath>{'f'}</InlineMath> being measurable:
        </p>
        <p className="mb-2">(a) <InlineMath>{'\\{f > a\\} \\in \\mathfrak{M}'}</InlineMath> for all <InlineMath>{'a'}</InlineMath></p>
        <p className="mb-2">(b) <InlineMath>{'\\{f \\leq a\\} \\in \\mathfrak{M}'}</InlineMath> for all <InlineMath>{'a'}</InlineMath></p>
        <p className="mb-2">(c) <InlineMath>{'\\{f < a\\} \\in \\mathfrak{M}'}</InlineMath> for all <InlineMath>{'a'}</InlineMath></p>
        <p>(d) <InlineMath>{'\\{f \\geq a\\} \\in \\mathfrak{M}'}</InlineMath> for all <InlineMath>{'a'}</InlineMath></p>
      </Theorem>

      <Example title="Continuous Functions are Measurable">
        <p className="mb-3">
          Let <InlineMath>{'X = \\mathbb{R}^k'}</InlineMath> with the Borel <InlineMath>{'\\sigma'}</InlineMath>-algebra.
          If <InlineMath>{'f: \\mathbb{R}^k \\to \\mathbb{R}'}</InlineMath> is continuous, then for any <InlineMath>{'a'}</InlineMath>:
        </p>
        <MathBlock>{'\\{x : f(x) > a\\} = f^{-1}((a, \\infty))'}</MathBlock>
        <p>
          is open (since <InlineMath>{'(a, \\infty)'}</InlineMath> is open), hence Borel measurable.
          Thus every continuous function is measurable.
        </p>
      </Example>

      <Theorem
        title="11.20 - Algebra of Measurable Functions"
        proof={
          <>
            <p className="mb-3">
              For sums: <InlineMath>{'\\{f + g > a\\} = \\{f > a - g\\} = \\bigcup_{r \\in \\mathbb{Q}} (\\{f > r\\} \\cap \\{g > a - r\\})'}</InlineMath>,
              a countable union of measurable sets.
            </p>
            <p className="mb-3">
              For products: write <InlineMath>{'fg = \\frac{1}{4}[(f+g)^2 - (f-g)^2]'}</InlineMath> and use that
              <InlineMath>{'h^2'}</InlineMath> is measurable when <InlineMath>{'h'}</InlineMath> is.
            </p>
            <p>
              For suprema: <InlineMath>{'\\{\\sup_n f_n > a\\} = \\bigcup_n \\{f_n > a\\}'}</InlineMath>.
            </p>
          </>
        }
      >
        <p className="mb-3">
          If <InlineMath>{'f, g'}</InlineMath> are measurable and <InlineMath>{'c \\in \\mathbb{R}'}</InlineMath>, then:
        </p>
        <p className="mb-2">(a) <InlineMath>{'cf'}</InlineMath> and <InlineMath>{'f + g'}</InlineMath> are measurable</p>
        <p className="mb-2">(b) <InlineMath>{'fg'}</InlineMath> is measurable</p>
        <p className="mb-2">(c) <InlineMath>{'|f|'}</InlineMath>, <InlineMath>{'f^+'}</InlineMath>, <InlineMath>{'f^-'}</InlineMath> are measurable</p>
        <p>(d) <InlineMath>{'\\sup_n f_n'}</InlineMath>, <InlineMath>{'\\inf_n f_n'}</InlineMath>, <InlineMath>{'\\limsup f_n'}</InlineMath>, <InlineMath>{'\\liminf f_n'}</InlineMath> are measurable</p>
      </Theorem>

      <Theorem
        title="11.21 - Limits of Measurable Functions"
        proof={
          <>
            <p className="mb-3">
              We have <InlineMath>{'\\lim f_n = \\limsup f_n = \\liminf f_n'}</InlineMath> when the limit exists.
            </p>
            <p>
              Since <InlineMath>{'\\limsup f_n = \\inf_n \\sup_{k \\geq n} f_k'}</InlineMath> is measurable by the previous theorem,
              the pointwise limit is measurable.
            </p>
          </>
        }
      >
        <p>
          If <InlineMath>{'\\{f_n\\}'}</InlineMath> is a sequence of measurable functions and
          <InlineMath>{'f(x) = \\lim_{n \\to \\infty} f_n(x)'}</InlineMath> exists for all <InlineMath>{'x'}</InlineMath>,
          then <InlineMath>{'f'}</InlineMath> is measurable.
        </p>
      </Theorem>

      <Callout type="info" title="Comparison with Continuity">
        <p>
          Measurable functions are far more general than continuous functions. While continuous
          functions are rare (a "small" class), measurable functions include all limits of
          continuous functions, which is a much larger class.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold mt-8 mb-4">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-2 text-dark-300">
        <li>A function is measurable if <InlineMath>{'\\{f > a\\}'}</InlineMath> is measurable for all <InlineMath>{'a'}</InlineMath></li>
        <li>Continuous functions are measurable</li>
        <li>Sums, products, and scalar multiples of measurable functions are measurable</li>
        <li>Suprema, infima, and limits of measurable functions are measurable</li>
        <li>Measurability is preserved under pointwise convergence</li>
        <li>Measurable functions form a much larger class than continuous functions</li>
      </ul>
    </LessonLayout>
  );
}
