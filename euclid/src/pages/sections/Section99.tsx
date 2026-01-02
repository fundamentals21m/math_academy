import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section99() {
  return (
    <LessonLayout sectionId={99}>
      <Proposition
        title="Proposition III.35"
        proof={
          <>
            <p>
              Let in the circle <em>ABCD</em> two straight lines <em>AC</em>, <em>BD</em> cut one
              another at the point <em>E</em>.
            </p>
            <p className="mt-2">
              I say that the rectangle <em>AE</em>, <em>EC</em> is equal to the rectangle{' '}
              <em>DE</em>, <em>EB</em>.
            </p>
            <p className="mt-2">
              If now <em>AC</em>, <em>BD</em> are through the center, so that <em>E</em> is the
              center of the circle <em>ABCD</em>, it is manifest that, <em>AE</em>, <em>EC</em>,{' '}
              <em>DE</em>, <em>EB</em> being equal, the rectangle <em>AE</em>, <em>EC</em> is
              also equal to the rectangle <em>DE</em>, <em>EB</em>.
            </p>
            <p className="mt-2">
              Next let <em>AC</em>, <em>BD</em> not be through the center, and let <em>F</em> be
              taken as center, and from <em>F</em> let <em>FG</em>, <em>FH</em> be drawn
              perpendicular to the straight lines <em>AC</em>, <em>BD</em>, and let <em>FB</em>,{' '}
              <em>FC</em>, <em>FE</em> be joined.
            </p>
            <p className="mt-2">
              Then, since a straight line <em>GF</em> through the center cuts a straight line{' '}
              <em>AC</em> not through the center at right angles, it also bisects it; [III. 3]
              therefore <em>AG</em> is equal to <em>GC</em>.
            </p>
            <p className="mt-2">
              Since, then, the straight line <em>AC</em> has been cut into equal parts at{' '}
              <em>G</em>, and into unequal parts at <em>E</em>, the rectangle <em>AE</em>,{' '}
              <em>EC</em> together with the square on <em>EG</em> is equal to the square on{' '}
              <em>GC</em>. [II. 5]
            </p>
            <p className="mt-2">
              Let the square on <em>GF</em> be added to each; therefore the rectangle{' '}
              <em>AE</em>, <em>EC</em> together with the squares on <em>GE</em>, <em>GF</em> is
              equal to the squares on <em>CG</em>, <em>GF</em>.
            </p>
            <p className="mt-2">
              But the square on <em>FE</em> is equal to the squares on <em>EG</em>, <em>GF</em>,
              and the square on <em>FC</em> is equal to the squares on <em>CG</em>, <em>GF</em>;
              [I. 47] therefore the rectangle <em>AE</em>, <em>EC</em> together with the square
              on <em>FE</em> is equal to the square on <em>FC</em>.
            </p>
            <p className="mt-2">
              And <em>FC</em> is equal to <em>FB</em>; therefore the rectangle <em>AE</em>,{' '}
              <em>EC</em> together with the square on <em>EF</em> is equal to the square on{' '}
              <em>FB</em>.
            </p>
            <p className="mt-2">
              For the same reason, also, the rectangle <em>DE</em>, <em>EB</em> together with
              the square on <em>FE</em> is equal to the square on <em>FB</em>.
            </p>
            <p className="mt-2 font-medium">
              Therefore the rectangle <em>AE</em>, <em>EC</em> together with the square on{' '}
              <em>FE</em> is equal to the rectangle <em>DE</em>, <em>EB</em> together with the
              square on <em>FE</em>. Let the square on <em>FE</em> be subtracted from each;
              therefore the remaining rectangle <em>AE</em>, <em>EC</em> is equal to the
              rectangle <em>DE</em>, <em>EB</em>.
            </p>
          </>
        }
      >
        <p>
          If in a circle two straight lines cut one another, the rectangle contained by the
          segments of the one is equal to the rectangle contained by the segments of the other.
        </p>
      </Proposition>

      <h2>The Intersecting Chords Theorem</h2>

      <p>
        When two chords intersect inside a circle, the products of their segments are equal.
        This is also known as the <strong>Power of a Point</strong> theorem for interior points.
      </p>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 280 280" className="w-72 h-72">
          {/* Circle */}
          <circle cx="140" cy="140" r="90" fill="none" stroke="#f59e0b" strokeWidth="2" />
          {/* Chord AC */}
          <line x1="60" y1="95" x2="215" y2="190" stroke="#3b82f6" strokeWidth="2" />
          {/* Chord BD */}
          <line x1="75" y1="195" x2="195" y2="75" stroke="#22c55e" strokeWidth="2" />
          {/* Intersection point E */}
          <circle cx="130" cy="135" r="4" fill="#ef4444" />
          {/* Points */}
          <circle cx="60" cy="95" r="3" fill="#3b82f6" />
          <circle cx="215" cy="190" r="3" fill="#3b82f6" />
          <circle cx="75" cy="195" r="3" fill="#22c55e" />
          <circle cx="195" cy="75" r="3" fill="#22c55e" />
          {/* Labels */}
          <text x="50" y="90" fill="#3b82f6" fontSize="11">A</text>
          <text x="220" y="200" fill="#3b82f6" fontSize="11">C</text>
          <text x="65" y="205" fill="#22c55e" fontSize="11">B</text>
          <text x="200" y="70" fill="#22c55e" fontSize="11">D</text>
          <text x="135" y="130" fill="#ef4444" fontSize="11">E</text>
          {/* Segment labels */}
          <text x="85" y="105" fill="#3b82f6" fontSize="9">AE</text>
          <text x="175" y="170" fill="#3b82f6" fontSize="9">EC</text>
          <text x="95" y="175" fill="#22c55e" fontSize="9">BE</text>
          <text x="165" y="95" fill="#22c55e" fontSize="9">ED</text>
        </svg>
      </div>

      <h3>Key Formula</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700 text-center">
        <p className="text-2xl text-amber-400 font-mono">
          AE × EC = BE × ED
        </p>
      </div>

      <h3 className="mt-6">Proof Outline</h3>

      <p>
        Let <em>F</em> be the center. Draw perpendiculars from <em>F</em> to both chords. Using
        II.5 (completing the square) and I.47 (Pythagorean theorem):
      </p>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700 text-center">
        <p className="text-amber-400 font-mono mb-2">AE × EC + FE² = FC²</p>
        <p className="text-amber-400 font-mono mb-2">BE × ED + FE² = FB²</p>
        <p className="text-amber-400 font-mono">FC = FB (radii) → AE × EC = BE × ED</p>
      </div>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition I.47 (Pythagorean theorem)</li>
        <li>Proposition II.5 (completing the square)</li>
        <li>Proposition III.3 (perpendicular from center bisects chord)</li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Power of a Point:</strong> The product AE × EC is
          called the <em>power</em> of point <em>E</em> with respect to the circle. Every chord
          through <em>E</em> gives the same product.
        </p>
      </div>
    </LessonLayout>
  );
}
