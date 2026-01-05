import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common';

export default function Section141() {
  return (
    <LessonLayout sectionId={141}>
      <Proposition
        title="Proposition V.22"
        statement="If there are any number of magnitudes whatever, and others equal to them in multitude, which taken two and two together are in the same ratio, they will also be in the same ratio ex aequali."
      >
        <h3 className="text-lg font-semibold mt-4">Statement (Ex Aequali - Ordered)</h3>
        <p className="text-dark-300 mt-2">
          If A:B = D:E and B:C = E:F, then A:C = D:F.
        </p>
        <p className="text-dark-300 mt-2">
          This generalizes to any number of magnitudes: chained ratios can be "multiplied."
        </p>

        <h3 className="text-lg font-semibold mt-6">Visual Representation</h3>
        <svg viewBox="0 0 400 180" className="w-full h-44 mt-4">
          {/* Chain of ratios */}
          <text x="20" y="25" fill="#f59e0b" fontSize="11">Given chain:</text>

          {/* First ratio */}
          <rect x="30" y="35" width="50" height="20" fill="#3b82f6" stroke="#60a5fa" />
          <text x="55" y="49" fill="white" fontSize="9" textAnchor="middle">A</text>
          <text x="88" y="49" fill="#666" fontSize="10">:</text>
          <rect x="98" y="35" width="40" height="20" fill="#22c55e" stroke="#4ade80" />
          <text x="118" y="49" fill="white" fontSize="9" textAnchor="middle">B</text>

          <text x="145" y="49" fill="#f59e0b" fontSize="10">=</text>

          <rect x="160" y="35" width="45" height="20" fill="#3b82f6" stroke="#60a5fa" />
          <text x="182" y="49" fill="white" fontSize="9" textAnchor="middle">D</text>
          <text x="213" y="49" fill="#666" fontSize="10">:</text>
          <rect x="223" y="35" width="36" height="20" fill="#22c55e" stroke="#4ade80" />
          <text x="241" y="49" fill="white" fontSize="9" textAnchor="middle">E</text>

          {/* Second ratio */}
          <rect x="30" y="65" width="40" height="20" fill="#22c55e" stroke="#4ade80" />
          <text x="50" y="79" fill="white" fontSize="9" textAnchor="middle">B</text>
          <text x="78" y="79" fill="#666" fontSize="10">:</text>
          <rect x="88" y="65" width="30" height="20" fill="#8b5cf6" stroke="#a78bfa" />
          <text x="103" y="79" fill="white" fontSize="9" textAnchor="middle">C</text>

          <text x="125" y="79" fill="#f59e0b" fontSize="10">=</text>

          <rect x="140" y="65" width="36" height="20" fill="#22c55e" stroke="#4ade80" />
          <text x="158" y="79" fill="white" fontSize="9" textAnchor="middle">E</text>
          <text x="184" y="79" fill="#666" fontSize="10">:</text>
          <rect x="194" y="65" width="27" height="20" fill="#8b5cf6" stroke="#a78bfa" />
          <text x="207" y="79" fill="white" fontSize="9" textAnchor="middle">F</text>

          {/* Arrow */}
          <path d="M 200 100 L 200 120" stroke="#f59e0b" strokeWidth="2" fill="none" />
          <polygon points="200,125 195,115 205,115" fill="#f59e0b" />
          <text x="215" y="115" fill="#f59e0b" fontSize="10">ex aequali</text>

          {/* Result */}
          <text x="20" y="150" fill="#f59e0b" fontSize="11">Therefore:</text>

          <rect x="100" y="138" width="50" height="20" fill="#3b82f6" stroke="#60a5fa" />
          <text x="125" y="152" fill="white" fontSize="9" textAnchor="middle">A</text>
          <text x="158" y="152" fill="#666" fontSize="10">:</text>
          <rect x="168" y="138" width="30" height="20" fill="#8b5cf6" stroke="#a78bfa" />
          <text x="183" y="152" fill="white" fontSize="9" textAnchor="middle">C</text>

          <text x="210" y="152" fill="#f59e0b" fontSize="12">=</text>

          <rect x="230" y="138" width="45" height="20" fill="#3b82f6" stroke="#60a5fa" />
          <text x="252" y="152" fill="white" fontSize="9" textAnchor="middle">D</text>
          <text x="283" y="152" fill="#666" fontSize="10">:</text>
          <rect x="293" y="138" width="27" height="20" fill="#8b5cf6" stroke="#a78bfa" />
          <text x="306" y="152" fill="white" fontSize="9" textAnchor="middle">F</text>
        </svg>

        <h3 className="text-lg font-semibold mt-6">The Ex Aequali Principle</h3>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 mt-2">
          <p className="text-dark-300">
            <strong>Ex aequali</strong> ("from equals") allows us to eliminate middle terms:
          </p>
          <p className="text-amber-400 mt-2 font-mono text-center">
            (A:B) · (B:C) = A:C
          </p>
          <p className="text-dark-300 mt-2">
            If we have two sequences with matching pairwise ratios, we can skip directly to
            comparing first with last.
          </p>
        </div>

        <h3 className="text-lg font-semibold mt-6">Generalization</h3>
        <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-4 border border-amber-500/20 mt-2">
          <p className="text-dark-300">
            This extends to any chain length:
          </p>
          <p className="text-dark-300 mt-2">
            If A:B = D:E, B:C = E:F, C:G = F:H, ...
          </p>
          <p className="text-dark-300 mt-2">
            Then A:(last in first sequence) = D:(last in second sequence).
          </p>
        </div>

        <h3 className="text-lg font-semibold mt-6">Numerical Example</h3>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 mt-2">
          <p className="text-dark-300">
            Let A = 12, B = 6, C = 2 and D = 18, E = 9, F = 3.
          </p>
          <ul className="list-disc list-inside mt-2 text-dark-300">
            <li>A:B = 12:6 = 2:1 and D:E = 18:9 = 2:1 ✓</li>
            <li>B:C = 6:2 = 3:1 and E:F = 9:3 = 3:1 ✓</li>
          </ul>
          <p className="text-dark-300 mt-2">
            Ex aequali: A:C = 12:2 = 6:1 and D:F = 18:3 = 6:1 ✓
          </p>
          <p className="text-dark-400 mt-2 text-sm">
            Note: 2:1 × 3:1 = 6:1 (ratios "multiply")
          </p>
        </div>

        <h3 className="text-lg font-semibold mt-6">Significance</h3>
        <p className="text-dark-300 mt-2">
          This is one of the most powerful results in the theory of proportions. It allows
          us to "compose" ratios, eliminating intermediate terms. This is essential for
          proving results about similar figures, where we chain together multiple proportions.
        </p>
      </Proposition>
    </LessonLayout>
  );
}
