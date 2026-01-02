import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section36() {
  return (
    <LessonLayout sectionId={36}>
      {/* Introduction */}
      <p>
        <strong>Hermitian</strong> and <strong>unitary</strong> matrices are the complex analogues of
        symmetric and orthogonal matrices. They share the beautiful properties of real eigenvalues
        and orthonormal eigenvectors.
      </p>

      <h2>Conjugate Transpose</h2>

      <Definition title="Conjugate Transpose (Hermitian Adjoint)" className="my-6">
        <p>
          The <strong>conjugate transpose</strong> of matrix <InlineMath>A</InlineMath> is:
        </p>
        <MathBlock>
          {`A^H = \\bar{A}^T = (\\bar{A})^T = (A^T)^{\\bar{}}`}
        </MathBlock>
        <p className="mt-2">
          Also written as <InlineMath>A^*</InlineMath>. Take transpose AND conjugate each entry.
        </p>
      </Definition>

      <Example title="Computing A^H" className="my-6">
        <MathBlock>
          {`A = \\begin{bmatrix} 1 & 2+i \\\\ 3i & 4-2i \\end{bmatrix} \\quad \\Rightarrow \\quad A^H = \\begin{bmatrix} 1 & -3i \\\\ 2-i & 4+2i \\end{bmatrix}`}
        </MathBlock>
      </Example>

      <h2>Hermitian Matrices</h2>

      <Definition title="Hermitian Matrix" className="my-6">
        <p>
          A matrix <InlineMath>A</InlineMath> is <strong>Hermitian</strong> if:
        </p>
        <MathBlock>
          {`A^H = A`}
        </MathBlock>
        <p className="mt-2">
          Diagonal entries must be real. Off-diagonal entries satisfy <InlineMath>{`a_{ij} = \\bar{a}_{ji}`}</InlineMath>.
        </p>
      </Definition>

      <Theorem
        title="Spectral Theorem for Hermitian Matrices"
        className="my-6"
        proof={
          <>
            <p><strong>Real eigenvalues:</strong> If <InlineMath>{`A\\mathbf{x} = \\lambda\\mathbf{x}`}</InlineMath>, take the conjugate transpose:</p>
            <MathBlock>{`(A\\mathbf{x})^H = (\\lambda\\mathbf{x})^H \\implies \\mathbf{x}^H A^H = \\bar{\\lambda}\\mathbf{x}^H`}</MathBlock>
            <p className="mt-2">Since <InlineMath>{`A^H = A`}</InlineMath>: <InlineMath>{`\\mathbf{x}^H A = \\bar{\\lambda}\\mathbf{x}^H`}</InlineMath>. Multiply on the right by <InlineMath>{`\\mathbf{x}`}</InlineMath>:</p>
            <MathBlock>{`\\mathbf{x}^H A\\mathbf{x} = \\bar{\\lambda}\\mathbf{x}^H\\mathbf{x} = \\lambda\\mathbf{x}^H\\mathbf{x}`}</MathBlock>
            <p className="mt-2">Since <InlineMath>{`\\mathbf{x}^H\\mathbf{x} = \\|\\mathbf{x}\\|^2 \\neq 0`}</InlineMath>, we have <InlineMath>{`\\lambda = \\bar{\\lambda}`}</InlineMath>, so <InlineMath>{`\\lambda`}</InlineMath> is real.</p>
            <p className="mt-2"><strong>Orthogonal eigenvectors:</strong> For distinct eigenvalues, similar to the symmetric case: <InlineMath>{`\\lambda_1(\\mathbf{x}^H\\mathbf{y}) = \\lambda_2(\\mathbf{x}^H\\mathbf{y})`}</InlineMath> implies <InlineMath>{`\\mathbf{x}^H\\mathbf{y} = 0`}</InlineMath>.</p>
          </>
        }
      >
        <p>If <InlineMath>A = A^H</InlineMath> (Hermitian), then:</p>
        <ol className="list-decimal list-inside space-y-2">
          <li>All eigenvalues are <strong>real</strong></li>
          <li>Eigenvectors can be chosen <strong>orthonormal</strong></li>
        </ol>
        <MathBlock>
          {`A = U\\Lambda U^H`}
        </MathBlock>
        <p className="mt-2">
          where <InlineMath>U</InlineMath> is unitary and <InlineMath>\Lambda</InlineMath> is real diagonal.
        </p>
      </Theorem>

      <Example title="Hermitian Example" className="my-6">
        <MathBlock>
          {`A = \\begin{bmatrix} 2 & 1-i \\\\ 1+i & 3 \\end{bmatrix}`}
        </MathBlock>
        <p className="mt-2">
          Diagonal entries 2 and 3 are real. Off-diagonal: <InlineMath>1-i</InlineMath> and <InlineMath>{`\\overline{1-i} = 1+i`}</InlineMath> ✓
        </p>
        <p className="mt-2">
          Eigenvalues: both real (computed from characteristic polynomial).
        </p>
      </Example>

      <h2>Unitary Matrices</h2>

      <Definition title="Unitary Matrix" className="my-6">
        <p>
          A matrix <InlineMath>U</InlineMath> is <strong>unitary</strong> if:
        </p>
        <MathBlock>
          {`U^H U = I \\quad \\Leftrightarrow \\quad U^{-1} = U^H`}
        </MathBlock>
        <p className="mt-2">
          The columns form an orthonormal basis for <InlineMath>{`\\mathbb{C}^n`}</InlineMath>.
        </p>
      </Definition>

      <Theorem
        title="Properties of Unitary Matrices"
        className="my-6"
        proof={
          <>
            <p><strong>Preserves lengths:</strong></p>
            <MathBlock>{`\\|U\\mathbf{x}\\|^2 = (U\\mathbf{x})^H(U\\mathbf{x}) = \\mathbf{x}^H U^H U \\mathbf{x} = \\mathbf{x}^H I \\mathbf{x} = \\|\\mathbf{x}\\|^2`}</MathBlock>
            <p className="mt-2"><strong>Preserves inner products:</strong></p>
            <MathBlock>{`\\langle U\\mathbf{x}, U\\mathbf{y} \\rangle = (U\\mathbf{x})^H(U\\mathbf{y}) = \\mathbf{x}^H U^H U \\mathbf{y} = \\mathbf{x}^H \\mathbf{y} = \\langle \\mathbf{x}, \\mathbf{y} \\rangle`}</MathBlock>
            <p className="mt-2"><strong>Eigenvalues on unit circle:</strong> If <InlineMath>{`U\\mathbf{x} = \\lambda\\mathbf{x}`}</InlineMath>:</p>
            <MathBlock>{`\\|\\mathbf{x}\\| = \\|U\\mathbf{x}\\| = |\\lambda|\\|\\mathbf{x}\\| \\implies |\\lambda| = 1`}</MathBlock>
            <p className="mt-2"><strong>Determinant:</strong> <InlineMath>|\\det U|^2 = \\det(U^H)\\det(U) = \\det(U^H U) = \\det I = 1</InlineMath>.</p>
          </>
        }
      >
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Preserves lengths:</strong> <InlineMath>{`\\|U\\mathbf{x}\\| = \\|\\mathbf{x}\\|`}</InlineMath></li>
          <li><strong>Preserves inner products:</strong> <InlineMath>{`\\langle U\\mathbf{x}, U\\mathbf{y} \\rangle = \\langle \\mathbf{x}, \\mathbf{y} \\rangle`}</InlineMath></li>
          <li><strong>Eigenvalues:</strong> <InlineMath>|\lambda| = 1</InlineMath> (on unit circle)</li>
          <li><strong>Determinant:</strong> <InlineMath>|\det U| = 1</InlineMath></li>
        </ul>
      </Theorem>

      <Example title="Fourier Matrix" className="my-6">
        <p>
          The <InlineMath>n \times n</InlineMath> Fourier matrix <InlineMath>F_n</InlineMath> (with normalization) is unitary:
        </p>
        <MathBlock>
          {`(F_n)_{jk} = \\frac{1}{\\sqrt{n}} e^{2\\pi i jk/n} = \\frac{1}{\\sqrt{n}} \\omega^{jk}`}
        </MathBlock>
        <p className="mt-2">
          where <InlineMath>{`\\omega = e^{2\\\\pi i/n}`}</InlineMath> is a primitive <InlineMath>n</InlineMath>th root of unity.
        </p>
      </Example>

      <h2>Relationship to Real Matrices</h2>

      <div className="bg-dark-800/50 rounded-xl p-4 my-6 border border-primary-500/20">
        <p className="font-semibold text-primary-400 mb-2">Complex vs Real</p>
        <table className="w-full text-sm text-dark-300 mt-2">
          <thead>
            <tr className="border-b border-dark-700">
              <th className="text-left py-2">Real</th>
              <th className="text-left py-2">Complex</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-dark-800">
              <td className="py-2">Transpose <InlineMath>A^T</InlineMath></td>
              <td className="py-2">Conjugate transpose <InlineMath>A^H</InlineMath></td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2">Symmetric <InlineMath>A = A^T</InlineMath></td>
              <td className="py-2">Hermitian <InlineMath>A = A^H</InlineMath></td>
            </tr>
            <tr className="border-b border-dark-800">
              <td className="py-2">Orthogonal <InlineMath>Q^TQ = I</InlineMath></td>
              <td className="py-2">Unitary <InlineMath>U^HU = I</InlineMath></td>
            </tr>
            <tr>
              <td className="py-2">Dot product <InlineMath>x^Ty</InlineMath></td>
              <td className="py-2">Inner product <InlineMath>x^Hy</InlineMath></td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Skew-Hermitian Matrices</h2>

      <Definition title="Skew-Hermitian" className="my-6">
        <p>
          A matrix is <strong>skew-Hermitian</strong> if <InlineMath>A^H = -A</InlineMath>.
        </p>
        <p className="mt-2">
          Eigenvalues are <strong>purely imaginary</strong> (on imaginary axis).
        </p>
      </Definition>

      <h2>Key Ideas</h2>

      <div className="bg-gradient-to-br from-primary-500/10 to-dark-800/50 rounded-xl p-6 my-6 border border-primary-500/20">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span>Conjugate transpose: <InlineMath>{`A^H = \\bar{A}^T`}</InlineMath>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span>Hermitian (<InlineMath>A^H = A</InlineMath>) has real eigenvalues and orthonormal eigenvectors.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span>Unitary (<InlineMath>U^HU = I</InlineMath>) preserves lengths and has <InlineMath>|\lambda| = 1</InlineMath>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span>Spectral theorem: <InlineMath>A = U\Lambda U^H</InlineMath> for Hermitian <InlineMath>A</InlineMath>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">5.</span>
            <span>The Fourier matrix is unitary.</span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
