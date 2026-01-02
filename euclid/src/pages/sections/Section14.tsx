import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section14() {
  return (
    <LessonLayout sectionId={14}>
      <Proposition
        title="Proposition I.14"
        proof={
          <>
            <p>
              For let the two straight lines <em>BC</em>, <em>BD</em>, with any straight line{' '}
              <em>AB</em>, and at the point <em>B</em> on it, make the adjacent angles <em>ABC</em>,{' '}
              <em>ABD</em> equal to two right angles.
            </p>
            <p className="mt-2">
              I say that <em>BD</em> is in a straight line with <em>CB</em>.
            </p>
            <p className="mt-2">
              For, if <em>BD</em> is not in a straight line with <em>BC</em>, let <em>BE</em> be in
              a straight line with <em>CB</em>.
            </p>
            <p className="mt-2">
              Then, since the straight line <em>AB</em> stands on the straight line <em>CBE</em>,
              the angles <em>ABC</em>, <em>ABE</em> are equal to two right angles. [I. 13]
            </p>
            <p className="mt-2">
              But the angles <em>ABC</em>, <em>ABD</em> are also equal to two right angles;
              therefore the angles <em>CBA</em>, <em>ABE</em> are equal to the angles <em>CBA</em>,{' '}
              <em>ABD</em>. [Post. 4 and C.N. 1]
            </p>
            <p className="mt-2">
              Let the angle <em>CBA</em> be subtracted from each; therefore the remaining angle{' '}
              <em>ABE</em> is equal to the remaining angle <em>ABD</em>, [C.N. 3] the less to the
              greater: which is impossible.
            </p>
            <p className="mt-2">
              Therefore <em>BE</em> is not in a straight line with <em>CB</em>.
            </p>
            <p className="mt-2">
              Similarly we can prove that neither is any other straight line except <em>BD</em>.
            </p>
            <p className="mt-2">
              Therefore <em>CB</em> is in a straight line with <em>BD</em>.
            </p>
            <p className="mt-2 font-medium">
              Therefore etc.
            </p>
          </>
        }
      >
        <p>
          If with any straight line, and at a point on it, two straight lines not lying on the same
          side make the adjacent angles equal to two right angles, the two straight lines will be in
          a straight line with one another.
        </p>
      </Proposition>

      <h2>Analysis</h2>

      <p>
        This is the <strong>converse</strong> of Proposition I.13. If two rays from a point make
        angles with a third ray that sum to two right angles, then those two rays form a straight
        line.
      </p>

      <p className="mt-4">
        The proof is by contradiction: if the rays don't form a straight line, there would be
        another ray that does, leading to a smaller angle equaling a larger one.
      </p>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition I.13 (angles on a straight line equal two right angles)</li>
        <li>Postulate 4 (all right angles are equal)</li>
        <li>Common Notions 1 and 3 (equality and subtraction)</li>
      </ul>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-6 border border-dark-700">
        <p className="text-dark-300 text-sm">
          <strong className="text-amber-400">Application:</strong> This proposition is used to prove
          that certain constructed lines are collinear (lie on the same straight line).
        </p>
      </div>
    </LessonLayout>
  );
}
