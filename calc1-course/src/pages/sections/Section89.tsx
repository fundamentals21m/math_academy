import { LessonLayout } from '../../components/layout/LessonLayout';
import { Math as MathInline, MathBlock } from '../../components/common/MathBlock';
import { Callout } from '../../components/common/Callout';

export default function Section89() {
  return (
    <LessonLayout sectionId={89}>
      <h1>Definition of Linear Spaces</h1>

      <p>
        A <strong>linear space</strong> (or <strong>vector space</strong>) is a mathematical
        structure that abstracts the key properties of vectors in <MathInline>{`\\mathbb{R}^n`}</MathInline>.
        By identifying the essential axioms, we can apply linear algebra to functions, matrices,
        polynomials, and many other objects beyond geometric vectors.
      </p>

      <h2>The Axioms</h2>

      <Callout type="definition" title="Linear Space (Vector Space)">
        <p>
          A <strong>linear space</strong> over <MathInline>{`\\mathbb{R}`}</MathInline> consists of a
          set <MathInline>{`V`}</MathInline> with two operations:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Addition:</strong> <MathInline>{`\\mathbf{u} + \\mathbf{v}`}</MathInline> for <MathInline>{`\\mathbf{u}, \\mathbf{v} \\in V`}</MathInline></li>
          <li><strong>Scalar multiplication:</strong> <MathInline>{`c\\mathbf{v}`}</MathInline> for <MathInline>{`c \\in \\mathbb{R}`}</MathInline>, <MathInline>{`\\mathbf{v} \\in V`}</MathInline></li>
        </ul>
        <p>satisfying the following axioms for all <MathInline>{`\\mathbf{u}, \\mathbf{v}, \\mathbf{w} \\in V`}</MathInline> and <MathInline>{`a, b \\in \\mathbb{R}`}</MathInline>:</p>
      </Callout>

      <Callout type="theorem" title="Axioms for Addition">
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            <strong>Closure:</strong> <MathInline>{`\\mathbf{u} + \\mathbf{v} \\in V`}</MathInline>
          </li>
          <li>
            <strong>Commutativity:</strong> <MathInline>{`\\mathbf{u} + \\mathbf{v} = \\mathbf{v} + \\mathbf{u}`}</MathInline>
          </li>
          <li>
            <strong>Associativity:</strong> <MathInline>{`(\\mathbf{u} + \\mathbf{v}) + \\mathbf{w} = \\mathbf{u} + (\\mathbf{v} + \\mathbf{w})`}</MathInline>
          </li>
          <li>
            <strong>Zero element:</strong> There exists <MathInline>{`\\mathbf{0} \\in V`}</MathInline> such
            that <MathInline>{`\\mathbf{v} + \\mathbf{0} = \\mathbf{v}`}</MathInline> for all <MathInline>{`\\mathbf{v}`}</MathInline>
          </li>
          <li>
            <strong>Additive inverse:</strong> For each <MathInline>{`\\mathbf{v}`}</MathInline>, there
            exists <MathInline>{`-\\mathbf{v}`}</MathInline> such that <MathInline>{`\\mathbf{v} + (-\\mathbf{v}) = \\mathbf{0}`}</MathInline>
          </li>
        </ol>
      </Callout>

      <Callout type="theorem" title="Axioms for Scalar Multiplication">
        <ol className="list-decimal pl-6 space-y-2" start={6}>
          <li>
            <strong>Closure:</strong> <MathInline>{`a\\mathbf{v} \\in V`}</MathInline>
          </li>
          <li>
            <strong>Distributivity (scalar):</strong> <MathInline>{`a(\\mathbf{u} + \\mathbf{v}) = a\\mathbf{u} + a\\mathbf{v}`}</MathInline>
          </li>
          <li>
            <strong>Distributivity (vector):</strong> <MathInline>{`(a + b)\\mathbf{v} = a\\mathbf{v} + b\\mathbf{v}`}</MathInline>
          </li>
          <li>
            <strong>Associativity:</strong> <MathInline>{`a(b\\mathbf{v}) = (ab)\\mathbf{v}`}</MathInline>
          </li>
          <li>
            <strong>Identity:</strong> <MathInline>{`1\\mathbf{v} = \\mathbf{v}`}</MathInline>
          </li>
        </ol>
      </Callout>

      <h2>Basic Examples</h2>

      <Callout type="example" title="ℝⁿ: The Standard Example">
        <p>
          The space <MathInline>{`\\mathbb{R}^n`}</MathInline> of <MathInline>{`n`}</MathInline>-tuples
          with componentwise operations is the prototypical linear space:
        </p>
        <MathBlock>{`(x_1, \\ldots, x_n) + (y_1, \\ldots, y_n) = (x_1 + y_1, \\ldots, x_n + y_n)`}</MathBlock>
        <MathBlock>{`c(x_1, \\ldots, x_n) = (cx_1, \\ldots, cx_n)`}</MathBlock>
        <p>
          Zero element: <MathInline>{`\\mathbf{0} = (0, 0, \\ldots, 0)`}</MathInline>
        </p>
      </Callout>

      <Callout type="example" title="Function Spaces">
        <p>
          Let <MathInline>{`\\mathcal{F}(S)`}</MathInline> be the set of all real-valued functions on a set <MathInline>{`S`}</MathInline>.
          With pointwise operations:
        </p>
        <MathBlock>{`(f + g)(x) = f(x) + g(x), \\quad (cf)(x) = c \\cdot f(x)`}</MathBlock>
        <p>
          This is a linear space. The zero element is the constant function <MathInline>{`f(x) = 0`}</MathInline>.
        </p>
      </Callout>

      <Callout type="example" title="Continuous Functions: C[a,b]">
        <p>
          The set <MathInline>{`C[a, b]`}</MathInline> of continuous functions on <MathInline>{`[a, b]`}</MathInline> is
          a linear space:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Sum of continuous functions is continuous</li>
          <li>Scalar multiple of continuous function is continuous</li>
        </ul>
        <p>
          This is a subspace of <MathInline>{`\\mathcal{F}([a, b])`}</MathInline>.
        </p>
      </Callout>

      <Callout type="example" title="Polynomials: P and Pₙ">
        <p>
          <MathInline>{`\\mathcal{P}`}</MathInline> = all polynomials with real coefficients
        </p>
        <p>
          <MathInline>{`\\mathcal{P}_n`}</MathInline> = polynomials of degree at most <MathInline>{`n`}</MathInline>
        </p>
        <MathBlock>{`p(x) = a_0 + a_1 x + \\cdots + a_n x^n`}</MathBlock>
        <p>
          Both are linear spaces under the usual polynomial addition and scalar multiplication.
        </p>
      </Callout>

      <Callout type="example" title="Matrices: M_{m×n}">
        <p>
          The set <MathInline>{`M_{m \\times n}`}</MathInline> of <MathInline>{`m \\times n`}</MathInline> real
          matrices is a linear space with:
        </p>
        <MathBlock>{`(A + B)_{ij} = A_{ij} + B_{ij}, \\quad (cA)_{ij} = cA_{ij}`}</MathBlock>
        <p>
          Zero element: the <MathInline>{`m \\times n`}</MathInline> zero matrix.
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
            <MathInline>{`0\\mathbf{v} = \\mathbf{0}`}</MathInline> for all <MathInline>{`\\mathbf{v}`}</MathInline>
          </li>
          <li>
            <MathInline>{`a\\mathbf{0} = \\mathbf{0}`}</MathInline> for all scalars <MathInline>{`a`}</MathInline>
          </li>
          <li>
            <MathInline>{`(-1)\\mathbf{v} = -\\mathbf{v}`}</MathInline>
          </li>
          <li>
            If <MathInline>{`a\\mathbf{v} = \\mathbf{0}`}</MathInline>, then <MathInline>{`a = 0`}</MathInline> or <MathInline>{`\\mathbf{v} = \\mathbf{0}`}</MathInline>
          </li>
        </ol>
      </Callout>

      <Callout type="info" title="Proof of Property 3">
        <p>To show <MathInline>{`0\\mathbf{v} = \\mathbf{0}`}</MathInline>:</p>
        <MathBlock>{`0\\mathbf{v} = (0 + 0)\\mathbf{v} = 0\\mathbf{v} + 0\\mathbf{v}`}</MathBlock>
        <p>Adding <MathInline>{`-(0\\mathbf{v})`}</MathInline> to both sides:</p>
        <MathBlock>{`\\mathbf{0} = 0\\mathbf{v}`}</MathBlock>
      </Callout>

      <h2>More Examples</h2>

      <Callout type="example" title="Solution Space of a Differential Equation">
        <p>
          The set of all solutions to a linear homogeneous differential equation is a linear space.
        </p>
        <p>For example, solutions to <MathInline>{`y'' + y = 0`}</MathInline>:</p>
        <MathBlock>{`y = c_1 \\cos x + c_2 \\sin x`}</MathBlock>
        <p>
          If <MathInline>{`y_1`}</MathInline> and <MathInline>{`y_2`}</MathInline> are solutions, so
          is <MathInline>{`y_1 + y_2`}</MathInline> and <MathInline>{`cy_1`}</MathInline>.
        </p>
      </Callout>

      <Callout type="example" title="Sequences">
        <p>
          The set of all real sequences <MathInline>{`(a_1, a_2, a_3, \\ldots)`}</MathInline> is a linear
          space with componentwise operations. This is like <MathInline>{`\\mathbb{R}^\\infty`}</MathInline>.
        </p>
      </Callout>

      <Callout type="example" title="The Trivial Space">
        <p>
          The set <MathInline>{`\\{\\mathbf{0}\\}`}</MathInline> containing only the zero vector is a
          linear space (the <strong>trivial</strong> or <strong>zero space</strong>).
        </p>
      </Callout>

      <h2>Non-Examples</h2>

      <Callout type="info" title="What is NOT a Linear Space">
        <p>A set fails to be a linear space if it violates any axiom:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Positive reals</strong> <MathInline>{`\\mathbb{R}^+`}</MathInline> with usual operations:
            Not closed under scalar multiplication (<MathInline>{`(-1) \\cdot 2 = -2 \\notin \\mathbb{R}^+`}</MathInline>)
          </li>
          <li>
            <strong>Integers</strong> <MathInline>{`\\mathbb{Z}^n`}</MathInline>: Not closed under scalar
            multiplication (<MathInline>{`\\frac{1}{2}(1, 0) = (\\frac{1}{2}, 0) \\notin \\mathbb{Z}^2`}</MathInline>)
          </li>
          <li>
            <strong>Unit sphere:</strong> <MathInline>{`\\{\\mathbf{x} : \\|\\mathbf{x}\\| = 1\\}`}</MathInline>:
            Not closed under addition or scalar multiplication
          </li>
          <li>
            <strong>Polynomials of degree exactly</strong> <MathInline>{`n`}</MathInline>: Zero polynomial
            has no degree; sum may have lower degree
          </li>
        </ul>
      </Callout>

      <h2>Linear Combinations</h2>

      <Callout type="definition" title="Linear Combination">
        <p>
          A <strong>linear combination</strong> of vectors <MathInline>{`\\mathbf{v}_1, \\ldots, \\mathbf{v}_k`}</MathInline> is
          an expression:
        </p>
        <MathBlock>{`c_1\\mathbf{v}_1 + c_2\\mathbf{v}_2 + \\cdots + c_k\\mathbf{v}_k`}</MathBlock>
        <p>
          where <MathInline>{`c_1, \\ldots, c_k`}</MathInline> are scalars.
        </p>
      </Callout>

      <Callout type="example" title="Linear Combinations in Function Spaces">
        <p>
          In the space of functions, <MathInline>{`3\\sin x + 2\\cos x`}</MathInline> is a linear
          combination of <MathInline>{`\\sin x`}</MathInline> and <MathInline>{`\\cos x`}</MathInline>.
        </p>
        <p>
          In <MathInline>{`\\mathcal{P}_2`}</MathInline>, <MathInline>{`5 + 3x - 2x^2`}</MathInline> is a linear
          combination of <MathInline>{`1, x, x^2`}</MathInline>.
        </p>
      </Callout>

      <h2>Vector Spaces over Other Fields</h2>

      <Callout type="info" title="Complex Vector Spaces">
        <p>
          One can also define linear spaces over <MathInline>{`\\mathbb{C}`}</MathInline> (complex numbers)
          or other <strong>fields</strong>. The axioms are the same, but scalars come from the
          chosen field.
        </p>
        <p>
          For example, <MathInline>{`\\mathbb{C}^n`}</MathInline> is a complex vector space where
          we can multiply vectors by complex scalars.
        </p>
      </Callout>

      <h2>Summary</h2>

      <Callout type="info" title="Key Points">
        <p><strong>A linear space</strong> is a set with addition and scalar multiplication satisfying 10 axioms.</p>

        <p className="mt-3"><strong>Key examples:</strong></p>
        <ul className="list-disc pl-6 space-y-1">
          <li><MathInline>{`\\mathbb{R}^n`}</MathInline> — <MathInline>{`n`}</MathInline>-tuples</li>
          <li><MathInline>{`\\mathcal{P}_n`}</MathInline> — polynomials of degree ≤ <MathInline>{`n`}</MathInline></li>
          <li><MathInline>{`C[a,b]`}</MathInline> — continuous functions</li>
          <li><MathInline>{`M_{m \\times n}`}</MathInline> — matrices</li>
          <li>Solution spaces of linear differential equations</li>
        </ul>

        <p className="mt-3"><strong>Key properties (derived from axioms):</strong></p>
        <ul className="list-disc pl-6 space-y-1">
          <li><MathInline>{`0\\mathbf{v} = \\mathbf{0}`}</MathInline></li>
          <li><MathInline>{`(-1)\\mathbf{v} = -\\mathbf{v}`}</MathInline></li>
          <li>Zero element and inverses are unique</li>
        </ul>

        <p className="mt-3"><strong>The power of abstraction:</strong> Once we prove a theorem using only the axioms, it applies to <em>all</em> linear spaces.</p>
      </Callout>
    </LessonLayout>
  );
}
