import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section07() {
  return (
    <LessonLayout sectionId={7}>
      <Proposition
        title="Proposition I.7"
        proof={
          <>
            <p>
              For, if possible, given two straight lines <em>AC</em>, <em>CB</em> constructed on a
              straight line <em>AB</em> and meeting at the point <em>C</em>, let two other straight
              lines <em>AD</em>, <em>DB</em> be constructed on the same straight line <em>AB</em>, on
              the same side of it, meeting in another point <em>D</em> and equal to the former two
              respectively, namely each to that which has the same extremity with it, so that{' '}
              <em>CA</em> is equal to <em>DA</em> which has the same extremity <em>A</em> with it, and{' '}
              <em>CB</em> to <em>DB</em> which has the same extremity <em>B</em> with it; and let{' '}
              <em>CD</em> be joined.
            </p>
            <p className="mt-2">
              Then, since <em>AC</em> is equal to <em>AD</em>, the angle <em>ACD</em> is also equal
              to the angle <em>ADC</em>; [I. 5] therefore the angle <em>ADC</em> is greater than the
              angle <em>DCB</em>.
            </p>
            <p className="mt-2">
              Therefore the angle <em>BDC</em> is much greater than the angle <em>DCB</em>.
            </p>
            <p className="mt-2">
              Again, since <em>CB</em> is equal to <em>DB</em>, the angle <em>BDC</em> is also equal
              to the angle <em>BCD</em>. [I. 5]
            </p>
            <p className="mt-2">
              But it was also proved much greater than it: which is impossible.
            </p>
            <p className="mt-2 font-medium">
              Therefore etc.
            </p>
          </>
        }
      >
        <p>
          Given two straight lines constructed on a straight line (from its extremities) and meeting
          in a point, there cannot be constructed on the same straight line (from its extremities),
          and on the same side of it, two other straight lines meeting in another point and equal to
          the former two respectively, namely each to that which has the same extremity with it.
        </p>
      </Proposition>

      <h2>Analysis</h2>

      <p>
        This proposition establishes a uniqueness result: given a base <em>AB</em> and the lengths
        of two sides from its endpoints, there is at most one point (on each side of the line) where
        those sides can meet.
      </p>

      <p className="mt-4">
        The proof is by contradiction, using Proposition I.5 (base angles of isosceles triangles are
        equal) to derive that an angle must be both greater than and equal to another angle.
      </p>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition I.5 (base angles of isosceles triangles)</li>
        <li>Properties of angle inequality</li>
      </ul>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-6 border border-dark-700">
        <p className="text-dark-300 text-sm">
          <strong className="text-amber-400">Purpose:</strong> This proposition is preparatory for
          Proposition I.8 (SSS congruence). It ensures that when we know all three sides of a
          triangle, the triangle is uniquely determined.
        </p>
      </div>
    </LessonLayout>
  );
}
