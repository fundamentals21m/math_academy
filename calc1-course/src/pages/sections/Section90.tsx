import { LessonLayout } from '../../components/layout/LessonLayout';
import { Math as MathInline, MathBlock } from '../../components/common/MathBlock';
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
          A subset <MathInline>{`W`}</MathInline> of a linear space <MathInline>{`V`}</MathInline> is
          a <strong>subspace</strong> if <MathInline>{`W`}</MathInline> is itself a linear space under
          the operations inherited from <MathInline>{`V`}</MathInline>.
        </p>
      </Callout>

      <Callout type="theorem" title="Subspace Test">
        <p>
          A nonempty subset <MathInline>{`W \\subseteq V`}</MathInline> is a subspace if and only if
          it is closed under addition and scalar multiplication:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            <strong>Closure under addition:</strong> If <MathInline>{`\\mathbf{u}, \\mathbf{v} \\in W`}</MathInline>,
            then <MathInline>{`\\mathbf{u} + \\mathbf{v} \\in W`}</MathInline>
          </li>
          <li>
            <strong>Closure under scalar multiplication:</strong> If <MathInline>{`\\mathbf{v} \\in W`}</MathInline> and <MathInline>{`c \\in \\mathbb{R}`}</MathInline>,
            then <MathInline>{`c\\mathbf{v} \\in W`}</MathInline>
          </li>
        </ol>
      </Callout>

      <Callout type="info" title="Why This Works">
        <p>
          The other axioms (commutativity, associativity, etc.) are automatically inherited
          from <MathInline>{`V`}</MathInline>. The closure conditions ensure:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <MathInline>{`\\mathbf{0} \\in W`}</MathInline> (take <MathInline>{`c = 0`}</MathInline> in condition 2)
          </li>
          <li>
            <MathInline>{`-\\mathbf{v} \\in W`}</MathInline> (take <MathInline>{`c = -1`}</MathInline>)
          </li>
        </ul>
      </Callout>

      <Callout type="theorem" title="One-Step Subspace Test">
        <p>
          Equivalently, <MathInline>{`W`}</MathInline> is a subspace iff for all <MathInline>{`\\mathbf{u}, \\mathbf{v} \\in W`}</MathInline> and <MathInline>{`c \\in \\mathbb{R}`}</MathInline>:
        </p>
        <MathBlock>{`c\\mathbf{u} + \\mathbf{v} \\in W`}</MathBlock>
        <p>(This combines both closure conditions into one.)</p>
      </Callout>

      <h2>Examples in ℝⁿ</h2>

      <Callout type="example" title="Lines Through the Origin">
        <p>
          In <MathInline>{`\\mathbb{R}^2`}</MathInline>, any line through the origin is a subspace:
        </p>
        <MathBlock>{`W = \\{t\\mathbf{v} : t \\in \\mathbb{R}\\}`}</MathBlock>
        <p>
          for some nonzero <MathInline>{`\\mathbf{v}`}</MathInline>. For example, <MathInline>{`W = \\{(t, 2t) : t \\in \\mathbb{R}\\}`}</MathInline>.
        </p>
        <p><strong>Check:</strong></p>
        <ul className="list-disc pl-6 space-y-1">
          <li><MathInline>{`(t_1, 2t_1) + (t_2, 2t_2) = (t_1 + t_2, 2(t_1 + t_2)) \\in W`}</MathInline> ✓</li>
          <li><MathInline>{`c(t, 2t) = (ct, 2ct) \\in W`}</MathInline> ✓</li>
        </ul>
      </Callout>

      <Callout type="example" title="Planes Through the Origin">
        <p>
          In <MathInline>{`\\mathbb{R}^3`}</MathInline>, any plane through the origin is a subspace.
          For example:
        </p>
        <MathBlock>{`W = \\{(x, y, z) : x + y + z = 0\\}`}</MathBlock>
        <p><strong>Check:</strong> If <MathInline>{`x_1 + y_1 + z_1 = 0`}</MathInline> and <MathInline>{`x_2 + y_2 + z_2 = 0`}</MathInline>, then:</p>
        <MathBlock>{`(x_1 + x_2) + (y_1 + y_2) + (z_1 + z_2) = 0 \\, \\checkmark`}</MathBlock>
        <MathBlock>{`cx_1 + cy_1 + cz_1 = c(x_1 + y_1 + z_1) = 0 \\, \\checkmark`}</MathBlock>
      </Callout>

      <Callout type="example" title="Non-Example: Line Not Through Origin">
        <p>
          The line <MathInline>{`W = \\{(x, y) : y = 2x + 1\\}`}</MathInline> is NOT a subspace:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li><MathInline>{`(0, 0) \\notin W`}</MathInline> (since <MathInline>{`0 \\neq 2(0) + 1`}</MathInline>)</li>
        </ul>
        <p>A subspace must contain the zero vector!</p>
      </Callout>

      <h2>Examples in Function Spaces</h2>

      <Callout type="example" title="Polynomials of Bounded Degree">
        <p>
          <MathInline>{`\\mathcal{P}_n`}</MathInline> (polynomials of degree ≤ <MathInline>{`n`}</MathInline>) is
          a subspace of <MathInline>{`\\mathcal{P}`}</MathInline> (all polynomials):
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Sum of polynomials of degree ≤ <MathInline>{`n`}</MathInline> has degree ≤ <MathInline>{`n`}</MathInline></li>
          <li>Scalar multiple of degree ≤ <MathInline>{`n`}</MathInline> has degree ≤ <MathInline>{`n`}</MathInline></li>
        </ul>
      </Callout>

      <Callout type="example" title="Differentiable Functions">
        <p>
          The set <MathInline>{`C^1[a, b]`}</MathInline> of continuously differentiable functions is
          a subspace of <MathInline>{`C[a, b]`}</MathInline>:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Sum of differentiable functions is differentiable</li>
          <li>Scalar multiple of differentiable function is differentiable</li>
        </ul>
      </Callout>

      <Callout type="example" title="Functions Vanishing at a Point">
        <p>
          <MathInline>{`W = \\{f \\in C[0, 1] : f(0) = 0\\}`}</MathInline> is a subspace of <MathInline>{`C[0, 1]`}</MathInline>:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>If <MathInline>{`f(0) = 0`}</MathInline> and <MathInline>{`g(0) = 0`}</MathInline>, then <MathInline>{`(f+g)(0) = 0`}</MathInline></li>
          <li>If <MathInline>{`f(0) = 0`}</MathInline>, then <MathInline>{`(cf)(0) = 0`}</MathInline></li>
        </ul>
      </Callout>

      <Callout type="example" title="Non-Example: Functions with f(0) = 1">
        <p>
          <MathInline>{`W = \\{f \\in C[0, 1] : f(0) = 1\\}`}</MathInline> is NOT a subspace:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>The zero function has <MathInline>{`0(0) = 0 \\neq 1`}</MathInline>, so <MathInline>{`\\mathbf{0} \\notin W`}</MathInline></li>
        </ul>
      </Callout>

      <h2>The Span as a Subspace</h2>

      <Callout type="theorem" title="Span is a Subspace">
        <p>
          For any vectors <MathInline>{`\\mathbf{v}_1, \\ldots, \\mathbf{v}_k`}</MathInline> in a linear space <MathInline>{`V`}</MathInline>,
          the span:
        </p>
        <MathBlock>{`\\text{span}\\{\\mathbf{v}_1, \\ldots, \\mathbf{v}_k\\} = \\{c_1\\mathbf{v}_1 + \\cdots + c_k\\mathbf{v}_k : c_i \\in \\mathbb{R}\\}`}</MathBlock>
        <p>is a subspace of <MathInline>{`V`}</MathInline>.</p>
      </Callout>

      <Callout type="info" title="Proof">
        <p>
          If <MathInline>{`\\mathbf{u} = \\sum a_i\\mathbf{v}_i`}</MathInline> and <MathInline>{`\\mathbf{w} = \\sum b_i\\mathbf{v}_i`}</MathInline>,
          then:
        </p>
        <MathBlock>{`\\mathbf{u} + \\mathbf{w} = \\sum (a_i + b_i)\\mathbf{v}_i \\in \\text{span}`}</MathBlock>
        <MathBlock>{`c\\mathbf{u} = \\sum (ca_i)\\mathbf{v}_i \\in \\text{span}`}</MathBlock>
      </Callout>

      <Callout type="theorem" title="Smallest Subspace Containing a Set">
        <p>
          <MathInline>{`\\text{span}\\{\\mathbf{v}_1, \\ldots, \\mathbf{v}_k\\}`}</MathInline> is the smallest
          subspace containing <MathInline>{`\\mathbf{v}_1, \\ldots, \\mathbf{v}_k`}</MathInline>.
        </p>
        <p>
          Any subspace containing these vectors must contain all their linear combinations.
        </p>
      </Callout>

      <h2>Solution Spaces</h2>

      <Callout type="theorem" title="Homogeneous Linear Equations">
        <p>
          The solution set of a homogeneous linear system <MathInline>{`A\\mathbf{x} = \\mathbf{0}`}</MathInline> is
          a subspace of <MathInline>{`\\mathbb{R}^n`}</MathInline> (where <MathInline>{`A`}</MathInline> is <MathInline>{`m \\times n`}</MathInline>).
        </p>
        <p>This is called the <strong>null space</strong> of <MathInline>{`A`}</MathInline>.</p>
      </Callout>

      <Callout type="info" title="Proof">
        <p>
          If <MathInline>{`A\\mathbf{u} = \\mathbf{0}`}</MathInline> and <MathInline>{`A\\mathbf{v} = \\mathbf{0}`}</MathInline>, then:
        </p>
        <MathBlock>{`A(\\mathbf{u} + \\mathbf{v}) = A\\mathbf{u} + A\\mathbf{v} = \\mathbf{0} + \\mathbf{0} = \\mathbf{0}`}</MathBlock>
        <MathBlock>{`A(c\\mathbf{u}) = cA\\mathbf{u} = c\\mathbf{0} = \\mathbf{0}`}</MathBlock>
      </Callout>

      <Callout type="example" title="Null Space Example">
        <p>Find the null space of <MathInline>{`A = \\begin{pmatrix} 1 & 2 & 1 \\ 2 & 4 & 2 \\end{pmatrix}`}</MathInline>.</p>
        <p><strong>Solution:</strong> Solve <MathInline>{`A\\mathbf{x} = \\mathbf{0}`}</MathInline>:</p>
        <MathBlock>{`x_1 + 2x_2 + x_3 = 0`}</MathBlock>
        <p>Let <MathInline>{`x_2 = s`}</MathInline>, <MathInline>{`x_3 = t`}</MathInline>. Then <MathInline>{`x_1 = -2s - t`}</MathInline>.</p>
        <MathBlock>{`\\text{null}(A) = \\{s(-2, 1, 0) + t(-1, 0, 1) : s, t \\in \\mathbb{R}\\}`}</MathBlock>
        <MathBlock>{`= \\text{span}\\{(-2, 1, 0), (-1, 0, 1)\\}`}</MathBlock>
      </Callout>

      <Callout type="info" title="Non-Homogeneous Systems">
        <p>
          The solution set of <MathInline>{`A\\mathbf{x} = \\mathbf{b}`}</MathInline> (with <MathInline>{`\\mathbf{b} \\neq \\mathbf{0}`}</MathInline>)
          is NOT a subspace (doesn't contain <MathInline>{`\\mathbf{0}`}</MathInline>).
        </p>
        <p>
          However, if <MathInline>{`\\mathbf{x}_p`}</MathInline> is a particular solution, the general
          solution is <MathInline>{`\\mathbf{x}_p + \\text{null}(A)`}</MathInline> (a "translated subspace").
        </p>
      </Callout>

      <h2>Intersection and Sum of Subspaces</h2>

      <Callout type="theorem" title="Intersection of Subspaces">
        <p>
          If <MathInline>{`U`}</MathInline> and <MathInline>{`W`}</MathInline> are subspaces of <MathInline>{`V`}</MathInline>,
          then <MathInline>{`U \\cap W`}</MathInline> is also a subspace.
        </p>
      </Callout>

      <Callout type="info" title="Proof">
        <p>
          If <MathInline>{`\\mathbf{u}, \\mathbf{v} \\in U \\cap W`}</MathInline>, then both are in <MathInline>{`U`}</MathInline> and
          in <MathInline>{`W`}</MathInline>. Since both are subspaces:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li><MathInline>{`\\mathbf{u} + \\mathbf{v} \\in U`}</MathInline> and <MathInline>{`\\mathbf{u} + \\mathbf{v} \\in W`}</MathInline>, so <MathInline>{`\\mathbf{u} + \\mathbf{v} \\in U \\cap W`}</MathInline></li>
          <li><MathInline>{`c\\mathbf{u} \\in U`}</MathInline> and <MathInline>{`c\\mathbf{u} \\in W`}</MathInline>, so <MathInline>{`c\\mathbf{u} \\in U \\cap W`}</MathInline></li>
        </ul>
      </Callout>

      <Callout type="definition" title="Sum of Subspaces">
        <p>
          The <strong>sum</strong> of subspaces <MathInline>{`U`}</MathInline> and <MathInline>{`W`}</MathInline> is:
        </p>
        <MathBlock>{`U + W = \\{\\mathbf{u} + \\mathbf{w} : \\mathbf{u} \\in U, \\mathbf{w} \\in W\\}`}</MathBlock>
        <p>This is also a subspace (the smallest subspace containing both <MathInline>{`U`}</MathInline> and <MathInline>{`W`}</MathInline>).</p>
      </Callout>

      <Callout type="info" title="Union is NOT a Subspace">
        <p>
          The union <MathInline>{`U \\cup W`}</MathInline> is generally NOT a subspace.
        </p>
        <p>
          Example: In <MathInline>{`\\mathbb{R}^2`}</MathInline>, let <MathInline>{`U`}</MathInline> = <MathInline>{`x`}</MathInline>-axis
          and <MathInline>{`W`}</MathInline> = <MathInline>{`y`}</MathInline>-axis.
          Then <MathInline>{`(1, 0) \\in U`}</MathInline> and <MathInline>{`(0, 1) \\in W`}</MathInline>,
          but <MathInline>{`(1, 1) \\notin U \\cup W`}</MathInline>.
        </p>
      </Callout>

      <h2>Summary</h2>

      <Callout type="info" title="Key Points">
        <p><strong>Subspace test:</strong> <MathInline>{`W \\subseteq V`}</MathInline> is a subspace iff:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><MathInline>{`W \\neq \\emptyset`}</MathInline> (or equivalently, <MathInline>{`\\mathbf{0} \\in W`}</MathInline>)</li>
          <li>Closed under addition: <MathInline>{`\\mathbf{u}, \\mathbf{v} \\in W \\Rightarrow \\mathbf{u} + \\mathbf{v} \\in W`}</MathInline></li>
          <li>Closed under scalar multiplication: <MathInline>{`\\mathbf{v} \\in W, c \\in \\mathbb{R} \\Rightarrow c\\mathbf{v} \\in W`}</MathInline></li>
        </ul>

        <p className="mt-3"><strong>Important subspaces:</strong></p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Lines and planes through the origin in <MathInline>{`\\mathbb{R}^n`}</MathInline></li>
          <li><MathInline>{`\\text{span}\\{\\mathbf{v}_1, \\ldots, \\mathbf{v}_k\\}`}</MathInline></li>
          <li>Null space of a matrix: <MathInline>{`\\{\\mathbf{x} : A\\mathbf{x} = \\mathbf{0}\\}`}</MathInline></li>
          <li>Intersection of subspaces</li>
          <li>Sum of subspaces</li>
        </ul>

        <p className="mt-3"><strong>Non-subspaces:</strong></p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Sets not containing <MathInline>{`\\mathbf{0}`}</MathInline></li>
          <li>Solution sets of non-homogeneous equations</li>
          <li>Union of subspaces (generally)</li>
        </ul>
      </Callout>
    </LessonLayout>
  );
}
