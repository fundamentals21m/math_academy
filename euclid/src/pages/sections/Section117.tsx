import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section117() {
  return (
    <LessonLayout sectionId={117}>
      <Proposition
        title="Proposition IV.15"
        proof={
          <>
            <p>
              Let <em>ABCDEF</em> be the given circle; it is required to inscribe an equilateral and
              equiangular hexagon in the circle <em>ABCDEF</em>.
            </p>
            <p className="mt-2">
              Let the diameter <em>AD</em> of the circle <em>ABCDEF</em> be drawn; let the center{' '}
              <em>G</em> of the circle be taken, and with center <em>D</em> and radius <em>DG</em>{' '}
              let the circle <em>EGCH</em> be described; let <em>EG</em>, <em>CG</em> be joined and
              carried through to the points <em>B</em>, <em>F</em>, and let <em>AB</em>, <em>BC</em>,{' '}
              <em>CD</em>, <em>DE</em>, <em>EF</em>, <em>FA</em> be joined.
            </p>
            <p className="mt-2">
              I say that the hexagon <em>ABCDEF</em> is equilateral and equiangular.
            </p>
            <p className="mt-2">
              For, since the point <em>G</em> is the center of the circle <em>ABCDEF</em>,{' '}
              <em>GE</em> is equal to <em>GD</em>.
            </p>
            <p className="mt-2">
              Again, since the point <em>D</em> is the center of the circle <em>GCH</em>, <em>DE</em>{' '}
              is equal to <em>DG</em>.
            </p>
            <p className="mt-2">
              But <em>GE</em> was proved equal to <em>GD</em>; therefore <em>GE</em> is also equal
              to <em>ED</em>; therefore the triangle <em>EGD</em> is equilateral; and therefore its
              three angles <em>EGD</em>, <em>GDE</em>, <em>DEG</em> are equal to one another,
              inasmuch as, in isosceles triangles, the angles at the base are equal to one another.
              [I.5]
            </p>
            <p className="mt-2">
              And the three angles of the triangle are equal to two right angles; [I.32] therefore
              the angle <em>EGD</em> is one-third of two right angles.
            </p>
            <p className="mt-2">
              Similarly, the angle <em>DGC</em> can also be proved to be one-third of two right
              angles.
            </p>
            <p className="mt-2">
              And, since the straight line <em>CG</em> standing on <em>EB</em> makes the adjacent
              angles <em>EGC</em>, <em>CGB</em> equal to two right angles, therefore the remaining
              angle <em>CGB</em> is also one-third of two right angles.
            </p>
            <p className="mt-2">
              Therefore the angles <em>EGD</em>, <em>DGC</em>, <em>CGB</em> are equal to one another;
              so that the angles vertical to them, the angles <em>BGA</em>, <em>AGF</em>,{' '}
              <em>FGE</em>, are also equal. [I.15]
            </p>
            <p className="mt-2">
              Therefore the six angles <em>EGD</em>, <em>DGC</em>, <em>CGB</em>, <em>BGA</em>,{' '}
              <em>AGF</em>, <em>FGE</em> are equal to one another.
            </p>
            <p className="mt-2">
              But equal angles stand on equal circumferences; [III.26] therefore the six
              circumferences <em>AB</em>, <em>BC</em>, <em>CD</em>, <em>DE</em>, <em>EF</em>,{' '}
              <em>FA</em> are equal to one another.
            </p>
            <p className="mt-2">
              And equal circumferences are subtended by equal straight lines; [III.29] therefore the
              six straight lines are equal to one another; therefore the hexagon <em>ABCDEF</em> is
              equilateral.
            </p>
            <p className="mt-2 font-medium">
              I say next that it is also equiangular. [The proof continues, showing all angles are
              equal.] Therefore in the given circle an equilateral and equiangular hexagon has been
              inscribed.
            </p>
          </>
        }
      >
        <p>In a given circle to inscribe an equilateral and equiangular hexagon.</p>
      </Proposition>

      <h2>Analysis</h2>

      <p>
        The regular hexagon is remarkably easy to inscribe in a circle: the side length equals the
        radius. This makes the hexagon one of the most fundamental regular polygons.
      </p>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 280 280" className="w-72 h-72">
          {/* Circle */}
          <circle cx="140" cy="140" r="90" fill="none" stroke="#f59e0b" strokeWidth="2" />
          {/* Regular hexagon */}
          <polygon
            points="230,140 185,218 95,218 50,140 95,62 185,62"
            fill="none"
            stroke="#22c55e"
            strokeWidth="2"
          />
          {/* Diameter AD */}
          <line x1="50" y1="140" x2="230" y2="140" stroke="#3b82f6" strokeWidth="1.5" />
          {/* Radii from center */}
          <line
            x1="140"
            y1="140"
            x2="185"
            y2="62"
            stroke="#9333ea"
            strokeWidth="1"
            strokeDasharray="4"
          />
          <line
            x1="140"
            y1="140"
            x2="185"
            y2="218"
            stroke="#9333ea"
            strokeWidth="1"
            strokeDasharray="4"
          />
          <line
            x1="140"
            y1="140"
            x2="95"
            y2="62"
            stroke="#9333ea"
            strokeWidth="1"
            strokeDasharray="4"
          />
          <line
            x1="140"
            y1="140"
            x2="95"
            y2="218"
            stroke="#9333ea"
            strokeWidth="1"
            strokeDasharray="4"
          />
          {/* Center G */}
          <circle cx="140" cy="140" r="4" fill="#ef4444" />
          {/* Auxiliary circle from D */}
          <circle
            cx="230"
            cy="140"
            r="90"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="1"
            strokeDasharray="4"
          />
          {/* Vertices */}
          <circle cx="230" cy="140" r="3" fill="#22c55e" />
          <circle cx="185" cy="218" r="3" fill="#22c55e" />
          <circle cx="95" cy="218" r="3" fill="#22c55e" />
          <circle cx="50" cy="140" r="3" fill="#22c55e" />
          <circle cx="95" cy="62" r="3" fill="#22c55e" />
          <circle cx="185" cy="62" r="3" fill="#22c55e" />
          {/* Labels */}
          <text x="50" y="130" fill="#22c55e" fontSize="11">
            A
          </text>
          <text x="85" y="55" fill="#22c55e" fontSize="11">
            B
          </text>
          <text x="190" y="55" fill="#22c55e" fontSize="11">
            C
          </text>
          <text x="235" y="145" fill="#22c55e" fontSize="11">
            D
          </text>
          <text x="190" y="232" fill="#22c55e" fontSize="11">
            E
          </text>
          <text x="85" y="232" fill="#22c55e" fontSize="11">
            F
          </text>
          <text x="145" y="155" fill="#ef4444" fontSize="11">
            G
          </text>
        </svg>
      </div>

      <h3>The Construction</h3>

      <ol className="list-decimal list-inside mt-4 space-y-2 text-dark-300">
        <li>
          Draw a diameter <em>AD</em> and find the center <em>G</em>
        </li>
        <li>
          With center <em>D</em> and radius <em>DG</em> (= radius of original circle), draw an arc
        </li>
        <li>
          This arc intersects the original circle at <em>E</em> and <em>C</em>
        </li>
        <li>
          Draw lines through <em>G</em> to <em>E</em> and <em>C</em>, extending to meet the circle
          at <em>F</em> and <em>B</em>
        </li>
        <li>
          Connect adjacent points to form hexagon <em>ABCDEF</em>
        </li>
      </ol>

      <h3 className="mt-6">The Key Insight: Side = Radius</h3>

      <p className="mt-2">
        The construction works because triangles like <em>EGD</em> are equilateral:
      </p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>
          <em>GE</em> = <em>GD</em> = radius (both are radii of the original circle)
        </li>
        <li>
          <em>DE</em> = <em>DG</em> = radius (both are radii of the auxiliary circle)
        </li>
        <li>
          Therefore <em>GE</em> = <em>GD</em> = <em>DE</em>, making triangle <em>EGD</em> equilateral
        </li>
        <li>Each angle in an equilateral triangle is 60°</li>
        <li>Six 60° angles fit exactly around the center (6 × 60° = 360°)</li>
      </ul>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <h4 className="text-amber-400 font-semibold mb-2">Why the Hexagon Is Special</h4>
        <p className="text-dark-200">
          The regular hexagon is the only regular polygon where the side length equals the
          circumradius. This makes it uniquely simple to construct—just "walk around" the circle
          with the radius as your compass opening.
        </p>
      </div>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition I.5 (isosceles triangle theorem)</li>
        <li>Proposition I.15 (vertical angles)</li>
        <li>Proposition I.32 (angle sum of triangle)</li>
        <li>Proposition III.26 (equal central angles mean equal arcs)</li>
        <li>Proposition III.29 (equal arcs mean equal chords)</li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Honeycomb Connection:</strong> The hexagon tiles the
          plane perfectly (three hexagons meet at each vertex, with angles summing to 360°). This is
          why bees use hexagonal cells—it's the most efficient shape for tessellation.
        </p>
      </div>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <h4 className="text-amber-400 font-semibold mb-2">Corollary</h4>
        <p className="text-dark-200">
          Euclid notes that the side of the inscribed hexagon equals the radius of the circle. This
          fundamental fact connects the hexagon to the circle's dimensions in the simplest possible
          way.
        </p>
      </div>
    </LessonLayout>
  );
}
