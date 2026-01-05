import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section114() {
  return (
    <LessonLayout sectionId={114}>
      <Proposition
        title="Proposition IV.12"
        proof={
          <>
            <p>
              Let <em>ABCDE</em> be the given circle; it is required to circumscribe an equilateral
              and equiangular pentagon about the circle <em>ABCDE</em>.
            </p>
            <p className="mt-2">
              Let <em>A</em>, <em>B</em>, <em>C</em>, <em>D</em>, <em>E</em> be conceived to be the
              angular points of the inscribed pentagon, so that the circumferences <em>AB</em>,{' '}
              <em>BC</em>, <em>CD</em>, <em>DE</em>, <em>EA</em> are equal; [IV.11] through{' '}
              <em>A</em>, <em>B</em>, <em>C</em>, <em>D</em>, <em>E</em> let <em>GH</em>, <em>HK</em>
              , <em>KL</em>, <em>LM</em>, <em>MG</em> be drawn touching the circle; [III.17] let the
              center <em>F</em> of the circle <em>ABCDE</em> be taken [III.1], and let <em>FB</em>,{' '}
              <em>FK</em>, <em>FC</em>, <em>FL</em>, <em>FD</em> be joined.
            </p>
            <p className="mt-2">
              Then, since the straight line <em>KL</em> touches the circle <em>ABCDE</em> at{' '}
              <em>C</em>, and <em>FC</em> has been joined from the center <em>F</em> to the point of
              contact at <em>C</em>, therefore <em>FC</em> is perpendicular to <em>KL</em>; [III.18]
              therefore each of the angles at <em>C</em> is right.
            </p>
            <p className="mt-2">
              For the same reason the angles at the points <em>B</em>, <em>D</em> are also right.
            </p>
            <p className="mt-2">
              And, since the angle <em>FCK</em> is right, therefore the square on <em>FK</em> is
              equal to the squares on <em>FC</em>, <em>CK</em>. [I.47]
            </p>
            <p className="mt-2">
              For the same reason the square on <em>FK</em> is also equal to the squares on{' '}
              <em>FB</em>, <em>BK</em>.
            </p>
            <p className="mt-2">
              So that the squares on <em>FC</em>, <em>CK</em> are equal to the squares on <em>FB</em>
              , <em>BK</em>, of which the square on <em>FC</em> is equal to the square on{' '}
              <em>FB</em>; therefore the square on <em>CK</em> which remains is equal to the square
              on <em>BK</em>.
            </p>
            <p className="mt-2">
              Therefore <em>BK</em> is equal to <em>CK</em>.
            </p>
            <p className="mt-2">
              And, since <em>FB</em> is equal to <em>FC</em>, and <em>FK</em> common, the two sides{' '}
              <em>BF</em>, <em>FK</em> are equal to the two sides <em>CF</em>, <em>FK</em>; and the
              base <em>BK</em> equal to the base <em>CK</em>; therefore the angle <em>BFK</em> is
              equal to the angle <em>KFC</em>, [I.8] and the angle <em>BKF</em> to the angle{' '}
              <em>FKC</em>; therefore the angle <em>BFC</em> is double of the angle <em>KFC</em>,
              and the angle <em>BKC</em> of the angle <em>FKC</em>.
            </p>
            <p className="mt-2">
              For the same reason the angle <em>CFD</em> is also double of the angle <em>CFL</em>,
              and the angle <em>DLC</em> double of the angle <em>FLC</em>.
            </p>
            <p className="mt-2">
              Now, since the circumference <em>BC</em> is equal to <em>CD</em>, the angle{' '}
              <em>BFC</em> is also equal to the angle <em>CFD</em>. [III.27]
            </p>
            <p className="mt-2">
              And the angle <em>BFC</em> is double of the angle <em>KFC</em>, and the angle{' '}
              <em>DFC</em> of the angle <em>LFC</em>; therefore the angle <em>KFC</em> is also equal
              to the angle <em>LFC</em>.
            </p>
            <p className="mt-2">
              But the angle <em>FCK</em> is also equal to the angle <em>FCL</em>; therefore{' '}
              <em>FKC</em>, <em>FLC</em> are two triangles having two angles equal to two angles and
              one side equal to one side, namely <em>FC</em> which is common to them; therefore they
              will also have the remaining sides equal to the remaining sides, and the remaining
              angle to the remaining angle; [I.26] therefore the straight line <em>KC</em> is equal
              to <em>CL</em>, and the angle <em>FKC</em> to the angle <em>FLC</em>.
            </p>
            <p className="mt-2">
              And, since <em>KC</em> is equal to <em>CL</em>, therefore <em>KL</em> is double of{' '}
              <em>KC</em>.
            </p>
            <p className="mt-2">
              For the same reason it can be proved that <em>HK</em> is also double of <em>BK</em>.
            </p>
            <p className="mt-2">
              And <em>BK</em> is equal to <em>KC</em>; therefore <em>HK</em> is also equal to{' '}
              <em>KL</em>.
            </p>
            <p className="mt-2">
              Similarly each of the straight lines <em>GH</em>, <em>GM</em>, <em>ML</em> can also be
              proved equal to each of the straight lines <em>HK</em>, <em>KL</em>; therefore the
              pentagon <em>GHKLM</em> is equilateral.
            </p>
            <p className="mt-2 font-medium">
              I say next that it is also equiangular. [The proof continues showing all angles
              equal.] Therefore in the given circle an equilateral and equiangular pentagon has been
              circumscribed about it.
            </p>
          </>
        }
      >
        <p>About a given circle to circumscribe an equilateral and equiangular pentagon.</p>
      </Proposition>

      <h2>Analysis</h2>

      <p>
        This construction circumscribes a regular pentagon about a circle—the pentagon's sides are
        tangent to the circle.
      </p>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 300 300" className="w-72 h-72">
          {/* Circle */}
          <circle cx="150" cy="150" r="70" fill="none" stroke="#f59e0b" strokeWidth="2" />
          {/* Circumscribed pentagon */}
          <polygon
            points="150,35 260,115 220,260 80,260 40,115"
            fill="none"
            stroke="#22c55e"
            strokeWidth="2"
          />
          {/* Tangent points on circle (where circle touches pentagon sides) */}
          <circle cx="150" cy="80" r="3" fill="#9333ea" />
          <circle cx="210" cy="120" r="3" fill="#9333ea" />
          <circle cx="185" cy="210" r="3" fill="#9333ea" />
          <circle cx="115" cy="210" r="3" fill="#9333ea" />
          <circle cx="90" cy="120" r="3" fill="#9333ea" />
          {/* Center */}
          <circle cx="150" cy="150" r="3" fill="#ef4444" />
          {/* Radii to tangent points */}
          <line
            x1="150"
            y1="150"
            x2="150"
            y2="80"
            stroke="#3b82f6"
            strokeWidth="1"
            strokeDasharray="3"
          />
          {/* Labels */}
          <text x="150" y="25" fill="#22c55e" fontSize="11" textAnchor="middle">
            G
          </text>
          <text x="270" y="118" fill="#22c55e" fontSize="11">
            H
          </text>
          <text x="228" y="272" fill="#22c55e" fontSize="11">
            K
          </text>
          <text x="65" y="272" fill="#22c55e" fontSize="11">
            L
          </text>
          <text x="25" y="118" fill="#22c55e" fontSize="11">
            M
          </text>
          <text x="155" y="165" fill="#ef4444" fontSize="11">
            F
          </text>
          <text x="150" y="72" fill="#9333ea" fontSize="10" textAnchor="middle">
            A
          </text>
        </svg>
      </div>

      <h3>The Construction</h3>

      <ol className="list-decimal list-inside mt-4 space-y-2 text-dark-300">
        <li>First inscribe a regular pentagon in the circle [IV.11]</li>
        <li>At each vertex, draw a tangent line to the circle [III.17]</li>
        <li>Extend these tangents until adjacent ones meet</li>
        <li>
          The five meeting points form the circumscribed pentagon <em>GHKLM</em>
        </li>
      </ol>

      <h3 className="mt-6">Why It Works</h3>

      <p className="mt-2">
        The proof shows that all sides are equal by using the properties of tangent lines:
      </p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Tangent lines are perpendicular to radii at the point of tangency (III.18)</li>
        <li>Tangent segments from an external point to a circle are equal</li>
        <li>
          By congruent triangles (I.8, I.26), corresponding segments are equal
        </li>
        <li>Each side of the circumscribed pentagon equals twice a tangent segment</li>
      </ul>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <h4 className="text-amber-400 font-semibold mb-2">Duality</h4>
        <p className="text-dark-200">
          IV.11 and IV.12 are dual constructions. The inscribed pentagon's vertices lie on the
          circle; the circumscribed pentagon's sides are tangent to the circle.
        </p>
      </div>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition I.8 (SSS congruence)</li>
        <li>Proposition I.26 (AAS congruence)</li>
        <li>Proposition I.47 (Pythagorean theorem)</li>
        <li>Proposition III.1 (finding the center)</li>
        <li>Proposition III.17 (drawing a tangent)</li>
        <li>Proposition III.18 (tangent perpendicular to radius)</li>
        <li>Proposition III.27 (equal arcs have equal central angles)</li>
        <li>Proposition IV.11 (inscribed pentagon)</li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Note:</strong> This is the most complex construction in
          Book IV, requiring many previous propositions. The elegance lies in building on the
          inscribed pentagon to create the circumscribed one.
        </p>
      </div>
    </LessonLayout>
  );
}
