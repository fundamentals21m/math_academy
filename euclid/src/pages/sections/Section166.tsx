import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section166() {
  return (
    <LessonLayout sectionId={166}>
      <Proposition
        title="Proposition VI.21"
        proof={
          <>
            <p>
              Let each of the rectilinear figures <em>A</em> and <em>B</em> be similar to <em>C</em>.
            </p>
            <p className="mt-2">
              I say that <em>A</em> is also similar to <em>B</em>.
            </p>
            <p className="mt-2">
              Since A is similar to C, A is equiangular with C and has the sides about the equal
              angles proportional. [VI. Def. 1]
            </p>
            <p className="mt-2">
              Since B is similar to C, B is equiangular with C and has the sides about the equal
              angles proportional.
            </p>
            <p className="mt-2">
              Therefore A and B are both equiangular with C. Hence A is equiangular with B.
            </p>
            <p className="mt-2">
              Also, since the sides of A about equal angles are proportional to corresponding sides
              of C, and the sides of B about equal angles are proportional to corresponding sides
              of C, the sides of A are proportional to the sides of B. [V.11 - transitivity of
              ratios]
            </p>
            <p className="mt-2 font-medium">
              Therefore A is equiangular with B and has sides proportional. Hence A is similar to B.
            </p>
          </>
        }
      >
        <p>
          Figures which are similar to the same rectilinear figure are also similar to one another.
        </p>
      </Proposition>

      <h2>Transitivity of Similarity</h2>

      <p>
        This proposition establishes that similarity is a <strong>transitive</strong> relation: if
        A is similar to C, and B is similar to C, then A is similar to B. In modern terms, we might
        say that similarity is an <strong>equivalence relation</strong>.
      </p>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 380 220" className="w-full max-w-md h-56">
          {/* Figure A (small) */}
          <polygon
            points="60,140 40,80 80,60 100,100"
            fill="#f59e0b20"
            stroke="#f59e0b"
            strokeWidth="2"
          />
          <text x="70" y="170" textAnchor="middle" fill="#f59e0b" fontSize="14">A</text>

          {/* Figure C (medium) - center */}
          <polygon
            points="190,160 160,80 220,50 250,120"
            fill="#22c55e20"
            stroke="#22c55e"
            strokeWidth="2"
          />
          <text x="205" y="190" textAnchor="middle" fill="#22c55e" fontSize="14">C</text>

          {/* Figure B (large) */}
          <polygon
            points="340,180 295,70 380,25 420,115"
            fill="#3b82f620"
            stroke="#3b82f6"
            strokeWidth="2"
          />
          <text x="360" y="205" textAnchor="middle" fill="#3b82f6" fontSize="14">B</text>

          {/* Similarity arrows */}
          <path
            d="M 95,90 Q 125,60 155,80"
            fill="none"
            stroke="#9ca3af"
            strokeWidth="1.5"
            markerEnd="url(#arrowhead)"
          />
          <text x="125" y="55" textAnchor="middle" fill="#9ca3af" fontSize="11">A ~ C</text>

          <path
            d="M 255,90 Q 285,60 310,80"
            fill="none"
            stroke="#9ca3af"
            strokeWidth="1.5"
            markerEnd="url(#arrowhead)"
          />
          <text x="285" y="55" textAnchor="middle" fill="#9ca3af" fontSize="11">B ~ C</text>

          {/* Conclusion arrow */}
          <path
            d="M 100,150 Q 200,200 300,150"
            fill="none"
            stroke="#ef4444"
            strokeWidth="2"
            strokeDasharray="5,3"
          />
          <text x="200" y="215" textAnchor="middle" fill="#ef4444" fontSize="12">
            Therefore A ~ B
          </text>

          {/* Arrowhead definition */}
          <defs>
            <marker
              id="arrowhead"
              markerWidth="10"
              markerHeight="7"
              refX="10"
              refY="3.5"
              orient="auto"
            >
              <polygon points="0 0, 10 3.5, 0 7" fill="#9ca3af" />
            </marker>
          </defs>
        </svg>
      </div>

      <h3 className="mt-6">The Logic of Transitivity</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <p className="text-dark-300 text-lg text-center mb-2">
          If <span className="text-amber-400">A ~ C</span> and <span className="text-amber-400">B ~ C</span>
        </p>
        <p className="text-dark-300 text-lg text-center">
          Then <span className="text-amber-400">A ~ B</span>
        </p>
      </div>

      <p className="mt-4">
        This follows from the definition of similarity: similar figures have equal corresponding
        angles and proportional corresponding sides.
      </p>

      <h3 className="mt-6">Why This Matters</h3>

      <div className="space-y-4 mt-4">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold">Classification by Shape</h4>
          <p className="text-dark-300 mt-2">
            This proposition means we can classify figures by their "shape" regardless of size. All
            similar figures belong to the same equivalence class.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold">Comparison via Reference</h4>
          <p className="text-dark-300 mt-2">
            To compare two figures, we only need to compare each to a common reference. If both are
            similar to the reference, they are similar to each other.
          </p>
        </div>
      </div>

      <h3 className="mt-6">Proof Components</h3>

      <p>
        The proof uses two key facts about similarity:
      </p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>
          <strong>Equal angles transfer:</strong> If A has the same angles as C, and B has the same
          angles as C, then A has the same angles as B.
        </li>
        <li>
          <strong>Proportional sides transfer:</strong> If sides of A are proportional to sides of
          C, and sides of B are proportional to sides of C, then by V.11 (transitivity of ratios),
          sides of A are proportional to sides of B.
        </li>
      </ul>

      <h3 className="mt-6">Equivalence Relation Properties</h3>

      <p>
        In modern mathematics, an <strong>equivalence relation</strong> must satisfy three properties:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold text-center">Reflexive</h4>
          <p className="text-dark-300 mt-2 text-center text-sm">
            A ~ A
          </p>
          <p className="text-dark-400 mt-1 text-center text-xs">
            (Every figure is similar to itself)
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold text-center">Symmetric</h4>
          <p className="text-dark-300 mt-2 text-center text-sm">
            If A ~ B, then B ~ A
          </p>
          <p className="text-dark-400 mt-1 text-center text-xs">
            (Follows from definition)
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 border-amber-500/50">
          <h4 className="text-amber-400 font-semibold text-center">Transitive</h4>
          <p className="text-dark-300 mt-2 text-center text-sm">
            If A ~ C and B ~ C, then A ~ B
          </p>
          <p className="text-dark-400 mt-1 text-center text-xs">
            (This proposition!)
          </p>
        </div>
      </div>

      <h3 className="mt-6">All Figures of the Same Type</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <p className="text-dark-300">
          By this proposition:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-dark-300">
          <li>All squares are similar to each other</li>
          <li>All equilateral triangles are similar to each other</li>
          <li>All regular pentagons are similar to each other</li>
          <li>All circles are similar to each other (by extension)</li>
        </ul>
      </div>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <h4 className="text-amber-400 font-semibold">Mathematical Foundation</h4>
        <p className="text-dark-300 mt-2">
          This proposition establishes similarity as an equivalence relation on geometric figures.
          This means we can partition all figures into equivalence classes based on shape. Two
          figures are in the same class if and only if they are similar. This is the mathematical
          foundation for the intuitive concept of "same shape, different size."
        </p>
      </div>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-6 border border-amber-500/30">
        <h4 className="text-amber-400 font-semibold">Connection to Group Theory</h4>
        <p className="text-dark-300 mt-2">
          In modern mathematics, the set of all similarity transformations (rotations, reflections,
          translations, and uniform scalings) forms a <strong>group</strong>. Two figures are
          similar if and only if one can be transformed into the other by an element of this group.
          VI.21 essentially proves that this similarity group relation is transitive.
        </p>
      </div>
    </LessonLayout>
  );
}
