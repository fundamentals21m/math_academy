import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section183() {
  return (
    <LessonLayout sectionId={183}>
      <Proposition
        title="Proposition VII.4"
        proof={
          <>
            <p>
              Let <em>A</em>, <em>BC</em> be two numbers, and let <em>A</em> be the less.
            </p>
            <p className="mt-2">
              I say that <em>A</em> is either a part or parts of <em>BC</em>.
            </p>
            <p className="mt-2">
              For <em>A</em>, <em>BC</em> are either prime to one another or not.
            </p>
            <p className="mt-2">
              First, let <em>A</em>, <em>BC</em> be prime to one another.
            </p>
            <p className="mt-2">
              Then, if <em>BC</em> be divided into the units in it, each unit of <em>BC</em> will
              be some part of <em>A</em>.
            </p>
            <p className="mt-2">
              Therefore <em>A</em> is parts of <em>BC</em>.
            </p>
            <p className="mt-2">
              Next, let <em>A</em>, <em>BC</em> not be prime to one another;
            </p>
            <p className="mt-2">
              then <em>BC</em> either measures, or does not measure, <em>A</em>.
            </p>
            <p className="mt-2">
              If now <em>BC</em> measures <em>A</em>, <em>A</em> is a part of <em>BC</em>.
            </p>
            <p className="mt-2">
              But, if not, let the greatest common measure <em>D</em> of <em>A</em>, <em>BC</em> be
              taken; [VII.2] and let <em>BC</em> be divided into the numbers equal to <em>D</em>,
              namely <em>BE</em>, <em>EF</em>, <em>FC</em>.
            </p>
            <p className="mt-2">
              Now, since <em>D</em> measures <em>A</em>, <em>D</em> is a part of <em>A</em>.
            </p>
            <p className="mt-2">
              But <em>D</em> is equal to each of the numbers <em>BE</em>, <em>EF</em>, <em>FC</em>;
            </p>
            <p className="mt-2">
              therefore each of the numbers <em>BE</em>, <em>EF</em>, <em>FC</em> is also a part of <em>A</em>;
            </p>
            <p className="mt-2">
              so that <em>BC</em> is parts of <em>A</em>.
            </p>
            <p className="mt-2">
              Therefore any number is either a part or parts of any number, the less of the greater.
            </p>
            <p className="mt-2 font-medium">
              Q.E.D.
            </p>
          </>
        }
      >
        <p>
          Any number is either a part or parts of any number, the less of the greater.
        </p>
      </Proposition>

      <h2>Every Fraction is Either a Unit Fraction or a Sum of Unit Fractions</h2>

      <p>
        This proposition establishes that any smaller number relates to a larger number in one
        of two ways: it either <strong>measures</strong> the larger (divides it exactly), or it
        is a combination of parts. In modern terms, this says that every proper fraction can be
        expressed.
      </p>

      <h3 className="mt-6">Understanding "Part" vs "Parts"</h3>

      <div className="grid md:grid-cols-2 gap-4 mt-4">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold">A is a "Part" of B</h4>
          <p className="text-dark-300 text-sm mt-2">
            When A divides B exactly. For example, 3 is a "part" of 12 because 3 measures 12.
            In fraction terms: 3/12 = 1/4, a unit fraction.
          </p>
          <p className="text-dark-400 text-xs mt-2 italic">
            A is a part of B means A = B/n for some whole number n.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold">A is "Parts" of B</h4>
          <p className="text-dark-300 text-sm mt-2">
            When A does not divide B exactly. For example, 4 is "parts" of 10 because 4 does
            not measure 10. Here 4/10 = 2/5, which is two fifths.
          </p>
          <p className="text-dark-400 text-xs mt-2 italic">
            A is parts of B means A = mB/n for some integers m, n with m &gt; 1.
          </p>
        </div>
      </div>

      <h3 className="mt-8">Example 1: 3 is a "Part" of 12</h3>

      <svg viewBox="0 0 450 100" className="w-full max-w-xl mx-auto mt-4">
        {/* 12 divided into 4 groups of 3 */}
        <text x="20" y="25" fill="#f59e0b" fontSize="12" fontWeight="bold">12 = 4 x 3</text>

        <g transform="translate(20, 35)">
          {[...Array(4)].map((_, groupIdx) => (
            <g key={groupIdx}>
              {[...Array(3)].map((_, i) => (
                <rect
                  key={i}
                  x={groupIdx * 95 + i * 28}
                  y="0"
                  width="25"
                  height="25"
                  fill={groupIdx === 0 ? "#10b981" : "#3b82f6"}
                  fillOpacity={groupIdx === 0 ? 1 : 0.5}
                  stroke={groupIdx === 0 ? "#10b981" : "#3b82f6"}
                  strokeWidth="1"
                  rx="3"
                />
              ))}
            </g>
          ))}
        </g>

        <text x="225" y="85" textAnchor="middle" fill="#9ca3af" fontSize="11">
          3 is one-fourth of 12 (a unit fraction)
        </text>
      </svg>

      <p className="text-center text-dark-400 text-sm mt-2">
        3 measures 12 exactly four times, so 3 is a "part" (specifically, one-fourth) of 12
      </p>

      <h3 className="mt-8">Example 2: 4 is "Parts" of 10</h3>

      <svg viewBox="0 0 450 150" className="w-full max-w-xl mx-auto mt-4">
        {/* Show 10 and 4 */}
        <text x="20" y="25" fill="#f59e0b" fontSize="12" fontWeight="bold">gcd(4, 10) = 2</text>

        {/* 10 as 5 groups of 2 */}
        <text x="20" y="50" fill="#9ca3af" fontSize="11">10 = 5 x 2:</text>
        <g transform="translate(90, 35)">
          {[...Array(5)].map((_, groupIdx) => (
            <g key={groupIdx}>
              {[...Array(2)].map((_, i) => (
                <rect
                  key={i}
                  x={groupIdx * 50 + i * 22}
                  y="0"
                  width="20"
                  height="20"
                  fill={groupIdx < 2 ? "#10b981" : "#3b82f6"}
                  fillOpacity={groupIdx < 2 ? 1 : 0.5}
                  stroke="#3b82f6"
                  strokeWidth="1"
                  rx="2"
                />
              ))}
            </g>
          ))}
        </g>

        {/* 4 as 2 groups of 2 */}
        <text x="20" y="85" fill="#9ca3af" fontSize="11">4 = 2 x 2:</text>
        <g transform="translate(90, 70)">
          {[...Array(2)].map((_, groupIdx) => (
            <g key={groupIdx}>
              {[...Array(2)].map((_, i) => (
                <rect
                  key={i}
                  x={groupIdx * 50 + i * 22}
                  y="0"
                  width="20"
                  height="20"
                  fill="#10b981"
                  stroke="#10b981"
                  strokeWidth="1"
                  rx="2"
                />
              ))}
            </g>
          ))}
        </g>

        <text x="225" y="125" textAnchor="middle" fill="#9ca3af" fontSize="11">
          4 is two-fifths of 10 (parts, not a unit fraction)
        </text>
        <text x="225" y="142" textAnchor="middle" fill="#10b981" fontSize="11">
          4/10 = 2/5
        </text>
      </svg>

      <p className="text-center text-dark-400 text-sm mt-2">
        4 does not measure 10, so 4 is "parts" of 10. Using gcd(4,10)=2, we find 4/10 = 2/5.
      </p>

      <h3 className="mt-8">The Logic of the Proof</h3>

      <p>
        Euclid's proof considers two cases:
      </p>

      <ol className="list-decimal list-inside mt-4 space-y-4 text-dark-300">
        <li>
          <strong>A and BC are relatively prime:</strong> In this case, A cannot be a "part"
          of BC (since A does not divide BC). Instead, A is "parts" of BC. Euclid notes that
          each unit in A is a part of BC, so A itself is "parts" of BC.
        </li>
        <li>
          <strong>A and BC have a common measure D:</strong>
          <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
            <li>If BC measures A, then A is a part of BC</li>
            <li>Otherwise, divide both by their GCD. Then BC/D copies of D make up BC,
                and A/D copies of D make up A. So A is (A/D) parts, each of size D, of BC.</li>
          </ul>
        </li>
      </ol>

      <h3 className="mt-8">Connection to Fractions</h3>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-4 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Modern Interpretation:</strong> This proposition
          states that any ratio of positive integers A/B (with A &lt; B) can be expressed as:
        </p>
        <ul className="list-disc list-inside mt-3 space-y-1 text-dark-300">
          <li><strong>A unit fraction</strong> 1/n if A divides B exactly (A is a "part" of B)</li>
          <li><strong>A proper fraction</strong> m/n in lowest terms if A does not divide B (A is "parts" of B)</li>
        </ul>
        <p className="text-dark-200 mt-3">
          The GCD is the key: if gcd(A, B) = D, then A/B = (A/D)/(B/D), which is the fraction
          in lowest terms.
        </p>
      </div>

      <h3 className="mt-8">Diagram: Part vs Parts</h3>

      <svg viewBox="0 0 450 180" className="w-full max-w-xl mx-auto mt-4">
        {/* Part: 2 is a part of 8 */}
        <text x="110" y="20" textAnchor="middle" fill="#f59e0b" fontSize="12" fontWeight="bold">
          "Part": 2 is 1/4 of 8
        </text>
        <g transform="translate(20, 30)">
          {[...Array(4)].map((_, groupIdx) => (
            <g key={groupIdx}>
              {[...Array(2)].map((_, i) => (
                <rect
                  key={i}
                  x={groupIdx * 48 + i * 22}
                  y="0"
                  width="20"
                  height="30"
                  fill={groupIdx === 0 ? "#10b981" : "#374151"}
                  stroke={groupIdx === 0 ? "#10b981" : "#4b5563"}
                  strokeWidth="1.5"
                  rx="3"
                />
              ))}
            </g>
          ))}
        </g>
        <text x="110" y="80" textAnchor="middle" fill="#9ca3af" fontSize="10">
          2 measures 8, so 2/8 = 1/4 (unit fraction)
        </text>

        {/* Parts: 3 is parts of 10 */}
        <text x="340" y="20" textAnchor="middle" fill="#3b82f6" fontSize="12" fontWeight="bold">
          "Parts": 3 is 3/10 of 10
        </text>
        <g transform="translate(240, 30)">
          {[...Array(10)].map((_, i) => (
            <rect
              key={i}
              x={i * 20}
              y="0"
              width="18"
              height="30"
              fill={i < 3 ? "#3b82f6" : "#374151"}
              stroke={i < 3 ? "#3b82f6" : "#4b5563"}
              strokeWidth="1.5"
              rx="3"
            />
          ))}
        </g>
        <text x="340" y="80" textAnchor="middle" fill="#9ca3af" fontSize="10">
          3 does not measure 10, so 3/10 (not a unit fraction)
        </text>

        {/* Dividing line */}
        <line x1="225" y1="10" x2="225" y2="90" stroke="#4b5563" strokeWidth="1" strokeDasharray="4,4" />

        {/* Summary */}
        <rect x="50" y="100" width="350" height="60" fill="#1f2937" stroke="#374151" strokeWidth="1" rx="8" />
        <text x="225" y="125" textAnchor="middle" fill="#f59e0b" fontSize="11" fontWeight="bold">
          Key Distinction
        </text>
        <text x="225" y="145" textAnchor="middle" fill="#9ca3af" fontSize="10">
          Part = unit fraction (1/n) | Parts = proper fraction (m/n where m &gt; 1)
        </text>
      </svg>

      <h3 className="mt-8">Significance in Greek Mathematics</h3>

      <p>
        The Egyptians and Greeks had a preference for expressing fractions as sums of
        <strong> unit fractions</strong> (fractions with numerator 1). This proposition shows
        that any ratio can be analyzed in terms of these fundamental "parts."
      </p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>
          <strong>Egyptian fractions:</strong> Egyptians wrote all fractions as sums of
          distinct unit fractions (e.g., 2/5 = 1/3 + 1/15)
        </li>
        <li>
          <strong>Greek notation:</strong> Greeks often expressed ratios using the language
          of "parts"---e.g., "3 is two-fifths of 10"
        </li>
        <li>
          <strong>Lowest terms:</strong> The GCD provides the key to reducing any ratio to
          its simplest form
        </li>
      </ul>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-6 border border-dark-700">
        <p className="text-dark-300 text-sm">
          <strong className="text-amber-400">Note:</strong> This proposition, while seemingly
          simple, is foundational for the arithmetic of ratios. It ensures that every pair of
          numbers has a well-defined relationship that can be expressed in terms of unit
          fractions---the building blocks of Greek arithmetic.
        </p>
      </div>
    </LessonLayout>
  );
}
