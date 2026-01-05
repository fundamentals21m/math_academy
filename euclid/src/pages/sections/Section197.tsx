import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section197() {
  return (
    <LessonLayout sectionId={197}>
      <Proposition
        title="Proposition VII.18"
        proof={
          <>
            <p>
              Let <em>A</em> and <em>B</em> be two numbers, and let <em>C</em> multiplied by{' '}
              <em>A</em> and <em>B</em> make <em>D</em> and <em>E</em> respectively.
            </p>
            <p className="mt-2">
              I say that <em>A</em> is to <em>B</em> as <em>D</em> is to <em>E</em>.
            </p>
            <p className="mt-2">
              Since <em>C</em> multiplied by <em>A</em> makes <em>D</em>, therefore also{' '}
              <em>A</em> multiplied by <em>C</em> makes <em>D</em>. [VII.16]
            </p>
            <p className="mt-2">
              For the same reason also <em>B</em> multiplied by <em>C</em> makes <em>E</em>.
            </p>
            <p className="mt-2">
              Therefore the number <em>C</em> multiplied by the two numbers <em>A</em> and{' '}
              <em>B</em> has made <em>D</em> and <em>E</em>.
            </p>
            <p className="mt-2 font-medium">
              Therefore <em>A</em> is to <em>B</em> as <em>D</em> is to <em>E</em>. [VII.17]
            </p>
          </>
        }
      >
        <p>
          If two numbers multiplied by any number make certain numbers, the numbers so
          produced have the same ratio as the multipliers.
        </p>
      </Proposition>

      <h2>The Companion to VII.17</h2>

      <p>
        This proposition is the natural companion to VII.17. Where VII.17 showed that
        multiplying two numbers by a <em>common first factor</em> preserves their ratio,
        VII.18 shows that multiplying by a <em>common second factor</em> also preserves
        the ratio.
      </p>

      <h3 className="mt-6">Modern Statement</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <p className="text-dark-300 text-center mb-2">If D = A &times; C and E = B &times; C, then:</p>
        <p className="text-amber-400 font-mono text-xl text-center my-4">
          A : B = D : E
        </p>
        <p className="text-dark-300 text-center">
          Or equivalently: A : B = (A &times; C) : (B &times; C)
        </p>
      </div>

      <h3 className="mt-6">Visual Representation</h3>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 500 280" className="w-full max-w-lg">
          {/* Title */}
          <text x="250" y="20" fill="#f59e0b" fontSize="14" textAnchor="middle" fontWeight="bold">
            A = 2, B = 5, C = 3
          </text>

          {/* A (2 units) */}
          <text x="60" y="55" fill="#3b82f6" fontSize="12" textAnchor="middle">A = 2</text>
          <rect x="20" y="65" width="40" height="25" fill="#3b82f6" fillOpacity="0.3" stroke="#3b82f6" strokeWidth="2" rx="3" />
          <rect x="60" y="65" width="40" height="25" fill="#3b82f6" fillOpacity="0.3" stroke="#3b82f6" strokeWidth="2" rx="3" />

          {/* B (5 units) */}
          <text x="115" y="115" fill="#22c55e" fontSize="12" textAnchor="middle">B = 5</text>
          <rect x="20" y="125" width="40" height="25" fill="#22c55e" fillOpacity="0.3" stroke="#22c55e" strokeWidth="2" rx="3" />
          <rect x="60" y="125" width="40" height="25" fill="#22c55e" fillOpacity="0.3" stroke="#22c55e" strokeWidth="2" rx="3" />
          <rect x="100" y="125" width="40" height="25" fill="#22c55e" fillOpacity="0.3" stroke="#22c55e" strokeWidth="2" rx="3" />
          <rect x="140" y="125" width="40" height="25" fill="#22c55e" fillOpacity="0.3" stroke="#22c55e" strokeWidth="2" rx="3" />
          <rect x="180" y="125" width="40" height="25" fill="#22c55e" fillOpacity="0.3" stroke="#22c55e" strokeWidth="2" rx="3" />

          {/* Ratio A:B */}
          <text x="100" y="180" fill="#6b7280" fontSize="11" textAnchor="middle">
            A : B = 2 : 5
          </text>

          {/* Arrow */}
          <line x1="200" y1="100" x2="260" y2="100" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrowhead2)" />
          <text x="230" y="90" fill="#f59e0b" fontSize="11" textAnchor="middle">&times; C</text>
          <text x="230" y="120" fill="#f59e0b" fontSize="10" textAnchor="middle">(= 3)</text>

          {/* Arrow marker definition */}
          <defs>
            <marker id="arrowhead2" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#f59e0b" />
            </marker>
          </defs>

          {/* D = A x C = 6 */}
          <text x="350" y="55" fill="#3b82f6" fontSize="12" textAnchor="middle">D = 2 &times; 3 = 6</text>
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <rect
              key={`d-${i}`}
              x={280 + (i % 3) * 40}
              y={65 + Math.floor(i / 3) * 25}
              width="35"
              height="22"
              fill="#3b82f6"
              fillOpacity="0.3"
              stroke="#3b82f6"
              strokeWidth="2"
              rx="3"
            />
          ))}

          {/* E = B x C = 15 */}
          <text x="370" y="135" fill="#22c55e" fontSize="12" textAnchor="middle">E = 5 &times; 3 = 15</text>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((i) => (
            <rect
              key={`e-${i}`}
              x={280 + (i % 5) * 40}
              y={145 + Math.floor(i / 5) * 25}
              width="35"
              height="22"
              fill="#22c55e"
              fillOpacity="0.3"
              stroke="#22c55e"
              strokeWidth="2"
              rx="3"
            />
          ))}

          {/* Ratio D:E */}
          <text x="370" y="250" fill="#6b7280" fontSize="11" textAnchor="middle">
            D : E = 6 : 15 = 2 : 5
          </text>

          {/* Bottom conclusion */}
          <text x="250" y="275" fill="#f59e0b" fontSize="12" textAnchor="middle" fontWeight="bold">
            A : B = D : E (same ratio!)
          </text>
        </svg>
      </div>

      <h3 className="mt-6">An Elegant Short Proof</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <p className="text-dark-300 mb-3">
          Euclid's proof is remarkably short, reducing this to VII.17 using commutativity:
        </p>
        <ol className="list-decimal list-inside space-y-3 text-dark-300">
          <li>
            We have D = C &times; A and E = C &times; B (given in that order)
          </li>
          <li>
            By VII.16 (commutativity): D = A &times; C and E = B &times; C
          </li>
          <li>
            Now the <em>same</em> number C is the second factor in both products
          </li>
          <li>
            By VII.17: A : B = D : E
          </li>
        </ol>
      </div>

      <h3 className="mt-6">Comparing VII.17 and VII.18</h3>

      <div className="grid md:grid-cols-2 gap-4 mt-4">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold mb-2">VII.17</h4>
          <p className="text-dark-300 text-sm font-mono">
            (A &times; B) : (A &times; C) = B : C
          </p>
          <p className="text-dark-400 text-sm mt-2">
            Common factor A is the <em>first</em> factor in both products
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold mb-2">VII.18</h4>
          <p className="text-dark-300 text-sm font-mono">
            (A &times; C) : (B &times; C) = A : B
          </p>
          <p className="text-dark-400 text-sm mt-2">
            Common factor C is the <em>second</em> factor in both products
          </p>
        </div>
      </div>

      <h3 className="mt-6">Combined Result</h3>

      <div className="bg-gradient-to-br from-blue-500/10 to-dark-800/50 rounded-xl p-6 mt-4 border border-blue-500/20">
        <p className="text-dark-200 mb-4">
          Together, VII.17 and VII.18 establish the fundamental principle:
        </p>
        <p className="text-amber-400 font-mono text-lg text-center my-4">
          Multiplying numerator and denominator by the same number preserves the fraction
        </p>
        <p className="text-dark-300">
          This is the justification for equivalent fractions: 2/5 = 6/15 because both
          terms have been multiplied by 3.
        </p>
      </div>

      <h3 className="mt-6">Key Dependencies</h3>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>
          <strong className="text-amber-400">VII.16:</strong> Commutativity of multiplication
          (a &times; b = b &times; a)
        </li>
        <li>
          <strong className="text-amber-400">VII.17:</strong> Products with a common first
          factor preserve ratios
        </li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">The Power of Commutativity:</strong> This
          proposition beautifully illustrates how VII.16 (commutativity) simplifies proofs.
          Without commutativity, VII.18 would require its own independent proof. With
          commutativity, we can simply rewrite the products and apply VII.17. This is an
          early example of how a single foundational result can dramatically simplify the
          development of a theory.
        </p>
      </div>
    </LessonLayout>
  );
}
