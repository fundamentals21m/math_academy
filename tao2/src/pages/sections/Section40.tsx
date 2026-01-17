import { LessonLayout } from '@/components/layout';
import { Definition, Example } from '@/components/common';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { Callout } from '@/components/common/Callout';

export default function Section40() {
  return (
    <LessonLayout sectionId={40}>
      <h2 className="text-2xl font-bold text-dark-100 mb-6">Outer Measure is Not Additive</h2>

      <p className="mb-4">
        Outer measure satisfies sub-additivity, but unfortunately it fails{' '}
        <strong>additivity</strong>. This is why we need to restrict to measurable sets.
      </p>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">
        Failure of Countable Additivity
      </h3>

      <Definition title="Failure of Countable Additivity">
        <p>
          There exists a countable collection <InlineMath>{`(A_j)_{j \\in J}`}</InlineMath> of{' '}
          <strong>disjoint</strong> subsets of <InlineMath>{`\\mathbf{R}`}</InlineMath> such that:
        </p>
        <MathBlock>{`m^*\\left(\\bigcup_{j \\in J} A_j\\right) \\neq \\sum_{j \\in J} m^*(A_j)`}</MathBlock>
      </Definition>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">
        The Construction (Vitali Set)
      </h3>

      <Example title="Cosets of Q">
        <p>
          A <strong>coset</strong> of <InlineMath>{`\\mathbf{Q}`}</InlineMath> is a set{' '}
          <InlineMath>{`A = x + \\mathbf{Q}`}</InlineMath> for some{' '}
          <InlineMath>{`x \\in \\mathbf{R}`}</InlineMath>. Two cosets are either identical or
          disjoint.
        </p>
        <p className="mt-2">
          Every coset intersects <InlineMath>{`[0, 1]`}</InlineMath> non-trivially.
        </p>
      </Example>

      <Callout type="warning" title="Axiom of Choice Required">
        <p>
          Let <InlineMath>{`\\mathbf{R}/\\mathbf{Q}`}</InlineMath> be the set of all cosets. Using
          the <strong>axiom of choice</strong>, pick one element <InlineMath>{`x_A`}</InlineMath>{' '}
          from <InlineMath>{`A \\cap [0, 1]`}</InlineMath> for each coset <InlineMath>A</InlineMath>
          . Let <InlineMath>{`E = \\{x_A : A \\in \\mathbf{R}/\\mathbf{Q}\\}`}</InlineMath>.
        </p>
      </Callout>

      <Definition title="The Key Set">
        <p>Define:</p>
        <MathBlock>{`X = \\bigcup_{q \\in \\mathbf{Q} \\cap [-1, 1]} (q + E)`}</MathBlock>
        <p className="mt-2">Key properties:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            <InlineMath>{`X \\subseteq [-1, 2]`}</InlineMath>, so{' '}
            <InlineMath>{`m^*(X) \\leq 3`}</InlineMath>
          </li>
          <li>
            <InlineMath>{`[0, 1] \\subseteq X`}</InlineMath>, so{' '}
            <InlineMath>{`m^*(X) \\geq 1`}</InlineMath>
          </li>
        </ul>
      </Definition>

      <Callout type="info" title="The Contradiction">
        <p>
          By translation invariance,{' '}
          <InlineMath>{`\\sum_{q \\in \\mathbf{Q} \\cap [-1,1]} m^*(q + E) = \\sum_{q} m^*(E)`}</InlineMath>
          .
        </p>
        <p className="mt-2">
          Since <InlineMath>{`\\mathbf{Q} \\cap [-1, 1]`}</InlineMath> is countably infinite, this
          sum is either 0 (if <InlineMath>{`m^*(E) = 0`}</InlineMath>) or{' '}
          <InlineMath>{`+\\infty`}</InlineMath> (if <InlineMath>{`m^*(E) > 0`}</InlineMath>).
        </p>
        <p className="mt-2">
          Neither 0 nor <InlineMath>{`+\\infty`}</InlineMath> is in <InlineMath>[1, 3]</InlineMath>,
          so additivity fails.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold text-dark-100 mt-8 mb-4">
        Failure of Finite Additivity
      </h3>

      <Definition title="Failure of Finite Additivity">
        <p>
          One can show that outer measure <InlineMath>{`m^*`}</InlineMath> is not even{' '}
          <strong>finitely additive</strong>: there exists a finite collection of disjoint subsets
          where additivity fails.
        </p>
      </Definition>

      <Callout type="info" title="Proof Idea">
        <p>
          If <InlineMath>{`m^*`}</InlineMath> were finitely additive, then since{' '}
          <InlineMath>{`m^*(E) \\neq 0`}</InlineMath> (from the countable additivity failure), there
          exists <InlineMath>n</InlineMath> with <InlineMath>{`m^*(E) > 1/n`}</InlineMath>.
        </p>
        <p className="mt-2">
          Taking <InlineMath>{`3n`}</InlineMath> rationals from{' '}
          <InlineMath>{`\\mathbf{Q} \\cap [-1, 1]`}</InlineMath>, finite additivity would give{' '}
          <InlineMath>{`m^*(\\bigcup_{q \\in J} (q + E)) > 3`}</InlineMath>, contradicting{' '}
          <InlineMath>{`m^*(X) \\leq 3`}</InlineMath>.
        </p>
      </Callout>

      <Callout type="warning" title="Axiom of Choice">
        <p>
          These counterexamples require the <strong>axiom of choice</strong>. Without it, one can
          construct mathematical models where outer measure is countably additive!
        </p>
      </Callout>

      <Callout type="success" title="Banach-Tarski Paradox">
        <p>
          These examples are related to the <strong>Banach-Tarski paradox</strong>: a unit ball in{' '}
          <InlineMath>{`\\mathbf{R}^3`}</InlineMath> can be partitioned into finitely many pieces
          which reassemble (via rotations and translations) into <strong>two</strong> complete unit
          balls!
        </p>
      </Callout>
    </LessonLayout>
  );
}
