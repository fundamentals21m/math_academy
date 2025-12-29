import { LessonLayout } from '../../components/layout/LessonLayout';
import { Math as MathInline, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';

export default function Section97() {
  return (
    <LessonLayout sectionId={97}>
      <h1>Matrix Representations</h1>

      <p>
        Every linear transformation between finite-dimensional spaces can be represented by a matrix.
        This connection allows us to translate abstract questions about transformations into
        concrete matrix computations.
      </p>

      <h2>The Matrix of a Linear Transformation</h2>

      <Callout type="theorem" title="Matrix Representation">
        <p>
          Let <MathInline>{`T: V \\to W`}</MathInline> be a linear transformation where <MathInline>{`V`}</MathInline> and <MathInline>{`W`}</MathInline> are
          finite-dimensional. Let:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li><MathInline>{`\\mathcal{B} = \\{\\mathbf{v}_1, \\ldots, \\mathbf{v}_n\\}`}</MathInline> be a basis for <MathInline>{`V`}</MathInline></li>
          <li><MathInline>{`\\mathcal{C} = \\{\\mathbf{w}_1, \\ldots, \\mathbf{w}_m\\}`}</MathInline> be a basis for <MathInline>{`W`}</MathInline></li>
        </ul>
        <p>
          Then there exists a unique <MathInline>{`m \\times n`}</MathInline> matrix <MathInline>{`[T]_{\\mathcal{B}}^{\\mathcal{C}}`}</MathInline> such that:
        </p>
        <MathBlock>{`[T(\\mathbf{v})]_{\\mathcal{C}} = [T]_{\\mathcal{B}}^{\\mathcal{C}} [\\mathbf{v}]_{\\mathcal{B}}`}</MathBlock>
      </Callout>

      <Callout type="definition" title="Coordinate Vector">
        <p>
          If <MathInline>{`\\mathbf{v} = c_1\\mathbf{v}_1 + \\cdots + c_n\\mathbf{v}_n`}</MathInline>, the <strong>coordinate vector</strong> of <MathInline>{`\\mathbf{v}`}</MathInline> with
          respect to basis <MathInline>{`\\mathcal{B}`}</MathInline> is:
        </p>
        <MathBlock>{`[\\mathbf{v}]_{\\mathcal{B}} = \\begin{pmatrix} c_1 \\ c_2 \\ \\vdots \\ c_n \\end{pmatrix}`}</MathBlock>
      </Callout>

      <Callout type="theorem" title="Constructing the Matrix">
        <p>
          The <MathInline>{`j`}</MathInline>-th column of <MathInline>{`[T]_{\\mathcal{B}}^{\\mathcal{C}}`}</MathInline> is the coordinate
          vector of <MathInline>{`T(\\mathbf{v}_j)`}</MathInline> with respect to <MathInline>{`\\mathcal{C}`}</MathInline>:
        </p>
        <MathBlock>{`[T]_{\\mathcal{B}}^{\\mathcal{C}} = \\begin{pmatrix} | & | & & | \\ [T(\\mathbf{v}_1)]_{\\mathcal{C}} & [T(\\mathbf{v}_2)]_{\\mathcal{C}} & \\cdots & [T(\\mathbf{v}_n)]_{\\mathcal{C}} \\ | & | & & | \\end{pmatrix}`}</MathBlock>
      </Callout>

      <h2>Examples</h2>

      <Callout type="example" title="Standard Bases">
        <p>
          Let <MathInline>{`T: \\mathbb{R}^2 \\to \\mathbb{R}^3`}</MathInline> be defined by <MathInline>{`T(x, y) = (x + y, 2x, y)`}</MathInline>.
        </p>
        <p>Using standard bases <MathInline>{`\\mathcal{E}_2`}</MathInline> and <MathInline>{`\\mathcal{E}_3`}</MathInline>:</p>
        <MathBlock>{`T(\\mathbf{e}_1) = T(1, 0) = (1, 2, 0)`}</MathBlock>
        <MathBlock>{`T(\\mathbf{e}_2) = T(0, 1) = (1, 0, 1)`}</MathBlock>
        <p>The matrix representation:</p>
        <MathBlock>{`[T]_{\\mathcal{E}_2}^{\\mathcal{E}_3} = \\begin{pmatrix} 1 & 1 \\ 2 & 0 \\ 0 & 1 \\end{pmatrix}`}</MathBlock>
      </Callout>

      <Callout type="example" title="Non-Standard Bases">
        <p>
          Let <MathInline>{`T: \\mathbb{R}^2 \\to \\mathbb{R}^2`}</MathInline> be <MathInline>{`T(x, y) = (x + y, x - y)`}</MathInline>.
        </p>
        <p>
          Use <MathInline>{`\\mathcal{B} = \\{(1, 1), (1, -1)\\}`}</MathInline> for both domain and codomain.
        </p>
        <MathBlock>{`T(1, 1) = (2, 0) = 1 \\cdot (1, 1) + 1 \\cdot (1, -1)`}</MathBlock>
        <MathBlock>{`T(1, -1) = (0, 2) = 1 \\cdot (1, 1) - 1 \\cdot (1, -1)`}</MathBlock>
        <p>The matrix:</p>
        <MathBlock>{`[T]_{\\mathcal{B}}^{\\mathcal{B}} = \\begin{pmatrix} 1 & 1 \\ 1 & -1 \\end{pmatrix}`}</MathBlock>
      </Callout>

      <Callout type="example" title="Differentiation Operator">
        <p>
          Let <MathInline>{`D: \\mathcal{P}_2 \\to \\mathcal{P}_1`}</MathInline> be differentiation.
        </p>
        <p>
          Use <MathInline>{`\\mathcal{B} = \\{1, x, x^2\\}`}</MathInline> for <MathInline>{`\\mathcal{P}_2`}</MathInline> and <MathInline>{`\\mathcal{C} = \\{1, x\\}`}</MathInline> for <MathInline>{`\\mathcal{P}_1`}</MathInline>.
        </p>
        <MathBlock>{`D(1) = 0 = 0 \\cdot 1 + 0 \\cdot x`}</MathBlock>
        <MathBlock>{`D(x) = 1 = 1 \\cdot 1 + 0 \\cdot x`}</MathBlock>
        <MathBlock>{`D(x^2) = 2x = 0 \\cdot 1 + 2 \\cdot x`}</MathBlock>
        <p>The matrix:</p>
        <MathBlock>{`[D]_{\\mathcal{B}}^{\\mathcal{C}} = \\begin{pmatrix} 0 & 1 & 0 \\ 0 & 0 & 2 \\end{pmatrix}`}</MathBlock>
      </Callout>

      <h2>Change of Basis</h2>

      <Callout type="definition" title="Change of Basis Matrix">
        <p>
          Let <MathInline>{`\\mathcal{B}`}</MathInline> and <MathInline>{`\\mathcal{B}'`}</MathInline> be bases for <MathInline>{`V`}</MathInline>.
          The <strong>change of basis matrix</strong> from <MathInline>{`\\mathcal{B}`}</MathInline> to <MathInline>{`\\mathcal{B}'`}</MathInline> is:
        </p>
        <MathBlock>{`P_{\\mathcal{B} \\to \\mathcal{B}'} = [I]_{\\mathcal{B}}^{\\mathcal{B}'}`}</MathBlock>
        <p>It converts coordinates: <MathInline>{`[\\mathbf{v}]_{\\mathcal{B}'} = P_{\\mathcal{B} \\to \\mathcal{B}'} [\\mathbf{v}]_{\\mathcal{B}}`}</MathInline></p>
      </Callout>

      <Callout type="theorem" title="Constructing Change of Basis Matrix">
        <p>
          If <MathInline>{`\\mathcal{B} = \\{\\mathbf{v}_1, \\ldots, \\mathbf{v}_n\\}`}</MathInline> and <MathInline>{`\\mathcal{B}' = \\{\\mathbf{v}'_1, \\ldots, \\mathbf{v}'_n\\}`}</MathInline>,
          then:
        </p>
        <MathBlock>{`P_{\\mathcal{B} \\to \\mathcal{B}'} = \\begin{pmatrix} | & & | \\ [\\mathbf{v}_1]_{\\mathcal{B}'} & \\cdots & [\\mathbf{v}_n]_{\\mathcal{B}'} \\ | & & | \\end{pmatrix}`}</MathBlock>
      </Callout>

      <Callout type="theorem" title="Properties">
        <ul className="list-disc pl-6 space-y-2">
          <li><MathInline>{`P_{\\mathcal{B} \\to \\mathcal{B}'}`}</MathInline> is invertible</li>
          <li><MathInline>{`(P_{\\mathcal{B} \\to \\mathcal{B}'})^{-1} = P_{\\mathcal{B}' \\to \\mathcal{B}}`}</MathInline></li>
          <li><MathInline>{`P_{\\mathcal{B} \\to \\mathcal{B}''} = P_{\\mathcal{B}' \\to \\mathcal{B}''} P_{\\mathcal{B} \\to \\mathcal{B}'}`}</MathInline></li>
        </ul>
      </Callout>

      <Callout type="example" title="Change of Basis in ℝ²">
        <p>
          Let <MathInline>{`\\mathcal{E} = \\{(1, 0), (0, 1)\\}`}</MathInline> (standard) and <MathInline>{`\\mathcal{B} = \\{(1, 1), (1, -1)\\}`}</MathInline>.
        </p>
        <p>Express standard basis vectors in terms of <MathInline>{`\\mathcal{B}`}</MathInline>:</p>
        <MathBlock>{`(1, 0) = \\frac{1}{2}(1, 1) + \\frac{1}{2}(1, -1)`}</MathBlock>
        <MathBlock>{`(0, 1) = \\frac{1}{2}(1, 1) - \\frac{1}{2}(1, -1)`}</MathBlock>
        <MathBlock>{`P_{\\mathcal{E} \\to \\mathcal{B}} = \\begin{pmatrix} 1/2 & 1/2 \\ 1/2 & -1/2 \\end{pmatrix}`}</MathBlock>
      </Callout>

      <h2>Similarity</h2>

      <Callout type="theorem" title="Effect of Change of Basis on Transformation Matrix">
        <p>
          Let <MathInline>{`T: V \\to V`}</MathInline> be a linear operator. If <MathInline>{`\\mathcal{B}`}</MathInline> and <MathInline>{`\\mathcal{B}'`}</MathInline> are
          bases for <MathInline>{`V`}</MathInline> with change of basis matrix <MathInline>{`P = P_{\\mathcal{B}' \\to \\mathcal{B}}`}</MathInline>, then:
        </p>
        <MathBlock>{`[T]_{\\mathcal{B}'} = P^{-1} [T]_{\\mathcal{B}} P`}</MathBlock>
      </Callout>

      <Callout type="definition" title="Similar Matrices">
        <p>
          Matrices <MathInline>{`A`}</MathInline> and <MathInline>{`B`}</MathInline> are <strong>similar</strong> if there exists
          an invertible matrix <MathInline>{`P`}</MathInline> such that:
        </p>
        <MathBlock>{`B = P^{-1} A P`}</MathBlock>
        <p>Similar matrices represent the same transformation in different bases.</p>
      </Callout>

      <Callout type="theorem" title="Similar Matrices Share Properties">
        <p>If <MathInline>{`A`}</MathInline> and <MathInline>{`B`}</MathInline> are similar, they have the same:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Rank and nullity</li>
          <li>Determinant</li>
          <li>Trace</li>
          <li>Eigenvalues (with same multiplicities)</li>
          <li>Characteristic polynomial</li>
        </ul>
      </Callout>

      <Callout type="example" title="Diagonalization Preview">
        <p>
          If <MathInline>{`T`}</MathInline> has a basis of eigenvectors <MathInline>{`\\mathcal{B} = \\{\\mathbf{v}_1, \\ldots, \\mathbf{v}_n\\}`}</MathInline> with
          eigenvalues <MathInline>{`\\lambda_1, \\ldots, \\lambda_n`}</MathInline>, then:
        </p>
        <MathBlock>{`[T]_{\\mathcal{B}} = \\begin{pmatrix} \\lambda_1 & 0 & \\cdots & 0 \\ 0 & \\lambda_2 & \\cdots & 0 \\ \\vdots & & \\ddots & \\vdots \\ 0 & 0 & \\cdots & \\lambda_n \\end{pmatrix}`}</MathBlock>
        <p>This is the diagonal matrix of eigenvalues.</p>
      </Callout>

      <h2>Composition and Matrix Multiplication</h2>

      <Callout type="theorem" title="Matrix of Composition">
        <p>
          Let <MathInline>{`T: U \\to V`}</MathInline> and <MathInline>{`S: V \\to W`}</MathInline> be linear transformations with bases
          <MathInline>{`\\mathcal{A}, \\mathcal{B}, \\mathcal{C}`}</MathInline> for <MathInline>{`U, V, W`}</MathInline> respectively. Then:
        </p>
        <MathBlock>{`[S \\circ T]_{\\mathcal{A}}^{\\mathcal{C}} = [S]_{\\mathcal{B}}^{\\mathcal{C}} [T]_{\\mathcal{A}}^{\\mathcal{B}}`}</MathBlock>
        <p>Composition of transformations corresponds to matrix multiplication.</p>
      </Callout>

      <Callout type="theorem" title="Inverse Transformation">
        <p>
          If <MathInline>{`T: V \\to W`}</MathInline> is an isomorphism, then:
        </p>
        <MathBlock>{`[T^{-1}]_{\\mathcal{C}}^{\\mathcal{B}} = ([T]_{\\mathcal{B}}^{\\mathcal{C}})^{-1}`}</MathBlock>
      </Callout>

      <h2>The Isomorphism Between Transformations and Matrices</h2>

      <Callout type="theorem" title="L(V, W) ≅ M_{m×n}">
        <p>
          Let <MathInline>{`V`}</MathInline> and <MathInline>{`W`}</MathInline> be vector spaces with <MathInline>{`\\dim V = n`}</MathInline> and <MathInline>{`\\dim W = m`}</MathInline>.
          Fix bases <MathInline>{`\\mathcal{B}`}</MathInline> and <MathInline>{`\\mathcal{C}`}</MathInline>. The map:
        </p>
        <MathBlock>{`\\Phi: \\mathcal{L}(V, W) \\to M_{m \\times n}, \\quad \\Phi(T) = [T]_{\\mathcal{B}}^{\\mathcal{C}}`}</MathBlock>
        <p>is an isomorphism of vector spaces.</p>
      </Callout>

      <Callout type="info" title="What This Means">
        <ul className="list-disc pl-6 space-y-2">
          <li>Every linear transformation has a unique matrix (once bases are chosen)</li>
          <li>Every matrix represents a unique linear transformation</li>
          <li>Linear operations on transformations correspond to matrix operations</li>
          <li><MathInline>{`\\dim(\\mathcal{L}(V, W)) = mn`}</MathInline></li>
        </ul>
      </Callout>

      <h2>Practical Computation</h2>

      <Callout type="example" title="Finding the Matrix Representation">
        <p>
          Find the matrix for <MathInline>{`T: \\mathcal{P}_2 \\to \\mathcal{P}_2`}</MathInline> defined
          by <MathInline>{`T(p) = p + p'`}</MathInline> using basis <MathInline>{`\\{1, x, x^2\\}`}</MathInline>.
        </p>
        <p><strong>Solution:</strong> Apply <MathInline>{`T`}</MathInline> to each basis element:</p>
        <MathBlock>{`T(1) = 1 + 0 = 1 \\cdot 1 + 0 \\cdot x + 0 \\cdot x^2`}</MathBlock>
        <MathBlock>{`T(x) = x + 1 = 1 \\cdot 1 + 1 \\cdot x + 0 \\cdot x^2`}</MathBlock>
        <MathBlock>{`T(x^2) = x^2 + 2x = 0 \\cdot 1 + 2 \\cdot x + 1 \\cdot x^2`}</MathBlock>
        <MathBlock>{`[T] = \\begin{pmatrix} 1 & 1 & 0 \\ 0 & 1 & 2 \\ 0 & 0 & 1 \\end{pmatrix}`}</MathBlock>
      </Callout>

      <Callout type="example" title="Using the Matrix">
        <p>
          Use the matrix above to compute <MathInline>{`T(2 + 3x - x^2)`}</MathInline>.
        </p>
        <p><strong>Solution:</strong> The coordinate vector is <MathInline>{`[p]_{\\mathcal{B}} = (2, 3, -1)^T`}</MathInline>.</p>
        <MathBlock>{`[T(p)]_{\\mathcal{B}} = \\begin{pmatrix} 1 & 1 & 0 \\ 0 & 1 & 2 \\ 0 & 0 & 1 \\end{pmatrix} \\begin{pmatrix} 2 \\ 3 \\ -1 \\end{pmatrix} = \\begin{pmatrix} 5 \\ 1 \\ -1 \\end{pmatrix}`}</MathBlock>
        <p>So <MathInline>{`T(2 + 3x - x^2) = 5 + x - x^2`}</MathInline>.</p>
        <p><strong>Verify:</strong> <MathInline>{`(2 + 3x - x^2) + (3 - 2x) = 5 + x - x^2`}</MathInline> ✓</p>
      </Callout>

      <h2>Summary</h2>

      <Callout type="info" title="Key Concepts">
        <p><strong>Matrix representation:</strong></p>
        <MathBlock>{`[T(\\mathbf{v})]_{\\mathcal{C}} = [T]_{\\mathcal{B}}^{\\mathcal{C}} [\\mathbf{v}]_{\\mathcal{B}}`}</MathBlock>

        <p className="mt-3"><strong>Constructing <MathInline>{`[T]_{\\mathcal{B}}^{\\mathcal{C}}`}</MathInline>:</strong></p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Column <MathInline>{`j`}</MathInline> = <MathInline>{`[T(\\mathbf{v}_j)]_{\\mathcal{C}}`}</MathInline></li>
        </ul>

        <p className="mt-3"><strong>Change of basis:</strong></p>
        <MathBlock>{`[T]_{\\mathcal{B}'} = P^{-1} [T]_{\\mathcal{B}} P`}</MathBlock>

        <p className="mt-3"><strong>Similar matrices:</strong> <MathInline>{`B = P^{-1}AP`}</MathInline></p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Represent the same transformation in different bases</li>
          <li>Share rank, determinant, trace, eigenvalues</li>
        </ul>

        <p className="mt-3"><strong>Composition:</strong> <MathInline>{`[S \\circ T] = [S][T]`}</MathInline></p>

        <p className="mt-3"><strong>Key isomorphism:</strong> <MathInline>{`\\mathcal{L}(V, W) \\cong M_{m \\times n}`}</MathInline></p>
      </Callout>
    </LessonLayout>
  );
}
