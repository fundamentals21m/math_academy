import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section28() {
  return (
    <LessonLayout sectionId={28}>
      <Proposition
        title="Proposition I.28"
        proof={
          <>
            <p>
              Let the straight line <em>EF</em> falling on the two straight lines <em>AB</em>,{' '}
              <em>CD</em> make the exterior angle <em>EGB</em> equal to the interior and opposite
              angle <em>GHD</em>, or the interior angles on the same side, namely <em>BGH</em>,{' '}
              <em>GHD</em>, equal to two right angles.
            </p>
            <p className="mt-2">
              I say that <em>AB</em> is parallel to <em>CD</em>.
            </p>
            <p className="mt-2">
              For, since the angle <em>EGB</em> is equal to the angle <em>GHD</em>, while the angle{' '}
              <em>EGB</em> is equal to the angle <em>AGH</em>, [I. 15] the angle <em>AGH</em> is also
              equal to the angle <em>GHD</em>;
            </p>
            <p className="mt-2">
              and they are alternate; therefore <em>AB</em> is parallel to <em>CD</em>. [I. 27]
            </p>
            <p className="mt-2">
              Again, since the angles <em>BGH</em>, <em>GHD</em> are equal to two right angles, and
              the angles <em>AGH</em>, <em>BGH</em> are also equal to two right angles, [I. 13] the
              angles <em>AGH</em>, <em>BGH</em> are equal to the angles <em>BGH</em>, <em>GHD</em>.
            </p>
            <p className="mt-2">
              Let the angle <em>BGH</em> be subtracted from each; therefore the remaining angle{' '}
              <em>AGH</em> is equal to the remaining angle <em>GHD</em>;
            </p>
            <p className="mt-2">
              and they are alternate; therefore <em>AB</em> is parallel to <em>CD</em>. [I. 27]
            </p>
            <p className="mt-2 font-medium">
              Therefore etc.
            </p>
          </>
        }
      >
        <p>
          If a straight line falling on two straight lines make the exterior angle equal to the
          interior and opposite angle on the same side, or the interior angles on the same side
          equal to two right angles, the straight lines will be parallel to one another.
        </p>
      </Proposition>

      <h2>Analysis</h2>

      <p>
        This proposition gives two more conditions for lines to be parallel:
      </p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li><strong>Corresponding angles</strong> are equal</li>
        <li><strong>Co-interior (same-side interior) angles</strong> sum to two right angles</li>
      </ul>

      <p className="mt-4">
        The proof reduces both conditions to the alternate angle case (I.27) using vertical angles
        (I.15) and linear pairs (I.13).
      </p>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition I.13 (linear pairs equal two right angles)</li>
        <li>Proposition I.15 (vertical angles are equal)</li>
        <li>Proposition I.27 (alternate angles imply parallel)</li>
      </ul>
    </LessonLayout>
  );
}
