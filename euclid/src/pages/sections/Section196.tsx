import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section196() {
  return (
    <LessonLayout sectionId={196}>
      <Proposition
        title="Proposition VII.17"
        proof={
          <>
            <p>
              Let <em>A</em> multiplied by <em>B</em> and <em>C</em> make <em>D</em> and{' '}
              <em>E</em> respectively.
            </p>
            <p className="mt-2">
              I say that <em>B</em> is to <em>C</em> as <em>D</em> is to <em>E</em>.
            </p>
            <p className="mt-2">
              Since <em>A</em> multiplied by <em>B</em> makes <em>D</em>, therefore <em>B</em>{' '}
              measures <em>D</em> according to the units in <em>A</em>. [VII.Def.15]
            </p>
            <p className="mt-2">
              But the unit also measures <em>A</em> according to the units in it.
            </p>
            <p className="mt-2">
              Therefore the unit measures the number <em>A</em> the same number of times that{' '}
              <em>B</em> measures <em>D</em>.
            </p>
            <p className="mt-2">
              Therefore, as the unit is to <em>A</em>, so is <em>B</em> to <em>D</em>. [VII.Def.20]
            </p>
            <p className="mt-2">
              For the same reason, as the unit is to <em>A</em>, so is <em>C</em> to <em>E</em>.
            </p>
            <p className="mt-2">
              Therefore also, as <em>B</em> is to <em>D</em>, so is <em>C</em> to <em>E</em>.
            </p>
            <p className="mt-2 font-medium">
              Therefore, alternately, as <em>B</em> is to <em>C</em>, so is <em>D</em> to{' '}
              <em>E</em>. [VII.13]
            </p>
          </>
        }
      >
        <p>
          If a number multiplied by two numbers makes certain numbers, the numbers so
          produced have the same ratio as the numbers multiplied.
        </p>
      </Proposition>

      <h2>Products Preserve Ratios</h2>

      <p>
        This proposition establishes that multiplying by a common factor preserves the ratio
        between numbers. It is one of the fundamental connections between multiplication and
        proportion in number theory.
      </p>

      <h3 className="mt-6">Modern Statement</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <p className="text-dark-300 text-center mb-2">If D = A &times; B and E = A &times; C, then:</p>
        <p className="text-amber-400 font-mono text-xl text-center my-4">
          B : C = D : E
        </p>
        <p className="text-dark-300 text-center">
          Or equivalently: B : C = (A &times; B) : (A &times; C)
        </p>
      </div>

      <h3 className="mt-6">Visual Representation</h3>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 500 280" className="w-full max-w-lg">
          {/* Title */}
          <text x="250" y="20" fill="#f59e0b" fontSize="14" textAnchor="middle" fontWeight="bold">
            A = 3, B = 2, C = 4
          </text>

          {/* B (2 units) */}
          <text x="60" y="55" fill="#3b82f6" fontSize="12" textAnchor="middle">B = 2</text>
          <rect x="20" y="65" width="40" height="25" fill="#3b82f6" fillOpacity="0.3" stroke="#3b82f6" strokeWidth="2" rx="3" />
          <rect x="60" y="65" width="40" height="25" fill="#3b82f6" fillOpacity="0.3" stroke="#3b82f6" strokeWidth="2" rx="3" />

          {/* C (4 units) */}
          <text x="90" y="115" fill="#22c55e" fontSize="12" textAnchor="middle">C = 4</text>
          <rect x="20" y="125" width="40" height="25" fill="#22c55e" fillOpacity="0.3" stroke="#22c55e" strokeWidth="2" rx="3" />
          <rect x="60" y="125" width="40" height="25" fill="#22c55e" fillOpacity="0.3" stroke="#22c55e" strokeWidth="2" rx="3" />
          <rect x="100" y="125" width="40" height="25" fill="#22c55e" fillOpacity="0.3" stroke="#22c55e" strokeWidth="2" rx="3" />
          <rect x="140" y="125" width="40" height="25" fill="#22c55e" fillOpacity="0.3" stroke="#22c55e" strokeWidth="2" rx="3" />

          {/* Ratio B:C */}
          <text x="100" y="180" fill="#6b7280" fontSize="11" textAnchor="middle">
            B : C = 2 : 4 = 1 : 2
          </text>

          {/* Arrow */}
          <line x1="200" y1="100" x2="260" y2="100" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrowhead)" />
          <text x="230" y="90" fill="#f59e0b" fontSize="11" textAnchor="middle">&times; A</text>
          <text x="230" y="120" fill="#f59e0b" fontSize="10" textAnchor="middle">(= 3)</text>

          {/* Arrow marker definition */}
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#f59e0b" />
            </marker>
          </defs>

          {/* D = A x B = 6 */}
          <text x="370" y="55" fill="#3b82f6" fontSize="12" textAnchor="middle">D = 3 &times; 2 = 6</text>
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

          {/* E = A x C = 12 */}
          <text x="370" y="140" fill="#22c55e" fontSize="12" textAnchor="middle">E = 3 &times; 4 = 12</text>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => (
            <rect
              key={`e-${i}`}
              x={280 + (i % 4) * 40}
              y={150 + Math.floor(i / 4) * 25}
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
          <text x="370" y="260" fill="#6b7280" fontSize="11" textAnchor="middle">
            D : E = 6 : 12 = 1 : 2
          </text>

          {/* Bottom conclusion */}
          <text x="250" y="275" fill="#f59e0b" fontSize="12" textAnchor="middle" fontWeight="bold">
            B : C = D : E (same ratio!)
          </text>
        </svg>
      </div>

      <h3 className="mt-6">Euclid's Proof Strategy</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <ol className="list-decimal list-inside space-y-3 text-dark-300">
          <li>
            Since A &times; B = D, B measures D exactly A times
          </li>
          <li>
            The unit measures A exactly A times
          </li>
          <li>
            Therefore: unit : A = B : D (same number of measurements)
          </li>
          <li>
            Similarly, since A &times; C = E: unit : A = C : E
          </li>
          <li>
            Both ratios equal unit : A, so B : D = C : E
          </li>
          <li>
            By alternation (VII.13): B : C = D : E
          </li>
        </ol>
      </div>

      <h3 className="mt-6">Modern Algebraic Form</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <p className="text-dark-300 mb-3">
          We can express this proposition as a fraction identity:
        </p>
        <p className="text-amber-400 font-mono text-lg text-center my-4">
          (A &times; B) / (A &times; C) = B / C
        </p>
        <p className="text-dark-300 mt-3">
          This is equivalent to the familiar rule of canceling common factors in fractions.
          When we simplify (6/12) to (1/2), we are using this proposition.
        </p>
      </div>

      <h3 className="mt-6">Key Applications</h3>

      <div className="grid md:grid-cols-2 gap-4 mt-4">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold mb-2">Fraction Simplification</h4>
          <p className="text-dark-300 text-sm">
            6/12 = (3 &times; 2)/(3 &times; 4) = 2/4 = 1/2
          </p>
          <p className="text-dark-400 text-sm mt-2">
            The common factor 3 can be "canceled" because it preserves the ratio.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold mb-2">Scaling</h4>
          <p className="text-dark-300 text-sm">
            Multiplying both terms of a ratio by the same factor does not change the ratio.
          </p>
          <p className="text-dark-400 text-sm mt-2">
            This is fundamental to equivalent fractions: 1/2 = 2/4 = 3/6 = ...
          </p>
        </div>
      </div>

      <h3 className="mt-6">Key Dependencies</h3>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>
          <strong className="text-amber-400">VII.Def.15:</strong> Definition of multiplication
        </li>
        <li>
          <strong className="text-amber-400">VII.Def.20:</strong> Definition of proportionality
          for numbers
        </li>
        <li>
          <strong className="text-amber-400">VII.13:</strong> Alternation of proportions
          (if a : b = c : d, then a : c = b : d)
        </li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Connection to VII.18:</strong> This proposition
          considers the case where we multiply by a <em>common first factor</em> (A &times; B
          and A &times; C). The next proposition, VII.18, considers multiplication by a{' '}
          <em>common second factor</em> (A &times; C and B &times; C). Together, they
          completely characterize how multiplication interacts with ratios.
        </p>
      </div>
    </LessonLayout>
  );
}
