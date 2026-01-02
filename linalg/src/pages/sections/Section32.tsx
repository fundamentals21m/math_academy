import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section32() {
  return (
    <LessonLayout sectionId={32}>
      {/* Introduction */}
      <p>
        A <strong>linear transformation</strong> is a function between vector spaces that respects
        addition and scalar multiplication. Every matrix defines a linear transformation, and
        every linear transformation can be represented by a matrix.
      </p>

      <h2>Definition</h2>

      <Definition title="Linear Transformation" className="my-6">
        <p>
          A function <InlineMath>T: V \to W</InlineMath> is a <strong>linear transformation</strong> if:
        </p>
        <MathBlock>
          {`T(\\mathbf{v} + \\mathbf{w}) = T(\\mathbf{v}) + T(\\mathbf{w})`}
        </MathBlock>
        <MathBlock>
          {`T(c\\mathbf{v}) = cT(\\mathbf{v})`}
        </MathBlock>
        <p className="mt-2">
          for all vectors <InlineMath>{`\\mathbf{v}, \\mathbf{w}`}</InlineMath> in <InlineMath>V</InlineMath> and scalars <InlineMath>c</InlineMath>.
        </p>
      </Definition>

      <Theorem
        title="Combined Linearity Property"
        className="my-6"
        proof={
          <>
            <p><strong>(⟹)</strong> Assume <InlineMath>T</InlineMath> is linear. Then:</p>
            <MathBlock>{`T(c\\mathbf{v} + d\\mathbf{w}) = T(c\\mathbf{v}) + T(d\\mathbf{w}) = cT(\\mathbf{v}) + dT(\\mathbf{w})`}</MathBlock>
            <p className="mt-2"><strong>(⟸)</strong> Assume the combined property holds.</p>
            <p className="mt-2"><em>Additivity:</em> Set <InlineMath>c = d = 1</InlineMath>: <InlineMath>{`T(\\mathbf{v} + \\mathbf{w}) = T(\\mathbf{v}) + T(\\mathbf{w})`}</InlineMath>.</p>
            <p className="mt-2"><em>Scalar multiplication:</em> Set <InlineMath>d = 0</InlineMath>: <InlineMath>{`T(c\\mathbf{v}) = cT(\\mathbf{v})`}</InlineMath>.</p>
            <p className="mt-2">Both linearity conditions are satisfied.</p>
          </>
        }
      >
        <p>
          Both conditions combine into a single test:
        </p>
        <MathBlock>
          {`T(c\\mathbf{v} + d\\mathbf{w}) = cT(\\mathbf{v}) + dT(\\mathbf{w})`}
        </MathBlock>
        <p className="mt-2 text-primary-400">
          Linear transformations preserve linear combinations.
        </p>
      </Theorem>

      <h2>Examples of Linear Transformations</h2>

      <Example title="Matrix Multiplication" className="my-6">
        <p>
          For any <InlineMath>m \times n</InlineMath> matrix <InlineMath>A</InlineMath>, the function
          <InlineMath>{`T(\\mathbf{x}) = A\\mathbf{x}`}</InlineMath> is linear:
        </p>
        <MathBlock>
          {`T(c\\mathbf{x} + d\\mathbf{y}) = A(c\\mathbf{x} + d\\mathbf{y}) = cA\\mathbf{x} + dA\\mathbf{y} = cT(\\mathbf{x}) + dT(\\mathbf{y})`}
        </MathBlock>
      </Example>

      <Example title="Differentiation" className="my-6">
        <p>
          The derivative operator <InlineMath>{`D: P_n \\to P_{n-1}`}</InlineMath> is linear:
        </p>
        <MathBlock>
          {`D(p + q) = D(p) + D(q) \\quad \\text{and} \\quad D(cp) = cD(p)`}
        </MathBlock>
        <p className="mt-2">
          This maps polynomials of degree <InlineMath>\leq n</InlineMath> to polynomials of degree <InlineMath>\leq n-1</InlineMath>.
        </p>
      </Example>

      <Example title="Integration" className="my-6">
        <p>
          The integral operator is also linear:
        </p>
        <MathBlock>
          {`\\int_a^b (f + g)\\,dx = \\int_a^b f\\,dx + \\int_a^b g\\,dx`}
        </MathBlock>
      </Example>

      <h2>Nonlinear Functions</h2>

      <div className="bg-dark-800/50 rounded-xl p-4 my-6 border border-amber-500/20">
        <p className="font-semibold text-amber-400 mb-2">Nonlinear Examples</p>
        <ul className="list-disc list-inside text-dark-300 text-sm space-y-1">
          <li><InlineMath>{`T(\\mathbf{x}) = \\mathbf{x} + \\mathbf{b}`}</InlineMath> (translation) — not linear unless <InlineMath>{`\\mathbf{b} = \\mathbf{0}`}</InlineMath></li>
          <li><InlineMath>T(x) = x^2</InlineMath> — fails since <InlineMath>(x+y)^2 \neq x^2 + y^2</InlineMath></li>
          <li><InlineMath>{`T(\\mathbf{x}) = \\|\\mathbf{x}\\|`}</InlineMath> (norm) — fails since <InlineMath>{`\\|(-1)\\mathbf{x}\\| \\neq -\\|\\mathbf{x}\\|`}</InlineMath></li>
        </ul>
      </div>

      <h2>Properties of Linear Transformations</h2>

      <Theorem
        title="Zero and Linear Combinations"
        className="my-6"
        proof={
          <>
            <p><strong>Zero maps to zero:</strong> Using <InlineMath>{`T(c\\mathbf{v}) = cT(\\mathbf{v})`}</InlineMath> with <InlineMath>c = 0</InlineMath>:</p>
            <MathBlock>{`T(\\mathbf{0}) = T(0 \\cdot \\mathbf{v}) = 0 \\cdot T(\\mathbf{v}) = \\mathbf{0}`}</MathBlock>
            <p className="mt-2"><strong>General linear combinations:</strong> By induction on <InlineMath>n</InlineMath>.</p>
            <p className="mt-2"><em>Base case (n=2):</em> The combined linearity property.</p>
            <p className="mt-2"><em>Inductive step:</em> Assume true for <InlineMath>n-1</InlineMath> terms. Then:</p>
            <MathBlock>{`T(c_1\\mathbf{v}_1 + \\cdots + c_n\\mathbf{v}_n) = T(c_1\\mathbf{v}_1 + \\cdots + c_{n-1}\\mathbf{v}_{n-1}) + c_n T(\\mathbf{v}_n)`}</MathBlock>
            <p className="mt-2">Apply the inductive hypothesis to the first term to complete the proof.</p>
          </>
        }
      >
        <p>For any linear transformation <InlineMath>T</InlineMath>:</p>
        <ul className="list-disc list-inside space-y-2">
          <li><InlineMath>{`T(\\mathbf{0}) = \\mathbf{0}`}</InlineMath></li>
          <li><InlineMath>{`T(c_1\\mathbf{v}_1 + \\cdots + c_n\\mathbf{v}_n) = c_1T(\\mathbf{v}_1) + \\cdots + c_nT(\\mathbf{v}_n)`}</InlineMath></li>
        </ul>
      </Theorem>

      <h2>Range and Kernel</h2>

      <Definition title="Range (Image)" className="my-6">
        <p>
          The <strong>range</strong> of <InlineMath>T</InlineMath> is all possible outputs:
        </p>
        <MathBlock>
          {`\\text{range}(T) = \\{T(\\mathbf{v}) : \\mathbf{v} \\in V\\}`}
        </MathBlock>
        <p className="mt-2">
          For <InlineMath>{`T(\\mathbf{x}) = A\\mathbf{x}`}</InlineMath>, the range is the <strong>column space</strong> of <InlineMath>A</InlineMath>.
        </p>
      </Definition>

      <Definition title="Kernel (Nullspace)" className="my-6">
        <p>
          The <strong>kernel</strong> of <InlineMath>T</InlineMath> is all vectors mapped to zero:
        </p>
        <MathBlock>
          {`\\ker(T) = \\{\\mathbf{v} : T(\\mathbf{v}) = \\mathbf{0}\\}`}
        </MathBlock>
        <p className="mt-2">
          For <InlineMath>{`T(\\mathbf{x}) = A\\mathbf{x}`}</InlineMath>, the kernel is the <strong>nullspace</strong> of <InlineMath>A</InlineMath>.
        </p>
      </Definition>

      <Theorem
        title="Rank-Nullity Theorem"
        className="my-6"
        proof={
          <>
            <p>Let <InlineMath>{`\\{\\mathbf{u}_1, \\ldots, \\mathbf{u}_k\\}`}</InlineMath> be a basis for <InlineMath>\\ker T</InlineMath>. Extend to a basis <InlineMath>{`\\{\\mathbf{u}_1, \\ldots, \\mathbf{u}_k, \\mathbf{v}_1, \\ldots, \\mathbf{v}_m\\}`}</InlineMath> for <InlineMath>V</InlineMath>.</p>
            <p className="mt-2"><strong>Claim:</strong> <InlineMath>{`\\{T(\\mathbf{v}_1), \\ldots, T(\\mathbf{v}_m)\\}`}</InlineMath> is a basis for <InlineMath>{`\\text{range } T`}</InlineMath>.</p>
            <p className="mt-2"><em>Spanning:</em> Any <InlineMath>{`\\mathbf{w} \\in \\text{range } T`}</InlineMath> is <InlineMath>{`T(\\mathbf{x})`}</InlineMath> for some <InlineMath>{`\\mathbf{x} = \\sum a_i \\mathbf{u}_i + \\sum b_j \\mathbf{v}_j`}</InlineMath>. Then:</p>
            <MathBlock>{`\\mathbf{w} = T(\\mathbf{x}) = \\sum a_i T(\\mathbf{u}_i) + \\sum b_j T(\\mathbf{v}_j) = \\sum b_j T(\\mathbf{v}_j)`}</MathBlock>
            <p className="mt-2"><em>Independence:</em> If <InlineMath>{`\\sum c_j T(\\mathbf{v}_j) = \\mathbf{0}`}</InlineMath>, then <InlineMath>{`T(\\sum c_j \\mathbf{v}_j) = \\mathbf{0}`}</InlineMath>, so <InlineMath>{`\\sum c_j \\mathbf{v}_j \\in \\ker T`}</InlineMath>. But this means <InlineMath>{`\\sum c_j \\mathbf{v}_j = \\sum a_i \\mathbf{u}_i`}</InlineMath>, contradicting basis independence unless all <InlineMath>c_j = 0</InlineMath>.</p>
            <p className="mt-2">Thus <InlineMath>{`\\dim V = k + m = \\dim(\\ker T) + \\dim(\\text{range } T)`}</InlineMath>.</p>
          </>
        }
      >
        <p>For <InlineMath>T: V \to W</InlineMath> with <InlineMath>V</InlineMath> finite-dimensional:</p>
        <MathBlock>
          {`\\dim(\\ker T) + \\dim(\\text{range } T) = \\dim V`}
        </MathBlock>
      </Theorem>

      <h2>Key Ideas</h2>

      <div className="bg-gradient-to-br from-primary-500/10 to-dark-800/50 rounded-xl p-6 my-6 border border-primary-500/20">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span>Linear transformations preserve addition and scalar multiplication.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span>Every matrix multiplication <InlineMath>{`T(\\mathbf{x}) = A\\mathbf{x}`}</InlineMath> is linear.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span>Differentiation and integration are linear transformations.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span>Kernel = nullspace; Range = column space.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">5.</span>
            <span>dim(kernel) + dim(range) = dim(domain).</span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
