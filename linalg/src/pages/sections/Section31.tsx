import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section31() {
  return (
    <LessonLayout sectionId={31}>
      {/* Introduction */}
      <p>
        The SVD has beautiful <strong>geometric meaning</strong>. Every matrix transformation can be
        decomposed into a rotation, a scaling along coordinate axes, and another rotation.
      </p>

      <h2>Geometric Interpretation</h2>

      <Theorem
        title="Three Steps of Multiplication by A"
        className="my-6"
        proof={
          <>
            <p>Let <InlineMath>{`\\mathbf{x}`}</InlineMath> be any vector. Using <InlineMath>{`A = U\\Sigma V^T`}</InlineMath>:</p>
            <p className="mt-2"><strong>Step 1:</strong> <InlineMath>{`\\mathbf{y} = V^T\\mathbf{x}`}</InlineMath> expresses <InlineMath>{`\\mathbf{x}`}</InlineMath> in the basis of right singular vectors. Since <InlineMath>V</InlineMath> is orthogonal, this is a rotation/reflection.</p>
            <p className="mt-2"><strong>Step 2:</strong> <InlineMath>{`\\mathbf{z} = \\Sigma\\mathbf{y}`}</InlineMath> stretches component <InlineMath>i</InlineMath> by <InlineMath>\\sigma_i</InlineMath>. Components beyond rank <InlineMath>r</InlineMath> become zero.</p>
            <p className="mt-2"><strong>Step 3:</strong> <InlineMath>{`A\\mathbf{x} = U\\mathbf{z}`}</InlineMath> rotates from coordinate axes to the left singular vector basis.</p>
            <p className="mt-2">Composing: <InlineMath>{`A\\mathbf{x} = U(\\Sigma(V^T\\mathbf{x}))`}</InlineMath>. The transformation decomposes into: rotation → scaling → rotation.</p>
          </>
        }
      >
        <p>
          The factorization <InlineMath>A = U\Sigma V^T</InlineMath> means:
        </p>
        <MathBlock>
          {`A\\mathbf{x} = U(\\Sigma(V^T\\mathbf{x}))`}
        </MathBlock>
        <ol className="list-decimal list-inside mt-2 space-y-2">
          <li><InlineMath>V^T</InlineMath>: Rotate/reflect to align with coordinate axes</li>
          <li><InlineMath>\Sigma</InlineMath>: Stretch by <InlineMath>\sigma_i</InlineMath> along each axis</li>
          <li><InlineMath>U</InlineMath>: Rotate/reflect to final position</li>
        </ol>
      </Theorem>

      <Example title="Unit Circle to Ellipse" className="my-6">
        <p>
          A 2×2 matrix <InlineMath>A</InlineMath> maps the unit circle to an ellipse:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>The ellipse has semi-axes of lengths <InlineMath>\sigma_1</InlineMath> and <InlineMath>\sigma_2</InlineMath></li>
          <li>The axes point in directions <InlineMath>u_1</InlineMath> and <InlineMath>u_2</InlineMath></li>
          <li>The preimages of these axes on the circle are <InlineMath>v_1</InlineMath> and <InlineMath>v_2</InlineMath></li>
        </ul>
        <p className="mt-2 text-primary-400">
          Singular values are the semi-axis lengths of the output ellipse!
        </p>
      </Example>

      <h2>Matrix Norms</h2>

      <Definition title="Spectral Norm" className="my-6">
        <p>
          The <strong>spectral norm</strong> (2-norm) of a matrix is:
        </p>
        <MathBlock>
          {`\\|A\\|_2 = \\sigma_1 = \\max_{\\mathbf{x} \\neq 0} \\frac{\\|A\\mathbf{x}\\|}{\\|\\mathbf{x}\\|}`}
        </MathBlock>
        <p className="mt-2">
          The largest singular value is the maximum "stretching factor" of <InlineMath>A</InlineMath>.
        </p>
      </Definition>

      <Definition title="Frobenius Norm" className="my-6">
        <p>
          The <strong>Frobenius norm</strong> is:
        </p>
        <MathBlock>
          {`\\|A\\|_F = \\sqrt{\\sum_{i,j} a_{ij}^2} = \\sqrt{\\sigma_1^2 + \\sigma_2^2 + \\cdots + \\sigma_r^2}`}
        </MathBlock>
        <p className="mt-2">
          Sum of squared entries equals sum of squared singular values.
        </p>
      </Definition>

      <h2>Condition Number</h2>

      <Definition title="Condition Number" className="my-6">
        <p>
          The <strong>condition number</strong> of an invertible matrix is:
        </p>
        <MathBlock>
          {`\\kappa(A) = \\frac{\\sigma_1}{\\sigma_r} = \\|A\\|_2 \\|A^{-1}\\|_2`}
        </MathBlock>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><InlineMath>\kappa \approx 1</InlineMath>: well-conditioned (nearly orthogonal)</li>
          <li><InlineMath>\kappa \gg 1</InlineMath>: ill-conditioned (nearly singular)</li>
        </ul>
      </Definition>

      <div className="bg-dark-800/50 rounded-xl p-4 my-6 border border-amber-500/20">
        <p className="font-semibold text-amber-400 mb-2">Numerical Sensitivity</p>
        <p className="text-dark-300 text-sm">
          If <InlineMath>\kappa(A) = 10^6</InlineMath>, solving <InlineMath>Ax = b</InlineMath> can lose about 6 digits
          of accuracy due to roundoff. Watch out for ill-conditioned systems!
        </p>
      </div>

      <h2>Pseudoinverse</h2>

      <Theorem
        title="The Moore-Penrose Pseudoinverse"
        className="my-6"
        proof={
          <>
            <p>Define <InlineMath>{`A^+ = V\\Sigma^+ U^T`}</InlineMath> where <InlineMath>\\Sigma^+</InlineMath> is <InlineMath>n \\times m</InlineMath> with entries <InlineMath>1/\\sigma_i</InlineMath> for nonzero <InlineMath>\\sigma_i</InlineMath>.</p>
            <p className="mt-2"><strong>For invertible <InlineMath>A</InlineMath>:</strong> All <InlineMath>{`\\sigma_i > 0`}</InlineMath>, so <InlineMath>{`\\Sigma^+ = \\Sigma^{-1}`}</InlineMath>. Then:</p>
            <MathBlock>{`A^+ = V\\Sigma^{-1}U^T = (U\\Sigma V^T)^{-1} = A^{-1}`}</MathBlock>
            <p className="mt-2"><strong>Least-squares:</strong> The normal equations <InlineMath>{`A^TAx = A^Tb`}</InlineMath> have solution:</p>
            <MathBlock>{`x = (A^TA)^{-1}A^Tb = (V\\Sigma^T\\Sigma V^T)^{-1}V\\Sigma^T U^T b`}</MathBlock>
            <p className="mt-2">When <InlineMath>A</InlineMath> has full column rank, this simplifies to <InlineMath>{`x = V(\\Sigma^T\\Sigma)^{-1}\\Sigma^T U^T b = A^+b`}</InlineMath>.</p>
            <p className="mt-2">For rank-deficient <InlineMath>A</InlineMath>, <InlineMath>A^+b</InlineMath> gives the minimum-norm least-squares solution.</p>
          </>
        }
      >
        <p>
          The <strong>pseudoinverse</strong> of <InlineMath>A</InlineMath> is:
        </p>
        <MathBlock>
          {`A^+ = V\\Sigma^+ U^T`}
        </MathBlock>
        <p className="mt-2">
          where <InlineMath>\Sigma^+</InlineMath> has <InlineMath>1/\sigma_i</InlineMath> on the diagonal (for nonzero <InlineMath>\sigma_i</InlineMath>).
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>If <InlineMath>A</InlineMath> is invertible: <InlineMath>{`A^+ = A^{-1}`}</InlineMath></li>
          <li>For any <InlineMath>A</InlineMath>: <InlineMath>A^+b</InlineMath> is the least-squares solution to <InlineMath>Ax = b</InlineMath></li>
        </ul>
      </Theorem>

      <Example title="Pseudoinverse of a Rank-1 Matrix" className="my-6">
        <MathBlock>
          {`A = \\begin{bmatrix} 1 & 2 \\\\ 2 & 4 \\end{bmatrix} = \\sigma_1 u_1 v_1^T`}
        </MathBlock>
        <p className="mt-2">
          With <InlineMath>\sigma_1 = 5</InlineMath>:
        </p>
        <MathBlock>
          {`A^+ = \\frac{1}{\\sigma_1} v_1 u_1^T = \\frac{1}{25}\\begin{bmatrix} 1 & 2 \\\\ 2 & 4 \\end{bmatrix}`}
        </MathBlock>
      </Example>

      <h2>Polar Decomposition</h2>

      <Theorem
        title="Polar Decomposition"
        className="my-6"
        proof={
          <>
            <p>Starting from the SVD <InlineMath>{`A = U\\Sigma V^T`}</InlineMath>, insert <InlineMath>{`I = VV^T`}</InlineMath>:</p>
            <MathBlock>{`A = U\\Sigma V^T = (UV^T)(V\\Sigma V^T) = QS`}</MathBlock>
            <p className="mt-2"><strong><InlineMath>Q = UV^T</InlineMath> is orthogonal:</strong></p>
            <MathBlock>{`Q^TQ = (UV^T)^T(UV^T) = VU^TUV^T = VV^T = I`}</MathBlock>
            <p className="mt-2"><strong><InlineMath>{`S = V\\Sigma V^T`}</InlineMath> is symmetric positive semidefinite:</strong></p>
            <p>• Symmetric: <InlineMath>{`S^T = (V\\Sigma V^T)^T = V\\Sigma^T V^T = V\\Sigma V^T = S`}</InlineMath></p>
            <p>• Positive semidefinite: <InlineMath>{`x^TSx = x^TV\\Sigma V^Tx = (V^Tx)^T\\Sigma(V^Tx) = \\sum \\sigma_i y_i^2 \\geq 0`}</InlineMath></p>
            <p className="mt-2">Note: <InlineMath>{`S^2 = V\\Sigma^2 V^T = A^TA`}</InlineMath>, so <InlineMath>{`S = \\sqrt{A^TA}`}</InlineMath>.</p>
          </>
        }
      >
        <p>
          Any matrix can be written as:
        </p>
        <MathBlock>
          {`A = QS = (UV^T)(V\\Sigma V^T)`}
        </MathBlock>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><InlineMath>Q = UV^T</InlineMath> is orthogonal (rotation/reflection)</li>
          <li><InlineMath>S = V\Sigma V^T</InlineMath> is symmetric positive semidefinite (stretching)</li>
        </ul>
        <p className="mt-2">
          Like polar form for complex numbers: <InlineMath>{`z = re^{i\\\\theta} = (\\text{rotation})(\\text{scaling})`}</InlineMath>.
        </p>
      </Theorem>

      <h2>Key Ideas</h2>

      <div className="bg-gradient-to-br from-primary-500/10 to-dark-800/50 rounded-xl p-6 my-6 border border-primary-500/20">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span><InlineMath>A = U\Sigma V^T</InlineMath>: rotate, stretch along axes, rotate again.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span>Singular values are semi-axis lengths of the image ellipse.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span><InlineMath>\|A\|_2 = \sigma_1</InlineMath>; <InlineMath>{`\\|A\\|_F = \\sqrt{\\\\sum \\sigma_i^2}`}</InlineMath>.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span>Condition number <InlineMath>\kappa = \sigma_1/\sigma_r</InlineMath> measures sensitivity to errors.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">5.</span>
            <span>Pseudoinverse: <InlineMath>A^+ = V\Sigma^+ U^T</InlineMath> solves least-squares problems.</span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
