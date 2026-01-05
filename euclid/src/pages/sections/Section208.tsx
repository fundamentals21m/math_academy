import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition, Definition } from '@/components/common/ContentBlocks';

export default function Section208() {
  return (
    <LessonLayout sectionId={208}>
      <Proposition
        title="Proposition VII.29"
        proof={
          <>
            <p>
              Let <em>A</em> be a prime number, and let <em>A</em> not measure <em>B</em>.
            </p>
            <p className="mt-2">
              I say that <em>B</em> and <em>A</em> are relatively prime.
            </p>
            <p className="mt-2">
              For, if <em>B</em> and <em>A</em> are not relatively prime, some number{' '}
              <em>C</em> will measure them.
            </p>
            <p className="mt-2">
              Let <em>C</em> measure them.
            </p>
            <p className="mt-2">
              Since <em>C</em> measures <em>A</em>, and <em>A</em> is a prime, therefore{' '}
              <em>C</em> is either the unit or <em>A</em> itself.
            </p>
            <p className="mt-2">
              If <em>C</em> is the unit, then <em>B</em> and <em>A</em> are relatively
              prime, which contradicts our assumption.
            </p>
            <p className="mt-2">
              If <em>C</em> equals <em>A</em>, then since <em>C</em> measures <em>B</em>,{' '}
              <em>A</em> measures <em>B</em>.
            </p>
            <p className="mt-2">
              But <em>A</em> does not measure <em>B</em> by hypothesis.
            </p>
            <p className="mt-2 font-medium">
              Therefore <em>C</em> must be the unit, and so <em>B</em> and <em>A</em> are
              relatively prime.
            </p>
          </>
        }
      >
        <p>
          Any prime number is relatively prime to any number which it does not measure.
        </p>
      </Proposition>

      <h2>The Special Nature of Primes</h2>

      <p>
        This proposition captures an essential property of prime numbers: a prime has
        exactly two divisors (1 and itself). Therefore, if a prime does not divide a
        number, their only common divisor is 1&mdash;they must be coprime.
      </p>

      <Definition title="Recall: Prime Number (VII.Def.11)">
        <p>
          A prime number is that which is measured by the unit alone.
        </p>
        <p className="mt-2 text-dark-400">
          In modern terms: A prime p greater than 1 has exactly two divisors: 1 and p itself.
        </p>
      </Definition>

      <h3 className="mt-6">Modern Algebraic Statement</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700 text-center">
        <p className="text-dark-300 mb-2">For any prime p and any integer n:</p>
        <p className="text-amber-400 font-mono text-lg">
          If p does not divide n, then gcd(p, n) = 1
        </p>
      </div>

      <h3 className="mt-6">Visual Representation</h3>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 400 300" className="w-full max-w-md">
          {/* Title */}
          <text x="200" y="25" fill="#f59e0b" fontSize="14" fontWeight="bold" textAnchor="middle">
            Prime Numbers and Coprimality
          </text>

          {/* Prime number p */}
          <circle cx="100" cy="100" r="45" fill="#ec4899" fillOpacity="0.2" stroke="#ec4899" strokeWidth="2" />
          <text x="100" y="95" fill="#ec4899" fontSize="18" fontWeight="bold" textAnchor="middle">p = 7</text>
          <text x="100" y="115" fill="#ec4899" fontSize="11" textAnchor="middle">(prime)</text>

          {/* Divisors of p */}
          <text x="100" y="165" fill="#6b7280" fontSize="11" textAnchor="middle">
            Divisors of 7: only 1 and 7
          </text>

          {/* Number n that p doesn't divide */}
          <circle cx="300" cy="100" r="45" fill="#3b82f6" fillOpacity="0.2" stroke="#3b82f6" strokeWidth="2" />
          <text x="300" y="95" fill="#3b82f6" fontSize="18" fontWeight="bold" textAnchor="middle">n = 15</text>
          <text x="300" y="115" fill="#3b82f6" fontSize="11" textAnchor="middle">(7 does not divide 15)</text>

          {/* X showing p doesn't divide n */}
          <path d="M 150 100 L 250 100" fill="none" stroke="#ef4444" strokeWidth="2" strokeDasharray="8,4" />
          <text x="200" y="90" fill="#ef4444" fontSize="12" textAnchor="middle">7 does not divide 15</text>

          {/* Common divisor analysis */}
          <rect x="50" y="200" width="300" height="80" rx="10" fill="#22c55e" fillOpacity="0.1" stroke="#22c55e" strokeWidth="1" />

          <text x="200" y="225" fill="#22c55e" fontSize="12" fontWeight="bold" textAnchor="middle">
            Common Divisor Analysis
          </text>

          <text x="200" y="248" fill="#6b7280" fontSize="11" textAnchor="middle">
            Any common divisor d must divide p = 7
          </text>
          <text x="200" y="265" fill="#6b7280" fontSize="11" textAnchor="middle">
            So d = 1 or d = 7. But d = 7 would mean 7 | 15.
          </text>

          {/* Conclusion */}
          <text x="200" y="295" fill="#f59e0b" fontSize="13" fontWeight="bold" textAnchor="middle">
            Therefore gcd(7, 15) = 1
          </text>
        </svg>
      </div>

      <h3 className="mt-6">The Key Insight</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <p className="text-dark-300 mb-3">
          The proof exploits the defining property of primes:
        </p>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>A prime p has only two divisors: 1 and p</li>
          <li>Any common divisor of p and n must divide p</li>
          <li>So the common divisor is either 1 or p</li>
          <li>If it's p, then p divides n (contradicting our hypothesis)</li>
          <li>Therefore, the only common divisor is 1</li>
        </ul>
      </div>

      <h3 className="mt-6">Examples with Various Primes</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-ec4899 font-semibold mb-2">Prime p = 5</p>
            <ul className="list-disc list-inside space-y-1 text-dark-300 text-sm">
              <li>5 does not divide 7 implies gcd(5, 7) = 1</li>
              <li>5 does not divide 12 implies gcd(5, 12) = 1</li>
              <li>5 does not divide 23 implies gcd(5, 23) = 1</li>
              <li>5 divides 15, so this case doesn't apply</li>
            </ul>
          </div>
          <div>
            <p className="text-ec4899 font-semibold mb-2">Prime p = 11</p>
            <ul className="list-disc list-inside space-y-1 text-dark-300 text-sm">
              <li>11 does not divide 20 implies gcd(11, 20) = 1</li>
              <li>11 does not divide 100 implies gcd(11, 100) = 1</li>
              <li>11 does not divide 30 implies gcd(11, 30) = 1</li>
              <li>11 divides 22, so this case doesn't apply</li>
            </ul>
          </div>
        </div>
      </div>

      <h3 className="mt-6">Contrapositive Form</h3>

      <div className="bg-gradient-to-br from-blue-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-blue-500/20">
        <p className="text-dark-200">
          <strong className="text-blue-400">The Contrapositive:</strong> This proposition
          can be stated equivalently as:
        </p>
        <p className="text-amber-400 font-mono text-center my-4">
          If gcd(p, n) is not equal to 1, then p divides n
        </p>
        <p className="text-dark-300">
          For a prime p, there's no middle ground: either p divides n, or p is coprime to n.
          This "all or nothing" behavior is characteristic of prime numbers.
        </p>
      </div>

      <h3 className="mt-6">Two Possibilities Diagram</h3>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 400 200" className="w-full max-w-md">
          {/* Prime p */}
          <circle cx="100" cy="100" r="35" fill="#ec4899" fillOpacity="0.3" stroke="#ec4899" strokeWidth="2" />
          <text x="100" y="105" fill="#ec4899" fontSize="16" fontWeight="bold" textAnchor="middle">p</text>
          <text x="100" y="145" fill="#6b7280" fontSize="10" textAnchor="middle">(prime)</text>

          {/* Number n */}
          <circle cx="300" cy="100" r="35" fill="#3b82f6" fillOpacity="0.3" stroke="#3b82f6" strokeWidth="2" />
          <text x="300" y="105" fill="#3b82f6" fontSize="16" fontWeight="bold" textAnchor="middle">n</text>

          {/* Two paths */}
          {/* Path 1: p divides n */}
          <path d="M 140 80 Q 200 40 260 80" fill="none" stroke="#22c55e" strokeWidth="2" />
          <text x="200" y="35" fill="#22c55e" fontSize="11" fontWeight="bold" textAnchor="middle">p | n</text>
          <text x="200" y="50" fill="#6b7280" fontSize="9" textAnchor="middle">p divides n</text>

          {/* Path 2: gcd = 1 */}
          <path d="M 140 120 Q 200 160 260 120" fill="none" stroke="#f59e0b" strokeWidth="2" />
          <text x="200" y="175" fill="#f59e0b" fontSize="11" fontWeight="bold" textAnchor="middle">gcd(p, n) = 1</text>
          <text x="200" y="190" fill="#6b7280" fontSize="9" textAnchor="middle">coprime</text>

          {/* OR label */}
          <rect x="185" y="95" width="30" height="20" rx="4" fill="#dark-800" stroke="#6b7280" strokeWidth="1" />
          <text x="200" y="109" fill="#6b7280" fontSize="11" fontWeight="bold" textAnchor="middle">OR</text>

          {/* No middle ground */}
          <text x="200" y="220" fill="#ef4444" fontSize="10" textAnchor="middle">
            No other possibility exists for primes!
          </text>
        </svg>
      </div>

      <h3 className="mt-6">Why This Matters for VII.30</h3>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Building to Euclid's Lemma:</strong> This
          proposition is the key lemma needed for the next result, VII.30 (Euclid's Lemma),
          which states that if a prime divides a product, it must divide one of the factors.
        </p>
        <p className="text-dark-300 mt-4">
          The connection: If prime p divides AB but doesn't divide A, then by VII.29,
          gcd(p, A) = 1. Combined with VII.23-24, this will force p to divide B.
        </p>
      </div>

      <h3 className="mt-6">Comparison with Composite Numbers</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <p className="text-dark-300 mb-3">
          This property does NOT hold for composite numbers:
        </p>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>
            <strong>Example:</strong> Let n = 6 (composite). Consider m = 10.
          </li>
          <li>6 does not divide 10, but gcd(6, 10) = 2, not 1</li>
          <li>The shared factor 2 comes from 6 = 2 x 3 and 10 = 2 x 5</li>
        </ul>
        <p className="text-amber-400 mt-4">
          Composite numbers have divisors other than 1 and themselves, so they can
          share factors with numbers they don't divide.
        </p>
      </div>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 400 150" className="w-full max-w-md">
          {/* Prime case */}
          <rect x="20" y="20" width="160" height="110" rx="8" fill="#22c55e" fillOpacity="0.1" stroke="#22c55e" strokeWidth="1" />
          <text x="100" y="45" fill="#22c55e" fontSize="12" fontWeight="bold" textAnchor="middle">Prime p = 7</text>
          <text x="100" y="70" fill="#6b7280" fontSize="10" textAnchor="middle">Divisors: 1, 7</text>
          <text x="100" y="95" fill="#6b7280" fontSize="10" textAnchor="middle">If 7 does not divide n</text>
          <text x="100" y="115" fill="#22c55e" fontSize="11" textAnchor="middle">gcd(7, n) = 1 always</text>

          {/* Composite case */}
          <rect x="220" y="20" width="160" height="110" rx="8" fill="#ef4444" fillOpacity="0.1" stroke="#ef4444" strokeWidth="1" />
          <text x="300" y="45" fill="#ef4444" fontSize="12" fontWeight="bold" textAnchor="middle">Composite n = 6</text>
          <text x="300" y="70" fill="#6b7280" fontSize="10" textAnchor="middle">Divisors: 1, 2, 3, 6</text>
          <text x="300" y="95" fill="#6b7280" fontSize="10" textAnchor="middle">6 does not divide 10 but</text>
          <text x="300" y="115" fill="#ef4444" fontSize="11" textAnchor="middle">gcd(6, 10) = 2 not 1</text>
        </svg>
      </div>

      <h3 className="mt-6">Modern Applications</h3>

      <div className="bg-gradient-to-br from-cyan-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-cyan-500/20">
        <p className="text-dark-200 mb-4">
          <strong className="text-cyan-400">Applications:</strong>
        </p>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>
            <strong>Modular inverses:</strong> In Z/pZ (integers mod p), every non-zero
            element has an inverse because gcd(a, p) = 1 for all a not divisible by p.
          </li>
          <li>
            <strong>Field structure:</strong> Z/pZ is a field precisely because of this
            property&mdash;every non-zero element is coprime to p.
          </li>
          <li>
            <strong>RSA cryptography:</strong> When working mod n = pq, understanding
            which elements are coprime to n is crucial.
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
