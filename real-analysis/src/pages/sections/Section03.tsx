import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { Math, MathBlock } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { section03Quiz } from '@/data/quizzes';

export default function Section03() {
  return (
    <LessonLayout sectionId={3}>
      <h2>Finite and Infinite Sets</h2>

      <p>
        The distinction between finite and infinite sets is fundamental to mathematics.
        While finite sets can be counted and listed, infinite sets have remarkable properties
        that defy our intuition. Georg Cantor's work on set theory revolutionized our understanding
        of infinity and laid the foundations for modern mathematics.
      </p>

      <Definition title="Finite and Infinite Sets">
        <p>A set S is <strong>finite</strong> if there exists a natural number n such that S has exactly n elements.</p>
        <p>A set S is <strong>infinite</strong> if it is not finite - it has "more elements than any natural number."</p>
      </Definition>

      <Theorem title="Basic Properties of Finite Sets">
        <p>Any subset of a finite set is finite.</p>
        <p>If S is finite and T ⊆ S, then T is finite.</p>
        <p>The union of two finite sets is finite.</p>
        <p>The Cartesian product of two finite sets is finite.</p>
      </Theorem>

      <h3>The Concept of Cardinality</h3>

      <Definition title="Cardinality">
        <p>The <strong>cardinality</strong> |S| of a finite set S is the number of elements in S.</p>
        <p>For infinite sets, we use cardinal numbers: ℵ₀ (aleph-null) for countable infinity, and larger cardinals for uncountable infinities.</p>
      </Definition>

      <Example title="Finite Set Cardinality">
        <p>Let S = &#123;1, 2, 3, 4&#125;</p>
        <p>Then |S| = 4</p>
        <p>Any subset, such as T = &#123;2, 4&#125;, has |T| = 2</p>
      </Example>

      <h3>Countable and Uncountable Sets</h3>

      <Theorem title="Countable Sets">
        <p>A set S is <strong>countable</strong> if it is finite or there exists a bijection between S and ℕ.</p>
        <p>The rational numbers ℚ are countable.</p>
        <p>The integers ℤ are countable.</p>
      </Theorem>

      <Theorem title="The Real Numbers are Uncountable">
        <p>The set of real numbers ℝ is uncountable - it cannot be put into one-to-one correspondence with ℕ.</p>
        <p>This is proven using Cantor's diagonal argument.</p>
      </Theorem>

      <h3>Cantor's Diagonal Argument</h3>

      <p>
        Suppose we try to list all real numbers between 0 and 1 as a sequence: r₁, r₂, r₃, ...
        Write each as a decimal: r₁ = 0.d₁₁d₁₂d₁₃..., r₂ = 0.d₂₁d₂₂d₂₃..., etc.
      </p>

      <p>
        Construct a new number r = 0.d₁d₂d₃... where dᵢ = 1 if the i-th digit of rᵢ is not 1, and dᵢ = 2 otherwise.
        Then r differs from every rᵢ in at least the i-th decimal place, so r is not in our list.
      </p>

      <Callout type="important">
        <strong>Cantor's Theorem:</strong> For any set S, the power set P(S) has strictly larger cardinality than S.
        This shows that there are infinitely many different "sizes" of infinity.
      </Callout>

      <Example title="Power Set Cardinality">
        <p>Let S = &#123;1, 2, 3&#125;, |S| = 3</p>
        <p>Power set P(S) = &#123;∅, &#123;1&#125;, &#123;2&#125;, &#123;3&#125;, &#123;1,2&#125;, &#123;1,3&#125;, &#123;2,3&#125;, &#123;1,2,3&#125;&#125;</p>
        <p>|P(S)| = 8 &gt; 3</p>
      </Example>

      <Theorem title="Continuum Hypothesis">
        <p>There is no cardinal number strictly between ℵ₀ and 2^ℵ₀.</p>
        <p>This hypothesis is independent of ZFC (Zermelo-Fraenkel set theory with the Axiom of Choice).</p>
      </Theorem>

      <Callout type="info">
        <strong>Philosophical Implications:</strong> Cantor's work showed that there are different "sizes" of infinity,
        revolutionizing our understanding of the infinite and establishing set theory as a foundational discipline.
      </Callout>

      <SectionQuiz
        sectionId={3}
        questions={section03Quiz}
        title="Finite and Infinite Sets Quiz"
      />
    </LessonLayout>
  );
}