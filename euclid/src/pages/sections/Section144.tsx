import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common';

export default function Section144() {
  return (
    <LessonLayout sectionId={144}>
      <Proposition
        title="Proposition V.25"
        statement="If four magnitudes are proportional, the greatest and the least are greater than the remaining two."
      >
        <h3 className="text-lg font-semibold mt-4">Statement in Modern Terms</h3>
        <p className="text-dark-300 mt-2">
          If A:B = C:D with A the greatest and D the least, then A + D {'>'} B + C.
        </p>
        <p className="text-dark-300 mt-2">
          The sum of the extremes exceeds the sum of the means.
        </p>

        <h3 className="text-lg font-semibold mt-6">Visual Representation</h3>
        <svg viewBox="0 0 400 200" className="w-full h-50 mt-4">
          {/* Four magnitudes */}
          <text x="20" y="20" fill="#f59e0b" fontSize="11">Proportion: A:B = C:D with A {'>'} B {'>'} C {'>'} D</text>

          {/* A - largest */}
          <rect x="30" y="35" width="140" height="25" fill="#3b82f6" stroke="#60a5fa" />
          <text x="100" y="52" fill="white" fontSize="10" textAnchor="middle">A (greatest)</text>

          {/* B */}
          <rect x="30" y="70" width="100" height="25" fill="#22c55e" stroke="#4ade80" />
          <text x="80" y="87" fill="white" fontSize="10" textAnchor="middle">B</text>

          {/* C */}
          <rect x="30" y="105" width="70" height="25" fill="#8b5cf6" stroke="#a78bfa" />
          <text x="65" y="122" fill="white" fontSize="10" textAnchor="middle">C</text>

          {/* D - smallest */}
          <rect x="30" y="140" width="50" height="25" fill="#ec4899" stroke="#f472b6" />
          <text x="55" y="157" fill="white" fontSize="10" textAnchor="middle">D (least)</text>

          {/* Comparison */}
          <line x1="200" y1="35" x2="200" y2="170" stroke="#666" strokeDasharray="4" />

          <text x="220" y="50" fill="#f59e0b" fontSize="11">Sum of extremes:</text>
          <rect x="220" y="55" width="140" height="20" fill="#3b82f6" stroke="#60a5fa" />
          <rect x="220" y="75" width="50" height="20" fill="#ec4899" stroke="#f472b6" />
          <text x="280" y="69" fill="white" fontSize="9">A</text>
          <text x="245" y="89" fill="white" fontSize="9">D</text>
          <text x="300" y="85" fill="#f59e0b" fontSize="12">= A + D</text>

          <text x="220" y="115" fill="#f59e0b" fontSize="11">Sum of means:</text>
          <rect x="220" y="120" width="100" height="20" fill="#22c55e" stroke="#4ade80" />
          <rect x="220" y="140" width="70" height="20" fill="#8b5cf6" stroke="#a78bfa" />
          <text x="270" y="134" fill="white" fontSize="9">B</text>
          <text x="255" y="154" fill="white" fontSize="9">C</text>
          <text x="300" y="145" fill="#f59e0b" fontSize="12">= B + C</text>

          {/* Result */}
          <text x="220" y="185" fill="#f59e0b" fontSize="14">A + D {'>'} B + C</text>
        </svg>

        <h3 className="text-lg font-semibold mt-6">Understanding the Inequality</h3>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 mt-2">
          <p className="text-dark-300">
            In a proportion A:B = C:D where A is largest and D is smallest:
          </p>
          <ul className="list-disc list-inside mt-2 text-dark-300">
            <li>The "extremes" are A (first) and D (fourth)</li>
            <li>The "means" are B (second) and C (third)</li>
          </ul>
          <p className="text-dark-300 mt-2">
            The proposition says the extremes together outweigh the means.
          </p>
        </div>

        <h3 className="text-lg font-semibold mt-6">Numerical Example</h3>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 mt-2">
          <p className="text-dark-300">
            Let A = 12, B = 8, C = 6, D = 4.
          </p>
          <p className="text-dark-300 mt-2">
            Check proportion: A:B = 12:8 = 3:2 and C:D = 6:4 = 3:2 ✓
          </p>
          <p className="text-dark-300 mt-2">
            Extremes: A + D = 12 + 4 = 16
          </p>
          <p className="text-dark-300 mt-2">
            Means: B + C = 8 + 6 = 14
          </p>
          <p className="text-amber-400 mt-2">
            16 {'>'} 14 ✓
          </p>
        </div>

        <h3 className="text-lg font-semibold mt-6">Proof Outline</h3>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 mt-2">
          <p className="text-dark-300">
            Given A:B = C:D with A greatest and D least.
          </p>
          <p className="text-dark-300 mt-2">
            Since A is the greatest and D the least, we have A {'>'} C (and B {'>'} D).
          </p>
          <p className="text-dark-300 mt-2">
            From A {'>'} C and A:B = C:D, by V.14, B {'>'} D.
          </p>
          <p className="text-dark-300 mt-2">
            Now A - C {'>'} 0 and B - D {'>'} 0.
          </p>
          <p className="text-dark-300 mt-2">
            From the proportion, (A - C):(B - D) can be analyzed to show A - C {'>'} B - D,
            which gives A + D {'>'} B + C.
          </p>
        </div>

        <h3 className="text-lg font-semibold mt-6">Algebraic Verification</h3>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 mt-2">
          <p className="text-dark-300">
            If A/B = C/D = k (where k {'>'} 1 since A {'>'} B), then A = kB and C = kD.
          </p>
          <p className="text-dark-300 mt-2">
            A + D - B - C = kB + D - B - kD = (k-1)B - (k-1)D = (k-1)(B - D)
          </p>
          <p className="text-dark-300 mt-2">
            Since k {'>'} 1 and B {'>'} D, this is positive. ✓
          </p>
        </div>

        <h3 className="text-lg font-semibold mt-6">Historical Significance</h3>
        <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-4 border border-amber-500/20 mt-2">
          <p className="text-dark-300">
            This proposition concludes Book V. It connects proportions to inequalities,
            showing that the theory of ratios has rich structural properties beyond just
            equality. The result is used in Book VI and later when dealing with similar
            figures and their measurements.
          </p>
        </div>

        <div className="bg-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/30">
          <h3 className="text-amber-400 font-semibold">Book V Complete</h3>
          <p className="text-dark-300 mt-2">
            With V.25, we have established the complete theory of proportions. This abstract
            framework—originally developed by Eudoxus—handles both commensurable and
            incommensurable magnitudes with full rigor. Book VI will apply this theory to
            geometry, establishing the theory of similar figures.
          </p>
        </div>
      </Proposition>
    </LessonLayout>
  );
}
