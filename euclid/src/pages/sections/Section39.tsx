import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section39() {
  return (
    <LessonLayout sectionId={39}>
      <Proposition
        title="Proposition I.39"
        proof={
          <>
            <p>
              Let <em>ABC</em>, <em>DBC</em> be equal triangles which are on the same base <em>BC</em>{' '}
              and on the same side of it.
            </p>
            <p className="mt-2">
              I say that they are also in the same parallels.
            </p>
            <p className="mt-2">
              [For let <em>AD</em> be joined; I say that <em>AD</em> is parallel to <em>BC</em>.]
            </p>
            <p className="mt-2">
              For, if not, let <em>AE</em> be drawn through <em>A</em> parallel to the straight line{' '}
              <em>BC</em>, [I. 31] and let <em>EC</em> be joined.
            </p>
            <p className="mt-2">
              Therefore the triangle <em>ABC</em> is equal to the triangle <em>EBC</em>; for it is on
              the same base <em>BC</em> with it and in the same parallels. [I. 37]
            </p>
            <p className="mt-2">
              But the triangle <em>ABC</em> is equal to the triangle <em>DBC</em>; therefore the
              triangle <em>DBC</em> is also equal to the triangle <em>EBC</em>, [C.N. 1] the greater
              to the less: which is impossible.
            </p>
            <p className="mt-2">
              Therefore <em>AE</em> is not parallel to <em>BC</em>.
            </p>
            <p className="mt-2">
              Similarly we can prove that neither is any other straight line except <em>AD</em>;
              therefore <em>AD</em> is parallel to <em>BC</em>.
            </p>
            <p className="mt-2 font-medium">
              Therefore etc.
            </p>
          </>
        }
      >
        <p>
          Equal triangles which are on the same base and on the same side are also in the same
          parallels.
        </p>
      </Proposition>

      <h2>Analysis</h2>

      <p>
        This is the <strong>converse</strong> of Proposition I.37: if two triangles on the same base
        have equal area, their vertices must lie on a line parallel to the base.
      </p>

      <p className="mt-4">
        The proof is by contradiction: if the vertices were not on the same parallel, one triangle
        would be smaller than the other (by I.37), contradicting their assumed equality.
      </p>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition I.31 (constructing parallel lines)</li>
        <li>Proposition I.37 (triangles on same base between same parallels are equal)</li>
        <li>Common Notion 1 (transitivity of equality)</li>
      </ul>
    </LessonLayout>
  );
}
