import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section206() {
  return (
    <LessonLayout sectionId={206}>
      <Proposition
        title="Proposition VII.27"
        proof={
          <>
            <p>
              Let <em>A</em> and <em>B</em> be two numbers relatively prime to one another,
              and let each multiply itself to produce <em>C</em> and <em>D</em> respectively,
              and let them multiply <em>C</em> and <em>D</em> to produce <em>E</em> and{' '}
              <em>F</em>.
            </p>
            <p className="mt-2">
              I say that <em>C</em> and <em>D</em> are relatively prime, and also{' '}
              <em>E</em> and <em>F</em>.
            </p>
            <p className="mt-2">
              For, since <em>A</em> and <em>B</em> are relatively prime, and <em>A</em>{' '}
              multiplied by itself has made <em>C</em>, therefore <em>C</em> and{' '}
              <em>B</em> are relatively prime. [VII.25]
            </p>
            <p className="mt-2">
              Since then <em>C</em> and <em>B</em> are relatively prime, and <em>B</em>{' '}
              multiplied by itself has made <em>D</em>, therefore <em>C</em> and{' '}
              <em>D</em> are relatively prime. [VII.25]
            </p>
            <p className="mt-2">
              Again, since <em>A</em> and <em>B</em> are relatively prime, and <em>B</em>{' '}
              multiplied by itself has made <em>D</em>, therefore <em>A</em> and <em>D</em>{' '}
              are relatively prime. [VII.25]
            </p>
            <p className="mt-2">
              Since then <em>A</em> and <em>D</em> are relatively prime, and <em>A</em>{' '}
              multiplied by <em>C</em> has made <em>E</em>, and <em>C</em> and <em>D</em>{' '}
              are relatively prime, therefore <em>E</em> and <em>D</em> are relatively
              prime. [VII.25, VII.26]
            </p>
            <p className="mt-2 font-medium">
              And since <em>E</em> and <em>D</em> are relatively prime, and <em>D</em>{' '}
              multiplied by <em>B</em> has made <em>F</em>, therefore <em>E</em> and{' '}
              <em>F</em> are relatively prime. [VII.25]
            </p>
          </>
        }
      >
        <p>
          If two numbers are relatively prime, and each multiplied by itself makes a certain
          number, the products will be relatively prime; and, if the original numbers
          multiplied by the products make certain numbers, these will also be relatively prime.
        </p>
      </Proposition>

      <h2>Powers of Coprime Numbers Remain Coprime</h2>

      <p>
        This important proposition establishes that relative primality is preserved when
        we take powers. If A and B share no common factors, then A² and B² share no
        common factors, and A³ and B³ share no common factors, and so on for all powers.
      </p>

      <h3 className="mt-6">Modern Algebraic Statement</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700 text-center">
        <p className="text-dark-300 mb-2">If gcd(A, B) = 1, then for any positive integers m and n:</p>
        <p className="text-amber-400 font-mono text-lg">
          gcd(A^m, B^n) = 1
        </p>
      </div>

      <h3 className="mt-6">Visual Representation</h3>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 450 320" className="w-full max-w-lg">
          {/* Title */}
          <text x="225" y="25" fill="#f59e0b" fontSize="14" fontWeight="bold" textAnchor="middle">
            Powers Preserve Coprimality
          </text>

          {/* Base numbers */}
          <text x="120" y="55" fill="#3b82f6" fontSize="12" textAnchor="middle">A = 3</text>
          <text x="330" y="55" fill="#22c55e" fontSize="12" textAnchor="middle">B = 5</text>

          {/* Connection showing coprime */}
          <path d="M 150 50 L 300 50" fill="none" stroke="#f59e0b" strokeWidth="2" />
          <text x="225" y="45" fill="#f59e0b" fontSize="10" textAnchor="middle">gcd = 1</text>

          {/* First powers (squares) */}
          <rect x="70" y="80" width="100" height="40" rx="8" fill="#3b82f6" fillOpacity="0.2" stroke="#3b82f6" strokeWidth="2" />
          <text x="120" y="105" fill="#3b82f6" fontSize="13" fontWeight="bold" textAnchor="middle">A² = 9</text>

          <rect x="280" y="80" width="100" height="40" rx="8" fill="#22c55e" fillOpacity="0.2" stroke="#22c55e" strokeWidth="2" />
          <text x="330" y="105" fill="#22c55e" fontSize="13" fontWeight="bold" textAnchor="middle">B² = 25</text>

          <path d="M 175 100 L 275 100" fill="none" stroke="#f59e0b" strokeWidth="2" />
          <text x="225" y="95" fill="#f59e0b" fontSize="10" textAnchor="middle">gcd = 1</text>

          {/* Second powers (cubes) */}
          <rect x="70" y="140" width="100" height="40" rx="8" fill="#3b82f6" fillOpacity="0.2" stroke="#3b82f6" strokeWidth="2" />
          <text x="120" y="165" fill="#3b82f6" fontSize="13" fontWeight="bold" textAnchor="middle">A³ = 27</text>

          <rect x="280" y="140" width="100" height="40" rx="8" fill="#22c55e" fillOpacity="0.2" stroke="#22c55e" strokeWidth="2" />
          <text x="330" y="165" fill="#22c55e" fontSize="13" fontWeight="bold" textAnchor="middle">B³ = 125</text>

          <path d="M 175 160 L 275 160" fill="none" stroke="#f59e0b" strokeWidth="2" />
          <text x="225" y="155" fill="#f59e0b" fontSize="10" textAnchor="middle">gcd = 1</text>

          {/* Mixed powers */}
          <rect x="70" y="200" width="100" height="40" rx="8" fill="#8b5cf6" fillOpacity="0.2" stroke="#8b5cf6" strokeWidth="2" />
          <text x="120" y="225" fill="#8b5cf6" fontSize="13" fontWeight="bold" textAnchor="middle">A² = 9</text>

          <rect x="280" y="200" width="100" height="40" rx="8" fill="#ec4899" fillOpacity="0.2" stroke="#ec4899" strokeWidth="2" />
          <text x="330" y="225" fill="#ec4899" fontSize="13" fontWeight="bold" textAnchor="middle">B³ = 125</text>

          <path d="M 175 220 L 275 220" fill="none" stroke="#f59e0b" strokeWidth="2" />
          <text x="225" y="215" fill="#f59e0b" fontSize="10" textAnchor="middle">gcd = 1</text>

          {/* General statement */}
          <rect x="100" y="260" width="250" height="45" rx="8" fill="#f59e0b" fillOpacity="0.1" stroke="#f59e0b" strokeWidth="2" />
          <text x="225" y="280" fill="#f59e0b" fontSize="11" textAnchor="middle">
            For any m, n: gcd(3^m, 5^n) = 1
          </text>
          <text x="225" y="295" fill="#6b7280" fontSize="10" textAnchor="middle">
            3 and 5 share no common prime factors
          </text>
        </svg>
      </div>

      <h3 className="mt-6">Euclid's Specific Cases</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <p className="text-dark-300 mb-3">
          Euclid proves the following chain of coprimality (using A and B coprime):
        </p>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>C = A², D = B² (squares)</li>
          <li>E = A³ = A x C, F = B³ = B x D (cubes)</li>
        </ul>
        <p className="text-amber-400 mt-4 mb-2">Proof chain:</p>
        <ol className="list-decimal list-inside space-y-2 text-dark-300 text-sm">
          <li>gcd(A, B) = 1 (given)</li>
          <li>gcd(A², B) = 1 (by VII.25)</li>
          <li>gcd(A², B²) = 1 (by VII.25 again)</li>
          <li>gcd(A, B²) = 1 (by VII.25)</li>
          <li>gcd(A³, B²) = 1 (by VII.25, VII.26)</li>
          <li>gcd(A³, B³) = 1 (by VII.25)</li>
        </ol>
      </div>

      <h3 className="mt-6">Prime Factorization View</h3>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 400 220" className="w-full max-w-md">
          {/* A's powers */}
          <text x="100" y="30" fill="#3b82f6" fontSize="12" fontWeight="bold" textAnchor="middle">
            Powers of A = 6 (= 2 x 3)
          </text>

          {/* A */}
          <rect x="30" y="45" width="25" height="25" rx="4" fill="#3b82f6" fillOpacity="0.3" stroke="#3b82f6" strokeWidth="1" />
          <text x="43" y="62" fill="#3b82f6" fontSize="10" textAnchor="middle">2</text>
          <rect x="60" y="45" width="25" height="25" rx="4" fill="#3b82f6" fillOpacity="0.3" stroke="#3b82f6" strokeWidth="1" />
          <text x="73" y="62" fill="#3b82f6" fontSize="10" textAnchor="middle">3</text>
          <text x="150" y="62" fill="#6b7280" fontSize="10">A = 6</text>

          {/* A² */}
          <rect x="30" y="80" width="25" height="25" rx="4" fill="#3b82f6" fillOpacity="0.3" stroke="#3b82f6" strokeWidth="1" />
          <text x="43" y="97" fill="#3b82f6" fontSize="10" textAnchor="middle">2</text>
          <rect x="60" y="80" width="25" height="25" rx="4" fill="#3b82f6" fillOpacity="0.3" stroke="#3b82f6" strokeWidth="1" />
          <text x="73" y="97" fill="#3b82f6" fontSize="10" textAnchor="middle">2</text>
          <rect x="90" y="80" width="25" height="25" rx="4" fill="#3b82f6" fillOpacity="0.3" stroke="#3b82f6" strokeWidth="1" />
          <text x="103" y="97" fill="#3b82f6" fontSize="10" textAnchor="middle">3</text>
          <rect x="120" y="80" width="25" height="25" rx="4" fill="#3b82f6" fillOpacity="0.3" stroke="#3b82f6" strokeWidth="1" />
          <text x="133" y="97" fill="#3b82f6" fontSize="10" textAnchor="middle">3</text>
          <text x="170" y="97" fill="#6b7280" fontSize="10">A² = 36</text>

          {/* B's powers */}
          <text x="300" y="30" fill="#22c55e" fontSize="12" fontWeight="bold" textAnchor="middle">
            Powers of B = 35 (= 5 x 7)
          </text>

          {/* B */}
          <rect x="260" y="45" width="25" height="25" rx="4" fill="#22c55e" fillOpacity="0.3" stroke="#22c55e" strokeWidth="1" />
          <text x="273" y="62" fill="#22c55e" fontSize="10" textAnchor="middle">5</text>
          <rect x="290" y="45" width="25" height="25" rx="4" fill="#22c55e" fillOpacity="0.3" stroke="#22c55e" strokeWidth="1" />
          <text x="303" y="62" fill="#22c55e" fontSize="10" textAnchor="middle">7</text>
          <text x="350" y="62" fill="#6b7280" fontSize="10">B = 35</text>

          {/* B² */}
          <rect x="230" y="80" width="22" height="25" rx="4" fill="#22c55e" fillOpacity="0.3" stroke="#22c55e" strokeWidth="1" />
          <text x="241" y="97" fill="#22c55e" fontSize="10" textAnchor="middle">5</text>
          <rect x="255" y="80" width="22" height="25" rx="4" fill="#22c55e" fillOpacity="0.3" stroke="#22c55e" strokeWidth="1" />
          <text x="266" y="97" fill="#22c55e" fontSize="10" textAnchor="middle">5</text>
          <rect x="280" y="80" width="22" height="25" rx="4" fill="#22c55e" fillOpacity="0.3" stroke="#22c55e" strokeWidth="1" />
          <text x="291" y="97" fill="#22c55e" fontSize="10" textAnchor="middle">7</text>
          <rect x="305" y="80" width="22" height="25" rx="4" fill="#22c55e" fillOpacity="0.3" stroke="#22c55e" strokeWidth="1" />
          <text x="316" y="97" fill="#22c55e" fontSize="10" textAnchor="middle">7</text>
          <text x="355" y="97" fill="#6b7280" fontSize="10">B² = 1225</text>

          {/* Key insight */}
          <rect x="80" y="130" width="240" height="60" rx="8" fill="#f59e0b" fillOpacity="0.1" stroke="#f59e0b" strokeWidth="1" />
          <text x="200" y="155" fill="#f59e0b" fontSize="11" fontWeight="bold" textAnchor="middle">
            Key Insight
          </text>
          <text x="200" y="175" fill="#6b7280" fontSize="10" textAnchor="middle">
            Powers only multiply existing primes.
          </text>
          <text x="200" y="188" fill="#6b7280" fontSize="10" textAnchor="middle">
            No new primes appear, so no overlap can occur.
          </text>

          {/* Result */}
          <text x="200" y="210" fill="#22c55e" fontSize="11" fontWeight="bold" textAnchor="middle">
            gcd(A^m, B^n) = 1 for all m, n
          </text>
        </svg>
      </div>

      <h3 className="mt-6">Why This Works</h3>

      <div className="bg-gradient-to-br from-blue-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-blue-500/20">
        <p className="text-dark-200">
          <strong className="text-blue-400">Prime Factor Analysis:</strong> When you take
          powers of a number, you only accumulate more copies of the prime factors it
          already has. If A = p₁^a₁ x p₂^a₂ x ... and B = q₁^b₁ x q₂^b₂ x ... where
          no pᵢ equals any qⱼ, then:
        </p>
        <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
          <li>A^m = p₁^(ma₁) x p₂^(ma₂) x ... (same primes, higher powers)</li>
          <li>B^n = q₁^(nb₁) x q₂^(nb₂) x ... (same primes, higher powers)</li>
          <li>Still no overlap in prime factors!</li>
        </ul>
      </div>

      <h3 className="mt-6">Key Dependencies</h3>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>
          <strong className="text-amber-400">VII.25:</strong> Squares of coprime
          numbers are coprime
        </li>
        <li>
          <strong className="text-amber-400">VII.26:</strong> Products of coprime
          pairs are coprime
        </li>
      </ul>

      <h3 className="mt-6">Modern Applications</h3>

      <div className="bg-gradient-to-br from-cyan-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-cyan-500/20">
        <p className="text-dark-200 mb-4">
          <strong className="text-cyan-400">Number Theory and Cryptography:</strong>
        </p>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>
            <strong>Modular exponentiation:</strong> In RSA, we compute a^e mod n where
            gcd(a, n) = 1. This proposition ensures the coprimality is preserved.
          </li>
          <li>
            <strong>Euler's theorem:</strong> For a^phi(n) ≡ 1 (mod n), we need
            gcd(a, n) = 1, which extends to all powers.
          </li>
          <li>
            <strong>Order of elements:</strong> In group theory, the order of a^k
            divides the order of a when gcd(a, n) = 1.
          </li>
        </ul>
      </div>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Completing the Picture:</strong> With
          VII.24-27, Euclid has established the complete theory of how relative
          primality interacts with multiplication and powers. These results form
          the foundation for the theory of prime factorization and will be crucial
          for Euclid's Lemma (VII.30) and the existence of prime factors (VII.31).
        </p>
      </div>
    </LessonLayout>
  );
}
