import { LessonLayout } from '../../components/layout/LessonLayout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';

export default function Section91() {
  return (
    <LessonLayout sectionId={91}>
      <h1>Bases and Dimension</h1>

      <p>
        A <strong>basis</strong> provides a coordinate system for a linear space—every vector
        can be written uniquely as a linear combination of basis vectors. The number of vectors
        in a basis is the <strong>dimension</strong>, a fundamental invariant of the space.
      </p>

      <h2>Linear Independence in General Spaces</h2>

      <Callout type="definition" title="Linear Independence">
        <p>
          Vectors <InlineMath>{`\\mathbf{v}_1, \\ldots, \\mathbf{v}_k`}</InlineMath> in a linear space <InlineMath>{`V`}</InlineMath> are
          <strong> linearly independent</strong> if the only solution to:
        </p>
        <MathBlock>{`c_1\\mathbf{v}_1 + c_2\\mathbf{v}_2 + \\cdots + c_k\\mathbf{v}_k = \\mathbf{0}`}</MathBlock>
        <p>is <InlineMath>{`c_1 = c_2 = \\cdots = c_k = 0`}</InlineMath>.</p>
        <p>Otherwise, the vectors are <strong>linearly dependent</strong>.</p>
      </Callout>

      <Callout type="example" title="Independence in P₂">
        <p>
          Are <InlineMath>{`1, x, x^2`}</InlineMath> linearly independent in <InlineMath>{`\\mathcal{P}_2`}</InlineMath>?
        </p>
        <p><strong>Solution:</strong> Suppose <InlineMath>{`c_0 \\cdot 1 + c_1 \\cdot x + c_2 \\cdot x^2 = 0`}</InlineMath> (the zero polynomial).</p>
        <p>
          This must hold for all <InlineMath>{`x`}</InlineMath>. The only way a polynomial can be
          identically zero is if all coefficients are zero.
        </p>
        <p>So <InlineMath>{`c_0 = c_1 = c_2 = 0`}</InlineMath>. The polynomials are <strong>linearly independent</strong>.</p>
      </Callout>

      <Callout type="example" title="Dependence in Function Space">
        <p>
          Are <InlineMath>{`\\sin^2 x, \\cos^2 x, 1`}</InlineMath> linearly independent in <InlineMath>{`C(\\mathbb{R})`}</InlineMath>?
        </p>
        <p><strong>Solution:</strong> We have the identity:</p>
        <MathBlock>{`\\sin^2 x + \\cos^2 x - 1 = 0`}</MathBlock>
        <p>
          This is a nontrivial linear combination equal to zero, so the functions
          are <strong>linearly dependent</strong>.
        </p>
      </Callout>

      <h2>Basis</h2>

      <Callout type="definition" title="Basis">
        <p>
          A <strong>basis</strong> for a linear space <InlineMath>{`V`}</InlineMath> is a set of
          vectors <InlineMath>{`\\{\\mathbf{v}_1, \\ldots, \\mathbf{v}_n\\}`}</InlineMath> that is:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Linearly independent</strong></li>
          <li><strong>Spans</strong> <InlineMath>{`V`}</InlineMath> (every vector in <InlineMath>{`V`}</InlineMath> is a linear combination)</li>
        </ol>
      </Callout>

      <Callout type="theorem" title="Unique Representation">
        <p>
          If <InlineMath>{`\\{\\mathbf{v}_1, \\ldots, \\mathbf{v}_n\\}`}</InlineMath> is a basis for <InlineMath>{`V`}</InlineMath>,
          then every <InlineMath>{`\\mathbf{v} \\in V`}</InlineMath> can be written <strong>uniquely</strong> as:
        </p>
        <MathBlock>{`\\mathbf{v} = c_1\\mathbf{v}_1 + c_2\\mathbf{v}_2 + \\cdots + c_n\\mathbf{v}_n`}</MathBlock>
        <p>
          The scalars <InlineMath>{`(c_1, \\ldots, c_n)`}</InlineMath> are the <strong>coordinates</strong> of <InlineMath>{`\\mathbf{v}`}</InlineMath> with
          respect to this basis.
        </p>
      </Callout>

      <Callout type="info" title="Proof of Uniqueness">
        <p>
          If <InlineMath>{`\\mathbf{v} = \\sum c_i\\mathbf{v}_i = \\sum d_i\\mathbf{v}_i`}</InlineMath>, then:
        </p>
        <MathBlock>{`\\sum (c_i - d_i)\\mathbf{v}_i = \\mathbf{0}`}</MathBlock>
        <p>
          By linear independence, <InlineMath>{`c_i - d_i = 0`}</InlineMath> for all <InlineMath>{`i`}</InlineMath>.
        </p>
      </Callout>

      <h2>Standard Bases</h2>

      <Callout type="example" title="Standard Basis for ℝⁿ">
        <p>
          The standard basis for <InlineMath>{`\\mathbb{R}^n`}</InlineMath> is:
        </p>
        <MathBlock>{`\\mathbf{e}_1 = (1, 0, \\ldots, 0), \\; \\mathbf{e}_2 = (0, 1, \\ldots, 0), \\; \\ldots, \\; \\mathbf{e}_n = (0, \\ldots, 0, 1)`}</MathBlock>
        <p>
          Every vector <InlineMath>{`(x_1, \\ldots, x_n) = x_1\\mathbf{e}_1 + \\cdots + x_n\\mathbf{e}_n`}</InlineMath>.
        </p>
      </Callout>

      <Callout type="example" title="Standard Basis for Pₙ">
        <p>
          The standard basis for <InlineMath>{`\\mathcal{P}_n`}</InlineMath> is:
        </p>
        <MathBlock>{`\\{1, x, x^2, \\ldots, x^n\\}`}</MathBlock>
        <p>
          Every polynomial of degree ≤ <InlineMath>{`n`}</InlineMath> can be written as <InlineMath>{`a_0 + a_1 x + \\cdots + a_n x^n`}</InlineMath>.
        </p>
      </Callout>

      <Callout type="example" title="Standard Basis for M_{m×n}">
        <p>
          The standard basis for <InlineMath>{`M_{m \\times n}`}</InlineMath> consists of matrices <InlineMath>{`E_{ij}`}</InlineMath> with
          1 in position <InlineMath>{`(i, j)`}</InlineMath> and 0 elsewhere.
        </p>
        <p>
          For <InlineMath>{`M_{2 \\times 2}`}</InlineMath>:
        </p>
        <MathBlock>{`E_{11} = \\begin{pmatrix} 1 & 0 \\ 0 & 0 \\end{pmatrix}, \\; E_{12} = \\begin{pmatrix} 0 & 1 \\ 0 & 0 \\end{pmatrix}, \\; E_{21} = \\begin{pmatrix} 0 & 0 \\ 1 & 0 \\end{pmatrix}, \\; E_{22} = \\begin{pmatrix} 0 & 0 \\ 0 & 1 \\end{pmatrix}`}</MathBlock>
      </Callout>

      <h2>Dimension</h2>

      <Callout type="theorem" title="Invariance of Basis Size">
        <p>
          If a linear space <InlineMath>{`V`}</InlineMath> has a finite basis, then all bases
          for <InlineMath>{`V`}</InlineMath> have the same number of elements.
        </p>
      </Callout>

      <Callout type="definition" title="Dimension">
        <p>
          The <strong>dimension</strong> of a finite-dimensional space <InlineMath>{`V`}</InlineMath>,
          denoted <InlineMath>{`\\dim(V)`}</InlineMath>, is the number of vectors in any basis.
        </p>
        <p>
          A space is <strong>finite-dimensional</strong> if it has a finite spanning set;
          otherwise, it is <strong>infinite-dimensional</strong>.
        </p>
      </Callout>

      <Callout type="example" title="Dimensions of Common Spaces">
        <ul className="list-disc pl-6 space-y-2">
          <li><InlineMath>{`\\dim(\\mathbb{R}^n) = n`}</InlineMath></li>
          <li><InlineMath>{`\\dim(\\mathcal{P}_n) = n + 1`}</InlineMath> (basis: <InlineMath>{`1, x, \\ldots, x^n`}</InlineMath>)</li>
          <li><InlineMath>{`\\dim(M_{m \\times n}) = mn`}</InlineMath></li>
          <li><InlineMath>{`\\dim(\\{\\mathbf{0}\\}) = 0`}</InlineMath> (the trivial space has empty basis)</li>
        </ul>
      </Callout>

      <Callout type="example" title="Infinite-Dimensional Spaces">
        <ul className="list-disc pl-6 space-y-2">
          <li><InlineMath>{`\\mathcal{P}`}</InlineMath> (all polynomials) — no finite spanning set</li>
          <li><InlineMath>{`C[a, b]`}</InlineMath> (continuous functions) — infinite-dimensional</li>
          <li>Sequence spaces — infinite-dimensional</li>
        </ul>
      </Callout>

      <h2>Key Theorems</h2>

      <Callout type="theorem" title="Dimension and Independence/Spanning">
        <p>Let <InlineMath>{`V`}</InlineMath> be an <InlineMath>{`n`}</InlineMath>-dimensional space:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Any linearly independent set has at most <InlineMath>{`n`}</InlineMath> vectors</li>
          <li>Any spanning set has at least <InlineMath>{`n`}</InlineMath> vectors</li>
          <li>Any linearly independent set of <InlineMath>{`n`}</InlineMath> vectors is a basis</li>
          <li>Any spanning set of <InlineMath>{`n`}</InlineMath> vectors is a basis</li>
        </ol>
      </Callout>

      <Callout type="info" title="Practical Use">
        <p>
          To show that <InlineMath>{`n`}</InlineMath> vectors form a basis for an <InlineMath>{`n`}</InlineMath>-dimensional
          space, it suffices to check either:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Linear independence only, or</li>
          <li>Spanning only</li>
        </ul>
        <p>The other property follows automatically!</p>
      </Callout>

      <Callout type="example" title="Alternative Basis for ℝ²">
        <p>
          Show that <InlineMath>{`\\{(1, 1), (1, -1)\\}`}</InlineMath> is a basis for <InlineMath>{`\\mathbb{R}^2`}</InlineMath>.
        </p>
        <p><strong>Solution:</strong> Since <InlineMath>{`\\dim(\\mathbb{R}^2) = 2`}</InlineMath>, we just need to verify independence:</p>
        <MathBlock>{`c_1(1, 1) + c_2(1, -1) = (0, 0)`}</MathBlock>
        <MathBlock>{`c_1 + c_2 = 0, \\quad c_1 - c_2 = 0 \\implies c_1 = c_2 = 0`}</MathBlock>
        <p>Independent, hence a basis. ✓</p>
      </Callout>

      <h2>Dimension of Subspaces</h2>

      <Callout type="theorem" title="Subspace Dimension">
        <p>If <InlineMath>{`W`}</InlineMath> is a subspace of a finite-dimensional space <InlineMath>{`V`}</InlineMath>, then:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li><InlineMath>{`W`}</InlineMath> is finite-dimensional</li>
          <li><InlineMath>{`\\dim(W) \\leq \\dim(V)`}</InlineMath></li>
          <li><InlineMath>{`\\dim(W) = \\dim(V)`}</InlineMath> if and only if <InlineMath>{`W = V`}</InlineMath></li>
        </ol>
      </Callout>

      <Callout type="example" title="Subspace Dimension">
        <p>
          Find the dimension of <InlineMath>{`W = \\{(x, y, z) : x + y + z = 0\\}`}</InlineMath> in <InlineMath>{`\\mathbb{R}^3`}</InlineMath>.
        </p>
        <p><strong>Solution:</strong> Solve for <InlineMath>{`x`}</InlineMath>: <InlineMath>{`x = -y - z`}</InlineMath>.</p>
        <MathBlock>{`(x, y, z) = (-y - z, y, z) = y(-1, 1, 0) + z(-1, 0, 1)`}</MathBlock>
        <p>
          Basis: <InlineMath>{`\\{(-1, 1, 0), (-1, 0, 1)\\}`}</InlineMath>
        </p>
        <p>
          <InlineMath>{`\\dim(W) = 2`}</InlineMath> (a plane through the origin).
        </p>
      </Callout>

      <Callout type="theorem" title="Dimension Formula for Sum">
        <p>For subspaces <InlineMath>{`U`}</InlineMath> and <InlineMath>{`W`}</InlineMath> of <InlineMath>{`V`}</InlineMath>:</p>
        <MathBlock>{`\\dim(U + W) = \\dim(U) + \\dim(W) - \\dim(U \\cap W)`}</MathBlock>
      </Callout>

      <h2>Extending and Reducing Sets</h2>

      <Callout type="theorem" title="Extending to a Basis">
        <p>
          Any linearly independent set in a finite-dimensional space can be extended to a basis.
        </p>
        <p>
          Start with independent vectors and add vectors (not in the span) until you have a basis.
        </p>
      </Callout>

      <Callout type="theorem" title="Reducing to a Basis">
        <p>
          Any spanning set contains a basis.
        </p>
        <p>
          Remove dependent vectors one at a time until what remains is independent (hence a basis).
        </p>
      </Callout>

      <Callout type="example" title="Extending to a Basis">
        <p>
          Extend <InlineMath>{`\\{(1, 0, 0)\\}`}</InlineMath> to a basis for <InlineMath>{`\\mathbb{R}^3`}</InlineMath>.
        </p>
        <p><strong>Solution:</strong> Need 2 more vectors independent from <InlineMath>{`(1, 0, 0)`}</InlineMath> and each other.</p>
        <p>
          <InlineMath>{`(0, 1, 0)`}</InlineMath> works (not a multiple of <InlineMath>{`(1, 0, 0)`}</InlineMath>).
        </p>
        <p>
          <InlineMath>{`(0, 0, 1)`}</InlineMath> works (not in span of the first two).
        </p>
        <p>
          Basis: <InlineMath>{`\\{(1, 0, 0), (0, 1, 0), (0, 0, 1)\\}`}</InlineMath> (the standard basis).
        </p>
      </Callout>

      <h2>Summary</h2>

      <Callout type="info" title="Key Concepts">
        <p><strong>Basis:</strong> Linearly independent + spanning</p>
        <p><strong>Dimension:</strong> Number of vectors in any basis</p>

        <p className="mt-3"><strong>Standard dimensions:</strong></p>
        <ul className="list-disc pl-6 space-y-1">
          <li><InlineMath>{`\\dim(\\mathbb{R}^n) = n`}</InlineMath></li>
          <li><InlineMath>{`\\dim(\\mathcal{P}_n) = n + 1`}</InlineMath></li>
          <li><InlineMath>{`\\dim(M_{m \\times n}) = mn`}</InlineMath></li>
        </ul>

        <p className="mt-3"><strong>Key facts for n-dimensional V:</strong></p>
        <ul className="list-disc pl-6 space-y-1">
          <li><InlineMath>{`n`}</InlineMath> independent vectors ⟹ basis</li>
          <li><InlineMath>{`n`}</InlineMath> spanning vectors ⟹ basis</li>
          <li>More than <InlineMath>{`n`}</InlineMath> vectors ⟹ dependent</li>
          <li>Fewer than <InlineMath>{`n`}</InlineMath> vectors ⟹ don't span</li>
        </ul>

        <p className="mt-3"><strong>Subspace dimension:</strong> <InlineMath>{`\\dim(W) \\leq \\dim(V)`}</InlineMath></p>
        <p><strong>Sum formula:</strong> <InlineMath>{`\\dim(U + W) = \\dim U + \\dim W - \\dim(U \\cap W)`}</InlineMath></p>
      </Callout>
    </LessonLayout>
  );
}
