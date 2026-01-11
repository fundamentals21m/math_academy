import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section33() {
  return (
    <LessonLayout sectionId={33}>
      {/* Introduction */}
      <p>
        Every linear transformation between finite-dimensional spaces can be represented by a
        <strong> matrix</strong>. The key is choosing bases for both the input and output spaces.
      </p>

      <h2>The Matrix of a Linear Transformation</h2>

      <Theorem
        title="From Transformation to Matrix"
        className="my-6"
        proof={
          <>
            <p>Any <InlineMath>{`\\mathbf{x} \\in V`}</InlineMath> can be written as <InlineMath>{`\\mathbf{x} = x_1\\mathbf{v}_1 + \\cdots + x_n\\mathbf{v}_n`}</InlineMath>.</p>
            <p className="mt-2">By linearity:</p>
            <MathBlock>{`T(\\mathbf{x}) = x_1 T(\\mathbf{v}_1) + \\cdots + x_n T(\\mathbf{v}_n)`}</MathBlock>
            <p className="mt-2">Each <InlineMath>{`T(\\mathbf{v}_j)`}</InlineMath> is in <InlineMath>W</InlineMath>, so it has coordinates in the <InlineMath>{`\\mathbf{w}`}</InlineMath>-basis:</p>
            <MathBlock>{`T(\\mathbf{v}_j) = \\sum_{i=1}^m a_{ij} \\mathbf{w}_i`}</MathBlock>
            <p className="mt-2">The output <InlineMath>{`T(\\mathbf{x})`}</InlineMath> in coordinates is:</p>
            <MathBlock>{`[T(\\mathbf{x})]_W = \\begin{bmatrix} a_{11} & \\cdots & a_{1n} \\\\ \\vdots & \\ddots & \\vdots \\\\ a_{m1} & \\cdots & a_{mn} \\end{bmatrix} \\begin{bmatrix} x_1 \\\\ \\vdots \\\\ x_n \\end{bmatrix} = A[\\mathbf{x}]_V`}</MathBlock>
            <p className="mt-2">So the matrix <InlineMath>A</InlineMath> represents <InlineMath>T</InlineMath> in the chosen bases.</p>
          </>
        }
      >
        <p>
          Let <InlineMath>T: V \to W</InlineMath> be linear. Choose bases <InlineMath>{`\\mathbf{v}_1, \\ldots, \\mathbf{v}_n`}</InlineMath> for <InlineMath>V</InlineMath>
          and <InlineMath>{`\\mathbf{w}_1, \\ldots, \\mathbf{w}_m`}</InlineMath> for <InlineMath>W</InlineMath>.
        </p>
        <p className="mt-2">
          The <strong>matrix of T</strong> has columns that are the coordinates of <InlineMath>{`T(\\mathbf{v}_j)`}</InlineMath>:
        </p>
        <MathBlock>
          {`T(\\mathbf{v}_j) = a_{1j}\\mathbf{w}_1 + a_{2j}\\mathbf{w}_2 + \\cdots + a_{mj}\\mathbf{w}_m`}
        </MathBlock>
        <MathBlock>
          {`A = \\begin{bmatrix} a_{11} & \\cdots & a_{1n} \\\\ \\vdots & \\ddots & \\vdots \\\\ a_{m1} & \\cdots & a_{mn} \\end{bmatrix}`}
        </MathBlock>
      </Theorem>

      <Example title="Differentiation Matrix" className="my-6">
        <p>
          For <InlineMath>D: P_2 \to P_1</InlineMath> with basis <InlineMath>1, x, x^2</InlineMath> for <InlineMath>P_2</InlineMath> and <InlineMath>1, x</InlineMath> for <InlineMath>P_1</InlineMath>:
        </p>
        <MathBlock>
          {`D(1) = 0, \\quad D(x) = 1, \\quad D(x^2) = 2x`}
        </MathBlock>
        <p className="mt-2">The matrix is:</p>
        <MathBlock>
          {`A = \\begin{bmatrix} 0 & 1 & 0 \\\\ 0 & 0 & 2 \\end{bmatrix}`}
        </MathBlock>
      </Example>

      <h2>Standard Matrix</h2>

      <Definition title="Standard Matrix" className="my-6">
        <p>
          For <InlineMath>{`T: \\mathbb{R}^n \\to \\mathbb{R}^m`}</InlineMath> with standard bases,
          column <InlineMath>j</InlineMath> of <InlineMath>A</InlineMath> is <InlineMath>{`T(\\mathbf{e}_j)`}</InlineMath>:
        </p>
        <MathBlock>
          {`A = \\begin{bmatrix} | & | & & | \\\\ T(\\mathbf{e}_1) & T(\\mathbf{e}_2) & \\cdots & T(\\mathbf{e}_n) \\\\ | & | & & | \\end{bmatrix}`}
        </MathBlock>
      </Definition>

      <Example title="Rotation Matrix" className="my-6">
        <p>
          Rotation by angle <InlineMath>\theta</InlineMath> in <InlineMath>{`\\mathbb{R}^2`}</InlineMath>:
        </p>
        <MathBlock>
          {`T(\\mathbf{e}_1) = \\begin{bmatrix} \\cos\\theta \\\\ \\sin\\theta \\end{bmatrix}, \\quad T(\\mathbf{e}_2) = \\begin{bmatrix} -\\sin\\theta \\\\ \\cos\\theta \\end{bmatrix}`}
        </MathBlock>
        <MathBlock>
          {`R_\\theta = \\begin{bmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{bmatrix}`}
        </MathBlock>
      </Example>

      <Example title="Projection Matrix" className="my-6">
        <p>
          Projection onto the <InlineMath>x</InlineMath>-axis in <InlineMath>{`\\mathbb{R}^2`}</InlineMath>:
        </p>
        <MathBlock>
          {`T(\\mathbf{e}_1) = \\begin{bmatrix} 1 \\\\ 0 \\end{bmatrix}, \\quad T(\\mathbf{e}_2) = \\begin{bmatrix} 0 \\\\ 0 \\end{bmatrix}`}
        </MathBlock>
        <MathBlock>
          {`P = \\begin{bmatrix} 1 & 0 \\\\ 0 & 0 \\end{bmatrix}`}
        </MathBlock>
      </Example>

      <h2>Composition of Transformations</h2>

      <Theorem
        title="Matrix of a Composition"
        className="my-6"
        proof={
          <>
            <p>Let <InlineMath>A</InlineMath> be the matrix of <InlineMath>T_1</InlineMath> (basis of <InlineMath>U</InlineMath> to basis of <InlineMath>V</InlineMath>) and <InlineMath>B</InlineMath> be the matrix of <InlineMath>T_2</InlineMath> (basis of <InlineMath>V</InlineMath> to basis of <InlineMath>W</InlineMath>).</p>
            <p className="mt-2">For any <InlineMath>{`\\mathbf{x} \\in U`}</InlineMath>:</p>
            <MathBlock>{`[T_1(\\mathbf{x})]_V = A[\\mathbf{x}]_U`}</MathBlock>
            <MathBlock>{`[T_2(T_1(\\mathbf{x}))]_W = B[T_1(\\mathbf{x})]_V = B(A[\\mathbf{x}]_U) = (BA)[\\mathbf{x}]_U`}</MathBlock>
            <p className="mt-2">Therefore <InlineMath>{`[(T_2 \\circ T_1)(\\mathbf{x})]_W = (BA)[\\mathbf{x}]_U`}</InlineMath>, so the matrix of <InlineMath>{`T_2 \\circ T_1`}</InlineMath> is <InlineMath>BA</InlineMath>.</p>
            <p className="mt-2">Note: Order matters! We apply <InlineMath>T_1</InlineMath> first (matrix <InlineMath>A</InlineMath>), then <InlineMath>T_2</InlineMath> (matrix <InlineMath>B</InlineMath>), giving product <InlineMath>BA</InlineMath>.</p>
          </>
        }
      >
        <p>
          If <InlineMath>T_1: U \to V</InlineMath> has matrix <InlineMath>A</InlineMath> and <InlineMath>T_2: V \to W</InlineMath> has matrix <InlineMath>B</InlineMath>,
          then the composition <InlineMath>T_2 \circ T_1: U \to W</InlineMath> has matrix:
        </p>
        <MathBlock>
          {`(T_2 \\circ T_1)(\\mathbf{x}) = T_2(T_1(\\mathbf{x})) \\quad \\Leftrightarrow \\quad BA`}
        </MathBlock>
        <p className="mt-2 text-primary-400">
          Composition of transformations = multiplication of matrices (in reverse order).
        </p>
      </Theorem>

      <h2>Invertible Transformations</h2>

      <Theorem
        title="Inverse Transformation"
        className="my-6"
        proof={
          <>
            <p><strong>(⟹)</strong> Suppose <InlineMath>{`T`}</InlineMath> is invertible with inverse <InlineMath>{`T^{-1}`}</InlineMath>.</p>
            <p className="mt-2">Let <InlineMath>{`A`}</InlineMath> be the matrix of <InlineMath>{`T`}</InlineMath> and <InlineMath>{`B`}</InlineMath> the matrix of <InlineMath>{`T^{-1}`}</InlineMath>.</p>
            <p className="mt-2">By the composition theorem: <InlineMath>{`T^{-1} \\circ T = I`}</InlineMath> has matrix <InlineMath>{`BA = I`}</InlineMath>, and <InlineMath>{`T \\circ T^{-1} = I`}</InlineMath> has matrix <InlineMath>{`AB = I`}</InlineMath>.</p>
            <p className="mt-2">Therefore <InlineMath>{`A`}</InlineMath> is invertible with <InlineMath>{`A^{-1} = B`}</InlineMath>.</p>
            <p className="mt-2"><strong>(⟸)</strong> Suppose <InlineMath>{`A`}</InlineMath> is invertible.</p>
            <p className="mt-2">Define <InlineMath>{`S: W \\to V`}</InlineMath> by <InlineMath>{`[S(\\mathbf{w})]_V = A^{-1}[\\mathbf{w}]_W`}</InlineMath>. This is linear (matrix multiplication).</p>
            <p className="mt-2">Then <InlineMath>{`S \\circ T`}</InlineMath> has matrix <InlineMath>{`A^{-1}A = I`}</InlineMath>, so <InlineMath>{`S \\circ T = I_V`}</InlineMath>. Similarly <InlineMath>{`T \\circ S = I_W`}</InlineMath>. Thus <InlineMath>{`S = T^{-1}`}</InlineMath>.</p>
          </>
        }
      >
        <p>
          <InlineMath>T</InlineMath> is <strong>invertible</strong> if there exists <InlineMath>{`T^{-1}`}</InlineMath> with:
        </p>
        <MathBlock>
          {`T^{-1}(T(\\mathbf{v})) = \\mathbf{v} \\quad \\text{and} \\quad T(T^{-1}(\\mathbf{w})) = \\mathbf{w}`}
        </MathBlock>
        <p className="mt-2">
          <InlineMath>T</InlineMath> is invertible if and only if its matrix is invertible.
        </p>
      </Theorem>

      <div className="bg-dark-800/50 rounded-xl p-4 my-6 border border-primary-500/20">
        <p className="font-semibold text-primary-400 mb-2">Important Special Matrices</p>
        <ul className="list-disc list-inside text-dark-300 text-sm space-y-1">
          <li><strong>Rotation:</strong> <InlineMath>R_\theta</InlineMath> — preserves lengths and angles</li>
          <li><strong>Reflection:</strong> <InlineMath>{`H = I - 2\\mathbf{u}\\mathbf{u}^T`}</InlineMath> — flips across a hyperplane</li>
          <li><strong>Projection:</strong> <InlineMath>{`P = \\mathbf{a}\\mathbf{a}^T/\\mathbf{a}^T\\mathbf{a}`}</InlineMath> — projects onto a line</li>
          <li><strong>Scaling:</strong> <InlineMath>{`\\text{diag}(c_1, \\ldots, c_n)`}</InlineMath> — stretches along axes</li>
        </ul>
      </div>

      <h2>Key Ideas</h2>

      <div className="bg-gradient-to-br from-primary-500/10 to-dark-800/50 rounded-xl p-6 my-6 border border-primary-500/20">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span>The matrix of <InlineMath>T</InlineMath> depends on the choice of bases.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span>Column <InlineMath>j</InlineMath> = coordinates of <InlineMath>{`T(\\mathbf{v}_j)`}</InlineMath> in the output basis.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span>Standard matrix: columns are <InlineMath>{`T(\\mathbf{e}_1), T(\\mathbf{e}_2), \\ldots, T(\\mathbf{e}_n)`}</InlineMath>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span>Composition <InlineMath>T_2 \circ T_1</InlineMath> corresponds to matrix product <InlineMath>BA</InlineMath>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">5.</span>
            <span>Invertible transformation ↔ invertible matrix.</span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
