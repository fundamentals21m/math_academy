import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section28() {
  return (
    <LessonLayout sectionId={28}>
      {/* Introduction */}
      <p>
        <strong>Image processing</strong> is a perfect application of linear algebra. A grayscale image is
        simply a matrix of pixel values, and operations like compression, denoising, and filtering are
        matrix operations.
      </p>

      <h2>Images as Matrices</h2>

      <Definition title="Image Matrix" className="my-6">
        <p>
          A grayscale image with <InlineMath>m</InlineMath> rows and <InlineMath>n</InlineMath> columns is an <InlineMath>m \times n</InlineMath> matrix:
        </p>
        <MathBlock>
          {`A = \\begin{bmatrix} a_{11} & a_{12} & \\cdots & a_{1n} \\\\ a_{21} & a_{22} & \\cdots & a_{2n} \\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ a_{m1} & a_{m2} & \\cdots & a_{mn} \\end{bmatrix}`}
        </MathBlock>
        <p className="mt-2">
          Each entry <InlineMath>{`a_{ij}`}</InlineMath> is a pixel intensity (0 = black, 255 = white for 8-bit images).
        </p>
      </Definition>

      <h2>The Singular Value Decomposition</h2>

      <Theorem
        title="SVD for Images"
        className="my-6"
        proof={
          <>
            <p>The SVD exists for any matrix. The construction uses eigenvalues of <InlineMath>A^TA</InlineMath> and <InlineMath>AA^T</InlineMath>:</p>
            <p className="mt-2"><strong>Step 1:</strong> <InlineMath>A^TA</InlineMath> is symmetric and positive semidefinite, so it has orthonormal eigenvectors <InlineMath>v_i</InlineMath> with eigenvalues <InlineMath>\lambda_i \geq 0</InlineMath>.</p>
            <p className="mt-2"><strong>Step 2:</strong> Define <InlineMath>{`\\sigma_i = \\sqrt{\\lambda_i}`}</InlineMath> and order so <InlineMath>{`\\sigma_1 \\geq \\sigma_2 \\geq \\cdots \\geq 0`}</InlineMath>.</p>
            <p className="mt-2"><strong>Step 3:</strong> For nonzero <InlineMath>\sigma_i</InlineMath>, define <InlineMath>{`u_i = Av_i/\\sigma_i`}</InlineMath>. These are orthonormal since:</p>
            <MathBlock>{`u_i^T u_j = \\frac{(Av_i)^T(Av_j)}{\\sigma_i\\sigma_j} = \\frac{v_i^T A^T A v_j}{\\sigma_i\\sigma_j} = \\frac{\\lambda_j v_i^T v_j}{\\sigma_i\\sigma_j} = \\delta_{ij}`}</MathBlock>
            <p className="mt-2"><strong>Step 4:</strong> Extend <InlineMath>{`\\{u_1, \\ldots, u_r\\}`}</InlineMath> to an orthonormal basis of <InlineMath>{`\\mathbb{R}^m`}</InlineMath>. Then <InlineMath>{`AV = U\\Sigma`}</InlineMath>, giving <InlineMath>{`A = U\\Sigma V^T`}</InlineMath>.</p>
          </>
        }
      >
        <p>
          Any <InlineMath>m \times n</InlineMath> matrix <InlineMath>A</InlineMath> can be factored as:
        </p>
        <MathBlock>
          {`A = U\\Sigma V^T`}
        </MathBlock>
        <p className="mt-2">where:</p>
        <ul className="list-disc list-inside space-y-1">
          <li><InlineMath>U</InlineMath> is <InlineMath>m \times m</InlineMath> orthogonal (left singular vectors)</li>
          <li><InlineMath>\Sigma</InlineMath> is <InlineMath>m \times n</InlineMath> diagonal (singular values <InlineMath>\sigma_1 \geq \sigma_2 \geq \cdots \geq 0</InlineMath>)</li>
          <li><InlineMath>V</InlineMath> is <InlineMath>n \times n</InlineMath> orthogonal (right singular vectors)</li>
        </ul>
      </Theorem>

      <h2>Low-Rank Approximation</h2>

      <Theorem
        title="Eckart-Young Theorem"
        className="my-6"
        proof={
          <>
            <p>We prove this for the Frobenius norm. For any rank-<InlineMath>k</InlineMath> matrix <InlineMath>B</InlineMath>:</p>
            <MathBlock>{`\\|A - B\\|_F^2 = \\sum_{i,j}(a_{ij} - b_{ij})^2`}</MathBlock>
            <p className="mt-2">Using orthogonal invariance of the Frobenius norm and the SVD <InlineMath>{`A = U\\Sigma V^T`}</InlineMath>:</p>
            <MathBlock>{`\\|A - B\\|_F^2 = \\|U^T(A-B)V\\|_F^2 = \\|\\Sigma - U^TBV\\|_F^2`}</MathBlock>
            <p className="mt-2">Let <InlineMath>{`C = U^TBV`}</InlineMath>. Since <InlineMath>B</InlineMath> has rank <InlineMath>k</InlineMath>, so does <InlineMath>C</InlineMath>.</p>
            <p className="mt-2">The minimum <InlineMath>{`\\|\\Sigma - C\\|_F^2`}</InlineMath> over rank-<InlineMath>k</InlineMath> matrices <InlineMath>C</InlineMath> is achieved when <InlineMath>C</InlineMath> keeps the first <InlineMath>k</InlineMath> diagonal entries of <InlineMath>\Sigma</InlineMath> and zeros the rest:</p>
            <MathBlock>{`\\|A - A_k\\|_F^2 = \\sigma_{k+1}^2 + \\cdots + \\sigma_r^2`}</MathBlock>
          </>
        }
      >
        <p>
          The best rank-<InlineMath>k</InlineMath> approximation to <InlineMath>A</InlineMath> uses the first <InlineMath>k</InlineMath> singular values:
        </p>
        <MathBlock>
          {`A_k = \\sum_{i=1}^{k} \\sigma_i \\mathbf{u}_i \\mathbf{v}_i^T`}
        </MathBlock>
        <p className="mt-2">
          This minimizes <InlineMath>\|A - A_k\|</InlineMath> over all rank-<InlineMath>k</InlineMath> matrices.
        </p>
      </Theorem>

      <Example title="Image Compression" className="my-6">
        <p>
          A 1000×1000 image requires 1,000,000 numbers to store.
        </p>
        <p className="mt-2">
          With rank-50 SVD approximation, we store:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>50 singular values</li>
          <li>50 columns of <InlineMath>U</InlineMath> (50,000 numbers)</li>
          <li>50 columns of <InlineMath>V</InlineMath> (50,000 numbers)</li>
        </ul>
        <p className="mt-2 text-primary-400">
          Total: ~100,000 numbers = 90% compression!
        </p>
      </Example>

      <h2>Sum of Rank-One Matrices</h2>

      <Definition title="Outer Product Form" className="my-6">
        <p>
          The SVD writes <InlineMath>A</InlineMath> as a sum of rank-one matrices:
        </p>
        <MathBlock>
          {`A = \\sigma_1 \\mathbf{u}_1 \\mathbf{v}_1^T + \\sigma_2 \\mathbf{u}_2 \\mathbf{v}_2^T + \\cdots + \\sigma_r \\mathbf{u}_r \\mathbf{v}_r^T`}
        </MathBlock>
        <p className="mt-2">
          Each <InlineMath>{`\\mathbf{u}_i \\mathbf{v}_i^T`}</InlineMath> is an <InlineMath>m \times n</InlineMath> matrix with rank 1.
          The singular values tell us the importance of each component.
        </p>
      </Definition>

      <div className="bg-dark-800/50 rounded-xl p-4 my-6 border border-primary-500/20">
        <p className="font-semibold text-primary-400 mb-2">Image Processing Applications</p>
        <ul className="list-disc list-inside text-dark-300 text-sm space-y-1">
          <li><strong>Compression:</strong> Keep only large singular values</li>
          <li><strong>Denoising:</strong> Small singular values often represent noise</li>
          <li><strong>Face recognition:</strong> "Eigenfaces" from SVD of face images</li>
          <li><strong>Background removal:</strong> Separate foreground from low-rank background</li>
        </ul>
      </div>

      <h2>Computing the SVD</h2>

      <Theorem
        title="SVD from Eigenvalues"
        className="my-6"
        proof={
          <>
            <p>From the SVD <InlineMath>{`A = U\\Sigma V^T`}</InlineMath>, compute <InlineMath>A^TA</InlineMath> and <InlineMath>AA^T</InlineMath>:</p>
            <MathBlock>{`A^TA = (V\\Sigma^T U^T)(U\\Sigma V^T) = V\\Sigma^T\\Sigma V^T`}</MathBlock>
            <p className="mt-2">Since <InlineMath>{`U^TU = I`}</InlineMath>. The matrix <InlineMath>{`\\Sigma^T\\Sigma`}</InlineMath> is diagonal with entries <InlineMath>\\sigma_i^2</InlineMath>.</p>
            <p className="mt-2">Thus <InlineMath>A^TAV = V(\\Sigma^T\\Sigma)</InlineMath>, showing that columns of <InlineMath>V</InlineMath> are eigenvectors of <InlineMath>A^TA</InlineMath> with eigenvalues <InlineMath>\\sigma_i^2</InlineMath>.</p>
            <p className="mt-2">Similarly:</p>
            <MathBlock>{`AA^T = (U\\Sigma V^T)(V\\Sigma^T U^T) = U\\Sigma\\Sigma^T U^T`}</MathBlock>
            <p className="mt-2">So columns of <InlineMath>U</InlineMath> are eigenvectors of <InlineMath>AA^T</InlineMath> with the same eigenvalues <InlineMath>\\sigma_i^2</InlineMath>.</p>
          </>
        }
      >
        <p>The SVD is computed using eigenvalues:</p>
        <ul className="list-disc list-inside space-y-2">
          <li><InlineMath>A^TA = V\Sigma^T\Sigma V^T</InlineMath> — the <InlineMath>v_i</InlineMath> are eigenvectors of <InlineMath>A^TA</InlineMath></li>
          <li><InlineMath>AA^T = U\Sigma\Sigma^T U^T</InlineMath> — the <InlineMath>u_i</InlineMath> are eigenvectors of <InlineMath>AA^T</InlineMath></li>
          <li><InlineMath>{`\\sigma_i = \\sqrt{\\lambda_i}`}</InlineMath> where <InlineMath>\lambda_i</InlineMath> are eigenvalues of <InlineMath>A^TA</InlineMath></li>
        </ul>
      </Theorem>

      <Example title="2×2 SVD" className="my-6">
        <MathBlock>
          {`A = \\begin{bmatrix} 4 & 0 \\\\ 3 & -5 \\end{bmatrix}`}
        </MathBlock>
        <p className="mt-2">
          <InlineMath>{`A^TA = \\begin{bmatrix} 25 & -15 \\\\\\\\ -15 & 25 \\end{bmatrix}`}</InlineMath>
        </p>
        <p className="mt-2">
          Eigenvalues of <InlineMath>A^TA</InlineMath>: <InlineMath>\lambda_1 = 40</InlineMath>, <InlineMath>\lambda_2 = 10</InlineMath>
        </p>
        <p className="mt-2">
          Singular values: <InlineMath>{`\\sigma_1 = \\sqrt{40} \\approx 6.32`}</InlineMath>, <InlineMath>{`\\sigma_2 = \\sqrt{10} \\approx 3.16`}</InlineMath>
        </p>
      </Example>

      <h2>Key Ideas</h2>

      <div className="bg-gradient-to-br from-primary-500/10 to-dark-800/50 rounded-xl p-6 my-6 border border-primary-500/20">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span>Images are matrices; pixel values are matrix entries.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span><InlineMath>A = U\Sigma V^T</InlineMath> decomposes any matrix into orthogonal and diagonal parts.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span>The best rank-<InlineMath>k</InlineMath> approximation uses the <InlineMath>k</InlineMath> largest singular values.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span>SVD enables image compression by discarding small singular values.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">5.</span>
            <span>Singular values come from eigenvalues of <InlineMath>A^TA</InlineMath>.</span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
