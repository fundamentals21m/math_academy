import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section59() {
  return (
    <LessonLayout sectionId={59}>
      <Proposition
        title="Proposition II.10"
        proof={
          <>
            <p>
              Let the straight line <em>AB</em> be bisected at <em>C</em>, and let a straight line{' '}
              <em>BD</em> be added to it in a straight line.
            </p>
            <p className="mt-2">
              I say that the squares on <em>AD</em>, <em>DB</em> are double of the squares on{' '}
              <em>AC</em>, <em>CD</em>.
            </p>
            <p className="mt-2">
              For let <em>CE</em> be drawn from the point <em>C</em> at right angles to <em>AB</em>{' '}
              [I. 11], and let it be made equal to either <em>AC</em> or <em>CB</em> [I. 3]; let{' '}
              <em>EA</em>, <em>EB</em> be joined; through <em>E</em> let <em>EF</em> be drawn
              parallel to <em>AD</em>, and through <em>D</em> let <em>FD</em> be drawn parallel to{' '}
              <em>CE</em>. [I. 31]
            </p>
            <p className="mt-2">
              Then, since a straight line <em>EF</em> falls on the parallel straight lines{' '}
              <em>EC</em>, <em>FD</em>, the angles <em>CEF</em>, <em>EFD</em> are equal to two right
              angles; [I. 29] therefore the angles <em>FEB</em>, <em>EFD</em> are less than two
              right angles.
            </p>
            <p className="mt-2">
              But straight lines produced from angles less than two right angles meet; [Post. 5]
              therefore <em>EB</em>, <em>FD</em>, if produced in the direction <em>B</em>,{' '}
              <em>D</em>, will meet.
            </p>
            <p className="mt-2">
              Let them be produced and meet at <em>G</em>, and let <em>AG</em> be joined.
            </p>
            <p className="mt-2">
              Then, since <em>AC</em> is equal to <em>CE</em>, the angle <em>EAC</em> is also equal
              to the angle <em>AEC</em>; [I. 5] and the angle at <em>C</em> is right; therefore each
              of the angles <em>EAC</em>, <em>AEC</em> is half a right angle. [I. 32]
            </p>
            <p className="mt-2">
              For the same reason each of the angles <em>CEB</em>, <em>EBC</em> is also half a
              right angle; therefore the angle <em>AEB</em> is right.
            </p>
            <p className="mt-2">
              And, since the angle <em>EBC</em> is half a right angle, the angle <em>DBG</em> is
              also half a right angle. [I. 15]
            </p>
            <p className="mt-2">
              But the angle <em>BDG</em> is also right, for it is equal to the angle <em>DCE</em>,
              they being alternate; [I. 29] therefore the remaining angle <em>DGB</em> is half a
              right angle; [I. 32] therefore the angle <em>DGB</em> is equal to the angle{' '}
              <em>DBG</em>, so that the side <em>BD</em> is also equal to the side <em>GD</em>.
              [I. 6]
            </p>
            <p className="mt-2">
              Again, since the angle <em>EGF</em> is half a right angle, and the angle at <em>F</em>{' '}
              is right, for it is equal to the opposite angle, the angle at <em>C</em>, [I. 34] the
              remaining angle <em>FEG</em> is half a right angle; [I. 32] therefore the angle{' '}
              <em>EGF</em> is equal to the angle <em>FEG</em>, so that the side <em>GF</em> is also
              equal to the side <em>EF</em>. [I. 6]
            </p>
            <p className="mt-2">
              Now, since the square on <em>EC</em> is equal to the square on <em>CA</em>, the
              squares on <em>EC</em>, <em>CA</em> are double of the square on <em>CA</em>.
            </p>
            <p className="mt-2">
              But the square on <em>EA</em> is equal to the squares on <em>EC</em>, <em>CA</em>;
              [I. 47] therefore the square on <em>EA</em> is double of the square on <em>AC</em>.
            </p>
            <p className="mt-2">
              Again, since <em>FG</em> is equal to <em>EF</em>, the square on <em>FG</em> is also
              equal to the square on <em>FE</em>; therefore the squares on <em>GF</em>, <em>FE</em>{' '}
              are double of the square on <em>EF</em>.
            </p>
            <p className="mt-2">
              But the square on <em>EG</em> is equal to the squares on <em>GF</em>, <em>FE</em>;
              [I. 47] therefore the square on <em>EG</em> is double of the square on <em>EF</em>.
            </p>
            <p className="mt-2">
              And <em>EF</em> is equal to <em>CD</em>; [I. 34] therefore the square on <em>EG</em>{' '}
              is double of the square on <em>CD</em>.
            </p>
            <p className="mt-2">
              But the square on <em>EA</em> was also proved double of the square on <em>AC</em>;
              therefore the squares on <em>AE</em>, <em>EG</em> are double of the squares on{' '}
              <em>AC</em>, <em>CD</em>.
            </p>
            <p className="mt-2">
              And the square on <em>AG</em> is equal to the squares on <em>AE</em>, <em>EG</em>;
              [I. 47] therefore the square on <em>AG</em> is double of the squares on <em>AC</em>,{' '}
              <em>CD</em>.
            </p>
            <p className="mt-2">
              But the squares on <em>AD</em>, <em>DG</em> are equal to the square on <em>AG</em>;
              [I. 47] therefore the squares on <em>AD</em>, <em>DG</em> are double of the squares
              on <em>AC</em>, <em>CD</em>.
            </p>
            <p className="mt-2">
              And <em>DG</em> is equal to <em>DB</em>; therefore the squares on <em>AD</em>,{' '}
              <em>DB</em> are double of the squares on <em>AC</em>, <em>CD</em>.
            </p>
            <p className="mt-2 font-medium">
              Therefore etc.
            </p>
          </>
        }
      >
        <p>
          If a straight line be bisected, and a straight line be added to it in a straight line,
          the square on the whole with the added straight line and the square on the added straight
          line both together are double of the square on the half and of the square described on
          the straight line made up of the half and the added straight line as on one straight
          line.
        </p>
      </Proposition>

      <h2>Analysis</h2>

      <p>
        Let <em>AB</em> have length <em>2a</em> with midpoint <em>C</em>, and let <em>BD = b</em> be
        added. Then <em>AD = 2a + b</em> and <em>CD = a + b</em>. The proposition states:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700 text-center">
        <p className="text-xl text-amber-400 font-mono">
          (2a + b)² + b² = 2(a² + (a + b)²)
        </p>
      </div>

      <p className="mt-4">Expanding:</p>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <p className="text-center text-amber-400 font-mono text-sm">
          4a² + 4ab + b² + b² = 2a² + 2(a² + 2ab + b²)
        </p>
        <p className="text-center text-amber-400 font-mono text-sm mt-2">
          4a² + 4ab + 2b² = 2a² + 2a² + 4ab + 2b²
        </p>
        <p className="text-center text-amber-400 font-mono text-sm mt-2">
          4a² + 4ab + 2b² = 4a² + 4ab + 2b² ✓
        </p>
      </div>

      <p className="mt-4">
        This is the companion to II.9, dealing with the case where a segment is added rather than
        internal division.
      </p>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Postulate 5 (parallel postulate)</li>
        <li>Propositions I.5, I.6 (isosceles triangles)</li>
        <li>Propositions I.29, I.31 (parallel lines)</li>
        <li>Proposition I.32 (angle sum)</li>
        <li>Proposition I.34 (parallelogram properties)</li>
        <li>Proposition I.47 (Pythagorean theorem) - used four times</li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Pair with II.9:</strong> Propositions II.9 and II.10
          form a natural pair: II.9 handles internal division while II.10 handles external
          extension. Together they cover all cases of dividing or extending a bisected line.
        </p>
      </div>
    </LessonLayout>
  );
}
