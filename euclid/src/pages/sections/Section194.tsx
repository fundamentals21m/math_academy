import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section194() {
  return (
    <LessonLayout sectionId={194}>
      <Proposition
        title="Proposition VII.15"
        proof={
          <>
            <p>
              Let the unit <em>A</em> measure any number <em>BC</em>, and let another number{' '}
              <em>D</em> measure any number <em>EF</em> the same number of times.
            </p>
            <p className="mt-2">
              I say that, alternately also, the unit <em>A</em> measures the number <em>D</em>{' '}
              the same number of times that <em>BC</em> measures <em>EF</em>.
            </p>
            <p className="mt-2">
              For, since the unit <em>A</em> measures <em>BC</em> the same number of times that{' '}
              <em>D</em> measures <em>EF</em>, therefore there are as many units in <em>BC</em>{' '}
              as there are numbers equal to <em>D</em> in <em>EF</em>.
            </p>
            <p className="mt-2">
              Let <em>BC</em> be divided into the units in it, <em>BG</em>, <em>GH</em>, <em>HC</em>,
              and <em>EF</em> into the numbers equal to <em>D</em>, namely <em>EK</em>, <em>KL</em>,{' '}
              <em>LF</em>.
            </p>
            <p className="mt-2">
              Thus the multitude of <em>BG</em>, <em>GH</em>, <em>HC</em> will be equal to the
              multitude of <em>EK</em>, <em>KL</em>, <em>LF</em>.
            </p>
            <p className="mt-2">
              And, since the units <em>BG</em>, <em>GH</em>, <em>HC</em> are equal to one another,
              and the numbers <em>EK</em>, <em>KL</em>, <em>LF</em> are also equal to one another,
              while the multitude of the units <em>BG</em>, <em>GH</em>, <em>HC</em> is equal to
              the multitude of the numbers <em>EK</em>, <em>KL</em>, <em>LF</em>, therefore, as
              the unit <em>BG</em> is to the number <em>EK</em>, so is the unit <em>GH</em> to the
              number <em>KL</em>, and the unit <em>HC</em> to the number <em>LF</em>.
            </p>
            <p className="mt-2">
              Therefore also, as one of the antecedents is to one of the consequents, so are all
              the antecedents to all the consequents. [VII.12]
            </p>
            <p className="mt-2">
              Therefore, as the unit <em>BG</em> is to the number <em>EK</em>, so is <em>BC</em>{' '}
              to <em>EF</em>.
            </p>
            <p className="mt-2">
              But the unit <em>BG</em> is equal to the unit <em>A</em>, and the number <em>EK</em>{' '}
              is equal to the number <em>D</em>.
            </p>
            <p className="mt-2 font-medium">
              Therefore, as the unit <em>A</em> is to the number <em>D</em>, so is <em>BC</em> to{' '}
              <em>EF</em>. Therefore the unit <em>A</em> measures the number <em>D</em> the same
              number of times that <em>BC</em> measures <em>EF</em>.
            </p>
          </>
        }
      >
        <p>
          If an unit measure any number, and another number measure any other number the same
          number of times, alternately also, the unit will measure the third number the same
          number of times that the second measures the fourth.
        </p>
      </Proposition>

      <h2>Unit and Number Alternation</h2>

      <p>
        This proposition establishes a special case of alternation involving the unit (1). It
        shows that when we count how many times unity goes into a number, and that same count
        applies to another pair of numbers, we can "alternate" this relationship. This is
        fundamental to understanding how numbers relate to each other through the unit.
      </p>

      <h3 className="mt-6">Understanding the Statement</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <p className="text-dark-300 mb-3">
          Given:
        </p>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>The unit (1) measures BC some number of times, say n times (so BC = n)</li>
          <li>D measures EF the same n times (so EF = n times D)</li>
        </ul>
        <p className="text-amber-400 font-mono text-lg text-center my-4">
          Then: 1 : D = BC : EF
        </p>
        <p className="text-dark-300">
          Or equivalently: D = EF / BC, meaning the unit measures D the same number of times
          that BC measures EF.
        </p>
      </div>

      <h3 className="mt-6">Visual Representation</h3>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 440 240" className="w-full max-w-lg">
          {/* The unit A */}
          <g>
            <text x="30" y="30" fill="#f59e0b" fontSize="12" fontWeight="bold">Unit A = 1</text>
            <rect x="140" y="18" width="20" height="20" fill="rgba(239, 68, 68, 0.4)" stroke="#ef4444" strokeWidth="2" rx="3" />
          </g>

          {/* BC = 4 (4 units) */}
          <g>
            <text x="30" y="70" fill="#f59e0b" fontSize="12" fontWeight="bold">BC = 4</text>
            <text x="100" y="70" fill="#6b7280" fontSize="10">(4 times A)</text>
            {[0, 1, 2, 3].map((i) => (
              <rect
                key={`bc-${i}`}
                x={200 + i * 25}
                y={58}
                width="20"
                height="20"
                fill="rgba(59, 130, 246, 0.3)"
                stroke="#3b82f6"
                strokeWidth="1"
                rx="3"
              />
            ))}
            {[0, 1, 2, 3].map((i) => (
              <text
                key={`bc-label-${i}`}
                x={210 + i * 25}
                y={72}
                fill="#3b82f6"
                fontSize="10"
                textAnchor="middle"
              >
                1
              </text>
            ))}
          </g>

          {/* D = 3 */}
          <g>
            <text x="30" y="115" fill="#f59e0b" fontSize="12" fontWeight="bold">D = 3</text>
            <rect x="140" y="103" width="45" height="20" fill="rgba(34, 197, 94, 0.4)" stroke="#22c55e" strokeWidth="2" rx="3" />
            {[0, 1, 2].map((i) => (
              <text
                key={`d-label-${i}`}
                x={152 + i * 15}
                y={117}
                fill="#22c55e"
                fontSize="10"
                textAnchor="middle"
              >
                1
              </text>
            ))}
          </g>

          {/* EF = 12 (4 times D) */}
          <g>
            <text x="30" y="160" fill="#f59e0b" fontSize="12" fontWeight="bold">EF = 12</text>
            <text x="90" y="160" fill="#6b7280" fontSize="10">(4 times D)</text>
            {[0, 1, 2, 3].map((i) => (
              <rect
                key={`ef-${i}`}
                x={200 + i * 50}
                y={148}
                width="45"
                height="20"
                fill="rgba(139, 92, 246, 0.3)"
                stroke="#8b5cf6"
                strokeWidth="1"
                rx="3"
              />
            ))}
            {[0, 1, 2, 3].map((i) => (
              <text
                key={`ef-label-${i}`}
                x={222 + i * 50}
                y={162}
                fill="#8b5cf6"
                fontSize="10"
                textAnchor="middle"
              >
                D=3
              </text>
            ))}
          </g>

          {/* The relationship */}
          <rect x="30" y="190" width="400" height="45" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" rx="8" />
          <text x="230" y="212" fill="#f59e0b" fontSize="12" textAnchor="middle" fontWeight="bold">
            Alternation: 1 : D = BC : EF
          </text>
          <text x="230" y="228" fill="#94a3b8" fontSize="11" textAnchor="middle">
            1 : 3 = 4 : 12 (both ratios are 1 : 3)
          </text>
        </svg>
      </div>

      <h3 className="mt-6">Concrete Example</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <p className="text-dark-300 mb-2">
          Let A = 1 (the unit), BC = 4, D = 3, EF = 12
        </p>
        <p className="text-dark-300 mt-3">
          Check the given conditions:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-dark-300">
          <li>A measures BC 4 times (since BC = 4 times 1 = 4)</li>
          <li>D measures EF 4 times (since EF = 4 times 3 = 12)</li>
        </ul>
        <p className="text-amber-400 mt-4">
          The proposition claims:
        </p>
        <p className="text-dark-300 mt-2">
          A measures D the same number of times that BC measures EF.
        </p>
        <p className="text-dark-300 mt-2">
          Check: D/A = 3/1 = 3, and EF/BC = 12/4 = 3.
        </p>
        <p className="text-dark-300 mt-2">
          So the unit goes into D exactly 3 times, and BC goes into EF exactly 3 times.
        </p>
      </div>

      <h3 className="mt-6">Modern Algebraic Form</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700 text-center">
        <p className="text-dark-300 mb-3">
          If BC = n (n units) and EF = n times D, then:
        </p>
        <p className="text-amber-400 font-mono text-lg mb-2">
          1/D = BC/EF = n/(nD) = 1/D
        </p>
        <p className="text-dark-300 mt-3 text-sm">
          This is essentially saying: if 1 goes into n equally often as D goes into nD,
          then 1 goes into D equally often as n goes into nD.
        </p>
      </div>

      <h3 className="mt-6">The Role of the Unit</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <p className="text-dark-300 mb-3">
          This proposition is special because it involves the unit (1), which plays a unique
          role in Greek number theory:
        </p>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>The unit is the measure of all numbers</li>
          <li>Any number n can be thought of as "n units"</li>
          <li>The relationship 1 : n captures the very essence of what n is</li>
        </ul>
        <p className="text-dark-300 mt-3">
          This proposition shows that these unit-based relationships participate in the
          general theory of proportion, allowing us to alternate even when one of the terms
          is the unit.
        </p>
      </div>

      <h3 className="mt-6">Why This Matters</h3>

      <div className="grid md:grid-cols-2 gap-4 mt-4">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold mb-2">Foundation for Division</h4>
          <p className="text-dark-300 text-sm">
            This result connects measurement by the unit to measurement by arbitrary numbers,
            essential for understanding division.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold mb-2">Bridge to Fractions</h4>
          <p className="text-dark-300 text-sm">
            By relating unit ratios to general ratios, this helps establish the foundation
            for rational number theory.
          </p>
        </div>
      </div>

      <h3 className="mt-6">Key Dependencies</h3>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>
          <strong className="text-amber-400">VII.12:</strong> If any number of numbers be
          proportional, as one of the antecedents is to one of the consequents, so are all
          the antecedents to all the consequents
        </li>
        <li>
          <strong className="text-amber-400">VII.Def.1:</strong> A unit is that by virtue of
          which each of the things that exist is called one
        </li>
        <li>
          <strong className="text-amber-400">VII.Def.2:</strong> A number is a multitude
          composed of units
        </li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Looking Ahead:</strong> This proposition, along
          with VII.13 and VII.14, completes the basic toolkit for manipulating proportions
          of numbers. These tools will be essential for the key results that follow: the
          Euclidean algorithm (VII.1-2 already established), the theory of greatest common
          divisors (VII.16-22), and ultimately the Fundamental Theorem of Arithmetic about
          unique prime factorization (VII.30-32). The special role of the unit highlighted
          here anticipates the crucial role that 1 plays in divisibility theory.
        </p>
      </div>
    </LessonLayout>
  );
}
