import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section80() {
  return (
    <LessonLayout sectionId={80}>
      <Proposition
        title="Proposition III.16"
        proof={
          <>
            <p>
              Let <em>ABC</em> be a circle, and from the center <em>D</em> let <em>DA</em> be
              drawn.
            </p>
            <p className="mt-2">
              I say that the straight line drawn at right angles to <em>DA</em> from the point{' '}
              <em>A</em> will fall outside the circle.
            </p>
            <p className="mt-2">
              For suppose it does not, but, if possible, let it fall within as <em>CA</em>; and
              let <em>DC</em> be joined.
            </p>
            <p className="mt-2">
              Since <em>DA</em> is equal to <em>DC</em>, the angle <em>DAC</em> is also equal to
              the angle <em>DCA</em>. [I. 5]
            </p>
            <p className="mt-2">
              But the angle <em>DAC</em> is right; therefore the angle <em>DCA</em> is also right.
            </p>
            <p className="mt-2">
              Thus, in the triangle <em>ACD</em>, two angles are together equal to two right
              angles: which is impossible. [I. 17]
            </p>
            <p className="mt-2">
              Therefore the straight line drawn from the point <em>A</em> at right angles to{' '}
              <em>DA</em> will not fall within the circle.
            </p>
            <p className="mt-2">
              Similarly we can prove that neither will it fall on the circumference; therefore
              it will fall outside.
            </p>
            <p className="mt-2 font-medium">
              I say further that between the straight line <em>AE</em> and the circumference
              <em>CA</em> no other straight line can be interposed.
            </p>
          </>
        }
      >
        <p>
          The straight line drawn at right angles to the diameter of a circle from its extremity
          will fall outside the circle, and into the space between the straight line and the
          circumference another straight line cannot be interposed.
        </p>
      </Proposition>

      <h2>Analysis</h2>

      <p>
        This is the fundamental theorem about <strong>tangent lines</strong>. It proves two things:
      </p>

      <ol className="list-decimal list-inside mt-4 space-y-2 text-dark-300">
        <li>A line perpendicular to a radius at its endpoint on the circle lies entirely outside the circle</li>
        <li>No other line can fit between this perpendicular and the circle</li>
      </ol>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 280 220" className="w-72 h-56">
          {/* Circle */}
          <circle cx="140" cy="100" r="70" fill="none" stroke="#f59e0b" strokeWidth="2" />
          {/* Center D */}
          <circle cx="140" cy="100" r="3" fill="#f59e0b" />
          {/* Radius DA */}
          <line x1="140" y1="100" x2="210" y2="100" stroke="#3b82f6" strokeWidth="2" />
          {/* Tangent line at A */}
          <line x1="210" y1="30" x2="210" y2="170" stroke="#22c55e" strokeWidth="2" />
          {/* Point A */}
          <circle cx="210" cy="100" r="4" fill="#22c55e" />
          {/* Right angle marker */}
          <path d="M 200 100 L 200 110 L 210 110" fill="none" stroke="#6b7280" strokeWidth="1" />
          {/* Labels */}
          <text x="135" y="90" fill="#f59e0b" fontSize="11">D</text>
          <text x="215" y="95" fill="#22c55e" fontSize="11">A</text>
          <text x="220" y="60" fill="#22c55e" fontSize="11">tangent</text>
          {/* Arrow showing outside */}
          <path d="M 230 100 L 250 100" fill="none" stroke="#6b7280" strokeWidth="1" markerEnd="url(#arrow)" />
          <text x="240" y="115" fill="#6b7280" fontSize="9">outside</text>
        </svg>
      </div>

      <h3>Why Must It Fall Outside?</h3>

      <p>
        Suppose the perpendicular went inside the circle and hit the circle again at <em>C</em>.
        Then:
      </p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li><em>DA</em> = <em>DC</em> (both radii)</li>
        <li>So triangle <em>DAC</em> is isosceles with ∠<em>DAC</em> = ∠<em>DCA</em></li>
        <li>But ∠<em>DAC</em> = 90° (perpendicular to radius)</li>
        <li>So ∠<em>DCA</em> = 90° too, meaning two angles sum to 180°</li>
        <li>This contradicts I.17 (sum of any two angles in triangle &lt; 180°)</li>
      </ul>

      <h3 className="mt-6">The Hornlike Angle</h3>

      <p>
        The second part of the proposition states that no line can fit between the tangent and
        the circle. The "angle" between them is a <em>hornlike angle</em> or <em>mixtilinear
        angle</em>—smaller than any rectilinear angle. Ancient Greek mathematicians debated
        whether this was truly an angle.
      </p>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 200 150" className="w-52 h-40">
          {/* Partial circle arc */}
          <path d="M 150 75 A 50 50 0 0 1 100 125" fill="none" stroke="#f59e0b" strokeWidth="2" />
          {/* Tangent */}
          <line x1="150" y1="30" x2="150" y2="120" stroke="#22c55e" strokeWidth="2" />
          {/* Point of tangency */}
          <circle cx="150" cy="75" r="3" fill="#22c55e" />
          {/* Shaded horn angle */}
          <path d="M 150 75 Q 145 85 138 95" fill="none" stroke="#3b82f6" strokeWidth="1.5" />
          {/* Label */}
          <text x="130" y="90" fill="#3b82f6" fontSize="10">horn</text>
          <text x="130" y="100" fill="#3b82f6" fontSize="10">angle</text>
        </svg>
      </div>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition I.5 (isosceles triangle theorem)</li>
        <li>Proposition I.17 (two angles of triangle &lt; 180°)</li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Definition of Tangent:</strong> This proposition
          gives the standard characterization: a tangent to a circle is perpendicular to the
          radius at the point of contact.
        </p>
      </div>
    </LessonLayout>
  );
}
