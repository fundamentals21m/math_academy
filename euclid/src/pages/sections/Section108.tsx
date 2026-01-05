import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section108() {
  return (
    <LessonLayout sectionId={108}>
      <Proposition
        title="Proposition IV.6"
        proof={
          <>
            <p>
              Let <em>ABCD</em> be the given circle; it is required to inscribe a square in the
              circle <em>ABCD</em>.
            </p>
            <p className="mt-2">
              Let two diameters <em>AC</em>, <em>BD</em> of the circle <em>ABCD</em> be drawn at
              right angles to one another, and let <em>AB</em>, <em>BC</em>, <em>CD</em>,{' '}
              <em>DA</em> be joined.
            </p>
            <p className="mt-2">
              Then, since <em>BE</em> is equal to <em>ED</em>, for <em>E</em> is the center, and{' '}
              <em>EA</em> is common and at right angles, the base <em>AB</em> is equal to the base{' '}
              <em>AD</em>. [I.4]
            </p>
            <p className="mt-2">
              For the same reason each of the straight lines <em>BC</em>, <em>CD</em> is also equal
              to each of the straight lines <em>AB</em>, <em>AD</em>; therefore the quadrilateral{' '}
              <em>ABCD</em> is equilateral.
            </p>
            <p className="mt-2">
              I say next that it is also right-angled. For, since the straight line <em>BD</em> is
              a diameter of the circle <em>ABCD</em>, therefore <em>BAD</em> is a semicircle;
              therefore the angle <em>BAD</em> is right. [III.31]
            </p>
            <p className="mt-2">
              For the same reason each of the angles <em>ABC</em>, <em>BCD</em>, <em>CDA</em> is
              also right; therefore the quadrilateral <em>ABCD</em> is right-angled.
            </p>
            <p className="mt-2 font-medium">
              Therefore a square has been inscribed in the given circle.
            </p>
          </>
        }
      >
        <p>In a given circle to inscribe a square.</p>
      </Proposition>

      <h2>Analysis</h2>

      <p>
        This elegant construction inscribes a square in a circle using perpendicular diameters. The
        endpoints of these diameters become the vertices of the square.
      </p>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 280 280" className="w-72 h-72">
          {/* Circle */}
          <circle cx="140" cy="140" r="90" fill="none" stroke="#f59e0b" strokeWidth="2" />
          {/* Perpendicular diameters */}
          <line x1="50" y1="140" x2="230" y2="140" stroke="#3b82f6" strokeWidth="1.5" />
          <line x1="140" y1="50" x2="140" y2="230" stroke="#3b82f6" strokeWidth="1.5" />
          {/* Inscribed square */}
          <polygon
            points="140,50 230,140 140,230 50,140"
            fill="none"
            stroke="#22c55e"
            strokeWidth="2"
          />
          {/* Center E */}
          <circle cx="140" cy="140" r="3" fill="#ef4444" />
          {/* Vertices */}
          <circle cx="140" cy="50" r="4" fill="#22c55e" />
          <circle cx="230" cy="140" r="4" fill="#22c55e" />
          <circle cx="140" cy="230" r="4" fill="#22c55e" />
          <circle cx="50" cy="140" r="4" fill="#22c55e" />
          {/* Labels */}
          <text x="140" y="40" fill="#22c55e" fontSize="11" textAnchor="middle">
            A
          </text>
          <text x="240" y="145" fill="#22c55e" fontSize="11">
            B
          </text>
          <text x="140" y="250" fill="#22c55e" fontSize="11" textAnchor="middle">
            C
          </text>
          <text x="35" y="145" fill="#22c55e" fontSize="11">
            D
          </text>
          <text x="145" y="155" fill="#ef4444" fontSize="11">
            E
          </text>
        </svg>
      </div>

      <h3>The Construction</h3>

      <ol className="list-decimal list-inside mt-4 space-y-2 text-dark-300">
        <li>Draw any diameter of the circle</li>
        <li>Draw a second diameter perpendicular to the first [I.11]</li>
        <li>Join the four endpoints of the diameters</li>
        <li>The resulting quadrilateral is a square</li>
      </ol>

      <h3 className="mt-6">Why It Works</h3>

      <p className="mt-2">The figure is equilateral because:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>All radii are equal</li>
        <li>By SAS congruence (I.4), triangles formed at the center are congruent</li>
        <li>Therefore all four sides of the quadrilateral are equal</li>
      </ul>

      <p className="mt-4">The figure is right-angled because:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Each angle is inscribed in a semicircle</li>
        <li>By III.31, an angle in a semicircle is a right angle</li>
        <li>Therefore all four angles are right angles</li>
      </ul>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <h4 className="text-amber-400 font-semibold mb-2">Side Length</h4>
        <p className="text-dark-200">
          If the circle has radius <em>r</em>, the square's side length is <em>r√2</em>, and its
          diagonal (the diameter) is <em>2r</em>.
        </p>
      </div>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition I.4 (SAS congruence)</li>
        <li>Proposition I.11 (perpendicular at a point)</li>
        <li>Proposition III.31 (angle in semicircle is right)</li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Historical Note:</strong> This construction was
          well-known to the Babylonians and Egyptians long before Euclid, but he provides the first
          rigorous proof of why it works.
        </p>
      </div>
    </LessonLayout>
  );
}
