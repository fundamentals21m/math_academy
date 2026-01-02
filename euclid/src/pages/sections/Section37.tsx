import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section37() {
  return (
    <LessonLayout sectionId={37}>
      <Proposition
        title="Proposition I.37"
        proof={
          <>
            <p>
              Let <em>ABC</em>, <em>DBC</em> be triangles on the same base <em>BC</em> and in the
              same parallels <em>AD</em>, <em>BC</em>.
            </p>
            <p className="mt-2">
              I say that the triangle <em>ABC</em> is equal to the triangle <em>DBC</em>.
            </p>
            <p className="mt-2">
              Let <em>AD</em> be produced in both directions to <em>E</em>, <em>F</em>; through{' '}
              <em>B</em> let <em>BE</em> be drawn parallel to <em>CA</em>, [I. 31] and through{' '}
              <em>C</em> let <em>CF</em> be drawn parallel to <em>BD</em>. [I. 31]
            </p>
            <p className="mt-2">
              Then each of the figures <em>EBCA</em>, <em>DBCF</em> is a parallelogram; and they are
              equal, for they are on the same base <em>BC</em> and in the same parallels <em>BC</em>,{' '}
              <em>EF</em>. [I. 35]
            </p>
            <p className="mt-2">
              Moreover the triangle <em>ABC</em> is half of the parallelogram <em>EBCA</em>; for the
              diameter <em>AB</em> bisects it. [I. 34]
            </p>
            <p className="mt-2">
              And the triangle <em>DBC</em> is half of the parallelogram <em>DBCF</em>; for the
              diameter <em>DC</em> bisects it. [I. 34]
            </p>
            <p className="mt-2">
              [But the halves of equal things are equal to one another.]
            </p>
            <p className="mt-2">
              Therefore the triangle <em>ABC</em> is equal to the triangle <em>DBC</em>.
            </p>
            <p className="mt-2 font-medium">
              Therefore etc.
            </p>
          </>
        }
      >
        <p>Triangles which are on the same base and in the same parallels are equal to one another.</p>
      </Proposition>

      <h2>Analysis</h2>

      <p>
        This proposition states that triangles with the same base and height have equal area. This
        follows from the fact that each triangle is half of a parallelogram with that base and
        height.
      </p>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition I.31 (constructing parallel lines)</li>
        <li>Proposition I.34 (diagonal bisects a parallelogram)</li>
        <li>Proposition I.35 (parallelograms on same base between same parallels are equal)</li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Area Formula:</strong> This implies the formula:
          Area of triangle = ½ × base × height. The "height" is the perpendicular distance from
          the vertex to the base (or base extended).
        </p>
      </div>
    </LessonLayout>
  );
}
