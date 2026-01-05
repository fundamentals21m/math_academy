import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section161() {
  return (
    <LessonLayout sectionId={161}>
      <Proposition
        title="Proposition VI.16"
        proof={
          <>
            <p>
              Let <em>AB</em>, <em>CD</em>, <em>E</em>, <em>F</em> be four proportional straight
              lines, so that AB:CD = E:F.
            </p>
            <p className="mt-2">
              I say that the rectangle contained by AB and F equals the rectangle contained by CD
              and E.
            </p>
            <p className="mt-2">
              Complete the rectangles AG (contained by AB, F) and CH (contained by CD, E).
            </p>
            <p className="mt-2">
              Since AB:CD = E:F, and E = DH and F = BG (by construction), therefore AB:CD = DH:BG.
            </p>
            <p className="mt-2">
              In parallelograms AG and CH, angle ABG = angle CDH (both right angles), so by VI.14
              (equal parallelograms with equal angles have reciprocal sides), the sides are
              reciprocally proportional.
            </p>
            <p className="mt-2">
              Since the sides about the equal angles are reciprocally proportional, by VI.14,
              parallelogram AG = parallelogram CH.
            </p>
            <p className="mt-2 font-medium">
              Therefore rectangle AB x F = rectangle CD x E.
            </p>
            <p className="mt-2">
              Conversely, if the rectangle AB x F = rectangle CD x E, then by reversing the
              argument, AB:CD = E:F.
            </p>
          </>
        }
      >
        <p>
          If four straight lines be proportional, the rectangle contained by the extremes is equal
          to the rectangle contained by the means; and, if the rectangle contained by the extremes
          be equal to the rectangle contained by the means, the four straight lines will be
          proportional.
        </p>
      </Proposition>

      <h2>The Fundamental Property of Proportions</h2>

      <p>
        This proposition establishes one of the most important connections in all of mathematics:
        the relationship between proportions and products. In modern algebraic terms, this is the
        statement that <strong>cross-multiplication</strong> works for proportions.
      </p>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 360 200" className="w-full max-w-md h-52">
          {/* Rectangle a x d */}
          <rect x="30" y="30" width="120" height="80" fill="none" stroke="#f59e0b" strokeWidth="2" />
          <text x="90" y="75" textAnchor="middle" fill="#f59e0b" fontSize="14">a x d</text>
          {/* Labels for first rectangle */}
          <text x="90" y="25" textAnchor="middle" fill="#f59e0b" fontSize="11">a</text>
          <text x="155" y="75" textAnchor="start" fill="#f59e0b" fontSize="11">d</text>

          {/* Equals sign */}
          <text x="180" y="75" textAnchor="middle" fill="#9ca3af" fontSize="20">=</text>

          {/* Rectangle b x c */}
          <rect x="210" y="30" width="120" height="80" fill="none" stroke="#3b82f6" strokeWidth="2" />
          <text x="270" y="75" textAnchor="middle" fill="#3b82f6" fontSize="14">b x c</text>
          {/* Labels for second rectangle */}
          <text x="270" y="25" textAnchor="middle" fill="#3b82f6" fontSize="11">b</text>
          <text x="335" y="75" textAnchor="start" fill="#3b82f6" fontSize="11">c</text>

          {/* Proportion below */}
          <text x="180" y="140" textAnchor="middle" fill="#22c55e" fontSize="14">
            When a : b = c : d
          </text>
          <text x="180" y="160" textAnchor="middle" fill="#9ca3af" fontSize="12">
            (extremes: a, d | means: b, c)
          </text>
          <text x="180" y="180" textAnchor="middle" fill="#f59e0b" fontSize="14">
            a x d = b x c
          </text>
        </svg>
      </div>

      <h3 className="mt-6">The Cross-Multiplication Rule</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <p className="text-dark-300 text-lg text-center mb-4">
          If <span className="text-amber-400">a : b = c : d</span>
        </p>
        <p className="text-dark-300 text-lg text-center mb-4">
          Then <span className="text-amber-400">a x d = b x c</span>
        </p>
        <p className="text-dark-400 text-center text-sm">
          And conversely: if a x d = b x c, then a : b = c : d
        </p>
      </div>

      <h3 className="mt-6">Terminology</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold">Extremes</h4>
          <p className="text-dark-300 mt-2">
            The first and fourth terms of the proportion: <em>a</em> and <em>d</em>
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h4 className="text-amber-400 font-semibold">Means</h4>
          <p className="text-dark-300 mt-2">
            The second and third terms of the proportion: <em>b</em> and <em>c</em>
          </p>
        </div>
      </div>

      <h3 className="mt-6">Numerical Example</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700">
        <p className="text-dark-300">
          Consider the proportion 3 : 4 = 6 : 8
        </p>
        <p className="text-dark-300 mt-2">
          <strong>Extremes:</strong> 3 and 8 | Product: 3 x 8 = 24
        </p>
        <p className="text-dark-300 mt-2">
          <strong>Means:</strong> 4 and 6 | Product: 4 x 6 = 24
        </p>
        <p className="text-amber-400 mt-2">
          The products are equal, confirming the proportion.
        </p>
      </div>

      <h3 className="mt-6">Proof Outline</h3>

      <p>
        Euclid's proof uses VI.14 (reciprocal proportion in equal parallelograms):
      </p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Construct rectangles with sides a, d and b, c respectively</li>
        <li>The given proportion a:b = c:d means the sides are reciprocally proportional</li>
        <li>By VI.14, parallelograms with reciprocal sides and equal angles are equal in area</li>
        <li>Therefore the rectangle a x d equals the rectangle b x c</li>
      </ul>

      <h3 className="mt-6">Geometric Interpretation</h3>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 300 180" className="w-72 h-44">
          {/* Rectangle a x d */}
          <rect x="20" y="20" width="100" height="60" fill="#f59e0b20" stroke="#f59e0b" strokeWidth="2" />
          {/* Rectangle b x c - same area, different shape */}
          <rect x="180" y="20" width="80" height="75" fill="#3b82f620" stroke="#3b82f6" strokeWidth="2" />
          {/* Labels */}
          <text x="70" y="55" textAnchor="middle" fill="#f59e0b" fontSize="12">a x d</text>
          <text x="220" y="60" textAnchor="middle" fill="#3b82f6" fontSize="12">b x c</text>
          {/* Dimensions */}
          <text x="70" y="15" textAnchor="middle" fill="#f59e0b" fontSize="10">a = 100</text>
          <text x="125" y="55" textAnchor="start" fill="#f59e0b" fontSize="10">d = 60</text>
          <text x="220" y="15" textAnchor="middle" fill="#3b82f6" fontSize="10">b = 80</text>
          <text x="265" y="60" textAnchor="start" fill="#3b82f6" fontSize="10">c = 75</text>
          {/* Equal areas */}
          <text x="150" y="130" textAnchor="middle" fill="#22c55e" fontSize="12">
            100 : 80 = 75 : 60
          </text>
          <text x="150" y="150" textAnchor="middle" fill="#9ca3af" fontSize="11">
            Area = 6000 (both rectangles)
          </text>
        </svg>
      </div>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <h4 className="text-amber-400 font-semibold">Historical Significance</h4>
        <p className="text-dark-300 mt-2">
          This proposition is the geometric foundation for the algebraic technique of
          cross-multiplication. Before symbolic algebra, Euclid proved this fundamental property
          using rectangles and their areas. Today we write a/b = c/d implies ad = bc, but Euclid
          demonstrated this using pure geometry more than 2000 years ago.
        </p>
      </div>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-6 border border-amber-500/30">
        <h4 className="text-amber-400 font-semibold">Modern Applications</h4>
        <ul className="list-disc list-inside mt-2 space-y-1 text-dark-300">
          <li>Solving proportions in algebra</li>
          <li>Similar triangles and scale factors</li>
          <li>Unit conversions and dimensional analysis</li>
          <li>Physics formulas involving proportional relationships</li>
        </ul>
      </div>
    </LessonLayout>
  );
}
