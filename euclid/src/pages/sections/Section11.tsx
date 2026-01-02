import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section11() {
  return (
    <LessonLayout sectionId={11}>
      <Proposition
        title="Proposition I.11"
        proof={
          <>
            <p>
              Let <em>AB</em> be the given straight line, and let <em>C</em> be a point on it.
            </p>
            <p className="mt-2">
              Thus it is required to draw from the point <em>C</em> a straight line at right angles
              to the straight line <em>AB</em>.
            </p>
            <p className="mt-2">
              Let a point <em>D</em> be taken at random on <em>AC</em>; let <em>CE</em> be made
              equal to <em>CD</em>; [I. 3] let the equilateral triangle <em>FDE</em> be constructed
              on <em>DE</em>, [I. 1] and let <em>FC</em> be joined.
            </p>
            <p className="mt-2">
              I say that the straight line <em>FC</em> has been drawn at right angles to the given
              straight line <em>AB</em> from <em>C</em> the given point on it.
            </p>
            <p className="mt-2">
              For, since <em>DC</em> is equal to <em>CE</em>, and <em>CF</em> is common, the two
              sides <em>DC</em>, <em>CF</em> are equal to the two sides <em>EC</em>, <em>CF</em>{' '}
              respectively; and the base <em>DF</em> is equal to the base <em>FE</em>; therefore the
              angle <em>DCF</em> is equal to the angle <em>ECF</em>; [I. 8] and they are adjacent
              angles.
            </p>
            <p className="mt-2">
              But, when a straight line set up on a straight line makes the adjacent angles equal to
              one another, each of the equal angles is right; [Def. 10] therefore each of the angles{' '}
              <em>DCF</em>, <em>FCE</em> is right.
            </p>
            <p className="mt-2">
              Therefore the straight line <em>CF</em> has been drawn at right angles to the given
              straight line <em>AB</em> from the given point <em>C</em> on it.
            </p>
            <p className="mt-2 font-medium">
              Being what it was required to do.
            </p>
          </>
        }
      >
        <p>To draw a straight line at right angles to a given straight line from a given point on it.</p>
      </Proposition>

      <h2>Analysis</h2>

      <p>
        This construction shows how to erect a perpendicular to a line at a given point on that
        line. It is fundamental for creating right angles, squares, and many other geometric figures.
      </p>

      <p className="mt-4">
        The construction is similar to angle bisection: we create equal segments on either side of
        the point, construct an equilateral triangle, and the line from the point to the apex is
        perpendicular to the original line.
      </p>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition I.1 (equilateral triangle construction)</li>
        <li>Proposition I.3 (cutting equal segments)</li>
        <li>Proposition I.8 (SSS congruence)</li>
        <li>Definition 10 (definition of right angles)</li>
      </ul>
    </LessonLayout>
  );
}
