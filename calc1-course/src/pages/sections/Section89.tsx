import { LessonLayout } from '../../components/layout/LessonLayout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';

export default function Section89() {
  return (
    <LessonLayout sectionId={89}>
      <h1>Definition of Linear Spaces</h1>

      <p>
        A <strong>linear space</strong> (or <strong>vector space</strong>) is a mathematical
        structure that abstracts the key properties of vectors in <InlineMath>{`\\mathbb{R}^n`}</InlineMath>.
        By identifying the essential axioms, we can apply linear algebra to functions, matrices,
        polynomials, and many other objects beyond geometric vectors.
      </p>

      <h2>The Axioms</h2>

      <Callout type="definition" title="Linear Space (Vector Space)">
        <p>
          A <strong>linear space</strong> over <InlineMath>{`\\mathbb{R}`}</InlineMath> consists of a
          set <InlineMath>{`V`}</InlineMath> with two operations:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Addition:</strong> <InlineMath>{`\\mathbf{u} + \\mathbf{v}`}</InlineMath> for <InlineMath>{`\\mathbf{u}, \\mathbf{v} \\in V`}</InlineMath></li>
          <li><strong>Scalar multiplication:</strong> <InlineMath>{`c\\mathbf{v}`}</InlineMath> for <InlineMath>{`c \\in \\mathbb{R}`}</InlineMath>, <InlineMath>{`\\mathbf{v} \\in V`}</InlineMath></li>
        </ul>
        <p>satisfying the following axioms for all <InlineMath>{`\\mathbf{u}, \\mathbf{v}, \\mathbf{w} \\in V`}</InlineMath> and <InlineMath>{`a, b \\in \\mathbb{R}`}</InlineMath>:</p>
      </Callout>

      <Callout type="theorem" title="Axioms for Addition">
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            <strong>Closure:</strong> <InlineMath>{`\\mathbf{u} + \\mathbf{v} \\in V`}</InlineMath>
          </li>
          <li>
            <strong>Commutativity:</strong> <InlineMath>{`\\mathbf{u} + \\mathbf{v} = \\mathbf{v} + \\mathbf{u}`}</InlineMath>
          </li>
          <li>
            <strong>Associativity:</strong> <InlineMath>{`(\\mathbf{u} + \\mathbf{v}) + \\mathbf{w} = \\mathbf{u} + (\\mathbf{v} + \\mathbf{w})`}</InlineMath>
          </li>
          <li>
            <strong>Zero element:</strong> There exists <InlineMath>{`\\mathbf{0} \\in V`}</InlineMath> such
            that <InlineMath>{`\\mathbf{v} + \\mathbf{0} = \\mathbf{v}`}</InlineMath> for all <InlineMath>{`\\mathbf{v}`}</InlineMath>
          </li>
          <li>
            <strong>Additive inverse:</strong> For each <InlineMath>{`\\mathbf{v}`}</InlineMath>, there
            exists <InlineMath>{`-\\mathbf{v}`}</InlineMath> such that <InlineMath>{`\\mathbf{v} + (-\\mathbf{v}) = \\mathbf{0}`}</InlineMath>
          </li>
        </ol>
      </Callout>

      <Callout type="theorem" title="Axioms for Scalar Multiplication">
        <ol className="list-decimal pl-6 space-y-2" start={6}>
          <li>
            <strong>Closure:</strong> <InlineMath>{`a\\mathbf{v} \\in V`}</InlineMath>
          </li>
          <li>
            <strong>Distributivity (scalar):</strong> <InlineMath>{`a(\\mathbf{u} + \\mathbf{v}) = a\\mathbf{u} + a\\mathbf{v}`}</InlineMath>
          </li>
          <li>
            <strong>Distributivity (vector):</strong> <InlineMath>{`(a + b)\\mathbf{v} = a\\mathbf{v} + b\\mathbf{v}`}</InlineMath>
          </li>
          <li>
            <strong>Associativity:</strong> <InlineMath>{`a(b\\mathbf{v}) = (ab)\\mathbf{v}`}</InlineMath>
          </li>
          <li>
            <strong>Identity:</strong> <InlineMath>{`1\\mathbf{v} = \\mathbf{v}`}</InlineMath>
          </li>
        </ol>
      </Callout>

      <h2>Basic Examples</h2>

      <Callout type="example" title="ℝⁿ: The Standard Example">
        <p>
          The space <InlineMath>{`\\mathbb{R}^n`}</InlineMath> of <InlineMath>{`n`}</InlineMath>-tuples
          with componentwise operations is the prototypical linear space:
        </p>
        <MathBlock>{`(x_1, \\ldots, x_n) + (y_1, \\ldots, y_n) = (x_1 + y_1, \\ldots, x_n + y_n)`}</MathBlock>
        <MathBlock>{`c(x_1, \\ldots, x_n) = (cx_1, \\ldots, cx_n)`}</MathBlock>
        <p>
          Zero element: <InlineMath>{`\\mathbf{0} = (0, 0, \\ldots, 0)`}</InlineMath>
        </p>
      </Callout>

      <Callout type="example" title="Function Spaces">
        <p>
          Let <InlineMath>{`\\mathcal{F}(S)`}</InlineMath> be the set of all real-valued functions on a set <InlineMath>{`S`}</InlineMath>.
          With pointwise operations:
        </p>
        <MathBlock>{`(f + g)(x) = f(x) + g(x), \\quad (cf)(x) = c \\cdot f(x)`}</MathBlock>
        <p>
          This is a linear space. The zero element is the constant function <InlineMath>{`f(x) = 0`}</InlineMath>.
        </p>
      </Callout>

      <Callout type="example" title="Continuous Functions: C[a,b]">
        <p>
          The set <InlineMath>{`C[a, b]`}</InlineMath> of continuous functions on <InlineMath>{`[a, b]`}</InlineMath> is
          a linear space:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Sum of continuous functions is continuous</li>
          <li>Scalar multiple of continuous function is continuous</li>
        </ul>
        <p>
          This is a subspace of <InlineMath>{`\\mathcal{F}([a, b])`}</InlineMath>.
        </p>
      </Callout>

      <Callout type="example" title="Polynomials: P and Pₙ">
        <p>
          <InlineMath>{`\\mathcal{P}`}</InlineMath> = all polynomials with real coefficients
        </p>
        <p>
          <InlineMath>{`\\mathcal{P}_n`}</InlineMath> = polynomials of degree at most <InlineMath>{`n`}</InlineMath>
        </p>
        <MathBlock>{`p(x) = a_0 + a_1 x + \\cdots + a_n x^n`}</MathBlock>
        <p>
          Both are linear spaces under the usual polynomial addition and scalar multiplication.
        </p>
      </Callout>

      <Callout type="example" title="Matrices: M_{m×n}">
        <p>
          The set <InlineMath>{`M_{m \\times n}`}</InlineMath> of <InlineMath>{`m \\times n`}</InlineMath> real
          matrices is a linear space with:
        </p>
        <MathBlock>{`(A + B)_{ij} = A_{ij} + B_{ij}, \\quad (cA)_{ij} = cA_{ij}`}</MathBlock>
        <p>
          Zero element: the <InlineMath>{`m \\times n`}</InlineMath> zero matrix.
        </p>
      </Callout>

      <h2>Properties from the Axioms</h2>

      <Callout type="theorem" title="Basic Properties">
        <p>In any linear space:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            <strong>Unique zero:</strong> The zero element is unique
          </li>
          <li>
            <strong>Unique inverse:</strong> Each element has a unique additive inverse
          </li>
          <li>
            <InlineMath>{`0\\mathbf{v} = \\mathbf{0}`}</InlineMath> for all <InlineMath>{`\\mathbf{v}`}</InlineMath>
          </li>
          <li>
            <InlineMath>{`a\\mathbf{0} = \\mathbf{0}`}</InlineMath> for all scalars <InlineMath>{`a`}</InlineMath>
          </li>
          <li>
            <InlineMath>{`(-1)\\mathbf{v} = -\\mathbf{v}`}</InlineMath>
          </li>
          <li>
            If <InlineMath>{`a\\mathbf{v} = \\mathbf{0}`}</InlineMath>, then <InlineMath>{`a = 0`}</InlineMath> or <InlineMath>{`\\mathbf{v} = \\mathbf{0}`}</InlineMath>
          </li>
        </ol>
      </Callout>

      <Callout type="info" title="Proof of Property 3">
        <p>To show <InlineMath>{`0\\mathbf{v} = \\mathbf{0}`}</InlineMath>:</p>
        <MathBlock>{`0\\mathbf{v} = (0 + 0)\\mathbf{v} = 0\\mathbf{v} + 0\\mathbf{v}`}</MathBlock>
        <p>Adding <InlineMath>{`-(0\\mathbf{v})`}</InlineMath> to both sides:</p>
        <MathBlock>{`\\mathbf{0} = 0\\mathbf{v}`}</MathBlock>
      </Callout>

      <h2>More Examples</h2>

      <Callout type="example" title="Solution Space of a Differential Equation">
        <p>
          The set of all solutions to a linear homogeneous differential equation is a linear space.
        </p>
        <p>For example, solutions to <InlineMath>{`y'' + y = 0`}</InlineMath>:</p>
        <MathBlock>{`y = c_1 \\cos x + c_2 \\sin x`}</MathBlock>
        <p>
          If <InlineMath>{`y_1`}</InlineMath> and <InlineMath>{`y_2`}</InlineMath> are solutions, so
          is <InlineMath>{`y_1 + y_2`}</InlineMath> and <InlineMath>{`cy_1`}</InlineMath>.
        </p>
      </Callout>

      <Callout type="example" title="Sequences">
        <p>
          The set of all real sequences <InlineMath>{`(a_1, a_2, a_3, \\ldots)`}</InlineMath> is a linear
          space with componentwise operations. This is like <InlineMath>{`\\mathbb{R}^\\infty`}</InlineMath>.
        </p>
      </Callout>

      <Callout type="example" title="The Trivial Space">
        <p>
          The set <InlineMath>{`\\{\\mathbf{0}\\}`}</InlineMath> containing only the zero vector is a
          linear space (the <strong>trivial</strong> or <strong>zero space</strong>).
        </p>
      </Callout>

      <h2>Non-Examples</h2>

      <Callout type="info" title="What is NOT a Linear Space">
        <p>A set fails to be a linear space if it violates any axiom:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Positive reals</strong> <InlineMath>{`\\mathbb{R}^+`}</InlineMath> with usual operations:
            Not closed under scalar multiplication (<InlineMath>{`(-1) \\cdot 2 = -2 \\notin \\mathbb{R}^+`}</InlineMath>)
          </li>
          <li>
            <strong>Integers</strong> <InlineMath>{`\\mathbb{Z}^n`}</InlineMath>: Not closed under scalar
            multiplication (<InlineMath>{`\\frac{1}{2}(1, 0) = (\\frac{1}{2}, 0) \\notin \\mathbb{Z}^2`}</InlineMath>)
          </li>
          <li>
            <strong>Unit sphere:</strong> <InlineMath>{`\\{\\mathbf{x} : \\|\\mathbf{x}\\| = 1\\}`}</InlineMath>:
            Not closed under addition or scalar multiplication
          </li>
          <li>
            <strong>Polynomials of degree exactly</strong> <InlineMath>{`n`}</InlineMath>: Zero polynomial
            has no degree; sum may have lower degree
          </li>
        </ul>
      </Callout>

      <h2>Linear Combinations</h2>

      <Callout type="definition" title="Linear Combination">
        <p>
          A <strong>linear combination</strong> of vectors <InlineMath>{`\\mathbf{v}_1, \\ldots, \\mathbf{v}_k`}</InlineMath> is
          an expression:
        </p>
        <MathBlock>{`c_1\\mathbf{v}_1 + c_2\\mathbf{v}_2 + \\cdots + c_k\\mathbf{v}_k`}</MathBlock>
        <p>
          where <InlineMath>{`c_1, \\ldots, c_k`}</InlineMath> are scalars.
        </p>
      </Callout>

      <Callout type="example" title="Linear Combinations in Function Spaces">
        <p>
          In the space of functions, <InlineMath>{`3\\sin x + 2\\cos x`}</InlineMath> is a linear
          combination of <InlineMath>{`\\sin x`}</InlineMath> and <InlineMath>{`\\cos x`}</InlineMath>.
        </p>
        <p>
          In <InlineMath>{`\\mathcal{P}_2`}</InlineMath>, <InlineMath>{`5 + 3x - 2x^2`}</InlineMath> is a linear
          combination of <InlineMath>{`1, x, x^2`}</InlineMath>.
        </p>
      </Callout>

      <h2>Vector Spaces over Other Fields</h2>

      <Callout type="info" title="Complex Vector Spaces">
        <p>
          One can also define linear spaces over <InlineMath>{`\\mathbb{C}`}</InlineMath> (complex numbers)
          or other <strong>fields</strong>. The axioms are the same, but scalars come from the
          chosen field.
        </p>
        <p>
          For example, <InlineMath>{`\\mathbb{C}^n`}</InlineMath> is a complex vector space where
          we can multiply vectors by complex scalars.
        </p>
      </Callout>

      <h2>Summary</h2>

      <Callout type="info" title="Key Points">
        <p><strong>A linear space</strong> is a set with addition and scalar multiplication satisfying 10 axioms.</p>

        <p className="mt-3"><strong>Key examples:</strong></p>
        <ul className="list-disc pl-6 space-y-1">
          <li><InlineMath>{`\\mathbb{R}^n`}</InlineMath> — <InlineMath>{`n`}</InlineMath>-tuples</li>
          <li><InlineMath>{`\\mathcal{P}_n`}</InlineMath> — polynomials of degree ≤ <InlineMath>{`n`}</InlineMath></li>
          <li><InlineMath>{`C[a,b]`}</InlineMath> — continuous functions</li>
          <li><InlineMath>{`M_{m \\times n}`}</InlineMath> — matrices</li>
          <li>Solution spaces of linear differential equations</li>
        </ul>

        <p className="mt-3"><strong>Key properties (derived from axioms):</strong></p>
        <ul className="list-disc pl-6 space-y-1">
          <li><InlineMath>{`0\\mathbf{v} = \\mathbf{0}`}</InlineMath></li>
          <li><InlineMath>{`(-1)\\mathbf{v} = -\\mathbf{v}`}</InlineMath></li>
          <li>Zero element and inverses are unique</li>
        </ul>

        <p className="mt-3"><strong>The power of abstraction:</strong> Once we prove a theorem using only the axioms, it applies to <em>all</em> linear spaces.</p>
      </Callout>
    </LessonLayout>
  );
}
