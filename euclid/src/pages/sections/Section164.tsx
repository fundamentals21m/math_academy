import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section164() {
  return (
    <LessonLayout sectionId={164}>
      <Proposition
        title="Proposition VI.19"
        proof={
          <>
            <p>
              Let <em>ABC</em> and <em>DEF</em> be similar triangles having angle ABC equal to
              angle DEF.
            </p>
            <p className="mt-2">
              I say that the ratio of triangle ABC to triangle DEF is the duplicate ratio of BC to
              EF.
            </p>
            <p className="mt-2">
              Take BG a third proportional to BC and EF, so that BC:EF = EF:BG. [VI.11]
            </p>
            <p className="mt-2">
              Join AG. Since BC:EF = EF:BG, and also BC:EF = AB:DE (similar triangles), therefore
              AB:DE = EF:BG.
            </p>
            <p className="mt-2">
              The sides about the equal angles ABG and DEF are reciprocally proportional. Therefore
              by VI.15, triangle ABG equals triangle DEF.
            </p>
            <p className="mt-2">
              Now triangle ABC:triangle ABG = BC:BG [VI.1] (same height from A).
            </p>
            <p className="mt-2">
              But BC:BG is the duplicate ratio of BC:EF (since BC:EF = EF:BG means BC:BG = BC²:EF²).
            </p>
            <p className="mt-2 font-medium">
              Since triangle ABG = triangle DEF, we have triangle ABC:triangle DEF = BC²:EF².
            </p>
          </>
        }
      >
        <p>
          Similar triangles are to one another in the duplicate ratio of the corresponding sides.
        </p>
      </Proposition>

      <h2>Areas of Similar Triangles</h2>

      <p>
        This proposition establishes one of the most important relationships in geometry: the areas
        of similar figures scale as the <strong>square</strong> of the linear scale factor. When
        you double the sides of a triangle, the area becomes four times as large.
      </p>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 400 200" className="w-full max-w-lg h-52">
          {/* Small triangle */}
          <polygon
            points="50,160 110,60 170,160"
            fill="#f59e0b20"
            stroke="#f59e0b"
            strokeWidth="2"
          />
          {/* Large triangle (2x) */}
          <polygon
            points="200,180 320,0 440,180"
            fill="#3b82f620"
            stroke="#3b82f6"
            strokeWidth="2"
          />
          {/* Labels for small triangle */}
          <text x="110" y="180" textAnchor="middle" fill="#f59e0b" fontSize="11">
            Side = 1
          </text>
          <text x="110" y="120" textAnchor="middle" fill="#f59e0b" fontSize="12">
            Area = 1
          </text>
          {/* Labels for large triangle */}
          <text x="320" y="195" textAnchor="middle" fill="#3b82f6" fontSize="11">
            Side = 2
          </text>
          <text x="320" y="100" textAnchor="middle" fill="#3b82f6" fontSize="12">
            Area = 4
          </text>
          {/* Similarity symbol */}
          <text x="185" y="120" textAnchor="middle" fill="#9ca3af" fontSize="14">~</text>
        </svg>
      </div>

      <h3 className="mt-6">The Duplicate Ratio</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <p className="text-dark-300 text-lg text-center mb-4">
          If triangles ABC ~ DEF with scale factor k = BC/EF
        </p>
        <p className="text-amber-400 text-2xl font-mono text-center mb-4">
          Area(ABC) : Area(DEF) = k² : 1
        </p>
        <p className="text-dark-300 text-center">
          The areas are in the <strong>duplicate ratio</strong> (squared ratio) of the sides.
        </p>
      </div>

      <h3 className="mt-6">What is "Duplicate Ratio"?</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <p className="text-dark-300">
          Euclid defines the <strong>duplicate ratio</strong> of A:B as the ratio A:C where A:B =
          B:C.
        </p>
        <p className="text-dark-300 mt-2">
          In modern terms: if A:B = k, then the duplicate ratio is k² : 1.
        </p>
        <p className="text-dark-300 mt-2">
          For example, the duplicate ratio of 3:2 is 9:4 (since 3/2 × 3/2 = 9/4).
        </p>
      </div>

      <h3 className="mt-6">Numerical Examples</h3>

      <div className="space-y-4 mt-4">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-300">
            <strong>Scale factor 2:1</strong>
          </p>
          <p className="text-dark-300 mt-1">
            If one triangle has sides twice as long, its area is 2² = 4 times as large.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-300">
            <strong>Scale factor 3:1</strong>
          </p>
          <p className="text-dark-300 mt-1">
            If one triangle has sides three times as long, its area is 3² = 9 times as large.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-300">
            <strong>Scale factor 1:2</strong>
          </p>
          <p className="text-dark-300 mt-1">
            If one triangle has sides half as long, its area is (1/2)² = 1/4 times as large.
          </p>
        </div>
      </div>

      <h3 className="mt-6">Visual Proof</h3>

      <p>
        We can see why the area scales as the square by dividing the larger triangle into copies of
        the smaller one:
      </p>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 280 200" className="w-72 h-52">
          {/* Large triangle outline */}
          <polygon
            points="140,20 40,180 240,180"
            fill="none"
            stroke="#f59e0b"
            strokeWidth="2"
          />
          {/* Four small triangles inside */}
          {/* Top */}
          <polygon
            points="140,20 90,100 190,100"
            fill="#3b82f620"
            stroke="#3b82f6"
            strokeWidth="1"
          />
          {/* Bottom left */}
          <polygon
            points="40,180 90,100 140,180"
            fill="#22c55e20"
            stroke="#22c55e"
            strokeWidth="1"
          />
          {/* Bottom right */}
          <polygon
            points="240,180 190,100 140,180"
            fill="#8b5cf620"
            stroke="#8b5cf6"
            strokeWidth="1"
          />
          {/* Center (inverted) */}
          <polygon
            points="90,100 190,100 140,180"
            fill="#ef444420"
            stroke="#ef4444"
            strokeWidth="1"
          />
          {/* Labels */}
          <text x="140" y="60" textAnchor="middle" fill="#3b82f6" fontSize="10">1</text>
          <text x="90" y="150" textAnchor="middle" fill="#22c55e" fontSize="10">2</text>
          <text x="190" y="150" textAnchor="middle" fill="#8b5cf6" fontSize="10">3</text>
          <text x="140" y="145" textAnchor="middle" fill="#ef4444" fontSize="10">4</text>
        </svg>
      </div>

      <p className="text-center text-dark-400 text-sm">
        A triangle with sides 2x contains 4 copies of the original triangle (4 = 2²)
      </p>

      <h3 className="mt-6">Proof Outline</h3>

      <p>
        Euclid's proof uses the theory of proportions:
      </p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Find a third proportional BG such that BC:EF = EF:BG</li>
        <li>This makes BC:BG the duplicate ratio of BC:EF</li>
        <li>Show triangle ABG = triangle DEF using VI.15 (reciprocal proportions)</li>
        <li>Use VI.1: triangles with same height are as their bases</li>
        <li>Therefore ABC:DEF = BC:BG = (BC:EF)²</li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <h4 className="text-amber-400 font-semibold">The Square-Cube Law</h4>
        <p className="text-dark-300 mt-2">
          This proposition is the 2D case of a general principle. In 3D, volumes of similar solids
          scale as the <strong>cube</strong> of linear dimensions. This "square-cube law" has
          profound implications:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-dark-300">
          <li>Why ants can carry many times their body weight</li>
          <li>Why large animals need proportionally thicker legs</li>
          <li>Why ships and aircraft have different proportions at different scales</li>
        </ul>
      </div>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-6 border border-amber-500/30">
        <h4 className="text-amber-400 font-semibold">Modern Formula</h4>
        <p className="text-dark-300 mt-2">
          For similar triangles with corresponding sides in ratio k:1:
        </p>
        <p className="text-amber-400 text-center text-lg mt-2">
          Area₁ / Area₂ = k²
        </p>
        <p className="text-dark-300 mt-2 text-center text-sm">
          This applies to all similar figures, not just triangles (see VI.20)
        </p>
      </div>
    </LessonLayout>
  );
}
