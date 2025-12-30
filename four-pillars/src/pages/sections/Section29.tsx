import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';
import { ComplexRotationDemo } from '@/components/visualizations/chapter4';

export default function Section29() {
  return (
    <LessonLayout sectionId={29}>
      <h2>Rotations, Matrices, and Complex Numbers</h2>

      <p>
        In this section, we explore three equivalent ways to represent rotations
        of the plane: functions, matrices, and complex numbers. Each representation
        has its advantages.
      </p>

      <h3>Rotation Matrices</h3>

      <p>
        In Section 3.6, we defined a rotation of ℝ² as a function r<sub>c,s</sub>,
        where c and s are real numbers such that c² + s² = 1. We described r<sub>c,s</sub>
        as the function that sends (x, y) to (cx − sy, sx + cy).
      </p>

      <Definition title="Rotation Matrix">
        <p>
          The rotation through angle θ can be described by the <strong>matrix</strong>
          of coefficients of x and y:
        </p>
        <MathBlock>
          {`\\begin{pmatrix} c & -s \\\\ s & c \\end{pmatrix}, \\quad \\text{where } c = \\cos\\theta \\text{ and } s = \\sin\\theta`}
        </MathBlock>
      </Definition>

      <p>
        Matrix notation allows us to rewrite the rotation as matrix multiplication:
      </p>

      <MathBlock>
        {`\\begin{pmatrix} c & -s \\\\ s & c \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} cx - sy \\\\ sx + cy \\end{pmatrix}`}
      </MathBlock>

      <Callout type="info">
        <strong>Advantage of Matrices:</strong> Functions are separated from their
        variables, so they can be composed without the variables becoming involved—simply
        by multiplying matrices.
      </Callout>

      <h3>Deriving Angle Addition Formulas</h3>

      <p>
        Matrix multiplication gives proofs of the formulas for cos(θ₁ + θ₂)
        and sin(θ₁ + θ₂):
      </p>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <ul className="list-disc list-inside space-y-2">
          <li>Rotation through angle θ₁ is given by the matrix with cos θ₁ and sin θ₁</li>
          <li>Rotation through angle θ₂ is given by the matrix with cos θ₂ and sin θ₂</li>
          <li>Rotation through θ₁ + θ₂ is given by the product of these matrices</li>
        </ul>
      </div>

      <Theorem title="Angle Addition Formulas">
        <p>
          Multiplying the rotation matrices and equating entries:
        </p>
        <MathBlock>
          {`\\cos(\\theta_1 + \\theta_2) = \\cos\\theta_1 \\cos\\theta_2 - \\sin\\theta_1 \\sin\\theta_2`}
        </MathBlock>
        <MathBlock>
          {`\\sin(\\theta_1 + \\theta_2) = \\cos\\theta_1 \\sin\\theta_2 + \\sin\\theta_1 \\cos\\theta_2`}
        </MathBlock>
      </Theorem>

      <h3>Complex Numbers</h3>

      <p>
        For rotations of ℝ², there is a notation even more efficient than the rotation
        matrix. It is the <strong>complex number</strong> cos θ + i sin θ, where i = √(−1).
      </p>

      <Definition title="Complex Number Representation">
        <p>
          We represent the point (x, y) ∈ ℝ² by the complex number z = x + iy,
          and we rotate it through angle θ about O by <strong>multiplying</strong>
          it by cos θ + i sin θ.
        </p>
      </Definition>

      <p>
        This works because i² = −1, and therefore:
      </p>

      <MathBlock>
        {`(\\cos\\theta + i\\sin\\theta)(x + iy) = x\\cos\\theta - y\\sin\\theta + i(x\\sin\\theta + y\\cos\\theta)`}
      </MathBlock>

      <Callout type="info">
        Multiplying all points at once by cos θ + i sin θ rotates the whole plane
        about O through angle θ.
      </Callout>

      <h3>Angle Addition via Complex Numbers</h3>

      <p>
        Multiplication by (cos θ₁ + i sin θ₁)(cos θ₂ + i sin θ₂) rotates the plane
        through θ₁ + θ₂, so it equals multiplication by cos(θ₁ + θ₂) + i sin(θ₁ + θ₂).
      </p>

      <Theorem title="Complex Proof of Angle Addition">
        <MathBlock>
          {`\\begin{aligned}
&\\cos(\\theta_1 + \\theta_2) + i\\sin(\\theta_1 + \\theta_2) \\\\
&= (\\cos\\theta_1 + i\\sin\\theta_1)(\\cos\\theta_2 + i\\sin\\theta_2) \\\\
&= \\cos\\theta_1\\cos\\theta_2 - \\sin\\theta_1\\sin\\theta_2 + i(\\cos\\theta_1\\sin\\theta_2 + \\sin\\theta_1\\cos\\theta_2)
\\end{aligned}`}
        </MathBlock>
        <p className="mt-2">
          Equating real and imaginary parts gives the angle addition formulas.
        </p>
      </Theorem>

      <h3>Why i² = −1?</h3>

      <p>
        The property i² = −1 is not accidental. Any algebra of points in ℝ² that
        satisfies the same laws as the algebra of ℝ automatically satisfies i² = −1,
        where i = (0, 1).
      </p>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Key Properties</h4>
        <p className="text-slate-300 mb-2">
          The essential algebraic laws are:
        </p>
        <MathBlock>
          {`|uv| = |u||v| \\quad \\text{(multiplicative absolute value)}`}
        </MathBlock>
        <MathBlock>
          {`u(v + w) = uv + uw \\quad \\text{(distributive law)}`}
        </MathBlock>
        <p className="text-slate-300 mt-2">
          These imply that multiplying the plane ℂ by a number u with |u| = 1 is
          an isometry leaving O fixed—hence a rotation.
        </p>
      </div>

      <Theorem title="Unit Complex Numbers and Rotation">
        <p>
          Any u with |u| = 1 can be written as cos θ + i sin θ for some angle θ.
          Multiplication by u rotates the point 1 to the point u, hence rotates
          the whole plane through angle θ.
        </p>
        <p className="mt-2">
          In particular, multiplication by i = (0, 1) sends (1, 0) to (0, 1) and
          hence rotates the plane through π/2. This implies i² = −1, because
          multiplication by i² rotates the plane through π, which is the same
          as multiplication by −1.
        </p>
      </Theorem>

      <h3>Exercises</h3>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 4.7.1</h4>
        <p className="text-slate-300">
          Given that |x + iy| = √(x² + y²), explain why |v − w| equals the distance
          between the complex numbers v and w.
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 4.7.2</h4>
        <p className="text-slate-300">
          Assuming the multiplicative absolute value and the distributive law, show that:
          distance between uv and uw = |u| × distance between v and w.
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 4.7.3</h4>
        <p className="text-slate-300">
          Deduce that multiplication of ℂ by a number u with |u| = 1 is an isometry
          leaving O fixed.
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 4.7.4</h4>
        <p className="text-slate-300">
          Assuming that u ≠ 1, and hence uz ≠ z when z ≠ 0, deduce that multiplication
          by u ≠ 1 is a rotation.
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 4.7.5</h4>
        <p className="text-slate-300">
          Explain why any u with |u| = 1 can be written in the form cos θ + i sin θ
          for some angle θ, and conclude that multiplication by u rotates the plane
          through angle θ.
        </p>
      </div>

      <ComplexRotationDemo className="my-6" />

      <SectionQuiz
        sectionId={29}
        questions={quizMap[29] || []}
        title="Rotations, Matrices, and Complex Numbers Quiz"
      />
    </LessonLayout>
  );
}
