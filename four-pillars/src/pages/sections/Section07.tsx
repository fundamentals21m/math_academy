import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section07() {
  return (
    <LessonLayout sectionId={7}>
      <h2>Congruence Axioms</h2>

      <p>
        Two geometric figures are <strong>congruent</strong> if one can be moved
        to coincide exactly with the other. Euclid uses this concept implicitly
        when he speaks of placing one figure on top of another, though he never
        formally defines what "moving" means.
      </p>

      <p>
        For triangles, congruence is completely determined by their sides and
        angles. The key results are the <strong>SAS</strong> and <strong>ASA</strong>
        congruence conditions.
      </p>

      <h3>Side-Angle-Side (SAS) Congruence</h3>

      <Definition title="SAS Congruence Axiom">
        <p>
          Two triangles are congruent if two sides and the included angle of one
          triangle are equal to two sides and the included angle of the other.
        </p>
      </Definition>

      <p>
        In symbols, if triangle ABC has:
      </p>
      <ul className="list-disc list-inside space-y-2 my-4">
        <li>AB = DE</li>
        <li>∠ABC = ∠DEF</li>
        <li>BC = EF</li>
      </ul>
      <p>
        then triangle ABC ≅ triangle DEF.
      </p>

      <Callout type="info">
        <strong>Why is SAS an axiom?</strong> Euclid proves SAS by "superposition"—
        imagining one triangle placed on top of the other. This is geometrically
        intuitive but logically problematic. Modern treatments take SAS as an
        axiom rather than trying to prove it from more basic principles.
      </Callout>

      <h3>Angle-Side-Angle (ASA) Congruence</h3>

      <p>
        The ASA condition can be <em>proved</em> from SAS, so it's a theorem
        rather than an axiom.
      </p>

      <Theorem title="ASA Congruence Theorem"
        proof={
          <>
            <p>Let triangles ABC and DEF satisfy: ∠A = ∠D, AB = DE, and ∠B = ∠E.</p>
            <p className="mt-2">We must prove AC = DF and BC = EF (and hence the triangles are congruent).</p>
            <p className="mt-2"><strong>Step 1:</strong> Assume for contradiction that BC ≠ EF. WLOG, suppose BC &gt; EF.</p>
            <p className="mt-2"><strong>Step 2:</strong> Mark point G on BC such that BG = EF.</p>
            <p className="mt-2"><strong>Step 3:</strong> Consider triangles ABG and DEF:</p>
            <ul className="list-disc list-inside mt-1">
              <li>AB = DE (given)</li>
              <li>∠ABG = ∠DEF (since ∠ABG = ∠ABC = ∠B = ∠E = ∠DEF)</li>
              <li>BG = EF (by construction)</li>
            </ul>
            <p className="mt-2">By SAS, triangle ABG ≅ triangle DEF.</p>
            <p className="mt-2"><strong>Step 4:</strong> This gives ∠BAG = ∠EDF = ∠A.</p>
            <p className="mt-2">But G is between B and C, so ray AG is between rays AB and AC.</p>
            <p className="mt-2">Therefore ∠BAG &lt; ∠BAC = ∠A, contradicting ∠BAG = ∠A.</p>
            <p className="mt-2"><strong>Step 5:</strong> Hence BC = EF. By SAS with AB = DE, ∠B = ∠E, BC = EF, the triangles are congruent.</p>
          </>
        }
      >
        <p>
          Two triangles are congruent if two angles and the included side of one
          triangle are equal to two angles and the included side of the other.
        </p>
      </Theorem>

      <h3>The Isosceles Triangle Theorem</h3>

      <p>
        One of the most elegant applications of congruence is the classical
        theorem about isosceles triangles.
      </p>

      <Theorem title="Isosceles Triangle Theorem (Euclid I.5)"
        proof={
          <>
            <p>Let triangle ABC have AB = AC. We prove ∠ABC = ∠ACB.</p>
            <p className="mt-2"><strong>Pappus's elegant proof:</strong> Compare the triangle with its mirror image.</p>
            <p className="mt-2">Consider triangle ABC (vertices in order A, B, C) and triangle ACB (vertices in order A, C, B).</p>
            <p className="mt-2"><strong>Step 1:</strong> In triangle ABC, the sides from vertex A are AB and AC.</p>
            <p className="mt-2">In triangle ACB, the sides from vertex A are AC and AB.</p>
            <p className="mt-2"><strong>Step 2:</strong> Compare corresponding parts:</p>
            <ul className="list-disc list-inside mt-1">
              <li>First side from A: AB = AC (given)</li>
              <li>Angle at A: ∠BAC = ∠CAB (same angle)</li>
              <li>Second side from A: AC = AB (given)</li>
            </ul>
            <p className="mt-2"><strong>Step 3:</strong> By SAS, triangle ABC ≅ triangle ACB.</p>
            <p className="mt-2"><strong>Step 4:</strong> Corresponding angles are equal:</p>
            <MathBlock math="\angle ABC = \angle ACB" />
          </>
        }
      >
        <p>
          In a triangle with two equal sides, the angles opposite those sides
          are equal.
        </p>
      </Theorem>

      <Callout type="important">
        <strong>Pappus's Proof:</strong> This elegant proof, where a triangle is
        compared with its mirror image, was discovered by Pappus of Alexandria
        (circa 320 CE). Euclid's original proof was more complicated, involving
        the construction of additional points.
      </Callout>

      <h3>The Converse</h3>

      <p>
        The converse of the isosceles triangle theorem is also true and can be
        proved using ASA.
      </p>

      <Theorem title="Converse of Isosceles Triangle Theorem"
        proof={
          <>
            <p>Let triangle ABC have ∠ABC = ∠ACB. We prove AB = AC.</p>
            <p className="mt-2"><strong>Step 1:</strong> Consider triangles ABC and ACB (the triangle compared with its reflection).</p>
            <p className="mt-2"><strong>Step 2:</strong> Compare corresponding parts:</p>
            <ul className="list-disc list-inside mt-1">
              <li>∠ABC = ∠ACB (given)</li>
              <li>BC = CB (same segment)</li>
              <li>∠ACB = ∠ABC (given)</li>
            </ul>
            <p className="mt-2"><strong>Step 3:</strong> By ASA, triangle ABC ≅ triangle ACB.</p>
            <p className="mt-2"><strong>Step 4:</strong> Corresponding sides are equal: AB = AC.</p>
          </>
        }
      >
        <p>
          If two angles of a triangle are equal, then the sides opposite those
          angles are equal.
        </p>
      </Theorem>

      <h3>Properties of Parallelograms</h3>

      <p>
        The congruence axioms allow us to prove fundamental properties of
        parallelograms—quadrilaterals whose opposite sides are parallel.
      </p>

      <Theorem title="Opposite Sides of a Parallelogram"
        proof={
          <>
            <p>Let ABCD be a parallelogram with AB ∥ CD and AD ∥ BC. We prove AB = CD and AD = BC.</p>
            <p className="mt-2"><strong>Step 1:</strong> Draw diagonal AC, dividing the parallelogram into triangles ABC and CDA.</p>
            <p className="mt-2"><strong>Step 2:</strong> Since AB ∥ CD, transversal AC creates alternate interior angles:</p>
            <MathBlock math="\angle BAC = \angle DCA" />
            <p className="mt-2"><strong>Step 3:</strong> Since AD ∥ BC, transversal AC creates alternate interior angles:</p>
            <MathBlock math="\angle DAC = \angle BCA" />
            <p className="mt-2"><strong>Step 4:</strong> Triangles ABC and CDA share side AC = CA.</p>
            <p className="mt-2"><strong>Step 5:</strong> By ASA (using ∠BAC = ∠DCA, AC = CA, ∠BCA = ∠DAC):</p>
            <MathBlock math="\triangle ABC \cong \triangle CDA" />
            <p className="mt-2"><strong>Step 6:</strong> Corresponding sides of congruent triangles are equal:</p>
            <MathBlock math="AB = CD \text{ and } BC = DA" />
          </>
        }
      >
        <p>
          In a parallelogram, opposite sides are equal.
        </p>
      </Theorem>

      <h3>Exercises</h3>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 2.2.1</h4>
        <p className="text-slate-300">
          Prove that the diagonals of a parallelogram bisect each other.
          (Hint: Use the fact that opposite sides are equal and apply ASA to
          appropriate triangles.)
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 2.2.2</h4>
        <p className="text-slate-300">
          Prove that if a quadrilateral has both pairs of opposite sides equal,
          then it is a parallelogram.
        </p>
      </div>

      <SectionQuiz
        sectionId={7}
        questions={quizMap[7] || []}
        title="Congruence Axioms Quiz"
      />
    </LessonLayout>
  );
}
