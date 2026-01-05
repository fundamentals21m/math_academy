import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section109() {
  return (
    <LessonLayout sectionId={109}>
      <Proposition
        title="Proposition IV.7"
        proof={
          <>
            <p>
              Let <em>ABCD</em> be the given circle; it is required to circumscribe a square about
              the circle <em>ABCD</em>.
            </p>
            <p className="mt-2">
              Let two diameters <em>AC</em>, <em>BD</em> of the circle <em>ABCD</em> be drawn at
              right angles to one another, and through the points <em>A</em>, <em>B</em>,{' '}
              <em>C</em>, <em>D</em> let <em>FG</em>, <em>GH</em>, <em>HK</em>, <em>KF</em> be drawn
              touching the circle <em>ABCD</em>. [III.17]
            </p>
            <p className="mt-2">
              Then, since <em>FG</em> touches the circle <em>ABCD</em>, and <em>EA</em> has been
              joined from the center <em>E</em> to the point of contact at <em>A</em>, therefore
              the angles at <em>A</em> are right. [III.18]
            </p>
            <p className="mt-2">
              For the same reason the angles at the points <em>B</em>, <em>C</em>, <em>D</em> are
              also right.
            </p>
            <p className="mt-2">
              Now, since the angle <em>AEB</em> is right, and the angle <em>EBG</em> is also right,
              therefore <em>GH</em> is parallel to <em>AC</em>. [I.28]
            </p>
            <p className="mt-2">
              For the same reason <em>AC</em> is also parallel to <em>FK</em>, so that <em>GH</em>{' '}
              is also parallel to <em>FK</em>. [I.30]
            </p>
            <p className="mt-2">
              Similarly we can prove that each of the straight lines <em>GF</em>, <em>HK</em> is
              parallel to <em>BED</em>.
            </p>
            <p className="mt-2">
              Therefore <em>GK</em>, <em>GC</em>, <em>AK</em>, <em>FB</em>, <em>BK</em> are
              parallelograms; therefore <em>GF</em> is equal to <em>HK</em>, and <em>GH</em> to{' '}
              <em>FK</em>. [I.34]
            </p>
            <p className="mt-2">
              And, since <em>AC</em> is equal to <em>BD</em>, and <em>AC</em> is also equal to each
              of the straight lines <em>GH</em>, <em>FK</em>, while <em>BD</em> is equal to each of
              the straight lines <em>GF</em>, <em>HK</em>, [I.34] therefore the quadrilateral{' '}
              <em>FGHK</em> is equilateral.
            </p>
            <p className="mt-2">
              I say next that it is also right-angled. For, since <em>GBEA</em> is a parallelogram,
              and the angle <em>AEB</em> is right, therefore the angle <em>AGB</em> is also right.
              [I.34]
            </p>
            <p className="mt-2">
              Similarly we can prove that the angles at <em>H</em>, <em>K</em>, <em>F</em> are also
              right.
            </p>
            <p className="mt-2 font-medium">
              Therefore <em>FGHK</em> is right-angled; and it was also proved equilateral; therefore
              it is a square; and it has been circumscribed about the circle <em>ABCD</em>.
            </p>
          </>
        }
      >
        <p>About a given circle to circumscribe a square.</p>
      </Proposition>

      <h2>Analysis</h2>

      <p>
        This construction circumscribes a square about a circle—the circle fits inside the square,
        touching all four sides.
      </p>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 280 280" className="w-72 h-72">
          {/* Circumscribed square */}
          <rect
            x="50"
            y="50"
            width="180"
            height="180"
            fill="none"
            stroke="#22c55e"
            strokeWidth="2"
          />
          {/* Circle */}
          <circle cx="140" cy="140" r="90" fill="none" stroke="#f59e0b" strokeWidth="2" />
          {/* Diameters */}
          <line
            x1="50"
            y1="140"
            x2="230"
            y2="140"
            stroke="#3b82f6"
            strokeWidth="1"
            strokeDasharray="4"
          />
          <line
            x1="140"
            y1="50"
            x2="140"
            y2="230"
            stroke="#3b82f6"
            strokeWidth="1"
            strokeDasharray="4"
          />
          {/* Center E */}
          <circle cx="140" cy="140" r="3" fill="#ef4444" />
          {/* Tangent points */}
          <circle cx="140" cy="50" r="3" fill="#9333ea" />
          <circle cx="230" cy="140" r="3" fill="#9333ea" />
          <circle cx="140" cy="230" r="3" fill="#9333ea" />
          <circle cx="50" cy="140" r="3" fill="#9333ea" />
          {/* Square vertices */}
          <circle cx="50" cy="50" r="3" fill="#22c55e" />
          <circle cx="230" cy="50" r="3" fill="#22c55e" />
          <circle cx="230" cy="230" r="3" fill="#22c55e" />
          <circle cx="50" cy="230" r="3" fill="#22c55e" />
          {/* Labels */}
          <text x="140" y="40" fill="#9333ea" fontSize="11" textAnchor="middle">
            A
          </text>
          <text x="240" y="145" fill="#9333ea" fontSize="11">
            B
          </text>
          <text x="140" y="250" fill="#9333ea" fontSize="11" textAnchor="middle">
            C
          </text>
          <text x="35" y="145" fill="#9333ea" fontSize="11">
            D
          </text>
          <text x="145" y="155" fill="#ef4444" fontSize="11">
            E
          </text>
          <text x="35" y="45" fill="#22c55e" fontSize="11">
            F
          </text>
          <text x="235" y="45" fill="#22c55e" fontSize="11">
            G
          </text>
          <text x="235" y="240" fill="#22c55e" fontSize="11">
            H
          </text>
          <text x="35" y="240" fill="#22c55e" fontSize="11">
            K
          </text>
        </svg>
      </div>

      <h3>The Construction</h3>

      <ol className="list-decimal list-inside mt-4 space-y-2 text-dark-300">
        <li>Draw two perpendicular diameters <em>AC</em> and <em>BD</em></li>
        <li>
          At each endpoint, draw a tangent line to the circle [III.17]
        </li>
        <li>Extend these tangents until they meet at corners</li>
        <li>
          The resulting quadrilateral <em>FGHK</em> is the circumscribed square
        </li>
      </ol>

      <h3 className="mt-6">Why It Works</h3>

      <p className="mt-2">
        The key insight is that tangent lines are perpendicular to the radius at the point of
        tangency (III.18). This creates right angles at <em>A</em>, <em>B</em>, <em>C</em>, and{' '}
        <em>D</em>.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <p className="text-dark-200">
          Since corresponding angles are equal, the tangent lines form two pairs of parallel lines
          (I.28, I.30). The resulting figure is a parallelogram, and since the angles are right, it
          is a rectangle. Since opposite sides come from equal diameters, it is a square.
        </p>
      </div>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition I.28 (alternate angles imply parallel)</li>
        <li>Proposition I.30 (lines parallel to same line are parallel)</li>
        <li>Proposition I.34 (opposite sides of parallelogram are equal)</li>
        <li>Proposition III.17 (drawing a tangent)</li>
        <li>Proposition III.18 (tangent perpendicular to radius)</li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Relationship:</strong> IV.6 and IV.7 are dual
          constructions. In IV.6, the square's vertices lie on the circle. In IV.7, the square's
          sides are tangent to the circle. The inscribed square has side <em>r√2</em>, while the
          circumscribed square has side <em>2r</em>.
        </p>
      </div>
    </LessonLayout>
  );
}
