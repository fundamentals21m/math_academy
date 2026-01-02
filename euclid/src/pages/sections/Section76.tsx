import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section76() {
  return (
    <LessonLayout sectionId={76}>
      <Proposition
        title="Proposition III.12"
        proof={
          <>
            <p>
              Let the circles <em>ABC</em>, <em>ADE</em> touch one another externally at the point{' '}
              <em>A</em>; I say that the straight line joining their centers will pass through{' '}
              <em>A</em>.
            </p>
            <p className="mt-2">
              For let it not, but, if possible, let it pass as <em>FCDG</em>; let <em>AF</em>,{' '}
              <em>AG</em> be joined.
            </p>
            <p className="mt-2">
              Then, since the point <em>F</em> is the center of the circle <em>ABC</em>,{' '}
              <em>FA</em> is equal to <em>FC</em>.
            </p>
            <p className="mt-2">
              Again, since the point <em>G</em> is the center of the circle <em>ADE</em>,{' '}
              <em>GA</em> is equal to <em>GD</em>.
            </p>
            <p className="mt-2">
              But <em>FA</em> was also proved equal to <em>FC</em>; therefore <em>FA</em>,{' '}
              <em>AG</em> are equal to <em>FC</em>, <em>GD</em>, so that the whole <em>FG</em> is
              greater than <em>FA</em>, <em>AG</em>.
            </p>
            <p className="mt-2">
              But it is also less [I. 20]: which is impossible.
            </p>
            <p className="mt-2 font-medium">
              Therefore the straight line joined from <em>F</em> to <em>G</em> will not fail to
              pass through the point of contact at <em>A</em>; therefore it will pass through it.
            </p>
          </>
        }
      >
        <p>
          If two circles touch one another externally, the straight line joining their centers
          will pass through the point of contact.
        </p>
      </Proposition>

      <h2>Analysis</h2>

      <p>
        This is the companion to III.11, dealing with <em>externally</em> tangent circles. The line
        connecting the centers of two externally tangent circles passes through their point of
        tangency.
      </p>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 320 180" className="w-80 h-46">
          {/* Circle 1 */}
          <circle cx="100" cy="90" r="60" fill="none" stroke="#f59e0b" strokeWidth="2" />
          {/* Circle 2 */}
          <circle cx="200" cy="90" r="40" fill="none" stroke="#3b82f6" strokeWidth="2" />
          {/* Centers */}
          <circle cx="100" cy="90" r="3" fill="#f59e0b" />
          <circle cx="200" cy="90" r="3" fill="#3b82f6" />
          {/* Point of tangency */}
          <circle cx="160" cy="90" r="4" fill="#22c55e" />
          {/* Line through centers */}
          <line x1="100" y1="90" x2="200" y2="90" stroke="#22c55e" strokeWidth="2" />
          {/* Labels */}
          <text x="95" y="110" fill="#f59e0b" fontSize="11">F</text>
          <text x="195" y="110" fill="#3b82f6" fontSize="11">G</text>
          <text x="155" y="80" fill="#22c55e" fontSize="11">A</text>
        </svg>
      </div>

      <h3>The Proof</h3>

      <p>
        Suppose the line <em>FG</em> did not pass through tangent point <em>A</em>. Let the line
        pass through <em>C</em> on the first circle and <em>D</em> on the second.
      </p>

      <p className="mt-4">Then:</p>
      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li><em>FA</em> = <em>FC</em> (radii of first circle)</li>
        <li><em>GA</em> = <em>GD</em> (radii of second circle)</li>
        <li><em>FA</em> + <em>AG</em> = <em>FC</em> + <em>GD</em> = <em>FG</em></li>
      </ul>

      <p className="mt-4">
        But by the triangle inequality, <em>FA</em> + <em>AG</em> &gt; <em>FG</em> (unless{' '}
        <em>A</em> lies on <em>FG</em>). Contradiction!
      </p>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 320 180" className="w-80 h-46">
          {/* Circle 1 */}
          <circle cx="100" cy="90" r="60" fill="none" stroke="#f59e0b" strokeWidth="2" />
          {/* Circle 2 */}
          <circle cx="200" cy="90" r="40" fill="none" stroke="#3b82f6" strokeWidth="2" />
          {/* Centers */}
          <circle cx="100" cy="90" r="3" fill="#f59e0b" />
          <circle cx="200" cy="90" r="3" fill="#3b82f6" />
          {/* Point of tangency A (not on line FG in hypothesis) */}
          <circle cx="160" cy="60" r="3" fill="#22c55e" />
          {/* Wrong line FG (not through A) */}
          <line x1="100" y1="90" x2="200" y2="90" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="4" />
          {/* FA and GA */}
          <line x1="100" y1="90" x2="160" y2="60" stroke="#6b7280" strokeWidth="1" />
          <line x1="200" y1="90" x2="160" y2="60" stroke="#6b7280" strokeWidth="1" />
          {/* Labels */}
          <text x="95" y="105" fill="#f59e0b" fontSize="11">F</text>
          <text x="205" y="105" fill="#3b82f6" fontSize="11">G</text>
          <text x="155" y="55" fill="#22c55e" fontSize="11">A?</text>
          {/* Triangle inequality */}
          <text x="150" y="140" fill="#ef4444" fontSize="10" textAnchor="middle">FA + AG &gt; FG → contradiction</text>
        </svg>
      </div>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition I.20 (triangle inequality)</li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Distance Formula:</strong> For externally tangent
          circles with radii <em>r₁</em> and <em>r₂</em>, the distance between centers equals{' '}
          <em>r₁ + r₂</em>. Compare this to <em>R - r</em> for internally tangent circles.
        </p>
      </div>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-6 border border-dark-700">
        <h3 className="text-amber-400 font-semibold mb-2">Summary: Line of Centers</h3>
        <ul className="list-disc list-inside space-y-2 text-dark-300 text-sm">
          <li><strong>Internal tangency (III.11):</strong> distance = |R - r|, line through tangent point</li>
          <li><strong>External tangency (III.12):</strong> distance = R + r, line through tangent point</li>
          <li><strong>Intersection (III.5):</strong> different centers (line of centers bisects the common chord)</li>
        </ul>
      </div>
    </LessonLayout>
  );
}
