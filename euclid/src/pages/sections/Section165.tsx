import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section165() {
  return (
    <LessonLayout sectionId={165}>
      <Proposition
        title="Proposition VI.20"
        proof={
          <>
            <p>
              Let <em>ABCDE</em> and <em>FGHKL</em> be similar polygons, with AB corresponding to
              FG.
            </p>
            <p className="mt-2">
              Draw diagonals BE, EC in polygon ABCDE and corresponding diagonals GK, KH in polygon
              FGHKL.
            </p>
            <p className="mt-2">
              Since the polygons are similar, angle BAE = angle GFK and AB:AE = FG:FK. Therefore by
              VI.6, triangle ABE is equiangular to triangle FGK, hence similar.
            </p>
            <p className="mt-2">
              Similarly, triangle BEC is similar to triangle GKH, and triangle ECD is similar to
              triangle KHL.
            </p>
            <p className="mt-2">
              By VI.19, each pair of similar triangles has areas in the duplicate ratio of
              corresponding sides.
            </p>
            <p className="mt-2">
              Since all the triangles scale by the same ratio (AB:FG = BC:GH = ... = the common
              ratio), and the polygons are sums of these triangles:
            </p>
            <p className="mt-2 font-medium">
              Polygon ABCDE : Polygon FGHKL = (AB:FG)² = duplicate ratio of corresponding sides.
            </p>
          </>
        }
      >
        <p>
          Similar polygons are divided into similar triangles, and into triangles equal in
          multitude and in the same ratio as the wholes, and the polygon has to the polygon a ratio
          duplicate of that which the corresponding side has to the corresponding side.
        </p>
      </Proposition>

      <h2>Extending the Area Relationship to All Polygons</h2>

      <p>
        This proposition generalizes VI.19 from triangles to all polygons. Any similar polygons
        have areas in the duplicate ratio (square) of their corresponding sides.
      </p>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 400 200" className="w-full max-w-lg h-52">
          {/* Small pentagon */}
          <polygon
            points="80,140 50,100 70,55 110,55 130,100"
            fill="#f59e0b20"
            stroke="#f59e0b"
            strokeWidth="2"
          />
          {/* Triangulation of small pentagon */}
          <line x1="80" y1="140" x2="70" y2="55" stroke="#f59e0b" strokeWidth="1" strokeDasharray="3" />
          <line x1="80" y1="140" x2="110" y2="55" stroke="#f59e0b" strokeWidth="1" strokeDasharray="3" />

          {/* Large pentagon (1.5x scale) */}
          <polygon
            points="300,180 255,120 285,52 345,52 375,120"
            fill="#3b82f620"
            stroke="#3b82f6"
            strokeWidth="2"
          />
          {/* Triangulation of large pentagon */}
          <line x1="300" y1="180" x2="285" y2="52" stroke="#3b82f6" strokeWidth="1" strokeDasharray="3" />
          <line x1="300" y1="180" x2="345" y2="52" stroke="#3b82f6" strokeWidth="1" strokeDasharray="3" />

          {/* Labels */}
          <text x="90" y="175" textAnchor="middle" fill="#f59e0b" fontSize="10">ABCDE</text>
          <text x="90" y="100" textAnchor="middle" fill="#f59e0b" fontSize="11">Area = 1</text>
          <text x="315" y="195" textAnchor="middle" fill="#3b82f6" fontSize="10">FGHKL</text>
          <text x="315" y="120" textAnchor="middle" fill="#3b82f6" fontSize="11">Area = 2.25</text>

          {/* Arrow and ratio */}
          <text x="190" y="100" textAnchor="middle" fill="#9ca3af" fontSize="14">~</text>
          <text x="190" y="120" textAnchor="middle" fill="#22c55e" fontSize="10">sides: 1.5x</text>
          <text x="190" y="135" textAnchor="middle" fill="#22c55e" fontSize="10">area: 2.25x</text>
        </svg>
      </div>

      <h3 className="mt-6">Three Key Results</h3>

      <div className="space-y-4 mt-4">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold">1. Similar Triangulation</h4>
          <p className="text-dark-300 mt-2">
            When similar polygons are divided by corresponding diagonals, the resulting triangles
            are similar in pairs. Each triangle in one polygon corresponds to a similar triangle in
            the other.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold">2. Equal Number of Triangles</h4>
          <p className="text-dark-300 mt-2">
            Both polygons divide into the same number of triangles (n-2 for an n-gon). The
            triangles are in the same ratio as the whole polygons.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold">3. Duplicate Ratio of Areas</h4>
          <p className="text-dark-300 mt-2">
            The ratio of the areas equals the square of the ratio of corresponding sides:
          </p>
          <p className="text-amber-400 text-center text-lg mt-2">
            Area₁ : Area₂ = (side₁)² : (side₂)²
          </p>
        </div>
      </div>

      <h3 className="mt-6">The Proof Strategy</h3>

      <p>
        Euclid's proof is elegant: decompose both polygons into triangles, show each pair of
        triangles is similar, apply VI.19 to each pair, then add up the ratios.
      </p>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 320 180" className="w-80 h-44">
          {/* Quadrilateral divided into triangles */}
          <polygon
            points="40,140 60,40 160,60 180,140"
            fill="none"
            stroke="#f59e0b"
            strokeWidth="2"
          />
          {/* Diagonal */}
          <line x1="40" y1="140" x2="160" y2="60" stroke="#3b82f6" strokeWidth="2" />
          {/* Triangle labels */}
          <text x="70" y="85" textAnchor="middle" fill="#f59e0b" fontSize="10">T₁</text>
          <text x="130" y="110" textAnchor="middle" fill="#f59e0b" fontSize="10">T₂</text>
          {/* Points */}
          <text x="30" y="145" textAnchor="end" fill="#9ca3af" fontSize="10">A</text>
          <text x="55" y="35" textAnchor="middle" fill="#9ca3af" fontSize="10">B</text>
          <text x="170" y="55" textAnchor="start" fill="#9ca3af" fontSize="10">C</text>
          <text x="190" y="145" textAnchor="start" fill="#9ca3af" fontSize="10">D</text>

          {/* Explanation */}
          <text x="160" y="170" textAnchor="middle" fill="#9ca3af" fontSize="11">
            Polygon = T₁ + T₂
          </text>
        </svg>
      </div>

      <h3 className="mt-6">Why Triangulation Works</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <p className="text-dark-300">
          Any n-sided polygon can be divided into exactly <strong>(n - 2)</strong> triangles by
          drawing diagonals from one vertex.
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-dark-300">
          <li>Triangle (3 sides): 1 triangle</li>
          <li>Quadrilateral (4 sides): 2 triangles</li>
          <li>Pentagon (5 sides): 3 triangles</li>
          <li>Hexagon (6 sides): 4 triangles</li>
          <li>n-gon: (n - 2) triangles</li>
        </ul>
      </div>

      <h3 className="mt-6">Combining the Triangle Ratios</h3>

      <p>
        If triangles T₁, T₂, T₃, ... in one polygon are similar to T₁', T₂', T₃', ... in the other,
        and each pair has the same area ratio k², then:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700 text-center">
        <p className="text-dark-300">
          (T₁ + T₂ + T₃ + ...) : (T₁' + T₂' + T₃' + ...) = k² : 1
        </p>
        <p className="text-amber-400 mt-2">
          Polygon₁ : Polygon₂ = k²
        </p>
      </div>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <h4 className="text-amber-400 font-semibold">Universal Scaling Law</h4>
        <p className="text-dark-300 mt-2">
          This proposition proves that the "area scales as the square of linear dimensions" rule
          applies to <strong>all</strong> rectilinear figures, not just triangles. This is why:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-dark-300">
          <li>Doubling the side of a square gives 4× the area</li>
          <li>Tripling the side of a hexagon gives 9× the area</li>
          <li>Halving all dimensions gives 1/4 the area</li>
        </ul>
      </div>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-6 border border-amber-500/30">
        <h4 className="text-amber-400 font-semibold">Modern Generalization</h4>
        <p className="text-dark-300 mt-2">
          Using calculus, this result extends to all similar figures, including those with curved
          boundaries like circles and ellipses. The area of any similar 2D shape scales with the
          square of the linear scale factor.
        </p>
      </div>
    </LessonLayout>
  );
}
