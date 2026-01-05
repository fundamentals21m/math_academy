import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section116() {
  return (
    <LessonLayout sectionId={116}>
      <Proposition
        title="Proposition IV.14"
        proof={
          <>
            <p>
              Let <em>ABCDE</em> be the given pentagon, which is equilateral and equiangular; it is
              required to circumscribe a circle about the pentagon <em>ABCDE</em>.
            </p>
            <p className="mt-2">
              Let the angles <em>BCD</em>, <em>CDE</em> be bisected by the straight lines <em>CF</em>
              , <em>DF</em> respectively, [I.9] and from the point <em>F</em>, at which the straight
              lines meet, let the straight lines <em>FB</em>, <em>FA</em>, <em>FE</em> be joined.
            </p>
            <p className="mt-2">
              Then in manner similar to the preceding it can be proved that the angles <em>CBA</em>,{' '}
              <em>BAE</em>, <em>AED</em> have also been bisected by the straight lines <em>FB</em>,{' '}
              <em>FA</em>, <em>FE</em> respectively.
            </p>
            <p className="mt-2">
              Now, since the angle <em>BCD</em> is equal to the angle <em>CDE</em>, and the angle{' '}
              <em>FCD</em> is half of the angle <em>BCD</em>, and the angle <em>CDF</em> half of the
              angle <em>CDE</em>, therefore the angle <em>FCD</em> is also equal to the angle{' '}
              <em>CDF</em>, so that the side <em>FC</em> is also equal to the side <em>FD</em>. [I.6]
            </p>
            <p className="mt-2">
              Similarly it can be proved that each of the straight lines <em>FB</em>, <em>FA</em>,{' '}
              <em>FE</em> is also equal to each of the straight lines <em>FC</em>, <em>FD</em>;
              therefore the five straight lines <em>FA</em>, <em>FB</em>, <em>FC</em>, <em>FD</em>,{' '}
              <em>FE</em> are equal to one another.
            </p>
            <p className="mt-2 font-medium">
              Therefore the circle described with center <em>F</em> and radius one of the straight
              lines <em>FA</em>, <em>FB</em>, <em>FC</em>, <em>FD</em>, <em>FE</em> will pass also
              through the remaining points, and will have been circumscribed about the equilateral
              and equiangular pentagon.
            </p>
          </>
        }
      >
        <p>About a given equilateral and equiangular pentagon to circumscribe a circle.</p>
      </Proposition>

      <h2>Analysis</h2>

      <p>
        This construction finds the <strong>circumcircle</strong> of a regular pentagon—the unique
        circle passing through all five vertices.
      </p>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 280 280" className="w-72 h-72">
          {/* Circumscribed circle */}
          <circle cx="140" cy="140" r="95" fill="none" stroke="#f59e0b" strokeWidth="2" />
          {/* Pentagon */}
          <polygon
            points="140,45 231,106 196,220 84,220 49,106"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="2"
          />
          {/* Center F (circumcenter) */}
          <circle cx="140" cy="140" r="4" fill="#ef4444" />
          {/* Radii to vertices */}
          <line
            x1="140"
            y1="140"
            x2="140"
            y2="45"
            stroke="#22c55e"
            strokeWidth="1.5"
            strokeDasharray="3"
          />
          <line
            x1="140"
            y1="140"
            x2="231"
            y2="106"
            stroke="#22c55e"
            strokeWidth="1.5"
            strokeDasharray="3"
          />
          <line
            x1="140"
            y1="140"
            x2="196"
            y2="220"
            stroke="#22c55e"
            strokeWidth="1.5"
            strokeDasharray="3"
          />
          {/* Angle bisectors */}
          <line
            x1="196"
            y1="220"
            x2="140"
            y2="140"
            stroke="#9333ea"
            strokeWidth="1"
            strokeDasharray="4"
          />
          <line
            x1="84"
            y1="220"
            x2="140"
            y2="140"
            stroke="#9333ea"
            strokeWidth="1"
            strokeDasharray="4"
          />
          {/* Vertices */}
          <circle cx="140" cy="45" r="4" fill="#3b82f6" />
          <circle cx="231" cy="106" r="4" fill="#3b82f6" />
          <circle cx="196" cy="220" r="4" fill="#3b82f6" />
          <circle cx="84" cy="220" r="4" fill="#3b82f6" />
          <circle cx="49" cy="106" r="4" fill="#3b82f6" />
          {/* Labels */}
          <text x="140" y="35" fill="#3b82f6" fontSize="11" textAnchor="middle">
            A
          </text>
          <text x="241" y="110" fill="#3b82f6" fontSize="11">
            B
          </text>
          <text x="205" y="230" fill="#3b82f6" fontSize="11">
            C
          </text>
          <text x="70" y="230" fill="#3b82f6" fontSize="11">
            D
          </text>
          <text x="35" y="110" fill="#3b82f6" fontSize="11">
            E
          </text>
          <text x="145" y="155" fill="#ef4444" fontSize="11">
            F
          </text>
        </svg>
      </div>

      <h3>The Construction</h3>

      <ol className="list-decimal list-inside mt-4 space-y-2 text-dark-300">
        <li>Bisect two adjacent angles of the pentagon [I.9]</li>
        <li>
          Let <em>F</em> be where these bisectors meet (the circumcenter)
        </li>
        <li>
          Draw a circle with center <em>F</em> passing through any vertex
        </li>
      </ol>

      <h3 className="mt-6">Why It Works</h3>

      <p className="mt-2">The circumcenter is equidistant from all vertices because:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>All interior angles of a regular pentagon are equal (108° each)</li>
        <li>The angle bisectors divide each angle into two 54° parts</li>
        <li>
          In triangle <em>FCD</em>, angles <em>FCD</em> and <em>FDC</em> are equal (both 54°)
        </li>
        <li>
          By I.6, <em>FC</em> = <em>FD</em> (sides opposite equal angles)
        </li>
        <li>
          Similarly, all five distances <em>FA</em>, <em>FB</em>, <em>FC</em>, <em>FD</em>,{' '}
          <em>FE</em> are equal
        </li>
      </ul>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <h4 className="text-amber-400 font-semibold mb-2">Same Center</h4>
        <p className="text-dark-200">
          In a regular pentagon (and any regular polygon), the incircle and circumcircle share the
          same center. This point is equidistant from all vertices AND from all sides.
        </p>
      </div>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition I.6 (isosceles triangle theorem, converse)</li>
        <li>Proposition I.9 (bisecting an angle)</li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">IV.13 vs IV.14:</strong> Both constructions start the
          same way (bisecting angles), but IV.13 finds distances to <em>sides</em> for the incircle,
          while IV.14 finds distances to <em>vertices</em> for the circumcircle.
        </p>
      </div>
    </LessonLayout>
  );
}
