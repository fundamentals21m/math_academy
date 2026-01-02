import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';
import { AngleSumTheorem } from '@/components/visualizations';

export default function Section32() {
  return (
    <LessonLayout sectionId={32}>
      <AngleSumTheorem />

      <Proposition
        title="Proposition I.32"
        proof={
          <>
            <p>
              Let <em>ABC</em> be a triangle, and let one side of it <em>BC</em> be produced to{' '}
              <em>D</em>.
            </p>
            <p className="mt-2">
              I say that the exterior angle <em>ACD</em> is equal to the two interior and opposite
              angles <em>CAB</em>, <em>ABC</em>, and the three interior angles of the triangle{' '}
              <em>ABC</em>, <em>BCA</em>, <em>CAB</em> are equal to two right angles.
            </p>
            <p className="mt-2">
              For let <em>CE</em> be drawn through the point <em>C</em> parallel to the straight
              line <em>AB</em>. [I. 31]
            </p>
            <p className="mt-2">
              Then, since <em>AB</em> is parallel to <em>CE</em>, and <em>AC</em> has fallen upon
              them, the alternate angles <em>BAC</em>, <em>ACE</em> are equal to one another. [I. 29]
            </p>
            <p className="mt-2">
              Again, since <em>AB</em> is parallel to <em>CE</em>, and the straight line <em>BD</em>{' '}
              has fallen upon them, the exterior angle <em>ECD</em> is equal to the interior and
              opposite angle <em>ABC</em>. [I. 29]
            </p>
            <p className="mt-2">
              But the angle <em>ACE</em> was also proved equal to the angle <em>BAC</em>; therefore
              the whole angle <em>ACD</em> is equal to the two interior and opposite angles{' '}
              <em>BAC</em>, <em>ABC</em>.
            </p>
            <p className="mt-2">
              Let the angle <em>ACB</em> be added to each; therefore the angles <em>ACD</em>,{' '}
              <em>ACB</em> are equal to the three angles <em>ABC</em>, <em>BCA</em>, <em>CAB</em>.
            </p>
            <p className="mt-2">
              But the angles <em>ACD</em>, <em>ACB</em> are equal to two right angles; [I. 13]
              therefore the angles <em>ABC</em>, <em>BCA</em>, <em>CAB</em> are also equal to two
              right angles.
            </p>
            <p className="mt-2 font-medium">
              Therefore etc.
            </p>
          </>
        }
      >
        <p>
          In any triangle, if one of the sides be produced, the exterior angle is equal to the two
          interior and opposite angles, and the three interior angles of the triangle are equal to
          two right angles.
        </p>
      </Proposition>

      <h2>Analysis</h2>

      <p>
        This is one of the most famous results in geometry: the <strong>sum of the angles in a
        triangle equals 180°</strong> (two right angles). This is a defining characteristic of
        Euclidean geometry.
      </p>

      <p className="mt-4">
        The proof is elegant: draw a line through one vertex parallel to the opposite side. The
        three angles of the triangle are reproduced at this vertex as a straight angle.
      </p>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition I.13 (linear pair equals two right angles)</li>
        <li>Proposition I.29 (parallel lines create equal angles)</li>
        <li>Proposition I.31 (constructing parallel lines)</li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Non-Euclidean Geometry:</strong> In hyperbolic geometry,
          the angle sum is less than 180°. In spherical geometry, it is greater than 180°. The
          Parallel Postulate (used via I.29) is essential here.
        </p>
      </div>
    </LessonLayout>
  );
}
