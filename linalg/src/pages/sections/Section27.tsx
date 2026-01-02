import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section27() {
  return (
    <LessonLayout sectionId={27}>
      {/* Introduction */}
      <p>
        <strong>Positive definite</strong> matrices are the "good" symmetric matrices. They appear throughout
        optimization, statistics, and physics. Every test for positive definiteness is worth knowing.
      </p>

      <h2>Definition and Tests</h2>

      <Definition title="Positive Definite Matrix" className="my-6">
        <p>
          A symmetric matrix <InlineMath>S</InlineMath> is <strong>positive definite</strong> if:
        </p>
        <MathBlock>
          {`\\mathbf{x}^TS\\mathbf{x} > 0 \\quad \\text{for all } \\mathbf{x} \\neq \\mathbf{0}`}
        </MathBlock>
        <p className="mt-2">
          The quadratic form <InlineMath>{`\\mathbf{x}^TS\\mathbf{x}`}</InlineMath> is always positive (like an upward-opening bowl).
        </p>
      </Definition>

      <Theorem
        title="Tests for Positive Definiteness"
        className="my-6"
        proof={
          <>
            <p><strong>Test 1 ⟺ Definition:</strong> <InlineMath>{`\\mathbf{x}^TS\\mathbf{x} = \\lambda_1y_1^2 + \\cdots + \\lambda_ny_n^2 &gt; 0`}</InlineMath> for all <InlineMath>{`\\mathbf{y} \\neq \\mathbf{0}`}</InlineMath> iff all <InlineMath>\lambda_i &gt; 0</InlineMath>.</p>
            <p className="mt-2"><strong>Test 2:</strong> By Sylvester's Law, the number of positive pivots equals the number of positive eigenvalues. For positive definite, all <InlineMath>n</InlineMath> eigenvalues are positive, so all <InlineMath>n</InlineMath> pivots are positive.</p>
            <p className="mt-2"><strong>Test 3:</strong> The <InlineMath>k</InlineMath>-th leading principal minor equals the product of the first <InlineMath>k</InlineMath> pivots (up to a positive factor). If all pivots are positive, all minors are positive.</p>
            <p className="mt-2"><strong>Test 4:</strong> <InlineMath>{`\\mathbf{x}^T(A^TA)\\mathbf{x} = \\|A\\mathbf{x}\\|^2 &gt; 0`}</InlineMath> when <InlineMath>A</InlineMath> has independent columns (so <InlineMath>{`A\\mathbf{x} \\neq \\mathbf{0}`}</InlineMath> for <InlineMath>{`\\mathbf{x} \\neq \\mathbf{0}`}</InlineMath>).</p>
          </>
        }
      >
        <p>A symmetric matrix <InlineMath>S</InlineMath> is positive definite if and only if:</p>
        <ol className="list-decimal list-inside mt-2 space-y-2">
          <li>All <strong>eigenvalues</strong> are positive: <InlineMath>\lambda_i &gt; 0</InlineMath></li>
          <li>All <strong>pivots</strong> are positive: <InlineMath>d_i &gt; 0</InlineMath></li>
          <li>All <strong>leading principal minors</strong> (upper-left determinants) are positive</li>
          <li><InlineMath>S = A^TA</InlineMath> for some matrix <InlineMath>A</InlineMath> with independent columns</li>
        </ol>
      </Theorem>

      <Example title="Testing a 2×2 Matrix" className="my-6">
        <MathBlock>
          {`S = \\begin{bmatrix} 2 & -1 \\\\ -1 & 2 \\end{bmatrix}`}
        </MathBlock>
        <p className="mt-2"><strong>Test 1 (Eigenvalues):</strong> <InlineMath>\lambda = 3, 1</InlineMath> ✓ (both positive)</p>
        <p className="mt-2"><strong>Test 2 (Pivots):</strong> <InlineMath>2</InlineMath> and <InlineMath>2 - 1/2 = 3/2</InlineMath> ✓ (both positive)</p>
        <p className="mt-2"><strong>Test 3 (Minors):</strong> <InlineMath>\det[2] = 2 &gt; 0</InlineMath>, <InlineMath>\det S = 3 &gt; 0</InlineMath> ✓</p>
      </Example>

      <h2>Positive Semidefinite</h2>

      <Definition title="Positive Semidefinite" className="my-6">
        <p>
          A symmetric matrix is <strong>positive semidefinite</strong> if:
        </p>
        <MathBlock>
          {`\\mathbf{x}^TS\\mathbf{x} \\geq 0 \\quad \\text{for all } \\mathbf{x}`}
        </MathBlock>
        <p className="mt-2">
          Equivalently: <InlineMath>\lambda_i \geq 0</InlineMath> (eigenvalues are nonnegative).
        </p>
      </Definition>

      <Example title="Semidefinite Example" className="my-6">
        <MathBlock>
          {`S = \\begin{bmatrix} 1 & 2 \\\\ 2 & 4 \\end{bmatrix} = \\begin{bmatrix} 1 \\\\ 2 \\end{bmatrix}\\begin{bmatrix} 1 & 2 \\end{bmatrix}`}
        </MathBlock>
        <p className="mt-2">
          Eigenvalues: <InlineMath>5, 0</InlineMath>. This is positive semidefinite (not definite).
        </p>
        <p className="mt-2">
          <InlineMath>{`\\mathbf{x}^TS\\mathbf{x} = (x + 2y)^2 \\geq 0`}</InlineMath>, with equality when <InlineMath>x = -2y</InlineMath>.
        </p>
      </Example>

      <h2>A^T A is Always Positive Semidefinite</h2>

      <Theorem
        title="A^T A"
        className="my-6"
        proof={
          <>
            <p><strong>Symmetric:</strong> <InlineMath>(A^TA)^T = A^T(A^T)^T = A^TA</InlineMath>.</p>
            <p className="mt-2"><strong>Positive semidefinite:</strong></p>
            <MathBlock>{`\\mathbf{x}^T(A^TA)\\mathbf{x} = (A\\mathbf{x})^T(A\\mathbf{x}) = \\|A\\mathbf{x}\\|^2 \\geq 0`}</MathBlock>
            <p className="mt-2"><strong>Positive definite ⟺ independent columns:</strong></p>
            <p>• If <InlineMath>A</InlineMath> has independent columns: <InlineMath>{`A\\mathbf{x} \\neq \\mathbf{0}`}</InlineMath> for <InlineMath>{`\\mathbf{x} \\neq \\mathbf{0}`}</InlineMath>, so <InlineMath>{`\\|A\\mathbf{x}\\|^2 &gt; 0`}</InlineMath>.</p>
            <p>• If <InlineMath>A</InlineMath> has dependent columns: There exists <InlineMath>{`\\mathbf{x} \\neq \\mathbf{0}`}</InlineMath> with <InlineMath>{`A\\mathbf{x} = \\mathbf{0}`}</InlineMath>, so <InlineMath>{`\\mathbf{x}^T(A^TA)\\mathbf{x} = 0`}</InlineMath>.</p>
          </>
        }
      >
        <p>For any matrix <InlineMath>A</InlineMath>:</p>
        <ul className="list-disc list-inside space-y-2">
          <li><InlineMath>A^TA</InlineMath> is symmetric and positive semidefinite</li>
          <li><InlineMath>A^TA</InlineMath> is positive <strong>definite</strong> if and only if <InlineMath>A</InlineMath> has independent columns</li>
        </ul>
        <MathBlock>
          {`\\mathbf{x}^T(A^TA)\\mathbf{x} = (A\\mathbf{x})^T(A\\mathbf{x}) = \\|A\\mathbf{x}\\|^2 \\geq 0`}
        </MathBlock>
      </Theorem>

      <h2>Cholesky Factorization</h2>

      <Theorem
        title="Cholesky Factorization"
        className="my-6"
        proof={
          <>
            <p>Start with <InlineMath>LU</InlineMath> factorization: <InlineMath>S = LDU</InlineMath> where <InlineMath>L</InlineMath> is lower triangular with 1's, <InlineMath>D</InlineMath> is diagonal (pivots), and <InlineMath>U</InlineMath> is upper triangular with 1's.</p>
            <p className="mt-2">For symmetric <InlineMath>S</InlineMath>: <InlineMath>S = S^T</InlineMath> gives <InlineMath>LDU = U^TD^TL^T = U^TDL^T</InlineMath>.</p>
            <p className="mt-2">By uniqueness: <InlineMath>U = L^T</InlineMath>, so <InlineMath>S = LDL^T</InlineMath>.</p>
            <p className="mt-2">For positive definite <InlineMath>S</InlineMath>, all pivots <InlineMath>{`d_i > 0`}</InlineMath>. Define <InlineMath>{`L' = L\\sqrt{D}`}</InlineMath> where <InlineMath>{`\\sqrt{D} = \\text{diag}(\\sqrt{d_1}, \\ldots, \\sqrt{d_n})`}</InlineMath>. Then:</p>
            <MathBlock>{`S = LDL^T = L\\sqrt{D}\\sqrt{D}L^T = (L\\sqrt{D})(L\\sqrt{D})^T = L'(L')^T`}</MathBlock>
          </>
        }
      >
        <p>
          Every positive definite matrix has a unique <strong>Cholesky factorization</strong>:
        </p>
        <MathBlock>
          {`S = LL^T`}
        </MathBlock>
        <p className="mt-2">
          where <InlineMath>L</InlineMath> is lower triangular with positive diagonal entries.
        </p>
        <p className="mt-2 text-primary-400">
          This is like <InlineMath>LU</InlineMath> factorization, but with <InlineMath>U = L^T</InlineMath>.
        </p>
      </Theorem>

      <Example title="Cholesky Example" className="my-6">
        <MathBlock>
          {`\\begin{bmatrix} 4 & 2 \\\\ 2 & 5 \\end{bmatrix} = \\begin{bmatrix} 2 & 0 \\\\ 1 & 2 \\end{bmatrix}\\begin{bmatrix} 2 & 1 \\\\ 0 & 2 \\end{bmatrix} = LL^T`}
        </MathBlock>
      </Example>

      <h2>Applications</h2>

      <div className="bg-dark-800/50 rounded-xl p-4 my-6 border border-primary-500/20">
        <p className="font-semibold text-primary-400 mb-2">Where Positive Definite Matrices Appear</p>
        <ul className="list-disc list-inside text-dark-300 text-sm space-y-1">
          <li><strong>Least squares:</strong> <InlineMath>A^TA</InlineMath> in normal equations</li>
          <li><strong>Optimization:</strong> Hessian matrix at a minimum</li>
          <li><strong>Statistics:</strong> Covariance matrices</li>
          <li><strong>Physics:</strong> Energy and kinetic energy matrices</li>
          <li><strong>Machine learning:</strong> Kernel matrices</li>
        </ul>
      </div>

      <h2>Key Ideas</h2>

      <div className="bg-gradient-to-br from-primary-500/10 to-dark-800/50 rounded-xl p-6 my-6 border border-primary-500/20">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span>Positive definite: <InlineMath>{`\\mathbf{x}^TS\\mathbf{x} &gt; 0`}</InlineMath> for all <InlineMath>{`\\mathbf{x} \\neq \\mathbf{0}`}</InlineMath>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span>Equivalent tests: all <InlineMath>\lambda &gt; 0</InlineMath>, all pivots <InlineMath>&gt; 0</InlineMath>, all leading minors <InlineMath>&gt; 0</InlineMath>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span><InlineMath>A^TA</InlineMath> is positive definite when <InlineMath>A</InlineMath> has independent columns.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span>Cholesky: <InlineMath>S = LL^T</InlineMath> for positive definite <InlineMath>S</InlineMath>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">5.</span>
            <span>Positive semidefinite: <InlineMath>{`\\mathbf{x}^TS\\mathbf{x} \\geq 0`}</InlineMath>, eigenvalues <InlineMath>\geq 0</InlineMath>.</span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
