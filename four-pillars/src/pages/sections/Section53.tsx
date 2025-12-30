import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';
import { QuaternionRotationDemo } from '@/components/visualizations/chapter7';

export default function Section53() {
  return (
    <LessonLayout sectionId={53}>
      <h2>Representing Space Rotations by Quaternions</h2>

      <p>
        Quaternions provide an elegant and computationally efficient way to
        represent rotations in 3D space. This representation, discovered by
        William Rowan Hamilton in 1843, is widely used in computer graphics,
        robotics, and physics.
      </p>

      <h3>Review of Quaternions</h3>

      <Definition title="Quaternions">
        <p>
          A <strong>quaternion</strong> is a number of the form:
        </p>
        <MathBlock>{`\\mathbf{q} = a\\mathbf{1} + b\\mathbf{i} + c\\mathbf{j} + d\\mathbf{k}`}</MathBlock>
        <p className="mt-2">
          where a, b, c, d ∈ ℝ and i, j, k satisfy the relations:
        </p>
        <MathBlock>{`\\mathbf{i}^2 = \\mathbf{j}^2 = \\mathbf{k}^2 = \\mathbf{ijk} = -1`}</MathBlock>
      </Definition>

      <p>
        From these relations, we derive the multiplication rules:
      </p>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <MathBlock>{`\\mathbf{ij} = \\mathbf{k}, \\quad \\mathbf{jk} = \\mathbf{i}, \\quad \\mathbf{ki} = \\mathbf{j}`}</MathBlock>
        <MathBlock>{`\\mathbf{ji} = -\\mathbf{k}, \\quad \\mathbf{kj} = -\\mathbf{i}, \\quad \\mathbf{ik} = -\\mathbf{j}`}</MathBlock>
      </div>

      <Callout type="warning">
        <strong>Non-Commutativity:</strong> Quaternion multiplication is not
        commutative: ij = k but ji = −k. However, it is associative.
      </Callout>

      <h3>Quaternion Norm and Conjugate</h3>

      <Definition title="Norm and Conjugate">
        <p>
          For q = a + bi + cj + dk:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-2">
          <li>
            <strong>Conjugate:</strong> q̄ = a − bi − cj − dk
          </li>
          <li>
            <strong>Norm:</strong> |q|² = qq̄ = a² + b² + c² + d²
          </li>
          <li>
            <strong>Inverse:</strong> q⁻¹ = q̄/|q|² (for q ≠ 0)
          </li>
        </ul>
      </Definition>

      <p>
        A key property is that the norm is multiplicative: |q₁q₂| = |q₁||q₂|.
      </p>

      <h3>Unit Quaternions and Rotations</h3>

      <p>
        A <strong>unit quaternion</strong> is a quaternion with |q| = 1. These
        form a group under multiplication, and they correspond to rotations.
      </p>

      <Theorem title="Quaternion Rotation Formula">
        <p>
          Let q be a unit quaternion. The map:
        </p>
        <MathBlock>{`\\mathbf{p} \\mapsto \\mathbf{qpq}^{-1}`}</MathBlock>
        <p className="mt-2 text-slate-300">
          is a rotation of the "pure quaternions" (those with a = 0), which
          can be identified with ℝ³.
        </p>
      </Theorem>

      <p>
        We identify a point (x, y, z) ∈ ℝ³ with the pure quaternion
        p = xi + yj + zk. Then qpq⁻¹ is also a pure quaternion, corresponding
        to the rotated point.
      </p>

      <h3>Axis-Angle to Quaternion</h3>

      <p>
        The unit quaternion corresponding to rotation about axis
        n = (n₁, n₂, n₃) through angle θ is:
      </p>

      <MathBlock>{`\\mathbf{q} = \\cos\\frac{\\theta}{2} + \\sin\\frac{\\theta}{2}(n_1\\mathbf{i} + n_2\\mathbf{j} + n_3\\mathbf{k})`}</MathBlock>

      <Callout type="info">
        <strong>Half Angles:</strong> Notice the factor of θ/2 — the quaternion
        uses half the rotation angle. This is related to the fact that q and −q
        represent the same rotation.
      </Callout>

      <h3>The Two-to-One Correspondence</h3>

      <p>
        There is a subtlety in the quaternion representation: both q and −q
        produce the same rotation.
      </p>

      <Theorem title="Two-to-One Homomorphism">
        <p>
          The map from unit quaternions to rotations:
        </p>
        <MathBlock>{`\\mathbf{q} \\mapsto (\\mathbf{p} \\mapsto \\mathbf{qpq}^{-1})`}</MathBlock>
        <p className="mt-2 text-slate-300">
          is a 2-to-1 homomorphism from S³ (unit quaternions) onto SO(3).
          The kernel consists of {'{'}1, −1{'}'}.
        </p>
      </Theorem>

      <p>
        This can be written as:
      </p>

      <MathBlock>{`SO(3) \\cong S^3 / \\{\\pm 1\\}`}</MathBlock>

      <h3>Advantages of Quaternions</h3>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Why Use Quaternions?</h4>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Compact:</strong> Only 4 numbers (vs. 9 for a matrix)</li>
          <li><strong>Numerically stable:</strong> Easy to renormalize to unit length</li>
          <li><strong>No gimbal lock:</strong> Avoids singularities in Euler angles</li>
          <li><strong>Smooth interpolation:</strong> SLERP gives natural rotation paths</li>
          <li><strong>Efficient composition:</strong> Quaternion multiplication is fast</li>
        </ul>
      </div>

      <h3>Composing Rotations</h3>

      <p>
        The composition of rotations corresponds to quaternion multiplication:
      </p>

      <Theorem title="Composition of Rotations">
        <p>
          If rotation R₁ corresponds to quaternion q₁ and rotation R₂ corresponds
          to quaternion q₂, then the composition R₁ ∘ R₂ corresponds to q₁q₂.
        </p>
      </Theorem>

      <p>
        This is much simpler than multiplying 3×3 matrices!
      </p>

      <h3>Exercises</h3>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 7.6.1</h4>
        <p className="text-slate-300">
          Show that q = cos(π/4) + sin(π/4)k represents rotation by π/2 about
          the z-axis, and compute qiq⁻¹ to verify.
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 7.6.2</h4>
        <p className="text-slate-300">
          Verify that q and −q give the same rotation by computing qpq⁻¹ and
          (−q)p(−q)⁻¹ for p = i.
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 7.6.3</h4>
        <p className="text-slate-300">
          Find the quaternion representing rotation by π about the axis (1, 1, 0)/√2.
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 7.6.4</h4>
        <p className="text-slate-300">
          Compute the composition of 90° rotation about the z-axis followed by
          90° rotation about the x-axis using quaternions.
        </p>
      </div>

      <QuaternionRotationDemo className="my-6" />

      <SectionQuiz
        sectionId={53}
        questions={quizMap[53] || []}
        title="Representing Space Rotations by Quaternions Quiz"
      />
    </LessonLayout>
  );
}
