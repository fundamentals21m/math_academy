import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section20() {
  return (
    <LessonLayout sectionId={20}>
      <Proposition
        title="Proposition I.20"
        proof={
          <>
            <p>
              Let <em>ABC</em> be a triangle.
            </p>
            <p className="mt-2">
              I say that in the triangle <em>ABC</em> two sides taken together in any manner are
              greater than the remaining one.
            </p>
            <p className="mt-2">
              For let <em>BA</em> be drawn through to the point <em>D</em>, let <em>DA</em> be made
              equal to <em>CA</em>, [I. 3] and let <em>DC</em> be joined.
            </p>
            <p className="mt-2">
              Then, since <em>DA</em> is equal to <em>AC</em>, the angle <em>ADC</em> is also equal
              to the angle <em>ACD</em>; [I. 5] therefore the angle <em>BCD</em> is greater than the
              angle <em>ADC</em>.
            </p>
            <p className="mt-2">
              And, since <em>DCB</em> is a triangle having the angle <em>BCD</em> greater than the
              angle <em>BDC</em>, and the greater angle is subtended by the greater side, [I. 19]
              therefore <em>DB</em> is greater than <em>BC</em>.
            </p>
            <p className="mt-2">
              But <em>DA</em> is equal to <em>AC</em>; therefore <em>BA</em>, <em>AC</em> are greater
              than <em>BC</em>.
            </p>
            <p className="mt-2">
              Similarly we can prove that <em>AB</em>, <em>BC</em> are also greater than <em>CA</em>,
              and <em>BC</em>, <em>CA</em> than <em>AB</em>.
            </p>
            <p className="mt-2 font-medium">
              Therefore etc.
            </p>
          </>
        }
      >
        <p>
          In any triangle two sides taken together in any manner are greater than the remaining one.
        </p>
      </Proposition>

      <h2>Analysis</h2>

      <p>
        This is the famous <strong>Triangle Inequality</strong>: the sum of any two sides of a
        triangle is greater than the third side. This is one of the most fundamental results in
        geometry and has applications throughout mathematics.
      </p>

      <p className="mt-4">
        The proof extends one side of the triangle, marks off the length of another side on this
        extension, and uses the relationship between sides and angles (Propositions I.5 and I.19)
        to establish the inequality.
      </p>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition I.3 (cutting equal segments)</li>
        <li>Proposition I.5 (base angles of isosceles triangles)</li>
        <li>Proposition I.19 (greater angle subtends greater side)</li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Applications:</strong> The triangle inequality is used
          to define distance in metric spaces, to prove results about shortest paths, and appears
          throughout analysis, topology, and applied mathematics. It can be stated as: "the
          straight line is the shortest distance between two points."
        </p>
      </div>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-6 border border-dark-700">
        <p className="text-dark-300 text-sm">
          <strong className="text-amber-400">Converse:</strong> The converse is also true: if three
          positive numbers satisfy the triangle inequality (each is less than the sum of the other
          two), then there exists a triangle with those side lengths.
        </p>
      </div>
    </LessonLayout>
  );
}
