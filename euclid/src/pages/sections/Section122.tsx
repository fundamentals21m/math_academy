import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common';

export default function Section122() {
  return (
    <LessonLayout sectionId={122}>
      <Proposition
        title="Proposition V.3"
        statement="If a first magnitude has to a second the same ratio that a third has to a fourth, and if equimultiples are taken of the first and third, and also equimultiples of the second and fourth, then the equimultiples of the first and third have the same ratio to the equimultiples of the second and fourth respectively."
      >
        <h3 className="text-lg font-semibold mt-4">Statement in Modern Terms</h3>
        <p className="text-dark-300 mt-2">
          If A:B = C:D, then mA:nB = mC:nD for any positive integers m and n.
        </p>
        <p className="text-dark-300 mt-2">
          Taking equimultiples of corresponding terms preserves the proportion.
        </p>

        <h3 className="text-lg font-semibold mt-6">Visual Representation</h3>
        <svg viewBox="0 0 400 180" className="w-full h-44 mt-4">
          {/* Original proportion */}
          <text x="10" y="25" fill="#f59e0b" fontSize="12">Original:</text>
          <text x="80" y="25" fill="#3b82f6" fontSize="14">A : B = C : D</text>

          {/* A and B */}
          <rect x="80" y="35" width="60" height="20" fill="#3b82f6" stroke="#60a5fa" strokeWidth="1" />
          <text x="110" y="49" fill="white" fontSize="10" textAnchor="middle">A</text>
          <rect x="150" y="35" width="80" height="20" fill="#22c55e" stroke="#4ade80" strokeWidth="1" />
          <text x="190" y="49" fill="white" fontSize="10" textAnchor="middle">B</text>

          <text x="240" y="49" fill="#666" fontSize="14">=</text>

          {/* C and D */}
          <rect x="260" y="35" width="45" height="20" fill="#3b82f6" stroke="#60a5fa" strokeWidth="1" />
          <text x="282" y="49" fill="white" fontSize="10" textAnchor="middle">C</text>
          <rect x="315" y="35" width="60" height="20" fill="#22c55e" stroke="#4ade80" strokeWidth="1" />
          <text x="345" y="49" fill="white" fontSize="10" textAnchor="middle">D</text>

          {/* Arrow */}
          <line x1="200" y1="70" x2="200" y2="90" stroke="#f59e0b" strokeWidth="2" />
          <polygon points="200,95 195,85 205,85" fill="#f59e0b" />
          <text x="210" y="85" fill="#f59e0b" fontSize="10">×m, ×n</text>

          {/* Multiplied proportion */}
          <text x="10" y="120" fill="#f59e0b" fontSize="12">Multiplied:</text>
          <text x="80" y="120" fill="#3b82f6" fontSize="14">mA : nB = mC : nD</text>

          {/* mA and nB */}
          <rect x="80" y="130" width="90" height="20" fill="#3b82f6" stroke="#60a5fa" strokeWidth="1" />
          <text x="125" y="144" fill="white" fontSize="10" textAnchor="middle">mA</text>
          <rect x="180" y="130" width="80" height="20" fill="#22c55e" stroke="#4ade80" strokeWidth="1" />
          <text x="220" y="144" fill="white" fontSize="10" textAnchor="middle">nB</text>

          <text x="268" y="144" fill="#666" fontSize="14">=</text>

          {/* mC and nD */}
          <rect x="285" y="130" width="45" height="20" fill="#3b82f6" stroke="#60a5fa" strokeWidth="1" />
          <text x="307" y="144" fill="white" fontSize="10" textAnchor="middle">mC</text>
          <rect x="340" y="130" width="50" height="20" fill="#22c55e" stroke="#4ade80" strokeWidth="1" />
          <text x="365" y="144" fill="white" fontSize="10" textAnchor="middle">nD</text>
        </svg>

        <h3 className="text-lg font-semibold mt-6">Proof Outline</h3>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 mt-2">
          <p className="text-dark-300">
            By Definition V.5, A:B = C:D means that for any integers p, q:
          </p>
          <p className="text-dark-300 mt-2 font-mono">
            pA {'>'} qB ⟺ pC {'>'} qD (and similarly for = and {'<'})
          </p>
          <p className="text-dark-300 mt-4">
            To prove mA:nB = mC:nD, we need to show for any integers p, q:
          </p>
          <p className="text-dark-300 mt-2 font-mono">
            p(mA) {'>'} q(nB) ⟺ p(mC) {'>'} q(nD)
          </p>
          <p className="text-dark-300 mt-4">
            This follows because p(mA) = (pm)A and q(nB) = (qn)B. Since A:B = C:D, the comparison
            of (pm)A with (qn)B gives the same result as comparing (pm)C with (qn)D.
          </p>
        </div>

        <h3 className="text-lg font-semibold mt-6">Example</h3>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 mt-2">
          <p className="text-dark-300">
            If A:B = 2:3 and C:D = 2:3 (same ratio), then taking doubles of A, C and triples of B, D:
          </p>
          <p className="text-amber-400 mt-2 font-mono">
            2A : 3B = 2C : 3D
          </p>
          <p className="text-dark-300 mt-2">
            This is essentially (2×2):(3×3) = 4:9 on both sides.
          </p>
        </div>

        <h3 className="text-lg font-semibold mt-6">Significance</h3>
        <p className="text-dark-300 mt-2">
          This proposition is fundamental to the theory of proportions. It shows that proportions
          are "scale-invariant"—multiplying corresponding terms by the same factors preserves the
          proportion. This property is essential for proving more complex results about ratios.
        </p>
      </Proposition>
    </LessonLayout>
  );
}
