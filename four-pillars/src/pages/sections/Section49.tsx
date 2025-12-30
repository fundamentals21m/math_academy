import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';
import { VectorTransformDemo } from '@/components/visualizations/chapter7';

export default function Section49() {
  return (
    <LessonLayout sectionId={49}>
      <h2>Vector Transformations</h2>

      <p>
        In this section, we study how transformations of the plane can be represented
        algebraically using matrices. This connection between geometry and algebra
        is fundamental to modern mathematics and has important applications in
        computer graphics, physics, and engineering.
      </p>

      <h3>Linear Transformations</h3>

      <Definition title="Linear Transformation">
        <p>
          A <strong>linear transformation</strong> of ℝ² is a function T : ℝ² → ℝ²
          that satisfies:
        </p>
        <MathBlock>{`T(\\mathbf{u} + \\mathbf{v}) = T(\\mathbf{u}) + T(\\mathbf{v})`}</MathBlock>
        <MathBlock>{`T(c\\mathbf{u}) = cT(\\mathbf{u})`}</MathBlock>
        <p className="mt-2">
          for all vectors u, v ∈ ℝ² and all scalars c ∈ ℝ.
        </p>
      </Definition>

      <p>
        A key property of linear transformations is that they fix the origin:
        T(0) = 0. They also preserve lines through the origin—if L is a line
        through O, then T(L) is also a line through O (or the point O itself).
      </p>

      <h3>Matrix Representation</h3>

      <p>
        Every linear transformation of ℝ² can be represented by a 2×2 matrix.
        If T sends the basis vectors e₁ = (1, 0) and e₂ = (0, 1) to vectors
        (a, c) and (b, d) respectively, then T is represented by the matrix:
      </p>

      <MathBlock>{`A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}`}</MathBlock>

      <p>
        The transformation T acts on a vector v = (x, y) by matrix multiplication:
      </p>

      <MathBlock>{`T\\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} ax + by \\\\ cx + dy \\end{pmatrix}`}</MathBlock>

      <Callout type="info">
        <strong>Composition and Multiplication:</strong> The composition of two
        linear transformations corresponds to matrix multiplication. If T₁ is
        represented by A₁ and T₂ is represented by A₂, then T₁ ∘ T₂ is represented
        by A₁A₂.
      </Callout>

      <h3>Examples of Linear Transformations</h3>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Rotation by angle θ about O</h4>
        <MathBlock>{`R_\\theta = \\begin{pmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{pmatrix}`}</MathBlock>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Reflection in the x-axis</h4>
        <MathBlock>{`\\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}`}</MathBlock>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Scaling by factor k</h4>
        <MathBlock>{`\\begin{pmatrix} k & 0 \\\\ 0 & k \\end{pmatrix}`}</MathBlock>
      </div>

      <h3>Affine Transformations</h3>

      <p>
        Linear transformations fix the origin, so they cannot represent translations.
        To handle translations, we use <strong>affine transformations</strong>.
      </p>

      <Definition title="Affine Transformation">
        <p>
          An <strong>affine transformation</strong> of ℝ² is a function of the form:
        </p>
        <MathBlock>{`\\mathbf{v} \\mapsto A\\mathbf{v} + \\mathbf{b}`}</MathBlock>
        <p className="mt-2">
          where A is a 2×2 matrix and b is a translation vector.
        </p>
      </Definition>

      <p>
        Affine transformations preserve collinearity (points on a line map to
        points on a line) and ratios of distances along a line. They form the
        transformation group of affine geometry.
      </p>

      <h3>Homogeneous Coordinates for Affine Maps</h3>

      <p>
        A clever technique allows us to represent affine transformations as
        linear transformations of a higher-dimensional space using
        <strong> homogeneous coordinates</strong>.
      </p>

      <p>
        We represent the point (x, y) by the triple (x, y, 1) in ℝ³. Then an
        affine transformation can be written as a 3×3 matrix:
      </p>

      <MathBlock>{`\\begin{pmatrix} x' \\\\ y' \\\\ 1 \\end{pmatrix} = \\begin{pmatrix} a & b & t_x \\\\ c & d & t_y \\\\ 0 & 0 & 1 \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\\\ 1 \\end{pmatrix}`}</MathBlock>

      <Callout type="warning">
        <strong>Key Advantage:</strong> With homogeneous coordinates, composition
        of affine transformations (including translations) is simply matrix
        multiplication. This makes computation much more efficient and uniform.
      </Callout>

      <h3>Orthogonal Matrices</h3>

      <p>
        The linear isometries (distance-preserving linear maps) are exactly those
        represented by <strong>orthogonal matrices</strong>.
      </p>

      <Definition title="Orthogonal Matrix">
        <p>
          A matrix A is <strong>orthogonal</strong> if A^T A = I, where A^T is the
          transpose of A and I is the identity matrix.
        </p>
        <p className="mt-2">
          Equivalently, A is orthogonal if its columns form an orthonormal basis.
        </p>
      </Definition>

      <Theorem title="Orthogonal Matrices and Isometries">
        <p>
          A linear transformation T : ℝ² → ℝ² is an isometry if and only if its
          matrix is orthogonal. Moreover:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>If det(A) = 1, then T is a rotation</li>
          <li>If det(A) = −1, then T is a reflection</li>
        </ul>
      </Theorem>

      <h3>The Groups O(2) and SO(2)</h3>

      <p>
        The set of all 2×2 orthogonal matrices forms a group called O(2). The
        subset with determinant 1 forms a subgroup called SO(2).
      </p>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Group Structure</h4>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>O(2)</strong>: All orthogonal 2×2 matrices (rotations and reflections)</li>
          <li><strong>SO(2)</strong>: Orthogonal matrices with det = 1 (rotations only)</li>
        </ul>
        <p className="text-slate-300 mt-3">
          SO(2) is isomorphic to the circle group S¹, since each rotation
          corresponds to a unique angle θ ∈ [0, 2π).
        </p>
      </div>

      <h3>Exercises</h3>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 7.2.1</h4>
        <p className="text-slate-300">
          Show that the composition of rotations R_θ₁ and R_θ₂ equals R_(θ₁+θ₂)
          by multiplying their matrices.
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 7.2.2</h4>
        <p className="text-slate-300">
          Find the matrix for reflection in the line y = x.
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 7.2.3</h4>
        <p className="text-slate-300">
          Verify that the product of two reflections in lines through O, meeting
          at angle θ, gives the rotation matrix R_(2θ).
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 7.2.4</h4>
        <p className="text-slate-300">
          Write the 3×3 homogeneous matrix for the translation (x, y) → (x + 3, y − 2)
          followed by rotation by 90° about the origin.
        </p>
      </div>

      <VectorTransformDemo className="my-6" />

      <SectionQuiz
        sectionId={49}
        questions={quizMap[49] || []}
        title="Vector Transformations Quiz"
      />
    </LessonLayout>
  );
}
