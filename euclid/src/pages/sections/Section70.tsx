import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section70() {
  return (
    <LessonLayout sectionId={70}>
      <Proposition
        title="Proposition III.6"
        proof={
          <>
            <p>
              Let the circles <em>ABC</em>, <em>CDE</em> touch one another internally at the point{' '}
              <em>C</em>.
            </p>
            <p className="mt-2">
              I say that they will not have the same center.
            </p>
            <p className="mt-2">
              For, if possible, let it be <em>F</em>; let <em>FC</em> be joined, and let{' '}
              <em>FEB</em> be drawn through at random.
            </p>
            <p className="mt-2">
              Then, since the point <em>F</em> is the center of the circle <em>ABC</em>,{' '}
              <em>FC</em> is equal to <em>FB</em>.
            </p>
            <p className="mt-2">
              Again, since the point <em>F</em> is the center of the circle <em>CDE</em>,{' '}
              <em>FC</em> is equal to <em>FE</em>.
            </p>
            <p className="mt-2">
              But <em>FC</em> was proved equal to <em>FB</em>; therefore <em>FE</em> is also equal
              to <em>FB</em>, the less to the greater: which is impossible.
            </p>
            <p className="mt-2 font-medium">
              Therefore <em>F</em> is not the center of the circles <em>ABC</em>, <em>CDE</em>.
            </p>
          </>
        }
      >
        <p>If two circles touch one another internally, they will not have the same center.</p>
      </Proposition>

      <h2>Analysis</h2>

      <p>
        Two circles that are <strong>internally tangent</strong> (one touches the other from the
        inside at exactly one point) cannot share the same center. This complements III.5, which
        proved the same for intersecting circles.
      </p>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 250 200" className="w-64 h-52">
          {/* Outer circle */}
          <circle cx="125" cy="100" r="80" fill="none" stroke="#f59e0b" strokeWidth="2" />
          {/* Inner circle (internally tangent) */}
          <circle cx="155" cy="100" r="50" fill="none" stroke="#3b82f6" strokeWidth="2" />
          {/* Centers */}
          <circle cx="125" cy="100" r="3" fill="#f59e0b" />
          <circle cx="155" cy="100" r="3" fill="#3b82f6" />
          {/* Point of tangency */}
          <circle cx="205" cy="100" r="4" fill="#22c55e" />
          {/* Line connecting centers through tangent point */}
          <line x1="125" y1="100" x2="205" y2="100" stroke="#6b7280" strokeWidth="1" strokeDasharray="4" />
          {/* Labels */}
          <text x="120" y="85" fill="#f59e0b" fontSize="11">F₁</text>
          <text x="150" y="85" fill="#3b82f6" fontSize="11">F₂</text>
          <text x="210" y="105" fill="#22c55e" fontSize="11">C</text>
        </svg>
      </div>

      <h3>The Proof by Contradiction</h3>

      <p>
        Assume the two internally tangent circles share a center <em>F</em>. Let <em>C</em> be
        their point of tangency. Draw a line from <em>F</em> through the circles.
      </p>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 280 180" className="w-72 h-46">
          {/* Outer circle */}
          <circle cx="140" cy="90" r="70" fill="none" stroke="#f59e0b" strokeWidth="2" />
          {/* Inner circle */}
          <circle cx="140" cy="90" r="40" fill="none" stroke="#3b82f6" strokeWidth="2" />
          {/* Hypothetical shared center */}
          <circle cx="140" cy="90" r="4" fill="#ef4444" />
          {/* Line through center */}
          <line x1="70" y1="90" x2="210" y2="90" stroke="#6b7280" strokeWidth="1" />
          {/* Point C (right tangency) */}
          <circle cx="210" cy="90" r="3" fill="#22c55e" />
          {/* Point B (outer left) */}
          <circle cx="70" cy="90" r="3" fill="#f59e0b" />
          {/* Point E (inner left) */}
          <circle cx="100" cy="90" r="3" fill="#3b82f6" />
          {/* Labels */}
          <text x="140" y="75" fill="#ef4444" fontSize="11" textAnchor="middle">F?</text>
          <text x="215" y="95" fill="#22c55e" fontSize="11">C</text>
          <text x="60" y="95" fill="#f59e0b" fontSize="11">B</text>
          <text x="95" y="80" fill="#3b82f6" fontSize="11">E</text>
          {/* Distances */}
          <text x="175" y="82" fill="#f59e0b" fontSize="9">r₁</text>
          <text x="155" y="82" fill="#3b82f6" fontSize="9">r₂</text>
        </svg>
      </div>

      <p className="mt-4">
        If <em>F</em> were the center of both circles:
      </p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li><em>FC</em> = <em>FB</em> (radius of outer circle)</li>
        <li><em>FC</em> = <em>FE</em> (radius of inner circle)</li>
        <li>Therefore <em>FB</em> = <em>FE</em></li>
      </ul>

      <p className="mt-4">
        But clearly <em>FB</em> (the full radius of the outer circle) is greater than <em>FE</em>{' '}
        (the radius of the smaller inner circle). This is a contradiction.
      </p>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Definition I.15 (all radii of a circle are equal)</li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">The Line of Centers:</strong> For internally tangent
          circles, the line connecting their centers passes through the point of tangency (proved
          in III.11). The distance between centers equals the difference of the radii.
        </p>
      </div>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 300 120" className="w-80 h-32">
          {/* Diagram showing center distance */}
          <line x1="50" y1="60" x2="250" y2="60" stroke="#6b7280" strokeWidth="1" />
          {/* Points */}
          <circle cx="100" cy="60" r="3" fill="#f59e0b" />
          <circle cx="170" cy="60" r="3" fill="#3b82f6" />
          <circle cx="230" cy="60" r="3" fill="#22c55e" />
          {/* Labels */}
          <text x="100" y="50" fill="#f59e0b" fontSize="11" textAnchor="middle">F₁</text>
          <text x="170" y="50" fill="#3b82f6" fontSize="11" textAnchor="middle">F₂</text>
          <text x="230" y="50" fill="#22c55e" fontSize="11" textAnchor="middle">C</text>
          {/* Distances */}
          <text x="135" y="80" fill="#6b7280" fontSize="10" textAnchor="middle">d = R - r</text>
          <text x="165" y="95" fill="#f59e0b" fontSize="9" textAnchor="middle">R (outer)</text>
          <text x="200" y="95" fill="#3b82f6" fontSize="9" textAnchor="middle">r (inner)</text>
          {/* Braces */}
          <path d="M 100 70 L 100 75 L 230 75 L 230 70" fill="none" stroke="#f59e0b" strokeWidth="1" />
          <path d="M 170 85 L 170 90 L 230 90 L 230 85" fill="none" stroke="#3b82f6" strokeWidth="1" />
        </svg>
      </div>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-6 border border-dark-700">
        <p className="text-dark-300 text-sm">
          <strong className="text-amber-400">Summary:</strong> Together, III.5 and III.6 establish
          that any two distinct circles that touch or intersect must have different centers. Only
          identical circles share a center.
        </p>
      </div>
    </LessonLayout>
  );
}
