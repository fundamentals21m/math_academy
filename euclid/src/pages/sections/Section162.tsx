import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section162() {
  return (
    <LessonLayout sectionId={162}>
      <Proposition
        title="Proposition VI.17"
        proof={
          <>
            <p>
              Let <em>A</em>, <em>B</em>, <em>C</em> be three straight lines in proportion, so that
              A:B = B:C.
            </p>
            <p className="mt-2">
              I say that the rectangle contained by A and C equals the square on B.
            </p>
            <p className="mt-2">
              Set out a fourth line D equal to B. Then A:B = B:C becomes A:B = D:C (since D = B).
            </p>
            <p className="mt-2">
              By VI.16, since A:B = D:C, the rectangle A x C = the rectangle B x D.
            </p>
            <p className="mt-2">
              But D = B, so the rectangle B x D = the rectangle B x B = the square on B.
            </p>
            <p className="mt-2 font-medium">
              Therefore the rectangle A x C = the square on B.
            </p>
            <p className="mt-2">
              Conversely, if A x C = B², then setting D = B, we have A x C = B x D. By VI.16, this
              means A:B = D:C = B:C, so A:B = B:C.
            </p>
          </>
        }
      >
        <p>
          If three straight lines be proportional, the rectangle contained by the extremes is equal
          to the square on the mean; and, if the rectangle contained by the extremes be equal to
          the square on the mean, the three straight lines will be proportional.
        </p>
      </Proposition>

      <h2>The Mean Proportional Property</h2>

      <p>
        This proposition is a special case of VI.16 where the two middle terms are equal. When
        three quantities are in <strong>continued proportion</strong> (a:b = b:c), the product of
        the extremes equals the square of the mean.
      </p>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 320 200" className="w-80 h-52">
          {/* Rectangle a x c */}
          <rect x="30" y="30" width="120" height="70" fill="#f59e0b20" stroke="#f59e0b" strokeWidth="2" />
          <text x="90" y="70" textAnchor="middle" fill="#f59e0b" fontSize="14">a x c</text>
          <text x="90" y="20" textAnchor="middle" fill="#f59e0b" fontSize="11">a</text>
          <text x="155" y="70" textAnchor="start" fill="#f59e0b" fontSize="11">c</text>

          {/* Equals sign */}
          <text x="175" y="70" textAnchor="middle" fill="#9ca3af" fontSize="20">=</text>

          {/* Square b x b */}
          <rect x="200" y="30" width="80" height="80" fill="#3b82f620" stroke="#3b82f6" strokeWidth="2" />
          <text x="240" y="75" textAnchor="middle" fill="#3b82f6" fontSize="14">b²</text>
          <text x="240" y="20" textAnchor="middle" fill="#3b82f6" fontSize="11">b</text>
          <text x="285" y="75" textAnchor="start" fill="#3b82f6" fontSize="11">b</text>

          {/* Proportion */}
          <text x="160" y="140" textAnchor="middle" fill="#22c55e" fontSize="14">
            When a : b = b : c
          </text>
          <text x="160" y="160" textAnchor="middle" fill="#9ca3af" fontSize="11">
            (b is the mean proportional between a and c)
          </text>
          <text x="160" y="185" textAnchor="middle" fill="#f59e0b" fontSize="16">
            a x c = b²
          </text>
        </svg>
      </div>

      <h3 className="mt-6">The Mean Proportional (Geometric Mean)</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <p className="text-dark-300 text-lg text-center mb-4">
          If <span className="text-amber-400">a : b = b : c</span>
        </p>
        <p className="text-dark-300 text-lg text-center mb-4">
          Then <span className="text-amber-400">ac = b²</span>
        </p>
        <p className="text-dark-300 text-lg text-center">
          Or equivalently: <span className="text-amber-400">b = √(ac)</span>
        </p>
      </div>

      <p className="mt-4">
        The quantity <em>b</em> is called the <strong>mean proportional</strong> or{' '}
        <strong>geometric mean</strong> between <em>a</em> and <em>c</em>.
      </p>

      <h3 className="mt-6">Numerical Examples</h3>

      <div className="space-y-4 mt-4">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-300">
            <strong>Example 1:</strong> 2 : 4 = 4 : 8
          </p>
          <p className="text-dark-300 mt-2">
            Extremes: 2 x 8 = 16 | Mean squared: 4² = 16 ✓
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-300">
            <strong>Example 2:</strong> 3 : 6 = 6 : 12
          </p>
          <p className="text-dark-300 mt-2">
            Extremes: 3 x 12 = 36 | Mean squared: 6² = 36 ✓
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-300">
            <strong>Finding the geometric mean:</strong> What is the mean proportional between 4 and 9?
          </p>
          <p className="text-dark-300 mt-2">
            b² = 4 x 9 = 36, so b = 6
          </p>
          <p className="text-amber-400 mt-1">
            Check: 4 : 6 = 6 : 9 (both equal 2:3) ✓
          </p>
        </div>
      </div>

      <h3 className="mt-6">Geometric Construction</h3>

      <p>
        Euclid showed in VI.13 how to construct the mean proportional geometrically using a
        semicircle:
      </p>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 280 160" className="w-72 h-40">
          {/* Base line */}
          <line x1="40" y1="120" x2="240" y2="120" stroke="#9ca3af" strokeWidth="1" />
          {/* Semicircle */}
          <path
            d="M 40,120 A 100,100 0 0,1 240,120"
            fill="none"
            stroke="#f59e0b"
            strokeWidth="2"
          />
          {/* Perpendicular */}
          <line x1="120" y1="120" x2="120" y2="40" stroke="#3b82f6" strokeWidth="2" />
          {/* Lines to top */}
          <line x1="40" y1="120" x2="120" y2="40" stroke="#22c55e" strokeWidth="1" strokeDasharray="4" />
          <line x1="240" y1="120" x2="120" y2="40" stroke="#22c55e" strokeWidth="1" strokeDasharray="4" />
          {/* Points */}
          <circle cx="40" cy="120" r="3" fill="#f59e0b" />
          <circle cx="120" cy="120" r="3" fill="#f59e0b" />
          <circle cx="240" cy="120" r="3" fill="#f59e0b" />
          <circle cx="120" cy="40" r="3" fill="#3b82f6" />
          {/* Labels */}
          <text x="35" y="135" textAnchor="middle" fill="#f59e0b" fontSize="11">A</text>
          <text x="120" y="135" textAnchor="middle" fill="#f59e0b" fontSize="11">D</text>
          <text x="245" y="135" textAnchor="middle" fill="#f59e0b" fontSize="11">B</text>
          <text x="130" y="35" textAnchor="start" fill="#3b82f6" fontSize="11">C</text>
          {/* Segment labels */}
          <text x="80" y="145" textAnchor="middle" fill="#9ca3af" fontSize="10">a</text>
          <text x="180" y="145" textAnchor="middle" fill="#9ca3af" fontSize="10">c</text>
          <text x="105" y="80" textAnchor="end" fill="#3b82f6" fontSize="10">b</text>
        </svg>
      </div>

      <p className="text-center text-dark-400 text-sm">
        CD is the mean proportional between AD and DB: AD : CD = CD : DB
      </p>

      <h3 className="mt-6">Connection to Right Triangles</h3>

      <p>
        This proposition is closely connected to VI.8 (the altitude to the hypotenuse theorem). In
        a right triangle, the altitude to the hypotenuse is the geometric mean of the two segments
        it creates.
      </p>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <h4 className="text-amber-400 font-semibold">Modern Significance</h4>
        <p className="text-dark-300 mt-2">
          The geometric mean appears throughout mathematics and science:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-dark-300">
          <li>Statistics: averaging ratios and growth rates</li>
          <li>Finance: compound annual growth rate (CAGR)</li>
          <li>Physics: characteristic impedance in transmission lines</li>
          <li>Music: the frequency ratio for equal temperament tuning</li>
        </ul>
      </div>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-6 border border-amber-500/30">
        <h4 className="text-amber-400 font-semibold">Why Geometric Mean?</h4>
        <p className="text-dark-300 mt-2">
          The term "geometric mean" comes precisely from this proposition. While the arithmetic
          mean of a and c is (a+c)/2, the geometric mean is √(ac). The geometric mean is the length
          of a side of a square that has the same area as a rectangle with sides a and c.
        </p>
      </div>
    </LessonLayout>
  );
}
