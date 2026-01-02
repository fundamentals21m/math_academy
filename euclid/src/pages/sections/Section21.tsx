import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section21() {
  return (
    <LessonLayout sectionId={21}>
      <Proposition
        title="Proposition I.21"
        proof={
          <>
            <p>
              Let <em>ABC</em> be a triangle, and on <em>BC</em> let two straight lines <em>BD</em>,{' '}
              <em>DC</em> be constructed meeting within the triangle at <em>D</em>.
            </p>
            <p className="mt-2">
              I say that <em>BD</em>, <em>DC</em> are less than the remaining two sides of the
              triangle <em>BA</em>, <em>AC</em>, but contain an angle <em>BDC</em> greater than the
              angle <em>BAC</em>.
            </p>
            <p className="mt-2">
              For let <em>BD</em> be drawn through to <em>E</em>.
            </p>
            <p className="mt-2">
              Then, since in any triangle two sides are greater than the remaining one, [I. 20]
              therefore, in the triangle <em>ABE</em>, the two sides <em>AB</em>, <em>AE</em> are
              greater than <em>BE</em>.
            </p>
            <p className="mt-2">
              Let <em>EC</em> be added to each; therefore <em>BA</em>, <em>AC</em> are greater than{' '}
              <em>BE</em>, <em>EC</em>.
            </p>
            <p className="mt-2">
              Again, since, in the triangle <em>CED</em>, the two sides <em>CE</em>, <em>ED</em> are
              greater than <em>CD</em>, let <em>DB</em> be added to each; therefore <em>CE</em>,{' '}
              <em>EB</em> are greater than <em>CD</em>, <em>DB</em>.
            </p>
            <p className="mt-2">
              But <em>BA</em>, <em>AC</em> were proved greater than <em>BE</em>, <em>EC</em>;
              therefore <em>BA</em>, <em>AC</em> are much greater than <em>BD</em>, <em>DC</em>.
            </p>
            <p className="mt-2">
              Again, since in any triangle the exterior angle is greater than the interior and
              opposite angle, [I. 16] therefore, in the triangle <em>CDE</em>, the exterior angle{' '}
              <em>BDC</em> is greater than the angle <em>CED</em>.
            </p>
            <p className="mt-2">
              For the same reason, moreover, in the triangle <em>ABE</em>, the exterior angle{' '}
              <em>CEB</em> is greater than the angle <em>BAC</em>. But the angle <em>BDC</em> was
              proved greater than the angle <em>CEB</em>; therefore the angle <em>BDC</em> is much
              greater than the angle <em>BAC</em>.
            </p>
            <p className="mt-2 font-medium">
              Therefore etc.
            </p>
          </>
        }
      >
        <p>
          If on one of the sides of a triangle, from its extremities, there be constructed two
          straight lines meeting within the triangle, the straight lines so constructed will be less
          than the remaining two sides of the triangle, but will contain a greater angle.
        </p>
      </Proposition>

      <h2>Analysis</h2>

      <p>
        This proposition compares a triangle with an "inner" triangle sharing the same base: the
        inner triangle has shorter remaining sides but a larger apex angle.
      </p>

      <p className="mt-4">The proof uses:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition I.16 (exterior angle theorem) - for the angle comparison</li>
        <li>Proposition I.20 (triangle inequality) - for the side comparison</li>
      </ul>
    </LessonLayout>
  );
}
