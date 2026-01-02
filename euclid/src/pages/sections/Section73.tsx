import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section73() {
  return (
    <LessonLayout sectionId={73}>
      <Proposition
        title="Proposition III.9"
        proof={
          <>
            <p>
              Let <em>ABC</em> be a circle, let <em>D</em> be a point within it, and from{' '}
              <em>D</em> let more than two equal straight lines, namely <em>DA</em>, <em>DB</em>,{' '}
              <em>DC</em>, fall on the circle.
            </p>
            <p className="mt-2">
              I say that the point <em>D</em> taken is the center of the circle.
            </p>
            <p className="mt-2">
              For let <em>AB</em>, <em>BC</em> be joined and bisected at the points <em>E</em>,{' '}
              <em>F</em>; let <em>ED</em>, <em>FD</em> be joined and drawn through to the points{' '}
              <em>G</em>, <em>K</em>, <em>H</em>, <em>L</em>.
            </p>
            <p className="mt-2">
              Then, since <em>AE</em> is equal to <em>EB</em>, and <em>ED</em> is common, the two
              sides <em>AE</em>, <em>ED</em> are equal to the two sides <em>BE</em>, <em>ED</em>;
              and the base <em>DA</em> is equal to the base <em>DB</em>; therefore the angle{' '}
              <em>AED</em> is equal to the angle <em>BED</em>. [I. 8]
            </p>
            <p className="mt-2">
              Therefore each of the angles <em>AED</em>, <em>BED</em> is right. [I. Def. 10]
            </p>
            <p className="mt-2">
              Therefore <em>GK</em> cuts <em>AB</em> into two equal parts and at right angles.
            </p>
            <p className="mt-2">
              And since, if in a circle a straight line cut another straight line into two equal
              parts and at right angles, the center of the circle is on the cutting straight line,
              [III. 1, Por.] the center of the circle is on <em>GK</em>.
            </p>
            <p className="mt-2">
              For the same reason, the center of the circle <em>ABC</em> is also on <em>HL</em>.
            </p>
            <p className="mt-2">
              And the straight lines <em>GK</em>, <em>HL</em> have no other point common but the
              point <em>D</em>; therefore the point <em>D</em> is the center of the circle{' '}
              <em>ABC</em>.
            </p>
            <p className="mt-2 font-medium">
              Therefore, if a point be taken within a circle, and more than two equal straight
              lines fall from it upon the circle, the point taken is the center of the circle.
            </p>
          </>
        }
      >
        <p>
          If a point be taken within a circle, and more than two equal straight lines fall from
          the point on the circle, the point taken is the center of the circle.
        </p>
      </Proposition>

      <h2>Analysis</h2>

      <p>
        This proposition characterizes the center: it's the <strong>only</strong> point inside a
        circle from which <em>three or more</em> equal lines can be drawn to the circumference.
      </p>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 250 250" className="w-64 h-64">
          {/* Circle */}
          <circle cx="125" cy="125" r="80" fill="none" stroke="#f59e0b" strokeWidth="2" />
          {/* Center D */}
          <circle cx="125" cy="125" r="4" fill="#ef4444" />
          {/* Points on circle */}
          <circle cx="125" cy="45" r="3" fill="#3b82f6" />
          <circle cx="55" cy="160" r="3" fill="#3b82f6" />
          <circle cx="195" cy="160" r="3" fill="#3b82f6" />
          {/* Equal lines (radii) */}
          <line x1="125" y1="125" x2="125" y2="45" stroke="#22c55e" strokeWidth="1.5" />
          <line x1="125" y1="125" x2="55" y2="160" stroke="#22c55e" strokeWidth="1.5" />
          <line x1="125" y1="125" x2="195" y2="160" stroke="#22c55e" strokeWidth="1.5" />
          {/* Labels */}
          <text x="130" y="120" fill="#ef4444" fontSize="12">D</text>
          <text x="120" y="40" fill="#3b82f6" fontSize="12">A</text>
          <text x="45" y="170" fill="#3b82f6" fontSize="12">B</text>
          <text x="200" y="170" fill="#3b82f6" fontSize="12">C</text>
          {/* Equal marks */}
          <text x="105" y="85" fill="#22c55e" fontSize="10">r</text>
          <text x="80" y="155" fill="#22c55e" fontSize="10">r</text>
          <text x="165" y="155" fill="#22c55e" fontSize="10">r</text>
        </svg>
      </div>

      <h3>Why Only the Center?</h3>

      <p>
        The proof uses perpendicular bisectors. If <em>DA</em> = <em>DB</em> = <em>DC</em>, then:
      </p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li><em>D</em> lies on the perpendicular bisector of chord <em>AB</em></li>
        <li><em>D</em> lies on the perpendicular bisector of chord <em>BC</em></li>
      </ul>

      <p className="mt-4">
        By III.1 (and its corollary), the perpendicular bisector of any chord passes through the
        center. Since <em>D</em> lies on two such perpendicular bisectors, and these bisectors
        intersect only at the center, <em>D</em> must be the center.
      </p>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 250 250" className="w-64 h-64">
          {/* Circle */}
          <circle cx="125" cy="125" r="80" fill="none" stroke="#f59e0b" strokeWidth="2" />
          {/* Points A, B, C */}
          <circle cx="125" cy="45" r="3" fill="#3b82f6" />
          <circle cx="55" cy="160" r="3" fill="#3b82f6" />
          <circle cx="195" cy="160" r="3" fill="#3b82f6" />
          {/* Chords AB and BC */}
          <line x1="125" y1="45" x2="55" y2="160" stroke="#6b7280" strokeWidth="1" />
          <line x1="55" y1="160" x2="195" y2="160" stroke="#6b7280" strokeWidth="1" />
          {/* Perpendicular bisector of AB */}
          <line x1="50" y1="70" x2="180" y2="160" stroke="#22c55e" strokeWidth="1.5" strokeDasharray="4" />
          {/* Perpendicular bisector of BC */}
          <line x1="125" y1="80" x2="125" y2="200" stroke="#22c55e" strokeWidth="1.5" strokeDasharray="4" />
          {/* Center D */}
          <circle cx="125" cy="125" r="4" fill="#ef4444" />
          {/* Labels */}
          <text x="130" y="120" fill="#ef4444" fontSize="12">D</text>
          <text x="120" y="40" fill="#3b82f6" fontSize="12">A</text>
          <text x="45" y="170" fill="#3b82f6" fontSize="12">B</text>
          <text x="200" y="170" fill="#3b82f6" fontSize="12">C</text>
        </svg>
      </div>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition I.8 (SSS congruence)</li>
        <li>Proposition III.1 and its corollary (perpendicular bisector passes through center)</li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Note on "More Than Two":</strong> From any point
          (including non-center points), exactly two equal lines can be drawn to the circle—they're
          symmetric about the line through the point and center. Only the center allows{' '}
          <em>more than two</em> (in fact, infinitely many—every radius).
        </p>
      </div>
    </LessonLayout>
  );
}
