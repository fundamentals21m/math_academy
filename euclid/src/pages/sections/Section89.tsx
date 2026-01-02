import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section89() {
  return (
    <LessonLayout sectionId={89}>
      <Proposition
        title="Proposition III.25"
        proof={
          <>
            <p>
              Let <em>ABC</em> be a segment of a circle; thus it is required to describe the
              complete circle of which <em>ABC</em> is a segment.
            </p>
            <p className="mt-2">
              For let <em>AC</em> be bisected at <em>D</em>, from the point <em>D</em> let{' '}
              <em>DB</em> be drawn at right angles to <em>AC</em>, and let <em>AB</em> be joined.
            </p>
            <p className="mt-2">
              The angle <em>ABD</em> is then either greater than, equal to, or less than the
              angle <em>BAD</em>.
            </p>
            <p className="mt-2">
              First, let it be greater; on the straight line <em>BA</em>, and at the point{' '}
              <em>A</em> on it, let the angle <em>BAE</em> be constructed equal to the angle{' '}
              <em>ABD</em>; let <em>DB</em> be drawn through to <em>E</em>, and let <em>EC</em>{' '}
              be joined.
            </p>
            <p className="mt-2">
              Then, since the angle <em>ABE</em> is equal to the angle <em>BAE</em>, the straight
              line <em>EB</em> is also equal to <em>EA</em>. [I. 6]
            </p>
            <p className="mt-2">
              And, since <em>AD</em> is equal to <em>DC</em>, and <em>DE</em> is common, the two
              sides <em>AD</em>, <em>DE</em> are equal to the two sides <em>CD</em>, <em>DE</em>{' '}
              respectively; and the angle <em>ADE</em> is equal to the angle <em>CDE</em>, for
              each is right; therefore the base <em>EA</em> is equal to the base <em>EC</em>. [I. 4]
            </p>
            <p className="mt-2">
              But <em>EA</em> was also proved equal to <em>EB</em>; therefore <em>EB</em> is also
              equal to <em>EC</em>; therefore the three straight lines <em>EA</em>, <em>EB</em>,{' '}
              <em>EC</em> are equal to one another.
            </p>
            <p className="mt-2">
              Therefore the circle described with center <em>E</em> and radius one of the
              straight lines <em>EA</em>, <em>EB</em>, <em>EC</em> will pass through the
              remaining points and will have been completed.
            </p>
            <p className="mt-2 font-medium">
              [The other cases are handled similarly.]
            </p>
          </>
        }
      >
        <p>
          Given a segment of a circle, to describe the complete circle of which it is a segment.
        </p>
      </Proposition>

      <h2>Analysis</h2>

      <p>
        Given just an arc of a circle (with its chord), this construction finds the full circle.
        The key is finding the center.
      </p>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 280 220" className="w-72 h-56">
          {/* The given segment */}
          <path d="M 60 150 A 80 60 0 0 1 220 150" fill="none" stroke="#f59e0b" strokeWidth="3" />
          <line x1="60" y1="150" x2="220" y2="150" stroke="#3b82f6" strokeWidth="2" />
          {/* Complete circle (dashed) */}
          <circle cx="140" cy="110" r="85" fill="none" stroke="#6b7280" strokeWidth="1" strokeDasharray="4" />
          {/* Center E */}
          <circle cx="140" cy="110" r="4" fill="#22c55e" />
          {/* Midpoint D of chord */}
          <circle cx="140" cy="150" r="3" fill="#3b82f6" />
          {/* Perpendicular bisector */}
          <line x1="140" y1="150" x2="140" y2="50" stroke="#22c55e" strokeWidth="1.5" strokeDasharray="4" />
          {/* Points A, B, C */}
          <circle cx="60" cy="150" r="3" fill="#3b82f6" />
          <circle cx="140" cy="90" r="3" fill="#f59e0b" />
          <circle cx="220" cy="150" r="3" fill="#3b82f6" />
          {/* Labels */}
          <text x="50" y="160" fill="#3b82f6" fontSize="11">A</text>
          <text x="225" y="160" fill="#3b82f6" fontSize="11">C</text>
          <text x="145" y="85" fill="#f59e0b" fontSize="11">B</text>
          <text x="145" y="165" fill="#3b82f6" fontSize="11">D</text>
          <text x="145" y="105" fill="#22c55e" fontSize="11">E</text>
        </svg>
      </div>

      <h3>The Construction</h3>

      <ol className="list-decimal list-inside mt-4 space-y-2 text-dark-300">
        <li>Bisect chord <em>AC</em> at point <em>D</em></li>
        <li>Draw line <em>DB</em> perpendicular to <em>AC</em></li>
        <li>The center lies on line <em>DB</em> (by III.1)</li>
        <li>Construct point <em>E</em> on <em>DB</em> equidistant from <em>A</em>, <em>B</em>, <em>C</em></li>
        <li>Draw circle with center <em>E</em> and radius <em>EA</em></li>
      </ol>

      <p className="mt-4">
        The proof shows that <em>E</em> is equidistant from all three points using SAS
        congruence.
      </p>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition I.4 (SAS congruence)</li>
        <li>Proposition I.6 (converse of isosceles theorem)</li>
        <li>Proposition III.1 (center lies on perpendicular bisector)</li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Application:</strong> This construction is useful
          when only part of a circle is known (e.g., an archaeological artifact or architectural
          fragment).
        </p>
      </div>
    </LessonLayout>
  );
}
