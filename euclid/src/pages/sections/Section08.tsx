import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section08() {
  return (
    <LessonLayout sectionId={8}>
      <Proposition
        title="Proposition I.8"
        proof={
          <>
            <p>
              Let <em>ABC</em>, <em>DEF</em> be two triangles having the two sides <em>AB</em>,{' '}
              <em>AC</em> equal to the two sides <em>DE</em>, <em>DF</em> respectively, namely{' '}
              <em>AB</em> to <em>DE</em>, and <em>AC</em> to <em>DF</em>; and let them have the base{' '}
              <em>BC</em> equal to the base <em>EF</em>.
            </p>
            <p className="mt-2">
              I say that the angle <em>BAC</em> is also equal to the angle <em>EDF</em>.
            </p>
            <p className="mt-2">
              For, if the triangle <em>ABC</em> be applied to the triangle <em>DEF</em>, and if the
              point <em>B</em> be placed on the point <em>E</em> and the straight line <em>BC</em> on{' '}
              <em>EF</em>, the point <em>C</em> will also coincide with <em>F</em>, because{' '}
              <em>BC</em> is equal to <em>EF</em>.
            </p>
            <p className="mt-2">
              Then, <em>BC</em> coinciding with <em>EF</em>, <em>BA</em>, <em>AC</em> will also
              coincide with <em>ED</em>, <em>DF</em>.
            </p>
            <p className="mt-2">
              For, if the base <em>BC</em> coincides with the base <em>EF</em>, and the sides{' '}
              <em>BA</em>, <em>AC</em> do not coincide with <em>ED</em>, <em>DF</em> but fall beside
              them as <em>EG</em>, <em>GF</em>, then, given two straight lines constructed on a
              straight line (from its extremities) and meeting in a point, there will have been
              constructed on the same straight line (from its extremities), and on the same side of
              it, two other straight lines meeting in another point and equal to the former two
              respectively, namely each to that which has the same extremity with it.
            </p>
            <p className="mt-2">
              But they cannot be so constructed. [I. 7]
            </p>
            <p className="mt-2">
              Therefore it is not possible that, if the base <em>BC</em> be applied to the base{' '}
              <em>EF</em>, the sides <em>BA</em>, <em>AC</em> should not coincide with <em>ED</em>,{' '}
              <em>DF</em>; they will therefore coincide, so that the angle <em>BAC</em> will also
              coincide with the angle <em>EDF</em>, and will be equal to it. [C.N. 4]
            </p>
            <p className="mt-2 font-medium">
              Therefore etc.
            </p>
          </>
        }
      >
        <p>
          If two triangles have the two sides equal to two sides respectively, and have also the
          base equal to the base, they will also have the angles equal which are contained by the
          equal straight lines.
        </p>
      </Proposition>

      <h2>Analysis</h2>

      <p>
        This is the famous <strong>Side-Side-Side (SSS)</strong> congruence theorem. If all three
        sides of one triangle are equal to the corresponding sides of another triangle, then the
        triangles are congruent.
      </p>

      <p className="mt-4">
        The proof uses superposition (as in I.4) combined with the uniqueness result from
        Proposition I.7. When we place one base on the other, the third vertex must coincide
        because there is only one possible position for it (by I.7).
      </p>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition I.7 (uniqueness of triangle construction)</li>
        <li>Common Notion 4 (things which coincide are equal)</li>
        <li>The method of superposition</li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Triangle Congruence:</strong> With Propositions I.4
          (SAS) and I.8 (SSS), we have two of the fundamental triangle congruence theorems. The
          third (ASA) will come later. These are essential tools for proving geometric results.
        </p>
      </div>
    </LessonLayout>
  );
}
