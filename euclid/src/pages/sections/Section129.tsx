import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common';

export default function Section129() {
  return (
    <LessonLayout sectionId={129}>
      <Proposition
        title="Proposition V.10"
        statement="Of magnitudes which have a ratio to the same, that which has the greater ratio is greater; and that to which the same has a greater ratio is less."
      >
        <h3 className="text-lg font-semibold mt-4">Statement in Modern Terms</h3>
        <p className="text-dark-300 mt-2">
          This is the converse of V.8:
        </p>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 mt-2 text-center">
          <p className="text-amber-400 font-mono text-lg">If A : C {'>'} B : C, then A {'>'} B</p>
          <p className="text-dark-400 mt-2">and</p>
          <p className="text-amber-400 font-mono text-lg">If C : A {'>'} C : B, then A {'<'} B</p>
        </div>

        <h3 className="text-lg font-semibold mt-6">Visual Representation</h3>
        <svg viewBox="0 0 400 150" className="w-full h-38 mt-4">
          {/* Given */}
          <text x="20" y="25" fill="#f59e0b" fontSize="12">Given: A:C {'>'} B:C</text>

          {/* Ratio comparison */}
          <rect x="30" y="40" width="100" height="20" fill="#3b82f6" stroke="#60a5fa" />
          <text x="80" y="54" fill="white" fontSize="10" textAnchor="middle">A</text>
          <rect x="140" y="40" width="60" height="20" fill="#22c55e" stroke="#4ade80" />
          <text x="170" y="54" fill="white" fontSize="10" textAnchor="middle">C</text>

          <text x="220" y="54" fill="#f59e0b" fontSize="16">{'>'}</text>

          <rect x="250" y="40" width="70" height="20" fill="#ef4444" stroke="#f87171" />
          <text x="285" y="54" fill="white" fontSize="10" textAnchor="middle">B</text>
          <rect x="330" y="40" width="60" height="20" fill="#22c55e" stroke="#4ade80" />
          <text x="360" y="54" fill="white" fontSize="10" textAnchor="middle">C</text>

          {/* Arrow */}
          <line x1="200" y1="75" x2="200" y2="95" stroke="#f59e0b" strokeWidth="2" />
          <polygon points="200,100 195,90 205,90" fill="#f59e0b" />

          {/* Conclusion */}
          <text x="20" y="125" fill="#f59e0b" fontSize="12">Then: A {'>'} B</text>

          <rect x="100" y="110" width="100" height="20" fill="#3b82f6" stroke="#60a5fa" />
          <text x="150" y="124" fill="white" fontSize="10" textAnchor="middle">A</text>
          <text x="210" y="124" fill="#f59e0b" fontSize="14">{'>'}</text>
          <rect x="230" y="110" width="70" height="20" fill="#ef4444" stroke="#f87171" />
          <text x="265" y="124" fill="white" fontSize="10" textAnchor="middle">B</text>
        </svg>

        <h3 className="text-lg font-semibold mt-6">Proof (by Contradiction)</h3>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 mt-2">
          <p className="text-dark-300">
            <strong>Part 1:</strong> Suppose A:C {'>'} B:C. We want to show A {'>'} B.
          </p>
          <p className="text-dark-300 mt-2">
            Assume A ≤ B. There are two cases:
          </p>
          <p className="text-dark-300 mt-2">
            <em>Case 1:</em> If A = B, then by V.7, A:C = B:C—contradicting A:C {'>'} B:C.
          </p>
          <p className="text-dark-300 mt-2">
            <em>Case 2:</em> If A {'<'} B, then by V.8, A:C {'<'} B:C—contradicting A:C {'>'} B:C.
          </p>
          <p className="text-dark-300 mt-2">
            Therefore A {'>'} B.
          </p>
          <p className="text-dark-300 mt-4">
            <strong>Part 2:</strong> The proof is analogous for C:A {'>'} C:B implying A {'<'} B.
          </p>
        </div>

        <h3 className="text-lg font-semibold mt-6">Complete Characterization</h3>
        <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-4 border border-amber-500/20 mt-2">
          <p className="text-dark-300">
            With V.7, V.8, V.9, and V.10, we have established:
          </p>
          <table className="mt-4 w-full text-dark-300">
            <tbody>
              <tr>
                <td className="py-1">A = B</td>
                <td className="py-1">⟺</td>
                <td className="py-1">A:C = B:C</td>
                <td className="py-1">⟺</td>
                <td className="py-1">C:A = C:B</td>
              </tr>
              <tr>
                <td className="py-1">A {'>'} B</td>
                <td className="py-1">⟺</td>
                <td className="py-1">A:C {'>'} B:C</td>
                <td className="py-1">⟺</td>
                <td className="py-1">C:A {'<'} C:B</td>
              </tr>
              <tr>
                <td className="py-1">A {'<'} B</td>
                <td className="py-1">⟺</td>
                <td className="py-1">A:C {'<'} B:C</td>
                <td className="py-1">⟺</td>
                <td className="py-1">C:A {'>'} C:B</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-semibold mt-6">Significance</h3>
        <p className="text-dark-300 mt-2">
          This proposition completes the order-preserving relationship between magnitudes and
          their ratios. It tells us that the ordering of ratios faithfully reflects the ordering
          of magnitudes—no information is lost when we compare via ratios.
        </p>

        <h3 className="text-lg font-semibold mt-6">Application</h3>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 mt-2">
          <p className="text-dark-300">
            This result is used to compare magnitudes indirectly. If we know that A:C {'>'} B:C
            (perhaps by calculating or constructing these ratios), we can conclude A {'>'} B
            without directly comparing A and B.
          </p>
        </div>
      </Proposition>
    </LessonLayout>
  );
}
