import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section213() {
  return (
    <LessonLayout sectionId={213}>
      <Proposition
        title="Proposition VII.34"
        proof={
          <>
            <p>
              Let <em>A</em>, <em>B</em> be two given numbers, and let them be coprime.
            </p>
            <p className="mt-2">
              I say that the product <em>A</em> × <em>B</em> is the least number which <em>A</em>,{' '}
              <em>B</em> measure.
            </p>
            <p className="mt-2">
              For let <em>C</em> be any number measured by <em>A</em>, <em>B</em>. Now since{' '}
              <em>A</em> measures <em>C</em>, let <em>C</em> = <em>A</em> × <em>D</em> for some
              number <em>D</em>.
            </p>
            <p className="mt-2">
              But <em>B</em> also measures <em>C</em>. And <em>A</em>, <em>B</em> are coprime.
              Therefore <em>B</em> measures <em>D</em>. [VII.30]
            </p>
            <p className="mt-2">
              Let <em>D</em> = <em>B</em> × <em>E</em>. Then <em>C</em> = <em>A</em> × <em>D</em> ={' '}
              <em>A</em> × <em>B</em> × <em>E</em>.
            </p>
            <p className="mt-2">
              Therefore <em>A</em> × <em>B</em> measures <em>C</em>. [VII.17]
            </p>
            <p className="mt-2">
              I say also that <em>A</em> × <em>B</em> is itself measured by both <em>A</em> and{' '}
              <em>B</em>. For <em>A</em> × <em>B</em> = <em>A</em> × <em>B</em>, so <em>A</em>{' '}
              measures <em>A</em> × <em>B</em>. Similarly <em>B</em> measures <em>A</em> × <em>B</em>.
            </p>
            <p className="mt-2 font-medium">
              Therefore <em>A</em> × <em>B</em> is a common multiple of <em>A</em>, <em>B</em>, and
              it measures every other common multiple. Hence <em>A</em> × <em>B</em> is the least
              common multiple of the coprime numbers <em>A</em>, <em>B</em>.
            </p>
          </>
        }
      >
        <p>
          Given two numbers coprime to one another, to find the least number which they measure.
        </p>
      </Proposition>

      <h2>LCM of Coprime Numbers</h2>

      <p>
        When two numbers share no common factor other than 1 (they are <strong>coprime</strong>),
        their Least Common Multiple has a particularly simple form: it is simply their product.
        This proposition establishes this fundamental result.
      </p>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 400 250" className="w-full max-w-md">
          {/* Title */}
          <text x="200" y="25" fill="#f59e0b" fontSize="14" textAnchor="middle" fontWeight="bold">
            LCM of Coprime Numbers 3 and 5
          </text>

          {/* Venn-like diagram showing multiples */}
          <ellipse cx="150" cy="130" rx="100" ry="70" fill="#3b82f6" fillOpacity="0.2" stroke="#3b82f6" strokeWidth="2" />
          <ellipse cx="250" cy="130" rx="100" ry="70" fill="#22c55e" fillOpacity="0.2" stroke="#22c55e" strokeWidth="2" />

          {/* Labels */}
          <text x="80" y="90" fill="#3b82f6" fontSize="12" fontWeight="bold">Multiples of 3</text>
          <text x="280" y="90" fill="#22c55e" fontSize="12" fontWeight="bold">Multiples of 5</text>

          {/* Multiples of 3 only */}
          <text x="80" y="125" fill="#3b82f6" fontSize="11">3, 6, 9, 12</text>
          <text x="80" y="142" fill="#3b82f6" fontSize="11">18, 21, 24, 27</text>

          {/* Multiples of 5 only */}
          <text x="285" y="125" fill="#22c55e" fontSize="11">5, 10, 20</text>
          <text x="285" y="142" fill="#22c55e" fontSize="11">25, 35, 40</text>

          {/* Common multiples (intersection) */}
          <text x="200" y="115" fill="#f59e0b" fontSize="12" fontWeight="bold" textAnchor="middle">Common</text>
          <text x="200" y="135" fill="#f59e0b" fontSize="14" textAnchor="middle" fontWeight="bold">15, 30, 45...</text>
          <text x="200" y="155" fill="#f59e0b" fontSize="10" textAnchor="middle">(multiples of 15)</text>

          {/* Formula box */}
          <rect x="100" y="190" width="200" height="45" fill="#1e293b" rx="8" stroke="#f59e0b" strokeWidth="2" />
          <text x="200" y="210" fill="#f59e0b" fontSize="12" textAnchor="middle" fontWeight="bold">GCD(3, 5) = 1 (coprime)</text>
          <text x="200" y="227" fill="#22c55e" fontSize="14" textAnchor="middle" fontWeight="bold">LCM(3, 5) = 3 × 5 = 15</text>
        </svg>
      </div>

      <h3>Modern Algebraic Statement</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700 text-center">
        <p className="text-xl text-amber-400 font-mono">
          If GCD(a, b) = 1, then LCM(a, b) = a × b
        </p>
      </div>

      <h3 className="mt-6">Why This Works</h3>

      <p>
        The key insight is Proposition VII.30: if <em>p</em> is coprime to <em>a</em> and{' '}
        <em>p</em> | <em>ac</em>, then <em>p</em> | <em>c</em>. Euclid uses this to show:
      </p>

      <ol className="list-decimal list-inside mt-4 space-y-3 text-dark-300">
        <li>
          <em>a × b</em> is clearly divisible by both <em>a</em> and <em>b</em>
        </li>
        <li>
          If <em>c</em> is any common multiple, write <em>c</em> = <em>a × d</em>
        </li>
        <li>
          Since <em>b | c</em> and <em>b | a×d</em> and gcd(<em>a</em>, <em>b</em>) = 1, we get{' '}
          <em>b | d</em>
        </li>
        <li>
          So <em>d</em> = <em>b × e</em> for some <em>e</em>, giving <em>c</em> = <em>a × b × e</em>
        </li>
        <li>
          Therefore <em>a × b | c</em>, meaning <em>a × b</em> divides every common multiple
        </li>
      </ol>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 380 180" className="w-full max-w-md">
          {/* Divisibility chain diagram */}
          <text x="190" y="25" fill="#f59e0b" fontSize="13" textAnchor="middle" fontWeight="bold">
            Divisibility Chain for Coprime a, b
          </text>

          {/* c = a × d */}
          <rect x="20" y="50" width="100" height="35" fill="#3b82f6" fillOpacity="0.2" rx="6" stroke="#3b82f6" strokeWidth="2" />
          <text x="70" y="72" fill="#3b82f6" fontSize="12" textAnchor="middle">c = a × d</text>

          {/* Arrow */}
          <line x1="125" y1="67" x2="155" y2="67" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrowhead)" />
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#6b7280" />
            </marker>
          </defs>

          {/* b | c, gcd(a,b)=1 implies b | d */}
          <rect x="160" y="50" width="130" height="35" fill="#9333ea" fillOpacity="0.2" rx="6" stroke="#9333ea" strokeWidth="2" />
          <text x="225" y="72" fill="#9333ea" fontSize="11" textAnchor="middle">b | c, gcd=1 implies b | d</text>

          {/* Arrow */}
          <line x1="295" y1="67" x2="310" y2="95" stroke="#6b7280" strokeWidth="2" />

          {/* d = b × e */}
          <rect x="260" y="100" width="100" height="35" fill="#22c55e" fillOpacity="0.2" rx="6" stroke="#22c55e" strokeWidth="2" />
          <text x="310" y="122" fill="#22c55e" fontSize="12" textAnchor="middle">d = b × e</text>

          {/* Arrow */}
          <line x1="255" y1="117" x2="225" y2="117" stroke="#6b7280" strokeWidth="2" />

          {/* c = a × b × e */}
          <rect x="100" y="100" width="120" height="35" fill="#f59e0b" fillOpacity="0.2" rx="6" stroke="#f59e0b" strokeWidth="2" />
          <text x="160" y="122" fill="#f59e0b" fontSize="12" textAnchor="middle">c = a × b × e</text>

          {/* Arrow */}
          <line x1="95" y1="117" x2="65" y2="145" stroke="#6b7280" strokeWidth="2" />

          {/* Conclusion */}
          <rect x="20" y="145" width="150" height="30" fill="#22c55e" fillOpacity="0.3" rx="6" stroke="#22c55e" strokeWidth="2" />
          <text x="95" y="165" fill="#22c55e" fontSize="12" textAnchor="middle" fontWeight="bold">a × b divides c</text>
        </svg>
      </div>

      <h3 className="mt-6">Examples</h3>

      <div className="grid md:grid-cols-2 gap-4 mt-4">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-emerald-400 font-semibold mb-2">LCM(7, 11)</h4>
          <p className="text-dark-300 text-sm">
            GCD(7, 11) = 1 (both prime, distinct)<br />
            LCM(7, 11) = 7 × 11 = <strong className="text-amber-400">77</strong>
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-emerald-400 font-semibold mb-2">LCM(8, 15)</h4>
          <p className="text-dark-300 text-sm">
            8 = 2³, 15 = 3 × 5 (no common factors)<br />
            LCM(8, 15) = 8 × 15 = <strong className="text-amber-400">120</strong>
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-emerald-400 font-semibold mb-2">LCM(9, 25)</h4>
          <p className="text-dark-300 text-sm">
            9 = 3², 25 = 5² (no common factors)<br />
            LCM(9, 25) = 9 × 25 = <strong className="text-amber-400">225</strong>
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-emerald-400 font-semibold mb-2">LCM(4, 9)</h4>
          <p className="text-dark-300 text-sm">
            4 = 2², 9 = 3² (coprime)<br />
            LCM(4, 9) = 4 × 9 = <strong className="text-amber-400">36</strong>
          </p>
        </div>
      </div>

      <h3 className="mt-6">Contrast with Non-Coprime Numbers</h3>

      <p>
        When numbers are <em>not</em> coprime, their LCM is less than their product:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <p className="text-dark-300 mb-2">
          <strong className="text-rose-400">LCM(6, 8):</strong> GCD = 2, not coprime
        </p>
        <p className="text-dark-400 text-sm mb-2">
          6 × 8 = 48, but LCM(6, 8) = 24
        </p>
        <p className="text-dark-400 text-sm">
          Using VII.33: 6 = 2 × 3, 8 = 2 × 4, so LCM = 2 × 3 × 4 = 24
        </p>
      </div>

      <h3 className="mt-6">The General Formula</h3>

      <p>
        VII.34 combined with VII.33 gives us the general formula for LCM:
      </p>

      <div className="bg-gradient-to-br from-blue-500/10 to-dark-800/50 rounded-xl p-6 mt-4 border border-blue-500/20">
        <p className="text-xl text-blue-400 font-mono text-center">
          LCM(a, b) = (a × b) / GCD(a, b)
        </p>
        <p className="text-dark-300 mt-3 text-center text-sm">
          When GCD = 1, this simplifies to LCM = a × b
        </p>
      </div>

      <h3 className="mt-6">Modern Applications</h3>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>
          <strong>Modular arithmetic:</strong> When working with coprime moduli, the Chinese
          Remainder Theorem relies on this result
        </li>
        <li>
          <strong>Cryptography:</strong> RSA key generation uses LCM of (p-1)(q-1) for coprime
          primes p, q
        </li>
        <li>
          <strong>Gear ratios:</strong> Coprime gear teeth ensure all tooth combinations are used
        </li>
        <li>
          <strong>Music theory:</strong> Frequency ratios with coprime integers create
          distinguishable intervals
        </li>
      </ul>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition VII.17 (if a | b then a | bc)</li>
        <li>Proposition VII.30 (if gcd(a,b)=1 and a | bc, then a | c)</li>
        <li>Definition VII.12 (coprime numbers)</li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Why Coprimeness Matters:</strong> The condition
          GCD(a, b) = 1 is essential. Without it, a × b overcounts: for example, if a = 6 and
          b = 4, then a × b = 24, but LCM(6, 4) = 12 because we counted the common factor 2 twice.
          Coprime numbers have no such overlap.
        </p>
      </div>
    </LessonLayout>
  );
}
