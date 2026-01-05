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

      <Theorem title="Square of a Sum (Euclid II.4)"
        proof={
          <>
            <p>Construct a square ABCD with side length a + b.</p>
            <p className="mt-2"><strong>Step 1:</strong> Mark point E on AB at distance a from A, so AE = a and EB = b.</p>
            <p className="mt-2"><strong>Step 2:</strong> Mark point F on AD at distance a from A, so AF = a and FD = b.</p>
            <p className="mt-2"><strong>Step 3:</strong> Draw EG parallel to AD and FH parallel to AB, meeting at point P.</p>
            <p className="mt-2"><strong>Step 4:</strong> This divides square ABCD into four rectangles:</p>
            <ul className="list-disc list-inside mt-1">
              <li>AEPF: a square with side a, area = a²</li>
              <li>EBGP: a rectangle with sides a and b, area = ab</li>
              <li>FPHD: a rectangle with sides b and a, area = ab</li>
              <li>PGCH: a square with side b, area = b²</li>
            </ul>
            <p className="mt-2"><strong>Step 5:</strong> By additivity of area:</p>
            <MathBlock math="(a+b)^2 = a^2 + ab + ab + b^2 = a^2 + 2ab + b^2" />
          </>
        }
      >
        <p>
          If a line segment is divided into two parts, then the square on the
          whole equals the sum of the squares on the two parts plus twice the
          rectangle formed by the parts.
        </p>
        <MathBlock>
          {`(a + b)^2 = a^2 + 2ab + b^2`}
        </MathBlock>
      </Theorem>

      <h3>The Difference of Squares</h3>

      <p>
        Similarly, the identity a² − b² = (a+b)(a−b) has a beautiful geometric
        interpretation (Euclid II.5).
      </p>

      <Theorem title="Difference of Squares"
        proof={
          <>
            <p>Consider a square ABCD with side a. Remove a smaller square of side b from corner A.</p>
            <p className="mt-2"><strong>Step 1:</strong> The remaining L-shaped region (gnomon) has area a² - b².</p>
            <p className="mt-2"><strong>Step 2:</strong> The gnomon consists of two rectangles:</p>
            <ul className="list-disc list-inside mt-1">
              <li>A rectangle with sides a and (a - b), along one arm</li>
              <li>A rectangle with sides b and (a - b), along the other arm</li>
            </ul>
            <p className="mt-2"><strong>Step 3:</strong> Cut the gnomon along the line separating these two rectangles.</p>
            <p className="mt-2"><strong>Step 4:</strong> Slide the smaller piece to extend the larger rectangle:</p>
            <ul className="list-disc list-inside mt-1">
              <li>The result is a rectangle with length a + b and width a - b</li>
            </ul>
            <p className="mt-2"><strong>Step 5:</strong> Therefore:</p>
            <MathBlock math="a^2 - b^2 = (a + b)(a - b)" />
          </>
        }
      >
        <p>
          The difference of two squares equals a rectangle whose sides are the
          sum and difference of the original sides:
        </p>
        <MathBlock>
          {`a^2 - b^2 = (a + b)(a - b)`}
        </MathBlock>
      </Theorem>

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
