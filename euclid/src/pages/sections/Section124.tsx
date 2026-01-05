import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common';

export default function Section124() {
  return (
    <LessonLayout sectionId={124}>
      <Proposition
        title="Proposition V.5"
        statement="If a magnitude is the same multiple of a magnitude that a part subtracted is of a part subtracted, then the remainder is also the same multiple of the remainder that the whole is of the whole."
      >
        <h3 className="text-lg font-semibold mt-4">Statement in Modern Terms</h3>
        <p className="text-dark-300 mt-2">
          If A = mB and a part C = mD (where C is part of A and D is part of B), then the remainder
          (A - C) = m(B - D).
        </p>

        <h3 className="text-lg font-semibold mt-6">Visual Representation</h3>
        <svg viewBox="0 0 400 140" className="w-full h-36 mt-4">
          {/* A = 3B */}
          <text x="10" y="25" fill="#f59e0b" fontSize="12">A = 3B:</text>
          <rect x="70" y="10" width="50" height="25" fill="#3b82f6" stroke="#60a5fa" strokeWidth="1" />
          <rect x="120" y="10" width="50" height="25" fill="#3b82f6" stroke="#60a5fa" strokeWidth="1" />
          <rect x="170" y="10" width="50" height="25" fill="#3b82f6" stroke="#60a5fa" strokeWidth="1" />
          <text x="145" y="27" fill="white" fontSize="10" textAnchor="middle">B</text>

          {/* C = 3D (part subtracted) */}
          <text x="10" y="60" fill="#f59e0b" fontSize="12">C = 3D:</text>
          <rect x="70" y="45" width="20" height="25" fill="#ef4444" stroke="#f87171" strokeWidth="1" />
          <rect x="90" y="45" width="20" height="25" fill="#ef4444" stroke="#f87171" strokeWidth="1" />
          <rect x="110" y="45" width="20" height="25" fill="#ef4444" stroke="#f87171" strokeWidth="1" />
          <text x="100" y="62" fill="white" fontSize="10" textAnchor="middle">D</text>

          {/* Show remainder */}
          <line x1="50" y1="85" x2="250" y2="85" stroke="#666" strokeDasharray="4" />

          {/* A - C = 3(B - D) */}
          <text x="10" y="115" fill="#f59e0b" fontSize="11">A-C = 3(B-D):</text>
          <rect x="70" y="100" width="30" height="25" fill="#22c55e" stroke="#4ade80" strokeWidth="1" />
          <rect x="100" y="100" width="30" height="25" fill="#22c55e" stroke="#4ade80" strokeWidth="1" />
          <rect x="130" y="100" width="30" height="25" fill="#22c55e" stroke="#4ade80" strokeWidth="1" />
          <text x="115" y="117" fill="white" fontSize="10" textAnchor="middle">B-D</text>

          {/* Labels on right */}
          <text x="250" y="27" fill="#3b82f6" fontSize="11">whole multiple</text>
          <text x="250" y="62" fill="#ef4444" fontSize="11">part subtracted</text>
          <text x="250" y="117" fill="#22c55e" fontSize="11">remainder (same multiple!)</text>
        </svg>

        <h3 className="text-lg font-semibold mt-6">Algebraic Form</h3>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 mt-2">
          <p className="text-dark-300">Given:</p>
          <ul className="list-disc list-inside mt-2 text-dark-300">
            <li>A = mB (A is m times B)</li>
            <li>C = mD (C is m times D)</li>
            <li>C ≤ A and D ≤ B (C and D are parts)</li>
          </ul>
          <p className="text-dark-300 mt-4">Then:</p>
          <p className="text-amber-400 font-mono text-center text-lg mt-2">
            A - C = m(B - D)
          </p>
        </div>

        <h3 className="text-lg font-semibold mt-6">Proof</h3>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 mt-2">
          <p className="text-dark-300">
            Since A = mB, we can write A as the sum of m copies of B.
          </p>
          <p className="text-dark-300 mt-2">
            Since C = mD, we can write C as the sum of m copies of D.
          </p>
          <p className="text-dark-300 mt-2">
            When we subtract C from A, we're removing m copies of D from m copies of B. What
            remains is m copies of (B - D).
          </p>
          <p className="text-dark-300 mt-2">
            Therefore A - C = m(B - D), which means the remainder is the same multiple of the
            remainder of the parts.
          </p>
        </div>

        <h3 className="text-lg font-semibold mt-6">Modern Algebra</h3>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 mt-2 text-center">
          <p className="text-amber-400 font-mono">
            mB - mD = m(B - D)
          </p>
          <p className="text-dark-400 mt-2">
            This is the distributive property of multiplication over subtraction.
          </p>
        </div>

        <h3 className="text-lg font-semibold mt-6">Significance</h3>
        <p className="text-dark-300 mt-2">
          This proposition establishes that equimultiples behave well under subtraction, just as
          V.1 established they behave well under addition. Together, these propositions show that
          "being an equimultiple" is preserved under basic arithmetic operations.
        </p>

        <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-4 border border-amber-500/20 mt-4">
          <p className="text-dark-300">
            <strong className="text-amber-400">Note:</strong> While this seems obvious in modern
            algebra (m·b - m·d = m(b-d)), Euclid proves it for arbitrary magnitudes, not just
            numbers. His geometric proof works for lengths, areas, or any comparable quantities.
          </p>
        </div>
      </Proposition>
    </LessonLayout>
  );
}
