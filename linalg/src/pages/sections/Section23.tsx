import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section23() {
  return (
    <LessonLayout sectionId={23}>
      {/* Introduction */}
      <p>
        <strong>Eigenvalues</strong> and <strong>eigenvectors</strong> reveal the essential behavior of a matrix.
        They tell us which directions are simply stretched (not rotated) when we multiply by <InlineMath>A</InlineMath>.
      </p>

      <h2>The Key Equation</h2>

      <Definition title="Eigenvalues and Eigenvectors" className="my-6">
        <p>
          An <strong>eigenvector</strong> <InlineMath>{`\\mathbf{x}`}</InlineMath> of matrix <InlineMath>A</InlineMath> satisfies:
        </p>
        <MathBlock>
          {`A\\mathbf{x} = \\lambda\\mathbf{x}`}
        </MathBlock>
        <p className="mt-2">
          The number <InlineMath>\lambda</InlineMath> is the corresponding <strong>eigenvalue</strong>.
        </p>
        <p className="mt-2 text-primary-400">
          <InlineMath>{`A\\mathbf{x}`}</InlineMath> is parallel to <InlineMath>{`\\mathbf{x}`}</InlineMath>—the matrix just multiplies by <InlineMath>\lambda</InlineMath>.
        </p>
      </Definition>

      <Example title="A 2×2 Example" className="my-6">
        <MathBlock>
          {`A = \\begin{bmatrix} 4 & -5 \\\\ 2 & -3 \\end{bmatrix}`}
        </MathBlock>
        <p className="mt-2">Check that <InlineMath>{`\\mathbf{x} = (1, 1)`}</InlineMath> is an eigenvector:</p>
        <MathBlock>
          {`A\\mathbf{x} = \\begin{bmatrix} 4 & -5 \\\\ 2 & -3 \\end{bmatrix}\\begin{bmatrix} 1 \\\\ 1 \\end{bmatrix} = \\begin{bmatrix} -1 \\\\ -1 \\end{bmatrix} = -1 \\begin{bmatrix} 1 \\\\ 1 \\end{bmatrix}`}
        </MathBlock>
        <p className="mt-2">
          Eigenvalue <InlineMath>\lambda_1 = -1</InlineMath>, eigenvector <InlineMath>{`\\mathbf{x}_1 = (1, 1)`}</InlineMath>.
        </p>
      </Example>

      <h2>Finding Eigenvalues</h2>

      <Theorem
        title="The Characteristic Equation"
        className="my-6"
        proof={
          <>
            <p>Starting from <InlineMath>{`A\\mathbf{x} = \\lambda\\mathbf{x}`}</InlineMath>, rewrite as:</p>
            <MathBlock>{`A\\mathbf{x} - \\lambda\\mathbf{x} = \\mathbf{0} \\quad \\Rightarrow \\quad (A - \\lambda I)\\mathbf{x} = \\mathbf{0}`}</MathBlock>
            <p className="mt-2">For a nonzero eigenvector <InlineMath>{`\\mathbf{x}`}</InlineMath> to exist, the matrix <InlineMath>(A - \lambda I)</InlineMath> must be singular (otherwise the only solution is <InlineMath>{`\\mathbf{x} = \\mathbf{0}`}</InlineMath>).</p>
            <p className="mt-2">A matrix is singular if and only if its determinant is zero. Therefore:</p>
            <MathBlock>{`\\det(A - \\lambda I) = 0`}</MathBlock>
            <p>This is a polynomial equation of degree <InlineMath>n</InlineMath> in <InlineMath>\lambda</InlineMath>, with exactly <InlineMath>n</InlineMath> roots (counting multiplicity, over the complex numbers).</p>
          </>
        }
      >
        <p>
          Rewrite <InlineMath>{`A\\mathbf{x} = \\lambda\\mathbf{x}`}</InlineMath> as <InlineMath>{`(A - \\lambda I)\\mathbf{x} = \\mathbf{0}`}</InlineMath>.
          For a nonzero eigenvector to exist:
        </p>
        <MathBlock>
          {`\\det(A - \\lambda I) = 0`}
        </MathBlock>
        <p className="mt-2">
          This is the <strong>characteristic equation</strong>. Its roots are the eigenvalues.
        </p>
      </Theorem>

      <Example title="Computing Eigenvalues" className="my-6">
        <MathBlock>
          {`A - \\lambda I = \\begin{bmatrix} 4-\\lambda & -5 \\\\ 2 & -3-\\lambda \\end{bmatrix}`}
        </MathBlock>
        <MathBlock>
          {`\\det(A - \\lambda I) = (4-\\lambda)(-3-\\lambda) + 10 = \\lambda^2 - \\lambda - 2 = (\\lambda-2)(\\lambda+1)`}
        </MathBlock>
        <p className="mt-2">
          Eigenvalues: <InlineMath>\lambda_1 = 2</InlineMath> and <InlineMath>\lambda_2 = -1</InlineMath>.
        </p>
      </Example>

      <h2>Finding Eigenvectors</h2>

      <p>
        For each eigenvalue <InlineMath>\lambda</InlineMath>, solve <InlineMath>{`(A - \\lambda I)\\mathbf{x} = \\mathbf{0}`}</InlineMath>
        to find the eigenvector.
      </p>

      <Example title="Computing Eigenvectors" className="my-6">
        <p>For <InlineMath>\lambda = 2</InlineMath>:</p>
        <MathBlock>
          {`(A - 2I)\\mathbf{x} = \\begin{bmatrix} 2 & -5 \\\\ 2 & -5 \\end{bmatrix}\\begin{bmatrix} x \\\\ y \\end{bmatrix} = \\begin{bmatrix} 0 \\\\ 0 \\end{bmatrix}`}
        </MathBlock>
        <p className="mt-2">
          Solution: <InlineMath>2x - 5y = 0</InlineMath>, so <InlineMath>{`\\mathbf{x}_1 = (5, 2)`}</InlineMath>.
        </p>
      </Example>

      <h2>Properties of Eigenvalues</h2>

      <Theorem
        title="Sum and Product"
        className="my-6"
        proof={
          <>
            <p>The characteristic polynomial is:</p>
            <MathBlock>{`\\det(A - \\lambda I) = (-1)^n(\\lambda - \\lambda_1)(\\lambda - \\lambda_2) \\cdots (\\lambda - \\lambda_n)`}</MathBlock>
            <p className="mt-2"><strong>Product:</strong> Set <InlineMath>\lambda = 0</InlineMath>:</p>
            <MathBlock>{`\\det(A) = (-1)^n(-\\lambda_1)(-\\lambda_2)\\cdots(-\\lambda_n) = \\lambda_1\\lambda_2\\cdots\\lambda_n`}</MathBlock>
            <p className="mt-2"><strong>Sum:</strong> The coefficient of <InlineMath>{`\\lambda^{n-1}`}</InlineMath> on the left is <InlineMath>{`(-1)^{n-1}(a_{11} + \\cdots + a_{nn})`}</InlineMath>. On the right, it's <InlineMath>{`(-1)^{n-1}(\\lambda_1 + \\cdots + \\lambda_n)`}</InlineMath>. Comparing gives the trace formula.</p>
          </>
        }
      >
        <p>For an <InlineMath>n \times n</InlineMath> matrix:</p>
        <ul className="list-disc list-inside mt-2 space-y-2">
          <li><InlineMath>{`\\lambda_1 + \\lambda_2 + \\cdots + \\lambda_n = \\text{trace} = a_{11} + a_{22} + \\cdots + a_{nn}`}</InlineMath></li>
          <li><InlineMath>\lambda_1 \cdot \lambda_2 \cdots \lambda_n = \det A</InlineMath></li>
        </ul>
      </Theorem>

      <div className="bg-dark-800/50 rounded-xl p-4 my-6 border border-primary-500/20">
        <p className="font-semibold text-primary-400 mb-2">Quick Checks</p>
        <p className="text-dark-300 text-sm">
          For <InlineMath>{`A = \\begin{bmatrix} 4 & -5 \\\\ 2 & -3 \\end{bmatrix}`}</InlineMath>:<br />
          Trace = <InlineMath>4 + (-3) = 1 = 2 + (-1)</InlineMath> ✓<br />
          Det = <InlineMath>-12 + 10 = -2 = (2)(-1)</InlineMath> ✓
        </p>
      </div>

      <h2>Special Cases</h2>

      <Theorem
        title="Eigenvalues of Special Matrices"
        className="my-6"
        proof={
          <>
            <p><strong>Triangular:</strong> <InlineMath>{`\\det(A - \\lambda I)`}</InlineMath> is also triangular, so its determinant is the product of diagonal entries: <InlineMath>{`(a_{11} - \\lambda)(a_{22} - \\lambda) \\cdots`}</InlineMath>. This is zero when <InlineMath>{`\\lambda`}</InlineMath> equals a diagonal entry.</p>
            <p className="mt-2"><strong>Singular:</strong> If <InlineMath>{`\\det A = 0`}</InlineMath>, then <InlineMath>{`\\det(A - 0 \\cdot I) = 0`}</InlineMath>, so <InlineMath>{`\\lambda = 0`}</InlineMath> is an eigenvalue.</p>
            <p className="mt-2"><strong>Inverse:</strong> If <InlineMath>{`A\\mathbf{x} = \\lambda\\mathbf{x}`}</InlineMath>, multiply by <InlineMath>{`A^{-1}`}</InlineMath>: <InlineMath>{`\\mathbf{x} = \\lambda A^{-1}\\mathbf{x}`}</InlineMath>, so <InlineMath>{`A^{-1}\\mathbf{x} = (1/\\lambda)\\mathbf{x}`}</InlineMath>.</p>
            <p className="mt-2"><strong>Powers:</strong> If <InlineMath>{`A\\mathbf{x} = \\lambda\\mathbf{x}`}</InlineMath>, then <InlineMath>{`A^2\\mathbf{x} = A(\\lambda\\mathbf{x}) = \\lambda A\\mathbf{x} = \\lambda^2\\mathbf{x}`}</InlineMath>. By induction, <InlineMath>{`A^k\\mathbf{x} = \\lambda^k\\mathbf{x}`}</InlineMath>.</p>
          </>
        }
      >
        <ul className="list-disc list-inside space-y-2">
          <li>If <InlineMath>{`A`}</InlineMath> is <strong>triangular</strong>, eigenvalues = diagonal entries</li>
          <li>If <InlineMath>{`A`}</InlineMath> is <strong>singular</strong>, then <InlineMath>{`\\lambda = 0`}</InlineMath> is an eigenvalue</li>
          <li>If <InlineMath>{`A`}</InlineMath> is <strong>invertible</strong>, eigenvalues of <InlineMath>{`A^{-1}`}</InlineMath> are <InlineMath>{`1/\\lambda`}</InlineMath></li>
          <li>Eigenvalues of <InlineMath>{`A^k`}</InlineMath> are <InlineMath>{`\\lambda^k`}</InlineMath> (same eigenvectors)</li>
        </ul>
      </Theorem>

      <h2>Key Ideas</h2>

      <div className="bg-gradient-to-br from-primary-500/10 to-dark-800/50 rounded-xl p-6 my-6 border border-primary-500/20">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span><InlineMath>{`A\\mathbf{x} = \\lambda\\mathbf{x}`}</InlineMath>: the eigenvector <InlineMath>{`\\mathbf{x}`}</InlineMath> is stretched by the eigenvalue <InlineMath>\lambda</InlineMath>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span>Find eigenvalues by solving <InlineMath>\det(A - \lambda I) = 0</InlineMath>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span>Find eigenvectors by solving <InlineMath>{`(A - \\lambda I)\\mathbf{x} = \\mathbf{0}`}</InlineMath>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span>Sum of eigenvalues = trace. Product of eigenvalues = determinant.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">5.</span>
            <span>Eigenvalues of <InlineMath>A^k</InlineMath> are <InlineMath>\lambda^k</InlineMath>; eigenvalues of <InlineMath>{`A^{-1}`}</InlineMath> are <InlineMath>1/\lambda</InlineMath>.</span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
