import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section47() {
  return (
    <LessonLayout sectionId={47}>
      {/* Introduction */}
      <p>
        Computing <strong>eigenvalues numerically</strong> is one of the great achievements of numerical
        linear algebra. The algorithms are subtle and beautiful, far more sophisticated than solving
        <InlineMath>\det(A - \lambda I) = 0</InlineMath>.
      </p>

      <h2>The Power Method</h2>

      <Definition title="Power Iteration" className="my-6">
        <p>
          To find the <strong>dominant eigenvalue</strong> (largest <InlineMath>|\lambda|</InlineMath>):
        </p>
        <MathBlock>
          {`\\mathbf{x}_{k+1} = \\frac{A\\mathbf{x}_k}{\\|A\\mathbf{x}_k\\|}`}
        </MathBlock>
        <p className="mt-2">
          Converges to the eigenvector for <InlineMath>\lambda_1</InlineMath> at rate <InlineMath>|\lambda_2/\lambda_1|</InlineMath>.
        </p>
      </Definition>

      <Example title="Power Method in Action" className="my-6">
        <p>
          For <InlineMath>A</InlineMath> with <InlineMath>\lambda_1 = 3, \lambda_2 = 1</InlineMath>:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Convergence rate: <InlineMath>|1/3| = 0.33</InlineMath></li>
          <li>After 10 iterations: error reduced by <InlineMath>{`0.33^{10} \\approx 10^{-5}`}</InlineMath></li>
        </ul>
      </Example>

      <Theorem
        title="Inverse Iteration"
        className="my-6"
        proof={
          <>
            <p><strong>Key insight:</strong> If <InlineMath>{`A\\mathbf{v} = \\lambda \\mathbf{v}`}</InlineMath>, then <InlineMath>{`(A - \\mu I)\\mathbf{v} = (\\lambda - \\mu)\\mathbf{v}`}</InlineMath>.</p>
            <p className="mt-2">Thus <InlineMath>{`(A - \\mu I)^{-1}\\mathbf{v} = \\frac{1}{\\lambda - \\mu}\\mathbf{v}`}</InlineMath>.</p>
            <p className="mt-2"><strong>Amplification:</strong> The eigenvalue of <InlineMath>{`(A - \\mu I)^{-1}`}</InlineMath> is <InlineMath>{`1/(\\lambda - \\mu)`}</InlineMath>. The eigenvalue closest to <InlineMath>{`\\mu`}</InlineMath> has the smallest <InlineMath>{`|\\lambda - \\mu|`}</InlineMath>, hence the largest <InlineMath>{`|1/(\\lambda - \\mu)|`}</InlineMath>.</p>
            <p className="mt-2"><strong>Convergence:</strong> Power iteration on <InlineMath>{`(A - \\mu I)^{-1}`}</InlineMath> converges to the eigenvector for the dominant eigenvalue of <InlineMath>{`(A - \\mu I)^{-1}`}</InlineMath>, which is the eigenvector for the eigenvalue of <InlineMath>A</InlineMath> nearest to <InlineMath>{`\\mu`}</InlineMath>.</p>
          </>
        }
      >
        <p>
          To find the eigenvalue nearest to <InlineMath>\mu</InlineMath>:
        </p>
        <MathBlock>
          {`(A - \\mu I)\\mathbf{x}_{k+1} = \\mathbf{x}_k`}
        </MathBlock>
        <p className="mt-2">
          This is power iteration on <InlineMath>{`(A - \\mu I)^{-1}`}</InlineMath>, which amplifies the eigenvalue
          nearest to <InlineMath>\mu</InlineMath>.
        </p>
      </Theorem>

      <h2>The QR Algorithm</h2>

      <Definition title="QR Iteration" className="my-6">
        <p>
          The <strong>QR algorithm</strong> finds all eigenvalues:
        </p>
        <MathBlock>
          {`A_k = Q_kR_k \\quad \\text{(QR factorization)}`}
        </MathBlock>
        <MathBlock>
          {`A_{k+1} = R_kQ_k \\quad \\text{(reverse multiply)}`}
        </MathBlock>
        <p className="mt-2">
          <InlineMath>A_k \to</InlineMath> upper triangular with eigenvalues on diagonal.
        </p>
      </Definition>

      <Theorem
        title="Convergence of QR"
        className="my-6"
        proof={
          <>
            <p><strong>Similarity:</strong> <InlineMath>{`A_{k+1} = R_k Q_k = Q_k^{-1} Q_k R_k Q_k = Q_k^{-1} A_k Q_k`}</InlineMath>.</p>
            <p className="mt-2">Thus <InlineMath>{`A_{k+1}`}</InlineMath> is similar to <InlineMath>{`A_k`}</InlineMath>, so all <InlineMath>{`A_k`}</InlineMath> share the same eigenvalues.</p>
            <p className="mt-2"><strong>Connection to power iteration:</strong> <InlineMath>{`A^k = (Q_1 R_1)(Q_2 R_2)\\cdots = (Q_1 Q_2 \\cdots Q_k)(R_k \\cdots R_1)`}</InlineMath>.</p>
            <p className="mt-2">The <InlineMath>{`Q`}</InlineMath>-factors span the same subspaces as power iteration. This causes the subdiagonal entries to decay like <InlineMath>{`|\\lambda_{i+1}/\\lambda_i|^k`}</InlineMath>.</p>
            <p className="mt-2"><strong>Result:</strong> <InlineMath>A_k</InlineMath> converges to upper triangular (or block upper triangular if eigenvalues have equal modulus) with eigenvalues on the diagonal.</p>
          </>
        }
      >
        <ul className="list-disc list-inside space-y-2">
          <li>All <InlineMath>A_k</InlineMath> are similar (same eigenvalues)</li>
          <li>For distinct <InlineMath>|\lambda_i|</InlineMath>, converges to upper triangular</li>
          <li>Rate depends on <InlineMath>{`|\\lambda_{i+1}/\\lambda_i|`}</InlineMath></li>
        </ul>
      </Theorem>

      <h2>Practical QR Algorithm</h2>

      <div className="bg-dark-800/50 rounded-xl p-4 my-6 border border-primary-500/20">
        <p className="font-semibold text-primary-400 mb-2">Key Improvements</p>
        <ol className="list-decimal list-inside text-dark-300 text-sm space-y-2">
          <li><strong>Shifts:</strong> Use <InlineMath>A_k - \mu_k I</InlineMath> to accelerate convergence</li>
          <li><strong>Hessenberg form:</strong> Reduce to upper Hessenberg first (<InlineMath>O(n^3)</InlineMath> once)</li>
          <li><strong>Implicit shifts:</strong> Don't form <InlineMath>Q</InlineMath> and <InlineMath>R</InlineMath> explicitly</li>
          <li><strong>Deflation:</strong> Split off eigenvalues as they converge</li>
        </ol>
        <p className="text-dark-300 text-sm mt-2">
          Result: <InlineMath>O(n^3)</InlineMath> operations for all eigenvalues.
        </p>
      </div>

      <h2>SVD Computation</h2>

      <Theorem
        title="Computing the SVD"
        className="my-6"
        proof={
          <>
            <p><strong>Step 1 - Bidiagonalization:</strong> Use Householder reflections alternating on left and right to reduce <InlineMath>A</InlineMath> to bidiagonal form <InlineMath>B = U_1^T A V_1</InlineMath>. Cost: <InlineMath>O(mn^2)</InlineMath>.</p>
            <p className="mt-2"><strong>Step 2 - SVD of bidiagonal:</strong> Apply implicit QR with shifts to <InlineMath>B^TB</InlineMath> (without forming it explicitly). This zeroes out the superdiagonal entries.</p>
            <p className="mt-2"><strong>Step 3 - Accumulate:</strong> Track the transformations: <InlineMath>U = U_1 U_2</InlineMath>, <InlineMath>V = V_1 V_2</InlineMath> where <InlineMath>U_2, V_2</InlineMath> come from the QR iterations.</p>
            <p className="mt-2"><strong>Result:</strong> <InlineMath>A = U\\Sigma V^T</InlineMath> where <InlineMath>\\Sigma</InlineMath> is diagonal with singular values (square roots of eigenvalues of <InlineMath>A^TA</InlineMath>).</p>
          </>
        }
      >
        <p>
          To compute <InlineMath>A = U\Sigma V^T</InlineMath>:
        </p>
        <ol className="list-decimal list-inside space-y-2">
          <li>Reduce to bidiagonal form (Householder reflections)</li>
          <li>Apply QR iteration to the bidiagonal matrix</li>
          <li>Accumulate transformations into <InlineMath>U</InlineMath> and <InlineMath>V</InlineMath></li>
        </ol>
        <p className="mt-2">
          Total cost: <InlineMath>O(mn^2)</InlineMath> for <InlineMath>m \times n</InlineMath> matrix.
        </p>
      </Theorem>

      <h2>Divide and Conquer</h2>

      <Definition title="Divide and Conquer for Eigenvalues" className="my-6">
        <p>
          For symmetric tridiagonal matrices, <strong>divide and conquer</strong> is often fastest:
        </p>
        <ol className="list-decimal list-inside mt-2 space-y-1">
          <li>Split matrix into two halves</li>
          <li>Recursively find eigenvalues of halves</li>
          <li>Combine using rank-1 updates</li>
        </ol>
        <p className="mt-2">
          Parallelizes well; <InlineMath>O(n^2)</InlineMath> for eigenvalues only.
        </p>
      </Definition>

      <h2>Eigenvalue Solvers in Practice</h2>

      <div className="bg-dark-800/50 rounded-xl p-4 my-6 border border-primary-500/20">
        <p className="font-semibold text-primary-400 mb-2">LAPACK/BLAS</p>
        <p className="text-dark-300 text-sm">
          Standard libraries (LAPACK, MKL, OpenBLAS) implement these algorithms with
          decades of optimization:
        </p>
        <ul className="list-disc list-inside text-dark-300 text-sm mt-2 space-y-1">
          <li><code>DGEEV</code>: General eigenvalues</li>
          <li><code>DSYEV</code>: Symmetric eigenvalues</li>
          <li><code>DGESVD</code>: Singular value decomposition</li>
        </ul>
      </div>

      <h2>Key Ideas</h2>

      <div className="bg-gradient-to-br from-primary-500/10 to-dark-800/50 rounded-xl p-6 my-6 border border-primary-500/20">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span>Power method: iterate <InlineMath>x \to Ax/\|Ax\|</InlineMath> for dominant eigenvector.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span>Inverse iteration finds eigenvalue nearest to shift <InlineMath>\mu</InlineMath>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span>QR algorithm: <InlineMath>A = QR</InlineMath>, then <InlineMath>A \to RQ</InlineMath>, repeat.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span>Practical QR uses shifts, Hessenberg form, and deflation.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">5.</span>
            <span>All eigenvalues in <InlineMath>O(n^3)</InlineMath>; use standard libraries!</span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
