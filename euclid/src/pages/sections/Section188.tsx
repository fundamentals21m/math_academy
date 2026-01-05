import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section188() {
  return (
    <LessonLayout sectionId={188}>
      <Proposition
        title="Proposition VII.9"
        proof={
          <>
            <p>
              Let <em>A</em> be a number, and let <em>BC</em> be the same part of <em>DE</em> that{' '}
              <em>A</em> is of <em>BC</em>.
            </p>
            <p className="mt-2">
              I say that <em>A</em> is also the same part of <em>DE</em> that unity is of some number.
            </p>
            <p className="mt-2">
              For, since <em>BC</em> is the same part of <em>DE</em> that <em>A</em> is of <em>BC</em>,
              therefore there are as many numbers equal to <em>A</em> in <em>BC</em> as there are
              numbers equal to <em>BC</em> in <em>DE</em>.
            </p>
            <p className="mt-2">
              Let <em>BC</em> be divided into the numbers equal to <em>A</em>, namely <em>BG</em>,{' '}
              <em>GC</em>, and <em>DE</em> into the numbers equal to <em>BC</em>, namely <em>DH</em>,{' '}
              <em>HE</em>.
            </p>
            <p className="mt-2">
              Then the multitude of <em>BG</em>, <em>GC</em> will be equal to the multitude of{' '}
              <em>DH</em>, <em>HE</em>.
            </p>
            <p className="mt-2">
              And, since the numbers <em>BG</em>, <em>GC</em> are equal to one another, and the
              numbers <em>DH</em>, <em>HE</em> are also equal to one another, while the multitude
              of the numbers <em>BG</em>, <em>GC</em> is equal to the multitude of <em>DH</em>,{' '}
              <em>HE</em>, therefore, as <em>BG</em> is to <em>DH</em>, so is <em>GC</em> to{' '}
              <em>HE</em>.
            </p>
            <p className="mt-2">
              Therefore also, as one of the antecedents is to one of the consequents, so are all
              the antecedents to all the consequents. [VII.12]
            </p>
            <p className="mt-2">
              Therefore, as <em>BG</em> is to <em>DH</em>, so is <em>BC</em> to <em>DE</em>.
            </p>
            <p className="mt-2">
              But <em>BG</em> is equal to <em>A</em>; therefore, as <em>A</em> is to <em>DH</em>, so
              is <em>BC</em> to <em>DE</em>.
            </p>
            <p className="mt-2">
              Therefore <em>A</em> is the same part of <em>DH</em> that <em>BC</em> is of <em>DE</em>. [VII.Def.20]
            </p>
            <p className="mt-2">
              But <em>BC</em> is the same part of <em>DE</em> that <em>A</em> is of <em>BC</em>;
              therefore <em>A</em> is also the same part of <em>DH</em> that <em>A</em> is of{' '}
              <em>BC</em>.
            </p>
            <p className="mt-2">
              Therefore <em>DH</em> is equal to <em>BC</em>.
            </p>
            <p className="mt-2">
              Let it be contrived that, as <em>A</em> is to <em>DH</em>, so is unity to <em>F</em>.
            </p>
            <p className="mt-2 font-medium">
              Therefore <em>A</em> is the same part of <em>DE</em> that unity is of <em>F</em>.
            </p>
          </>
        }
      >
        <p>
          If a number be the same part of a number that a subtracted number is of a subtracted
          number, the remainder will also be the same part of the remainder that the whole is of
          the whole.
        </p>
      </Proposition>

      <h2>Transitivity of Fractional Parts</h2>

      <p>
        This proposition explores what happens when one number is the same fractional part of
        another, and that second number is the same fractional part of a third. It establishes
        that the first number is a specific fractional part of the third, expressible in terms
        of a unit fraction.
      </p>

      <h3 className="mt-6">Understanding the Statement</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <p className="text-dark-300 mb-3">
          Given three numbers A, BC, and DE where:
        </p>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>A is a 1/n part of BC (meaning BC = n times A)</li>
          <li>BC is a 1/n part of DE (meaning DE = n times BC)</li>
        </ul>
        <p className="text-amber-400 font-mono text-center my-4">
          Then: A is a 1/(n squared) part of DE
        </p>
        <p className="text-dark-300">
          More precisely, A relates to DE as unity relates to some number F = n squared.
        </p>
      </div>

      <h3 className="mt-6">Visual Representation</h3>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 420 220" className="w-full max-w-lg">
          {/* Number A */}
          <g>
            <text x="20" y="25" fill="#f59e0b" fontSize="12" fontWeight="bold">A</text>
            <rect x="50" y="15" width="30" height="20" fill="rgba(239, 68, 68, 0.3)" stroke="#ef4444" strokeWidth="2" />
          </g>

          {/* Number BC = 3 times A */}
          <g>
            <text x="20" y="65" fill="#f59e0b" fontSize="12" fontWeight="bold">BC</text>
            {[0, 1, 2].map((i) => (
              <rect
                key={`bc-${i}`}
                x={50 + i * 32}
                y={55}
                width="30"
                height="20"
                fill="rgba(59, 130, 246, 0.3)"
                stroke="#3b82f6"
                strokeWidth="1"
              />
            ))}
            <text x="130" y="70" fill="#94a3b8" fontSize="10">= 3 x A</text>
          </g>

          {/* Number DE = 3 times BC = 9 times A */}
          <g>
            <text x="20" y="115" fill="#f59e0b" fontSize="12" fontWeight="bold">DE</text>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <rect
                key={`de-${i}`}
                x={50 + i * 32}
                y={105}
                width="30"
                height="20"
                fill="rgba(34, 197, 94, 0.3)"
                stroke="#22c55e"
                strokeWidth="1"
              />
            ))}
            <text x="345" y="120" fill="#94a3b8" fontSize="10">= 3 x BC = 9 x A</text>
          </g>

          {/* Grouping brackets for DE */}
          <g>
            <path d="M 50 130 L 50 140 L 144 140 L 144 130" fill="none" stroke="#3b82f6" strokeWidth="1" />
            <text x="97" y="155" fill="#3b82f6" fontSize="9" textAnchor="middle">DH = BC</text>

            <path d="M 146 130 L 146 140 L 240 140 L 240 130" fill="none" stroke="#3b82f6" strokeWidth="1" />
            <text x="193" y="155" fill="#3b82f6" fontSize="9" textAnchor="middle">HE = BC</text>

            <path d="M 242 130 L 242 140 L 336 140 L 336 130" fill="none" stroke="#3b82f6" strokeWidth="1" />
            <text x="289" y="155" fill="#3b82f6" fontSize="9" textAnchor="middle">= BC</text>
          </g>

          {/* Key insight */}
          <rect x="50" y="170" width="350" height="40" fill="#1e293b" stroke="#f59e0b" strokeWidth="1" rx="5" />
          <text x="225" y="190" fill="#f59e0b" fontSize="11" textAnchor="middle">
            A is 1/9 of DE, because A is 1/3 of BC and BC is 1/3 of DE
          </text>
          <text x="225" y="205" fill="#94a3b8" fontSize="10" textAnchor="middle">
            (1/3) x (1/3) = 1/9
          </text>
        </svg>
      </div>

      <h3 className="mt-6">Concrete Example</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <p className="text-dark-300 mb-3">
          Let A = 2
        </p>
        <p className="text-dark-300 mb-3">
          Let BC = 6 (so A is 1/3 of BC)
        </p>
        <p className="text-dark-300 mb-3">
          Let DE = 18 (so BC is 1/3 of DE)
        </p>
        <p className="text-amber-400 mt-4">
          Then A = 2 is what part of DE = 18?
        </p>
        <p className="text-dark-300 mt-2">
          A is 1/9 of DE, because 18/2 = 9.
        </p>
        <p className="text-dark-300 mt-2">
          And indeed: 1/3 times 1/3 = 1/9.
        </p>
      </div>

      <h3 className="mt-6">The Chain of Parts</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700 text-center">
        <p className="text-amber-400 font-mono text-lg mb-2">
          If A = (1/n) times BC
        </p>
        <p className="text-amber-400 font-mono text-lg mb-2">
          And BC = (1/n) times DE
        </p>
        <p className="text-amber-400 font-mono text-lg">
          Then A = (1/n^2) times DE
        </p>
      </div>

      <p className="mt-4">
        This is the composition of fractions, showing that if A is the nth part of B, and B is
        the nth part of C, then A is the n-squared part of C.
      </p>

      <h3 className="mt-6">Key Dependencies</h3>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>
          <strong className="text-amber-400">VII.12:</strong> If any number of numbers be
          proportional, as one of the antecedents is to one of the consequents, so are all
          the antecedents to all the consequents
        </li>
        <li>
          <strong className="text-amber-400">VII.Def.20:</strong> Numbers are proportional
          when the first is the same multiple, or the same part, or the same parts, of the
          second that the third is of the fourth
        </li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Modern Perspective:</strong> This proposition
          essentially proves that (1/n) times (1/n) = 1/n^2, which we recognize as the rule for
          multiplying fractions. Euclid expresses this in terms of parts and measures because
          the Greeks did not have a general concept of fractions as numbers. Instead, they
          worked with the relationship "A is the nth part of B."
        </p>
      </div>
    </LessonLayout>
  );
}
