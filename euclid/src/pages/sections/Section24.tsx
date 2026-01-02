import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section24() {
  return (
    <LessonLayout sectionId={24}>
      <Proposition
        title="Proposition I.24"
        proof={
          <>
            <p>
              Let <em>ABC</em>, <em>DEF</em> be two triangles having the two sides <em>AB</em>,{' '}
              <em>AC</em> equal to the two sides <em>DE</em>, <em>DF</em> respectively, namely{' '}
              <em>AB</em> to <em>DE</em>, and <em>AC</em> to <em>DF</em>, and let the angle{' '}
              <em>BAC</em> be greater than the angle <em>EDF</em>.
            </p>
            <p className="mt-2">
              I say that the base <em>BC</em> is also greater than the base <em>EF</em>.
            </p>
            <p className="mt-2">
              For, since the angle <em>BAC</em> is greater than the angle <em>EDF</em>, let there be
              constructed, on the straight line <em>DE</em>, and at the point <em>D</em> on it, the
              angle <em>EDG</em> equal to the angle <em>BAC</em>; [I. 23] let <em>DG</em> be made
              equal to either of the two straight lines <em>AC</em>, <em>DF</em>, [I. 3] and let{' '}
              <em>EG</em>, <em>FG</em> be joined.
            </p>
            <p className="mt-2">
              Then, since <em>AB</em> is equal to <em>DE</em>, and <em>AC</em> to <em>DG</em>, the
              two sides <em>BA</em>, <em>AC</em> are equal to the two sides <em>ED</em>, <em>DG</em>,
              respectively; and the angle <em>BAC</em> is equal to the angle <em>EDG</em>; therefore
              the base <em>BC</em> is equal to the base <em>EG</em>. [I. 4]
            </p>
            <p className="mt-2">
              Again, since <em>DF</em> is equal to <em>DG</em>, the angle <em>DGF</em> is also equal
              to the angle <em>DFG</em>; [I. 5] therefore the angle <em>DFG</em> is greater than the
              angle <em>EGF</em>.
            </p>
            <p className="mt-2">
              Therefore the angle <em>EFG</em> is much greater than the angle <em>EGF</em>.
            </p>
            <p className="mt-2">
              And, since <em>EFG</em> is a triangle having the angle <em>EFG</em> greater than the
              angle <em>EGF</em>, and the greater angle is subtended by the greater side, [I. 19]
              the side <em>EG</em> is also greater than <em>EF</em>.
            </p>
            <p className="mt-2">
              But <em>EG</em> is equal to <em>BC</em>. Therefore <em>BC</em> is also greater than{' '}
              <em>EF</em>.
            </p>
            <p className="mt-2 font-medium">
              Therefore etc.
            </p>
          </>
        }
      >
        <p>
          If two triangles have the two sides equal to two sides respectively, but have the one of
          the angles contained by the equal straight lines greater than the other, they will also
          have the base greater than the base.
        </p>
      </Proposition>

      <h2>Analysis</h2>

      <p>
        This is sometimes called the "Hinge Theorem" or "SAS Inequality": if two sides of one
        triangle equal two sides of another, but the included angle is larger in the first
        triangle, then the opposite side (base) is also larger in the first triangle.
      </p>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition I.3 (cutting equal segments)</li>
        <li>Proposition I.4 (SAS congruence)</li>
        <li>Proposition I.5 (base angles of isosceles triangles)</li>
        <li>Proposition I.19 (greater angle subtends greater side)</li>
        <li>Proposition I.23 (copying an angle)</li>
      </ul>
    </LessonLayout>
  );
}
