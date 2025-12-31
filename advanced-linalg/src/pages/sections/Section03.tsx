import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { Math, MathBlock } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { section03Quiz } from '@/data/quizzes';

export default function Section03() {
  return (
    <LessonLayout sectionId={3}>
      <h2>Subspaces: Vector Spaces Within Vector Spaces</h2>

      <p>
        A <strong>subspace</strong> is a subset of a vector space that is itself a vector space
        under the same operations. Subspaces are fundamental because they arise naturally in
        applications: solution sets of homogeneous systems, kernels of linear maps, and many more.
      </p>

      <Callout type="info">
        <strong>The Key Insight:</strong> You don't need to verify all 8 vector space axioms to
        show a subset is a subspace. Since the operations are inherited from the parent space,
        you only need to check closure.
      </Callout>

      <h2>Definition and the Subspace Test</h2>

      <Definition title="Subspace">
        <p>
          A subset <Math>W</Math> of a vector space <Math>V</Math> is a <strong>subspace</strong> if
          <Math>W</Math> is itself a vector space under the same operations of addition and scalar
          multiplication.
        </p>
      </Definition>

      <Theorem
        title="Subspace Test"
        proof={
          <>
            <p><strong>(⇒)</strong> If <Math>W</Math> is a subspace, closure follows from the vector space axioms.</p>
            <p className="mt-2"><strong>(⇐)</strong> Assume the two closure conditions hold and <Math>W \neq \emptyset</Math>.</p>
            <ul className="list-disc list-inside text-dark-300 mt-2 space-y-1">
              <li><strong>Zero vector:</strong> Take any <Math>w \in W</Math>. By scalar closure, <Math>0 \cdot w = {`\\mathbf{0}`} \in W</Math>.</li>
              <li><strong>Additive inverses:</strong> For <Math>w \in W</Math>, by scalar closure, <Math>(-1) \cdot w = -w \in W</Math>.</li>
              <li><strong>Other axioms:</strong> Inherited from <Math>V</Math> since we use the same operations.</li>
            </ul>
          </>
        }
      >
        <p>
          A non-empty subset <Math>W \subseteq V</Math> is a subspace if and only if for all
          <Math>u, v \in W</Math> and <Math>c \in F</Math>:
        </p>
        <ol className="list-decimal list-inside text-dark-300 mt-2">
          <li><Math>u + v \in W</Math> (closed under addition)</li>
          <li><Math>c \cdot u \in W</Math> (closed under scalar multiplication)</li>
        </ol>
      </Theorem>

      <Callout type="warning">
        <strong>One-Step Test:</strong> You can combine both conditions: <Math>W</Math> is a
        subspace iff <Math>W \neq \emptyset</Math> and <Math>au + bv \in W</Math> for all
        <Math>u, v \in W</Math> and <Math>a, b \in F</Math>.
      </Callout>

      <h2>Examples of Subspaces</h2>

      <Example title="Trivial Subspaces">
        <p>Every vector space <Math>V</Math> has two trivial subspaces:</p>
        <ul className="list-disc list-inside text-dark-300 mt-2">
          <li><Math>{`\\{\\mathbf{0}\\}`}</Math> — the <strong>zero subspace</strong></li>
          <li><Math>V</Math> itself — the <strong>improper subspace</strong></li>
        </ul>
        <p className="mt-2">All other subspaces are called <strong>proper subspaces</strong>.</p>
      </Example>

      <Example title="Lines and Planes Through the Origin">
        <p>In <Math>{`\\mathbb{R}`}^3</Math>:</p>
        <ul className="list-disc list-inside text-dark-300 mt-2">
          <li>
            Any line through the origin: <Math>L = {`\\{t\\mathbf{v} : t \\in \\mathbb{R}\\}`}</Math> for
            some nonzero <Math>{`\\mathbf{v}`}</Math>
          </li>
          <li>
            Any plane through the origin: <Math>P = {`\\{s\\mathbf{u} + t\\mathbf{v} : s, t \\in \\mathbb{R}\\}`}</Math>
          </li>
        </ul>
        <p className="mt-2">
          Lines and planes NOT through the origin are NOT subspaces (they don't contain <Math>{`\\mathbf{0}`}</Math>).
        </p>
      </Example>

      <Example title="Solution Space of a Homogeneous System">
        <p>
          The set of solutions to <Math>A{`\\mathbf{x}`} = {`\\mathbf{0}`}</Math> is a subspace of <Math>{`\\mathbb{R}`}^n</Math>.
        </p>
        <p className="mt-2"><strong>Verification:</strong></p>
        <ul className="list-disc list-inside text-dark-300 mt-2">
          <li>Non-empty: <Math>{`\\mathbf{0}`}</Math> is always a solution</li>
          <li>If <Math>A{`\\mathbf{u}`} = {`\\mathbf{0}`}</Math> and <Math>A{`\\mathbf{v}`} = {`\\mathbf{0}`}</Math>, then <Math>A({`\\mathbf{u}`} + {`\\mathbf{v}`}) = {`\\mathbf{0}`}</Math></li>
          <li>If <Math>A{`\\mathbf{u}`} = {`\\mathbf{0}`}</Math>, then <Math>A(c{`\\mathbf{u}`}) = c \cdot {`\\mathbf{0}`} = {`\\mathbf{0}`}</Math></li>
        </ul>
      </Example>

      <Example title="Polynomial Subspaces">
        <p>
          <Math>P_n(F) \subset P_m(F)</Math> for <Math>n \leq m</Math>. The polynomials of degree
          at most <Math>n</Math> form a subspace of the polynomials of degree at most <Math>m</Math>.
        </p>
      </Example>

      <h2>Non-Examples</h2>

      <div className="space-y-4 my-6">
        <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
          <h4 className="font-semibold text-red-400">Non-Example: First Quadrant</h4>
          <p className="text-dark-300 mt-2">
            <Math>Q = {`\\{(x, y) \\in \\mathbb{R}^2 : x \\geq 0, y \\geq 0\\}`}</Math> is NOT a subspace.
            It contains <Math>(1, 1)</Math> but not <Math>-1 \cdot (1, 1) = (-1, -1)</Math>.
          </p>
        </div>

        <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
          <h4 className="font-semibold text-red-400">Non-Example: Solutions to Non-Homogeneous System</h4>
          <p className="text-dark-300 mt-2">
            The solution set of <Math>A{`\\mathbf{x}`} = {`\\mathbf{b}`}</Math> with <Math>{`\\mathbf{b}`} \neq {`\\mathbf{0}`}</Math>
            is NOT a subspace: it doesn't contain the zero vector.
          </p>
        </div>

        <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
          <h4 className="font-semibold text-red-400">Non-Example: Polynomials of Exact Degree</h4>
          <p className="text-dark-300 mt-2">
            The set of polynomials of <em>exactly</em> degree <Math>n</Math> is NOT a subspace: it
            doesn't include the zero polynomial, and <Math>x^2 + (-x^2) = 0</Math> shows it's not
            closed under addition.
          </p>
        </div>
      </div>

      <h2>Linear Combinations and Span</h2>

      <Definition title="Linear Combination">
        <p>
          A <strong>linear combination</strong> of vectors <Math>v_1, \ldots, v_k</Math> is a sum:
        </p>
        <MathBlock>{`c_1 v_1 + c_2 v_2 + \\cdots + c_k v_k`}</MathBlock>
        <p>where <Math>c_1, \ldots, c_k \in F</Math> are scalars.</p>
      </Definition>

      <Definition title="Span">
        <p>
          The <strong>span</strong> of a set <Math>S \subseteq V</Math> is the set of all linear
          combinations of vectors in <Math>S</Math>:
        </p>
        <MathBlock>{`\\text{span}(S) = \\left\\{ \\sum_{i=1}^k c_i v_i : k \\in \\mathbb{N}, c_i \\in F, v_i \\in S \\right\\}`}</MathBlock>
        <p>By convention, <Math>{`\\text{span}`}(\emptyset) = {`\\{\\mathbf{0}\\}`}</Math>.</p>
      </Definition>

      <Theorem
        title="Span is a Subspace"
        proof={
          <>
            <p><strong>Non-empty:</strong> <Math>{`\\mathbf{0}`} = 0 \cdot v_1 \in {`\\text{span}`}(S)</Math> for any <Math>v_1 \in S</Math>.</p>
            <p className="mt-2"><strong>Closure under addition:</strong> If <Math>u = \sum a_i v_i</Math> and <Math>w = \sum b_j u_j</Math>, then</p>
            <MathBlock>{`u + w = \\sum a_i v_i + \\sum b_j u_j \\in \\text{span}(S)`}</MathBlock>
            <p className="mt-2"><strong>Closure under scalar multiplication:</strong></p>
            <MathBlock>{`c \\cdot u = c \\sum a_i v_i = \\sum (ca_i) v_i \\in \\text{span}(S)`}</MathBlock>
          </>
        }
      >
        <p>
          For any subset <Math>S</Math> of a vector space <Math>V</Math>, <Math>{`\\text{span}`}(S)</Math>
          is a subspace of <Math>V</Math>. Moreover, it is the smallest subspace containing <Math>S</Math>.
        </p>
      </Theorem>

      <Example title="Spanning Sets in R^3">
        <MathBlock>{`\\text{span}\\{(1, 0, 0)\\} = \\{(t, 0, 0) : t \\in \\mathbb{R}\\} \\text{ (x-axis)}`}</MathBlock>
        <MathBlock>{`\\text{span}\\{(1, 0, 0), (0, 1, 0)\\} = \\{(s, t, 0) : s, t \\in \\mathbb{R}\\} \\text{ (xy-plane)}`}</MathBlock>
        <MathBlock>{`\\text{span}\\{(1, 0, 0), (0, 1, 0), (0, 0, 1)\\} = \\mathbb{R}^3`}</MathBlock>
      </Example>

      <h2>Operations on Subspaces</h2>

      <Theorem
        title="Intersection of Subspaces"
        proof={
          <>
            <p>Let <Math>W_1</Math> and <Math>W_2</Math> be subspaces of <Math>V</Math>.</p>
            <ul className="list-disc list-inside text-dark-300 mt-2 space-y-1">
              <li><strong>Non-empty:</strong> <Math>{`\\mathbf{0}`} \in W_1 \cap W_2</Math></li>
              <li><strong>Closure:</strong> If <Math>u, v \in W_1 \cap W_2</Math>, then <Math>u, v</Math> are in both <Math>W_1</Math> and <Math>W_2</Math>, so <Math>u + v</Math> and <Math>cu</Math> are in both.</li>
            </ul>
          </>
        }
      >
        <p>
          The intersection of any collection of subspaces is a subspace.
        </p>
      </Theorem>

      <Callout type="warning">
        <strong>Union is NOT a Subspace:</strong> The union of subspaces is generally NOT a subspace.
        For example, in <Math>{`\\mathbb{R}`}^2</Math>, the x-axis and y-axis are subspaces, but their
        union is not closed under addition: <Math>(1, 0) + (0, 1) = (1, 1)</Math> is in neither axis.
      </Callout>

      <Definition title="Sum of Subspaces">
        <p>
          The <strong>sum</strong> of subspaces <Math>W_1</Math> and <Math>W_2</Math> is:
        </p>
        <MathBlock>{`W_1 + W_2 = \\{w_1 + w_2 : w_1 \\in W_1, w_2 \\in W_2\\}`}</MathBlock>
        <p>This IS a subspace (the smallest containing both <Math>W_1</Math> and <Math>W_2</Math>).</p>
      </Definition>

      <Definition title="Direct Sum">
        <p>
          The sum <Math>W_1 + W_2</Math> is a <strong>direct sum</strong>, written <Math>W_1 \oplus W_2</Math>,
          if every vector in <Math>W_1 + W_2</Math> can be written uniquely as <Math>w_1 + w_2</Math>.
          This happens iff <Math>W_1 \cap W_2 = {`\\{\\mathbf{0}\\}`}</Math>.
        </p>
      </Definition>

      <div className="mt-8 p-4 rounded-xl bg-dark-800/50 border border-dark-700">
        <h3 className="text-lg font-semibold text-dark-100 mb-2">Key Takeaways</h3>
        <ul className="list-disc list-inside text-dark-300 space-y-1">
          <li>A subspace must contain <Math>{`\\mathbf{0}`}</Math> and be closed under + and scalar multiplication</li>
          <li>The Subspace Test: only check closure (other axioms are inherited)</li>
          <li>Solution sets of <Math>A{`\\mathbf{x}`} = {`\\mathbf{0}`}</Math> are subspaces; <Math>A{`\\mathbf{x}`} = {`\\mathbf{b}`}</Math> with <Math>{`\\mathbf{b}`} \neq {`\\mathbf{0}`}</Math> are not</li>
          <li>Span is the smallest subspace containing a set</li>
          <li>Intersection of subspaces is a subspace; union generally is not</li>
          <li>Direct sum <Math>W_1 \oplus W_2</Math> requires <Math>W_1 \cap W_2 = {`\\{\\mathbf{0}\\}`}</Math></li>
        </ul>
      </div>

      <SectionQuiz
        sectionId={3}
        questions={section03Quiz}
        title="Subspaces Quiz"
      />
    </LessonLayout>
  );
}
