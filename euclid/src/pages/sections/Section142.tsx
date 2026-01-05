import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common';

export default function Section142() {
  return (
    <LessonLayout sectionId={142}>
      <Proposition
        title="Proposition V.23"
        statement="If there are three magnitudes, and others equal to them in multitude, which taken two and two together are in the same ratio, and the proportion of them is perturbed, they will also be in the same ratio ex aequali."
      >
        <h3 className="text-lg font-semibold mt-4">Statement (Ex Aequali - Perturbed)</h3>
        <p className="text-dark-300 mt-2">
          If A:B = E:F and B:C = D:E, then A:C = D:F.
        </p>
        <p className="text-dark-300 mt-2">
          Even with "crossed" matching, the ex aequali relationship holds.
        </p>

        <h3 className="text-lg font-semibold mt-6">Visual Representation</h3>
        <svg viewBox="0 0 400 180" className="w-full h-44 mt-4">
          {/* Perturbed ratios */}
          <text x="20" y="25" fill="#f59e0b" fontSize="11">Given (perturbed):</text>

          {/* First ratio - note E:F not D:E */}
          <rect x="30" y="35" width="50" height="20" fill="#3b82f6" stroke="#60a5fa" />
          <text x="55" y="49" fill="white" fontSize="9" textAnchor="middle">A</text>
          <text x="88" y="49" fill="#666" fontSize="10">:</text>
          <rect x="98" y="35" width="40" height="20" fill="#22c55e" stroke="#4ade80" />
          <text x="118" y="49" fill="white" fontSize="9" textAnchor="middle">B</text>

          <text x="145" y="49" fill="#f59e0b" fontSize="10">=</text>

          <rect x="160" y="35" width="36" height="20" fill="#f59e0b" stroke="#fbbf24" />
          <text x="178" y="49" fill="white" fontSize="9" textAnchor="middle">E</text>
          <text x="204" y="49" fill="#666" fontSize="10">:</text>
          <rect x="214" y="35" width="27" height="20" fill="#8b5cf6" stroke="#a78bfa" />
          <text x="227" y="49" fill="white" fontSize="9" textAnchor="middle">F</text>

          {/* Second ratio - crossed */}
          <rect x="30" y="65" width="40" height="20" fill="#22c55e" stroke="#4ade80" />
          <text x="50" y="79" fill="white" fontSize="9" textAnchor="middle">B</text>
          <text x="78" y="79" fill="#666" fontSize="10">:</text>
          <rect x="88" y="65" width="30" height="20" fill="#ec4899" stroke="#f472b6" />
          <text x="103" y="79" fill="white" fontSize="9" textAnchor="middle">C</text>

          <text x="125" y="79" fill="#f59e0b" fontSize="10">=</text>

          <rect x="140" y="65" width="45" height="20" fill="#06b6d4" stroke="#22d3ee" />
          <text x="162" y="79" fill="white" fontSize="9" textAnchor="middle">D</text>
          <text x="193" y="79" fill="#666" fontSize="10">:</text>
          <rect x="203" y="65" width="36" height="20" fill="#f59e0b" stroke="#fbbf24" />
          <text x="221" y="79" fill="white" fontSize="9" textAnchor="middle">E</text>

          {/* Note the crossing */}
          <text x="280" y="57" fill="#666" fontSize="9">Notice: E appears</text>
          <text x="280" y="70" fill="#666" fontSize="9">on opposite sides!</text>

          {/* Arrow */}
          <path d="M 200 100 L 200 120" stroke="#f59e0b" strokeWidth="2" fill="none" />
          <polygon points="200,125 195,115 205,115" fill="#f59e0b" />
          <text x="215" y="115" fill="#f59e0b" fontSize="10">ex aequali</text>

          {/* Result */}
          <text x="20" y="150" fill="#f59e0b" fontSize="11">Therefore:</text>

          <rect x="100" y="138" width="50" height="20" fill="#3b82f6" stroke="#60a5fa" />
          <text x="125" y="152" fill="white" fontSize="9" textAnchor="middle">A</text>
          <text x="158" y="152" fill="#666" fontSize="10">:</text>
          <rect x="168" y="138" width="30" height="20" fill="#ec4899" stroke="#f472b6" />
          <text x="183" y="152" fill="white" fontSize="9" textAnchor="middle">C</text>

          <text x="210" y="152" fill="#f59e0b" fontSize="12">=</text>

          <rect x="230" y="138" width="45" height="20" fill="#06b6d4" stroke="#22d3ee" />
          <text x="252" y="152" fill="white" fontSize="9" textAnchor="middle">D</text>
          <text x="283" y="152" fill="#666" fontSize="10">:</text>
          <rect x="293" y="138" width="27" height="20" fill="#8b5cf6" stroke="#a78bfa" />
          <text x="306" y="152" fill="white" fontSize="9" textAnchor="middle">F</text>
        </svg>

        <h3 className="text-lg font-semibold mt-6">Compare V.22 and V.23</h3>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 mt-2">
          <table className="w-full text-dark-300">
            <thead>
              <tr>
                <th className="text-left py-1 text-amber-400">V.22 (ordered)</th>
                <th className="text-left py-1 text-amber-400">V.23 (perturbed)</th>
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
              <tr className="border-t border-dark-600">
                <td className="py-1 font-bold">∴ A:C = D:F</td>
                <td className="py-1 font-bold">∴ A:C = D:F</td>
              </tr>
            </tbody>
          </table>
          <p className="text-dark-400 mt-2 text-sm">
            Same conclusion, different arrangement of terms in the premises!
          </p>
        </div>

        <h3 className="text-lg font-semibold mt-6">Why Perturbed Matters</h3>
        <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-4 border border-amber-500/20 mt-2">
          <p className="text-dark-300">
            In geometric proofs, proportions don't always line up neatly. Sometimes the "middle
            term" appears as the consequent in one ratio and the antecedent in another.
          </p>
          <p className="text-dark-300 mt-2">
            V.23 handles this case, ensuring that ex aequali works regardless of how the
            intermediate terms are arranged.
          </p>
        </div>

        <h3 className="text-lg font-semibold mt-6">Numerical Example</h3>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 mt-2">
          <p className="text-dark-300">
            Let A = 8, B = 4, C = 2 and D = 6, E = 4, F = 2.
          </p>
          <ul className="list-disc list-inside mt-2 text-dark-300">
            <li>A:B = 8:4 = 2:1 and E:F = 4:2 = 2:1 ✓</li>
            <li>B:C = 4:2 = 2:1 and D:E = 6:4 = 3:2... </li>
          </ul>
          <p className="text-dark-300 mt-2">
            Let me adjust: D = 8, E = 4, F = 2.
          </p>
          <ul className="list-disc list-inside mt-2 text-dark-300">
            <li>A:B = 8:4 = 2:1 and E:F = 4:2 = 2:1 ✓</li>
            <li>B:C = 4:2 = 2:1 and D:E = 8:4 = 2:1 ✓</li>
          </ul>
          <p className="text-dark-300 mt-2">
            Ex aequali: A:C = 8:2 = 4:1 and D:F = 8:2 = 4:1 ✓
          </p>
        </div>

        <h3 className="text-lg font-semibold mt-6">Significance</h3>
        <p className="text-dark-300 mt-2">
          Together, V.22 and V.23 provide the complete ex aequali toolkit. No matter how
          proportions are arranged, we can compose them to relate the first and last terms.
        </p>
      </Proposition>
    </LessonLayout>
  );
}
