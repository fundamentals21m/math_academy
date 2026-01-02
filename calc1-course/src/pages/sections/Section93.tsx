import { LessonLayout } from '../../components/layout/LessonLayout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';

export default function Section93() {
  return (
    <LessonLayout sectionId={93}>
      <h1>Orthogonality</h1>

      <p>
        Orthogonality generalizes the concept of perpendicularity to abstract inner product spaces.
        Orthogonal and orthonormal bases simplify many computations, and the <strong>Gram-Schmidt process</strong> provides
        a systematic way to construct them from any basis.
      </p>

      <h2>Orthogonal and Orthonormal Sets</h2>

      <Callout type="definition" title="Orthogonal Set">
        <p>
          A set of vectors <InlineMath>{`\\{\\mathbf{v}_1, \\ldots, \\mathbf{v}_k\\}`}</InlineMath> in an inner product
          space is <strong>orthogonal</strong> if:
        </p>
        <MathBlock>{`\\langle \\mathbf{v}_i, \\mathbf{v}_j \\rangle = 0 \\quad \\text{for all } i \\neq j`}</MathBlock>
        <p>
          The set is <strong>orthonormal</strong> if, in addition, each vector has unit norm:
        </p>
        <MathBlock>{`\\|\\mathbf{v}_i\\| = 1 \\quad \\text{for all } i`}</MathBlock>
      </Callout>

      <Callout type="example" title="Standard Basis is Orthonormal">
        <p>
          In <InlineMath>{`\\mathbb{R}^n`}</InlineMath> with the dot product, the standard
          basis <InlineMath>{`\\{\\mathbf{e}_1, \\ldots, \\mathbf{e}_n\\}`}</InlineMath> is orthonormal:
        </p>
        <MathBlock>{`\\mathbf{e}_i \\cdot \\mathbf{e}_j = \\delta_{ij} = \\begin{cases} 1 & i = j \\ 0 & i \\neq j \\end{cases}`}</MathBlock>
      </Callout>

      <Callout type="example" title="Orthogonal Set in ℝ³">
        <p>
          The vectors <InlineMath>{`\\mathbf{v}_1 = (1, 1, 0)`}</InlineMath>, <InlineMath>{`\\mathbf{v}_2 = (1, -1, 0)`}</InlineMath>,
          <InlineMath>{`\\mathbf{v}_3 = (0, 0, 1)`}</InlineMath> are orthogonal:
        </p>
        <MathBlock>{`\\mathbf{v}_1 \\cdot \\mathbf{v}_2 = 1 - 1 + 0 = 0`}</MathBlock>
        <MathBlock>{`\\mathbf{v}_1 \\cdot \\mathbf{v}_3 = 0 + 0 + 0 = 0`}</MathBlock>
        <MathBlock>{`\\mathbf{v}_2 \\cdot \\mathbf{v}_3 = 0 + 0 + 0 = 0`}</MathBlock>
        <p>
          But not orthonormal since <InlineMath>{`\\|\\mathbf{v}_1\\| = \\|\\mathbf{v}_2\\| = \\sqrt{2} \\neq 1`}</InlineMath>.
        </p>
      </Callout>

      <h2>Properties of Orthogonal Sets</h2>

      <Callout type="theorem" title="Orthogonal Sets are Independent">
        <p>
          If <InlineMath>{`\\{\\mathbf{v}_1, \\ldots, \\mathbf{v}_k\\}`}</InlineMath> is an orthogonal set of
          <strong> nonzero</strong> vectors, then the set is linearly independent.
        </p>
      </Callout>

      <Callout type="info" title="Proof">
        <p>
          Suppose <InlineMath>{`c_1\\mathbf{v}_1 + \\cdots + c_k\\mathbf{v}_k = \\mathbf{0}`}</InlineMath>.
        </p>
        <p>
          Taking the inner product with <InlineMath>{`\\mathbf{v}_j`}</InlineMath>:
        </p>
        <MathBlock>{`\\langle c_1\\mathbf{v}_1 + \\cdots + c_k\\mathbf{v}_k, \\mathbf{v}_j \\rangle = c_j\\langle \\mathbf{v}_j, \\mathbf{v}_j \\rangle = c_j\\|\\mathbf{v}_j\\|^2 = 0`}</MathBlock>
        <p>
          Since <InlineMath>{`\\|\\mathbf{v}_j\\| \\neq 0`}</InlineMath>, we have <InlineMath>{`c_j = 0`}</InlineMath> for each <InlineMath>{`j`}</InlineMath>.
        </p>
      </Callout>

      <Callout type="theorem" title="Coordinates in Orthonormal Basis">
        <p>
          If <InlineMath>{`\\{\\mathbf{u}_1, \\ldots, \\mathbf{u}_n\\}`}</InlineMath> is an orthonormal basis
          for <InlineMath>{`V`}</InlineMath>, then for any <InlineMath>{`\\mathbf{v} \\in V`}</InlineMath>:
        </p>
        <MathBlock>{`\\mathbf{v} = \\sum_{i=1}^{n} \\langle \\mathbf{v}, \\mathbf{u}_i \\rangle \\mathbf{u}_i`}</MathBlock>
        <p>
          The coefficient <InlineMath>{`c_i = \\langle \\mathbf{v}, \\mathbf{u}_i \\rangle`}</InlineMath> is the
          <strong> projection</strong> of <InlineMath>{`\\mathbf{v}`}</InlineMath> onto <InlineMath>{`\\mathbf{u}_i`}</InlineMath>.
        </p>
      </Callout>

      <Callout type="example" title="Finding Coordinates">
        <p>
          Express <InlineMath>{`\\mathbf{v} = (3, 4)`}</InlineMath> in the orthonormal
          basis <InlineMath>{`\\mathbf{u}_1 = \\frac{1}{\\sqrt{2}}(1, 1)`}</InlineMath>, <InlineMath>{`\\mathbf{u}_2 = \\frac{1}{\\sqrt{2}}(1, -1)`}</InlineMath>.
        </p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`c_1 = \\langle \\mathbf{v}, \\mathbf{u}_1 \\rangle = \\frac{1}{\\sqrt{2}}(3 + 4) = \\frac{7}{\\sqrt{2}}`}</MathBlock>
        <MathBlock>{`c_2 = \\langle \\mathbf{v}, \\mathbf{u}_2 \\rangle = \\frac{1}{\\sqrt{2}}(3 - 4) = -\\frac{1}{\\sqrt{2}}`}</MathBlock>
        <p>
          So <InlineMath>{`\\mathbf{v} = \\frac{7}{\\sqrt{2}}\\mathbf{u}_1 - \\frac{1}{\\sqrt{2}}\\mathbf{u}_2`}</InlineMath>.
        </p>
      </Callout>

      <h2>Orthogonal Projection</h2>

      <Callout type="definition" title="Projection onto a Subspace">
        <p>
          If <InlineMath>{`W`}</InlineMath> is a subspace of <InlineMath>{`V`}</InlineMath> with orthonormal
          basis <InlineMath>{`\\{\\mathbf{u}_1, \\ldots, \\mathbf{u}_k\\}`}</InlineMath>, the <strong>orthogonal projection</strong> of <InlineMath>{`\\mathbf{v}`}</InlineMath> onto <InlineMath>{`W`}</InlineMath> is:
        </p>
        <MathBlock>{`\\text{proj}_W(\\mathbf{v}) = \\sum_{i=1}^{k} \\langle \\mathbf{v}, \\mathbf{u}_i \\rangle \\mathbf{u}_i`}</MathBlock>
      </Callout>

      <Callout type="theorem" title="Projection Properties">
        <p>For the orthogonal projection onto subspace <InlineMath>{`W`}</InlineMath>:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li><InlineMath>{`\\text{proj}_W(\\mathbf{v}) \\in W`}</InlineMath></li>
          <li><InlineMath>{`\\mathbf{v} - \\text{proj}_W(\\mathbf{v}) \\perp W`}</InlineMath> (the residual is orthogonal to <InlineMath>{`W`}</InlineMath>)</li>
          <li><InlineMath>{`\\text{proj}_W(\\mathbf{v})`}</InlineMath> is the closest point in <InlineMath>{`W`}</InlineMath> to <InlineMath>{`\\mathbf{v}`}</InlineMath></li>
        </ol>
      </Callout>

      <h2>The Gram-Schmidt Process</h2>

      <Callout type="theorem" title="Gram-Schmidt Orthogonalization">
        <p>
          Given a basis <InlineMath>{`\\{\\mathbf{v}_1, \\ldots, \\mathbf{v}_n\\}`}</InlineMath> for a space <InlineMath>{`V`}</InlineMath>,
          the <strong>Gram-Schmidt process</strong> produces an orthonormal basis <InlineMath>{`\\{\\mathbf{u}_1, \\ldots, \\mathbf{u}_n\\}`}</InlineMath>:
        </p>
        <p className="mt-3"><strong>Step 1:</strong> Normalize the first vector:</p>
        <MathBlock>{`\\mathbf{u}_1 = \\frac{\\mathbf{v}_1}{\\|\\mathbf{v}_1\\|}`}</MathBlock>
        <p><strong>Step k:</strong> Subtract projections onto previous vectors, then normalize:</p>
        <MathBlock>{`\\mathbf{w}_k = \\mathbf{v}_k - \\sum_{j=1}^{k-1} \\langle \\mathbf{v}_k, \\mathbf{u}_j \\rangle \\mathbf{u}_j`}</MathBlock>
        <MathBlock>{`\\mathbf{u}_k = \\frac{\\mathbf{w}_k}{\\|\\mathbf{w}_k\\|}`}</MathBlock>
      </Callout>

      <Callout type="info" title="Why It Works">
        <p>
          At each step, <InlineMath>{`\\mathbf{w}_k`}</InlineMath> is <InlineMath>{`\\mathbf{v}_k`}</InlineMath> minus its projection
          onto <InlineMath>{`\\text{span}\\{\\mathbf{u}_1, \\ldots, \\mathbf{u}_{k-1}\\}`}</InlineMath>.
        </p>
        <p>
          This makes <InlineMath>{`\\mathbf{w}_k`}</InlineMath> orthogonal to all previous vectors. Normalizing
          gives a unit vector.
        </p>
      </Callout>

      <Callout type="example" title="Gram-Schmidt in ℝ³">
        <p>
          Apply Gram-Schmidt to <InlineMath>{`\\mathbf{v}_1 = (1, 1, 1)`}</InlineMath>, <InlineMath>{`\\mathbf{v}_2 = (0, 1, 1)`}</InlineMath>, <InlineMath>{`\\mathbf{v}_3 = (0, 0, 1)`}</InlineMath>.
        </p>
        <p><strong>Step 1:</strong> <InlineMath>{`\\|\\mathbf{v}_1\\| = \\sqrt{3}`}</InlineMath></p>
        <MathBlock>{`\\mathbf{u}_1 = \\frac{1}{\\sqrt{3}}(1, 1, 1)`}</MathBlock>

        <p><strong>Step 2:</strong></p>
        <MathBlock>{`\\langle \\mathbf{v}_2, \\mathbf{u}_1 \\rangle = \\frac{1}{\\sqrt{3}}(0 + 1 + 1) = \\frac{2}{\\sqrt{3}}`}</MathBlock>
        <MathBlock>{`\\mathbf{w}_2 = (0, 1, 1) - \\frac{2}{\\sqrt{3}} \\cdot \\frac{1}{\\sqrt{3}}(1, 1, 1) = (0, 1, 1) - \\frac{2}{3}(1, 1, 1) = \\left(-\\frac{2}{3}, \\frac{1}{3}, \\frac{1}{3}\\right)`}</MathBlock>
        <MathBlock>{`\\|\\mathbf{w}_2\\| = \\sqrt{\\frac{4}{9} + \\frac{1}{9} + \\frac{1}{9}} = \\sqrt{\\frac{6}{9}} = \\frac{\\sqrt{6}}{3}`}</MathBlock>
        <MathBlock>{`\\mathbf{u}_2 = \\frac{1}{\\sqrt{6}}(-2, 1, 1)`}</MathBlock>

        <p><strong>Step 3:</strong></p>
        <MathBlock>{`\\langle \\mathbf{v}_3, \\mathbf{u}_1 \\rangle = \\frac{1}{\\sqrt{3}}, \\quad \\langle \\mathbf{v}_3, \\mathbf{u}_2 \\rangle = \\frac{1}{\\sqrt{6}}`}</MathBlock>
        <MathBlock>{`\\mathbf{w}_3 = (0, 0, 1) - \\frac{1}{\\sqrt{3}} \\cdot \\frac{1}{\\sqrt{3}}(1, 1, 1) - \\frac{1}{\\sqrt{6}} \\cdot \\frac{1}{\\sqrt{6}}(-2, 1, 1)`}</MathBlock>
        <MathBlock>{`= (0, 0, 1) - \\frac{1}{3}(1, 1, 1) - \\frac{1}{6}(-2, 1, 1) = \\left(0, -\\frac{1}{2}, \\frac{1}{2}\\right)`}</MathBlock>
        <MathBlock>{`\\mathbf{u}_3 = \\frac{1}{\\sqrt{2}}(0, -1, 1)`}</MathBlock>
      </Callout>

      <h2>Orthogonal Matrices</h2>

      <Callout type="definition" title="Orthogonal Matrix">
        <p>
          A square matrix <InlineMath>{`Q`}</InlineMath> is <strong>orthogonal</strong> if:
        </p>
        <MathBlock>{`Q^T Q = Q Q^T = I`}</MathBlock>
        <p>
          Equivalently, <InlineMath>{`Q^{-1} = Q^T`}</InlineMath>.
        </p>
      </Callout>

      <Callout type="theorem" title="Characterizations">
        <p>The following are equivalent for a square matrix <InlineMath>{`Q`}</InlineMath>:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li><InlineMath>{`Q`}</InlineMath> is orthogonal</li>
          <li>The columns of <InlineMath>{`Q`}</InlineMath> form an orthonormal set</li>
          <li>The rows of <InlineMath>{`Q`}</InlineMath> form an orthonormal set</li>
          <li><InlineMath>{`\\|Q\\mathbf{x}\\| = \\|\\mathbf{x}\\|`}</InlineMath> for all <InlineMath>{`\\mathbf{x}`}</InlineMath> (preserves lengths)</li>
          <li><InlineMath>{`\\langle Q\\mathbf{x}, Q\\mathbf{y} \\rangle = \\langle \\mathbf{x}, \\mathbf{y} \\rangle`}</InlineMath> (preserves inner products)</li>
        </ol>
      </Callout>

      <Callout type="example" title="Rotation Matrices">
        <p>
          The rotation matrix in <InlineMath>{`\\mathbb{R}^2`}</InlineMath> is orthogonal:
        </p>
        <MathBlock>{`Q = \\begin{pmatrix} \\cos\\theta & -\\sin\\theta \\ \\sin\\theta & \\cos\\theta \\end{pmatrix}`}</MathBlock>
        <p>Verify: columns are orthonormal (both unit length, dot product is zero).</p>
      </Callout>

      <h2>QR Factorization</h2>

      <Callout type="theorem" title="QR Factorization">
        <p>
          Every matrix <InlineMath>{`A`}</InlineMath> with linearly independent columns can be factored as:
        </p>
        <MathBlock>{`A = QR`}</MathBlock>
        <p>
          where <InlineMath>{`Q`}</InlineMath> has orthonormal columns and <InlineMath>{`R`}</InlineMath> is upper triangular
          with positive diagonal entries.
        </p>
      </Callout>

      <Callout type="info" title="Connection to Gram-Schmidt">
        <p>
          The QR factorization is the matrix form of Gram-Schmidt:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Columns of <InlineMath>{`Q`}</InlineMath> are the orthonormal vectors <InlineMath>{`\\mathbf{u}_1, \\ldots, \\mathbf{u}_n`}</InlineMath></li>
          <li>Entries of <InlineMath>{`R`}</InlineMath> are the coefficients <InlineMath>{`r_{ij} = \\langle \\mathbf{v}_j, \\mathbf{u}_i \\rangle`}</InlineMath></li>
        </ul>
      </Callout>

      <Callout type="example" title="QR Example">
        <p>
          For <InlineMath>{`A = \\begin{pmatrix} 1 & 0 \\ 1 & 1 \\ 1 & 1 \\end{pmatrix}`}</InlineMath>:
        </p>
        <p><strong>Gram-Schmidt:</strong></p>
        <MathBlock>{`\\mathbf{u}_1 = \\frac{1}{\\sqrt{3}}(1, 1, 1)^T`}</MathBlock>
        <MathBlock>{`\\mathbf{u}_2 = \\frac{1}{\\sqrt{6}}(-2, 1, 1)^T`}</MathBlock>
        <p><strong>Result:</strong></p>
        <MathBlock>{`Q = \\begin{pmatrix} 1/\\sqrt{3} & -2/\\sqrt{6} \\ 1/\\sqrt{3} & 1/\\sqrt{6} \\ 1/\\sqrt{3} & 1/\\sqrt{6} \\end{pmatrix}, \\quad R = \\begin{pmatrix} \\sqrt{3} & 2/\\sqrt{3} \\ 0 & \\sqrt{6}/3 \\end{pmatrix}`}</MathBlock>
      </Callout>

      <h2>Orthogonal Complement</h2>

      <Callout type="definition" title="Orthogonal Complement">
        <p>
          The <strong>orthogonal complement</strong> of a subspace <InlineMath>{`W`}</InlineMath> is:
        </p>
        <MathBlock>{`W^\\perp = \\{\\mathbf{v} \\in V : \\langle \\mathbf{v}, \\mathbf{w} \\rangle = 0 \\text{ for all } \\mathbf{w} \\in W\\}`}</MathBlock>
      </Callout>

      <Callout type="theorem" title="Properties of Orthogonal Complement">
        <p>For a subspace <InlineMath>{`W`}</InlineMath> of finite-dimensional <InlineMath>{`V`}</InlineMath>:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li><InlineMath>{`W^\\perp`}</InlineMath> is a subspace</li>
          <li><InlineMath>{`V = W \\oplus W^\\perp`}</InlineMath> (direct sum)</li>
          <li><InlineMath>{`\\dim(W) + \\dim(W^\\perp) = \\dim(V)`}</InlineMath></li>
          <li><InlineMath>{`(W^\\perp)^\\perp = W`}</InlineMath></li>
        </ol>
      </Callout>

      <Callout type="theorem" title="Orthogonal Decomposition">
        <p>
          Every <InlineMath>{`\\mathbf{v} \\in V`}</InlineMath> can be written uniquely as:
        </p>
        <MathBlock>{`\\mathbf{v} = \\mathbf{w} + \\mathbf{w}^\\perp`}</MathBlock>
        <p>
          where <InlineMath>{`\\mathbf{w} \\in W`}</InlineMath> and <InlineMath>{`\\mathbf{w}^\\perp \\in W^\\perp`}</InlineMath>.
        </p>
        <p>
          Moreover, <InlineMath>{`\\mathbf{w} = \\text{proj}_W(\\mathbf{v})`}</InlineMath>.
        </p>
      </Callout>

      <h2>Summary</h2>

      <Callout type="info" title="Key Concepts">
        <p><strong>Orthogonal set:</strong> <InlineMath>{`\\langle \\mathbf{v}_i, \\mathbf{v}_j \\rangle = 0`}</InlineMath> for <InlineMath>{`i \\neq j`}</InlineMath></p>
        <p><strong>Orthonormal set:</strong> Orthogonal + unit vectors</p>

        <p className="mt-3"><strong>Key properties:</strong></p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Orthogonal nonzero vectors are linearly independent</li>
          <li>Coordinates in orthonormal basis: <InlineMath>{`c_i = \\langle \\mathbf{v}, \\mathbf{u}_i \\rangle`}</InlineMath></li>
        </ul>

        <p className="mt-3"><strong>Gram-Schmidt process:</strong></p>
        <MathBlock>{`\\mathbf{w}_k = \\mathbf{v}_k - \\sum_{j=1}^{k-1} \\langle \\mathbf{v}_k, \\mathbf{u}_j \\rangle \\mathbf{u}_j, \\quad \\mathbf{u}_k = \\frac{\\mathbf{w}_k}{\\|\\mathbf{w}_k\\|}`}</MathBlock>

        <p className="mt-3"><strong>Orthogonal matrix:</strong> <InlineMath>{`Q^T Q = I`}</InlineMath> (preserves lengths and angles)</p>

        <p className="mt-3"><strong>QR factorization:</strong> <InlineMath>{`A = QR`}</InlineMath> where <InlineMath>{`Q`}</InlineMath> orthonormal, <InlineMath>{`R`}</InlineMath> upper triangular</p>

        <p className="mt-3"><strong>Orthogonal complement:</strong> <InlineMath>{`\\dim(W) + \\dim(W^\\perp) = \\dim(V)`}</InlineMath></p>
      </Callout>
    </LessonLayout>
  );
}
