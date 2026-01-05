import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section182() {
  return (
    <LessonLayout sectionId={182}>
      <Proposition
        title="Proposition VII.3"
        proof={
          <>
            <p>
              Let <em>A</em>, <em>B</em>, <em>C</em> be three numbers.
            </p>
            <p className="mt-2">
              It is required to find the greatest common measure of <em>A</em>, <em>B</em>, <em>C</em>.
            </p>
            <p className="mt-2">
              Let the greatest common measure of the two numbers <em>A</em>, <em>B</em> be taken,
              and let it be <em>D</em>. [VII.2]
            </p>
            <p className="mt-2">
              Then <em>D</em> either measures <em>C</em>, or does not measure it.
            </p>
            <p className="mt-2">
              First, let it measure it.
            </p>
            <p className="mt-2">
              But it measures <em>A</em>, <em>B</em> also; therefore <em>D</em> measures{' '}
              <em>A</em>, <em>B</em>, <em>C</em>; therefore <em>D</em> is a common measure of{' '}
              <em>A</em>, <em>B</em>, <em>C</em>.
            </p>
            <p className="mt-2">
              I say that it is also the greatest.
            </p>
            <p className="mt-2">
              For, if <em>D</em> is not the greatest common measure of <em>A</em>, <em>B</em>, <em>C</em>,
              some number greater than <em>D</em> will measure the numbers <em>A</em>, <em>B</em>, <em>C</em>.
            </p>
            <p className="mt-2">
              Let such a number measure them, and let it be <em>E</em>.
            </p>
            <p className="mt-2">
              Since then <em>E</em> measures <em>A</em>, <em>B</em>, <em>C</em>, it will also
              measure <em>A</em>, <em>B</em>; therefore it will also measure the greatest common
              measure of <em>A</em>, <em>B</em>. [VII.2, Porism]
            </p>
            <p className="mt-2">
              But the greatest common measure of <em>A</em>, <em>B</em> is <em>D</em>; therefore{' '}
              <em>E</em> measures <em>D</em>, the greater the less: which is impossible.
            </p>
            <p className="mt-2">
              Therefore no number greater than <em>D</em> will measure the numbers <em>A</em>,{' '}
              <em>B</em>, <em>C</em>;
            </p>
            <p className="mt-2">
              therefore <em>D</em> is the greatest common measure of <em>A</em>, <em>B</em>, <em>C</em>.
            </p>
            <p className="mt-2">
              Next, let <em>D</em> not measure <em>C</em>;
            </p>
            <p className="mt-2">
              I say first that <em>C</em>, <em>D</em> are not prime to one another.
            </p>
            <p className="mt-2">
              For, since <em>A</em>, <em>B</em>, <em>C</em> are not prime to one another, some
              number will measure them.
            </p>
            <p className="mt-2">
              But that which measures <em>A</em>, <em>B</em>, <em>C</em> will also measure{' '}
              <em>A</em>, <em>B</em>, and will also measure <em>D</em>, the greatest common
              measure of <em>A</em>, <em>B</em>. [VII.2, Porism]
            </p>
            <p className="mt-2">
              But it also measures <em>C</em>; therefore some number will measure the numbers{' '}
              <em>C</em>, <em>D</em>; therefore <em>C</em>, <em>D</em> are not prime to one another.
            </p>
            <p className="mt-2">
              Let their greatest common measure <em>E</em> be taken. [VII.2]
            </p>
            <p className="mt-2">
              Since then <em>E</em> measures <em>D</em>, and <em>D</em> measures <em>A</em>, <em>B</em>,
              therefore <em>E</em> also measures <em>A</em>, <em>B</em>.
            </p>
            <p className="mt-2">
              But it also measures <em>C</em>; therefore <em>E</em> measures <em>A</em>, <em>B</em>,{' '}
              <em>C</em>; therefore <em>E</em> is a common measure of <em>A</em>, <em>B</em>, <em>C</em>.
            </p>
            <p className="mt-2">
              I say next that it is also the greatest.
            </p>
            <p className="mt-2">
              [By a similar argument to the first case, <em>E</em> is shown to be the greatest.]
            </p>
            <p className="mt-2">
              Therefore <em>E</em> is the greatest common measure of <em>A</em>, <em>B</em>, <em>C</em>.
            </p>
            <p className="mt-2 font-medium">
              Q.E.D.
            </p>
          </>
        }
      >
        <p>
          Given three numbers not prime to one another, to find their greatest common measure.
        </p>
      </Proposition>

      <h2>Extending the Algorithm to Three Numbers</h2>

      <p>
        Proposition VII.3 shows how to extend the Euclidean algorithm to find the GCD of
        <em>three</em> numbers. The key insight is beautifully simple: compute the GCD of
        any two numbers first, then compute the GCD of that result with the third number.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <p className="text-dark-200 font-mono text-center">
          gcd(A, B, C) = gcd(gcd(A, B), C)
        </p>
      </div>

      <h3 className="mt-8">Why This Works</h3>

      <p>
        If <em>d</em> is a common divisor of <em>A</em>, <em>B</em>, and <em>C</em>, then:
      </p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li><em>d</em> divides both <em>A</em> and <em>B</em>, so <em>d</em> divides gcd(<em>A</em>, <em>B</em>)</li>
        <li><em>d</em> divides both gcd(<em>A</em>, <em>B</em>) and <em>C</em></li>
        <li>Therefore <em>d</em> divides gcd(gcd(<em>A</em>, <em>B</em>), <em>C</em>)</li>
      </ul>

      <p className="mt-4">
        Conversely, if <em>d</em> divides gcd(gcd(<em>A</em>, <em>B</em>), <em>C</em>), then <em>d</em>
        divides both gcd(<em>A</em>, <em>B</em>) and <em>C</em>. Since <em>d</em> divides gcd(<em>A</em>, <em>B</em>),
        it divides both <em>A</em> and <em>B</em>. Thus <em>d</em> is a common divisor of all three.
      </p>

      <h3 className="mt-8">Worked Example: gcd(48, 36, 60)</h3>

      <svg viewBox="0 0 500 350" className="w-full max-w-2xl mx-auto mt-4">
        {/* Title */}
        <text x="250" y="25" textAnchor="middle" fill="#f59e0b" fontSize="14" fontWeight="bold">
          Finding gcd(48, 36, 60)
        </text>

        {/* Step 1: Find gcd(48, 36) */}
        <rect x="20" y="40" width="200" height="130" fill="#3b82f6" fillOpacity="0.1" stroke="#3b82f6" strokeWidth="1" rx="8" />
        <text x="120" y="60" textAnchor="middle" fill="#3b82f6" fontSize="12" fontWeight="bold">Step 1: gcd(48, 36)</text>

        <text x="35" y="85" fill="#9ca3af" fontSize="11">48 = 1 x 36 + 12</text>
        <text x="35" y="105" fill="#9ca3af" fontSize="11">36 = 3 x 12 + 0</text>

        <text x="35" y="130" fill="#10b981" fontSize="12" fontWeight="bold">gcd(48, 36) = 12</text>

        {/* Visual for 48 and 36 */}
        <g transform="translate(35, 140)">
          {[...Array(4)].map((_, i) => (
            <g key={`48-${i}`}>
              {[...Array(12)].map((_, j) => (
                <rect key={j} x={j * 6} y={i * 6} width="5" height="5" fill={i < 3 ? "#3b82f6" : "#10b981"} rx="0.5" />
              ))}
            </g>
          ))}
        </g>
        <text x="110" y="155" fill="#9ca3af" fontSize="9">48 = 4 x 12</text>

        {/* Step 2: Find gcd(12, 60) */}
        <rect x="240" y="40" width="240" height="130" fill="#10b981" fillOpacity="0.1" stroke="#10b981" strokeWidth="1" rx="8" />
        <text x="360" y="60" textAnchor="middle" fill="#10b981" fontSize="12" fontWeight="bold">Step 2: gcd(12, 60)</text>

        <text x="255" y="85" fill="#9ca3af" fontSize="11">60 = 5 x 12 + 0</text>
        <text x="255" y="105" fill="#9ca3af" fontSize="11">12 measures 60 exactly!</text>

        <text x="255" y="130" fill="#f59e0b" fontSize="12" fontWeight="bold">gcd(12, 60) = 12</text>

        {/* Visual for 60 */}
        <g transform="translate(255, 140)">
          {[...Array(5)].map((_, i) => (
            <g key={`60-${i}`}>
              {[...Array(12)].map((_, j) => (
                <rect key={j} x={j * 6} y={i * 6} width="5" height="5" fill="#10b981" rx="0.5" />
              ))}
            </g>
          ))}
        </g>
        <text x="310" y="155" fill="#9ca3af" fontSize="9">60 = 5 x 12</text>

        {/* Result */}
        <rect x="100" y="195" width="300" height="50" fill="#f59e0b" fillOpacity="0.1" stroke="#f59e0b" strokeWidth="2" rx="8" />
        <text x="250" y="225" textAnchor="middle" fill="#f59e0b" fontSize="16" fontWeight="bold">
          gcd(48, 36, 60) = 12
        </text>

        {/* Verification */}
        <text x="250" y="270" textAnchor="middle" fill="#9ca3af" fontSize="12">Verification:</text>
        <text x="250" y="290" textAnchor="middle" fill="#9ca3af" fontSize="11">48 = 4 x 12</text>
        <text x="250" y="310" textAnchor="middle" fill="#9ca3af" fontSize="11">36 = 3 x 12</text>
        <text x="250" y="330" textAnchor="middle" fill="#9ca3af" fontSize="11">60 = 5 x 12</text>
      </svg>

      <p className="text-center text-dark-400 text-sm mt-2">
        The GCD is found by applying VII.2 twice in succession
      </p>

      <h3 className="mt-8">Extension to Any Number of Values</h3>

      <p>
        This principle generalizes naturally to any finite collection of numbers:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <p className="text-dark-200 font-mono text-center">
          gcd(a1, a2, ..., an) = gcd(gcd(a1, a2, ..., an-1), an)
        </p>
      </div>

      <p className="mt-4">
        By repeatedly applying Proposition VII.3, we can find the GCD of any list of numbers
        by reducing it one element at a time.
      </p>

      <h3 className="mt-8">The Associative Property</h3>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-4 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Important Property:</strong> The GCD operation
          is both commutative and associative:
        </p>
        <ul className="list-disc list-inside mt-3 space-y-1 text-dark-300">
          <li>gcd(A, B) = gcd(B, A) (commutative)</li>
          <li>gcd(gcd(A, B), C) = gcd(A, gcd(B, C)) (associative)</li>
        </ul>
        <p className="text-dark-200 mt-3">
          This means we can compute the GCD of multiple numbers in any order and get the
          same result---a very useful property for parallel computation.
        </p>
      </div>

      <h3 className="mt-8">Diagram: The Three Numbers as Unit Arrays</h3>

      <svg viewBox="0 0 500 200" className="w-full max-w-2xl mx-auto mt-4">
        {/* Number 48 */}
        <text x="30" y="25" fill="#f59e0b" fontSize="12" fontWeight="bold">A = 48</text>
        <g transform="translate(30, 35)">
          {[...Array(48)].map((_, i) => (
            <rect
              key={i}
              x={(i % 12) * 14}
              y={Math.floor(i / 12) * 14}
              width="12"
              height="12"
              fill="#f59e0b"
              fillOpacity="0.7"
              stroke="#f59e0b"
              strokeWidth="0.5"
              rx="1"
            />
          ))}
        </g>
        <text x="100" y="105" fill="#9ca3af" fontSize="10">48 = 4 x 12</text>

        {/* Number 36 */}
        <text x="210" y="25" fill="#3b82f6" fontSize="12" fontWeight="bold">B = 36</text>
        <g transform="translate(210, 35)">
          {[...Array(36)].map((_, i) => (
            <rect
              key={i}
              x={(i % 12) * 14}
              y={Math.floor(i / 12) * 14}
              width="12"
              height="12"
              fill="#3b82f6"
              fillOpacity="0.7"
              stroke="#3b82f6"
              strokeWidth="0.5"
              rx="1"
            />
          ))}
        </g>
        <text x="280" y="90" fill="#9ca3af" fontSize="10">36 = 3 x 12</text>

        {/* Number 60 */}
        <text x="30" y="130" fill="#10b981" fontSize="12" fontWeight="bold">C = 60</text>
        <g transform="translate(30, 140)">
          {[...Array(60)].map((_, i) => (
            <rect
              key={i}
              x={(i % 12) * 14}
              y={Math.floor(i / 12) * 14}
              width="12"
              height="12"
              fill="#10b981"
              fillOpacity="0.7"
              stroke="#10b981"
              strokeWidth="0.5"
              rx="1"
            />
          ))}
        </g>
        <text x="110" y="195" fill="#9ca3af" fontSize="10">60 = 5 x 12</text>

        {/* GCD Block */}
        <text x="380" y="130" fill="#f59e0b" fontSize="12" fontWeight="bold">GCD = 12</text>
        <g transform="translate(380, 140)">
          {[...Array(12)].map((_, i) => (
            <rect
              key={i}
              x={(i % 4) * 16}
              y={Math.floor(i / 4) * 16}
              width="14"
              height="14"
              fill="#f59e0b"
              stroke="#f59e0b"
              strokeWidth="1"
              rx="2"
            />
          ))}
        </g>
      </svg>

      <p className="text-center text-dark-400 text-sm mt-2">
        Each number can be tiled by blocks of 12 units---the greatest common measure
      </p>

      <h3 className="mt-8">Modern Applications</h3>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>
          <strong>Computer graphics:</strong> Finding common refresh rates for multiple displays
        </li>
        <li>
          <strong>Audio processing:</strong> Synchronizing sample rates across multiple tracks
        </li>
        <li>
          <strong>Scheduling:</strong> Finding common meeting times or cycle alignments
        </li>
        <li>
          <strong>Cryptography:</strong> Checking coprimality conditions in multi-party protocols
        </li>
      </ul>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-6 border border-dark-700">
        <p className="text-dark-300 text-sm">
          <strong className="text-amber-400">Note:</strong> Euclid's proof handles two cases
          separately: when gcd(A,B) already measures C, and when it does not. In the first
          case, gcd(A,B) is immediately the answer. In the second case, we must apply VII.2
          again. Modern formulations combine these into a single statement since the algorithm
          works uniformly in both cases.
        </p>
      </div>
    </LessonLayout>
  );
}
