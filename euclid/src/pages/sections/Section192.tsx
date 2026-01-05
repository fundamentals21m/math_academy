import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section192() {
  return (
    <LessonLayout sectionId={192}>
      <Proposition
        title="Proposition VII.13"
        proof={
          <>
            <p>
              Let <em>A</em>, <em>B</em>, <em>C</em>, <em>D</em> be four proportional numbers,
              so that, as <em>A</em> is to <em>B</em>, so is <em>C</em> to <em>D</em>.
            </p>
            <p className="mt-2">
              I say that, as <em>A</em> is to <em>C</em>, so is <em>B</em> to <em>D</em>.
            </p>
            <p className="mt-2">
              Since, as <em>A</em> is to <em>B</em>, so is <em>C</em> to <em>D</em>, therefore,
              whatever part or parts <em>A</em> is of <em>B</em>, the same part or parts is{' '}
              <em>C</em> of <em>D</em> also. [VII.Def.20]
            </p>
            <p className="mt-2">
              Therefore, alternately, whatever part or parts <em>A</em> is of <em>C</em>, the
              same part or parts is <em>B</em> of <em>D</em> also. [VII.9, VII.10]
            </p>
            <p className="mt-2 font-medium">
              Therefore, as <em>A</em> is to <em>C</em>, so is <em>B</em> to <em>D</em>. [VII.Def.20]
            </p>
          </>
        }
      >
        <p>
          If four numbers be proportional, they will also be proportional alternately.
        </p>
      </Proposition>

      <h2>Alternation of Proportional Numbers</h2>

      <p>
        This proposition proves the <strong>alternando</strong> property for numbers: if four
        numbers are in proportion, we can swap the middle terms and still have a valid proportion.
        This is one of the most important manipulation rules for working with ratios.
      </p>

      <h3 className="mt-6">Understanding the Statement</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <p className="text-dark-300 mb-3">
          The alternando property states:
        </p>
        <p className="text-amber-400 font-mono text-lg text-center my-4">
          If A : B = C : D, then A : C = B : D
        </p>
        <p className="text-dark-300">
          We swap the "inner" terms B and C, creating a new proportion between the first
          terms (A and C) and the second terms (B and D).
        </p>
      </div>

      <h3 className="mt-6">Visual Representation</h3>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 440 240" className="w-full max-w-lg">
          {/* Original proportion box */}
          <g>
            <rect x="20" y="20" width="190" height="80" fill="#1e293b" stroke="#3b82f6" strokeWidth="2" rx="8" />
            <text x="115" y="45" fill="#3b82f6" fontSize="12" textAnchor="middle" fontWeight="bold">Original Proportion</text>

            {/* A */}
            <g>
              {[0, 1, 2, 3].map((i) => (
                <rect
                  key={`a-${i}`}
                  x={35 + i * 18}
                  y={55}
                  width="16"
                  height="14"
                  fill="rgba(239, 68, 68, 0.3)"
                  stroke="#ef4444"
                  strokeWidth="1"
                />
              ))}
              <text x="70" y="82" fill="#ef4444" fontSize="10" textAnchor="middle">A=4</text>
            </g>

            {/* B */}
            <g>
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <rect
                  key={`b-${i}`}
                  x={110 + i * 15}
                  y={55}
                  width="13"
                  height="14"
                  fill="rgba(34, 197, 94, 0.3)"
                  stroke="#22c55e"
                  strokeWidth="1"
                />
              ))}
              <text x="150" y="82" fill="#22c55e" fontSize="10" textAnchor="middle">B=6</text>
            </g>
          </g>

          {/* Equals sign */}
          <text x="220" y="65" fill="#f59e0b" fontSize="18">=</text>

          {/* Second pair */}
          <g>
            <rect x="230" y="20" width="190" height="80" fill="#1e293b" stroke="#3b82f6" strokeWidth="2" rx="8" />

            {/* C */}
            <g>
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <rect
                  key={`c-${i}`}
                  x={245 + i * 15}
                  y={55}
                  width="13"
                  height="14"
                  fill="rgba(139, 92, 246, 0.3)"
                  stroke="#8b5cf6"
                  strokeWidth="1"
                />
              ))}
              <text x="285" y="82" fill="#8b5cf6" fontSize="10" textAnchor="middle">C=6</text>
            </g>

            {/* D */}
            <g>
              {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <rect
                  key={`d-${i}`}
                  x={335 + i * 9}
                  y={55}
                  width="7"
                  height="14"
                  fill="rgba(236, 72, 153, 0.3)"
                  stroke="#ec4899"
                  strokeWidth="1"
                />
              ))}
              <text x="375" y="82" fill="#ec4899" fontSize="10" textAnchor="middle">D=9</text>
            </g>
          </g>

          {/* Arrow showing transformation */}
          <path d="M 220 110 L 220 130" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrow-alt)" />
          <defs>
            <marker id="arrow-alt" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#f59e0b" />
            </marker>
          </defs>
          <text x="240" y="125" fill="#f59e0b" fontSize="11">alternando</text>

          {/* Alternated proportion box */}
          <g>
            <rect x="20" y="145" width="190" height="80" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" rx="8" />
            <text x="115" y="170" fill="#f59e0b" fontSize="12" textAnchor="middle" fontWeight="bold">Alternated Proportion</text>

            {/* A */}
            <g>
              {[0, 1, 2, 3].map((i) => (
                <rect
                  key={`a2-${i}`}
                  x={35 + i * 18}
                  y={180}
                  width="16"
                  height="14"
                  fill="rgba(239, 68, 68, 0.3)"
                  stroke="#ef4444"
                  strokeWidth="1"
                />
              ))}
              <text x="70" y="207" fill="#ef4444" fontSize="10" textAnchor="middle">A=4</text>
            </g>

            {/* C (swapped from B position) */}
            <g>
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <rect
                  key={`c2-${i}`}
                  x={110 + i * 15}
                  y={180}
                  width="13"
                  height="14"
                  fill="rgba(139, 92, 246, 0.3)"
                  stroke="#8b5cf6"
                  strokeWidth="1"
                />
              ))}
              <text x="150" y="207" fill="#8b5cf6" fontSize="10" textAnchor="middle">C=6</text>
            </g>
          </g>

          {/* Equals sign */}
          <text x="220" y="190" fill="#f59e0b" fontSize="18">=</text>

          {/* Second pair of alternated proportion */}
          <g>
            <rect x="230" y="145" width="190" height="80" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" rx="8" />

            {/* B (swapped from C position) */}
            <g>
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <rect
                  key={`b2-${i}`}
                  x={245 + i * 15}
                  y={180}
                  width="13"
                  height="14"
                  fill="rgba(34, 197, 94, 0.3)"
                  stroke="#22c55e"
                  strokeWidth="1"
                />
              ))}
              <text x="285" y="207" fill="#22c55e" fontSize="10" textAnchor="middle">B=6</text>
            </g>

            {/* D */}
            <g>
              {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <rect
                  key={`d2-${i}`}
                  x={335 + i * 9}
                  y={180}
                  width="7"
                  height="14"
                  fill="rgba(236, 72, 153, 0.3)"
                  stroke="#ec4899"
                  strokeWidth="1"
                />
              ))}
              <text x="375" y="207" fill="#ec4899" fontSize="10" textAnchor="middle">D=9</text>
            </g>
          </g>
        </svg>
      </div>

      <h3 className="mt-6">Concrete Example</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <p className="text-dark-300 mb-2">
          Let A = 4, B = 6, C = 6, D = 9
        </p>
        <p className="text-dark-300 mb-4">
          Original proportion: A : B = C : D, i.e., 4 : 6 = 6 : 9 (both equal 2 : 3)
        </p>
        <p className="text-amber-400 mb-2">
          After alternando:
        </p>
        <p className="text-dark-300 mb-2">
          A : C = 4 : 6 = 2 : 3
        </p>
        <p className="text-dark-300 mb-2">
          B : D = 6 : 9 = 2 : 3
        </p>
        <p className="text-dark-300 mt-4">
          Indeed, A : C = B : D, confirming the alternando property.
        </p>
      </div>

      <h3 className="mt-6">The Four Proportion Operations</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <p className="text-dark-300 mb-3">
          From A : B = C : D, we can derive several other proportions:
        </p>
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <div className="bg-dark-900/50 p-3 rounded-lg">
            <p className="text-amber-400 font-semibold">Alternando (VII.13)</p>
            <p className="text-amber-400 font-mono text-center mt-2">A : C = B : D</p>
          </div>
          <div className="bg-dark-900/50 p-3 rounded-lg">
            <p className="text-dark-400 font-semibold">Invertendo</p>
            <p className="text-dark-400 font-mono text-center mt-2">B : A = D : C</p>
          </div>
          <div className="bg-dark-900/50 p-3 rounded-lg">
            <p className="text-dark-400 font-semibold">Componendo (VII.12)</p>
            <p className="text-dark-400 font-mono text-center mt-2">(A+B) : B = (C+D) : D</p>
          </div>
          <div className="bg-dark-900/50 p-3 rounded-lg">
            <p className="text-dark-400 font-semibold">Separando (VII.11)</p>
            <p className="text-dark-400 font-mono text-center mt-2">(A-B) : B = (C-D) : D</p>
          </div>
        </div>
      </div>

      <h3 className="mt-6">Modern Algebraic Proof</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700 text-center">
        <p className="text-dark-300 mb-3">
          If a/b = c/d (meaning ad = bc), then:
        </p>
        <p className="text-amber-400 font-mono text-lg mb-2">
          a/c = b/d
        </p>
        <p className="text-dark-300 mt-3 text-sm">
          Because ad = bc implies a times d = b times c, so a/c = b/d.
        </p>
      </div>

      <h3 className="mt-6">Key Dependencies</h3>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>
          <strong className="text-amber-400">VII.9:</strong> Transitivity of same-part relationships
        </li>
        <li>
          <strong className="text-amber-400">VII.10:</strong> Existence of numbers with reciprocal
          part relationships
        </li>
        <li>
          <strong className="text-amber-400">VII.Def.20:</strong> Definition of proportionality
          for numbers
        </li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Comparison with Book V:</strong> This is the
          number-theoretic analog of V.16 (alternando for magnitudes). While the statement is
          the same, Euclid provides a separate proof for numbers because the definition of
          proportion for numbers (VII.Def.20) differs from the Eudoxian definition for magnitudes
          (V.Def.5). The proof for numbers relies on the special "part" structure of rational
          ratios, while the proof for magnitudes uses the equimultiple characterization.
        </p>
      </div>
    </LessonLayout>
  );
}
