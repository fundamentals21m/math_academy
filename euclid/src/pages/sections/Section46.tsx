import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section46() {
  return (
    <LessonLayout sectionId={46}>
      <Proposition
        title="Proposition I.46"
        proof={
          <>
            <p>
              Let <em>AB</em> be the given straight line.
            </p>
            <p className="mt-2">
              Thus it is required to describe a square on the straight line <em>AB</em>.
            </p>
            <p className="mt-2">
              Let <em>AC</em> be drawn at right angles to the straight line <em>AB</em> from the
              point <em>A</em> on it, [I. 11] and let <em>AD</em> be made equal to <em>AB</em>;
              [I. 3] through the point <em>D</em> let <em>DE</em> be drawn parallel to <em>AB</em>,
              [I. 31] and through the point <em>B</em> let <em>BE</em> be drawn parallel to{' '}
              <em>AD</em>. [I. 31]
            </p>
            <p className="mt-2">
              Therefore <em>ADEB</em> is a parallelogram; therefore <em>AB</em> is equal to{' '}
              <em>DE</em>, and <em>AD</em> to <em>BE</em>. [I. 34]
            </p>
            <p className="mt-2">
              But <em>AB</em> is equal to <em>AD</em>; therefore the four straight lines <em>BA</em>,{' '}
              <em>AD</em>, <em>DE</em>, <em>EB</em> are equal to one another; therefore the
              parallelogram <em>ADEB</em> is equilateral.
            </p>
            <p className="mt-2">
              I say next that it is also right-angled.
            </p>
            <p className="mt-2">
              For, since the straight line <em>AD</em> falls upon the parallels <em>AB</em>,{' '}
              <em>DE</em>, the angles <em>BAD</em>, <em>ADE</em> are equal to two right angles.
              [I. 29]
            </p>
            <p className="mt-2">
              But the angle <em>BAD</em> is right; therefore the angle <em>ADE</em> is also right.
            </p>
            <p className="mt-2">
              And in parallelogrammic areas the opposite sides and angles are equal to one another;
              [I. 34] therefore each of the opposite angles <em>ABE</em>, <em>BED</em> is also right.
            </p>
            <p className="mt-2">
              Therefore <em>ADEB</em> is right-angled.
            </p>
            <p className="mt-2">
              And it was also proved equilateral.
            </p>
            <p className="mt-2">
              Therefore it is a square; and it is described on the straight line <em>AB</em>.
            </p>
            <p className="mt-2 font-medium">
              Q.E.F.
            </p>
          </>
        }
      >
        <p>On a given straight line to describe a square.</p>
      </Proposition>

      <h2>Analysis</h2>

      <p>
        This construction shows how to build a square on a given line segment. This is essential
        preparation for the Pythagorean theorem, which compares squares on the three sides of a
        right triangle.
      </p>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition I.3 (cutting equal lengths)</li>
        <li>Proposition I.11 (constructing perpendiculars)</li>
        <li>Proposition I.29 (parallel lines angle sum)</li>
        <li>Proposition I.31 (constructing parallels)</li>
        <li>Proposition I.34 (properties of parallelograms)</li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Foundation:</strong> This construction is the immediate
          prerequisite for Proposition I.47 (the Pythagorean theorem), where squares are constructed
          on all three sides of a right triangle.
        </p>
      </div>
    </LessonLayout>
  );
}
