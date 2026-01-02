import { LessonLayout } from '../../components/layout/LessonLayout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
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
          The <strong>nullity</strong> of a linear transformation <InlineMath>{`T: V \\to W`}</InlineMath> is:
        </p>
        <MathBlock>{`\\text{nullity}(T) = \\dim(\\text{Null}(T))`}</MathBlock>
        <p>
          It measures "how many dimensions are collapsed to zero."
        </p>
      </Callout>

      <Callout type="definition" title="Rank">
        <p>
          The <strong>rank</strong> of a linear transformation <InlineMath>{`T: V \\to W`}</InlineMath> is:
        </p>
        <MathBlock>{`\\text{rank}(T) = \\dim(\\text{Range}(T))`}</MathBlock>
        <p>
          It measures "how many dimensions survive in the output."
        </p>
      </Callout>

      <h2>The Rank-Nullity Theorem</h2>

      <Callout type="theorem" title="Rank-Nullity Theorem (Dimension Theorem)">
        <p>
          If <InlineMath>{`T: V \\to W`}</InlineMath> is a linear transformation and <InlineMath>{`V`}</InlineMath> is
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
        <p>Together, they account for all dimensions of <InlineMath>{`V`}</InlineMath>.</p>
      </Callout>

      <Callout type="info" title="Proof Sketch">
        <p>
          Let <InlineMath>{`\\{\\mathbf{u}_1, \\ldots, \\mathbf{u}_k\\}`}</InlineMath> be a basis for <InlineMath>{`\\text{Null}(T)`}</InlineMath>.
        </p>
        <p>
          Extend to a basis <InlineMath>{`\\{\\mathbf{u}_1, \\ldots, \\mathbf{u}_k, \\mathbf{v}_1, \\ldots, \\mathbf{v}_r\\}`}</InlineMath> for <InlineMath>{`V`}</InlineMath>.
        </p>
        <p>
          Then <InlineMath>{`\\{T(\\mathbf{v}_1), \\ldots, T(\\mathbf{v}_r)\\}`}</InlineMath> is a basis for <InlineMath>{`\\text{Range}(T)`}</InlineMath>.
        </p>
        <p>
          Thus <InlineMath>{`\\dim(V) = k + r = \\text{nullity}(T) + \\text{rank}(T)`}</InlineMath>.
        </p>
      </Callout>

      <h2>Examples</h2>

      <Callout type="example" title="Differentiation">
        <p>
          For <InlineMath>{`D: \\mathcal{P}_3 \\to \\mathcal{P}_2`}</InlineMath> (differentiation):
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li><InlineMath>{`\\dim(\\mathcal{P}_3) = 4`}</InlineMath> (basis: <InlineMath>{`1, x, x^2, x^3`}</InlineMath>)</li>
          <li><InlineMath>{`\\text{Null}(D) = \\{c : c \\in \\mathbb{R}\\}`}</InlineMath> (constants), so nullity = 1</li>
          <li><InlineMath>{`\\text{Range}(D) = \\mathcal{P}_2`}</InlineMath>, so rank = 3</li>
        </ul>
        <p>Check: <InlineMath>{`4 = 3 + 1`}</InlineMath> ✓</p>
      </Callout>

      <Callout type="example" title="Projection onto a Plane">
        <p>
          Let <InlineMath>{`T: \\mathbb{R}^3 \\to \\mathbb{R}^3`}</InlineMath> be projection onto the <InlineMath>{`xy`}</InlineMath>-plane:
        </p>
        <MathBlock>{`T(x, y, z) = (x, y, 0)`}</MathBlock>
        <ul className="list-disc pl-6 space-y-1">
          <li><InlineMath>{`\\text{Null}(T) = \\{(0, 0, z) : z \\in \\mathbb{R}\\}`}</InlineMath> (the <InlineMath>{`z`}</InlineMath>-axis), nullity = 1</li>
          <li><InlineMath>{`\\text{Range}(T) = \\{(x, y, 0)\\}`}</InlineMath> (the <InlineMath>{`xy`}</InlineMath>-plane), rank = 2</li>
        </ul>
        <p>Check: <InlineMath>{`3 = 2 + 1`}</InlineMath> ✓</p>
      </Callout>

      <Callout type="example" title="Matrix Transformation">
        <p>
          For <InlineMath>{`T(\\mathbf{x}) = A\\mathbf{x}`}</InlineMath> where:
        </p>
        <MathBlock>{`A = \\begin{pmatrix} 1 & 2 & 3 \\ 2 & 4 & 6 \\end{pmatrix}`}</MathBlock>
        <p>
          Row reduce to find rank and nullity:
        </p>
        <MathBlock>{`A \\to \\begin{pmatrix} 1 & 2 & 3 \\ 0 & 0 & 0 \\end{pmatrix}`}</MathBlock>
        <ul className="list-disc pl-6 space-y-1">
          <li>rank(<InlineMath>{`A`}</InlineMath>) = 1 (one pivot)</li>
          <li>nullity(<InlineMath>{`A`}</InlineMath>) = 3 - 1 = 2 (two free variables)</li>
        </ul>
        <p>Check: <InlineMath>{`3 = 1 + 2`}</InlineMath> ✓</p>
      </Callout>

      <h2>Consequences of Rank-Nullity</h2>

      <Callout type="theorem" title="Injectivity Criterion">
        <p>
          For <InlineMath>{`T: V \\to W`}</InlineMath> with <InlineMath>{`\\dim(V) = n`}</InlineMath>:
        </p>
        <MathBlock>{`T \\text{ is injective} \\iff \\text{nullity}(T) = 0 \\iff \\text{rank}(T) = n`}</MathBlock>
      </Callout>

      <Callout type="theorem" title="Surjectivity Criterion">
        <p>
          For <InlineMath>{`T: V \\to W`}</InlineMath> with <InlineMath>{`\\dim(W) = m`}</InlineMath>:
        </p>
        <MathBlock>{`T \\text{ is surjective} \\iff \\text{rank}(T) = m`}</MathBlock>
      </Callout>

      <Callout type="theorem" title="Isomorphism Criterion">
        <p>
          If <InlineMath>{`\\dim(V) = \\dim(W) = n`}</InlineMath>, then:
        </p>
        <MathBlock>{`T \\text{ is an isomorphism} \\iff \\text{rank}(T) = n \\iff \\text{nullity}(T) = 0`}</MathBlock>
        <p>For square matrices: invertible ⟺ full rank ⟺ trivial null space.</p>
      </Callout>

      <Callout type="theorem" title="Dimension Constraints">
        <p>For <InlineMath>{`T: V \\to W`}</InlineMath>:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <InlineMath>{`\\text{rank}(T) \\leq \\min(\\dim V, \\dim W)`}</InlineMath>
          </li>
          <li>
            If <InlineMath>{`\\dim V > \\dim W`}</InlineMath>, then <InlineMath>{`T`}</InlineMath> cannot be injective
            <br />
            <span className="text-sm">(nullity must be positive)</span>
          </li>
          <li>
            If <InlineMath>{`\\dim V < \\dim W`}</InlineMath>, then <InlineMath>{`T`}</InlineMath> cannot be surjective
            <br />
            <span className="text-sm">(rank cannot reach <InlineMath>{`\\dim W`}</InlineMath>)</span>
          </li>
        </ul>
      </Callout>

      <h2>Rank and Nullity for Matrices</h2>

      <Callout type="theorem" title="Matrix Rank">
        <p>
          For an <InlineMath>{`m \\times n`}</InlineMath> matrix <InlineMath>{`A`}</InlineMath>:
        </p>
        <MathBlock>{`\\text{rank}(A) = \\dim(\\text{Col}(A)) = \\dim(\\text{Row}(A))`}</MathBlock>
        <p>
          The column rank equals the row rank (both equal the number of pivots in row echelon form).
        </p>
      </Callout>

      <Callout type="theorem" title="Rank-Nullity for Matrices">
        <p>
          For an <InlineMath>{`m \\times n`}</InlineMath> matrix <InlineMath>{`A`}</InlineMath>:
        </p>
        <MathBlock>{`n = \\text{rank}(A) + \\text{nullity}(A)`}</MathBlock>
        <p>where:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>rank(<InlineMath>{`A`}</InlineMath>) = number of pivot columns</li>
          <li>nullity(<InlineMath>{`A`}</InlineMath>) = number of free variables = <InlineMath>{`n - \\text{rank}(A)`}</InlineMath></li>
        </ul>
      </Callout>

      <Callout type="example" title="Computing Rank and Nullity">
        <p>Find the rank and nullity of:</p>
        <MathBlock>{`A = \\begin{pmatrix} 1 & 2 & 1 & 0 \\ 2 & 4 & 0 & 2 \\ 3 & 6 & 1 & 2 \\end{pmatrix}`}</MathBlock>
        <p><strong>Solution:</strong> Row reduce:</p>
        <MathBlock>{`A \\to \\begin{pmatrix} 1 & 2 & 1 & 0 \\ 0 & 0 & -2 & 2 \\ 0 & 0 & 0 & 0 \\end{pmatrix} \\to \\begin{pmatrix} 1 & 2 & 0 & 1 \\ 0 & 0 & 1 & -1 \\ 0 & 0 & 0 & 0 \\end{pmatrix}`}</MathBlock>
        <ul className="list-disc pl-6 space-y-1">
          <li>Pivots in columns 1 and 3: rank = 2</li>
          <li>Free variables: <InlineMath>{`x_2, x_4`}</InlineMath>: nullity = 2</li>
        </ul>
        <p>Check: <InlineMath>{`4 = 2 + 2`}</InlineMath> ✓</p>
      </Callout>

      <h2>Applications</h2>

      <Callout type="theorem" title="Solving Linear Systems">
        <p>
          For the system <InlineMath>{`A\\mathbf{x} = \\mathbf{b}`}</InlineMath> where <InlineMath>{`A`}</InlineMath> is <InlineMath>{`m \\times n`}</InlineMath>:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Existence:</strong> Solution exists ⟺ <InlineMath>{`\\mathbf{b} \\in \\text{Col}(A)`}</InlineMath>
          </li>
          <li>
            <strong>Uniqueness:</strong> Solution is unique ⟺ nullity(<InlineMath>{`A`}</InlineMath>) = 0
          </li>
          <li>
            <strong>If solutions exist:</strong> The solution set is a translate of Null(<InlineMath>{`A`}</InlineMath>),
            with dimension = nullity(<InlineMath>{`A`}</InlineMath>)
          </li>
        </ul>
      </Callout>

      <Callout type="example" title="Solution Space Structure">
        <p>
          If <InlineMath>{`A\\mathbf{x} = \\mathbf{b}`}</InlineMath> has a particular solution <InlineMath>{`\\mathbf{x}_p`}</InlineMath>, then:
        </p>
        <MathBlock>{`\\text{Solution set} = \\{\\mathbf{x}_p + \\mathbf{x}_h : \\mathbf{x}_h \\in \\text{Null}(A)\\}`}</MathBlock>
        <p>
          The solution set is an affine subspace of dimension nullity(<InlineMath>{`A`}</InlineMath>).
        </p>
      </Callout>

      <Callout type="theorem" title="Fundamental Theorem of Linear Algebra">
        <p>For an <InlineMath>{`m \\times n`}</InlineMath> matrix <InlineMath>{`A`}</InlineMath>:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li><InlineMath>{`\\text{Null}(A) \\perp \\text{Row}(A)`}</InlineMath> in <InlineMath>{`\\mathbb{R}^n`}</InlineMath></li>
          <li><InlineMath>{`\\text{Null}(A^T) \\perp \\text{Col}(A)`}</InlineMath> in <InlineMath>{`\\mathbb{R}^m`}</InlineMath></li>
          <li><InlineMath>{`\\dim(\\text{Null}(A)) + \\dim(\\text{Row}(A)) = n`}</InlineMath></li>
          <li><InlineMath>{`\\dim(\\text{Null}(A^T)) + \\dim(\\text{Col}(A)) = m`}</InlineMath></li>
        </ol>
      </Callout>

      <h2>Rank of Special Matrices</h2>

      <Callout type="example" title="Rank Examples">
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Zero matrix:</strong> rank = 0, nullity = <InlineMath>{`n`}</InlineMath>
          </li>
          <li>
            <strong>Identity matrix <InlineMath>{`I_n`}</InlineMath>:</strong> rank = <InlineMath>{`n`}</InlineMath>, nullity = 0
          </li>
          <li>
            <strong>Projection matrix <InlineMath>{`P`}</InlineMath> onto <InlineMath>{`k`}</InlineMath>-dimensional subspace:</strong>
            <br />rank = <InlineMath>{`k`}</InlineMath>, nullity = <InlineMath>{`n - k`}</InlineMath>
          </li>
          <li>
            <strong>Outer product <InlineMath>{`\\mathbf{u}\\mathbf{v}^T`}</InlineMath> (nonzero):</strong> rank = 1
          </li>
        </ul>
      </Callout>

      <Callout type="theorem" title="Rank Inequalities">
        <p>For matrices <InlineMath>{`A`}</InlineMath> and <InlineMath>{`B`}</InlineMath> of compatible sizes:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><InlineMath>{`\\text{rank}(AB) \\leq \\min(\\text{rank}(A), \\text{rank}(B))`}</InlineMath></li>
          <li><InlineMath>{`\\text{rank}(A + B) \\leq \\text{rank}(A) + \\text{rank}(B)`}</InlineMath></li>
          <li><InlineMath>{`\\text{rank}(A) = \\text{rank}(A^T) = \\text{rank}(A^T A) = \\text{rank}(A A^T)`}</InlineMath></li>
        </ul>
      </Callout>

      <h2>Composition of Transformations</h2>

      <Callout type="theorem" title="Rank of Composition">
        <p>
          For linear transformations <InlineMath>{`T: U \\to V`}</InlineMath> and <InlineMath>{`S: V \\to W`}</InlineMath>:
        </p>
        <MathBlock>{`\\text{rank}(S \\circ T) \\leq \\min(\\text{rank}(S), \\text{rank}(T))`}</MathBlock>
      </Callout>

      <Callout type="theorem" title="Nullity of Composition">
        <p>
          For <InlineMath>{`S \\circ T: U \\to W`}</InlineMath>:
        </p>
        <MathBlock>{`\\text{nullity}(T) \\leq \\text{nullity}(S \\circ T) \\leq \\text{nullity}(T) + \\text{nullity}(S)`}</MathBlock>
      </Callout>

      <h2>Summary</h2>

      <Callout type="info" title="Key Concepts">
        <p><strong>Nullity:</strong> <InlineMath>{`\\text{nullity}(T) = \\dim(\\text{Null}(T))`}</InlineMath></p>
        <p><strong>Rank:</strong> <InlineMath>{`\\text{rank}(T) = \\dim(\\text{Range}(T))`}</InlineMath></p>

        <p className="mt-3"><strong>Rank-Nullity Theorem:</strong></p>
        <MathBlock>{`\\dim(V) = \\text{rank}(T) + \\text{nullity}(T)`}</MathBlock>

        <p className="mt-3"><strong>Consequences:</strong></p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Injective ⟺ nullity = 0 ⟺ rank = dim(<InlineMath>{`V`}</InlineMath>)</li>
          <li>Surjective ⟺ rank = dim(<InlineMath>{`W`}</InlineMath>)</li>
          <li>Isomorphism ⟺ both (requires dim(<InlineMath>{`V`}</InlineMath>) = dim(<InlineMath>{`W`}</InlineMath>))</li>
        </ul>

        <p className="mt-3"><strong>For matrices:</strong></p>
        <ul className="list-disc pl-6 space-y-1">
          <li>rank = number of pivots = dim(Col(<InlineMath>{`A`}</InlineMath>)) = dim(Row(<InlineMath>{`A`}</InlineMath>))</li>
          <li>nullity = number of free variables</li>
          <li>Null(<InlineMath>{`A`}</InlineMath>) ⊥ Row(<InlineMath>{`A`}</InlineMath>)</li>
        </ul>
      </Callout>
    </LessonLayout>
  );
}
