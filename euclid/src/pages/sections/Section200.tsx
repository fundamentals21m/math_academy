import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section200() {
  return (
    <LessonLayout sectionId={200}>
      <Proposition
        title="Proposition VII.21"
        proof={
          <>
            <p>
              Let <em>A</em> and <em>B</em> be relatively prime numbers.
            </p>
            <p className="mt-2">
              I say that <em>A</em> and <em>B</em> are the least of those which have the
              same ratio with them.
            </p>
            <p className="mt-2">
              For if not, there will be some numbers less than <em>A</em> and <em>B</em>{' '}
              which are in the same ratio with <em>A</em> and <em>B</em>.
            </p>
            <p className="mt-2">
              Let them be <em>C</em> and <em>D</em>.
            </p>
            <p className="mt-2">
              Since then the least numbers of those which have the same ratio measure
              those which have the same ratio the same number of times, the greater the
              greater and the less the less, that is, the antecedent the antecedent and
              the consequent the consequent, [VII.20]
            </p>
            <p className="mt-2">
              therefore <em>C</em> measures <em>A</em> the same number of times that{' '}
              <em>D</em> measures <em>B</em>.
            </p>
            <p className="mt-2">
              Now as many times as <em>C</em> measures <em>A</em>, so many units are there
              in <em>E</em>. Therefore <em>D</em> also measures <em>B</em> according to the
              units in <em>E</em>.
            </p>
            <p className="mt-2">
              And since <em>C</em> measures <em>A</em> according to the units in <em>E</em>,
              therefore <em>E</em> also measures <em>A</em> according to the units in{' '}
              <em>C</em>. [VII.16]
            </p>
            <p className="mt-2">
              For the same reason <em>E</em> also measures <em>B</em> according to the
              units in <em>D</em>. [VII.16]
            </p>
            <p className="mt-2">
              Therefore <em>E</em> measures <em>A</em> and <em>B</em> which are relatively
              prime: which is impossible. [VII.Def.12]
            </p>
            <p className="mt-2 font-medium">
              Therefore there will be no numbers less than <em>A</em> and <em>B</em> which
              are in the same ratio with <em>A</em> and <em>B</em>. Therefore <em>A</em>{' '}
              and <em>B</em> are the least of those which have the same ratio with them.
            </p>
          </>
        }
      >
        <p>
          Numbers relatively prime to one another are the least of those which have the
          same ratio with them.
        </p>
      </Proposition>

      <h2>Relatively Prime Means Lowest Terms</h2>

      <p>
        This proposition establishes a fundamental connection: if two numbers share no
        common factor (are relatively prime), then they are already in lowest terms.
        You cannot simplify a fraction whose numerator and denominator are relatively prime.
      </p>

      <h3 className="mt-6">Modern Statement</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <p className="text-dark-300 text-center mb-2">
          If gcd(A, B) = 1 (A and B are relatively prime), then:
        </p>
        <p className="text-amber-400 font-mono text-xl text-center my-4">
          A and B are the smallest numbers in the ratio A : B
        </p>
        <p className="text-dark-300 text-center">
          Equivalently: A/B is already in lowest terms
        </p>
      </div>

      <h3 className="mt-6">Visual Representation</h3>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 480 280" className="w-full max-w-lg">
          {/* Title */}
          <text x="240" y="25" fill="#f59e0b" fontSize="14" textAnchor="middle" fontWeight="bold">
            5 and 7 are relatively prime (gcd = 1)
          </text>

          {/* The numbers 5 and 7 */}
          <text x="120" y="60" fill="#3b82f6" fontSize="14" textAnchor="middle">
            A = 5
          </text>
          {[0, 1, 2, 3, 4].map((i) => (
            <rect
              key={`a-${i}`}
              x={40 + i * 35}
              y={70}
              width="30"
              height="25"
              fill="#3b82f6"
              fillOpacity="0.3"
              stroke="#3b82f6"
              strokeWidth="2"
              rx="3"
            />
          ))}

          <text x="360" y="60" fill="#22c55e" fontSize="14" textAnchor="middle">
            B = 7
          </text>
          {[0, 1, 2, 3, 4, 5, 6].map((i) => (
            <rect
              key={`b-${i}`}
              x={260 + i * 30}
              y={70}
              width="25"
              height="25"
              fill="#22c55e"
              fillOpacity="0.3"
              stroke="#22c55e"
              strokeWidth="2"
              rx="3"
            />
          ))}

          {/* Show they share no common factor */}
          <text x="240" y="125" fill="#6b7280" fontSize="11" textAnchor="middle">
            No common divisor greater than 1
          </text>

          {/* Factors of 5 */}
          <text x="120" y="150" fill="#3b82f6" fontSize="10" textAnchor="middle">
            Factors of 5: 1, 5
          </text>

          {/* Factors of 7 */}
          <text x="360" y="150" fill="#22c55e" fontSize="10" textAnchor="middle">
            Factors of 7: 1, 7
          </text>

          {/* Arrow showing attempt to reduce */}
          <text x="240" y="180" fill="#ec4899" fontSize="12" textAnchor="middle">
            Can we find smaller numbers with the same ratio?
          </text>

          {/* Smaller candidates */}
          <rect x="80" y="200" width="100" height="50" fill="none" stroke="#ec4899" strokeWidth="2" strokeDasharray="5" rx="5" />
          <text x="130" y="225" fill="#ec4899" fontSize="11" textAnchor="middle">
            No C &lt; 5 and D &lt; 7
          </text>
          <text x="130" y="240" fill="#ec4899" fontSize="10" textAnchor="middle">
            with C : D = 5 : 7
          </text>

          {/* X mark */}
          <text x="130" y="270" fill="#ef4444" fontSize="24" textAnchor="middle">
            X
          </text>

          {/* Conclusion */}
          <text x="350" y="225" fill="#f59e0b" fontSize="12" textAnchor="middle">
            Therefore 5 : 7 is in
          </text>
          <text x="350" y="245" fill="#f59e0b" fontSize="12" textAnchor="middle" fontWeight="bold">
            LOWEST TERMS
          </text>

          {/* Check mark */}
          <text x="350" y="270" fill="#22c55e" fontSize="24" textAnchor="middle">
            &#10003;
          </text>
        </svg>
      </div>

      <h3 className="mt-6">Proof by Contradiction</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <p className="text-dark-300 mb-3">
          Euclid proves this by contradiction:
        </p>
        <ol className="list-decimal list-inside space-y-3 text-dark-300">
          <li>
            Suppose A and B are relatively prime (share no common factor)
          </li>
          <li>
            Assume there exist smaller numbers C and D with C : D = A : B
          </li>
          <li>
            By VII.20, C and D would measure A and B (respectively) some number k times
          </li>
          <li>
            This means A = kC and B = kD for some k &gt; 1
          </li>
          <li>
            But then k divides both A and B
          </li>
          <li>
            This contradicts A and B being relatively prime!
          </li>
          <li>
            Therefore no such smaller C and D exist, and A : B is in lowest terms
          </li>
        </ol>
      </div>

      <h3 className="mt-6">Examples</h3>

      <div className="grid md:grid-cols-2 gap-4 mt-4">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold mb-2">Relatively Prime</h4>
          <ul className="text-dark-300 text-sm space-y-2">
            <li>8 and 15: gcd = 1, so 8/15 is in lowest terms</li>
            <li>9 and 16: gcd = 1, so 9/16 is in lowest terms</li>
            <li>17 and 23: gcd = 1 (both prime), so 17/23 is in lowest terms</li>
          </ul>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold mb-2">Not Relatively Prime</h4>
          <ul className="text-dark-300 text-sm space-y-2">
            <li>8 and 12: gcd = 4, so 8/12 = 2/3</li>
            <li>9 and 15: gcd = 3, so 9/15 = 3/5</li>
            <li>14 and 21: gcd = 7, so 14/21 = 2/3</li>
          </ul>
        </div>
      </div>

      <h3 className="mt-6">The Logical Structure</h3>

      <div className="bg-gradient-to-br from-blue-500/10 to-dark-800/50 rounded-xl p-6 mt-4 border border-blue-500/20">
        <p className="text-dark-200 mb-4">
          This proposition is one direction of a biconditional:
        </p>
        <p className="text-amber-400 text-center my-4">
          Relatively prime &rArr; Lowest terms
        </p>
        <p className="text-dark-300">
          The converse (lowest terms &rArr; relatively prime) will be established
          in VII.22. Together, they prove:
        </p>
        <p className="text-amber-400 font-mono text-center mt-4">
          A : B in lowest terms &hArr; gcd(A, B) = 1
        </p>
      </div>

      <h3 className="mt-6">Key Dependencies</h3>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>
          <strong className="text-amber-400">VII.Def.12:</strong> Definition of relatively
          prime numbers (no common measure except the unit)
        </li>
        <li>
          <strong className="text-amber-400">VII.16:</strong> Commutativity of multiplication
        </li>
        <li>
          <strong className="text-amber-400">VII.20:</strong> Least numbers measure all
          equivalent ratios
        </li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Modern Significance:</strong> This proposition
          is fundamental to rational arithmetic. Every positive rational number has a
          unique representation as a fraction in lowest terms. The algorithm to reduce
          any fraction to lowest terms (divide both terms by their gcd) works precisely
          because this proposition guarantees we cannot reduce further once gcd = 1.
        </p>
      </div>
    </LessonLayout>
  );
}
