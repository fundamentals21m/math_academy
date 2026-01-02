import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section69() {
  return (
    <LessonLayout sectionId={69}>
      <Proposition
        title="Proposition III.5"
        proof={
          <>
            <p>
              Let the circles <em>ABC</em>, <em>CDG</em> cut one another at the points <em>B</em>,{' '}
              <em>C</em>.
            </p>
            <p className="mt-2">
              I say that they will not have the same center.
            </p>
            <p className="mt-2">
              For, if possible, let it be <em>E</em>; let <em>EC</em> be joined, and let{' '}
              <em>EFG</em> be drawn through at random.
            </p>
            <p className="mt-2">
              Then, since the point <em>E</em> is the center of the circle <em>ABC</em>,{' '}
              <em>EC</em> is equal to <em>EF</em>. [I. Def. 15]
            </p>
            <p className="mt-2">
              Again, since the point <em>E</em> is the center of the circle <em>CDG</em>,{' '}
              <em>EC</em> is equal to <em>EG</em>. [I. Def. 15]
            </p>
            <p className="mt-2">
              But <em>EC</em> was proved equal to <em>EF</em> also; therefore <em>EF</em> is also
              equal to <em>EG</em>, the less to the greater: which is impossible.
            </p>
            <p className="mt-2 font-medium">
              Therefore the point <em>E</em> is not the center of the circles <em>ABC</em>,{' '}
              <em>CDG</em>.
            </p>
          </>
        }
      >
        <p>If two circles cut one another, they will not have the same center.</p>
      </Proposition>

      <h2>Analysis</h2>

      <p>
        When two circles <strong>intersect</strong> (cut one another at two points), they must have
        different centers. This is intuitive: circles with the same center are{' '}
        <strong>concentric</strong>, and concentric circles never cross.
      </p>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 280 200" className="w-72 h-52">
          {/* Circle 1 */}
          <circle cx="110" cy="100" r="70" fill="none" stroke="#f59e0b" strokeWidth="2" />
          {/* Circle 2 */}
          <circle cx="170" cy="100" r="60" fill="none" stroke="#3b82f6" strokeWidth="2" />
          {/* Centers */}
          <circle cx="110" cy="100" r="3" fill="#f59e0b" />
          <circle cx="170" cy="100" r="3" fill="#3b82f6" />
          {/* Intersection points */}
          <circle cx="140" cy="52" r="4" fill="#22c55e" />
          <circle cx="140" cy="148" r="4" fill="#22c55e" />
          {/* Labels */}
          <text x="105" y="115" fill="#f59e0b" fontSize="11">E₁</text>
          <text x="175" y="115" fill="#3b82f6" fontSize="11">E₂</text>
          <text x="145" y="48" fill="#22c55e" fontSize="11">B</text>
          <text x="145" y="163" fill="#22c55e" fontSize="11">C</text>
        </svg>
      </div>

      <h3>The Proof by Contradiction</h3>

      <p>
        Suppose two intersecting circles shared the same center <em>E</em>. Let <em>C</em> be one
        of their intersection points, and draw a line from <em>E</em> through <em>C</em> that
        crosses both circles.
      </p>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 250 200" className="w-64 h-52">
          {/* Circle 1 (larger) */}
          <circle cx="125" cy="100" r="70" fill="none" stroke="#f59e0b" strokeWidth="2" />
          {/* Circle 2 (smaller) */}
          <circle cx="125" cy="100" r="50" fill="none" stroke="#3b82f6" strokeWidth="2" />
          {/* Hypothetical shared center */}
          <circle cx="125" cy="100" r="4" fill="#ef4444" />
          {/* Line through center to circumferences */}
          <line x1="55" y1="100" x2="195" y2="100" stroke="#6b7280" strokeWidth="1" />
          {/* Points on circumferences */}
          <circle cx="55" cy="100" r="3" fill="#f59e0b" />
          <circle cx="75" cy="100" r="3" fill="#3b82f6" />
          <circle cx="175" cy="100" r="3" fill="#3b82f6" />
          <circle cx="195" cy="100" r="3" fill="#f59e0b" />
          {/* Labels */}
          <text x="125" y="85" fill="#ef4444" fontSize="11" textAnchor="middle">E?</text>
          <text x="55" y="115" fill="#f59e0b" fontSize="10" textAnchor="middle">F</text>
          <text x="195" y="115" fill="#f59e0b" fontSize="10" textAnchor="middle">F'</text>
          <text x="75" y="115" fill="#3b82f6" fontSize="10" textAnchor="middle">G</text>
          <text x="175" y="115" fill="#3b82f6" fontSize="10" textAnchor="middle">G'</text>
          {/* Radii */}
          <text x="90" y="93" fill="#f59e0b" fontSize="9">r₁</text>
          <text x="100" y="93" fill="#3b82f6" fontSize="9">r₂</text>
        </svg>
      </div>

      <p className="mt-4">
        If <em>E</em> is the center of both circles, then:
      </p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li><em>EC</em> = <em>EF</em> (radius of first circle)</li>
        <li><em>EC</em> = <em>EG</em> (radius of second circle)</li>
        <li>Therefore <em>EF</em> = <em>EG</em></li>
      </ul>

      <p className="mt-4">
        But if the circles are different and both pass through <em>C</em>, then <em>F</em> and{' '}
        <em>G</em> must be different points on the line through <em>E</em> and <em>C</em>. This
        means <em>EF</em> ≠ <em>EG</em>—contradiction!
      </p>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Definition I.15 (all radii of a circle are equal)</li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Concentric vs. Intersecting:</strong> Circles with the
          same center (<em>concentric circles</em>) can never intersect—one is always entirely
          inside the other (or they're identical). Intersecting circles must have distinct centers.
        </p>
      </div>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-6 border border-dark-700">
        <p className="text-dark-300 text-sm">
          <strong className="text-amber-400">Note:</strong> This proposition, together with III.6,
          establishes that any two circles that touch or intersect must have different centers.
          This is fundamental for understanding the geometry of multiple circles.
        </p>
      </div>
    </LessonLayout>
  );
}
