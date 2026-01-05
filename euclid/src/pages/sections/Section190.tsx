import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section190() {
  return (
    <LessonLayout sectionId={190}>
      <Proposition
        title="Proposition VII.11"
        proof={
          <>
            <p>
              Let <em>A</em> be to <em>B</em> as <em>C</em> is to <em>D</em>.
            </p>
            <p className="mt-2">
              I say that, as <em>A</em> is to <em>B</em>, so is the difference of <em>A</em>,{' '}
              <em>C</em> to the difference of <em>B</em>, <em>D</em>.
            </p>
            <p className="mt-2">
              For since, as <em>A</em> is to <em>B</em>, so is <em>C</em> to <em>D</em>,
              whatever part or parts <em>A</em> is of <em>B</em>, the same part or parts is{' '}
              <em>C</em> of <em>D</em> also. [VII.Def.20]
            </p>
            <p className="mt-2">
              Therefore also the remainder <em>A</em> minus <em>C</em> is the same part or parts
              of <em>B</em> minus <em>D</em> that <em>A</em> is of <em>B</em>. [VII.7, 8]
            </p>
            <p className="mt-2 font-medium">
              Therefore, as <em>A</em> is to <em>B</em>, so is <em>A</em> minus <em>C</em> to{' '}
              <em>B</em> minus <em>D</em>. [VII.Def.20]
            </p>
          </>
        }
      >
        <p>
          If, as whole is to whole, so is a subtracted number to a subtracted number, the
          remainder will also be to the remainder as whole to whole.
        </p>
      </Proposition>

      <h2>The Remainder Property of Proportions</h2>

      <p>
        This is one of the most important properties of proportional numbers. When four numbers
        are in proportion, the differences of corresponding pairs are also in the same proportion.
        This is the arithmetic analog of the geometric remainder theorem from Book V.
      </p>

      <h3 className="mt-6">Understanding the Statement</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <p className="text-dark-300 mb-3">
          If A : B = C : D, then:
        </p>
        <p className="text-amber-400 font-mono text-lg text-center my-4">
          A : B = (A - C) : (B - D)
        </p>
        <p className="text-dark-300">
          Assuming A &gt; C and B &gt; D (so the differences are positive numbers).
        </p>
      </div>

      <h3 className="mt-6">Visual Representation</h3>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 420 220" className="w-full max-w-lg">
          {/* Number A */}
          <g>
            <text x="20" y="35" fill="#f59e0b" fontSize="12" fontWeight="bold">A = 12</text>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => (
              <rect
                key={`a-${i}`}
                x={80 + i * 22}
                y={25}
                width="20"
                height="18"
                fill={i < 8 ? 'rgba(59, 130, 246, 0.3)' : 'rgba(239, 68, 68, 0.3)'}
                stroke={i < 8 ? '#3b82f6' : '#ef4444'}
                strokeWidth="1"
              />
            ))}
            <text x="160" y="58" fill="#3b82f6" fontSize="9">C = 8</text>
            <text x="300" y="58" fill="#ef4444" fontSize="9">A-C = 4</text>
          </g>

          {/* Number B */}
          <g>
            <text x="20" y="95" fill="#f59e0b" fontSize="12" fontWeight="bold">B = 9</text>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <rect
                key={`b-${i}`}
                x={80 + i * 22}
                y={85}
                width="20"
                height="18"
                fill={i < 6 ? 'rgba(59, 130, 246, 0.3)' : 'rgba(239, 68, 68, 0.3)'}
                stroke={i < 6 ? '#3b82f6' : '#ef4444'}
                strokeWidth="1"
              />
            ))}
            <text x="135" y="118" fill="#3b82f6" fontSize="9">D = 6</text>
            <text x="232" y="118" fill="#ef4444" fontSize="9">B-D = 3</text>
          </g>

          {/* Ratio display */}
          <g>
            <rect x="80" y="140" width="130" height="30" fill="#1e293b" stroke="#3b82f6" strokeWidth="1" rx="5" />
            <text x="145" y="160" fill="#3b82f6" fontSize="11" textAnchor="middle">
              A : B = 12 : 9 = 4 : 3
            </text>
          </g>

          <g>
            <rect x="230" y="140" width="130" height="30" fill="#1e293b" stroke="#ef4444" strokeWidth="1" rx="5" />
            <text x="295" y="160" fill="#ef4444" fontSize="11" textAnchor="middle">
              (A-C) : (B-D) = 4 : 3
            </text>
          </g>

          {/* Equals sign */}
          <text x="215" y="160" fill="#f59e0b" fontSize="14">=</text>

          {/* Bottom summary */}
          <rect x="80" y="185" width="280" height="25" fill="#1e293b" stroke="#f59e0b" strokeWidth="1" rx="5" />
          <text x="220" y="202" fill="#f59e0b" fontSize="11" textAnchor="middle">
            Same ratio: whole to whole = remainder to remainder
          </text>
        </svg>
      </div>

      <h3 className="mt-6">Concrete Example</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <p className="text-dark-300 mb-2">
          Let A = 12, B = 9, C = 8, D = 6
        </p>
        <p className="text-dark-300 mb-2">
          Check: A : B = 12 : 9 = 4 : 3
        </p>
        <p className="text-dark-300 mb-2">
          Check: C : D = 8 : 6 = 4 : 3
        </p>
        <p className="text-amber-400 mt-4">
          The remainders are:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-dark-300">
          <li>A - C = 12 - 8 = 4</li>
          <li>B - D = 9 - 6 = 3</li>
        </ul>
        <p className="text-dark-300 mt-4">
          And (A - C) : (B - D) = 4 : 3, which equals the original ratio A : B.
        </p>
      </div>

      <h3 className="mt-6">Why This Works</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <p className="text-dark-300 mb-3">
          The proof uses VII.7 and VII.8, which showed that subtraction preserves the "part"
          and "parts" relationships.
        </p>
        <p className="text-dark-300 mb-3">
          If A is 4/3 of B (meaning A = (4/3)B), and C is 4/3 of D (meaning C = (4/3)D), then:
        </p>
        <p className="text-amber-400 font-mono text-center my-4">
          A - C = (4/3)B - (4/3)D = (4/3)(B - D)
        </p>
        <p className="text-dark-300">
          So (A - C) is still 4/3 of (B - D), maintaining the ratio.
        </p>
      </div>

      <h3 className="mt-6">Modern Algebraic Form</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700 text-center">
        <p className="text-amber-400 font-mono text-lg mb-2">
          If a/b = c/d (cross-multiplied: ad = bc)
        </p>
        <p className="text-amber-400 font-mono text-lg">
          Then a/b = (a-c)/(b-d)
        </p>
        <p className="text-dark-300 mt-4 text-sm">
          This follows because a(b-d) = ab - ad = ab - bc = b(a-c)
        </p>
      </div>

      <h3 className="mt-6">Applications</h3>

      <div className="grid md:grid-cols-2 gap-4 mt-4">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold mb-2">Euclidean Algorithm</h4>
          <p className="text-dark-300 text-sm">
            This property is essential for the Euclidean algorithm (VII.1-2). When we subtract
            the smaller from the larger repeatedly, the ratio is preserved, allowing us to find
            common measures.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold mb-2">Continued Fractions</h4>
          <p className="text-dark-300 text-sm">
            This remainder property underlies continued fraction expansions, where we repeatedly
            take differences while preserving the essential ratio relationship.
          </p>
        </div>
      </div>

      <h3 className="mt-6">Key Dependencies</h3>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>
          <strong className="text-amber-400">VII.7:</strong> If a number be that part of a
          number which a subtracted number is of a subtracted number, the remainder will be
          the same part of the remainder
        </li>
        <li>
          <strong className="text-amber-400">VII.8:</strong> The same for "parts" (fractions m/n)
        </li>
        <li>
          <strong className="text-amber-400">VII.Def.20:</strong> Definition of proportionality
          for numbers
        </li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Comparison with Book V:</strong> This proposition
          is the number-theoretic analog of V.19 (separando for magnitudes). However, Euclid
          gives a separate proof here for numbers because his definition of proportion for
          numbers (VII.Def.20) differs from that for magnitudes (V.Def.5). For numbers, proportion
          is defined in terms of parts and multiples, while for magnitudes it uses the equimultiple
          definition of Eudoxus.
        </p>
      </div>
    </LessonLayout>
  );
}
