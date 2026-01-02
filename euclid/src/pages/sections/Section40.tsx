import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section40() {
  return (
    <LessonLayout sectionId={40}>
      <Proposition
        title="Proposition I.40"
        proof={
          <>
            <p>
              Let <em>ABC</em>, <em>CDE</em> be equal triangles on equal bases <em>BC</em>,{' '}
              <em>CE</em> and on the same side.
            </p>
            <p className="mt-2">
              I say that they are also in the same parallels.
            </p>
            <p className="mt-2">
              For let <em>AD</em> be joined; I say that <em>AD</em> is parallel to <em>BE</em>.
            </p>
            <p className="mt-2">
              For, if not, let <em>AF</em> be drawn through <em>A</em> parallel to <em>BE</em>,
              [I. 31] and let <em>FE</em> be joined.
            </p>
            <p className="mt-2">
              Therefore the triangle <em>ABC</em> is equal to the triangle <em>FCE</em>; for they
              are on equal bases <em>BC</em>, <em>CE</em> and in the same parallels <em>BE</em>,{' '}
              <em>AF</em>. [I. 38]
            </p>
            <p className="mt-2">
              But the triangle <em>ABC</em> is equal to the triangle <em>DCE</em>; therefore the
              triangle <em>DCE</em> is also equal to the triangle <em>FCE</em>, [C.N. 1] the greater
              to the less: which is impossible.
            </p>
            <p className="mt-2">
              Therefore <em>AF</em> is not parallel to <em>BE</em>.
            </p>
            <p className="mt-2">
              Similarly we can prove that neither is any other straight line except <em>AD</em>;
              therefore <em>AD</em> is parallel to <em>BE</em>.
            </p>
            <p className="mt-2 font-medium">
              Therefore etc.
            </p>
          </>
        }
      >
        <p>
          Equal triangles which are on equal bases and on the same side are also in the same
          parallels.
        </p>
      </Proposition>

      <h2>Analysis</h2>

      <p>
        This is the <strong>converse</strong> of Proposition I.38: if two triangles on equal bases
        have equal area, the line through their vertices is parallel to the line of their bases.
      </p>

      <p className="mt-4">
        The proof follows the same pattern as I.39, using contradiction via I.38.
      </p>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition I.31 (constructing parallel lines)</li>
        <li>Proposition I.38 (triangles on equal bases between same parallels are equal)</li>
        <li>Common Notion 1 (transitivity of equality)</li>
      </ul>
    </LessonLayout>
  );
}
