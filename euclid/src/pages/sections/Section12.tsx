import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section12() {
  return (
    <LessonLayout sectionId={12}>
      <Proposition
        title="Proposition I.12"
        proof={
          <>
            <p>
              Let <em>AB</em> be the given infinite straight line, and <em>C</em> the given point
              which is not on it.
            </p>
            <p className="mt-2">
              Thus it is required to draw to the given infinite straight line <em>AB</em>, from the
              given point <em>C</em> which is not on it, a perpendicular straight line.
            </p>
            <p className="mt-2">
              For let a point <em>D</em> be taken at random on the other side of the straight line{' '}
              <em>AB</em>, and with centre <em>C</em> and distance <em>CD</em> let the circle{' '}
              <em>EFG</em> be described; [Post. 3] let the straight line <em>EG</em> be bisected at{' '}
              <em>H</em>, [I. 10] and let the straight lines <em>CG</em>, <em>CH</em>, <em>CE</em> be
              joined. [Post. 1]
            </p>
            <p className="mt-2">
              I say that <em>CH</em> has been drawn perpendicular to the given infinite straight
              line <em>AB</em> from the given point <em>C</em> which is not on it.
            </p>
            <p className="mt-2">
              For, since <em>GH</em> is equal to <em>HE</em>, and <em>HC</em> is common, the two
              sides <em>GH</em>, <em>HC</em> are equal to the two sides <em>EH</em>, <em>HC</em>{' '}
              respectively; and the base <em>CG</em> is equal to the base <em>CE</em>; [Def. 15]
              therefore the angle <em>CHG</em> is equal to the angle <em>EHC</em>. [I. 8]
            </p>
            <p className="mt-2">
              And they are adjacent angles.
            </p>
            <p className="mt-2">
              But, when a straight line set up on a straight line makes the adjacent angles equal to
              one another, each of the equal angles is right, and the straight line standing on the
              other is called a perpendicular to that on which it stands. [Def. 10]
            </p>
            <p className="mt-2">
              Therefore <em>CH</em> has been drawn perpendicular to the given infinite straight line{' '}
              <em>AB</em> from the given point <em>C</em> which is not on it.
            </p>
            <p className="mt-2 font-medium">
              Being what it was required to do.
            </p>
          </>
        }
      >
        <p>
          To a given infinite straight line, from a given point which is not on it, to draw a
          perpendicular straight line.
        </p>
      </Proposition>

      <h2>Analysis</h2>

      <p>
        This construction "drops a perpendicular" from an external point to a line. Together with
        Proposition I.11, we now have both ways of constructing perpendiculars: at a point on a
        line, and from a point off the line.
      </p>

      <p className="mt-4">
        The key insight is to draw a circle centered at the external point that crosses the line at
        two points. The midpoint of the chord connecting these points lies directly below (or above)
        the center.
      </p>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Postulates 1 and 3 (drawing lines and circles)</li>
        <li>Proposition I.10 (bisecting a segment)</li>
        <li>Proposition I.8 (SSS congruence)</li>
        <li>Definition 15 (radii of a circle are equal)</li>
        <li>Definition 10 (definition of perpendicular)</li>
      </ul>
    </LessonLayout>
  );
}
