import { LessonLayout } from '../../components/layout/LessonLayout';
import { Math as MathInline, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';

export default function Section92() {
  return (
    <LessonLayout sectionId={92}>
      <h1>Inner Product Spaces</h1>

      <p>
        An <strong>inner product</strong> generalizes the dot product from <MathInline>{`\\mathbb{R}^n`}</MathInline> to
        abstract linear spaces. It provides notions of length, angle, and orthogonality, turning
        a linear space into a geometric space where we can measure distances and project vectors.
      </p>

      <h2>Definition of Inner Product</h2>

      <Callout type="definition" title="Inner Product">
        <p>
          An <strong>inner product</strong> on a real linear space <MathInline>{`V`}</MathInline> is a
          function <MathInline>{`\\langle \\cdot, \\cdot \\rangle : V \\times V \\to \\mathbb{R}`}</MathInline> satisfying
          for all <MathInline>{`\\mathbf{u}, \\mathbf{v}, \\mathbf{w} \\in V`}</MathInline> and <MathInline>{`c \\in \\mathbb{R}`}</MathInline>:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            <strong>Symmetry:</strong> <MathInline>{`\\langle \\mathbf{u}, \\mathbf{v} \\rangle = \\langle \\mathbf{v}, \\mathbf{u} \\rangle`}</MathInline>
          </li>
          <li>
            <strong>Linearity in first argument:</strong>
            <ul className="list-disc pl-6 mt-1">
              <li><MathInline>{`\\langle \\mathbf{u} + \\mathbf{v}, \\mathbf{w} \\rangle = \\langle \\mathbf{u}, \\mathbf{w} \\rangle + \\langle \\mathbf{v}, \\mathbf{w} \\rangle`}</MathInline></li>
              <li><MathInline>{`\\langle c\\mathbf{u}, \\mathbf{v} \\rangle = c\\langle \\mathbf{u}, \\mathbf{v} \\rangle`}</MathInline></li>
            </ul>
          </li>
          <li>
            <strong>Positive definiteness:</strong> <MathInline>{`\\langle \\mathbf{v}, \\mathbf{v} \\rangle \\geq 0`}</MathInline>,
            with equality iff <MathInline>{`\\mathbf{v} = \\mathbf{0}`}</MathInline>
          </li>
        </ol>
        <p className="mt-2">
          A linear space with an inner product is called an <strong>inner product space</strong> or
          <strong> Euclidean space</strong>.
        </p>
      </Callout>

      <Callout type="info" title="Linearity in Second Argument">
        <p>
          By symmetry, linearity in the first argument implies linearity in the second:
        </p>
        <MathBlock>{`\\langle \\mathbf{u}, c\\mathbf{v} + \\mathbf{w} \\rangle = c\\langle \\mathbf{u}, \\mathbf{v} \\rangle + \\langle \\mathbf{u}, \\mathbf{w} \\rangle`}</MathBlock>
        <p>We say the inner product is <strong>bilinear</strong>.</p>
      </Callout>

      <h2>Examples of Inner Products</h2>

      <Callout type="example" title="Standard Inner Product on ℝⁿ">
        <p>
          The <strong>dot product</strong> is an inner product on <MathInline>{`\\mathbb{R}^n`}</MathInline>:
        </p>
        <MathBlock>{`\\langle \\mathbf{x}, \\mathbf{y} \\rangle = \\mathbf{x} \\cdot \\mathbf{y} = x_1 y_1 + x_2 y_2 + \\cdots + x_n y_n`}</MathBlock>
        <p>This is the default inner product on <MathInline>{`\\mathbb{R}^n`}</MathInline>.</p>
      </Callout>

      <Callout type="example" title="Weighted Inner Product">
        <p>
          For positive weights <MathInline>{`w_1, \\ldots, w_n > 0`}</MathInline>:
        </p>
        <MathBlock>{`\\langle \\mathbf{x}, \\mathbf{y} \\rangle_w = w_1 x_1 y_1 + w_2 x_2 y_2 + \\cdots + w_n x_n y_n`}</MathBlock>
        <p>This is also an inner product on <MathInline>{`\\mathbb{R}^n`}</MathInline>.</p>
      </Callout>

      <Callout type="example" title="Inner Product on C[a,b]">
        <p>
          For continuous functions on <MathInline>{`[a, b]`}</MathInline>:
        </p>
        <MathBlock>{`\\langle f, g \\rangle = \\int_a^b f(x)g(x) \\, dx`}</MathBlock>
        <p><strong>Verification:</strong></p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Symmetry: <MathInline>{`\\int f g = \\int g f`}</MathInline> ✓</li>
          <li>Linearity: Integration is linear ✓</li>
          <li>
            Positive definiteness: <MathInline>{`\\int f^2 \\geq 0`}</MathInline>, and <MathInline>{`= 0`}</MathInline> only
            if <MathInline>{`f = 0`}</MathInline> (for continuous <MathInline>{`f`}</MathInline>) ✓
          </li>
        </ul>
      </Callout>

      <Callout type="example" title="Weighted Inner Product on C[a,b]">
        <p>
          With a positive weight function <MathInline>{`w(x) > 0`}</MathInline>:
        </p>
        <MathBlock>{`\\langle f, g \\rangle_w = \\int_a^b f(x)g(x)w(x) \\, dx`}</MathBlock>
        <p>
          This is important in the theory of orthogonal polynomials (Legendre, Chebyshev, etc.).
        </p>
      </Callout>

      <Callout type="example" title="Inner Product on M_{m×n}">
        <p>
          For matrices, the <strong>Frobenius inner product</strong>:
        </p>
        <MathBlock>{`\\langle A, B \\rangle = \\sum_{i,j} A_{ij} B_{ij} = \\text{tr}(A^T B)`}</MathBlock>
        <p>
          where <MathInline>{`\\text{tr}`}</MathInline> denotes the trace (sum of diagonal entries).
        </p>
      </Callout>

      <h2>Norm</h2>

      <Callout type="definition" title="Norm (Length)">
        <p>
          The <strong>norm</strong> (or <strong>length</strong>) of a vector <MathInline>{`\\mathbf{v}`}</MathInline> is:
        </p>
        <MathBlock>{`\\|\\mathbf{v}\\| = \\sqrt{\\langle \\mathbf{v}, \\mathbf{v} \\rangle}`}</MathBlock>
        <p>A vector with <MathInline>{`\\|\\mathbf{v}\\| = 1`}</MathInline> is called a <strong>unit vector</strong>.</p>
      </Callout>

      <Callout type="theorem" title="Properties of the Norm">
        <ol className="list-decimal pl-6 space-y-2">
          <li><MathInline>{`\\|\\mathbf{v}\\| \\geq 0`}</MathInline>, with equality iff <MathInline>{`\\mathbf{v} = \\mathbf{0}`}</MathInline></li>
          <li><MathInline>{`\\|c\\mathbf{v}\\| = |c| \\|\\mathbf{v}\\|`}</MathInline></li>
          <li><MathInline>{`\\|\\mathbf{u} + \\mathbf{v}\\| \\leq \\|\\mathbf{u}\\| + \\|\\mathbf{v}\\|`}</MathInline> (triangle inequality)</li>
        </ol>
      </Callout>

      <Callout type="example" title="Norm of a Function">
        <p>
          In <MathInline>{`C[0, 1]`}</MathInline> with the standard inner product:
        </p>
        <MathBlock>{`\\|f\\| = \\sqrt{\\int_0^1 f(x)^2 \\, dx}`}</MathBlock>
        <p>For <MathInline>{`f(x) = x`}</MathInline>:</p>
        <MathBlock>{`\\|f\\| = \\sqrt{\\int_0^1 x^2 \\, dx} = \\sqrt{\\frac{1}{3}} = \\frac{1}{\\sqrt{3}}`}</MathBlock>
      </Callout>

      <h2>The Cauchy-Schwarz Inequality</h2>

      <Callout type="theorem" title="Cauchy-Schwarz Inequality">
        <p>For any vectors <MathInline>{`\\mathbf{u}, \\mathbf{v}`}</MathInline> in an inner product space:</p>
        <MathBlock>{`|\\langle \\mathbf{u}, \\mathbf{v} \\rangle| \\leq \\|\\mathbf{u}\\| \\|\\mathbf{v}\\|`}</MathBlock>
        <p>Equality holds iff <MathInline>{`\\mathbf{u}`}</MathInline> and <MathInline>{`\\mathbf{v}`}</MathInline> are linearly dependent.</p>
      </Callout>

      <Callout type="example" title="Cauchy-Schwarz for Functions">
        <p>For <MathInline>{`f, g \\in C[a, b]`}</MathInline>:</p>
        <MathBlock>{`\\left|\\int_a^b f(x)g(x) \\, dx\\right| \\leq \\sqrt{\\int_a^b f(x)^2 \\, dx} \\cdot \\sqrt{\\int_a^b g(x)^2 \\, dx}`}</MathBlock>
        <p>
          This is the integral form of the Cauchy-Schwarz inequality.
        </p>
      </Callout>

      <h2>Distance</h2>

      <Callout type="definition" title="Distance">
        <p>
          The <strong>distance</strong> between vectors <MathInline>{`\\mathbf{u}`}</MathInline> and <MathInline>{`\\mathbf{v}`}</MathInline> is:
        </p>
        <MathBlock>{`d(\\mathbf{u}, \\mathbf{v}) = \\|\\mathbf{u} - \\mathbf{v}\\|`}</MathBlock>
      </Callout>

      <Callout type="theorem" title="Metric Properties">
        <ol className="list-decimal pl-6 space-y-2">
          <li><MathInline>{`d(\\mathbf{u}, \\mathbf{v}) \\geq 0`}</MathInline>, with equality iff <MathInline>{`\\mathbf{u} = \\mathbf{v}`}</MathInline></li>
          <li><MathInline>{`d(\\mathbf{u}, \\mathbf{v}) = d(\\mathbf{v}, \\mathbf{u})`}</MathInline></li>
          <li><MathInline>{`d(\\mathbf{u}, \\mathbf{w}) \\leq d(\\mathbf{u}, \\mathbf{v}) + d(\\mathbf{v}, \\mathbf{w})`}</MathInline> (triangle inequality)</li>
        </ol>
      </Callout>

      <h2>Angle Between Vectors</h2>

      <Callout type="definition" title="Angle">
        <p>
          The <strong>angle</strong> <MathInline>{`\\theta`}</MathInline> between nonzero vectors <MathInline>{`\\mathbf{u}`}</MathInline> and <MathInline>{`\\mathbf{v}`}</MathInline> is
          defined by:
        </p>
        <MathBlock>{`\\cos\\theta = \\frac{\\langle \\mathbf{u}, \\mathbf{v} \\rangle}{\\|\\mathbf{u}\\| \\|\\mathbf{v}\\|}`}</MathBlock>
        <p>
          The Cauchy-Schwarz inequality guarantees <MathInline>{`|\\cos\\theta| \\leq 1`}</MathInline>, so <MathInline>{`\\theta`}</MathInline> is well-defined.
        </p>
      </Callout>

      <Callout type="definition" title="Orthogonality">
        <p>
          Vectors <MathInline>{`\\mathbf{u}`}</MathInline> and <MathInline>{`\\mathbf{v}`}</MathInline> are <strong>orthogonal</strong> (written <MathInline>{`\\mathbf{u} \\perp \\mathbf{v}`}</MathInline>) if:
        </p>
        <MathBlock>{`\\langle \\mathbf{u}, \\mathbf{v} \\rangle = 0`}</MathBlock>
        <p>
          This corresponds to <MathInline>{`\\theta = 90°`}</MathInline>.
        </p>
      </Callout>

      <Callout type="example" title="Orthogonal Functions">
        <p>
          In <MathInline>{`C[-\\pi, \\pi]`}</MathInline>, <MathInline>{`\\sin x`}</MathInline> and <MathInline>{`\\cos x`}</MathInline> are orthogonal:
        </p>
        <MathBlock>{`\\langle \\sin x, \\cos x \\rangle = \\int_{-\\pi}^{\\pi} \\sin x \\cos x \\, dx = \\frac{1}{2}\\int_{-\\pi}^{\\pi} \\sin(2x) \\, dx = 0`}</MathBlock>
      </Callout>

      <h2>The Pythagorean Theorem</h2>

      <Callout type="theorem" title="Pythagorean Theorem">
        <p>If <MathInline>{`\\mathbf{u} \\perp \\mathbf{v}`}</MathInline>, then:</p>
        <MathBlock>{`\\|\\mathbf{u} + \\mathbf{v}\\|^2 = \\|\\mathbf{u}\\|^2 + \\|\\mathbf{v}\\|^2`}</MathBlock>
        <p><strong>Proof:</strong></p>
        <MathBlock>{`\\|\\mathbf{u} + \\mathbf{v}\\|^2 = \\langle \\mathbf{u} + \\mathbf{v}, \\mathbf{u} + \\mathbf{v} \\rangle`}</MathBlock>
        <MathBlock>{`= \\|\\mathbf{u}\\|^2 + 2\\langle \\mathbf{u}, \\mathbf{v} \\rangle + \\|\\mathbf{v}\\|^2 = \\|\\mathbf{u}\\|^2 + \\|\\mathbf{v}\\|^2`}</MathBlock>
      </Callout>

      <Callout type="theorem" title="Generalized Pythagorean Theorem">
        <p>If <MathInline>{`\\mathbf{v}_1, \\ldots, \\mathbf{v}_k`}</MathInline> are mutually orthogonal, then:</p>
        <MathBlock>{`\\|\\mathbf{v}_1 + \\cdots + \\mathbf{v}_k\\|^2 = \\|\\mathbf{v}_1\\|^2 + \\cdots + \\|\\mathbf{v}_k\\|^2`}</MathBlock>
      </Callout>

      <h2>Orthogonal Complement</h2>

      <Callout type="definition" title="Orthogonal Complement">
        <p>
          The <strong>orthogonal complement</strong> of a subspace <MathInline>{`W`}</MathInline> is:
        </p>
        <MathBlock>{`W^\\perp = \\{\\mathbf{v} \\in V : \\langle \\mathbf{v}, \\mathbf{w} \\rangle = 0 \\text{ for all } \\mathbf{w} \\in W\\}`}</MathBlock>
        <p>This is also a subspace.</p>
      </Callout>

      <Callout type="theorem" title="Properties of Orthogonal Complement">
        <p>For a subspace <MathInline>{`W`}</MathInline> of a finite-dimensional inner product space <MathInline>{`V`}</MathInline>:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li><MathInline>{`V = W \\oplus W^\\perp`}</MathInline> (direct sum)</li>
          <li><MathInline>{`\\dim(W) + \\dim(W^\\perp) = \\dim(V)`}</MathInline></li>
          <li><MathInline>{`(W^\\perp)^\\perp = W`}</MathInline></li>
        </ol>
      </Callout>

      <h2>Summary</h2>

      <Callout type="info" title="Key Concepts">
        <p><strong>Inner product axioms:</strong></p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Symmetry: <MathInline>{`\\langle \\mathbf{u}, \\mathbf{v} \\rangle = \\langle \\mathbf{v}, \\mathbf{u} \\rangle`}</MathInline></li>
          <li>Linearity: <MathInline>{`\\langle a\\mathbf{u} + b\\mathbf{v}, \\mathbf{w} \\rangle = a\\langle \\mathbf{u}, \\mathbf{w} \\rangle + b\\langle \\mathbf{v}, \\mathbf{w} \\rangle`}</MathInline></li>
          <li>Positive definiteness: <MathInline>{`\\langle \\mathbf{v}, \\mathbf{v} \\rangle > 0`}</MathInline> for <MathInline>{`\\mathbf{v} \\neq \\mathbf{0}`}</MathInline></li>
        </ul>

        <p className="mt-3"><strong>Derived concepts:</strong></p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Norm: <MathInline>{`\\|\\mathbf{v}\\| = \\sqrt{\\langle \\mathbf{v}, \\mathbf{v} \\rangle}`}</MathInline></li>
          <li>Distance: <MathInline>{`d(\\mathbf{u}, \\mathbf{v}) = \\|\\mathbf{u} - \\mathbf{v}\\|`}</MathInline></li>
          <li>Angle: <MathInline>{`\\cos\\theta = \\langle \\mathbf{u}, \\mathbf{v} \\rangle / (\\|\\mathbf{u}\\|\\|\\mathbf{v}\\|)`}</MathInline></li>
          <li>Orthogonality: <MathInline>{`\\mathbf{u} \\perp \\mathbf{v} \\iff \\langle \\mathbf{u}, \\mathbf{v} \\rangle = 0`}</MathInline></li>
        </ul>

        <p className="mt-3"><strong>Key inequalities:</strong></p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Cauchy-Schwarz: <MathInline>{`|\\langle \\mathbf{u}, \\mathbf{v} \\rangle| \\leq \\|\\mathbf{u}\\|\\|\\mathbf{v}\\|`}</MathInline></li>
          <li>Triangle: <MathInline>{`\\|\\mathbf{u} + \\mathbf{v}\\| \\leq \\|\\mathbf{u}\\| + \\|\\mathbf{v}\\|`}</MathInline></li>
        </ul>

        <p className="mt-3"><strong>Pythagorean theorem:</strong> <MathInline>{`\\mathbf{u} \\perp \\mathbf{v} \\Rightarrow \\|\\mathbf{u} + \\mathbf{v}\\|^2 = \\|\\mathbf{u}\\|^2 + \\|\\mathbf{v}\\|^2`}</MathInline></p>
      </Callout>
    </LessonLayout>
  );
}
