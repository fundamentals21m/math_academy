import { LessonLayout } from '../../components/layout/LessonLayout';
import { Math as MathInline, MathBlock } from '../../components/common/MathBlock';
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
          A set of vectors <MathInline>{`\\{\\mathbf{v}_1, \\ldots, \\mathbf{v}_k\\}`}</MathInline> in an inner product
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
          In <MathInline>{`\\mathbb{R}^n`}</MathInline> with the dot product, the standard
          basis <MathInline>{`\\{\\mathbf{e}_1, \\ldots, \\mathbf{e}_n\\}`}</MathInline> is orthonormal:
        </p>
        <MathBlock>{`\\mathbf{e}_i \\cdot \\mathbf{e}_j = \\delta_{ij} = \\begin{cases} 1 & i = j \\ 0 & i \\neq j \\end{cases}`}</MathBlock>
      </Callout>

      <Callout type="example" title="Orthogonal Set in ℝ³">
        <p>
          The vectors <MathInline>{`\\mathbf{v}_1 = (1, 1, 0)`}</MathInline>, <MathInline>{`\\mathbf{v}_2 = (1, -1, 0)`}</MathInline>,
          <MathInline>{`\\mathbf{v}_3 = (0, 0, 1)`}</MathInline> are orthogonal:
        </p>
        <MathBlock>{`\\mathbf{v}_1 \\cdot \\mathbf{v}_2 = 1 - 1 + 0 = 0`}</MathBlock>
        <MathBlock>{`\\mathbf{v}_1 \\cdot \\mathbf{v}_3 = 0 + 0 + 0 = 0`}</MathBlock>
        <MathBlock>{`\\mathbf{v}_2 \\cdot \\mathbf{v}_3 = 0 + 0 + 0 = 0`}</MathBlock>
        <p>
          But not orthonormal since <MathInline>{`\\|\\mathbf{v}_1\\| = \\|\\mathbf{v}_2\\| = \\sqrt{2} \\neq 1`}</MathInline>.
        </p>
      </Callout>

      <h2>Properties of Orthogonal Sets</h2>

      <Callout type="theorem" title="Orthogonal Sets are Independent">
        <p>
          If <MathInline>{`\\{\\mathbf{v}_1, \\ldots, \\mathbf{v}_k\\}`}</MathInline> is an orthogonal set of
          <strong> nonzero</strong> vectors, then the set is linearly independent.
        </p>
      </Callout>

      <Callout type="info" title="Proof">
        <p>
          Suppose <MathInline>{`c_1\\mathbf{v}_1 + \\cdots + c_k\\mathbf{v}_k = \\mathbf{0}`}</MathInline>.
        </p>
        <p>
          Taking the inner product with <MathInline>{`\\mathbf{v}_j`}</MathInline>:
        </p>
        <MathBlock>{`\\langle c_1\\mathbf{v}_1 + \\cdots + c_k\\mathbf{v}_k, \\mathbf{v}_j \\rangle = c_j\\langle \\mathbf{v}_j, \\mathbf{v}_j \\rangle = c_j\\|\\mathbf{v}_j\\|^2 = 0`}</MathBlock>
        <p>
          Since <MathInline>{`\\|\\mathbf{v}_j\\| \\neq 0`}</MathInline>, we have <MathInline>{`c_j = 0`}</MathInline> for each <MathInline>{`j`}</MathInline>.
        </p>
      </Callout>

      <Callout type="theorem" title="Coordinates in Orthonormal Basis">
        <p>
          If <MathInline>{`\\{\\mathbf{u}_1, \\ldots, \\mathbf{u}_n\\}`}</MathInline> is an orthonormal basis
          for <MathInline>{`V`}</MathInline>, then for any <MathInline>{`\\mathbf{v} \\in V`}</MathInline>:
        </p>
        <MathBlock>{`\\mathbf{v} = \\sum_{i=1}^{n} \\langle \\mathbf{v}, \\mathbf{u}_i \\rangle \\mathbf{u}_i`}</MathBlock>
        <p>
          The coefficient <MathInline>{`c_i = \\langle \\mathbf{v}, \\mathbf{u}_i \\rangle`}</MathInline> is the
          <strong> projection</strong> of <MathInline>{`\\mathbf{v}`}</MathInline> onto <MathInline>{`\\mathbf{u}_i`}</MathInline>.
        </p>
      </Callout>

      <Callout type="example" title="Finding Coordinates">
        <p>
          Express <MathInline>{`\\mathbf{v} = (3, 4)`}</MathInline> in the orthonormal
          basis <MathInline>{`\\mathbf{u}_1 = \\frac{1}{\\sqrt{2}}(1, 1)`}</MathInline>, <MathInline>{`\\mathbf{u}_2 = \\frac{1}{\\sqrt{2}}(1, -1)`}</MathInline>.
        </p>
        <p><strong>Solution:</strong></p>
        <MathBlock>{`c_1 = \\langle \\mathbf{v}, \\mathbf{u}_1 \\rangle = \\frac{1}{\\sqrt{2}}(3 + 4) = \\frac{7}{\\sqrt{2}}`}</MathBlock>
        <MathBlock>{`c_2 = \\langle \\mathbf{v}, \\mathbf{u}_2 \\rangle = \\frac{1}{\\sqrt{2}}(3 - 4) = -\\frac{1}{\\sqrt{2}}`}</MathBlock>
        <p>
          So <MathInline>{`\\mathbf{v} = \\frac{7}{\\sqrt{2}}\\mathbf{u}_1 - \\frac{1}{\\sqrt{2}}\\mathbf{u}_2`}</MathInline>.
        </p>
      </Callout>

      <h2>Orthogonal Projection</h2>

      <Callout type="definition" title="Projection onto a Subspace">
        <p>
          If <MathInline>{`W`}</MathInline> is a subspace of <MathInline>{`V`}</MathInline> with orthonormal
          basis <MathInline>{`\\{\\mathbf{u}_1, \\ldots, \\mathbf{u}_k\\}`}</MathInline>, the <strong>orthogonal projection</strong> of <MathInline>{`\\mathbf{v}`}</MathInline> onto <MathInline>{`W`}</MathInline> is:
        </p>
        <MathBlock>{`\\text{proj}_W(\\mathbf{v}) = \\sum_{i=1}^{k} \\langle \\mathbf{v}, \\mathbf{u}_i \\rangle \\mathbf{u}_i`}</MathBlock>
      </Callout>

      <Callout type="theorem" title="Projection Properties">
        <p>For the orthogonal projection onto subspace <MathInline>{`W`}</MathInline>:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li><MathInline>{`\\text{proj}_W(\\mathbf{v}) \\in W`}</MathInline></li>
          <li><MathInline>{`\\mathbf{v} - \\text{proj}_W(\\mathbf{v}) \\perp W`}</MathInline> (the residual is orthogonal to <MathInline>{`W`}</MathInline>)</li>
          <li><MathInline>{`\\text{proj}_W(\\mathbf{v})`}</MathInline> is the closest point in <MathInline>{`W`}</MathInline> to <MathInline>{`\\mathbf{v}`}</MathInline></li>
        </ol>
      </Callout>

      <h2>The Gram-Schmidt Process</h2>

      <Callout type="theorem" title="Gram-Schmidt Orthogonalization">
        <p>
          Given a basis <MathInline>{`\\{\\mathbf{v}_1, \\ldots, \\mathbf{v}_n\\}`}</MathInline> for a space <MathInline>{`V`}</MathInline>,
          the <strong>Gram-Schmidt process</strong> produces an orthonormal basis <MathInline>{`\\{\\mathbf{u}_1, \\ldots, \\mathbf{u}_n\\}`}</MathInline>:
        </p>
        <p className="mt-3"><strong>Step 1:</strong> Normalize the first vector:</p>
        <MathBlock>{`\\mathbf{u}_1 = \\frac{\\mathbf{v}_1}{\\|\\mathbf{v}_1\\|}`}</MathBlock>
        <p><strong>Step k:</strong> Subtract projections onto previous vectors, then normalize:</p>
        <MathBlock>{`\\mathbf{w}_k = \\mathbf{v}_k - \\sum_{j=1}^{k-1} \\langle \\mathbf{v}_k, \\mathbf{u}_j \\rangle \\mathbf{u}_j`}</MathBlock>
        <MathBlock>{`\\mathbf{u}_k = \\frac{\\mathbf{w}_k}{\\|\\mathbf{w}_k\\|}`}</MathBlock>
      </Callout>

      <Callout type="info" title="Why It Works">
        <p>
          At each step, <MathInline>{`\\mathbf{w}_k`}</MathInline> is <MathInline>{`\\mathbf{v}_k`}</MathInline> minus its projection
          onto <MathInline>{`\\text{span}\\{\\mathbf{u}_1, \\ldots, \\mathbf{u}_{k-1}\\}`}</MathInline>.
        </p>
        <p>
          This makes <MathInline>{`\\mathbf{w}_k`}</MathInline> orthogonal to all previous vectors. Normalizing
          gives a unit vector.
        </p>
      </Callout>

      <Callout type="example" title="Gram-Schmidt in ℝ³">
        <p>
          Apply Gram-Schmidt to <MathInline>{`\\mathbf{v}_1 = (1, 1, 1)`}</MathInline>, <MathInline>{`\\mathbf{v}_2 = (0, 1, 1)`}</MathInline>, <MathInline>{`\\mathbf{v}_3 = (0, 0, 1)`}</MathInline>.
        </p>
        <p><strong>Step 1:</strong> <MathInline>{`\\|\\mathbf{v}_1\\| = \\sqrt{3}`}</MathInline></p>
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
          A square matrix <MathInline>{`Q`}</MathInline> is <strong>orthogonal</strong> if:
        </p>
        <MathBlock>{`Q^T Q = Q Q^T = I`}</MathBlock>
        <p>
          Equivalently, <MathInline>{`Q^{-1} = Q^T`}</MathInline>.
        </p>
      </Callout>

      <Callout type="theorem" title="Characterizations">
        <p>The following are equivalent for a square matrix <MathInline>{`Q`}</MathInline>:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li><MathInline>{`Q`}</MathInline> is orthogonal</li>
          <li>The columns of <MathInline>{`Q`}</MathInline> form an orthonormal set</li>
          <li>The rows of <MathInline>{`Q`}</MathInline> form an orthonormal set</li>
          <li><MathInline>{`\\|Q\\mathbf{x}\\| = \\|\\mathbf{x}\\|`}</MathInline> for all <MathInline>{`\\mathbf{x}`}</MathInline> (preserves lengths)</li>
          <li><MathInline>{`\\langle Q\\mathbf{x}, Q\\mathbf{y} \\rangle = \\langle \\mathbf{x}, \\mathbf{y} \\rangle`}</MathInline> (preserves inner products)</li>
        </ol>
      </Callout>

      <Callout type="example" title="Rotation Matrices">
        <p>
          The rotation matrix in <MathInline>{`\\mathbb{R}^2`}</MathInline> is orthogonal:
        </p>
        <MathBlock>{`Q = \\begin{pmatrix} \\cos\\theta & -\\sin\\theta \\ \\sin\\theta & \\cos\\theta \\end{pmatrix}`}</MathBlock>
        <p>Verify: columns are orthonormal (both unit length, dot product is zero).</p>
      </Callout>

      <h2>QR Factorization</h2>

      <Callout type="theorem" title="QR Factorization">
        <p>
          Every matrix <MathInline>{`A`}</MathInline> with linearly independent columns can be factored as:
        </p>
        <MathBlock>{`A = QR`}</MathBlock>
        <p>
          where <MathInline>{`Q`}</MathInline> has orthonormal columns and <MathInline>{`R`}</MathInline> is upper triangular
          with positive diagonal entries.
        </p>
      </Callout>

      <Callout type="info" title="Connection to Gram-Schmidt">
        <p>
          The QR factorization is the matrix form of Gram-Schmidt:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Columns of <MathInline>{`Q`}</MathInline> are the orthonormal vectors <MathInline>{`\\mathbf{u}_1, \\ldots, \\mathbf{u}_n`}</MathInline></li>
          <li>Entries of <MathInline>{`R`}</MathInline> are the coefficients <MathInline>{`r_{ij} = \\langle \\mathbf{v}_j, \\mathbf{u}_i \\rangle`}</MathInline></li>
        </ul>
      </Callout>

      <Callout type="example" title="QR Example">
        <p>
          For <MathInline>{`A = \\begin{pmatrix} 1 & 0 \\ 1 & 1 \\ 1 & 1 \\end{pmatrix}`}</MathInline>:
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
          The <strong>orthogonal complement</strong> of a subspace <MathInline>{`W`}</MathInline> is:
        </p>
        <MathBlock>{`W^\\perp = \\{\\mathbf{v} \\in V : \\langle \\mathbf{v}, \\mathbf{w} \\rangle = 0 \\text{ for all } \\mathbf{w} \\in W\\}`}</MathBlock>
      </Callout>

      <Callout type="theorem" title="Properties of Orthogonal Complement">
        <p>For a subspace <MathInline>{`W`}</MathInline> of finite-dimensional <MathInline>{`V`}</MathInline>:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li><MathInline>{`W^\\perp`}</MathInline> is a subspace</li>
          <li><MathInline>{`V = W \\oplus W^\\perp`}</MathInline> (direct sum)</li>
          <li><MathInline>{`\\dim(W) + \\dim(W^\\perp) = \\dim(V)`}</MathInline></li>
          <li><MathInline>{`(W^\\perp)^\\perp = W`}</MathInline></li>
        </ol>
      </Callout>

      <Callout type="theorem" title="Orthogonal Decomposition">
        <p>
          Every <MathInline>{`\\mathbf{v} \\in V`}</MathInline> can be written uniquely as:
        </p>
        <MathBlock>{`\\mathbf{v} = \\mathbf{w} + \\mathbf{w}^\\perp`}</MathBlock>
        <p>
          where <MathInline>{`\\mathbf{w} \\in W`}</MathInline> and <MathInline>{`\\mathbf{w}^\\perp \\in W^\\perp`}</MathInline>.
        </p>
        <p>
          Moreover, <MathInline>{`\\mathbf{w} = \\text{proj}_W(\\mathbf{v})`}</MathInline>.
        </p>
      </Callout>

      <h2>Summary</h2>

      <Callout type="info" title="Key Concepts">
        <p><strong>Orthogonal set:</strong> <MathInline>{`\\langle \\mathbf{v}_i, \\mathbf{v}_j \\rangle = 0`}</MathInline> for <MathInline>{`i \\neq j`}</MathInline></p>
        <p><strong>Orthonormal set:</strong> Orthogonal + unit vectors</p>

        <p className="mt-3"><strong>Key properties:</strong></p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Orthogonal nonzero vectors are linearly independent</li>
          <li>Coordinates in orthonormal basis: <MathInline>{`c_i = \\langle \\mathbf{v}, \\mathbf{u}_i \\rangle`}</MathInline></li>
        </ul>

        <p className="mt-3"><strong>Gram-Schmidt process:</strong></p>
        <MathBlock>{`\\mathbf{w}_k = \\mathbf{v}_k - \\sum_{j=1}^{k-1} \\langle \\mathbf{v}_k, \\mathbf{u}_j \\rangle \\mathbf{u}_j, \\quad \\mathbf{u}_k = \\frac{\\mathbf{w}_k}{\\|\\mathbf{w}_k\\|}`}</MathBlock>

        <p className="mt-3"><strong>Orthogonal matrix:</strong> <MathInline>{`Q^T Q = I`}</MathInline> (preserves lengths and angles)</p>

        <p className="mt-3"><strong>QR factorization:</strong> <MathInline>{`A = QR`}</MathInline> where <MathInline>{`Q`}</MathInline> orthonormal, <MathInline>{`R`}</MathInline> upper triangular</p>

        <p className="mt-3"><strong>Orthogonal complement:</strong> <MathInline>{`\\dim(W) + \\dim(W^\\perp) = \\dim(V)`}</MathInline></p>
      </Callout>
    </LessonLayout>
  );
}
