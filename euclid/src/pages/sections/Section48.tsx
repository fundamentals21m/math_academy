import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section48() {
  return (
    <LessonLayout sectionId={48}>
      <Proposition
        title="Proposition I.48"
        proof={
          <>
            <p>
              Let <em>ABC</em> be a triangle having the square on one of the sides <em>BC</em> equal
              to the squares on the sides <em>BA</em>, <em>AC</em>.
            </p>
            <p className="mt-2">
              I say that the angle <em>BAC</em> is right.
            </p>
            <p className="mt-2">
              For let <em>AD</em> be drawn from the point <em>A</em> at right angles to the straight
              line <em>AC</em>, [I. 11] let <em>AD</em> be made equal to <em>BA</em>, [I. 3] and let{' '}
              <em>DC</em> be joined.
            </p>
            <p className="mt-2">
              Then, since <em>DA</em> is equal to <em>AB</em>, the square on <em>DA</em> is also
              equal to the square on <em>AB</em>.
            </p>
            <p className="mt-2">
              Let the square on <em>AC</em> be added to each; therefore the squares on <em>DA</em>,{' '}
              <em>AC</em> are equal to the squares on <em>BA</em>, <em>AC</em>.
            </p>
            <p className="mt-2">
              But the square on <em>DC</em> is equal to the squares on <em>DA</em>, <em>AC</em>, for
              the angle <em>DAC</em> is right; [I. 47] and the square on <em>BC</em> is equal to the
              squares on <em>BA</em>, <em>AC</em>, for this is the hypothesis;
            </p>
            <p className="mt-2">
              therefore the square on <em>DC</em> is equal to the square on <em>BC</em>, [C.N. 1] so
              that the side <em>DC</em> is also equal to <em>BC</em>.
            </p>
            <p className="mt-2">
              And, since <em>DA</em> is equal to <em>AB</em>, and <em>AC</em> is common, and the base{' '}
              <em>DC</em> is equal to the base <em>BC</em>, the angle <em>DAC</em> is equal to the
              angle <em>BAC</em>. [I. 8]
            </p>
            <p className="mt-2">
              But the angle <em>DAC</em> is right; therefore the angle <em>BAC</em> is also right.
            </p>
            <p className="mt-2 font-medium">
              Therefore etc.
            </p>
          </>
        }
      >
        <p>
          If in a triangle the square on one of the sides be equal to the squares on the remaining
          two sides of the triangle, the angle contained by the remaining two sides of the triangle
          is right.
        </p>
      </Proposition>

      <h2>Converse of the Pythagorean Theorem</h2>

      <p>
        This is the <strong>converse</strong> of Proposition I.47: if the square of one side of a
        triangle equals the sum of the squares of the other two sides, then the angle opposite that
        side is a right angle.
      </p>

      <p className="mt-4">
        The proof constructs a right triangle with legs equal to two sides of the original triangle,
        applies the Pythagorean theorem to compute the hypotenuse, and uses SSS congruence to show
        the original angle must be right.
      </p>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition I.3 (cutting equal segments)</li>
        <li>Proposition I.8 (SSS congruence)</li>
        <li>Proposition I.11 (constructing perpendiculars)</li>
        <li>Proposition I.47 (the Pythagorean theorem)</li>
        <li>Common Notion 1 (transitivity of equality)</li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Applications:</strong> This converse is extremely
          useful for verifying right angles. If you can measure the three sides and verify that
          a² + b² = c², you know you have a right angle—even without measuring the angle directly.
          This is why the 3-4-5 triangle has been used for millennia to establish right angles in
          construction.
        </p>
      </div>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-6 border border-dark-700">
        <p className="text-dark-300 text-sm">
          <strong className="text-amber-400">Book I Complete:</strong> With Propositions I.47 and
          I.48, Euclid brings Book I to its climax. The theory of plane geometry has been developed
          from basic definitions and postulates to the crown jewel of the Pythagorean theorem.
        </p>
      </div>

      <h2>Summary of Book I</h2>

      <div className="bg-gradient-to-br from-primary-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-primary-500/20">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1-10:</span>
            <span>Basic constructions (equilateral triangles, transferring lengths, bisecting)</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">11-12:</span>
            <span>Perpendicular constructions</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">13-15:</span>
            <span>Angle relationships (supplementary, vertical)</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">16-26:</span>
            <span>Triangle properties and congruence theorems</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">27-32:</span>
            <span>Parallel lines and the angle sum theorem</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">33-45:</span>
            <span>Parallelograms and area theory</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">46-48:</span>
            <span>Squares and the Pythagorean theorem</span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
