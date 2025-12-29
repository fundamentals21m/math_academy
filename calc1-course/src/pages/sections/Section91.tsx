import { LessonLayout } from '../../components/layout/LessonLayout';
import { Math as MathInline, MathBlock } from '../../components/common/MathBlock';
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
          Vectors <MathInline>{`\\mathbf{v}_1, \\ldots, \\mathbf{v}_k`}</MathInline> in a linear space <MathInline>{`V`}</MathInline> are
          <strong> linearly independent</strong> if the only solution to:
        </p>
        <MathBlock>{`c_1\\mathbf{v}_1 + c_2\\mathbf{v}_2 + \\cdots + c_k\\mathbf{v}_k = \\mathbf{0}`}</MathBlock>
        <p>is <MathInline>{`c_1 = c_2 = \\cdots = c_k = 0`}</MathInline>.</p>
        <p>Otherwise, the vectors are <strong>linearly dependent</strong>.</p>
      </Callout>

      <Callout type="example" title="Independence in P₂">
        <p>
          Are <MathInline>{`1, x, x^2`}</MathInline> linearly independent in <MathInline>{`\\mathcal{P}_2`}</MathInline>?
        </p>
        <p><strong>Solution:</strong> Suppose <MathInline>{`c_0 \\cdot 1 + c_1 \\cdot x + c_2 \\cdot x^2 = 0`}</MathInline> (the zero polynomial).</p>
        <p>
          This must hold for all <MathInline>{`x`}</MathInline>. The only way a polynomial can be
          identically zero is if all coefficients are zero.
        </p>
        <p>So <MathInline>{`c_0 = c_1 = c_2 = 0`}</MathInline>. The polynomials are <strong>linearly independent</strong>.</p>
      </Callout>

      <Callout type="example" title="Dependence in Function Space">
        <p>
          Are <MathInline>{`\\sin^2 x, \\cos^2 x, 1`}</MathInline> linearly independent in <MathInline>{`C(\\mathbb{R})`}</MathInline>?
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
          A <strong>basis</strong> for a linear space <MathInline>{`V`}</MathInline> is a set of
          vectors <MathInline>{`\\{\\mathbf{v}_1, \\ldots, \\mathbf{v}_n\\}`}</MathInline> that is:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Linearly independent</strong></li>
          <li><strong>Spans</strong> <MathInline>{`V`}</MathInline> (every vector in <MathInline>{`V`}</MathInline> is a linear combination)</li>
        </ol>
      </Callout>

      <Callout type="theorem" title="Unique Representation">
        <p>
          If <MathInline>{`\\{\\mathbf{v}_1, \\ldots, \\mathbf{v}_n\\}`}</MathInline> is a basis for <MathInline>{`V`}</MathInline>,
          then every <MathInline>{`\\mathbf{v} \\in V`}</MathInline> can be written <strong>uniquely</strong> as:
        </p>
        <MathBlock>{`\\mathbf{v} = c_1\\mathbf{v}_1 + c_2\\mathbf{v}_2 + \\cdots + c_n\\mathbf{v}_n`}</MathBlock>
        <p>
          The scalars <MathInline>{`(c_1, \\ldots, c_n)`}</MathInline> are the <strong>coordinates</strong> of <MathInline>{`\\mathbf{v}`}</MathInline> with
          respect to this basis.
        </p>
      </Callout>

      <Callout type="info" title="Proof of Uniqueness">
        <p>
          If <MathInline>{`\\mathbf{v} = \\sum c_i\\mathbf{v}_i = \\sum d_i\\mathbf{v}_i`}</MathInline>, then:
        </p>
        <MathBlock>{`\\sum (c_i - d_i)\\mathbf{v}_i = \\mathbf{0}`}</MathBlock>
        <p>
          By linear independence, <MathInline>{`c_i - d_i = 0`}</MathInline> for all <MathInline>{`i`}</MathInline>.
        </p>
      </Callout>

      <h2>Standard Bases</h2>

      <Callout type="example" title="Standard Basis for ℝⁿ">
        <p>
          The standard basis for <MathInline>{`\\mathbb{R}^n`}</MathInline> is:
        </p>
        <MathBlock>{`\\mathbf{e}_1 = (1, 0, \\ldots, 0), \\; \\mathbf{e}_2 = (0, 1, \\ldots, 0), \\; \\ldots, \\; \\mathbf{e}_n = (0, \\ldots, 0, 1)`}</MathBlock>
        <p>
          Every vector <MathInline>{`(x_1, \\ldots, x_n) = x_1\\mathbf{e}_1 + \\cdots + x_n\\mathbf{e}_n`}</MathInline>.
        </p>
      </Callout>

      <Callout type="example" title="Standard Basis for Pₙ">
        <p>
          The standard basis for <MathInline>{`\\mathcal{P}_n`}</MathInline> is:
        </p>
        <MathBlock>{`\\{1, x, x^2, \\ldots, x^n\\}`}</MathBlock>
        <p>
          Every polynomial of degree ≤ <MathInline>{`n`}</MathInline> can be written as <MathInline>{`a_0 + a_1 x + \\cdots + a_n x^n`}</MathInline>.
        </p>
      </Callout>

      <Callout type="example" title="Standard Basis for M_{m×n}">
        <p>
          The standard basis for <MathInline>{`M_{m \\times n}`}</MathInline> consists of matrices <MathInline>{`E_{ij}`}</MathInline> with
          1 in position <MathInline>{`(i, j)`}</MathInline> and 0 elsewhere.
        </p>
        <p>
          For <MathInline>{`M_{2 \\times 2}`}</MathInline>:
        </p>
        <MathBlock>{`E_{11} = \\begin{pmatrix} 1 & 0 \\ 0 & 0 \\end{pmatrix}, \\; E_{12} = \\begin{pmatrix} 0 & 1 \\ 0 & 0 \\end{pmatrix}, \\; E_{21} = \\begin{pmatrix} 0 & 0 \\ 1 & 0 \\end{pmatrix}, \\; E_{22} = \\begin{pmatrix} 0 & 0 \\ 0 & 1 \\end{pmatrix}`}</MathBlock>
      </Callout>

      <h2>Dimension</h2>

      <Callout type="theorem" title="Invariance of Basis Size">
        <p>
          If a linear space <MathInline>{`V`}</MathInline> has a finite basis, then all bases
          for <MathInline>{`V`}</MathInline> have the same number of elements.
        </p>
      </Callout>

      <Callout type="definition" title="Dimension">
        <p>
          The <strong>dimension</strong> of a finite-dimensional space <MathInline>{`V`}</MathInline>,
          denoted <MathInline>{`\\dim(V)`}</MathInline>, is the number of vectors in any basis.
        </p>
        <p>
          A space is <strong>finite-dimensional</strong> if it has a finite spanning set;
          otherwise, it is <strong>infinite-dimensional</strong>.
        </p>
      </Callout>

      <Callout type="example" title="Dimensions of Common Spaces">
        <ul className="list-disc pl-6 space-y-2">
          <li><MathInline>{`\\dim(\\mathbb{R}^n) = n`}</MathInline></li>
          <li><MathInline>{`\\dim(\\mathcal{P}_n) = n + 1`}</MathInline> (basis: <MathInline>{`1, x, \\ldots, x^n`}</MathInline>)</li>
          <li><MathInline>{`\\dim(M_{m \\times n}) = mn`}</MathInline></li>
          <li><MathInline>{`\\dim(\\{\\mathbf{0}\\}) = 0`}</MathInline> (the trivial space has empty basis)</li>
        </ul>
      </Callout>

      <Callout type="example" title="Infinite-Dimensional Spaces">
        <ul className="list-disc pl-6 space-y-2">
          <li><MathInline>{`\\mathcal{P}`}</MathInline> (all polynomials) — no finite spanning set</li>
          <li><MathInline>{`C[a, b]`}</MathInline> (continuous functions) — infinite-dimensional</li>
          <li>Sequence spaces — infinite-dimensional</li>
        </ul>
      </Callout>

      <h2>Key Theorems</h2>

      <Callout type="theorem" title="Dimension and Independence/Spanning">
        <p>Let <MathInline>{`V`}</MathInline> be an <MathInline>{`n`}</MathInline>-dimensional space:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Any linearly independent set has at most <MathInline>{`n`}</MathInline> vectors</li>
          <li>Any spanning set has at least <MathInline>{`n`}</MathInline> vectors</li>
          <li>Any linearly independent set of <MathInline>{`n`}</MathInline> vectors is a basis</li>
          <li>Any spanning set of <MathInline>{`n`}</MathInline> vectors is a basis</li>
        </ol>
      </Callout>

      <Callout type="info" title="Practical Use">
        <p>
          To show that <MathInline>{`n`}</MathInline> vectors form a basis for an <MathInline>{`n`}</MathInline>-dimensional
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
          Show that <MathInline>{`\\{(1, 1), (1, -1)\\}`}</MathInline> is a basis for <MathInline>{`\\mathbb{R}^2`}</MathInline>.
        </p>
        <p><strong>Solution:</strong> Since <MathInline>{`\\dim(\\mathbb{R}^2) = 2`}</MathInline>, we just need to verify independence:</p>
        <MathBlock>{`c_1(1, 1) + c_2(1, -1) = (0, 0)`}</MathBlock>
        <MathBlock>{`c_1 + c_2 = 0, \\quad c_1 - c_2 = 0 \\implies c_1 = c_2 = 0`}</MathBlock>
        <p>Independent, hence a basis. ✓</p>
      </Callout>

      <h2>Dimension of Subspaces</h2>

      <Callout type="theorem" title="Subspace Dimension">
        <p>If <MathInline>{`W`}</MathInline> is a subspace of a finite-dimensional space <MathInline>{`V`}</MathInline>, then:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li><MathInline>{`W`}</MathInline> is finite-dimensional</li>
          <li><MathInline>{`\\dim(W) \\leq \\dim(V)`}</MathInline></li>
          <li><MathInline>{`\\dim(W) = \\dim(V)`}</MathInline> if and only if <MathInline>{`W = V`}</MathInline></li>
        </ol>
      </Callout>

      <Callout type="example" title="Subspace Dimension">
        <p>
          Find the dimension of <MathInline>{`W = \\{(x, y, z) : x + y + z = 0\\}`}</MathInline> in <MathInline>{`\\mathbb{R}^3`}</MathInline>.
        </p>
        <p><strong>Solution:</strong> Solve for <MathInline>{`x`}</MathInline>: <MathInline>{`x = -y - z`}</MathInline>.</p>
        <MathBlock>{`(x, y, z) = (-y - z, y, z) = y(-1, 1, 0) + z(-1, 0, 1)`}</MathBlock>
        <p>
          Basis: <MathInline>{`\\{(-1, 1, 0), (-1, 0, 1)\\}`}</MathInline>
        </p>
        <p>
          <MathInline>{`\\dim(W) = 2`}</MathInline> (a plane through the origin).
        </p>
      </Callout>

      <Callout type="theorem" title="Dimension Formula for Sum">
        <p>For subspaces <MathInline>{`U`}</MathInline> and <MathInline>{`W`}</MathInline> of <MathInline>{`V`}</MathInline>:</p>
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
          Extend <MathInline>{`\\{(1, 0, 0)\\}`}</MathInline> to a basis for <MathInline>{`\\mathbb{R}^3`}</MathInline>.
        </p>
        <p><strong>Solution:</strong> Need 2 more vectors independent from <MathInline>{`(1, 0, 0)`}</MathInline> and each other.</p>
        <p>
          <MathInline>{`(0, 1, 0)`}</MathInline> works (not a multiple of <MathInline>{`(1, 0, 0)`}</MathInline>).
        </p>
        <p>
          <MathInline>{`(0, 0, 1)`}</MathInline> works (not in span of the first two).
        </p>
        <p>
          Basis: <MathInline>{`\\{(1, 0, 0), (0, 1, 0), (0, 0, 1)\\}`}</MathInline> (the standard basis).
        </p>
      </Callout>

      <h2>Summary</h2>

      <Callout type="info" title="Key Concepts">
        <p><strong>Basis:</strong> Linearly independent + spanning</p>
        <p><strong>Dimension:</strong> Number of vectors in any basis</p>

        <p className="mt-3"><strong>Standard dimensions:</strong></p>
        <ul className="list-disc pl-6 space-y-1">
          <li><MathInline>{`\\dim(\\mathbb{R}^n) = n`}</MathInline></li>
          <li><MathInline>{`\\dim(\\mathcal{P}_n) = n + 1`}</MathInline></li>
          <li><MathInline>{`\\dim(M_{m \\times n}) = mn`}</MathInline></li>
        </ul>

        <p className="mt-3"><strong>Key facts for n-dimensional V:</strong></p>
        <ul className="list-disc pl-6 space-y-1">
          <li><MathInline>{`n`}</MathInline> independent vectors ⟹ basis</li>
          <li><MathInline>{`n`}</MathInline> spanning vectors ⟹ basis</li>
          <li>More than <MathInline>{`n`}</MathInline> vectors ⟹ dependent</li>
          <li>Fewer than <MathInline>{`n`}</MathInline> vectors ⟹ don't span</li>
        </ul>

        <p className="mt-3"><strong>Subspace dimension:</strong> <MathInline>{`\\dim(W) \\leq \\dim(V)`}</MathInline></p>
        <p><strong>Sum formula:</strong> <MathInline>{`\\dim(U + W) = \\dim U + \\dim W - \\dim(U \\cap W)`}</MathInline></p>
      </Callout>
    </LessonLayout>
  );
}
