import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section22() {
  return (
    <LessonLayout sectionId={22}>
      <Proposition
        title="Proposition I.22"
        proof={
          <>
            <p>
              Let the three given straight lines be <em>A</em>, <em>B</em>, <em>C</em>, and of these
              let two taken together in any manner be greater than the remaining one, [I. 20]
              namely <em>A</em>, <em>B</em> greater than <em>C</em>, <em>A</em>, <em>C</em> greater
              than <em>B</em>, and <em>B</em>, <em>C</em> greater than <em>A</em>.
            </p>
            <p className="mt-2">
              Thus it is required to construct a triangle out of straight lines equal to <em>A</em>,{' '}
              <em>B</em>, <em>C</em>.
            </p>
            <p className="mt-2">
              Let there be set out a straight line <em>DE</em>, terminated at <em>D</em> but of
              infinite length in the direction of <em>E</em>, and let <em>DF</em> be made equal to{' '}
              <em>A</em>, <em>FG</em> equal to <em>B</em>, and <em>GH</em> equal to <em>C</em>. [I. 3]
            </p>
            <p className="mt-2">
              With centre <em>F</em> and distance <em>FD</em> let the circle <em>DKL</em> be
              described; again, with centre <em>G</em> and distance <em>GH</em>, let the circle{' '}
              <em>KLH</em> be described; and let <em>KF</em>, <em>KG</em> be joined.
            </p>
            <p className="mt-2">
              I say that the triangle <em>KFG</em> has been constructed out of three straight lines
              equal to <em>A</em>, <em>B</em>, <em>C</em>.
            </p>
            <p className="mt-2">
              For, since the point <em>F</em> is the centre of the circle <em>DKL</em>, <em>FD</em>{' '}
              is equal to <em>FK</em>. But <em>FD</em> is equal to <em>A</em>; therefore <em>KF</em>{' '}
              is also equal to <em>A</em>.
            </p>
            <p className="mt-2">
              Again, since the point <em>G</em> is the centre of the circle <em>LKH</em>,{' '}
              <em>GH</em> is equal to <em>GK</em>. But <em>GH</em> is equal to <em>C</em>; therefore{' '}
              <em>KG</em> is also equal to <em>C</em>.
            </p>
            <p className="mt-2">
              And <em>FG</em> is also equal to <em>B</em>; therefore the three straight lines{' '}
              <em>KF</em>, <em>FG</em>, <em>GK</em> are equal to the three straight lines <em>A</em>,{' '}
              <em>B</em>, <em>C</em>.
            </p>
            <p className="mt-2 font-medium">
              Therefore etc.
            </p>
          </>
        }
      >
        <p>
          Out of three straight lines, which are equal to three given straight lines, to construct a
          triangle: thus it is necessary that two of the straight lines taken together in any manner
          should be greater than the remaining one.
        </p>
      </Proposition>

      <h2>Analysis</h2>

      <p>
        This is the <strong>converse</strong> of the Triangle Inequality: given three lengths that
        satisfy the triangle inequality, we can construct a triangle with those side lengths.
      </p>

      <p className="mt-4">
        The construction uses two circles: one centered at each endpoint of the first side, with
        radii equal to the other two sides. The intersection point gives the third vertex.
      </p>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition I.3 (cutting equal segments)</li>
        <li>Postulate 3 (describing circles)</li>
        <li>Definition 15 (radii are equal)</li>
      </ul>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-6 border border-dark-700">
        <p className="text-dark-300 text-sm">
          <strong className="text-amber-400">Note:</strong> The condition that two sides sum to more
          than the third is essential—without it, the circles would not intersect.
        </p>
      </div>
    </LessonLayout>
  );
}
