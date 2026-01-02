import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section41() {
  return (
    <LessonLayout sectionId={41}>
      <Proposition
        title="Proposition I.41"
        proof={
          <>
            <p>
              Let the parallelogram <em>ABCD</em> and the triangle <em>EBC</em> be on the same base{' '}
              <em>BC</em> and in the same parallels <em>BC</em>, <em>AE</em>.
            </p>
            <p className="mt-2">
              I say that the parallelogram <em>ABCD</em> is double of the triangle <em>BEC</em>.
            </p>
            <p className="mt-2">
              For let <em>AC</em> be joined.
            </p>
            <p className="mt-2">
              Then the triangle <em>ABC</em> is equal to the triangle <em>EBC</em>; for it is on the
              same base <em>BC</em> with it and in the same parallels <em>BC</em>, <em>AE</em>. [I. 37]
            </p>
            <p className="mt-2">
              But the parallelogram <em>ABCD</em> is double of the triangle <em>ABC</em>; for the
              diameter <em>AC</em> bisects it; [I. 34] so that the parallelogram <em>ABCD</em> is
              also double of the triangle <em>EBC</em>.
            </p>
            <p className="mt-2 font-medium">
              Therefore etc.
            </p>
          </>
        }
      >
        <p>
          If a parallelogram have the same base with a triangle and be in the same parallels, the
          parallelogram is double of the triangle.
        </p>
      </Proposition>

      <h2>Analysis</h2>

      <p>
        This proposition relates parallelograms and triangles: a parallelogram has twice the area
        of any triangle with the same base and height.
      </p>

      <p className="mt-4">
        The proof uses the diagonal of the parallelogram to create a triangle congruent to the
        given triangle (by I.37), and notes that the parallelogram equals two such triangles (by I.34).
      </p>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition I.34 (diagonal bisects a parallelogram)</li>
        <li>Proposition I.37 (triangles on same base between same parallels are equal)</li>
      </ul>

      <div className="bg-gradient-to-br from-amber-500/10 to-dark-800/50 rounded-xl p-6 mt-6 border border-amber-500/20">
        <p className="text-dark-200">
          <strong className="text-amber-400">Key Result:</strong> This proposition is essential for
          the proof of the Pythagorean theorem (I.47), where triangles are shown to be half of
          corresponding rectangles.
        </p>
      </div>
    </LessonLayout>
  );
}
