import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section29() {
  return (
    <LessonLayout sectionId={29}>
      {/* Introduction */}
      <p>
        The <strong>Singular Value Decomposition</strong> provides the perfect bases for both the
        domain and range of a matrix. It reveals the fundamental structure of any linear transformation.
      </p>

      <h2>The SVD Factorization</h2>

      <Theorem
        title="The Singular Value Decomposition"
        className="my-6"
        proof={
          <>
            <p><strong>Existence:</strong> The matrix <InlineMath>{`A^TA`}</InlineMath> is symmetric positive semidefinite, so it has an orthonormal eigenbasis <InlineMath>{`v_1, \\ldots, v_n`}</InlineMath> with eigenvalues <InlineMath>{`\\lambda_1 \\geq \\cdots \\geq \\lambda_n \\geq 0`}</InlineMath>.</p>
            <p className="mt-2">Define <InlineMath>{`\\sigma_i = \\sqrt{\\lambda_i}`}</InlineMath>. For <InlineMath>{`i \\leq r`}</InlineMath> (where <InlineMath>{`\\sigma_i > 0`}</InlineMath>), set <InlineMath>{`u_i = Av_i/\\sigma_i`}</InlineMath>.</p>
            <p className="mt-2"><strong>Orthonormality of <InlineMath>{`u_i`}</InlineMath>:</strong> For <InlineMath>{`i, j \\leq r`}</InlineMath>:</p>
            <MathBlock>{`u_i^T u_j = \\frac{v_i^T A^T A v_j}{\\sigma_i \\sigma_j} = \\frac{\\lambda_j \\delta_{ij}}{\\sigma_i \\sigma_j} = \\delta_{ij}`}</MathBlock>
            <p className="mt-2">Extend <InlineMath>{`\\{u_1, \\ldots, u_r\\}`}</InlineMath> to an orthonormal basis <InlineMath>{`\\{u_1, \\ldots, u_m\\}`}</InlineMath> of <InlineMath>{`\\mathbb{R}^m`}</InlineMath>.</p>
            <p className="mt-2"><strong>Verification:</strong> <InlineMath>{`Av_i = \\sigma_i u_i`}</InlineMath> by construction, so <InlineMath>{`AV = U\\Sigma`}</InlineMath>, giving <InlineMath>{`A = U\\Sigma V^T`}</InlineMath>.</p>
          </>
        }
      >
        <p>
          Every <InlineMath>m \times n</InlineMath> matrix <InlineMath>A</InlineMath> of rank <InlineMath>r</InlineMath> has the factorization:
        </p>
        <MathBlock>
          {`A = U\\Sigma V^T`}
        </MathBlock>
        <ul className="list-disc list-inside mt-2 space-y-2">
          <li><InlineMath>U</InlineMath> is <InlineMath>m \times m</InlineMath> orthogonal: columns are <strong>left singular vectors</strong></li>
          <li><InlineMath>V</InlineMath> is <InlineMath>n \times n</InlineMath> orthogonal: columns are <strong>right singular vectors</strong></li>
          <li><InlineMath>\Sigma</InlineMath> is <InlineMath>m \times n</InlineMath> diagonal with <strong>singular values</strong> <InlineMath>{`\\sigma_1 \\geq \\sigma_2 \\geq \\cdots \\geq \\sigma_r > 0`}</InlineMath></li>
        </ul>
      </Theorem>

      <h2>The Reduced SVD</h2>

      <Definition title="Reduced SVD" className="my-6">
        <p>
          The <strong>reduced (thin) SVD</strong> uses only the nonzero singular values:
        </p>
        <MathBlock>
          {`A = U_r \\Sigma_r V_r^T`}
        </MathBlock>
        <p className="mt-2">where:</p>
        <ul className="list-disc list-inside space-y-1">
          <li><InlineMath>U_r</InlineMath> is <InlineMath>m \times r</InlineMath> (first <InlineMath>r</InlineMath> columns of <InlineMath>U</InlineMath>)</li>
          <li><InlineMath>\Sigma_r</InlineMath> is <InlineMath>r \times r</InlineMath> diagonal</li>
          <li><InlineMath>V_r</InlineMath> is <InlineMath>n \times r</InlineMath> (first <InlineMath>r</InlineMath> columns of <InlineMath>V</InlineMath>)</li>
        </ul>
      </Definition>

      <Example title="SVD of a Rank-2 Matrix" className="my-6">
        <MathBlock>
          {`A = \\begin{bmatrix} 1 & 1 \\\\ 1 & 1 \\\\ 0 & 0 \\end{bmatrix}`}
        </MathBlock>
        <p className="mt-2">
          Rank 1, so only one nonzero singular value: <InlineMath>\sigma_1 = 2</InlineMath>
        </p>
        <MathBlock>
          {`A = \\begin{bmatrix} 1/\\sqrt{2} \\\\ 1/\\sqrt{2} \\\\ 0 \\end{bmatrix} [2] \\begin{bmatrix} 1/\\sqrt{2} & 1/\\sqrt{2} \\end{bmatrix}`}
        </MathBlock>
      </Example>

      <h2>Relationship to Eigenvalues</h2>

      <Theorem
        title="SVD and Eigenvalues"
        className="my-6"
        proof={
          <>
            <p>Starting from <InlineMath>{`A = U\\Sigma V^T`}</InlineMath>:</p>
            <MathBlock>{`A^TA = (V\\Sigma^T U^T)(U\\Sigma V^T) = V(\\Sigma^T\\Sigma)V^T`}</MathBlock>
            <p className="mt-2">This is a spectral decomposition of <InlineMath>A^TA</InlineMath> with eigenvectors <InlineMath>v_i</InlineMath> (columns of <InlineMath>V</InlineMath>) and eigenvalues <InlineMath>\\sigma_i^2</InlineMath> (diagonal entries of <InlineMath>\\Sigma^T\\Sigma</InlineMath>).</p>
            <p className="mt-2">Similarly:</p>
            <MathBlock>{`AA^T = (U\\Sigma V^T)(V\\Sigma^T U^T) = U(\\Sigma\\Sigma^T)U^T`}</MathBlock>
            <p className="mt-2">So <InlineMath>u_i</InlineMath> (columns of <InlineMath>U</InlineMath>) are eigenvectors of <InlineMath>AA^T</InlineMath> with eigenvalues <InlineMath>\\sigma_i^2</InlineMath>.</p>
            <p className="mt-2">The nonzero eigenvalues of <InlineMath>A^TA</InlineMath> and <InlineMath>AA^T</InlineMath> are identical (both equal <InlineMath>\\sigma_1^2, \\ldots, \\sigma_r^2</InlineMath>).</p>
          </>
        }
      >
        <p>The SVD is connected to eigenvalue problems:</p>
        <MathBlock>
          {`A^TA = V\\Sigma^T\\Sigma V^T \\quad \\text{(eigenvalues } \\sigma_i^2\\text{)}`}
        </MathBlock>
        <MathBlock>
          {`AA^T = U\\Sigma\\Sigma^T U^T \\quad \\text{(eigenvalues } \\sigma_i^2\\text{)}`}
        </MathBlock>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Columns of <InlineMath>V</InlineMath> are eigenvectors of <InlineMath>A^TA</InlineMath></li>
          <li>Columns of <InlineMath>U</InlineMath> are eigenvectors of <InlineMath>AA^T</InlineMath></li>
          <li>Singular values are square roots of these eigenvalues</li>
        </ul>
      </Theorem>

      <h2>The Four Fundamental Subspaces</h2>

      <Theorem
        title="SVD and Subspaces"
        className="my-6"
        proof={
          <>
            <p><strong>Column space:</strong> <InlineMath>{`A = \\sum_{i=1}^r \\sigma_i u_i v_i^T`}</InlineMath>, so every column of <InlineMath>{`A`}</InlineMath> is a combination of <InlineMath>{`u_1, \\ldots, u_r`}</InlineMath>. Thus <InlineMath>{`C(A) = \\text{span}(u_1, \\ldots, u_r)`}</InlineMath>.</p>
            <p className="mt-2"><strong>Row space:</strong> <InlineMath>{`A^T = \\sum_{i=1}^r \\sigma_i v_i u_i^T`}</InlineMath>, so <InlineMath>{`C(A^T) = \\text{span}(v_1, \\ldots, v_r)`}</InlineMath>.</p>
            <p className="mt-2"><strong>Nullspace:</strong> For <InlineMath>{`j > r`}</InlineMath>, <InlineMath>{`Av_j = U\\Sigma V^T v_j = U\\Sigma e_j = 0`}</InlineMath> since column <InlineMath>{`j`}</InlineMath> of <InlineMath>{`\\Sigma`}</InlineMath> is zero. Thus <InlineMath>{`v_{r+1}, \\ldots, v_n`}</InlineMath> span <InlineMath>{`N(A)`}</InlineMath>.</p>
            <p className="mt-2"><strong>Left nullspace:</strong> Similarly, <InlineMath>{`A^Tu_j = 0`}</InlineMath> for <InlineMath>{`j > r`}</InlineMath>, so <InlineMath>{`u_{r+1}, \\ldots, u_m`}</InlineMath> span <InlineMath>{`N(A^T)`}</InlineMath>.</p>
          </>
        }
      >
        <p>The SVD reveals the four fundamental subspaces:</p>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Column space</strong> <InlineMath>C(A)</InlineMath>: first <InlineMath>r</InlineMath> columns of <InlineMath>U</InlineMath></li>
          <li><strong>Row space</strong> <InlineMath>C(A^T)</InlineMath>: first <InlineMath>r</InlineMath> columns of <InlineMath>V</InlineMath></li>
          <li><strong>Nullspace</strong> <InlineMath>N(A)</InlineMath>: last <InlineMath>n-r</InlineMath> columns of <InlineMath>V</InlineMath></li>
          <li><strong>Left nullspace</strong> <InlineMath>N(A^T)</InlineMath>: last <InlineMath>m-r</InlineMath> columns of <InlineMath>U</InlineMath></li>
        </ul>
      </Theorem>

      <div className="bg-dark-800/50 rounded-xl p-4 my-6 border border-primary-500/20">
        <p className="font-semibold text-primary-400 mb-2">The Power of the SVD</p>
        <p className="text-dark-300 text-sm">
          The SVD chooses orthonormal bases for all four subspaces simultaneously.
          This is the "right" way to understand any matrix: <InlineMath>A</InlineMath> maps the
          row space basis <InlineMath>v_i</InlineMath> to the column space basis <InlineMath>\sigma_i u_i</InlineMath>.
        </p>
      </div>

      <h2>The Matrix as a Linear Map</h2>

      <Theorem
        title="What A Does"
        className="my-6"
        proof={
          <>
            <p>From <InlineMath>{`A = U\\Sigma V^T`}</InlineMath> and <InlineMath>{`V^Tv_i = e_i`}</InlineMath>:</p>
            <MathBlock>{`Av_i = U\\Sigma V^T v_i = U\\Sigma e_i = U(\\sigma_i e_i) = \\sigma_i u_i`}</MathBlock>
            <p className="mt-2">for <InlineMath>{`i \\leq r`}</InlineMath> where <InlineMath>{`\\sigma_i > 0`}</InlineMath>.</p>
            <p className="mt-2">For <InlineMath>{`i > r`}</InlineMath>, the <InlineMath>{`i`}</InlineMath>-th column of <InlineMath>{`\\Sigma`}</InlineMath> is zero:</p>
            <MathBlock>{`Av_i = U\\Sigma e_i = U \\cdot 0 = 0`}</MathBlock>
            <p className="mt-2">This shows geometrically: <InlineMath>{`A`}</InlineMath> takes the orthonormal basis <InlineMath>{`\\{v_i\\}`}</InlineMath> and maps the first <InlineMath>{`r`}</InlineMath> vectors to <InlineMath>{`\\sigma_i u_i`}</InlineMath> (stretched and rotated), while the rest are sent to zero.</p>
          </>
        }
      >
        <p>The SVD shows exactly what <InlineMath>A</InlineMath> does:</p>
        <MathBlock>
          {`Av_i = \\sigma_i u_i \\quad \\text{for } i = 1, \\ldots, r`}
        </MathBlock>
        <MathBlock>
          {`Av_i = 0 \\quad \\text{for } i = r+1, \\ldots, n`}
        </MathBlock>
        <p className="mt-2">
          <InlineMath>A</InlineMath> stretches <InlineMath>v_i</InlineMath> by <InlineMath>\sigma_i</InlineMath> and rotates it to <InlineMath>u_i</InlineMath>.
        </p>
      </Theorem>

      <Example title="Geometric Interpretation" className="my-6">
        <p>
          A 2×2 matrix maps the unit circle to an ellipse:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>The semi-axes of the ellipse have lengths <InlineMath>\sigma_1</InlineMath> and <InlineMath>\sigma_2</InlineMath></li>
          <li>The directions are given by <InlineMath>u_1</InlineMath> and <InlineMath>u_2</InlineMath></li>
          <li>The preimages of the axes are <InlineMath>v_1</InlineMath> and <InlineMath>v_2</InlineMath></li>
        </ul>
      </Example>

      <h2>Key Ideas</h2>

      <div className="bg-gradient-to-br from-primary-500/10 to-dark-800/50 rounded-xl p-6 my-6 border border-primary-500/20">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span><InlineMath>A = U\Sigma V^T</InlineMath>: orthogonal × diagonal × orthogonal.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span>Singular values <InlineMath>{`\\sigma_i = \\sqrt{\\lambda_i}`}</InlineMath> from eigenvalues of <InlineMath>A^TA</InlineMath>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span><InlineMath>V</InlineMath> gives orthonormal bases for row space and nullspace.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span><InlineMath>U</InlineMath> gives orthonormal bases for column space and left nullspace.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">5.</span>
            <span><InlineMath>Av_i = \sigma_i u_i</InlineMath> shows how <InlineMath>A</InlineMath> maps basis to basis.</span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
