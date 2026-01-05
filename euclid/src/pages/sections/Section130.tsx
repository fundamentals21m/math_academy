import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common';

export default function Section130() {
  return (
    <LessonLayout sectionId={130}>
      <Proposition
        title="Proposition V.11"
        statement="Ratios which are the same with the same ratio are also the same with one another."
      >
        <h3 className="text-lg font-semibold mt-4">Statement in Modern Terms</h3>
        <p className="text-dark-300 mt-2">
          If A:B = C:D and C:D = E:F, then A:B = E:F.
        </p>
        <p className="text-dark-300 mt-2">
          In other words: <strong>equality of ratios is transitive</strong>.
        </p>

        <h3 className="text-lg font-semibold mt-6">Visual Representation</h3>
        <svg viewBox="0 0 400 160" className="w-full h-40 mt-4">
          {/* A:B = C:D */}
          <rect x="30" y="20" width="60" height="20" fill="#3b82f6" stroke="#60a5fa" />
          <text x="60" y="34" fill="white" fontSize="10" textAnchor="middle">A</text>
          <rect x="100" y="20" width="80" height="20" fill="#22c55e" stroke="#4ade80" />
          <text x="140" y="34" fill="white" fontSize="10" textAnchor="middle">B</text>

          <text x="195" y="34" fill="#f59e0b" fontSize="12">=</text>

          <rect x="215" y="20" width="45" height="20" fill="#8b5cf6" stroke="#a78bfa" />
          <text x="237" y="34" fill="white" fontSize="10" textAnchor="middle">C</text>
          <rect x="270" y="20" width="60" height="20" fill="#ec4899" stroke="#f472b6" />
          <text x="300" y="34" fill="white" fontSize="10" textAnchor="middle">D</text>

          {/* C:D = E:F */}
          <rect x="30" y="60" width="45" height="20" fill="#8b5cf6" stroke="#a78bfa" />
          <text x="52" y="74" fill="white" fontSize="10" textAnchor="middle">C</text>
          <rect x="85" y="60" width="60" height="20" fill="#ec4899" stroke="#f472b6" />
          <text x="115" y="74" fill="white" fontSize="10" textAnchor="middle">D</text>

          <text x="160" y="74" fill="#f59e0b" fontSize="12">=</text>

          <rect x="180" y="60" width="50" height="20" fill="#f59e0b" stroke="#fbbf24" />
          <text x="205" y="74" fill="white" fontSize="10" textAnchor="middle">E</text>
          <rect x="240" y="60" width="66" height="20" fill="#06b6d4" stroke="#22d3ee" />
          <text x="273" y="74" fill="white" fontSize="10" textAnchor="middle">F</text>

          {/* Arrow */}
          <line x1="200" y1="95" x2="200" y2="115" stroke="#f59e0b" strokeWidth="2" />
          <polygon points="200,120 195,110 205,110" fill="#f59e0b" />

          {/* Conclusion: A:B = E:F */}
          <text x="30" y="145" fill="#f59e0b" fontSize="12">Therefore:</text>

          <rect x="110" y="130" width="60" height="20" fill="#3b82f6" stroke="#60a5fa" />
          <text x="140" y="144" fill="white" fontSize="10" textAnchor="middle">A</text>
          <rect x="180" y="130" width="80" height="20" fill="#22c55e" stroke="#4ade80" />
          <text x="220" y="144" fill="white" fontSize="10" textAnchor="middle">B</text>

          <text x="275" y="144" fill="#f59e0b" fontSize="12">=</text>

          <rect x="295" y="130" width="50" height="20" fill="#f59e0b" stroke="#fbbf24" />
          <text x="320" y="144" fill="white" fontSize="10" textAnchor="middle">E</text>
          <rect x="355" y="130" width="35" height="20" fill="#06b6d4" stroke="#22d3ee" />
          <text x="372" y="144" fill="white" fontSize="10" textAnchor="middle">F</text>
        </svg>

        <h3 className="text-lg font-semibold mt-6">Proof</h3>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 mt-2">
          <p className="text-dark-300">
            By Definition V.5, A:B = C:D means: for all m, n, mA ⋚ nB ⟺ mC ⋚ nD.
          </p>
          <p className="text-dark-300 mt-2">
            Similarly, C:D = E:F means: for all m, n, mC ⋚ nD ⟺ mE ⋚ nF.
          </p>
          <p className="text-dark-300 mt-2">
            Combining these (transitivity of ⟺):
          </p>
          <p className="text-dark-300 mt-2 text-center font-mono">
            mA ⋚ nB ⟺ mC ⋚ nD ⟺ mE ⋚ nF
          </p>
          <p className="text-dark-300 mt-2">
            Therefore mA ⋚ nB ⟺ mE ⋚ nF, which means A:B = E:F.
          </p>
        </div>

        <h3 className="text-lg font-semibold mt-6">The Equivalence Relation</h3>
        <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-4 border border-amber-500/20 mt-2">
          <p className="text-dark-300">
            This proposition establishes that equality of ratios is <strong>transitive</strong>.
            Combined with the obvious facts that:
          </p>
          <ul className="list-disc list-inside mt-2 text-dark-300">
            <li><strong>Reflexive:</strong> A:B = A:B</li>
            <li><strong>Symmetric:</strong> If A:B = C:D, then C:D = A:B</li>
            <li><strong>Transitive:</strong> If A:B = C:D and C:D = E:F, then A:B = E:F (V.11)</li>
          </ul>
          <p className="text-dark-300 mt-2">
            We see that "having the same ratio" is an <strong>equivalence relation</strong>.
          </p>
        </div>

        <h3 className="text-lg font-semibold mt-6">Why This Matters</h3>
        <p className="text-dark-300 mt-2">
          Transitivity is essential for building chains of reasoning. If we prove A:B = C:D
          and separately prove C:D = E:F, we can immediately conclude A:B = E:F without
          repeating the verification from Definition V.5.
        </p>

        <h3 className="text-lg font-semibold mt-6">Application</h3>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 mt-2">
          <p className="text-dark-300">
            This proposition is used constantly in geometric proofs where we establish
            proportions through intermediate steps. For example:
          </p>
          <ul className="list-disc list-inside mt-2 text-dark-300">
            <li>Area of triangle ABE : Area of triangle ABC = height from E : height from C</li>
            <li>Height from E : height from C = segment DE : segment DC</li>
            <li>Therefore: Area ratio = segment ratio</li>
          </ul>
        </div>
      </Proposition>
    </LessonLayout>
  );
}
