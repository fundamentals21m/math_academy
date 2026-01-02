import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';
import { ParallelLines } from '@/components/visualizations';

export default function Section29() {
  return (
    <LessonLayout sectionId={29}>
      <ParallelLines />

      <Proposition
        title="Proposition I.29"
        proof={
          <>
            <p>
              Let the straight line <em>EF</em> fall on the parallel straight lines <em>AB</em>,{' '}
              <em>CD</em>.
            </p>
            <p className="mt-2">
              I say that it makes the alternate angles <em>AGH</em>, <em>GHD</em> equal, the exterior
              angle <em>EGB</em> equal to the interior and opposite angle <em>GHD</em>, and the
              interior angles on the same side, namely <em>BGH</em>, <em>GHD</em>, equal to two right
              angles.
            </p>
            <p className="mt-2">
              For, if the angle <em>AGH</em> is unequal to the angle <em>GHD</em>, one of them is
              greater.
            </p>
            <p className="mt-2">
              Let the angle <em>AGH</em> be greater; let the angle <em>BGH</em> be added to each;
              therefore the angles <em>AGH</em>, <em>BGH</em> are greater than the angles <em>BGH</em>,{' '}
              <em>GHD</em>.
            </p>
            <p className="mt-2">
              But the angles <em>AGH</em>, <em>BGH</em> are equal to two right angles; [I. 13]
              therefore the angles <em>BGH</em>, <em>GHD</em> are less than two right angles.
            </p>
            <p className="mt-2">
              But straight lines produced indefinitely from angles less than two right angles meet;
              [Post. 5] therefore <em>AB</em>, <em>CD</em>, if produced indefinitely, will meet; but
              they do not meet, because they are by hypothesis parallel.
            </p>
            <p className="mt-2">
              Therefore the angle <em>AGH</em> is not unequal to the angle <em>GHD</em>, and is
              therefore equal to it.
            </p>
            <p className="mt-2">
              Again, the angle <em>AGH</em> is equal to the angle <em>EGB</em>; [I. 15] therefore the
              angle <em>EGB</em> is also equal to the angle <em>GHD</em>. [C.N. 1]
            </p>
            <p className="mt-2">
              Let the angle <em>BGH</em> be added to each; therefore the angles <em>EGB</em>,{' '}
              <em>BGH</em> are equal to the angles <em>BGH</em>, <em>GHD</em>. [C.N. 2]
            </p>
            <p className="mt-2">
              But the angles <em>EGB</em>, <em>BGH</em> are equal to two right angles; [I. 13]
              therefore the angles <em>BGH</em>, <em>GHD</em> are also equal to two right angles.
            </p>
            <p className="mt-2 font-medium">
              Therefore etc.
            </p>
          </>
        }
      >
        <p>
          A straight line falling on parallel straight lines makes the alternate angles equal to one
          another, the exterior angle equal to the interior and opposite angle, and the interior
          angles on the same side equal to two right angles.
        </p>
      </Proposition>

      <h2>Analysis</h2>

      <p>
        This is the <strong>converse</strong> of Propositions I.27 and I.28. It states that when
        parallel lines are cut by a transversal, all the standard angle relationships hold.
      </p>

      <p className="mt-4">
        <strong>This is the first proposition to use the Parallel Postulate (Postulate 5).</strong>{' '}
        The proof assumes the lines are parallel and derives a contradiction from assuming unequal
        alternate angles: the lines would have to meet by Postulate 5, contradicting their
        parallelism.
      </p>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Postulate 5 (the Parallel Postulate)</li>
        <li>Proposition I.13 (linear pairs equal two right angles)</li>
        <li>Proposition I.15 (vertical angles are equal)</li>
        <li>Common Notions 1 and 2</li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Parallel Postulate:</strong> This is where Euclidean
          geometry commits to its distinctive character. In non-Euclidean geometries, Postulate 5
          fails, and this proposition (and its consequences) do not hold.
        </p>
      </div>
    </LessonLayout>
  );
}
