import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section115() {
  return (
    <LessonLayout sectionId={115}>
      <Proposition
        title="Proposition IV.13"
        proof={
          <>
            <p>
              Let <em>ABCDE</em> be the given pentagon, which is equilateral and equiangular; it is
              required to inscribe a circle in the pentagon <em>ABCDE</em>.
            </p>
            <p className="mt-2">
              For let the angles <em>BCD</em>, <em>CDE</em> be bisected by the straight lines{' '}
              <em>CF</em>, <em>DF</em> respectively; [I.9] and from the point <em>F</em>, at which
              the straight lines <em>CF</em>, <em>DF</em> meet one another, let the straight lines{' '}
              <em>FB</em>, <em>FA</em>, <em>FE</em> be joined.
            </p>
            <p className="mt-2">
              Then, since <em>BC</em> is equal to <em>CD</em>, and <em>CF</em> common, the two sides{' '}
              <em>BC</em>, <em>CF</em> are equal to the two sides <em>DC</em>, <em>CF</em>; and the
              angle <em>BCF</em> is equal to the angle <em>DCF</em>; therefore the base <em>BF</em>{' '}
              is equal to the base <em>DF</em>, and the triangle <em>BCF</em> is equal to the
              triangle <em>DCF</em>, and the remaining angles will be equal to the remaining angles,
              namely those which the equal sides subtend; [I.4] therefore the angle <em>CBF</em> is
              equal to the angle <em>CDF</em>.
            </p>
            <p className="mt-2">
              And, since the angle <em>CDE</em> is double of the angle <em>CDF</em>, and the angle{' '}
              <em>CDE</em> is equal to the angle <em>ABC</em>, while the angle <em>CDF</em> is equal
              to the angle <em>CBF</em>; therefore the angle <em>CBA</em> is also double of the
              angle <em>CBF</em>; therefore the angle <em>ABF</em> is equal to the angle{' '}
              <em>FBC</em>; therefore the angle <em>ABC</em> has been bisected by the straight line{' '}
              <em>BF</em>.
            </p>
            <p className="mt-2">
              Similarly it can be proved that the angles <em>BAE</em>, <em>AED</em> have also been
              bisected by the straight lines <em>FA</em>, <em>FE</em> respectively.
            </p>
            <p className="mt-2">
              Now let <em>FG</em>, <em>FH</em>, <em>FK</em>, <em>FL</em>, <em>FM</em> be drawn from
              the point <em>F</em> perpendicular to the straight lines <em>AB</em>, <em>BC</em>,{' '}
              <em>CD</em>, <em>DE</em>, <em>EA</em>. [I.12]
            </p>
            <p className="mt-2">
              Then, since the angle <em>HCF</em> is equal to the angle <em>KCF</em>, and the right
              angle <em>FHC</em> is also equal to the angle <em>FKC</em>, <em>FHC</em>, <em>FKC</em>{' '}
              are two triangles having two angles equal to two angles and one side equal to one
              side, namely <em>FC</em> which is common to them; therefore they will also have the
              remaining sides equal to the remaining sides; [I.26] therefore the perpendicular{' '}
              <em>FH</em> is equal to the perpendicular <em>FK</em>.
            </p>
            <p className="mt-2">
              Similarly it can be proved that each of the straight lines <em>FL</em>, <em>FM</em>,{' '}
              <em>FG</em> is also equal to each of the straight lines <em>FH</em>, <em>FK</em>;
              therefore the five straight lines <em>FG</em>, <em>FH</em>, <em>FK</em>, <em>FL</em>,{' '}
              <em>FM</em> are equal to one another.
            </p>
            <p className="mt-2 font-medium">
              Therefore the circle described with center <em>F</em> and radius one of the straight
              lines <em>FG</em>, <em>FH</em>, <em>FK</em>, <em>FL</em>, <em>FM</em> will pass also
              through the remaining points, and will touch the straight lines <em>AB</em>,{' '}
              <em>BC</em>, <em>CD</em>, <em>DE</em>, <em>EA</em>, because the angles at the points{' '}
              <em>G</em>, <em>H</em>, <em>K</em>, <em>L</em>, <em>M</em> are right.
            </p>
          </>
        }
      >
        <p>In a given equilateral and equiangular pentagon to inscribe a circle.</p>
      </Proposition>

      <h2>Analysis</h2>

      <p>
        This construction finds the <strong>incircle</strong> of a regular pentagon—the largest
        circle that fits inside, tangent to all five sides.
      </p>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 280 280" className="w-72 h-72">
          {/* Pentagon */}
          <polygon
            points="140,30 245,95 205,230 75,230 35,95"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="2"
          />
          {/* Inscribed circle */}
          <circle cx="140" cy="138" r="62" fill="none" stroke="#f59e0b" strokeWidth="2" />
          {/* Center F (incenter) */}
          <circle cx="140" cy="138" r="4" fill="#ef4444" />
          {/* Angle bisectors */}
          <line
            x1="245"
            y1="95"
            x2="140"
            y2="138"
            stroke="#9333ea"
            strokeWidth="1"
            strokeDasharray="4"
          />
          <line
            x1="205"
            y1="230"
            x2="140"
            y2="138"
            stroke="#9333ea"
            strokeWidth="1"
            strokeDasharray="4"
          />
          {/* Perpendiculars to sides (radii) */}
          <line
            x1="140"
            y1="138"
            x2="140"
            y2="76"
            stroke="#22c55e"
            strokeWidth="1.5"
            strokeDasharray="3"
          />
          {/* Tangent points */}
          <circle cx="140" cy="76" r="3" fill="#22c55e" />
          <circle cx="195" cy="105" r="3" fill="#22c55e" />
          <circle cx="182" cy="190" r="3" fill="#22c55e" />
          <circle cx="98" cy="190" r="3" fill="#22c55e" />
          <circle cx="85" cy="105" r="3" fill="#22c55e" />
          {/* Labels */}
          <text x="140" y="20" fill="#3b82f6" fontSize="11" textAnchor="middle">
            A
          </text>
          <text x="255" y="100" fill="#3b82f6" fontSize="11">
            B
          </text>
          <text x="215" y="240" fill="#3b82f6" fontSize="11">
            C
          </text>
          <text x="60" y="240" fill="#3b82f6" fontSize="11">
            D
          </text>
          <text x="22" y="100" fill="#3b82f6" fontSize="11">
            E
          </text>
          <text x="145" y="150" fill="#ef4444" fontSize="11">
            F
          </text>
        </svg>
      </div>

      <h3>The Construction</h3>

      <ol className="list-decimal list-inside mt-4 space-y-2 text-dark-300">
        <li>Bisect two adjacent angles of the pentagon [I.9]</li>
        <li>
          Let <em>F</em> be where these bisectors meet (the incenter)
        </li>
        <li>
          From <em>F</em>, draw perpendiculars to all five sides [I.12]
        </li>
        <li>
          Draw a circle with center <em>F</em> and radius equal to any perpendicular
        </li>
      </ol>

      <h3 className="mt-6">Why It Works</h3>

      <p className="mt-2">
        The incenter <em>F</em> is equidistant from all five sides because:
      </p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>
          Points on an angle bisector are equidistant from the two sides of the angle
        </li>
        <li>
          <em>F</em> lies on all five angle bisectors (proved by showing the bisectors all meet at
          one point)
        </li>
        <li>
          Therefore all five perpendicular distances from <em>F</em> to the sides are equal
        </li>
        <li>These equal distances are the radius of the incircle</li>
      </ul>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <h4 className="text-amber-400 font-semibold mb-2">The Incenter</h4>
        <p className="text-dark-200">
          The incenter is the unique point equidistant from all sides. In a regular polygon, it
          coincides with the center of the polygon.
        </p>
      </div>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition I.4 (SAS congruence)</li>
        <li>Proposition I.9 (bisecting an angle)</li>
        <li>Proposition I.12 (perpendicular from a point)</li>
        <li>Proposition I.26 (AAS congruence)</li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Generalization:</strong> This same method works for any
          regular polygon: bisect two angles, find the intersection, and draw perpendiculars to the
          sides. The angle bisectors of any regular polygon all meet at a single point (the center).
        </p>
      </div>
    </LessonLayout>
  );
}
