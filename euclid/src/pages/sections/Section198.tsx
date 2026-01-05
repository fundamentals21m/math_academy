import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section198() {
  return (
    <LessonLayout sectionId={198}>
      <Proposition
        title="Proposition VII.19"
        proof={
          <>
            <p>
              Let the four numbers <em>A</em>, <em>B</em>, <em>C</em>, <em>D</em> be
              proportional, so that <em>A</em> is to <em>B</em> as <em>C</em> is to <em>D</em>.
            </p>
            <p className="mt-2">
              And let <em>A</em> multiplied by <em>D</em> make <em>E</em>, and let <em>B</em>{' '}
              multiplied by <em>C</em> make <em>F</em>.
            </p>
            <p className="mt-2">
              I say that <em>E</em> equals <em>F</em>.
            </p>
            <p className="mt-2">
              Let <em>A</em> multiplied by <em>C</em> make <em>G</em>.
            </p>
            <p className="mt-2">
              Since then <em>A</em> multiplied by <em>C</em> makes <em>G</em>, and multiplied
              by <em>D</em> makes <em>E</em>, the number <em>A</em> multiplied by the two
              numbers <em>C</em> and <em>D</em> has made <em>G</em> and <em>E</em>.
            </p>
            <p className="mt-2">
              Therefore <em>C</em> is to <em>D</em> as <em>G</em> is to <em>E</em>. [VII.17]
            </p>
            <p className="mt-2">
              But <em>C</em> is to <em>D</em> as <em>A</em> is to <em>B</em> (given).
            </p>
            <p className="mt-2">
              Therefore <em>A</em> is to <em>B</em> as <em>G</em> is to <em>E</em>.
            </p>
            <p className="mt-2">
              Again, since <em>A</em> multiplied by <em>C</em> makes <em>G</em>, and{' '}
              <em>B</em> multiplied by <em>C</em> makes <em>F</em>, the two numbers{' '}
              <em>A</em> and <em>B</em> multiplied by <em>C</em> have made <em>G</em> and{' '}
              <em>F</em>.
            </p>
            <p className="mt-2">
              Therefore <em>A</em> is to <em>B</em> as <em>G</em> is to <em>F</em>. [VII.18]
            </p>
            <p className="mt-2">
              But also <em>A</em> is to <em>B</em> as <em>G</em> is to <em>E</em>.
            </p>
            <p className="mt-2">
              Therefore <em>G</em> is to <em>E</em> as <em>G</em> is to <em>F</em>.
            </p>
            <p className="mt-2">
              Therefore <em>G</em> has to each of <em>E</em> and <em>F</em> the same ratio.
            </p>
            <p className="mt-2 font-medium">
              Therefore <em>E</em> equals <em>F</em>. [VII.Def.20]
            </p>
          </>
        }
      >
        <p>
          If four numbers are proportional, then the number produced from the first and
          fourth equals the number produced from the second and third.
        </p>
      </Proposition>

      <h2>Cross-Multiplication for Numbers</h2>

      <p>
        This is one of the most important propositions in Book VII. It establishes the
        cross-multiplication property for proportional numbers: if a/b = c/d, then
        a &times; d = b &times; c.
      </p>

      <h3 className="mt-6">Modern Statement</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <p className="text-dark-300 text-center mb-2">If A : B = C : D, then:</p>
        <p className="text-amber-400 font-mono text-xl text-center my-4">
          A &times; D = B &times; C
        </p>
        <p className="text-dark-300 text-center mt-4">
          The "cross products" are equal
        </p>
      </div>

      <h3 className="mt-6">Visual Representation</h3>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 460 300" className="w-full max-w-lg">
          {/* Title */}
          <text x="230" y="25" fill="#f59e0b" fontSize="14" textAnchor="middle" fontWeight="bold">
            2 : 3 = 4 : 6 implies 2 &times; 6 = 3 &times; 4
          </text>

          {/* The proportion */}
          <text x="120" y="70" fill="#3b82f6" fontSize="18" textAnchor="middle">A = 2</text>
          <text x="180" y="70" fill="#6b7280" fontSize="18" textAnchor="middle">:</text>
          <text x="230" y="70" fill="#22c55e" fontSize="18" textAnchor="middle">B = 3</text>
          <text x="290" y="70" fill="#6b7280" fontSize="18" textAnchor="middle">=</text>
          <text x="340" y="70" fill="#8b5cf6" fontSize="18" textAnchor="middle">C = 4</text>
          <text x="400" y="70" fill="#6b7280" fontSize="18" textAnchor="middle">:</text>
          <text x="450" y="70" fill="#ec4899" fontSize="18" textAnchor="middle">D = 6</text>

          {/* Cross multiplication lines */}
          <line x1="120" y1="85" x2="450" y2="140" stroke="#f59e0b" strokeWidth="2" strokeDasharray="5" />
          <line x1="230" y1="85" x2="340" y2="140" stroke="#f59e0b" strokeWidth="2" strokeDasharray="5" />

          {/* A x D rectangle */}
          <text x="150" y="170" fill="#f59e0b" fontSize="12" textAnchor="middle">A &times; D = 2 &times; 6 = 12</text>
          {[0, 1, 2, 3, 4, 5].map((col) => (
            [0, 1].map((row) => (
              <rect
                key={`ad-${row}-${col}`}
                x={30 + col * 40}
                y={180 + row * 35}
                width="35"
                height="30"
                fill="#3b82f6"
                fillOpacity="0.2"
                stroke="#ec4899"
                strokeWidth="2"
                rx="3"
              />
            ))
          ))}

          {/* Equals sign */}
          <text x="290" y="210" fill="#f59e0b" fontSize="24" textAnchor="middle">=</text>

          {/* B x C rectangle */}
          <text x="380" y="170" fill="#f59e0b" fontSize="12" textAnchor="middle">B &times; C = 3 &times; 4 = 12</text>
          {[0, 1, 2, 3].map((col) => (
            [0, 1, 2].map((row) => (
              <rect
                key={`bc-${row}-${col}`}
                x={300 + col * 40}
                y={180 + row * 28}
                width="35"
                height="24"
                fill="#22c55e"
                fillOpacity="0.2"
                stroke="#8b5cf6"
                strokeWidth="2"
                rx="3"
              />
            ))
          ))}

          {/* Bottom label */}
          <text x="230" y="290" fill="#6b7280" fontSize="11" textAnchor="middle">
            Both products give 12 units
          </text>
        </svg>
      </div>

      <h3 className="mt-6">Euclid's Proof Strategy</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <p className="text-dark-300 mb-3">
          Euclid introduces an auxiliary product G = A &times; C and shows both E and F
          have the same ratio to G:
        </p>
        <ol className="list-decimal list-inside space-y-3 text-dark-300">
          <li>
            Let G = A &times; C (the auxiliary product)
          </li>
          <li>
            E = A &times; D and G = A &times; C, so by VII.17: C : D = G : E
          </li>
          <li>
            But C : D = A : B (given), so A : B = G : E
          </li>
          <li>
            G = A &times; C and F = B &times; C, so by VII.18: A : B = G : F
          </li>
          <li>
            From steps 3 and 4: G : E = G : F
          </li>
          <li>
            Since G has the same ratio to both E and F, we have E = F
          </li>
        </ol>
      </div>

      <h3 className="mt-6">Why This Matters</h3>

      <div className="grid md:grid-cols-2 gap-4 mt-4">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold mb-2">Solving Proportions</h4>
          <p className="text-dark-300 text-sm">
            To find x in 2 : 3 = 4 : x
          </p>
          <p className="text-dark-300 text-sm mt-2">
            Cross-multiply: 2x = 3 &times; 4 = 12
          </p>
          <p className="text-dark-300 text-sm mt-2">
            Therefore x = 6
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold mb-2">Testing Equality</h4>
          <p className="text-dark-300 text-sm">
            To check if 2/3 = 4/6:
          </p>
          <p className="text-dark-300 text-sm mt-2">
            Check: 2 &times; 6 = 12 and 3 &times; 4 = 12
          </p>
          <p className="text-dark-300 text-sm mt-2">
            Equal cross-products means equal ratios.
          </p>
        </div>
      </div>

      <h3 className="mt-6">Connection to Fraction Multiplication</h3>

      <div className="bg-gradient-to-br from-blue-500/10 to-dark-800/50 rounded-xl p-6 mt-4 border border-blue-500/20">
        <p className="text-dark-200 mb-4">
          Cross-multiplication is deeply connected to how we think about fractions:
        </p>
        <p className="text-amber-400 font-mono text-center my-4">
          a/b = c/d if and only if ad = bc
        </p>
        <p className="text-dark-300">
          This provides an integer criterion for comparing fractions without computing
          their values. This is essential for exact arithmetic without approximation.
        </p>
      </div>

      <h3 className="mt-6">Historical Significance</h3>

      <p className="mt-4">
        This proposition is the number-theoretic analog of V.16 for general magnitudes.
        While Book V handles proportions of continuous magnitudes (lengths, areas),
        Book VII develops the same theory specifically for positive integers. The proofs
        are different because Euclid can use the specific properties of discrete numbers.
      </p>

      <h3 className="mt-6">Key Dependencies</h3>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>
          <strong className="text-amber-400">VII.17:</strong> Products with common first
          factor preserve ratios
        </li>
        <li>
          <strong className="text-amber-400">VII.18:</strong> Products with common second
          factor preserve ratios
        </li>
        <li>
          <strong className="text-amber-400">VII.Def.20:</strong> Numbers with the same
          ratio to a given number are equal
        </li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Modern Application:</strong> Cross-multiplication
          remains one of the most useful techniques in mathematics. From solving simple
          proportions to checking equality of fractions, from similar triangles to unit
          conversions, the principle established in this ancient proposition appears
          throughout modern mathematics and science.
        </p>
      </div>
    </LessonLayout>
  );
}
