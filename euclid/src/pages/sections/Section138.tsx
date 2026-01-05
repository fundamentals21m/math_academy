import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common';

export default function Section138() {
  return (
    <LessonLayout sectionId={138}>
      <Proposition
        title="Proposition V.19"
        statement="If a whole is to a whole as a part subtracted is to a part subtracted, then the remainder will also be to the remainder as the whole to the whole."
      >
        <h3 className="text-lg font-semibold mt-4">Statement (Convertendo)</h3>
        <p className="text-dark-300 mt-2">
          If (A+B):(C+D) = B:D, then (A+B):(C+D) = A:C.
        </p>
        <p className="text-dark-300 mt-2">
          Equivalently: if the ratio of wholes equals the ratio of parts, it also equals the
          ratio of remainders.
        </p>

        <h3 className="text-lg font-semibold mt-6">Visual Representation</h3>
        <svg viewBox="0 0 400 180" className="w-full h-44 mt-4">
          {/* Whole A+B */}
          <text x="20" y="20" fill="#f59e0b" fontSize="11">Whole to Whole = Part to Part</text>

          <rect x="30" y="30" width="50" height="22" fill="#3b82f6" stroke="#60a5fa" />
          <text x="55" y="45" fill="white" fontSize="9" textAnchor="middle">A</text>
          <rect x="80" y="30" width="70" height="22" fill="#22c55e" stroke="#4ade80" />
          <text x="115" y="45" fill="white" fontSize="9" textAnchor="middle">B</text>
          <text x="85" y="65" fill="#666" fontSize="9">(A+B)</text>

          <text x="158" y="45" fill="#f59e0b" fontSize="10">:</text>

          <rect x="168" y="30" width="40" height="22" fill="#8b5cf6" stroke="#a78bfa" />
          <text x="188" y="45" fill="white" fontSize="9" textAnchor="middle">C</text>
          <rect x="208" y="30" width="56" height="22" fill="#ec4899" stroke="#f472b6" />
          <text x="236" y="45" fill="white" fontSize="9" textAnchor="middle">D</text>
          <text x="208" y="65" fill="#666" fontSize="9">(C+D)</text>

          <text x="275" y="45" fill="#f59e0b" fontSize="12">=</text>

          <rect x="295" y="30" width="35" height="22" fill="#22c55e" stroke="#4ade80" />
          <text x="312" y="45" fill="white" fontSize="9" textAnchor="middle">B</text>

          <text x="338" y="45" fill="#f59e0b" fontSize="10">:</text>

          <rect x="348" y="30" width="28" height="22" fill="#ec4899" stroke="#f472b6" />
          <text x="362" y="45" fill="white" fontSize="9" textAnchor="middle">D</text>

          {/* Arrow */}
          <path d="M 200 80 L 200 100" stroke="#f59e0b" strokeWidth="2" fill="none" />
          <polygon points="200,105 195,95 205,95" fill="#f59e0b" />
          <text x="215" y="95" fill="#f59e0b" fontSize="10">convertendo</text>

          {/* Result */}
          <text x="20" y="125" fill="#f59e0b" fontSize="11">Then: Whole:Whole = Remainder:Remainder</text>

          <rect x="30" y="135" width="120" height="22" fill="none" stroke="#666" strokeDasharray="2" />
          <text x="90" y="150" fill="#666" fontSize="9" textAnchor="middle">(A+B)</text>

          <text x="158" y="150" fill="#f59e0b" fontSize="10">:</text>

          <rect x="168" y="135" width="96" height="22" fill="none" stroke="#666" strokeDasharray="2" />
          <text x="216" y="150" fill="#666" fontSize="9" textAnchor="middle">(C+D)</text>

          <text x="275" y="150" fill="#f59e0b" fontSize="12">=</text>

          <rect x="295" y="135" width="50" height="22" fill="#3b82f6" stroke="#60a5fa" />
          <text x="320" y="150" fill="white" fontSize="9" textAnchor="middle">A</text>

          <text x="353" y="150" fill="#f59e0b" fontSize="10">:</text>

          <rect x="363" y="135" width="30" height="22" fill="#8b5cf6" stroke="#a78bfa" />
          <text x="378" y="150" fill="white" fontSize="9" textAnchor="middle">C</text>
        </svg>

        <h3 className="text-lg font-semibold mt-6">The Key Insight</h3>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 mt-2">
          <p className="text-dark-300">
            If two wholes are in the same ratio as their parts, then they must also be in the
            same ratio as the remainders (what's left after removing the parts).
          </p>
          <p className="text-dark-300 mt-2">
            Think of it this way: if two containers have the same ratio, and we remove amounts
            in the same ratio, the leftovers maintain that ratio.
          </p>
        </div>

        <h3 className="text-lg font-semibold mt-6">Numerical Example</h3>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 mt-2">
          <p className="text-dark-300">
            Let A+B = 10, C+D = 15, B = 6, D = 9.
          </p>
          <p className="text-dark-300 mt-2">
            Check: (A+B):(C+D) = 10:15 = 2:3, and B:D = 6:9 = 2:3 ✓
          </p>
          <p className="text-dark-300 mt-2">
            Then A = 4, C = 6, and A:C = 4:6 = 2:3 ✓
          </p>
          <p className="text-amber-400 mt-2">
            All three ratios are equal: 2:3
          </p>
        </div>

        <h3 className="text-lg font-semibold mt-6">Proof Outline</h3>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 mt-2">
          <p className="text-dark-300">
            Given (A+B):(C+D) = B:D.
          </p>
          <p className="text-dark-300 mt-2">
            By alternando (V.16): (A+B):B = (C+D):D.
          </p>
          <p className="text-dark-300 mt-2">
            By separando (V.17): A:B = C:D.
          </p>
          <p className="text-dark-300 mt-2">
            By alternando again: A:C = B:D.
          </p>
          <p className="text-dark-300 mt-2">
            Since B:D = (A+B):(C+D), we have A:C = (A+B):(C+D).
          </p>
        </div>

        <h3 className="text-lg font-semibold mt-6">Significance</h3>
        <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-4 border border-amber-500/20 mt-2">
          <p className="text-dark-300">
            <strong className="text-amber-400">Convertendo</strong> is useful when we know
            relationships between wholes and parts and want to deduce relationships about
            remainders. It's particularly useful in geometric proofs involving subtraction
            of figures.
          </p>
        </div>
      </Proposition>
    </LessonLayout>
  );
}
