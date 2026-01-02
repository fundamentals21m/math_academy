import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section82() {
  return (
    <LessonLayout sectionId={82}>
      <Proposition
        title="Proposition III.18"
        proof={
          <>
            <p>
              Let a straight line <em>DE</em> touch the circle <em>ABC</em> at the point <em>C</em>;
              let the center <em>F</em> of the circle <em>ABC</em> be taken, and from <em>F</em>{' '}
              let <em>FC</em> be joined.
            </p>
            <p className="mt-2">
              I say that <em>FC</em> is perpendicular to <em>DE</em>.
            </p>
            <p className="mt-2">
              For, if not, let <em>FG</em> be drawn from <em>F</em> perpendicular to <em>DE</em>.
            </p>
            <p className="mt-2">
              Then, since the angle <em>FGC</em> is right, the angle <em>FCG</em> is acute; [I. 17]
              and the greater angle is subtended by the greater side; [I. 19] therefore <em>FC</em>{' '}
              is greater than <em>FG</em>.
            </p>
            <p className="mt-2">
              But <em>FC</em> is equal to <em>FB</em>; therefore <em>FB</em> is also greater than{' '}
              <em>FG</em>, the less than the greater: which is impossible.
            </p>
            <p className="mt-2">
              Therefore <em>FG</em> is not perpendicular to <em>DE</em>.
            </p>
            <p className="mt-2 font-medium">
              Similarly we can prove that neither is any other straight line except <em>FC</em>;
              therefore <em>FC</em> is perpendicular to <em>DE</em>.
            </p>
          </>
        }
      >
        <p>
          If a straight line touch a circle, and a straight line be joined from the center to the
          point of contact, the straight line so joined will be perpendicular to the tangent.
        </p>
      </Proposition>

      <h2>Analysis</h2>

      <p>
        This proposition is the <strong>converse</strong> of III.16. It proves that the radius to
        the point of tangency is always perpendicular to the tangent line.
      </p>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 280 200" className="w-72 h-52">
          {/* Circle */}
          <circle cx="140" cy="90" r="60" fill="none" stroke="#f59e0b" strokeWidth="2" />
          {/* Center F */}
          <circle cx="140" cy="90" r="3" fill="#f59e0b" />
          {/* Point of tangency C */}
          <circle cx="200" cy="90" r="4" fill="#22c55e" />
          {/* Tangent line DE */}
          <line x1="200" y1="30" x2="200" y2="150" stroke="#3b82f6" strokeWidth="2" />
          {/* Radius FC */}
          <line x1="140" y1="90" x2="200" y2="90" stroke="#22c55e" strokeWidth="2" />
          {/* Right angle marker */}
          <path d="M 190 90 L 190 100 L 200 100" fill="none" stroke="#6b7280" strokeWidth="1" />
          {/* Labels */}
          <text x="130" y="85" fill="#f59e0b" fontSize="11">F</text>
          <text x="205" y="95" fill="#22c55e" fontSize="11">C</text>
          <text x="205" y="35" fill="#3b82f6" fontSize="11">D</text>
          <text x="205" y="155" fill="#3b82f6" fontSize="11">E</text>
          {/* 90° label */}
          <text x="175" y="110" fill="#6b7280" fontSize="10">90°</text>
        </svg>
      </div>

      <h3>The Proof</h3>

      <p>
        Suppose the radius <em>FC</em> were <em>not</em> perpendicular to tangent <em>DE</em>.
        Then some other line <em>FG</em> from <em>F</em> would be perpendicular to <em>DE</em>,
        with <em>G</em> on <em>DE</em> but <em>G</em> ≠ <em>C</em>.
      </p>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 280 200" className="w-72 h-52">
          {/* Circle */}
          <circle cx="140" cy="90" r="60" fill="none" stroke="#f59e0b" strokeWidth="2" />
          {/* Center F */}
          <circle cx="140" cy="90" r="3" fill="#f59e0b" />
          {/* Point of tangency C */}
          <circle cx="200" cy="90" r="3" fill="#22c55e" />
          {/* Tangent line DE */}
          <line x1="200" y1="30" x2="200" y2="150" stroke="#3b82f6" strokeWidth="2" />
          {/* Wrong perpendicular FG */}
          <line x1="140" y1="90" x2="200" y2="60" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="4" />
          <circle cx="200" cy="60" r="3" fill="#ef4444" />
          {/* Radius FC */}
          <line x1="140" y1="90" x2="200" y2="90" stroke="#6b7280" strokeWidth="1" />
          {/* Labels */}
          <text x="130" y="85" fill="#f59e0b" fontSize="11">F</text>
          <text x="205" y="95" fill="#22c55e" fontSize="11">C</text>
          <text x="205" y="55" fill="#ef4444" fontSize="11">G?</text>
          {/* Right angle at G (hypothetical) */}
          <path d="M 190 60 L 190 70 L 200 70" fill="none" stroke="#ef4444" strokeWidth="1" />
        </svg>
      </div>

      <p className="mt-4">In triangle <em>FGC</em>:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Angle <em>FGC</em> = 90° (by hypothesis)</li>
        <li>Therefore angle <em>FCG</em> &lt; 90° (angles sum to 180°, and <em>F</em> angle is positive)</li>
        <li>The greater angle is opposite the longer side (I.19)</li>
        <li>So <em>FC</em> &gt; <em>FG</em></li>
      </ul>

      <p className="mt-4">
        But <em>G</em> is outside the circle (tangent line except at <em>C</em> lies outside),
        so <em>FG</em> &gt; <em>FC</em> (radius). This contradicts <em>FC</em> &gt; <em>FG</em>!
      </p>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition I.17 (angles of triangle &lt; 180°)</li>
        <li>Proposition I.19 (greater angle opposite greater side)</li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Key Property:</strong> Together with III.16, this
          establishes the fundamental characterization: a line is tangent to a circle if and
          only if it is perpendicular to the radius at the point of contact.
        </p>
      </div>
    </LessonLayout>
  );
}
