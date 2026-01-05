import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section180() {
  return (
    <LessonLayout sectionId={180}>
      <Proposition
        title="Proposition VII.1"
        proof={
          <>
            <p>
              Let <em>AB</em>, <em>CD</em> be two unequal numbers, and let <em>AB</em> be the less.
            </p>
            <p className="mt-2">
              I say that either <em>AB</em> measures <em>CD</em>, or the process of continually
              subtracting the less from the greater will eventually leave a number that measures
              the one before it.
            </p>
            <p className="mt-2">
              For <em>AB</em> either measures <em>CD</em> or it does not. If it measures <em>CD</em>,
              then we have proved what was required.
            </p>
            <p className="mt-2">
              But if not, when the less is continually subtracted from the greater, some number will
              eventually be left which measures the one before it.
            </p>
            <p className="mt-2">
              For if a unit is not left, this process cannot continue indefinitely. For every
              subtraction produces a number less than the previous remainder. Since the numbers are
              finite, this process must terminate.
            </p>
            <p className="mt-2">
              And when it terminates, the final remainder must measure the one before it. For if
              the last non-zero remainder does not measure the previous remainder, then the process
              would continue further, which contradicts the assumption that it has terminated.
            </p>
            <p className="mt-2 font-medium">
              Being what it was required to prove.
            </p>
          </>
        }
      >
        <p>
          Two unequal numbers being set out, and the less being continually subtracted in turn
          from the greater, if the number which is left never measures the one before it until
          a unit is left, the original numbers will be prime to one another.
        </p>
      </Proposition>

      <h2>The Test for Relatively Prime Numbers</h2>

      <p>
        This proposition establishes the foundation for the <strong>Euclidean algorithm</strong>.
        It provides a method to determine whether two numbers are "prime to one another"
        (relatively prime, or coprime)---that is, whether their only common divisor is 1.
      </p>

      <h3 className="mt-6">The Algorithm</h3>

      <p className="mt-2">
        The procedure works as follows: given two numbers, repeatedly subtract the smaller from
        the larger until you cannot subtract anymore without getting a negative result. Then
        switch: the remainder becomes the new larger number, and continue the process.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <p className="text-dark-200">
          <strong className="text-amber-400">Key Insight:</strong> If this process eventually
          leaves a <em>unit</em> (the number 1), then the original numbers are relatively prime.
          If it leaves a number greater than 1, that number is a common divisor.
        </p>
      </div>

      <h3 className="mt-6">Example: Testing 17 and 5</h3>

      <svg viewBox="0 0 450 280" className="w-full max-w-xl mx-auto mt-4">
        {/* Step 1: 17 and 5 */}
        <text x="20" y="25" fill="#f59e0b" fontSize="12" fontWeight="bold">Step 1:</text>
        <text x="80" y="25" fill="#9ca3af" fontSize="11">17 - 5 = 12</text>

        {/* 17 units */}
        <g transform="translate(20, 35)">
          {[...Array(17)].map((_, i) => (
            <rect key={i} x={i * 20} y="0" width="18" height="12" fill={i < 5 ? "#ef4444" : "#10b981"} rx="1" />
          ))}
        </g>
        <text x="380" y="47" fill="#9ca3af" fontSize="10">17</text>
        <text x="20" y="65" fill="#ef4444" fontSize="10">5</text>
        <text x="120" y="65" fill="#10b981" fontSize="10">12 remains</text>

        {/* Step 2: 12 and 5 */}
        <text x="20" y="90" fill="#f59e0b" fontSize="12" fontWeight="bold">Step 2:</text>
        <text x="80" y="90" fill="#9ca3af" fontSize="11">12 - 5 = 7</text>

        <g transform="translate(20, 100)">
          {[...Array(12)].map((_, i) => (
            <rect key={i} x={i * 20} y="0" width="18" height="12" fill={i < 5 ? "#ef4444" : "#10b981"} rx="1" />
          ))}
        </g>
        <text x="260" y="112" fill="#9ca3af" fontSize="10">12</text>
        <text x="120" y="130" fill="#10b981" fontSize="10">7 remains</text>

        {/* Step 3: 7 and 5 */}
        <text x="20" y="155" fill="#f59e0b" fontSize="12" fontWeight="bold">Step 3:</text>
        <text x="80" y="155" fill="#9ca3af" fontSize="11">7 - 5 = 2</text>

        <g transform="translate(20, 165)">
          {[...Array(7)].map((_, i) => (
            <rect key={i} x={i * 20} y="0" width="18" height="12" fill={i < 5 ? "#ef4444" : "#10b981"} rx="1" />
          ))}
        </g>
        <text x="160" y="177" fill="#9ca3af" fontSize="10">7</text>
        <text x="120" y="195" fill="#10b981" fontSize="10">2 remains</text>

        {/* Step 4: 5 and 2 (switch) */}
        <text x="20" y="220" fill="#f59e0b" fontSize="12" fontWeight="bold">Step 4:</text>
        <text x="80" y="220" fill="#9ca3af" fontSize="11">5 - 2 = 3, then 3 - 2 = 1</text>

        <g transform="translate(20, 230)">
          {[...Array(5)].map((_, i) => (
            <rect key={i} x={i * 20} y="0" width="18" height="12" fill={i < 2 ? "#ef4444" : i < 4 ? "#3b82f6" : "#f59e0b"} rx="1" />
          ))}
        </g>
        <text x="140" y="260" fill="#f59e0b" fontSize="11" fontWeight="bold">1 remains - Numbers are relatively prime!</text>
      </svg>

      <p className="text-center text-dark-400 text-sm mt-2">
        The process terminates with 1, proving that 17 and 5 have no common divisor other than 1
      </p>

      <h3 className="mt-8">Example: Testing 24 and 18 (Not Relatively Prime)</h3>

      <svg viewBox="0 0 450 220" className="w-full max-w-xl mx-auto mt-4">
        {/* Step 1: 24 - 18 = 6 */}
        <text x="20" y="25" fill="#f59e0b" fontSize="12" fontWeight="bold">Step 1:</text>
        <text x="80" y="25" fill="#9ca3af" fontSize="11">24 - 18 = 6</text>

        <g transform="translate(20, 35)">
          {[...Array(24)].map((_, i) => (
            <rect key={i} x={i * 16} y="0" width="14" height="12" fill={i < 18 ? "#ef4444" : "#10b981"} rx="1" />
          ))}
        </g>
        <text x="20" y="65" fill="#ef4444" fontSize="10">18</text>
        <text x="310" y="65" fill="#10b981" fontSize="10">6 remains</text>

        {/* Step 2: 18 - 6 = 12 */}
        <text x="20" y="90" fill="#f59e0b" fontSize="12" fontWeight="bold">Step 2:</text>
        <text x="80" y="90" fill="#9ca3af" fontSize="11">18 - 6 = 12, then 12 - 6 = 6</text>

        <g transform="translate(20, 100)">
          {[...Array(18)].map((_, i) => (
            <rect key={i} x={i * 16} y="0" width="14" height="12" fill={i < 6 ? "#ef4444" : i < 12 ? "#3b82f6" : "#10b981"} rx="1" />
          ))}
        </g>
        <text x="210" y="130" fill="#10b981" fontSize="10">6 remains</text>

        {/* Step 3: 6 and 6 */}
        <text x="20" y="155" fill="#f59e0b" fontSize="12" fontWeight="bold">Step 3:</text>
        <text x="80" y="155" fill="#9ca3af" fontSize="11">6 - 6 = 0</text>

        <g transform="translate(20, 165)">
          {[...Array(6)].map((_, i) => (
            <rect key={i} x={i * 16} y="0" width="14" height="12" fill="#ef4444" rx="1" />
          ))}
        </g>
        <text x="140" y="200" fill="#ef4444" fontSize="11" fontWeight="bold">6 measures 6 exactly - GCD = 6, not relatively prime</text>
      </svg>

      <p className="text-center text-dark-400 text-sm mt-2">
        The process terminates with 6, showing that 24 and 18 share a common divisor of 6
      </p>

      <h3 className="mt-8">Why This Works</h3>

      <p>
        The key insight is that <strong>common divisors are preserved under subtraction</strong>.
        If a number <em>d</em> divides both <em>a</em> and <em>b</em>, then <em>d</em> also
        divides their difference <em>a - b</em>.
      </p>

      <p className="mt-4">
        Conversely, if <em>d</em> divides both <em>b</em> and <em>a - b</em>, then <em>d</em>
        divides <em>a</em>. Therefore, the set of common divisors remains unchanged throughout
        the subtraction process.
      </p>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Mathematical Principle:</strong> For any integers
          a and b with a &gt; b &gt; 0:
        </p>
        <p className="text-dark-300 mt-2 font-mono">
          gcd(a, b) = gcd(b, a - b) = gcd(b, a mod b)
        </p>
        <p className="text-dark-200 mt-2">
          This is the fundamental identity underlying the Euclidean algorithm. Repeated subtraction
          is equivalent to the modern modulo operation.
        </p>
      </div>

      <h3 className="mt-8">Connection to Proposition VII.2</h3>

      <p>
        This proposition sets up the algorithm; the next proposition (VII.2) uses it to actually
        <em>find</em> the greatest common divisor when numbers are not relatively prime. Together,
        these two propositions form the complete Euclidean algorithm.
      </p>

      <h3 className="mt-8">Modern Applications</h3>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>
          <strong>Cryptography:</strong> Testing coprimality is essential in RSA encryption,
          where we need numbers relatively prime to Euler's totient
        </li>
        <li>
          <strong>Fraction reduction:</strong> Fractions a/b are in lowest terms precisely
          when gcd(a, b) = 1
        </li>
        <li>
          <strong>Modular arithmetic:</strong> Multiplicative inverses exist mod n only for
          numbers coprime to n
        </li>
        <li>
          <strong>Computer science:</strong> The algorithm runs in O(log(min(a,b))) steps,
          making it extremely efficient
        </li>
      </ul>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-6 border border-dark-700">
        <p className="text-dark-300 text-sm">
          <strong className="text-amber-400">Historical Note:</strong> This algorithm is one
          of the oldest in mathematics, predating Euclid by centuries. It appears in ancient
          Babylonian mathematics and was likely known to earlier Greek mathematicians. Euclid's
          contribution was to provide a rigorous proof of its correctness.
        </p>
      </div>
    </LessonLayout>
  );
}
