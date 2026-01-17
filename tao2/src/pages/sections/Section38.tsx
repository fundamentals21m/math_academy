import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section38() {
  return (
    <LessonLayout sectionId={38}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">The Goal: Lebesgue Measure</h2>

      <p className="mb-4">
        Having discussed differentiation in several variable calculus, we now turn to{' '}
        <strong>integration</strong>. Given a subset <InlineMath>{`\\Omega`}</InlineMath> of{' '}
        <InlineMath>{`\\mathbf{R}^n`}</InlineMath> and a function{' '}
        <InlineMath>{`f : \\Omega \\to \\mathbf{R}`}</InlineMath>, can we compute{' '}
        <InlineMath>{`\\int_\\Omega f`}</InlineMath>?
      </p>

      <p className="mb-4">
        The Riemann integral works for "Riemann integrable" functions, but this class is too
        restrictive. We need the <strong>Lebesgue integral</strong>, which handles a much larger
        class of functions.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">
        The Measure Problem
      </h3>

      <p className="mb-4">
        Before integrating, we must understand: how do we compute the{' '}
        <strong>measure</strong> (length/area/volume) of a set <InlineMath>{`\\Omega`}</InlineMath>?
        The integral of the constant function 1 over <InlineMath>{`\\Omega`}</InlineMath> should
        give its measure.
      </p>

      <Callout type="warning" title="A Surprising Fact">
        <p>
          It turns out that we <strong>cannot</strong> assign a measure to every subset of{' '}
          <InlineMath>{`\\mathbf{R}^n`}</InlineMath> while preserving reasonable properties like
          translation invariance and countable additivity. This leads to the Banach-Tarski paradox!
        </p>
      </Callout>

      <p className="mb-4">
        The solution: restrict to <strong>measurable sets</strong>. Almost all sets encountered in
        practice are measurable.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">
        Properties of Measurable Sets
      </h3>

      <Definition title="Desired Properties of Measurable Sets">
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>(i) Borel property:</strong> Every open and closed set is measurable.
          </li>
          <li>
            <strong>(ii) Complementarity:</strong> If <InlineMath>{`\\Omega`}</InlineMath> is
            measurable, so is <InlineMath>{`\\mathbf{R}^n \\setminus \\Omega`}</InlineMath>.
          </li>
          <li>
            <strong>(iii) Boolean algebra:</strong> Finite unions and intersections of measurable
            sets are measurable.
          </li>
          <li>
            <strong>(iv) σ-algebra:</strong> Countable unions and intersections of measurable sets
            are measurable.
          </li>
        </ul>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">
        Properties of Lebesgue Measure
      </h3>

      <Definition title="Desired Properties of Lebesgue Measure">
        <p>
          For every measurable set <InlineMath>{`\\Omega`}</InlineMath>, we assign{' '}
          <InlineMath>{`m(\\Omega) \\in [0, \\infty]`}</InlineMath> satisfying:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-2">
          <li>
            <strong>(v) Empty set:</strong> <InlineMath>{`m(\\emptyset) = 0`}</InlineMath>
          </li>
          <li>
            <strong>(vi) Positivity:</strong>{' '}
            <InlineMath>{`0 \\leq m(\\Omega) \\leq +\\infty`}</InlineMath>
          </li>
          <li>
            <strong>(vii) Monotonicity:</strong> If{' '}
            <InlineMath>{`A \\subseteq B`}</InlineMath>, then{' '}
            <InlineMath>{`m(A) \\leq m(B)`}</InlineMath>
          </li>
          <li>
            <strong>(ix) Finite additivity:</strong> If{' '}
            <InlineMath>{`(A_j)_{j \\in J}`}</InlineMath> are disjoint, then{' '}
            <InlineMath>{`m(\\bigcup_{j \\in J} A_j) = \\sum_{j \\in J} m(A_j)`}</InlineMath>
          </li>
          <li>
            <strong>(xi) Countable additivity:</strong> Same as (ix) for countable collections
          </li>
          <li>
            <strong>(xii) Normalization:</strong>{' '}
            <InlineMath>{`m([0, 1]^n) = 1`}</InlineMath>
          </li>
          <li>
            <strong>(xiii) Translation invariance:</strong>{' '}
            <InlineMath>{`m(x + \\Omega) = m(\\Omega)`}</InlineMath>
          </li>
        </ul>
      </Definition>

      <Callout type="success" title="Main Theorem">
        <p>
          <strong>Theorem (Existence of Lebesgue Measure):</strong> There exists a concept of
          measurable set, and a way to assign a number <InlineMath>{`m(\\Omega)`}</InlineMath> to
          every measurable subset <InlineMath>{`\\Omega \\subseteq \\mathbf{R}^n`}</InlineMath>,
          which obeys all the desired properties.
        </p>
      </Callout>

      <Example title="Why Riemann is Insufficient">
        <p>
          The pointwise limit of Riemann integrable functions need not be Riemann integrable. The
          Lebesgue integral handles limits much better.
        </p>
      </Example>
    </LessonLayout>
  );
}
