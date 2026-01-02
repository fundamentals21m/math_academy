import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section30() {
  return (
    <LessonLayout sectionId={30}>
      <Proposition
        title="Proposition I.30"
        proof={
          <>
            <p>
              Let each of the straight lines <em>AB</em>, <em>CD</em> be parallel to <em>EF</em>.
            </p>
            <p className="mt-2">
              I say that <em>AB</em> is also parallel to <em>CD</em>.
            </p>
            <p className="mt-2">
              For let the straight line <em>GK</em> fall upon them.
            </p>
            <p className="mt-2">
              Then, since the straight line <em>GK</em> has fallen on the parallel straight lines{' '}
              <em>AB</em>, <em>EF</em>, the angle <em>AGK</em> is equal to the angle <em>GHF</em>.
              [I. 29]
            </p>
            <p className="mt-2">
              Again, since the straight line <em>GK</em> has fallen on the parallel straight lines{' '}
              <em>EF</em>, <em>CD</em>, the angle <em>GHF</em> is equal to the angle <em>GKD</em>.
              [I. 29]
            </p>
            <p className="mt-2">
              But the angle <em>AGK</em> was also proved equal to the angle <em>GHF</em>; therefore
              the angle <em>AGK</em> is also equal to the angle <em>GKD</em>; [C.N. 1]
            </p>
            <p className="mt-2">
              and they are alternate.
            </p>
            <p className="mt-2">
              Therefore <em>AB</em> is parallel to <em>CD</em>. [I. 27]
            </p>
            <p className="mt-2 font-medium">
              Therefore etc.
            </p>
          </>
        }
      >
        <p>
          Straight lines parallel to the same straight line are also parallel to one another.
        </p>
      </Proposition>

      <h2>Analysis</h2>

      <p>
        This proposition establishes that parallelism is <strong>transitive</strong>: if line A is
        parallel to line B, and line B is parallel to line C, then line A is parallel to line C.
      </p>

      <p className="mt-4">
        The proof uses I.29 twice to establish equal alternate angles with a common transversal,
        then applies I.27 to conclude parallelism.
      </p>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition I.27 (equal alternate angles imply parallel)</li>
        <li>Proposition I.29 (parallel lines create equal alternate angles)</li>
        <li>Common Notion 1 (transitivity of equality)</li>
      </ul>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-6 border border-dark-700">
        <p className="text-dark-300 text-sm">
          <strong className="text-amber-400">Note:</strong> This result, combined with the fact
          that parallelism is symmetric (if A ∥ B then B ∥ A) and reflexive (any line is parallel
          to itself), makes parallelism an equivalence relation.
        </p>
      </div>
    </LessonLayout>
  );
}
