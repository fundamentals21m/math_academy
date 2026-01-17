import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section41() {
  return (
    <LessonLayout sectionId={41}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Measurable Sets</h2>

      <p className="mb-4">
        Since outer measure fails additivity for pathological sets, we restrict to{' '}
        <strong>measurable sets</strong> where additivity holds.
      </p>

      <Definition title="Lebesgue Measurability (Carathéodory)">
        <p>
          A set <InlineMath>E</InlineMath> is <strong>Lebesgue measurable</strong> iff for every
          set <InlineMath>A</InlineMath>:
        </p>
        <MathBlock>{`m^*(A) = m^*(A \\cap E) + m^*(A \\setminus E)`}</MathBlock>
        <p className="mt-2">
          If <InlineMath>E</InlineMath> is measurable, we define{' '}
          <InlineMath>{`m(E) := m^*(E)`}</InlineMath>.
        </p>
      </Definition>

      <Callout type="info" title="Intuition">
        <p>
          <InlineMath>E</InlineMath> being measurable means: whenever we use{' '}
          <InlineMath>E</InlineMath> to divide any set <InlineMath>A</InlineMath> into two parts,
          additivity holds. Measurable sets are those for which finite additivity works.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">
        Properties of Measurable Sets
      </h3>

      <Definition title="Half-Spaces are Measurable">
        <p>
          The half-space{' '}
          <InlineMath>{`\\{(x_1, \\ldots, x_n) \\in \\mathbf{R}^n : x_n > 0\\}`}</InlineMath> is
          measurable.
        </p>
      </Definition>

      <Definition title="Properties of Measurable Sets">
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>(a) Complementarity:</strong> If <InlineMath>E</InlineMath> is measurable, so is{' '}
            <InlineMath>{`\\mathbf{R}^n \\setminus E`}</InlineMath>.
          </li>
          <li>
            <strong>(b) Translation invariance:</strong> If <InlineMath>E</InlineMath> is
            measurable, so is <InlineMath>{`x + E`}</InlineMath>, and{' '}
            <InlineMath>{`m(x + E) = m(E)`}</InlineMath>.
          </li>
          <li>
            <strong>(c) Closure under union/intersection:</strong> If{' '}
            <InlineMath>{`E_1, E_2`}</InlineMath> are measurable, so are{' '}
            <InlineMath>{`E_1 \\cap E_2`}</InlineMath> and{' '}
            <InlineMath>{`E_1 \\cup E_2`}</InlineMath>.
          </li>
          <li>
            <strong>(d) Boolean algebra:</strong> Finite unions and intersections of measurable
            sets are measurable.
          </li>
          <li>
            <strong>(e) Boxes:</strong> Every open box and closed box is measurable.
          </li>
          <li>
            <strong>(f) Measure zero sets:</strong> Any set of outer measure zero is measurable.
          </li>
        </ul>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">
        Additivity for Measurable Sets
      </h3>

      <Definition title="Finite Additivity">
        <p>
          If <InlineMath>{`(E_j)_{j \\in J}`}</InlineMath> are a finite collection of{' '}
          <strong>disjoint</strong> measurable sets, then:
        </p>
        <MathBlock>{`m^*\\left(A \\cap \\bigcup_{j \\in J} E_j\\right) = \\sum_{j \\in J} m^*(A \\cap E_j)`}</MathBlock>
        <p className="mt-2">for any set <InlineMath>A</InlineMath>.</p>
      </Definition>

      <Definition title="Countable Additivity">
        <p>
          If <InlineMath>{`(E_j)_{j \\in J}`}</InlineMath> are a countable collection of{' '}
          <strong>disjoint</strong> measurable sets, then{' '}
          <InlineMath>{`\\bigcup_{j \\in J} E_j`}</InlineMath> is measurable, and:
        </p>
        <MathBlock>{`m\\left(\\bigcup_{j \\in J} E_j\\right) = \\sum_{j \\in J} m(E_j)`}</MathBlock>
      </Definition>

      <Definition title="σ-Algebra Property">
        <p>
          If <InlineMath>{`(\\Omega_j)_{j \\in J}`}</InlineMath> are any countable collection of
          measurable sets, then <InlineMath>{`\\bigcup_{j \\in J} \\Omega_j`}</InlineMath> and{' '}
          <InlineMath>{`\\bigcap_{j \\in J} \\Omega_j`}</InlineMath> are also measurable.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">
        Borel Property
      </h3>

      <Definition title="Open Sets as Countable Unions">
        <p>
          Every open set can be written as a countable or finite union of open boxes.
        </p>
        <p className="mt-2">
          (This uses the fact that there are only countably many{' '}
          <strong>rational boxes</strong> - boxes with rational coordinates.)
        </p>
      </Definition>

      <Definition title="Borel Property">
        <p>
          Every open set, and every closed set, is Lebesgue measurable.
        </p>
      </Definition>

      <Callout type="success" title="Construction Complete">
        <p>
          The construction of Lebesgue measure and its basic properties are now complete. Almost
          every set encountered in practice is measurable, and Lebesgue measure satisfies all our
          desired properties on measurable sets.
        </p>
      </Callout>
    </LessonLayout>
  );
}
