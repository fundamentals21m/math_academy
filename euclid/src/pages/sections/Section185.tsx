import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section185() {
  return (
    <LessonLayout sectionId={185}>
      <Proposition
        title="Proposition VII.6"
        proof={
          <>
            <p>
              Let the number <em>AB</em> be parts of the number <em>C</em>, and another number{' '}
              <em>DE</em> be the same parts of another number <em>F</em>.
            </p>
            <p className="mt-2">
              I say that the sum <em>AB</em> + <em>DE</em> is also the same parts of <em>C</em> + <em>F</em>.
            </p>
            <p className="mt-2">
              For since <em>AB</em> is the same parts of <em>C</em> that <em>DE</em> is of <em>F</em>,
              therefore, as many parts of <em>C</em> as there are in <em>AB</em>, so many parts of{' '}
              <em>F</em> are there also in <em>DE</em>.
            </p>
            <p className="mt-2">
              Let <em>AB</em> be divided into the parts of <em>C</em>, namely <em>AG</em>, <em>GB</em>,
              and <em>DE</em> into the parts of <em>F</em>, namely <em>DH</em>, <em>HE</em>.
            </p>
            <p className="mt-2">
              Thus the multitude of <em>AG</em>, <em>GB</em> will be equal to the multitude of{' '}
              <em>DH</em>, <em>HE</em>.
            </p>
            <p className="mt-2">
              And since <em>AG</em> is the same part of <em>C</em> that <em>DH</em> is of <em>F</em>,
              therefore <em>AG</em> + <em>DH</em> is the same part of <em>C</em> + <em>F</em> that{' '}
              <em>AG</em> is of <em>C</em>. [VII.5]
            </p>
            <p className="mt-2">
              For the same reason, <em>GB</em> + <em>HE</em> is the same part of <em>C</em> + <em>F</em>{' '}
              that <em>GB</em> is of <em>C</em>.
            </p>
            <p className="mt-2">
              Therefore <em>AB</em> + <em>DE</em> is the same parts of <em>C</em> + <em>F</em> that{' '}
              <em>AB</em> is of <em>C</em>.
            </p>
            <p className="mt-2 font-medium">
              Q.E.D.
            </p>
          </>
        }
      >
        <p>
          If a number be parts of a number, and another be the same parts of another, the sum
          will also be the same parts of the sum that the one is of the one.
        </p>
      </Proposition>

      <h2>Adding Non-Unit Fractions</h2>

      <p>
        While Proposition VII.5 dealt with "part" (unit fractions like 1/3, 1/4), this
        proposition extends to "parts" (non-unit fractions like 2/5, 3/7). It completes the
        theory of fraction addition by showing that the rule works for all proper fractions.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <p className="text-dark-200 font-mono text-center text-lg">
          If A = (m/n)B and C = (m/n)D, then A + C = (m/n)(B + D)
        </p>
      </div>

      <h3 className="mt-8">Understanding "Parts"</h3>

      <p>
        Recall from Definition 4 that when a smaller number does not measure a larger number
        exactly, it is called "parts" of the larger. For example:
      </p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>6 is "two-thirds" of 9 (parts, not a single part)</li>
        <li>8 is "four-fifths" of 10 (parts)</li>
        <li>9 is "three-fourths" of 12 (parts)</li>
      </ul>

      <h3 className="mt-8">Example: Two-Thirds</h3>

      <svg viewBox="0 0 500 280" className="w-full max-w-2xl mx-auto mt-4">
        {/* First number: 6 is 2/3 of 9 */}
        <text x="20" y="25" fill="#f59e0b" fontSize="12" fontWeight="bold">A = 6 is 2/3 of B = 9</text>

        {/* B = 9 as three groups of 3, with 2 highlighted */}
        <g transform="translate(20, 40)">
          {[...Array(3)].map((_, groupIdx) => (
            <g key={groupIdx}>
              {[...Array(3)].map((_, i) => (
                <rect
                  key={i}
                  x={groupIdx * 55 + i * 16}
                  y="0"
                  width="14"
                  height="30"
                  fill={groupIdx < 2 ? "#10b981" : "#374151"}
                  stroke={groupIdx < 2 ? "#10b981" : "#4b5563"}
                  strokeWidth="1"
                  rx="2"
                />
              ))}
            </g>
          ))}
        </g>
        <text x="45" y="85" fill="#10b981" fontSize="10">1/3</text>
        <text x="100" y="85" fill="#10b981" fontSize="10">1/3</text>
        <text x="155" y="85" fill="#9ca3af" fontSize="10">1/3</text>
        <text x="100" y="100" textAnchor="middle" fill="#9ca3af" fontSize="10">6 = 2 x 3 (two thirds)</text>

        {/* Second number: 10 is 2/3 of 15 */}
        <text x="270" y="25" fill="#3b82f6" fontSize="12" fontWeight="bold">C = 10 is 2/3 of D = 15</text>

        {/* D = 15 as three groups of 5, with 2 highlighted */}
        <g transform="translate(270, 40)">
          {[...Array(3)].map((_, groupIdx) => (
            <g key={groupIdx}>
              {[...Array(5)].map((_, i) => (
                <rect
                  key={i}
                  x={groupIdx * 70 + i * 13}
                  y="0"
                  width="11"
                  height="30"
                  fill={groupIdx < 2 ? "#3b82f6" : "#374151"}
                  stroke={groupIdx < 2 ? "#3b82f6" : "#4b5563"}
                  strokeWidth="1"
                  rx="2"
                />
              ))}
            </g>
          ))}
        </g>
        <text x="300" y="85" fill="#3b82f6" fontSize="10">1/3</text>
        <text x="370" y="85" fill="#3b82f6" fontSize="10">1/3</text>
        <text x="440" y="85" fill="#9ca3af" fontSize="10">1/3</text>
        <text x="360" y="100" textAnchor="middle" fill="#9ca3af" fontSize="10">10 = 2 x 5 (two thirds)</text>

        {/* Plus and equals */}
        <text x="250" y="135" textAnchor="middle" fill="#f59e0b" fontSize="20">+</text>

        {/* Result */}
        <text x="250" y="170" textAnchor="middle" fill="#f59e0b" fontSize="14" fontWeight="bold">
          A + C = 16 is 2/3 of B + D = 24
        </text>

        {/* B + D = 24 as three groups of 8, with 2 highlighted */}
        <g transform="translate(70, 185)">
          {[...Array(3)].map((_, groupIdx) => (
            <g key={groupIdx}>
              {[...Array(8)].map((_, i) => (
                <rect
                  key={i}
                  x={groupIdx * 120 + i * 14}
                  y="0"
                  width="12"
                  height="28"
                  fill={groupIdx < 2 ? "#f59e0b" : "#374151"}
                  stroke={groupIdx < 2 ? "#f59e0b" : "#4b5563"}
                  strokeWidth="1"
                  rx="2"
                />
              ))}
            </g>
          ))}
        </g>
        <text x="140" y="230" fill="#f59e0b" fontSize="10">1/3 = 8</text>
        <text x="260" y="230" fill="#f59e0b" fontSize="10">1/3 = 8</text>
        <text x="380" y="230" fill="#9ca3af" fontSize="10">1/3 = 8</text>

        <text x="250" y="260" textAnchor="middle" fill="#9ca3af" fontSize="11">
          16 = 2 x 8 = 2/3 of 24
        </text>
      </svg>

      <p className="text-center text-dark-400 text-sm mt-2">
        6 + 10 = 16, and 16 is two-thirds of 9 + 15 = 24
      </p>

      <h3 className="mt-8">The Proof Strategy</h3>

      <p>
        Euclid's proof cleverly reduces the "parts" case to the "part" case (VII.5):
      </p>

      <ol className="list-decimal list-inside mt-4 space-y-3 text-dark-300">
        <li>
          <strong>Decompose into unit fractions:</strong> If AB is m/n of C, express AB as
          m copies of (1/n of C). Similarly for DE and F.
        </li>
        <li>
          <strong>Apply VII.5 to each unit fraction:</strong> Each 1/n part adds correctly
          by Proposition VII.5.
        </li>
        <li>
          <strong>Combine:</strong> Since we have m such pairs, and each pair adds correctly,
          the sum AB + DE is m/n of C + F.
        </li>
      </ol>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">The Key Insight:</strong> "Parts" (like 2/3) is
          just a sum of "part" (like 1/3 + 1/3). So adding two "parts" is the same as adding
          multiple "part" pairs, and we already know how to do that from VII.5.
        </p>
      </div>

      <h3 className="mt-8">Diagram: Breaking Parts into Unit Parts</h3>

      <svg viewBox="0 0 450 200" className="w-full max-w-xl mx-auto mt-4">
        {/* Show 6 = 3 + 3 (two thirds of 9) */}
        <text x="100" y="20" textAnchor="middle" fill="#f59e0b" fontSize="12" fontWeight="bold">
          6 = 3 + 3 (1/3 + 1/3 of 9)
        </text>

        <g transform="translate(20, 30)">
          {/* First 1/3 */}
          {[...Array(3)].map((_, i) => (
            <rect key={`a1-${i}`} x={i * 25} y="0" width="22" height="25" fill="#10b981" stroke="#10b981" strokeWidth="1" rx="3" />
          ))}
          {/* Second 1/3 */}
          {[...Array(3)].map((_, i) => (
            <rect key={`a2-${i}`} x={85 + i * 25} y="0" width="22" height="25" fill="#059669" stroke="#059669" strokeWidth="1" rx="3" />
          ))}
        </g>
        <text x="50" y="70" fill="#10b981" fontSize="10">1/3</text>
        <text x="130" y="70" fill="#059669" fontSize="10">1/3</text>

        {/* Show 10 = 5 + 5 (two thirds of 15) */}
        <text x="340" y="20" textAnchor="middle" fill="#3b82f6" fontSize="12" fontWeight="bold">
          10 = 5 + 5 (1/3 + 1/3 of 15)
        </text>

        <g transform="translate(240, 30)">
          {/* First 1/3 */}
          {[...Array(5)].map((_, i) => (
            <rect key={`b1-${i}`} x={i * 22} y="0" width="20" height="25" fill="#3b82f6" stroke="#3b82f6" strokeWidth="1" rx="3" />
          ))}
          {/* Second 1/3 */}
          {[...Array(5)].map((_, i) => (
            <rect key={`b2-${i}`} x={115 + i * 22} y="0" width="20" height="25" fill="#2563eb" stroke="#2563eb" strokeWidth="1" rx="3" />
          ))}
        </g>
        <text x="290" y="70" fill="#3b82f6" fontSize="10">1/3</text>
        <text x="405" y="70" fill="#2563eb" fontSize="10">1/3</text>

        {/* Apply VII.5 */}
        <text x="225" y="100" textAnchor="middle" fill="#9ca3af" fontSize="11">Apply VII.5 to each pair:</text>

        {/* Pair 1: 3 + 5 = 8 */}
        <text x="120" y="130" textAnchor="middle" fill="#f59e0b" fontSize="11">
          3 + 5 = 8 (1/3 of 24)
        </text>
        <g transform="translate(40, 140)">
          {[...Array(8)].map((_, i) => (
            <rect key={i} x={i * 20} y="0" width="18" height="20" fill="#f59e0b" stroke="#f59e0b" strokeWidth="1" rx="2" />
          ))}
        </g>

        {/* Pair 2: 3 + 5 = 8 */}
        <text x="340" y="130" textAnchor="middle" fill="#f59e0b" fontSize="11">
          3 + 5 = 8 (1/3 of 24)
        </text>
        <g transform="translate(260, 140)">
          {[...Array(8)].map((_, i) => (
            <rect key={i} x={i * 20} y="0" width="18" height="20" fill="#d97706" stroke="#d97706" strokeWidth="1" rx="2" />
          ))}
        </g>

        {/* Final result */}
        <text x="225" y="185" textAnchor="middle" fill="#f59e0b" fontSize="12" fontWeight="bold">
          8 + 8 = 16 = 2/3 of 24
        </text>
      </svg>

      <p className="text-center text-dark-400 text-sm mt-2">
        Each unit fraction pair (1/3 + 1/3) adds by VII.5, then combine for the full result
      </p>

      <h3 className="mt-8">Modern Fraction Notation</h3>

      <p>
        In modern terms, this proposition proves:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <p className="text-dark-200 font-mono text-center text-lg">
          (m/n) x a + (m/n) x b = (m/n) x (a + b)
        </p>
        <p className="text-dark-300 text-center mt-2">
          or equivalently: ma/n + mb/n = m(a+b)/n
        </p>
      </div>

      <p className="mt-4">
        This is the <strong>distributive property</strong> for fractions, a fundamental rule
        that allows us to factor out common fractional multipliers.
      </p>

      <h3 className="mt-8">Connection to VII.5</h3>

      <p>
        Propositions VII.5 and VII.6 together establish the complete addition rule for fractions:
      </p>

      <div className="grid md:grid-cols-2 gap-4 mt-4">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold">VII.5: Unit Fractions</h4>
          <p className="text-dark-300 text-sm mt-2">
            (1/n)a + (1/n)b = (1/n)(a + b)
          </p>
          <p className="text-dark-400 text-xs mt-2 italic">
            The base case for unit fractions like 1/3, 1/4, 1/5.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold">VII.6: General Fractions</h4>
          <p className="text-dark-300 text-sm mt-2">
            (m/n)a + (m/n)b = (m/n)(a + b)
          </p>
          <p className="text-dark-400 text-xs mt-2 italic">
            The general case, built from VII.5 by adding m unit fractions.
          </p>
        </div>
      </div>

      <h3 className="mt-8">Applications</h3>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>
          <strong>Weighted averages:</strong> If each component is weighted by the same
          fraction, the total is that fraction of the sum.
        </li>
        <li>
          <strong>Percentage calculations:</strong> Taking x% of multiple quantities and
          adding gives x% of the total.
        </li>
        <li>
          <strong>Proportional allocation:</strong> If resources are allocated in the same
          ratio, combining sources gives that ratio of the combined total.
        </li>
      </ul>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-6 border border-dark-700">
        <p className="text-dark-300 text-sm">
          <strong className="text-amber-400">Note:</strong> Together, VII.5 and VII.6 establish
          the additive property of proportions. The next proposition, VII.7, will establish
          the corresponding result for subtraction.
        </p>
      </div>
    </LessonLayout>
  );
}
