import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common';

export default function Section125() {
  return (
    <LessonLayout sectionId={125}>
      <Proposition
        title="Proposition V.6"
        statement="If two magnitudes are equimultiples of two magnitudes, and any magnitudes subtracted from them are equimultiples of the same, then the remainders are either equal to those magnitudes or equimultiples of them."
      >
        <h3 className="text-lg font-semibold mt-4">Statement in Modern Terms</h3>
        <p className="text-dark-300 mt-2">
          If A = mB and C = mD, and we subtract E = nB from A and F = nD from C (where n ≤ m),
          then the remainders satisfy: A - E = (m - n)B and C - F = (m - n)D.
        </p>

        <h3 className="text-lg font-semibold mt-6">Visual Representation</h3>
        <svg viewBox="0 0 400 160" className="w-full h-40 mt-4">
          {/* A = 5B */}
          <text x="10" y="25" fill="#f59e0b" fontSize="11">A = 5B:</text>
          <rect x="70" y="10" width="30" height="22" fill="#3b82f6" stroke="#60a5fa" />
          <rect x="100" y="10" width="30" height="22" fill="#3b82f6" stroke="#60a5fa" />
          <rect x="130" y="10" width="30" height="22" fill="#3b82f6" stroke="#60a5fa" />
          <rect x="160" y="10" width="30" height="22" fill="#3b82f6" stroke="#60a5fa" />
          <rect x="190" y="10" width="30" height="22" fill="#3b82f6" stroke="#60a5fa" />

          {/* C = 5D */}
          <text x="250" y="25" fill="#f59e0b" fontSize="11">C = 5D:</text>
          <rect x="310" y="10" width="15" height="22" fill="#22c55e" stroke="#4ade80" />
          <rect x="325" y="10" width="15" height="22" fill="#22c55e" stroke="#4ade80" />
          <rect x="340" y="10" width="15" height="22" fill="#22c55e" stroke="#4ade80" />
          <rect x="355" y="10" width="15" height="22" fill="#22c55e" stroke="#4ade80" />
          <rect x="370" y="10" width="15" height="22" fill="#22c55e" stroke="#4ade80" />

          {/* E = 2B (subtracted) */}
          <text x="10" y="60" fill="#ef4444" fontSize="11">E = 2B:</text>
          <rect x="70" y="45" width="30" height="22" fill="#ef4444" stroke="#f87171" />
          <rect x="100" y="45" width="30" height="22" fill="#ef4444" stroke="#f87171" />

          {/* F = 2D (subtracted) */}
          <text x="250" y="60" fill="#ef4444" fontSize="11">F = 2D:</text>
          <rect x="310" y="45" width="15" height="22" fill="#ef4444" stroke="#f87171" />
          <rect x="325" y="45" width="15" height="22" fill="#ef4444" stroke="#f87171" />

          {/* Divider */}
          <line x1="50" y1="80" x2="395" y2="80" stroke="#666" strokeDasharray="4" />

          {/* Remainder A - E = 3B */}
          <text x="10" y="105" fill="#f59e0b" fontSize="11">A-E = 3B:</text>
          <rect x="70" y="90" width="30" height="22" fill="#8b5cf6" stroke="#a78bfa" />
          <rect x="100" y="90" width="30" height="22" fill="#8b5cf6" stroke="#a78bfa" />
          <rect x="130" y="90" width="30" height="22" fill="#8b5cf6" stroke="#a78bfa" />

          {/* Remainder C - F = 3D */}
          <text x="250" y="105" fill="#f59e0b" fontSize="11">C-F = 3D:</text>
          <rect x="310" y="90" width="15" height="22" fill="#8b5cf6" stroke="#a78bfa" />
          <rect x="325" y="90" width="15" height="22" fill="#8b5cf6" stroke="#a78bfa" />
          <rect x="340" y="90" width="15" height="22" fill="#8b5cf6" stroke="#a78bfa" />

          {/* Note */}
          <text x="70" y="140" fill="#8b5cf6" fontSize="11">Both remainders are (5-2)=3 times their unit!</text>
        </svg>

        <h3 className="text-lg font-semibold mt-6">Algebraic Form</h3>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 mt-2">
          <p className="text-dark-300">Given:</p>
          <ul className="list-disc list-inside mt-2 text-dark-300">
            <li>A = mB and C = mD (equimultiples)</li>
            <li>E = nB and F = nD (equimultiples to subtract, with n ≤ m)</li>
          </ul>
          <p className="text-dark-300 mt-4">Then:</p>
          <p className="text-amber-400 font-mono text-center text-lg mt-2">
            A - E = (m-n)B and C - F = (m-n)D
          </p>
        </div>

        <h3 className="text-lg font-semibold mt-6">Proof</h3>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 mt-2">
          <p className="text-dark-300">
            By V.5, since A = mB and E = nB, we have A - E = mB - nB = (m-n)B.
          </p>
          <p className="text-dark-300 mt-2">
            Similarly, since C = mD and F = nD, we have C - F = mD - nD = (m-n)D.
          </p>
          <p className="text-dark-300 mt-2">
            Thus both remainders are the same multiple (m-n) of their respective base magnitudes.
          </p>
        </div>

        <h3 className="text-lg font-semibold mt-6">Special Cases</h3>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 mt-2">
          <p className="text-dark-300">
            <strong>If m = n:</strong> The remainders are zero (or "equal to nothing").
          </p>
          <p className="text-dark-300 mt-2">
            <strong>If n = 0:</strong> Nothing is subtracted, and the remainders equal the originals.
          </p>
          <p className="text-dark-300 mt-2">
            <strong>If m - n = 1:</strong> The remainders equal B and D themselves (1× multiple).
          </p>
        </div>

        <h3 className="text-lg font-semibold mt-6">Significance</h3>
        <p className="text-dark-300 mt-2">
          This proposition extends V.5 to show that subtracting equimultiples from equimultiples
          produces equimultiples (or equal magnitudes). It completes the picture of how
          equimultiples behave under subtraction.
        </p>
      </Proposition>
    </LessonLayout>
  );
}
