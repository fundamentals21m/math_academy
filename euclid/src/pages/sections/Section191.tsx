import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section191() {
  return (
    <LessonLayout sectionId={191}>
      <Proposition
        title="Proposition VII.12"
        proof={
          <>
            <p>
              Let <em>A</em>, <em>B</em>, <em>C</em>, <em>D</em> be any number of proportional
              numbers, so that, as <em>A</em> is to <em>B</em>, so is <em>C</em> to <em>D</em>.
            </p>
            <p className="mt-2">
              I say that, as <em>A</em> is to <em>B</em>, so is the sum of <em>A</em>, <em>C</em>{' '}
              to the sum of <em>B</em>, <em>D</em>.
            </p>
            <p className="mt-2">
              For since, as <em>A</em> is to <em>B</em>, so is <em>C</em> to <em>D</em>,
              whatever part or parts <em>A</em> is of <em>B</em>, the same part or parts is{' '}
              <em>C</em> of <em>D</em> also. [VII.Def.20]
            </p>
            <p className="mt-2">
              Therefore also the sum <em>A</em>, <em>C</em> is the same part or parts of the
              sum <em>B</em>, <em>D</em> that <em>A</em> is of <em>B</em>. [VII.5, 6]
            </p>
            <p className="mt-2 font-medium">
              Therefore, as <em>A</em> is to <em>B</em>, so is the sum <em>A</em>, <em>C</em> to
              the sum <em>B</em>, <em>D</em>. [VII.Def.20]
            </p>
          </>
        }
      >
        <p>
          If there be as many numbers as we please in proportion, then, as one of the antecedents
          is to one of the consequents, so are all the antecedents to all the consequents.
        </p>
      </Proposition>

      <h2>Summing Proportional Numbers</h2>

      <p>
        This fundamental proposition shows that when we have pairs of numbers all in the same
        ratio, we can add up all the "antecedents" (first terms) and all the "consequents" (second
        terms), and the sums will still be in that same ratio. This extends to any number of
        proportional pairs.
      </p>

      <h3 className="mt-6">Understanding the Statement</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <p className="text-dark-300 mb-3">
          If A : B = C : D = E : F = ... (all in the same ratio), then:
        </p>
        <p className="text-amber-400 font-mono text-lg text-center my-4">
          A : B = (A + C + E + ...) : (B + D + F + ...)
        </p>
        <p className="text-dark-300">
          The ratio of any antecedent to its consequent equals the ratio of the sum of all
          antecedents to the sum of all consequents.
        </p>
      </div>

      <h3 className="mt-6">Visual Representation</h3>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 440 260" className="w-full max-w-lg">
          {/* First pair: A and B (ratio 2:3) */}
          <g>
            <text x="20" y="30" fill="#3b82f6" fontSize="11" fontWeight="bold">A = 4</text>
            {[0, 1, 2, 3].map((i) => (
              <rect
                key={`a-${i}`}
                x={60 + i * 20}
                y={20}
                width="18"
                height="16"
                fill="rgba(59, 130, 246, 0.3)"
                stroke="#3b82f6"
                strokeWidth="1"
              />
            ))}

            <text x="150" y="30" fill="#3b82f6" fontSize="11" fontWeight="bold">B = 6</text>
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <rect
                key={`b-${i}`}
                x={185 + i * 20}
                y={20}
                width="18"
                height="16"
                fill="rgba(59, 130, 246, 0.3)"
                stroke="#3b82f6"
                strokeWidth="1"
              />
            ))}
            <text x="320" y="30" fill="#3b82f6" fontSize="10">A : B = 2 : 3</text>
          </g>

          {/* Second pair: C and D (ratio 2:3) */}
          <g>
            <text x="20" y="65" fill="#22c55e" fontSize="11" fontWeight="bold">C = 6</text>
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <rect
                key={`c-${i}`}
                x={60 + i * 20}
                y={55}
                width="18"
                height="16"
                fill="rgba(34, 197, 94, 0.3)"
                stroke="#22c55e"
                strokeWidth="1"
              />
            ))}

            <text x="150" y="65" fill="#22c55e" fontSize="11" fontWeight="bold">D = 9</text>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <rect
                key={`d-${i}`}
                x={185 + i * 20}
                y={55}
                width="18"
                height="16"
                fill="rgba(34, 197, 94, 0.3)"
                stroke="#22c55e"
                strokeWidth="1"
              />
            ))}
            <text x="380" y="65" fill="#22c55e" fontSize="10">C : D = 2 : 3</text>
          </g>

          {/* Third pair: E and F (ratio 2:3) */}
          <g>
            <text x="20" y="100" fill="#ec4899" fontSize="11" fontWeight="bold">E = 8</text>
            {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
              <rect
                key={`e-${i}`}
                x={60 + i * 20}
                y={90}
                width="18"
                height="16"
                fill="rgba(236, 72, 153, 0.3)"
                stroke="#ec4899"
                strokeWidth="1"
              />
            ))}

            <text x="220" y="100" fill="#ec4899" fontSize="11" fontWeight="bold">F = 12</text>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => (
              <rect
                key={`f-${i}`}
                x={255 + i * 15}
                y={90}
                width="13"
                height="16"
                fill="rgba(236, 72, 153, 0.3)"
                stroke="#ec4899"
                strokeWidth="1"
              />
            ))}
          </g>
          <text x="380" y="100" fill="#ec4899" fontSize="10">E : F = 2 : 3</text>

          {/* Separator line */}
          <line x1="30" y1="120" x2="410" y2="120" stroke="#6b7280" strokeWidth="1" strokeDasharray="4" />
          <text x="420" y="125" fill="#6b7280" fontSize="10">+</text>

          {/* Sum of antecedents */}
          <g>
            <text x="20" y="150" fill="#f59e0b" fontSize="11" fontWeight="bold">A+C+E = 18</text>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17].map((i) => (
              <rect
                key={`sum1-${i}`}
                x={100 + i * 13}
                y={140}
                width="11"
                height="16"
                fill={i < 4 ? 'rgba(59, 130, 246, 0.3)' : i < 10 ? 'rgba(34, 197, 94, 0.3)' : 'rgba(236, 72, 153, 0.3)'}
                stroke={i < 4 ? '#3b82f6' : i < 10 ? '#22c55e' : '#ec4899'}
                strokeWidth="1"
              />
            ))}
          </g>

          {/* Sum of consequents */}
          <g>
            <text x="20" y="185" fill="#f59e0b" fontSize="11" fontWeight="bold">B+D+F = 27</text>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26].map((i) => (
              <rect
                key={`sum2-${i}`}
                x={100 + i * 10}
                y={175}
                width="8"
                height="16"
                fill={i < 6 ? 'rgba(59, 130, 246, 0.3)' : i < 15 ? 'rgba(34, 197, 94, 0.3)' : 'rgba(236, 72, 153, 0.3)'}
                stroke={i < 6 ? '#3b82f6' : i < 15 ? '#22c55e' : '#ec4899'}
                strokeWidth="1"
              />
            ))}
          </g>

          {/* Result */}
          <rect x="100" y="210" width="280" height="35" fill="#1e293b" stroke="#f59e0b" strokeWidth="1" rx="5" />
          <text x="240" y="230" fill="#f59e0b" fontSize="12" textAnchor="middle">
            (A+C+E) : (B+D+F) = 18 : 27 = 2 : 3
          </text>
          <text x="240" y="242" fill="#94a3b8" fontSize="10" textAnchor="middle">
            Same ratio as each individual pair!
          </text>
        </svg>
      </div>

      <h3 className="mt-6">Concrete Example</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <p className="text-dark-300 mb-2">
          Consider three pairs all in ratio 2 : 3:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-dark-300">
          <li>A = 4, B = 6 (ratio 4:6 = 2:3)</li>
          <li>C = 6, D = 9 (ratio 6:9 = 2:3)</li>
          <li>E = 8, F = 12 (ratio 8:12 = 2:3)</li>
        </ul>
        <p className="text-amber-400 mt-4">
          Summing:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-dark-300">
          <li>Sum of antecedents: A + C + E = 4 + 6 + 8 = 18</li>
          <li>Sum of consequents: B + D + F = 6 + 9 + 12 = 27</li>
        </ul>
        <p className="text-dark-300 mt-4">
          And 18 : 27 = 2 : 3, the same ratio!
        </p>
      </div>

      <h3 className="mt-6">Modern Algebraic Form</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700 text-center">
        <p className="text-amber-400 font-mono text-lg mb-2">
          If a/b = c/d = e/f = ... = k (some constant ratio)
        </p>
        <p className="text-amber-400 font-mono text-lg">
          Then (a + c + e + ...) / (b + d + f + ...) = k
        </p>
        <p className="text-dark-300 mt-4 text-sm">
          Because a = kb, c = kd, e = kf, so a + c + e = k(b + d + f)
        </p>
      </div>

      <h3 className="mt-6">Why This Matters</h3>

      <div className="grid md:grid-cols-2 gap-4 mt-4">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold mb-2">Averaging Ratios</h4>
          <p className="text-dark-300 text-sm">
            If several measurements are in the same ratio (like similar triangles with sides
            in ratio 2:3), the totals maintain this ratio.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold mb-2">Foundation for Proofs</h4>
          <p className="text-dark-300 text-sm">
            This result is used heavily in later propositions about GCD, prime numbers, and
            the fundamental theorem of arithmetic.
          </p>
        </div>
      </div>

      <h3 className="mt-6">Key Dependencies</h3>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>
          <strong className="text-amber-400">VII.5:</strong> If a number is a part of a number,
          and another is the same part of another, the sum is the same part of the sum
        </li>
        <li>
          <strong className="text-amber-400">VII.6:</strong> Same result for "parts" (general
          fractions)
        </li>
        <li>
          <strong className="text-amber-400">VII.Def.20:</strong> Definition of proportionality
          for numbers
        </li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Comparison with Book V:</strong> This is the
          number-theoretic analog of V.12 for magnitudes. However, the proof here is more direct
          because numbers have the special property that ratios can be expressed as "parts"
          (unit fractions or their multiples), allowing Euclid to use VII.5-6 for addition.
          This proposition, combined with VII.11, gives us powerful tools for manipulating
          proportions of numbers.
        </p>
      </div>
    </LessonLayout>
  );
}
