import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section158() {
  return (
    <LessonLayout sectionId={158}>
      <h2>Compound Experiments</h2>

      <p>
        When we perform multiple experiments in succession, we can model the
        result as a single <strong>compound experiment</strong>. This leads to
        important applications including the famous problem of Chevalier de
        Méré.
      </p>

      <h3>De Méré's Problem</h3>

      <p>
        <strong>Question:</strong> Is it profitable to bet even money on at
        least one "double six" in 24 throws of a pair of dice?
      </p>

      <p>
        More generally: What is the probability of throwing a double six at
        least once in <InlineMath>n</InlineMath> throws?
      </p>

      <h3>Setting Up the Compound Experiment</h3>

      <p>
        For a single roll of two dice, the sample space{' '}
        <InlineMath>S</InlineMath> has 36 outcomes{' '}
        <InlineMath>(a, b)</InlineMath> with <InlineMath>{'a, b \\in \\{1, \\ldots, 6\\}'}</InlineMath>.
        Each outcome has probability <InlineMath>1/36</InlineMath>.
      </p>

      <p>
        For <InlineMath>n</InlineMath> rolls, the sample space is the{' '}
        <InlineMath>n</InlineMath>-fold Cartesian product{' '}
        <InlineMath>{'S^n'}</InlineMath>, with <InlineMath>{'36^n'}</InlineMath>{' '}
        elements, each having probability <InlineMath>{'1/36^n'}</InlineMath>.
      </p>

      <h3>Computing the Probability</h3>

      <p>
        Let <InlineMath>A</InlineMath> = "at least one double six in{' '}
        <InlineMath>n</InlineMath> throws." It's easier to compute the
        complement <InlineMath>A'</InlineMath> = "no double six."
      </p>

      <p>
        Each component of an element in <InlineMath>A'</InlineMath> can be any
        of the 35 outcomes except <InlineMath>(6, 6)</InlineMath>. So:
      </p>
      <MathBlock>
        {'P(A\') = \\left(\\frac{35}{36}\\right)^n'}
      </MathBlock>

      <p>Therefore:</p>
      <MathBlock>
        {'P(A) = 1 - \\left(\\frac{35}{36}\\right)^n'}
      </MathBlock>

      <h3>Answering De Méré's Question</h3>

      <p>
        Is <InlineMath>{'P(A) \\geq 1/2'}</InlineMath> when{' '}
        <InlineMath>n = 24</InlineMath>?
      </p>

      <p>
        The inequality <InlineMath>{'P(A) \\geq 1/2'}</InlineMath> is equivalent
        to:
      </p>
      <MathBlock>
        {'\\left(\\frac{35}{36}\\right)^n \\leq \\frac{1}{2}'}
      </MathBlock>

      <p>Taking logarithms:</p>
      <MathBlock>
        {'n \\geq \\frac{\\log 2}{\\log 36 - \\log 35} \\approx 24.6'}
      </MathBlock>

      <Callout type="info">
        <strong>Answer:</strong> <InlineMath>{'P(A) < 1/2'}</InlineMath> when{' '}
        <InlineMath>n = 24</InlineMath>, but{' '}
        <InlineMath>{'P(A) > 1/2'}</InlineMath> when{' '}
        <InlineMath>{'n \\geq 25'}</InlineMath>. It is <strong>not</strong>{' '}
        advantageous to bet even money on a double six in 24 throws.
      </Callout>

      <h3>General Construction of Compound Experiments</h3>

      <p>
        Given two probability spaces{' '}
        <InlineMath>{'(S_1, \\mathscr{B}_1, P_1)'}</InlineMath> and{' '}
        <InlineMath>{'(S_2, \\mathscr{B}_2, P_2)'}</InlineMath>, we construct
        the compound experiment:
      </p>

      <ol>
        <li><strong>Sample space:</strong> <InlineMath>{'S = S_1 \\times S_2'}</InlineMath></li>
        <li><strong>Boolean algebra:</strong> All subsets of <InlineMath>S</InlineMath></li>
        <li><strong>Probability:</strong> For independent experiments, define:
          <MathBlock>
            {'P(x, y) = P_1(x) \\cdot P_2(y)'}
          </MathBlock>
        </li>
      </ol>

      <h3>Independence in Compound Experiments</h3>

      <p>
        The product formula for probabilities reflects independence between the
        two experiments. This implies:
      </p>
      <MathBlock>
        {'P(U \\times V) = P_1(U) \\cdot P_2(V)'}
      </MathBlock>
      <p>
        for any subsets <InlineMath>{'U \\subseteq S_1'}</InlineMath> and{' '}
        <InlineMath>{'V \\subseteq S_2'}</InlineMath>.
      </p>

      <h3>Events Determined by Each Experiment</h3>

      <p>
        An event <InlineMath>{'A = C_1 \\times S_2'}</InlineMath> is{' '}
        <strong>determined by the first experiment</strong>. Its probability is:
      </p>
      <MathBlock>
        {'P(A) = P(C_1 \\times S_2) = P_1(C_1) \\cdot P_2(S_2) = P_1(C_1)'}
      </MathBlock>

      <p>
        Similarly, <InlineMath>{'B = S_1 \\times C_2'}</InlineMath> is
        determined by the second experiment with{' '}
        <InlineMath>{'P(B) = P_2(C_2)'}</InlineMath>.
      </p>

      <p>
        Such events <InlineMath>A</InlineMath> and <InlineMath>B</InlineMath>{' '}
        are always independent:
      </p>
      <MathBlock>
        {'P(A \\cap B) = P(C_1 \\times C_2) = P_1(C_1) \\cdot P_2(C_2) = P(A) \\cdot P(B)'}
      </MathBlock>

      <h3>Extension to <InlineMath>n</InlineMath> Experiments</h3>

      <p>
        For <InlineMath>n</InlineMath> independent experiments with spaces{' '}
        <InlineMath>{'(S_i, \\mathscr{B}_i, P_i)'}</InlineMath>:
      </p>
      <MathBlock>
        {'P(x_1, x_2, \\ldots, x_n) = P_1(x_1) \\cdot P_2(x_2) \\cdots P_n(x_n)'}
      </MathBlock>

      <p>
        When all experiments use the same probability space, this is called{' '}
        <strong>independent repeated trials under identical conditions</strong>.
      </p>

      <Callout type="success">
        <strong>Key Insight:</strong> Compound experiments model sequences of
        independent trials. The key property is that probabilities multiply:
        the probability of a sequence of outcomes is the product of the
        individual probabilities. This simple principle underlies many
        important results, including Bernoulli's formula for repeated trials.
      </Callout>
    </LessonLayout>
  );
}
