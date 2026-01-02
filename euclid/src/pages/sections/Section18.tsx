import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section18() {
  return (
    <LessonLayout sectionId={18}>
      <Proposition
        title="Proposition I.18"
        proof={
          <>
            <p>
              Let <em>ABC</em> be a triangle having the side <em>AC</em> greater than <em>AB</em>.
            </p>
            <p className="mt-2">
              I say that the angle <em>ABC</em> is also greater than the angle <em>BCA</em>.
            </p>
            <p className="mt-2">
              For, since <em>AC</em> is greater than <em>AB</em>, let <em>AD</em> be made equal to{' '}
              <em>AB</em>, [I. 3] and let <em>BD</em> be joined.
            </p>
            <p className="mt-2">
              Then, since the angle <em>ADB</em> is an exterior angle of the triangle <em>BCD</em>,
              it is greater than the interior and opposite angle <em>DCB</em>. [I. 16]
            </p>
            <p className="mt-2">
              But the angle <em>ADB</em> is equal to the angle <em>ABD</em>, since the side <em>AB</em>{' '}
              is equal to <em>AD</em>; [I. 5] therefore the angle <em>ABD</em> is also greater than
              the angle <em>ACB</em>;
            </p>
            <p className="mt-2">
              therefore the angle <em>ABC</em> is much greater than the angle <em>ACB</em>.
            </p>
            <p className="mt-2 font-medium">
              Therefore etc.
            </p>
          </>
        }
      >
        <p>
          In any triangle the greater side subtends the greater angle.
        </p>
      </Proposition>

      <h2>Analysis</h2>

      <p>
        This proposition relates the sides and angles of a triangle: the larger angle is always
        opposite the longer side. This is the converse of Proposition I.19.
      </p>

      <p className="mt-4">
        The proof constructs an isosceles triangle inside the original by cutting off a segment
        equal to the shorter side. The base angles of this isosceles triangle are equal (by I.5),
        and one of these is an exterior angle of a smaller triangle, hence greater than the original
        smaller angle (by I.16).
      </p>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition I.3 (cutting equal segments)</li>
        <li>Proposition I.5 (base angles of isosceles triangles)</li>
        <li>Proposition I.16 (exterior angle theorem)</li>
      </ul>
    </LessonLayout>
  );
}
