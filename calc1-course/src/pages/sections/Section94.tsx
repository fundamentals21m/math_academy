import { LessonLayout } from '../../components/layout/LessonLayout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';

export default function Section94() {
  return (
    <LessonLayout sectionId={94}>
      <h1>Best Approximation</h1>

      <p>
        When a vector doesn't lie in a subspace, we seek the <strong>best approximation</strong>—the
        closest point in the subspace. This leads to the powerful method of <strong>least squares</strong>,
        with applications ranging from data fitting to solving overdetermined systems.
      </p>

      <h2>The Approximation Problem</h2>

      <Callout type="definition" title="Best Approximation">
        <p>
          Given a vector <InlineMath>{`\\mathbf{b}`}</InlineMath> and a subspace <InlineMath>{`W`}</InlineMath> of an inner
          product space <InlineMath>{`V`}</InlineMath>, the <strong>best approximation</strong> to <InlineMath>{`\\mathbf{b}`}</InlineMath> in <InlineMath>{`W`}</InlineMath> is the
          vector <InlineMath>{`\\hat{\\mathbf{b}} \\in W`}</InlineMath> that minimizes:
        </p>
        <MathBlock>{`\\|\\mathbf{b} - \\hat{\\mathbf{b}}\\|`}</MathBlock>
      </Callout>

      <Callout type="theorem" title="Best Approximation Theorem">
        <p>
          Let <InlineMath>{`W`}</InlineMath> be a finite-dimensional subspace of an inner product space <InlineMath>{`V`}</InlineMath>.
          For any <InlineMath>{`\\mathbf{b} \\in V`}</InlineMath>:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>There exists a unique best approximation <InlineMath>{`\\hat{\\mathbf{b}} \\in W`}</InlineMath></li>
          <li><InlineMath>{`\\hat{\\mathbf{b}} = \\text{proj}_W(\\mathbf{b})`}</InlineMath> (the orthogonal projection)</li>
          <li>The error <InlineMath>{`\\mathbf{b} - \\hat{\\mathbf{b}}`}</InlineMath> is orthogonal to <InlineMath>{`W`}</InlineMath></li>
        </ol>
      </Callout>

      <Callout type="info" title="Why Projection is Best">
        <p>
          For any <InlineMath>{`\\mathbf{w} \\in W`}</InlineMath>, by the Pythagorean theorem:
        </p>
        <MathBlock>{`\\|\\mathbf{b} - \\mathbf{w}\\|^2 = \\|\\mathbf{b} - \\hat{\\mathbf{b}}\\|^2 + \\|\\hat{\\mathbf{b}} - \\mathbf{w}\\|^2 \\geq \\|\\mathbf{b} - \\hat{\\mathbf{b}}\\|^2`}</MathBlock>
        <p>
          Equality holds only when <InlineMath>{`\\mathbf{w} = \\hat{\\mathbf{b}}`}</InlineMath>.
        </p>
      </Callout>

      <h2>Projection Formula</h2>

      <Callout type="theorem" title="Projection with Orthonormal Basis">
        <p>
          If <InlineMath>{`\\{\\mathbf{u}_1, \\ldots, \\mathbf{u}_k\\}`}</InlineMath> is an orthonormal basis for <InlineMath>{`W`}</InlineMath>, then:
        </p>
        <MathBlock>{`\\hat{\\mathbf{b}} = \\text{proj}_W(\\mathbf{b}) = \\sum_{i=1}^{k} \\langle \\mathbf{b}, \\mathbf{u}_i \\rangle \\mathbf{u}_i`}</MathBlock>
      </Callout>

      <Callout type="example" title="Best Approximation in ℝ³">
        <p>
          Find the best approximation to <InlineMath>{`\\mathbf{b} = (1, 2, 3)`}</InlineMath> in the
          plane <InlineMath>{`W = \\text{span}\\{(1, 0, 0), (0, 1, 0)\\}`}</InlineMath>.
        </p>
        <p><strong>Solution:</strong> The standard basis vectors are already orthonormal.</p>
        <MathBlock>{`\\hat{\\mathbf{b}} = \\langle \\mathbf{b}, \\mathbf{e}_1 \\rangle \\mathbf{e}_1 + \\langle \\mathbf{b}, \\mathbf{e}_2 \\rangle \\mathbf{e}_2 = 1 \\cdot (1, 0, 0) + 2 \\cdot (0, 1, 0) = (1, 2, 0)`}</MathBlock>
        <p>
          Error: <InlineMath>{`\\mathbf{b} - \\hat{\\mathbf{b}} = (0, 0, 3)`}</InlineMath>, which is orthogonal to <InlineMath>{`W`}</InlineMath>. ✓
        </p>
      </Callout>

      <h2>Least Squares Problems</h2>

      <Callout type="definition" title="Least Squares Problem">
        <p>
          Given a system <InlineMath>{`A\\mathbf{x} = \\mathbf{b}`}</InlineMath> that may have no solution
          (when <InlineMath>{`\\mathbf{b} \\notin \\text{Col}(A)`}</InlineMath>), the <strong>least squares solution</strong> is
          the vector <InlineMath>{`\\hat{\\mathbf{x}}`}</InlineMath> that minimizes:
        </p>
        <MathBlock>{`\\|A\\mathbf{x} - \\mathbf{b}\\|^2`}</MathBlock>
      </Callout>

      <Callout type="info" title="Geometric Interpretation">
        <p>
          We seek <InlineMath>{`\\hat{\\mathbf{x}}`}</InlineMath> such that <InlineMath>{`A\\hat{\\mathbf{x}}`}</InlineMath> is the best
          approximation to <InlineMath>{`\\mathbf{b}`}</InlineMath> in <InlineMath>{`\\text{Col}(A)`}</InlineMath>.
        </p>
        <MathBlock>{`A\\hat{\\mathbf{x}} = \\text{proj}_{\\text{Col}(A)}(\\mathbf{b})`}</MathBlock>
      </Callout>

      <Callout type="theorem" title="Normal Equations">
        <p>
          The least squares solution <InlineMath>{`\\hat{\\mathbf{x}}`}</InlineMath> satisfies the <strong>normal equations</strong>:
        </p>
        <MathBlock>{`A^T A \\hat{\\mathbf{x}} = A^T \\mathbf{b}`}</MathBlock>
        <p>
          If <InlineMath>{`A`}</InlineMath> has linearly independent columns, then <InlineMath>{`A^T A`}</InlineMath> is invertible and:
        </p>
        <MathBlock>{`\\hat{\\mathbf{x}} = (A^T A)^{-1} A^T \\mathbf{b}`}</MathBlock>
      </Callout>

      <Callout type="info" title="Derivation">
        <p>
          The error <InlineMath>{`\\mathbf{b} - A\\hat{\\mathbf{x}}`}</InlineMath> must be orthogonal to <InlineMath>{`\\text{Col}(A)`}</InlineMath>.
        </p>
        <p>This means <InlineMath>{`\\mathbf{b} - A\\hat{\\mathbf{x}} \\perp`}</InlineMath> every column of <InlineMath>{`A`}</InlineMath>:</p>
        <MathBlock>{`A^T(\\mathbf{b} - A\\hat{\\mathbf{x}}) = \\mathbf{0}`}</MathBlock>
        <p>Rearranging gives the normal equations.</p>
      </Callout>

      <h2>Linear Regression</h2>

      <Callout type="example" title="Fitting a Line">
        <p>
          Find the best-fit line <InlineMath>{`y = c_0 + c_1 x`}</InlineMath> through the
          points <InlineMath>{`(0, 1), (1, 2), (2, 4)`}</InlineMath>.
        </p>
        <p><strong>Solution:</strong> Set up the system <InlineMath>{`A\\mathbf{c} = \\mathbf{b}`}</InlineMath>:</p>
        <MathBlock>{`\\begin{pmatrix} 1 & 0 \\ 1 & 1 \\ 1 & 2 \\end{pmatrix} \\begin{pmatrix} c_0 \\ c_1 \\end{pmatrix} = \\begin{pmatrix} 1 \\ 2 \\ 4 \\end{pmatrix}`}</MathBlock>
        <p>Compute <InlineMath>{`A^T A`}</InlineMath> and <InlineMath>{`A^T \\mathbf{b}`}</InlineMath>:</p>
        <MathBlock>{`A^T A = \\begin{pmatrix} 3 & 3 \\ 3 & 5 \\end{pmatrix}, \\quad A^T \\mathbf{b} = \\begin{pmatrix} 7 \\ 10 \\end{pmatrix}`}</MathBlock>
        <p>Solve the normal equations:</p>
        <MathBlock>{`\\begin{pmatrix} 3 & 3 \\ 3 & 5 \\end{pmatrix} \\begin{pmatrix} c_0 \\ c_1 \\end{pmatrix} = \\begin{pmatrix} 7 \\ 10 \\end{pmatrix}`}</MathBlock>
        <MathBlock>{`c_0 = \\frac{5}{6}, \\quad c_1 = \\frac{3}{2}`}</MathBlock>
        <p>Best-fit line: <InlineMath>{`y = \\frac{5}{6} + \\frac{3}{2}x`}</InlineMath></p>
      </Callout>

      <Callout type="example" title="Fitting a Parabola">
        <p>
          For a quadratic fit <InlineMath>{`y = c_0 + c_1 x + c_2 x^2`}</InlineMath>, the design matrix becomes:
        </p>
        <MathBlock>{`A = \\begin{pmatrix} 1 & x_1 & x_1^2 \\ 1 & x_2 & x_2^2 \\ \\vdots & \\vdots & \\vdots \\ 1 & x_n & x_n^2 \\end{pmatrix}`}</MathBlock>
        <p>The same normal equations method applies.</p>
      </Callout>

      <h2>Least Squares via QR</h2>

      <Callout type="theorem" title="QR Solution">
        <p>
          If <InlineMath>{`A = QR`}</InlineMath> (QR factorization with <InlineMath>{`Q`}</InlineMath> orthonormal, <InlineMath>{`R`}</InlineMath> upper triangular), then:
        </p>
        <MathBlock>{`R\\hat{\\mathbf{x}} = Q^T \\mathbf{b}`}</MathBlock>
        <p>This is more numerically stable than using the normal equations directly.</p>
      </Callout>

      <Callout type="info" title="Why QR is Better">
        <p>
          Computing <InlineMath>{`A^T A`}</InlineMath> can amplify numerical errors (condition number squares).
          The QR approach avoids this by working with <InlineMath>{`Q`}</InlineMath> and <InlineMath>{`R`}</InlineMath> directly:
        </p>
        <MathBlock>{`A^T A \\hat{\\mathbf{x}} = A^T \\mathbf{b} \\implies R^T R \\hat{\\mathbf{x}} = R^T Q^T \\mathbf{b} \\implies R\\hat{\\mathbf{x}} = Q^T \\mathbf{b}`}</MathBlock>
      </Callout>

      <h2>Function Approximation</h2>

      <Callout type="example" title="Best Polynomial Approximation">
        <p>
          Find the best linear approximation to <InlineMath>{`f(x) = e^x`}</InlineMath> on <InlineMath>{`[0, 1]`}</InlineMath> in
          the inner product space with:
        </p>
        <MathBlock>{`\\langle f, g \\rangle = \\int_0^1 f(x) g(x) \\, dx`}</MathBlock>
        <p><strong>Solution:</strong> Seek <InlineMath>{`p(x) = c_0 + c_1 x`}</InlineMath> minimizing <InlineMath>{`\\|e^x - p(x)\\|`}</InlineMath>.</p>
        <p>Apply Gram-Schmidt to <InlineMath>{`\\{1, x\\}`}</InlineMath>:</p>
        <MathBlock>{`\\|1\\|^2 = \\int_0^1 1 \\, dx = 1, \\quad \\mathbf{u}_1 = 1`}</MathBlock>
        <MathBlock>{`\\langle x, 1 \\rangle = \\int_0^1 x \\, dx = \\frac{1}{2}`}</MathBlock>
        <MathBlock>{`\\mathbf{w}_2 = x - \\frac{1}{2}, \\quad \\|\\mathbf{w}_2\\|^2 = \\int_0^1 \\left(x - \\frac{1}{2}\\right)^2 dx = \\frac{1}{12}`}</MathBlock>
        <MathBlock>{`\\mathbf{u}_2 = \\sqrt{12}\\left(x - \\frac{1}{2}\\right) = 2\\sqrt{3}\\left(x - \\frac{1}{2}\\right)`}</MathBlock>
        <p>Project <InlineMath>{`e^x`}</InlineMath>:</p>
        <MathBlock>{`\\langle e^x, 1 \\rangle = e - 1, \\quad \\langle e^x, \\mathbf{u}_2 \\rangle = 2\\sqrt{3}(1) = 2\\sqrt{3}`}</MathBlock>
        <p>The best approximation is <InlineMath>{`p(x) \\approx 0.718 + 1.69x`}</InlineMath>.</p>
      </Callout>

      <h2>The Pseudoinverse</h2>

      <Callout type="definition" title="Moore-Penrose Pseudoinverse">
        <p>
          For any matrix <InlineMath>{`A`}</InlineMath>, the <strong>pseudoinverse</strong> <InlineMath>{`A^+`}</InlineMath> gives the least squares solution:
        </p>
        <MathBlock>{`\\hat{\\mathbf{x}} = A^+ \\mathbf{b}`}</MathBlock>
        <p>
          When <InlineMath>{`A`}</InlineMath> has independent columns: <InlineMath>{`A^+ = (A^T A)^{-1} A^T`}</InlineMath>
        </p>
      </Callout>

      <Callout type="theorem" title="Properties of Pseudoinverse">
        <ol className="list-decimal pl-6 space-y-2">
          <li><InlineMath>{`A A^+ A = A`}</InlineMath></li>
          <li><InlineMath>{`A^+ A A^+ = A^+`}</InlineMath></li>
          <li><InlineMath>{`(A A^+)^T = A A^+`}</InlineMath> (projection onto <InlineMath>{`\\text{Col}(A)`}</InlineMath>)</li>
          <li><InlineMath>{`(A^+ A)^T = A^+ A`}</InlineMath> (projection onto <InlineMath>{`\\text{Row}(A)`}</InlineMath>)</li>
        </ol>
      </Callout>

      <h2>Residuals and Error Analysis</h2>

      <Callout type="definition" title="Residual">
        <p>
          The <strong>residual</strong> is the error vector:
        </p>
        <MathBlock>{`\\mathbf{r} = \\mathbf{b} - A\\hat{\\mathbf{x}}`}</MathBlock>
        <p>
          The least squares minimizes <InlineMath>{`\\|\\mathbf{r}\\|^2 = \\sum r_i^2`}</InlineMath>.
        </p>
      </Callout>

      <Callout type="theorem" title="Residual Properties">
        <ol className="list-decimal pl-6 space-y-2">
          <li><InlineMath>{`\\mathbf{r} \\perp \\text{Col}(A)`}</InlineMath></li>
          <li><InlineMath>{`A^T \\mathbf{r} = \\mathbf{0}`}</InlineMath></li>
          <li><InlineMath>{`\\|\\mathbf{b}\\|^2 = \\|A\\hat{\\mathbf{x}}\\|^2 + \\|\\mathbf{r}\\|^2`}</InlineMath> (Pythagorean theorem)</li>
        </ol>
      </Callout>

      <Callout type="example" title="Computing Residual">
        <p>
          For the line-fitting example with <InlineMath>{`\\hat{\\mathbf{x}} = (5/6, 3/2)^T`}</InlineMath>:
        </p>
        <MathBlock>{`A\\hat{\\mathbf{x}} = \\begin{pmatrix} 5/6 \\ 7/3 \\ 23/6 \\end{pmatrix}, \\quad \\mathbf{r} = \\mathbf{b} - A\\hat{\\mathbf{x}} = \\begin{pmatrix} 1/6 \\ -1/3 \\ 1/6 \\end{pmatrix}`}</MathBlock>
        <MathBlock>{`\\|\\mathbf{r}\\|^2 = \\frac{1}{36} + \\frac{1}{9} + \\frac{1}{36} = \\frac{1}{6}`}</MathBlock>
      </Callout>

      <h2>Applications</h2>

      <Callout type="info" title="Common Applications">
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Linear regression:</strong> Fitting lines/curves to data</li>
          <li><strong>Signal processing:</strong> Denoising, filtering</li>
          <li><strong>Computer graphics:</strong> Surface fitting</li>
          <li><strong>Control systems:</strong> System identification</li>
          <li><strong>Machine learning:</strong> Linear models, feature extraction</li>
          <li><strong>Statistics:</strong> Parameter estimation</li>
        </ul>
      </Callout>

      <h2>Summary</h2>

      <Callout type="info" title="Key Concepts">
        <p><strong>Best approximation:</strong> <InlineMath>{`\\hat{\\mathbf{b}} = \\text{proj}_W(\\mathbf{b})`}</InlineMath> minimizes <InlineMath>{`\\|\\mathbf{b} - \\hat{\\mathbf{b}}\\|`}</InlineMath></p>

        <p className="mt-3"><strong>Least squares problem:</strong> Minimize <InlineMath>{`\\|A\\mathbf{x} - \\mathbf{b}\\|^2`}</InlineMath></p>

        <p className="mt-3"><strong>Normal equations:</strong></p>
        <MathBlock>{`A^T A \\hat{\\mathbf{x}} = A^T \\mathbf{b}`}</MathBlock>

        <p className="mt-3"><strong>Solution (when columns independent):</strong></p>
        <MathBlock>{`\\hat{\\mathbf{x}} = (A^T A)^{-1} A^T \\mathbf{b}`}</MathBlock>

        <p className="mt-3"><strong>QR method:</strong> <InlineMath>{`R\\hat{\\mathbf{x}} = Q^T \\mathbf{b}`}</InlineMath> (more stable)</p>

        <p className="mt-3"><strong>Key properties:</strong></p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Residual <InlineMath>{`\\mathbf{r} = \\mathbf{b} - A\\hat{\\mathbf{x}}`}</InlineMath> is orthogonal to <InlineMath>{`\\text{Col}(A)`}</InlineMath></li>
          <li><InlineMath>{`\\|\\mathbf{b}\\|^2 = \\|A\\hat{\\mathbf{x}}\\|^2 + \\|\\mathbf{r}\\|^2`}</InlineMath></li>
        </ul>
      </Callout>
    </LessonLayout>
  );
}
