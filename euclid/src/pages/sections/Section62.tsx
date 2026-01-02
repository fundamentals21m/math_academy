import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';
import { LawOfCosines } from '@/components/visualizations';

export default function Section62() {
  return (
    <LessonLayout sectionId={62}>
      <LawOfCosines />

      <Proposition
        title="Proposition II.13"
        proof={
          <>
            <p>
              Let <em>ABC</em> be an acute-angled triangle having the angle at <em>B</em> acute, and
              let <em>AD</em> be drawn from the point <em>A</em> perpendicular to <em>BC</em>.
            </p>
            <p className="mt-2">
              I say that the square on <em>AC</em> is less than the squares on <em>CB</em>,{' '}
              <em>BA</em> by twice the rectangle contained by <em>CB</em>, <em>BD</em>.
            </p>
            <p className="mt-2">
              For, since the straight line <em>CB</em> has been cut at random at <em>D</em>, the
              squares on <em>CB</em>, <em>BD</em> are equal to twice the rectangle contained by{' '}
              <em>CB</em>, <em>BD</em> and the square on <em>DC</em>. [II. 7]
            </p>
            <p className="mt-2">
              Let the square on <em>DA</em> be added to each; therefore the squares on <em>CB</em>,{' '}
              <em>BD</em>, <em>DA</em> are equal to twice the rectangle <em>CB</em>, <em>BD</em> and
              the squares on <em>AD</em>, <em>DC</em>.
            </p>
            <p className="mt-2">
              But the square on <em>AB</em> is equal to the squares on <em>BD</em>, <em>DA</em>, for
              the angle at <em>D</em> is right; [I. 47] and the square on <em>AC</em> is equal to
              the squares on <em>AD</em>, <em>DC</em>; [I. 47] therefore the squares on <em>CB</em>,{' '}
              <em>BA</em> are equal to the square on <em>AC</em> and twice the rectangle{' '}
              <em>CB</em>, <em>BD</em>,
            </p>
            <p className="mt-2">
              so that the square on <em>AC</em> alone is less than the squares on <em>CB</em>,{' '}
              <em>BA</em> by twice the rectangle <em>CB</em>, <em>BD</em>.
            </p>
            <p className="mt-2 font-medium">
              Therefore etc.
            </p>
          </>
        }
      >
        <p>
          In acute-angled triangles the square on the side subtending the acute angle is less than
          the squares on the sides containing the acute angle by twice the rectangle contained by
          one of the sides about the acute angle, namely that on which the perpendicular falls, and
          the straight line cut off within by the perpendicular towards the acute angle.
        </p>
      </Proposition>

      <h2>The Law of Cosines (Acute Case)</h2>

      <p>
        This proposition complements II.12 by handling acute triangles. In modern notation, for a
        triangle with sides <em>a</em>, <em>b</em>, <em>c</em> and an acute angle <em>B</em>:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700 text-center">
        <p className="text-xl text-amber-400 font-mono">
          b² = a² + c² - 2ac·cos(B)
        </p>
      </div>

      <div className="flex justify-center my-6">
        <svg viewBox="0 0 300 200" className="w-full max-w-sm">
          {/* Triangle */}
          <polygon points="50,150 250,150 150,50" fill="none" stroke="#f59e0b" strokeWidth="2" />
          {/* Perpendicular */}
          <line x1="150" y1="50" x2="150" y2="150" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4" />
          {/* Right angle marker */}
          <path d="M 150 140 L 160 140 L 160 150" fill="none" stroke="#3b82f6" strokeWidth="1" />
          {/* Acute angle arc */}
          <path d="M 230 150 A 20 20 0 0 0 222 135" fill="none" stroke="#22c55e" strokeWidth="1.5" />
          {/* Labels */}
          <text x="45" y="165" fill="#f59e0b" fontSize="12">B</text>
          <text x="255" y="165" fill="#f59e0b" fontSize="12">C</text>
          <text x="145" y="45" fill="#f59e0b" fontSize="12">A</text>
          <text x="145" y="165" fill="#3b82f6" fontSize="12">D</text>
          {/* Side labels */}
          <text x="90" y="90" fill="#d1d5db" fontSize="11">c</text>
          <text x="205" y="90" fill="#d1d5db" fontSize="11">b</text>
          <text x="150" y="170" fill="#d1d5db" fontSize="11">a</text>
          {/* BD segment */}
          <text x="100" y="140" fill="#3b82f6" fontSize="10">BD</text>
        </svg>
      </div>

      <p className="mt-4">
        The key difference from II.12 is that the perpendicular falls <em>within</em> the triangle
        rather than outside it. The "rectangle CB, BD" is subtracted rather than added.
      </p>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition I.47 (Pythagorean theorem) - used twice</li>
        <li>Proposition II.7 (sum of squares identity)</li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Complete Law of Cosines:</strong> Together,
          Propositions II.12 and II.13 establish the law of cosines for all triangles: obtuse,
          acute, and (as a limiting case) right triangles. This is one of the most important
          results in trigonometry.
        </p>
      </div>

      <h3 className="mt-6">Unified Modern Form</h3>

      <p>
        The modern law of cosines unifies both cases:
      </p>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-4 border border-dark-700 text-center">
        <p className="text-xl text-amber-400 font-mono">
          c² = a² + b² - 2ab·cos(C)
        </p>
      </div>

      <p className="mt-4">
        When <em>C = 90°</em>, cos(C) = 0, giving the Pythagorean theorem. When <em>C {">"} 90°</em>,
        cos(C) is negative, giving II.12. When <em>C {"<"} 90°</em>, cos(C) is positive, giving II.13.
      </p>
    </LessonLayout>
  );
}
