import { LessonLayout } from '@/components/layout/LessonLayout';
import { Theorem, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section26() {
  return (
    <LessonLayout sectionId={26}>
      {/* Introduction */}
      <p>
        <strong>Symmetric matrices</strong> are the most important matrices in applications. They have
        <strong> real eigenvalues</strong> and <strong>orthogonal eigenvectors</strong>—guaranteed!
      </p>

      <h2>The Spectral Theorem</h2>

      <Theorem
        title="Spectral Theorem for Symmetric Matrices"
        className="my-6"
        proof={
          <>
            <p><strong>Real eigenvalues:</strong> If <InlineMath>{`S\\mathbf{x} = \\lambda\\mathbf{x}`}</InlineMath>, take complex conjugate transpose:</p>
            <MathBlock>{`\\bar{\\mathbf{x}}^T S = \\bar{\\lambda} \\bar{\\mathbf{x}}^T`}</MathBlock>
            <p>Multiply by <InlineMath>{`\\mathbf{x}`}</InlineMath>: <InlineMath>{`\\bar{\\mathbf{x}}^T S\\mathbf{x} = \\bar{\\lambda}\\|\\mathbf{x}\\|^2`}</InlineMath>.</p>
            <p>Also <InlineMath>{`\\bar{\\mathbf{x}}^T S\\mathbf{x} = \\bar{\\mathbf{x}}^T(\\lambda\\mathbf{x}) = \\lambda\\|\\mathbf{x}\\|^2`}</InlineMath>.</p>
            <p className="mt-2">So <InlineMath>{`\\lambda = \\bar{\\lambda}`}</InlineMath>, meaning <InlineMath>{`\\lambda`}</InlineMath> is real.</p>
            <p className="mt-2"><strong>Orthonormal eigenvectors:</strong> For distinct eigenvalues, eigenvectors are orthogonal (next theorem). For repeated eigenvalues, we can choose an orthonormal basis within each eigenspace.</p>
          </>
        }
      >
        <p>If <InlineMath>S = S^T</InlineMath> (symmetric), then:</p>
        <ol className="list-decimal list-inside mt-2 space-y-2">
          <li>All eigenvalues are <strong>real</strong></li>
          <li>Eigenvectors can be chosen <strong>orthonormal</strong></li>
        </ol>
        <p className="mt-2">
          Every symmetric matrix can be diagonalized:
        </p>
        <MathBlock>
          {`S = Q\\Lambda Q^T = Q\\Lambda Q^{-1}`}
        </MathBlock>
        <p className="mt-2 text-primary-400">
          The eigenvector matrix <InlineMath>Q</InlineMath> is <strong>orthogonal</strong>: <InlineMath>{`Q^T = Q^{-1}`}</InlineMath>.
        </p>
      </Theorem>

      <Example title="Diagonalizing a Symmetric Matrix" className="my-6">
        <MathBlock>
          {`S = \\begin{bmatrix} 1 & 2 \\\\ 2 & 4 \\end{bmatrix}`}
        </MathBlock>
        <p className="mt-2">
          Eigenvalues: <InlineMath>\lambda_1 = 5</InlineMath>, <InlineMath>\lambda_2 = 0</InlineMath> (trace = 5, det = 0)
        </p>
        <p className="mt-2">
          Orthonormal eigenvectors: <InlineMath>{`\\mathbf{q}_1 = \\frac{1}{\\sqrt{5}}(1, 2)`}</InlineMath>, <InlineMath>{`\\mathbf{q}_2 = \\frac{1}{\\sqrt{5}}(-2, 1)`}</InlineMath>
        </p>
        <MathBlock>
          {`S = Q\\Lambda Q^T = \\frac{1}{5}\\begin{bmatrix} 1 & -2 \\\\ 2 & 1 \\end{bmatrix}\\begin{bmatrix} 5 & 0 \\\\ 0 & 0 \\end{bmatrix}\\begin{bmatrix} 1 & 2 \\\\ -2 & 1 \\end{bmatrix}`}
        </MathBlock>
      </Example>

      <h2>Why Real Eigenvalues?</h2>

      <div className="bg-dark-800/50 rounded-xl p-4 my-6 border border-primary-500/20">
        <p className="font-semibold text-primary-400 mb-2">Proof Sketch</p>
        <p className="text-dark-300 text-sm">
          If <InlineMath>{`S\\mathbf{x} = \\lambda\\mathbf{x}`}</InlineMath>, take the complex conjugate transpose:<br />
          <InlineMath>{`\\bar{\\mathbf{x}}^T S = \\bar{\\lambda} \\bar{\\mathbf{x}}^T`}</InlineMath><br />
          Multiply on the right by <InlineMath>{`\\mathbf{x}`}</InlineMath>:<br />
          <InlineMath>{`\\bar{\\mathbf{x}}^T S\\mathbf{x} = \\lambda \\bar{\\mathbf{x}}^T\\mathbf{x} = \\bar{\\lambda} \\bar{\\mathbf{x}}^T\\mathbf{x}`}</InlineMath><br />
          Since <InlineMath>{`\\bar{\\mathbf{x}}^T\\mathbf{x} = \\|\\mathbf{x}\\|^2 \\neq 0`}</InlineMath>, we get <InlineMath>{`\\lambda = \\bar{\\lambda}`}</InlineMath>, so <InlineMath>\lambda</InlineMath> is real.
        </p>
      </div>

      <h2>Why Orthogonal Eigenvectors?</h2>

      <Theorem
        title="Eigenvectors of Different Eigenvalues are Orthogonal"
        className="my-6"
        proof={
          <>
            <p>Consider <InlineMath>{`\\mathbf{x}^T(S\\mathbf{y})`}</InlineMath> computed two ways:</p>
            <p className="mt-2"><strong>Way 1:</strong> <InlineMath>{`\\mathbf{x}^T(S\\mathbf{y}) = \\mathbf{x}^T(\\lambda_2\\mathbf{y}) = \\lambda_2(\\mathbf{x}^T\\mathbf{y})`}</InlineMath></p>
            <p className="mt-2"><strong>Way 2:</strong> <InlineMath>{`\\mathbf{x}^T(S\\mathbf{y}) = (\\mathbf{x}^TS)\\mathbf{y} = (S\\mathbf{x})^T\\mathbf{y} = (\\lambda_1\\mathbf{x})^T\\mathbf{y} = \\lambda_1(\\mathbf{x}^T\\mathbf{y})`}</InlineMath></p>
            <p className="mt-2">We used <InlineMath>S^T = S</InlineMath> in Way 2. Equating:</p>
            <MathBlock>{`\\lambda_2(\\mathbf{x}^T\\mathbf{y}) = \\lambda_1(\\mathbf{x}^T\\mathbf{y})`}</MathBlock>
            <p>Since <InlineMath>\lambda_1 \neq \lambda_2</InlineMath>, we must have <InlineMath>{`\\mathbf{x}^T\\mathbf{y} = 0`}</InlineMath>.</p>
          </>
        }
      >
        <p>
          If <InlineMath>{`S\\mathbf{x} = \\lambda_1\\mathbf{x}`}</InlineMath> and <InlineMath>{`S\\mathbf{y} = \\lambda_2\\mathbf{y}`}</InlineMath>
          with <InlineMath>\lambda_1 \neq \lambda_2</InlineMath>, then <InlineMath>{`\\mathbf{x}^T\\mathbf{y} = 0`}</InlineMath>.
        </p>
      </Theorem>

      <h2>The Principal Axis Theorem</h2>

      <Theorem
        title="Principal Axes"
        className="my-6"
        proof={
          <>
            <p>Substitute <InlineMath>S = Q\Lambda Q^T</InlineMath> and let <InlineMath>{`\\mathbf{y} = Q^T\\mathbf{x}`}</InlineMath> (so <InlineMath>{`\\mathbf{x} = Q\\mathbf{y}`}</InlineMath>):</p>
            <MathBlock>{`\\mathbf{x}^TS\\mathbf{x} = \\mathbf{x}^T(Q\\Lambda Q^T)\\mathbf{x} = (Q^T\\mathbf{x})^T\\Lambda(Q^T\\mathbf{x}) = \\mathbf{y}^T\\Lambda\\mathbf{y}`}</MathBlock>
            <p className="mt-2">Since <InlineMath>\Lambda</InlineMath> is diagonal:</p>
            <MathBlock>{`\\mathbf{y}^T\\Lambda\\mathbf{y} = \\begin{bmatrix} y_1 & \\cdots & y_n \\end{bmatrix}\\begin{bmatrix} \\lambda_1 & & \\\\ & \\ddots & \\\\ & & \\lambda_n \\end{bmatrix}\\begin{bmatrix} y_1 \\\\ \\vdots \\\\ y_n \\end{bmatrix} = \\lambda_1 y_1^2 + \\cdots + \\lambda_n y_n^2`}</MathBlock>
          </>
        }
      >
        <p>
          The quadratic form <InlineMath>{`\\mathbf{x}^T S\\mathbf{x}`}</InlineMath> becomes a sum of squares in the eigenvector basis:
        </p>
        <MathBlock>
          {`\\mathbf{x}^TS\\mathbf{x} = \\lambda_1 y_1^2 + \\lambda_2 y_2^2 + \\cdots + \\lambda_n y_n^2`}
        </MathBlock>
        <p className="mt-2">
          where <InlineMath>{`\\mathbf{y} = Q^T\\mathbf{x}`}</InlineMath> are coordinates in the eigenvector basis.
        </p>
      </Theorem>

      <Example title="Ellipse Example" className="my-6">
        <p>The equation <InlineMath>5x^2 + 8xy + 5y^2 = 1</InlineMath> represents an ellipse.</p>
        <MathBlock>
          {`S = \\begin{bmatrix} 5 & 4 \\\\ 4 & 5 \\end{bmatrix} \\quad \\text{has } \\lambda_1 = 9, \\lambda_2 = 1`}
        </MathBlock>
        <p className="mt-2">
          In principal axes: <InlineMath>9u^2 + v^2 = 1</InlineMath>. The eigenvectors give the axes of the ellipse.
        </p>
      </Example>

      <h2>Eigenvalue Sign and Pivots</h2>

      <Theorem
        title="Signs of Eigenvalues"
        className="my-6"
        proof={
          <>
            <p>This is <strong>Sylvester's Law of Inertia</strong>. The key idea:</p>
            <p className="mt-2">Elimination <InlineMath>S \to LDL^T</InlineMath> preserves the "signature" (numbers of +, −, 0). The diagonal of <InlineMath>D</InlineMath> contains the pivots.</p>
            <p className="mt-2">Similarly, diagonalization <InlineMath>S = Q\Lambda Q^T</InlineMath> gives the eigenvalues on the diagonal.</p>
            <p className="mt-2">Both <InlineMath>D</InlineMath> and <InlineMath>\Lambda</InlineMath> are related by congruence transformations that preserve signature. Therefore the counts of positive, negative, and zero entries must match.</p>
          </>
        }
      >
        <p>For a symmetric matrix <InlineMath>S</InlineMath>:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>Number of positive eigenvalues = number of positive pivots</li>
          <li>Number of negative eigenvalues = number of negative pivots</li>
          <li>Number of zero eigenvalues = number of zero pivots</li>
        </ul>
      </Theorem>

      <h2>Key Ideas</h2>

      <div className="bg-gradient-to-br from-primary-500/10 to-dark-800/50 rounded-xl p-6 my-6 border border-primary-500/20">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span>Symmetric matrices have <strong>real eigenvalues</strong> and <strong>orthonormal eigenvectors</strong>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span><InlineMath>S = Q\Lambda Q^T</InlineMath> where <InlineMath>Q</InlineMath> is orthogonal and <InlineMath>\Lambda</InlineMath> is diagonal.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span>Eigenvectors of different eigenvalues are automatically orthogonal.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span>Principal axis theorem: <InlineMath>{`\\mathbf{x}^TS\\mathbf{x} = \\sum \\lambda_i y_i^2`}</InlineMath>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">5.</span>
            <span>Signs of eigenvalues match signs of pivots.</span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
