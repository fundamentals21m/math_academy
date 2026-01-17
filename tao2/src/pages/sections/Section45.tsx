import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section45() {
  return (
    <LessonLayout sectionId={45}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">
        Integration of Absolutely Integrable Functions
      </h2>

      <p className="mb-4">
        We now extend to functions that can be both positive and negative. To avoid the
        indeterminate form <InlineMath>{`+\\infty + (-\\infty)`}</InlineMath>, we restrict to{' '}
        <strong>absolutely integrable</strong> functions.
      </p>

      <Definition title="Absolutely Integrable Function">
        <p>
          A measurable function <InlineMath>{`f : \\Omega \\to \\mathbf{R}^*`}</InlineMath> is{' '}
          <strong>absolutely integrable</strong> (or <InlineMath>{`L^1(\\Omega)`}</InlineMath>)
          if:
        </p>
        <MathBlock>{`\\int_\\Omega |f| < \\infty`}</MathBlock>
      </Definition>

      <Definition title="Positive and Negative Parts">
        <p>
          For any function <InlineMath>{`f : \\Omega \\to \\mathbf{R}^*`}</InlineMath>, define:
        </p>
        <MathBlock>{`f^+ := \\max(f, 0), \\quad f^- := -\\min(f, 0)`}</MathBlock>
        <p className="mt-2">
          Then <InlineMath>{`f^+`}</InlineMath> and <InlineMath>{`f^-`}</InlineMath> are
          non-negative, and:
        </p>
        <MathBlock>{`f = f^+ - f^-, \\quad |f| = f^+ + f^-`}</MathBlock>
      </Definition>

      <Definition title="Lebesgue Integral (General)">
        <p>
          For an absolutely integrable function <InlineMath>{`f : \\Omega \\to \\mathbf{R}^*`}</InlineMath>,
          define:
        </p>
        <MathBlock>{`\\int_\\Omega f := \\int_\\Omega f^+ - \\int_\\Omega f^-`}</MathBlock>
        <p className="mt-2">
          Since <InlineMath>f</InlineMath> is absolutely integrable, both integrals on the
          right are finite.
        </p>
      </Definition>

      <Definition title="Triangle Inequality">
        <MathBlock>{`\\left|\\int_\\Omega f\\right| \\leq \\int_\\Omega f^+ + \\int_\\Omega f^- = \\int_\\Omega |f|`}</MathBlock>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">
        Properties of the Lebesgue Integral
      </h3>

      <Definition title="Basic Properties">
        <p>
          For absolutely integrable functions <InlineMath>f</InlineMath> and{' '}
          <InlineMath>g</InlineMath> on <InlineMath>{`\\Omega`}</InlineMath>:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            <InlineMath>{`\\int_\\Omega cf = c \\int_\\Omega f`}</InlineMath> for any{' '}
            <InlineMath>{`c \\in \\mathbf{R}`}</InlineMath>
          </li>
          <li>
            <InlineMath>{`f + g`}</InlineMath> is absolutely integrable and{' '}
            <InlineMath>{`\\int_\\Omega (f + g) = \\int_\\Omega f + \\int_\\Omega g`}</InlineMath>
          </li>
          <li>
            If <InlineMath>{`f \\leq g`}</InlineMath>, then{' '}
            <InlineMath>{`\\int_\\Omega f \\leq \\int_\\Omega g`}</InlineMath>
          </li>
          <li>
            If <InlineMath>{`f = g`}</InlineMath> almost everywhere, then{' '}
            <InlineMath>{`\\int_\\Omega f = \\int_\\Omega g`}</InlineMath>
          </li>
        </ul>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">
        Dominated Convergence Theorem
      </h3>

      <Definition title="Lebesgue Dominated Convergence Theorem">
        <p>
          Let <InlineMath>{`f_1, f_2, \\ldots`}</InlineMath> be measurable functions from{' '}
          <InlineMath>{`\\Omega`}</InlineMath> to <InlineMath>{`\\mathbf{R}^*`}</InlineMath>{' '}
          that converge pointwise.
        </p>
        <p className="mt-2">
          Suppose there exists an absolutely integrable function{' '}
          <InlineMath>{`F : \\Omega \\to [0, \\infty]`}</InlineMath> such that{' '}
          <InlineMath>{`|f_n(x)| \\leq F(x)`}</InlineMath> for all{' '}
          <InlineMath>{`x \\in \\Omega`}</InlineMath> and all <InlineMath>n</InlineMath>.
        </p>
        <p className="mt-2">Then:</p>
        <MathBlock>{`\\int_\\Omega \\lim_{n \\to \\infty} f_n = \\lim_{n \\to \\infty} \\int_\\Omega f_n`}</MathBlock>
      </Definition>

      <Callout type="success" title="Key Theorem">
        <p>
          The dominated convergence theorem is extremely useful. It allows us to interchange
          limits and integrals when we have a dominating function. This is a major advantage
          of the Lebesgue integral over the Riemann integral.
        </p>
      </Callout>

      <Callout type="info" title="Proof Idea">
        <p>
          The key is that <InlineMath>{`F + f_n`}</InlineMath> and{' '}
          <InlineMath>{`F - f_n`}</InlineMath> are non-negative. Apply Fatou's lemma to both,
          which gives lower bounds that squeeze together.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">
        Upper and Lower Lebesgue Integrals
      </h3>

      <Definition title="Upper and Lower Lebesgue Integrals">
        <p>
          For a function <InlineMath>{`f : \\Omega \\to \\mathbf{R}`}</InlineMath> (not
          necessarily measurable):
        </p>
        <MathBlock>{`\\overline{\\int}_\\Omega f := \\inf\\left\\{\\int_\\Omega g : g \\text{ absolutely integrable and majorizes } f\\right\\}`}</MathBlock>
        <MathBlock>{`\\underline{\\int}_\\Omega f := \\sup\\left\\{\\int_\\Omega g : g \\text{ absolutely integrable and minorizes } f\\right\\}`}</MathBlock>
      </Definition>

      <Definition title="Characterization of Integrability">
        <p>
          If <InlineMath>{`\\overline{\\int}_\\Omega f = \\underline{\\int}_\\Omega f = A`}</InlineMath>{' '}
          for some real <InlineMath>A</InlineMath>, then <InlineMath>f</InlineMath> is
          absolutely integrable with <InlineMath>{`\\int_\\Omega f = A`}</InlineMath>.
        </p>
      </Definition>
    </LessonLayout>
  );
}
