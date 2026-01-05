import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section199() {
  return (
    <LessonLayout sectionId={199}>
      <Proposition
        title="Proposition VII.20"
        proof={
          <>
            <p>
              Let <em>A</em> and <em>B</em> be the least numbers of those which have the
              same ratio with them.
            </p>
            <p className="mt-2">
              I say that <em>A</em> measures <em>C</em> and <em>B</em> measures <em>D</em>.
            </p>
            <p className="mt-2">
              For since <em>A</em>, <em>B</em> are the least of those which have the same
              ratio with them, and <em>C</em>, <em>D</em> have the same ratio with <em>A</em>,{' '}
              <em>B</em>, then <em>C</em>, <em>D</em> are equimultiples of <em>A</em>, <em>B</em>.
              [VII.Def.20]
            </p>
            <p className="mt-2">
              Let <em>C</em> be a multiple of <em>A</em>. Then <em>A</em> measures <em>C</em>.
            </p>
            <p className="mt-2">
              Similarly <em>B</em> measures <em>D</em>.
            </p>
            <p className="mt-2 font-medium">
              Therefore the least numbers of those which have the same ratio with them
              measure those which have the same ratio the same number of times, the greater
              the greater and the less the less.
            </p>
          </>
        }
      >
        <p>
          The least numbers of those which have the same ratio with them measure those
          which have the same ratio with them the same number of times, the greater the
          greater and the less the less.
        </p>
      </Proposition>

      <h2>Least Terms Measure All Equivalent Ratios</h2>

      <p>
        This proposition establishes that when a fraction is expressed in lowest terms,
        these smallest numbers divide all other representations of the same ratio.
        This is fundamental to the theory of fractions in lowest terms.
      </p>

      <h3 className="mt-6">Modern Statement</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <p className="text-dark-300 text-center mb-2">
          If A : B is the ratio in lowest terms, and C : D is in the same ratio, then:
        </p>
        <p className="text-amber-400 font-mono text-xl text-center my-4">
          C = kA and D = kB for some positive integer k
        </p>
        <p className="text-dark-300 text-center">
          That is, C and D are multiples of A and B (by the same factor)
        </p>
      </div>

      <h3 className="mt-6">Visual Representation</h3>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 500 320" className="w-full max-w-lg">
          {/* Title */}
          <text x="250" y="25" fill="#f59e0b" fontSize="14" textAnchor="middle" fontWeight="bold">
            2 : 3 is in lowest terms
          </text>

          {/* The least ratio 2:3 */}
          <text x="100" y="60" fill="#f59e0b" fontSize="12" textAnchor="middle">
            Least: A = 2, B = 3
          </text>

          {/* A = 2 */}
          <rect x="30" y="70" width="30" height="25" fill="#f59e0b" fillOpacity="0.3" stroke="#f59e0b" strokeWidth="2" rx="3" />
          <rect x="65" y="70" width="30" height="25" fill="#f59e0b" fillOpacity="0.3" stroke="#f59e0b" strokeWidth="2" rx="3" />
          <text x="62" y="115" fill="#f59e0b" fontSize="11" textAnchor="middle">A = 2</text>

          {/* B = 3 */}
          <rect x="110" y="70" width="30" height="25" fill="#3b82f6" fillOpacity="0.3" stroke="#3b82f6" strokeWidth="2" rx="3" />
          <rect x="145" y="70" width="30" height="25" fill="#3b82f6" fillOpacity="0.3" stroke="#3b82f6" strokeWidth="2" rx="3" />
          <rect x="180" y="70" width="30" height="25" fill="#3b82f6" fillOpacity="0.3" stroke="#3b82f6" strokeWidth="2" rx="3" />
          <text x="160" y="115" fill="#3b82f6" fontSize="11" textAnchor="middle">B = 3</text>

          {/* Arrow down */}
          <text x="250" y="90" fill="#6b7280" fontSize="11" textAnchor="middle">
            All equivalent ratios:
          </text>

          {/* 4:6 = 2 copies of 2:3 */}
          <text x="100" y="150" fill="#22c55e" fontSize="11" textAnchor="middle">
            k = 2: C = 4, D = 6
          </text>
          {[0, 1, 2, 3].map((i) => (
            <rect
              key={`c1-${i}`}
              x={30 + i * 35}
              y={160}
              width="30"
              height="20"
              fill="#22c55e"
              fillOpacity="0.3"
              stroke="#22c55e"
              strokeWidth="1.5"
              rx="3"
            />
          ))}
          <text x="250" y="175" fill="#6b7280" fontSize="10" textAnchor="middle">:</text>
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <rect
              key={`d1-${i}`}
              x={270 + i * 35}
              y={160}
              width="30"
              height="20"
              fill="#22c55e"
              fillOpacity="0.3"
              stroke="#22c55e"
              strokeWidth="1.5"
              rx="3"
            />
          ))}

          {/* Grouping brackets for 4:6 */}
          <path d="M 30 185 L 30 190 L 95 190 L 95 185" fill="none" stroke="#f59e0b" strokeWidth="1" />
          <path d="M 100 185 L 100 190 L 165 190 L 165 185" fill="none" stroke="#f59e0b" strokeWidth="1" />
          <text x="62" y="200" fill="#f59e0b" fontSize="9" textAnchor="middle">2</text>
          <text x="132" y="200" fill="#f59e0b" fontSize="9" textAnchor="middle">2</text>

          {/* 6:9 = 3 copies of 2:3 */}
          <text x="100" y="220" fill="#8b5cf6" fontSize="11" textAnchor="middle">
            k = 3: C = 6, D = 9
          </text>
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <rect
              key={`c2-${i}`}
              x={30 + i * 30}
              y={230}
              width="25"
              height="18"
              fill="#8b5cf6"
              fillOpacity="0.3"
              stroke="#8b5cf6"
              strokeWidth="1.5"
              rx="2"
            />
          ))}
          <text x="250" y="242" fill="#6b7280" fontSize="10" textAnchor="middle">:</text>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <rect
              key={`d2-${i}`}
              x={270 + i * 25}
              y={230}
              width="20"
              height="18"
              fill="#8b5cf6"
              fillOpacity="0.3"
              stroke="#8b5cf6"
              strokeWidth="1.5"
              rx="2"
            />
          ))}

          {/* Grouping for 6:9 */}
          <path d="M 30 253 L 30 258 L 85 258 L 85 253" fill="none" stroke="#f59e0b" strokeWidth="1" />
          <path d="M 90 253 L 90 258 L 145 258 L 145 253" fill="none" stroke="#f59e0b" strokeWidth="1" />
          <path d="M 150 253 L 150 258 L 205 258 L 205 253" fill="none" stroke="#f59e0b" strokeWidth="1" />
          <text x="57" y="268" fill="#f59e0b" fontSize="8" textAnchor="middle">2</text>
          <text x="117" y="268" fill="#f59e0b" fontSize="8" textAnchor="middle">2</text>
          <text x="177" y="268" fill="#f59e0b" fontSize="8" textAnchor="middle">2</text>

          {/* Bottom conclusion */}
          <text x="250" y="300" fill="#f59e0b" fontSize="11" textAnchor="middle">
            Every equivalent ratio is k copies of the least ratio
          </text>
        </svg>
      </div>

      <h3 className="mt-6">Understanding the Proposition</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <p className="text-dark-300 mb-3">
          The key insight is that the numbers in lowest terms are the "building blocks"
          for all equivalent ratios:
        </p>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>
            The ratio 2 : 3 in lowest terms generates: 4 : 6, 6 : 9, 8 : 12, ...
          </li>
          <li>
            Each of these is 2 : 3 repeated k times
          </li>
          <li>
            So 2 divides every first term (4 = 2&times;2, 6 = 3&times;2, 8 = 4&times;2, ...)
          </li>
          <li>
            And 3 divides every second term (6 = 2&times;3, 9 = 3&times;3, 12 = 4&times;3, ...)
          </li>
        </ul>
      </div>

      <h3 className="mt-6">The Formal Statement</h3>

      <div className="bg-gradient-to-br from-blue-500/10 to-dark-800/50 rounded-xl p-6 mt-4 border border-blue-500/20">
        <p className="text-dark-200 mb-4">
          If (a, b) is in lowest terms and (c, d) has the same ratio, then:
        </p>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>a | c (a divides c)</li>
          <li>b | d (b divides d)</li>
          <li>c/a = d/b (the quotients are equal)</li>
        </ul>
        <p className="text-amber-400 mt-4 text-center">
          In other words: c = ka and d = kb for the same k
        </p>
      </div>

      <h3 className="mt-6">Applications</h3>

      <div className="grid md:grid-cols-2 gap-4 mt-4">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold mb-2">Reducing Fractions</h4>
          <p className="text-dark-300 text-sm">
            To express 12/18 in lowest terms:
          </p>
          <p className="text-dark-300 text-sm mt-2">
            Find the smallest (a, b) with 12/18 = a/b
          </p>
          <p className="text-dark-300 text-sm mt-2">
            Answer: 2/3 (since 12 = 6&times;2, 18 = 6&times;3)
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold mb-2">Counting Equivalents</h4>
          <p className="text-dark-300 text-sm">
            How many fractions with numerator less than 20 equal 2/3?
          </p>
          <p className="text-dark-300 text-sm mt-2">
            They must be 2k/3k with 2k &lt; 20, so k &lt; 10
          </p>
          <p className="text-dark-300 text-sm mt-2">
            Answer: 2/3, 4/6, 6/9, 8/12, 10/15, 12/18, 14/21, 16/24, 18/27
          </p>
        </div>
      </div>

      <h3 className="mt-6">Key Dependencies</h3>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>
          <strong className="text-amber-400">VII.Def.20:</strong> Definition of same ratio
          for numbers
        </li>
        <li>
          <strong className="text-amber-400">VII.4:</strong> Every smaller number either
          measures or does not measure a larger
        </li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Looking Ahead:</strong> This proposition
          prepares for the next several results which characterize the relationship
          between "least terms" (lowest terms of a fraction) and "relatively prime"
          (having no common factor). The key result will be that a ratio is in lowest
          terms if and only if the numerator and denominator are relatively prime.
        </p>
      </div>
    </LessonLayout>
  );
}
