import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section201() {
  return (
    <LessonLayout sectionId={201}>
      <Proposition
        title="Proposition VII.22"
        proof={
          <>
            <p>
              Let <em>A</em> and <em>B</em> be the least numbers of those which have the
              same ratio with them.
            </p>
            <p className="mt-2">
              I say that <em>A</em> and <em>B</em> are relatively prime.
            </p>
            <p className="mt-2">
              For if they are not relatively prime, some number will measure them.
            </p>
            <p className="mt-2">
              Let <em>C</em> measure them.
            </p>
            <p className="mt-2">
              And as many times as <em>C</em> measures <em>A</em>, so many units are there
              in <em>D</em>, and as many times as <em>C</em> measures <em>B</em>, so many
              units are there in <em>E</em>.
            </p>
            <p className="mt-2">
              Since <em>C</em> measures <em>A</em> according to the units in <em>D</em>,
              therefore <em>C</em> multiplied by <em>D</em> makes <em>A</em>. [VII.Def.15]
            </p>
            <p className="mt-2">
              For the same reason also <em>C</em> multiplied by <em>E</em> makes <em>B</em>.
            </p>
            <p className="mt-2">
              Therefore the number <em>C</em> multiplied by the two numbers <em>D</em>,{' '}
              <em>E</em> has made <em>A</em>, <em>B</em>.
            </p>
            <p className="mt-2">
              Therefore <em>D</em> is to <em>E</em> as <em>A</em> is to <em>B</em>. [VII.17]
            </p>
            <p className="mt-2">
              But <em>D</em> and <em>E</em> are less than <em>A</em> and <em>B</em>.
            </p>
            <p className="mt-2 font-medium">
              But this is impossible, for <em>A</em> and <em>B</em> are by hypothesis the
              least of those having the same ratio with them. Therefore no number will
              measure the numbers <em>A</em> and <em>B</em>. Therefore <em>A</em> and{' '}
              <em>B</em> are relatively prime.
            </p>
          </>
        }
      >
        <p>
          The least numbers of those which have the same ratio with them are relatively
          prime.
        </p>
      </Proposition>

      <h2>Lowest Terms Means Relatively Prime</h2>

      <p>
        This proposition is the converse of VII.21. While VII.21 showed that relatively
        prime numbers are in lowest terms, VII.22 shows the reverse: numbers in lowest
        terms must be relatively prime. Together, these two propositions establish the
        complete equivalence.
      </p>

      <h3 className="mt-6">Modern Statement</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <p className="text-dark-300 text-center mb-2">
          If A and B are the smallest numbers in their ratio (lowest terms), then:
        </p>
        <p className="text-amber-400 font-mono text-xl text-center my-4">
          gcd(A, B) = 1
        </p>
        <p className="text-dark-300 text-center">
          A and B are relatively prime (share no common factor)
        </p>
      </div>

      <h3 className="mt-6">Visual Representation</h3>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 500 300" className="w-full max-w-lg">
          {/* Title */}
          <text x="250" y="25" fill="#f59e0b" fontSize="14" textAnchor="middle" fontWeight="bold">
            If 6 : 9 were in lowest terms...
          </text>

          {/* The fraction 6:9 */}
          <text x="120" y="60" fill="#3b82f6" fontSize="14" textAnchor="middle">
            A = 6
          </text>
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <rect
              key={`a-${i}`}
              x={40 + i * 28}
              y={70}
              width="24"
              height="24"
              fill="#3b82f6"
              fillOpacity="0.3"
              stroke="#3b82f6"
              strokeWidth="2"
              rx="3"
            />
          ))}

          <text x="380" y="60" fill="#22c55e" fontSize="14" textAnchor="middle">
            B = 9
          </text>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <rect
              key={`b-${i}`}
              x={280 + i * 24}
              y={70}
              width="20"
              height="24"
              fill="#22c55e"
              fillOpacity="0.3"
              stroke="#22c55e"
              strokeWidth="2"
              rx="3"
            />
          ))}

          {/* Common factor */}
          <text x="250" y="120" fill="#ec4899" fontSize="12" textAnchor="middle">
            But wait! Both are divisible by 3
          </text>

          {/* Grouping by 3s */}
          <text x="120" y="150" fill="#8b5cf6" fontSize="11" textAnchor="middle">
            6 = 3 &times; 2
          </text>
          {[0, 1].map((i) => (
            <g key={`group-a-${i}`}>
              <rect
                x={55 + i * 70}
                y={160}
                width="60"
                height="30"
                fill="#8b5cf6"
                fillOpacity="0.15"
                stroke="#8b5cf6"
                strokeWidth="2"
                rx="5"
              />
              {[0, 1, 2].map((j) => (
                <rect
                  key={`a2-${i}-${j}`}
                  x={60 + i * 70 + j * 18}
                  y={165}
                  width="14"
                  height="20"
                  fill="#3b82f6"
                  fillOpacity="0.4"
                  stroke="#3b82f6"
                  strokeWidth="1"
                  rx="2"
                />
              ))}
            </g>
          ))}

          <text x="380" y="150" fill="#8b5cf6" fontSize="11" textAnchor="middle">
            9 = 3 &times; 3
          </text>
          {[0, 1, 2].map((i) => (
            <g key={`group-b-${i}`}>
              <rect
                x={290 + i * 60}
                y={160}
                width="50"
                height="30"
                fill="#8b5cf6"
                fillOpacity="0.15"
                stroke="#8b5cf6"
                strokeWidth="2"
                rx="5"
              />
              {[0, 1, 2].map((j) => (
                <rect
                  key={`b2-${i}-${j}`}
                  x={294 + i * 60 + j * 15}
                  y={165}
                  width="11"
                  height="20"
                  fill="#22c55e"
                  fillOpacity="0.4"
                  stroke="#22c55e"
                  strokeWidth="1"
                  rx="2"
                />
              ))}
            </g>
          ))}

          {/* Smaller ratio */}
          <text x="250" y="220" fill="#f59e0b" fontSize="12" textAnchor="middle">
            This gives a SMALLER ratio with same proportion:
          </text>

          {/* 2:3 */}
          <text x="150" y="250" fill="#3b82f6" fontSize="16" textAnchor="middle">
            D = 2
          </text>
          {[0, 1].map((i) => (
            <rect
              key={`d-${i}`}
              x={110 + i * 40}
              y={258}
              width="30"
              height="25"
              fill="#3b82f6"
              fillOpacity="0.5"
              stroke="#3b82f6"
              strokeWidth="2"
              rx="3"
            />
          ))}

          <text x="250" y="275" fill="#6b7280" fontSize="16" textAnchor="middle">
            :
          </text>

          <text x="350" y="250" fill="#22c55e" fontSize="16" textAnchor="middle">
            E = 3
          </text>
          {[0, 1, 2].map((i) => (
            <rect
              key={`e-${i}`}
              x={300 + i * 35}
              y={258}
              width="28"
              height="25"
              fill="#22c55e"
              fillOpacity="0.5"
              stroke="#22c55e"
              strokeWidth="2"
              rx="3"
            />
          ))}

          {/* Conclusion */}
          <text x="250" y="298" fill="#ef4444" fontSize="11" textAnchor="middle">
            2 : 3 &lt; 6 : 9, so 6 : 9 was NOT in lowest terms!
          </text>
        </svg>
      </div>

      <h3 className="mt-6">Proof by Contradiction</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <p className="text-dark-300 mb-3">
          Euclid's proof works by contradiction:
        </p>
        <ol className="list-decimal list-inside space-y-3 text-dark-300">
          <li>
            Suppose A and B are the least (smallest) numbers in their ratio
          </li>
          <li>
            Assume they are NOT relatively prime, so some C &gt; 1 divides both
          </li>
          <li>
            Let D = A/C and E = B/C
          </li>
          <li>
            Since A = C &times; D and B = C &times; E, by VII.17: D : E = A : B
          </li>
          <li>
            But D &lt; A and E &lt; B (since C &gt; 1)
          </li>
          <li>
            This contradicts A and B being the smallest in their ratio!
          </li>
          <li>
            Therefore A and B must be relatively prime
          </li>
        </ol>
      </div>

      <h3 className="mt-6">The Complete Equivalence</h3>

      <div className="bg-gradient-to-br from-blue-500/10 to-dark-800/50 rounded-xl p-6 mt-4 border border-blue-500/20">
        <p className="text-dark-200 mb-4">
          Combining VII.21 and VII.22, we have:
        </p>
        <p className="text-amber-400 font-mono text-lg text-center my-4">
          A : B in lowest terms &hArr; gcd(A, B) = 1
        </p>
        <div className="mt-4 space-y-2 text-dark-300">
          <p><strong>VII.21:</strong> Relatively prime &rArr; Lowest terms</p>
          <p><strong>VII.22:</strong> Lowest terms &rArr; Relatively prime</p>
        </div>
        <p className="text-dark-300 mt-4">
          This gives us a simple test: a fraction is in lowest terms if and only if
          the gcd of numerator and denominator is 1.
        </p>
      </div>

      <h3 className="mt-6">Practical Applications</h3>

      <div className="grid md:grid-cols-2 gap-4 mt-4">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold mb-2">Testing Lowest Terms</h4>
          <p className="text-dark-300 text-sm">
            Is 35/49 in lowest terms?
          </p>
          <p className="text-dark-300 text-sm mt-2">
            Compute gcd(35, 49) = 7
          </p>
          <p className="text-dark-300 text-sm mt-2">
            Since gcd is not 1, it is NOT in lowest terms
          </p>
          <p className="text-dark-300 text-sm mt-2">
            35/49 = 5/7
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold mb-2">Confirming Lowest Terms</h4>
          <p className="text-dark-300 text-sm">
            Is 17/31 in lowest terms?
          </p>
          <p className="text-dark-300 text-sm mt-2">
            Compute gcd(17, 31) = 1
          </p>
          <p className="text-dark-300 text-sm mt-2">
            Since gcd = 1, it IS in lowest terms
          </p>
          <p className="text-dark-300 text-sm mt-2">
            Cannot be simplified further
          </p>
        </div>
      </div>

      <h3 className="mt-6">Key Dependencies</h3>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>
          <strong className="text-amber-400">VII.Def.12:</strong> Definition of relatively
          prime numbers
        </li>
        <li>
          <strong className="text-amber-400">VII.Def.15:</strong> Definition of multiplication
        </li>
        <li>
          <strong className="text-amber-400">VII.17:</strong> Products with common first
          factor preserve ratios
        </li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">The Euclidean Algorithm:</strong> This result
          explains why the Euclidean Algorithm (from VII.1-2) is so useful: it computes
          the gcd, which tells us both whether a fraction is in lowest terms and, if not,
          what common factor to divide by. The algorithm for reducing fractions to lowest
          terms is simply: divide both numerator and denominator by their gcd.
        </p>
      </div>
    </LessonLayout>
  );
}
