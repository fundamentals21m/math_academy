import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section195() {
  return (
    <LessonLayout sectionId={195}>
      <Proposition
        title="Proposition VII.16"
        proof={
          <>
            <p>
              Let <em>A</em> and <em>B</em> be two numbers.
            </p>
            <p className="mt-2">
              I say that the product of <em>A</em> and <em>B</em> equals the product of{' '}
              <em>B</em> and <em>A</em>.
            </p>
            <p className="mt-2">
              For let the product of <em>A</em> and <em>B</em> be <em>C</em>, and let the
              product of <em>B</em> and <em>A</em> be <em>D</em>.
            </p>
            <p className="mt-2">
              Since <em>A</em> multiplied by <em>B</em> makes <em>C</em>, therefore <em>B</em>{' '}
              measures <em>C</em> according to the units in <em>A</em>. [VII.Def.15]
            </p>
            <p className="mt-2">
              But the unit also measures <em>A</em> according to the units in it.
            </p>
            <p className="mt-2">
              Therefore the unit measures <em>A</em> the same number of times that <em>B</em>{' '}
              measures <em>C</em>.
            </p>
            <p className="mt-2">
              Therefore, alternately, the unit measures <em>B</em> the same number of times
              that <em>A</em> measures <em>C</em>. [VII.15]
            </p>
            <p className="mt-2">
              Again, since <em>B</em> multiplied by <em>A</em> makes <em>D</em>, therefore{' '}
              <em>A</em> measures <em>D</em> according to the units in <em>B</em>. [VII.Def.15]
            </p>
            <p className="mt-2">
              But the unit also measures <em>B</em> according to the units in it.
            </p>
            <p className="mt-2">
              Therefore the unit measures <em>B</em> the same number of times that <em>A</em>{' '}
              measures <em>D</em>.
            </p>
            <p className="mt-2">
              But the unit was shown to measure <em>B</em> the same number of times that{' '}
              <em>A</em> measures <em>C</em>.
            </p>
            <p className="mt-2">
              Therefore <em>A</em> measures each of <em>C</em> and <em>D</em> the same number
              of times.
            </p>
            <p className="mt-2 font-medium">
              Therefore <em>C</em> equals <em>D</em>, that is, the product of <em>A</em> and{' '}
              <em>B</em> equals the product of <em>B</em> and <em>A</em>.
            </p>
          </>
        }
      >
        <p>
          If two numbers multiplied by one another make certain numbers, the numbers so
          produced equal one another.
        </p>
      </Proposition>

      <h2>Commutativity of Multiplication</h2>

      <p>
        This proposition establishes one of the most fundamental properties of arithmetic:
        multiplication is <strong>commutative</strong>. The order in which we multiply two
        numbers does not affect the result.
      </p>

      <h3 className="mt-6">Modern Statement</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <p className="text-amber-400 font-mono text-xl text-center my-4">
          a &times; b = b &times; a
        </p>
        <p className="text-dark-300 text-center">
          For all positive integers a and b
        </p>
      </div>

      <h3 className="mt-6">Visual Representation</h3>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 500 240" className="w-full max-w-lg">
          {/* Title */}
          <text x="250" y="20" fill="#f59e0b" fontSize="14" textAnchor="middle" fontWeight="bold">
            3 &times; 4 = 4 &times; 3
          </text>

          {/* Left grid: 3 rows of 4 */}
          <text x="110" y="50" fill="#3b82f6" fontSize="12" textAnchor="middle">
            3 rows of 4
          </text>
          {[0, 1, 2].map((row) =>
            [0, 1, 2, 3].map((col) => (
              <rect
                key={`left-${row}-${col}`}
                x={30 + col * 40}
                y={60 + row * 40}
                width="35"
                height="35"
                fill="#3b82f6"
                fillOpacity="0.3"
                stroke="#3b82f6"
                strokeWidth="2"
                rx="4"
              />
            ))
          )}
          {/* Count label */}
          <text x="110" y="200" fill="#3b82f6" fontSize="14" textAnchor="middle">
            = 12 units
          </text>

          {/* Equals sign */}
          <text x="250" y="120" fill="#f59e0b" fontSize="24" textAnchor="middle">
            =
          </text>

          {/* Right grid: 4 rows of 3 */}
          <text x="390" y="50" fill="#22c55e" fontSize="12" textAnchor="middle">
            4 rows of 3
          </text>
          {[0, 1, 2, 3].map((row) =>
            [0, 1, 2].map((col) => (
              <rect
                key={`right-${row}-${col}`}
                x={310 + col * 40}
                y={60 + row * 40}
                width="35"
                height="35"
                fill="#22c55e"
                fillOpacity="0.3"
                stroke="#22c55e"
                strokeWidth="2"
                rx="4"
              />
            ))
          )}
          {/* Count label */}
          <text x="390" y="220" fill="#22c55e" fontSize="14" textAnchor="middle">
            = 12 units
          </text>
        </svg>
      </div>

      <h3 className="mt-6">Euclid's Proof Strategy</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <p className="text-dark-300 mb-3">
          Euclid's approach uses the definition of multiplication and VII.15 (alternation
          of proportions for numbers):
        </p>
        <ol className="list-decimal list-inside space-y-3 text-dark-300">
          <li>
            Let C = A &times; B and D = B &times; A
          </li>
          <li>
            By definition, A &times; B means adding B to itself A times
          </li>
          <li>
            So B measures C exactly A times (the unit measures A, A times)
          </li>
          <li>
            By alternation (VII.15): A measures C the same number of times that
            the unit measures B
          </li>
          <li>
            Similarly, A measures D exactly B times
          </li>
          <li>
            But A measures C exactly B times too (from step 4)
          </li>
          <li>
            Since A measures both C and D the same number of times, C = D
          </li>
        </ol>
      </div>

      <h3 className="mt-6">Why This Matters</h3>

      <p>
        Today we take commutativity for granted, but Euclid proves it from first principles.
        This proposition shows that the Greek conception of multiplication as "repeated
        addition" does yield the same result regardless of which factor is used as the
        multiplier.
      </p>

      <div className="grid md:grid-cols-2 gap-4 mt-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold mb-2">Greek Interpretation</h4>
          <p className="text-dark-300 text-sm">
            A &times; B = "B added to itself A times"
          </p>
          <p className="text-dark-400 text-sm mt-2">
            B &times; A = "A added to itself B times"
          </p>
          <p className="text-dark-400 text-sm mt-2">
            These look different, but yield the same result.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold mb-2">Geometric View</h4>
          <p className="text-dark-300 text-sm">
            A &times; B = area of rectangle with sides A and B
          </p>
          <p className="text-dark-400 text-sm mt-2">
            Rotating the rectangle 90 degrees gives the same area, showing B &times; A = A &times; B.
          </p>
        </div>
      </div>

      <h3 className="mt-6">Key Dependencies</h3>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>
          <strong className="text-amber-400">VII.Def.15:</strong> Definition of multiplication
          as repeated addition
        </li>
        <li>
          <strong className="text-amber-400">VII.15:</strong> Alternation of proportions for
          numbers (if a : b = c : d, then a : c = b : d)
        </li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Modern Applications:</strong> Commutativity is
          essential in algebra, allowing us to rearrange terms. Matrix multiplication, by
          contrast, is famously <em>not</em> commutative (AB is generally not equal to BA),
          which is why this property must be proven for ordinary numbers rather than assumed.
        </p>
      </div>
    </LessonLayout>
  );
}
