import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common';

export default function Section123() {
  return (
    <LessonLayout sectionId={123}>
      <Proposition
        title="Proposition V.4"
        statement="If a first magnitude has to a second the same ratio that a third has to a fourth, any equimultiples whatever of the first and third have the same ratio to any equimultiples whatever of the second and fourth respectively, taken in corresponding order."
      >
        <h3 className="text-lg font-semibold mt-4">Statement in Modern Terms</h3>
        <p className="text-dark-300 mt-2">
          If A:B = C:D, then for any positive integers m, n, p, q:
        </p>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 mt-2 text-center">
          <p className="text-amber-400 font-mono text-lg">
            mA : pB = nC : qD when m/p = n/q
          </p>
        </div>
        <p className="text-dark-300 mt-4">
          More precisely: the comparison of mA with pB yields the same result as comparing nC with qD
          whenever the multiplier pairs are in the same ratio.
        </p>

        <h3 className="text-lg font-semibold mt-6">Key Insight</h3>
        <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-4 border border-amber-500/20 mt-2">
          <p className="text-dark-300">
            This generalizes V.3 by allowing <em>different</em> multiples, as long as they maintain
            the proper relationship. The crucial test for A:B = C:D is that for all m, n:
          </p>
          <p className="text-amber-400 mt-2 font-mono text-center">
            mA ⋚ nB ⟺ mC ⋚ nD
          </p>
          <p className="text-dark-300 mt-2">
            (where ⋚ means "is greater than, equal to, or less than")
          </p>
        </div>

        <h3 className="text-lg font-semibold mt-6">Visual Representation</h3>
        <svg viewBox="0 0 400 160" className="w-full h-40 mt-4">
          {/* Given: A:B = C:D */}
          <text x="20" y="25" fill="#f59e0b" fontSize="12">Given: A:B = C:D</text>

          {/* Original magnitudes */}
          <rect x="20" y="35" width="50" height="20" fill="#3b82f6" stroke="#60a5fa" />
          <text x="45" y="49" fill="white" fontSize="10" textAnchor="middle">A</text>
          <rect x="80" y="35" width="70" height="20" fill="#22c55e" stroke="#4ade80" />
          <text x="115" y="49" fill="white" fontSize="10" textAnchor="middle">B</text>

          <rect x="200" y="35" width="40" height="20" fill="#3b82f6" stroke="#60a5fa" />
          <text x="220" y="49" fill="white" fontSize="10" textAnchor="middle">C</text>
          <rect x="250" y="35" width="56" height="20" fill="#22c55e" stroke="#4ade80" />
          <text x="278" y="49" fill="white" fontSize="10" textAnchor="middle">D</text>

          {/* Divider */}
          <line x1="10" y1="70" x2="390" y2="70" stroke="#666" strokeDasharray="4" />

          {/* Take equimultiples: mA, pB and mC, pD */}
          <text x="20" y="90" fill="#f59e0b" fontSize="12">Take m=3, p=2:</text>

          {/* 3A vs 2B */}
          <rect x="20" y="100" width="150" height="20" fill="#3b82f6" stroke="#60a5fa" />
          <text x="95" y="114" fill="white" fontSize="10" textAnchor="middle">3A</text>
          <rect x="20" y="125" width="140" height="20" fill="#22c55e" stroke="#4ade80" />
          <text x="90" y="139" fill="white" fontSize="10" textAnchor="middle">2B</text>

          <text x="180" y="120" fill="#f59e0b" fontSize="14">{'>'}</text>

          {/* 3C vs 2D */}
          <rect x="200" y="100" width="120" height="20" fill="#3b82f6" stroke="#60a5fa" />
          <text x="260" y="114" fill="white" fontSize="10" textAnchor="middle">3C</text>
          <rect x="200" y="125" width="112" height="20" fill="#22c55e" stroke="#4ade80" />
          <text x="256" y="139" fill="white" fontSize="10" textAnchor="middle">2D</text>

          <text x="330" y="120" fill="#f59e0b" fontSize="14">{'>'}</text>

          <text x="345" y="118" fill="#666" fontSize="11">(same</text>
          <text x="345" y="132" fill="#666" fontSize="11">result)</text>
        </svg>

        <h3 className="text-lg font-semibold mt-6">Proof Outline</h3>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 mt-2">
          <p className="text-dark-300">
            This proposition follows directly from Definition V.5. The definition of A:B = C:D
            states that for <em>all</em> equimultiples m, n, the comparison of mA with nB gives
            the same result as comparing mC with nD.
          </p>
          <p className="text-dark-300 mt-4">
            So if we want to know how mA compares to pB, we simply use m and p as our test
            multipliers, and the result for mA vs pB will match the result for mC vs pD.
          </p>
        </div>

        <h3 className="text-lg font-semibold mt-6">Why This Matters</h3>
        <p className="text-dark-300 mt-2">
          This proposition (sometimes called the "fundamental property of proportions") makes
          precise what it means for ratios to be equal. It says that equal ratios "behave the
          same way" under all possible multiplier tests. This is exactly Definition V.5 restated
          as a theorem for clarity.
        </p>

        <h3 className="text-lg font-semibold mt-6">Application</h3>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 mt-2">
          <p className="text-dark-300">
            This proposition is used repeatedly in later proofs when we need to verify that two
            ratios are equal. To prove A:B = C:D, it suffices to show that mA ⋚ nB implies
            mC ⋚ nD for all positive integers m, n.
          </p>
        </div>
      </Proposition>
    </LessonLayout>
  );
}
