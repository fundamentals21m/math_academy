import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
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
          A subset <InlineMath>W</InlineMath> of a vector space <InlineMath>V</InlineMath> is a <strong>subspace</strong> if
          <InlineMath>W</InlineMath> is itself a vector space under the same operations of addition and scalar
          multiplication.
        </p>
      </Definition>

      <Theorem
        title="Subspace Test"
        proof={
          <>
            <p><strong>(⇒)</strong> If <InlineMath>W</InlineMath> is a subspace, closure follows from the vector space axioms.</p>
            <p className="mt-2"><strong>(⇐)</strong> Assume the two closure conditions hold and <InlineMath>W \neq \emptyset</InlineMath>.</p>
            <ul className="list-disc list-inside text-dark-300 mt-2 space-y-1">
              <li><strong>Zero vector:</strong> Take any <InlineMath>w \in W</InlineMath>. By scalar closure, <InlineMath>0 \cdot w = {`\\mathbf{0}`} \in W</InlineMath>.</li>
              <li><strong>Additive inverses:</strong> For <InlineMath>w \in W</InlineMath>, by scalar closure, <InlineMath>(-1) \cdot w = -w \in W</InlineMath>.</li>
              <li><strong>Other axioms:</strong> Inherited from <InlineMath>V</InlineMath> since we use the same operations.</li>
            </ul>
          </>
        }
      >
        <p>
          A non-empty subset <InlineMath>W \subseteq V</InlineMath> is a subspace if and only if for all
          <InlineMath>u, v \in W</InlineMath> and <InlineMath>c \in F</InlineMath>:
        </p>
        <ol className="list-decimal list-inside text-dark-300 mt-2">
          <li><InlineMath>u + v \in W</InlineMath> (closed under addition)</li>
          <li><InlineMath>c \cdot u \in W</InlineMath> (closed under scalar multiplication)</li>
        </ol>
      </Theorem>

      <Callout type="warning">
        <strong>One-Step Test:</strong> You can combine both conditions: <InlineMath>W</InlineMath> is a
        subspace iff <InlineMath>W \neq \emptyset</InlineMath> and <InlineMath>au + bv \in W</InlineMath> for all
        <InlineMath>u, v \in W</InlineMath> and <InlineMath>a, b \in F</InlineMath>.
      </Callout>

      <h2>Examples of Subspaces</h2>

      <Example title="Trivial Subspaces">
        <p>Every vector space <InlineMath>V</InlineMath> has two trivial subspaces:</p>
        <ul className="list-disc list-inside text-dark-300 mt-2">
          <li><InlineMath>{`\\{\\mathbf{0}\\}`}</InlineMath> — the <strong>zero subspace</strong></li>
          <li><InlineMath>V</InlineMath> itself — the <strong>improper subspace</strong></li>
        </ul>
        <p className="mt-2">All other subspaces are called <strong>proper subspaces</strong>.</p>
      </Example>

      <Example title="Lines and Planes Through the Origin">
        <p>In <InlineMath>{`\\mathbb{R}`}^3</InlineMath>:</p>
        <ul className="list-disc list-inside text-dark-300 mt-2">
          <li>
            Any line through the origin: <InlineMath>L = {`\\{t\\mathbf{v} : t \\in \\mathbb{R}\\}`}</InlineMath> for
            some nonzero <InlineMath>{`\\mathbf{v}`}</InlineMath>
          </li>
          <li>
            Any plane through the origin: <InlineMath>P = {`\\{s\\mathbf{u} + t\\mathbf{v} : s, t \\in \\mathbb{R}\\}`}</InlineMath>
          </li>
        </ul>
        <p className="mt-2">
          Lines and planes NOT through the origin are NOT subspaces (they don't contain <InlineMath>{`\\mathbf{0}`}</InlineMath>).
        </p>
      </Example>

      <Example title="Solution Space of a Homogeneous System">
        <p>
          The set of solutions to <InlineMath>A{`\\mathbf{x}`} = {`\\mathbf{0}`}</InlineMath> is a subspace of <InlineMath>{`\\mathbb{R}`}^n</InlineMath>.
        </p>
        <p className="mt-2"><strong>Verification:</strong></p>
        <ul className="list-disc list-inside text-dark-300 mt-2">
          <li>Non-empty: <InlineMath>{`\\mathbf{0}`}</InlineMath> is always a solution</li>
          <li>If <InlineMath>A{`\\mathbf{u}`} = {`\\mathbf{0}`}</InlineMath> and <InlineMath>A{`\\mathbf{v}`} = {`\\mathbf{0}`}</InlineMath>, then <InlineMath>A({`\\mathbf{u}`} + {`\\mathbf{v}`}) = {`\\mathbf{0}`}</InlineMath></li>
          <li>If <InlineMath>A{`\\mathbf{u}`} = {`\\mathbf{0}`}</InlineMath>, then <InlineMath>A(c{`\\mathbf{u}`}) = c \cdot {`\\mathbf{0}`} = {`\\mathbf{0}`}</InlineMath></li>
        </ul>
      </Example>

      <Example title="Polynomial Subspaces">
        <p>
          <InlineMath>P_n(F) \subset P_m(F)</InlineMath> for <InlineMath>n \leq m</InlineMath>. The polynomials of degree
          at most <InlineMath>n</InlineMath> form a subspace of the polynomials of degree at most <InlineMath>m</InlineMath>.
        </p>
      </Example>

      <h2>Non-Examples</h2>

      <div className="space-y-4 my-6">
        <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
          <h4 className="font-semibold text-red-400">Non-Example: First Quadrant</h4>
          <p className="text-dark-300 mt-2">
            <InlineMath>Q = {`\\{(x, y) \\in \\mathbb{R}^2 : x \\geq 0, y \\geq 0\\}`}</InlineMath> is NOT a subspace.
            It contains <InlineMath>(1, 1)</InlineMath> but not <InlineMath>-1 \cdot (1, 1) = (-1, -1)</InlineMath>.
          </p>
        </div>

        <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
          <h4 className="font-semibold text-red-400">Non-Example: Solutions to Non-Homogeneous System</h4>
          <p className="text-dark-300 mt-2">
            The solution set of <InlineMath>A{`\\mathbf{x}`} = {`\\mathbf{b}`}</InlineMath> with <InlineMath>{`\\mathbf{b}`} \neq {`\\mathbf{0}`}</InlineMath>
            is NOT a subspace: it doesn't contain the zero vector.
          </p>
        </div>

        <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
          <h4 className="font-semibold text-red-400">Non-Example: Polynomials of Exact Degree</h4>
          <p className="text-dark-300 mt-2">
            The set of polynomials of <em>exactly</em> degree <InlineMath>n</InlineMath> is NOT a subspace: it
            doesn't include the zero polynomial, and <InlineMath>x^2 + (-x^2) = 0</InlineMath> shows it's not
            closed under addition.
          </p>
        </div>
      </div>

      <h2>Linear Combinations and Span</h2>

      <Definition title="Linear Combination">
        <p>
          A <strong>linear combination</strong> of vectors <InlineMath>v_1, \ldots, v_k</InlineMath> is a sum:
        </p>
        <MathBlock>{`c_1 v_1 + c_2 v_2 + \\cdots + c_k v_k`}</MathBlock>
        <p>where <InlineMath>c_1, \ldots, c_k \in F</InlineMath> are scalars.</p>
      </Definition>

      <Definition title="Span">
        <p>
          The <strong>span</strong> of a set <InlineMath>S \subseteq V</InlineMath> is the set of all linear
          combinations of vectors in <InlineMath>S</InlineMath>:
        </p>
        <MathBlock>{`\\text{span}(S) = \\left\\{ \\sum_{i=1}^k c_i v_i : k \\in \\mathbb{N}, c_i \\in F, v_i \\in S \\right\\}`}</MathBlock>
        <p>By convention, <InlineMath>{`\\text{span}`}(\emptyset) = {`\\{\\mathbf{0}\\}`}</InlineMath>.</p>
      </Definition>

      <Theorem
        title="Span is a Subspace"
        proof={
          <>
            <p><strong>Non-empty:</strong> <InlineMath>{`\\mathbf{0}`} = 0 \cdot v_1 \in {`\\text{span}`}(S)</InlineMath> for any <InlineMath>v_1 \in S</InlineMath>.</p>
            <p className="mt-2"><strong>Closure under addition:</strong> If <InlineMath>u = \sum a_i v_i</InlineMath> and <InlineMath>w = \sum b_j u_j</InlineMath>, then</p>
            <MathBlock>{`u + w = \\sum a_i v_i + \\sum b_j u_j \\in \\text{span}(S)`}</MathBlock>
            <p className="mt-2"><strong>Closure under scalar multiplication:</strong></p>
            <MathBlock>{`c \\cdot u = c \\sum a_i v_i = \\sum (ca_i) v_i \\in \\text{span}(S)`}</MathBlock>
          </>
        }
      >
        <p>
          For any subset <InlineMath>S</InlineMath> of a vector space <InlineMath>V</InlineMath>, <InlineMath>{`\\text{span}`}(S)</InlineMath>
          is a subspace of <InlineMath>V</InlineMath>. Moreover, it is the smallest subspace containing <InlineMath>S</InlineMath>.
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
            <p>Let <InlineMath>W_1</InlineMath> and <InlineMath>W_2</InlineMath> be subspaces of <InlineMath>V</InlineMath>.</p>
            <ul className="list-disc list-inside text-dark-300 mt-2 space-y-1">
              <li><strong>Non-empty:</strong> <InlineMath>{`\\mathbf{0}`} \in W_1 \cap W_2</InlineMath></li>
              <li><strong>Closure:</strong> If <InlineMath>u, v \in W_1 \cap W_2</InlineMath>, then <InlineMath>u, v</InlineMath> are in both <InlineMath>W_1</InlineMath> and <InlineMath>W_2</InlineMath>, so <InlineMath>u + v</InlineMath> and <InlineMath>cu</InlineMath> are in both.</li>
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
        For example, in <InlineMath>{`\\mathbb{R}`}^2</InlineMath>, the x-axis and y-axis are subspaces, but their
        union is not closed under addition: <InlineMath>(1, 0) + (0, 1) = (1, 1)</InlineMath> is in neither axis.
      </Callout>

      <Definition title="Sum of Subspaces">
        <p>
          The <strong>sum</strong> of subspaces <InlineMath>W_1</InlineMath> and <InlineMath>W_2</InlineMath> is:
        </p>
        <MathBlock>{`W_1 + W_2 = \\{w_1 + w_2 : w_1 \\in W_1, w_2 \\in W_2\\}`}</MathBlock>
        <p>This IS a subspace (the smallest containing both <InlineMath>W_1</InlineMath> and <InlineMath>W_2</InlineMath>).</p>
      </Definition>

      <Definition title="Direct Sum">
        <p>
          The sum <InlineMath>W_1 + W_2</InlineMath> is a <strong>direct sum</strong>, written <InlineMath>W_1 \oplus W_2</InlineMath>,
          if every vector in <InlineMath>W_1 + W_2</InlineMath> can be written uniquely as <InlineMath>w_1 + w_2</InlineMath>.
          This happens iff <InlineMath>W_1 \cap W_2 = {`\\{\\mathbf{0}\\}`}</InlineMath>.
        </p>
      </Definition>

      <div className="mt-8 p-4 rounded-xl bg-dark-800/50 border border-dark-700">
        <h3 className="text-lg font-semibold text-dark-100 mb-2">Key Takeaways</h3>
        <ul className="list-disc list-inside text-dark-300 space-y-1">
          <li>A subspace must contain <InlineMath>{`\\mathbf{0}`}</InlineMath> and be closed under + and scalar multiplication</li>
          <li>The Subspace Test: only check closure (other axioms are inherited)</li>
          <li>Solution sets of <InlineMath>A{`\\mathbf{x}`} = {`\\mathbf{0}`}</InlineMath> are subspaces; <InlineMath>A{`\\mathbf{x}`} = {`\\mathbf{b}`}</InlineMath> with <InlineMath>{`\\mathbf{b}`} \neq {`\\mathbf{0}`}</InlineMath> are not</li>
          <li>Span is the smallest subspace containing a set</li>
          <li>Intersection of subspaces is a subspace; union generally is not</li>
          <li>Direct sum <InlineMath>W_1 \oplus W_2</InlineMath> requires <InlineMath>W_1 \cap W_2 = {`\\{\\mathbf{0}\\}`}</InlineMath></li>
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
