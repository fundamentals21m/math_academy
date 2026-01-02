import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section31() {
  return (
    <LessonLayout sectionId={31}>
      <Proposition
        title="Proposition I.31"
        proof={
          <>
            <p>
              Let <em>A</em> be the given point, and <em>BC</em> the given straight line.
            </p>
            <p className="mt-2">
              Thus it is required to draw through the point <em>A</em> a straight line parallel to
              the straight line <em>BC</em>.
            </p>
            <p className="mt-2">
              Let a point <em>D</em> be taken at random on <em>BC</em>, and let <em>AD</em> be
              joined; on the straight line <em>DA</em>, and at the point <em>A</em> on it, let the
              angle <em>DAE</em> be constructed equal to the angle <em>ADC</em> [I. 23]; and let the
              straight line <em>AF</em> be produced in a straight line with <em>EA</em>.
            </p>
            <p className="mt-2">
              Then, since the straight line <em>AD</em> falling on the two straight lines <em>BC</em>,{' '}
              <em>EF</em> has made the alternate angles <em>EAD</em>, <em>ADC</em> equal to one
              another, therefore <em>EAF</em> is parallel to <em>BC</em>. [I. 27]
            </p>
            <p className="mt-2">
              Therefore through the given point <em>A</em> the straight line <em>EAF</em> has been
              drawn parallel to the given straight line <em>BC</em>.
            </p>
            <p className="mt-2 font-medium">
              Being what it was required to do.
            </p>
          </>
        }
      >
        <p>Through a given point to draw a straight line parallel to a given straight line.</p>
      </Proposition>

      <h2>Analysis</h2>

      <p>
        This is the fundamental construction for drawing a parallel line through a given point.
        The method is to create equal alternate angles using the angle-copying construction (I.23).
      </p>

      <p className="mt-4">
        Connect the point to any point on the given line, then copy the angle formed at the line to
        the external point (on the opposite side). By I.27, this creates a parallel line.
      </p>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition I.23 (copying an angle)</li>
        <li>Proposition I.27 (equal alternate angles imply parallel)</li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Existence of Parallels:</strong> This construction
          proves that given any point not on a line, there exists at least one parallel through
          that point. The uniqueness of this parallel is equivalent to the Parallel Postulate.
        </p>
      </div>
    </LessonLayout>
  );
}
