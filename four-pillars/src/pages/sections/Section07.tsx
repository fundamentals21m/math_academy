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

      <Theorem title="ASA Congruence Theorem">
        <p>
          Two triangles are congruent if two angles and the included side of one
          triangle are equal to two angles and the included side of the other.
        </p>
      </Theorem>

      <p>
        <strong>Proof sketch:</strong> Given triangles ABC and DEF with ∠A = ∠D,
        AB = DE, and ∠B = ∠E, we need to show BC = EF. If BC ≠ EF, say BC &gt; EF,
        we can find a point B' on BC with BB' = EF. Then triangles AB'B and DEF
        would be congruent by SAS, giving ∠AB'B = ∠E = ∠B. But this is impossible
        since the exterior angle ∠AB'B of triangle AB'C must be greater than the
        interior angle ∠B. ∎
      </p>

      <h3>The Isosceles Triangle Theorem</h3>

      <p>
        One of the most elegant applications of congruence is the classical
        theorem about isosceles triangles.
      </p>

      <Theorem title="Isosceles Triangle Theorem (Euclid I.5)">
        <p>
          In a triangle with two equal sides, the angles opposite those sides
          are equal.
        </p>
      </Theorem>

      <p>
        <strong>Proof:</strong> Consider triangle ABC with AB = AC. We show that
        ∠ABC = ∠ACB.
      </p>

      <p>
        The key insight is to compare the triangle with itself! Consider:
      </p>
      <ul className="list-disc list-inside space-y-2 my-4">
        <li>Triangle ABC (reading vertices as A, B, C)</li>
        <li>Triangle ACB (reading vertices as A, C, B)</li>
      </ul>

      <p>
        These triangles have:
      </p>
      <ul className="list-disc list-inside space-y-2 my-4">
        <li>AB = AC (given)</li>
        <li>∠BAC = ∠CAB (the same angle)</li>
        <li>AC = AB (given)</li>
      </ul>

      <p>
        By SAS, triangle ABC ≅ triangle ACB. Therefore ∠ABC = ∠ACB. ∎
      </p>

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

      <Theorem title="Converse of Isosceles Triangle Theorem">
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

      <Theorem title="Opposite Sides of a Parallelogram">
        <p>
          In a parallelogram, opposite sides are equal.
        </p>
      </Theorem>

      <p>
        <strong>Proof:</strong> Let ABCD be a parallelogram with AB ∥ CD and
        AD ∥ BC. Draw the diagonal AC.
      </p>

      <p>
        Since AB ∥ CD, the alternate interior angles satisfy ∠BAC = ∠DCA.
        Since AD ∥ BC, we have ∠DAC = ∠BCA.
      </p>

      <p>
        Now triangles ABC and CDA have:
      </p>
      <ul className="list-disc list-inside space-y-2 my-4">
        <li>∠BAC = ∠DCA</li>
        <li>AC = CA (common side)</li>
        <li>∠BCA = ∠DAC</li>
      </ul>

      <p>
        By ASA, triangle ABC ≅ triangle CDA. Therefore AB = CD and BC = DA. ∎
      </p>

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
