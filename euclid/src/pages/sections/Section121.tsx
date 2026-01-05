import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common';

export default function Section121() {
  return (
    <LessonLayout sectionId={121}>
      <Proposition
        title="Proposition V.2"
        statement="If a first magnitude is the same multiple of a second that a third is of a fourth, and a fifth is also the same multiple of the second that a sixth is of the fourth, then the sum of the first and fifth is the same multiple of the second that the sum of the third and sixth is of the fourth."
      >
        <h3 className="text-lg font-semibold mt-4">Statement in Modern Terms</h3>
        <p className="text-dark-300 mt-2">
          If A = mB, C = mD, E = nB, and F = nD, then (A + E) = (m + n)B and (C + F) = (m + n)D.
        </p>
        <p className="text-dark-300 mt-2">
          More simply: if the first and third are m times their bases, and the fifth and sixth are
          n times the same bases, then adding them gives (m + n) times the bases.
        </p>

        <h3 className="text-lg font-semibold mt-6">Visual Representation</h3>
        <svg viewBox="0 0 400 160" className="w-full h-40 mt-4">
          {/* A = 2B */}
          <text x="10" y="20" fill="#f59e0b" fontSize="11">A = 2B:</text>
          <rect x="70" y="8" width="30" height="18" fill="#3b82f6" stroke="#60a5fa" strokeWidth="1" />
          <rect x="100" y="8" width="30" height="18" fill="#3b82f6" stroke="#60a5fa" strokeWidth="1" />

          {/* E = 3B */}
          <text x="150" y="20" fill="#f59e0b" fontSize="11">E = 3B:</text>
          <rect x="210" y="8" width="30" height="18" fill="#3b82f6" stroke="#60a5fa" strokeWidth="1" />
          <rect x="240" y="8" width="30" height="18" fill="#3b82f6" stroke="#60a5fa" strokeWidth="1" />
          <rect x="270" y="8" width="30" height="18" fill="#3b82f6" stroke="#60a5fa" strokeWidth="1" />

          {/* C = 2D */}
          <text x="10" y="55" fill="#f59e0b" fontSize="11">C = 2D:</text>
          <rect x="70" y="43" width="40" height="18" fill="#22c55e" stroke="#4ade80" strokeWidth="1" />
          <rect x="110" y="43" width="40" height="18" fill="#22c55e" stroke="#4ade80" strokeWidth="1" />

          {/* F = 3D */}
          <text x="170" y="55" fill="#f59e0b" fontSize="11">F = 3D:</text>
          <rect x="210" y="43" width="40" height="18" fill="#22c55e" stroke="#4ade80" strokeWidth="1" />
          <rect x="250" y="43" width="40" height="18" fill="#22c55e" stroke="#4ade80" strokeWidth="1" />
          <rect x="290" y="43" width="40" height="18" fill="#22c55e" stroke="#4ade80" strokeWidth="1" />

          {/* Divider */}
          <line x1="50" y1="75" x2="370" y2="75" stroke="#666" strokeDasharray="4" />

          {/* A + E = 5B */}
          <text x="10" y="100" fill="#f59e0b" fontSize="11">A+E = 5B:</text>
          <rect x="70" y="88" width="30" height="18" fill="#3b82f6" stroke="#60a5fa" strokeWidth="1" />
          <rect x="100" y="88" width="30" height="18" fill="#3b82f6" stroke="#60a5fa" strokeWidth="1" />
          <rect x="130" y="88" width="30" height="18" fill="#3b82f6" stroke="#60a5fa" strokeWidth="1" />
          <rect x="160" y="88" width="30" height="18" fill="#3b82f6" stroke="#60a5fa" strokeWidth="1" />
          <rect x="190" y="88" width="30" height="18" fill="#3b82f6" stroke="#60a5fa" strokeWidth="1" />

          {/* C + F = 5D */}
          <text x="10" y="135" fill="#f59e0b" fontSize="11">C+F = 5D:</text>
          <rect x="70" y="123" width="40" height="18" fill="#22c55e" stroke="#4ade80" strokeWidth="1" />
          <rect x="110" y="123" width="40" height="18" fill="#22c55e" stroke="#4ade80" strokeWidth="1" />
          <rect x="150" y="123" width="40" height="18" fill="#22c55e" stroke="#4ade80" strokeWidth="1" />
          <rect x="190" y="123" width="40" height="18" fill="#22c55e" stroke="#4ade80" strokeWidth="1" />
          <rect x="230" y="123" width="40" height="18" fill="#22c55e" stroke="#4ade80" strokeWidth="1" />
        </svg>

        <h3 className="text-lg font-semibold mt-6">Proof Outline</h3>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 mt-2">
          <p className="text-dark-300">
            Since A contains B exactly m times and E contains B exactly n times, then A + E
            contains B exactly (m + n) times.
          </p>
          <p className="text-dark-300 mt-2">
            Similarly, since C contains D exactly m times and F contains D exactly n times, then
            C + F contains D exactly (m + n) times.
          </p>
        </div>

        <h3 className="text-lg font-semibold mt-6">Mathematical Expression</h3>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 mt-2 text-center">
          <p className="text-amber-400 font-mono text-lg">
            mB + nB = (m + n)B
          </p>
          <p className="text-dark-400 mt-2">and</p>
          <p className="text-amber-400 font-mono text-lg">
            mD + nD = (m + n)D
          </p>
        </div>

        <h3 className="text-lg font-semibold mt-6">Significance</h3>
        <p className="text-dark-300 mt-2">
          This proposition shows that when magnitudes are equimultiples of common bases, their
          sums preserve the equimultiple relationship. Combined with V.1, it establishes the
          fundamental additive properties of equimultiples that are essential for the theory of
          proportions.
        </p>
      </Proposition>
    </LessonLayout>
  );
}
