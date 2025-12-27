import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { Math, MathBlock } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { LimitVisualizer } from '@/components/common/LimitVisualizer';
import { section01Quiz } from '@/data/quizzes';

export default function Section01() {
  return (
    <LessonLayout sectionId={1}>
      <h2>The Real Number System</h2>

      <p>
        Real analysis begins with a rigorous examination of the real number system.
        Unlike our intuitive understanding of numbers from calculus, we need to establish
        the properties of the reals axiomatically. The real numbers satisfy certain
        fundamental properties that distinguish them from other number systems.
      </p>

      <Definition title="The Real Numbers ℝ">
        <p>
          The real numbers form a complete ordered field. This means ℝ satisfies:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-4">
          <li><strong>Field axioms:</strong> Addition and multiplication with their usual properties</li>
          <li><strong>Order axioms:</strong> A total ordering compatible with the field operations</li>
          <li><strong>Completeness:</strong> Every non-empty set bounded above has a least upper bound</li>
        </ul>
      </Definition>

      <h3>Field Axioms</h3>

      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50">
          <h4 className="text-lg font-semibold text-blue-400 mb-3">Addition Axioms</h4>
          <ul className="space-y-2 text-sm">
            <li><strong>A1 (Closure):</strong> ∀a,b ∈ ℝ: a + b ∈ ℝ</li>
            <li><strong>A2 (Commutativity):</strong> a + b = b + a</li>
            <li><strong>A3 (Associativity):</strong> (a + b) + c = a + (b + c)</li>
            <li><strong>A4 (Identity):</strong> ∃0 ∈ ℝ: a + 0 = a</li>
            <li><strong>A5 (Inverses):</strong> ∀a ∈ ℝ, ∃-a: a + (-a) = 0</li>
          </ul>
        </div>

        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50">
          <h4 className="text-lg font-semibold text-green-400 mb-3">Multiplication Axioms</h4>
          <ul className="space-y-2 text-sm">
            <li><strong>M1 (Closure):</strong> ∀a,b ∈ ℝ: a · b ∈ ℝ</li>
            <li><strong>M2 (Commutativity):</strong> a · b = b · a</li>
            <li><strong>M3 (Associativity):</strong> (a · b) · c = a · (b · c)</li>
            <li><strong>M4 (Identity):</strong> ∃1 ∈ ℝ, 1 ≠ 0: a · 1 = a</li>
            <li><strong>M5 (Inverses):</strong> ∀a ∈ ℝ, a ≠ 0, ∃a⁻¹: a · a⁻¹ = 1</li>
          </ul>
        </div>
      </div>

      <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700/50">
        <h4 className="text-lg font-semibold text-purple-400 mb-3">Distributive Law</h4>
        <ul className="space-y-2 text-sm">
          <li><strong>D:</strong> a · (b + c) = a · b + a · c</li>
        </ul>
      </div>

      <Theorem
        title="Uniqueness of Identities and Inverses"
        proof={
          <>
            <p className="mb-3"><strong>Uniqueness of additive identity:</strong> Suppose <Math>{`0`}</Math> and <Math>{`0'`}</Math> are both additive identities. Then:</p>
            <MathBlock>{`0' = 0' + 0 = 0 + 0' = 0`}</MathBlock>
            <p className="mb-3">The first equality uses that <Math>{`0`}</Math> is an identity; the second uses commutativity; the third uses that <Math>{`0'`}</Math> is an identity.</p>
            <p className="mb-3"><strong>Uniqueness of additive inverse:</strong> Suppose <Math>{`a + b = 0`}</Math> and <Math>{`a + c = 0`}</Math>. Then:</p>
            <MathBlock>{`b = b + 0 = b + (a + c) = (b + a) + c = (a + b) + c = 0 + c = c`}</MathBlock>
            <p className="mb-3"><strong>Uniqueness of multiplicative identity and inverse:</strong> Similar arguments apply using multiplication.</p>
          </>
        }
      >
        <p>The additive identity 0 and multiplicative identity 1 are unique.</p>
        <p>Additive inverses are unique: if a + b = 0, then b = -a.</p>
        <p>Multiplicative inverses are unique: if a · b = 1, then b = a⁻¹.</p>
      </Theorem>

      <h3>The Order Axioms</h3>

      <Definition title="Ordered Field">
        <p>In addition to the field axioms, the real numbers satisfy:</p>
        <ul className="list-disc list-inside space-y-2 mt-4">
          <li><strong>O1:</strong> ∀a,b ∈ ℝ, exactly one of: a &lt; b, a = b, or b &lt; a</li>
          <li><strong>O2:</strong> ∀a,b,c ∈ ℝ, if a &lt; b and b &lt; c, then a &lt; c</li>
          <li><strong>O3:</strong> ∀a,b,c ∈ ℝ, if a &lt; b, then a + c &lt; b + c</li>
          <li><strong>O4:</strong> ∀a,b,c ∈ ℝ, if a &lt; b and 0 &lt; c, then a · c &lt; b · c</li>
        </ul>
      </Definition>

      <Callout type="info">
        <strong>Key Insight:</strong> The order axioms ensure that multiplication by positive numbers preserves order,
        which is crucial for limits and continuity in analysis.
      </Callout>

      <h3>Completeness - The Least Upper Bound Property</h3>

      <Theorem title="Completeness Axiom">
        <p>
          Every non-empty subset of ℝ that is bounded above has a least upper bound (supremum) in ℝ.
        </p>
        <MathBlock>
          {`\\text{If } S \\subseteq \\mathbb{R}, S \\neq \\emptyset, S \\text{ bounded above, then } \\sup S \\in \\mathbb{R}`}
        </MathBlock>
      </Theorem>

      <Example title="Supremum vs Maximum">
        <p>The set S = &#123;1, 2, 3, ..., n, ...&#125; is bounded above but has no maximum element.</p>
        <p>However, sup S = ∞ ∉ ℝ. This shows why we need the supremum in ℝ.</p>
      </Example>

      <Example title="Archimedean Property">
        <p>For any real numbers x, y &gt; 0, there exists a natural number n such that n · x &gt; y.</p>
        <p>This property distinguishes the reals from other ordered fields.</p>
      </Example>

      <Callout type="important">
        <strong>Why Completeness Matters:</strong> The completeness axiom is what distinguishes the real numbers
        from the rationals. It ensures that limits exist and that we can complete the rational numbers to get the reals.
        This is fundamental to all of real analysis.
      </Callout>

      <h3>Interactive: ε-δ Limit Definition</h3>
      <p>
        The ε-δ definition can be challenging to grasp intuitively. Use the interactive visualizer below
        to explore how ε and δ work together to define limits.
      </p>

      <LimitVisualizer
        func={(x) => 2 * x + 1}
        limitValue={5}
        a={2}
        functionName="f"
      />

      <p className="mt-4 text-sm text-dark-400">
        Try adjusting ε and δ to see when the condition |f(x) - L| &lt; ε holds for all x where |x - a| &lt; δ.
        This demonstrates the rigorous definition of limits that underlies all of real analysis.
      </p>

      <SectionQuiz
        sectionId={1}
        questions={section01Quiz}
        title="Real Number System Quiz"
      />
    </LessonLayout>
  );
}