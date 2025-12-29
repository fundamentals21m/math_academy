import { LessonLayout } from '../../components/layout/LessonLayout';
import { Math as MathInline, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';

export default function Section96() {
  return (
    <LessonLayout sectionId={96}>
      <h1>Nullity and Rank</h1>

      <p>
        The <strong>nullity</strong> and <strong>rank</strong> of a linear transformation measure
        the dimensions of its null space and range. The <strong>Rank-Nullity Theorem</strong> reveals
        a fundamental relationship: their sum equals the dimension of the domain.
      </p>

      <h2>Definitions</h2>

      <Callout type="definition" title="Nullity">
        <p>
          The <strong>nullity</strong> of a linear transformation <MathInline>{`T: V \\to W`}</MathInline> is:
        </p>
        <MathBlock>{`\\text{nullity}(T) = \\dim(\\text{Null}(T))`}</MathBlock>
        <p>
          It measures "how many dimensions are collapsed to zero."
        </p>
      </Callout>

      <Callout type="definition" title="Rank">
        <p>
          The <strong>rank</strong> of a linear transformation <MathInline>{`T: V \\to W`}</MathInline> is:
        </p>
        <MathBlock>{`\\text{rank}(T) = \\dim(\\text{Range}(T))`}</MathBlock>
        <p>
          It measures "how many dimensions survive in the output."
        </p>
      </Callout>

      <h2>The Rank-Nullity Theorem</h2>

      <Callout type="theorem" title="Rank-Nullity Theorem (Dimension Theorem)">
        <p>
          If <MathInline>{`T: V \\to W`}</MathInline> is a linear transformation and <MathInline>{`V`}</MathInline> is
          finite-dimensional, then:
        </p>
        <MathBlock>{`\\dim(V) = \\text{rank}(T) + \\text{nullity}(T)`}</MathBlock>
        <p>Equivalently:</p>
        <MathBlock>{`\\dim(V) = \\dim(\\text{Range}(T)) + \\dim(\\text{Null}(T))`}</MathBlock>
      </Callout>

      <Callout type="info" title="Intuition">
        <p>
          The domain splits into two parts:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Dimensions that map to zero (nullity)</li>
          <li>Dimensions that map to distinct outputs (rank)</li>
        </ul>
        <p>Together, they account for all dimensions of <MathInline>{`V`}</MathInline>.</p>
      </Callout>

      <Callout type="info" title="Proof Sketch">
        <p>
          Let <MathInline>{`\\{\\mathbf{u}_1, \\ldots, \\mathbf{u}_k\\}`}</MathInline> be a basis for <MathInline>{`\\text{Null}(T)`}</MathInline>.
        </p>
        <p>
          Extend to a basis <MathInline>{`\\{\\mathbf{u}_1, \\ldots, \\mathbf{u}_k, \\mathbf{v}_1, \\ldots, \\mathbf{v}_r\\}`}</MathInline> for <MathInline>{`V`}</MathInline>.
        </p>
        <p>
          Then <MathInline>{`\\{T(\\mathbf{v}_1), \\ldots, T(\\mathbf{v}_r)\\}`}</MathInline> is a basis for <MathInline>{`\\text{Range}(T)`}</MathInline>.
        </p>
        <p>
          Thus <MathInline>{`\\dim(V) = k + r = \\text{nullity}(T) + \\text{rank}(T)`}</MathInline>.
        </p>
      </Callout>

      <h2>Examples</h2>

      <Callout type="example" title="Differentiation">
        <p>
          For <MathInline>{`D: \\mathcal{P}_3 \\to \\mathcal{P}_2`}</MathInline> (differentiation):
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li><MathInline>{`\\dim(\\mathcal{P}_3) = 4`}</MathInline> (basis: <MathInline>{`1, x, x^2, x^3`}</MathInline>)</li>
          <li><MathInline>{`\\text{Null}(D) = \\{c : c \\in \\mathbb{R}\\}`}</MathInline> (constants), so nullity = 1</li>
          <li><MathInline>{`\\text{Range}(D) = \\mathcal{P}_2`}</MathInline>, so rank = 3</li>
        </ul>
        <p>Check: <MathInline>{`4 = 3 + 1`}</MathInline> ✓</p>
      </Callout>

      <Callout type="example" title="Projection onto a Plane">
        <p>
          Let <MathInline>{`T: \\mathbb{R}^3 \\to \\mathbb{R}^3`}</MathInline> be projection onto the <MathInline>{`xy`}</MathInline>-plane:
        </p>
        <MathBlock>{`T(x, y, z) = (x, y, 0)`}</MathBlock>
        <ul className="list-disc pl-6 space-y-1">
          <li><MathInline>{`\\text{Null}(T) = \\{(0, 0, z) : z \\in \\mathbb{R}\\}`}</MathInline> (the <MathInline>{`z`}</MathInline>-axis), nullity = 1</li>
          <li><MathInline>{`\\text{Range}(T) = \\{(x, y, 0)\\}`}</MathInline> (the <MathInline>{`xy`}</MathInline>-plane), rank = 2</li>
        </ul>
        <p>Check: <MathInline>{`3 = 2 + 1`}</MathInline> ✓</p>
      </Callout>

      <Callout type="example" title="Matrix Transformation">
        <p>
          For <MathInline>{`T(\\mathbf{x}) = A\\mathbf{x}`}</MathInline> where:
        </p>
        <MathBlock>{`A = \\begin{pmatrix} 1 & 2 & 3 \\ 2 & 4 & 6 \\end{pmatrix}`}</MathBlock>
        <p>
          Row reduce to find rank and nullity:
        </p>
        <MathBlock>{`A \\to \\begin{pmatrix} 1 & 2 & 3 \\ 0 & 0 & 0 \\end{pmatrix}`}</MathBlock>
        <ul className="list-disc pl-6 space-y-1">
          <li>rank(<MathInline>{`A`}</MathInline>) = 1 (one pivot)</li>
          <li>nullity(<MathInline>{`A`}</MathInline>) = 3 - 1 = 2 (two free variables)</li>
        </ul>
        <p>Check: <MathInline>{`3 = 1 + 2`}</MathInline> ✓</p>
      </Callout>

      <h2>Consequences of Rank-Nullity</h2>

      <Callout type="theorem" title="Injectivity Criterion">
        <p>
          For <MathInline>{`T: V \\to W`}</MathInline> with <MathInline>{`\\dim(V) = n`}</MathInline>:
        </p>
        <MathBlock>{`T \\text{ is injective} \\iff \\text{nullity}(T) = 0 \\iff \\text{rank}(T) = n`}</MathBlock>
      </Callout>

      <Callout type="theorem" title="Surjectivity Criterion">
        <p>
          For <MathInline>{`T: V \\to W`}</MathInline> with <MathInline>{`\\dim(W) = m`}</MathInline>:
        </p>
        <MathBlock>{`T \\text{ is surjective} \\iff \\text{rank}(T) = m`}</MathBlock>
      </Callout>

      <Callout type="theorem" title="Isomorphism Criterion">
        <p>
          If <MathInline>{`\\dim(V) = \\dim(W) = n`}</MathInline>, then:
        </p>
        <MathBlock>{`T \\text{ is an isomorphism} \\iff \\text{rank}(T) = n \\iff \\text{nullity}(T) = 0`}</MathBlock>
        <p>For square matrices: invertible ⟺ full rank ⟺ trivial null space.</p>
      </Callout>

      <Callout type="theorem" title="Dimension Constraints">
        <p>For <MathInline>{`T: V \\to W`}</MathInline>:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <MathInline>{`\\text{rank}(T) \\leq \\min(\\dim V, \\dim W)`}</MathInline>
          </li>
          <li>
            If <MathInline>{`\\dim V > \\dim W`}</MathInline>, then <MathInline>{`T`}</MathInline> cannot be injective
            <br />
            <span className="text-sm">(nullity must be positive)</span>
          </li>
          <li>
            If <MathInline>{`\\dim V < \\dim W`}</MathInline>, then <MathInline>{`T`}</MathInline> cannot be surjective
            <br />
            <span className="text-sm">(rank cannot reach <MathInline>{`\\dim W`}</MathInline>)</span>
          </li>
        </ul>
      </Callout>

      <h2>Rank and Nullity for Matrices</h2>

      <Callout type="theorem" title="Matrix Rank">
        <p>
          For an <MathInline>{`m \\times n`}</MathInline> matrix <MathInline>{`A`}</MathInline>:
        </p>
        <MathBlock>{`\\text{rank}(A) = \\dim(\\text{Col}(A)) = \\dim(\\text{Row}(A))`}</MathBlock>
        <p>
          The column rank equals the row rank (both equal the number of pivots in row echelon form).
        </p>
      </Callout>

      <Callout type="theorem" title="Rank-Nullity for Matrices">
        <p>
          For an <MathInline>{`m \\times n`}</MathInline> matrix <MathInline>{`A`}</MathInline>:
        </p>
        <MathBlock>{`n = \\text{rank}(A) + \\text{nullity}(A)`}</MathBlock>
        <p>where:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>rank(<MathInline>{`A`}</MathInline>) = number of pivot columns</li>
          <li>nullity(<MathInline>{`A`}</MathInline>) = number of free variables = <MathInline>{`n - \\text{rank}(A)`}</MathInline></li>
        </ul>
      </Callout>

      <Callout type="example" title="Computing Rank and Nullity">
        <p>Find the rank and nullity of:</p>
        <MathBlock>{`A = \\begin{pmatrix} 1 & 2 & 1 & 0 \\ 2 & 4 & 0 & 2 \\ 3 & 6 & 1 & 2 \\end{pmatrix}`}</MathBlock>
        <p><strong>Solution:</strong> Row reduce:</p>
        <MathBlock>{`A \\to \\begin{pmatrix} 1 & 2 & 1 & 0 \\ 0 & 0 & -2 & 2 \\ 0 & 0 & 0 & 0 \\end{pmatrix} \\to \\begin{pmatrix} 1 & 2 & 0 & 1 \\ 0 & 0 & 1 & -1 \\ 0 & 0 & 0 & 0 \\end{pmatrix}`}</MathBlock>
        <ul className="list-disc pl-6 space-y-1">
          <li>Pivots in columns 1 and 3: rank = 2</li>
          <li>Free variables: <MathInline>{`x_2, x_4`}</MathInline>: nullity = 2</li>
        </ul>
        <p>Check: <MathInline>{`4 = 2 + 2`}</MathInline> ✓</p>
      </Callout>

      <h2>Applications</h2>

      <Callout type="theorem" title="Solving Linear Systems">
        <p>
          For the system <MathInline>{`A\\mathbf{x} = \\mathbf{b}`}</MathInline> where <MathInline>{`A`}</MathInline> is <MathInline>{`m \\times n`}</MathInline>:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Existence:</strong> Solution exists ⟺ <MathInline>{`\\mathbf{b} \\in \\text{Col}(A)`}</MathInline>
          </li>
          <li>
            <strong>Uniqueness:</strong> Solution is unique ⟺ nullity(<MathInline>{`A`}</MathInline>) = 0
          </li>
          <li>
            <strong>If solutions exist:</strong> The solution set is a translate of Null(<MathInline>{`A`}</MathInline>),
            with dimension = nullity(<MathInline>{`A`}</MathInline>)
          </li>
        </ul>
      </Callout>

      <Callout type="example" title="Solution Space Structure">
        <p>
          If <MathInline>{`A\\mathbf{x} = \\mathbf{b}`}</MathInline> has a particular solution <MathInline>{`\\mathbf{x}_p`}</MathInline>, then:
        </p>
        <MathBlock>{`\\text{Solution set} = \\{\\mathbf{x}_p + \\mathbf{x}_h : \\mathbf{x}_h \\in \\text{Null}(A)\\}`}</MathBlock>
        <p>
          The solution set is an affine subspace of dimension nullity(<MathInline>{`A`}</MathInline>).
        </p>
      </Callout>

      <Callout type="theorem" title="Fundamental Theorem of Linear Algebra">
        <p>For an <MathInline>{`m \\times n`}</MathInline> matrix <MathInline>{`A`}</MathInline>:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li><MathInline>{`\\text{Null}(A) \\perp \\text{Row}(A)`}</MathInline> in <MathInline>{`\\mathbb{R}^n`}</MathInline></li>
          <li><MathInline>{`\\text{Null}(A^T) \\perp \\text{Col}(A)`}</MathInline> in <MathInline>{`\\mathbb{R}^m`}</MathInline></li>
          <li><MathInline>{`\\dim(\\text{Null}(A)) + \\dim(\\text{Row}(A)) = n`}</MathInline></li>
          <li><MathInline>{`\\dim(\\text{Null}(A^T)) + \\dim(\\text{Col}(A)) = m`}</MathInline></li>
        </ol>
      </Callout>

      <h2>Rank of Special Matrices</h2>

      <Callout type="example" title="Rank Examples">
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Zero matrix:</strong> rank = 0, nullity = <MathInline>{`n`}</MathInline>
          </li>
          <li>
            <strong>Identity matrix <MathInline>{`I_n`}</MathInline>:</strong> rank = <MathInline>{`n`}</MathInline>, nullity = 0
          </li>
          <li>
            <strong>Projection matrix <MathInline>{`P`}</MathInline> onto <MathInline>{`k`}</MathInline>-dimensional subspace:</strong>
            <br />rank = <MathInline>{`k`}</MathInline>, nullity = <MathInline>{`n - k`}</MathInline>
          </li>
          <li>
            <strong>Outer product <MathInline>{`\\mathbf{u}\\mathbf{v}^T`}</MathInline> (nonzero):</strong> rank = 1
          </li>
        </ul>
      </Callout>

      <Callout type="theorem" title="Rank Inequalities">
        <p>For matrices <MathInline>{`A`}</MathInline> and <MathInline>{`B`}</MathInline> of compatible sizes:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><MathInline>{`\\text{rank}(AB) \\leq \\min(\\text{rank}(A), \\text{rank}(B))`}</MathInline></li>
          <li><MathInline>{`\\text{rank}(A + B) \\leq \\text{rank}(A) + \\text{rank}(B)`}</MathInline></li>
          <li><MathInline>{`\\text{rank}(A) = \\text{rank}(A^T) = \\text{rank}(A^T A) = \\text{rank}(A A^T)`}</MathInline></li>
        </ul>
      </Callout>

      <h2>Composition of Transformations</h2>

      <Callout type="theorem" title="Rank of Composition">
        <p>
          For linear transformations <MathInline>{`T: U \\to V`}</MathInline> and <MathInline>{`S: V \\to W`}</MathInline>:
        </p>
        <MathBlock>{`\\text{rank}(S \\circ T) \\leq \\min(\\text{rank}(S), \\text{rank}(T))`}</MathBlock>
      </Callout>

      <Callout type="theorem" title="Nullity of Composition">
        <p>
          For <MathInline>{`S \\circ T: U \\to W`}</MathInline>:
        </p>
        <MathBlock>{`\\text{nullity}(T) \\leq \\text{nullity}(S \\circ T) \\leq \\text{nullity}(T) + \\text{nullity}(S)`}</MathBlock>
      </Callout>

      <h2>Summary</h2>

      <Callout type="info" title="Key Concepts">
        <p><strong>Nullity:</strong> <MathInline>{`\\text{nullity}(T) = \\dim(\\text{Null}(T))`}</MathInline></p>
        <p><strong>Rank:</strong> <MathInline>{`\\text{rank}(T) = \\dim(\\text{Range}(T))`}</MathInline></p>

        <p className="mt-3"><strong>Rank-Nullity Theorem:</strong></p>
        <MathBlock>{`\\dim(V) = \\text{rank}(T) + \\text{nullity}(T)`}</MathBlock>

        <p className="mt-3"><strong>Consequences:</strong></p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Injective ⟺ nullity = 0 ⟺ rank = dim(<MathInline>{`V`}</MathInline>)</li>
          <li>Surjective ⟺ rank = dim(<MathInline>{`W`}</MathInline>)</li>
          <li>Isomorphism ⟺ both (requires dim(<MathInline>{`V`}</MathInline>) = dim(<MathInline>{`W`}</MathInline>))</li>
        </ul>

        <p className="mt-3"><strong>For matrices:</strong></p>
        <ul className="list-disc pl-6 space-y-1">
          <li>rank = number of pivots = dim(Col(<MathInline>{`A`}</MathInline>)) = dim(Row(<MathInline>{`A`}</MathInline>))</li>
          <li>nullity = number of free variables</li>
          <li>Null(<MathInline>{`A`}</MathInline>) ⊥ Row(<MathInline>{`A`}</MathInline>)</li>
        </ul>
      </Callout>
    </LessonLayout>
  );
}
