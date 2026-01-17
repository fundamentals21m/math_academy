import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section44() {
  return (
    <LessonLayout sectionId={44}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">
        Integration of Non-Negative Measurable Functions
      </h2>

      <p className="mb-4">
        We extend integration from simple functions to all non-negative measurable functions,
        allowing values up to <InlineMath>{`+\\infty`}</InlineMath>.
      </p>

      <Definition title="Majorization">
        <p>
          For functions <InlineMath>{`f, g : \\Omega \\to \\mathbf{R}`}</InlineMath>, we say{' '}
          <InlineMath>f</InlineMath> <strong>majorizes</strong> <InlineMath>g</InlineMath> (or{' '}
          <InlineMath>g</InlineMath> <strong>minorizes</strong> <InlineMath>f</InlineMath>) iff{' '}
          <InlineMath>{`f(x) \\geq g(x)`}</InlineMath> for all{' '}
          <InlineMath>{`x \\in \\Omega`}</InlineMath>.
        </p>
      </Definition>

      <Definition title="Lebesgue Integral for Non-Negative Functions">
        <p>
          Let <InlineMath>{`f : \\Omega \\to [0, \\infty]`}</InlineMath> be measurable and
          non-negative. Define:
        </p>
        <MathBlock>{`\\int_\\Omega f := \\sup\\left\\{\\int_\\Omega s : s \\text{ is simple, non-negative, and minorizes } f\\right\\}`}</MathBlock>
      </Definition>

      <Callout type="info" title="Comparison with Riemann">
        <p>
          This is analogous to the lower Riemann integral. However, for the Lebesgue integral,
          we will not need to match with an upper integral - the definition above suffices.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">
        Basic Properties
      </h3>

      <Definition title="Properties of the Integral">
        <p>
          For non-negative measurable functions <InlineMath>f</InlineMath> and{' '}
          <InlineMath>g</InlineMath> on <InlineMath>{`\\Omega`}</InlineMath>:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            <InlineMath>{`0 \\leq \\int_\\Omega f \\leq \\infty`}</InlineMath>, and{' '}
            <InlineMath>{`\\int_\\Omega f = 0`}</InlineMath> iff <InlineMath>f = 0</InlineMath>{' '}
            almost everywhere
          </li>
          <li>
            <InlineMath>{`\\int_\\Omega cf = c \\int_\\Omega f`}</InlineMath> for{' '}
            <InlineMath>{`c > 0`}</InlineMath>
          </li>
          <li>
            If <InlineMath>{`f \\leq g`}</InlineMath>, then{' '}
            <InlineMath>{`\\int_\\Omega f \\leq \\int_\\Omega g`}</InlineMath>
          </li>
          <li>
            If <InlineMath>{`f = g`}</InlineMath> almost everywhere, then{' '}
            <InlineMath>{`\\int_\\Omega f = \\int_\\Omega g`}</InlineMath>
          </li>
          <li>
            For measurable <InlineMath>{`\\Omega' \\subseteq \\Omega`}</InlineMath>:{' '}
            <InlineMath>{`\\int_{\\Omega'} f \\leq \\int_\\Omega f`}</InlineMath>
          </li>
        </ul>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">
        Monotone Convergence Theorem
      </h3>

      <Definition title="Lebesgue Monotone Convergence Theorem">
        <p>
          Let <InlineMath>{`(f_n)_{n=1}^{\\infty}`}</InlineMath> be a sequence of non-negative
          measurable functions that are increasing:
        </p>
        <MathBlock>{`0 \\leq f_1(x) \\leq f_2(x) \\leq f_3(x) \\leq \\ldots`}</MathBlock>
        <p className="mt-2">Then:</p>
        <MathBlock>{`\\int_\\Omega \\sup_n f_n = \\sup_n \\int_\\Omega f_n`}</MathBlock>
      </Definition>

      <Callout type="success" title="Key Insight">
        <p>
          The monotone convergence theorem allows us to interchange suprema (limits) with
          integrals for increasing sequences. This is a major advantage over the Riemann
          integral.
        </p>
      </Callout>

      <Definition title="Interchange of Addition and Integration">
        <p>
          For non-negative measurable functions <InlineMath>f</InlineMath> and{' '}
          <InlineMath>g</InlineMath>:
        </p>
        <MathBlock>{`\\int_\\Omega (f + g) = \\int_\\Omega f + \\int_\\Omega g`}</MathBlock>
      </Definition>

      <Definition title="Interchange with Infinite Sums">
        <p>
          If <InlineMath>{`g_1, g_2, \\ldots`}</InlineMath> are non-negative measurable
          functions, then:
        </p>
        <MathBlock>{`\\int_\\Omega \\sum_{n=1}^{\\infty} g_n = \\sum_{n=1}^{\\infty} \\int_\\Omega g_n`}</MathBlock>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Fatou's Lemma</h3>

      <Example title="Moving Bump Example">
        <p>
          Let <InlineMath>{`f_n = \\chi_{[n, n+1)}`}</InlineMath>. Then{' '}
          <InlineMath>{`\\lim_{n \\to \\infty} f_n(x) = 0`}</InlineMath> for all{' '}
          <InlineMath>x</InlineMath>, but <InlineMath>{`\\int_\\mathbf{R} f_n = 1`}</InlineMath>{' '}
          for all <InlineMath>n</InlineMath>.
        </p>
        <p className="mt-2">
          Thus the limit function can have smaller integral than the original functions.
        </p>
      </Example>

      <Definition title="Fatou's Lemma">
        <p>
          Let <InlineMath>{`f_1, f_2, \\ldots`}</InlineMath> be non-negative measurable
          functions on <InlineMath>{`\\Omega`}</InlineMath>. Then:
        </p>
        <MathBlock>{`\\int_\\Omega \\liminf_{n \\to \\infty} f_n \\leq \\liminf_{n \\to \\infty} \\int_\\Omega f_n`}</MathBlock>
      </Definition>

      <Callout type="warning" title="One-Sided Inequality">
        <p>
          Fatou's lemma says the limit can have smaller integral, but not larger. The reverse
          inequality does not hold in general.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">
        Finiteness and Borel-Cantelli
      </h3>

      <Definition title="Finite Integrals Imply Finite Functions">
        <p>
          If <InlineMath>{`f : \\Omega \\to [0, \\infty]`}</InlineMath> is measurable with{' '}
          <InlineMath>{`\\int_\\Omega f < \\infty`}</InlineMath>, then <InlineMath>f</InlineMath>{' '}
          is finite almost everywhere.
        </p>
      </Definition>

      <Definition title="Borel-Cantelli Lemma">
        <p>
          Let <InlineMath>{`\\Omega_1, \\Omega_2, \\ldots`}</InlineMath> be measurable subsets
          of <InlineMath>{`\\mathbf{R}^n`}</InlineMath> with{' '}
          <InlineMath>{`\\sum_{n=1}^{\\infty} m(\\Omega_n) < \\infty`}</InlineMath>.
        </p>
        <p className="mt-2">
          Then the set of points belonging to infinitely many{' '}
          <InlineMath>{`\\Omega_n`}</InlineMath> has measure zero.
        </p>
      </Definition>
    </LessonLayout>
  );
}
