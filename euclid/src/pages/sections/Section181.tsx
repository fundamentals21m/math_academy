import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section181() {
  return (
    <LessonLayout sectionId={181}>
      <Proposition
        title="Proposition VII.2"
        proof={
          <>
            <p>
              Let <em>AB</em>, <em>CD</em> be two numbers not prime to one another.
            </p>
            <p className="mt-2">
              It is required to find the greatest common measure of <em>AB</em>, <em>CD</em>.
            </p>
            <p className="mt-2">
              If now <em>CD</em> measures <em>AB</em>, it is also a common measure of <em>CD</em>,
              <em>AB</em>. And it is manifest that it is also the greatest; for no greater number
              than <em>CD</em> will measure <em>CD</em>.
            </p>
            <p className="mt-2">
              But if <em>CD</em> does not measure <em>AB</em>, then, the less of the numbers{' '}
              <em>AB</em>, <em>CD</em> being continually subtracted from the greater, some number
              will be left which will measure the one before it.
            </p>
            <p className="mt-2">
              For a unit will not be left; otherwise <em>AB</em>, <em>CD</em> will be prime to
              one another [VII.1], which is contrary to the hypothesis.
            </p>
            <p className="mt-2">
              Therefore some number will be left which will measure the one before it.
            </p>
            <p className="mt-2">
              Now let <em>CD</em>, measuring <em>BE</em>, leave <em>EA</em> less than itself,
              let <em>EA</em>, measuring <em>DF</em>, leave <em>FC</em> less than itself,
              and let <em>CF</em> measure <em>AE</em>.
            </p>
            <p className="mt-2">
              Since then <em>CF</em> measures <em>AE</em>, and <em>AE</em> measures <em>DF</em>,
              therefore <em>CF</em> will also measure <em>DF</em>.
            </p>
            <p className="mt-2">
              But it also measures itself; therefore it will also measure the whole <em>CD</em>.
            </p>
            <p className="mt-2">
              But <em>CD</em> measures <em>BE</em>; therefore <em>CF</em> also measures <em>BE</em>.
            </p>
            <p className="mt-2">
              But it also measures <em>EA</em>; therefore it will also measure the whole <em>BA</em>.
            </p>
            <p className="mt-2">
              But it also measures <em>CD</em>; therefore <em>CF</em> measures <em>AB</em>, <em>CD</em>.
            </p>
            <p className="mt-2">
              Therefore <em>CF</em> is a common measure of <em>AB</em>, <em>CD</em>.
            </p>
            <p className="mt-2">
              I say next that it is also the greatest.
            </p>
            <p className="mt-2">
              For, if <em>CF</em> is not the greatest common measure of <em>AB</em>, <em>CD</em>,
              some number which is greater than <em>CF</em> will measure the numbers <em>AB</em>, <em>CD</em>.
            </p>
            <p className="mt-2">
              Let such a number measure them, and let it be <em>G</em>.
            </p>
            <p className="mt-2">
              Now, since <em>G</em> measures <em>CD</em>, while <em>CD</em> measures <em>BE</em>,
              therefore <em>G</em> also measures <em>BE</em>.
            </p>
            <p className="mt-2">
              But it also measures the whole <em>BA</em>; therefore it will also measure the
              remainder <em>AE</em>.
            </p>
            <p className="mt-2">
              But <em>AE</em> measures <em>DF</em>; therefore <em>G</em> will also measure <em>DF</em>.
            </p>
            <p className="mt-2">
              But it also measures the whole <em>DC</em>; therefore it will also measure the
              remainder <em>CF</em>, that is, the greater will measure the less: which is impossible.
            </p>
            <p className="mt-2">
              Therefore no number which is greater than <em>CF</em> will measure the numbers{' '}
              <em>AB</em>, <em>CD</em>;
            </p>
            <p className="mt-2">
              therefore <em>CF</em> is the greatest common measure of <em>AB</em>, <em>CD</em>.
            </p>
            <p className="mt-2 font-medium">
              Q.E.D.
            </p>
          </>
        }
      >
        <p>
          Given two numbers not prime to one another, to find their greatest common measure.
        </p>
      </Proposition>

      <h2>The Euclidean Algorithm</h2>

      <p>
        This is one of the most important algorithms in all of mathematics: a method for finding
        the <strong>greatest common divisor (GCD)</strong> of two numbers. It remains in use
        today, over 2300 years after Euclid recorded it.
      </p>

      <h3 className="mt-6">The Algorithm in Modern Form</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <p className="text-dark-200 font-mono">
          gcd(a, b):
        </p>
        <p className="text-dark-300 font-mono ml-4">
          while b != 0:
        </p>
        <p className="text-dark-300 font-mono ml-8">
          a, b = b, a mod b
        </p>
        <p className="text-dark-300 font-mono ml-4">
          return a
        </p>
      </div>

      <p className="mt-4">
        Euclid's version uses repeated subtraction rather than the modulo operation, but they
        are mathematically equivalent. The modern version is faster because a single modulo
        operation replaces many subtractions.
      </p>

      <h3 className="mt-8">Worked Example: gcd(48, 18)</h3>

      <svg viewBox="0 0 500 320" className="w-full max-w-2xl mx-auto mt-4">
        {/* Title */}
        <text x="250" y="25" textAnchor="middle" fill="#f59e0b" fontSize="14" fontWeight="bold">
          Finding gcd(48, 18)
        </text>

        {/* Step 1 */}
        <text x="30" y="60" fill="#f59e0b" fontSize="12" fontWeight="bold">Step 1:</text>
        <text x="90" y="60" fill="#9ca3af" fontSize="11">48 = 2 x 18 + 12</text>

        {/* 48 as segments */}
        <g transform="translate(30, 70)">
          {/* First 18 */}
          {[...Array(18)].map((_, i) => (
            <rect key={`1a-${i}`} x={i * 9} y="0" width="8" height="12" fill="#3b82f6" rx="1" />
          ))}
          {/* Second 18 */}
          {[...Array(18)].map((_, i) => (
            <rect key={`1b-${i}`} x={162 + i * 9} y="0" width="8" height="12" fill="#3b82f6" rx="1" />
          ))}
          {/* Remainder 12 */}
          {[...Array(12)].map((_, i) => (
            <rect key={`1c-${i}`} x={324 + i * 9} y="0" width="8" height="12" fill="#10b981" rx="1" />
          ))}
        </g>
        <text x="110" y="100" fill="#3b82f6" fontSize="10">18</text>
        <text x="250" y="100" fill="#3b82f6" fontSize="10">18</text>
        <text x="375" y="100" fill="#10b981" fontSize="10">12 (remainder)</text>

        {/* Step 2 */}
        <text x="30" y="130" fill="#f59e0b" fontSize="12" fontWeight="bold">Step 2:</text>
        <text x="90" y="130" fill="#9ca3af" fontSize="11">18 = 1 x 12 + 6</text>

        <g transform="translate(30, 140)">
          {/* 12 */}
          {[...Array(12)].map((_, i) => (
            <rect key={`2a-${i}`} x={i * 12} y="0" width="10" height="12" fill="#3b82f6" rx="1" />
          ))}
          {/* Remainder 6 */}
          {[...Array(6)].map((_, i) => (
            <rect key={`2b-${i}`} x={144 + i * 12} y="0" width="10" height="12" fill="#10b981" rx="1" />
          ))}
        </g>
        <text x="90" y="170" fill="#3b82f6" fontSize="10">12</text>
        <text x="200" y="170" fill="#10b981" fontSize="10">6 (remainder)</text>

        {/* Step 3 */}
        <text x="30" y="200" fill="#f59e0b" fontSize="12" fontWeight="bold">Step 3:</text>
        <text x="90" y="200" fill="#9ca3af" fontSize="11">12 = 2 x 6 + 0</text>

        <g transform="translate(30, 210)">
          {/* First 6 */}
          {[...Array(6)].map((_, i) => (
            <rect key={`3a-${i}`} x={i * 15} y="0" width="13" height="12" fill="#f59e0b" rx="1" />
          ))}
          {/* Second 6 */}
          {[...Array(6)].map((_, i) => (
            <rect key={`3b-${i}`} x={90 + i * 15} y="0" width="13" height="12" fill="#f59e0b" rx="1" />
          ))}
        </g>
        <text x="60" y="240" fill="#f59e0b" fontSize="10">6</text>
        <text x="140" y="240" fill="#f59e0b" fontSize="10">6</text>
        <text x="200" y="240" fill="#9ca3af" fontSize="10">0 (no remainder)</text>

        {/* Result */}
        <rect x="30" y="260" width="440" height="35" fill="#10b981" fillOpacity="0.1" stroke="#10b981" strokeWidth="1" rx="8" />
        <text x="250" y="283" textAnchor="middle" fill="#10b981" fontSize="14" fontWeight="bold">
          gcd(48, 18) = 6
        </text>
      </svg>

      <p className="text-center text-dark-400 text-sm mt-2">
        The algorithm terminates when the remainder is 0; the last non-zero remainder is the GCD
      </p>

      <h3 className="mt-8">Verification: 6 Measures Both Numbers</h3>

      <svg viewBox="0 0 500 140" className="w-full max-w-2xl mx-auto mt-4">
        {/* 48 = 8 x 6 */}
        <text x="30" y="25" fill="#f59e0b" fontSize="12" fontWeight="bold">48 = 8 x 6:</text>
        <g transform="translate(30, 35)">
          {[...Array(8)].map((_, i) => (
            <g key={i}>
              {[...Array(6)].map((_, j) => (
                <rect key={j} x={i * 55 + j * 9} y="0" width="8" height="12" fill="#10b981" rx="1" />
              ))}
            </g>
          ))}
        </g>

        {/* 18 = 3 x 6 */}
        <text x="30" y="85" fill="#f59e0b" fontSize="12" fontWeight="bold">18 = 3 x 6:</text>
        <g transform="translate(30, 95)">
          {[...Array(3)].map((_, i) => (
            <g key={i}>
              {[...Array(6)].map((_, j) => (
                <rect key={j} x={i * 55 + j * 9} y="0" width="8" height="12" fill="#10b981" rx="1" />
              ))}
            </g>
          ))}
        </g>
      </svg>

      <h3 className="mt-8">Why It Finds the Greatest Common Measure</h3>

      <p>
        Euclid's proof has two parts:
      </p>

      <ol className="list-decimal list-inside mt-4 space-y-3 text-dark-300">
        <li>
          <strong>The final remainder is a common measure:</strong> Working backwards through
          the algorithm, if <em>r</em> divides <em>a</em> and <em>a</em> divides <em>b - qa</em>,
          then <em>r</em> divides <em>b</em>. This shows the final non-zero remainder divides
          both original numbers.
        </li>
        <li>
          <strong>It is the greatest:</strong> Any common divisor of the original numbers must
          also divide every remainder produced by the algorithm (since divisors are preserved
          under subtraction). Therefore, any common divisor must divide the final remainder,
          so no common divisor can be larger than it.
        </li>
      </ol>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Key Theorem:</strong> The set of common divisors
          of (a, b) equals the set of common divisors of (b, a mod b). This invariant is
          maintained at each step, so the GCD is preserved throughout the algorithm.
        </p>
      </div>

      <h3 className="mt-8">Efficiency Analysis</h3>

      <p>
        The Euclidean algorithm is remarkably efficient. For two n-bit numbers, it completes
        in at most 2n steps. More precisely:
      </p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>The number of steps is at most 5 times the number of digits in the smaller number</li>
        <li>Each step at least halves one of the numbers (on average)</li>
        <li>The worst case occurs with consecutive Fibonacci numbers</li>
      </ul>

      <h3 className="mt-8">Modern Applications</h3>

      <div className="grid md:grid-cols-2 gap-4 mt-4">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold">Cryptography</h4>
          <p className="text-dark-300 text-sm mt-2">
            The Extended Euclidean Algorithm finds modular multiplicative inverses, essential
            for RSA encryption and decryption.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold">Fraction Arithmetic</h4>
          <p className="text-dark-300 text-sm mt-2">
            Reducing fractions to lowest terms requires finding the GCD of numerator and
            denominator.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold">Computer Graphics</h4>
          <p className="text-dark-300 text-sm mt-2">
            Calculating aspect ratios and pixel-perfect scaling often uses GCD computations.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold">Music Theory</h4>
          <p className="text-dark-300 text-sm mt-2">
            Finding rhythm patterns and polyrhythms involves GCD calculations for beat alignment.
          </p>
        </div>
      </div>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-6 border border-dark-700">
        <p className="text-dark-300 text-sm">
          <strong className="text-amber-400">Historical Note:</strong> The Euclidean algorithm
          is the oldest non-trivial algorithm that has been in continuous use. It appears in
          Euclid's <em>Elements</em> around 300 BCE, but likely dates back much further. Despite
          being over two millennia old, it remains one of the most practical algorithms in
          modern computing.
        </p>
      </div>
    </LessonLayout>
  );
}
