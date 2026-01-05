import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section104() {
  return (
    <LessonLayout sectionId={104}>
      <Proposition
        title="Proposition IV.2"
        proof={
          <>
            <p>
              Let <em>ABC</em> be the given circle, and <em>DEF</em> the given triangle; it is
              required to inscribe in the circle <em>ABC</em> a triangle equiangular with the
              triangle <em>DEF</em>.
            </p>
            <p className="mt-2">
              Let <em>GH</em> be drawn touching the circle <em>ABC</em> at <em>A</em> [III.17]; on
              the straight line <em>AH</em>, and at the point <em>A</em> on it, let the angle{' '}
              <em>HAC</em> be constructed equal to the angle <em>DEF</em>, and on the straight line{' '}
              <em>AG</em>, and at the point <em>A</em> on it, let the angle <em>GAB</em> be
              constructed equal to the angle <em>DFE</em>; [I.23] let <em>BC</em> be joined.
            </p>
            <p className="mt-2">
              Then, since a straight line <em>AH</em> touches the circle <em>ABC</em>, and from the
              point of contact at <em>A</em> the straight line <em>AC</em> is drawn across in the
              circle, therefore the angle <em>HAC</em> is equal to the angle <em>ABC</em> in the
              alternate segment of the circle. [III.32]
            </p>
            <p className="mt-2">
              But the angle <em>HAC</em> is equal to the angle <em>DEF</em>; therefore the angle{' '}
              <em>ABC</em> is also equal to the angle <em>DEF</em>.
            </p>
            <p className="mt-2">
              For the same reason the angle <em>ACB</em> is also equal to the angle <em>DFE</em>;
              therefore the remaining angle <em>BAC</em> is also equal to the remaining angle{' '}
              <em>EDF</em>. [I.32]
            </p>
            <p className="mt-2 font-medium">
              Therefore in the given circle there has been inscribed a triangle equiangular with the
              given triangle.
            </p>
          </>
        }
      >
        <p>In a given circle to inscribe a triangle equiangular with a given triangle.</p>
      </Proposition>

      <h2>Analysis</h2>

      <p>
        This construction inscribes a triangle in a circle such that its angles match those of any
        given triangle. The key insight is using the tangent-chord angle theorem (III.32).
      </p>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 350 280" className="w-full max-w-md h-72">
          {/* Given circle */}
          <circle cx="150" cy="140" r="80" fill="none" stroke="#f59e0b" strokeWidth="2" />
          {/* Tangent line GH at A */}
          <line x1="50" y1="60" x2="250" y2="60" stroke="#3b82f6" strokeWidth="1.5" />
          {/* Point A at top of circle */}
          <circle cx="150" cy="60" r="4" fill="#ef4444" />
          {/* Inscribed triangle ABC */}
          <polygon
            points="150,60 90,190 210,170"
            fill="none"
            stroke="#22c55e"
            strokeWidth="2"
          />
          {/* Chords from A */}
          <line x1="150" y1="60" x2="90" y2="190" stroke="#22c55e" strokeWidth="2" />
          <line x1="150" y1="60" x2="210" y2="170" stroke="#22c55e" strokeWidth="2" />
          {/* Points */}
          <circle cx="90" cy="190" r="3" fill="#22c55e" />
          <circle cx="210" cy="170" r="3" fill="#22c55e" />
          {/* Given triangle DEF */}
          <polygon
            points="290,80 260,160 330,160"
            fill="none"
            stroke="#9333ea"
            strokeWidth="2"
          />
          {/* Labels */}
          <text x="40" y="55" fill="#3b82f6" fontSize="11">
            G
          </text>
          <text x="250" y="55" fill="#3b82f6" fontSize="11">
            H
          </text>
          <text x="150" y="50" fill="#ef4444" fontSize="11">
            A
          </text>
          <text x="75" y="200" fill="#22c55e" fontSize="11">
            B
          </text>
          <text x="215" y="180" fill="#22c55e" fontSize="11">
            C
          </text>
          <text x="290" y="70" fill="#9333ea" fontSize="11">
            D
          </text>
          <text x="250" y="170" fill="#9333ea" fontSize="11">
            E
          </text>
          <text x="335" y="170" fill="#9333ea" fontSize="11">
            F
          </text>
          <text x="280" y="200" fill="#9333ea" fontSize="10">
            given
          </text>
          {/* Angle arcs */}
          <path d="M 170 60 A 20 20 0 0 1 160 78" fill="none" stroke="#ef4444" strokeWidth="1.5" />
          <path d="M 130 60 A 20 20 0 0 0 140 78" fill="none" stroke="#ef4444" strokeWidth="1.5" />
        </svg>
      </div>

      <h3>The Construction</h3>

      <ol className="list-decimal list-inside mt-4 space-y-2 text-dark-300">
        <li>
          Choose any point <em>A</em> on the circle
        </li>
        <li>
          Draw tangent line <em>GH</em> at <em>A</em> [III.17]
        </li>
        <li>
          At <em>A</em>, construct angle <em>HAC</em> = angle <em>DEF</em> (chord <em>AC</em> enters
          the circle) [I.23]
        </li>
        <li>
          At <em>A</em>, construct angle <em>GAB</em> = angle <em>DFE</em> (chord <em>AB</em> enters
          the circle) [I.23]
        </li>
        <li>
          Join <em>BC</em>
        </li>
        <li>
          Triangle <em>ABC</em> is equiangular with triangle <em>DEF</em>
        </li>
      </ol>

      <h3 className="mt-6">Why It Works</h3>

      <p className="mt-2">
        By III.32 (tangent-chord angle theorem), the angle between tangent <em>AH</em> and chord{' '}
        <em>AC</em> equals the inscribed angle <em>ABC</em> in the alternate segment.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <p className="text-amber-400 font-mono mb-2">
          Since angle HAC = angle DEF, and angle HAC = angle ABC (III.32)
        </p>
        <p className="text-amber-400 font-mono mb-2">We have angle ABC = angle DEF</p>
        <p className="text-amber-400 font-mono">
          Similarly, angle ACB = angle DFE, so angle BAC = angle EDF
        </p>
      </div>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition I.23 (copying an angle)</li>
        <li>Proposition I.32 (angle sum of triangle)</li>
        <li>Proposition III.17 (drawing a tangent)</li>
        <li>Proposition III.32 (tangent-chord angle = inscribed angle in alternate segment)</li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Note:</strong> The inscribed triangle is{' '}
          <em>similar</em> to the given triangle, not necessarily congruent. Its size is determined
          by the circle.
        </p>
      </div>
    </LessonLayout>
  );
}
