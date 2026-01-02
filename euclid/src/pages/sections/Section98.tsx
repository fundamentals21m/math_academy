import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section98() {
  return (
    <LessonLayout sectionId={98}>
      <Proposition
        title="Proposition III.34"
        proof={
          <>
            <p>
              Let <em>ABC</em> be the given circle, and the angle at <em>D</em> the given
              rectilinear angle; thus it is required to cut off from the circle <em>ABC</em> a
              segment admitting an angle equal to the given rectilinear angle, the angle at{' '}
              <em>D</em>.
            </p>
            <p className="mt-2">
              Let <em>EF</em> be drawn touching the circle <em>ABC</em> at the point <em>B</em>,
              [III. 17] and on the straight line <em>FB</em>, at the point <em>B</em> on it, let
              the angle <em>FBC</em> be constructed equal to the angle at <em>D</em>. [I. 23]
            </p>
            <p className="mt-2">
              Then, since a straight line <em>EF</em> touches the circle <em>ABC</em> at{' '}
              <em>B</em>, and <em>BC</em> has been drawn from the point of contact at <em>B</em>,
              the angle <em>FBC</em> is equal to the angle constructed in the alternate segment{' '}
              <em>BAC</em>. [III. 32]
            </p>
            <p className="mt-2">
              But the angle <em>FBC</em> is equal to the angle at <em>D</em>;
            </p>
            <p className="mt-2 font-medium">
              therefore the angle in the segment <em>BAC</em> is also equal to the angle at{' '}
              <em>D</em>. Therefore from the given circle <em>ABC</em> the segment <em>BAC</em>{' '}
              has been cut off admitting an angle equal to the given angle at <em>D</em>.
            </p>
          </>
        }
      >
        <p>
          From a given circle to cut off a segment admitting an angle equal to a given
          rectilinear angle.
        </p>
      </Proposition>

      <h2>Analysis</h2>

      <p>
        Given a circle and an angle, cut off a segment of the circle such that inscribed angles
        in that segment equal the given angle.
      </p>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 280 260" className="w-72 h-66">
          {/* Circle */}
          <circle cx="140" cy="120" r="80" fill="none" stroke="#f59e0b" strokeWidth="2" />
          {/* Point B (tangent point) */}
          <circle cx="140" cy="200" r="4" fill="#22c55e" />
          {/* Tangent line EF */}
          <line x1="40" y1="200" x2="240" y2="200" stroke="#3b82f6" strokeWidth="2" />
          {/* Chord BC */}
          <line x1="140" y1="200" x2="200" y2="70" stroke="#22c55e" strokeWidth="2" />
          <circle cx="200" cy="70" r="3" fill="#22c55e" />
          {/* Segment BAC */}
          <path d="M 140 200 A 80 80 0 1 0 200 70" fill="none" stroke="#f59e0b" strokeWidth="3" />
          {/* Point A in segment */}
          <circle cx="70" cy="100" r="3" fill="#ef4444" />
          {/* Inscribed angle */}
          <line x1="70" y1="100" x2="140" y2="200" stroke="#ef4444" strokeWidth="1" strokeDasharray="4" />
          <line x1="70" y1="100" x2="200" y2="70" stroke="#ef4444" strokeWidth="1" strokeDasharray="4" />
          {/* Angle arcs */}
          <path d="M 160 200 A 20 20 0 0 0 155 182" fill="none" stroke="#22c55e" strokeWidth="1.5" />
          <path d="M 85 110 A 20 20 0 0 1 80 90" fill="none" stroke="#ef4444" strokeWidth="1.5" />
          {/* Labels */}
          <text x="30" y="210" fill="#3b82f6" fontSize="11">E</text>
          <text x="245" y="210" fill="#3b82f6" fontSize="11">F</text>
          <text x="135" y="220" fill="#22c55e" fontSize="11">B</text>
          <text x="205" y="65" fill="#22c55e" fontSize="11">C</text>
          <text x="60" y="95" fill="#ef4444" fontSize="11">A</text>
          {/* Angle label */}
          <text x="165" y="195" fill="#22c55e" fontSize="10">∠D</text>
        </svg>
      </div>

      <h3>The Construction</h3>

      <ol className="list-decimal list-inside mt-4 space-y-2 text-dark-300">
        <li>Draw a tangent to the circle at any point <em>B</em> (using III.17)</li>
        <li>At <em>B</em>, construct angle <em>FBC</em> equal to the given angle <em>D</em></li>
        <li>Let <em>BC</em> cut the circle at <em>C</em></li>
        <li>The segment <em>BAC</em> (on the opposite side of <em>BC</em> from <em>F</em>) admits angle <em>D</em></li>
      </ol>

      <h3 className="mt-6">Why It Works</h3>

      <p>
        By III.32, the tangent-chord angle ∠<em>FBC</em> equals the inscribed angle in the
        alternate segment <em>BAC</em>. Since we constructed ∠<em>FBC</em> = ∠<em>D</em>, every
        inscribed angle in segment <em>BAC</em> equals ∠<em>D</em>.
      </p>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition I.23 (copying an angle)</li>
        <li>Proposition III.17 (drawing a tangent)</li>
        <li>Proposition III.32 (tangent-chord angle theorem)</li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Comparison:</strong> III.33 builds a segment on a
          given line; III.34 cuts a segment from a given circle. Both produce segments admitting
          a given angle.
        </p>
      </div>
    </LessonLayout>
  );
}
