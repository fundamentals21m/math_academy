import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section58() {
  return (
    <LessonLayout sectionId={58}>
      <Proposition
        title="Proposition II.9"
        proof={
          <>
            <p>
              Let the straight line <em>AB</em> be cut into equal segments at <em>C</em> and into
              unequal segments at <em>D</em>.
            </p>
            <p className="mt-2">
              I say that the squares on <em>AD</em>, <em>DB</em> are double of the squares on{' '}
              <em>AC</em>, <em>CD</em>.
            </p>
            <p className="mt-2">
              For let <em>CE</em> be drawn from <em>C</em> at right angles to <em>AB</em>, and let
              it be made equal to either <em>AC</em> or <em>CB</em>; [I. 11, I. 3] let <em>EA</em>,{' '}
              <em>EB</em> be joined, through <em>D</em> let <em>DF</em> be drawn parallel to{' '}
              <em>EC</em>, and <em>FG</em> through <em>F</em> parallel to <em>AB</em>, and let{' '}
              <em>AF</em> be joined. [I. 31]
            </p>
            <p className="mt-2">
              Then, since <em>AC</em> is equal to <em>CE</em>, the angle <em>EAC</em> is also equal
              to the angle <em>AEC</em>. [I. 5]
            </p>
            <p className="mt-2">
              And, since the angle at <em>C</em> is right, the remaining angles <em>EAC</em>,{' '}
              <em>AEC</em> are equal to one right angle. [I. 32]
            </p>
            <p className="mt-2">
              And they are equal; therefore each of the angles <em>CEA</em>, <em>CAE</em> is half a
              right angle.
            </p>
            <p className="mt-2">
              For the same reason each of the angles <em>CEB</em>, <em>EBC</em> is also half a
              right angle; therefore the whole <em>AEB</em> is right.
            </p>
            <p className="mt-2">
              And, since the angle <em>GEF</em> is half a right angle, and the angle <em>EGF</em>{' '}
              is right, for it is equal to the interior and opposite angle <em>ECB</em>, [I. 29]
              the remaining angle <em>EFG</em> is half a right angle; [I. 32] therefore the angle{' '}
              <em>GEF</em> is equal to the angle <em>EFG</em>, so that the side <em>EG</em> is also
              equal to <em>GF</em>. [I. 6]
            </p>
            <p className="mt-2">
              Again, since the angle at <em>B</em> is half a right angle, and the angle <em>FDB</em>{' '}
              is right, for it is again equal to the interior and opposite angle <em>ECB</em>,
              [I. 29] the remaining angle <em>BFD</em> is half a right angle; [I. 32] therefore the
              angle at <em>B</em> is equal to the angle <em>DFB</em>, so that the side <em>FD</em>{' '}
              is also equal to the side <em>DB</em>. [I. 6]
            </p>
            <p className="mt-2">
              Now, since <em>AC</em> is equal to <em>CE</em>, the square on <em>AC</em> is also
              equal to the square on <em>CE</em>; therefore the squares on <em>AC</em>, <em>CE</em>{' '}
              are double of the square on <em>AC</em>.
            </p>
            <p className="mt-2">
              But the square on <em>EA</em> is equal to the squares on <em>AC</em>, <em>CE</em>, for
              the angle <em>ACE</em> is right; [I. 47] therefore the square on <em>EA</em> is double
              of the square on <em>AC</em>.
            </p>
            <p className="mt-2">
              Again, since <em>EG</em> is equal to <em>GF</em>, the square on <em>EG</em> is also
              equal to the square on <em>GF</em>; therefore the squares on <em>EG</em>, <em>GF</em>{' '}
              are double of the square on <em>GF</em>.
            </p>
            <p className="mt-2">
              But the square on <em>EF</em> is equal to the squares on <em>EG</em>, <em>GF</em>;
              therefore the square on <em>EF</em> is double of the square on <em>GF</em>.
            </p>
            <p className="mt-2">
              And <em>GF</em> is equal to <em>CD</em>; [I. 34] therefore the square on <em>EF</em>{' '}
              is double of the square on <em>CD</em>.
            </p>
            <p className="mt-2">
              But the square on <em>EA</em> is also double of the square on <em>AC</em>; therefore
              the squares on <em>AE</em>, <em>EF</em> are double of the squares on <em>AC</em>,{' '}
              <em>CD</em>.
            </p>
            <p className="mt-2">
              And the square on <em>AF</em> is equal to the squares on <em>AE</em>, <em>EF</em>, for
              the angle <em>AEF</em> is right; [I. 47] therefore the square on <em>AF</em> is double
              of the squares on <em>AC</em>, <em>CD</em>.
            </p>
            <p className="mt-2">
              But the squares on <em>AD</em>, <em>DF</em> are equal to the square on <em>AF</em>,
              for the angle at <em>D</em> is right; [I. 47] therefore the squares on <em>AD</em>,{' '}
              <em>DF</em> are double of the squares on <em>AC</em>, <em>CD</em>.
            </p>
            <p className="mt-2">
              And <em>DF</em> is equal to <em>DB</em>; therefore the squares on <em>AD</em>,{' '}
              <em>DB</em> are double of the squares on <em>AC</em>, <em>CD</em>.
            </p>
            <p className="mt-2 font-medium">
              Therefore etc.
            </p>
          </>
        }
      >
        <p>
          If a straight line be cut into equal and unequal segments, the squares on the unequal
          segments of the whole are double of the square on the half and of the square on the
          straight line between the points of section.
        </p>
      </Proposition>

      <h2>Analysis</h2>

      <p>
        Let <em>AB</em> have length <em>2a</em>, with <em>C</em> the midpoint and <em>D</em> at
        distance <em>x</em> from <em>C</em>. Then <em>AD = a + x</em>, <em>DB = a - x</em>, and{' '}
        <em>CD = x</em>. The proposition states:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700 text-center">
        <p className="text-xl text-amber-400 font-mono">
          (a + x)² + (a - x)² = 2(a² + x²)
        </p>
      </div>

      <p className="mt-4">Expanding the left side:</p>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <p className="text-center text-amber-400 font-mono">
          a² + 2ax + x² + a² - 2ax + x² = 2a² + 2x²
        </p>
        <p className="text-center text-amber-400 font-mono mt-2">
          2a² + 2x² = 2a² + 2x² ✓
        </p>
      </div>

      <p className="mt-4">
        This identity shows that the sum of squares of numbers equally spaced from a center equals
        twice the sum of the squares of the center value and the spacing.
      </p>

      <p className="mt-4">The proof uses an elegant construction with 45° angles and relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition I.5 (isosceles triangle theorem)</li>
        <li>Proposition I.6 (converse)</li>
        <li>Proposition I.29 (parallel lines)</li>
        <li>Proposition I.31 (constructing parallels)</li>
        <li>Proposition I.32 (angle sum in triangle)</li>
        <li>Proposition I.34 (parallelogram properties)</li>
        <li>Proposition I.47 (Pythagorean theorem)</li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Pythagorean Applications:</strong> This proof uses the
          Pythagorean theorem three times, demonstrating how Book I results support Book II's
          algebraic identities.
        </p>
      </div>
    </LessonLayout>
  );
}
