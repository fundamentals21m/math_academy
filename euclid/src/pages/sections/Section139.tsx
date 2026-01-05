import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common';

export default function Section139() {
  return (
    <LessonLayout sectionId={139}>
      <Proposition
        title="Proposition V.20"
        statement="If there are three magnitudes, and others equal to them in multitude, which taken two and two are in the same ratio, and if ex aequali the first is greater than the third, then the fourth will also be greater than the sixth; if equal, equal; and if less, less."
      >
        <h3 className="text-lg font-semibold mt-4">Statement in Modern Terms</h3>
        <p className="text-dark-300 mt-2">
          Given: A:B = D:E and B:C = E:F (in "perturbed" order: terms are matched across the sequences).
        </p>
        <p className="text-dark-300 mt-2">
          Then: The comparison A vs C gives the same result as D vs F.
        </p>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 mt-2">
          <ul className="list-disc list-inside text-dark-300">
            <li>If A {'>'} C, then D {'>'} F</li>
            <li>If A = C, then D = F</li>
            <li>If A {'<'} C, then D {'<'} F</li>
          </ul>
        </div>

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
          <rect x="100" y="43" width="54" height="20" fill="#3b82f6" stroke="#60a5fa" />
          <text x="127" y="57" fill="white" fontSize="9" textAnchor="middle">D</text>
          <rect x="164" y="43" width="45" height="20" fill="#22c55e" stroke="#4ade80" />
          <text x="186" y="57" fill="white" fontSize="9" textAnchor="middle">E</text>
          <rect x="219" y="43" width="36" height="20" fill="#8b5cf6" stroke="#a78bfa" />
          <text x="237" y="57" fill="white" fontSize="9" textAnchor="middle">F</text>

          {/* Ratios */}
          <text x="20" y="90" fill="#f59e0b" fontSize="11">Given:</text>
          <text x="100" y="90" fill="#3b82f6" fontSize="11">A:B = D:E</text>
          <text x="200" y="90" fill="#22c55e" fontSize="11">B:C = E:F</text>

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
            Notice the pattern of the ratios:
          </p>
          <ul className="list-disc list-inside mt-2 text-dark-300">
            <li>A:B = D:E (first terms : middle terms)</li>
            <li>B:C = E:F (middle terms : last terms)</li>
          </ul>
          <p className="text-dark-300 mt-2">
            This "perturbed" arrangement links the sequences via the middle terms B and E.
          </p>
        </div>

        <h3 className="text-lg font-semibold mt-6">Connection to Ex Aequali</h3>
        <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-4 border border-amber-500/20 mt-2">
          <p className="text-dark-300">
            This proposition is preparation for the ex aequali theorems (V.22-23). It establishes
            that when we chain ratios together, the comparison between first and last terms is
            preserved across corresponding sequences.
          </p>
          <p className="text-amber-400 mt-2 text-center font-mono">
            A vs C determines D vs F
          </p>
        </div>

        <h3 className="text-lg font-semibold mt-6">Numerical Example</h3>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 mt-2">
          <p className="text-dark-300">
            Let A = 12, B = 8, C = 6 and D = 18, E = 12, F = 9.
          </p>
          <ul className="list-disc list-inside mt-2 text-dark-300">
            <li>A:B = 12:8 = 3:2 and D:E = 18:12 = 3:2 ✓</li>
            <li>B:C = 8:6 = 4:3 and E:F = 12:9 = 4:3 ✓</li>
          </ul>
          <p className="text-dark-300 mt-2">
            A = 12 {'>'} C = 6, and indeed D = 18 {'>'} F = 9 ✓
          </p>
        </div>

        <h3 className="text-lg font-semibold mt-6">Significance</h3>
        <p className="text-dark-300 mt-2">
          V.20 shows that chained proportions preserve order. This is crucial for the powerful
          ex aequali results that follow, which allow us to "multiply" ratios by eliminating
          middle terms.
        </p>
      </Proposition>
    </LessonLayout>
  );
}
