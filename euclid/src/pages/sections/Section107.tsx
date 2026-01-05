import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section107() {
  return (
    <LessonLayout sectionId={107}>
      <Proposition
        title="Proposition IV.5"
        proof={
          <>
            <p>
              Let <em>ABC</em> be the given triangle; it is required to circumscribe a circle about
              the triangle <em>ABC</em>.
            </p>
            <p className="mt-2">
              Let the straight lines <em>AB</em>, <em>AC</em> be bisected at the points <em>D</em>,{' '}
              <em>E</em> [I.10], and from the points <em>D</em>, <em>E</em> let <em>DF</em>,{' '}
              <em>EF</em> be drawn at right angles to <em>AB</em>, <em>AC</em>; they will then meet
              within the triangle <em>ABC</em>, or on the straight line <em>BC</em>, or outside{' '}
              <em>BC</em>.
            </p>
            <p className="mt-2">
              First let them meet within at <em>F</em>, and let <em>FB</em>, <em>FC</em>, <em>FA</em>{' '}
              be joined.
            </p>
            <p className="mt-2">
              Then, since <em>AD</em> is equal to <em>DB</em>, and <em>DF</em> is common and at right
              angles, therefore the base <em>AF</em> is equal to the base <em>FB</em>. [I.4]
            </p>
            <p className="mt-2">
              Similarly we can prove that <em>CF</em> is also equal to <em>AF</em>; so that{' '}
              <em>FB</em> is also equal to <em>FC</em>; therefore the three straight lines{' '}
              <em>FA</em>, <em>FB</em>, <em>FC</em> are equal to one another.
            </p>
            <p className="mt-2">
              Therefore the circle described with center <em>F</em> and radius one of the straight
              lines <em>FA</em>, <em>FB</em>, <em>FC</em> will pass also through the remaining
              points, and the circle will have been circumscribed about the triangle <em>ABC</em>.
            </p>
            <p className="mt-2 font-medium">
              Therefore about the given triangle a circle has been circumscribed.
            </p>
          </>
        }
      >
        <p>About a given triangle to circumscribe a circle.</p>
      </Proposition>

      <h2>Analysis</h2>

      <p>
        This construction finds the <strong>circumcircle</strong> of a triangle—the unique circle
        passing through all three vertices. The center is called the <strong>circumcenter</strong>.
      </p>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 300 280" className="w-80 h-72">
          {/* Circumcircle */}
          <circle cx="150" cy="130" r="90" fill="none" stroke="#f59e0b" strokeWidth="2" />
          {/* Triangle ABC */}
          <polygon points="150,40 70,200 230,200" fill="none" stroke="#3b82f6" strokeWidth="2" />
          {/* Perpendicular bisectors */}
          <line
            x1="110"
            y1="120"
            x2="150"
            y2="120"
            stroke="#9333ea"
            strokeWidth="1"
            strokeDasharray="4"
          />
          <line
            x1="190"
            y1="120"
            x2="150"
            y2="120"
            stroke="#9333ea"
            strokeWidth="1"
            strokeDasharray="4"
          />
          <line
            x1="150"
            y1="200"
            x2="150"
            y2="120"
            stroke="#9333ea"
            strokeWidth="1"
            strokeDasharray="4"
          />
          {/* Circumcenter F */}
          <circle cx="150" cy="120" r="4" fill="#ef4444" />
          {/* Radii to vertices */}
          <line
            x1="150"
            y1="120"
            x2="150"
            y2="40"
            stroke="#22c55e"
            strokeWidth="1"
            strokeDasharray="3"
          />
          <line
            x1="150"
            y1="120"
            x2="70"
            y2="200"
            stroke="#22c55e"
            strokeWidth="1"
            strokeDasharray="3"
          />
          <line
            x1="150"
            y1="120"
            x2="230"
            y2="200"
            stroke="#22c55e"
            strokeWidth="1"
            strokeDasharray="3"
          />
          {/* Midpoints D, E */}
          <circle cx="110" cy="120" r="3" fill="#9333ea" />
          <circle cx="190" cy="120" r="3" fill="#9333ea" />
          <circle cx="150" cy="200" r="3" fill="#9333ea" />
          {/* Vertices */}
          <circle cx="150" cy="40" r="3" fill="#3b82f6" />
          <circle cx="70" cy="200" r="3" fill="#3b82f6" />
          <circle cx="230" cy="200" r="3" fill="#3b82f6" />
          {/* Labels */}
          <text x="150" y="30" fill="#3b82f6" fontSize="11">
            A
          </text>
          <text x="55" y="210" fill="#3b82f6" fontSize="11">
            B
          </text>
          <text x="235" y="210" fill="#3b82f6" fontSize="11">
            C
          </text>
          <text x="155" y="115" fill="#ef4444" fontSize="11">
            F
          </text>
          <text x="95" y="115" fill="#9333ea" fontSize="10">
            D
          </text>
          <text x="195" y="115" fill="#9333ea" fontSize="10">
            E
          </text>
        </svg>
      </div>

      <h3>The Construction</h3>

      <ol className="list-decimal list-inside mt-4 space-y-2 text-dark-300">
        <li>
          Bisect sides <em>AB</em> and <em>AC</em> at points <em>D</em> and <em>E</em> [I.10]
        </li>
        <li>
          Draw perpendiculars from <em>D</em> and <em>E</em> to these sides [I.11]
        </li>
        <li>
          Let these perpendicular bisectors meet at point <em>F</em> (the circumcenter)
        </li>
        <li>
          Draw a circle with center <em>F</em> and radius <em>FA</em> (or <em>FB</em> or{' '}
          <em>FC</em>—they're all equal)
        </li>
      </ol>

      <h3 className="mt-6">Why FA = FB = FC</h3>

      <p className="mt-2">
        Since <em>F</em> lies on the perpendicular bisector of <em>AB</em>, by SAS congruence (I.4),{' '}
        <em>FA</em> = <em>FB</em>.
      </p>

      <p className="mt-2">
        Similarly, since <em>F</em> lies on the perpendicular bisector of <em>AC</em>, we have{' '}
        <em>FA</em> = <em>FC</em>.
      </p>

      <p className="mt-2">
        Therefore <em>FA</em> = <em>FB</em> = <em>FC</em>, and a circle centered at <em>F</em> passes
        through all three vertices.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <h4 className="text-amber-400 font-semibold mb-2">The Circumcenter Property</h4>
        <p className="text-dark-200">
          The circumcenter is the unique point equidistant from all three vertices. It is the
          intersection of the perpendicular bisectors of the sides.
        </p>
      </div>

      <h3 className="mt-6">Where Does F Lie?</h3>

      <p className="mt-2">Euclid notes that F may be:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>
          <strong>Inside</strong> the triangle (if all angles are acute)
        </li>
        <li>
          <strong>On side BC</strong> (if angle A is a right angle—then F is the midpoint of the
          hypotenuse)
        </li>
        <li>
          <strong>Outside</strong> the triangle (if angle A is obtuse)
        </li>
      </ul>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition I.4 (SAS congruence)</li>
        <li>Proposition I.10 (bisecting a line)</li>
        <li>Proposition I.11 (perpendicular at a point)</li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">IV.4 vs IV.5:</strong> IV.4 (incircle) uses angle
          bisectors and finds the center equidistant from <em>sides</em>. IV.5 (circumcircle) uses
          perpendicular bisectors and finds the center equidistant from <em>vertices</em>.
        </p>
      </div>
    </LessonLayout>
  );
}
