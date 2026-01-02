import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section81() {
  return (
    <LessonLayout sectionId={81}>
      <Proposition
        title="Proposition III.17"
        proof={
          <>
            <p>
              Let <em>A</em> be the given point and <em>BCD</em> the given circle; thus it is
              required to draw from the point <em>A</em> a straight line touching the circle{' '}
              <em>BCD</em>.
            </p>
            <p className="mt-2">
              For let the center <em>E</em> of the circle be taken; [III. 1] let <em>AE</em> be
              joined, and with center <em>E</em> and distance <em>EA</em> let the circle{' '}
              <em>AFG</em> be described;
            </p>
            <p className="mt-2">
              from <em>D</em> let <em>DF</em> be drawn at right angles to <em>EA</em>, and let{' '}
              <em>EF</em>, <em>AB</em> be joined.
            </p>
            <p className="mt-2">
              I say that <em>AB</em> has been drawn from the point <em>A</em> touching the circle{' '}
              <em>BCD</em>.
            </p>
            <p className="mt-2">
              For, since <em>E</em> is the center of the circles <em>BCD</em>, <em>AFG</em>,{' '}
              <em>EA</em> is equal to <em>EF</em>, and <em>ED</em> to <em>EB</em>;
            </p>
            <p className="mt-2">
              therefore the two sides <em>AE</em>, <em>EB</em> are equal to the two sides{' '}
              <em>FE</em>, <em>ED</em>: and they contain a common angle, the angle at <em>E</em>;
              therefore the base <em>DF</em> is equal to the base <em>AB</em>, and the triangle{' '}
              <em>DEF</em> is equal to the triangle <em>BEA</em>, and the remaining angles to the
              remaining angles; [I. 4]
            </p>
            <p className="mt-2">
              therefore the angle <em>EDF</em> is equal to the angle <em>EBA</em>.
            </p>
            <p className="mt-2">
              But the angle <em>EDF</em> is right; therefore the angle <em>EBA</em> is also right.
            </p>
            <p className="mt-2">
              Now <em>EB</em> is a radius; and the straight line drawn at right angles to the
              diameter of a circle, from its extremity, touches the circle; [III. 16]
            </p>
            <p className="mt-2 font-medium">
              therefore <em>AB</em> touches the circle <em>BCD</em>. Therefore from the given
              point <em>A</em> the straight line <em>AB</em> has been drawn touching the given
              circle <em>BCD</em>.
            </p>
          </>
        }
      >
        <p>From a given point to draw a straight line touching a given circle.</p>
      </Proposition>

      <h2>Analysis</h2>

      <p>
        This proposition provides the <strong>construction</strong> for drawing a tangent line
        from an external point to a circle.
      </p>

      <h3>The Construction</h3>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 320 240" className="w-80 h-60">
          {/* Given circle BCD */}
          <circle cx="180" cy="120" r="50" fill="none" stroke="#f59e0b" strokeWidth="2" />
          {/* Larger circle AFG (radius EA) */}
          <circle cx="180" cy="120" r="100" fill="none" stroke="#6b7280" strokeWidth="1" strokeDasharray="4" />
          {/* External point A */}
          <circle cx="80" cy="120" r="4" fill="#ef4444" />
          {/* Center E */}
          <circle cx="180" cy="120" r="3" fill="#f59e0b" />
          {/* Point D (on small circle, on line EA) */}
          <circle cx="130" cy="120" r="3" fill="#3b82f6" />
          {/* Point F (on large circle, where perpendicular from D meets it) */}
          <circle cx="180" cy="20" r="3" fill="#22c55e" />
          {/* Point B (tangent point on small circle) */}
          <circle cx="147" cy="77" r="4" fill="#22c55e" />
          {/* Line EA */}
          <line x1="80" y1="120" x2="280" y2="120" stroke="#6b7280" strokeWidth="1" strokeDasharray="4" />
          {/* Perpendicular DF */}
          <line x1="130" y1="120" x2="180" y2="20" stroke="#6b7280" strokeWidth="1" strokeDasharray="4" />
          {/* Tangent AB */}
          <line x1="80" y1="120" x2="147" y2="77" stroke="#22c55e" strokeWidth="2" />
          {/* Radius EB */}
          <line x1="180" y1="120" x2="147" y2="77" stroke="#3b82f6" strokeWidth="1.5" />
          {/* Right angle at B */}
          <path d="M 155 85 L 162 78 L 155 71" fill="none" stroke="#6b7280" strokeWidth="1" />
          {/* Labels */}
          <text x="70" y="115" fill="#ef4444" fontSize="11">A</text>
          <text x="185" y="115" fill="#f59e0b" fontSize="11">E</text>
          <text x="125" y="135" fill="#3b82f6" fontSize="11">D</text>
          <text x="185" y="18" fill="#22c55e" fontSize="11">F</text>
          <text x="140" y="70" fill="#22c55e" fontSize="11">B</text>
        </svg>
      </div>

      <ol className="list-decimal list-inside mt-4 space-y-2 text-dark-300">
        <li>Find center <em>E</em> of the given circle</li>
        <li>Draw a circle centered at <em>E</em> with radius <em>EA</em></li>
        <li>Let <em>D</em> be where line <em>EA</em> crosses the small circle</li>
        <li>Draw perpendicular from <em>D</em> to line <em>EA</em>, meeting the large circle at <em>F</em></li>
        <li>Connect <em>E</em> to <em>F</em>; let <em>B</em> be where <em>EF</em> meets the small circle</li>
        <li>Connect <em>A</em> to <em>B</em> — this is the tangent!</li>
      </ol>

      <h3 className="mt-6">Why Does It Work?</h3>

      <p>
        By construction, triangles <em>DEF</em> and <em>BEA</em> are congruent (SAS). Since angle{' '}
        <em>EDF</em> = 90° (perpendicular), angle <em>EBA</em> = 90° too. So <em>AB</em> is
        perpendicular to radius <em>EB</em> at <em>B</em>, making it a tangent (by III.16).
      </p>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition I.4 (SAS congruence)</li>
        <li>Proposition III.1 (finding center)</li>
        <li>Proposition III.16 (perpendicular to radius is tangent)</li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Two Tangents:</strong> From any external point, there
          are exactly two tangent lines to a circle. They have equal lengths (from the external
          point to the points of tangency).
        </p>
      </div>
    </LessonLayout>
  );
}
