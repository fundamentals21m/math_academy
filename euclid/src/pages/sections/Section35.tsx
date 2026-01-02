import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section35() {
  return (
    <LessonLayout sectionId={35}>
      <Proposition
        title="Proposition I.35"
        proof={
          <>
            <p>
              Let <em>ABCD</em>, <em>EBCF</em> be parallelograms on the same base <em>BC</em> and in
              the same parallels <em>AF</em>, <em>BC</em>.
            </p>
            <p className="mt-2">
              I say that the parallelogram <em>ABCD</em> is equal to the parallelogram <em>EBCF</em>.
            </p>
            <p className="mt-2">
              For, since <em>ABCD</em> is a parallelogram, <em>AD</em> is equal to <em>BC</em>. [I. 34]
            </p>
            <p className="mt-2">
              For the same reason also <em>EF</em> is equal to <em>BC</em>, so that <em>AD</em> is
              also equal to <em>EF</em>; [C.N. 1] and <em>DE</em> is common; therefore the whole{' '}
              <em>AE</em> is equal to the whole <em>DF</em>. [C.N. 2]
            </p>
            <p className="mt-2">
              But <em>AB</em> is also equal to <em>DC</em>; [I. 34] therefore the two sides <em>EA</em>,{' '}
              <em>AB</em> are equal to the two sides <em>FD</em>, <em>DC</em> respectively.
            </p>
            <p className="mt-2">
              And the angle <em>FDC</em> is equal to the angle <em>EAB</em>, the exterior to the
              interior; [I. 29] therefore the base <em>EB</em> is equal to the base <em>FC</em>, and
              the triangle <em>EAB</em> will be equal to the triangle <em>FDC</em>. [I. 4]
            </p>
            <p className="mt-2">
              Let <em>DGE</em> be subtracted from each; therefore the trapezium <em>ABGD</em> which
              remains is equal to the trapezium <em>EGCF</em> which remains. [C.N. 3]
            </p>
            <p className="mt-2">
              Let the triangle <em>GBC</em> be added to each; therefore the whole parallelogram{' '}
              <em>ABCD</em> is equal to the whole parallelogram <em>EBCF</em>. [C.N. 2]
            </p>
            <p className="mt-2 font-medium">
              Therefore etc.
            </p>
          </>
        }
      >
        <p>
          Parallelograms which are on the same base and in the same parallels are equal to one another.
        </p>
      </Proposition>

      <h2>Analysis</h2>

      <p>
        This is a fundamental result about <strong>area</strong>: parallelograms with the same base
        and height have equal area, regardless of their "slant."
      </p>

      <p className="mt-4">
        The proof is a beautiful example of Euclid's area reasoning: show that the parallelograms
        differ only by congruent triangles that can be added or removed to transform one into the
        other.
      </p>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition I.4 (SAS congruence)</li>
        <li>Proposition I.29 (parallel lines create equal angles)</li>
        <li>Proposition I.34 (opposite sides of parallelogram are equal)</li>
        <li>Common Notions 1, 2, 3 (equality operations)</li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Area Formula:</strong> This proposition implies that
          the area of a parallelogram depends only on its base and height (perpendicular distance
          between parallel sides), leading to the formula: Area = base × height.
        </p>
      </div>
    </LessonLayout>
  );
}
