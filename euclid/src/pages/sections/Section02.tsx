import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section02() {
  return (
    <LessonLayout sectionId={2}>
      <Proposition
        title="Proposition I.2"
        proof={
          <>
            <p>
              Let <em>A</em> be the given point, and <em>BC</em> the given straight line.
            </p>
            <p className="mt-2">
              Thus it is required to place at the point <em>A</em> (as an extremity) a straight line
              equal to the given straight line <em>BC</em>.
            </p>
            <p className="mt-2">
              From the point <em>A</em> to the point <em>B</em> let the straight line <em>AB</em> be
              joined; [Post. 1] and on it let the equilateral triangle <em>DAB</em> be constructed.
              [I. 1]
            </p>
            <p className="mt-2">
              Let the straight lines <em>AE</em>, <em>BF</em> be produced in a straight line with{' '}
              <em>DA</em>, <em>DB</em>; [Post. 2] with centre <em>B</em> and distance <em>BC</em> let
              the circle <em>CGH</em> be described; [Post. 3] and again, with centre <em>D</em> and
              distance <em>DG</em> let the circle <em>GKL</em> be described. [Post. 3]
            </p>
            <p className="mt-2">
              Then, since the point <em>B</em> is the centre of the circle <em>CGH</em>, <em>BC</em>{' '}
              is equal to <em>BG</em>. [Def. 15]
            </p>
            <p className="mt-2">
              Again, since the point <em>D</em> is the centre of the circle <em>GKL</em>, <em>DL</em>{' '}
              is equal to <em>DG</em>. [Def. 15]
            </p>
            <p className="mt-2">
              And in these <em>DA</em> is equal to <em>DB</em>; therefore the remainder <em>AL</em> is
              equal to the remainder <em>BG</em>. [C.N. 3]
            </p>
            <p className="mt-2">
              But <em>BC</em> was also proved equal to <em>BG</em>; therefore each of the straight
              lines <em>AL</em>, <em>BC</em> is equal to <em>BG</em>.
            </p>
            <p className="mt-2">
              And things which are equal to the same thing are also equal to one another. [C.N. 1]
            </p>
            <p className="mt-2">
              Therefore <em>AL</em> is also equal to <em>BC</em>.
            </p>
            <p className="mt-2">
              Therefore at the given point <em>A</em> the straight line <em>AL</em> is placed equal to
              the given straight line <em>BC</em>.
            </p>
            <p className="mt-2 font-medium">
              Being what it was required to do.
            </p>
          </>
        }
      >
        <p>To place at a given point (as an extremity) a straight line equal to a given straight line.</p>
      </Proposition>

      <h2>Analysis</h2>

      <p>
        This proposition allows us to "transfer" a length from one location to another. It is essential
        because Euclid's compass is a "collapsing compass" that cannot simply be picked up and moved
        while maintaining its radius.
      </p>

      <p className="mt-4">
        The construction builds upon Proposition 1, using the equilateral triangle as an auxiliary
        construction to establish equal distances in different directions. The proof uses:
      </p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition I.1 (to construct the equilateral triangle)</li>
        <li>Postulates 1, 2, and 3 (joining points, extending lines, drawing circles)</li>
        <li>Definition 15 (radii of a circle are equal)</li>
        <li>Common Notions 1 and 3 (equality relations)</li>
      </ul>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-6 border border-dark-700">
        <p className="text-dark-300 text-sm">
          <strong className="text-amber-400">Note:</strong> This seemingly simple task requires a
          surprisingly elaborate construction because of the limitations of Euclid's tools. With a
          modern "non-collapsing" compass, this would be trivial.
        </p>
      </div>
    </LessonLayout>
  );
}
