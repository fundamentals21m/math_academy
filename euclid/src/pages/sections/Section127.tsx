import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common';

export default function Section127() {
  return (
    <LessonLayout sectionId={127}>
      <Proposition
        title="Proposition V.8"
        statement="Of unequal magnitudes, the greater has a greater ratio to the same than the less has; and the same has a greater ratio to the less than to the greater."
      >
        <h3 className="text-lg font-semibold mt-4">Statement in Modern Terms</h3>
        <p className="text-dark-300 mt-2">
          If A {'>'} B, then for any magnitude C:
        </p>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 mt-2 text-center">
          <p className="text-amber-400 font-mono text-lg">A : C {'>'} B : C</p>
          <p className="text-dark-400 mt-2">and</p>
          <p className="text-amber-400 font-mono text-lg">C : B {'>'} C : A</p>
        </div>

        <h3 className="text-lg font-semibold mt-6">Visual Representation</h3>
        <svg viewBox="0 0 400 160" className="w-full h-40 mt-4">
          {/* A > B */}
          <text x="20" y="25" fill="#f59e0b" fontSize="12">Given: A {'>'} B</text>

          <rect x="20" y="35" width="120" height="25" fill="#3b82f6" stroke="#60a5fa" />
          <text x="80" y="52" fill="white" fontSize="11" textAnchor="middle">A</text>

          <rect x="20" y="70" width="80" height="25" fill="#ef4444" stroke="#f87171" />
          <text x="60" y="87" fill="white" fontSize="11" textAnchor="middle">B</text>

          {/* Reference C */}
          <rect x="200" y="52" width="60" height="25" fill="#22c55e" stroke="#4ade80" />
          <text x="230" y="69" fill="white" fontSize="11" textAnchor="middle">C</text>

          {/* Divider */}
          <line x1="10" y1="110" x2="390" y2="110" stroke="#666" strokeDasharray="4" />

          {/* Conclusions */}
          <text x="20" y="135" fill="#f59e0b" fontSize="12">Then:</text>
          <text x="80" y="135" fill="#3b82f6" fontSize="13">A:C {'>'} B:C</text>
          <text x="200" y="135" fill="#22c55e" fontSize="13">C:B {'>'} C:A</text>
        </svg>

        <h3 className="text-lg font-semibold mt-6">Intuitive Explanation</h3>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 mt-2">
          <p className="text-dark-300">
            <strong>Part 1 (A:C {'>'} B:C):</strong> The ratio of a larger quantity to a fixed reference
            is greater than the ratio of a smaller quantity to the same reference. Just as 6:2 {'>'} 4:2.
          </p>
          <p className="text-dark-300 mt-4">
            <strong>Part 2 (C:B {'>'} C:A):</strong> The ratio of a fixed quantity to a smaller reference
            is greater than its ratio to a larger reference. Just as 6:2 {'>'} 6:4 (3 {'>'} 1.5).
          </p>
        </div>

        <h3 className="text-lg font-semibold mt-6">Proof Outline</h3>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 mt-2">
          <p className="text-dark-300">
            Since A {'>'} B, there exist m, n such that mA {'>'} nC but mB ≤ nC (the larger magnitude
            "crosses the threshold" before the smaller one does).
          </p>
          <p className="text-dark-300 mt-2">
            By Definition V.7, this means A:C {'>'} B:C.
          </p>
          <p className="text-dark-300 mt-4">
            For the second part, since A {'>'} B, there exist m, n such that mC {'>'} nB but mC ≤ nA.
            This means C:B {'>'} C:A.
          </p>
        </div>

        <h3 className="text-lg font-semibold mt-6">Numerical Example</h3>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 mt-2">
          <p className="text-dark-300">Let A = 6, B = 4, C = 3.</p>
          <ul className="list-disc list-inside mt-2 text-dark-300">
            <li>A:C = 6:3 = 2</li>
            <li>B:C = 4:3 ≈ 1.33</li>
            <li>So A:C {'>'} B:C ✓</li>
          </ul>
          <ul className="list-disc list-inside mt-2 text-dark-300">
            <li>C:B = 3:4 = 0.75</li>
            <li>C:A = 3:6 = 0.5</li>
            <li>So C:B {'>'} C:A ✓</li>
          </ul>
        </div>

        <h3 className="text-lg font-semibold mt-6">Significance</h3>
        <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-4 border border-amber-500/20 mt-2">
          <p className="text-dark-300">
            This proposition establishes the <strong>monotonicity</strong> of ratios: larger
            magnitudes give larger ratios (as numerators) or smaller ratios (as denominators).
            This is essential for comparing ratios and proving inequalities involving proportions.
          </p>
        </div>

        <h3 className="text-lg font-semibold mt-6">Relationship to Other Propositions</h3>
        <p className="text-dark-300 mt-2">
          This proposition is the "strict inequality" version of V.7 (which handles equality).
          Together with V.10, it provides a complete ordering theory for ratios: equal magnitudes
          give equal ratios, unequal magnitudes give unequal ratios, and the inequality preserves
          the expected direction.
        </p>
      </Proposition>
    </LessonLayout>
  );
}
