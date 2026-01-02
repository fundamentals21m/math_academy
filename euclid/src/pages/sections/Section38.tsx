import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section38() {
  return (
    <LessonLayout sectionId={38}>
      <Proposition
        title="Proposition I.38"
        proof={
          <>
            <p>
              Let <em>ABC</em>, <em>DEF</em> be triangles on equal bases <em>BC</em>, <em>EF</em> and
              in the same parallels <em>BF</em>, <em>AD</em>.
            </p>
            <p className="mt-2">
              I say that the triangle <em>ABC</em> is equal to the triangle <em>DEF</em>.
            </p>
            <p className="mt-2">
              For let <em>AD</em> be produced in both directions to <em>G</em>, <em>H</em>; through{' '}
              <em>B</em> let <em>BG</em> be drawn parallel to <em>CA</em>, [I. 31] and through{' '}
              <em>F</em> let <em>FH</em> be drawn parallel to <em>DE</em>. [I. 31]
            </p>
            <p className="mt-2">
              Then each of the figures <em>GBCA</em>, <em>DEFH</em> is a parallelogram; and{' '}
              <em>GBCA</em> is equal to <em>DEFH</em>; for they are on equal bases <em>BC</em>,{' '}
              <em>EF</em> and in the same parallels <em>BF</em>, <em>GH</em>. [I. 36]
            </p>
            <p className="mt-2">
              Moreover the triangle <em>ABC</em> is half of the parallelogram <em>GBCA</em>; for the
              diameter <em>AB</em> bisects it. [I. 34]
            </p>
            <p className="mt-2">
              And the triangle <em>FED</em> is half of the parallelogram <em>DEFH</em>; for the
              diameter <em>DF</em> bisects it. [I. 34]
            </p>
            <p className="mt-2">
              [But the halves of equal things are equal to one another.]
            </p>
            <p className="mt-2">
              Therefore the triangle <em>ABC</em> is equal to the triangle <em>DEF</em>.
            </p>
            <p className="mt-2 font-medium">
              Therefore etc.
            </p>
          </>
        }
      >
        <p>
          Triangles which are on equal bases and in the same parallels are equal to one another.
        </p>
      </Proposition>

      <h2>Analysis</h2>

      <p>
        This extends Proposition I.37: triangles with equal bases (not necessarily the same base)
        and equal heights have equal area.
      </p>

      <p className="mt-4">
        The proof follows the same pattern as I.37, using parallelograms as intermediaries.
      </p>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition I.31 (constructing parallel lines)</li>
        <li>Proposition I.34 (diagonal bisects a parallelogram)</li>
        <li>Proposition I.36 (parallelograms on equal bases between same parallels are equal)</li>
      </ul>
    </LessonLayout>
  );
}
