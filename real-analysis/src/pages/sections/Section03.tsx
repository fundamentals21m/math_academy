import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';
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

      <Theorem
        title="Basic Properties of Finite Sets"
        proof={
          <>
            <p className="mb-3"><strong>Subset of finite set:</strong> Let <InlineMath>{`S`}</InlineMath> have <InlineMath>{`n`}</InlineMath> elements and <InlineMath>{`T \\subseteq S`}</InlineMath>. Define an injection <InlineMath>{`T \\to S`}</InlineMath> (the inclusion). Since <InlineMath>{`S`}</InlineMath> is finite, <InlineMath>{`T`}</InlineMath> has at most <InlineMath>{`n`}</InlineMath> elements, hence is finite.</p>
            <p className="mb-3"><strong>Union:</strong> Let <InlineMath>{`|A| = m`}</InlineMath> and <InlineMath>{`|B| = n`}</InlineMath>. Then <InlineMath>{`|A \\cup B| \\leq |A| + |B| = m + n`}</InlineMath>, a finite number. More precisely, <InlineMath>{`|A \\cup B| = |A| + |B| - |A \\cap B|`}</InlineMath>.</p>
            <p className="mb-3"><strong>Cartesian product:</strong> If <InlineMath>{`|A| = m`}</InlineMath> and <InlineMath>{`|B| = n`}</InlineMath>, then <InlineMath>{`A \\times B`}</InlineMath> has exactly <InlineMath>{`mn`}</InlineMath> elements.</p>
          </>
        }
      >
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

      <Theorem
        title="Countable Sets"
        proof={
          <>
            <p className="mb-3"><strong><InlineMath>{`\\mathbb{Z}`}</InlineMath> is countable:</strong> Define <InlineMath>{`f: \\mathbb{N} \\to \\mathbb{Z}`}</InlineMath> by <InlineMath>{`f(n) = n/2`}</InlineMath> if <InlineMath>{`n`}</InlineMath> is even, <InlineMath>{`f(n) = -(n+1)/2`}</InlineMath> if <InlineMath>{`n`}</InlineMath> is odd. This gives <InlineMath>{`0, -1, 1, -2, 2, -3, 3, \\ldots`}</InlineMath> which is a bijection.</p>
            <p className="mb-3"><strong><InlineMath>{`\\mathbb{Q}`}</InlineMath> is countable:</strong> List positive rationals in a grid with <InlineMath>{`p/q`}</InlineMath> at row <InlineMath>{`p`}</InlineMath>, column <InlineMath>{`q`}</InlineMath>. Traverse diagonally: <InlineMath>{`1/1, 1/2, 2/1, 1/3, \\ldots`}</InlineMath> skipping duplicates. This enumerates all positive rationals.</p>
            <p className="mb-3">Key insight: A countable union of countable sets is countable (using a diagonal argument).</p>
          </>
        }
      >
        <p>A set S is <strong>countable</strong> if it is finite or there exists a bijection between S and ℕ.</p>
        <p>The rational numbers ℚ are countable.</p>
        <p>The integers ℤ are countable.</p>
      </Theorem>

      <Theorem
        title="The Real Numbers are Uncountable"
        proof={
          <>
            <p className="mb-3"><strong>Cantor's Diagonal Argument:</strong> Suppose <InlineMath>{`(0,1)`}</InlineMath> is countable. Then we can list all reals in <InlineMath>{`(0,1)`}</InlineMath> as <InlineMath>{`r_1, r_2, r_3, \\ldots`}</InlineMath></p>
            <p className="mb-3">Write each <InlineMath>{`r_n`}</InlineMath> in decimal: <InlineMath>{`r_n = 0.d_{n1}d_{n2}d_{n3}\\ldots`}</InlineMath> (avoiding representations ending in all 9s).</p>
            <p className="mb-3">Construct <InlineMath>{`x = 0.x_1x_2x_3\\ldots`}</InlineMath> where <InlineMath>{`x_n = 5`}</InlineMath> if <InlineMath>{`d_{nn} \\neq 5`}</InlineMath>, and <InlineMath>{`x_n = 6`}</InlineMath> if <InlineMath>{`d_{nn} = 5`}</InlineMath>.</p>
            <p className="mb-3">Then <InlineMath>{`x`}</InlineMath> differs from <InlineMath>{`r_n`}</InlineMath> in the <InlineMath>{`n`}</InlineMath>-th decimal place for all <InlineMath>{`n`}</InlineMath>. So <InlineMath>{`x \\notin \\{r_1, r_2, \\ldots\\}`}</InlineMath>.</p>
            <p className="mb-3">Contradiction! So <InlineMath>{`(0,1)`}</InlineMath> is uncountable, hence <InlineMath>{`\\mathbb{R}`}</InlineMath> is uncountable.</p>
          </>
        }
      >
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

      <Theorem
        title="Continuum Hypothesis"
        proof={
          <>
            <p className="mb-3"><strong>Independence:</strong> Kurt Gödel (1940) showed CH is consistent with ZFC by constructing the constructible universe <InlineMath>{`L`}</InlineMath> where CH holds.</p>
            <p className="mb-3">Paul Cohen (1963) showed <InlineMath>{`\\neg`}</InlineMath>CH is also consistent with ZFC using forcing, constructing models where <InlineMath>{`2^{\\aleph_0}`}</InlineMath> can be arbitrarily large.</p>
            <p className="mb-3">Therefore CH can neither be proved nor disproved from ZFC axioms alone - it is independent.</p>
            <p className="mb-3">This was one of the most important results in 20th century logic, showing fundamental limitations of axiomatic set theory.</p>
          </>
        }
      >
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