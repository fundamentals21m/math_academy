import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section45() {
  return (
    <LessonLayout sectionId={45}>
      <Proposition
        title="Proposition I.45"
        proof={
          <>
            <p>
              Let <em>ABCD</em> be the given rectilineal figure, and <em>E</em> the given angle.
            </p>
            <p className="mt-2">
              Thus it is required to construct, in the given angle <em>E</em>, a parallelogram equal
              to the rectilineal figure <em>ABCD</em>.
            </p>
            <p className="mt-2">
              Let <em>DB</em> be joined, and let the parallelogram <em>FH</em> be constructed equal
              to the triangle <em>ABD</em>, in the angle <em>HKF</em> which is equal to <em>E</em>;
              [I. 42] let the parallelogram <em>GM</em> equal to the triangle <em>DBC</em> be applied
              to the straight line <em>GH</em>, in the angle <em>GHM</em> which is equal to{' '}
              <em>E</em>. [I. 44]
            </p>
            <p className="mt-2">
              Then, since the angle <em>E</em> is equal to each of the angles <em>HKF</em>,{' '}
              <em>GHM</em>, the angle <em>HKF</em> is also equal to the angle <em>GHM</em>. [C.N. 1]
            </p>
            <p className="mt-2">
              Let the angle <em>KHG</em> be added to each; therefore the angles <em>FKH</em>,{' '}
              <em>KHG</em> are equal to the angles <em>KHG</em>, <em>GHM</em>.
            </p>
            <p className="mt-2">
              But the angles <em>FKH</em>, <em>KHG</em> are equal to two right angles; [I. 29]
              therefore the angles <em>KHG</em>, <em>GHM</em> are also equal to two right angles.
            </p>
            <p className="mt-2">
              Thus, with a straight line <em>GH</em>, and at the point <em>H</em> on it, two straight
              lines <em>KH</em>, <em>HM</em> not lying on the same side make the adjacent angles
              equal to two right angles; therefore <em>KH</em> is in a straight line with{' '}
              <em>HM</em>. [I. 14]
            </p>
            <p className="mt-2">
              And, since the straight line <em>HG</em> falls upon the parallels <em>KM</em>,{' '}
              <em>FG</em>, the alternate angles <em>MHG</em>, <em>HGF</em> are equal to one another.
              [I. 29]
            </p>
            <p className="mt-2">
              Let the angle <em>HGL</em> be added to each; therefore the angles <em>MHG</em>,{' '}
              <em>HGL</em> are equal to the angles <em>HGF</em>, <em>HGL</em>. [C.N. 2]
            </p>
            <p className="mt-2">
              But the angles <em>MHG</em>, <em>HGL</em> are equal to two right angles; [I. 29]
              therefore the angles <em>HGF</em>, <em>HGL</em> are also equal to two right angles.
              [C.N. 1]
            </p>
            <p className="mt-2">
              Therefore <em>FG</em> is in a straight line with <em>GL</em>. [I. 14]
            </p>
            <p className="mt-2">
              And, since <em>FK</em> is equal and parallel to <em>HG</em>, [I. 34] and <em>HG</em> to{' '}
              <em>ML</em> also, <em>KF</em> is also equal and parallel to <em>ML</em>; [C.N. 1 and
              I. 30] and the straight lines <em>KM</em>, <em>FL</em> join them (at their extremities
              which are) in the same directions; therefore <em>KM</em>, <em>FL</em> are also equal
              and parallel. [I. 33]
            </p>
            <p className="mt-2">
              Therefore <em>KFLM</em> is a parallelogram.
            </p>
            <p className="mt-2">
              And, since the triangle <em>ABD</em> is equal to the parallelogram <em>FH</em>, and{' '}
              <em>DBC</em> to <em>GM</em>, the whole rectilineal figure <em>ABCD</em> is equal to the
              whole parallelogram <em>KFLM</em>.
            </p>
            <p className="mt-2">
              Therefore the parallelogram <em>KFLM</em> has been constructed equal to the given
              rectilineal figure <em>ABCD</em>, in the angle <em>FKM</em> which is equal to the given
              angle <em>E</em>.
            </p>
            <p className="mt-2 font-medium">
              Q.E.F.
            </p>
          </>
        }
      >
        <p>
          To construct, in a given rectilineal angle, a parallelogram equal to a given rectilineal
          figure.
        </p>
      </Proposition>

      <h2>Analysis</h2>

      <p>
        This proposition generalizes I.42 and I.44: we can convert any polygon (not just a triangle)
        into an equal-area parallelogram with any specified angle.
      </p>

      <p className="mt-4">
        The method is to divide the polygon into triangles, convert each to a parallelogram with the
        specified angle, and then join them end-to-end.
      </p>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition I.14 (angles summing to two right angles form a straight line)</li>
        <li>Proposition I.29-30, I.33-34 (parallel line properties)</li>
        <li>Proposition I.42, I.44 (constructing parallelograms equal to triangles)</li>
      </ul>
    </LessonLayout>
  );
}
