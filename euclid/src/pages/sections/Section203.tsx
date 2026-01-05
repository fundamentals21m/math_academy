import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section203() {
  return (
    <LessonLayout sectionId={203}>
      <Proposition
        title="Proposition VII.24"
        proof={
          <>
            <p>
              Let <em>A</em> and <em>B</em> be two numbers relatively prime to any number{' '}
              <em>C</em>.
            </p>
            <p className="mt-2">
              I say that the product <em>A</em> times <em>B</em> is also relatively prime to{' '}
              <em>C</em>.
            </p>
            <p className="mt-2">
              For, if <em>A</em> times <em>B</em> and <em>C</em> are not relatively prime,
              some number <em>D</em> will measure them.
            </p>
            <p className="mt-2">
              Let <em>D</em> measure them, and let it measure <em>A</em> times <em>B</em>{' '}
              according to <em>E</em>, and <em>C</em> according to <em>F</em>.
            </p>
            <p className="mt-2">
              Now, since <em>D</em> measures <em>A</em> times <em>B</em> according to{' '}
              <em>E</em>, therefore <em>D</em> times <em>E</em> equals <em>A</em> times{' '}
              <em>B</em>.
            </p>
            <p className="mt-2">
              But also <em>D</em> measures <em>C</em>; therefore <em>D</em> is a common
              measure of <em>A</em> times <em>B</em> and <em>C</em>.
            </p>
            <p className="mt-2">
              Now, since <em>A</em> is relatively prime to <em>C</em>, and <em>D</em>{' '}
              measures <em>C</em>, therefore <em>A</em> is relatively prime to <em>D</em>.
              [VII.23]
            </p>
            <p className="mt-2">
              And since <em>D</em> times <em>E</em> equals <em>A</em> times <em>B</em>,
              therefore <em>D</em> is to <em>A</em> as <em>B</em> is to <em>E</em>. [VII.19]
            </p>
            <p className="mt-2">
              But <em>A</em> is relatively prime to <em>D</em>; therefore <em>D</em> and{' '}
              <em>A</em> are relatively prime to one another.
            </p>
            <p className="mt-2">
              And when two numbers are relatively prime, and one of them measures some number,
              the other is also relatively prime to the same. [VII.23]
            </p>
            <p className="mt-2">
              Therefore <em>B</em> is relatively prime to <em>E</em>.
            </p>
            <p className="mt-2">
              But <em>B</em> is also relatively prime to <em>C</em>; therefore <em>B</em>{' '}
              is relatively prime to both <em>E</em> and <em>C</em>.
            </p>
            <p className="mt-2">
              Therefore <em>B</em> is also relatively prime to <em>E</em> times <em>C</em>.
              [VII.24 itself, applied recursively, or use VII.23]
            </p>
            <p className="mt-2">
              But <em>D</em> times <em>E</em> equals <em>A</em> times <em>B</em>, and{' '}
              <em>D</em> measures <em>C</em>. So <em>D</em> is relatively prime to <em>B</em>{' '}
              (since <em>B</em> is relatively prime to <em>C</em> and <em>D</em> measures{' '}
              <em>C</em>).
            </p>
            <p className="mt-2 font-medium">
              This leads to a contradiction. Therefore <em>A</em> times <em>B</em> must be
              relatively prime to <em>C</em>.
            </p>
          </>
        }
      >
        <p>
          If two numbers are each relatively prime to a third number, their product is also
          relatively prime to that third number.
        </p>
      </Proposition>

      <h2>Products Preserve Relative Primality</h2>

      <p>
        This proposition establishes a fundamental multiplicative property of relative
        primality. If neither <em>A</em> nor <em>B</em> shares any common factor with{' '}
        <em>C</em>, then their product <em>AB</em> also shares no common factor with{' '}
        <em>C</em>.
      </p>

      <h3 className="mt-6">Modern Algebraic Statement</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700 text-center">
        <p className="text-amber-400 font-mono text-lg">
          If gcd(A, C) = 1 and gcd(B, C) = 1, then gcd(AB, C) = 1
        </p>
      </div>

      <h3 className="mt-6">Visual Representation</h3>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 400 260" className="w-full max-w-md">
          {/* Title */}
          <text x="200" y="25" fill="#f59e0b" fontSize="14" fontWeight="bold" textAnchor="middle">
            Products of Relatively Prime Numbers
          </text>

          {/* Number A */}
          <rect x="30" y="60" width="80" height="40" rx="8" fill="#3b82f6" fillOpacity="0.2" stroke="#3b82f6" strokeWidth="2" />
          <text x="70" y="85" fill="#3b82f6" fontSize="16" fontWeight="bold" textAnchor="middle">A = 3</text>

          {/* Number B */}
          <rect x="160" y="60" width="80" height="40" rx="8" fill="#22c55e" fillOpacity="0.2" stroke="#22c55e" strokeWidth="2" />
          <text x="200" y="85" fill="#22c55e" fontSize="16" fontWeight="bold" textAnchor="middle">B = 5</text>

          {/* Number C */}
          <rect x="290" y="60" width="80" height="40" rx="8" fill="#8b5cf6" fillOpacity="0.2" stroke="#8b5cf6" strokeWidth="2" />
          <text x="330" y="85" fill="#8b5cf6" fontSize="16" fontWeight="bold" textAnchor="middle">C = 7</text>

          {/* Relative primality arrows */}
          <path d="M 110 80 Q 135 50 155 80" fill="none" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrowhead)" />
          <text x="133" y="45" fill="#6b7280" fontSize="10" textAnchor="middle">rel. prime</text>

          <path d="M 115 100 Q 200 140 280 100" fill="none" stroke="#f59e0b" strokeWidth="2" />
          <text x="200" y="135" fill="#6b7280" fontSize="10" textAnchor="middle">gcd(A,C) = 1</text>

          <path d="M 245 100 Q 280 120 285 100" fill="none" stroke="#f59e0b" strokeWidth="2" />
          <text x="270" y="125" fill="#6b7280" fontSize="10" textAnchor="middle">gcd(B,C) = 1</text>

          {/* Product AB */}
          <rect x="95" y="170" width="100" height="45" rx="8" fill="#ec4899" fillOpacity="0.2" stroke="#ec4899" strokeWidth="2" />
          <text x="145" y="197" fill="#ec4899" fontSize="16" fontWeight="bold" textAnchor="middle">A x B = 15</text>

          {/* Arrow from A and B to product */}
          <line x1="70" y1="100" x2="120" y2="170" stroke="#6b7280" strokeWidth="1" strokeDasharray="4" />
          <line x1="200" y1="100" x2="170" y2="170" stroke="#6b7280" strokeWidth="1" strokeDasharray="4" />

          {/* Conclusion */}
          <path d="M 200 192 Q 250 210 280 160" fill="none" stroke="#f59e0b" strokeWidth="2" strokeDasharray="6" />
          <text x="260" y="205" fill="#f59e0b" fontSize="11" fontWeight="bold">gcd(15, 7) = 1</text>

          {/* Check mark for result */}
          <circle cx="200" y="240" r="15" fill="#22c55e" fillOpacity="0.2" stroke="#22c55e" strokeWidth="2" />
          <path d="M 192 240 L 198 246 L 210 234" fill="none" stroke="#22c55e" strokeWidth="2" />
        </svg>
      </div>

      <h3 className="mt-6">Concrete Example</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <p className="text-dark-300 mb-3">
          Let A = 6, B = 35, and C = 11:
        </p>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>gcd(6, 11) = 1 (6 = 2 x 3, shares no factors with 11)</li>
          <li>gcd(35, 11) = 1 (35 = 5 x 7, shares no factors with 11)</li>
          <li>A x B = 6 x 35 = 210 = 2 x 3 x 5 x 7</li>
          <li>gcd(210, 11) = 1 (210 shares no factors with 11)</li>
        </ul>
        <p className="text-amber-400 mt-4">
          The product 210 inherits the relative primality from both factors!
        </p>
      </div>

      <h3 className="mt-6">Proof Strategy</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <p className="text-dark-300 mb-3">
          The proof proceeds by contradiction:
        </p>
        <ol className="list-decimal list-inside space-y-2 text-dark-300">
          <li>Assume AB and C share a common divisor D greater than 1</li>
          <li>Since D divides C and gcd(A, C) = 1, D must be relatively prime to A</li>
          <li>Using VII.19 on D x E = A x B, we get D : A = B : E</li>
          <li>Since D and A are relatively prime, by VII.23, B and E are relatively prime</li>
          <li>But D divides C and gcd(B, C) = 1, so D is relatively prime to B</li>
          <li>This creates a contradiction, proving our assumption was false</li>
        </ol>
      </div>

      <h3 className="mt-6">Key Dependencies</h3>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>
          <strong className="text-amber-400">VII.19:</strong> Products in proportion
          give proportional factors
        </li>
        <li>
          <strong className="text-amber-400">VII.23:</strong> If A is relatively prime
          to B, and B measures C, then A is relatively prime to C
        </li>
      </ul>

      <h3 className="mt-6">Modern Applications</h3>

      <div className="bg-gradient-to-br from-cyan-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-cyan-500/20">
        <p className="text-dark-200 mb-4">
          <strong className="text-cyan-400">Cryptography:</strong> This property is
          fundamental in modular arithmetic and cryptographic systems:
        </p>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>
            In RSA encryption, the totient function relies on products of relatively
            prime numbers
          </li>
          <li>
            The Chinese Remainder Theorem uses this property to combine modular
            equations
          </li>
          <li>
            Group theory applications: the order of products in cyclic groups
          </li>
        </ul>
      </div>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Multiplicative Property:</strong> This
          proposition shows that relative primality is "multiplicatively closed" in a
          specific sense. If you multiply together numbers that are all relatively prime
          to some fixed number C, their product remains relatively prime to C. This is
          a building block for understanding the multiplicative structure of the integers.
        </p>
      </div>
    </LessonLayout>
  );
}
