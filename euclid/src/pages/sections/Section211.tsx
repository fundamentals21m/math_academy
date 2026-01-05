import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section211() {
  return (
    <LessonLayout sectionId={211}>
      <Proposition
        title="Proposition VII.32"
        proof={
          <>
            <p>
              Let <em>A</em> be any number greater than one.
            </p>
            <p className="mt-2">
              I say that <em>A</em> is either prime, or is measured by some prime number.
            </p>
            <p className="mt-2">
              For if <em>A</em> is prime, then what was required has already been proved.
            </p>
            <p className="mt-2">
              But if <em>A</em> is composite, some number will measure it. Let <em>B</em> measure it.
              Now if <em>B</em> is prime, then <em>A</em> is measured by the prime number <em>B</em>,
              and what was required is done.
            </p>
            <p className="mt-2">
              But if <em>B</em> is composite, some number will measure it. Let <em>C</em> measure it.
              Now if <em>C</em> is prime, then <em>A</em> is measured by <em>C</em> (since <em>C</em>{' '}
              measures <em>B</em> which measures <em>A</em>).
            </p>
            <p className="mt-2">
              But if <em>C</em> is composite, we proceed in like manner, and eventually we must find
              some prime number which measures <em>A</em>.
            </p>
            <p className="mt-2 font-medium">
              For if not, an infinite sequence of numbers will measure <em>A</em>, each of which is
              less than the other. But this is impossible among numbers. Therefore any number greater
              than one is either prime or is measured by some prime number.
            </p>
          </>
        }
      >
        <p>
          Any number either is prime or is measured by some prime number.
        </p>
      </Proposition>

      <h2>The Fundamental Theorem's Foundation</h2>

      <p>
        This proposition establishes one of the most important results in all of number theory:
        every integer greater than 1 either <em>is</em> a prime number, or it <em>has</em> a prime
        factor. This is the foundation for the <strong>Fundamental Theorem of Arithmetic</strong>,
        which states that every integer greater than 1 can be uniquely factored into primes.
      </p>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 400 300" className="w-full max-w-md">
          {/* Title */}
          <text x="200" y="25" fill="#f59e0b" fontSize="14" textAnchor="middle" fontWeight="bold">
            Finding Prime Factors: Example with 60
          </text>

          {/* Tree structure showing factorization */}
          {/* Level 0: 60 */}
          <circle cx="200" cy="60" r="20" fill="#3b82f6" fillOpacity="0.3" stroke="#3b82f6" strokeWidth="2" />
          <text x="200" y="65" fill="#3b82f6" fontSize="14" textAnchor="middle" fontWeight="bold">60</text>

          {/* Branches to level 1 */}
          <line x1="185" y1="75" x2="120" y2="115" stroke="#6b7280" strokeWidth="1.5" />
          <line x1="215" y1="75" x2="280" y2="115" stroke="#6b7280" strokeWidth="1.5" />

          {/* Level 1: 2 and 30 */}
          <circle cx="120" cy="130" r="18" fill="#22c55e" fillOpacity="0.3" stroke="#22c55e" strokeWidth="2" />
          <text x="120" y="135" fill="#22c55e" fontSize="13" textAnchor="middle" fontWeight="bold">2</text>
          <text x="120" y="155" fill="#22c55e" fontSize="9" textAnchor="middle">prime</text>

          <circle cx="280" cy="130" r="18" fill="#3b82f6" fillOpacity="0.3" stroke="#3b82f6" strokeWidth="2" />
          <text x="280" y="135" fill="#3b82f6" fontSize="13" textAnchor="middle" fontWeight="bold">30</text>

          {/* Branches from 30 */}
          <line x1="265" y1="145" x2="220" y2="185" stroke="#6b7280" strokeWidth="1.5" />
          <line x1="295" y1="145" x2="340" y2="185" stroke="#6b7280" strokeWidth="1.5" />

          {/* Level 2: 2 and 15 */}
          <circle cx="220" cy="200" r="18" fill="#22c55e" fillOpacity="0.3" stroke="#22c55e" strokeWidth="2" />
          <text x="220" y="205" fill="#22c55e" fontSize="13" textAnchor="middle" fontWeight="bold">2</text>
          <text x="220" y="225" fill="#22c55e" fontSize="9" textAnchor="middle">prime</text>

          <circle cx="340" cy="200" r="18" fill="#3b82f6" fillOpacity="0.3" stroke="#3b82f6" strokeWidth="2" />
          <text x="340" y="205" fill="#3b82f6" fontSize="13" textAnchor="middle" fontWeight="bold">15</text>

          {/* Branches from 15 */}
          <line x1="328" y1="215" x2="300" y2="250" stroke="#6b7280" strokeWidth="1.5" />
          <line x1="352" y1="215" x2="380" y2="250" stroke="#6b7280" strokeWidth="1.5" />

          {/* Level 3: 3 and 5 */}
          <circle cx="300" cy="265" r="18" fill="#22c55e" fillOpacity="0.3" stroke="#22c55e" strokeWidth="2" />
          <text x="300" y="270" fill="#22c55e" fontSize="13" textAnchor="middle" fontWeight="bold">3</text>
          <text x="300" y="290" fill="#22c55e" fontSize="9" textAnchor="middle">prime</text>

          <circle cx="380" cy="265" r="18" fill="#22c55e" fillOpacity="0.3" stroke="#22c55e" strokeWidth="2" />
          <text x="380" y="270" fill="#22c55e" fontSize="13" textAnchor="middle" fontWeight="bold">5</text>
          <text x="380" y="290" fill="#22c55e" fontSize="9" textAnchor="middle">prime</text>

          {/* Legend */}
          <rect x="20" y="250" width="12" height="12" fill="#22c55e" fillOpacity="0.3" stroke="#22c55e" />
          <text x="38" y="260" fill="#22c55e" fontSize="10">Prime</text>
          <rect x="20" y="268" width="12" height="12" fill="#3b82f6" fillOpacity="0.3" stroke="#3b82f6" />
          <text x="38" y="278" fill="#3b82f6" fontSize="10">Composite</text>
        </svg>
      </div>

      <h3>Modern Algebraic Statement</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700 text-center">
        <p className="text-xl text-amber-400 font-mono">
          For all n &gt; 1: n is prime OR there exists prime p such that p | n
        </p>
      </div>

      <h3 className="mt-6">Proof Strategy: Infinite Descent</h3>

      <p>
        Euclid's proof uses what we now call <strong>infinite descent</strong> (or equivalently,
        the well-ordering principle). The key insight is:
      </p>

      <ol className="list-decimal list-inside mt-4 space-y-3 text-dark-300">
        <li>
          If <em>A</em> is prime, we're done immediately
        </li>
        <li>
          If <em>A</em> is composite, some number <em>B</em> measures (divides) it
        </li>
        <li>
          If <em>B</em> is prime, we found a prime factor of <em>A</em>
        </li>
        <li>
          If <em>B</em> is composite, repeat with a divisor <em>C</em> of <em>B</em>
        </li>
        <li>
          Each step gives us a <em>smaller</em> number that divides <em>A</em>
        </li>
        <li>
          Since we cannot descend infinitely among positive integers, we must eventually reach a prime
        </li>
      </ol>

      <h3 className="mt-6">Why the Process Must Terminate</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <p className="text-dark-300">
          If <em>B</em> measures <em>A</em>, then <em>B</em> ≤ <em>A</em>. If <em>C</em> measures{' '}
          <em>B</em>, then <em>C</em> ≤ <em>B</em>. We get a descending chain:
        </p>
        <p className="text-xl text-amber-400 font-mono text-center mt-3">
          A ≥ B ≥ C ≥ D ≥ ...
        </p>
        <p className="text-dark-300 mt-3">
          Such a chain of positive integers cannot continue forever. It must stop at some prime.
        </p>
      </div>

      <h3 className="mt-6">Connection to Unique Factorization</h3>

      <p>
        VII.32 shows every composite number has <em>at least one</em> prime factor. By applying
        this repeatedly, we can completely factor any number into primes. Combined with VII.30
        (if p | ab then p | a or p | b), this leads to:
      </p>

      <div className="bg-gradient-to-br from-emerald-500/10 to-dark-800/50 rounded-xl p-6 mt-4 border border-emerald-500/20">
        <h4 className="text-emerald-400 font-semibold mb-2">Fundamental Theorem of Arithmetic</h4>
        <p className="text-dark-200">
          Every integer greater than 1 can be written as a product of prime numbers in exactly
          one way (up to the order of the factors).
        </p>
        <p className="text-amber-400 font-mono text-center mt-3">
          60 = 2 × 2 × 3 × 5 = 2² × 3 × 5
        </p>
      </div>

      <h3 className="mt-6">Modern Applications</h3>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>
          <strong>Cryptography:</strong> RSA encryption relies on the difficulty of factoring large
          numbers into their prime components
        </li>
        <li>
          <strong>Hash functions:</strong> Prime factorization properties ensure good distribution
        </li>
        <li>
          <strong>Computer algebra:</strong> Polynomial factorization algorithms build on integer
          factorization
        </li>
        <li>
          <strong>Error correction:</strong> Prime field arithmetic underlies Reed-Solomon codes
        </li>
      </ul>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Definition VII.11 (prime number: measured only by 1)</li>
        <li>Definition VII.12 (coprime numbers)</li>
        <li>The well-ordering of natural numbers (no infinite descent)</li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Historical Note:</strong> This proposition, along with
          VII.31, provides the theoretical foundation for the sieve of Eratosthenes. To find all
          primes up to <em>n</em>, we only need to check divisibility by primes up to √<em>n</em>,
          since any composite number ≤ <em>n</em> must have a prime factor ≤ √<em>n</em>.
        </p>
      </div>
    </LessonLayout>
  );
}
