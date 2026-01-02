import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section08() {
  return (
    <LessonLayout sectionId={8}>
      {/* Introduction */}
      <p>
        The <strong>inverse</strong> of a matrix <InlineMath>A</InlineMath> is another matrix <InlineMath>{`A^{-1}`}</InlineMath> that
        "undoes" the action of <InlineMath>A</InlineMath>. Finding <InlineMath>{`A^{-1}`}</InlineMath> is equivalent to solving <InlineMath>{`A\\mathbf{x} = \\mathbf{b}`}</InlineMath>.
      </p>

      <h2>What Is an Inverse?</h2>

      <Definition title="Inverse Matrix" className="my-6">
        <p>
          The matrix <InlineMath>A</InlineMath> is <strong>invertible</strong> if there exists a matrix <InlineMath>{`A^{-1}`}</InlineMath> such that:
        </p>
        <MathBlock>
          {`A^{-1}A = I \\quad \\text{and} \\quad AA^{-1} = I`}
        </MathBlock>
        <p className="mt-2">
          Not every matrix has an inverse! A matrix without an inverse is called <strong>singular</strong>.
        </p>
      </Definition>

      <Example title="Inverse of a 2×2 Matrix" className="my-6">
        <p>For a 2×2 matrix:</p>
        <MathBlock>
          {`A = \\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix} \\quad \\text{has inverse} \\quad A^{-1} = \\frac{1}{ad-bc}\\begin{bmatrix} d & -b \\\\ -c & a \\end{bmatrix}`}
        </MathBlock>
        <p className="mt-2">
          The number <InlineMath>ad - bc</InlineMath> is the <strong>determinant</strong>. If <InlineMath>ad - bc = 0</InlineMath>, there is no inverse!
        </p>
      </Example>

      <h2>Why Inverses Matter</h2>

      <Theorem
        title="Solving Ax = b with the Inverse"
        className="my-6"
        proof={
          <>
            <p>Starting with <InlineMath>{`A\\mathbf{x} = \\mathbf{b}`}</InlineMath>, multiply both sides on the left by <InlineMath>{`A^{-1}`}</InlineMath>:</p>
            <MathBlock>{`A^{-1}(A\\mathbf{x}) = A^{-1}\\mathbf{b}`}</MathBlock>
            <p>Using associativity and the definition <InlineMath>{`A^{-1}A = I`}</InlineMath>:</p>
            <MathBlock>{`(A^{-1}A)\\mathbf{x} = A^{-1}\\mathbf{b} \\quad \\Rightarrow \\quad I\\mathbf{x} = A^{-1}\\mathbf{b} \\quad \\Rightarrow \\quad \\mathbf{x} = A^{-1}\\mathbf{b}`}</MathBlock>
          </>
        }
      >
        <p>
          If <InlineMath>A</InlineMath> is invertible, then <InlineMath>{`A\\mathbf{x} = \\mathbf{b}`}</InlineMath> has exactly one solution:
        </p>
        <MathBlock>
          {`\\mathbf{x} = A^{-1}\\mathbf{b}`}
        </MathBlock>
        <p className="mt-2">
          Multiply both sides of <InlineMath>{`A\\mathbf{x} = \\mathbf{b}`}</InlineMath> by <InlineMath>{`A^{-1}`}</InlineMath> to get <InlineMath>{`\\mathbf{x}`}</InlineMath>.
        </p>
      </Theorem>

      <h2>Computing the Inverse by Gauss-Jordan</h2>

      <p>
        The <strong>Gauss-Jordan method</strong> finds <InlineMath>{`A^{-1}`}</InlineMath> by reducing <InlineMath>[A \mid I]</InlineMath> to <InlineMath>{`[I \\mid A^{-1}]`}</InlineMath>.
      </p>

      <Example title="Gauss-Jordan Elimination" className="my-6">
        <MathBlock>
          {`\\left[\\begin{array}{cc|cc} 1 & 3 & 1 & 0 \\\\ 2 & 7 & 0 & 1 \\end{array}\\right] \\longrightarrow \\left[\\begin{array}{cc|cc} 1 & 3 & 1 & 0 \\\\ 0 & 1 & -2 & 1 \\end{array}\\right] \\longrightarrow \\left[\\begin{array}{cc|cc} 1 & 0 & 7 & -3 \\\\ 0 & 1 & -2 & 1 \\end{array}\\right]`}
        </MathBlock>
        <p className="mt-2">
          <InlineMath>{`A^{-1} = \\begin{bmatrix} 7 & -3 \\\\ -2 & 1 \\end{bmatrix}`}</InlineMath>
        </p>
      </Example>

      <h2>Properties of Inverses</h2>

      <Theorem
        title="Key Properties"
        className="my-6"
        proof={
          <>
            <p><strong>Property 1:</strong> Since <InlineMath>{`A^{-1}A = I`}</InlineMath>, the matrix <InlineMath>A</InlineMath> is the inverse of <InlineMath>{`A^{-1}`}</InlineMath>.</p>
            <p className="mt-2"><strong>Property 2:</strong> We verify <InlineMath>{`(B^{-1}A^{-1})(AB) = I`}</InlineMath>:</p>
            <MathBlock>{`(B^{-1}A^{-1})(AB) = B^{-1}(A^{-1}A)B = B^{-1}IB = B^{-1}B = I`}</MathBlock>
            <p><strong>Property 3:</strong> Taking transposes of <InlineMath>{`A^{-1}A = I`}</InlineMath>:</p>
            <MathBlock>{`(A^{-1}A)^T = I^T \\quad \\Rightarrow \\quad A^T(A^{-1})^T = I`}</MathBlock>
            <p>This shows <InlineMath>{`(A^{-1})^T`}</InlineMath> is the inverse of <InlineMath>{`A^T`}</InlineMath>.</p>
          </>
        }
      >
        <ul className="list-disc list-inside space-y-2">
          <li><InlineMath>{`(A^{-1})^{-1} = A`}</InlineMath></li>
          <li><InlineMath>{`(AB)^{-1} = B^{-1}A^{-1}`}</InlineMath> — note the <strong>reversed order</strong>!</li>
          <li><InlineMath>{`(A^T)^{-1} = (A^{-1})^T`}</InlineMath></li>
        </ul>
      </Theorem>

      <Example title="Inverse of a Product" className="my-6">
        <p>
          To invert <InlineMath>AB</InlineMath>, you must undo <InlineMath>B</InlineMath> first, then <InlineMath>A</InlineMath>:
        </p>
        <MathBlock>
          {`(AB)(B^{-1}A^{-1}) = A(BB^{-1})A^{-1} = AIA^{-1} = AA^{-1} = I`}
        </MathBlock>
      </Example>

      <h2>When Is a Matrix Invertible?</h2>

      <Theorem
        title="Invertibility Conditions"
        className="my-6"
        proof={
          <>
            <p>These conditions are all equivalent. We show the key connections:</p>
            <p className="mt-2"><strong>n pivots ⟺ det ≠ 0:</strong> The determinant equals the product of the pivots times ±1 (from row exchanges).</p>
            <p className="mt-2"><strong>det ≠ 0 ⟺ Ax = 0 has only x = 0:</strong> If <InlineMath>{`\\det(A) \\neq 0`}</InlineMath>, then <InlineMath>A</InlineMath> is invertible, so <InlineMath>{`A^{-1}`}</InlineMath> exists and <InlineMath>{`\\mathbf{x} = A^{-1}\\mathbf{0} = \\mathbf{0}`}</InlineMath>.</p>
            <p className="mt-2"><strong>Only trivial solution ⟺ independent columns:</strong> Linear independence means the only combination that gives zero is the trivial one.</p>
          </>
        }
      >
        <p>An <InlineMath>n \times n</InlineMath> matrix <InlineMath>A</InlineMath> is invertible if and only if:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Elimination produces <InlineMath>n</InlineMath> pivots (no zeros on the diagonal of <InlineMath>U</InlineMath>).</li>
          <li>The determinant is nonzero: <InlineMath>\det(A) \neq 0</InlineMath>.</li>
          <li><InlineMath>{`A\\mathbf{x} = \\mathbf{0}`}</InlineMath> has only the trivial solution <InlineMath>{`\\mathbf{x} = \\mathbf{0}`}</InlineMath>.</li>
          <li>The columns of <InlineMath>A</InlineMath> are linearly independent.</li>
        </ul>
      </Theorem>

      <h2>Key Ideas</h2>

      <div className="bg-gradient-to-br from-primary-500/10 to-dark-800/50 rounded-xl p-6 my-6 border border-primary-500/20">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span><InlineMath>{`A^{-1}`}</InlineMath> exists when <InlineMath>A</InlineMath> has <InlineMath>n</InlineMath> pivots. Then <InlineMath>{`A^{-1}A = I`}</InlineMath> and <InlineMath>{`AA^{-1} = I`}</InlineMath>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span>The solution to <InlineMath>{`A\\mathbf{x} = \\mathbf{b}`}</InlineMath> is <InlineMath>{`\\mathbf{x} = A^{-1}\\mathbf{b}`}</InlineMath> (but don't compute it this way!).</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span><strong>Gauss-Jordan:</strong> Reduce <InlineMath>[A \mid I]</InlineMath> to <InlineMath>{`[I \\mid A^{-1}]`}</InlineMath>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span><InlineMath>{`(AB)^{-1} = B^{-1}A^{-1}`}</InlineMath> — the order reverses!</span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
