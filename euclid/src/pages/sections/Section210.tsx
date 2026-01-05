import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition, Theorem } from '@/components/common/ContentBlocks';

export default function Section210() {
  return (
    <LessonLayout sectionId={210}>
      <Proposition
        title="Proposition VII.31"
        proof={
          <>
            <p>
              Let <em>A</em> be a composite number.
            </p>
            <p className="mt-2">
              I say that <em>A</em> is measured by some prime number.
            </p>
            <p className="mt-2">
              For, since <em>A</em> is composite, some number <em>B</em> will measure it.
            </p>
            <p className="mt-2">
              Now, if <em>B</em> is prime, then that which was proposed is done.
            </p>
            <p className="mt-2">
              But if <em>B</em> is composite, some number <em>C</em> will measure it.
            </p>
            <p className="mt-2">
              And, since <em>C</em> measures <em>B</em>, and <em>B</em> measures{' '}
              <em>A</em>, therefore <em>C</em> also measures <em>A</em>.
            </p>
            <p className="mt-2">
              Now, if <em>C</em> is prime, then that which was proposed is done.
            </p>
            <p className="mt-2">
              But if <em>C</em> is composite, some number will measure it.
            </p>
            <p className="mt-2">
              Thus, if the investigation be continued in this way, some prime number
              will be found which will measure the number before it, which will also
              measure <em>A</em>.
            </p>
            <p className="mt-2">
              For, if it is not found, an infinite descending sequence of numbers
              will measure the number <em>A</em>, each of which is less than the other.
            </p>
            <p className="mt-2 font-medium">
              This is impossible in numbers. Therefore some prime number will be found
              which will measure <em>A</em>.
            </p>
          </>
        }
      >
        <p>
          Any composite number is measured by some prime number.
        </p>
      </Proposition>

      <h2>Every Composite Has a Prime Divisor</h2>

      <p>
        This proposition establishes that every composite number has at least one prime
        divisor. Combined with VII.30 (Euclid's Lemma), this proposition leads to the
        Fundamental Theorem of Arithmetic: every integer greater than 1 can be expressed
        as a product of primes in essentially one way.
      </p>

      <Theorem title="Modern Statement">
        <p>
          Every integer n greater than 1 has a prime divisor.
        </p>
        <p className="mt-2 text-dark-400">
          Equivalently: Every composite number is divisible by at least one prime.
        </p>
      </Theorem>

      <h3 className="mt-6">Visual Representation</h3>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 450 350" className="w-full max-w-lg">
          {/* Title */}
          <text x="225" y="25" fill="#f59e0b" fontSize="14" fontWeight="bold" textAnchor="middle">
            Finding a Prime Divisor of a Composite
          </text>

          {/* Starting composite */}
          <rect x="175" y="50" width="100" height="45" rx="10" fill="#8b5cf6" fillOpacity="0.3" stroke="#8b5cf6" strokeWidth="2" />
          <text x="225" y="78" fill="#8b5cf6" fontSize="18" fontWeight="bold" textAnchor="middle">60</text>
          <text x="225" y="105" fill="#6b7280" fontSize="10" textAnchor="middle">(composite)</text>

          {/* First divisor */}
          <path d="M 225 95 L 225 125" fill="none" stroke="#6b7280" strokeWidth="2" />
          <text x="245" y="115" fill="#6b7280" fontSize="10">divided by</text>

          <rect x="175" y="125" width="100" height="40" rx="8" fill="#3b82f6" fillOpacity="0.3" stroke="#3b82f6" strokeWidth="2" />
          <text x="225" y="150" fill="#3b82f6" fontSize="16" fontWeight="bold" textAnchor="middle">12</text>
          <text x="225" y="175" fill="#6b7280" fontSize="10" textAnchor="middle">(composite)</text>

          {/* Second divisor */}
          <path d="M 225 165 L 225 195" fill="none" stroke="#6b7280" strokeWidth="2" />
          <text x="245" y="185" fill="#6b7280" fontSize="10">divided by</text>

          <rect x="175" y="195" width="100" height="40" rx="8" fill="#3b82f6" fillOpacity="0.3" stroke="#3b82f6" strokeWidth="2" />
          <text x="225" y="220" fill="#3b82f6" fontSize="16" fontWeight="bold" textAnchor="middle">6</text>
          <text x="225" y="245" fill="#6b7280" fontSize="10" textAnchor="middle">(composite)</text>

          {/* Third divisor - prime! */}
          <path d="M 225 235 L 225 265" fill="none" stroke="#6b7280" strokeWidth="2" />
          <text x="245" y="255" fill="#6b7280" fontSize="10">divided by</text>

          <rect x="175" y="265" width="100" height="45" rx="10" fill="#22c55e" fillOpacity="0.4" stroke="#22c55e" strokeWidth="3" />
          <text x="225" y="293" fill="#22c55e" fontSize="18" fontWeight="bold" textAnchor="middle">3</text>
          <text x="225" y="320" fill="#22c55e" fontSize="11" fontWeight="bold" textAnchor="middle">PRIME!</text>

          {/* Annotations on right side */}
          <text x="340" y="75" fill="#8b5cf6" fontSize="10" textAnchor="start">60 = 12 x 5</text>
          <text x="340" y="150" fill="#3b82f6" fontSize="10" textAnchor="start">12 = 6 x 2</text>
          <text x="340" y="220" fill="#3b82f6" fontSize="10" textAnchor="start">6 = 3 x 2</text>
          <text x="340" y="290" fill="#22c55e" fontSize="10" textAnchor="start">3 is prime!</text>

          {/* Descending arrow showing the key argument */}
          <path d="M 130 70 L 130 290" fill="none" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrow)" />
          <text x="60" y="180" fill="#f59e0b" fontSize="10" textAnchor="start" transform="rotate(-90, 60, 180)">
            Divisors decrease
          </text>

          {/* Result */}
          <text x="225" y="345" fill="#22c55e" fontSize="12" fontWeight="bold" textAnchor="middle">
            3 divides 60 and 3 is prime!
          </text>
        </svg>
      </div>

      <h3 className="mt-6">The Proof Method: Infinite Descent</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <p className="text-dark-300 mb-3">
          This is an early example of <strong className="text-amber-400">proof by infinite descent</strong>
          (or well-ordering):
        </p>
        <ol className="list-decimal list-inside space-y-2 text-dark-300">
          <li>Start with composite number A</li>
          <li>Since A is composite, some number B less than A divides it</li>
          <li>If B is prime, we're done</li>
          <li>If B is composite, some number C less than B divides it</li>
          <li>C also divides A (transitivity of division)</li>
          <li>Continue: each step gives a smaller divisor of A</li>
          <li>This cannot continue forever (there's no infinite descending sequence of positive integers)</li>
          <li>Therefore we must eventually reach a prime</li>
        </ol>
      </div>

      <h3 className="mt-6">Concrete Examples</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-amber-400 font-semibold mb-2">Example 1: n = 84</p>
            <ul className="list-disc list-inside space-y-1 text-dark-300 text-sm">
              <li>84 is composite (84 = 42 x 2)</li>
              <li>42 is composite (42 = 21 x 2)</li>
              <li>21 is composite (21 = 7 x 3)</li>
              <li>7 is PRIME!</li>
              <li>So 7 divides 84</li>
            </ul>
          </div>
          <div>
            <p className="text-amber-400 font-semibold mb-2">Example 2: n = 100</p>
            <ul className="list-disc list-inside space-y-1 text-dark-300 text-sm">
              <li>100 is composite (100 = 50 x 2)</li>
              <li>50 is composite (50 = 25 x 2)</li>
              <li>25 is composite (25 = 5 x 5)</li>
              <li>5 is PRIME!</li>
              <li>So 5 divides 100</li>
            </ul>
          </div>
        </div>
      </div>

      <h3 className="mt-6">Why the Descent Must Terminate</h3>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 400 180" className="w-full max-w-md">
          {/* Number line showing finite positive integers */}
          <line x1="50" y1="90" x2="350" y2="90" stroke="#6b7280" strokeWidth="2" />

          {/* Marks for small numbers */}
          <circle cx="80" cy="90" r="15" fill="#22c55e" fillOpacity="0.3" stroke="#22c55e" strokeWidth="2" />
          <text x="80" y="95" fill="#22c55e" fontSize="14" fontWeight="bold" textAnchor="middle">2</text>

          <circle cx="120" cy="90" r="15" fill="#22c55e" fillOpacity="0.3" stroke="#22c55e" strokeWidth="2" />
          <text x="120" y="95" fill="#22c55e" fontSize="14" fontWeight="bold" textAnchor="middle">3</text>

          <circle cx="160" cy="90" r="12" fill="#3b82f6" fillOpacity="0.2" stroke="#3b82f6" strokeWidth="1" />
          <text x="160" y="94" fill="#3b82f6" fontSize="12" textAnchor="middle">4</text>

          <circle cx="200" cy="90" r="15" fill="#22c55e" fillOpacity="0.3" stroke="#22c55e" strokeWidth="2" />
          <text x="200" y="95" fill="#22c55e" fontSize="14" fontWeight="bold" textAnchor="middle">5</text>

          <circle cx="240" cy="90" r="12" fill="#3b82f6" fillOpacity="0.2" stroke="#3b82f6" strokeWidth="1" />
          <text x="240" y="94" fill="#3b82f6" fontSize="12" textAnchor="middle">6</text>

          <circle cx="280" cy="90" r="15" fill="#22c55e" fillOpacity="0.3" stroke="#22c55e" strokeWidth="2" />
          <text x="280" y="95" fill="#22c55e" fontSize="14" fontWeight="bold" textAnchor="middle">7</text>

          <text x="320" y="95" fill="#6b7280" fontSize="16" textAnchor="middle">...</text>

          {/* Labels */}
          <text x="200" y="40" fill="#f59e0b" fontSize="12" fontWeight="bold" textAnchor="middle">
            Positive integers are bounded below
          </text>

          <text x="200" y="140" fill="#6b7280" fontSize="11" textAnchor="middle">
            Green = primes, Blue = composites
          </text>

          <text x="200" y="160" fill="#22c55e" fontSize="11" textAnchor="middle">
            Any descending sequence must hit a prime!
          </text>
        </svg>
      </div>

      <div className="bg-gradient-to-br from-blue-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-blue-500/20">
        <p className="text-dark-200">
          <strong className="text-blue-400">The Well-Ordering Principle:</strong> The proof
          relies on the fact that every non-empty set of positive integers has a smallest
          element. This is equivalent to saying there's no infinite strictly descending
          sequence of positive integers. The sequence of divisors A greater than B greater than
          C greater than ... must eventually terminate, and when it does, we have a prime.
        </p>
      </div>

      <h3 className="mt-6">Finding the Smallest Prime Divisor</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <p className="text-dark-300 mb-3">
          A stronger statement is also true: <strong>the smallest divisor greater than 1
          of any composite number is always prime</strong>.
        </p>
        <p className="text-dark-300">
          <strong>Proof:</strong> Let d be the smallest divisor of n greater than 1. If d
          were composite, it would have a divisor e with 1 less than e less than d. But then
          e would also divide n (since e | d and d | n), contradicting the minimality of d.
        </p>
        <p className="text-amber-400 mt-4">
          This gives an algorithm: to find a prime factor of n, just find its smallest
          divisor greater than 1.
        </p>
      </div>

      <h3 className="mt-6">Connection to Prime Factorization</h3>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Building Complete Factorizations:</strong>{' '}
          This proposition proves every composite has <em>at least one</em> prime divisor.
          By repeatedly applying it, we can completely factor any composite:
        </p>
        <ol className="list-decimal list-inside mt-4 space-y-2 text-dark-300">
          <li>If n is prime, done</li>
          <li>If n is composite, find a prime divisor p (by VII.31)</li>
          <li>Write n = p x m where m = n/p</li>
          <li>Apply the same process to m</li>
          <li>Continue until all factors are prime</li>
        </ol>
        <p className="text-amber-400 mt-4">
          VII.30 (Euclid's Lemma) then guarantees this factorization is unique!
        </p>
      </div>

      <h3 className="mt-6">Example: Complete Factorization</h3>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 400 200" className="w-full max-w-md">
          {/* Factorization tree for 360 */}
          <text x="200" y="25" fill="#f59e0b" fontSize="12" fontWeight="bold" textAnchor="middle">
            Complete Prime Factorization of 360
          </text>

          {/* Level 0 */}
          <rect x="170" y="40" width="60" height="30" rx="6" fill="#8b5cf6" fillOpacity="0.3" stroke="#8b5cf6" strokeWidth="2" />
          <text x="200" y="60" fill="#8b5cf6" fontSize="14" fontWeight="bold" textAnchor="middle">360</text>

          {/* Level 1 */}
          <line x1="200" y1="70" x2="120" y2="95" stroke="#6b7280" strokeWidth="1" />
          <line x1="200" y1="70" x2="280" y2="95" stroke="#6b7280" strokeWidth="1" />

          <circle cx="120" cy="105" r="15" fill="#22c55e" fillOpacity="0.4" stroke="#22c55e" strokeWidth="2" />
          <text x="120" y="110" fill="#22c55e" fontSize="12" fontWeight="bold" textAnchor="middle">2</text>

          <rect x="250" y="90" width="60" height="30" rx="6" fill="#3b82f6" fillOpacity="0.2" stroke="#3b82f6" strokeWidth="1" />
          <text x="280" y="110" fill="#3b82f6" fontSize="12" textAnchor="middle">180</text>

          {/* Level 2 */}
          <line x1="280" y1="120" x2="220" y2="145" stroke="#6b7280" strokeWidth="1" />
          <line x1="280" y1="120" x2="340" y2="145" stroke="#6b7280" strokeWidth="1" />

          <circle cx="220" cy="155" r="15" fill="#22c55e" fillOpacity="0.4" stroke="#22c55e" strokeWidth="2" />
          <text x="220" y="160" fill="#22c55e" fontSize="12" fontWeight="bold" textAnchor="middle">2</text>

          <rect x="310" y="145" width="60" height="25" rx="4" fill="#3b82f6" fillOpacity="0.2" stroke="#3b82f6" strokeWidth="1" />
          <text x="340" y="162" fill="#3b82f6" fontSize="11" textAnchor="middle">90</text>

          {/* Final factorization */}
          <text x="200" y="195" fill="#22c55e" fontSize="12" fontWeight="bold" textAnchor="middle">
            360 = 2³ x 3² x 5
          </text>
        </svg>
      </div>

      <h3 className="mt-6">Key Dependencies</h3>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>
          <strong className="text-amber-400">VII.Def.11:</strong> Definition of prime
          number (measured only by unity)
        </li>
        <li>
          <strong className="text-amber-400">VII.Def.13:</strong> Definition of composite
          number (measured by some number)
        </li>
        <li>
          <strong className="text-amber-400">Well-ordering:</strong> No infinite
          descending sequence of positive integers
        </li>
      </ul>

      <h3 className="mt-6">Modern Applications</h3>

      <div className="bg-gradient-to-br from-cyan-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-cyan-500/20">
        <p className="text-dark-200 mb-4">
          <strong className="text-cyan-400">Applications:</strong>
        </p>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>
            <strong>Factorization algorithms:</strong> Trial division starts by
            finding small prime factors
          </li>
          <li>
            <strong>Primality testing:</strong> A number with no prime factor up to
            its square root is prime
          </li>
          <li>
            <strong>Cryptography:</strong> RSA security relies on difficulty of
            finding prime factors of large numbers
          </li>
          <li>
            <strong>Computer science:</strong> Hash functions and pseudorandom
            generators often use prime factorization
          </li>
        </ul>
      </div>

      <div className="bg-gradient-to-br from-purple-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-purple-500/20">
        <p className="text-dark-200">
          <strong className="text-purple-400">Completing Book VII:</strong> With VII.30
          and VII.31, Euclid has established the essential theory of prime numbers:
          every composite has a prime factor (VII.31), and primes have the special
          property of dividing products only when they divide a factor (VII.30). These
          two results together form the foundation for what we now call the Fundamental
          Theorem of Arithmetic, though Euclid does not state it explicitly in that form.
        </p>
      </div>
    </LessonLayout>
  );
}
