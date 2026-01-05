import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common';

export default function Section126() {
  return (
    <LessonLayout sectionId={126}>
      <Proposition
        title="Proposition V.7"
        statement="Equal magnitudes have the same ratio to the same magnitude, and the same magnitude has the same ratio to equal magnitudes."
      >
        <h3 className="text-lg font-semibold mt-4">Statement in Modern Terms</h3>
        <p className="text-dark-300 mt-2">
          If A = B, then for any magnitude C:
        </p>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 mt-2 text-center">
          <p className="text-amber-400 font-mono text-lg">A : C = B : C</p>
          <p className="text-dark-400 mt-2">and</p>
          <p className="text-amber-400 font-mono text-lg">C : A = C : B</p>
        </div>

        <h3 className="text-lg font-semibold mt-6">Visual Representation</h3>
        <svg viewBox="0 0 400 140" className="w-full h-36 mt-4">
          {/* A = B */}
          <text x="20" y="25" fill="#f59e0b" fontSize="12">Given: A = B</text>

          <rect x="20" y="35" width="80" height="25" fill="#3b82f6" stroke="#60a5fa" />
          <text x="60" y="52" fill="white" fontSize="11" textAnchor="middle">A</text>

          <text x="110" y="52" fill="#f59e0b" fontSize="14">=</text>

          <rect x="130" y="35" width="80" height="25" fill="#3b82f6" stroke="#60a5fa" />
          <text x="170" y="52" fill="white" fontSize="11" textAnchor="middle">B</text>

          {/* Reference magnitude C */}
          <rect x="280" y="35" width="60" height="25" fill="#22c55e" stroke="#4ade80" />
          <text x="310" y="52" fill="white" fontSize="11" textAnchor="middle">C</text>

          {/* Divider */}
          <line x1="10" y1="75" x2="390" y2="75" stroke="#666" strokeDasharray="4" />

          {/* Conclusion */}
          <text x="20" y="100" fill="#f59e0b" fontSize="12">Then:</text>
          <text x="80" y="100" fill="#3b82f6" fontSize="14">A : C = B : C</text>
          <text x="80" y="125" fill="#22c55e" fontSize="14">C : A = C : B</text>
        </svg>

        <h3 className="text-lg font-semibold mt-6">Proof</h3>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 mt-2">
          <p className="text-dark-300">
            <strong>Part 1 (A:C = B:C):</strong>
          </p>
          <p className="text-dark-300 mt-2">
            By Definition V.5, A:C = B:C means that for all m, n: mA ⋚ nC ⟺ mB ⋚ nC.
          </p>
          <p className="text-dark-300 mt-2">
            Since A = B, we have mA = mB for all m. Therefore the comparison of mA with nC gives
            exactly the same result as the comparison of mB with nC.
          </p>
          <p className="text-dark-300 mt-4">
            <strong>Part 2 (C:A = C:B):</strong>
          </p>
          <p className="text-dark-300 mt-2">
            Similarly, since A = B, we have nA = nB for all n. Therefore comparing mC with nA
            gives the same result as comparing mC with nB.
          </p>
        </div>

        <h3 className="text-lg font-semibold mt-6">Why This Matters</h3>
        <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-4 border border-amber-500/20 mt-2">
          <p className="text-dark-300">
            This proposition establishes that equal magnitudes can be freely substituted in ratios.
            It's analogous to the substitution principle in algebra: if a = b, then expressions
            involving a can be replaced with b without changing the value.
          </p>
        </div>

        <h3 className="text-lg font-semibold mt-6">Converse</h3>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 mt-2">
          <p className="text-dark-300">
            The converse is proved in V.9: if A:C = B:C (or C:A = C:B), then A = B.
          </p>
          <p className="text-dark-300 mt-2">
            Together, V.7 and V.9 establish that equality of magnitudes is equivalent to having
            the same ratio to (or from) any reference magnitude.
          </p>
        </div>

        <h3 className="text-lg font-semibold mt-6">Example</h3>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 mt-2">
          <p className="text-dark-300">
            If two line segments AB and CD are equal in length, then:
          </p>
          <ul className="list-disc list-inside mt-2 text-dark-300">
            <li>The ratio of AB to any segment EF equals the ratio of CD to EF</li>
            <li>The ratio of any segment EF to AB equals the ratio of EF to CD</li>
          </ul>
        </div>
      </Proposition>
    </LessonLayout>
  );
}
