import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section47() {
  return (
    <LessonLayout sectionId={47}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Fubini's Theorem</h2>

      <p className="mb-4">
        We now address integration in higher dimensions and the relationship between
        iterated integrals and multiple integrals.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">
        Three Ways to Integrate
      </h3>

      <Definition title="Integration on R^2">
        <p>
          For a function <InlineMath>{`f(x, y)`}</InlineMath> of two variables, we have three
          potential integrals:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-2">
          <li>
            <strong>Two-dimensional:</strong>{' '}
            <InlineMath>{`\\int_{\\mathbf{R}^2} f`}</InlineMath>
          </li>
          <li>
            <strong>Integrate y first:</strong>{' '}
            <InlineMath>{`\\int_{\\mathbf{R}} \\left(\\int_{\\mathbf{R}} f(x, y) \\, dy\\right) dx`}</InlineMath>
          </li>
          <li>
            <strong>Integrate x first:</strong>{' '}
            <InlineMath>{`\\int_{\\mathbf{R}} \\left(\\int_{\\mathbf{R}} f(x, y) \\, dx\\right) dy`}</InlineMath>
          </li>
        </ul>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Fubini's Theorem</h3>

      <Definition title="Fubini's Theorem">
        <p>
          Let <InlineMath>{`f : \\mathbf{R}^2 \\to \\mathbf{R}`}</InlineMath> be absolutely
          integrable. Then there exist absolutely integrable functions{' '}
          <InlineMath>{`F : \\mathbf{R} \\to \\mathbf{R}`}</InlineMath> and{' '}
          <InlineMath>{`G : \\mathbf{R} \\to \\mathbf{R}`}</InlineMath> such that:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            For almost every <InlineMath>x</InlineMath>,{' '}
            <InlineMath>{`f(x, y)`}</InlineMath> is absolutely integrable in{' '}
            <InlineMath>y</InlineMath> with{' '}
            <InlineMath>{`F(x) = \\int_{\\mathbf{R}} f(x, y) \\, dy`}</InlineMath>
          </li>
          <li>
            For almost every <InlineMath>y</InlineMath>,{' '}
            <InlineMath>{`f(x, y)`}</InlineMath> is absolutely integrable in{' '}
            <InlineMath>x</InlineMath> with{' '}
            <InlineMath>{`G(y) = \\int_{\\mathbf{R}} f(x, y) \\, dx`}</InlineMath>
          </li>
        </ul>
        <p className="mt-2">Furthermore:</p>
        <MathBlock>{`\\int_{\\mathbf{R}} F(x) \\, dx = \\int_{\\mathbf{R}^2} f = \\int_{\\mathbf{R}} G(y) \\, dy`}</MathBlock>
      </Definition>

      <Callout type="info" title="Informal Statement">
        <p>Roughly speaking, Fubini's theorem says:</p>
        <MathBlock>{`\\int_{\\mathbf{R}} \\left(\\int_{\\mathbf{R}} f(x, y) \\, dy\\right) dx = \\int_{\\mathbf{R}^2} f = \\int_{\\mathbf{R}} \\left(\\int_{\\mathbf{R}} f(x, y) \\, dx\\right) dy`}</MathBlock>
      </Callout>

      <Callout type="warning" title="Almost Everywhere Caveat">
        <p>
          The inner integrals may not exist for <em>every</em> <InlineMath>x</InlineMath> or{' '}
          <InlineMath>y</InlineMath>, only for <em>almost every</em>{' '}
          <InlineMath>x</InlineMath> and <InlineMath>y</InlineMath>. This is why we state
          the theorem with the auxiliary functions <InlineMath>F</InlineMath> and{' '}
          <InlineMath>G</InlineMath>.
        </p>
      </Callout>

      <Example title="Edge Case">
        <p>
          Let <InlineMath>{`f(x, y) = 1`}</InlineMath> when <InlineMath>{`x > 0`}</InlineMath>{' '}
          and <InlineMath>{`y = 0`}</InlineMath>, equal <InlineMath>{`-1`}</InlineMath> when{' '}
          <InlineMath>{`x < 0`}</InlineMath> and <InlineMath>{`y = 0`}</InlineMath>, and 0
          otherwise.
        </p>
        <p className="mt-2">
          Then <InlineMath>{`\\int_{\\mathbf{R}^2} f = 0`}</InlineMath> (since{' '}
          <InlineMath>f = 0</InlineMath> almost everywhere), but{' '}
          <InlineMath>{`\\int_{\\mathbf{R}} f(x, y) \\, dy`}</InlineMath> is not absolutely
          integrable when <InlineMath>{`x = 0`}</InlineMath>.
        </p>
      </Example>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Proof Outline</h3>

      <Definition title="Key Reductions">
        <p>The proof proceeds by reducing to simpler cases:</p>
        <ol className="list-decimal list-inside mt-2 space-y-1">
          <li>Reduce to non-negative functions (using positive and negative parts)</li>
          <li>
            Reduce to functions supported on bounded sets like{' '}
            <InlineMath>{`[-N, N] \\times [-N, N]`}</InlineMath>
          </li>
          <li>Reduce to simple functions (using approximation)</li>
          <li>Reduce to characteristic functions (by linearity)</li>
        </ol>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">Applications</h3>

      <Callout type="success" title="Practical Use">
        <p>
          Fubini's theorem allows us to compute multi-dimensional integrals by splitting them
          into iterated one-dimensional integrals. For a measurable set{' '}
          <InlineMath>{`\\Omega \\subseteq \\mathbf{R}^2`}</InlineMath>:
        </p>
        <MathBlock>{`\\int_\\Omega f = \\int_{\\mathbf{R}^2} f \\chi_\\Omega`}</MathBlock>
        <p className="mt-2">
          So Fubini's theorem applies to integration over arbitrary measurable domains.
        </p>
      </Callout>

      <Callout type="success" title="Course Complete">
        <p>
          With Fubini's theorem, we have completed our development of Lebesgue measure and
          integration. The Lebesgue integral provides a powerful, flexible tool for analysis
          that handles limits, sums, and multi-dimensional integration with much greater
          generality than the Riemann integral.
        </p>
      </Callout>
    </LessonLayout>
  );
}
