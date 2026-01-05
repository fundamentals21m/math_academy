import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common';

export default function Section133() {
  return (
    <LessonLayout sectionId={133}>
      <Proposition
        title="Proposition V.14"
        statement="If a first magnitude has to a second the same ratio that a third has to a fourth, and the first is greater than the third, then the second is greater than the fourth; if equal, equal; and if less, less."
      >
        <h3 className="text-lg font-semibold mt-4">Statement in Modern Terms</h3>
        <p className="text-dark-300 mt-2">
          If A:B = C:D, then:
        </p>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 mt-2">
          <ul className="list-disc list-inside text-dark-300">
            <li>If A {'>'} C, then B {'>'} D</li>
            <li>If A = C, then B = D</li>
            <li>If A {'<'} C, then B {'<'} D</li>
          </ul>
        </div>

        <h3 className="text-lg font-semibold mt-6">Visual Representation</h3>
        <svg viewBox="0 0 400 180" className="w-full h-44 mt-4">
          {/* Case 1: A > C implies B > D */}
          <text x="20" y="25" fill="#f59e0b" fontSize="11">If A {'>'} C:</text>

          <rect x="80" y="10" width="100" height="20" fill="#3b82f6" stroke="#60a5fa" />
          <text x="130" y="24" fill="white" fontSize="10" textAnchor="middle">A</text>

          <rect x="80" y="35" width="60" height="20" fill="#8b5cf6" stroke="#a78bfa" />
          <text x="110" y="49" fill="white" fontSize="10" textAnchor="middle">C</text>

          <text x="200" y="35" fill="#f59e0b" fontSize="11">then B {'>'} D:</text>

          <rect x="280" y="10" width="90" height="20" fill="#22c55e" stroke="#4ade80" />
          <text x="325" y="24" fill="white" fontSize="10" textAnchor="middle">B</text>

          <rect x="280" y="35" width="54" height="20" fill="#ec4899" stroke="#f472b6" />
          <text x="307" y="49" fill="white" fontSize="10" textAnchor="middle">D</text>

          {/* Case 2: A = C implies B = D */}
          <text x="20" y="90" fill="#f59e0b" fontSize="11">If A = C:</text>

          <rect x="80" y="75" width="70" height="20" fill="#3b82f6" stroke="#60a5fa" />
          <text x="115" y="89" fill="white" fontSize="10" textAnchor="middle">A</text>

          <rect x="80" y="100" width="70" height="20" fill="#8b5cf6" stroke="#a78bfa" />
          <text x="115" y="114" fill="white" fontSize="10" textAnchor="middle">C</text>

          <text x="200" y="100" fill="#f59e0b" fontSize="11">then B = D:</text>

          <rect x="280" y="75" width="63" height="20" fill="#22c55e" stroke="#4ade80" />
          <text x="311" y="89" fill="white" fontSize="10" textAnchor="middle">B</text>

          <rect x="280" y="100" width="63" height="20" fill="#ec4899" stroke="#f472b6" />
          <text x="311" y="114" fill="white" fontSize="10" textAnchor="middle">D</text>

          {/* Case 3: A < C implies B < D */}
          <text x="20" y="155" fill="#f59e0b" fontSize="11">If A {'<'} C:</text>

          <rect x="80" y="140" width="50" height="20" fill="#3b82f6" stroke="#60a5fa" />
          <text x="105" y="154" fill="white" fontSize="10" textAnchor="middle">A</text>

          <rect x="80" y="165" width="90" height="20" fill="#8b5cf6" stroke="#a78bfa" />
          <text x="125" y="179" fill="white" fontSize="10" textAnchor="middle">C</text>

          <text x="200" y="165" fill="#f59e0b" fontSize="11">then B {'<'} D:</text>

          <rect x="280" y="140" width="45" height="20" fill="#22c55e" stroke="#4ade80" />
          <text x="302" y="154" fill="white" fontSize="10" textAnchor="middle">B</text>

          <rect x="280" y="165" width="81" height="20" fill="#ec4899" stroke="#f472b6" />
          <text x="320" y="179" fill="white" fontSize="10" textAnchor="middle">D</text>
        </svg>

        <h3 className="text-lg font-semibold mt-6">Proof for A {'>'} C implies B {'>'} D</h3>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 mt-2">
          <p className="text-dark-300">
            Given A:B = C:D and A {'>'} C.
          </p>
          <p className="text-dark-300 mt-2">
            By V.8, since A {'>'} C, we have A:D {'>'} C:D.
          </p>
          <p className="text-dark-300 mt-2">
            Since A:B = C:D, by V.13, A:D {'>'} A:B.
          </p>
          <p className="text-dark-300 mt-2">
            Since A:D {'>'} A:B, by V.10, D {'<'} B, which means B {'>'} D.
          </p>
        </div>

        <h3 className="text-lg font-semibold mt-6">Intuitive Understanding</h3>
        <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-4 border border-amber-500/20 mt-2">
          <p className="text-dark-300">
            If A:B = C:D, we can think of A and C as "stretching" B and D by the same factor.
          </p>
          <p className="text-dark-300 mt-2">
            If A is larger than C, then A came from a larger "stretch" applied to B than C
            applied to D. For the ratios to be equal, B must also be larger than D.
          </p>
          <p className="text-amber-400 mt-2 text-center font-mono">
            Larger input × same ratio = larger output
          </p>
        </div>

        <h3 className="text-lg font-semibold mt-6">Modern Notation</h3>
        <p className="text-dark-300 mt-2">
          If A/B = C/D = k (some ratio), then A = kB and C = kD.
        </p>
        <p className="text-dark-300 mt-2">
          If A {'>'} C, then kB {'>'} kD, so B {'>'} D (dividing by positive k).
        </p>

        <h3 className="text-lg font-semibold mt-6">Application</h3>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 mt-2">
          <p className="text-dark-300">
            This proposition is useful when comparing magnitudes through their proportional
            relationships. If we know that two ratios are equal and can compare one pair of
            terms, we can deduce the comparison for the other pair.
          </p>
        </div>
      </Proposition>
    </LessonLayout>
  );
}
