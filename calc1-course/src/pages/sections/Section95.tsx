import { LessonLayout } from '../../components/layout/LessonLayout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
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
          A function <InlineMath>{`T: V \\to W`}</InlineMath> between linear spaces is a <strong>linear transformation</strong> if
          for all <InlineMath>{`\\mathbf{u}, \\mathbf{v} \\in V`}</InlineMath> and all scalars <InlineMath>{`c`}</InlineMath>:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Additivity:</strong> <InlineMath>{`T(\\mathbf{u} + \\mathbf{v}) = T(\\mathbf{u}) + T(\\mathbf{v})`}</InlineMath></li>
          <li><strong>Homogeneity:</strong> <InlineMath>{`T(c\\mathbf{v}) = cT(\\mathbf{v})`}</InlineMath></li>
        </ol>
      </Callout>

      <Callout type="info" title="Equivalent Condition">
        <p>
          A function <InlineMath>{`T`}</InlineMath> is linear if and only if for all <InlineMath>{`\\mathbf{u}, \\mathbf{v} \\in V`}</InlineMath> and
          scalars <InlineMath>{`a, b`}</InlineMath>:
        </p>
        <MathBlock>{`T(a\\mathbf{u} + b\\mathbf{v}) = aT(\\mathbf{u}) + bT(\\mathbf{v})`}</MathBlock>
        <p>This extends to any linear combination:</p>
        <MathBlock>{`T\\left(\\sum_{i=1}^{n} c_i \\mathbf{v}_i\\right) = \\sum_{i=1}^{n} c_i T(\\mathbf{v}_i)`}</MathBlock>
      </Callout>

      <Callout type="theorem" title="Basic Properties">
        <p>For any linear transformation <InlineMath>{`T: V \\to W`}</InlineMath>:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li><InlineMath>{`T(\\mathbf{0}_V) = \\mathbf{0}_W`}</InlineMath></li>
          <li><InlineMath>{`T(-\\mathbf{v}) = -T(\\mathbf{v})`}</InlineMath></li>
          <li><InlineMath>{`T(\\mathbf{u} - \\mathbf{v}) = T(\\mathbf{u}) - T(\\mathbf{v})`}</InlineMath></li>
        </ol>
      </Callout>

      <h2>Examples of Linear Transformations</h2>

      <Callout type="example" title="Matrix Multiplication">
        <p>
          For any <InlineMath>{`m \\times n`}</InlineMath> matrix <InlineMath>{`A`}</InlineMath>, the
          function <InlineMath>{`T: \\mathbb{R}^n \\to \\mathbb{R}^m`}</InlineMath> defined by:
        </p>
        <MathBlock>{`T(\\mathbf{x}) = A\\mathbf{x}`}</MathBlock>
        <p>is a linear transformation. This is the prototypical example.</p>
      </Callout>

      <Callout type="example" title="Rotation in ℝ²">
        <p>
          Rotation by angle <InlineMath>{`\\theta`}</InlineMath> about the origin:
        </p>
        <MathBlock>{`T(x, y) = (x\\cos\\theta - y\\sin\\theta, \\; x\\sin\\theta + y\\cos\\theta)`}</MathBlock>
        <p>This is linear (and corresponds to matrix multiplication).</p>
      </Callout>

      <Callout type="example" title="Differentiation">
        <p>
          The derivative operator <InlineMath>{`D: \\mathcal{P}_n \\to \\mathcal{P}_{n-1}`}</InlineMath> defined by:
        </p>
        <MathBlock>{`D(p) = p'`}</MathBlock>
        <p>is linear because <InlineMath>{`(f + g)' = f' + g'`}</InlineMath> and <InlineMath>{`(cf)' = cf'`}</InlineMath>.</p>
      </Callout>

      <Callout type="example" title="Integration">
        <p>
          The integral operator <InlineMath>{`T: C[a, b] \\to \\mathbb{R}`}</InlineMath> defined by:
        </p>
        <MathBlock>{`T(f) = \\int_a^b f(x) \\, dx`}</MathBlock>
        <p>is linear by properties of integrals.</p>
      </Callout>

      <Callout type="example" title="Projection">
        <p>
          Projection onto a subspace <InlineMath>{`W`}</InlineMath> is linear:
        </p>
        <MathBlock>{`T(\\mathbf{v}) = \\text{proj}_W(\\mathbf{v})`}</MathBlock>
      </Callout>

      <Callout type="example" title="Zero and Identity">
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Zero transformation:</strong> <InlineMath>{`T(\\mathbf{v}) = \\mathbf{0}`}</InlineMath> for all <InlineMath>{`\\mathbf{v}`}</InlineMath></li>
          <li><strong>Identity transformation:</strong> <InlineMath>{`I(\\mathbf{v}) = \\mathbf{v}`}</InlineMath></li>
        </ul>
        <p>Both are linear.</p>
      </Callout>

      <h2>Non-Examples</h2>

      <Callout type="info" title="What is NOT Linear">
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Translation:</strong> <InlineMath>{`T(\\mathbf{v}) = \\mathbf{v} + \\mathbf{b}`}</InlineMath> (unless <InlineMath>{`\\mathbf{b} = \\mathbf{0}`}</InlineMath>)
            <br />
            <span className="text-sm">Fails: <InlineMath>{`T(\\mathbf{0}) = \\mathbf{b} \\neq \\mathbf{0}`}</InlineMath></span>
          </li>
          <li>
            <strong>Squaring:</strong> <InlineMath>{`T(x) = x^2`}</InlineMath> on <InlineMath>{`\\mathbb{R}`}</InlineMath>
            <br />
            <span className="text-sm">Fails: <InlineMath>{`T(2x) = 4x^2 \\neq 2x^2 = 2T(x)`}</InlineMath></span>
          </li>
          <li>
            <strong>Norm:</strong> <InlineMath>{`T(\\mathbf{v}) = \\|\\mathbf{v}\\|`}</InlineMath>
            <br />
            <span className="text-sm">Fails: <InlineMath>{`T(-\\mathbf{v}) = \\|\\mathbf{v}\\| \\neq -\\|\\mathbf{v}\\|`}</InlineMath></span>
          </li>
        </ul>
      </Callout>

      <h2>Null Space (Kernel)</h2>

      <Callout type="definition" title="Null Space">
        <p>
          The <strong>null space</strong> (or <strong>kernel</strong>) of a linear
          transformation <InlineMath>{`T: V \\to W`}</InlineMath> is:
        </p>
        <MathBlock>{`\\text{Null}(T) = \\ker(T) = \\{\\mathbf{v} \\in V : T(\\mathbf{v}) = \\mathbf{0}\\}`}</MathBlock>
        <p>It is the set of all vectors that <InlineMath>{`T`}</InlineMath> maps to zero.</p>
      </Callout>

      <Callout type="theorem" title="Null Space is a Subspace">
        <p>
          The null space <InlineMath>{`\\text{Null}(T)`}</InlineMath> is a subspace of <InlineMath>{`V`}</InlineMath>.
        </p>
      </Callout>

      <Callout type="info" title="Proof">
        <ul className="list-disc pl-6 space-y-1">
          <li><InlineMath>{`T(\\mathbf{0}) = \\mathbf{0}`}</InlineMath>, so <InlineMath>{`\\mathbf{0} \\in \\text{Null}(T)`}</InlineMath></li>
          <li>If <InlineMath>{`T(\\mathbf{u}) = T(\\mathbf{v}) = \\mathbf{0}`}</InlineMath>, then <InlineMath>{`T(\\mathbf{u} + \\mathbf{v}) = T(\\mathbf{u}) + T(\\mathbf{v}) = \\mathbf{0}`}</InlineMath></li>
          <li>If <InlineMath>{`T(\\mathbf{v}) = \\mathbf{0}`}</InlineMath>, then <InlineMath>{`T(c\\mathbf{v}) = cT(\\mathbf{v}) = \\mathbf{0}`}</InlineMath></li>
        </ul>
      </Callout>

      <Callout type="example" title="Null Space of Differentiation">
        <p>
          For <InlineMath>{`D: \\mathcal{P}_n \\to \\mathcal{P}_{n-1}`}</InlineMath> (differentiation):
        </p>
        <MathBlock>{`\\text{Null}(D) = \\{p \\in \\mathcal{P}_n : p' = 0\\} = \\{\\text{constant polynomials}\\}`}</MathBlock>
        <p>
          <InlineMath>{`\\dim(\\text{Null}(D)) = 1`}</InlineMath>, basis: <InlineMath>{`\\{1\\}`}</InlineMath>
        </p>
      </Callout>

      <Callout type="example" title="Null Space of a Matrix">
        <p>
          For <InlineMath>{`T(\\mathbf{x}) = A\\mathbf{x}`}</InlineMath>:
        </p>
        <MathBlock>{`\\text{Null}(T) = \\{\\mathbf{x} : A\\mathbf{x} = \\mathbf{0}\\}`}</MathBlock>
        <p>This is the null space of the matrix <InlineMath>{`A`}</InlineMath> (solution to homogeneous system).</p>
      </Callout>

      <h2>Range (Image)</h2>

      <Callout type="definition" title="Range">
        <p>
          The <strong>range</strong> (or <strong>image</strong>) of a linear
          transformation <InlineMath>{`T: V \\to W`}</InlineMath> is:
        </p>
        <MathBlock>{`\\text{Range}(T) = \\text{Im}(T) = \\{T(\\mathbf{v}) : \\mathbf{v} \\in V\\}`}</MathBlock>
        <p>It is the set of all outputs of <InlineMath>{`T`}</InlineMath>.</p>
      </Callout>

      <Callout type="theorem" title="Range is a Subspace">
        <p>
          The range <InlineMath>{`\\text{Range}(T)`}</InlineMath> is a subspace of <InlineMath>{`W`}</InlineMath>.
        </p>
      </Callout>

      <Callout type="info" title="Proof">
        <ul className="list-disc pl-6 space-y-1">
          <li><InlineMath>{`T(\\mathbf{0}) = \\mathbf{0}`}</InlineMath>, so <InlineMath>{`\\mathbf{0} \\in \\text{Range}(T)`}</InlineMath></li>
          <li>If <InlineMath>{`\\mathbf{w}_1 = T(\\mathbf{v}_1)`}</InlineMath> and <InlineMath>{`\\mathbf{w}_2 = T(\\mathbf{v}_2)`}</InlineMath>, then <InlineMath>{`\\mathbf{w}_1 + \\mathbf{w}_2 = T(\\mathbf{v}_1 + \\mathbf{v}_2) \\in \\text{Range}(T)`}</InlineMath></li>
          <li>If <InlineMath>{`\\mathbf{w} = T(\\mathbf{v})`}</InlineMath>, then <InlineMath>{`c\\mathbf{w} = T(c\\mathbf{v}) \\in \\text{Range}(T)`}</InlineMath></li>
        </ul>
      </Callout>

      <Callout type="theorem" title="Computing the Range">
        <p>
          If <InlineMath>{`\\{\\mathbf{v}_1, \\ldots, \\mathbf{v}_n\\}`}</InlineMath> spans <InlineMath>{`V`}</InlineMath>, then:
        </p>
        <MathBlock>{`\\text{Range}(T) = \\text{span}\\{T(\\mathbf{v}_1), \\ldots, T(\\mathbf{v}_n)\\}`}</MathBlock>
        <p>
          In particular, if these are a basis for <InlineMath>{`V`}</InlineMath>, their images span the range.
        </p>
      </Callout>

      <Callout type="example" title="Range of Differentiation">
        <p>
          For <InlineMath>{`D: \\mathcal{P}_3 \\to \\mathcal{P}_2`}</InlineMath>:
        </p>
        <MathBlock>{`D(a + bx + cx^2 + dx^3) = b + 2cx + 3dx^2`}</MathBlock>
        <p>
          <InlineMath>{`\\text{Range}(D) = \\mathcal{P}_2`}</InlineMath> (every polynomial of degree ≤ 2 is a derivative).
        </p>
      </Callout>

      <Callout type="example" title="Range of a Matrix">
        <p>
          For <InlineMath>{`T(\\mathbf{x}) = A\\mathbf{x}`}</InlineMath>:
        </p>
        <MathBlock>{`\\text{Range}(T) = \\text{Col}(A)`}</MathBlock>
        <p>The range is the column space of <InlineMath>{`A`}</InlineMath>.</p>
      </Callout>

      <h2>Injectivity and Surjectivity</h2>

      <Callout type="definition" title="Injective (One-to-One)">
        <p>
          A linear transformation <InlineMath>{`T`}</InlineMath> is <strong>injective</strong> (one-to-one) if:
        </p>
        <MathBlock>{`T(\\mathbf{u}) = T(\\mathbf{v}) \\implies \\mathbf{u} = \\mathbf{v}`}</MathBlock>
      </Callout>

      <Callout type="theorem" title="Injectivity and Null Space">
        <p>
          <InlineMath>{`T`}</InlineMath> is injective if and only if <InlineMath>{`\\text{Null}(T) = \\{\\mathbf{0}\\}`}</InlineMath>.
        </p>
      </Callout>

      <Callout type="info" title="Proof">
        <p><strong>(⟹)</strong> If <InlineMath>{`T`}</InlineMath> is injective and <InlineMath>{`T(\\mathbf{v}) = \\mathbf{0} = T(\\mathbf{0})`}</InlineMath>, then <InlineMath>{`\\mathbf{v} = \\mathbf{0}`}</InlineMath>.</p>
        <p><strong>(⟸)</strong> If <InlineMath>{`\\text{Null}(T) = \\{\\mathbf{0}\\}`}</InlineMath> and <InlineMath>{`T(\\mathbf{u}) = T(\\mathbf{v})`}</InlineMath>, then:</p>
        <MathBlock>{`T(\\mathbf{u} - \\mathbf{v}) = T(\\mathbf{u}) - T(\\mathbf{v}) = \\mathbf{0}`}</MathBlock>
        <p>So <InlineMath>{`\\mathbf{u} - \\mathbf{v} \\in \\text{Null}(T)`}</InlineMath>, hence <InlineMath>{`\\mathbf{u} - \\mathbf{v} = \\mathbf{0}`}</InlineMath>.</p>
      </Callout>

      <Callout type="definition" title="Surjective (Onto)">
        <p>
          A linear transformation <InlineMath>{`T: V \\to W`}</InlineMath> is <strong>surjective</strong> (onto) if:
        </p>
        <MathBlock>{`\\text{Range}(T) = W`}</MathBlock>
        <p>Every element of <InlineMath>{`W`}</InlineMath> is hit by some element of <InlineMath>{`V`}</InlineMath>.</p>
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
          Let <InlineMath>{`\\{\\mathbf{v}_1, \\ldots, \\mathbf{v}_n\\}`}</InlineMath> be a basis for <InlineMath>{`V`}</InlineMath>.
          A linear transformation <InlineMath>{`T: V \\to W`}</InlineMath> is completely determined by
          the images <InlineMath>{`T(\\mathbf{v}_1), \\ldots, T(\\mathbf{v}_n)`}</InlineMath>.
        </p>
        <p>
          Moreover, for any choice of <InlineMath>{`\\mathbf{w}_1, \\ldots, \\mathbf{w}_n \\in W`}</InlineMath>,
          there exists a unique linear <InlineMath>{`T`}</InlineMath> with <InlineMath>{`T(\\mathbf{v}_i) = \\mathbf{w}_i`}</InlineMath>.
        </p>
      </Callout>

      <Callout type="info" title="Construction">
        <p>
          For <InlineMath>{`\\mathbf{v} = c_1\\mathbf{v}_1 + \\cdots + c_n\\mathbf{v}_n`}</InlineMath>, define:
        </p>
        <MathBlock>{`T(\\mathbf{v}) = c_1 T(\\mathbf{v}_1) + \\cdots + c_n T(\\mathbf{v}_n) = c_1\\mathbf{w}_1 + \\cdots + c_n\\mathbf{w}_n`}</MathBlock>
      </Callout>

      <Callout type="example" title="Defining a Transformation">
        <p>
          Find the linear <InlineMath>{`T: \\mathbb{R}^2 \\to \\mathbb{R}^2`}</InlineMath> such
          that <InlineMath>{`T(1, 0) = (2, 1)`}</InlineMath> and <InlineMath>{`T(0, 1) = (1, 3)`}</InlineMath>.
        </p>
        <p><strong>Solution:</strong> For <InlineMath>{`(x, y) = x(1, 0) + y(0, 1)`}</InlineMath>:</p>
        <MathBlock>{`T(x, y) = xT(1, 0) + yT(0, 1) = x(2, 1) + y(1, 3) = (2x + y, x + 3y)`}</MathBlock>
      </Callout>

      <h2>Composition of Linear Transformations</h2>

      <Callout type="theorem" title="Composition is Linear">
        <p>
          If <InlineMath>{`T: U \\to V`}</InlineMath> and <InlineMath>{`S: V \\to W`}</InlineMath> are linear, then
          the composition <InlineMath>{`S \\circ T: U \\to W`}</InlineMath> is linear:
        </p>
        <MathBlock>{`(S \\circ T)(\\mathbf{u}) = S(T(\\mathbf{u}))`}</MathBlock>
      </Callout>

      <Callout type="theorem" title="Inverse of Linear Transformation">
        <p>
          If <InlineMath>{`T: V \\to W`}</InlineMath> is an isomorphism, then <InlineMath>{`T^{-1}: W \\to V`}</InlineMath> is also linear.
        </p>
      </Callout>

      <h2>Summary</h2>

      <Callout type="info" title="Key Concepts">
        <p><strong>Linear transformation:</strong> <InlineMath>{`T(a\\mathbf{u} + b\\mathbf{v}) = aT(\\mathbf{u}) + bT(\\mathbf{v})`}</InlineMath></p>

        <p className="mt-3"><strong>Null space:</strong> <InlineMath>{`\\text{Null}(T) = \\{\\mathbf{v} : T(\\mathbf{v}) = \\mathbf{0}\\}`}</InlineMath></p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Subspace of the domain <InlineMath>{`V`}</InlineMath></li>
          <li><InlineMath>{`T`}</InlineMath> is injective ⟺ <InlineMath>{`\\text{Null}(T) = \\{\\mathbf{0}\\}`}</InlineMath></li>
        </ul>

        <p className="mt-3"><strong>Range:</strong> <InlineMath>{`\\text{Range}(T) = \\{T(\\mathbf{v}) : \\mathbf{v} \\in V\\}`}</InlineMath></p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Subspace of the codomain <InlineMath>{`W`}</InlineMath></li>
          <li><InlineMath>{`T`}</InlineMath> is surjective ⟺ <InlineMath>{`\\text{Range}(T) = W`}</InlineMath></li>
        </ul>

        <p className="mt-3"><strong>Key examples:</strong></p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Matrix multiplication: <InlineMath>{`T(\\mathbf{x}) = A\\mathbf{x}`}</InlineMath></li>
          <li>Differentiation: <InlineMath>{`D(p) = p'`}</InlineMath></li>
          <li>Integration: <InlineMath>{`T(f) = \\int f`}</InlineMath></li>
          <li>Projection: <InlineMath>{`T(\\mathbf{v}) = \\text{proj}_W(\\mathbf{v})`}</InlineMath></li>
        </ul>

        <p className="mt-3"><strong>Basis principle:</strong> <InlineMath>{`T`}</InlineMath> is determined by its action on a basis</p>
      </Callout>
    </LessonLayout>
  );
}
