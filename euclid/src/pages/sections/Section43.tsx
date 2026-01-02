import { LessonLayout } from '@/components/layout/LessonLayout';
import { Proposition } from '@/components/common/ContentBlocks';

export default function Section43() {
  return (
    <LessonLayout sectionId={43}>
      <Proposition
        title="Proposition I.43"
        proof={
          <>
            <p>
              Let <em>ABCD</em> be a parallelogram, and <em>AC</em> its diameter; and about{' '}
              <em>AC</em> let <em>EH</em>, <em>FG</em> be parallelograms, and <em>BK</em>, <em>KD</em>{' '}
              the so-called complements.
            </p>
            <p className="mt-2">
              I say that the complement <em>BK</em> is equal to the complement <em>KD</em>.
            </p>
            <p className="mt-2">
              For, since <em>ABCD</em> is a parallelogram, and <em>AC</em> its diameter, the triangle{' '}
              <em>ABC</em> is equal to the triangle <em>ACD</em>. [I. 34]
            </p>
            <p className="mt-2">
              Again, since <em>EH</em> is a parallelogram, and <em>AK</em> is its diameter, the
              triangle <em>AEK</em> is equal to the triangle <em>AHK</em>. [I. 34]
            </p>
            <p className="mt-2">
              For the same reason the triangle <em>KFC</em> is also equal to <em>KGC</em>.
            </p>
            <p className="mt-2">
              Now, since the triangle <em>AEK</em> is equal to the triangle <em>AHK</em>, and{' '}
              <em>KFC</em> to <em>KGC</em>, the triangle <em>AEK</em> together with <em>KGC</em> is
              equal to the triangle <em>AHK</em> together with <em>KFC</em>. [C.N. 2]
            </p>
            <p className="mt-2">
              And the whole triangle <em>ABC</em> is also equal to the whole <em>ADC</em>; therefore
              the complement <em>BK</em> which remains is equal to the complement <em>KD</em> which
              remains. [C.N. 3]
            </p>
            <p className="mt-2 font-medium">
              Therefore etc.
            </p>
          </>
        }
      >
        <p>
          In any parallelogram the complements of the parallelograms about the diameter are equal to
          one another.
        </p>
      </Proposition>

      <h2>Analysis</h2>

      <p>
        This proposition concerns the "gnomon" construction: when a parallelogram is divided by its
        diagonal and smaller parallelograms are placed in opposite corners (along the diagonal),
        the remaining pieces (complements) have equal area.
      </p>

      <p className="mt-4">
        This result is essential for Book II and the algebraic-geometric methods Euclid develops
        there.
      </p>

      <p className="mt-4">The proof relies on:</p>

      <ul className="list-disc list-inside mt-4 space-y-2 text-dark-300">
        <li>Proposition I.34 (diagonal bisects a parallelogram)</li>
        <li>Common Notions 2 and 3 (addition and subtraction of equals)</li>
      </ul>
    </LessonLayout>
  );
}
