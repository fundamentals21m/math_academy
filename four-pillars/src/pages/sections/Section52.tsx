import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section52() {
  return (
    <LessonLayout sectionId={52}>
      <h2>The Rotation Group of the Sphere</h2>

      <p>
        We now focus on the <strong>rotation group</strong> of the sphere — the
        group of orientation-preserving isometries of S². This group, denoted
        SO(3), is one of the most important groups in mathematics and physics.
      </p>

      <h3>The Group SO(3)</h3>

      <Definition title="SO(3)">
        <p>
          The <strong>special orthogonal group</strong> SO(3) consists of all
          3×3 orthogonal matrices with determinant 1:
        </p>
        <MathBlock>{`SO(3) = \\{A \\in M_{3\\times 3}(\\mathbb{R}) : A^T A = I, \\det(A) = 1\\}`}</MathBlock>
        <p className="mt-2">
          These are exactly the rotation matrices — they represent rotations of
          ℝ³ about axes through the origin.
        </p>
      </Definition>

      <p>
        Every rotation of ℝ³ restricts to an isometry of S², and conversely,
        every orientation-preserving isometry of S² extends to a rotation of ℝ³.
        This gives us:
      </p>

      <MathBlock>{`\\text{Isom}^+(S^2) \\cong SO(3)`}</MathBlock>

      <h3>Rotation Matrices</h3>

      <p>
        A rotation about the z-axis through angle θ is represented by:
      </p>

      <MathBlock>{`R_z(\\theta) = \\begin{pmatrix} \\cos\\theta & -\\sin\\theta & 0 \\\\ \\sin\\theta & \\cos\\theta & 0 \\\\ 0 & 0 & 1 \\end{pmatrix}`}</MathBlock>

      <p>
        Similarly, rotations about the x and y axes are:
      </p>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <MathBlock>{`R_x(\\theta) = \\begin{pmatrix} 1 & 0 & 0 \\\\ 0 & \\cos\\theta & -\\sin\\theta \\\\ 0 & \\sin\\theta & \\cos\\theta \\end{pmatrix}`}</MathBlock>
        <MathBlock>{`R_y(\\theta) = \\begin{pmatrix} \\cos\\theta & 0 & \\sin\\theta \\\\ 0 & 1 & 0 \\\\ -\\sin\\theta & 0 & \\cos\\theta \\end{pmatrix}`}</MathBlock>
      </div>

      <h3>Products of Rotations</h3>

      <p>
        Understanding how rotations combine is crucial. Unlike in the plane,
        rotations in 3D do not commute in general.
      </p>

      <Theorem title="Product of Two Rotations">
        <p>
          The product of two rotations of S² is another rotation. If r₁ is
          rotation about axis A₁ and r₂ is rotation about axis A₂, then r₁r₂
          is rotation about some axis A₃.
        </p>
        <p className="mt-2 text-slate-300">
          The axis A₃ and the angle of rotation depend on both the axes and
          angles of r₁ and r₂ in a complex way.
        </p>
      </Theorem>

      <Callout type="warning">
        <strong>Non-Commutativity:</strong> In general, r₁r₂ ≠ r₂r₁. The order
        of rotations matters in 3D! This is a fundamental difference from the
        group of rotations of the plane, which is abelian.
      </Callout>

      <h3>Rotations as Products of Reflections</h3>

      <p>
        Every rotation of S² is a product of exactly two reflections.
      </p>

      <Theorem title="Rotation from Two Reflections">
        <p>
          Let C₁ and C₂ be two great circles meeting at points P and P'
          (antipodal). If the angle between C₁ and C₂ is θ, then the product
          of reflections in C₁ and C₂ is rotation about the axis PP' through
          angle 2θ.
        </p>
      </Theorem>

      <p>
        Conversely, any rotation can be decomposed into a product of two
        reflections in many ways.
      </p>

      <h3>The Axis-Angle Representation</h3>

      <Definition title="Axis-Angle Representation">
        <p>
          Every rotation of S² (other than the identity) can be uniquely
          described by:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>An <strong>axis</strong>: a line through O, or equivalently a unit vector n</li>
          <li>An <strong>angle</strong>: θ ∈ (0, 2π)</li>
        </ul>
        <p className="mt-2">
          The rotation is about the axis n through angle θ (using the right-hand rule).
        </p>
      </Definition>

      <Callout type="info">
        <strong>Rodrigues' Formula:</strong> The rotation of a vector v about
        axis n through angle θ is given by:
        <MathBlock>{`v' = v\\cos\\theta + (n \\times v)\\sin\\theta + n(n \\cdot v)(1 - \\cos\\theta)`}</MathBlock>
      </Callout>

      <h3>Topology of SO(3)</h3>

      <p>
        The group SO(3) has interesting topological properties. It can be
        parameterized by a solid ball of radius π, where:
      </p>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <ul className="list-disc list-inside space-y-2">
          <li>The center represents the identity rotation</li>
          <li>A point at distance θ from the center in direction n represents rotation about n through angle θ</li>
          <li>Antipodal points on the boundary (radius π) are identified, since rotation by π about n equals rotation by π about −n</li>
        </ul>
      </div>

      <Theorem title="SO(3) as ℝP³">
        <p>
          The group SO(3) is homeomorphic to the real projective space ℝP³.
        </p>
        <p className="mt-2 text-slate-300">
          This follows from identifying antipodal points on the boundary of
          the ball, which is exactly how ℝP³ is constructed from the 3-ball.
        </p>
      </Theorem>

      <h3>Exercises</h3>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 7.5.1</h4>
        <p className="text-slate-300">
          Show that R_z(θ₁)R_z(θ₂) = R_z(θ₁ + θ₂) by multiplying the matrices.
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 7.5.2</h4>
        <p className="text-slate-300">
          Compute R_x(π/2)R_z(π/2) and R_z(π/2)R_x(π/2) to verify that rotations
          in 3D do not commute.
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 7.5.3</h4>
        <p className="text-slate-300">
          Show that the product of two reflections in perpendicular great circles
          is a rotation by π (a half-turn) about their line of intersection.
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 7.5.4</h4>
        <p className="text-slate-300">
          Use Rodrigues' formula to find the image of v = (1, 0, 0) under rotation
          by π/2 about the axis n = (0, 0, 1).
        </p>
      </div>

      <SectionQuiz
        sectionId={52}
        questions={quizMap[52] || []}
        title="The Rotation Group of the Sphere Quiz"
      />
    </LessonLayout>
  );
}
