import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';
import { PythagoreanProof } from '@/components/visualizations';

export default function Section47() {
  return (
    <LessonLayout sectionId={47}>
      <PythagoreanProof />

      <Proposition
        title="Proposition I.47"
        proof={
          <>
            <p>
              Let <em>ABC</em> be a right-angled triangle having the angle <em>BAC</em> right.
            </p>
            <p className="mt-2">
              I say that the square on <em>BC</em> is equal to the squares on <em>BA</em>,{' '}
              <em>AC</em>.
            </p>
            <p className="mt-2">
              For let there be described on <em>BC</em> the square <em>BDEC</em>, and on <em>BA</em>,{' '}
              <em>AC</em> the squares <em>GB</em>, <em>HC</em>; [I. 46] through <em>A</em> let{' '}
              <em>AL</em> be drawn parallel to either <em>BD</em> or <em>CE</em>, [I. 31] and let{' '}
              <em>AD</em>, <em>FC</em> be joined.
            </p>
            <p className="mt-2">
              Then, since each of the angles <em>BAC</em>, <em>BAG</em> is right, it follows that
              with a straight line <em>BA</em>, and at the point <em>A</em> on it, the two straight
              lines <em>AC</em>, <em>AG</em> not lying on the same side make the adjacent angles
              equal to two right angles; therefore <em>CA</em> is in a straight line with{' '}
              <em>AG</em>. [I. 14]
            </p>
            <p className="mt-2">
              For the same reason <em>BA</em> is also in a straight line with <em>AH</em>.
            </p>
            <p className="mt-2">
              And, since the angle <em>DBC</em> is equal to the angle <em>FBA</em>; for each is
              right; let the angle <em>ABC</em> be added to each; therefore the whole angle{' '}
              <em>DBA</em> is equal to the whole angle <em>FBC</em>. [C.N. 2]
            </p>
            <p className="mt-2">
              And, since <em>DB</em> is equal to <em>BC</em>, and <em>FB</em> to <em>BA</em>, the two
              sides <em>AB</em>, <em>BD</em> are equal to the two sides <em>FB</em>, <em>BC</em>{' '}
              respectively; and the angle <em>ABD</em> is equal to the angle <em>FBC</em>; therefore
              the base <em>AD</em> is equal to the base <em>FC</em>, and the triangle <em>ABD</em> is
              equal to the triangle <em>FBC</em>. [I. 4]
            </p>
            <p className="mt-2">
              Now the parallelogram <em>BL</em> is double of the triangle <em>ABD</em>, for they have
              the same base <em>BD</em> and are in the same parallels <em>BD</em>, <em>AL</em>.
              [I. 41]
            </p>
            <p className="mt-2">
              And the square <em>GB</em> is double of the triangle <em>FBC</em>, for they again have
              the same base <em>FB</em> and are in the same parallels <em>FB</em>, <em>GC</em>.
              [I. 41]
            </p>
            <p className="mt-2">
              [But the doubles of equals are equal to one another.]
            </p>
            <p className="mt-2">
              Therefore the parallelogram <em>BL</em> is also equal to the square <em>GB</em>.
            </p>
            <p className="mt-2">
              Similarly, if <em>AE</em>, <em>BK</em> be joined, the parallelogram <em>CL</em> can
              also be proved equal to the square <em>HC</em>;
            </p>
            <p className="mt-2">
              therefore the whole square <em>BDEC</em> is equal to the two squares <em>GB</em>,{' '}
              <em>HC</em>. [C.N. 2]
            </p>
            <p className="mt-2">
              And the square <em>BDEC</em> is described on <em>BC</em>, and the squares <em>GB</em>,{' '}
              <em>HC</em> on <em>BA</em>, <em>AC</em>.
            </p>
            <p className="mt-2">
              Therefore the square on the side <em>BC</em> is equal to the squares on the sides{' '}
              <em>BA</em>, <em>AC</em>.
            </p>
            <p className="mt-2 font-medium">
              Therefore etc.
            </p>
          </>
        }
      >
        <p>
          In right-angled triangles the square on the side subtending the right angle is equal to
          the squares on the sides containing the right angle.
        </p>
      </Proposition>

      <h2>The Pythagorean Theorem</h2>

      <p>
        This is one of the most famous theorems in all of mathematics: in a right triangle, the
        square of the hypotenuse equals the sum of the squares of the other two sides. In modern
        notation: <strong>a² + b² = c²</strong>.
      </p>

      <p className="mt-4">
        Euclid's proof is elegant but differs from modern algebraic proofs. He constructs squares
        on all three sides, draws a line from the right angle perpendicular to the hypotenuse
        (dividing the large square into two rectangles), and shows that each small square equals
        the corresponding rectangle.
      </p>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition I.4 (SAS congruence)</li>
        <li>Proposition I.14 (straight line criterion)</li>
        <li>Proposition I.31 (constructing parallels)</li>
        <li>Proposition I.41 (parallelogram is double of triangle)</li>
        <li>Proposition I.46 (constructing squares)</li>
        <li>Common Notion 2 (addition of equals)</li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Historical Significance:</strong> This theorem was
          known to the Babylonians over a thousand years before Euclid, and to the Pythagoreans
          who gave it its name. But Euclid's rigorous proof from first principles was
          unprecedented. It remains one of the most proved theorems in mathematics, with hundreds
          of different proofs discovered over the centuries.
        </p>
      </div>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-6 border border-dark-700">
        <p className="text-dark-300 text-sm">
          <strong className="text-amber-400">Note:</strong> This proof is sometimes called the
          "windmill proof" because of the distinctive shape of the figure with the squares on all
          sides.
        </p>
      </div>
    </LessonLayout>
  );
}
