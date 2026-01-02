import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section17() {
  return (
    <LessonLayout sectionId={17}>
      <Proposition
        title="Proposition I.17"
        proof={
          <>
            <p>
              Let <em>ABC</em> be a triangle.
            </p>
            <p className="mt-2">
              I say that two angles of the triangle <em>ABC</em> taken together in any manner are
              less than two right angles.
            </p>
            <p className="mt-2">
              For let <em>BC</em> be produced to <em>D</em>.
            </p>
            <p className="mt-2">
              Then, since the angle <em>ACD</em> is an exterior angle of the triangle <em>ABC</em>,
              it is greater than the interior and opposite angle <em>ABC</em>. [I. 16]
            </p>
            <p className="mt-2">
              Let the angle <em>ACB</em> be added to each; therefore the angles <em>ACD</em>,{' '}
              <em>ACB</em> are greater than the angles <em>ABC</em>, <em>BCA</em>.
            </p>
            <p className="mt-2">
              But the angles <em>ACD</em>, <em>ACB</em> are equal to two right angles. [I. 13]
            </p>
            <p className="mt-2">
              Therefore the angles <em>ABC</em>, <em>BCA</em> are less than two right angles.
            </p>
            <p className="mt-2">
              Similarly we can prove that the angles <em>BAC</em>, <em>ACB</em> are also less than
              two right angles, and so are the angles <em>CAB</em>, <em>ABC</em> as well.
            </p>
            <p className="mt-2 font-medium">
              Therefore etc.
            </p>
          </>
        }
      >
        <p>
          In any triangle two angles taken together in any manner are less than two right angles.
        </p>
      </Proposition>

      <h2>Analysis</h2>

      <p>
        This proposition establishes that any two angles of a triangle sum to less than 180°. This
        is an immediate consequence of Proposition I.16 (exterior angle theorem).
      </p>

      <p className="mt-4">
        The proof is elegant: the exterior angle equals two right angles minus the adjacent interior
        angle (by I.13), and the exterior angle is greater than either non-adjacent interior angle
        (by I.16). Therefore those two interior angles must sum to less than two right angles.
      </p>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition I.13 (linear pair equals two right angles)</li>
        <li>Proposition I.16 (exterior angle theorem)</li>
      </ul>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-6 border border-dark-700">
        <p className="text-dark-300 text-sm">
          <strong className="text-amber-400">Note:</strong> This result is specific to Euclidean
          geometry. In hyperbolic geometry, the angle sum of a triangle is less than two right
          angles; in spherical geometry, it is greater.
        </p>
      </div>
    </LessonLayout>
  );
}
