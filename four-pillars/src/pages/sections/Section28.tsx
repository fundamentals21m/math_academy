import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section28() {
  return (
    <LessonLayout sectionId={28}>
      <h2>The Triangle Inequality</h2>

      <p>
        In vector geometry, the triangle inequality |<strong>u</strong> + <strong>v</strong>| ≤
        |<strong>u</strong>| + |<strong>v</strong>| is usually derived from a more fundamental
        inequality: the <strong>Cauchy-Schwarz inequality</strong>.
      </p>

      <h3>The Cauchy-Schwarz Inequality</h3>

      <Theorem title="Cauchy-Schwarz Inequality">
        <p>
          For any vectors <strong>u</strong> and <strong>v</strong>:
        </p>
        <MathBlock>
          {`|\\mathbf{u} \\cdot \\mathbf{v}| \\leq |\\mathbf{u}||\\mathbf{v}|`}
        </MathBlock>
      </Theorem>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Proof from the Inner Product Formula</h4>
        <p className="text-slate-300 mb-2">
          The inner product formula says:
        </p>
        <MathBlock>
          {`\\mathbf{u} \\cdot \\mathbf{v} = |\\mathbf{u}||\\mathbf{v}|\\cos\\theta`}
        </MathBlock>
        <p className="text-slate-300 mt-2 mb-2">
          Therefore:
        </p>
        <MathBlock>
          {`|\\mathbf{u} \\cdot \\mathbf{v}| \\leq |\\mathbf{u}||\\mathbf{v}||\\cos\\theta| \\leq |\\mathbf{u}||\\mathbf{v}|`}
        </MathBlock>
        <p className="text-slate-300 mt-2">
          because |cos θ| ≤ 1 for any angle θ.
        </p>
      </div>

      <h3>The Triangle Inequality</h3>

      <Theorem title="Triangle Inequality">
        <p>
          For any vectors <strong>u</strong> and <strong>v</strong>:
        </p>
        <MathBlock>
          {`|\\mathbf{u} + \\mathbf{v}| \\leq |\\mathbf{u}| + |\\mathbf{v}|`}
        </MathBlock>
      </Theorem>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Proof</h4>
        <p className="text-slate-300 mb-2">
          To get the triangle inequality, it suffices to show that
          |<strong>u</strong> + <strong>v</strong>|² ≤ (|<strong>u</strong>| + |<strong>v</strong>|)²:
        </p>
        <MathBlock>
          {`\\begin{aligned}
|\\mathbf{u} + \\mathbf{v}|^2 &= (\\mathbf{u} + \\mathbf{v}) \\cdot (\\mathbf{u} + \\mathbf{v}) \\\\
&= |\\mathbf{u}|^2 + 2\\mathbf{u} \\cdot \\mathbf{v} + |\\mathbf{v}|^2 \\\\
&\\leq |\\mathbf{u}|^2 + 2|\\mathbf{u}||\\mathbf{v}| + |\\mathbf{v}|^2 \\quad \\text{(by Cauchy-Schwarz)} \\\\
&= (|\\mathbf{u}| + |\\mathbf{v}|)^2
\\end{aligned}`}
        </MathBlock>
      </div>

      <Callout type="info">
        <strong>Why Cauchy-Schwarz Matters:</strong> The Cauchy-Schwarz inequality
        holds in spaces more complicated than ℝ², with more complicated inner products.
        Because the triangle inequality follows from Cauchy-Schwarz, it too holds in
        these complicated spaces.
      </Callout>

      <h3>Higher Dimensional Euclidean Spaces</h3>

      <p>
        Linear algebra works just as well in ℝⁿ as it does in ℝ². The space ℝⁿ
        is the set of ordered n-tuples (x₁, x₂, ..., xₙ) of real numbers.
      </p>

      <Definition title="Operations in ℝⁿ">
        <p>
          If <strong>u</strong> and <strong>v</strong> are in ℝⁿ, we define:
        </p>
        <MathBlock>
          {`\\mathbf{u} + \\mathbf{v} = (u_1 + v_1, u_2 + v_2, \\ldots, u_n + v_n)`}
        </MathBlock>
        <MathBlock>
          {`a\\mathbf{u} = (au_1, au_2, \\ldots, au_n)`}
        </MathBlock>
        <MathBlock>
          {`\\mathbf{u} \\cdot \\mathbf{v} = u_1v_1 + u_2v_2 + \\cdots + u_nv_n`}
        </MathBlock>
      </Definition>

      <h3>Euclidean Distance in Higher Dimensions</h3>

      <p>
        ℝⁿ becomes a <strong>Euclidean space</strong> when we give it the inner product
        structure. This enables us to define distance by:
      </p>

      <MathBlock>
        {`|\\mathbf{u}|^2 = \\mathbf{u} \\cdot \\mathbf{u} = u_1^2 + u_2^2 + \\cdots + u_n^2`}
      </MathBlock>

      <Theorem title="Distance in ℝ³">
        <p>
          The distance of (u₁, u₂, u₃) from <strong>0</strong> in ℝ³ is:
        </p>
        <MathBlock>
          {`|\\mathbf{u}| = \\sqrt{u_1^2 + u_2^2 + u_3^2}`}
        </MathBlock>
        <p className="mt-2">
          This can be understood as two applications of the Pythagorean theorem:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>√(u₁² + u₂²) is the distance from <strong>0</strong> to (u₁, u₂, 0)</li>
          <li>√(u₁² + u₂² + u₃²) is the distance from <strong>0</strong> to (u₁, u₂, u₃)</li>
        </ul>
      </Theorem>

      <Callout type="info">
        All theorems proved in this chapter for vectors in the plane ℝ² hold in ℝⁿ.
        Any plane in ℝⁿ behaves the same as the plane ℝ², because we can construct
        an isometry mapping any plane onto a standard coordinate plane.
      </Callout>

      <h3>Alternative Proof of Cauchy-Schwarz</h3>

      <p>
        A proof using only general properties of the inner product can be obtained
        by an algebraic trick with quadratic equations.
      </p>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Algebraic Proof</h4>
        <p className="text-slate-300 mb-2">
          For any real number x and any vectors <strong>u</strong> and <strong>v</strong>:
        </p>
        <MathBlock>
          {`(\\mathbf{u} + x\\mathbf{v}) \\cdot (\\mathbf{u} + x\\mathbf{v}) = |\\mathbf{u}|^2 + 2x(\\mathbf{u} \\cdot \\mathbf{v}) + x^2|\\mathbf{v}|^2 \\geq 0`}
        </MathBlock>
        <p className="text-slate-300 mt-2 mb-2">
          This is a quadratic in x that is always ≥ 0, so its discriminant must be ≤ 0:
        </p>
        <MathBlock>
          {`(2\\mathbf{u} \\cdot \\mathbf{v})^2 - 4|\\mathbf{u}|^2|\\mathbf{v}|^2 \\leq 0`}
        </MathBlock>
        <p className="text-slate-300 mt-2">
          This gives (u · v)² ≤ |u|²|v|², hence |u · v| ≤ |u||v|.
        </p>
      </div>

      <h3>Exercises</h3>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 4.6.1</h4>
        <p className="text-slate-300">
          Explain why the Euclidean inner product for ℝⁿ is positive definite
          (i.e., why <strong>w</strong> · <strong>w</strong> ≥ 0 for any vector <strong>w</strong>).
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 4.6.2</h4>
        <p className="text-slate-300">
          For any real number x, and any vectors <strong>u</strong> and <strong>v</strong>, show that
          (<strong>u</strong> + x<strong>v</strong>) · (<strong>u</strong> + x<strong>v</strong>) =
          |<strong>u</strong>|² + 2x(<strong>u</strong> · <strong>v</strong>) + x²|<strong>v</strong>|².
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg my-6">
        <h4 className="font-semibold text-blue-400 mb-3">Exercise 4.6.3</h4>
        <p className="text-slate-300">
          If A, B, and C are real numbers and A + Bx + Cx² ≥ 0 for any real number x,
          explain why B² − 4AC ≤ 0.
        </p>
      </div>

      <SectionQuiz
        sectionId={28}
        questions={quizMap[28] || []}
        title="Triangle Inequality Quiz"
      />
    </LessonLayout>
  );
}
