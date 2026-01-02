import { LessonLayout } from '../../components/layout/LessonLayout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
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
          Let <InlineMath>{`T: V \\to W`}</InlineMath> be a linear transformation where <InlineMath>{`V`}</InlineMath> and <InlineMath>{`W`}</InlineMath> are
          finite-dimensional. Let:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li><InlineMath>{`\\mathcal{B} = \\{\\mathbf{v}_1, \\ldots, \\mathbf{v}_n\\}`}</InlineMath> be a basis for <InlineMath>{`V`}</InlineMath></li>
          <li><InlineMath>{`\\mathcal{C} = \\{\\mathbf{w}_1, \\ldots, \\mathbf{w}_m\\}`}</InlineMath> be a basis for <InlineMath>{`W`}</InlineMath></li>
        </ul>
        <p>
          Then there exists a unique <InlineMath>{`m \\times n`}</InlineMath> matrix <InlineMath>{`[T]_{\\mathcal{B}}^{\\mathcal{C}}`}</InlineMath> such that:
        </p>
        <MathBlock>{`[T(\\mathbf{v})]_{\\mathcal{C}} = [T]_{\\mathcal{B}}^{\\mathcal{C}} [\\mathbf{v}]_{\\mathcal{B}}`}</MathBlock>
      </Callout>

      <Callout type="definition" title="Coordinate Vector">
        <p>
          If <InlineMath>{`\\mathbf{v} = c_1\\mathbf{v}_1 + \\cdots + c_n\\mathbf{v}_n`}</InlineMath>, the <strong>coordinate vector</strong> of <InlineMath>{`\\mathbf{v}`}</InlineMath> with
          respect to basis <InlineMath>{`\\mathcal{B}`}</InlineMath> is:
        </p>
        <MathBlock>{`[\\mathbf{v}]_{\\mathcal{B}} = \\begin{pmatrix} c_1 \\ c_2 \\ \\vdots \\ c_n \\end{pmatrix}`}</MathBlock>
      </Callout>

      <Callout type="theorem" title="Constructing the Matrix">
        <p>
          The <InlineMath>{`j`}</InlineMath>-th column of <InlineMath>{`[T]_{\\mathcal{B}}^{\\mathcal{C}}`}</InlineMath> is the coordinate
          vector of <InlineMath>{`T(\\mathbf{v}_j)`}</InlineMath> with respect to <InlineMath>{`\\mathcal{C}`}</InlineMath>:
        </p>
        <MathBlock>{`[T]_{\\mathcal{B}}^{\\mathcal{C}} = \\begin{pmatrix} | & | & & | \\ [T(\\mathbf{v}_1)]_{\\mathcal{C}} & [T(\\mathbf{v}_2)]_{\\mathcal{C}} & \\cdots & [T(\\mathbf{v}_n)]_{\\mathcal{C}} \\ | & | & & | \\end{pmatrix}`}</MathBlock>
      </Callout>

      <h2>Examples</h2>

      <Callout type="example" title="Standard Bases">
        <p>
          Let <InlineMath>{`T: \\mathbb{R}^2 \\to \\mathbb{R}^3`}</InlineMath> be defined by <InlineMath>{`T(x, y) = (x + y, 2x, y)`}</InlineMath>.
        </p>
        <p>Using standard bases <InlineMath>{`\\mathcal{E}_2`}</InlineMath> and <InlineMath>{`\\mathcal{E}_3`}</InlineMath>:</p>
        <MathBlock>{`T(\\mathbf{e}_1) = T(1, 0) = (1, 2, 0)`}</MathBlock>
        <MathBlock>{`T(\\mathbf{e}_2) = T(0, 1) = (1, 0, 1)`}</MathBlock>
        <p>The matrix representation:</p>
        <MathBlock>{`[T]_{\\mathcal{E}_2}^{\\mathcal{E}_3} = \\begin{pmatrix} 1 & 1 \\ 2 & 0 \\ 0 & 1 \\end{pmatrix}`}</MathBlock>
      </Callout>

      <Callout type="example" title="Non-Standard Bases">
        <p>
          Let <InlineMath>{`T: \\mathbb{R}^2 \\to \\mathbb{R}^2`}</InlineMath> be <InlineMath>{`T(x, y) = (x + y, x - y)`}</InlineMath>.
        </p>
        <p>
          Use <InlineMath>{`\\mathcal{B} = \\{(1, 1), (1, -1)\\}`}</InlineMath> for both domain and codomain.
        </p>
        <MathBlock>{`T(1, 1) = (2, 0) = 1 \\cdot (1, 1) + 1 \\cdot (1, -1)`}</MathBlock>
        <MathBlock>{`T(1, -1) = (0, 2) = 1 \\cdot (1, 1) - 1 \\cdot (1, -1)`}</MathBlock>
        <p>The matrix:</p>
        <MathBlock>{`[T]_{\\mathcal{B}}^{\\mathcal{B}} = \\begin{pmatrix} 1 & 1 \\ 1 & -1 \\end{pmatrix}`}</MathBlock>
      </Callout>

      <Callout type="example" title="Differentiation Operator">
        <p>
          Let <InlineMath>{`D: \\mathcal{P}_2 \\to \\mathcal{P}_1`}</InlineMath> be differentiation.
        </p>
        <p>
          Use <InlineMath>{`\\mathcal{B} = \\{1, x, x^2\\}`}</InlineMath> for <InlineMath>{`\\mathcal{P}_2`}</InlineMath> and <InlineMath>{`\\mathcal{C} = \\{1, x\\}`}</InlineMath> for <InlineMath>{`\\mathcal{P}_1`}</InlineMath>.
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
          Let <InlineMath>{`\\mathcal{B}`}</InlineMath> and <InlineMath>{`\\mathcal{B}'`}</InlineMath> be bases for <InlineMath>{`V`}</InlineMath>.
          The <strong>change of basis matrix</strong> from <InlineMath>{`\\mathcal{B}`}</InlineMath> to <InlineMath>{`\\mathcal{B}'`}</InlineMath> is:
        </p>
        <MathBlock>{`P_{\\mathcal{B} \\to \\mathcal{B}'} = [I]_{\\mathcal{B}}^{\\mathcal{B}'}`}</MathBlock>
        <p>It converts coordinates: <InlineMath>{`[\\mathbf{v}]_{\\mathcal{B}'} = P_{\\mathcal{B} \\to \\mathcal{B}'} [\\mathbf{v}]_{\\mathcal{B}}`}</InlineMath></p>
      </Callout>

      <Callout type="theorem" title="Constructing Change of Basis Matrix">
        <p>
          If <InlineMath>{`\\mathcal{B} = \\{\\mathbf{v}_1, \\ldots, \\mathbf{v}_n\\}`}</InlineMath> and <InlineMath>{`\\mathcal{B}' = \\{\\mathbf{v}'_1, \\ldots, \\mathbf{v}'_n\\}`}</InlineMath>,
          then:
        </p>
        <MathBlock>{`P_{\\mathcal{B} \\to \\mathcal{B}'} = \\begin{pmatrix} | & & | \\ [\\mathbf{v}_1]_{\\mathcal{B}'} & \\cdots & [\\mathbf{v}_n]_{\\mathcal{B}'} \\ | & & | \\end{pmatrix}`}</MathBlock>
      </Callout>

      <Callout type="theorem" title="Properties">
        <ul className="list-disc pl-6 space-y-2">
          <li><InlineMath>{`P_{\\mathcal{B} \\to \\mathcal{B}'}`}</InlineMath> is invertible</li>
          <li><InlineMath>{`(P_{\\mathcal{B} \\to \\mathcal{B}'})^{-1} = P_{\\mathcal{B}' \\to \\mathcal{B}}`}</InlineMath></li>
          <li><InlineMath>{`P_{\\mathcal{B} \\to \\mathcal{B}''} = P_{\\mathcal{B}' \\to \\mathcal{B}''} P_{\\mathcal{B} \\to \\mathcal{B}'}`}</InlineMath></li>
        </ul>
      </Callout>

      <Callout type="example" title="Change of Basis in ℝ²">
        <p>
          Let <InlineMath>{`\\mathcal{E} = \\{(1, 0), (0, 1)\\}`}</InlineMath> (standard) and <InlineMath>{`\\mathcal{B} = \\{(1, 1), (1, -1)\\}`}</InlineMath>.
        </p>
        <p>Express standard basis vectors in terms of <InlineMath>{`\\mathcal{B}`}</InlineMath>:</p>
        <MathBlock>{`(1, 0) = \\frac{1}{2}(1, 1) + \\frac{1}{2}(1, -1)`}</MathBlock>
        <MathBlock>{`(0, 1) = \\frac{1}{2}(1, 1) - \\frac{1}{2}(1, -1)`}</MathBlock>
        <MathBlock>{`P_{\\mathcal{E} \\to \\mathcal{B}} = \\begin{pmatrix} 1/2 & 1/2 \\ 1/2 & -1/2 \\end{pmatrix}`}</MathBlock>
      </Callout>

      <h2>Similarity</h2>

      <Callout type="theorem" title="Effect of Change of Basis on Transformation Matrix">
        <p>
          Let <InlineMath>{`T: V \\to V`}</InlineMath> be a linear operator. If <InlineMath>{`\\mathcal{B}`}</InlineMath> and <InlineMath>{`\\mathcal{B}'`}</InlineMath> are
          bases for <InlineMath>{`V`}</InlineMath> with change of basis matrix <InlineMath>{`P = P_{\\mathcal{B}' \\to \\mathcal{B}}`}</InlineMath>, then:
        </p>
        <MathBlock>{`[T]_{\\mathcal{B}'} = P^{-1} [T]_{\\mathcal{B}} P`}</MathBlock>
      </Callout>

      <Callout type="definition" title="Similar Matrices">
        <p>
          Matrices <InlineMath>{`A`}</InlineMath> and <InlineMath>{`B`}</InlineMath> are <strong>similar</strong> if there exists
          an invertible matrix <InlineMath>{`P`}</InlineMath> such that:
        </p>
        <MathBlock>{`B = P^{-1} A P`}</MathBlock>
        <p>Similar matrices represent the same transformation in different bases.</p>
      </Callout>

      <Callout type="theorem" title="Similar Matrices Share Properties">
        <p>If <InlineMath>{`A`}</InlineMath> and <InlineMath>{`B`}</InlineMath> are similar, they have the same:</p>
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
          If <InlineMath>{`T`}</InlineMath> has a basis of eigenvectors <InlineMath>{`\\mathcal{B} = \\{\\mathbf{v}_1, \\ldots, \\mathbf{v}_n\\}`}</InlineMath> with
          eigenvalues <InlineMath>{`\\lambda_1, \\ldots, \\lambda_n`}</InlineMath>, then:
        </p>
        <MathBlock>{`[T]_{\\mathcal{B}} = \\begin{pmatrix} \\lambda_1 & 0 & \\cdots & 0 \\ 0 & \\lambda_2 & \\cdots & 0 \\ \\vdots & & \\ddots & \\vdots \\ 0 & 0 & \\cdots & \\lambda_n \\end{pmatrix}`}</MathBlock>
        <p>This is the diagonal matrix of eigenvalues.</p>
      </Callout>

      <h2>Composition and Matrix Multiplication</h2>

      <Callout type="theorem" title="Matrix of Composition">
        <p>
          Let <InlineMath>{`T: U \\to V`}</InlineMath> and <InlineMath>{`S: V \\to W`}</InlineMath> be linear transformations with bases
          <InlineMath>{`\\mathcal{A}, \\mathcal{B}, \\mathcal{C}`}</InlineMath> for <InlineMath>{`U, V, W`}</InlineMath> respectively. Then:
        </p>
        <MathBlock>{`[S \\circ T]_{\\mathcal{A}}^{\\mathcal{C}} = [S]_{\\mathcal{B}}^{\\mathcal{C}} [T]_{\\mathcal{A}}^{\\mathcal{B}}`}</MathBlock>
        <p>Composition of transformations corresponds to matrix multiplication.</p>
      </Callout>

      <Callout type="theorem" title="Inverse Transformation">
        <p>
          If <InlineMath>{`T: V \\to W`}</InlineMath> is an isomorphism, then:
        </p>
        <MathBlock>{`[T^{-1}]_{\\mathcal{C}}^{\\mathcal{B}} = ([T]_{\\mathcal{B}}^{\\mathcal{C}})^{-1}`}</MathBlock>
      </Callout>

      <h2>The Isomorphism Between Transformations and Matrices</h2>

      <Callout type="theorem" title="L(V, W) ≅ M_{m×n}">
        <p>
          Let <InlineMath>{`V`}</InlineMath> and <InlineMath>{`W`}</InlineMath> be vector spaces with <InlineMath>{`\\dim V = n`}</InlineMath> and <InlineMath>{`\\dim W = m`}</InlineMath>.
          Fix bases <InlineMath>{`\\mathcal{B}`}</InlineMath> and <InlineMath>{`\\mathcal{C}`}</InlineMath>. The map:
        </p>
        <MathBlock>{`\\Phi: \\mathcal{L}(V, W) \\to M_{m \\times n}, \\quad \\Phi(T) = [T]_{\\mathcal{B}}^{\\mathcal{C}}`}</MathBlock>
        <p>is an isomorphism of vector spaces.</p>
      </Callout>

      <Callout type="info" title="What This Means">
        <ul className="list-disc pl-6 space-y-2">
          <li>Every linear transformation has a unique matrix (once bases are chosen)</li>
          <li>Every matrix represents a unique linear transformation</li>
          <li>Linear operations on transformations correspond to matrix operations</li>
          <li><InlineMath>{`\\dim(\\mathcal{L}(V, W)) = mn`}</InlineMath></li>
        </ul>
      </Callout>

      <h2>Practical Computation</h2>

      <Callout type="example" title="Finding the Matrix Representation">
        <p>
          Find the matrix for <InlineMath>{`T: \\mathcal{P}_2 \\to \\mathcal{P}_2`}</InlineMath> defined
          by <InlineMath>{`T(p) = p + p'`}</InlineMath> using basis <InlineMath>{`\\{1, x, x^2\\}`}</InlineMath>.
        </p>
        <p><strong>Solution:</strong> Apply <InlineMath>{`T`}</InlineMath> to each basis element:</p>
        <MathBlock>{`T(1) = 1 + 0 = 1 \\cdot 1 + 0 \\cdot x + 0 \\cdot x^2`}</MathBlock>
        <MathBlock>{`T(x) = x + 1 = 1 \\cdot 1 + 1 \\cdot x + 0 \\cdot x^2`}</MathBlock>
        <MathBlock>{`T(x^2) = x^2 + 2x = 0 \\cdot 1 + 2 \\cdot x + 1 \\cdot x^2`}</MathBlock>
        <MathBlock>{`[T] = \\begin{pmatrix} 1 & 1 & 0 \\ 0 & 1 & 2 \\ 0 & 0 & 1 \\end{pmatrix}`}</MathBlock>
      </Callout>

      <Callout type="example" title="Using the Matrix">
        <p>
          Use the matrix above to compute <InlineMath>{`T(2 + 3x - x^2)`}</InlineMath>.
        </p>
        <p><strong>Solution:</strong> The coordinate vector is <InlineMath>{`[p]_{\\mathcal{B}} = (2, 3, -1)^T`}</InlineMath>.</p>
        <MathBlock>{`[T(p)]_{\\mathcal{B}} = \\begin{pmatrix} 1 & 1 & 0 \\ 0 & 1 & 2 \\ 0 & 0 & 1 \\end{pmatrix} \\begin{pmatrix} 2 \\ 3 \\ -1 \\end{pmatrix} = \\begin{pmatrix} 5 \\ 1 \\ -1 \\end{pmatrix}`}</MathBlock>
        <p>So <InlineMath>{`T(2 + 3x - x^2) = 5 + x - x^2`}</InlineMath>.</p>
        <p><strong>Verify:</strong> <InlineMath>{`(2 + 3x - x^2) + (3 - 2x) = 5 + x - x^2`}</InlineMath> ✓</p>
      </Callout>

      <h2>Summary</h2>

      <Callout type="info" title="Key Concepts">
        <p><strong>Matrix representation:</strong></p>
        <MathBlock>{`[T(\\mathbf{v})]_{\\mathcal{C}} = [T]_{\\mathcal{B}}^{\\mathcal{C}} [\\mathbf{v}]_{\\mathcal{B}}`}</MathBlock>

        <p className="mt-3"><strong>Constructing <InlineMath>{`[T]_{\\mathcal{B}}^{\\mathcal{C}}`}</InlineMath>:</strong></p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Column <InlineMath>{`j`}</InlineMath> = <InlineMath>{`[T(\\mathbf{v}_j)]_{\\mathcal{C}}`}</InlineMath></li>
        </ul>

        <p className="mt-3"><strong>Change of basis:</strong></p>
        <MathBlock>{`[T]_{\\mathcal{B}'} = P^{-1} [T]_{\\mathcal{B}} P`}</MathBlock>

        <p className="mt-3"><strong>Similar matrices:</strong> <InlineMath>{`B = P^{-1}AP`}</InlineMath></p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Represent the same transformation in different bases</li>
          <li>Share rank, determinant, trace, eigenvalues</li>
        </ul>

        <p className="mt-3"><strong>Composition:</strong> <InlineMath>{`[S \\circ T] = [S][T]`}</InlineMath></p>

        <p className="mt-3"><strong>Key isomorphism:</strong> <InlineMath>{`\\mathcal{L}(V, W) \\cong M_{m \\times n}`}</InlineMath></p>
      </Callout>
    </LessonLayout>
  );
}
