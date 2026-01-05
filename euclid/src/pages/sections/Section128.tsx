import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common';

export default function Section128() {
  return (
    <LessonLayout sectionId={128}>
      <Proposition
        title="Proposition V.9"
        statement="Magnitudes which have the same ratio to the same are equal to one another; and magnitudes to which the same has the same ratio are equal."
      >
        <h3 className="text-lg font-semibold mt-4">Statement in Modern Terms</h3>
        <p className="text-dark-300 mt-2">
          This is the converse of V.7:
        </p>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 mt-2 text-center">
          <p className="text-amber-400 font-mono text-lg">If A : C = B : C, then A = B</p>
          <p className="text-dark-400 mt-2">and</p>
          <p className="text-amber-400 font-mono text-lg">If C : A = C : B, then A = B</p>
        </div>

        <h3 className="text-lg font-semibold mt-6">Visual Representation</h3>
        <svg viewBox="0 0 400 140" className="w-full h-36 mt-4">
          {/* Given: A:C = B:C */}
          <text x="20" y="25" fill="#f59e0b" fontSize="12">Given: A:C = B:C</text>

          {/* Show A and B with unknown relationship */}
          <rect x="20" y="40" width="80" height="25" fill="#3b82f6" stroke="#60a5fa" />
          <text x="60" y="57" fill="white" fontSize="11" textAnchor="middle">A</text>

          <rect x="120" y="40" width="80" height="25" fill="#8b5cf6" stroke="#a78bfa" />
          <text x="160" y="57" fill="white" fontSize="11" textAnchor="middle">B</text>

          <rect x="220" y="40" width="60" height="25" fill="#22c55e" stroke="#4ade80" />
          <text x="250" y="57" fill="white" fontSize="11" textAnchor="middle">C</text>

          {/* Arrow showing deduction */}
          <line x1="200" y1="80" x2="200" y2="100" stroke="#f59e0b" strokeWidth="2" />
          <polygon points="200,105 195,95 205,95" fill="#f59e0b" />

          {/* Conclusion */}
          <text x="20" y="125" fill="#f59e0b" fontSize="12">Then: A = B</text>

          {/* Show equal magnitudes */}
          <rect x="120" y="110" width="80" height="25" fill="#3b82f6" stroke="#60a5fa" />
          <text x="145" y="127" fill="white" fontSize="11">A</text>
          <text x="175" y="127" fill="white" fontSize="11">=</text>
          <text x="185" y="127" fill="white" fontSize="11">B</text>
        </svg>

        <h3 className="text-lg font-semibold mt-6">Proof (by Contradiction)</h3>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 mt-2">
          <p className="text-dark-300">
            <strong>Part 1:</strong> Suppose A:C = B:C but A ≠ B.
          </p>
          <p className="text-dark-300 mt-2">
            Then either A {'>'} B or A {'<'} B.
          </p>
          <p className="text-dark-300 mt-2">
            If A {'>'} B, then by V.8, A:C {'>'} B:C—contradiction.
          </p>
          <p className="text-dark-300 mt-2">
            If A {'<'} B, then by V.8, A:C {'<'} B:C—contradiction.
          </p>
          <p className="text-dark-300 mt-2">
            Therefore A = B.
          </p>
          <p className="text-dark-300 mt-4">
            <strong>Part 2:</strong> The proof is analogous using the second part of V.8.
          </p>
        </div>

        <h3 className="text-lg font-semibold mt-6">The Trichotomy</h3>
        <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-4 border border-amber-500/20 mt-2">
          <p className="text-dark-300">
            Propositions V.7, V.8, and V.9 together establish a complete characterization:
          </p>
          <ul className="list-disc list-inside mt-2 text-dark-300">
            <li>A = B ⟺ A:C = B:C (V.7 and V.9)</li>
            <li>A {'>'} B ⟺ A:C {'>'} B:C (V.8 and V.10)</li>
            <li>A {'<'} B ⟺ A:C {'<'} B:C (V.8 and V.10)</li>
          </ul>
          <p className="text-dark-300 mt-2">
            This shows that ratios perfectly capture the ordering of magnitudes.
          </p>
        </div>

        <h3 className="text-lg font-semibold mt-6">Application</h3>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 mt-2">
          <p className="text-dark-300">
            This proposition is used frequently in later proofs to conclude that two magnitudes
            are equal. If we can show that two magnitudes have the same ratio to a common third
            magnitude, we can conclude they are equal.
          </p>
          <p className="text-dark-300 mt-2">
            For example, if we prove that the ratio of segment AB to segment EF equals the ratio
            of segment CD to EF, we can conclude AB = CD.
          </p>
        </div>

        <h3 className="text-lg font-semibold mt-6">Modern Interpretation</h3>
        <p className="text-dark-300 mt-2">
          In modern terms, if a/c = b/c (with c ≠ 0), then a = b. This cancellation property
          is fundamental to working with fractions and ratios.
        </p>
      </Proposition>
    </LessonLayout>
  );
}
