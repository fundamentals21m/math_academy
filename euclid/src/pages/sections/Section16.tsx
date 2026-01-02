import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section16() {
  return (
    <LessonLayout sectionId={16}>
      <Proposition
        title="Proposition I.16"
        proof={
          <>
            <p>
              Let <em>ABC</em> be a triangle, and let one side of it <em>BC</em> be produced to{' '}
              <em>D</em>.
            </p>
            <p className="mt-2">
              I say that the exterior angle <em>ACD</em> is greater than either of the interior and
              opposite angles <em>CBA</em>, <em>BAC</em>.
            </p>
            <p className="mt-2">
              Let <em>AC</em> be bisected at <em>E</em>, [I. 10] and let <em>BE</em> be joined and
              produced in a straight line to <em>F</em>; let <em>EF</em> be made equal to <em>BE</em>,
              [I. 3] let <em>FC</em> be joined, [Post. 1] and let <em>AC</em> be drawn through to{' '}
              <em>G</em>. [Post. 2]
            </p>
            <p className="mt-2">
              Then, since <em>AE</em> is equal to <em>EC</em>, and <em>BE</em> to <em>EF</em>, the
              two sides <em>AE</em>, <em>EB</em> are equal to the two sides <em>CE</em>, <em>EF</em>{' '}
              respectively; and the angle <em>AEB</em> is equal to the angle <em>FEC</em>, for they
              are vertical angles. [I. 15]
            </p>
            <p className="mt-2">
              Therefore the base <em>AB</em> is equal to the base <em>FC</em>, and the triangle{' '}
              <em>ABE</em> is equal to the triangle <em>CFE</em>, and the remaining angles are equal
              to the remaining angles respectively, namely those which the equal sides subtend; [I. 4]
              therefore the angle <em>BAE</em> is equal to the angle <em>ECF</em>.
            </p>
            <p className="mt-2">
              But the angle <em>ECD</em> is greater than the angle <em>ECF</em>; [C.N. 5] therefore
              the angle <em>ACD</em> is greater than the angle <em>BAE</em>.
            </p>
            <p className="mt-2">
              Similarly also, if <em>BC</em> be bisected, the angle <em>BCG</em>, that is, the angle{' '}
              <em>ACD</em>, [I. 15] can be proved greater than the angle <em>ABC</em> as well.
            </p>
            <p className="mt-2 font-medium">
              Therefore etc.
            </p>
          </>
        }
      >
        <p>
          In any triangle, if one of the sides be produced, the exterior angle is greater than
          either of the interior and opposite angles.
        </p>
      </Proposition>

      <h2>Analysis</h2>

      <p>
        This proposition establishes that an <strong>exterior angle</strong> of a triangle is greater
        than either of the non-adjacent interior angles. This is a stepping stone to the result that
        the sum of angles in a triangle equals two right angles (Proposition I.32).
      </p>

      <p className="mt-4">
        The proof uses a clever construction: bisect a side, extend a line from the opposite vertex
        through the midpoint, and reflect the triangle. The exterior angle contains a copy of one
        of the interior angles, so it must be larger.
      </p>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition I.3 (cutting equal lengths)</li>
        <li>Proposition I.4 (SAS congruence)</li>
        <li>Proposition I.10 (bisecting a segment)</li>
        <li>Proposition I.15 (vertical angles are equal)</li>
        <li>Common Notion 5 (the whole is greater than the part)</li>
      </ul>
    </LessonLayout>
  );
}
