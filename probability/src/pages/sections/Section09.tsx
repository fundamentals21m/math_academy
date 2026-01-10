import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section09() {
  return (
    <LessonLayout
      title="2.3 Axioms of Probability"
      sectionId={9}
    >
      <p className="text-lg text-dark-200 mb-6">
        We now present the axioms that define probability. Any function satisfying these axioms 
        is a valid probability measure.
      </p>

      <h2 className="text-2xl font-bold text-dark-100 mt-8 mb-4">The Kolmogorov Axioms</h2>

      <p className="text-dark-300 mb-4">
        Let <InlineMath>S</InlineMath> be a sample space. A <strong>probability measure</strong> <InlineMath>P</InlineMath> is a function 
        that assigns a real number <InlineMath>P(E)</InlineMath> to each event <InlineMath>E \subseteq S</InlineMath> such that:
      </p>

      <div className="space-y-4 mb-6">
        <Theorem title="Axiom 1: Non-negativity">
          <p>For any event <InlineMath>E</InlineMath>:</p>
          <MathBlock>{`P(E) \\geq 0`}</MathBlock>
        </Theorem>

        <Theorem title="Axiom 2: Normalization">
          <p>The probability of the entire sample space is 1:</p>
          <MathBlock>{`P(S) = 1`}</MathBlock>
        </Theorem>

        <Theorem title="Axiom 3: Countable Additivity">
          <p className="mb-2">
            For any sequence of mutually exclusive events <InlineMath>E_1, E_2, E_3, \ldots</InlineMath>:
          </p>
          <MathBlock>{`P\\left(\\bigcup_{i=1}^{\\infty} E_i\\right) = \\sum_{i=1}^{\\infty} P(E_i)`}</MathBlock>
        </Theorem>
      </div>

      <p className="text-dark-300 mb-4">
        These three simple axioms are the foundation of all probability theory. Everything else 
        we prove follows from these axioms.
      </p>

      <h2 className="text-2xl font-bold text-dark-100 mt-8 mb-4">Understanding the Axioms</h2>

      <p className="text-dark-300 mb-4">
        <strong>Axiom 1</strong> says probabilities can't be negative. This matches intuition—we 
        can't have a "-30% chance" of rain.
      </p>

      <p className="text-dark-300 mb-4">
        <strong>Axiom 2</strong> says something must happen. The sample space contains all possibilities, 
        so its probability is 1 (certainty).
      </p>

      <p className="text-dark-300 mb-4">
        <strong>Axiom 3</strong> says for non-overlapping events, probabilities add. If events can't 
        both happen, the probability of "either one" is the sum of their individual probabilities.
      </p>

      <Example title="Verifying a Probability Measure">
        <p className="mb-2">
          For a fair die, let <InlineMath>P(\{'{i}'}\) = 1/6</InlineMath> for each outcome <InlineMath>i \in \{'{1,2,3,4,5,6}'}\</InlineMath>.
        </p>
        <p className="mb-2">Check the axioms:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Axiom 1: <InlineMath>1/6 \geq 0</InlineMath> ✓</li>
          <li>Axiom 2: <InlineMath>P(S) = 6 \cdot (1/6) = 1</InlineMath> ✓</li>
          <li>Axiom 3: For disjoint events, probabilities add (by how we defined <InlineMath>P</InlineMath>)</li>
        </ul>
      </Example>

      <Example title="Non-Example">
        <p className="mb-2">
          Suppose someone claims for a die: <InlineMath>P(\{'{1}'}\) = 0.3</InlineMath>, <InlineMath>P(\{'{2}'}\) = 0.3</InlineMath>, 
          <InlineMath>P(\{'{3}'}\) = 0.3</InlineMath>, <InlineMath>P(\{'{4}'}\) = 0.3</InlineMath>, <InlineMath>P(\{'{5}'}\) = 0.3</InlineMath>, <InlineMath>P(\{'{6}'}\) = 0.3</InlineMath>.
        </p>
        <p>
          This violates Axiom 2: <InlineMath>P(S) = 6 \cdot 0.3 = 1.8 \neq 1</InlineMath>. Not a valid probability measure.
        </p>
      </Example>

      <h2 className="text-2xl font-bold text-dark-100 mt-8 mb-4">Finite Additivity</h2>

      <p className="text-dark-300 mb-4">
        A weaker but useful consequence: for finitely many mutually exclusive events:
      </p>

      <Theorem title="Finite Additivity">
        <p className="mb-2">
          If <InlineMath>E_1, E_2, \ldots, E_n</InlineMath> are mutually exclusive events:
        </p>
        <MathBlock>{`P\\left(\\bigcup_{i=1}^{n} E_i\\right) = \\sum_{i=1}^{n} P(E_i)`}</MathBlock>
      </Theorem>

      <p className="text-dark-300 mb-4">
        This follows from Axiom 3 by setting <InlineMath>E_i = \emptyset</InlineMath> for <InlineMath>i {'>'} n</InlineMath>.
      </p>

      <h2 className="text-2xl font-bold text-dark-100 mt-8 mb-4">Discrete Probability</h2>

      <p className="text-dark-300 mb-4">
        For finite or countable sample spaces <InlineMath>S = \{'{s_1, s_2, s_3, \\ldots}'}\</InlineMath>, a probability 
        measure is completely determined by assigning probabilities to individual outcomes.
      </p>

      <Definition title="Probability Mass Function">
        <p className="mb-2">
          For a discrete sample space, the <strong>probability mass function</strong> (PMF) assigns 
          a probability <InlineMath>p_i = P(\{'{s_i}'}\)</InlineMath> to each outcome such that:
        </p>
        <MathBlock>{`p_i \\geq 0 \\text{ for all } i, \\quad \\sum_{i} p_i = 1`}</MathBlock>
        <p className="mt-2">The probability of any event <InlineMath>E</InlineMath> is:</p>
        <MathBlock>{`P(E) = \\sum_{s_i \\in E} p_i`}</MathBlock>
      </Definition>

      <Example title="Loaded Die">
        <p className="mb-2">
          A die is loaded so that 6 is twice as likely as any other number. Find the probability 
          of rolling an even number.
        </p>
        <p className="mb-2">
          Let <InlineMath>P(\{'{i}'}\) = p</InlineMath> for <InlineMath>i = 1,2,3,4,5</InlineMath> and <InlineMath>P(\{'{6}'}\) = 2p</InlineMath>.
        </p>
        <p className="mb-2">
          By Axiom 2: <InlineMath>5p + 2p = 1</InlineMath>, so <InlineMath>p = 1/7</InlineMath>.
        </p>
        <p className="mb-2">
          The probabilities are: <InlineMath>P(\{'{i}'}\) = 1/7</InlineMath> for <InlineMath>i \neq 6</InlineMath>, and <InlineMath>P(\{'{6}'}\) = 2/7</InlineMath>.
        </p>
        <MathBlock>{`P(\\text{even}) = P(\\{2,4,6\\}) = \\frac{1}{7} + \\frac{1}{7} + \\frac{2}{7} = \\frac{4}{7}`}</MathBlock>
      </Example>
    </LessonLayout>
  );
}
