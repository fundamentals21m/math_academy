import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section106() {
  return (
    <LessonLayout sectionId={106}>
      <Proposition
        title="Proposition IV.4"
        proof={
          <>
            <p>
              Let <em>ABC</em> be the given triangle; it is required to inscribe a circle in the
              triangle <em>ABC</em>.
            </p>
            <p className="mt-2">
              Let the angles <em>ABC</em>, <em>ACB</em> be bisected by the straight lines <em>BD</em>
              , <em>CD</em> [I.9], and let these meet one another at the point <em>D</em>; from{' '}
              <em>D</em> let <em>DE</em>, <em>DF</em>, <em>DG</em> be drawn perpendicular to the
              straight lines <em>AB</em>, <em>BC</em>, <em>CA</em>. [I.12]
            </p>
            <p className="mt-2">
              Now, since the angle <em>ABD</em> is equal to the angle <em>CBD</em>, and the right
              angle <em>BED</em> is also equal to the right angle <em>BFD</em>, <em>EBD</em>,{' '}
              <em>FBD</em> are two triangles having two angles equal to two angles and one side equal
              to one side, namely that subtending one of the equal angles, which is <em>BD</em>{' '}
              common to the triangles; therefore they will also have the remaining sides equal to the
              remaining sides; [I.26] therefore <em>DE</em> is equal to <em>DF</em>.
            </p>
            <p className="mt-2">
              For the same reason <em>DG</em> is also equal to <em>DF</em>.
            </p>
            <p className="mt-2">
              Therefore the three straight lines <em>DE</em>, <em>DF</em>, <em>DG</em> are equal to
              one another; therefore the circle described with center <em>D</em> and radius one of
              the straight lines <em>DE</em>, <em>DF</em>, <em>DG</em> will pass also through the
              remaining points, and will touch the straight lines <em>AB</em>, <em>BC</em>,{' '}
              <em>CA</em>, because the angles at the points <em>E</em>, <em>F</em>, <em>G</em> are
              right.
            </p>
            <p className="mt-2 font-medium">
              Therefore a circle has been inscribed in the given triangle. Let it be called{' '}
              <em>EFG</em>.
            </p>
          </>
        }
      >
        <p>In a given triangle to inscribe a circle.</p>
      </Proposition>

      <h2>Analysis</h2>

      <p>
        This construction finds the <strong>incircle</strong> of a triangle—the largest circle that
        fits inside, tangent to all three sides. The center is called the <strong>incenter</strong>.
      </p>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 300 260" className="w-80 h-66">
          {/* Triangle ABC */}
          <polygon
            points="150,30 50,220 250,220"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="2"
          />
          {/* Angle bisectors */}
          <line
            x1="50"
            y1="220"
            x2="150"
            y2="135"
            stroke="#9333ea"
            strokeWidth="1"
            strokeDasharray="4"
          />
          <line
            x1="250"
            y1="220"
            x2="150"
            y2="135"
            stroke="#9333ea"
            strokeWidth="1"
            strokeDasharray="4"
          />
          <line
            x1="150"
            y1="30"
            x2="150"
            y2="135"
            stroke="#9333ea"
            strokeWidth="1"
            strokeDasharray="4"
          />
          {/* Incircle */}
          <circle cx="150" cy="150" r="45" fill="none" stroke="#f59e0b" strokeWidth="2" />
          {/* Incenter D */}
          <circle cx="150" cy="150" r="4" fill="#ef4444" />
          {/* Perpendiculars to sides */}
          <line
            x1="150"
            y1="150"
            x2="115"
            y2="105"
            stroke="#22c55e"
            strokeWidth="1"
            strokeDasharray="3"
          />
          <line
            x1="150"
            y1="150"
            x2="150"
            y2="195"
            stroke="#22c55e"
            strokeWidth="1"
            strokeDasharray="3"
          />
          <line
            x1="150"
            y1="150"
            x2="185"
            y2="105"
            stroke="#22c55e"
            strokeWidth="1"
            strokeDasharray="3"
          />
          {/* Tangent points */}
          <circle cx="115" cy="105" r="3" fill="#22c55e" />
          <circle cx="150" cy="195" r="3" fill="#22c55e" />
          <circle cx="185" cy="105" r="3" fill="#22c55e" />
          {/* Labels */}
          <text x="150" y="20" fill="#3b82f6" fontSize="11">
            A
          </text>
          <text x="35" y="225" fill="#3b82f6" fontSize="11">
            B
          </text>
          <text x="255" y="225" fill="#3b82f6" fontSize="11">
            C
          </text>
          <text x="155" y="145" fill="#ef4444" fontSize="11">
            D
          </text>
          <text x="100" y="100" fill="#22c55e" fontSize="10">
            E
          </text>
          <text x="152" y="210" fill="#22c55e" fontSize="10">
            F
          </text>
          <text x="190" y="100" fill="#22c55e" fontSize="10">
            G
          </text>
        </svg>
      </div>

      <h3>The Construction</h3>

      <ol className="list-decimal list-inside mt-4 space-y-2 text-dark-300">
        <li>
          Bisect angles <em>B</em> and <em>C</em> of the triangle [I.9]
        </li>
        <li>
          Let the bisectors meet at point <em>D</em> (the incenter)
        </li>
        <li>
          From <em>D</em>, draw perpendiculars <em>DE</em>, <em>DF</em>, <em>DG</em> to the three
          sides [I.12]
        </li>
        <li>
          Draw a circle with center <em>D</em> and radius <em>DE</em> (or <em>DF</em> or <em>DG</em>
          —they're all equal)
        </li>
      </ol>

      <h3 className="mt-6">Why All Three Perpendiculars Are Equal</h3>

      <p className="mt-2">
        Since <em>D</em> lies on the angle bisector from <em>B</em>, it is equidistant from sides{' '}
        <em>BA</em> and <em>BC</em> (by I.26, the triangles are congruent). So <em>DE</em> ={' '}
        <em>DF</em>.
      </p>

      <p className="mt-2">
        Similarly, since <em>D</em> lies on the angle bisector from <em>C</em>, we have <em>DF</em> ={' '}
        <em>DG</em>.
      </p>

      <p className="mt-2">
        Therefore <em>DE</em> = <em>DF</em> = <em>DG</em>, and a circle centered at <em>D</em> with
        this radius is tangent to all three sides.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <h4 className="text-amber-400 font-semibold mb-2">The Incenter Property</h4>
        <p className="text-dark-200">
          The incenter is the unique point equidistant from all three sides of a triangle. It is the
          intersection of the angle bisectors.
        </p>
      </div>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition I.9 (bisecting an angle)</li>
        <li>Proposition I.12 (perpendicular from a point)</li>
        <li>Proposition I.26 (AAS congruence)</li>
        <li>Proposition III.16 (perpendicular to radius is tangent)</li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Incircle Radius Formula:</strong> If the triangle has
          area <em>A</em> and semiperimeter <em>s</em>, the incircle radius is <em>r</em> ={' '}
          <em>A</em>/<em>s</em>. This elegant formula connects the incircle to the triangle's basic
          measurements.
        </p>
      </div>
    </LessonLayout>
  );
}
