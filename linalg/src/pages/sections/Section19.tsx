import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section19() {
  return (
    <LessonLayout sectionId={19}>
      {/* Introduction */}
      <p>
        <strong>Orthonormal</strong> vectors make computations beautiful. <strong>Gram-Schmidt</strong> takes
        any basis and produces an orthonormal one. The result is the <InlineMath>QR</InlineMath> factorization.
      </p>

      <h2>Orthonormal Vectors</h2>

      <Definition title="Orthonormal Vectors" className="my-6">
        <p>
          Vectors <InlineMath>{`\\mathbf{q}_1, \\mathbf{q}_2, \\ldots, \\mathbf{q}_n`}</InlineMath> are <strong>orthonormal</strong> if:
        </p>
        <MathBlock>
          {`\\mathbf{q}_i^T\\mathbf{q}_j = \\begin{cases} 0 & i \\neq j \\text{ (orthogonal)} \\\\ 1 & i = j \\text{ (unit length)} \\end{cases}`}
        </MathBlock>
      </Definition>

      <Example title="Orthonormal Basis for R^2" className="my-6">
        <MathBlock>
          {`\\mathbf{q}_1 = \\begin{bmatrix} \\cos\\theta \\\\ \\sin\\theta \\end{bmatrix}, \\quad \\mathbf{q}_2 = \\begin{bmatrix} -\\sin\\theta \\\\ \\cos\\theta \\end{bmatrix}`}
        </MathBlock>
        <p className="mt-2">
          Check: <InlineMath>{`\\mathbf{q}_1^T\\mathbf{q}_2 = -\\cos\\theta\\sin\\theta + \\sin\\theta\\cos\\theta = 0`}</InlineMath> ✓
        </p>
      </Example>

      <h2>Orthogonal Matrices</h2>

      <Definition title="Orthogonal Matrix Q" className="my-6">
        <p>
          A matrix <InlineMath>Q</InlineMath> is <strong>orthogonal</strong> if its columns are orthonormal. Then:
        </p>
        <MathBlock>
          {`Q^TQ = I`}
        </MathBlock>
        <p className="mt-2">
          If <InlineMath>Q</InlineMath> is square, then <InlineMath>{`Q^T = Q^{-1}`}</InlineMath>.
        </p>
      </Definition>

      <Theorem
        title="Properties of Orthogonal Q"
        className="my-6"
        proof={
          <>
            <p><strong>Preserves length:</strong></p>
            <MathBlock>{`\\|Q\\mathbf{x}\\|^2 = (Q\\mathbf{x})^T(Q\\mathbf{x}) = \\mathbf{x}^TQ^TQ\\mathbf{x} = \\mathbf{x}^TI\\mathbf{x} = \\|\\mathbf{x}\\|^2`}</MathBlock>
            <p className="mt-2"><strong>Preserves dot product:</strong></p>
            <MathBlock>{`(Q\\mathbf{x})^T(Q\\mathbf{y}) = \\mathbf{x}^TQ^TQ\\mathbf{y} = \\mathbf{x}^TI\\mathbf{y} = \\mathbf{x}^T\\mathbf{y}`}</MathBlock>
            <p className="mt-2"><strong>Square Q:</strong> If <InlineMath>Q</InlineMath> is square with <InlineMath>Q^TQ = I</InlineMath>, then <InlineMath>Q</InlineMath> is invertible with <InlineMath>{`Q^{-1} = Q^T`}</InlineMath>. Then <InlineMath>QQ^T = Q(Q^{-1}) = I</InlineMath>.</p>
          </>
        }
      >
        <ul className="list-disc list-inside space-y-2">
          <li><InlineMath>Q^TQ = I</InlineMath> (columns are orthonormal)</li>
          <li><InlineMath>{`\\|Q\\mathbf{x}\\| = \\|\\mathbf{x}\\|`}</InlineMath> (preserves length)</li>
          <li><InlineMath>{`(Q\\mathbf{x})^T(Q\\mathbf{y}) = \\mathbf{x}^T\\mathbf{y}`}</InlineMath> (preserves dot product)</li>
          <li>If square: <InlineMath>QQ^T = I</InlineMath> and <InlineMath>{`Q^{-1} = Q^T`}</InlineMath></li>
        </ul>
      </Theorem>

      <h2>Projections with Orthonormal Columns</h2>

      <Theorem
        title="Simplified Projection Formula"
        className="my-6"
        proof={
          <>
            <p>The general projection formula is <InlineMath>{`P = A(A^TA)^{-1}A^T`}</InlineMath>.</p>
            <p className="mt-2">When <InlineMath>A = Q</InlineMath> has orthonormal columns, <InlineMath>Q^TQ = I</InlineMath>, so:</p>
            <MathBlock>{`P = Q(Q^TQ)^{-1}Q^T = QI^{-1}Q^T = QQ^T`}</MathBlock>
            <p className="mt-2">For the least squares solution <InlineMath>{`\\hat{x}`}</InlineMath>:</p>
            <MathBlock>{`Q^TQ\\hat{x} = Q^T\\mathbf{b} \\quad \\Rightarrow \\quad I\\hat{x} = Q^T\\mathbf{b} \\quad \\Rightarrow \\quad \\hat{x} = Q^T\\mathbf{b}`}</MathBlock>
            <p>No matrix inversion needed!</p>
          </>
        }
      >
        <p>
          When <InlineMath>Q</InlineMath> has orthonormal columns, the projection formula simplifies:
        </p>
        <MathBlock>
          {`P = Q(Q^TQ)^{-1}Q^T = QQ^T`}
        </MathBlock>
        <p className="mt-2">
          And <InlineMath>{`\\hat{x} = Q^T\\mathbf{b}`}</InlineMath> (no matrix to invert!).
        </p>
      </Theorem>

      <h2>The Gram-Schmidt Process</h2>

      <Definition title="Gram-Schmidt" className="my-6">
        <p>
          <strong>Gram-Schmidt</strong> converts independent vectors <InlineMath>{`\\mathbf{a}, \\mathbf{b}, \\mathbf{c}, \\ldots`}</InlineMath>
          into orthonormal vectors <InlineMath>{`\\mathbf{q}_1, \\mathbf{q}_2, \\mathbf{q}_3, \\ldots`}</InlineMath>
        </p>
      </Definition>

      <div className="bg-dark-800/50 rounded-xl p-4 my-6 border border-primary-500/20">
        <p className="font-semibold text-primary-400 mb-3">Gram-Schmidt Algorithm:</p>
        <div className="space-y-3 text-sm">
          <p><strong>Step 1:</strong> <InlineMath>{`\\mathbf{A} = \\mathbf{a}`}</InlineMath>, then <InlineMath>{`\\mathbf{q}_1 = \\mathbf{A}/\\|\\mathbf{A}\\|`}</InlineMath></p>
          <p><strong>Step 2:</strong> <InlineMath>{`\\mathbf{B} = \\mathbf{b} - (\\mathbf{q}_1^T\\mathbf{b})\\mathbf{q}_1`}</InlineMath>, then <InlineMath>{`\\mathbf{q}_2 = \\mathbf{B}/\\|\\mathbf{B}\\|`}</InlineMath></p>
          <p><strong>Step 3:</strong> <InlineMath>{`\\mathbf{C} = \\mathbf{c} - (\\mathbf{q}_1^T\\mathbf{c})\\mathbf{q}_1 - (\\mathbf{q}_2^T\\mathbf{c})\\mathbf{q}_2`}</InlineMath>, then <InlineMath>{`\\mathbf{q}_3 = \\mathbf{C}/\\|\\mathbf{C}\\|`}</InlineMath></p>
        </div>
        <p className="text-dark-400 text-sm mt-3">
          Each step subtracts projections onto earlier <InlineMath>{`\\mathbf{q}`}</InlineMath>'s, making the result orthogonal.
        </p>
      </div>

      <Example title="Gram-Schmidt Example" className="my-6">
        <p>Start with:</p>
        <MathBlock>
          {`\\mathbf{a} = \\begin{bmatrix} 1 \\\\ -1 \\\\ 0 \\end{bmatrix}, \\quad \\mathbf{b} = \\begin{bmatrix} 2 \\\\ 0 \\\\ -2 \\end{bmatrix}`}
        </MathBlock>
        <p className="mt-2"><strong>Step 1:</strong></p>
        <MathBlock>
          {`\\mathbf{q}_1 = \\frac{\\mathbf{a}}{\\|\\mathbf{a}\\|} = \\frac{1}{\\sqrt{2}}\\begin{bmatrix} 1 \\\\ -1 \\\\ 0 \\end{bmatrix}`}
        </MathBlock>
        <p className="mt-2"><strong>Step 2:</strong> Subtract projection of <InlineMath>{`\\mathbf{b}`}</InlineMath> onto <InlineMath>{`\\mathbf{q}_1`}</InlineMath>:</p>
        <MathBlock>
          {`\\mathbf{B} = \\mathbf{b} - (\\mathbf{q}_1^T\\mathbf{b})\\mathbf{q}_1 = \\begin{bmatrix} 2 \\\\ 0 \\\\ -2 \\end{bmatrix} - \\frac{2}{\\sqrt{2}} \\cdot \\frac{1}{\\sqrt{2}}\\begin{bmatrix} 1 \\\\ -1 \\\\ 0 \\end{bmatrix} = \\begin{bmatrix} 1 \\\\ 1 \\\\ -2 \\end{bmatrix}`}
        </MathBlock>
        <MathBlock>
          {`\\mathbf{q}_2 = \\frac{\\mathbf{B}}{\\|\\mathbf{B}\\|} = \\frac{1}{\\sqrt{6}}\\begin{bmatrix} 1 \\\\ 1 \\\\ -2 \\end{bmatrix}`}
        </MathBlock>
      </Example>

      <h2>The QR Factorization</h2>

      <Theorem
        title="A = QR"
        className="my-6"
        proof={
          <>
            <p>Gram-Schmidt expresses each column <InlineMath>{`\\mathbf{a}_j`}</InlineMath> of <InlineMath>A</InlineMath> in terms of <InlineMath>{`\\mathbf{q}_1, \\ldots, \\mathbf{q}_j`}</InlineMath>:</p>
            <MathBlock>{`\\mathbf{a}_j = (\\mathbf{q}_1^T\\mathbf{a}_j)\\mathbf{q}_1 + (\\mathbf{q}_2^T\\mathbf{a}_j)\\mathbf{q}_2 + \\cdots + (\\mathbf{q}_j^T\\mathbf{a}_j)\\mathbf{q}_j`}</MathBlock>
            <p className="mt-2">In matrix form: <InlineMath>A = QR</InlineMath> where <InlineMath>{`R_{ij} = \\mathbf{q}_i^T\\mathbf{a}_j`}</InlineMath>.</p>
            <p className="mt-2"><strong>Why R is upper triangular:</strong> For <InlineMath>i &gt; j</InlineMath>, vector <InlineMath>{`\\mathbf{q}_i`}</InlineMath> is orthogonal to <InlineMath>{`\\mathbf{a}_1, \\ldots, \\mathbf{a}_j`}</InlineMath> (since Gram-Schmidt subtracts projections). So <InlineMath>{`R_{ij} = \\mathbf{q}_i^T\\mathbf{a}_j = 0`}</InlineMath> when <InlineMath>i &gt; j</InlineMath>.</p>
          </>
        }
      >
        <p>
          Gram-Schmidt produces the factorization <InlineMath>A = QR</InlineMath>:
        </p>
        <MathBlock>
          {`A = QR \\quad \\text{where } Q \\text{ is orthonormal, } R \\text{ is upper triangular}`}
        </MathBlock>
        <p className="mt-2">
          <InlineMath>R = Q^TA</InlineMath> is upper triangular because later <InlineMath>{`\\mathbf{q}`}</InlineMath>'s are orthogonal to earlier <InlineMath>{`\\mathbf{a}`}</InlineMath>'s.
        </p>
      </Theorem>

      <h2>Key Ideas</h2>

      <div className="bg-gradient-to-br from-primary-500/10 to-dark-800/50 rounded-xl p-6 my-6 border border-primary-500/20">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span>Orthonormal vectors: <InlineMath>{`\\mathbf{q}_i^T\\mathbf{q}_j = 0`}</InlineMath> for <InlineMath>i \neq j</InlineMath>, and <InlineMath>{`\\|\\mathbf{q}_i\\| = 1`}</InlineMath>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span>Orthogonal matrix: <InlineMath>Q^TQ = I</InlineMath>. If square: <InlineMath>{`Q^{-1} = Q^T`}</InlineMath>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span>Projections simplify: <InlineMath>P = QQ^T</InlineMath> and <InlineMath>{`\\hat{x} = Q^T\\mathbf{b}`}</InlineMath>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span><strong>Gram-Schmidt</strong> orthonormalizes: subtract projections and normalize.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">5.</span>
            <span><InlineMath>A = QR</InlineMath>: <InlineMath>Q</InlineMath> has orthonormal columns, <InlineMath>R</InlineMath> is upper triangular.</span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
