import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common';

export default function Section131() {
  return (
    <LessonLayout sectionId={131}>
      <Proposition
        title="Proposition V.12"
        statement="If any number of magnitudes are proportional, then as one of the antecedents is to one of the consequents, so are all the antecedents to all the consequents."
      >
        <h3 className="text-lg font-semibold mt-4">Statement in Modern Terms</h3>
        <p className="text-dark-300 mt-2">
          If A:B = C:D = E:F = ... (any number of equal ratios), then:
        </p>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 mt-2 text-center">
          <p className="text-amber-400 font-mono text-lg">
            A : B = (A + C + E + ...) : (B + D + F + ...)
          </p>
        </div>

        <h3 className="text-lg font-semibold mt-6">Visual Representation</h3>
        <svg viewBox="0 0 400 180" className="w-full h-44 mt-4">
          {/* Given ratios */}
          <text x="10" y="20" fill="#f59e0b" fontSize="11">Given: A:B = C:D = E:F</text>

          {/* Row 1: A:B */}
          <rect x="20" y="30" width="40" height="18" fill="#3b82f6" stroke="#60a5fa" />
          <text x="40" y="43" fill="white" fontSize="9" textAnchor="middle">A</text>
          <rect x="65" y="30" width="60" height="18" fill="#22c55e" stroke="#4ade80" />
          <text x="95" y="43" fill="white" fontSize="9" textAnchor="middle">B</text>

          {/* Row 2: C:D */}
          <rect x="20" y="55" width="60" height="18" fill="#3b82f6" stroke="#60a5fa" />
          <text x="50" y="68" fill="white" fontSize="9" textAnchor="middle">C</text>
          <rect x="85" y="55" width="90" height="18" fill="#22c55e" stroke="#4ade80" />
          <text x="130" y="68" fill="white" fontSize="9" textAnchor="middle">D</text>

          {/* Row 3: E:F */}
          <rect x="20" y="80" width="30" height="18" fill="#3b82f6" stroke="#60a5fa" />
          <text x="35" y="93" fill="white" fontSize="9" textAnchor="middle">E</text>
          <rect x="55" y="80" width="45" height="18" fill="#22c55e" stroke="#4ade80" />
          <text x="77" y="93" fill="white" fontSize="9" textAnchor="middle">F</text>

          {/* Divider */}
          <line x1="10" y1="110" x2="200" y2="110" stroke="#666" strokeDasharray="4" />

          {/* Sum row */}
          <text x="10" y="130" fill="#f59e0b" fontSize="11">Sum:</text>
          <rect x="50" y="117" width="130" height="18" fill="#3b82f6" stroke="#60a5fa" />
          <text x="115" y="130" fill="white" fontSize="9" textAnchor="middle">A+C+E</text>
          <rect x="50" y="140" width="195" height="18" fill="#22c55e" stroke="#4ade80" />
          <text x="147" y="153" fill="white" fontSize="9" textAnchor="middle">B+D+F</text>

          {/* Conclusion */}
          <text x="220" y="90" fill="#f59e0b" fontSize="12">Therefore:</text>
          <text x="220" y="115" fill="#f59e0b" fontSize="12">A:B = (A+C+E):(B+D+F)</text>
          <text x="220" y="140" fill="#666" fontSize="10">The sums maintain</text>
          <text x="220" y="155" fill="#666" fontSize="10">the same ratio!</text>
        </svg>

        <h3 className="text-lg font-semibold mt-6">Numerical Example</h3>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 mt-2">
          <p className="text-dark-300">
            Let A:B = C:D = E:F = 2:3
          </p>
          <ul className="list-disc list-inside mt-2 text-dark-300">
            <li>A = 2, B = 3</li>
            <li>C = 4, D = 6</li>
            <li>E = 6, F = 9</li>
          </ul>
          <p className="text-dark-300 mt-2">
            Sum of antecedents: 2 + 4 + 6 = 12
          </p>
          <p className="text-dark-300">
            Sum of consequents: 3 + 6 + 9 = 18
          </p>
          <p className="text-amber-400 mt-2">
            12:18 = 2:3 ✓ (same ratio as each individual pair)
          </p>
        </div>

        <h3 className="text-lg font-semibold mt-6">Proof Outline</h3>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 mt-2">
          <p className="text-dark-300">
            To show A:B = (A+C+E):(B+D+F), we use Definition V.5.
          </p>
          <p className="text-dark-300 mt-2">
            For any m, n, we need: m(A+C+E) ⋚ n(B+D+F) ⟺ mA ⋚ nB.
          </p>
          <p className="text-dark-300 mt-2">
            Since A:B = C:D = E:F, we have:
          </p>
          <ul className="list-disc list-inside mt-1 text-dark-300">
            <li>mA ⋚ nB</li>
            <li>mC ⋚ nD (same comparison)</li>
            <li>mE ⋚ nF (same comparison)</li>
          </ul>
          <p className="text-dark-300 mt-2">
            By V.1 and V.2, adding these: m(A+C+E) ⋚ n(B+D+F).
          </p>
        </div>

        <h3 className="text-lg font-semibold mt-6">Significance</h3>
        <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-4 border border-amber-500/20 mt-2">
          <p className="text-dark-300">
            This proposition is extremely useful in geometry. When dealing with similar figures,
            corresponding sides have equal ratios. V.12 tells us that if we sum all the sides,
            the totals also have the same ratio. This applies to perimeters of similar polygons.
          </p>
        </div>

        <h3 className="text-lg font-semibold mt-6">Modern Algebra</h3>
        <p className="text-dark-300 mt-2">
          If a/b = c/d = e/f = k (some constant ratio), then:
        </p>
        <p className="text-amber-400 font-mono mt-2 text-center">
          (a + c + e)/(b + d + f) = k
        </p>
        <p className="text-dark-300 mt-2">
          This is because a = kb, c = kd, e = kf, so a + c + e = k(b + d + f).
        </p>
      </Proposition>
    </LessonLayout>
  );
}
