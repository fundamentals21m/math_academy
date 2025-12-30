import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section23() {
  return (
    <LessonLayout sectionId={23}>
      <h2>Vectors</h2>

      <p>
        In this chapter, we process coordinates by <strong>linear algebra</strong>.
        We view points as <strong>vectors</strong> that can be added and multiplied
        by numbers, and we introduce the <strong>inner product</strong> of vectors,
        which gives an efficient algebraic method to deal with both lengths and angles.
      </p>

      <h3>What is a Vector?</h3>

      <p>
        Vectors are mathematical objects that can be added and multiplied by numbers,
        subject to certain rules. The real numbers are the simplest example of vectors,
        and the rules for sums and multiples of any vectors are just the following
        properties of sums and multiples of numbers:
      </p>

      <div className="grid grid-cols-2 gap-4 my-6">
        <div className="bg-slate-800/50 p-4 rounded-lg">
          <MathBlock>{`\\mathbf{u} + \\mathbf{v} = \\mathbf{v} + \\mathbf{u}`}</MathBlock>
          <MathBlock>{`\\mathbf{u} + (\\mathbf{v} + \\mathbf{w}) = (\\mathbf{u} + \\mathbf{v}) + \\mathbf{w}`}</MathBlock>
          <MathBlock>{`\\mathbf{u} + \\mathbf{0} = \\mathbf{u}`}</MathBlock>
          <MathBlock>{`\\mathbf{u} + (-\\mathbf{u}) = \\mathbf{0}`}</MathBlock>
        </div>
        <div className="bg-slate-800/50 p-4 rounded-lg">
          <MathBlock>{`1\\mathbf{u} = \\mathbf{u}`}</MathBlock>
          <MathBlock>{`a(\\mathbf{u} + \\mathbf{v}) = a\\mathbf{u} + a\\mathbf{v}`}</MathBlock>
          <MathBlock>{`(a + b)\\mathbf{u} = a\\mathbf{u} + b\\mathbf{u}`}</MathBlock>
          <MathBlock>{`a(b\\mathbf{u}) = (ab)\\mathbf{u}`}</MathBlock>
        </div>
      </div>

      <h3>Vectors in the Plane</h3>

      <p>
        These rules hold when <strong>u</strong>, <strong>v</strong>, <strong>w</strong> are
        points in the plane ℝ², if we interpret <strong>0</strong> as (0, 0), and define:
      </p>

      <Definition title="Vector Sum">
        <p>
          For <strong>u</strong> = (u₁, u₂) and <strong>v</strong> = (v₁, v₂):
        </p>
        <MathBlock>
          {`(u_1, u_2) + (v_1, v_2) = (u_1 + v_1, u_2 + v_2)`}
        </MathBlock>
      </Definition>

      <Definition title="Scalar Multiple">
        <p>
          For a real number <em>a</em> and vector <strong>u</strong> = (u₁, u₂):
        </p>
        <MathBlock>
          {`a(u_1, u_2) = (au_1, au_2)`}
        </MathBlock>
      </Definition>

      <h3>The Parallelogram Rule</h3>

      <p>
        The vector sum is geometrically interesting because <strong>u</strong> + <strong>v</strong> is
        the fourth vertex of a parallelogram formed by the points <strong>0</strong>,
        <strong> u</strong>, and <strong>v</strong>.
      </p>

      <Callout type="info">
        <strong>Parallelogram Rule:</strong> The rule for forming the sum of two
        vectors is often called the "parallelogram rule" because <strong>u</strong> + <strong>v</strong>
        completes the parallelogram with vertices at <strong>0</strong>, <strong>u</strong>,
        and <strong>v</strong>.
      </Callout>

      <h3>Scalar Multiplication as Dilation</h3>

      <p>
        Scalar multiplication by <em>a</em> is also geometrically interesting because
        it represents <strong>magnification</strong> (or dilation) by the factor <em>a</em>.
        It magnifies the whole plane by the factor <em>a</em>, transforming each figure
        into a similar copy of itself.
      </p>

      <Definition title="Real Vector Space">
        <p>
          A <strong>real vector space</strong> is a set V of objects, called vectors,
          with operations of vector addition and scalar multiplication satisfying:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>If <strong>u</strong> and <strong>v</strong> are in V, then so are
              <strong> u</strong> + <strong>v</strong> and a<strong>u</strong> for any real number <em>a</em></li>
          <li>There is a zero vector <strong>0</strong> such that <strong>u</strong> + <strong>0</strong> = <strong>u</strong></li>
          <li>Each <strong>u</strong> has an additive inverse −<strong>u</strong> such that
              <strong> u</strong> + (−<strong>u</strong>) = <strong>0</strong></li>
          <li>The eight properties listed above hold</li>
        </ul>
      </Definition>

      <h3>Higher Dimensions</h3>

      <p>
        Real vector spaces are a natural setting for Euclidean geometry. Once we add
        the inner product (next sections), we can prove all theorems of Euclidean
        geometry. We can also extend to any number of dimensions using ℝⁿ.
      </p>

      <Theorem title="Three-Dimensional Space">
        <p>
          We can study three-dimensional Euclidean geometry in the space of ordered triples:
        </p>
        <MathBlock>
          {`\\mathbb{R}^3 = \\{(x_1, x_2, x_3) : x_1, x_2, x_3 \\in \\mathbb{R}\\}`}
        </MathBlock>
        <p className="mt-2">
          with componentwise addition and scalar multiplication.
        </p>
      </Theorem>

      <h3>Exercises</h3>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 4.1.1</h4>
        <p className="text-slate-300">
          Check that the other seven properties of a vector space for ℝ² are
          inherited from corresponding properties of ℝ.
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 4.1.2</h4>
        <p className="text-slate-300">
          Similarly check that ℝⁿ has the eight properties of a vector space.
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 4.1.3</h4>
        <p className="text-slate-300">
          What is the geometric meaning of the transformation of ℝ² when every
          vector is multiplied by −1? Is it a rotation?
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 4.1.4</h4>
        <p className="text-slate-300">
          Is it a rotation of ℝ³ when every vector is multiplied by −1?
        </p>
      </div>

      <SectionQuiz
        sectionId={23}
        questions={quizMap[23] || []}
        title="Vectors Quiz"
      />
    </LessonLayout>
  );
}
