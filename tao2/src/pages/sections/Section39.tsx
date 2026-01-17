import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section39() {
  return (
    <LessonLayout sectionId={39}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Outer Measure</h2>

      <p className="mb-4">
        We first try a naive approach: cover a set by boxes and add up their volumes. This gives{' '}
        <strong>outer measure</strong>, which works for most properties but fails additivity.
      </p>

      <Definition title="Open Box">
        <p>
          An <strong>open box</strong> in <InlineMath>{`\\mathbf{R}^n`}</InlineMath> is a set of
          the form:
        </p>
        <MathBlock>{`B = \\prod_{i=1}^{n} (a_i, b_i) = \\{(x_1, \\ldots, x_n) : x_i \\in (a_i, b_i) \\text{ for all } i\\}`}</MathBlock>
        <p className="mt-2">
          The <strong>volume</strong> of this box is:
        </p>
        <MathBlock>{`\\text{vol}(B) = \\prod_{i=1}^{n} (b_i - a_i)`}</MathBlock>
      </Definition>

      <Example title="Unit Cube">
        <p>
          The unit cube <InlineMath>{`(0, 1)^n`}</InlineMath> is an open box with volume 1.
        </p>
      </Example>

      <Definition title="Outer Measure">
        <p>
          For any set <InlineMath>{`\\Omega \\subseteq \\mathbf{R}^n`}</InlineMath>, the{' '}
          <strong>outer measure</strong> is:
        </p>
        <MathBlock>{`m^*(\\Omega) := \\inf\\left\\{\\sum_{j=1}^{\\infty} \\text{vol}(B_j) : (B_j)_{j \\in J} \\text{ covers } \\Omega, J \\text{ countable}\\right\\}`}</MathBlock>
      </Definition>

      <Callout type="info" title="Key Insight">
        <p>
          We use countably many boxes to cover <InlineMath>{`\\Omega`}</InlineMath>, then take
          the infimum over all such covers. This always exists (the infimum of any non-empty set
          exists).
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">
        Properties of Outer Measure
      </h3>

      <Definition title="Properties of Outer Measure">
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Empty set:</strong> <InlineMath>{`m^*(\\emptyset) = 0`}</InlineMath>
          </li>
          <li>
            <strong>Positivity:</strong>{' '}
            <InlineMath>{`0 \\leq m^*(\\Omega) \\leq +\\infty`}</InlineMath>
          </li>
          <li>
            <strong>Monotonicity:</strong> If{' '}
            <InlineMath>{`A \\subseteq B`}</InlineMath>, then{' '}
            <InlineMath>{`m^*(A) \\leq m^*(B)`}</InlineMath>
          </li>
          <li>
            <strong>Countable sub-additivity:</strong>{' '}
            <InlineMath>{`m^*(\\bigcup_{j \\in J} A_j) \\leq \\sum_{j \\in J} m^*(A_j)`}</InlineMath>
          </li>
          <li>
            <strong>Translation invariance:</strong>{' '}
            <InlineMath>{`m^*(x + \\Omega) = m^*(\\Omega)`}</InlineMath>
          </li>
        </ul>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">
        Outer Measure of Boxes
      </h3>

      <Definition title="Outer Measure of Closed Box">
        <p>
          For any closed box{' '}
          <InlineMath>{`B = \\prod_{i=1}^{n} [a_i, b_i]`}</InlineMath>:
        </p>
        <MathBlock>{`m^*(B) = \\prod_{i=1}^{n} (b_i - a_i)`}</MathBlock>
        <p className="mt-2">The same holds for open boxes.</p>
      </Definition>

      <Example title="Measure of R">
        <p>
          Since <InlineMath>{`(-R, R) \\subset \\mathbf{R}`}</InlineMath> for all{' '}
          <InlineMath>{`R > 0`}</InlineMath>, we have{' '}
          <InlineMath>{`m^*(\\mathbf{R}) \\geq 2R`}</InlineMath>. Taking{' '}
          <InlineMath>{`R \\to \\infty`}</InlineMath> gives{' '}
          <InlineMath>{`m^*(\\mathbf{R}) = +\\infty`}</InlineMath>.
        </p>
      </Example>

      <Example title="Measure of Q">
        <p>
          Each rational <InlineMath>q</InlineMath> has{' '}
          <InlineMath>{`m^*(\\{q\\}) = 0`}</InlineMath>. Since{' '}
          <InlineMath>{`\\mathbf{Q}`}</InlineMath> is countable:
        </p>
        <MathBlock>{`m^*(\\mathbf{Q}) \\leq \\sum_{q \\in \\mathbf{Q}} m^*(\\{q\\}) = 0`}</MathBlock>
        <p className="mt-2">
          So <InlineMath>{`m^*(\\mathbf{Q}) = 0`}</InlineMath>. Every countable set has measure
          zero.
        </p>
      </Example>

      <Example title="Measure of Irrationals">
        <p>
          From <InlineMath>{`m^*(\\mathbf{R}) \\leq m^*(\\mathbf{R} \\setminus \\mathbf{Q}) + m^*(\\mathbf{Q})`}</InlineMath>{' '}
          and <InlineMath>{`m^*(\\mathbf{Q}) = 0`}</InlineMath>, the irrationals have outer measure{' '}
          <InlineMath>{`+\\infty`}</InlineMath>.
        </p>
      </Example>

      <Callout type="info" title="Dimension Matters">
        <p>
          The interval <InlineMath>{`[0, 1]`}</InlineMath> in{' '}
          <InlineMath>{`\\mathbf{R}`}</InlineMath> has 1-dimensional measure 1, but the same
          interval in <InlineMath>{`\\mathbf{R}^2`}</InlineMath> (as a subset of the x-axis) has
          2-dimensional measure 0.
        </p>
      </Callout>
    </LessonLayout>
  );
}
