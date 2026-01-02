import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section100() {
  return (
    <LessonLayout sectionId={100}>
      <Proposition
        title="Proposition III.36"
        proof={
          <>
            <p>
              Let <em>D</em> be a point outside the circle <em>ABC</em>; from <em>D</em> let two
              straight lines <em>DCA</em> and <em>DB</em> fall on the circle, and let <em>DCA</em>{' '}
              be a secant and <em>DB</em> a tangent.
            </p>
            <p className="mt-2">
              I say that the rectangle <em>AD</em>, <em>DC</em> is equal to the square on{' '}
              <em>DB</em>.
            </p>
            <p className="mt-2">
              For <em>DCA</em> is either through the center or not.
            </p>
            <p className="mt-2">
              First, let it be through the center, let <em>F</em> be the center of the circle{' '}
              <em>ABC</em>, let <em>FB</em> be joined; therefore the angle <em>FBD</em> is right.
              [III. 18]
            </p>
            <p className="mt-2">
              And, since the straight line <em>AC</em> has been bisected at <em>F</em>, and{' '}
              <em>CD</em> is added to it, the rectangle <em>AD</em>, <em>DC</em> together with
              the square on <em>FC</em> is equal to the square on <em>FD</em>. [II. 6]
            </p>
            <p className="mt-2">
              But <em>FC</em> is equal to <em>FB</em>; therefore the rectangle <em>AD</em>,{' '}
              <em>DC</em> together with the square on <em>FB</em> is equal to the square on{' '}
              <em>FD</em>.
            </p>
            <p className="mt-2">
              And the squares on <em>FB</em>, <em>BD</em> are equal to the square on <em>FD</em>;
              [I. 47] therefore the rectangle <em>AD</em>, <em>DC</em> together with the square
              on <em>FB</em> is equal to the squares on <em>FB</em>, <em>BD</em>.
            </p>
            <p className="mt-2">
              Let the square on <em>FB</em> be subtracted from each; therefore the remaining
              rectangle <em>AD</em>, <em>DC</em> is equal to the square on the tangent{' '}
              <em>DB</em>.
            </p>
            <p className="mt-2 font-medium">
              [The case where the secant does not pass through the center is proved similarly.]
            </p>
          </>
        }
      >
        <p>
          If a point be taken outside a circle and from it there fall on the circle two straight
          lines, and if one of them cut the circle and the other touch it, the rectangle
          contained by the whole of the straight line which cuts the circle and the part of it
          outside the circle will be equal to the square on the tangent.
        </p>
      </Proposition>

      <h2>The Tangent-Secant Theorem</h2>

      <p>
        When a tangent and a secant are drawn from the same external point, the square of the
        tangent equals the product of the secant's segments.
      </p>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 320 260" className="w-80 h-66">
          {/* Circle */}
          <circle cx="180" cy="130" r="80" fill="none" stroke="#f59e0b" strokeWidth="2" />
          {/* External point D */}
          <circle cx="50" cy="130" r="4" fill="#ef4444" />
          {/* Secant DCA */}
          <line x1="50" y1="130" x2="260" y2="130" stroke="#3b82f6" strokeWidth="2" />
          {/* Tangent DB */}
          <line x1="50" y1="130" x2="130" y2="55" stroke="#22c55e" strokeWidth="2" />
          {/* Points on circle */}
          <circle cx="100" cy="130" r="3" fill="#3b82f6" />
          <circle cx="260" cy="130" r="3" fill="#3b82f6" />
          <circle cx="130" cy="55" r="4" fill="#22c55e" />
          {/* Labels */}
          <text x="40" y="145" fill="#ef4444" fontSize="11">D</text>
          <text x="90" y="145" fill="#3b82f6" fontSize="11">C</text>
          <text x="265" y="135" fill="#3b82f6" fontSize="11">A</text>
          <text x="125" y="45" fill="#22c55e" fontSize="11">B</text>
          {/* Segment labels */}
          <text x="70" y="120" fill="#3b82f6" fontSize="9">DC</text>
          <text x="180" y="145" fill="#3b82f6" fontSize="9">CA</text>
          <text x="75" y="85" fill="#22c55e" fontSize="9">DB</text>
        </svg>
      </div>

      <h3>Key Formula</h3>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700 text-center">
        <p className="text-2xl text-amber-400 font-mono">
          DA × DC = DB²
        </p>
      </div>

      <p className="mt-4">Equivalently:</p>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700 text-center">
        <p className="text-xl text-amber-400 font-mono">
          (whole secant) × (external part) = (tangent)²
        </p>
      </div>

      <h3 className="mt-6">Proof Outline (secant through center)</h3>

      <p>Let <em>F</em> be the center, so <em>FC</em> = <em>FA</em> = radius. By II.6:</p>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700 text-center">
        <p className="text-amber-400 font-mono mb-2">DA × DC + FC² = FD²</p>
        <p className="text-amber-400 font-mono mb-2">FB² + BD² = FD² (Pythagorean, angle FBD = 90°)</p>
        <p className="text-amber-400 font-mono">FC = FB, so DA × DC = BD²</p>
      </div>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition I.47 (Pythagorean theorem)</li>
        <li>Proposition II.6 (extended line identity)</li>
        <li>Proposition III.18 (tangent ⊥ radius)</li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Power of External Point:</strong> The value DA × DC
          (= DB²) is constant for all secants through <em>D</em>. This is the power of the
          external point <em>D</em> with respect to the circle.
        </p>
      </div>
    </LessonLayout>
  );
}
