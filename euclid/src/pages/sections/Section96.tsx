import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section96() {
  return (
    <LessonLayout sectionId={96}>
      <Proposition
        title="Proposition III.32"
        proof={
          <>
            <p>
              Let <em>ABCD</em> be a circle, let <em>EF</em> touch it at the point <em>B</em>, and
              from <em>B</em> let <em>BD</em> be drawn across cutting the circle.
            </p>
            <p className="mt-2">
              I say that the angles which <em>BD</em> makes with the tangent <em>EF</em> will be
              equal to the angles in the alternate segments of the circle.
            </p>
            <p className="mt-2">
              For from the point <em>B</em> let <em>BA</em> be drawn at right angles to{' '}
              <em>EF</em>.
            </p>
            <p className="mt-2">
              Then, since the straight line <em>EF</em> touches the circle <em>ABCD</em> at{' '}
              <em>B</em>, and <em>BA</em> has been drawn from the point of contact at right
              angles to the tangent, the center of the circle <em>ABCD</em> is on <em>BA</em>.
              [III. 19]
            </p>
            <p className="mt-2">
              Therefore <em>BA</em> is a diameter of the circle; therefore the angle <em>ADB</em>,
              being an angle in a semicircle, is right. [III. 31]
            </p>
            <p className="mt-2">
              Therefore the remaining angles <em>BAD</em>, <em>ABD</em> are equal to one right
              angle. [I. 32]
            </p>
            <p className="mt-2">
              But the angle <em>ABF</em> is also right; therefore the angle <em>ABF</em> is equal
              to the angles <em>BAD</em>, <em>ABD</em>.
            </p>
            <p className="mt-2">
              Let the angle <em>ABD</em> be subtracted from each; therefore the remaining angle{' '}
              <em>DBF</em> is equal to the angle <em>BAD</em> in the alternate segment of the
              circle.
            </p>
            <p className="mt-2 font-medium">
              Similarly we can prove that the angle <em>DBE</em> is equal to the angle in the
              segment <em>DCB</em>.
            </p>
          </>
        }
      >
        <p>
          If a straight line touch a circle, and from the point of contact there be drawn across,
          in the circle, a straight line cutting the circle, the angles which it makes with the
          tangent will be equal to the angles in the alternate segments of the circle.
        </p>
      </Proposition>

      <h2>The Tangent-Chord Angle</h2>

      <p>
        The angle between a tangent and a chord equals the inscribed angle in the alternate
        (opposite) segment.
      </p>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 300 280" className="w-76 h-72">
          {/* Circle */}
          <circle cx="150" cy="140" r="80" fill="none" stroke="#f59e0b" strokeWidth="2" />
          {/* Tangent line EF */}
          <line x1="50" y1="220" x2="250" y2="220" stroke="#3b82f6" strokeWidth="2" />
          {/* Point of tangency B */}
          <circle cx="150" cy="220" r="4" fill="#22c55e" />
          {/* Chord BD */}
          <line x1="150" y1="220" x2="210" y2="90" stroke="#22c55e" strokeWidth="2" />
          <circle cx="210" cy="90" r="3" fill="#22c55e" />
          {/* Point A in segment */}
          <circle cx="90" cy="90" r="3" fill="#ef4444" />
          {/* Lines for inscribed angle */}
          <line x1="90" y1="90" x2="150" y2="220" stroke="#ef4444" strokeWidth="1" strokeDasharray="4" />
          <line x1="90" y1="90" x2="210" y2="90" stroke="#ef4444" strokeWidth="1" strokeDasharray="4" />
          {/* Tangent-chord angle */}
          <path d="M 170 220 A 20 20 0 0 0 163 202" fill="none" stroke="#22c55e" strokeWidth="1.5" />
          {/* Inscribed angle */}
          <path d="M 105 100 A 20 20 0 0 1 100 80" fill="none" stroke="#ef4444" strokeWidth="1.5" />
          {/* Labels */}
          <text x="40" y="230" fill="#3b82f6" fontSize="11">E</text>
          <text x="255" y="230" fill="#3b82f6" fontSize="11">F</text>
          <text x="145" y="240" fill="#22c55e" fontSize="11">B</text>
          <text x="215" y="85" fill="#22c55e" fontSize="11">D</text>
          <text x="80" y="85" fill="#ef4444" fontSize="11">A</text>
          {/* Angle labels */}
          <text x="175" y="210" fill="#22c55e" fontSize="10">α</text>
          <text x="110" y="95" fill="#ef4444" fontSize="10">α</text>
        </svg>
      </div>

      <h3>Key Result</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700 text-center">
        <p className="text-xl text-amber-400 font-mono">
          ∠DBF = ∠DAB (alternate segment)
        </p>
      </div>

      <h3 className="mt-6">Why It Works</h3>

      <p>
        Draw diameter <em>BA</em> perpendicular to the tangent. Then:
      </p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>∠<em>ADB</em> = 90° (angle in semicircle, III.31)</li>
        <li>∠<em>ABF</em> = 90° (tangent ⊥ radius, III.18)</li>
        <li>In triangle <em>ABD</em>: ∠<em>BAD</em> + ∠<em>ABD</em> = 90°</li>
        <li>∠<em>ABF</em> = ∠<em>ABD</em> + ∠<em>DBF</em> = 90°</li>
        <li>Subtracting: ∠<em>DBF</em> = ∠<em>BAD</em></li>
      </ul>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition I.32 (angles of triangle)</li>
        <li>Proposition III.18 (tangent ⊥ radius)</li>
        <li>Proposition III.19 (center on perpendicular to tangent)</li>
        <li>Proposition III.31 (angle in semicircle is right)</li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Alternate Segment:</strong> The "alternate segment"
          is on the opposite side of the chord from the angle being measured. If we measure
          ∠<em>DBF</em> below the chord, the alternate segment is above.
        </p>
      </div>
    </LessonLayout>
  );
}
