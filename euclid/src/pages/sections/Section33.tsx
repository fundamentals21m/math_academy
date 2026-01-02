import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section33() {
  return (
    <LessonLayout sectionId={33}>
      <Proposition
        title="Proposition I.33"
        proof={
          <>
            <p>
              Let <em>AB</em>, <em>CD</em> be equal and parallel, and let the straight lines{' '}
              <em>AC</em>, <em>BD</em> join them (at their extremities which are) in the same
              directions.
            </p>
            <p className="mt-2">
              I say that <em>AC</em>, <em>BD</em> are also equal and parallel.
            </p>
            <p className="mt-2">
              Let <em>BC</em> be joined.
            </p>
            <p className="mt-2">
              Then, since <em>AB</em> is parallel to <em>CD</em>, and <em>BC</em> has fallen upon
              them, the alternate angles <em>ABC</em>, <em>BCD</em> are equal to one another. [I. 29]
            </p>
            <p className="mt-2">
              And, since <em>AB</em> is equal to <em>CD</em>, and <em>BC</em> is common, the two
              sides <em>AB</em>, <em>BC</em> are equal to the two sides <em>DC</em>, <em>CB</em>; and
              the angle <em>ABC</em> is equal to the angle <em>BCD</em>; therefore the base <em>AC</em>{' '}
              is equal to the base <em>BD</em>, and the triangle <em>ABC</em> is equal to the
              triangle <em>DCB</em>, and the remaining angles will be equal to the remaining angles
              respectively, namely those which the equal sides subtend; [I. 4] therefore the angle{' '}
              <em>ACB</em> is equal to the angle <em>CBD</em>.
            </p>
            <p className="mt-2">
              And, since the straight line <em>BC</em> falling on the two straight lines <em>AC</em>,{' '}
              <em>BD</em> has made the alternate angles equal to one another, <em>AC</em> is parallel
              to <em>BD</em>. [I. 27]
            </p>
            <p className="mt-2">
              And it was also proved equal to it.
            </p>
            <p className="mt-2 font-medium">
              Therefore etc.
            </p>
          </>
        }
      >
        <p>
          The straight lines joining equal and parallel straight lines (at the extremities which
          are) in the same directions (respectively) are themselves also equal and parallel.
        </p>
      </Proposition>

      <h2>Analysis</h2>

      <p>
        This proposition describes a fundamental property of <strong>parallelograms</strong>: if
        two opposite sides are equal and parallel, then the other two sides are also equal and
        parallel.
      </p>

      <p className="mt-4">
        The proof uses a diagonal to create two triangles, then applies SAS congruence (I.4) after
        establishing equal angles via the parallel lines property (I.29).
      </p>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition I.4 (SAS congruence)</li>
        <li>Proposition I.27 (equal alternate angles imply parallel)</li>
        <li>Proposition I.29 (parallel lines create equal alternate angles)</li>
      </ul>
    </LessonLayout>
  );
}
