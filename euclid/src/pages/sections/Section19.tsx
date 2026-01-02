import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section19() {
  return (
    <LessonLayout sectionId={19}>
      <Proposition
        title="Proposition I.19"
        proof={
          <>
            <p>
              Let <em>ABC</em> be a triangle having the angle <em>ABC</em> greater than the angle{' '}
              <em>BCA</em>.
            </p>
            <p className="mt-2">
              I say that the side <em>AC</em> is also greater than the side <em>AB</em>.
            </p>
            <p className="mt-2">
              For, if not, <em>AC</em> is either equal to <em>AB</em> or less.
            </p>
            <p className="mt-2">
              Now <em>AC</em> is not equal to <em>AB</em>; for then the angle <em>ABC</em> would also
              have been equal to the angle <em>ACB</em>; [I. 5] but it is not; therefore <em>AC</em>{' '}
              is not equal to <em>AB</em>.
            </p>
            <p className="mt-2">
              Neither is <em>AC</em> less than <em>AB</em>, for then the angle <em>ABC</em> would
              also have been less than the angle <em>ACB</em>; [I. 18] but it is not; therefore{' '}
              <em>AC</em> is not less than <em>AB</em>.
            </p>
            <p className="mt-2">
              And it was proved that it is not equal either. Therefore <em>AC</em> is greater than{' '}
              <em>AB</em>.
            </p>
            <p className="mt-2 font-medium">
              Therefore etc.
            </p>
          </>
        }
      >
        <p>
          In any triangle the greater angle is subtended by the greater side.
        </p>
      </Proposition>

      <h2>Analysis</h2>

      <p>
        This is the <strong>converse</strong> of Proposition I.18: the longer side is always
        opposite the larger angle. Together, I.18 and I.19 establish a complete correspondence
        between the ordering of sides and the ordering of angles in a triangle.
      </p>

      <p className="mt-4">
        The proof is by exhaustion of cases: if the side opposite the larger angle is not greater,
        it must be either equal or less. But equal sides imply equal angles (I.5), and a lesser
        side implies a lesser angle (I.18), both contradicting our hypothesis.
      </p>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition I.5 (base angles of isosceles triangles)</li>
        <li>Proposition I.18 (greater side subtends greater angle)</li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Summary:</strong> Propositions I.18 and I.19 together
          tell us that in any triangle, the sides and angles are "ordered the same way": if we list
          the sides from smallest to largest, the opposite angles will also be from smallest to
          largest.
        </p>
      </div>
    </LessonLayout>
  );
}
