import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common';

export default function Section140() {
  return (
    <LessonLayout sectionId={140}>
      <Proposition
        title="Proposition V.21"
        statement="If there are three magnitudes, and others equal to them in multitude, which taken two and two together are in the same ratio, and the proportion of them is perturbed, then if ex aequali the first is greater than the third, the fourth will also be greater than the sixth; if equal, equal; and if less, less."
      >
        <h3 className="text-lg font-semibold mt-4">Statement in Modern Terms</h3>
        <p className="text-dark-300 mt-2">
          Given: A:B = E:F and B:C = D:E (perturbed order—note D and E are swapped in second ratio).
        </p>
        <p className="text-dark-300 mt-2">
          Then: The comparison A vs C gives the same result as D vs F.
        </p>

        <h3 className="text-lg font-semibold mt-6">Visual Representation</h3>
        <svg viewBox="0 0 400 160" className="w-full h-40 mt-4">
          {/* Sequence 1: A, B, C */}
          <text x="20" y="20" fill="#f59e0b" fontSize="11">Sequence 1:</text>
          <rect x="100" y="8" width="60" height="20" fill="#3b82f6" stroke="#60a5fa" />
          <text x="130" y="22" fill="white" fontSize="9" textAnchor="middle">A</text>
          <rect x="170" y="8" width="50" height="20" fill="#22c55e" stroke="#4ade80" />
          <text x="195" y="22" fill="white" fontSize="9" textAnchor="middle">B</text>
          <rect x="230" y="8" width="40" height="20" fill="#8b5cf6" stroke="#a78bfa" />
          <text x="250" y="22" fill="white" fontSize="9" textAnchor="middle">C</text>

          {/* Sequence 2: D, E, F */}
          <text x="20" y="55" fill="#f59e0b" fontSize="11">Sequence 2:</text>
          <rect x="100" y="43" width="48" height="20" fill="#ec4899" stroke="#f472b6" />
          <text x="124" y="57" fill="white" fontSize="9" textAnchor="middle">D</text>
          <rect x="158" y="43" width="40" height="20" fill="#f59e0b" stroke="#fbbf24" />
          <text x="178" y="57" fill="white" fontSize="9" textAnchor="middle">E</text>
          <rect x="208" y="43" width="32" height="20" fill="#06b6d4" stroke="#22d3ee" />
          <text x="224" y="57" fill="white" fontSize="9" textAnchor="middle">F</text>

          {/* Ratios - note the "crossed" pattern */}
          <text x="20" y="90" fill="#f59e0b" fontSize="11">Given (perturbed):</text>
          <text x="130" y="90" fill="#3b82f6" fontSize="11">A:B = E:F</text>
          <text x="240" y="90" fill="#22c55e" fontSize="11">B:C = D:E</text>

          {/* Divider */}
          <line x1="10" y1="105" x2="390" y2="105" stroke="#666" strokeDasharray="4" />

          {/* Conclusion */}
          <text x="20" y="130" fill="#f59e0b" fontSize="11">Conclusion:</text>
          <text x="100" y="130" fill="#666" fontSize="11">If A {'>'} C, then D {'>'} F</text>
          <text x="100" y="148" fill="#666" fontSize="11">(same for = and {'<'})</text>
        </svg>

        <h3 className="text-lg font-semibold mt-6">The "Perturbed" Pattern</h3>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 mt-2">
          <p className="text-dark-300">
            Notice how the second sequence appears "out of order" in the ratios:
          </p>
          <ul className="list-disc list-inside mt-2 text-dark-300">
            <li>A:B = E:F (A matches with E, B matches with F)</li>
            <li>B:C = D:E (B matches with D, C matches with E)</li>
          </ul>
          <p className="text-dark-300 mt-2">
            This "crossing" pattern is why it's called <strong>perturbed proportion</strong>.
          </p>
        </div>

        <h3 className="text-lg font-semibold mt-6">Contrast with V.20</h3>
        <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-4 border border-amber-500/20 mt-2">
          <table className="w-full text-dark-300">
            <thead>
              <tr>
                <th className="text-left py-1 text-amber-400">V.20 (ordered)</th>
                <th className="text-left py-1 text-amber-400">V.21 (perturbed)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-1">A:B = D:E</td>
                <td className="py-1">A:B = E:F</td>
              </tr>
              <tr>
                <td className="py-1">B:C = E:F</td>
                <td className="py-1">B:C = D:E</td>
              </tr>
            </tbody>
          </table>
          <p className="text-dark-300 mt-2">
            V.21 handles the case where the second sequence is "scrambled."
          </p>
        </div>

        <h3 className="text-lg font-semibold mt-6">Numerical Example</h3>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 mt-2">
          <p className="text-dark-300">
            Let A = 12, B = 8, C = 6 and D = 9, E = 6, F = 4.
          </p>
          <ul className="list-disc list-inside mt-2 text-dark-300">
            <li>A:B = 12:8 = 3:2 and E:F = 6:4 = 3:2 ✓</li>
            <li>B:C = 8:6 = 4:3 and D:E = 9:6... wait, that's 3:2, not 4:3!</li>
          </ul>
          <p className="text-dark-300 mt-2">
            Let me fix: D = 8, E = 6, F = 4.
          </p>
          <ul className="list-disc list-inside mt-2 text-dark-300">
            <li>A:B = 12:8 = 3:2 and E:F = 6:4 = 3:2 ✓</li>
            <li>B:C = 8:6 = 4:3 and D:E = 8:6 = 4:3 ✓</li>
          </ul>
          <p className="text-dark-300 mt-2">
            A = 12 {'>'} C = 6, and D = 8 {'>'} F = 4 ✓
          </p>
        </div>

        <h3 className="text-lg font-semibold mt-6">Significance</h3>
        <p className="text-dark-300 mt-2">
          V.21 extends V.20 to handle perturbed proportions. Together, these propositions
          prepare the way for the general ex aequali theorem, which is one of the most
          powerful tools in the theory of proportions.
        </p>
      </Proposition>
    </LessonLayout>
  );
}
