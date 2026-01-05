import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition, Theorem } from '@/components/common/ContentBlocks';

export default function Section209() {
  return (
    <LessonLayout sectionId={209}>
      <div className="bg-gradient-to-r from-amber-500/20 to-amber-600/10 rounded-xl p-6 mb-8 border border-amber-500/30">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-2xl">&#9733;</span>
          <span className="text-amber-400 font-bold text-lg">LANDMARK PROPOSITION</span>
        </div>
        <p className="text-dark-200">
          Proposition VII.30, known today as <strong className="text-amber-400">Euclid's Lemma</strong>,
          is one of the most important results in all of number theory. It is the key step in
          proving the Fundamental Theorem of Arithmetic (uniqueness of prime factorization).
        </p>
      </div>

      <Proposition
        title="Proposition VII.30 - Euclid's Lemma"
        proof={
          <>
            <p>
              Let <em>A</em> be a prime number, and let <em>A</em> measuring <em>BC</em>{' '}
              measure the product of <em>B</em> and <em>C</em>.
            </p>
            <p className="mt-2">
              I say that <em>A</em> measures one of the numbers <em>B</em> or <em>C</em>.
            </p>
            <p className="mt-2">
              For let <em>A</em> not measure <em>B</em>.
            </p>
            <p className="mt-2">
              Then, since <em>A</em> is prime and does not measure <em>B</em>, therefore{' '}
              <em>A</em> and <em>B</em> are relatively prime. [VII.29]
            </p>
            <p className="mt-2">
              And since <em>A</em> and <em>B</em> are relatively prime, and <em>A</em>{' '}
              measures the product <em>BC</em>, and whatever numbers are relatively prime
              to a number and that number makes some product, the relatively prime numbers
              will also measure the product...
            </p>
            <p className="mt-2">
              By VII.30 (alternate proof using VII.19-20): Since <em>A</em> and <em>B</em>{' '}
              are coprime and <em>A</em> divides <em>BC</em>, we can write <em>BC</em> = <em>A</em> x <em>D</em>{' '}
              for some <em>D</em>.
            </p>
            <p className="mt-2">
              Since gcd(<em>A</em>, <em>B</em>) = 1, and <em>A</em> x <em>D</em> = <em>B</em> x <em>C</em>,
              by the properties of proportion and coprimality (VII.19, VII.20),{' '}
              <em>A</em> must measure <em>C</em>.
            </p>
            <p className="mt-2 font-medium">
              Therefore, if <em>A</em> does not measure <em>B</em>, then <em>A</em>{' '}
              measures <em>C</em>. In either case, <em>A</em> measures one of <em>B</em>{' '}
              or <em>C</em>.
            </p>
          </>
        }
      >
        <p>
          If a prime number measures the product of two numbers, it will measure one
          of them.
        </p>
      </Proposition>

      <Theorem title="Modern Statement: Euclid's Lemma">
        <p>
          If <em>p</em> is a prime and <em>p</em> divides the product <em>ab</em>, then{' '}
          <em>p</em> divides <em>a</em> or <em>p</em> divides <em>b</em> (or both).
        </p>
        <div className="mt-4 text-center">
          <p className="text-amber-400 font-mono text-lg">
            p | ab implies p | a or p | b
          </p>
        </div>
      </Theorem>

      <h2>Why This Proposition is Fundamental</h2>

      <p>
        Euclid's Lemma is the cornerstone of the theory of prime factorization. It
        captures the essence of what makes prime numbers "prime": they cannot divide
        a product without dividing at least one factor. This is precisely the property
        that ensures prime factorizations are unique.
      </p>

      <h3 className="mt-6">Visual Representation</h3>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 450 320" className="w-full max-w-lg">
          {/* Title */}
          <text x="225" y="25" fill="#f59e0b" fontSize="16" fontWeight="bold" textAnchor="middle">
            Euclid's Lemma: If p | ab, then p | a or p | b
          </text>

          {/* Product ab */}
          <rect x="160" y="50" width="130" height="50" rx="10" fill="#8b5cf6" fillOpacity="0.2" stroke="#8b5cf6" strokeWidth="2" />
          <text x="225" y="80" fill="#8b5cf6" fontSize="18" fontWeight="bold" textAnchor="middle">a x b</text>

          {/* Prime p divides ab */}
          <circle cx="80" cy="75" r="30" fill="#ec4899" fillOpacity="0.3" stroke="#ec4899" strokeWidth="2" />
          <text x="80" y="80" fill="#ec4899" fontSize="16" fontWeight="bold" textAnchor="middle">p</text>
          <text x="80" y="115" fill="#ec4899" fontSize="10" textAnchor="middle">(prime)</text>

          <path d="M 110 75 L 155 75" fill="none" stroke="#ec4899" strokeWidth="2" markerEnd="url(#arrow)" />
          <text x="133" y="65" fill="#ec4899" fontSize="11" textAnchor="middle">divides</text>

          {/* Fork showing two possibilities */}
          <path d="M 225 105 L 225 140" fill="none" stroke="#6b7280" strokeWidth="2" />
          <text x="225" y="155" fill="#f59e0b" fontSize="12" fontWeight="bold" textAnchor="middle">THEREFORE</text>

          {/* Branch to a */}
          <path d="M 225 165 Q 150 180 100 200" fill="none" stroke="#3b82f6" strokeWidth="2" />
          <rect x="50" y="200" width="100" height="45" rx="8" fill="#3b82f6" fillOpacity="0.2" stroke="#3b82f6" strokeWidth="2" />
          <text x="100" y="227" fill="#3b82f6" fontSize="14" fontWeight="bold" textAnchor="middle">p | a</text>

          {/* OR */}
          <text x="225" y="230" fill="#f59e0b" fontSize="16" fontWeight="bold" textAnchor="middle">OR</text>

          {/* Branch to b */}
          <path d="M 225 165 Q 300 180 350 200" fill="none" stroke="#22c55e" strokeWidth="2" />
          <rect x="300" y="200" width="100" height="45" rx="8" fill="#22c55e" fillOpacity="0.2" stroke="#22c55e" strokeWidth="2" />
          <text x="350" y="227" fill="#22c55e" fontSize="14" fontWeight="bold" textAnchor="middle">p | b</text>

          {/* Example */}
          <rect x="80" y="265" width="290" height="45" rx="8" fill="#dark-800" stroke="#6b7280" strokeWidth="1" />
          <text x="225" y="285" fill="#6b7280" fontSize="11" textAnchor="middle">
            Example: 7 | 42 = 6 x 7. Indeed, 7 | 7 (the factor b).
          </text>
          <text x="225" y="302" fill="#6b7280" fontSize="11" textAnchor="middle">
            Another: 5 | 60 = 12 x 5. Indeed, 5 | 5 (the factor b).
          </text>
        </svg>
      </div>

      <h3 className="mt-6">Proof Structure</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <p className="text-dark-300 mb-3">
          The proof is beautifully simple:
        </p>
        <ol className="list-decimal list-inside space-y-3 text-dark-300">
          <li>
            <strong>Hypothesis:</strong> p is prime and p divides ab
          </li>
          <li>
            <strong>Case 1:</strong> If p divides a, we're done
          </li>
          <li>
            <strong>Case 2:</strong> If p does not divide a, then by VII.29, gcd(p, a) = 1
          </li>
          <li>
            <strong>Key step:</strong> Since p is coprime to a and p divides ab, then p must divide b (by VII.20 or VII.24 reasoning)
          </li>
        </ol>
        <p className="text-amber-400 mt-4">
          The crucial ingredient is VII.29: for a prime p, not dividing a number means
          being coprime to it.
        </p>
      </div>

      <h3 className="mt-6">Concrete Examples</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-amber-400 font-semibold mb-2">Example 1: p = 3</p>
            <ul className="list-disc list-inside space-y-1 text-dark-300 text-sm">
              <li>3 | 18 = 2 x 9</li>
              <li>3 does not divide 2</li>
              <li>But 3 | 9</li>
            </ul>
          </div>
          <div>
            <p className="text-amber-400 font-semibold mb-2">Example 2: p = 7</p>
            <ul className="list-disc list-inside space-y-1 text-dark-300 text-sm">
              <li>7 | 84 = 12 x 7</li>
              <li>7 does not divide 12</li>
              <li>But 7 | 7</li>
            </ul>
          </div>
          <div>
            <p className="text-amber-400 font-semibold mb-2">Example 3: p = 5</p>
            <ul className="list-disc list-inside space-y-1 text-dark-300 text-sm">
              <li>5 | 100 = 4 x 25</li>
              <li>5 does not divide 4</li>
              <li>But 5 | 25</li>
            </ul>
          </div>
          <div>
            <p className="text-amber-400 font-semibold mb-2">Example 4: Both factors</p>
            <ul className="list-disc list-inside space-y-1 text-dark-300 text-sm">
              <li>3 | 36 = 6 x 6</li>
              <li>3 | 6 (both factors!)</li>
              <li>The lemma says "at least one"</li>
            </ul>
          </div>
        </div>
      </div>

      <h3 className="mt-6">Why Primality is Essential</h3>

      <div className="bg-gradient-to-br from-rose-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-rose-500/20">
        <p className="text-dark-200">
          <strong className="text-rose-400">Critical Point:</strong> This property
          FAILS for composite numbers. The result is unique to primes.
        </p>
        <p className="text-dark-300 mt-4">
          <strong>Counterexample:</strong> Let n = 6 (composite). Consider 6 | 12 = 3 x 4.
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-dark-300 text-sm">
          <li>6 divides 12 (since 12 = 6 x 2)</li>
          <li>But 6 does NOT divide 3 (3/6 is not an integer)</li>
          <li>And 6 does NOT divide 4 (4/6 is not an integer)</li>
        </ul>
        <p className="text-rose-400 mt-4">
          A composite can divide a product without dividing either factor!
        </p>
      </div>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 400 160" className="w-full max-w-md">
          {/* Prime: works */}
          <rect x="20" y="20" width="160" height="120" rx="10" fill="#22c55e" fillOpacity="0.1" stroke="#22c55e" strokeWidth="2" />
          <text x="100" y="45" fill="#22c55e" fontSize="13" fontWeight="bold" textAnchor="middle">PRIME: Works!</text>
          <text x="100" y="70" fill="#6b7280" fontSize="11" textAnchor="middle">p = 5 divides 30 = 6 x 5</text>
          <text x="100" y="90" fill="#6b7280" fontSize="11" textAnchor="middle">5 does not divide 6</text>
          <text x="100" y="110" fill="#22c55e" fontSize="12" textAnchor="middle">But 5 | 5</text>
          <path d="M 90 120 L 96 126 L 112 110" fill="none" stroke="#22c55e" strokeWidth="2" />

          {/* Composite: fails */}
          <rect x="220" y="20" width="160" height="120" rx="10" fill="#ef4444" fillOpacity="0.1" stroke="#ef4444" strokeWidth="2" />
          <text x="300" y="45" fill="#ef4444" fontSize="13" fontWeight="bold" textAnchor="middle">COMPOSITE: Fails!</text>
          <text x="300" y="70" fill="#6b7280" fontSize="11" textAnchor="middle">n = 6 divides 12 = 3 x 4</text>
          <text x="300" y="90" fill="#6b7280" fontSize="11" textAnchor="middle">6 does not divide 3</text>
          <text x="300" y="110" fill="#ef4444" fontSize="12" textAnchor="middle">6 does not divide 4 either!</text>
          <text x="300" y="130" fill="#ef4444" fontSize="16" textAnchor="middle">X</text>
        </svg>
      </div>

      <h3 className="mt-6">Connection to the Fundamental Theorem of Arithmetic</h3>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">The Foundation of Unique Factorization:</strong>{' '}
          Euclid's Lemma is the key ingredient in proving that prime factorizations are unique.
        </p>
        <p className="text-dark-300 mt-4">
          Here's why: Suppose a number n has two prime factorizations:
        </p>
        <p className="text-amber-400 font-mono text-center my-3">
          n = p_1 x p_2 x ... x p_r = q_1 x q_2 x ... x q_s
        </p>
        <p className="text-dark-300">
          Take prime p_1. It divides the left side, so it divides the right side.
          By Euclid's Lemma (applied repeatedly), p_1 must divide some q_i.
          Since q_i is prime, p_1 = q_i. Continuing this argument shows both
          factorizations must have the same primes (with the same multiplicities).
        </p>
      </div>

      <h3 className="mt-6">Extension to Multiple Factors</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <p className="text-dark-300 mb-3">
          Euclid's Lemma extends to products of any number of factors:
        </p>
        <p className="text-amber-400 font-mono text-center my-3">
          If p | (a_1 x a_2 x ... x a_n), then p | a_i for some i
        </p>
        <p className="text-dark-300">
          Proof: Apply the two-factor case inductively. If p | (a_1 x a_2), then p | a_1 or
          p | a_2. If p doesn't divide a_1, then p | (a_2 x a_3 x ...), and continue.
        </p>
      </div>

      <h3 className="mt-6">Key Dependencies</h3>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>
          <strong className="text-amber-400">VII.29:</strong> A prime not dividing a
          number is coprime to it
        </li>
        <li>
          <strong className="text-amber-400">VII.19-20:</strong> Properties of
          proportion relating products
        </li>
        <li>
          <strong className="text-amber-400">VII.23-24:</strong> Products of coprime
          numbers and divisibility
        </li>
      </ul>

      <h3 className="mt-6">Modern Applications</h3>

      <div className="bg-gradient-to-br from-cyan-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-cyan-500/20">
        <p className="text-dark-200 mb-4">
          <strong className="text-cyan-400">Applications of Euclid's Lemma:</strong>
        </p>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>
            <strong>Unique factorization:</strong> Proving every integer has a unique
            prime factorization (up to order)
          </li>
          <li>
            <strong>Irreducibility:</strong> In polynomial rings, showing irreducible
            elements behave like primes
          </li>
          <li>
            <strong>Cryptography:</strong> The security of RSA relies on the difficulty
            of factoring, which depends on unique factorization
          </li>
          <li>
            <strong>Algebraic number theory:</strong> Generalizing to unique factorization
            domains (UFDs)
          </li>
        </ul>
      </div>

      <div className="bg-gradient-to-br from-purple-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-purple-500/20">
        <p className="text-dark-200">
          <strong className="text-purple-400">Historical Note:</strong> Although this
          proposition appears in Euclid's Elements from around 300 BCE, it is now
          universally known as "Euclid's Lemma" in recognition of its importance and
          Euclid's contribution. It represents one of the earliest and most significant
          results in number theory, and its influence extends throughout modern
          mathematics.
        </p>
      </div>
    </LessonLayout>
  );
}
