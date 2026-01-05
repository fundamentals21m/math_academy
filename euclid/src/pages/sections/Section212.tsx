import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section212() {
  return (
    <LessonLayout sectionId={212}>
      <Proposition
        title="Proposition VII.33"
        proof={
          <>
            <p>
              Let <em>A</em>, <em>B</em>, <em>C</em> be any multitude of numbers. It is required to
              find the least number which they measure.
            </p>
            <p className="mt-2">
              First, let <em>A</em>, <em>B</em> be two numbers. Either <em>A</em> measures <em>B</em>{' '}
              or not.
            </p>
            <p className="mt-2">
              If <em>A</em> measures <em>B</em>, and <em>A</em> also measures itself, therefore{' '}
              <em>A</em>, <em>B</em> both measure <em>B</em>. Hence <em>B</em> is a common measure of{' '}
              <em>A</em>, <em>B</em>.
            </p>
            <p className="mt-2">
              I say also that it is the least. For if not, <em>A</em>, <em>B</em> will measure some
              number less than <em>B</em>. Let them measure <em>D</em>. Then since <em>A</em> measures{' '}
              <em>D</em>, and <em>A</em> measures <em>B</em>, therefore <em>A</em> measures the
              remainder, which is less than <em>D</em>. But <em>D</em> is less than <em>B</em>; which
              is impossible. Therefore <em>A</em>, <em>B</em> do not measure any number less than{' '}
              <em>B</em>.
            </p>
            <p className="mt-2">
              But if <em>A</em> does not measure <em>B</em>, then by continually subtracting the less
              from the greater, we find some number which measures both. [VII.2] Let it be <em>D</em>,
              and let <em>A</em> = <em>D</em> × <em>E</em> and <em>B</em> = <em>D</em> × <em>F</em>.
            </p>
            <p className="mt-2">
              Since <em>E</em>, <em>F</em> are coprime [VII.28], and <em>E</em> × <em>F</em> × <em>D</em>{' '}
              is the least number measured by <em>E</em>, <em>F</em> [VII.34], therefore{' '}
              <em>E</em> × <em>F</em> × <em>D</em> is the least measured by <em>A</em>, <em>B</em>.
            </p>
            <p className="mt-2">
              Now let there be three numbers <em>A</em>, <em>B</em>, <em>C</em>. Find the least number{' '}
              <em>D</em> measured by <em>A</em>, <em>B</em>. Then <em>C</em> either measures <em>D</em>{' '}
              or not. If <em>C</em> measures <em>D</em>, then <em>D</em> is the least number measured
              by <em>A</em>, <em>B</em>, <em>C</em>.
            </p>
            <p className="mt-2 font-medium">
              If <em>C</em> does not measure <em>D</em>, find the least number measured by <em>C</em>,{' '}
              <em>D</em>. This will be the least measured by <em>A</em>, <em>B</em>, <em>C</em>.
              Similarly for any multitude of numbers.
            </p>
          </>
        }
      >
        <p>
          Given any multitude of numbers, to find the least number which they measure.
        </p>
      </Proposition>

      <h2>Finding the Least Common Multiple</h2>

      <p>
        This proposition shows how to find the <strong>Least Common Multiple (LCM)</strong> of any
        collection of numbers. The LCM is the smallest positive number that is divisible by all
        the given numbers. Euclid provides both the algorithm and the proof of correctness.
      </p>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 400 280" className="w-full max-w-md">
          {/* Title */}
          <text x="200" y="25" fill="#f59e0b" fontSize="14" textAnchor="middle" fontWeight="bold">
            LCM of 4, 6, and 10
          </text>

          {/* Number line representation */}
          <line x1="30" y1="70" x2="370" y2="70" stroke="#6b7280" strokeWidth="1" />

          {/* Multiples of 4 */}
          <text x="25" y="95" fill="#3b82f6" fontSize="10" textAnchor="end">4:</text>
          {[4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60].map((n, i) => (
            <g key={`m4-${i}`}>
              <circle cx={50 + i * 21} cy={90} r={n === 60 ? 8 : 5} fill={n === 60 ? '#22c55e' : '#3b82f6'} fillOpacity={n === 60 ? 0.8 : 0.5} />
              <text x={50 + i * 21} y={94} fill={n === 60 ? '#fff' : '#3b82f6'} fontSize="7" textAnchor="middle">{n}</text>
            </g>
          ))}

          {/* Multiples of 6 */}
          <text x="25" y="125" fill="#9333ea" fontSize="10" textAnchor="end">6:</text>
          {[6, 12, 18, 24, 30, 36, 42, 48, 54, 60].map((n, i) => (
            <g key={`m6-${i}`}>
              <circle cx={50 + (n / 4 - 1) * 21} cy={120} r={n === 60 ? 8 : 5} fill={n === 60 ? '#22c55e' : '#9333ea'} fillOpacity={n === 60 ? 0.8 : 0.5} />
              <text x={50 + (n / 4 - 1) * 21} y={124} fill={n === 60 ? '#fff' : '#9333ea'} fontSize="7" textAnchor="middle">{n}</text>
            </g>
          ))}

          {/* Multiples of 10 */}
          <text x="25" y="155" fill="#f59e0b" fontSize="10" textAnchor="end">10:</text>
          {[10, 20, 30, 40, 50, 60].map((n, i) => (
            <g key={`m10-${i}`}>
              <circle cx={50 + (n / 4 - 1) * 21} cy={150} r={n === 60 ? 8 : 5} fill={n === 60 ? '#22c55e' : '#f59e0b'} fillOpacity={n === 60 ? 0.8 : 0.5} />
              <text x={50 + (n / 4 - 1) * 21} y={154} fill={n === 60 ? '#fff' : '#f59e0b'} fontSize="7" textAnchor="middle">{n}</text>
            </g>
          ))}

          {/* Arrow pointing to LCM */}
          <line x1={50 + 14 * 21} y1="170" x2={50 + 14 * 21} y2="185" stroke="#22c55e" strokeWidth="2" />
          <polygon points={`${50 + 14 * 21 - 5},185 ${50 + 14 * 21 + 5},185 ${50 + 14 * 21},193`} fill="#22c55e" />
          <text x={50 + 14 * 21} y="210" fill="#22c55e" fontSize="12" textAnchor="middle" fontWeight="bold">LCM = 60</text>

          {/* Process diagram */}
          <rect x="40" y="225" width="320" height="45" fill="#1e293b" rx="8" stroke="#334155" />
          <text x="200" y="243" fill="#94a3b8" fontSize="10" textAnchor="middle">Step 1: LCM(4, 6) = 12</text>
          <text x="200" y="258" fill="#94a3b8" fontSize="10" textAnchor="middle">Step 2: LCM(12, 10) = 60</text>
        </svg>
      </div>

      <h3>Modern Algebraic Statement</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700 text-center">
        <p className="text-xl text-amber-400 font-mono">
          LCM(a, b, c) = LCM(LCM(a, b), c)
        </p>
        <p className="text-dark-400 mt-2 text-sm">
          The LCM of multiple numbers can be found by iteratively taking LCMs of pairs
        </p>
      </div>

      <h3 className="mt-6">The Algorithm</h3>

      <p>
        Euclid's algorithm for finding the LCM of multiple numbers works in two stages:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <h4 className="text-emerald-400 font-semibold mb-3">Two-Number Case</h4>
        <ol className="list-decimal list-inside space-y-2 text-dark-300">
          <li>
            If <em>a</em> divides <em>b</em>, then LCM(<em>a</em>, <em>b</em>) = <em>b</em>
          </li>
          <li>
            Otherwise, find GCD(<em>a</em>, <em>b</em>) = <em>d</em> using VII.2
          </li>
          <li>
            Write <em>a</em> = <em>d</em> × <em>e</em> and <em>b</em> = <em>d</em> × <em>f</em>
          </li>
          <li>
            Then LCM(<em>a</em>, <em>b</em>) = <em>d</em> × <em>e</em> × <em>f</em> = <em>a</em> × <em>b</em> / <em>d</em>
          </li>
        </ol>
      </div>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <h4 className="text-cyan-400 font-semibold mb-3">Multiple-Number Case</h4>
        <ol className="list-decimal list-inside space-y-2 text-dark-300">
          <li>Find LCM of first two numbers</li>
          <li>Find LCM of result with third number</li>
          <li>Continue until all numbers are included</li>
        </ol>
      </div>

      <h3 className="mt-6">Worked Example: LCM(12, 18, 30)</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <p className="text-dark-300 mb-3">
          <strong className="text-amber-400">Step 1:</strong> Find LCM(12, 18)
        </p>
        <ul className="list-disc list-inside ml-4 space-y-1 text-dark-400 text-sm mb-4">
          <li>GCD(12, 18) = 6</li>
          <li>12 = 6 × 2, 18 = 6 × 3</li>
          <li>LCM(12, 18) = 6 × 2 × 3 = 36</li>
        </ul>

        <p className="text-dark-300 mb-3">
          <strong className="text-amber-400">Step 2:</strong> Find LCM(36, 30)
        </p>
        <ul className="list-disc list-inside ml-4 space-y-1 text-dark-400 text-sm mb-4">
          <li>GCD(36, 30) = 6</li>
          <li>36 = 6 × 6, 30 = 6 × 5</li>
          <li>LCM(36, 30) = 6 × 6 × 5 = 180</li>
        </ul>

        <p className="text-lg text-amber-400 font-mono text-center">
          LCM(12, 18, 30) = 180
        </p>
      </div>

      <h3 className="mt-6">The GCD-LCM Relationship</h3>

      <p>
        Euclid establishes an important relationship between GCD and LCM:
      </p>

      <div className="bg-gradient-to-br from-blue-500/10 to-dark-800/50 rounded-xl p-6 mt-4 border border-blue-500/20">
        <p className="text-xl text-blue-400 font-mono text-center">
          a × b = GCD(a, b) × LCM(a, b)
        </p>
        <p className="text-dark-300 mt-3 text-center">
          The product of two numbers equals the product of their GCD and LCM
        </p>
      </div>

      <h3 className="mt-6">Why the Algorithm is Correct</h3>

      <ol className="list-decimal list-inside mt-4 space-y-2 text-dark-300">
        <li>
          If <em>a | b</em>, then <em>b</em> is measured by both <em>a</em> and <em>b</em>, and no
          smaller multiple of <em>b</em> exists
        </li>
        <li>
          If <em>a</em>, <em>b</em> are coprime, then <em>ab</em> is the smallest number divisible
          by both (VII.34)
        </li>
        <li>
          For general <em>a</em>, <em>b</em>: divide out GCD, apply coprime case, restore GCD
        </li>
      </ol>

      <h3 className="mt-6">Modern Applications</h3>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>
          <strong>Scheduling:</strong> Finding when periodic events align (e.g., when will two
          planets be in the same position again?)
        </li>
        <li>
          <strong>Fractions:</strong> Finding common denominators for addition/subtraction
        </li>
        <li>
          <strong>Signal processing:</strong> Sampling rate conversion using LCM
        </li>
        <li>
          <strong>Computer science:</strong> Memory allocation alignment
        </li>
      </ul>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition VII.2 (Euclidean algorithm for GCD)</li>
        <li>Proposition VII.28 (if GCD = d, then a/d and b/d are coprime)</li>
        <li>Proposition VII.34 (LCM of two numbers)</li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Computational Insight:</strong> Modern computers use
          the formula LCM(a,b) = |a × b| / GCD(a,b) combined with the Euclidean algorithm. For
          multiple numbers, they chain: LCM(a,b,c) = LCM(LCM(a,b), c). This is exactly Euclid's
          method, just expressed differently.
        </p>
      </div>
    </LessonLayout>
  );
}
