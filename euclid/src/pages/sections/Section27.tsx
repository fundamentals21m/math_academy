import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section27() {
  return (
    <LessonLayout sectionId={27}>
      <Proposition
        title="Proposition I.27"
        proof={
          <>
            <p>
              Let the straight line <em>EF</em> falling on the two straight lines <em>AB</em>,{' '}
              <em>CD</em> make the alternate angles <em>AEF</em>, <em>EFD</em> equal to one another.
            </p>
            <p className="mt-2">
              I say that <em>AB</em> is parallel to <em>CD</em>.
            </p>
            <p className="mt-2">
              For, if not, <em>AB</em>, <em>CD</em> when produced will meet either in the direction
              of <em>B</em>, <em>D</em> or towards <em>A</em>, <em>C</em>.
            </p>
            <p className="mt-2">
              Let them be produced and meet, in the direction of <em>B</em>, <em>D</em>, at{' '}
              <em>G</em>.
            </p>
            <p className="mt-2">
              Then, in the triangle <em>GEF</em>, the exterior angle <em>AEF</em> is equal to the
              interior and opposite angle <em>EFG</em>: which is impossible. [I. 16]
            </p>
            <p className="mt-2">
              Therefore <em>AB</em>, <em>CD</em> when produced will not meet in the direction of{' '}
              <em>B</em>, <em>D</em>.
            </p>
            <p className="mt-2">
              Similarly it can be proved that neither will they meet towards <em>A</em>, <em>C</em>.
            </p>
            <p className="mt-2">
              But straight lines which do not meet in either direction are parallel; [Def. 23]
              therefore <em>AB</em> is parallel to <em>CD</em>.
            </p>
            <p className="mt-2 font-medium">
              Therefore etc.
            </p>
          </>
        }
      >
        <p>
          If a straight line falling on two straight lines make the alternate angles equal to one
          another, the straight lines will be parallel to one another.
        </p>
      </Proposition>

      <h2>Analysis</h2>

      <p>
        This is the first proposition about <strong>parallel lines</strong>. It states that if a
        transversal creates equal alternate angles with two lines, those lines are parallel.
      </p>

      <p className="mt-4">
        The proof is by contradiction: if the lines were not parallel, they would meet, forming a
        triangle. But then one of the alternate angles would be an exterior angle of that triangle,
        which by I.16 must be greater than the interior opposite angle—contradicting our hypothesis
        that they are equal.
      </p>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition I.16 (exterior angle is greater than interior opposite)</li>
        <li>Definition 23 (parallel lines never meet)</li>
      </ul>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-6 border border-dark-700">
        <p className="text-dark-300 text-sm">
          <strong className="text-amber-400">Note:</strong> This proposition does not use the
          parallel postulate (Postulate 5). The converse, however, requires it.
        </p>
      </div>
    </LessonLayout>
  );
}
