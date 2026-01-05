import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section110() {
  return (
    <LessonLayout sectionId={110}>
      <Proposition
        title="Proposition IV.8"
        proof={
          <>
            <p>
              Let <em>ABCD</em> be the given square; it is required to inscribe a circle in the
              given square <em>ABCD</em>.
            </p>
            <p className="mt-2">
              Let the straight lines <em>AD</em>, <em>AB</em> be bisected at the points <em>E</em>,{' '}
              <em>F</em> respectively [I.10], through <em>E</em> let <em>EH</em> be drawn parallel
              to either <em>AB</em> or <em>CD</em>, and through <em>F</em> let <em>FK</em> be drawn
              parallel to either <em>AD</em> or <em>BC</em>; [I.31] therefore each of the figures{' '}
              <em>AK</em>, <em>KB</em>, <em>AH</em>, <em>HD</em>, <em>AG</em>, <em>GC</em>,{' '}
              <em>BG</em>, <em>GD</em> is a parallelogram, and their opposite sides are evidently
              equal. [I.34]
            </p>
            <p className="mt-2">
              Now, since <em>AD</em> is equal to <em>AB</em>, and <em>AE</em> is half of <em>AD</em>
              , and <em>AF</em> half of <em>AB</em>, therefore <em>AE</em> is equal to <em>AF</em>,
              so that the opposite sides are also equal; therefore <em>FG</em> is equal to{' '}
              <em>GE</em>.
            </p>
            <p className="mt-2">
              Similarly we can prove that each of the straight lines <em>GH</em>, <em>GK</em> is
              equal to each of the straight lines <em>FG</em>, <em>GE</em>; therefore the four
              straight lines <em>GE</em>, <em>GF</em>, <em>GH</em>, <em>GK</em> are equal to one
              another.
            </p>
            <p className="mt-2">
              Therefore the circle described with center <em>G</em> and radius one of the straight
              lines <em>GE</em>, <em>GF</em>, <em>GH</em>, <em>GK</em> will pass also through the
              remaining points; and it will touch the straight lines <em>AB</em>, <em>BC</em>,{' '}
              <em>CD</em>, <em>DA</em>, because the angles at <em>E</em>, <em>F</em>, <em>H</em>,{' '}
              <em>K</em> are right.
            </p>
            <p className="mt-2 font-medium">
              Therefore a circle has been inscribed in the given square.
            </p>
          </>
        }
      >
        <p>In a given square to inscribe a circle.</p>
      </Proposition>

      <h2>Analysis</h2>

      <p>
        This construction finds the largest circle that fits inside a square—the{' '}
        <strong>inscribed circle</strong> or <strong>incircle</strong> of the square.
      </p>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 280 280" className="w-72 h-72">
          {/* Square */}
          <rect
            x="50"
            y="50"
            width="180"
            height="180"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="2"
          />
          {/* Inscribed circle */}
          <circle cx="140" cy="140" r="90" fill="none" stroke="#f59e0b" strokeWidth="2" />
          {/* Center lines */}
          <line
            x1="50"
            y1="140"
            x2="230"
            y2="140"
            stroke="#9333ea"
            strokeWidth="1"
            strokeDasharray="4"
          />
          <line
            x1="140"
            y1="50"
            x2="140"
            y2="230"
            stroke="#9333ea"
            strokeWidth="1"
            strokeDasharray="4"
          />
          {/* Center G */}
          <circle cx="140" cy="140" r="4" fill="#ef4444" />
          {/* Midpoints */}
          <circle cx="50" cy="140" r="3" fill="#22c55e" />
          <circle cx="230" cy="140" r="3" fill="#22c55e" />
          <circle cx="140" cy="50" r="3" fill="#22c55e" />
          <circle cx="140" cy="230" r="3" fill="#22c55e" />
          {/* Radii */}
          <line
            x1="140"
            y1="140"
            x2="140"
            y2="50"
            stroke="#22c55e"
            strokeWidth="1.5"
            strokeDasharray="3"
          />
          {/* Labels */}
          <text x="40" y="45" fill="#3b82f6" fontSize="11">
            A
          </text>
          <text x="235" y="45" fill="#3b82f6" fontSize="11">
            B
          </text>
          <text x="235" y="240" fill="#3b82f6" fontSize="11">
            C
          </text>
          <text x="40" y="240" fill="#3b82f6" fontSize="11">
            D
          </text>
          <text x="145" y="155" fill="#ef4444" fontSize="11">
            G
          </text>
          <text x="35" y="145" fill="#22c55e" fontSize="10">
            E
          </text>
          <text x="145" y="45" fill="#22c55e" fontSize="10">
            F
          </text>
          <text x="235" y="145" fill="#22c55e" fontSize="10">
            H
          </text>
          <text x="145" y="248" fill="#22c55e" fontSize="10">
            K
          </text>
        </svg>
      </div>

      <h3>The Construction</h3>

      <ol className="list-decimal list-inside mt-4 space-y-2 text-dark-300">
        <li>
          Bisect two adjacent sides of the square at <em>E</em> and <em>F</em> [I.10]
        </li>
        <li>
          Through <em>E</em>, draw a line parallel to the other pair of sides [I.31]
        </li>
        <li>
          Through <em>F</em>, draw a line parallel to the first pair of sides [I.31]
        </li>
        <li>
          Let <em>G</em> be where these lines meet (the center of the square)
        </li>
        <li>
          Draw a circle with center <em>G</em> and radius <em>GE</em>
        </li>
      </ol>

      <h3 className="mt-6">Why It Works</h3>

      <p className="mt-2">
        The construction creates four small parallelograms inside the square. Since the square has
        equal sides and we bisected them:
      </p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>
          <em>AE</em> = <em>AF</em> (half of equal sides)
        </li>
        <li>
          By properties of parallelograms, <em>GE</em> = <em>GF</em> = <em>GH</em> = <em>GK</em>
        </li>
        <li>These four equal segments are radii of the inscribed circle</li>
        <li>The circle touches each side at right angles (tangent points)</li>
      </ul>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <h4 className="text-amber-400 font-semibold mb-2">Radius</h4>
        <p className="text-dark-200">
          If the square has side length <em>s</em>, the inscribed circle has radius <em>s/2</em>.
        </p>
      </div>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition I.10 (bisecting a line)</li>
        <li>Proposition I.31 (drawing a parallel)</li>
        <li>Proposition I.34 (opposite sides of parallelogram equal)</li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Note:</strong> The center <em>G</em> of the inscribed
          circle is also the center of the square. This is where the diagonals and the perpendicular
          bisectors of the sides all meet.
        </p>
      </div>
    </LessonLayout>
  );
}
