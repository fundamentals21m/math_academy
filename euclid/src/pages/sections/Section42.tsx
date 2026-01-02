import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section42() {
  return (
    <LessonLayout sectionId={42}>
      <Proposition
        title="Proposition I.42"
        proof={
          <>
            <p>
              Let <em>ABC</em> be the given triangle, and <em>D</em> the given rectilineal angle.
            </p>
            <p className="mt-2">
              Thus it is required to construct, in the given rectilineal angle <em>D</em>, a
              parallelogram equal to the triangle <em>ABC</em>.
            </p>
            <p className="mt-2">
              Let <em>BC</em> be bisected at <em>E</em>, [I. 10] and let <em>AE</em> be joined; on
              the straight line <em>EC</em>, and at the point <em>E</em> on it, let the angle{' '}
              <em>CEF</em> be constructed equal to the angle <em>D</em>; [I. 23] through <em>A</em>{' '}
              let <em>AG</em> be drawn parallel to <em>EC</em>, [I. 31] and through <em>C</em> let{' '}
              <em>CG</em> be drawn parallel to <em>EF</em>.
            </p>
            <p className="mt-2">
              Then <em>FECG</em> is a parallelogram.
            </p>
            <p className="mt-2">
              And, since <em>BE</em> is equal to <em>EC</em>, the triangle <em>ABE</em> is also equal
              to the triangle <em>AEC</em>, for they are on equal bases <em>BE</em>, <em>EC</em> and
              in the same parallels <em>BC</em>, <em>AG</em>; [I. 38] therefore the triangle{' '}
              <em>ABC</em> is double of the triangle <em>AEC</em>.
            </p>
            <p className="mt-2">
              But the parallelogram <em>FECG</em> is also double of the triangle <em>AEC</em>, for it
              has the same base with it and is in the same parallels with it; [I. 41] therefore the
              parallelogram <em>FECG</em> is equal to the triangle <em>ABC</em>.
            </p>
            <p className="mt-2">
              And it has the angle <em>CEF</em> equal to the given angle <em>D</em>.
            </p>
            <p className="mt-2">
              Therefore the parallelogram <em>FECG</em> has been constructed equal to the given
              triangle <em>ABC</em>, in the angle <em>CEF</em> which is equal to <em>D</em>.
            </p>
            <p className="mt-2 font-medium">
              Q.E.F.
            </p>
          </>
        }
      >
        <p>
          To construct, in a given rectilineal angle, a parallelogram equal to a given triangle.
        </p>
      </Proposition>

      <h2>Analysis</h2>

      <p>
        This is an important construction: we can convert any triangle into a parallelogram of equal
        area with any specified angle. This is a step toward the more general theory of area
        transformation.
      </p>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition I.10 (bisecting a segment)</li>
        <li>Proposition I.23 (copying an angle)</li>
        <li>Proposition I.31 (constructing parallel lines)</li>
        <li>Proposition I.38 (triangles on equal bases between same parallels are equal)</li>
        <li>Proposition I.41 (parallelogram is double of triangle with same base and height)</li>
      </ul>
    </LessonLayout>
  );
}
