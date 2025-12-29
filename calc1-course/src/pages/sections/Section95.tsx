import { LessonLayout } from '../../components/layout/LessonLayout';
import { Math as MathInline, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';

export default function Section95() {
  return (
    <LessonLayout sectionId={95}>
      <h1>Linear Transformations</h1>

      <p>
        A <strong>linear transformation</strong> is a function between linear spaces that preserves
        the operations of addition and scalar multiplication. These transformations are the natural
        "structure-preserving maps" of linear algebra, generalizing the matrix-vector product.
      </p>

      <h2>Definition</h2>

      <Callout type="definition" title="Linear Transformation">
        <p>
          A function <MathInline>{`T: V \\to W`}</MathInline> between linear spaces is a <strong>linear transformation</strong> if
          for all <MathInline>{`\\mathbf{u}, \\mathbf{v} \\in V`}</MathInline> and all scalars <MathInline>{`c`}</MathInline>:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Additivity:</strong> <MathInline>{`T(\\mathbf{u} + \\mathbf{v}) = T(\\mathbf{u}) + T(\\mathbf{v})`}</MathInline></li>
          <li><strong>Homogeneity:</strong> <MathInline>{`T(c\\mathbf{v}) = cT(\\mathbf{v})`}</MathInline></li>
        </ol>
      </Callout>

      <Callout type="info" title="Equivalent Condition">
        <p>
          A function <MathInline>{`T`}</MathInline> is linear if and only if for all <MathInline>{`\\mathbf{u}, \\mathbf{v} \\in V`}</MathInline> and
          scalars <MathInline>{`a, b`}</MathInline>:
        </p>
        <MathBlock>{`T(a\\mathbf{u} + b\\mathbf{v}) = aT(\\mathbf{u}) + bT(\\mathbf{v})`}</MathBlock>
        <p>This extends to any linear combination:</p>
        <MathBlock>{`T\\left(\\sum_{i=1}^{n} c_i \\mathbf{v}_i\\right) = \\sum_{i=1}^{n} c_i T(\\mathbf{v}_i)`}</MathBlock>
      </Callout>

      <Callout type="theorem" title="Basic Properties">
        <p>For any linear transformation <MathInline>{`T: V \\to W`}</MathInline>:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li><MathInline>{`T(\\mathbf{0}_V) = \\mathbf{0}_W`}</MathInline></li>
          <li><MathInline>{`T(-\\mathbf{v}) = -T(\\mathbf{v})`}</MathInline></li>
          <li><MathInline>{`T(\\mathbf{u} - \\mathbf{v}) = T(\\mathbf{u}) - T(\\mathbf{v})`}</MathInline></li>
        </ol>
      </Callout>

      <h2>Examples of Linear Transformations</h2>

      <Callout type="example" title="Matrix Multiplication">
        <p>
          For any <MathInline>{`m \\times n`}</MathInline> matrix <MathInline>{`A`}</MathInline>, the
          function <MathInline>{`T: \\mathbb{R}^n \\to \\mathbb{R}^m`}</MathInline> defined by:
        </p>
        <MathBlock>{`T(\\mathbf{x}) = A\\mathbf{x}`}</MathBlock>
        <p>is a linear transformation. This is the prototypical example.</p>
      </Callout>

      <Callout type="example" title="Rotation in ℝ²">
        <p>
          Rotation by angle <MathInline>{`\\theta`}</MathInline> about the origin:
        </p>
        <MathBlock>{`T(x, y) = (x\\cos\\theta - y\\sin\\theta, \\; x\\sin\\theta + y\\cos\\theta)`}</MathBlock>
        <p>This is linear (and corresponds to matrix multiplication).</p>
      </Callout>

      <Callout type="example" title="Differentiation">
        <p>
          The derivative operator <MathInline>{`D: \\mathcal{P}_n \\to \\mathcal{P}_{n-1}`}</MathInline> defined by:
        </p>
        <MathBlock>{`D(p) = p'`}</MathBlock>
        <p>is linear because <MathInline>{`(f + g)' = f' + g'`}</MathInline> and <MathInline>{`(cf)' = cf'`}</MathInline>.</p>
      </Callout>

      <Callout type="example" title="Integration">
        <p>
          The integral operator <MathInline>{`T: C[a, b] \\to \\mathbb{R}`}</MathInline> defined by:
        </p>
        <MathBlock>{`T(f) = \\int_a^b f(x) \\, dx`}</MathBlock>
        <p>is linear by properties of integrals.</p>
      </Callout>

      <Callout type="example" title="Projection">
        <p>
          Projection onto a subspace <MathInline>{`W`}</MathInline> is linear:
        </p>
        <MathBlock>{`T(\\mathbf{v}) = \\text{proj}_W(\\mathbf{v})`}</MathBlock>
      </Callout>

      <Callout type="example" title="Zero and Identity">
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Zero transformation:</strong> <MathInline>{`T(\\mathbf{v}) = \\mathbf{0}`}</MathInline> for all <MathInline>{`\\mathbf{v}`}</MathInline></li>
          <li><strong>Identity transformation:</strong> <MathInline>{`I(\\mathbf{v}) = \\mathbf{v}`}</MathInline></li>
        </ul>
        <p>Both are linear.</p>
      </Callout>

      <h2>Non-Examples</h2>

      <Callout type="info" title="What is NOT Linear">
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Translation:</strong> <MathInline>{`T(\\mathbf{v}) = \\mathbf{v} + \\mathbf{b}`}</MathInline> (unless <MathInline>{`\\mathbf{b} = \\mathbf{0}`}</MathInline>)
            <br />
            <span className="text-sm">Fails: <MathInline>{`T(\\mathbf{0}) = \\mathbf{b} \\neq \\mathbf{0}`}</MathInline></span>
          </li>
          <li>
            <strong>Squaring:</strong> <MathInline>{`T(x) = x^2`}</MathInline> on <MathInline>{`\\mathbb{R}`}</MathInline>
            <br />
            <span className="text-sm">Fails: <MathInline>{`T(2x) = 4x^2 \\neq 2x^2 = 2T(x)`}</MathInline></span>
          </li>
          <li>
            <strong>Norm:</strong> <MathInline>{`T(\\mathbf{v}) = \\|\\mathbf{v}\\|`}</MathInline>
            <br />
            <span className="text-sm">Fails: <MathInline>{`T(-\\mathbf{v}) = \\|\\mathbf{v}\\| \\neq -\\|\\mathbf{v}\\|`}</MathInline></span>
          </li>
        </ul>
      </Callout>

      <h2>Null Space (Kernel)</h2>

      <Callout type="definition" title="Null Space">
        <p>
          The <strong>null space</strong> (or <strong>kernel</strong>) of a linear
          transformation <MathInline>{`T: V \\to W`}</MathInline> is:
        </p>
        <MathBlock>{`\\text{Null}(T) = \\ker(T) = \\{\\mathbf{v} \\in V : T(\\mathbf{v}) = \\mathbf{0}\\}`}</MathBlock>
        <p>It is the set of all vectors that <MathInline>{`T`}</MathInline> maps to zero.</p>
      </Callout>

      <Callout type="theorem" title="Null Space is a Subspace">
        <p>
          The null space <MathInline>{`\\text{Null}(T)`}</MathInline> is a subspace of <MathInline>{`V`}</MathInline>.
        </p>
      </Callout>

      <Callout type="info" title="Proof">
        <ul className="list-disc pl-6 space-y-1">
          <li><MathInline>{`T(\\mathbf{0}) = \\mathbf{0}`}</MathInline>, so <MathInline>{`\\mathbf{0} \\in \\text{Null}(T)`}</MathInline></li>
          <li>If <MathInline>{`T(\\mathbf{u}) = T(\\mathbf{v}) = \\mathbf{0}`}</MathInline>, then <MathInline>{`T(\\mathbf{u} + \\mathbf{v}) = T(\\mathbf{u}) + T(\\mathbf{v}) = \\mathbf{0}`}</MathInline></li>
          <li>If <MathInline>{`T(\\mathbf{v}) = \\mathbf{0}`}</MathInline>, then <MathInline>{`T(c\\mathbf{v}) = cT(\\mathbf{v}) = \\mathbf{0}`}</MathInline></li>
        </ul>
      </Callout>

      <Callout type="example" title="Null Space of Differentiation">
        <p>
          For <MathInline>{`D: \\mathcal{P}_n \\to \\mathcal{P}_{n-1}`}</MathInline> (differentiation):
        </p>
        <MathBlock>{`\\text{Null}(D) = \\{p \\in \\mathcal{P}_n : p' = 0\\} = \\{\\text{constant polynomials}\\}`}</MathBlock>
        <p>
          <MathInline>{`\\dim(\\text{Null}(D)) = 1`}</MathInline>, basis: <MathInline>{`\\{1\\}`}</MathInline>
        </p>
      </Callout>

      <Callout type="example" title="Null Space of a Matrix">
        <p>
          For <MathInline>{`T(\\mathbf{x}) = A\\mathbf{x}`}</MathInline>:
        </p>
        <MathBlock>{`\\text{Null}(T) = \\{\\mathbf{x} : A\\mathbf{x} = \\mathbf{0}\\}`}</MathBlock>
        <p>This is the null space of the matrix <MathInline>{`A`}</MathInline> (solution to homogeneous system).</p>
      </Callout>

      <h2>Range (Image)</h2>

      <Callout type="definition" title="Range">
        <p>
          The <strong>range</strong> (or <strong>image</strong>) of a linear
          transformation <MathInline>{`T: V \\to W`}</MathInline> is:
        </p>
        <MathBlock>{`\\text{Range}(T) = \\text{Im}(T) = \\{T(\\mathbf{v}) : \\mathbf{v} \\in V\\}`}</MathBlock>
        <p>It is the set of all outputs of <MathInline>{`T`}</MathInline>.</p>
      </Callout>

      <Callout type="theorem" title="Range is a Subspace">
        <p>
          The range <MathInline>{`\\text{Range}(T)`}</MathInline> is a subspace of <MathInline>{`W`}</MathInline>.
        </p>
      </Callout>

      <Callout type="info" title="Proof">
        <ul className="list-disc pl-6 space-y-1">
          <li><MathInline>{`T(\\mathbf{0}) = \\mathbf{0}`}</MathInline>, so <MathInline>{`\\mathbf{0} \\in \\text{Range}(T)`}</MathInline></li>
          <li>If <MathInline>{`\\mathbf{w}_1 = T(\\mathbf{v}_1)`}</MathInline> and <MathInline>{`\\mathbf{w}_2 = T(\\mathbf{v}_2)`}</MathInline>, then <MathInline>{`\\mathbf{w}_1 + \\mathbf{w}_2 = T(\\mathbf{v}_1 + \\mathbf{v}_2) \\in \\text{Range}(T)`}</MathInline></li>
          <li>If <MathInline>{`\\mathbf{w} = T(\\mathbf{v})`}</MathInline>, then <MathInline>{`c\\mathbf{w} = T(c\\mathbf{v}) \\in \\text{Range}(T)`}</MathInline></li>
        </ul>
      </Callout>

      <Callout type="theorem" title="Computing the Range">
        <p>
          If <MathInline>{`\\{\\mathbf{v}_1, \\ldots, \\mathbf{v}_n\\}`}</MathInline> spans <MathInline>{`V`}</MathInline>, then:
        </p>
        <MathBlock>{`\\text{Range}(T) = \\text{span}\\{T(\\mathbf{v}_1), \\ldots, T(\\mathbf{v}_n)\\}`}</MathBlock>
        <p>
          In particular, if these are a basis for <MathInline>{`V`}</MathInline>, their images span the range.
        </p>
      </Callout>

      <Callout type="example" title="Range of Differentiation">
        <p>
          For <MathInline>{`D: \\mathcal{P}_3 \\to \\mathcal{P}_2`}</MathInline>:
        </p>
        <MathBlock>{`D(a + bx + cx^2 + dx^3) = b + 2cx + 3dx^2`}</MathBlock>
        <p>
          <MathInline>{`\\text{Range}(D) = \\mathcal{P}_2`}</MathInline> (every polynomial of degree ≤ 2 is a derivative).
        </p>
      </Callout>

      <Callout type="example" title="Range of a Matrix">
        <p>
          For <MathInline>{`T(\\mathbf{x}) = A\\mathbf{x}`}</MathInline>:
        </p>
        <MathBlock>{`\\text{Range}(T) = \\text{Col}(A)`}</MathBlock>
        <p>The range is the column space of <MathInline>{`A`}</MathInline>.</p>
      </Callout>

      <h2>Injectivity and Surjectivity</h2>

      <Callout type="definition" title="Injective (One-to-One)">
        <p>
          A linear transformation <MathInline>{`T`}</MathInline> is <strong>injective</strong> (one-to-one) if:
        </p>
        <MathBlock>{`T(\\mathbf{u}) = T(\\mathbf{v}) \\implies \\mathbf{u} = \\mathbf{v}`}</MathBlock>
      </Callout>

      <Callout type="theorem" title="Injectivity and Null Space">
        <p>
          <MathInline>{`T`}</MathInline> is injective if and only if <MathInline>{`\\text{Null}(T) = \\{\\mathbf{0}\\}`}</MathInline>.
        </p>
      </Callout>

      <Callout type="info" title="Proof">
        <p><strong>(⟹)</strong> If <MathInline>{`T`}</MathInline> is injective and <MathInline>{`T(\\mathbf{v}) = \\mathbf{0} = T(\\mathbf{0})`}</MathInline>, then <MathInline>{`\\mathbf{v} = \\mathbf{0}`}</MathInline>.</p>
        <p><strong>(⟸)</strong> If <MathInline>{`\\text{Null}(T) = \\{\\mathbf{0}\\}`}</MathInline> and <MathInline>{`T(\\mathbf{u}) = T(\\mathbf{v})`}</MathInline>, then:</p>
        <MathBlock>{`T(\\mathbf{u} - \\mathbf{v}) = T(\\mathbf{u}) - T(\\mathbf{v}) = \\mathbf{0}`}</MathBlock>
        <p>So <MathInline>{`\\mathbf{u} - \\mathbf{v} \\in \\text{Null}(T)`}</MathInline>, hence <MathInline>{`\\mathbf{u} - \\mathbf{v} = \\mathbf{0}`}</MathInline>.</p>
      </Callout>

      <Callout type="definition" title="Surjective (Onto)">
        <p>
          A linear transformation <MathInline>{`T: V \\to W`}</MathInline> is <strong>surjective</strong> (onto) if:
        </p>
        <MathBlock>{`\\text{Range}(T) = W`}</MathBlock>
        <p>Every element of <MathInline>{`W`}</MathInline> is hit by some element of <MathInline>{`V`}</MathInline>.</p>
      </Callout>

      <Callout type="definition" title="Isomorphism">
        <p>
          A linear transformation that is both injective and surjective is called an <strong>isomorphism</strong>.
          Spaces connected by an isomorphism are <strong>isomorphic</strong>.
        </p>
      </Callout>

      <h2>Determining T from a Basis</h2>

      <Callout type="theorem" title="Linear Transformations and Bases">
        <p>
          Let <MathInline>{`\\{\\mathbf{v}_1, \\ldots, \\mathbf{v}_n\\}`}</MathInline> be a basis for <MathInline>{`V`}</MathInline>.
          A linear transformation <MathInline>{`T: V \\to W`}</MathInline> is completely determined by
          the images <MathInline>{`T(\\mathbf{v}_1), \\ldots, T(\\mathbf{v}_n)`}</MathInline>.
        </p>
        <p>
          Moreover, for any choice of <MathInline>{`\\mathbf{w}_1, \\ldots, \\mathbf{w}_n \\in W`}</MathInline>,
          there exists a unique linear <MathInline>{`T`}</MathInline> with <MathInline>{`T(\\mathbf{v}_i) = \\mathbf{w}_i`}</MathInline>.
        </p>
      </Callout>

      <Callout type="info" title="Construction">
        <p>
          For <MathInline>{`\\mathbf{v} = c_1\\mathbf{v}_1 + \\cdots + c_n\\mathbf{v}_n`}</MathInline>, define:
        </p>
        <MathBlock>{`T(\\mathbf{v}) = c_1 T(\\mathbf{v}_1) + \\cdots + c_n T(\\mathbf{v}_n) = c_1\\mathbf{w}_1 + \\cdots + c_n\\mathbf{w}_n`}</MathBlock>
      </Callout>

      <Callout type="example" title="Defining a Transformation">
        <p>
          Find the linear <MathInline>{`T: \\mathbb{R}^2 \\to \\mathbb{R}^2`}</MathInline> such
          that <MathInline>{`T(1, 0) = (2, 1)`}</MathInline> and <MathInline>{`T(0, 1) = (1, 3)`}</MathInline>.
        </p>
        <p><strong>Solution:</strong> For <MathInline>{`(x, y) = x(1, 0) + y(0, 1)`}</MathInline>:</p>
        <MathBlock>{`T(x, y) = xT(1, 0) + yT(0, 1) = x(2, 1) + y(1, 3) = (2x + y, x + 3y)`}</MathBlock>
      </Callout>

      <h2>Composition of Linear Transformations</h2>

      <Callout type="theorem" title="Composition is Linear">
        <p>
          If <MathInline>{`T: U \\to V`}</MathInline> and <MathInline>{`S: V \\to W`}</MathInline> are linear, then
          the composition <MathInline>{`S \\circ T: U \\to W`}</MathInline> is linear:
        </p>
        <MathBlock>{`(S \\circ T)(\\mathbf{u}) = S(T(\\mathbf{u}))`}</MathBlock>
      </Callout>

      <Callout type="theorem" title="Inverse of Linear Transformation">
        <p>
          If <MathInline>{`T: V \\to W`}</MathInline> is an isomorphism, then <MathInline>{`T^{-1}: W \\to V`}</MathInline> is also linear.
        </p>
      </Callout>

      <h2>Summary</h2>

      <Callout type="info" title="Key Concepts">
        <p><strong>Linear transformation:</strong> <MathInline>{`T(a\\mathbf{u} + b\\mathbf{v}) = aT(\\mathbf{u}) + bT(\\mathbf{v})`}</MathInline></p>

        <p className="mt-3"><strong>Null space:</strong> <MathInline>{`\\text{Null}(T) = \\{\\mathbf{v} : T(\\mathbf{v}) = \\mathbf{0}\\}`}</MathInline></p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Subspace of the domain <MathInline>{`V`}</MathInline></li>
          <li><MathInline>{`T`}</MathInline> is injective ⟺ <MathInline>{`\\text{Null}(T) = \\{\\mathbf{0}\\}`}</MathInline></li>
        </ul>

        <p className="mt-3"><strong>Range:</strong> <MathInline>{`\\text{Range}(T) = \\{T(\\mathbf{v}) : \\mathbf{v} \\in V\\}`}</MathInline></p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Subspace of the codomain <MathInline>{`W`}</MathInline></li>
          <li><MathInline>{`T`}</MathInline> is surjective ⟺ <MathInline>{`\\text{Range}(T) = W`}</MathInline></li>
        </ul>

        <p className="mt-3"><strong>Key examples:</strong></p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Matrix multiplication: <MathInline>{`T(\\mathbf{x}) = A\\mathbf{x}`}</MathInline></li>
          <li>Differentiation: <MathInline>{`D(p) = p'`}</MathInline></li>
          <li>Integration: <MathInline>{`T(f) = \\int f`}</MathInline></li>
          <li>Projection: <MathInline>{`T(\\mathbf{v}) = \\text{proj}_W(\\mathbf{v})`}</MathInline></li>
        </ul>

        <p className="mt-3"><strong>Basis principle:</strong> <MathInline>{`T`}</MathInline> is determined by its action on a basis</p>
      </Callout>
    </LessonLayout>
  );
}
