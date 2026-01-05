import { LessonLayout } from '@/components/layout/LessonLayout';

export default function Section145() {
  return (
    <LessonLayout sectionId={145}>
      <h2>Book VI: Similar Figures</h2>

      <p>
        Book VI applies the abstract theory of proportions from Book V to geometry. It develops
        the theory of <strong>similar figures</strong>—figures that have the same shape but
        possibly different sizes. This book is fundamental to the understanding of scaling,
        perspective, and the relationships between geometric quantities.
      </p>

      <h3 className="mt-6">Definitions</h3>

      <div className="space-y-4 mt-4">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold">Definition 1: Similar Rectilinear Figures</h4>
          <p className="text-dark-200 mt-2">
            <strong>Similar rectilinear figures</strong> are such as have their angles severally
            equal and the sides about the equal angles proportional.
          </p>
          <p className="text-sm text-dark-400 mt-2 italic">
            Two polygons are similar if corresponding angles are equal and corresponding sides
            are in proportion. This is the key concept of the entire book.
          </p>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold">Definition 2: Reciprocally Related Figures</h4>
          <p className="text-dark-200 mt-2">
            Two figures are <strong>reciprocally related</strong> when the sides about corresponding
            angles are reciprocally proportional.
          </p>
          <p className="text-sm text-dark-400 mt-2 italic">
            If in two figures, A:B = D:C (not A:B = C:D), the sides are reciprocally proportional.
            This concept appears in propositions about equal areas.
          </p>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold">Definition 3: Extreme and Mean Ratio</h4>
          <p className="text-dark-200 mt-2">
            A straight line is said to have been cut in <strong>extreme and mean ratio</strong> when,
            as the whole line is to the greater segment, so is the greater to the less.
          </p>
          <p className="text-sm text-dark-400 mt-2 italic">
            This is the <strong>golden ratio</strong> φ ≈ 1.618. If a line AB is divided at C,
            then AB:AC = AC:CB means C divides AB in extreme and mean ratio.
          </p>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold">Definition 4: Height of a Figure</h4>
          <p className="text-dark-200 mt-2">
            The <strong>height</strong> of any figure is the perpendicular drawn from the vertex
            to the base.
          </p>
        </div>
      </div>

      <h3 className="mt-8">The Power of Similarity</h3>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-4 border border-amber-500/20">
        <p className="text-dark-200">
          Similarity is one of the most powerful concepts in geometry. Two similar figures have:
        </p>
        <ul className="list-disc list-inside mt-3 space-y-1 text-dark-300">
          <li>All corresponding angles equal</li>
          <li>All corresponding sides in the same ratio (the <strong>scale factor</strong>)</li>
          <li>Areas in the <strong>duplicate ratio</strong> (square of the scale factor)</li>
        </ul>
        <p className="text-dark-200 mt-4">
          Book VI establishes these relationships rigorously, building on the proportion theory
          of Book V. The famous propositions include the angle bisector theorem (VI.3), criteria
          for similar triangles (VI.4-7), and the generalized Pythagorean theorem (VI.31).
        </p>
      </div>

      <h3 className="mt-8">Overview of Book VI</h3>

      <p>Book VI contains 33 propositions covering:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>
          <strong>VI.1-3:</strong> Areas and proportions, the angle bisector theorem
        </li>
        <li>
          <strong>VI.4-7:</strong> Criteria for similar triangles (AA, SSS, SAS similarity)
        </li>
        <li>
          <strong>VI.8:</strong> Right triangle altitude theorem
        </li>
        <li>
          <strong>VI.9-13:</strong> Constructions involving proportions (cutting lines, finding proportionals)
        </li>
        <li>
          <strong>VI.14-17:</strong> Reciprocal proportions and rectangles
        </li>
        <li>
          <strong>VI.18-22:</strong> Similar polygons and their properties
        </li>
        <li>
          <strong>VI.23-26:</strong> Equiangular parallelograms and compound ratios
        </li>
        <li>
          <strong>VI.27-29:</strong> Application of areas (geometric algebra)
        </li>
        <li>
          <strong>VI.30:</strong> Golden ratio construction
        </li>
        <li>
          <strong>VI.31:</strong> Generalized Pythagorean theorem
        </li>
        <li>
          <strong>VI.32-33:</strong> Triangles with parallel sides and arcs
        </li>
      </ul>

      <h3 className="mt-8">Diagram: Similar Triangles</h3>

      <svg viewBox="0 0 400 200" className="w-full max-w-lg mx-auto mt-4">
        {/* First triangle */}
        <polygon
          points="50,150 150,150 100,50"
          fill="none"
          stroke="#f59e0b"
          strokeWidth="2"
        />
        <text x="100" y="170" textAnchor="middle" fill="#9ca3af" fontSize="12">
          ABC
        </text>
        <text x="45" y="155" textAnchor="end" fill="#f59e0b" fontSize="10">A</text>
        <text x="155" y="155" textAnchor="start" fill="#f59e0b" fontSize="10">B</text>
        <text x="100" y="45" textAnchor="middle" fill="#f59e0b" fontSize="10">C</text>

        {/* Second triangle (larger, similar) */}
        <polygon
          points="220,170 370,170 295,30"
          fill="none"
          stroke="#10b981"
          strokeWidth="2"
        />
        <text x="295" y="190" textAnchor="middle" fill="#9ca3af" fontSize="12">
          DEF
        </text>
        <text x="215" y="175" textAnchor="end" fill="#10b981" fontSize="10">D</text>
        <text x="375" y="175" textAnchor="start" fill="#10b981" fontSize="10">E</text>
        <text x="295" y="25" textAnchor="middle" fill="#10b981" fontSize="10">F</text>

        {/* Similarity symbol */}
        <text x="185" y="100" textAnchor="middle" fill="#9ca3af" fontSize="16">∼</text>
      </svg>

      <p className="text-center text-dark-400 text-sm mt-2">
        Similar triangles: ∠A = ∠D, ∠B = ∠E, ∠C = ∠F, and AB:DE = BC:EF = CA:FD
      </p>
    </LessonLayout>
  );
}
