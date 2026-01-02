import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';
import { CompletingSquare } from '@/components/visualizations';

export default function Section54() {
  return (
    <LessonLayout sectionId={54}>
      <CompletingSquare />

      <Proposition
        title="Proposition II.5"
        proof={
          <>
            <p>
              Let the straight line <em>AB</em> be cut into equal segments at <em>C</em> and into
              unequal segments at <em>D</em>.
            </p>
            <p className="mt-2">
              I say that the rectangle contained by <em>AD</em>, <em>DB</em> together with the
              square on <em>CD</em> is equal to the square on <em>CB</em>.
            </p>
            <p className="mt-2">
              For let the square <em>CEFB</em> be described on <em>CB</em>, [I. 46] and let{' '}
              <em>BE</em> be joined; through <em>D</em> let <em>DG</em> be drawn parallel to either{' '}
              <em>CE</em> or <em>BF</em>, [I. 31] through <em>H</em> let <em>KM</em> be drawn
              parallel to either <em>AB</em> or <em>EF</em>, and again through <em>A</em> let{' '}
              <em>AK</em> be drawn parallel to either <em>CL</em> or <em>BM</em>. [I. 31]
            </p>
            <p className="mt-2">
              Then, since the complement <em>CH</em> is equal to the complement <em>HF</em>, [I. 43]
              let <em>DM</em> be added to each; therefore the whole <em>CM</em> is equal to the
              whole <em>DF</em>.
            </p>
            <p className="mt-2">
              But <em>CM</em> is equal to <em>AL</em>, since <em>AC</em> is also equal to{' '}
              <em>CB</em>; [I. 36] therefore <em>AL</em> is also equal to <em>DF</em>.
            </p>
            <p className="mt-2">
              Let <em>CH</em> be added to each; therefore the whole <em>AH</em> is equal to the
              gnomon <em>NOP</em>.
            </p>
            <p className="mt-2">
              But <em>AH</em> is the rectangle <em>AD</em>, <em>DB</em>, for <em>DH</em> is equal to{' '}
              <em>DB</em>;
            </p>
            <p className="mt-2">
              therefore the gnomon <em>NOP</em> is also equal to the rectangle <em>AD</em>,{' '}
              <em>DB</em>.
            </p>
            <p className="mt-2">
              Let <em>LG</em>, which is equal to the square on <em>CD</em>, be added to each;
              therefore the gnomon <em>NOP</em> and <em>LG</em> are equal to the rectangle{' '}
              <em>AD</em>, <em>DB</em> and the square on <em>CD</em>.
            </p>
            <p className="mt-2">
              But the gnomon <em>NOP</em> and <em>LG</em> are the whole square <em>CEFB</em>, which
              is described on <em>CB</em>;
            </p>
            <p className="mt-2">
              therefore the rectangle <em>AD</em>, <em>DB</em> together with the square on{' '}
              <em>CD</em> is equal to the square on <em>CB</em>.
            </p>
            <p className="mt-2 font-medium">
              Therefore etc.
            </p>
          </>
        }
      >
        <p>
          If a straight line be cut into equal and unequal segments, the rectangle contained by the
          unequal segments of the whole together with the square on the straight line between the
          points of section is equal to the square on the half.
        </p>
      </Proposition>

      <h2>Analysis</h2>

      <p>
        Let the line <em>AB</em> have length <em>2a</em>, with <em>C</em> the midpoint. Let{' '}
        <em>D</em> divide the line into segments <em>AD = a + x</em> and <em>DB = a - x</em>, where{' '}
        <em>x = CD</em> is the distance from midpoint to the cut point. Then:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700 text-center">
        <p className="text-xl text-amber-400 font-mono">
          (a + x)(a - x) + x² = a²
        </p>
      </div>

      <p className="mt-4">This is equivalent to:</p>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700 text-center">
        <p className="text-xl text-amber-400 font-mono">
          a² - x² + x² = a²
        </p>
      </div>

      <p className="mt-4">
        Or, rearranging: <strong>a² - x² = (a + x)(a - x)</strong>, the difference of squares
        formula.
      </p>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 300 100" className="w-full max-w-md">
          {/* Line */}
          <line x1="20" y1="50" x2="280" y2="50" stroke="#f59e0b" strokeWidth="2" />
          {/* Points */}
          <circle cx="20" cy="50" r="4" fill="#f59e0b" />
          <circle cx="150" cy="50" r="4" fill="#f59e0b" />
          <circle cx="200" cy="50" r="4" fill="#3b82f6" />
          <circle cx="280" cy="50" r="4" fill="#f59e0b" />
          {/* Labels */}
          <text x="20" y="75" fill="#f59e0b" fontSize="12" textAnchor="middle">A</text>
          <text x="150" y="75" fill="#f59e0b" fontSize="12" textAnchor="middle">C</text>
          <text x="200" y="75" fill="#3b82f6" fontSize="12" textAnchor="middle">D</text>
          <text x="280" y="75" fill="#f59e0b" fontSize="12" textAnchor="middle">B</text>
          {/* Segment labels */}
          <text x="85" y="35" fill="#d1d5db" fontSize="11" textAnchor="middle">a</text>
          <text x="215" y="35" fill="#d1d5db" fontSize="11" textAnchor="middle">a</text>
          <text x="175" y="35" fill="#3b82f6" fontSize="11" textAnchor="middle">x</text>
          {/* Bracket for AD */}
          <path d="M 20 20 L 20 25 L 200 25 L 200 20" fill="none" stroke="#6b7280" strokeWidth="1" />
          <text x="110" y="15" fill="#6b7280" fontSize="10" textAnchor="middle">a + x</text>
          {/* Bracket for DB */}
          <path d="M 200 20 L 200 25 L 280 25 L 280 20" fill="none" stroke="#6b7280" strokeWidth="1" />
          <text x="240" y="15" fill="#6b7280" fontSize="10" textAnchor="middle">a - x</text>
        </svg>
      </div>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition I.31 (constructing parallels)</li>
        <li>Proposition I.36 (parallelograms on equal bases)</li>
        <li>Proposition I.43 (complements are equal)</li>
        <li>Proposition I.46 (constructing squares)</li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Completing the Square:</strong> This proposition is the
          geometric basis for "completing the square," a technique essential for solving quadratic
          equations. The gnomon (L-shaped figure) plays a key role.
        </p>
      </div>
    </LessonLayout>
  );
}
