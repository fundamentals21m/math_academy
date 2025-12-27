import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { Math, MathBlock } from '@/components/common/MathBlock';
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

      <Theorem title="Inverse Function Theorem">
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

      <Theorem title="Composition Properties">
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

      <Theorem title="Equivalence Classes">
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
        func={(x) => x * x}
        a={0}
        b={1}
        functionName="f"
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