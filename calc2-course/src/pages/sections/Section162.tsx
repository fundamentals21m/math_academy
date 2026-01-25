import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section162() {
  return (
    <LessonLayout sectionId={162}>
      <h2>Probability for Countably Infinite Sample Spaces</h2>

      <p>
        We now extend probability theory from finite sample spaces to countably
        infinite ones. This requires a careful treatment of infinite sums and
        the introduction of <strong>countable additivity</strong>.
      </p>

      <h3>The Challenge of Infinite Sample Spaces</h3>

      <p>
        For a finite sample space <InlineMath>{'S = \\{a_1, \\ldots, a_n\\}'}</InlineMath>,
        we define <InlineMath>P</InlineMath> by specifying point probabilities{' '}
        <InlineMath>{'P(a_i) \\geq 0'}</InlineMath> with{' '}
        <InlineMath>{'\\sum P(a_i) = 1'}</InlineMath>.
      </p>

      <p>
        For a countably infinite sample space{' '}
        <InlineMath>{'S = \\{a_1, a_2, a_3, \\ldots\\}'}</InlineMath>, we need
        the infinite series <InlineMath>{'\\sum_{i=1}^{\\infty} P(a_i)'}</InlineMath>{' '}
        to converge to 1.
      </p>

      <h3>Countable Additivity</h3>

      <Callout type="info">
        <strong>Definition:</strong> A set function <InlineMath>P</InlineMath>{' '}
        on a Boolean algebra <InlineMath>{'\\mathscr{B}'}</InlineMath> is{' '}
        <strong>countably additive</strong> (or <strong>σ-additive</strong>) if
        for every countable collection of pairwise disjoint sets{' '}
        <InlineMath>{'A_1, A_2, \\ldots'}</InlineMath> in{' '}
        <InlineMath>{'\\mathscr{B}'}</InlineMath> whose union is also in{' '}
        <InlineMath>{'\\mathscr{B}'}</InlineMath>:
        <MathBlock>
          {'P\\left(\\bigcup_{k=1}^{\\infty} A_k\\right) = \\sum_{k=1}^{\\infty} P(A_k)'}
        </MathBlock>
      </Callout>

      <p>
        Countable additivity is stronger than finite additivity and is essential
        for working with infinite sample spaces.
      </p>

      <h3>Probability Spaces with Countable Sample Spaces</h3>

      <p>
        Let <InlineMath>{'S = \\{a_1, a_2, a_3, \\ldots\\}'}</InlineMath> be
        countably infinite. A probability measure <InlineMath>P</InlineMath> on{' '}
        <InlineMath>S</InlineMath> is completely determined by point
        probabilities <InlineMath>{'p_i = P(\\{a_i\\})'}</InlineMath> satisfying:
      </p>

      <ol>
        <li><InlineMath>{'p_i \\geq 0'}</InlineMath> for all <InlineMath>i</InlineMath></li>
        <li><InlineMath>{'\\sum_{i=1}^{\\infty} p_i = 1'}</InlineMath></li>
      </ol>

      <p>For any event <InlineMath>{'A \\subseteq S'}</InlineMath>:</p>
      <MathBlock>
        {'P(A) = \\sum_{a_i \\in A} p_i'}
      </MathBlock>

      <h3>Example 1: The Geometric Distribution</h3>

      <p>
        A coin with probability <InlineMath>p</InlineMath> of heads is tossed
        repeatedly until the first head appears. Let <InlineMath>X</InlineMath>{' '}
        be the number of tosses required.
      </p>

      <p>
        The sample space is <InlineMath>{'S = \\{1, 2, 3, \\ldots\\}'}</InlineMath>.
        The probability that the first head appears on toss{' '}
        <InlineMath>k</InlineMath> is:
      </p>
      <MathBlock>
        {'P(X = k) = (1-p)^{k-1} p'}
      </MathBlock>

      <p>
        (We need <InlineMath>k-1</InlineMath> tails followed by a head.)
      </p>

      <p>Verification that this is a valid probability measure:</p>
      <MathBlock>
        {'\\sum_{k=1}^{\\infty} (1-p)^{k-1} p = p \\sum_{j=0}^{\\infty} (1-p)^j = p \\cdot \\frac{1}{1-(1-p)} = p \\cdot \\frac{1}{p} = 1'}
      </MathBlock>

      <h3>Example 2: The Poisson Distribution</h3>

      <p>
        The <strong>Poisson distribution</strong> with parameter{' '}
        <InlineMath>{'\\lambda > 0'}</InlineMath> assigns probabilities:
      </p>
      <MathBlock>
        {'P(k) = \\frac{\\lambda^k e^{-\\lambda}}{k!}, \\quad k = 0, 1, 2, \\ldots'}
      </MathBlock>

      <p>Verification:</p>
      <MathBlock>
        {'\\sum_{k=0}^{\\infty} \\frac{\\lambda^k e^{-\\lambda}}{k!} = e^{-\\lambda} \\sum_{k=0}^{\\infty} \\frac{\\lambda^k}{k!} = e^{-\\lambda} \\cdot e^{\\lambda} = 1'}
      </MathBlock>

      <h3>Properties Extended to Countable Sample Spaces</h3>

      <p>
        The familiar properties of probability extend to countably infinite
        sample spaces:
      </p>

      <ul>
        <li><InlineMath>{'P(\\varnothing) = 0'}</InlineMath></li>
        <li><InlineMath>{'0 \\leq P(A) \\leq 1'}</InlineMath> for all events <InlineMath>A</InlineMath></li>
        <li><InlineMath>{'P(A\') = 1 - P(A)'}</InlineMath></li>
        <li>If <InlineMath>{'A \\subseteq B'}</InlineMath>, then <InlineMath>{'P(A) \\leq P(B)'}</InlineMath></li>
        <li>Inclusion-exclusion extends to countable unions (with appropriate convergence)</li>
      </ul>

      <h3>The Need for σ-algebras</h3>

      <p>
        When working with uncountable sample spaces (like <InlineMath>{'\\mathbb{R}'}</InlineMath>),
        not all subsets can be assigned probabilities consistently. We must
        restrict to a <strong>σ-algebra</strong> of "measurable" sets—a Boolean
        algebra closed under countable unions. This leads to measure theory,
        which provides the foundation for modern probability.
      </p>

      <Callout type="success">
        <strong>Key Insight:</strong> The extension from finite to countably
        infinite sample spaces requires replacing finite additivity with
        countable additivity. This allows us to handle important distributions
        like the geometric and Poisson distributions, where the sample space has
        infinitely many outcomes. The theory naturally leads to the measure-theoretic
        foundations developed by Kolmogorov, which unify discrete and continuous
        probability.
      </Callout>

      <h3>Looking Ahead</h3>

      <p>
        The material in this chapter provides the foundation for the{' '}
        <strong>calculus of probabilities</strong> in the next chapter, where we
        study random variables, distribution functions, expectation, and the
        powerful tools that connect probability theory with calculus.
      </p>
    </LessonLayout>
  );
}
