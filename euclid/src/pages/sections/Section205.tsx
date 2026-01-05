import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section205() {
  return (
    <LessonLayout sectionId={205}>
      <Proposition
        title="Proposition VII.26"
        proof={
          <>
            <p>
              Let <em>A</em> and <em>B</em> be two numbers relatively prime to each of
              two numbers <em>C</em> and <em>D</em>.
            </p>
            <p className="mt-2">
              I say that the product of <em>A</em> and <em>B</em> is relatively prime
              to the product of <em>C</em> and <em>D</em>.
            </p>
            <p className="mt-2">
              For since <em>A</em> is relatively prime to <em>C</em>, and <em>A</em>{' '}
              is relatively prime to <em>D</em>, therefore the product of <em>A</em>{' '}
              by <em>A</em> is relatively prime to both <em>C</em> and <em>D</em>. [VII.24]
            </p>
            <p className="mt-2">
              But wait, we need the product of <em>A</em> and <em>B</em>. Since{' '}
              <em>A</em> is relatively prime to <em>C</em>, and <em>B</em> is relatively
              prime to <em>C</em>, therefore <em>A</em> times <em>B</em> is relatively
              prime to <em>C</em>. [VII.24]
            </p>
            <p className="mt-2">
              Similarly, since <em>A</em> is relatively prime to <em>D</em>, and{' '}
              <em>B</em> is relatively prime to <em>D</em>, therefore <em>A</em> times{' '}
              <em>B</em> is relatively prime to <em>D</em>. [VII.24]
            </p>
            <p className="mt-2">
              So <em>A</em> times <em>B</em> is relatively prime to both <em>C</em>{' '}
              and <em>D</em>.
            </p>
            <p className="mt-2 font-medium">
              Therefore <em>A</em> times <em>B</em> is relatively prime to <em>C</em>{' '}
              times <em>D</em>. [VII.24]
            </p>
          </>
        }
      >
        <p>
          If two numbers are relatively prime to each of two numbers, their products
          are also relatively prime to one another.
        </p>
      </Proposition>

      <h2>Products of Coprime Pairs</h2>

      <p>
        This proposition generalizes VII.24 and VII.25. If we have two pairs of numbers
        where each number in the first pair is coprime to each number in the second pair,
        then the product of the first pair is coprime to the product of the second pair.
      </p>

      <h3 className="mt-6">Modern Algebraic Statement</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700 text-center">
        <p className="text-dark-300 mb-2">If:</p>
        <p className="text-amber-400 font-mono">
          gcd(A, C) = gcd(A, D) = gcd(B, C) = gcd(B, D) = 1
        </p>
        <p className="text-dark-300 my-2">Then:</p>
        <p className="text-amber-400 font-mono text-lg">
          gcd(A x B, C x D) = 1
        </p>
      </div>

      <h3 className="mt-6">Visual Representation</h3>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 420 320" className="w-full max-w-lg">
          {/* Title */}
          <text x="210" y="25" fill="#f59e0b" fontSize="13" fontWeight="bold" textAnchor="middle">
            Products of Coprime Pairs
          </text>

          {/* First pair: A and B */}
          <rect x="40" y="50" width="60" height="35" rx="6" fill="#3b82f6" fillOpacity="0.2" stroke="#3b82f6" strokeWidth="2" />
          <text x="70" y="73" fill="#3b82f6" fontSize="14" fontWeight="bold" textAnchor="middle">A = 3</text>

          <rect x="120" y="50" width="60" height="35" rx="6" fill="#3b82f6" fillOpacity="0.2" stroke="#3b82f6" strokeWidth="2" />
          <text x="150" y="73" fill="#3b82f6" fontSize="14" fontWeight="bold" textAnchor="middle">B = 5</text>

          {/* Second pair: C and D */}
          <rect x="240" y="50" width="60" height="35" rx="6" fill="#22c55e" fillOpacity="0.2" stroke="#22c55e" strokeWidth="2" />
          <text x="270" y="73" fill="#22c55e" fontSize="14" fontWeight="bold" textAnchor="middle">C = 7</text>

          <rect x="320" y="50" width="60" height="35" rx="6" fill="#22c55e" fillOpacity="0.2" stroke="#22c55e" strokeWidth="2" />
          <text x="350" y="73" fill="#22c55e" fontSize="14" fontWeight="bold" textAnchor="middle">D = 11</text>

          {/* Cross-connections showing all pairs are coprime */}
          <line x1="100" y1="85" x2="240" y2="85" stroke="#f59e0b" strokeWidth="1" strokeDasharray="4" />
          <line x1="100" y1="85" x2="320" y2="85" stroke="#f59e0b" strokeWidth="1" strokeDasharray="4" />
          <line x1="180" y1="85" x2="240" y2="85" stroke="#f59e0b" strokeWidth="1" strokeDasharray="4" />
          <line x1="180" y1="85" x2="320" y2="85" stroke="#f59e0b" strokeWidth="1" strokeDasharray="4" />

          {/* Labels for coprimality */}
          <text x="210" y="110" fill="#f59e0b" fontSize="10" textAnchor="middle">
            All pairs coprime
          </text>

          {/* Products */}
          <rect x="60" y="140" width="100" height="40" rx="8" fill="#8b5cf6" fillOpacity="0.2" stroke="#8b5cf6" strokeWidth="2" />
          <text x="110" y="165" fill="#8b5cf6" fontSize="14" fontWeight="bold" textAnchor="middle">A x B = 15</text>

          <rect x="260" y="140" width="100" height="40" rx="8" fill="#ec4899" fillOpacity="0.2" stroke="#ec4899" strokeWidth="2" />
          <text x="310" y="165" fill="#ec4899" fontSize="14" fontWeight="bold" textAnchor="middle">C x D = 77</text>

          {/* Arrows showing multiplication */}
          <path d="M 70 85 L 90 140" fill="none" stroke="#6b7280" strokeWidth="1" />
          <path d="M 150 85 L 130 140" fill="none" stroke="#6b7280" strokeWidth="1" />
          <path d="M 270 85 L 290 140" fill="none" stroke="#6b7280" strokeWidth="1" />
          <path d="M 350 85 L 330 140" fill="none" stroke="#6b7280" strokeWidth="1" />

          {/* Result */}
          <path d="M 160 160 L 260 160" fill="none" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrow)" />
          <text x="210" y="155" fill="#f59e0b" fontSize="11" fontWeight="bold" textAnchor="middle">
            coprime!
          </text>

          {/* Prime factorizations */}
          <text x="110" y="200" fill="#8b5cf6" fontSize="11" textAnchor="middle">
            15 = 3 x 5
          </text>
          <text x="310" y="200" fill="#ec4899" fontSize="11" textAnchor="middle">
            77 = 7 x 11
          </text>

          {/* No common factors visualization */}
          <rect x="60" y="220" width="120" height="50" rx="6" fill="#3b82f6" fillOpacity="0.1" stroke="#3b82f6" strokeWidth="1" />
          <text x="120" y="245" fill="#3b82f6" fontSize="12" textAnchor="middle">Primes: 3, 5</text>

          <rect x="240" y="220" width="120" height="50" rx="6" fill="#22c55e" fillOpacity="0.1" stroke="#22c55e" strokeWidth="1" />
          <text x="300" y="245" fill="#22c55e" fontSize="12" textAnchor="middle">Primes: 7, 11</text>

          <text x="210" y="260" fill="#6b7280" fontSize="10" textAnchor="middle">
            No overlap
          </text>

          {/* Conclusion */}
          <rect x="120" y="285" width="180" height="30" rx="6" fill="#22c55e" fillOpacity="0.2" stroke="#22c55e" strokeWidth="2" />
          <text x="210" y="305" fill="#22c55e" fontSize="12" fontWeight="bold" textAnchor="middle">
            gcd(15, 77) = 1
          </text>
        </svg>
      </div>

      <h3 className="mt-6">Detailed Example</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <p className="text-dark-300 mb-3">
          Let A = 6, B = 35, C = 11, D = 13:
        </p>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="text-dark-300 text-sm">
            <p>A = 6 = 2 x 3</p>
            <p>B = 35 = 5 x 7</p>
          </div>
          <div className="text-dark-300 text-sm">
            <p>C = 11 (prime)</p>
            <p>D = 13 (prime)</p>
          </div>
        </div>
        <p className="text-dark-300 mb-2">Check all pairs:</p>
        <ul className="list-disc list-inside space-y-1 text-dark-300 text-sm">
          <li>gcd(6, 11) = 1, gcd(6, 13) = 1</li>
          <li>gcd(35, 11) = 1, gcd(35, 13) = 1</li>
        </ul>
        <p className="text-amber-400 mt-4">
          Products: A x B = 210 = 2 x 3 x 5 x 7 and C x D = 143 = 11 x 13
        </p>
        <p className="text-amber-400">
          gcd(210, 143) = 1 (no common prime factors)
        </p>
      </div>

      <h3 className="mt-6">Proof Structure</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <p className="text-dark-300 mb-3">
          The proof applies VII.24 three times:
        </p>
        <ol className="list-decimal list-inside space-y-3 text-dark-300">
          <li>
            <strong>First application:</strong> Since gcd(A, C) = 1 and gcd(B, C) = 1,
            we get gcd(AB, C) = 1
          </li>
          <li>
            <strong>Second application:</strong> Since gcd(A, D) = 1 and gcd(B, D) = 1,
            we get gcd(AB, D) = 1
          </li>
          <li>
            <strong>Third application:</strong> Since gcd(AB, C) = 1 and gcd(AB, D) = 1,
            we get gcd(AB, CD) = 1
          </li>
        </ol>
      </div>

      <h3 className="mt-6">The Four Coprimality Conditions</h3>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 300 200" className="w-full max-w-sm">
          {/* Four numbers as corners */}
          <circle cx="60" cy="60" r="25" fill="#3b82f6" fillOpacity="0.2" stroke="#3b82f6" strokeWidth="2" />
          <text x="60" y="65" fill="#3b82f6" fontSize="14" fontWeight="bold" textAnchor="middle">A</text>

          <circle cx="150" cy="60" r="25" fill="#3b82f6" fillOpacity="0.2" stroke="#3b82f6" strokeWidth="2" />
          <text x="150" y="65" fill="#3b82f6" fontSize="14" fontWeight="bold" textAnchor="middle">B</text>

          <circle cx="60" cy="140" r="25" fill="#22c55e" fillOpacity="0.2" stroke="#22c55e" strokeWidth="2" />
          <text x="60" y="145" fill="#22c55e" fontSize="14" fontWeight="bold" textAnchor="middle">C</text>

          <circle cx="150" cy="140" r="25" fill="#22c55e" fillOpacity="0.2" stroke="#22c55e" strokeWidth="2" />
          <text x="150" y="145" fill="#22c55e" fontSize="14" fontWeight="bold" textAnchor="middle">D</text>

          {/* The four coprimality edges (diagonals and verticals) */}
          <line x1="60" y1="85" x2="60" y2="115" stroke="#f59e0b" strokeWidth="2" />
          <line x1="150" y1="85" x2="150" y2="115" stroke="#f59e0b" strokeWidth="2" />
          <line x1="85" y1="75" x2="125" y2="125" stroke="#f59e0b" strokeWidth="2" />
          <line x1="85" y1="125" x2="125" y2="75" stroke="#f59e0b" strokeWidth="2" />

          {/* Labels */}
          <text x="220" y="50" fill="#f59e0b" fontSize="10">A-C coprime</text>
          <text x="220" y="70" fill="#f59e0b" fontSize="10">A-D coprime</text>
          <text x="220" y="90" fill="#f59e0b" fontSize="10">B-C coprime</text>
          <text x="220" y="110" fill="#f59e0b" fontSize="10">B-D coprime</text>

          {/* Result */}
          <text x="105" y="190" fill="#22c55e" fontSize="11" fontWeight="bold" textAnchor="middle">
            AB and CD coprime
          </text>
        </svg>
      </div>

      <h3 className="mt-6">Key Dependencies</h3>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>
          <strong className="text-amber-400">VII.24:</strong> Products of coprime
          numbers remain coprime to a third
        </li>
      </ul>

      <h3 className="mt-6">Connection to VII.25</h3>

      <div className="bg-gradient-to-br from-blue-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-blue-500/20">
        <p className="text-dark-200">
          <strong className="text-blue-400">Special Case:</strong> VII.25 (squares of
          coprime numbers are coprime) is a special case of VII.26 where A = B and C = D.
          If gcd(A, C) = 1, then all four conditions of VII.26 are satisfied with A = B
          and C = D, giving gcd(A², C²) = 1.
        </p>
      </div>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Algebraic Structure:</strong> This proposition
          reveals that relative primality is compatible with the multiplicative structure
          of integers. When we have two "coprime sets" of numbers (where every element of
          one set is coprime to every element of the other), the products within each set
          remain coprime. This is foundational for understanding the structure of the
          multiplicative group of integers modulo n.
        </p>
      </div>
    </LessonLayout>
  );
}
