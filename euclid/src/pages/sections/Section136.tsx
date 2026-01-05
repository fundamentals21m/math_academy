import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common';

export default function Section136() {
  return (
    <LessonLayout sectionId={136}>
      <Proposition
        title="Proposition V.17"
        statement="If magnitudes are proportional componendo, they will also be proportional separando."
      >
        <h3 className="text-lg font-semibold mt-4">Statement (Separando)</h3>
        <p className="text-dark-300 mt-2">
          If (A+B):B = (C+D):D, then A:B = C:D.
        </p>
        <p className="text-dark-300 mt-2">
          From a proportion involving sums, we can "separate" to get a proportion of the parts.
        </p>

        <h3 className="text-lg font-semibold mt-6">Visual Representation</h3>
        <svg viewBox="0 0 400 180" className="w-full h-44 mt-4">
          {/* Componendo form */}
          <text x="20" y="20" fill="#f59e0b" fontSize="11">Componendo: (A+B):B = (C+D):D</text>

          {/* A+B : B */}
          <rect x="30" y="30" width="50" height="22" fill="#3b82f6" stroke="#60a5fa" />
          <text x="55" y="45" fill="white" fontSize="9" textAnchor="middle">A</text>
          <rect x="80" y="30" width="70" height="22" fill="#22c55e" stroke="#4ade80" />
          <text x="115" y="45" fill="white" fontSize="9" textAnchor="middle">B</text>
          <text x="25" y="70" fill="#666" fontSize="9">A+B</text>

          <text x="158" y="45" fill="#f59e0b" fontSize="10">:</text>

          <rect x="168" y="30" width="70" height="22" fill="#22c55e" stroke="#4ade80" />
          <text x="203" y="45" fill="white" fontSize="9" textAnchor="middle">B</text>

          <text x="250" y="45" fill="#f59e0b" fontSize="12">=</text>

          {/* C+D : D */}
          <rect x="270" y="30" width="40" height="22" fill="#8b5cf6" stroke="#a78bfa" />
          <text x="290" y="45" fill="white" fontSize="9" textAnchor="middle">C</text>
          <rect x="310" y="30" width="56" height="22" fill="#ec4899" stroke="#f472b6" />
          <text x="338" y="45" fill="white" fontSize="9" textAnchor="middle">D</text>
          <text x="265" y="70" fill="#666" fontSize="9">C+D</text>

          <text x="372" y="45" fill="#f59e0b" fontSize="10">:</text>

          <rect x="380" y="30" width="10" height="22" fill="#ec4899" stroke="#f472b6" />

          {/* Arrow */}
          <path d="M 200 80 L 200 100" stroke="#f59e0b" strokeWidth="2" fill="none" />
          <polygon points="200,105 195,95 205,95" fill="#f59e0b" />
          <text x="215" y="95" fill="#f59e0b" fontSize="10">separando</text>

          {/* Separando form */}
          <text x="20" y="125" fill="#f59e0b" fontSize="11">Separando: A:B = C:D</text>

          {/* A : B */}
          <rect x="30" y="135" width="50" height="22" fill="#3b82f6" stroke="#60a5fa" />
          <text x="55" y="150" fill="white" fontSize="9" textAnchor="middle">A</text>

          <text x="88" y="150" fill="#f59e0b" fontSize="10">:</text>

          <rect x="98" y="135" width="70" height="22" fill="#22c55e" stroke="#4ade80" />
          <text x="133" y="150" fill="white" fontSize="9" textAnchor="middle">B</text>

          <text x="180" y="150" fill="#f59e0b" fontSize="12">=</text>

          {/* C : D */}
          <rect x="200" y="135" width="40" height="22" fill="#8b5cf6" stroke="#a78bfa" />
          <text x="220" y="150" fill="white" fontSize="9" textAnchor="middle">C</text>

          <text x="248" y="150" fill="#f59e0b" fontSize="10">:</text>

          <rect x="258" y="135" width="56" height="22" fill="#ec4899" stroke="#f472b6" />
          <text x="286" y="150" fill="white" fontSize="9" textAnchor="middle">D</text>
        </svg>

        <h3 className="text-lg font-semibold mt-6">Understanding the Operation</h3>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 mt-2">
          <p className="text-dark-300">
            <strong>Separando</strong> (separation) extracts the "excess" ratio from a compound ratio:
          </p>
          <ul className="list-disc list-inside mt-2 text-dark-300">
            <li>Given: (whole):(part) = (whole'):(part')</li>
            <li>Conclude: (excess):(part) = (excess'):(part')</li>
          </ul>
          <p className="text-dark-300 mt-2">
            where excess = whole - part.
          </p>
        </div>

        <h3 className="text-lg font-semibold mt-6">Numerical Example</h3>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 mt-2">
          <p className="text-dark-300">
            If (2+3):3 = (4+6):6 (i.e., 5:3 = 10:6), then:
          </p>
          <p className="text-dark-300 mt-2">
            2:3 = 4:6 ✓ (both equal 2:3)
          </p>
        </div>

        <h3 className="text-lg font-semibold mt-6">Proof Outline</h3>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 mt-2">
          <p className="text-dark-300">
            Given (A+B):B = (C+D):D.
          </p>
          <p className="text-dark-300 mt-2">
            By V.16 (alternando): (A+B):(C+D) = B:D.
          </p>
          <p className="text-dark-300 mt-2">
            We can use properties of equimultiples to show that this implies A:C = B:D.
          </p>
          <p className="text-dark-300 mt-2">
            Then by V.16 (alternando again): A:B = C:D.
          </p>
        </div>

        <h3 className="text-lg font-semibold mt-6">Relationship to Componendo</h3>
        <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-4 border border-amber-500/20 mt-2">
          <p className="text-dark-300">
            V.17 (separando) and V.18 (componendo) are inverses:
          </p>
          <ul className="list-disc list-inside mt-2 text-dark-300">
            <li><strong>Componendo (V.18):</strong> A:B = C:D → (A+B):B = (C+D):D</li>
            <li><strong>Separando (V.17):</strong> (A+B):B = (C+D):D → A:B = C:D</li>
          </ul>
        </div>

        <h3 className="text-lg font-semibold mt-6">Application</h3>
        <p className="text-dark-300 mt-2">
          Separando is useful when a proportion involves sums and we want to work with the
          individual parts. This commonly arises when dealing with segments that have been
          extended or figures that have been combined.
        </p>
      </Proposition>
    </LessonLayout>
  );
}
