import { LessonLayout } from '../../components/layout/LessonLayout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';

export default function Section90() {
  return (
    <LessonLayout sectionId={90}>
      <h1>Subspaces</h1>

      <p>
        A <strong>subspace</strong> is a subset of a linear space that is itself a linear space
        under the same operations. Subspaces are fundamental for understanding the structure of
        linear spaces and appear naturally as solution sets, ranges, and null spaces.
      </p>

      <h2>Definition</h2>

      <Callout type="definition" title="Subspace">
        <p>
          A subset <InlineMath>{`W`}</InlineMath> of a linear space <InlineMath>{`V`}</InlineMath> is
          a <strong>subspace</strong> if <InlineMath>{`W`}</InlineMath> is itself a linear space under
          the operations inherited from <InlineMath>{`V`}</InlineMath>.
        </p>
      </Callout>

      <Callout type="theorem" title="Subspace Test">
        <p>
          A nonempty subset <InlineMath>{`W \\subseteq V`}</InlineMath> is a subspace if and only if
          it is closed under addition and scalar multiplication:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            <strong>Closure under addition:</strong> If <InlineMath>{`\\mathbf{u}, \\mathbf{v} \\in W`}</InlineMath>,
            then <InlineMath>{`\\mathbf{u} + \\mathbf{v} \\in W`}</InlineMath>
          </li>
          <li>
            <strong>Closure under scalar multiplication:</strong> If <InlineMath>{`\\mathbf{v} \\in W`}</InlineMath> and <InlineMath>{`c \\in \\mathbb{R}`}</InlineMath>,
            then <InlineMath>{`c\\mathbf{v} \\in W`}</InlineMath>
          </li>
        </ol>
      </Callout>

      <Callout type="info" title="Why This Works">
        <p>
          The other axioms (commutativity, associativity, etc.) are automatically inherited
          from <InlineMath>{`V`}</InlineMath>. The closure conditions ensure:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <InlineMath>{`\\mathbf{0} \\in W`}</InlineMath> (take <InlineMath>{`c = 0`}</InlineMath> in condition 2)
          </li>
          <li>
            <InlineMath>{`-\\mathbf{v} \\in W`}</InlineMath> (take <InlineMath>{`c = -1`}</InlineMath>)
          </li>
        </ul>
      </Callout>

      <Callout type="theorem" title="One-Step Subspace Test">
        <p>
          Equivalently, <InlineMath>{`W`}</InlineMath> is a subspace iff for all <InlineMath>{`\\mathbf{u}, \\mathbf{v} \\in W`}</InlineMath> and <InlineMath>{`c \\in \\mathbb{R}`}</InlineMath>:
        </p>
        <MathBlock>{`c\\mathbf{u} + \\mathbf{v} \\in W`}</MathBlock>
        <p>(This combines both closure conditions into one.)</p>
      </Callout>

      <h2>Examples in ℝⁿ</h2>

      <Callout type="example" title="Lines Through the Origin">
        <p>
          In <InlineMath>{`\\mathbb{R}^2`}</InlineMath>, any line through the origin is a subspace:
        </p>
        <MathBlock>{`W = \\{t\\mathbf{v} : t \\in \\mathbb{R}\\}`}</MathBlock>
        <p>
          for some nonzero <InlineMath>{`\\mathbf{v}`}</InlineMath>. For example, <InlineMath>{`W = \\{(t, 2t) : t \\in \\mathbb{R}\\}`}</InlineMath>.
        </p>
        <p><strong>Check:</strong></p>
        <ul className="list-disc pl-6 space-y-1">
          <li><InlineMath>{`(t_1, 2t_1) + (t_2, 2t_2) = (t_1 + t_2, 2(t_1 + t_2)) \\in W`}</InlineMath> ✓</li>
          <li><InlineMath>{`c(t, 2t) = (ct, 2ct) \\in W`}</InlineMath> ✓</li>
        </ul>
      </Callout>

      <Callout type="example" title="Planes Through the Origin">
        <p>
          In <InlineMath>{`\\mathbb{R}^3`}</InlineMath>, any plane through the origin is a subspace.
          For example:
        </p>
        <MathBlock>{`W = \\{(x, y, z) : x + y + z = 0\\}`}</MathBlock>
        <p><strong>Check:</strong> If <InlineMath>{`x_1 + y_1 + z_1 = 0`}</InlineMath> and <InlineMath>{`x_2 + y_2 + z_2 = 0`}</InlineMath>, then:</p>
        <MathBlock>{`(x_1 + x_2) + (y_1 + y_2) + (z_1 + z_2) = 0 \\, \\checkmark`}</MathBlock>
        <MathBlock>{`cx_1 + cy_1 + cz_1 = c(x_1 + y_1 + z_1) = 0 \\, \\checkmark`}</MathBlock>
      </Callout>

      <Callout type="example" title="Non-Example: Line Not Through Origin">
        <p>
          The line <InlineMath>{`W = \\{(x, y) : y = 2x + 1\\}`}</InlineMath> is NOT a subspace:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li><InlineMath>{`(0, 0) \\notin W`}</InlineMath> (since <InlineMath>{`0 \\neq 2(0) + 1`}</InlineMath>)</li>
        </ul>
        <p>A subspace must contain the zero vector!</p>
      </Callout>

      <h2>Examples in Function Spaces</h2>

      <Callout type="example" title="Polynomials of Bounded Degree">
        <p>
          <InlineMath>{`\\mathcal{P}_n`}</InlineMath> (polynomials of degree ≤ <InlineMath>{`n`}</InlineMath>) is
          a subspace of <InlineMath>{`\\mathcal{P}`}</InlineMath> (all polynomials):
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Sum of polynomials of degree ≤ <InlineMath>{`n`}</InlineMath> has degree ≤ <InlineMath>{`n`}</InlineMath></li>
          <li>Scalar multiple of degree ≤ <InlineMath>{`n`}</InlineMath> has degree ≤ <InlineMath>{`n`}</InlineMath></li>
        </ul>
      </Callout>

      <Callout type="example" title="Differentiable Functions">
        <p>
          The set <InlineMath>{`C^1[a, b]`}</InlineMath> of continuously differentiable functions is
          a subspace of <InlineMath>{`C[a, b]`}</InlineMath>:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Sum of differentiable functions is differentiable</li>
          <li>Scalar multiple of differentiable function is differentiable</li>
        </ul>
      </Callout>

      <Callout type="example" title="Functions Vanishing at a Point">
        <p>
          <InlineMath>{`W = \\{f \\in C[0, 1] : f(0) = 0\\}`}</InlineMath> is a subspace of <InlineMath>{`C[0, 1]`}</InlineMath>:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>If <InlineMath>{`f(0) = 0`}</InlineMath> and <InlineMath>{`g(0) = 0`}</InlineMath>, then <InlineMath>{`(f+g)(0) = 0`}</InlineMath></li>
          <li>If <InlineMath>{`f(0) = 0`}</InlineMath>, then <InlineMath>{`(cf)(0) = 0`}</InlineMath></li>
        </ul>
      </Callout>

      <Callout type="example" title="Non-Example: Functions with f(0) = 1">
        <p>
          <InlineMath>{`W = \\{f \\in C[0, 1] : f(0) = 1\\}`}</InlineMath> is NOT a subspace:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>The zero function has <InlineMath>{`0(0) = 0 \\neq 1`}</InlineMath>, so <InlineMath>{`\\mathbf{0} \\notin W`}</InlineMath></li>
        </ul>
      </Callout>

      <h2>The Span as a Subspace</h2>

      <Callout type="theorem" title="Span is a Subspace">
        <p>
          For any vectors <InlineMath>{`\\mathbf{v}_1, \\ldots, \\mathbf{v}_k`}</InlineMath> in a linear space <InlineMath>{`V`}</InlineMath>,
          the span:
        </p>
        <MathBlock>{`\\text{span}\\{\\mathbf{v}_1, \\ldots, \\mathbf{v}_k\\} = \\{c_1\\mathbf{v}_1 + \\cdots + c_k\\mathbf{v}_k : c_i \\in \\mathbb{R}\\}`}</MathBlock>
        <p>is a subspace of <InlineMath>{`V`}</InlineMath>.</p>
      </Callout>

      <Callout type="info" title="Proof">
        <p>
          If <InlineMath>{`\\mathbf{u} = \\sum a_i\\mathbf{v}_i`}</InlineMath> and <InlineMath>{`\\mathbf{w} = \\sum b_i\\mathbf{v}_i`}</InlineMath>,
          then:
        </p>
        <MathBlock>{`\\mathbf{u} + \\mathbf{w} = \\sum (a_i + b_i)\\mathbf{v}_i \\in \\text{span}`}</MathBlock>
        <MathBlock>{`c\\mathbf{u} = \\sum (ca_i)\\mathbf{v}_i \\in \\text{span}`}</MathBlock>
      </Callout>

      <Callout type="theorem" title="Smallest Subspace Containing a Set">
        <p>
          <InlineMath>{`\\text{span}\\{\\mathbf{v}_1, \\ldots, \\mathbf{v}_k\\}`}</InlineMath> is the smallest
          subspace containing <InlineMath>{`\\mathbf{v}_1, \\ldots, \\mathbf{v}_k`}</InlineMath>.
        </p>
        <p>
          Any subspace containing these vectors must contain all their linear combinations.
        </p>
      </Callout>

      <h2>Solution Spaces</h2>

      <Callout type="theorem" title="Homogeneous Linear Equations">
        <p>
          The solution set of a homogeneous linear system <InlineMath>{`A\\mathbf{x} = \\mathbf{0}`}</InlineMath> is
          a subspace of <InlineMath>{`\\mathbb{R}^n`}</InlineMath> (where <InlineMath>{`A`}</InlineMath> is <InlineMath>{`m \\times n`}</InlineMath>).
        </p>
        <p>This is called the <strong>null space</strong> of <InlineMath>{`A`}</InlineMath>.</p>
      </Callout>

      <Callout type="info" title="Proof">
        <p>
          If <InlineMath>{`A\\mathbf{u} = \\mathbf{0}`}</InlineMath> and <InlineMath>{`A\\mathbf{v} = \\mathbf{0}`}</InlineMath>, then:
        </p>
        <MathBlock>{`A(\\mathbf{u} + \\mathbf{v}) = A\\mathbf{u} + A\\mathbf{v} = \\mathbf{0} + \\mathbf{0} = \\mathbf{0}`}</MathBlock>
        <MathBlock>{`A(c\\mathbf{u}) = cA\\mathbf{u} = c\\mathbf{0} = \\mathbf{0}`}</MathBlock>
      </Callout>

      <Callout type="example" title="Null Space Example">
        <p>Find the null space of <InlineMath>{`A = \\begin{pmatrix} 1 & 2 & 1 \\ 2 & 4 & 2 \\end{pmatrix}`}</InlineMath>.</p>
        <p><strong>Solution:</strong> Solve <InlineMath>{`A\\mathbf{x} = \\mathbf{0}`}</InlineMath>:</p>
        <MathBlock>{`x_1 + 2x_2 + x_3 = 0`}</MathBlock>
        <p>Let <InlineMath>{`x_2 = s`}</InlineMath>, <InlineMath>{`x_3 = t`}</InlineMath>. Then <InlineMath>{`x_1 = -2s - t`}</InlineMath>.</p>
        <MathBlock>{`\\text{null}(A) = \\{s(-2, 1, 0) + t(-1, 0, 1) : s, t \\in \\mathbb{R}\\}`}</MathBlock>
        <MathBlock>{`= \\text{span}\\{(-2, 1, 0), (-1, 0, 1)\\}`}</MathBlock>
      </Callout>

      <Callout type="info" title="Non-Homogeneous Systems">
        <p>
          The solution set of <InlineMath>{`A\\mathbf{x} = \\mathbf{b}`}</InlineMath> (with <InlineMath>{`\\mathbf{b} \\neq \\mathbf{0}`}</InlineMath>)
          is NOT a subspace (doesn't contain <InlineMath>{`\\mathbf{0}`}</InlineMath>).
        </p>
        <p>
          However, if <InlineMath>{`\\mathbf{x}_p`}</InlineMath> is a particular solution, the general
          solution is <InlineMath>{`\\mathbf{x}_p + \\text{null}(A)`}</InlineMath> (a "translated subspace").
        </p>
      </Callout>

      <h2>Intersection and Sum of Subspaces</h2>

      <Callout type="theorem" title="Intersection of Subspaces">
        <p>
          If <InlineMath>{`U`}</InlineMath> and <InlineMath>{`W`}</InlineMath> are subspaces of <InlineMath>{`V`}</InlineMath>,
          then <InlineMath>{`U \\cap W`}</InlineMath> is also a subspace.
        </p>
      </Callout>

      <Callout type="info" title="Proof">
        <p>
          If <InlineMath>{`\\mathbf{u}, \\mathbf{v} \\in U \\cap W`}</InlineMath>, then both are in <InlineMath>{`U`}</InlineMath> and
          in <InlineMath>{`W`}</InlineMath>. Since both are subspaces:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li><InlineMath>{`\\mathbf{u} + \\mathbf{v} \\in U`}</InlineMath> and <InlineMath>{`\\mathbf{u} + \\mathbf{v} \\in W`}</InlineMath>, so <InlineMath>{`\\mathbf{u} + \\mathbf{v} \\in U \\cap W`}</InlineMath></li>
          <li><InlineMath>{`c\\mathbf{u} \\in U`}</InlineMath> and <InlineMath>{`c\\mathbf{u} \\in W`}</InlineMath>, so <InlineMath>{`c\\mathbf{u} \\in U \\cap W`}</InlineMath></li>
        </ul>
      </Callout>

      <Callout type="definition" title="Sum of Subspaces">
        <p>
          The <strong>sum</strong> of subspaces <InlineMath>{`U`}</InlineMath> and <InlineMath>{`W`}</InlineMath> is:
        </p>
        <MathBlock>{`U + W = \\{\\mathbf{u} + \\mathbf{w} : \\mathbf{u} \\in U, \\mathbf{w} \\in W\\}`}</MathBlock>
        <p>This is also a subspace (the smallest subspace containing both <InlineMath>{`U`}</InlineMath> and <InlineMath>{`W`}</InlineMath>).</p>
      </Callout>

      <Callout type="info" title="Union is NOT a Subspace">
        <p>
          The union <InlineMath>{`U \\cup W`}</InlineMath> is generally NOT a subspace.
        </p>
        <p>
          Example: In <InlineMath>{`\\mathbb{R}^2`}</InlineMath>, let <InlineMath>{`U`}</InlineMath> = <InlineMath>{`x`}</InlineMath>-axis
          and <InlineMath>{`W`}</InlineMath> = <InlineMath>{`y`}</InlineMath>-axis.
          Then <InlineMath>{`(1, 0) \\in U`}</InlineMath> and <InlineMath>{`(0, 1) \\in W`}</InlineMath>,
          but <InlineMath>{`(1, 1) \\notin U \\cup W`}</InlineMath>.
        </p>
      </Callout>

      <h2>Summary</h2>

      <Callout type="info" title="Key Points">
        <p><strong>Subspace test:</strong> <InlineMath>{`W \\subseteq V`}</InlineMath> is a subspace iff:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><InlineMath>{`W \\neq \\emptyset`}</InlineMath> (or equivalently, <InlineMath>{`\\mathbf{0} \\in W`}</InlineMath>)</li>
          <li>Closed under addition: <InlineMath>{`\\mathbf{u}, \\mathbf{v} \\in W \\Rightarrow \\mathbf{u} + \\mathbf{v} \\in W`}</InlineMath></li>
          <li>Closed under scalar multiplication: <InlineMath>{`\\mathbf{v} \\in W, c \\in \\mathbb{R} \\Rightarrow c\\mathbf{v} \\in W`}</InlineMath></li>
        </ul>

        <p className="mt-3"><strong>Important subspaces:</strong></p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Lines and planes through the origin in <InlineMath>{`\\mathbb{R}^n`}</InlineMath></li>
          <li><InlineMath>{`\\text{span}\\{\\mathbf{v}_1, \\ldots, \\mathbf{v}_k\\}`}</InlineMath></li>
          <li>Null space of a matrix: <InlineMath>{`\\{\\mathbf{x} : A\\mathbf{x} = \\mathbf{0}\\}`}</InlineMath></li>
          <li>Intersection of subspaces</li>
          <li>Sum of subspaces</li>
        </ul>

        <p className="mt-3"><strong>Non-subspaces:</strong></p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Sets not containing <InlineMath>{`\\mathbf{0}`}</InlineMath></li>
          <li>Solution sets of non-homogeneous equations</li>
          <li>Union of subspaces (generally)</li>
        </ul>
      </Callout>
    </LessonLayout>
  );
}
