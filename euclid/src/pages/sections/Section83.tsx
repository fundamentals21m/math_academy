import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section83() {
  return (
    <LessonLayout sectionId={83}>
      <Proposition
        title="Proposition III.19"
        proof={
          <>
            <p>
              Let a straight line <em>DE</em> touch the circle <em>ABC</em> at <em>C</em>; from{' '}
              <em>C</em> let <em>CA</em> be drawn at right angles to <em>DE</em>.
            </p>
            <p className="mt-2">
              I say that the center of the circle is on <em>CA</em>.
            </p>
            <p className="mt-2">
              For suppose it is not, but, if possible, let <em>F</em> be the center, and let{' '}
              <em>CF</em> be joined.
            </p>
            <p className="mt-2">
              Since a straight line <em>DE</em> touches the circle <em>ABC</em>, and <em>FC</em>{' '}
              has been joined from the center to the point of contact, <em>FC</em> is
              perpendicular to <em>DE</em>; [III. 18] therefore the angle <em>FCE</em> is right.
            </p>
            <p className="mt-2">
              But the angle <em>ACE</em> is also right; therefore the angle <em>FCE</em> is equal
              to the angle <em>ACE</em>, the less to the greater: which is impossible.
            </p>
            <p className="mt-2 font-medium">
              Therefore <em>F</em> is not the center of the circle <em>ABC</em>. Similarly we can
              prove that neither is any other point except a point on <em>AC</em>.
            </p>
          </>
        }
      >
        <p>
          If a straight line touch a circle, and from the point of contact a straight line be
          drawn at right angles to the tangent, the center of the circle will be on the straight
          line so drawn.
        </p>
      </Proposition>

      <h2>Analysis</h2>

      <p>
        This proposition is another characterization of the tangent-radius relationship: if you
        draw a perpendicular to the tangent at the point of tangency, the center lies on that
        perpendicular.
      </p>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 280 220" className="w-72 h-56">
          {/* Circle */}
          <circle cx="140" cy="100" r="60" fill="none" stroke="#f59e0b" strokeWidth="2" />
          {/* Center on the perpendicular */}
          <circle cx="140" cy="100" r="4" fill="#f59e0b" />
          {/* Point of tangency C */}
          <circle cx="200" cy="100" r="4" fill="#22c55e" />
          {/* Tangent line DE */}
          <line x1="200" y1="40" x2="200" y2="160" stroke="#3b82f6" strokeWidth="2" />
          {/* Perpendicular CA (through center) */}
          <line x1="200" y1="100" x2="60" y2="100" stroke="#22c55e" strokeWidth="2" />
          {/* Right angle marker */}
          <path d="M 190 100 L 190 110 L 200 110" fill="none" stroke="#6b7280" strokeWidth="1" />
          {/* Labels */}
          <text x="130" y="95" fill="#f59e0b" fontSize="11">center</text>
          <text x="205" y="105" fill="#22c55e" fontSize="11">C</text>
          <text x="205" y="45" fill="#3b82f6" fontSize="11">D</text>
          <text x="205" y="165" fill="#3b82f6" fontSize="11">E</text>
          <text x="55" y="95" fill="#22c55e" fontSize="11">A</text>
        </svg>
      </div>

      <h3>The Proof</h3>

      <p>
        Suppose the center <em>F</em> were not on the perpendicular line <em>CA</em>. Then:
      </p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>By III.18, the radius <em>FC</em> is perpendicular to tangent <em>DE</em></li>
        <li>So angle <em>FCE</em> = 90°</li>
        <li>But <em>CA</em> is also perpendicular to <em>DE</em> (given)</li>
        <li>So angle <em>ACE</em> = 90°</li>
        <li>If <em>F</em> ≠ <em>A</em>, then one of these angles contains the other, which is impossible</li>
      </ul>

      <p className="mt-4">
        Therefore <em>F</em> must lie on line <em>CA</em>.
      </p>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition III.18 (radius to tangent point is perpendicular)</li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Finding the Center:</strong> This gives another
          method to find a circle's center: draw tangent lines at two points, then draw
          perpendiculars at those tangent points. The perpendiculars meet at the center.
        </p>
      </div>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-6 border border-dark-700">
        <h3 className="text-amber-400 font-semibold mb-2">Summary: III.16–19</h3>
        <ul className="list-disc list-inside space-y-2 text-dark-300 text-sm">
          <li><strong>III.16:</strong> Perpendicular to diameter at endpoint is tangent</li>
          <li><strong>III.17:</strong> How to construct a tangent from external point</li>
          <li><strong>III.18:</strong> Radius to tangent point is perpendicular</li>
          <li><strong>III.19:</strong> Center lies on perpendicular to tangent at tangent point</li>
        </ul>
      </div>
    </LessonLayout>
  );
}
