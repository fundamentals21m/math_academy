import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { RiemannVisualizer } from '@/components/common/RiemannVisualizer';
import { section04Quiz } from '@/data/quizzes';

export default function Section04() {
  return (
    <LessonLayout sectionId={4}>
      <h2>Functions and Relations</h2>

      <p>
        Functions are the fundamental building blocks of mathematics, providing the essential
        connection between different mathematical structures. Understanding function properties
        like injectivity, surjectivity, and bijectivity is crucial for proving theorems and
        establishing equivalences between sets.
      </p>

      <Definition title="Function (Mapping)">
        <p>A <strong>function</strong> f: A → B from set A to set B assigns to each element a ∈ A exactly one element b ∈ B.</p>
        <p>We write f(a) = b, and call b the <strong>image</strong> of a under f.</p>
        <p>The set A is the <strong>domain</strong>, B is the <strong>codomain</strong>.</p>
      </Definition>

      <h3>Function Properties</h3>

      <Definition title="Injective (One-to-One)">
        <p>A function f: A → B is <strong>injective</strong> if:</p>
        <MathBlock>
          {`\\forall a_1, a_2 \\in A, \\quad f(a_1) = f(a_2) \\implies a_1 = a_2`}
        </MathBlock>
        <p>Different elements in the domain map to different elements in the codomain.</p>
      </Definition>

      <Example title="Injective Function">
        <p>f: ℝ → ℝ, f(x) = x² is not injective because f(2) = f(-2) = 4</p>
        <p>g: ℝ → ℝ, g(x) = x³ is injective (odd function, strictly increasing)</p>
      </Example>

      <Definition title="Surjective (Onto)">
        <p>A function f: A → B is <strong>surjective</strong> if:</p>
        <MathBlock>
          {`\\forall b \\in B, \\quad \\exists a \\in A \\quad \\text{such that} \\quad f(a) = b`}
        </MathBlock>
        <p>Every element in the codomain has a preimage in the domain.</p>
      </Definition>

      <Example title="Surjective Function">
        <p>f: ℝ → ℝ, f(x) = x² is not surjective (no preimage for negative numbers)</p>
        <p>g: ℝ → [0, ∞), g(x) = x² is surjective onto its codomain</p>
      </Example>

      <Definition title="Bijective (One-to-One Correspondence)">
        <p>A function that is both injective and surjective is called <strong>bijective</strong>.</p>
        <p>Bijective functions establish a one-to-one correspondence between domain and codomain.</p>
      </Definition>

      <Theorem
        title="Inverse Function Theorem"
        proof={
          <>
            <p className="mb-3"><strong>(⇒)</strong> Suppose <InlineMath>{`f^{-1}`}</InlineMath> exists. For injectivity: if <InlineMath>{`f(a_1) = f(a_2)`}</InlineMath>, apply <InlineMath>{`f^{-1}`}</InlineMath> to get <InlineMath>{`a_1 = a_2`}</InlineMath>. For surjectivity: given <InlineMath>{`b \\in B`}</InlineMath>, let <InlineMath>{`a = f^{-1}(b)`}</InlineMath>, then <InlineMath>{`f(a) = b`}</InlineMath>.</p>
            <p className="mb-3"><strong>(⇐)</strong> Suppose <InlineMath>{`f`}</InlineMath> is bijective. For each <InlineMath>{`b \\in B`}</InlineMath>, surjectivity gives some <InlineMath>{`a`}</InlineMath> with <InlineMath>{`f(a) = b`}</InlineMath>; injectivity ensures this <InlineMath>{`a`}</InlineMath> is unique. Define <InlineMath>{`f^{-1}(b) = a`}</InlineMath>.</p>
            <p className="mb-3">Then <InlineMath>{`f^{-1}(f(a)) = a`}</InlineMath> by construction, and <InlineMath>{`f(f^{-1}(b)) = f(a) = b`}</InlineMath>. So <InlineMath>{`f^{-1}`}</InlineMath> is a well-defined inverse.</p>
          </>
        }
      >
        <p>A function f: A → B has an inverse f⁻¹: B → A if and only if f is bijective.</p>
        <p>The inverse satisfies: f⁻¹(f(a)) = a for all a ∈ A, and f(f⁻¹(b)) = b for all b ∈ B.</p>
      </Theorem>

      <h3>Function Composition</h3>

      <Definition title="Composition">
        <p>For functions f: A → B and g: B → C, the <strong>composition</strong> g ∘ f: A → C is defined by:</p>
        <MathBlock>
          {`(g \\circ f)(a) = g(f(a)) \\quad \\forall a \\in A`}
        </MathBlock>
      </Definition>

      <Theorem
        title="Composition Properties"
        proof={
          <>
            <p className="mb-3"><strong>Associativity:</strong> For any <InlineMath>{`a \\in A`}</InlineMath>:</p>
            <MathBlock>{`((h \\circ g) \\circ f)(a) = (h \\circ g)(f(a)) = h(g(f(a))) = h((g \\circ f)(a)) = (h \\circ (g \\circ f))(a)`}</MathBlock>
            <p className="mb-3"><strong>Identity:</strong> <InlineMath>{`(f \\circ \\text{id}_A)(a) = f(\\text{id}_A(a)) = f(a)`}</InlineMath>, so <InlineMath>{`f \\circ \\text{id}_A = f`}</InlineMath>. Similarly for <InlineMath>{`\\text{id}_B \\circ f`}</InlineMath>.</p>
            <p className="mb-3"><strong>Inverses:</strong> <InlineMath>{`(f^{-1} \\circ f)(a) = f^{-1}(f(a)) = a = \\text{id}_A(a)`}</InlineMath>. And <InlineMath>{`(f \\circ f^{-1})(b) = f(f^{-1}(b)) = b = \\text{id}_B(b)`}</InlineMath>.</p>
          </>
        }
      >
        <p>Function composition is associative: (h ∘ g) ∘ f = h ∘ (g ∘ f)</p>
        <p>Identity functions: f ∘ id_A = f and id_B ∘ f = f</p>
        <p>Inverses: If f is bijective, then (f⁻¹) ∘ f = id_A and f ∘ (f⁻¹) = id_B</p>
      </Theorem>

      <h3>Relations</h3>

      <Definition title="Binary Relation">
        <p>A <strong>binary relation</strong> R on a set A is a subset of A × A.</p>
        <p>We write a R b if (a,b) ∈ R.</p>
      </Definition>

      <Definition title="Equivalence Relation">
        <p>A relation ~ on A is an <strong>equivalence relation</strong> if it is:</p>
        <ul className="list-disc list-inside space-y-2 mt-4">
          <li><strong>Reflexive:</strong> ∀a ∈ A, a ~ a</li>
          <li><strong>Symmetric:</strong> ∀a,b ∈ A, a ~ b ⇒ b ~ a</li>
          <li><strong>Transitive:</strong> ∀a,b,c ∈ A, a ~ b ∧ b ~ c ⇒ a ~ c</li>
        </ul>
      </Definition>

      <Example title="Equivalence Relations">
        <p>"Has the same parity" on ℤ: a ~ b if a and b are both even or both odd</p>
        <p>"Congruent modulo n" on ℤ: a ≡ b (mod n)</p>
        <p>"Same absolute value" on ℝ: not transitive!</p>
      </Example>

      <Theorem
        title="Equivalence Classes"
        proof={
          <>
            <p className="mb-3"><strong>Non-empty:</strong> By reflexivity, <InlineMath>{`a \\sim a`}</InlineMath>, so <InlineMath>{`a \\in [a]`}</InlineMath>. Thus each equivalence class is non-empty.</p>
            <p className="mb-3"><strong>Covering:</strong> Every element <InlineMath>{`a`}</InlineMath> belongs to <InlineMath>{`[a]`}</InlineMath>, so <InlineMath>{`A = \\bigcup_a [a]`}</InlineMath>.</p>
            <p className="mb-3"><strong>Disjoint or equal:</strong> Suppose <InlineMath>{`[a] \\cap [b] \\neq \\emptyset`}</InlineMath>. Let <InlineMath>{`c \\in [a] \\cap [b]`}</InlineMath>, so <InlineMath>{`c \\sim a`}</InlineMath> and <InlineMath>{`c \\sim b`}</InlineMath>.</p>
            <p className="mb-3">For any <InlineMath>{`x \\in [a]`}</InlineMath>: <InlineMath>{`x \\sim a`}</InlineMath>, and <InlineMath>{`a \\sim c`}</InlineMath> (by symmetry), and <InlineMath>{`c \\sim b`}</InlineMath>. By transitivity, <InlineMath>{`x \\sim b`}</InlineMath>, so <InlineMath>{`x \\in [b]`}</InlineMath>.</p>
            <p className="mb-3">Similarly <InlineMath>{`[b] \\subseteq [a]`}</InlineMath>. Therefore <InlineMath>{`[a] = [b]`}</InlineMath>. So distinct classes are disjoint.</p>
          </>
        }
      >
        <p>Every equivalence relation ~ partitions A into disjoint <strong>equivalence classes</strong>.</p>
        <p>The equivalence class of a is [a] = &#123;x ∈ A : x ~ a&#125;</p>
      </Theorem>

      <Callout type="important">
        <strong>Why Functions Matter:</strong> Functions provide the essential bridge between different mathematical structures.
        Properties like injectivity and surjectivity allow us to compare set cardinalities and establish
        when different structures are "the same size" or when one contains another as a subset.
      </Callout>

      <h3>Interactive: Function Properties Explorer</h3>
      <p>
        While this section focuses on functions between sets, the concept extends to functions on the real numbers.
        Here's an interactive demonstration of how functions can be integrated using Riemann sums.
        This preview shows how function properties we learned about enable powerful mathematical operations.
      </p>

      <RiemannVisualizer
        func={(x: number) => x * x}
        a={0}
        b={1}
        functionLatex="x^2"
      />

      <p className="mt-4 text-sm text-dark-400">
        This demonstrates how bijective functions and other properties we studied enable the powerful operations
        of calculus. The ability to integrate functions builds directly on the foundational concepts of
        function properties and set theory.
      </p>

      <SectionQuiz
        sectionId={4}
        questions={section04Quiz}
        title="Functions and Relations Quiz"
      />
    </LessonLayout>
  );
}