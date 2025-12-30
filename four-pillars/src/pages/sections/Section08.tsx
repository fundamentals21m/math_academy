import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section08() {
  return (
    <LessonLayout sectionId={8}>
      <h2>Area and Equality</h2>

      <p>
        Euclid's treatment of area is remarkably sophisticated. Rather than
        assigning numerical values to areas (as we do today), he works with
        the concept of <strong>equality of areas</strong>—two figures are equal
        if they have the same area, even if they have different shapes.
      </p>

      <h3>Euclid's Common Notions</h3>

      <p>
        The <em>Elements</em> begins with five "common notions" that govern how
        equal quantities can be combined and compared:
      </p>

      <Definition title="Common Notions">
        <ol className="list-decimal list-inside space-y-2 mt-2">
          <li>Things equal to the same thing are equal to each other.</li>
          <li>If equals are added to equals, the wholes are equal.</li>
          <li>If equals are subtracted from equals, the remainders are equal.</li>
          <li>Things that coincide with one another are equal to one another.</li>
          <li>The whole is greater than the part.</li>
        </ol>
      </Definition>

      <p>
        These common notions allow Euclid to reason about areas algebraically,
        even without numbers.
      </p>

      <h3>A Modern Perspective on Area</h3>

      <p>
        Today we think of area as a function assigning a positive real number to
        each figure, satisfying:
      </p>

      <ul className="list-disc list-inside space-y-2 my-4">
        <li><strong>Additivity:</strong> If a figure is divided into non-overlapping
            parts, its area equals the sum of the parts' areas.</li>
        <li><strong>Congruence:</strong> Congruent figures have equal areas.</li>
        <li><strong>Unit square:</strong> A square with side 1 has area 1.</li>
      </ul>

      <Callout type="info">
        <strong>Historical Note:</strong> Euclid never defines area numerically.
        Instead, he proves that certain figures are "equal"—meaning they can be
        cut up and rearranged to form the same shape. This approach avoids the
        conceptual difficulties of real numbers that weren't fully resolved until
        the 19th century.
      </Callout>

      <h3>The Square of a Sum</h3>

      <p>
        One of the fundamental area relationships is the geometric version of
        the algebraic identity (a + b)² = a² + 2ab + b². Euclid proves this in
        <em>Elements</em> II.4.
      </p>

      <Theorem title="Square of a Sum (Euclid II.4)">
        <p>
          If a line segment is divided into two parts, then the square on the
          whole equals the sum of the squares on the two parts plus twice the
          rectangle formed by the parts.
        </p>
        <MathBlock>
          {`(a + b)^2 = a^2 + 2ab + b^2`}
        </MathBlock>
      </Theorem>

      <p>
        <strong>Geometric Proof:</strong> Consider a square with side a + b.
        Divide it into regions by drawing lines parallel to the sides at
        distance a from one corner.
      </p>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <p className="text-slate-300">
          The square decomposes into:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-2 text-slate-300">
          <li>A square of side a (area a²) in one corner</li>
          <li>A square of side b (area b²) in the opposite corner</li>
          <li>Two rectangles, each with sides a and b (each with area ab)</li>
        </ul>
      </div>

      <p>
        Since these four pieces tile the large square without overlapping:
      </p>

      <MathBlock>
        {`(a + b)^2 = a^2 + ab + ab + b^2 = a^2 + 2ab + b^2`}
      </MathBlock>

      <h3>The Difference of Squares</h3>

      <p>
        Similarly, the identity a² − b² = (a+b)(a−b) has a beautiful geometric
        interpretation (Euclid II.5).
      </p>

      <Theorem title="Difference of Squares">
        <p>
          The difference of two squares equals a rectangle whose sides are the
          sum and difference of the original sides:
        </p>
        <MathBlock>
          {`a^2 - b^2 = (a + b)(a - b)`}
        </MathBlock>
      </Theorem>

      <p>
        <strong>Geometric Proof:</strong> Start with a square of side a and
        remove a smaller square of side b from one corner. The remaining
        L-shaped region (called a <em>gnomon</em>) can be cut and rearranged
        into a rectangle with dimensions (a + b) × (a − b). ∎
      </p>

      <Callout type="important">
        <strong>Geometric Algebra:</strong> Book II of the <em>Elements</em>
        is sometimes called "geometric algebra" because it proves algebraic
        identities using geometric constructions. This approach was the
        foundation of algebra for nearly two millennia, until symbolic algebra
        was developed in the Renaissance.
      </Callout>

      <h3>Why Area Matters</h3>

      <p>
        Euclid's area theory is crucial for proving major results like:
      </p>

      <ul className="list-disc list-inside space-y-2 my-4">
        <li>The Pythagorean theorem (next section)</li>
        <li>The theory of similar figures</li>
        <li>The construction of square roots</li>
        <li>The quadrature (area calculation) of polygons</li>
      </ul>

      <p>
        By working with areas geometrically rather than numerically, Euclid
        achieved a level of rigor that wouldn't be matched until the development
        of modern analysis in the 19th century.
      </p>

      <h3>Exercises</h3>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 2.3.1</h4>
        <p className="text-slate-300">
          Draw a geometric proof of the identity (a − b)² = a² − 2ab + b².
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 2.3.2</h4>
        <p className="text-slate-300">
          Show geometrically that a gnomon (L-shaped region) formed by removing
          a small square from the corner of a large square can always be
          rearranged into a rectangle.
        </p>
      </div>

      <SectionQuiz
        sectionId={8}
        questions={quizMap[8] || []}
        title="Area and Equality Quiz"
      />
    </LessonLayout>
  );
}
