import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section193() {
  return (
    <LessonLayout sectionId={193}>
      <Proposition
        title="Proposition VII.14"
        proof={
          <>
            <p>
              Let there be any number of numbers <em>A</em>, <em>B</em>, <em>C</em>, and other
              numbers <em>D</em>, <em>E</em>, <em>F</em> equal to them in multitude, which taken
              two and two together are in the same ratio, so that, as <em>A</em> is to <em>B</em>,
              so is <em>D</em> to <em>E</em>, and, as <em>B</em> is to <em>C</em>, so is <em>E</em>{' '}
              to <em>F</em>.
            </p>
            <p className="mt-2">
              I say that, ex aequali, as <em>A</em> is to <em>C</em>, so is <em>D</em> to <em>F</em>.
            </p>
            <p className="mt-2">
              For, since as <em>A</em> is to <em>B</em>, so is <em>D</em> to <em>E</em>, therefore,
              alternately, as <em>A</em> is to <em>D</em>, so is <em>B</em> to <em>E</em>. [VII.13]
            </p>
            <p className="mt-2">
              Again, since as <em>B</em> is to <em>C</em>, so is <em>E</em> to <em>F</em>, therefore,
              alternately, as <em>B</em> is to <em>E</em>, so is <em>C</em> to <em>F</em>. [VII.13]
            </p>
            <p className="mt-2">
              But as <em>B</em> is to <em>E</em>, so is <em>A</em> to <em>D</em>; therefore also,
              as <em>A</em> is to <em>D</em>, so is <em>C</em> to <em>F</em>.
            </p>
            <p className="mt-2 font-medium">
              Therefore, alternately, as <em>A</em> is to <em>C</em>, so is <em>D</em> to <em>F</em>.
              [VII.13]
            </p>
          </>
        }
      >
        <p>
          If there be as many numbers as we please, and others equal to them in multitude, which
          taken two and two are in the same ratio, they will also be in the same ratio ex aequali.
        </p>
      </Proposition>

      <h2>The Ex Aequali Property for Numbers</h2>

      <p>
        This proposition proves the <strong>ex aequali</strong> (Latin for "from equals") property,
        which allows us to "chain" proportions together. If we have a sequence of numbers in
        continued proportion with another sequence, the first and last terms of each sequence are
        in the same ratio.
      </p>

      <h3 className="mt-6">Understanding the Statement</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <p className="text-dark-300 mb-3">
          Given two chains of proportions:
        </p>
        <p className="text-amber-400 font-mono text-center my-2">
          A : B = D : E
        </p>
        <p className="text-amber-400 font-mono text-center my-2">
          B : C = E : F
        </p>
        <p className="text-dark-300 my-4">
          We can conclude:
        </p>
        <p className="text-amber-400 font-mono text-lg text-center">
          A : C = D : F
        </p>
        <p className="text-dark-300 mt-4">
          The intermediate terms B and E "cancel out," leaving a proportion between the extremes.
        </p>
      </div>

      <h3 className="mt-6">Visual Representation</h3>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 440 280" className="w-full max-w-lg">
          {/* First sequence: A, B, C */}
          <g>
            <text x="30" y="25" fill="#f59e0b" fontSize="12" fontWeight="bold">First Sequence</text>

            {/* A = 2 */}
            <g>
              <rect x="30" y="35" width="40" height="25" fill="rgba(239, 68, 68, 0.3)" stroke="#ef4444" strokeWidth="2" rx="3" />
              <text x="50" y="52" fill="#ef4444" fontSize="11" textAnchor="middle">A=2</text>
            </g>

            {/* Arrow and ratio */}
            <path d="M 75 48 L 95 48" stroke="#6b7280" strokeWidth="1" markerEnd="url(#arrow-ex)" />
            <defs>
              <marker id="arrow-ex" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                <polygon points="0 0, 8 3, 0 6" fill="#6b7280" />
              </marker>
            </defs>
            <text x="85" y="40" fill="#6b7280" fontSize="9">x3</text>

            {/* B = 6 */}
            <g>
              <rect x="100" y="35" width="60" height="25" fill="rgba(34, 197, 94, 0.3)" stroke="#22c55e" strokeWidth="2" rx="3" />
              <text x="130" y="52" fill="#22c55e" fontSize="11" textAnchor="middle">B=6</text>
            </g>

            {/* Arrow and ratio */}
            <path d="M 165 48 L 185 48" stroke="#6b7280" strokeWidth="1" markerEnd="url(#arrow-ex)" />
            <text x="175" y="40" fill="#6b7280" fontSize="9">x2</text>

            {/* C = 12 */}
            <g>
              <rect x="190" y="35" width="80" height="25" fill="rgba(59, 130, 246, 0.3)" stroke="#3b82f6" strokeWidth="2" rx="3" />
              <text x="230" y="52" fill="#3b82f6" fontSize="11" textAnchor="middle">C=12</text>
            </g>
          </g>

          {/* Second sequence: D, E, F */}
          <g>
            <text x="30" y="95" fill="#f59e0b" fontSize="12" fontWeight="bold">Second Sequence</text>

            {/* D = 3 */}
            <g>
              <rect x="30" y="105" width="50" height="25" fill="rgba(236, 72, 153, 0.3)" stroke="#ec4899" strokeWidth="2" rx="3" />
              <text x="55" y="122" fill="#ec4899" fontSize="11" textAnchor="middle">D=3</text>
            </g>

            {/* Arrow and ratio */}
            <path d="M 85 118 L 105 118" stroke="#6b7280" strokeWidth="1" markerEnd="url(#arrow-ex)" />
            <text x="95" y="110" fill="#6b7280" fontSize="9">x3</text>

            {/* E = 9 */}
            <g>
              <rect x="110" y="105" width="70" height="25" fill="rgba(139, 92, 246, 0.3)" stroke="#8b5cf6" strokeWidth="2" rx="3" />
              <text x="145" y="122" fill="#8b5cf6" fontSize="11" textAnchor="middle">E=9</text>
            </g>

            {/* Arrow and ratio */}
            <path d="M 185 118 L 205 118" stroke="#6b7280" strokeWidth="1" markerEnd="url(#arrow-ex)" />
            <text x="195" y="110" fill="#6b7280" fontSize="9">x2</text>

            {/* F = 18 */}
            <g>
              <rect x="210" y="105" width="100" height="25" fill="rgba(6, 182, 212, 0.3)" stroke="#06b6d4" strokeWidth="2" rx="3" />
              <text x="260" y="122" fill="#06b6d4" fontSize="11" textAnchor="middle">F=18</text>
            </g>
          </g>

          {/* Proportions stated */}
          <g>
            <rect x="320" y="30" width="110" height="50" fill="#1e293b" stroke="#3b82f6" strokeWidth="1" rx="5" />
            <text x="375" y="50" fill="#3b82f6" fontSize="10" textAnchor="middle">A:B = D:E</text>
            <text x="375" y="65" fill="#3b82f6" fontSize="10" textAnchor="middle">(2:6 = 3:9 = 1:3)</text>
          </g>

          <g>
            <rect x="320" y="90" width="110" height="50" fill="#1e293b" stroke="#22c55e" strokeWidth="1" rx="5" />
            <text x="375" y="110" fill="#22c55e" fontSize="10" textAnchor="middle">B:C = E:F</text>
            <text x="375" y="125" fill="#22c55e" fontSize="10" textAnchor="middle">(6:12 = 9:18 = 1:2)</text>
          </g>

          {/* Arrow showing ex aequali */}
          <path d="M 220 150 L 220 175" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrow-ex2)" />
          <defs>
            <marker id="arrow-ex2" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#f59e0b" />
            </marker>
          </defs>
          <text x="230" y="165" fill="#f59e0b" fontSize="11">ex aequali</text>

          {/* Result */}
          <g>
            <rect x="80" y="185" width="280" height="80" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" rx="8" />
            <text x="220" y="210" fill="#f59e0b" fontSize="13" textAnchor="middle" fontWeight="bold">Conclusion: A : C = D : F</text>

            <g transform="translate(100, 225)">
              <rect x="0" y="0" width="35" height="20" fill="rgba(239, 68, 68, 0.3)" stroke="#ef4444" strokeWidth="1" rx="2" />
              <text x="17" y="14" fill="#ef4444" fontSize="10" textAnchor="middle">A=2</text>
            </g>
            <text x="145" y="240" fill="#f59e0b" fontSize="12">:</text>
            <g transform="translate(155, 225)">
              <rect x="0" y="0" width="55" height="20" fill="rgba(59, 130, 246, 0.3)" stroke="#3b82f6" strokeWidth="1" rx="2" />
              <text x="27" y="14" fill="#3b82f6" fontSize="10" textAnchor="middle">C=12</text>
            </g>
            <text x="220" y="240" fill="#f59e0b" fontSize="12">=</text>
            <g transform="translate(230, 225)">
              <rect x="0" y="0" width="40" height="20" fill="rgba(236, 72, 153, 0.3)" stroke="#ec4899" strokeWidth="1" rx="2" />
              <text x="20" y="14" fill="#ec4899" fontSize="10" textAnchor="middle">D=3</text>
            </g>
            <text x="280" y="240" fill="#f59e0b" fontSize="12">:</text>
            <g transform="translate(290, 225)">
              <rect x="0" y="0" width="55" height="20" fill="rgba(6, 182, 212, 0.3)" stroke="#06b6d4" strokeWidth="1" rx="2" />
              <text x="27" y="14" fill="#06b6d4" fontSize="10" textAnchor="middle">F=18</text>
            </g>
          </g>
        </svg>
      </div>

      <h3 className="mt-6">Concrete Example</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <p className="text-dark-300 mb-2">
          Let A = 2, B = 6, C = 12 and D = 3, E = 9, F = 18
        </p>
        <p className="text-dark-300 mt-3">
          Check the given proportions:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-dark-300">
          <li>A : B = 2 : 6 = 1 : 3</li>
          <li>D : E = 3 : 9 = 1 : 3</li>
          <li>B : C = 6 : 12 = 1 : 2</li>
          <li>E : F = 9 : 18 = 1 : 2</li>
        </ul>
        <p className="text-amber-400 mt-4">
          Ex aequali conclusion:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-dark-300">
          <li>A : C = 2 : 12 = 1 : 6</li>
          <li>D : F = 3 : 18 = 1 : 6</li>
        </ul>
        <p className="text-dark-300 mt-3">
          Indeed, A : C = D : F (both are 1 : 6).
        </p>
      </div>

      <h3 className="mt-6">The Chain Rule for Ratios</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700 text-center">
        <p className="text-dark-300 mb-3">
          In modern terms, if:
        </p>
        <p className="text-amber-400 font-mono text-lg mb-2">
          A/B = D/E = k and B/C = E/F = m
        </p>
        <p className="text-dark-300 mt-3">
          Then:
        </p>
        <p className="text-amber-400 font-mono text-lg">
          A/C = (A/B) times (B/C) = km = (D/E) times (E/F) = D/F
        </p>
      </div>

      <h3 className="mt-6">Extending to More Terms</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <p className="text-dark-300 mb-3">
          The proposition extends to any number of terms. If:
        </p>
        <ul className="list-disc list-inside space-y-1 text-dark-300">
          <li>A : B = D : E</li>
          <li>B : C = E : F</li>
          <li>C : G = F : H</li>
          <li>...</li>
        </ul>
        <p className="text-dark-300 mt-3">
          Then A : (last term in first sequence) = D : (last term in second sequence).
        </p>
      </div>

      <h3 className="mt-6">Key Dependencies</h3>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>
          <strong className="text-amber-400">VII.13:</strong> Alternando property for proportional
          numbers (used repeatedly to swap terms and establish intermediate equalities)
        </li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Historical Note:</strong> The ex aequali property
          was known to ancient mathematicians and is essential for working with compound ratios.
          It is the number-theoretic version of V.22 for magnitudes. The name "ex aequali" refers
          to taking terms at "equal distances" (first and third, or first and fourth, etc.) from
          the sequences. This property underlies much of the theory of continued fractions and
          is fundamental to solving proportion problems by chaining.
        </p>
      </div>
    </LessonLayout>
  );
}
