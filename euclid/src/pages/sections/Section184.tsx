import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section184() {
  return (
    <LessonLayout sectionId={184}>
      <Proposition
        title="Proposition VII.5"
        proof={
          <>
            <p>
              Let the number <em>A</em> be a part of the number <em>BC</em>.
            </p>
            <p className="mt-2">
              It is required to prove that <em>BC</em> is the same multiple of <em>A</em> that
              unity is of the part which <em>A</em> is of <em>BC</em>.
            </p>
            <p className="mt-2">
              Let <em>BC</em> be divided into the parts equal to <em>A</em>, namely <em>BD</em>,{' '}
              <em>DE</em>, <em>EC</em>.
            </p>
            <p className="mt-2">
              Now, since the parts <em>BD</em>, <em>DE</em>, <em>EC</em> are equal to one another,
              and the number of them is the same as the number of times <em>A</em> goes into <em>BC</em>,
            </p>
            <p className="mt-2">
              therefore, whatever part unity is of the number of parts, the same part is <em>A</em> of <em>BC</em>.
            </p>
            <p className="mt-2">
              Let the number of parts be <em>n</em>. Then <em>BC</em> = <em>n</em> x <em>A</em>,
              so <em>A</em> = <em>BC</em>/<em>n</em>.
            </p>
            <p className="mt-2">
              Therefore <em>A</em> is the <em>n</em>-th part of <em>BC</em>, and unity is the
              <em>n</em>-th part of <em>n</em>.
            </p>
            <p className="mt-2">
              Thus <em>BC</em> is the same multiple of <em>A</em> that <em>n</em> is of unity.
            </p>
            <p className="mt-2 font-medium">
              Q.E.D.
            </p>
          </>
        }
      >
        <p>
          If a number be a part of a number, and another be the same part of another, the sum
          will also be the same part of the sum that the one is of the one.
        </p>
      </Proposition>

      <h2>Adding Equal Parts</h2>

      <p>
        This proposition establishes a fundamental property of fractions: if you take the same
        fractional part of two numbers and add them, you get that same fractional part of the
        sum. In modern notation:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <p className="text-dark-200 font-mono text-center text-lg">
          If A = B/n and C = D/n, then A + C = (B + D)/n
        </p>
      </div>

      <h3 className="mt-8">The Statement in Modern Terms</h3>

      <p>
        Euclid's original statement is:
      </p>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-4 border border-amber-500/20">
        <p className="text-dark-200 italic">
          "If a number be a part of a number, and another be the same part of another, the sum
          will also be the same part of the sum that the one is of the one."
        </p>
        <p className="text-dark-300 mt-4">
          In symbols: If A is the n-th part of B, and C is the n-th part of D, then (A + C)
          is the n-th part of (B + D).
        </p>
      </div>

      <h3 className="mt-8">Example: One-Third Parts</h3>

      <svg viewBox="0 0 500 250" className="w-full max-w-2xl mx-auto mt-4">
        {/* First pair: A = 4 is 1/3 of B = 12 */}
        <text x="20" y="25" fill="#f59e0b" fontSize="12" fontWeight="bold">A = 4 is 1/3 of B = 12</text>

        {/* B = 12 as three groups of 4 */}
        <g transform="translate(20, 35)">
          {[...Array(3)].map((_, groupIdx) => (
            <g key={groupIdx}>
              {[...Array(4)].map((_, i) => (
                <rect
                  key={i}
                  x={groupIdx * 65 + i * 15}
                  y="0"
                  width="13"
                  height="25"
                  fill={groupIdx === 0 ? "#10b981" : "#374151"}
                  stroke={groupIdx === 0 ? "#10b981" : "#4b5563"}
                  strokeWidth="1"
                  rx="2"
                />
              ))}
            </g>
          ))}
        </g>
        <text x="100" y="75" fill="#9ca3af" fontSize="10">B = 12 = 3 x 4</text>
        <text x="50" y="55" fill="#10b981" fontSize="10">A=4</text>

        {/* Second pair: C = 5 is 1/3 of D = 15 */}
        <text x="250" y="25" fill="#3b82f6" fontSize="12" fontWeight="bold">C = 5 is 1/3 of D = 15</text>

        {/* D = 15 as three groups of 5 */}
        <g transform="translate(250, 35)">
          {[...Array(3)].map((_, groupIdx) => (
            <g key={groupIdx}>
              {[...Array(5)].map((_, i) => (
                <rect
                  key={i}
                  x={groupIdx * 80 + i * 15}
                  y="0"
                  width="13"
                  height="25"
                  fill={groupIdx === 0 ? "#3b82f6" : "#374151"}
                  stroke={groupIdx === 0 ? "#3b82f6" : "#4b5563"}
                  strokeWidth="1"
                  rx="2"
                />
              ))}
            </g>
          ))}
        </g>
        <text x="360" y="75" fill="#9ca3af" fontSize="10">D = 15 = 3 x 5</text>
        <text x="285" y="55" fill="#3b82f6" fontSize="10">C=5</text>

        {/* Plus sign */}
        <text x="240" y="100" textAnchor="middle" fill="#f59e0b" fontSize="24">+</text>

        {/* Result: A + C = 9 is 1/3 of B + D = 27 */}
        <text x="250" y="140" textAnchor="middle" fill="#f59e0b" fontSize="14" fontWeight="bold">
          A + C = 9 is 1/3 of B + D = 27
        </text>

        {/* B + D = 27 as three groups of 9 */}
        <g transform="translate(70, 155)">
          {[...Array(3)].map((_, groupIdx) => (
            <g key={groupIdx}>
              {[...Array(9)].map((_, i) => (
                <rect
                  key={i}
                  x={groupIdx * 130 + i * 14}
                  y="0"
                  width="12"
                  height="25"
                  fill={groupIdx === 0 ? "#f59e0b" : "#374151"}
                  stroke={groupIdx === 0 ? "#f59e0b" : "#4b5563"}
                  strokeWidth="1"
                  rx="2"
                />
              ))}
            </g>
          ))}
        </g>
        <text x="185" y="195" fill="#f59e0b" fontSize="10">A+C=9</text>
        <text x="250" y="220" textAnchor="middle" fill="#9ca3af" fontSize="11">
          27 = 3 x 9, so 9 is 1/3 of 27
        </text>
      </svg>

      <p className="text-center text-dark-400 text-sm mt-2">
        Taking 1/3 of each number and adding: 4 + 5 = 9, and 9 is 1/3 of 12 + 15 = 27
      </p>

      <h3 className="mt-8">Why This Works</h3>

      <p>
        The proof is straightforward once we recognize what "part" means:
      </p>

      <ol className="list-decimal list-inside mt-4 space-y-3 text-dark-300">
        <li>
          If A is the n-th part of B, then B = nA (B is n copies of A)
        </li>
        <li>
          If C is the n-th part of D, then D = nC (D is n copies of C)
        </li>
        <li>
          Therefore B + D = nA + nC = n(A + C)
        </li>
        <li>
          So A + C is the n-th part of B + D
        </li>
      </ol>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <p className="text-dark-200">
          <strong className="text-amber-400">Modern Algebra:</strong> This is just the
          distributive property: n(A + C) = nA + nC. Dividing both sides by n gives
          A + C = (B + D)/n.
        </p>
      </div>

      <h3 className="mt-8">Example: One-Fourth Parts</h3>

      <svg viewBox="0 0 450 180" className="w-full max-w-xl mx-auto mt-4">
        {/* Setup */}
        <text x="225" y="20" textAnchor="middle" fill="#f59e0b" fontSize="12" fontWeight="bold">
          A = 3 (1/4 of 12) and C = 2 (1/4 of 8)
        </text>

        {/* 12 as 4 groups of 3 */}
        <g transform="translate(30, 35)">
          {[...Array(4)].map((_, groupIdx) => (
            <g key={groupIdx}>
              {[...Array(3)].map((_, i) => (
                <rect
                  key={i}
                  x={groupIdx * 50 + i * 15}
                  y="0"
                  width="13"
                  height="20"
                  fill={groupIdx === 0 ? "#10b981" : "#374151"}
                  stroke="#4b5563"
                  strokeWidth="1"
                  rx="2"
                />
              ))}
            </g>
          ))}
        </g>
        <text x="115" y="72" textAnchor="middle" fill="#9ca3af" fontSize="10">12 = 4 x 3</text>

        {/* 8 as 4 groups of 2 */}
        <g transform="translate(250, 35)">
          {[...Array(4)].map((_, groupIdx) => (
            <g key={groupIdx}>
              {[...Array(2)].map((_, i) => (
                <rect
                  key={i}
                  x={groupIdx * 40 + i * 15}
                  y="0"
                  width="13"
                  height="20"
                  fill={groupIdx === 0 ? "#3b82f6" : "#374151"}
                  stroke="#4b5563"
                  strokeWidth="1"
                  rx="2"
                />
              ))}
            </g>
          ))}
        </g>
        <text x="335" y="72" textAnchor="middle" fill="#9ca3af" fontSize="10">8 = 4 x 2</text>

        {/* Arrow and result */}
        <text x="225" y="100" textAnchor="middle" fill="#9ca3af" fontSize="16">...</text>

        {/* 20 as 4 groups of 5 */}
        <text x="225" y="120" textAnchor="middle" fill="#f59e0b" fontSize="12" fontWeight="bold">
          A + C = 5 is 1/4 of B + D = 20
        </text>

        <g transform="translate(100, 130)">
          {[...Array(4)].map((_, groupIdx) => (
            <g key={groupIdx}>
              {[...Array(5)].map((_, i) => (
                <rect
                  key={i}
                  x={groupIdx * 65 + i * 12}
                  y="0"
                  width="10"
                  height="20"
                  fill={groupIdx === 0 ? "#f59e0b" : "#374151"}
                  stroke={groupIdx === 0 ? "#f59e0b" : "#4b5563"}
                  strokeWidth="1"
                  rx="2"
                />
              ))}
            </g>
          ))}
        </g>
        <text x="225" y="168" textAnchor="middle" fill="#9ca3af" fontSize="10">20 = 4 x 5</text>
      </svg>

      <h3 className="mt-8">Connection to Fraction Addition</h3>

      <p>
        This proposition is the ancient version of adding fractions with the same denominator:
      </p>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-4 border border-amber-500/20">
        <p className="text-dark-200 font-mono text-center text-lg">
          a/n + b/n = (a + b)/n
        </p>
        <p className="text-dark-300 mt-4 text-center">
          The proposition proves this rule holds for all unit fractions 1/n.
        </p>
      </div>

      <h3 className="mt-8">Extension to Multiple Terms</h3>

      <p>
        By repeated application, this result extends to any number of terms:
      </p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>
          If A1 is 1/n of B1, A2 is 1/n of B2, ..., Ak is 1/n of Bk
        </li>
        <li>
          Then A1 + A2 + ... + Ak is 1/n of B1 + B2 + ... + Bk
        </li>
      </ul>

      <h3 className="mt-8">Practical Applications</h3>

      <div className="grid md:grid-cols-2 gap-4 mt-4">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold">Fair Division</h4>
          <p className="text-dark-300 text-sm mt-2">
            If each person gets 1/n of their portion, the combined portions will be 1/n of
            the total.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold">Taxation</h4>
          <p className="text-dark-300 text-sm mt-2">
            If a 1/n tax is applied to multiple sources of income, the total tax is 1/n of
            the total income.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold">Scaling Recipes</h4>
          <p className="text-dark-300 text-sm mt-2">
            Taking 1/n of each ingredient in a recipe gives 1/n of the final quantity.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold">Profit Sharing</h4>
          <p className="text-dark-300 text-sm mt-2">
            If profits are distributed as 1/n shares, the total distributed equals 1/n of
            total profits.
          </p>
        </div>
      </div>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-6 border border-dark-700">
        <p className="text-dark-300 text-sm">
          <strong className="text-amber-400">Note:</strong> This proposition deals only with
          "parts" (unit fractions). The next proposition, VII.6, extends the result to
          "parts" (non-unit fractions like 2/5 or 3/7), completing the theory of fraction
          addition.
        </p>
      </div>
    </LessonLayout>
  );
}
