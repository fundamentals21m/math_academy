import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common';

export default function Section135() {
  return (
    <LessonLayout sectionId={135}>
      <Proposition
        title="Proposition V.16"
        statement="If four magnitudes are proportional, they will also be proportional alternately."
      >
        <h3 className="text-lg font-semibold mt-4">Statement (Alternando)</h3>
        <p className="text-dark-300 mt-2">
          If A:B = C:D, then A:C = B:D.
        </p>
        <p className="text-dark-300 mt-2">
          This operation is called <strong>alternation</strong> or <strong>alternando</strong>.
        </p>

        <h3 className="text-lg font-semibold mt-6">Visual Representation</h3>
        <svg viewBox="0 0 400 180" className="w-full h-44 mt-4">
          {/* Original proportion */}
          <text x="20" y="25" fill="#f59e0b" fontSize="12">Original: A:B = C:D</text>

          {/* Show magnitudes in original order */}
          <rect x="30" y="40" width="60" height="25" fill="#3b82f6" stroke="#60a5fa" />
          <text x="60" y="57" fill="white" fontSize="10" textAnchor="middle">A</text>

          <rect x="100" y="40" width="80" height="25" fill="#22c55e" stroke="#4ade80" />
          <text x="140" y="57" fill="white" fontSize="10" textAnchor="middle">B</text>

          <text x="195" y="57" fill="#f59e0b" fontSize="14">=</text>

          <rect x="220" y="40" width="45" height="25" fill="#8b5cf6" stroke="#a78bfa" />
          <text x="242" y="57" fill="white" fontSize="10" textAnchor="middle">C</text>

          <rect x="275" y="40" width="60" height="25" fill="#ec4899" stroke="#f472b6" />
          <text x="305" y="57" fill="white" fontSize="10" textAnchor="middle">D</text>

          {/* Arrow showing alternation */}
          <path d="M 200 80 L 200 100" stroke="#f59e0b" strokeWidth="2" fill="none" />
          <polygon points="200,105 195,95 205,95" fill="#f59e0b" />
          <text x="215" y="95" fill="#f59e0b" fontSize="10">alternando</text>

          {/* Alternate proportion */}
          <text x="20" y="130" fill="#f59e0b" fontSize="12">Alternate: A:C = B:D</text>

          {/* Show magnitudes in alternate order */}
          <rect x="30" y="145" width="60" height="25" fill="#3b82f6" stroke="#60a5fa" />
          <text x="60" y="162" fill="white" fontSize="10" textAnchor="middle">A</text>

          <rect x="100" y="145" width="45" height="25" fill="#8b5cf6" stroke="#a78bfa" />
          <text x="122" y="162" fill="white" fontSize="10" textAnchor="middle">C</text>

          <text x="160" y="162" fill="#f59e0b" fontSize="14">=</text>

          <rect x="180" y="145" width="80" height="25" fill="#22c55e" stroke="#4ade80" />
          <text x="220" y="162" fill="white" fontSize="10" textAnchor="middle">B</text>

          <rect x="270" y="145" width="60" height="25" fill="#ec4899" stroke="#f472b6" />
          <text x="300" y="162" fill="white" fontSize="10" textAnchor="middle">D</text>
        </svg>

        <h3 className="text-lg font-semibold mt-6">The Transformation</h3>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 mt-2">
          <p className="text-dark-300">
            In the original proportion A:B = C:D:
          </p>
          <ul className="list-disc list-inside mt-2 text-dark-300">
            <li>A and C are antecedents (first terms)</li>
            <li>B and D are consequents (second terms)</li>
          </ul>
          <p className="text-dark-300 mt-2">
            Alternation compares antecedent to antecedent and consequent to consequent:
          </p>
          <p className="text-amber-400 mt-2 font-mono text-center">
            A:C = B:D
          </p>
        </div>

        <h3 className="text-lg font-semibold mt-6">Proof Outline</h3>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 mt-2">
          <p className="text-dark-300">
            To show A:C = B:D, we verify Definition V.5: for all m, n, mA ⋚ nC ⟺ mB ⋚ nD.
          </p>
          <p className="text-dark-300 mt-2">
            From A:B = C:D, we know: mA ⋚ mB ⟺ nC ⋚ nD (by V.4).
          </p>
          <p className="text-dark-300 mt-2">
            Using properties of equimultiples and the given proportion, we can show that the
            comparison of mA with nC yields the same result as comparing mB with nD.
          </p>
        </div>

        <h3 className="text-lg font-semibold mt-6">Important Restriction</h3>
        <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-4 border border-amber-500/20 mt-2">
          <p className="text-dark-300">
            <strong className="text-amber-400">Note:</strong> Alternation requires that A and C
            be magnitudes of the same kind, and B and D be magnitudes of the same kind.
          </p>
          <p className="text-dark-300 mt-2">
            For example, if A and B are lengths, and C and D are areas, then A:C and B:D would
            compare lengths to areas, which is not meaningful.
          </p>
        </div>

        <h3 className="text-lg font-semibold mt-6">Numerical Example</h3>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 mt-2">
          <p className="text-dark-300">
            If 6:9 = 10:15 (both equal 2:3), then:
          </p>
          <p className="text-dark-300 mt-2">
            6:10 = 9:15 (both equal 3:5) ✓
          </p>
        </div>

        <h3 className="text-lg font-semibold mt-6">Application</h3>
        <p className="text-dark-300 mt-2">
          Alternation is frequently used in geometry. For instance, if the ratio of
          corresponding sides of similar triangles equals the ratio of their heights,
          we can "alternate" to conclude that the ratio of two sides of one triangle
          equals the ratio of the corresponding two sides of the other.
        </p>
      </Proposition>
    </LessonLayout>
  );
}
