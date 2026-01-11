import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section24() {
  return (
    <LessonLayout sectionId={24}>
      {/* Introduction */}
      <p>
        When a matrix has <InlineMath>n</InlineMath> independent eigenvectors, it can be <strong>diagonalized</strong>.
        This factorization <InlineMath>{`A = X\\Lambda X^{-1}`}</InlineMath> makes computing powers of <InlineMath>A</InlineMath> easy.
      </p>

      <h2>The Diagonalization</h2>

      <Theorem
        title="Diagonalization"
        className="my-6"
        proof={
          <>
            <p>Let <InlineMath>{`X = [\\mathbf{x}_1 \\cdots \\mathbf{x}_n]`}</InlineMath> where <InlineMath>{`A\\mathbf{x}_i = \\lambda_i\\mathbf{x}_i`}</InlineMath>. Then:</p>
            <MathBlock>{`AX = A[\\mathbf{x}_1 \\cdots \\mathbf{x}_n] = [\\lambda_1\\mathbf{x}_1 \\cdots \\lambda_n\\mathbf{x}_n]`}</MathBlock>
            <p className="mt-2">The right side can be written as <InlineMath>{`X\\Lambda`}</InlineMath>:</p>
            <MathBlock>{`AX = X\\Lambda`}</MathBlock>
            <p>If the eigenvectors are independent, <InlineMath>{`X`}</InlineMath> is invertible. Multiply by <InlineMath>{`X^{-1}`}</InlineMath>:</p>
            <MathBlock>{`A = X\\Lambda X^{-1} \\quad \\text{or} \\quad \\Lambda = X^{-1}AX`}</MathBlock>
          </>
        }
      >
        <p>
          If <InlineMath>A</InlineMath> has <InlineMath>n</InlineMath> linearly independent eigenvectors, put them in the columns of <InlineMath>X</InlineMath>:
        </p>
        <MathBlock>
          {`A = X\\Lambda X^{-1}`}
        </MathBlock>
        <p className="mt-2">
          where <InlineMath>\Lambda</InlineMath> is the diagonal matrix of eigenvalues:
        </p>
        <MathBlock>
          {`\\Lambda = \\begin{bmatrix} \\lambda_1 & & 0 \\\\ & \\ddots & \\\\ 0 & & \\lambda_n \\end{bmatrix}`}
        </MathBlock>
      </Theorem>

      <Example title="Diagonalizing a 2×2 Matrix" className="my-6">
        <MathBlock>
          {`A = \\begin{bmatrix} 4 & -5 \\\\ 2 & -3 \\end{bmatrix}, \\quad \\lambda_1 = 2, \\lambda_2 = -1`}
        </MathBlock>
        <p className="mt-2">Eigenvectors: <InlineMath>{`\\mathbf{x}_1 = (5, 2)`}</InlineMath> and <InlineMath>{`\\mathbf{x}_2 = (1, 1)`}</InlineMath></p>
        <MathBlock>
          {`X = \\begin{bmatrix} 5 & 1 \\\\ 2 & 1 \\end{bmatrix}, \\quad \\Lambda = \\begin{bmatrix} 2 & 0 \\\\ 0 & -1 \\end{bmatrix}`}
        </MathBlock>
        <p className="mt-2">
          Check: <InlineMath>{`A = X\\Lambda X^{-1}`}</InlineMath> ✓
        </p>
      </Example>

      <h2>Powers of A</h2>

      <Theorem
        title="Computing A^k"
        className="my-6"
        proof={
          <>
            <p>Using <InlineMath>{`A = X\\Lambda X^{-1}`}</InlineMath>:</p>
            <MathBlock>{`A^2 = (X\\Lambda X^{-1})(X\\Lambda X^{-1}) = X\\Lambda(X^{-1}X)\\Lambda X^{-1} = X\\Lambda^2 X^{-1}`}</MathBlock>
            <p className="mt-2">By induction:</p>
            <MathBlock>{`A^k = X\\Lambda^k X^{-1}`}</MathBlock>
            <p className="mt-2">Since <InlineMath>\Lambda</InlineMath> is diagonal, <InlineMath>\Lambda^k</InlineMath> is also diagonal with entries <InlineMath>\lambda_i^k</InlineMath>:</p>
            <MathBlock>{`\\Lambda^k = \\begin{bmatrix} \\lambda_1^k & & 0 \\\\ & \\ddots & \\\\ 0 & & \\lambda_n^k \\end{bmatrix}`}</MathBlock>
          </>
        }
      >
        <p>
          The key benefit of diagonalization: powers become easy!
        </p>
        <MathBlock>
          {`A^k = X\\Lambda^k X^{-1}`}
        </MathBlock>
        <p className="mt-2">
          And <InlineMath>\Lambda^k</InlineMath> is just <InlineMath>{`\\text{diag}(\\lambda_1^k, \\lambda_2^k, \\ldots, \\lambda_n^k)`}</InlineMath>.
        </p>
      </Theorem>

      <Example title="Computing A^{100}" className="my-6">
        <MathBlock>
          {`A^{100} = X\\Lambda^{100}X^{-1} = \\begin{bmatrix} 5 & 1 \\\\ 2 & 1 \\end{bmatrix}\\begin{bmatrix} 2^{100} & 0 \\\\ 0 & (-1)^{100} \\end{bmatrix}X^{-1}`}
        </MathBlock>
        <p className="mt-2">
          Since <InlineMath>{`(-1)^{100} = 1`}</InlineMath>, the answer involves <InlineMath>{`2^{100}`}</InlineMath> and <InlineMath>1</InlineMath>.
        </p>
      </Example>

      <h2>When Is A Diagonalizable?</h2>

      <Theorem
        title="Diagonalizability"
        className="my-6"
        proof={
          <>
            <p><strong>Distinct eigenvalues ⟹ diagonalizable:</strong></p>
            <p className="mt-2">We prove eigenvectors of distinct eigenvalues are independent. Suppose <InlineMath>{`c_1\\mathbf{x}_1 + \\cdots + c_k\\mathbf{x}_k = \\mathbf{0}`}</InlineMath> where each <InlineMath>\lambda_i</InlineMath> is distinct.</p>
            <p className="mt-2">Apply <InlineMath>A</InlineMath>: <InlineMath>{`c_1\\lambda_1\\mathbf{x}_1 + \\cdots + c_k\\lambda_k\\mathbf{x}_k = \\mathbf{0}`}</InlineMath>.</p>
            <p className="mt-2">Subtract <InlineMath>\lambda_k</InlineMath> times the first equation: <InlineMath>{`c_1(\\lambda_1 - \\lambda_k)\\mathbf{x}_1 + \\cdots = \\mathbf{0}`}</InlineMath>.</p>
            <p className="mt-2">Since <InlineMath>\lambda_1 - \lambda_k \neq 0</InlineMath>, we can continue this process to show all <InlineMath>c_i = 0</InlineMath>. Thus eigenvectors are independent.</p>
          </>
        }
      >
        <p><InlineMath>A</InlineMath> is diagonalizable if and only if it has <InlineMath>n</InlineMath> independent eigenvectors.</p>
        <p className="mt-2">This is <strong>guaranteed</strong> when:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>All <InlineMath>n</InlineMath> eigenvalues are <strong>distinct</strong></li>
          <li><InlineMath>A</InlineMath> is <strong>symmetric</strong> (always diagonalizable with orthogonal eigenvectors)</li>
        </ul>
      </Theorem>

      <div className="bg-dark-800/50 rounded-xl p-4 my-6 border border-amber-500/20">
        <p className="font-semibold text-amber-400 mb-2">Warning: Repeated Eigenvalues</p>
        <p className="text-dark-300 text-sm">
          A repeated eigenvalue <em>might</em> not have enough independent eigenvectors.
          Example: <InlineMath>{`\\begin{bmatrix} 1 & 1 \\\\ 0 & 1 \\end{bmatrix}`}</InlineMath> has <InlineMath>\lambda = 1, 1</InlineMath> but only one eigenvector.
        </p>
      </div>

      <h2>Similar Matrices</h2>

      <Definition title="Similar Matrices" className="my-6">
        <p>
          Matrices <InlineMath>A</InlineMath> and <InlineMath>B</InlineMath> are <strong>similar</strong> if <InlineMath>{`B = M^{-1}AM`}</InlineMath>
          for some invertible <InlineMath>M</InlineMath>.
        </p>
        <p className="mt-2 text-primary-400">
          Similar matrices have the <strong>same eigenvalues</strong>.
        </p>
      </Definition>

      <Theorem
        title="Properties of Similar Matrices"
        className="my-6"
        proof={
          <>
            <p><strong>Same eigenvalues:</strong> If <InlineMath>{`B = M^{-1}AM`}</InlineMath> and <InlineMath>{`A\\mathbf{x} = \\lambda\\mathbf{x}`}</InlineMath>, then:</p>
            <MathBlock>{`B(M^{-1}\\mathbf{x}) = M^{-1}AM(M^{-1}\\mathbf{x}) = M^{-1}A\\mathbf{x} = M^{-1}(\\lambda\\mathbf{x}) = \\lambda(M^{-1}\\mathbf{x})`}</MathBlock>
            <p>So <InlineMath>{`M^{-1}\\mathbf{x}`}</InlineMath> is an eigenvector of <InlineMath>{`B`}</InlineMath> with the same eigenvalue <InlineMath>{`\\lambda`}</InlineMath>.</p>
            <p className="mt-2"><strong>Same determinant:</strong> <InlineMath>{`\\det B = \\det(M^{-1}AM) = \\det(M^{-1})\\det(A)\\det(M) = \\det A`}</InlineMath>.</p>
            <p className="mt-2"><strong>Same trace and rank:</strong> Follow from same eigenvalues (trace = sum, rank = number of nonzero eigenvalues).</p>
          </>
        }
      >
        <p>If <InlineMath>A</InlineMath> and <InlineMath>B</InlineMath> are similar:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Same eigenvalues</li>
          <li>Same determinant</li>
          <li>Same trace</li>
          <li>Same rank</li>
        </ul>
      </Theorem>

      <h2>The Eigenvector Matrix X</h2>

      <div className="bg-dark-800/50 rounded-xl p-4 my-6 border border-primary-500/20">
        <p className="font-semibold text-primary-400 mb-2">The Equation <InlineMath>AX = X\Lambda</InlineMath></p>
        <p className="text-dark-300 text-sm">
          Put the eigenvectors in columns of <InlineMath>X</InlineMath>. Then:<br />
          <InlineMath>A[x_1 \cdots x_n] = [\lambda_1 x_1 \cdots \lambda_n x_n] = [x_1 \cdots x_n]\Lambda</InlineMath>
        </p>
        <p className="text-dark-300 text-sm mt-2">
          If <InlineMath>X</InlineMath> is invertible: <InlineMath>{`A = X\\Lambda X^{-1}`}</InlineMath> or <InlineMath>{`\\Lambda = X^{-1}AX`}</InlineMath>.
        </p>
      </div>

      <h2>Key Ideas</h2>

      <div className="bg-gradient-to-br from-primary-500/10 to-dark-800/50 rounded-xl p-6 my-6 border border-primary-500/20">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span><InlineMath>{`A = X\\Lambda X^{-1}`}</InlineMath> when <InlineMath>X</InlineMath> has <InlineMath>n</InlineMath> independent eigenvectors as columns.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span><InlineMath>{`A^k = X\\Lambda^k X^{-1}`}</InlineMath>. Powers of <InlineMath>\Lambda</InlineMath> are easy: just power the diagonal.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span><InlineMath>A</InlineMath> is diagonalizable if it has <InlineMath>n</InlineMath> independent eigenvectors.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span>Distinct eigenvalues guarantee diagonalizability.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">5.</span>
            <span>Similar matrices (<InlineMath>{`B = M^{-1}AM`}</InlineMath>) have the same eigenvalues.</span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
