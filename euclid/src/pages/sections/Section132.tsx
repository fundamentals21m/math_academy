import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common';

export default function Section132() {
  return (
    <LessonLayout sectionId={132}>
      <Proposition
        title="Proposition V.13"
        statement="If a first magnitude has to a second the same ratio that a third has to a fourth, and the third has to the fourth a greater ratio than a fifth has to a sixth, then the first will also have to the second a greater ratio than the fifth to the sixth."
      >
        <h3 className="text-lg font-semibold mt-4">Statement in Modern Terms</h3>
        <p className="text-dark-300 mt-2">
          If A:B = C:D and C:D {'>'} E:F, then A:B {'>'} E:F.
        </p>
        <p className="text-dark-300 mt-2">
          In other words: <strong>equal ratios can be substituted in inequalities</strong>.
        </p>

        <h3 className="text-lg font-semibold mt-6">Visual Representation</h3>
        <svg viewBox="0 0 400 150" className="w-full h-38 mt-4">
          {/* Given */}
          <text x="20" y="25" fill="#f59e0b" fontSize="11">Given:</text>

          {/* A:B = C:D */}
          <text x="80" y="25" fill="#3b82f6" fontSize="12">A:B = C:D</text>

          {/* C:D > E:F */}
          <text x="80" y="50" fill="#22c55e" fontSize="12">C:D {'>'} E:F</text>

          {/* Visual bars */}
          <rect x="200" y="15" width="60" height="15" fill="#3b82f6" stroke="#60a5fa" />
          <text x="230" y="26" fill="white" fontSize="8" textAnchor="middle">A:B</text>

          <text x="270" y="26" fill="#f59e0b" fontSize="12">=</text>

          <rect x="290" y="15" width="60" height="15" fill="#8b5cf6" stroke="#a78bfa" />
          <text x="320" y="26" fill="white" fontSize="8" textAnchor="middle">C:D</text>

          <rect x="290" y="40" width="60" height="15" fill="#8b5cf6" stroke="#a78bfa" />
          <text x="320" y="51" fill="white" fontSize="8" textAnchor="middle">C:D</text>

          <text x="355" y="51" fill="#f59e0b" fontSize="12">{'>'}</text>

          <rect x="370" y="40" width="20" height="15" fill="#ef4444" stroke="#f87171" />
          <text x="380" y="51" fill="white" fontSize="7" textAnchor="middle">E:F</text>

          {/* Divider */}
          <line x1="10" y1="75" x2="390" y2="75" stroke="#666" strokeDasharray="4" />

          {/* Conclusion */}
          <text x="20" y="100" fill="#f59e0b" fontSize="11">Therefore:</text>
          <text x="100" y="100" fill="#3b82f6" fontSize="14">A:B {'>'} E:F</text>

          {/* Visual conclusion */}
          <rect x="200" y="90" width="60" height="15" fill="#3b82f6" stroke="#60a5fa" />
          <text x="230" y="101" fill="white" fontSize="8" textAnchor="middle">A:B</text>

          <text x="270" y="101" fill="#f59e0b" fontSize="14">{'>'}</text>

          <rect x="290" y="90" width="20" height="15" fill="#ef4444" stroke="#f87171" />
          <text x="300" y="101" fill="white" fontSize="7" textAnchor="middle">E:F</text>

          {/* Explanation */}
          <text x="20" y="135" fill="#666" fontSize="10">Since A:B equals C:D, and C:D exceeds E:F,</text>
          <text x="20" y="148" fill="#666" fontSize="10">A:B must also exceed E:F.</text>
        </svg>

        <h3 className="text-lg font-semibold mt-6">Proof</h3>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 mt-2">
          <p className="text-dark-300">
            Given: A:B = C:D and C:D {'>'} E:F.
          </p>
          <p className="text-dark-300 mt-2">
            By V.11 (transitivity), if we can show that equal ratios preserve inequalities,
            we're done.
          </p>
          <p className="text-dark-300 mt-2">
            Since C:D {'>'} E:F, by Definition V.7 there exist m, n such that mC {'>'} nD but
            mE ≤ nF.
          </p>
          <p className="text-dark-300 mt-2">
            Since A:B = C:D, for these same m, n we have: mA {'>'} nB ⟺ mC {'>'} nD.
          </p>
          <p className="text-dark-300 mt-2">
            Since mC {'>'} nD, we have mA {'>'} nB. But mE ≤ nF.
          </p>
          <p className="text-dark-300 mt-2">
            By Definition V.7, this means A:B {'>'} E:F.
          </p>
        </div>

        <h3 className="text-lg font-semibold mt-6">Logical Form</h3>
        <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-4 border border-amber-500/20 mt-2">
          <p className="text-dark-300">
            This proposition can be stated as a substitution rule:
          </p>
          <p className="text-amber-400 mt-2 font-mono text-center">
            If X = Y and Y {'>'} Z, then X {'>'} Z
          </p>
          <p className="text-dark-300 mt-2">
            where X, Y, Z represent ratios.
          </p>
        </div>

        <h3 className="text-lg font-semibold mt-6">Significance</h3>
        <p className="text-dark-300 mt-2">
          This proposition allows us to chain together equalities and inequalities of ratios.
          If we establish a chain of relationships between ratios, we can conclude relationships
          between the first and last in the chain.
        </p>

        <h3 className="text-lg font-semibold mt-6">Example Application</h3>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 mt-2">
          <p className="text-dark-300">
            In a proof, suppose we show:
          </p>
          <ul className="list-disc list-inside mt-2 text-dark-300">
            <li>Area ABCD : Area EFGH = AB² : EF²</li>
            <li>AB² : EF² {'>'} 4:1</li>
          </ul>
          <p className="text-dark-300 mt-2">
            By V.13, we can conclude: Area ABCD : Area EFGH {'>'} 4:1
          </p>
        </div>
      </Proposition>
    </LessonLayout>
  );
}
