import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section10() {
  return (
    <LessonLayout sectionId={10}>
      <Proposition
        title="Proposition I.10"
        proof={
          <>
            <p>
              Let <em>AB</em> be the given finite straight line.
            </p>
            <p className="mt-2">
              Thus it is required to bisect the finite straight line <em>AB</em>.
            </p>
            <p className="mt-2">
              Let the equilateral triangle <em>ABC</em> be constructed on it, [I. 1] and let the
              angle <em>ACB</em> be bisected by the straight line <em>CD</em>; [I. 9]
            </p>
            <p className="mt-2">
              I say that the straight line <em>AB</em> has been bisected at the point <em>D</em>.
            </p>
            <p className="mt-2">
              For, since <em>AC</em> is equal to <em>CB</em>, and <em>CD</em> is common, the two
              sides <em>AC</em>, <em>CD</em> are equal to the two sides <em>BC</em>, <em>CD</em>{' '}
              respectively; and the angle <em>ACD</em> is equal to the angle <em>BCD</em>;
            </p>
            <p className="mt-2">
              therefore the base <em>AD</em> is equal to the base <em>BD</em>. [I. 4]
            </p>
            <p className="mt-2">
              Therefore the given finite straight line <em>AB</em> has been bisected at <em>D</em>.
            </p>
            <p className="mt-2 font-medium">
              Being what it was required to do.
            </p>
          </>
        }
      >
        <p>To bisect a given finite straight line.</p>
      </Proposition>

      <h2>Analysis</h2>

      <p>
        This proposition shows how to find the midpoint of a line segment. The construction is
        elegant: build an equilateral triangle on the segment, bisect the apex angle, and where the
        bisector meets the base is the midpoint.
      </p>

      <p className="mt-4">
        The construction elegantly combines two previous results: the equilateral triangle
        construction (I.1) and the angle bisection (I.9).
      </p>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition I.1 (to construct an equilateral triangle)</li>
        <li>Proposition I.9 (to bisect the angle)</li>
        <li>Proposition I.4 (SAS congruence to prove the segments equal)</li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Basic Constructions:</strong> Propositions 1-10
          establish the fundamental compass-and-straightedge constructions: equilateral triangles,
          transferring lengths, cutting segments, bisecting angles, and bisecting segments. These
          form the toolkit for all subsequent geometric constructions.
        </p>
      </div>
    </LessonLayout>
  );
}
