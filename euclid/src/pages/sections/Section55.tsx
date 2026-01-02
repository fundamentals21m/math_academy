import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section55() {
  return (
    <LessonLayout sectionId={55}>
      <Proposition
        title="Proposition II.6"
        proof={
          <>
            <p>
              Let the straight line <em>AB</em> be bisected at the point <em>C</em>, and let a
              straight line <em>BD</em> be added to it in a straight line.
            </p>
            <p className="mt-2">
              I say that the rectangle contained by <em>AD</em>, <em>DB</em> together with the
              square on <em>CB</em> is equal to the square on <em>CD</em>.
            </p>
            <p className="mt-2">
              For let the square <em>CEFD</em> be described on <em>CD</em>, [I. 46] and let{' '}
              <em>DE</em> be joined; through <em>B</em> let <em>BG</em> be drawn parallel to either{' '}
              <em>EC</em> or <em>DF</em>, [I. 31] through <em>H</em> let <em>KM</em> be drawn
              parallel to either <em>AB</em> or <em>EF</em>, and further through <em>A</em> let{' '}
              <em>AK</em> be drawn parallel to either <em>CL</em> or <em>DM</em>. [I. 31]
            </p>
            <p className="mt-2">
              Then, since <em>AC</em> is equal to <em>CB</em>, <em>AL</em> is also equal to{' '}
              <em>CH</em>. [I. 36]
            </p>
            <p className="mt-2">
              But <em>CH</em> is equal to <em>HF</em>. [I. 43]
            </p>
            <p className="mt-2">
              Therefore <em>AL</em> is also equal to <em>HF</em>.
            </p>
            <p className="mt-2">
              Let <em>CM</em> be added to each; therefore the whole <em>AM</em> is equal to the
              gnomon <em>NOP</em>.
            </p>
            <p className="mt-2">
              But <em>AM</em> is the rectangle <em>AD</em>, <em>DB</em>, for <em>DM</em> is equal to{' '}
              <em>DB</em>;
            </p>
            <p className="mt-2">
              therefore the gnomon <em>NOP</em> is also equal to the rectangle <em>AD</em>,{' '}
              <em>DB</em>.
            </p>
            <p className="mt-2">
              Let <em>LG</em>, which is equal to the square on <em>BC</em>, be added to each;
              therefore the rectangle <em>AD</em>, <em>DB</em> together with the square on{' '}
              <em>CB</em> is equal to the gnomon <em>NOP</em> and <em>LG</em>.
            </p>
            <p className="mt-2">
              But the gnomon <em>NOP</em> and <em>LG</em> are the whole square <em>CEFD</em>, which
              is described on <em>CD</em>;
            </p>
            <p className="mt-2">
              therefore the rectangle <em>AD</em>, <em>DB</em> together with the square on{' '}
              <em>CB</em> is equal to the square on <em>CD</em>.
            </p>
            <p className="mt-2 font-medium">
              Therefore etc.
            </p>
          </>
        }
      >
        <p>
          If a straight line be bisected and a straight line be added to it in a straight line,
          the rectangle contained by the whole with the added straight line and the added straight
          line together with the square on the half is equal to the square on the straight line
          made up of the half and the added straight line.
        </p>
      </Proposition>

      <h2>Analysis</h2>

      <p>
        Let <em>AB</em> have length <em>2a</em> with midpoint <em>C</em>. Let <em>BD</em> (of length{' '}
        <em>b</em>) be added. Then <em>AD = 2a + b</em> and <em>CD = a + b</em>. The proposition
        states:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700 text-center">
        <p className="text-xl text-amber-400 font-mono">
          (2a + b) · b + a² = (a + b)²
        </p>
      </div>

      <p className="mt-4">Expanding the right side:</p>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700 text-center">
        <p className="text-amber-400 font-mono">
          2ab + b² + a² = a² + 2ab + b² ✓
        </p>
      </div>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 340 80" className="w-full max-w-lg">
          {/* Line */}
          <line x1="20" y1="40" x2="320" y2="40" stroke="#f59e0b" strokeWidth="2" />
          {/* Points */}
          <circle cx="20" cy="40" r="4" fill="#f59e0b" />
          <circle cx="120" cy="40" r="4" fill="#f59e0b" />
          <circle cx="220" cy="40" r="4" fill="#f59e0b" />
          <circle cx="320" cy="40" r="4" fill="#3b82f6" />
          {/* Labels */}
          <text x="20" y="65" fill="#f59e0b" fontSize="12" textAnchor="middle">A</text>
          <text x="120" y="65" fill="#f59e0b" fontSize="12" textAnchor="middle">C</text>
          <text x="220" y="65" fill="#f59e0b" fontSize="12" textAnchor="middle">B</text>
          <text x="320" y="65" fill="#3b82f6" fontSize="12" textAnchor="middle">D</text>
          {/* Segment labels */}
          <text x="70" y="25" fill="#d1d5db" fontSize="11" textAnchor="middle">a</text>
          <text x="170" y="25" fill="#d1d5db" fontSize="11" textAnchor="middle">a</text>
          <text x="270" y="25" fill="#3b82f6" fontSize="11" textAnchor="middle">b</text>
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
          <strong className="text-amber-400">Companion to II.5:</strong> While II.5 deals with
          cutting a line into unequal parts, II.6 deals with extending a line. Together they
          provide the geometric foundations for completing the square with either internal or
          external division.
        </p>
      </div>
    </LessonLayout>
  );
}
