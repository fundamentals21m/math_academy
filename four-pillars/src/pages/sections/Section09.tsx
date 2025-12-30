import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section09() {
  return (
    <LessonLayout sectionId={9}>
      <h2>Area of Parallelograms and Triangles</h2>

      <p>
        Having established the basic principles of area, Euclid develops
        formulas for the areas of fundamental shapes. These results form the
        foundation for the Pythagorean theorem and the theory of similar
        triangles.
      </p>

      <h3>Area of a Parallelogram</h3>

      <p>
        The key insight for parallelograms is that they can be transformed
        into rectangles without changing their area.
      </p>

      <Theorem title="Parallelograms with Equal Base and Height (Euclid I.35)">
        <p>
          Parallelograms with the same base and the same height have equal
          areas.
        </p>
      </Theorem>

      <p>
        <strong>Proof:</strong> Consider two parallelograms ABCD and ABEF that
        share the same base AB and lie between the same parallel lines (so they
        have the same height).
      </p>

      <p>
        The key observation is that both parallelograms differ from a common
        triangle by another triangle of equal area:
      </p>

      <ul className="list-disc list-inside space-y-2 my-4">
        <li>ABCD = triangle ABX + (common region) for some point X</li>
        <li>ABEF = triangle ABY + (same common region) for some point Y</li>
      </ul>

      <p>
        Since the triangles ABX and ABY are congruent (by SAS), the parallelograms
        have equal areas. ∎
      </p>

      <Callout type="info">
        <strong>Modern Formula:</strong> From this theorem, we derive the
        familiar formula:
        <MathBlock>
          {`\\text{Area of parallelogram} = \\text{base} \\times \\text{height}`}
        </MathBlock>
      </Callout>

      <h3>Area of a Triangle</h3>

      <p>
        The relationship between parallelograms and triangles is fundamental.
      </p>

      <Theorem title="Triangle Area (Euclid I.37)">
        <p>
          Triangles with the same base and the same height have equal areas.
        </p>
      </Theorem>

      <p>
        <strong>Proof:</strong> A triangle is exactly half of a parallelogram
        with the same base and height. If two triangles share the same base
        and height, they are each half of equal parallelograms, so they have
        equal areas. ∎
      </p>

      <Definition title="Triangle Area Formula">
        <p>
          The area of a triangle is half the product of its base and height:
        </p>
        <MathBlock>
          {`\\text{Area} = \\frac{1}{2} \\times \\text{base} \\times \\text{height}`}
        </MathBlock>
      </Definition>

      <h3>The Parallelogram-Triangle Relationship</h3>

      <p>
        A crucial relationship connects parallelograms and triangles:
      </p>

      <Theorem title="Parallelogram is Double the Triangle (Euclid I.41)">
        <p>
          If a parallelogram and a triangle share the same base and lie between
          the same parallels, then the parallelogram has twice the area of the
          triangle.
        </p>
      </Theorem>

      <p>
        <strong>Proof:</strong> Draw a diagonal of the parallelogram. This
        creates two congruent triangles, each equal in area to the given
        triangle (by I.37). Therefore the parallelogram has twice the area
        of the triangle. ∎
      </p>

      <h3>Proportionality of Triangle Areas</h3>

      <p>
        These area relationships lead to important proportionality results.
      </p>

      <Theorem title="Area Ratio for Equal Heights">
        <p>
          Triangles with the same height have areas proportional to their bases.
        </p>
        <MathBlock>
          {`\\frac{\\text{Area}(\\triangle ABC)}{\\text{Area}(\\triangle DEF)} = \\frac{BC}{EF}`}
        </MathBlock>
        <p className="mt-2">
          (when both triangles have the same height)
        </p>
      </Theorem>

      <Callout type="important">
        <strong>Key Application:</strong> This proportionality is essential for
        proving the Thales theorem (which we'll see in Section 11). If a line
        parallel to one side of a triangle divides the other two sides, it
        divides them proportionally.
      </Callout>

      <h3>Shearing Transformations</h3>

      <p>
        The theorems above demonstrate an important principle: <strong>shearing</strong>
        a parallelogram or triangle (sliding one side parallel to itself) does
        not change its area.
      </p>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Shearing Principle</h4>
        <p className="text-slate-300">
          If you take a parallelogram and "slide" the top edge left or right
          (keeping it parallel to the base and at the same height), the area
          remains unchanged. This is the geometric content of Euclid I.35.
        </p>
      </div>

      <p>
        This shearing principle is the key to many area proofs, including
        Euclid's proof of the Pythagorean theorem.
      </p>

      <h3>Exercises</h3>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 2.4.1</h4>
        <p className="text-slate-300">
          Prove that the diagonal of a parallelogram divides it into two
          congruent triangles.
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 2.4.2</h4>
        <p className="text-slate-300">
          Show that if a triangle ABC has a point P on side BC, then:
        </p>
        <MathBlock>
          {`\\frac{\\text{Area}(\\triangle ABP)}{\\text{Area}(\\triangle APC)} = \\frac{BP}{PC}`}
        </MathBlock>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 2.4.3</h4>
        <p className="text-slate-300">
          Prove that the medians of a triangle divide it into six smaller
          triangles of equal area.
        </p>
      </div>

      <SectionQuiz
        sectionId={9}
        questions={quizMap[9] || []}
        title="Area of Parallelograms and Triangles Quiz"
      />
    </LessonLayout>
  );
}
