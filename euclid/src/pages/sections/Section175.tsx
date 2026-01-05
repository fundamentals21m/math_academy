import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section175() {
  return (
    <LessonLayout sectionId={175}>
      <Proposition
        title="Proposition VI.30"
        proof={
          <>
            <p>
              Let <em>AB</em> be the given finite straight line. It is required to cut it
              in extreme and mean ratio.
            </p>
            <p className="mt-2">
              On <em>AB</em> let the square <em>BC</em> be described. [I.46]
            </p>
            <p className="mt-2">
              To <em>AC</em> let there be applied the parallelogram <em>CD</em> equal to
              <em> BC</em> and exceeding by the figure <em>AD</em> similar to <em>BC</em>. [VI.29]
            </p>
            <p className="mt-2">
              Now <em>BC</em> is a square, therefore <em>AD</em> is also a square.
            </p>
            <p className="mt-2">
              And since <em>BC</em> is equal to <em>CD</em>, let <em>CE</em> be subtracted
              from each; therefore the remainder <em>BF</em> is equal to the remainder <em>AD</em>.
            </p>
            <p className="mt-2">
              But <em>BF</em> is the rectangle <em>AB</em>, <em>AE</em> (for <em>AF</em> = <em>AB</em>).
            </p>
            <p className="mt-2">
              And <em>AD</em> is the square on <em>AE</em>.
            </p>
            <p className="mt-2">
              Therefore the rectangle <em>AB</em>, <em>AE</em> is equal to the square on <em>AE</em>.
            </p>
            <p className="mt-2">
              Therefore, as <em>AB</em> is to <em>AE</em>, so is <em>AE</em> to <em>EB</em>. [VI.17]
            </p>
            <p className="mt-2 font-medium">
              Therefore <em>AB</em> has been cut in extreme and mean ratio at <em>E</em>.
            </p>
          </>
        }
      >
        <p>
          To cut a given finite straight line in extreme and mean ratio.
        </p>
      </Proposition>

      <h2>The Golden Ratio Construction</h2>

      <p>
        This is one of the most celebrated propositions in the Elements&mdash;it constructs
        the <strong>golden ratio</strong>, a proportion that has fascinated mathematicians,
        artists, and scientists for over two millennia.
      </p>

      <h3 className="mt-6">What is Extreme and Mean Ratio?</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <p className="text-dark-300">
          A line is cut in <strong>extreme and mean ratio</strong> when:
        </p>
        <p className="text-amber-400 font-mono text-lg text-center my-4">
          whole : larger = larger : smaller
        </p>
        <p className="text-dark-300">
          That is, if AB is cut at E, then:
        </p>
        <p className="text-amber-400 font-mono text-center my-2">
          AB : AE = AE : EB
        </p>
      </div>

      <h3 className="mt-6">The Construction</h3>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 400 320" className="w-full max-w-md">
          {/* The given line AB */}
          <line x1="50" y1="200" x2="200" y2="200" stroke="#f59e0b" strokeWidth="3" />
          <circle cx="50" cy="200" r="4" fill="#f59e0b" />
          <circle cx="200" cy="200" r="4" fill="#f59e0b" />
          <text x="50" y="220" fill="#f59e0b" fontSize="14" textAnchor="middle" fontWeight="bold">A</text>
          <text x="200" y="220" fill="#f59e0b" fontSize="14" textAnchor="middle" fontWeight="bold">B</text>

          {/* Square BC on AB (AB = side) */}
          <rect
            x="50"
            y="50"
            width="150"
            height="150"
            fill="#3b82f6"
            fillOpacity="0.15"
            stroke="#3b82f6"
            strokeWidth="2"
          />
          <text x="125" y="130" fill="#3b82f6" fontSize="12" textAnchor="middle">BC</text>
          <text x="45" y="45" fill="#3b82f6" fontSize="12">C</text>

          {/* The point E that divides AB */}
          <circle cx="142" cy="200" r="5" fill="#22c55e" />
          <text x="142" y="220" fill="#22c55e" fontSize="14" textAnchor="middle" fontWeight="bold">E</text>

          {/* The golden section highlighted */}
          <line x1="50" y1="200" x2="142" y2="200" stroke="#22c55e" strokeWidth="4" />
          <line x1="142" y1="200" x2="200" y2="200" stroke="#ec4899" strokeWidth="4" />

          {/* AE label */}
          <text x="96" y="190" fill="#22c55e" fontSize="11" textAnchor="middle">AE (larger)</text>

          {/* EB label */}
          <text x="171" y="190" fill="#ec4899" fontSize="11" textAnchor="middle">EB</text>

          {/* Extended line to show excess construction */}
          <line x1="200" y1="200" x2="250" y2="200" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="4" />
          <text x="250" y="220" fill="#8b5cf6" fontSize="12">D</text>

          {/* The applied parallelogram CD (rectangle) */}
          <rect
            x="50"
            y="50"
            width="200"
            height="150"
            fill="none"
            stroke="#8b5cf6"
            strokeWidth="1"
            strokeDasharray="4"
          />
          <text x="175" y="35" fill="#8b5cf6" fontSize="11">CD = BC (by VI.29)</text>

          {/* Square AD (the excess) */}
          <rect
            x="200"
            y="108"
            width="50"
            height="50"
            fill="#ec4899"
            fillOpacity="0.2"
            stroke="#ec4899"
            strokeWidth="2"
          />
          <text x="225" y="135" fill="#ec4899" fontSize="10" textAnchor="middle">AD</text>

          {/* Rectangle BF = AB x AE */}
          <rect
            x="50"
            y="108"
            width="150"
            height="50"
            fill="none"
            stroke="#22c55e"
            strokeWidth="1"
            strokeDasharray="3"
          />
          <text x="125" y="95" fill="#22c55e" fontSize="10" textAnchor="middle">BF = AB x AE</text>

          {/* Key relationship box */}
          <rect x="260" y="100" width="130" height="60" fill="#1e293b" stroke="#f59e0b" strokeWidth="1" rx="5" />
          <text x="325" y="120" fill="#f59e0b" fontSize="11" textAnchor="middle">Key Insight:</text>
          <text x="325" y="138" fill="#22c55e" fontSize="10" textAnchor="middle">BF = AD</text>
          <text x="325" y="152" fill="#6b7280" fontSize="9" textAnchor="middle">AB x AE = AE x AE</text>
        </svg>
      </div>

      <h3 className="mt-6">Step-by-Step Construction</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <ol className="list-decimal list-inside space-y-3 text-dark-300">
          <li>
            On the given line <em>AB</em>, construct square <em>BC</em> (I.46)
          </li>
          <li>
            Extend <em>AC</em> and apply parallelogram <em>CD</em> equal to <em>BC</em>,
            exceeding by a square <em>AD</em> (VI.29)
          </li>
          <li>
            Since <em>BC</em> = <em>CD</em>, subtracting <em>CE</em> from both gives
            <em> BF</em> = <em>AD</em>
          </li>
          <li>
            <em>BF</em> = <em>AB</em> times <em>AE</em> (rectangle)
          </li>
          <li>
            <em>AD</em> = <em>AE</em> squared (square)
          </li>
          <li>
            Therefore: <em>AB</em> times <em>AE</em> = <em>AE</em> squared
          </li>
          <li>
            By VI.17: <em>AB</em> : <em>AE</em> = <em>AE</em> : <em>EB</em>
          </li>
        </ol>
      </div>

      <h3 className="mt-6">The Golden Ratio</h3>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-4 border border-amber-500/20">
        <p className="text-dark-200 mb-4">
          If we set AB = 1, then AE = x satisfies:
        </p>
        <p className="text-amber-400 font-mono text-xl text-center mb-4">
          1 : x = x : (1 - x)
        </p>
        <p className="text-dark-200 mb-2">
          Cross-multiplying: x(1 - x) = x^2, which gives x^2 + x - 1 = 0.
        </p>
        <p className="text-dark-200 mb-4">
          Solving:
        </p>
        <p className="text-amber-400 font-mono text-xl text-center mb-4">
          x = (sqrt(5) - 1) / 2 approx 0.618
        </p>
        <p className="text-dark-200">
          The golden ratio phi = 1/x = (1 + sqrt(5)) / 2 approx 1.618
        </p>
      </div>

      <h3 className="mt-6">Properties of the Golden Ratio</h3>

      <div className="grid md:grid-cols-2 gap-4 mt-4">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold mb-2">Self-Similarity</h4>
          <p className="text-dark-300 text-sm">
            phi = 1 + 1/phi
          </p>
          <p className="text-dark-400 text-sm mt-2">
            The golden ratio is the only positive number that, when diminished by 1,
            equals its own reciprocal.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold mb-2">Connection to phi^2</h4>
          <p className="text-dark-300 text-sm">
            phi^2 = phi + 1
          </p>
          <p className="text-dark-400 text-sm mt-2">
            The square of phi exceeds phi by exactly 1.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold mb-2">Continued Fraction</h4>
          <p className="text-dark-300 text-sm">
            phi = 1 + 1/(1 + 1/(1 + 1/(1 + ...)))
          </p>
          <p className="text-dark-400 text-sm mt-2">
            The simplest continued fraction, converging most slowly to its limit.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold mb-2">Fibonacci Connection</h4>
          <p className="text-dark-300 text-sm">
            F(n+1) / F(n) approaches phi
          </p>
          <p className="text-dark-400 text-sm mt-2">
            Consecutive Fibonacci ratios approach the golden ratio.
          </p>
        </div>
      </div>

      <h3 className="mt-6">The Golden Ratio in the Elements</h3>

      <p>
        VI.30 is the culmination of a thread running through the Elements:
      </p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>
          <strong className="text-amber-400">II.11:</strong> First construction of extreme
          and mean ratio (using geometric algebra)
        </li>
        <li>
          <strong className="text-amber-400">VI.30:</strong> Construction using proportion
          theory (the method here)
        </li>
        <li>
          <strong className="text-amber-400">XIII.1-6:</strong> Properties used for regular
          pentagon and dodecahedron
        </li>
        <li>
          <strong className="text-amber-400">XIII.8:</strong> The diagonal and side of a
          regular pentagon are in golden ratio
        </li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Modern Significance:</strong> The golden ratio
          appears in art (the Parthenon, da Vinci), nature (phyllotaxis, nautilus shells),
          and mathematics (Penrose tilings, quasicrystals). While some claims of its
          ubiquity are exaggerated, its mathematical properties are genuinely remarkable.
          It is the most irrational number in the sense of being the hardest to approximate
          by rationals.
        </p>
      </div>
    </LessonLayout>
  );
}
