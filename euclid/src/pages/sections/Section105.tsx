import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section105() {
  return (
    <LessonLayout sectionId={105}>
      <Proposition
        title="Proposition IV.3"
        proof={
          <>
            <p>
              Let <em>ABC</em> be the given circle, and <em>DEF</em> the given triangle; it is
              required to circumscribe about the circle <em>ABC</em> a triangle equiangular with the
              triangle <em>DEF</em>.
            </p>
            <p className="mt-2">
              Let <em>EF</em> be produced in both directions to the points <em>G</em>, <em>H</em>;
              let the center <em>K</em> of the circle <em>ABC</em> be taken [III.1], and let the
              straight line <em>KB</em> be drawn across at random; on the straight line <em>KB</em>,
              and at the point <em>K</em> on it, let the angle <em>BKA</em> be constructed equal to
              the angle <em>DEG</em>, and the angle <em>BKC</em> equal to the angle <em>DFH</em>;
              [I.23] and through the points <em>A</em>, <em>B</em>, <em>C</em> let <em>LAM</em>,{' '}
              <em>MBN</em>, <em>NCL</em> be drawn touching the circle <em>ABC</em>. [III.17]
            </p>
            <p className="mt-2">
              Now, since <em>LM</em>, <em>MN</em>, <em>NL</em> touch the circle <em>ABC</em> at the
              points <em>A</em>, <em>B</em>, <em>C</em>, and <em>KA</em>, <em>KB</em>, <em>KC</em>{' '}
              have been joined from the center <em>K</em> to the points <em>A</em>, <em>B</em>,{' '}
              <em>C</em>, therefore the angles at the points <em>A</em>, <em>B</em>, <em>C</em> are
              right. [III.18]
            </p>
            <p className="mt-2">
              And, since the four angles of the quadrilateral <em>AMBK</em> are equal to four right
              angles, inasmuch as <em>AMBK</em> is in fact divisible into two triangles, and the
              angles <em>KAM</em>, <em>KBM</em> are right, therefore the remaining angles{' '}
              <em>AKB</em>, <em>AMB</em> are equal to two right angles.
            </p>
            <p className="mt-2">
              But the angles <em>DEG</em>, <em>DEF</em> are also equal to two right angles; [I.13]
              therefore the angles <em>AKB</em>, <em>AMB</em> are equal to the angles <em>DEG</em>,{' '}
              <em>DEF</em>, of which the angle <em>AKB</em> is equal to the angle <em>DEG</em>;
              therefore the remaining angle <em>AMB</em> is equal to the remaining angle{' '}
              <em>DEF</em>.
            </p>
            <p className="mt-2">
              Similarly it can be proved that the angle <em>LNB</em> is also equal to the angle{' '}
              <em>DFE</em>; therefore the remaining angle <em>MLN</em> is equal to the angle{' '}
              <em>EDF</em>. [I.32]
            </p>
            <p className="mt-2 font-medium">
              Therefore the triangle <em>LMN</em> is equiangular with the triangle <em>DEF</em>; and
              it has been circumscribed about the circle <em>ABC</em>.
            </p>
          </>
        }
      >
        <p>About a given circle to circumscribe a triangle equiangular with a given triangle.</p>
      </Proposition>

      <h2>Analysis</h2>

      <p>
        This is the companion to IV.2. Instead of inscribing a triangle in a circle, we circumscribe
        one about it—the triangle's sides are tangent to the circle.
      </p>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 350 280" className="w-full max-w-md h-72">
          {/* Given circle */}
          <circle cx="140" cy="140" r="60" fill="none" stroke="#f59e0b" strokeWidth="2" />
          {/* Center K */}
          <circle cx="140" cy="140" r="3" fill="#f59e0b" />
          {/* Circumscribed triangle LMN */}
          <polygon
            points="140,30 40,220 240,220"
            fill="none"
            stroke="#22c55e"
            strokeWidth="2"
          />
          {/* Radii to tangent points */}
          <line
            x1="140"
            y1="140"
            x2="140"
            y2="80"
            stroke="#3b82f6"
            strokeWidth="1"
            strokeDasharray="3"
          />
          <line
            x1="140"
            y1="140"
            x2="88"
            y2="170"
            stroke="#3b82f6"
            strokeWidth="1"
            strokeDasharray="3"
          />
          <line
            x1="140"
            y1="140"
            x2="192"
            y2="170"
            stroke="#3b82f6"
            strokeWidth="1"
            strokeDasharray="3"
          />
          {/* Tangent points A, B, C */}
          <circle cx="140" cy="80" r="3" fill="#ef4444" />
          <circle cx="88" cy="170" r="3" fill="#ef4444" />
          <circle cx="192" cy="170" r="3" fill="#ef4444" />
          {/* Given triangle DEF */}
          <polygon
            points="300,100 270,180 330,180"
            fill="none"
            stroke="#9333ea"
            strokeWidth="2"
          />
          {/* Labels */}
          <text x="135" y="25" fill="#22c55e" fontSize="11">
            L
          </text>
          <text x="25" y="225" fill="#22c55e" fontSize="11">
            M
          </text>
          <text x="245" y="225" fill="#22c55e" fontSize="11">
            N
          </text>
          <text x="145" y="75" fill="#ef4444" fontSize="11">
            A
          </text>
          <text x="73" y="175" fill="#ef4444" fontSize="11">
            B
          </text>
          <text x="197" y="175" fill="#ef4444" fontSize="11">
            C
          </text>
          <text x="145" y="145" fill="#f59e0b" fontSize="11">
            K
          </text>
          <text x="300" y="90" fill="#9333ea" fontSize="11">
            D
          </text>
          <text x="260" y="190" fill="#9333ea" fontSize="11">
            E
          </text>
          <text x="335" y="190" fill="#9333ea" fontSize="11">
            F
          </text>
        </svg>
      </div>

      <h3>The Construction</h3>

      <ol className="list-decimal list-inside mt-4 space-y-2 text-dark-300">
        <li>
          Find the center <em>K</em> of the given circle [III.1]
        </li>
        <li>
          Draw any radius <em>KB</em>
        </li>
        <li>
          At <em>K</em>, construct angle <em>BKA</em> = supplement of angle <em>DEF</em> [I.23]
        </li>
        <li>
          At <em>K</em>, construct angle <em>BKC</em> = supplement of angle <em>DFE</em> [I.23]
        </li>
        <li>
          Draw tangent lines at <em>A</em>, <em>B</em>, <em>C</em> [III.17]
        </li>
        <li>
          These tangents form triangle <em>LMN</em>, which is equiangular with <em>DEF</em>
        </li>
      </ol>

      <h3 className="mt-6">Why It Works</h3>

      <p className="mt-2">
        The key is that tangent lines are perpendicular to radii (III.18). In quadrilateral{' '}
        <em>AMBK</em>, angles at <em>A</em> and <em>B</em> are right angles (90° each). Since the
        angle sum is 360°:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700 text-center">
        <p className="text-amber-400 font-mono mb-2">
          angle AKB + angle AMB + 90° + 90° = 360°
        </p>
        <p className="text-amber-400 font-mono">angle AKB + angle AMB = 180°</p>
      </div>

      <p className="mt-4">
        By constructing angle <em>AKB</em> equal to the supplement of angle <em>DEF</em>, we ensure
        angle <em>AMB</em> = angle <em>DEF</em>.
      </p>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition I.13 (supplementary angles)</li>
        <li>Proposition I.23 (copying an angle)</li>
        <li>Proposition I.32 (angle sum of triangle)</li>
        <li>Proposition III.1 (finding the center)</li>
        <li>Proposition III.17 (drawing a tangent)</li>
        <li>Proposition III.18 (tangent perpendicular to radius)</li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Duality:</strong> IV.2 and IV.3 are "dual"
          constructions. In IV.2, the triangle's vertices are on the circle. In IV.3, the triangle's
          sides touch the circle.
        </p>
      </div>
    </LessonLayout>
  );
}
