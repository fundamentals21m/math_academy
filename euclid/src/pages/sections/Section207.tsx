import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section207() {
  return (
    <LessonLayout sectionId={207}>
      <Proposition
        title="Proposition VII.28"
        proof={
          <>
            <p>
              Let <em>A</em> and <em>B</em> be two numbers relatively prime to one another.
            </p>
            <p className="mt-2">
              I say that the sum <em>A</em> plus <em>B</em> is relatively prime to each
              of them.
            </p>
            <p className="mt-2">
              For, if <em>A</em> plus <em>B</em> and <em>A</em> are not relatively prime,
              some number <em>C</em> will measure them.
            </p>
            <p className="mt-2">
              Let <em>C</em> measure them, and let it measure <em>A</em> plus <em>B</em>{' '}
              according to <em>D</em>, and <em>A</em> according to <em>E</em>.
            </p>
            <p className="mt-2">
              Then <em>C</em> times <em>D</em> equals <em>A</em> plus <em>B</em>, and{' '}
              <em>C</em> times <em>E</em> equals <em>A</em>.
            </p>
            <p className="mt-2">
              Therefore <em>C</em> times <em>D</em> minus <em>C</em> times <em>E</em>{' '}
              equals <em>B</em>.
            </p>
            <p className="mt-2">
              That is, <em>C</em> times (<em>D</em> minus <em>E</em>) equals <em>B</em>.
            </p>
            <p className="mt-2">
              Therefore <em>C</em> measures <em>B</em>.
            </p>
            <p className="mt-2">
              But <em>C</em> also measures <em>A</em>; therefore <em>C</em> is a common
              measure of <em>A</em> and <em>B</em>.
            </p>
            <p className="mt-2">
              But <em>A</em> and <em>B</em> are relatively prime; therefore their only
              common measure is the unit.
            </p>
            <p className="mt-2">
              Therefore <em>C</em> is the unit.
            </p>
            <p className="mt-2 font-medium">
              Therefore <em>A</em> plus <em>B</em> and <em>A</em> are relatively prime.
              Similarly we can prove that <em>A</em> plus <em>B</em> and <em>B</em> are
              also relatively prime.
            </p>
          </>
        }
      >
        <p>
          If two numbers are relatively prime, their sum will also be relatively prime
          to each of them.
        </p>
      </Proposition>

      <h2>Sums of Coprime Numbers</h2>

      <p>
        This proposition reveals a beautiful additive property of relative primality.
        When two numbers share no common factor, their sum also shares no common factor
        with either of the original numbers.
      </p>

      <h3 className="mt-6">Modern Algebraic Statement</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700 text-center">
        <p className="text-dark-300 mb-2">If gcd(A, B) = 1, then:</p>
        <p className="text-amber-400 font-mono text-lg">
          gcd(A + B, A) = 1 and gcd(A + B, B) = 1
        </p>
      </div>

      <h3 className="mt-6">Visual Representation</h3>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 400 280" className="w-full max-w-md">
          {/* Title */}
          <text x="200" y="25" fill="#f59e0b" fontSize="14" fontWeight="bold" textAnchor="middle">
            Sum of Coprime Numbers
          </text>

          {/* Number A */}
          <rect x="50" y="60" width="100" height="40" rx="8" fill="#3b82f6" fillOpacity="0.2" stroke="#3b82f6" strokeWidth="2" />
          <text x="100" y="85" fill="#3b82f6" fontSize="16" fontWeight="bold" textAnchor="middle">A = 8</text>

          {/* Plus sign */}
          <text x="175" y="85" fill="#6b7280" fontSize="24">+</text>

          {/* Number B */}
          <rect x="200" y="60" width="100" height="40" rx="8" fill="#22c55e" fillOpacity="0.2" stroke="#22c55e" strokeWidth="2" />
          <text x="250" y="85" fill="#22c55e" fontSize="16" fontWeight="bold" textAnchor="middle">B = 9</text>

          {/* Coprime indicator */}
          <path d="M 150 80 Q 175 50 200 80" fill="none" stroke="#f59e0b" strokeWidth="2" />
          <text x="175" y="45" fill="#f59e0b" fontSize="10" textAnchor="middle">gcd = 1</text>

          {/* Equals and Sum */}
          <text x="325" y="85" fill="#6b7280" fontSize="24">=</text>
          <rect x="340" y="60" width="50" height="40" rx="8" fill="#ec4899" fillOpacity="0.2" stroke="#ec4899" strokeWidth="2" />
          <text x="365" y="85" fill="#ec4899" fontSize="16" fontWeight="bold" textAnchor="middle">17</text>

          {/* Arrows showing coprimality with sum */}
          <path d="M 100 100 Q 100 150 200 180" fill="none" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrow)" />
          <path d="M 250 100 Q 250 150 200 180" fill="none" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrow)" />
          <path d="M 365 100 L 365 140 Q 365 160 340 170 L 220 180" fill="none" stroke="#f59e0b" strokeWidth="2" />

          {/* Sum A+B box */}
          <rect x="120" y="160" width="160" height="50" rx="10" fill="#ec4899" fillOpacity="0.15" stroke="#ec4899" strokeWidth="2" />
          <text x="200" y="185" fill="#ec4899" fontSize="14" fontWeight="bold" textAnchor="middle">A + B = 17</text>
          <text x="200" y="202" fill="#6b7280" fontSize="11" textAnchor="middle">(prime!)</text>

          {/* Coprimality results */}
          <text x="100" y="240" fill="#3b82f6" fontSize="11" textAnchor="middle">gcd(17, 8) = 1</text>
          <text x="300" y="240" fill="#22c55e" fontSize="11" textAnchor="middle">gcd(17, 9) = 1</text>

          {/* Check marks */}
          <circle cx="100" cy="260" r="12" fill="#22c55e" fillOpacity="0.2" stroke="#22c55e" strokeWidth="2" />
          <path d="M 94 260 L 98 264 L 108 254" fill="none" stroke="#22c55e" strokeWidth="2" />

          <circle cx="300" cy="260" r="12" fill="#22c55e" fillOpacity="0.2" stroke="#22c55e" strokeWidth="2" />
          <path d="M 294 260 L 298 264 L 308 254" fill="none" stroke="#22c55e" strokeWidth="2" />
        </svg>
      </div>

      <h3 className="mt-6">Concrete Examples</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-dark-300 font-semibold mb-2">Example 1:</p>
            <ul className="list-disc list-inside space-y-1 text-dark-300 text-sm">
              <li>A = 5, B = 7 (both prime, coprime)</li>
              <li>A + B = 12</li>
              <li>gcd(12, 5) = 1</li>
              <li>gcd(12, 7) = 1</li>
            </ul>
          </div>
          <div>
            <p className="text-dark-300 font-semibold mb-2">Example 2:</p>
            <ul className="list-disc list-inside space-y-1 text-dark-300 text-sm">
              <li>A = 15, B = 28 (coprime)</li>
              <li>A + B = 43 (prime)</li>
              <li>gcd(43, 15) = 1</li>
              <li>gcd(43, 28) = 1</li>
            </ul>
          </div>
        </div>
      </div>

      <h3 className="mt-6">The Proof Strategy</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <p className="text-dark-300 mb-3">
          Proof by contradiction:
        </p>
        <ol className="list-decimal list-inside space-y-2 text-dark-300">
          <li>Suppose some number C greater than 1 divides both (A + B) and A</li>
          <li>Then C divides (A + B) - A = B</li>
          <li>So C divides both A and B</li>
          <li>But gcd(A, B) = 1, so C must equal 1</li>
          <li>Contradiction! Therefore gcd(A + B, A) = 1</li>
        </ol>
        <p className="text-amber-400 mt-4">
          The same argument shows gcd(A + B, B) = 1 by symmetry.
        </p>
      </div>

      <h3 className="mt-6">Key Algebraic Insight</h3>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 380 180" className="w-full max-w-md">
          {/* The key equation */}
          <text x="190" y="30" fill="#f59e0b" fontSize="14" fontWeight="bold" textAnchor="middle">
            The Core Argument
          </text>

          <rect x="50" y="50" width="280" height="100" rx="10" fill="#3b82f6" fillOpacity="0.1" stroke="#3b82f6" strokeWidth="1" />

          <text x="190" y="80" fill="#3b82f6" fontSize="13" textAnchor="middle">
            If d divides (A + B) and d divides A...
          </text>

          <text x="190" y="105" fill="#ec4899" fontSize="14" fontWeight="bold" textAnchor="middle">
            d | (A + B) - A = B
          </text>

          <text x="190" y="135" fill="#22c55e" fontSize="13" textAnchor="middle">
            So d divides both A and B.
          </text>

          <text x="190" y="165" fill="#f59e0b" fontSize="12" textAnchor="middle">
            But gcd(A, B) = 1, so d = 1.
          </text>
        </svg>
      </div>

      <h3 className="mt-6">What About Differences?</h3>

      <div className="bg-gradient-to-br from-blue-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-blue-500/20">
        <p className="text-dark-200">
          <strong className="text-blue-400">Extending to Differences:</strong> The same
          reasoning applies to differences. If gcd(A, B) = 1 and A greater than B, then:
        </p>
        <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
          <li>gcd(A - B, A) = 1</li>
          <li>gcd(A - B, B) = 1</li>
        </ul>
        <p className="text-dark-300 mt-4">
          Proof: If d divides (A - B) and d divides B, then d divides (A - B) + B = A.
          So d divides both A and B, meaning d = 1.
        </p>
      </div>

      <h3 className="mt-6">Connection to the Euclidean Algorithm</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <p className="text-dark-300 mb-3">
          This proposition is deeply connected to the Euclidean algorithm (VII.1-2):
        </p>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>
            The Euclidean algorithm repeatedly replaces a pair (A, B) with (B, A mod B)
          </li>
          <li>
            This works because gcd(A, B) = gcd(B, A - kB) for any k
          </li>
          <li>
            VII.28 shows the special case: when gcd(A, B) = 1, then gcd(A + B, A) = 1
          </li>
        </ul>
        <p className="text-amber-400 mt-4">
          Both results rely on the same principle: adding or subtracting one number
          from another preserves common divisors.
        </p>
      </div>

      <h3 className="mt-6">The Converse is Not True</h3>

      <div className="bg-gradient-to-br from-rose-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-rose-500/20">
        <p className="text-dark-200">
          <strong className="text-rose-400">Important Warning:</strong> The converse of
          this proposition is NOT true. Just because A + B is coprime to A does not mean
          A and B are coprime.
        </p>
        <p className="text-dark-300 mt-4">
          <strong>Counterexample:</strong> Let A = 4 and B = 6. Then A + B = 10.
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-dark-300 text-sm">
          <li>gcd(10, 4) = 2 (not coprime!)</li>
          <li>gcd(10, 6) = 2 (not coprime!)</li>
          <li>gcd(4, 6) = 2 (they share a factor)</li>
        </ul>
        <p className="text-dark-300 mt-4">
          The proposition requires that A and B already be coprime as a starting condition.
        </p>
      </div>

      <h3 className="mt-6">Modern Applications</h3>

      <div className="bg-gradient-to-br from-cyan-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-cyan-500/20">
        <p className="text-dark-200 mb-4">
          <strong className="text-cyan-400">Applications in Number Theory:</strong>
        </p>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>
            <strong>Bezout's identity:</strong> If gcd(A, B) = 1, there exist integers
            x, y such that Ax + By = 1. This relates to coprimality of sums.
          </li>
          <li>
            <strong>Modular arithmetic:</strong> If gcd(A, n) = 1 and gcd(B, n) = 1,
            we can study A + B modulo n.
          </li>
          <li>
            <strong>Goldbach-type problems:</strong> Expressing numbers as sums of
            primes involves understanding when sums are coprime.
          </li>
        </ul>
      </div>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Additive vs. Multiplicative:</strong>{' '}
          Propositions VII.24-27 showed how coprimality interacts with multiplication.
          VII.28 now shows how it interacts with addition. Together, these results
          give us a complete picture of how relative primality behaves under the basic
          arithmetic operations.
        </p>
      </div>
    </LessonLayout>
  );
}
