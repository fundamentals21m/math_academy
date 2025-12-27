import { LessonLayout } from '@/components/layout/LessonLayout';
import { Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { section02Quiz } from '@/data/quizzes';

export default function Section02() {
  return (
    <LessonLayout sectionId={2}>
      <h2>Mathematical Induction</h2>

      <p>
        Mathematical induction is a powerful proof technique for proving statements about natural numbers.
        It allows us to prove that a statement holds for all natural numbers by proving two things:
        that it holds for the smallest case, and that if it holds for one case, it holds for the next.
      </p>

      <Theorem
        title="Principle of Mathematical Induction"
        proof={
          <>
            <p className="mb-3">We prove this using the Well-Ordering Principle (which is equivalent).</p>
            <p className="mb-3">Suppose P(1) is true and P(k) ⇒ P(k+1) for all k, but P(n) fails for some n.</p>
            <p className="mb-3">Let S = &#123;n ∈ ℕ : P(n) is false&#125;. By assumption, S is non-empty.</p>
            <p className="mb-3">By Well-Ordering, S has a least element m. Since P(1) is true, m &gt; 1.</p>
            <p className="mb-3">Thus m - 1 ∈ ℕ and m - 1 ∉ S (since m is least), so P(m-1) is true.</p>
            <p className="mb-3">By the inductive step, P(m) is true. Contradiction! So S is empty.</p>
          </>
        }
      >
        <p>Let P(n) be a statement about the natural number n. If:</p>
        <ol className="list-decimal list-inside space-y-2 mt-4">
          <li><strong>Base Case:</strong> P(1) is true</li>
          <li><strong>Inductive Step:</strong> For every k ∈ ℕ, if P(k) is true, then P(k+1) is true</li>
        </ol>
        <p className="mt-4">Then P(n) is true for all natural numbers n.</p>
      </Theorem>

      <Example title="Sum of First n Natural Numbers">
        <p>Prove: 1 + 2 + 3 + ... + n = n(n+1)/2</p>

        <h4 className="text-lg font-semibold mt-4 mb-2">Base Case (n=1):</h4>
        <p>Left side: 1</p>
        <p>Right side: 1×2/2 = 1</p>
        <p>1 = 1 ✓</p>

        <h4 className="text-lg font-semibold mt-4 mb-2">Inductive Step:</h4>
        <p>Assume P(k) is true: 1 + 2 + ... + k = k(k+1)/2</p>
        <p>Need to show P(k+1): 1 + 2 + ... + k + (k+1) = (k+1)(k+2)/2</p>

        <MathBlock>
          {`\\text{Left side} = \\frac{k(k+1)}{2} + (k+1) = \\frac{k(k+1) + 2(k+1)}{2} = \\frac{(k+1)(k+2)}{2}`}
        </MathBlock>

        <p>This matches the right side! ✓</p>
      </Example>

      <Example title="Sum of First n Odd Numbers">
        <p>Prove: 1 + 3 + 5 + ... + (2n-1) = n²</p>

        <MathBlock>
          {`\\text{Base case (n=1): } 1 = 1^2 ✓`}
        </MathBlock>

        <p>Inductive step: Assume 1 + 3 + ... + (2k-1) = k²</p>
        <p>Then: 1 + 3 + ... + (2k-1) + (2(k+1)-1) = k² + (2k+1) = k² + 2k + 1 = (k+1)² ✓</p>
      </Example>

      <Callout type="info">
        <strong>Strong Induction:</strong> Sometimes we need to assume P(k), P(k+1), ..., P(m) are all true
        to prove P(m+1). This is called strong induction and is equivalent to regular induction.
      </Callout>

      <Theorem
        title="Well-Ordering Principle"
        proof={
          <>
            <p className="mb-3">We prove this assuming Mathematical Induction.</p>
            <p className="mb-3">Let S ⊆ ℕ be non-empty. Suppose S has no least element.</p>
            <p className="mb-3">Let P(n) = "n ∉ S". We show P(n) holds for all n by induction.</p>
            <p className="mb-3"><strong>Base:</strong> If 1 ∈ S, then 1 would be the least element (contradiction). So P(1) holds.</p>
            <p className="mb-3"><strong>Inductive step:</strong> Assume P(k) for all k ≤ m. If m+1 ∈ S, then m+1 would be the least element of S (since no smaller natural is in S). Contradiction. So P(m+1) holds.</p>
            <p className="mb-3">By strong induction, P(n) holds for all n, so S = ∅. Contradiction!</p>
          </>
        }
      >
        <p>Every non-empty subset of natural numbers has a least element.</p>
        <p className="mt-2 text-sm text-dark-400">
          This principle is equivalent to the principle of mathematical induction.
        </p>
      </Theorem>

      <Example title="Divisibility by Powers of 2">
        <p>Every natural number greater than 1 is divisible by a prime.</p>
        <p>This is proven by strong induction: if n is composite, it has a divisor less than itself.</p>
      </Example>

      <Callout type="important">
        <strong>Common Pitfalls:</strong>
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>Forgetting the base case</li>
          <li>Assuming what you're trying to prove in the inductive step</li>
          <li>Not clearly stating the inductive hypothesis</li>
        </ul>
      </Callout>

      <SectionQuiz
        sectionId={2}
        questions={section02Quiz}
        title="Mathematical Induction Quiz"
      />
    </LessonLayout>
  );
}