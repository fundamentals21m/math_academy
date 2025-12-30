import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section30() {
  return (
    <LessonLayout sectionId={30}>
      <h2>Discussion</h2>

      <p>
        Because the geometric content of a vector space with an inner product is
        much the same as Euclidean geometry, it is interesting to see how many
        axioms it takes to describe a vector space.
      </p>

      <h3>Axiom Count Comparison</h3>

      <p>
        Remember from Section 2.9 that it takes <strong>17 Hilbert axioms</strong>
        to describe the Euclidean plane, or 16 if we are willing to drop completeness
        of the line.
      </p>

      <h3>Vector Space Axioms</h3>

      <p>
        To define a vector space, we began with eight axioms for vector addition
        and scalar multiplication:
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

      <h3>Inner Product Axioms</h3>

      <p>
        Then we added three (or four) axioms for the inner product:
      </p>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <MathBlock>{`\\mathbf{u} \\cdot \\mathbf{v} = \\mathbf{v} \\cdot \\mathbf{u}`}</MathBlock>
        <MathBlock>{`\\mathbf{u} \\cdot (\\mathbf{v} + \\mathbf{w}) = \\mathbf{u} \\cdot \\mathbf{v} + \\mathbf{u} \\cdot \\mathbf{w}`}</MathBlock>
        <MathBlock>{`(a\\mathbf{u}) \\cdot \\mathbf{v} = \\mathbf{u} \\cdot (a\\mathbf{v}) = a(\\mathbf{u} \\cdot \\mathbf{v})`}</MathBlock>
      </div>

      <p>
        We also need relations among inner product, length, and angle—at a minimum
        the cosine formula:
      </p>

      <MathBlock>
        {`\\mathbf{u} \\cdot \\mathbf{v} = |\\mathbf{u}||\\mathbf{v}|\\cos\\theta`}
      </MathBlock>

      <p>
        So this is 12 or 13 axioms so far.
      </p>

      <h3>The Field Axioms</h3>

      <p>
        But we have also assumed that the scalars a, b, ... are real numbers, so
        there remains the problem of writing down axioms for them. These are the
        <strong> field axioms</strong>:
      </p>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-blue-400 font-semibold mb-2">Commutative Laws</p>
            <MathBlock>{`a + b = b + a, \\quad ab = ba`}</MathBlock>
          </div>
          <div>
            <p className="text-blue-400 font-semibold mb-2">Associative Laws</p>
            <MathBlock>{`a + (b + c) = (a + b) + c`}</MathBlock>
            <MathBlock>{`a(bc) = (ab)c`}</MathBlock>
          </div>
          <div>
            <p className="text-blue-400 font-semibold mb-2">Identity Laws</p>
            <MathBlock>{`a + 0 = a, \\quad a \\cdot 1 = a`}</MathBlock>
          </div>
          <div>
            <p className="text-blue-400 font-semibold mb-2">Inverse Laws</p>
            <MathBlock>{`a + (-a) = 0, \\quad aa^{-1} = 1`}</MathBlock>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-blue-400 font-semibold mb-2">Distributive Law</p>
          <MathBlock>{`a(b + c) = ab + ac`}</MathBlock>
        </div>
      </div>

      <Callout type="info">
        <strong>Total Count:</strong> The usual definition of a vector space, with
        an inner product suitable for Euclidean geometry, takes <strong>more than
        20 axioms</strong>!
      </Callout>

      <h3>Comparison with Hilbert's Axioms</h3>

      <Definition title="Trade-offs">
        <ul className="list-disc list-inside space-y-2">
          <li>
            The field axioms and vector space axioms are useful in many other
            parts of mathematics
          </li>
          <li>
            Most of the Hilbert axioms seem meaningful only in geometry
          </li>
          <li>
            By varying the inner product slightly, one can change the geometry
            of the vector space in interesting ways
          </li>
        </ul>
      </Definition>

      <h3>Minkowski Space</h3>

      <p>
        By varying the inner product, one can obtain the geometry of
        <strong> Minkowski space</strong> used in Einstein's special theory of
        relativity. This shows the flexibility of the vector space approach.
      </p>

      <h3>Further Reading</h3>

      <p>
        To learn more about the vector space approach to geometry, see:
      </p>

      <ul className="list-disc list-inside space-y-2 my-4">
        <li><em>Linear Algebra and Geometry, a Second Course</em> by I. Kaplansky</li>
        <li><em>Metric Affine Geometry</em> by E. Snapper and R. J. Troyer</li>
      </ul>

      <h3>Looking Ahead</h3>

      <Callout type="info">
        <strong>A Simpler Foundation:</strong> Still, one can dream of building
        geometry on a much simpler set of axioms. In Chapter 6, we will realize
        this dream with <strong>projective geometry</strong>, which we begin
        studying in Chapter 5.
      </Callout>

      <h3>Key Takeaways from Chapter 4</h3>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Vectors</strong> can be added and multiplied by scalars,
            following eight fundamental properties
          </li>
          <li>
            <strong>Linear independence</strong> captures the concept of
            different directions
          </li>
          <li>
            The <strong>midpoint formula</strong> and <strong>centroid</strong>
            are vector averages
          </li>
          <li>
            The <strong>inner product</strong> encodes both length and angle
          </li>
          <li>
            <strong>Cauchy-Schwarz</strong> implies the triangle inequality
          </li>
          <li>
            <strong>Rotation matrices</strong> and <strong>complex numbers</strong>
            provide elegant representations of rotations
          </li>
          <li>
            Vector space geometry requires many axioms but is highly flexible
          </li>
        </ul>
      </div>

      <Theorem title="The Power of Linear Algebra">
        <p>
          Real vector spaces with inner products are a natural setting for
          Euclidean geometry. Once the inner product is there, we can prove
          all theorems of Euclidean geometry, often more efficiently than before.
          We can also uniformly extend geometry to any number of dimensions by
          considering ℝⁿ.
        </p>
      </Theorem>

      <SectionQuiz
        sectionId={30}
        questions={quizMap[30] || []}
        title="Chapter 4 Discussion Quiz"
      />
    </LessonLayout>
  );
}
