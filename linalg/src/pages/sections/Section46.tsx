import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section46() {
  return (
    <LessonLayout sectionId={46}>
      {/* Introduction */}
      <p>
        <strong>Iterative methods</strong> solve large systems <InlineMath>Ax = b</InlineMath> by repeatedly
        improving an approximation. They're essential when <InlineMath>A</InlineMath> is too large to factor directly.
      </p>

      <h2>Basic Iteration</h2>

      <Definition title="Splitting Methods" className="my-6">
        <p>
          Write <InlineMath>A = M - N</InlineMath> and iterate:
        </p>
        <MathBlock>
          {`M\\mathbf{x}_{k+1} = N\\mathbf{x}_k + \\mathbf{b}`}
        </MathBlock>
        <p className="mt-2">
          Or equivalently: <InlineMath>{`\\mathbf{x}_{k+1} = M^{-1}N\\mathbf{x}_k + M^{-1}\\mathbf{b}`}</InlineMath>
        </p>
      </Definition>

      <Theorem
        title="Convergence"
        className="my-6"
        proof={
          <>
            <p><strong>Error recurrence:</strong> Let <InlineMath>{`\\mathbf{e}_k = \\mathbf{x}_k - \\mathbf{x}^*`}</InlineMath> be the error. Since <InlineMath>{`\\mathbf{x}^*`}</InlineMath> is the fixed point:</p>
            <MathBlock>{`\\mathbf{e}_{k+1} = M^{-1}N\\mathbf{e}_k = (M^{-1}N)^k \\mathbf{e}_0`}</MathBlock>
            <p className="mt-2"><strong>Power of matrix:</strong> For <InlineMath>{`B = M^{-1}N`}</InlineMath>, <InlineMath>{`B^k \\to 0`}</InlineMath> as <InlineMath>{`k \\to \\infty`}</InlineMath> if and only if <InlineMath>{`\\rho(B) < 1`}</InlineMath>.</p>
            <p className="mt-2"><strong>Why:</strong> If <InlineMath>{`\\lambda`}</InlineMath> is an eigenvalue of <InlineMath>{`B`}</InlineMath> with <InlineMath>{`|\\lambda| \\geq 1`}</InlineMath>, then <InlineMath>{`B^k\\mathbf{v} = \\lambda^k \\mathbf{v}`}</InlineMath> does not converge to zero.</p>
            <p className="mt-2">Conversely, if <InlineMath>\\rho(B) &lt; 1</InlineMath>, all eigenvalue components decay, and <InlineMath>\\|B^k\\| \\to 0</InlineMath>.</p>
          </>
        }
      >
        <p>
          The iteration converges if and only if:
        </p>
        <MathBlock>
          {`\\rho(M^{-1}N) < 1`}
        </MathBlock>
        <p className="mt-2">
          where <InlineMath>\rho</InlineMath> is the <strong>spectral radius</strong> (largest <InlineMath>|\lambda|</InlineMath>).
        </p>
      </Theorem>

      <h2>Classical Methods</h2>

      <Definition title="Jacobi Iteration" className="my-6">
        <p>
          Split <InlineMath>A = D - L - U</InlineMath> (diagonal, lower, upper):
        </p>
        <MathBlock>
          {`x_i^{(k+1)} = \\frac{1}{a_{ii}}\\left(b_i - \\sum_{j \\neq i} a_{ij}x_j^{(k)}\\right)`}
        </MathBlock>
        <p className="mt-2">
          Update all components simultaneously using old values.
        </p>
      </Definition>

      <Definition title="Gauss-Seidel Iteration" className="my-6">
        <p>
          Use new values as soon as they're computed:
        </p>
        <MathBlock>
          {`x_i^{(k+1)} = \\frac{1}{a_{ii}}\\left(b_i - \\sum_{j < i} a_{ij}x_j^{(k+1)} - \\sum_{j > i} a_{ij}x_j^{(k)}\\right)`}
        </MathBlock>
        <p className="mt-2">
          Often converges faster than Jacobi.
        </p>
      </Definition>

      <Example title="Comparing Jacobi and Gauss-Seidel" className="my-6">
        <p>For diagonally dominant systems, both converge, but Gauss-Seidel is typically 2× faster.</p>
        <p className="mt-2">
          For <InlineMath>{`A = \\begin{bmatrix} 4 & 1 \\\\\\\\ 1 & 3 \\end{bmatrix}`}</InlineMath>:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>Jacobi: <InlineMath>\rho \approx 0.25</InlineMath></li>
          <li>Gauss-Seidel: <InlineMath>\rho \approx 0.0625</InlineMath></li>
        </ul>
      </Example>

      <h2>Krylov Subspace Methods</h2>

      <Definition title="Krylov Subspace" className="my-6">
        <p>
          The <InlineMath>k</InlineMath>th <strong>Krylov subspace</strong> is:
        </p>
        <MathBlock>
          {`\\mathcal{K}_k(A, \\mathbf{b}) = \\text{span}\\{\\mathbf{b}, A\\mathbf{b}, A^2\\mathbf{b}, \\ldots, A^{k-1}\\mathbf{b}\\}`}
        </MathBlock>
        <p className="mt-2">
          Find the best approximate solution in this subspace.
        </p>
      </Definition>

      <Theorem
        title="Conjugate Gradient Method"
        className="my-6"
        proof={
          <>
            <p><strong>Objective:</strong> The minimum of <InlineMath>{`f(\\mathbf{x}) = \\frac{1}{2}\\mathbf{x}^TA\\mathbf{x} - \\mathbf{b}^T\\mathbf{x}`}</InlineMath> occurs where <InlineMath>{`\\nabla f = A\\mathbf{x} - \\mathbf{b} = \\mathbf{0}`}</InlineMath>, i.e., at the solution of <InlineMath>{`A\\mathbf{x} = \\mathbf{b}`}</InlineMath>.</p>
            <p className="mt-2"><strong>Finite termination:</strong> CG generates search directions <InlineMath>{`\\mathbf{p}_0, \\mathbf{p}_1, \\ldots`}</InlineMath> that are <InlineMath>A</InlineMath>-conjugate: <InlineMath>{`\\mathbf{p}_i^T A \\mathbf{p}_j = 0`}</InlineMath> for <InlineMath>{`i \\neq j`}</InlineMath>.</p>
            <p className="mt-2">These form a basis for the Krylov subspace <InlineMath>{`\\mathcal{K}_k`}</InlineMath>. Since <InlineMath>{`\\dim \\mathcal{K}_n = n`}</InlineMath>, exact solution is found in at most <InlineMath>n</InlineMath> steps.</p>
            <p className="mt-2"><strong>Error bound:</strong> Using Chebyshev polynomials:</p>
            <MathBlock>{`\\|\\mathbf{e}_k\\|_A \\leq 2\\left(\\frac{\\sqrt{\\kappa}-1}{\\sqrt{\\kappa}+1}\\right)^k \\|\\mathbf{e}_0\\|_A`}</MathBlock>
            <p className="mt-2">where <InlineMath>{`\\|\\mathbf{e}\\|_A = \\sqrt{\\mathbf{e}^T A \\mathbf{e}}`}</InlineMath> is the energy norm.</p>
          </>
        }
      >
        <p>
          For symmetric positive definite <InlineMath>A</InlineMath>, <strong>conjugate gradients (CG)</strong>
          minimizes:
        </p>
        <MathBlock>
          {`f(\\mathbf{x}) = \\frac{1}{2}\\mathbf{x}^TA\\mathbf{x} - \\mathbf{b}^T\\mathbf{x}`}
        </MathBlock>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Converges in at most <InlineMath>n</InlineMath> steps (exact arithmetic)</li>
          <li>In practice, convergence rate depends on <InlineMath>\kappa(A)</InlineMath></li>
          <li>Error decreases by factor <InlineMath>{`\\frac{\\sqrt{\\kappa}-1}{\\sqrt{\\kappa}+1}`}</InlineMath> per step</li>
        </ul>
      </Theorem>

      <div className="bg-dark-800/50 rounded-xl p-4 my-6 border border-primary-500/20">
        <p className="font-semibold text-primary-400 mb-2">GMRES</p>
        <p className="text-dark-300 text-sm">
          For non-symmetric <InlineMath>A</InlineMath>, <strong>GMRES</strong> (Generalized Minimal Residual) minimizes
          <InlineMath>{`\\|A\\mathbf{x} - \\mathbf{b}\\|`}</InlineMath> over the Krylov subspace. It's the workhorse of
          modern iterative solvers.
        </p>
      </div>

      <h2>Preconditioning</h2>

      <Definition title="Preconditioning" className="my-6">
        <p>
          Solve <InlineMath>{`M^{-1}Ax = M^{-1}b`}</InlineMath> instead of <InlineMath>Ax = b</InlineMath>:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Choose <InlineMath>M \approx A</InlineMath> but easy to invert</li>
          <li>Goal: <InlineMath>{`\\kappa(M^{-1}A) \\ll \\kappa(A)`}</InlineMath></li>
          <li>Common: incomplete LU, Jacobi, multigrid</li>
        </ul>
      </Definition>

      <h2>Key Ideas</h2>

      <div className="bg-gradient-to-br from-primary-500/10 to-dark-800/50 rounded-xl p-6 my-6 border border-primary-500/20">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span>Iterative methods: <InlineMath>{`\\mathbf{x}_{k+1} = B\\mathbf{x}_k + \\mathbf{c}`}</InlineMath>. Converge if <InlineMath>\rho(B) &lt; 1</InlineMath>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span>Jacobi: update all simultaneously. Gauss-Seidel: use new values immediately.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span>Krylov methods (CG, GMRES): search in <InlineMath>{`\\text{span}\\{b, Ab, A^2b, \\\\ldots}\\`}</InlineMath>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span>CG for SPD matrices; GMRES for general matrices.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">5.</span>
            <span>Preconditioning reduces condition number and speeds convergence.</span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
