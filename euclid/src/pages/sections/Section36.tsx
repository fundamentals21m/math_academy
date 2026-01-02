import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section36() {
  return (
    <LessonLayout sectionId={36}>
      <Proposition
        title="Proposition I.36"
        proof={
          <>
            <p>
              Let <em>ABCD</em>, <em>EFGH</em> be parallelograms which are on equal bases <em>BC</em>,{' '}
              <em>FG</em> and in the same parallels <em>AH</em>, <em>BG</em>.
            </p>
            <p className="mt-2">
              I say that the parallelogram <em>ABCD</em> is equal to <em>EFGH</em>.
            </p>
            <p className="mt-2">
              For let <em>BE</em>, <em>CH</em> be joined.
            </p>
            <p className="mt-2">
              Then, since <em>BC</em> is equal to <em>FG</em>, while <em>FG</em> is equal to{' '}
              <em>EH</em>, [I. 34] <em>BC</em> is also equal to <em>EH</em>. [C.N. 1]
            </p>
            <p className="mt-2">
              But they are also parallel.
            </p>
            <p className="mt-2">
              And <em>EB</em>, <em>HC</em> join them; but straight lines joining equal and parallel
              straight lines (at the extremities which are) in the same directions (respectively) are
              equal and parallel. [I. 33]
            </p>
            <p className="mt-2">
              Therefore <em>EBCH</em> is a parallelogram. [I. 34]
            </p>
            <p className="mt-2">
              And it is equal to <em>ABCD</em>; for it has the same base <em>BC</em> with it and is
              in the same parallels <em>BC</em>, <em>AH</em> with it. [I. 35]
            </p>
            <p className="mt-2">
              For the same reason also <em>EFGH</em> is equal to the same <em>EBCH</em>; [I. 35] so
              that the parallelogram <em>ABCD</em> is also equal to <em>EFGH</em>. [C.N. 1]
            </p>
            <p className="mt-2 font-medium">
              Therefore etc.
            </p>
          </>
        }
      >
        <p>
          Parallelograms which are on equal bases and in the same parallels are equal to one another.
        </p>
      </Proposition>

      <h2>Analysis</h2>

      <p>
        This extends Proposition I.35: parallelograms with equal bases (not necessarily the same
        base) and equal heights have equal area.
      </p>

      <p className="mt-4">
        The proof introduces an auxiliary parallelogram that shares a base with each of the original
        parallelograms, then uses I.35 twice along with transitivity.
      </p>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition I.33 (joining equal parallel lines creates parallel lines)</li>
        <li>Proposition I.34 (opposite sides of parallelogram are equal)</li>
        <li>Proposition I.35 (parallelograms on same base and between same parallels are equal)</li>
        <li>Common Notion 1 (transitivity of equality)</li>
      </ul>
    </LessonLayout>
  );
}
