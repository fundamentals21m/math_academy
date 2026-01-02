import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section75() {
  return (
    <LessonLayout sectionId={75}>
      <Proposition
        title="Proposition III.11"
        proof={
          <>
            <p>
              Let the circles <em>ABC</em>, <em>ADE</em> touch one another internally at the point{' '}
              <em>A</em>, and let <em>F</em> be the center of the circle <em>ABC</em>, and{' '}
              <em>G</em> the center of <em>ADE</em>.
            </p>
            <p className="mt-2">
              I say that the straight line joining <em>F</em> to <em>G</em>, when produced, will
              fall upon <em>A</em>.
            </p>
            <p className="mt-2">
              For suppose it does not, but, if possible, let it fall as <em>FGH</em>, and let{' '}
              <em>AF</em>, <em>AG</em> be joined.
            </p>
            <p className="mt-2">
              Then, since <em>AG</em>, <em>GF</em> are greater than <em>FA</em>, that is, greater
              than <em>FH</em>, let <em>FG</em> be subtracted from each; therefore the remainder{' '}
              <em>AG</em> is greater than the remainder <em>GH</em>.
            </p>
            <p className="mt-2">
              But <em>AG</em> is equal to <em>GD</em>; therefore <em>GD</em> is also greater than{' '}
              <em>GH</em>, the less than the greater: which is impossible.
            </p>
            <p className="mt-2 font-medium">
              Therefore the straight line joined from <em>F</em> to <em>G</em> will not fail to
              fall on <em>A</em>; therefore it will fall on it.
            </p>
          </>
        }
      >
        <p>
          If two circles touch one another internally, and their centers be taken, the straight
          line joining their centers, if it be also produced, will fall on the point of contact of
          the circles.
        </p>
      </Proposition>

      <h2>Analysis</h2>

      <p>
        When two circles are internally tangent, the line connecting their centers passes through
        the point of tangency. This is a key property for understanding the geometry of tangent
        circles.
      </p>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 280 200" className="w-72 h-52">
          {/* Outer circle */}
          <circle cx="120" cy="100" r="80" fill="none" stroke="#f59e0b" strokeWidth="2" />
          {/* Inner circle (internally tangent) */}
          <circle cx="160" cy="100" r="40" fill="none" stroke="#3b82f6" strokeWidth="2" />
          {/* Centers */}
          <circle cx="120" cy="100" r="3" fill="#f59e0b" />
          <circle cx="160" cy="100" r="3" fill="#3b82f6" />
          {/* Point of tangency */}
          <circle cx="200" cy="100" r="4" fill="#22c55e" />
          {/* Line through centers to tangent point */}
          <line x1="120" y1="100" x2="200" y2="100" stroke="#22c55e" strokeWidth="2" />
          {/* Labels */}
          <text x="115" y="90" fill="#f59e0b" fontSize="11">F</text>
          <text x="155" y="90" fill="#3b82f6" fontSize="11">G</text>
          <text x="205" y="105" fill="#22c55e" fontSize="11">A</text>
        </svg>
      </div>

      <h3>The Proof</h3>

      <p>
        Suppose the line <em>FG</em> (connecting centers) did <em>not</em> pass through the point
        of tangency <em>A</em>, but instead crossed the circle at some other point <em>H</em>.
      </p>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 300 200" className="w-76 h-52">
          {/* Outer circle */}
          <circle cx="130" cy="100" r="80" fill="none" stroke="#f59e0b" strokeWidth="2" />
          {/* Inner circle */}
          <circle cx="170" cy="100" r="40" fill="none" stroke="#3b82f6" strokeWidth="2" />
          {/* Centers */}
          <circle cx="130" cy="100" r="3" fill="#f59e0b" />
          <circle cx="170" cy="100" r="3" fill="#3b82f6" />
          {/* Point of tangency A */}
          <circle cx="210" cy="100" r="3" fill="#22c55e" />
          {/* Wrong line FGH (not through A) */}
          <line x1="130" y1="100" x2="130" y2="20" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="4" />
          {/* FA and GA */}
          <line x1="130" y1="100" x2="210" y2="100" stroke="#6b7280" strokeWidth="1" strokeDasharray="4" />
          <line x1="170" y1="100" x2="210" y2="100" stroke="#6b7280" strokeWidth="1" strokeDasharray="4" />
          {/* H on outer circle */}
          <circle cx="130" cy="20" r="3" fill="#ef4444" />
          {/* Labels */}
          <text x="120" y="115" fill="#f59e0b" fontSize="11">F</text>
          <text x="175" y="115" fill="#3b82f6" fontSize="11">G</text>
          <text x="215" y="105" fill="#22c55e" fontSize="11">A</text>
          <text x="135" y="18" fill="#ef4444" fontSize="11">H?</text>
        </svg>
      </div>

      <p className="mt-4">By the triangle inequality in triangle <em>AGF</em>:</p>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700 text-center">
        <p className="text-amber-400 font-mono">AG + GF &gt; FA = FH</p>
      </div>

      <p className="mt-4">Subtracting <em>FG</em> from both sides:</p>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700 text-center">
        <p className="text-amber-400 font-mono">AG &gt; GH</p>
      </div>

      <p className="mt-4">
        But <em>AG</em> = <em>GD</em> (radius of inner circle), and <em>GH</em> ≥ <em>GD</em>{' '}
        (since <em>H</em> is on or outside the inner circle). This gives <em>GD</em> &gt;{' '}
        <em>GH</em> ≥ <em>GD</em>—a contradiction!
      </p>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition I.20 (triangle inequality)</li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Distance Formula:</strong> For internally tangent
          circles with radii <em>R</em> (outer) and <em>r</em> (inner), the distance between
          centers equals <em>R - r</em>. The centers and the tangent point are collinear.
        </p>
      </div>
    </LessonLayout>
  );
}
