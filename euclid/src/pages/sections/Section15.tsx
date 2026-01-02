import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section15() {
  return (
    <LessonLayout sectionId={15}>
      <Proposition
        title="Proposition I.15"
        proof={
          <>
            <p>
              For let the straight lines <em>AB</em>, <em>CD</em> cut one another at the point{' '}
              <em>E</em>.
            </p>
            <p className="mt-2">
              I say that the angle <em>AEC</em> is equal to the angle <em>DEB</em>, and the angle{' '}
              <em>CEB</em> to the angle <em>AED</em>.
            </p>
            <p className="mt-2">
              For, since the straight line <em>AE</em> stands on the straight line <em>CD</em>,
              making the angles <em>CEA</em>, <em>AED</em>, the angles <em>CEA</em>, <em>AED</em> are
              equal to two right angles. [I. 13]
            </p>
            <p className="mt-2">
              Again, since the straight line <em>DE</em> stands on the straight line <em>AB</em>,
              making the angles <em>AED</em>, <em>DEB</em>, the angles <em>AED</em>, <em>DEB</em> are
              equal to two right angles. [I. 13]
            </p>
            <p className="mt-2">
              But the angles <em>CEA</em>, <em>AED</em> were also proved equal to two right angles;
              therefore the angles <em>CEA</em>, <em>AED</em> are equal to the angles <em>AED</em>,{' '}
              <em>DEB</em>. [Post. 4 and C.N. 1]
            </p>
            <p className="mt-2">
              Let the angle <em>AED</em> be subtracted from each; therefore the remaining angle{' '}
              <em>CEA</em> is equal to the remaining angle <em>BED</em>. [C.N. 3]
            </p>
            <p className="mt-2">
              Similarly it can be proved that the angles <em>CEB</em>, <em>DEA</em> are also equal.
            </p>
            <p className="mt-2 font-medium">
              Therefore etc.
            </p>
          </>
        }
      >
        <p>
          If two straight lines cut one another, they make the vertical angles equal to one another.
        </p>
      </Proposition>

      <h2>Analysis</h2>

      <p>
        This proposition proves that <strong>vertical angles</strong> (the opposite angles formed
        when two lines intersect) are equal. This is a fundamental result used throughout geometry.
      </p>

      <p className="mt-4">
        The proof uses Proposition I.13 twice: each pair of adjacent angles (a linear pair) sums to
        two right angles. Since both pairs equal two right angles, and they share a common angle,
        the remaining angles must be equal.
      </p>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition I.13 (linear pairs equal two right angles)</li>
        <li>Postulate 4 (all right angles are equal)</li>
        <li>Common Notions 1 and 3 (equality and subtraction)</li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Porism:</strong> Euclid adds a corollary: "From this it
          is manifest that, if two straight lines cut one another, they will make the angles at the
          point of section equal to four right angles."
        </p>
      </div>
    </LessonLayout>
  );
}
