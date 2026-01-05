import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common';

export default function Section134() {
  return (
    <LessonLayout sectionId={134}>
      <Proposition
        title="Proposition V.15"
        statement="Parts have the same ratio as the like multiples of them taken in corresponding order."
      >
        <h3 className="text-lg font-semibold mt-4">Statement in Modern Terms</h3>
        <p className="text-dark-300 mt-2">
          For any magnitudes A and B, and any positive integer m:
        </p>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 mt-2 text-center">
          <p className="text-amber-400 font-mono text-lg">A : B = mA : mB</p>
        </div>
        <p className="text-dark-300 mt-4">
          Multiplying both terms of a ratio by the same amount doesn't change the ratio.
        </p>

        <h3 className="text-lg font-semibold mt-6">Visual Representation</h3>
        <svg viewBox="0 0 400 140" className="w-full h-36 mt-4">
          {/* Original ratio A:B */}
          <text x="20" y="25" fill="#f59e0b" fontSize="12">Original:</text>
          <rect x="90" y="10" width="40" height="25" fill="#3b82f6" stroke="#60a5fa" />
          <text x="110" y="27" fill="white" fontSize="10" textAnchor="middle">A</text>
          <text x="138" y="27" fill="#f59e0b" fontSize="14">:</text>
          <rect x="150" y="10" width="60" height="25" fill="#22c55e" stroke="#4ade80" />
          <text x="180" y="27" fill="white" fontSize="10" textAnchor="middle">B</text>

          {/* Multiplied ratio 3A:3B */}
          <text x="20" y="75" fill="#f59e0b" fontSize="12">×3:</text>
          <rect x="90" y="50" width="40" height="25" fill="#3b82f6" stroke="#60a5fa" />
          <rect x="130" y="50" width="40" height="25" fill="#3b82f6" stroke="#60a5fa" />
          <rect x="170" y="50" width="40" height="25" fill="#3b82f6" stroke="#60a5fa" />
          <text x="145" y="67" fill="white" fontSize="10" textAnchor="middle">3A</text>
          <text x="218" y="67" fill="#f59e0b" fontSize="14">:</text>
          <rect x="230" y="50" width="60" height="25" fill="#22c55e" stroke="#4ade80" />
          <rect x="290" y="50" width="60" height="25" fill="#22c55e" stroke="#4ade80" />
          <rect x="350" y="50" width="60" height="25" fill="#22c55e" stroke="#4ade80" />
          <text x="325" y="67" fill="white" fontSize="10" textAnchor="middle">3B</text>

          {/* Equals sign */}
          <text x="250" y="27" fill="#f59e0b" fontSize="16">=</text>

          {/* Conclusion */}
          <text x="90" y="110" fill="#f59e0b" fontSize="12">A : B = 3A : 3B</text>
          <text x="90" y="130" fill="#666" fontSize="11">(Same ratio! Just different scale)</text>
        </svg>

        <h3 className="text-lg font-semibold mt-6">Proof</h3>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 mt-2">
          <p className="text-dark-300">
            To show A:B = mA:mB, we need to verify Definition V.5:
          </p>
          <p className="text-dark-300 mt-2">
            For all p, q: pA ⋚ qB ⟺ p(mA) ⋚ q(mB)
          </p>
          <p className="text-dark-300 mt-2">
            Since p(mA) = (pm)A and q(mB) = (qm)B, we need:
          </p>
          <p className="text-dark-300 mt-2 text-center font-mono">
            pA ⋚ qB ⟺ (pm)A ⋚ (qm)B
          </p>
          <p className="text-dark-300 mt-2">
            This follows because multiplying both sides of a comparison by positive m preserves
            the comparison (this is essentially V.4).
          </p>
        </div>

        <h3 className="text-lg font-semibold mt-6">Converse</h3>
        <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-4 border border-amber-500/20 mt-2">
          <p className="text-dark-300">
            The converse is also true: mA:mB = A:B. This means we can "cancel" common factors
            from both terms of a ratio.
          </p>
          <p className="text-amber-400 mt-2 font-mono text-center">
            mA : mB = A : B (simplification)
          </p>
        </div>

        <h3 className="text-lg font-semibold mt-6">Numerical Example</h3>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 mt-2">
          <p className="text-dark-300">
            2 : 3 = 6 : 9 = 10 : 15 = 200 : 300 = ...
          </p>
          <p className="text-dark-300 mt-2">
            All these represent the same ratio! Each is obtained from 2:3 by multiplying both
            terms by the same factor.
          </p>
        </div>

        <h3 className="text-lg font-semibold mt-6">Significance</h3>
        <p className="text-dark-300 mt-2">
          This proposition establishes the "scale-invariance" of ratios. A ratio captures
          the relationship between two magnitudes independent of their absolute size. This
          is why we can represent ratios as fractions in lowest terms—multiplying numerator
          and denominator by the same amount doesn't change the fraction's value.
        </p>

        <h3 className="text-lg font-semibold mt-6">Application</h3>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 mt-2">
          <p className="text-dark-300">
            This result is used when comparing ratios that appear at different scales. For
            example, when proving that similar triangles have proportional sides, we can scale
            both triangles by any factor and the ratio of corresponding sides remains the same.
          </p>
        </div>
      </Proposition>
    </LessonLayout>
  );
}
