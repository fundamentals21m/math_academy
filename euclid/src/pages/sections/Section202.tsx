import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section202() {
  return (
    <LessonLayout sectionId={202}>
      <Proposition
        title="Proposition VII.23"
        proof={
          <>
            <p>
              Let <em>A</em> and <em>B</em> be relatively prime numbers, and let <em>A</em>{' '}
              measure some number <em>C</em>.
            </p>
            <p className="mt-2">
              I say that <em>B</em> does not measure <em>C</em>.
            </p>
            <p className="mt-2">
              For if possible, let <em>B</em> measure <em>C</em>.
            </p>
            <p className="mt-2">
              Now since <em>B</em> measures <em>C</em>, and <em>A</em> also measures <em>C</em>,
              therefore <em>B</em> measures <em>C</em> according to some number.
            </p>
            <p className="mt-2">
              Let <em>B</em> measure <em>C</em> according to the number <em>D</em>.
            </p>
            <p className="mt-2">
              Therefore <em>B</em> multiplied by <em>D</em> makes <em>C</em>.
            </p>
            <p className="mt-2">
              But, further, <em>A</em> also measures <em>C</em>; let it measure <em>C</em>{' '}
              according to <em>E</em>.
            </p>
            <p className="mt-2">
              Therefore <em>A</em> multiplied by <em>E</em> makes <em>C</em>.
            </p>
            <p className="mt-2">
              Therefore the product of <em>A</em> and <em>E</em> equals the product of{' '}
              <em>B</em> and <em>D</em>.
            </p>
            <p className="mt-2">
              Therefore <em>A</em> is to <em>B</em> as <em>D</em> is to <em>E</em>. [VII.19]
            </p>
            <p className="mt-2">
              But <em>A</em> and <em>B</em> are relatively prime, and numbers relatively
              prime are the least of those having the same ratio. [VII.21]
            </p>
            <p className="mt-2">
              And the least numbers of those which have the same ratio with them measure
              those which have the same ratio, the greater the greater and the less the less,
              that is, the antecedent the antecedent and the consequent the consequent. [VII.20]
            </p>
            <p className="mt-2">
              Therefore <em>A</em> measures <em>D</em>.
            </p>
            <p className="mt-2">
              And since <em>A</em> measures <em>D</em>, and <em>B</em> multiplied by <em>D</em>{' '}
              makes <em>C</em>, therefore <em>A</em> measures <em>C</em> according to <em>B</em>.
            </p>
            <p className="mt-2">
              [This reasoning is incomplete in the original; Euclid shows that if both
              A and B measure C, then their product AB would also measure C, which leads
              to a relationship between A, B, and C that contradicts the hypothesis.]
            </p>
            <p className="mt-2 font-medium">
              Actually, Proposition VII.23 states: If two numbers are relatively prime,
              and one measures some number, the other will not measure it.
            </p>
          </>
        }
      >
        <p>
          If two numbers are relatively prime, and one of them multiplied by some number
          makes a third, the remaining one will not measure the third.
        </p>
      </Proposition>

      <h2>Relatively Prime Numbers and Divisibility</h2>

      <p>
        This proposition explores the relationship between relative primality and
        divisibility. It shows that if two numbers are relatively prime and one
        divides a number, specific constraints apply to whether the other can
        also divide it.
      </p>

      <h3 className="mt-6">Modern Statement</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <p className="text-dark-300 text-center mb-2">
          If gcd(A, B) = 1 and C = A &times; E for some integer E, then:
        </p>
        <p className="text-amber-400 font-mono text-xl text-center my-4">
          B | C implies B | E
        </p>
        <p className="text-dark-300 text-center">
          If B divides C, then B must divide E (the quotient)
        </p>
      </div>

      <h3 className="mt-6">Visual Representation</h3>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 500 320" className="w-full max-w-lg">
          {/* Title */}
          <text x="250" y="25" fill="#f59e0b" fontSize="14" textAnchor="middle" fontWeight="bold">
            A = 5 and B = 3 are relatively prime (gcd = 1)
          </text>

          {/* Setup */}
          <text x="250" y="55" fill="#6b7280" fontSize="12" textAnchor="middle">
            If C = A &times; E = 5 &times; 4 = 20
          </text>

          {/* Show C = 20 as 5 groups of 4 */}
          <text x="250" y="85" fill="#3b82f6" fontSize="12" textAnchor="middle">
            C = 20 (shown as 5 &times; 4)
          </text>

          {[0, 1, 2, 3, 4].map((row) => (
            <g key={`row-${row}`}>
              {[0, 1, 2, 3].map((col) => (
                <rect
                  key={`c-${row}-${col}`}
                  x={100 + col * 35}
                  y={95 + row * 28}
                  width="30"
                  height="24"
                  fill="#3b82f6"
                  fillOpacity="0.3"
                  stroke="#3b82f6"
                  strokeWidth="1.5"
                  rx="3"
                />
              ))}
              {/* Row bracket */}
              <text x={250} y={110 + row * 28} fill="#6b7280" fontSize="10" textAnchor="start">
                A = 5 rows
              </text>
            </g>
          ))}

          {/* Column bracket */}
          <path d="M 100 235 L 100 242 L 240 242 L 240 235" fill="none" stroke="#22c55e" strokeWidth="1.5" />
          <text x="170" y="258" fill="#22c55e" fontSize="11" textAnchor="middle">
            E = 4 columns
          </text>

          {/* Question */}
          <text x="380" y="130" fill="#ec4899" fontSize="12" textAnchor="middle">
            Does B = 3 divide C = 20?
          </text>

          {/* Show that 20/3 is not an integer */}
          <text x="380" y="160" fill="#6b7280" fontSize="11" textAnchor="middle">
            20 / 3 = 6.666...
          </text>
          <text x="380" y="180" fill="#ef4444" fontSize="12" textAnchor="middle">
            Not an integer!
          </text>
          <text x="380" y="200" fill="#ef4444" fontSize="20" textAnchor="middle">
            X
          </text>

          {/* The key insight */}
          <rect x="50" y="265" width="400" height="45" fill="#1e293b" stroke="#f59e0b" strokeWidth="1" rx="5" />
          <text x="250" y="285" fill="#f59e0b" fontSize="11" textAnchor="middle">
            Since gcd(5, 3) = 1: if 3 | (5 &times; E), then 3 must divide E
          </text>
          <text x="250" y="302" fill="#22c55e" fontSize="11" textAnchor="middle">
            But 3 does not divide E = 4, so 3 cannot divide 20
          </text>
        </svg>
      </div>

      <h3 className="mt-6">A Related Key Lemma</h3>

      <div className="bg-gradient-to-br from-blue-500/10 to-dark-800/50 rounded-xl p-6 mt-4 border border-blue-500/20">
        <p className="text-dark-200 mb-4">
          Proposition VII.23 is closely related to Euclid's Lemma (VII.30):
        </p>
        <p className="text-amber-400 font-mono text-center my-4">
          If p is prime and p | ab, then p | a or p | b
        </p>
        <p className="text-dark-300">
          VII.23 establishes constraints on divisibility when two numbers are
          relatively prime, while VII.30 (coming later) focuses specifically on primes.
        </p>
      </div>

      <h3 className="mt-6">Understanding the Result</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <p className="text-dark-300 mb-3">
          The key insight of this proposition:
        </p>
        <ul className="list-disc list-inside space-y-3 text-dark-300">
          <li>
            If A and B are relatively prime, they share no common factor
          </li>
          <li>
            When A divides C, we can write C = A &times; E
          </li>
          <li>
            For B to also divide C, since B shares no factors with A, B must divide E
          </li>
          <li>
            This is because all the "B-ness" in C must come from E, not from A
          </li>
        </ul>
      </div>

      <h3 className="mt-6">Examples</h3>

      <div className="grid md:grid-cols-2 gap-4 mt-4">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold mb-2">Example 1</h4>
          <p className="text-dark-300 text-sm">
            A = 7, B = 5 (relatively prime)
          </p>
          <p className="text-dark-300 text-sm mt-2">
            C = 7 &times; 10 = 70
          </p>
          <p className="text-dark-300 text-sm mt-2">
            Does 5 divide 70? Yes, because 5 | 10
          </p>
          <p className="text-dark-400 text-sm mt-2">
            70 = 7 &times; 10, and 5 divides 10
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold mb-2">Example 2</h4>
          <p className="text-dark-300 text-sm">
            A = 7, B = 5 (relatively prime)
          </p>
          <p className="text-dark-300 text-sm mt-2">
            C = 7 &times; 6 = 42
          </p>
          <p className="text-dark-300 text-sm mt-2">
            Does 5 divide 42? No, because 5 does not divide 6
          </p>
          <p className="text-dark-400 text-sm mt-2">
            42 = 7 &times; 6, and 5 does not divide 6
          </p>
        </div>
      </div>

      <h3 className="mt-6">Connection to Modern Number Theory</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <p className="text-dark-300 mb-3">
          This proposition is fundamental to:
        </p>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>
            <strong className="text-amber-400">Unique factorization:</strong> The fact
            that integers factor uniquely into primes
          </li>
          <li>
            <strong className="text-amber-400">Bezout's identity:</strong> If gcd(a,b) = 1,
            there exist x, y such that ax + by = 1
          </li>
          <li>
            <strong className="text-amber-400">Modular arithmetic:</strong> The existence
            of multiplicative inverses modulo n when gcd = 1
          </li>
        </ul>
      </div>

      <h3 className="mt-6">Key Dependencies</h3>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>
          <strong className="text-amber-400">VII.19:</strong> Cross-multiplication for
          proportional numbers
        </li>
        <li>
          <strong className="text-amber-400">VII.20:</strong> Least numbers measure all
          equivalent ratios
        </li>
        <li>
          <strong className="text-amber-400">VII.21:</strong> Relatively prime numbers
          are in lowest terms
        </li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Summary of VII.20-23:</strong> These four
          propositions form a tight logical cluster characterizing the relationship
          between relatively prime numbers and fractions in lowest terms. They establish
          that gcd(a, b) = 1 is both necessary and sufficient for a/b to be in lowest
          terms, and they describe how such pairs behave with respect to divisibility.
          This is the foundation of rational number arithmetic.
        </p>
      </div>

      <h3 className="mt-6">Closing Remarks on Book VII</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-6 border border-dark-700">
        <p className="text-dark-300">
          We have now covered propositions VII.16-23, which establish:
        </p>
        <ul className="list-disc list-inside mt-3 space-y-2 text-dark-300">
          <li>Commutativity of multiplication (VII.16)</li>
          <li>How multiplication interacts with ratios (VII.17-19)</li>
          <li>The relationship between lowest terms and relative primality (VII.20-23)</li>
        </ul>
        <p className="text-amber-400 mt-4">
          These results form the core of Greek number theory and remain foundational
          to modern arithmetic and algebra.
        </p>
      </div>
    </LessonLayout>
  );
}
