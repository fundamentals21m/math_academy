import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';
import { AreaTransformDemo } from '@/components/visualizations/chapter2';

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

      <Theorem title="Parallelograms with Equal Base and Height (Euclid I.35)"
        proof={
          <>
            <p>Let ABCD and ABEF be parallelograms sharing base AB and lying between parallel lines AB and DE.</p>
            <p className="mt-2"><strong>Step 1:</strong> Since ABCD is a parallelogram, AD = BC and AD ∥ BC.</p>
            <p className="mt-2">Since ABEF is a parallelogram, AF = BE and AF ∥ BE.</p>
            <p className="mt-2"><strong>Step 2:</strong> Consider triangles EAD and FBC:</p>
            <ul className="list-disc list-inside mt-1">
              <li>EA = FB (since ABFE has EA ∥ FB and the top sides are on the same line)</li>
              <li>AD = BC (opposite sides of parallelogram ABCD)</li>
              <li>∠EAD = ∠FBC (corresponding angles with parallel lines)</li>
            </ul>
            <p className="mt-2"><strong>Step 3:</strong> By SAS, triangle EAD ≅ triangle FBC.</p>
            <p className="mt-2"><strong>Step 4:</strong> Let R be the region common to both parallelograms (trapezoid ABGE where G is on DE).</p>
            <p className="mt-2"><strong>Step 5:</strong> Area(ABCD) = Area(R) + Area(△EAD)</p>
            <p className="mt-2">Area(ABEF) = Area(R) + Area(△FBC)</p>
            <p className="mt-2"><strong>Step 6:</strong> Since △EAD ≅ △FBC, Area(ABCD) = Area(ABEF).</p>
          </>
        }
      >
        <p>
          Parallelograms with the same base and the same height have equal
          areas.
        </p>
      </Theorem>

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

      <Theorem title="Triangle Area (Euclid I.37)"
        proof={
          <>
            <p>Let triangles ABC and DEF have equal bases BC = EF and equal heights h.</p>
            <p className="mt-2"><strong>Step 1:</strong> Complete triangle ABC to parallelogram ABCG by drawing CG ∥ AB and AG ∥ BC.</p>
            <p className="mt-2"><strong>Step 2:</strong> Similarly, complete triangle DEF to parallelogram DEFH.</p>
            <p className="mt-2"><strong>Step 3:</strong> The diagonal of a parallelogram divides it into two congruent triangles (by ASA, using alternate interior angles and the shared diagonal).</p>
            <p className="mt-2">Therefore:</p>
            <MathBlock math="\text{Area}(\triangle ABC) = \frac{1}{2} \text{Area}(ABCG)" />
            <MathBlock math="\text{Area}(\triangle DEF) = \frac{1}{2} \text{Area}(DEFH)" />
            <p className="mt-2"><strong>Step 4:</strong> By Euclid I.35, parallelograms with equal base and height have equal area:</p>
            <MathBlock math="\text{Area}(ABCG) = \text{Area}(DEFH)" />
            <p className="mt-2"><strong>Step 5:</strong> Therefore Area(△ABC) = Area(△DEF).</p>
          </>
        }
      >
        <p>
          Triangles with the same base and the same height have equal areas.
        </p>
      </Theorem>

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

      <Theorem title="Parallelogram is Double the Triangle (Euclid I.41)"
        proof={
          <>
            <p>Let parallelogram ABCD and triangle EBC share base BC and lie between parallels BC and AD.</p>
            <p className="mt-2"><strong>Step 1:</strong> Draw diagonal BD of the parallelogram, creating triangles BCD and ABD.</p>
            <p className="mt-2"><strong>Step 2:</strong> These triangles are congruent (by ASA with alternate interior angles), so:</p>
            <MathBlock math="\text{Area}(ABCD) = 2 \cdot \text{Area}(\triangle BCD)" />
            <p className="mt-2"><strong>Step 3:</strong> Triangle BCD has the same base BC as triangle EBC.</p>
            <p className="mt-2">Both triangles have the same height (the distance between parallels BC and AD).</p>
            <p className="mt-2"><strong>Step 4:</strong> By I.37, triangles with equal base and height have equal area:</p>
            <MathBlock math="\text{Area}(\triangle BCD) = \text{Area}(\triangle EBC)" />
            <p className="mt-2"><strong>Step 5:</strong> Therefore:</p>
            <MathBlock math="\text{Area}(ABCD) = 2 \cdot \text{Area}(\triangle EBC)" />
          </>
        }
      >
        <p>
          If a parallelogram and a triangle share the same base and lie between
          the same parallels, then the parallelogram has twice the area of the
          triangle.
        </p>
      </Theorem>

      <h3>Proportionality of Triangle Areas</h3>

      <p>
        These area relationships lead to important proportionality results.
      </p>

      <Theorem title="Area Ratio for Equal Heights"
        proof={
          <>
            <p>Let triangles ABC and DEF have the same height h, with bases BC and EF respectively.</p>
            <p className="mt-2"><strong>Step 1:</strong> By the triangle area formula:</p>
            <MathBlock math="\text{Area}(\triangle ABC) = \frac{1}{2} \cdot BC \cdot h" />
            <MathBlock math="\text{Area}(\triangle DEF) = \frac{1}{2} \cdot EF \cdot h" />
            <p className="mt-2"><strong>Step 2:</strong> Taking the ratio:</p>
            <MathBlock math="\frac{\text{Area}(\triangle ABC)}{\text{Area}(\triangle DEF)} = \frac{\frac{1}{2} \cdot BC \cdot h}{\frac{1}{2} \cdot EF \cdot h} = \frac{BC}{EF}" />
            <p className="mt-2">The heights cancel, leaving the ratio of bases.</p>
          </>
        }
      >
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

      <AreaTransformDemo className="my-6" />

      <SectionQuiz
        sectionId={9}
        questions={quizMap[9] || []}
        title="Area of Parallelograms and Triangles Quiz"
      />
    </LessonLayout>
  );
}
