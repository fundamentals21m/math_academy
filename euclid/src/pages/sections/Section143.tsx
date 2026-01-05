import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common';

export default function Section143() {
  return (
    <LessonLayout sectionId={143}>
      <Proposition
        title="Proposition V.24"
        statement="If a first magnitude has to a second the same ratio that a third has to a fourth, and also a fifth has to the second the same ratio that a sixth has to the fourth, then the first and fifth added together will have to the second the same ratio that the third and sixth have to the fourth."
      >
        <h3 className="text-lg font-semibold mt-4">Statement in Modern Terms</h3>
        <p className="text-dark-300 mt-2">
          If A:B = C:D and E:B = F:D, then (A+E):B = (C+F):D.
        </p>
        <p className="text-dark-300 mt-2">
          Ratios with a common consequent can be added.
        </p>

        <h3 className="text-lg font-semibold mt-6">Visual Representation</h3>
        <svg viewBox="0 0 400 180" className="w-full h-44 mt-4">
          {/* First ratio */}
          <text x="20" y="20" fill="#f59e0b" fontSize="11">Given:</text>

          <rect x="30" y="30" width="50" height="20" fill="#3b82f6" stroke="#60a5fa" />
          <text x="55" y="44" fill="white" fontSize="9" textAnchor="middle">A</text>
          <text x="88" y="44" fill="#666" fontSize="10">:</text>
          <rect x="98" y="30" width="60" height="20" fill="#22c55e" stroke="#4ade80" />
          <text x="128" y="44" fill="white" fontSize="9" textAnchor="middle">B</text>

          <text x="170" y="44" fill="#f59e0b" fontSize="10">=</text>

          <rect x="190" y="30" width="40" height="20" fill="#8b5cf6" stroke="#a78bfa" />
          <text x="210" y="44" fill="white" fontSize="9" textAnchor="middle">C</text>
          <text x="238" y="44" fill="#666" fontSize="10">:</text>
          <rect x="248" y="30" width="48" height="20" fill="#ec4899" stroke="#f472b6" />
          <text x="272" y="44" fill="white" fontSize="9" textAnchor="middle">D</text>

          {/* Second ratio (same B and D) */}
          <rect x="30" y="60" width="35" height="20" fill="#06b6d4" stroke="#22d3ee" />
          <text x="47" y="74" fill="white" fontSize="9" textAnchor="middle">E</text>
          <text x="73" y="74" fill="#666" fontSize="10">:</text>
          <rect x="83" y="60" width="60" height="20" fill="#22c55e" stroke="#4ade80" />
          <text x="113" y="74" fill="white" fontSize="9" textAnchor="middle">B</text>

          <text x="155" y="74" fill="#f59e0b" fontSize="10">=</text>

          <rect x="175" y="60" width="28" height="20" fill="#f59e0b" stroke="#fbbf24" />
          <text x="189" y="74" fill="white" fontSize="9" textAnchor="middle">F</text>
          <text x="211" y="74" fill="#666" fontSize="10">:</text>
          <rect x="221" y="60" width="48" height="20" fill="#ec4899" stroke="#f472b6" />
          <text x="245" y="74" fill="white" fontSize="9" textAnchor="middle">D</text>

          {/* Note common B and D */}
          <text x="310" y="50" fill="#666" fontSize="9">Same B</text>
          <text x="310" y="70" fill="#666" fontSize="9">Same D</text>

          {/* Arrow */}
          <path d="M 200 95 L 200 115" stroke="#f59e0b" strokeWidth="2" fill="none" />
          <polygon points="200,120 195,110 205,110" fill="#f59e0b" />

          {/* Result */}
          <text x="20" y="145" fill="#f59e0b" fontSize="11">Therefore:</text>

          {/* A+E : B */}
          <rect x="90" y="133" width="50" height="20" fill="#3b82f6" stroke="#60a5fa" />
          <rect x="140" y="133" width="35" height="20" fill="#06b6d4" stroke="#22d3ee" />
          <text x="127" y="147" fill="white" fontSize="8" textAnchor="middle">A+E</text>
          <text x="183" y="147" fill="#666" fontSize="10">:</text>
          <rect x="193" y="133" width="40" height="20" fill="#22c55e" stroke="#4ade80" />
          <text x="213" y="147" fill="white" fontSize="9" textAnchor="middle">B</text>

          <text x="245" y="147" fill="#f59e0b" fontSize="10">=</text>

          {/* C+F : D */}
          <rect x="265" y="133" width="32" height="20" fill="#8b5cf6" stroke="#a78bfa" />
          <rect x="297" y="133" width="22" height="20" fill="#f59e0b" stroke="#fbbf24" />
          <text x="298" y="147" fill="white" fontSize="8" textAnchor="middle">C+F</text>
          <text x="327" y="147" fill="#666" fontSize="10">:</text>
          <rect x="337" y="133" width="32" height="20" fill="#ec4899" stroke="#f472b6" />
          <text x="353" y="147" fill="white" fontSize="9" textAnchor="middle">D</text>
        </svg>

        <h3 className="text-lg font-semibold mt-6">The Addition Rule</h3>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 mt-2">
          <p className="text-dark-300">
            When two ratios share the same consequent (denominator), we can add the antecedents:
          </p>
          <p className="text-amber-400 mt-2 font-mono text-center">
            A/B + E/B = (A+E)/B
          </p>
          <p className="text-dark-300 mt-2">
            V.24 proves this holds in the context of Euclid's proportion theory.
          </p>
        </div>

        <h3 className="text-lg font-semibold mt-6">Numerical Example</h3>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 mt-2">
          <p className="text-dark-300">
            Let A = 6, B = 4, C = 9, D = 6, E = 2, F = 3.
          </p>
          <ul className="list-disc list-inside mt-2 text-dark-300">
            <li>A:B = 6:4 = 3:2 and C:D = 9:6 = 3:2 ✓</li>
            <li>E:B = 2:4 = 1:2 and F:D = 3:6 = 1:2 ✓</li>
          </ul>
          <p className="text-dark-300 mt-2">
            Then (A+E):B = 8:4 = 2:1 and (C+F):D = 12:6 = 2:1 ✓
          </p>
          <p className="text-dark-400 mt-2 text-sm">
            Note: 3/2 + 1/2 = 4/2 = 2 ✓
          </p>
        </div>

        <h3 className="text-lg font-semibold mt-6">Proof Outline</h3>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 mt-2">
          <p className="text-dark-300">
            For any m, n, we need to show: m(A+E) ⋚ nB ⟺ m(C+F) ⋚ nD.
          </p>
          <p className="text-dark-300 mt-2">
            Since A:B = C:D, we have mA ⋚ nB ⟺ mC ⋚ nD.
          </p>
          <p className="text-dark-300 mt-2">
            Since E:B = F:D, we have mE ⋚ nB ⟺ mF ⋚ nD.
          </p>
          <p className="text-dark-300 mt-2">
            Adding these inequalities appropriately gives the result.
          </p>
        </div>

        <h3 className="text-lg font-semibold mt-6">Significance</h3>
        <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-4 border border-amber-500/20 mt-2">
          <p className="text-dark-300">
            This proposition establishes the additivity of proportions. When combined with
            V.17 and V.18 (separando/componendo), it provides a complete algebra of ratios
            that anticipates modern fraction arithmetic.
          </p>
        </div>
      </Proposition>
    </LessonLayout>
  );
}
