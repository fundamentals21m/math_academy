import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';
import { LawOfCosines } from '@/components/visualizations';

export default function Section61() {
  return (
    <LessonLayout sectionId={61}>
      <LawOfCosines />

      <Proposition
        title="Proposition II.12"
        proof={
          <>
            <p>
              Let <em>ABC</em> be an obtuse-angled triangle having the angle <em>BAC</em> obtuse,
              and let <em>BD</em> be drawn from the point <em>B</em> perpendicular to <em>CA</em>{' '}
              produced.
            </p>
            <p className="mt-2">
              I say that the square on <em>BC</em> is greater than the squares on <em>BA</em>,{' '}
              <em>AC</em> by twice the rectangle contained by <em>CA</em>, <em>AD</em>.
            </p>
            <p className="mt-2">
              For, since the straight line <em>CD</em> has been cut at random at the point{' '}
              <em>A</em>, the square on <em>DC</em> is equal to the squares on <em>CA</em>,{' '}
              <em>AD</em> and twice the rectangle <em>CA</em>, <em>AD</em>. [II. 4]
            </p>
            <p className="mt-2">
              Let the square on <em>DB</em> be added to each; therefore the squares on <em>CD</em>,{' '}
              <em>DB</em> are equal to the squares on <em>CA</em>, <em>AD</em>, <em>DB</em> and
              twice the rectangle <em>CA</em>, <em>AD</em>.
            </p>
            <p className="mt-2">
              But the square on <em>CB</em> is equal to the squares on <em>CD</em>, <em>DB</em>, for
              the angle at <em>D</em> is right; [I. 47] and the square on <em>AB</em> is equal to
              the squares on <em>AD</em>, <em>DB</em>; [I. 47] therefore the square on <em>CB</em>{' '}
              is equal to the squares on <em>CA</em>, <em>AB</em> and twice the rectangle{' '}
              <em>CA</em>, <em>AD</em>;
            </p>
            <p className="mt-2">
              so that the square on <em>CB</em> is greater than the squares on <em>CA</em>,{' '}
              <em>AB</em> by twice the rectangle <em>CA</em>, <em>AD</em>.
            </p>
            <p className="mt-2 font-medium">
              Therefore etc.
            </p>
          </>
        }
      >
        <p>
          In obtuse-angled triangles the square on the side subtending the obtuse angle is greater
          than the squares on the sides containing the obtuse angle by twice the rectangle
          contained by one of the sides about the obtuse angle, namely that on which the
          perpendicular falls, and the straight line cut off outside by the perpendicular towards
          the obtuse angle.
        </p>
      </Proposition>

      <h2>The Law of Cosines (Obtuse Case)</h2>

      <p>
        This proposition is a generalization of the Pythagorean theorem for obtuse triangles. In
        modern notation, for a triangle with sides <em>a</em>, <em>b</em>, <em>c</em> and an obtuse
        angle <em>C</em> opposite side <em>c</em>:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700 text-center">
        <p className="text-xl text-amber-400 font-mono">
          c² = a² + b² + 2ab·cos(180° - C)
        </p>
      </div>

      <p className="mt-4">
        Or equivalently (since cos(180° - C) = -cos(C)):
      </p>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700 text-center">
        <p className="text-xl text-amber-400 font-mono">
          c² = a² + b² - 2ab·cos(C)
        </p>
      </div>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 300 200" className="w-full max-w-sm">
          {/* Triangle */}
          <polygon points="50,150 250,150 180,50" fill="none" stroke="#f59e0b" strokeWidth="2" />
          {/* Perpendicular */}
          <line x1="180" y1="50" x2="180" y2="150" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4" />
          {/* Extended base */}
          <line x1="50" y1="150" x2="20" y2="150" stroke="#6b7280" strokeWidth="1" strokeDasharray="4" />
          {/* Right angle marker */}
          <path d="M 180 140 L 190 140 L 190 150" fill="none" stroke="#3b82f6" strokeWidth="1" />
          {/* Obtuse angle arc */}
          <path d="M 70 150 A 20 20 0 0 1 62 135" fill="none" stroke="#ef4444" strokeWidth="1.5" />
          {/* Labels */}
          <text x="45" y="165" fill="#f59e0b" fontSize="12">A</text>
          <text x="255" y="165" fill="#f59e0b" fontSize="12">C</text>
          <text x="175" y="45" fill="#f59e0b" fontSize="12">B</text>
          <text x="175" y="165" fill="#3b82f6" fontSize="12">D</text>
          {/* Side labels */}
          <text x="110" y="90" fill="#d1d5db" fontSize="11">c</text>
          <text x="220" y="90" fill="#d1d5db" fontSize="11">a</text>
          <text x="150" y="170" fill="#d1d5db" fontSize="11">b</text>
        </svg>
      </div>

      <p className="mt-4">
        Euclid expresses this without trigonometry: the "rectangle CA, AD" corresponds to{' '}
        <em>b · (projection of c onto extended base)</em>.
      </p>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition I.47 (Pythagorean theorem) - used twice</li>
        <li>Proposition II.4 (square of a sum)</li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Pythagorean Generalization:</strong> When the angle is
          exactly 90°, the "rectangle" term vanishes and we recover the Pythagorean theorem. This
          proposition shows what happens when the angle exceeds 90°.
        </p>
      </div>
    </LessonLayout>
  );
}
