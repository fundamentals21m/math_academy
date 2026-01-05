import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section189() {
  return (
    <LessonLayout sectionId={189}>
      <Proposition
        title="Proposition VII.10"
        proof={
          <>
            <p>
              Let <em>A</em> be a number, and let it be parts of <em>BC</em>.
            </p>
            <p className="mt-2">
              I say that there is also a number of which <em>BC</em> is the same parts that{' '}
              <em>A</em> is of it.
            </p>
            <p className="mt-2">
              For let <em>BC</em> be divided into the parts of it equal to <em>A</em>, namely{' '}
              <em>BD</em>, <em>DE</em>, <em>EC</em>, and let <em>F</em> be made equal to <em>BD</em>.
            </p>
            <p className="mt-2">
              Then there are as many numbers in <em>FGH</em> equal to <em>BD</em>, <em>DE</em>,{' '}
              <em>EC</em> as in <em>BC</em>; and let <em>FG</em> be equal to <em>DG</em>, and{' '}
              <em>GH</em> to <em>EC</em>.
            </p>
            <p className="mt-2">
              Now since the numbers <em>FG</em>, <em>GH</em> are equal to the numbers <em>BD</em>,{' '}
              <em>DE</em>, <em>EC</em> in multitude, and <em>BD</em>, <em>DE</em>, <em>EC</em> are
              equal to <em>A</em>, therefore <em>FG</em>, <em>GH</em> are also equal to <em>A</em>.
            </p>
            <p className="mt-2">
              But <em>A</em> is parts of <em>BC</em>, therefore <em>FG</em>, <em>GH</em> are also
              the same parts of <em>BC</em>.
            </p>
            <p className="mt-2">
              Therefore the sum <em>FH</em> is of <em>BC</em> the same parts that <em>A</em> is
              of unity.
            </p>
            <p className="mt-2">
              But <em>A</em> is not parts of unity; therefore neither is <em>FH</em> parts of{' '}
              <em>BC</em>.
            </p>
            <p className="mt-2">
              Therefore <em>FH</em> is the same part of <em>BC</em> that unity is of some number.
            </p>
            <p className="mt-2 font-medium">
              Therefore there is a number of which <em>BC</em> is the same parts that <em>A</em>{' '}
              is of it.
            </p>
          </>
        }
      >
        <p>
          If a number be parts of a number, there is another number of which the first is the
          same parts that the second is of it.
        </p>
      </Proposition>

      <h2>Alternation of Fractional Parts</h2>

      <p>
        This proposition is the converse of the part-relationship. If A is m/n of BC (where m/n
        is a proper fraction expressed as "parts"), then there exists a number D such that BC is
        m/n of D. In other words, fractional relationships can be "inverted" by finding the right
        larger number.
      </p>

      <h3 className="mt-6">Understanding "Parts"</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <p className="text-dark-300 mb-3">
          In Euclid's terminology:
        </p>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li><strong>Part:</strong> A is a <em>part</em> of B means A = B/n for some integer n (a unit fraction like 1/3)</li>
          <li><strong>Parts:</strong> A is <em>parts</em> of B means A = m/n times B for integers m, n with 1 &lt; m &lt; n</li>
        </ul>
        <p className="text-dark-300 mt-3">
          For example, 2 is "parts" of 3, meaning 2/3 (two-thirds) of 3.
        </p>
      </div>

      <h3 className="mt-6">Visual Representation</h3>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 420 200" className="w-full max-w-lg">
          {/* Number A */}
          <g>
            <text x="20" y="35" fill="#f59e0b" fontSize="12" fontWeight="bold">A = 4</text>
            {[0, 1, 2, 3].map((i) => (
              <rect
                key={`a-${i}`}
                x={80 + i * 25}
                y={25}
                width="23"
                height="20"
                fill="rgba(239, 68, 68, 0.3)"
                stroke="#ef4444"
                strokeWidth="1"
              />
            ))}
          </g>

          {/* Number BC */}
          <g>
            <text x="20" y="80" fill="#f59e0b" fontSize="12" fontWeight="bold">BC = 6</text>
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <rect
                key={`bc-${i}`}
                x={80 + i * 25}
                y={70}
                width="23"
                height="20"
                fill={i < 4 ? 'rgba(59, 130, 246, 0.3)' : 'rgba(59, 130, 246, 0.1)'}
                stroke="#3b82f6"
                strokeWidth="1"
              />
            ))}
            <text x="250" y="85" fill="#94a3b8" fontSize="10">A is 4/6 = 2/3 of BC</text>
          </g>

          {/* Relationship */}
          <path d="M 150 50 L 150 65" stroke="#ef4444" strokeWidth="1" markerEnd="url(#arrow1)" />
          <defs>
            <marker id="arrow1" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#ef4444" />
            </marker>
          </defs>
          <text x="160" y="60" fill="#ef4444" fontSize="9">2/3</text>

          {/* The new number D */}
          <g>
            <text x="20" y="130" fill="#f59e0b" fontSize="12" fontWeight="bold">D = 9</text>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <rect
                key={`d-${i}`}
                x={80 + i * 25}
                y={120}
                width="23"
                height="20"
                fill={i < 6 ? 'rgba(34, 197, 94, 0.3)' : 'rgba(34, 197, 94, 0.1)'}
                stroke="#22c55e"
                strokeWidth="1"
              />
            ))}
            <text x="315" y="135" fill="#94a3b8" fontSize="10">BC is 2/3 of D</text>
          </g>

          {/* Relationship */}
          <path d="M 185 95 L 185 115" stroke="#22c55e" strokeWidth="1" markerEnd="url(#arrow2)" />
          <defs>
            <marker id="arrow2" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#22c55e" />
            </marker>
          </defs>
          <text x="195" y="108" fill="#22c55e" fontSize="9">2/3</text>

          {/* Key insight */}
          <rect x="80" y="160" width="260" height="30" fill="#1e293b" stroke="#f59e0b" strokeWidth="1" rx="5" />
          <text x="210" y="180" fill="#f59e0b" fontSize="11" textAnchor="middle">
            A = 2/3 of BC implies there exists D where BC = 2/3 of D
          </text>
        </svg>
      </div>

      <h3 className="mt-6">Concrete Example</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <p className="text-dark-300 mb-3">
          Let A = 4 and BC = 6
        </p>
        <p className="text-dark-300 mb-3">
          Then A is 2/3 (two-thirds) of BC.
        </p>
        <p className="text-amber-400 mt-4">
          We seek a number D such that BC is 2/3 of D.
        </p>
        <p className="text-dark-300 mt-2">
          If BC = (2/3) times D, then D = (3/2) times BC = (3/2) times 6 = 9.
        </p>
        <p className="text-dark-300 mt-4">
          Check: BC = 6 is indeed 2/3 of D = 9 (since 2/3 times 9 = 6).
        </p>
      </div>

      <h3 className="mt-6">The General Pattern</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700 text-center">
        <p className="text-dark-300 mb-4">
          If A = (m/n) times B, then there exists D such that B = (m/n) times D
        </p>
        <p className="text-amber-400 font-mono text-lg">
          D = (n/m) times B = (n times B) / m
        </p>
      </div>

      <p className="mt-4">
        This works because the fractional relationship is reversible: if A/B = m/n, then we can
        find D such that B/D = m/n by taking D = (n/m) times B.
      </p>

      <h3 className="mt-6">Why This Matters</h3>

      <div className="grid md:grid-cols-2 gap-4 mt-4">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold mb-2">Ratio Inversion</h4>
          <p className="text-dark-300 text-sm">
            This allows us to "flip" proportional relationships, finding a number above BC that
            has the same fractional relationship to BC as A has.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold mb-2">Completeness</h4>
          <p className="text-dark-300 text-sm">
            Euclid shows that for every fractional relationship, we can construct numbers on
            either side of any given number with that relationship.
          </p>
        </div>
      </div>

      <h3 className="mt-6">Key Dependencies</h3>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>
          <strong className="text-amber-400">VII.Def.4:</strong> Definition of "parts" (a
          number less than another that does not measure it)
        </li>
        <li>
          <strong className="text-amber-400">VII.5-6:</strong> Addition of parts and their
          parts
        </li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Modern Interpretation:</strong> This proposition
          states that if a/b = m/n (in lowest terms), then we can find c such that b/c = m/n.
          Specifically, c = bn/m. This is a fundamental property of rational numbers that Euclid
          proves exists in the domain of positive integers, laying the groundwork for the full
          theory of proportions applied to numbers.
        </p>
      </div>
    </LessonLayout>
  );
}
