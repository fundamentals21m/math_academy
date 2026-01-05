import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section204() {
  return (
    <LessonLayout sectionId={204}>
      <Proposition
        title="Proposition VII.25"
        proof={
          <>
            <p>
              Let <em>A</em> and <em>B</em> be two numbers relatively prime to one another.
            </p>
            <p className="mt-2">
              I say that the product of <em>A</em> by itself is also relatively prime to{' '}
              <em>B</em>.
            </p>
            <p className="mt-2">
              For let <em>C</em> equal the product of <em>A</em> by itself.
            </p>
            <p className="mt-2">
              Since <em>A</em> is relatively prime to <em>B</em>, and <em>A</em> is
              relatively prime to <em>B</em>, therefore the product of <em>A</em> by{' '}
              <em>A</em> is also relatively prime to <em>B</em>. [VII.24]
            </p>
            <p className="mt-2 font-medium">
              But the product of <em>A</em> by <em>A</em> is <em>C</em>. Therefore{' '}
              <em>C</em> is relatively prime to <em>B</em>.
            </p>
          </>
        }
      >
        <p>
          If two numbers are relatively prime, the product of one of them by itself will
          be relatively prime to the remaining one.
        </p>
      </Proposition>

      <h2>Squares of Relatively Prime Numbers</h2>

      <p>
        This proposition is a direct application of VII.24. If <em>A</em> and <em>B</em>{' '}
        are relatively prime, then the square of <em>A</em> (which is <em>A</em> times{' '}
        <em>A</em>) is also relatively prime to <em>B</em>. Euclid applies VII.24 with
        both factors being <em>A</em>.
      </p>

      <h3 className="mt-6">Modern Algebraic Statement</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700 text-center">
        <p className="text-amber-400 font-mono text-lg">
          If gcd(A, B) = 1, then gcd(A², B) = 1
        </p>
      </div>

      <h3 className="mt-6">Visual Representation</h3>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 400 280" className="w-full max-w-md">
          {/* Title */}
          <text x="200" y="25" fill="#f59e0b" fontSize="14" fontWeight="bold" textAnchor="middle">
            Squaring Preserves Relative Primality
          </text>

          {/* Number A */}
          <rect x="50" y="60" width="80" height="40" rx="8" fill="#3b82f6" fillOpacity="0.2" stroke="#3b82f6" strokeWidth="2" />
          <text x="90" y="85" fill="#3b82f6" fontSize="16" fontWeight="bold" textAnchor="middle">A = 5</text>

          {/* Number B */}
          <rect x="270" y="60" width="80" height="40" rx="8" fill="#22c55e" fillOpacity="0.2" stroke="#22c55e" strokeWidth="2" />
          <text x="310" y="85" fill="#22c55e" fontSize="16" fontWeight="bold" textAnchor="middle">B = 12</text>

          {/* Relative primality indicator */}
          <path d="M 135 80 L 265 80" fill="none" stroke="#f59e0b" strokeWidth="2" />
          <text x="200" y="70" fill="#f59e0b" fontSize="11" textAnchor="middle">gcd(5, 12) = 1</text>

          {/* Square operation */}
          <rect x="50" y="140" width="80" height="40" rx="8" fill="#3b82f6" fillOpacity="0.2" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4" />
          <text x="90" y="165" fill="#3b82f6" fontSize="14" textAnchor="middle">A = 5</text>

          <text x="145" y="165" fill="#6b7280" fontSize="20">x</text>

          <rect x="160" y="140" width="80" height="40" rx="8" fill="#3b82f6" fillOpacity="0.2" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4" />
          <text x="200" y="165" fill="#3b82f6" fontSize="14" textAnchor="middle">A = 5</text>

          {/* Equals */}
          <text x="255" y="165" fill="#6b7280" fontSize="20">=</text>

          {/* Square result */}
          <rect x="275" y="140" width="80" height="40" rx="8" fill="#ec4899" fillOpacity="0.2" stroke="#ec4899" strokeWidth="2" />
          <text x="315" y="165" fill="#ec4899" fontSize="16" fontWeight="bold" textAnchor="middle">A² = 25</text>

          {/* Arrow showing A x A */}
          <path d="M 90 100 L 90 140" fill="none" stroke="#6b7280" strokeWidth="1" strokeDasharray="4" />
          <path d="M 90 100 Q 145 110 200 140" fill="none" stroke="#6b7280" strokeWidth="1" strokeDasharray="4" />

          {/* Final relationship */}
          <path d="M 315 185 L 315 230" fill="none" stroke="#f59e0b" strokeWidth="2" />
          <path d="M 310 100 L 310 230" fill="none" stroke="#6b7280" strokeWidth="1" strokeDasharray="4" />

          {/* Conclusion box */}
          <rect x="120" y="215" width="200" height="40" rx="8" fill="#22c55e" fillOpacity="0.1" stroke="#22c55e" strokeWidth="2" />
          <text x="220" y="240" fill="#22c55e" fontSize="14" fontWeight="bold" textAnchor="middle">
            gcd(25, 12) = 1
          </text>
        </svg>
      </div>

      <h3 className="mt-6">Concrete Examples</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-dark-300 font-semibold mb-2">Example 1:</p>
            <ul className="list-disc list-inside space-y-1 text-dark-300 text-sm">
              <li>A = 3, B = 7</li>
              <li>gcd(3, 7) = 1</li>
              <li>A² = 9</li>
              <li>gcd(9, 7) = 1</li>
            </ul>
          </div>
          <div>
            <p className="text-dark-300 font-semibold mb-2">Example 2:</p>
            <ul className="list-disc list-inside space-y-1 text-dark-300 text-sm">
              <li>A = 8, B = 9</li>
              <li>gcd(8, 9) = 1</li>
              <li>A² = 64</li>
              <li>gcd(64, 9) = 1</li>
            </ul>
          </div>
        </div>
      </div>

      <h3 className="mt-6">The Proof is Immediate</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <p className="text-dark-300 mb-3">
          This is one of the shortest proofs in Book VII:
        </p>
        <ol className="list-decimal list-inside space-y-2 text-dark-300">
          <li>Given: gcd(A, B) = 1</li>
          <li>We have: A is relatively prime to B, and A is relatively prime to B</li>
          <li>By VII.24: A x A is relatively prime to B</li>
          <li>Therefore: A² is relatively prime to B</li>
        </ol>
        <p className="text-amber-400 mt-4">
          The proposition treats A as two separate factors, both relatively prime to B,
          then applies VII.24.
        </p>
      </div>

      <h3 className="mt-6">Prime Factorization Perspective</h3>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 400 200" className="w-full max-w-md">
          {/* A's prime factors */}
          <text x="100" y="30" fill="#3b82f6" fontSize="12" fontWeight="bold" textAnchor="middle">
            A = 15 = 3 x 5
          </text>
          <rect x="40" y="45" width="40" height="30" rx="6" fill="#3b82f6" fillOpacity="0.3" stroke="#3b82f6" strokeWidth="1" />
          <text x="60" y="65" fill="#3b82f6" fontSize="14" textAnchor="middle">3</text>
          <rect x="90" y="45" width="40" height="30" rx="6" fill="#3b82f6" fillOpacity="0.3" stroke="#3b82f6" strokeWidth="1" />
          <text x="110" y="65" fill="#3b82f6" fontSize="14" textAnchor="middle">5</text>

          {/* B's prime factors */}
          <text x="300" y="30" fill="#22c55e" fontSize="12" fontWeight="bold" textAnchor="middle">
            B = 14 = 2 x 7
          </text>
          <rect x="260" y="45" width="40" height="30" rx="6" fill="#22c55e" fillOpacity="0.3" stroke="#22c55e" strokeWidth="1" />
          <text x="280" y="65" fill="#22c55e" fontSize="14" textAnchor="middle">2</text>
          <rect x="310" y="45" width="40" height="30" rx="6" fill="#22c55e" fillOpacity="0.3" stroke="#22c55e" strokeWidth="1" />
          <text x="330" y="65" fill="#22c55e" fontSize="14" textAnchor="middle">7</text>

          {/* No overlap indicator */}
          <text x="200" y="60" fill="#f59e0b" fontSize="11" textAnchor="middle">No common primes</text>

          {/* A squared */}
          <text x="100" y="110" fill="#ec4899" fontSize="12" fontWeight="bold" textAnchor="middle">
            A² = 225 = 3² x 5²
          </text>
          <rect x="30" y="125" width="30" height="30" rx="6" fill="#ec4899" fillOpacity="0.3" stroke="#ec4899" strokeWidth="1" />
          <text x="45" y="145" fill="#ec4899" fontSize="12" textAnchor="middle">3</text>
          <rect x="65" y="125" width="30" height="30" rx="6" fill="#ec4899" fillOpacity="0.3" stroke="#ec4899" strokeWidth="1" />
          <text x="80" y="145" fill="#ec4899" fontSize="12" textAnchor="middle">3</text>
          <rect x="100" y="125" width="30" height="30" rx="6" fill="#ec4899" fillOpacity="0.3" stroke="#ec4899" strokeWidth="1" />
          <text x="115" y="145" fill="#ec4899" fontSize="12" textAnchor="middle">5</text>
          <rect x="135" y="125" width="30" height="30" rx="6" fill="#ec4899" fillOpacity="0.3" stroke="#ec4899" strokeWidth="1" />
          <text x="150" y="145" fill="#ec4899" fontSize="12" textAnchor="middle">5</text>

          {/* Still no overlap */}
          <text x="200" y="145" fill="#f59e0b" fontSize="11" textAnchor="middle">Still no overlap!</text>

          {/* Conclusion */}
          <text x="200" y="185" fill="#22c55e" fontSize="13" fontWeight="bold" textAnchor="middle">
            gcd(225, 14) = 1
          </text>
        </svg>
      </div>

      <h3 className="mt-6">Key Insight</h3>

      <div className="bg-gradient-to-br from-blue-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-blue-500/20">
        <p className="text-dark-200">
          <strong className="text-blue-400">Why Squaring Preserves Coprimality:</strong> When
          you square a number, you only multiply together the prime factors it already has.
          If A and B share no common prime factors, then A² still contains only primes from
          A's factorization. Since none of those primes appear in B, gcd(A², B) = 1.
        </p>
      </div>

      <h3 className="mt-6">Key Dependencies</h3>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>
          <strong className="text-amber-400">VII.24:</strong> If A and B are each
          relatively prime to C, then AB is relatively prime to C
        </li>
      </ul>

      <h3 className="mt-6">Connection to VII.26 and VII.27</h3>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Building to Powers:</strong> This proposition
          about squares is the first step toward VII.27, which will show that any power
          of A is relatively prime to any power of B (when A and B are relatively prime).
          The progression is:
        </p>
        <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
          <li>VII.24: Products of coprime numbers remain coprime to a third</li>
          <li>VII.25: Squares of coprime numbers remain coprime (this proposition)</li>
          <li>VII.26: Products of coprime pairs remain coprime</li>
          <li>VII.27: All powers of coprime numbers remain coprime</li>
        </ul>
      </div>
    </LessonLayout>
  );
}
