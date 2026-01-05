import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section186() {
  return (
    <LessonLayout sectionId={186}>
      <Proposition
        title="Proposition VII.7"
        proof={
          <>
            <p>
              Let the number <em>AB</em> be a part of the number <em>C</em> which the number{' '}
              <em>DE</em> is of the number <em>F</em>.
            </p>
            <p className="mt-2">
              I say that the difference <em>AB</em> - <em>DE</em> is also the same part of{' '}
              <em>C</em> - <em>F</em> that <em>AB</em> is of <em>C</em>.
            </p>
            <p className="mt-2">
              For whatever part <em>AB</em> is of <em>C</em>, the same part also let <em>DG</em> be
              of <em>F</em>.
            </p>
            <p className="mt-2">
              Since then <em>AB</em> is the same part of <em>C</em> that <em>DG</em> is of <em>F</em>,
              therefore <em>AB</em> + <em>DG</em> is the same part of <em>C</em> + <em>F</em> that{' '}
              <em>AB</em> is of <em>C</em>. [VII.5]
            </p>
            <p className="mt-2">
              But <em>AB</em> is also the same part of <em>C</em> that <em>DE</em> is of <em>F</em>,
              by hypothesis.
            </p>
            <p className="mt-2">
              Therefore <em>DG</em> is equal to <em>DE</em>.
            </p>
            <p className="mt-2">
              Let <em>DG</em> be subtracted from each; therefore <em>AB</em> - <em>DE</em> is the
              same part of <em>C</em> - <em>F</em> that <em>AB</em> is of <em>C</em>.
            </p>
            <p className="mt-2 font-medium">
              Q.E.D.
            </p>
          </>
        }
      >
        <p>
          If a number be that part of a number which a number subtracted is of a number subtracted,
          the remainder will also be the same part of the remainder that the whole is of the whole.
        </p>
      </Proposition>

      <h2>Subtracting Equal Parts</h2>

      <p>
        This proposition is the subtraction counterpart to Proposition VII.5. Where VII.5 showed
        that adding equal fractional parts preserves the fraction, VII.7 shows the same for
        subtraction.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <p className="text-dark-200 font-mono text-center text-lg">
          If A = (1/n)C and B = (1/n)D, then A - B = (1/n)(C - D)
        </p>
        <p className="text-dark-300 text-center mt-2 text-sm">
          (provided A &gt; B and C &gt; D)
        </p>
      </div>

      <h3 className="mt-8">The Statement Unpacked</h3>

      <p>
        Euclid's original phrasing is characteristically intricate. In modern terms:
      </p>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-4 border border-amber-500/20">
        <p className="text-dark-200">
          If AB is the same part (say, 1/n) of C that DE is of F, then:
        </p>
        <ul className="list-disc list-inside mt-3 space-y-1 text-dark-300">
          <li>AB is 1/n of C, so C = n x AB</li>
          <li>DE is 1/n of F, so F = n x DE</li>
          <li>Therefore (AB - DE) is 1/n of (C - F)</li>
        </ul>
      </div>

      <h3 className="mt-8">Example: One-Fourth Parts</h3>

      <svg viewBox="0 0 500 300" className="w-full max-w-2xl mx-auto mt-4">
        {/* Title */}
        <text x="250" y="25" textAnchor="middle" fill="#f59e0b" fontSize="12" fontWeight="bold">
          A = 5 is 1/4 of C = 20, and B = 3 is 1/4 of D = 12
        </text>

        {/* C = 20 as four groups of 5 */}
        <text x="30" y="55" fill="#10b981" fontSize="11">C = 20 (four 5's):</text>
        <g transform="translate(30, 65)">
          {[...Array(4)].map((_, groupIdx) => (
            <g key={groupIdx}>
              {[...Array(5)].map((_, i) => (
                <rect
                  key={i}
                  x={groupIdx * 60 + i * 11}
                  y="0"
                  width="9"
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
        <text x="50" y="105" fill="#10b981" fontSize="10">A=5</text>

        {/* D = 12 as four groups of 3 */}
        <text x="280" y="55" fill="#3b82f6" fontSize="11">D = 12 (four 3's):</text>
        <g transform="translate(280, 65)">
          {[...Array(4)].map((_, groupIdx) => (
            <g key={groupIdx}>
              {[...Array(3)].map((_, i) => (
                <rect
                  key={i}
                  x={groupIdx * 50 + i * 14}
                  y="0"
                  width="12"
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
        <text x="305" y="105" fill="#3b82f6" fontSize="10">B=3</text>

        {/* Subtraction */}
        <text x="250" y="135" textAnchor="middle" fill="#f59e0b" fontSize="14">Subtract:</text>

        {/* A - B = 5 - 3 = 2 */}
        <text x="120" y="165" textAnchor="middle" fill="#f59e0b" fontSize="11">A - B = 5 - 3 = 2</text>
        <g transform="translate(70, 175)">
          {[...Array(5)].map((_, i) => (
            <rect
              key={i}
              x={i * 20}
              y="0"
              width="18"
              height="25"
              fill={i < 3 ? "#ef4444" : "#f59e0b"}
              fillOpacity={i < 3 ? 0.3 : 1}
              stroke={i < 3 ? "#ef4444" : "#f59e0b"}
              strokeWidth="1"
              rx="2"
            />
          ))}
        </g>
        <text x="90" y="215" fill="#f59e0b" fontSize="10">2 remains</text>

        {/* C - D = 20 - 12 = 8 */}
        <text x="380" y="165" textAnchor="middle" fill="#f59e0b" fontSize="11">C - D = 20 - 12 = 8</text>
        <g transform="translate(280, 175)">
          {[...Array(20)].map((_, i) => (
            <rect
              key={i}
              x={i * 11}
              y="0"
              width="9"
              height="25"
              fill={i < 12 ? "#ef4444" : "#f59e0b"}
              fillOpacity={i < 12 ? 0.3 : 1}
              stroke={i < 12 ? "#ef4444" : "#f59e0b"}
              strokeWidth="1"
              rx="2"
            />
          ))}
        </g>
        <text x="380" y="215" textAnchor="middle" fill="#f59e0b" fontSize="10">8 remains</text>

        {/* Result */}
        <rect x="80" y="235" width="340" height="45" fill="#10b981" fillOpacity="0.1" stroke="#10b981" strokeWidth="1" rx="8" />
        <text x="250" y="260" textAnchor="middle" fill="#10b981" fontSize="14" fontWeight="bold">
          A - B = 2 is 1/4 of C - D = 8
        </text>
        <text x="250" y="275" textAnchor="middle" fill="#9ca3af" fontSize="11">
          (since 8 = 4 x 2)
        </text>
      </svg>

      <p className="text-center text-dark-400 text-sm mt-2">
        The difference preserves the same fractional relationship
      </p>

      <h3 className="mt-8">The Proof Strategy</h3>

      <p>
        Euclid's proof uses VII.5 (the addition case) to prove VII.7 (the subtraction case):
      </p>

      <ol className="list-decimal list-inside mt-4 space-y-3 text-dark-300">
        <li>
          We're given that AB is the same part of C that DE is of F.
        </li>
        <li>
          Construct DG such that DG is the same part of F that AB is of C.
        </li>
        <li>
          By VII.5, (AB + DG) is that same part of (C + F).
        </li>
        <li>
          But by hypothesis, DE is also that part of F, so DG = DE.
        </li>
        <li>
          Therefore, (AB - DE) = (AB - DG) is that part of (C - F).
        </li>
      </ol>

      <h3 className="mt-8">Diagram: The Proof Visualized</h3>

      <svg viewBox="0 0 450 200" className="w-full max-w-xl mx-auto mt-4">
        {/* Setup: C and F */}
        <text x="225" y="20" textAnchor="middle" fill="#9ca3af" fontSize="11">
          Both C and F are divided into fourths
        </text>

        {/* C = 20 */}
        <text x="30" y="50" fill="#10b981" fontSize="11">C = 20:</text>
        <g transform="translate(80, 35)">
          {[...Array(4)].map((_, groupIdx) => (
            <rect
              key={groupIdx}
              x={groupIdx * 40}
              y="0"
              width="35"
              height="25"
              fill={groupIdx === 0 ? "#10b981" : "#1f2937"}
              stroke="#10b981"
              strokeWidth="1"
              rx="3"
            />
          ))}
        </g>
        <text x="95" y="75" fill="#10b981" fontSize="9">AB=5</text>

        {/* F = 12 */}
        <text x="270" y="50" fill="#3b82f6" fontSize="11">F = 12:</text>
        <g transform="translate(300, 35)">
          {[...Array(4)].map((_, groupIdx) => (
            <rect
              key={groupIdx}
              x={groupIdx * 35}
              y="0"
              width="30"
              height="25"
              fill={groupIdx === 0 ? "#3b82f6" : "#1f2937"}
              stroke="#3b82f6"
              strokeWidth="1"
              rx="3"
            />
          ))}
        </g>
        <text x="315" y="75" fill="#3b82f6" fontSize="9">DE=3</text>

        {/* Arrow down */}
        <text x="225" y="100" textAnchor="middle" fill="#f59e0b" fontSize="20">...</text>

        {/* C - F = 8 */}
        <text x="120" y="130" textAnchor="middle" fill="#f59e0b" fontSize="11">C - F = 20 - 12 = 8:</text>
        <g transform="translate(50, 140)">
          {[...Array(4)].map((_, groupIdx) => (
            <rect
              key={groupIdx}
              x={groupIdx * 40}
              y="0"
              width="35"
              height="25"
              fill={groupIdx === 0 ? "#f59e0b" : "#1f2937"}
              stroke="#f59e0b"
              strokeWidth="1"
              rx="3"
            />
          ))}
        </g>

        {/* AB - DE = 2 */}
        <text x="350" y="130" textAnchor="middle" fill="#f59e0b" fontSize="11">AB - DE = 5 - 3 = 2:</text>
        <g transform="translate(330, 140)">
          <rect x="0" y="0" width="35" height="25" fill="#f59e0b" stroke="#f59e0b" strokeWidth="2" rx="3" />
        </g>

        {/* Conclusion */}
        <text x="225" y="190" textAnchor="middle" fill="#9ca3af" fontSize="11">
          2 is one-fourth of 8 (since 8 = 4 x 2)
        </text>
      </svg>

      <h3 className="mt-8">Extension to "Parts" (VII.8)</h3>

      <p>
        Just as VII.6 extended VII.5 from "part" to "parts" for addition, there is a
        corresponding proposition VII.8 that extends VII.7 from "part" to "parts" for
        subtraction:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <p className="text-dark-200 font-mono text-center">
          If A = (m/n)C and B = (m/n)D, then A - B = (m/n)(C - D)
        </p>
      </div>

      <h3 className="mt-8">The Complete Picture</h3>

      <div className="grid md:grid-cols-2 gap-4 mt-4">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold">Addition (VII.5, VII.6)</h4>
          <p className="text-dark-300 text-sm mt-2">
            (m/n)a + (m/n)b = (m/n)(a + b)
          </p>
          <p className="text-dark-400 text-xs mt-2 italic">
            Adding the same fraction of two numbers gives that fraction of their sum.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold">Subtraction (VII.7, VII.8)</h4>
          <p className="text-dark-300 text-sm mt-2">
            (m/n)a - (m/n)b = (m/n)(a - b)
          </p>
          <p className="text-dark-400 text-xs mt-2 italic">
            Subtracting the same fraction of two numbers gives that fraction of their difference.
          </p>
        </div>
      </div>

      <h3 className="mt-8">Modern Perspective: Linearity</h3>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-4 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">The Modern View:</strong> Propositions VII.5-8
          together establish that multiplication by a fraction is a <strong>linear operation</strong>:
        </p>
        <p className="text-dark-300 font-mono text-center mt-4">
          (m/n)(a + b) = (m/n)a + (m/n)b
        </p>
        <p className="text-dark-300 font-mono text-center mt-2">
          (m/n)(a - b) = (m/n)a - (m/n)b
        </p>
        <p className="text-dark-200 mt-4">
          This is the <strong>distributive property</strong> for fractions, a cornerstone
          of arithmetic that we use constantly without thinking about it.
        </p>
      </div>

      <h3 className="mt-8">Practical Applications</h3>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>
          <strong>Discount calculations:</strong> If a store offers 1/4 off, the discount
          on a price difference equals 1/4 of that difference.
        </li>
        <li>
          <strong>Tax refunds:</strong> If you're taxed at rate 1/n and overpaid, your
          refund on the excess is 1/n of the overpayment.
        </li>
        <li>
          <strong>Proportional scaling:</strong> When comparing two scaled quantities, the
          difference scales by the same factor.
        </li>
      </ul>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-6 border border-dark-700">
        <p className="text-dark-300 text-sm">
          <strong className="text-amber-400">Looking Ahead:</strong> These propositions about
          addition and subtraction of parts form the foundation for Euclid's treatment of
          proportion in numbers. The subsequent propositions in Book VII will build on these
          results to establish properties of multiplication, division, and the relationships
          between numbers that share common measures.
        </p>
      </div>
    </LessonLayout>
  );
}
