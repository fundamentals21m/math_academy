import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section74() {
  return (
    <LessonLayout sectionId={74}>
      <Proposition
        title="Proposition III.10"
        proof={
          <>
            <p>
              Let <em>ABC</em> be a circle; I say that a circle does not cut a circle at more than
              two points.
            </p>
            <p className="mt-2">
              For, if possible, let the circle <em>ABC</em> cut the circle <em>DEF</em> at more
              than two points, namely <em>B</em>, <em>G</em>, <em>F</em>, <em>H</em>; let{' '}
              <em>BH</em>, <em>BG</em> be joined and bisected at the points <em>K</em>, <em>L</em>;
              from <em>K</em>, <em>L</em> let <em>KC</em>, <em>LM</em> be drawn at right angles to{' '}
              <em>BH</em>, <em>BG</em> and carried through to the points <em>A</em>, <em>E</em>.
            </p>
            <p className="mt-2">
              Then, since in the circle <em>ABC</em> a straight line <em>AC</em> cuts a straight
              line <em>BH</em> into two equal parts and at right angles, the center of the circle{' '}
              <em>ABC</em> is on <em>AC</em>. [III. 1, Por.]
            </p>
            <p className="mt-2">
              Again, since in the same circle <em>ABC</em> a straight line <em>NO</em> cuts a
              straight line <em>BG</em> into two equal parts and at right angles, the center of
              the circle <em>ABC</em> is on <em>NO</em>. [III. 1, Por.]
            </p>
            <p className="mt-2">
              But it was also proved to be on <em>AC</em>, and the straight lines <em>AC</em>,{' '}
              <em>NO</em> meet in no point but <em>P</em>; therefore the point <em>P</em> is the
              center of the circle <em>ABC</em>.
            </p>
            <p className="mt-2">
              Similarly we can prove that <em>P</em> is also the center of the circle <em>DEF</em>;
              therefore two circles cutting one another have the same center <em>P</em>: which is
              impossible. [III. 5]
            </p>
            <p className="mt-2 font-medium">
              Therefore a circle does not cut a circle at more than two points.
            </p>
          </>
        }
      >
        <p>A circle does not cut a circle at more than two points.</p>
      </Proposition>

      <h2>Analysis</h2>

      <p>
        This proposition proves a fundamental fact: two distinct circles can intersect at{' '}
        <strong>most</strong> two points. They might intersect at zero points (disjoint), one point
        (tangent), or two points—but never more.
      </p>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 320 200" className="w-80 h-52">
          {/* Circle 1 */}
          <circle cx="120" cy="100" r="70" fill="none" stroke="#f59e0b" strokeWidth="2" />
          {/* Circle 2 */}
          <circle cx="200" cy="100" r="60" fill="none" stroke="#3b82f6" strokeWidth="2" />
          {/* Intersection points */}
          <circle cx="160" cy="55" r="4" fill="#22c55e" />
          <circle cx="160" cy="145" r="4" fill="#22c55e" />
          {/* Labels */}
          <text x="165" y="50" fill="#22c55e" fontSize="11">P₁</text>
          <text x="165" y="160" fill="#22c55e" fontSize="11">P₂</text>
          <text x="100" y="100" fill="#f59e0b" fontSize="11">Circle 1</text>
          <text x="210" y="100" fill="#3b82f6" fontSize="11">Circle 2</text>
        </svg>
      </div>

      <h3>Proof by Contradiction</h3>

      <p>
        Suppose two circles intersected at <em>four</em> points B, G, F, H. Then:
      </p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Draw the perpendicular bisector of chord <em>BH</em> in the first circle—it passes through the center</li>
        <li>Draw the perpendicular bisector of chord <em>BG</em> in the first circle—it also passes through the center</li>
        <li>These bisectors meet at a unique point <em>P</em>, which is the center of the first circle</li>
        <li>The same argument shows <em>P</em> is the center of the second circle</li>
        <li>But by III.5, intersecting circles cannot have the same center—contradiction!</li>
      </ul>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 280 200" className="w-72 h-52">
          {/* Two circles supposedly with 4 intersection points */}
          <circle cx="140" cy="100" r="70" fill="none" stroke="#f59e0b" strokeWidth="2" />
          <circle cx="140" cy="100" r="50" fill="none" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4" />
          {/* Hypothetical 4 points */}
          <circle cx="100" cy="55" r="3" fill="#ef4444" />
          <circle cx="180" cy="55" r="3" fill="#ef4444" />
          <circle cx="100" cy="145" r="3" fill="#ef4444" />
          <circle cx="180" cy="145" r="3" fill="#ef4444" />
          {/* Shared center */}
          <circle cx="140" cy="100" r="4" fill="#22c55e" />
          {/* X mark to show impossible */}
          <text x="140" y="180" fill="#ef4444" fontSize="12" textAnchor="middle">4 points → same center → impossible!</text>
          <text x="145" y="95" fill="#22c55e" fontSize="11">P</text>
          {/* Labels for points */}
          <text x="90" y="50" fill="#ef4444" fontSize="10">B</text>
          <text x="185" y="50" fill="#ef4444" fontSize="10">G</text>
          <text x="90" y="155" fill="#ef4444" fontSize="10">F</text>
          <text x="185" y="155" fill="#ef4444" fontSize="10">H</text>
        </svg>
      </div>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition III.1 and its corollary (perpendicular bisector of chord passes through center)</li>
        <li>Proposition III.5 (intersecting circles cannot share a center)</li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Geometric vs. Algebraic:</strong> Algebraically, two
          circle equations (each quadratic) intersect where both are satisfied—a system that
          yields at most 2 solutions. Euclid's purely geometric proof gives the same result
          without coordinates.
        </p>
      </div>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-6 border border-dark-700">
        <p className="text-dark-300 text-sm">
          <strong className="text-amber-400">The Three Cases:</strong>
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-dark-300 text-sm">
          <li><strong>0 points:</strong> Circles are disjoint (too far apart or one inside the other)</li>
          <li><strong>1 point:</strong> Circles are tangent (internally or externally)</li>
          <li><strong>2 points:</strong> Circles intersect (cross each other)</li>
        </ul>
      </div>
    </LessonLayout>
  );
}
