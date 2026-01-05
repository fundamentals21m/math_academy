import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common';

export default function Section137() {
  return (
    <LessonLayout sectionId={137}>
      <Proposition
        title="Proposition V.18"
        statement="If magnitudes are proportional separando, they will also be proportional componendo."
      >
        <h3 className="text-lg font-semibold mt-4">Statement (Componendo)</h3>
        <p className="text-dark-300 mt-2">
          If A:B = C:D, then (A+B):B = (C+D):D.
        </p>
        <p className="text-dark-300 mt-2">
          From a basic proportion, we can "compose" to get a proportion involving sums.
        </p>

        <h3 className="text-lg font-semibold mt-6">Visual Representation</h3>
        <svg viewBox="0 0 400 180" className="w-full h-44 mt-4">
          {/* Separando form */}
          <text x="20" y="20" fill="#f59e0b" fontSize="11">Separando: A:B = C:D</text>

          {/* A : B */}
          <rect x="30" y="30" width="50" height="22" fill="#3b82f6" stroke="#60a5fa" />
          <text x="55" y="45" fill="white" fontSize="9" textAnchor="middle">A</text>

          <text x="88" y="45" fill="#f59e0b" fontSize="10">:</text>

          <rect x="98" y="30" width="70" height="22" fill="#22c55e" stroke="#4ade80" />
          <text x="133" y="45" fill="white" fontSize="9" textAnchor="middle">B</text>

          <text x="180" y="45" fill="#f59e0b" fontSize="12">=</text>

          {/* C : D */}
          <rect x="200" y="30" width="40" height="22" fill="#8b5cf6" stroke="#a78bfa" />
          <text x="220" y="45" fill="white" fontSize="9" textAnchor="middle">C</text>

          <text x="248" y="45" fill="#f59e0b" fontSize="10">:</text>

          <rect x="258" y="30" width="56" height="22" fill="#ec4899" stroke="#f472b6" />
          <text x="286" y="45" fill="white" fontSize="9" textAnchor="middle">D</text>

          {/* Arrow */}
          <path d="M 200 70 L 200 90" stroke="#f59e0b" strokeWidth="2" fill="none" />
          <polygon points="200,95 195,85 205,85" fill="#f59e0b" />
          <text x="215" y="85" fill="#f59e0b" fontSize="10">componendo</text>

          {/* Componendo form */}
          <text x="20" y="115" fill="#f59e0b" fontSize="11">Componendo: (A+B):B = (C+D):D</text>

          {/* A+B : B */}
          <rect x="30" y="125" width="50" height="22" fill="#3b82f6" stroke="#60a5fa" />
          <text x="55" y="140" fill="white" fontSize="9" textAnchor="middle">A</text>
          <rect x="80" y="125" width="70" height="22" fill="#22c55e" stroke="#4ade80" />
          <text x="115" y="140" fill="white" fontSize="9" textAnchor="middle">B</text>
          <text x="25" y="165" fill="#666" fontSize="9">A+B</text>

          <text x="158" y="140" fill="#f59e0b" fontSize="10">:</text>

          <rect x="168" y="125" width="70" height="22" fill="#22c55e" stroke="#4ade80" />
          <text x="203" y="140" fill="white" fontSize="9" textAnchor="middle">B</text>

          <text x="250" y="140" fill="#f59e0b" fontSize="12">=</text>

          {/* C+D : D */}
          <rect x="270" y="125" width="40" height="22" fill="#8b5cf6" stroke="#a78bfa" />
          <rect x="310" y="125" width="56" height="22" fill="#ec4899" stroke="#f472b6" />
          <text x="265" y="165" fill="#666" fontSize="9">C+D</text>

          <text x="372" y="140" fill="#f59e0b" fontSize="10">:</text>

          <rect x="378" y="125" width="15" height="22" fill="#ec4899" stroke="#f472b6" />
        </svg>

        <h3 className="text-lg font-semibold mt-6">Understanding Componendo</h3>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 mt-2">
          <p className="text-dark-300">
            <strong>Componendo</strong> (composition) adds the consequent to the antecedent:
          </p>
          <p className="text-amber-400 mt-2 font-mono text-center">
            A:B → (A+B):B
          </p>
          <p className="text-dark-300 mt-2">
            If we have A:B = C:D, applying this to both sides gives (A+B):B = (C+D):D.
          </p>
        </div>

        <h3 className="text-lg font-semibold mt-6">Numerical Example</h3>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 mt-2">
          <p className="text-dark-300">
            If 2:3 = 4:6, then componendo:
          </p>
          <p className="text-dark-300 mt-2">
            (2+3):3 = (4+6):6
          </p>
          <p className="text-dark-300">
            5:3 = 10:6 ✓ (both simplify to 5:3)
          </p>
        </div>

        <h3 className="text-lg font-semibold mt-6">Proof Outline</h3>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 mt-2">
          <p className="text-dark-300">
            Given A:B = C:D.
          </p>
          <p className="text-dark-300 mt-2">
            We need to show (A+B):B = (C+D):D.
          </p>
          <p className="text-dark-300 mt-2">
            By V.7, B:B = D:D (equal magnitudes have the same ratio to themselves).
          </p>
          <p className="text-dark-300 mt-2">
            Adding the proportions A:B = C:D and B:B = D:D using V.24 (adding proportional
            magnitudes), we get (A+B):B = (C+D):D.
          </p>
        </div>

        <h3 className="text-lg font-semibold mt-6">The Componendo-Dividendo Pair</h3>
        <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-4 border border-amber-500/20 mt-2">
          <p className="text-dark-300">
            Together, componendo (V.18) and separando (V.17) form a powerful pair:
          </p>
          <table className="mt-2 w-full text-dark-300">
            <tbody>
              <tr>
                <td className="py-1 font-bold text-amber-400">Starting:</td>
                <td className="py-1">A:B = C:D</td>
              </tr>
              <tr>
                <td className="py-1 font-bold text-amber-400">Componendo:</td>
                <td className="py-1">(A+B):B = (C+D):D</td>
              </tr>
              <tr>
                <td className="py-1 font-bold text-amber-400">Separando:</td>
                <td className="py-1">(A-B):B = (C-D):D (if A {'>'} B, C {'>'} D)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-semibold mt-6">Application</h3>
        <p className="text-dark-300 mt-2">
          Componendo is invaluable when working with extended segments or combined figures.
          If we know the ratio of parts, we can deduce the ratio of wholes to parts.
        </p>
      </Proposition>
    </LessonLayout>
  );
}
