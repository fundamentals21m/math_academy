import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';
import { EquilateralTriangleConstruction } from '@/components/visualizations';

export default function Section01() {
  return (
    <LessonLayout sectionId={1}>
      <EquilateralTriangleConstruction />

      <Proposition
        title="Proposition I.1"
        proof={
          <>
            <p>
              Let <em>AB</em> be the given finite straight line.
            </p>
            <p className="mt-2">
              Thus it is required to construct an equilateral triangle on the straight line <em>AB</em>.
            </p>
            <p className="mt-2">
              With centre <em>A</em> and distance <em>AB</em> let the circle <em>BCD</em> be described;
              [Post. 3] again, with centre <em>B</em> and distance <em>BA</em> let the circle <em>ACE</em>{' '}
              be described; [Post. 3] and from the point <em>C</em>, in which the circles cut one another,
              to the points <em>A</em>, <em>B</em> let the straight lines <em>CA</em>, <em>CB</em> be
              joined. [Post. 1]
            </p>
            <p className="mt-2">
              Now, since the point <em>A</em> is the centre of the circle <em>CDB</em>, <em>AC</em> is
              equal to <em>AB</em>. [Def. 15]
            </p>
            <p className="mt-2">
              Again, since the point <em>B</em> is the centre of the circle <em>CAE</em>, <em>BC</em> is
              equal to <em>BA</em>. [Def. 15]
            </p>
            <p className="mt-2">
              But <em>CA</em> was also proved equal to <em>AB</em>; therefore each of the straight lines{' '}
              <em>CA</em>, <em>CB</em> is equal to <em>AB</em>.
            </p>
            <p className="mt-2">
              And things which are equal to the same thing are also equal to one another; [C.N. 1]
              therefore <em>CA</em> is also equal to <em>CB</em>.
            </p>
            <p className="mt-2">
              Therefore the three straight lines <em>CA</em>, <em>AB</em>, <em>BC</em> are equal to one
              another.
            </p>
            <p className="mt-2">
              Therefore the triangle <em>ABC</em> is equilateral; and it has been constructed on the
              given finite straight line <em>AB</em>.
            </p>
            <p className="mt-2 font-medium">
              Being what it was required to do.
            </p>
          </>
        }
      >
        <p>On a given finite straight line to construct an equilateral triangle.</p>
      </Proposition>

      <h2>Analysis</h2>

      <p>
        This is the first proposition of the <em>Elements</em> and demonstrates Euclid's constructive
        approach. Rather than simply asserting that equilateral triangles exist, Euclid shows exactly
        how to construct one using only the tools permitted by the postulates.
      </p>

      <p className="mt-4">
        The construction uses two circles (Postulate 3), centered at each endpoint of the given line
        segment. The intersection point <em>C</em> becomes the third vertex of the equilateral triangle.
        The proof relies on:
      </p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Definition 15 (the definition of a circle as points equidistant from the centre)</li>
        <li>Common Notion 1 (things equal to the same thing are equal to each other)</li>
      </ul>

      <div className="bg-dark-800/50 rounded-xl p-4 mt-6 border border-dark-700">
        <p className="text-dark-300 text-sm">
          <strong className="text-amber-400">Historical Note:</strong> This proposition is sometimes
          criticized because Euclid does not prove that the two circles actually intersect. This gap
          was later filled by adding a "betweenness" axiom or using continuity principles.
        </p>
      </div>
    </LessonLayout>
  );
}
