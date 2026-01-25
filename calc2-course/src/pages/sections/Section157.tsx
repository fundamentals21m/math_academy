import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section157() {
  return (
    <LessonLayout sectionId={157}>
      <h2>Independence</h2>

      <p>
        A central concept in probability theory is{' '}
        <strong>independence</strong>—the idea that the occurrence of one event
        does not affect the probability of another.
      </p>

      <h3>Definition of Independence</h3>

      <Callout type="info">
        <strong>Definition:</strong> Two events <InlineMath>{'A'}</InlineMath> and{' '}
        <InlineMath>{'B'}</InlineMath> are called <strong>independent</strong> (or{' '}
        <strong>stochastically independent</strong>) if and only if:
        <MathBlock>{`P(A \\cap B) = P(A) \\cdot P(B)`}</MathBlock>
      </Callout>

      <p>
        If <InlineMath>{'A'}</InlineMath> and <InlineMath>{'B'}</InlineMath> are
        independent and <InlineMath>{'P(B) \\neq 0'}</InlineMath>, then:
      </p>
      <MathBlock>{`P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)} = \\frac{P(A) \\cdot P(B)}{P(B)} = P(A)`}</MathBlock>

      <p>
        This shows the significance of independence: knowing that{' '}
        <InlineMath>{'B'}</InlineMath> occurred does not change the probability of{' '}
        <InlineMath>{'A'}</InlineMath>.
      </p>

      <h3>Example 1: Drawing a Card</h3>

      <p>
        One card is drawn from a 52-card deck. Show that "drawing an ace" and
        "drawing a heart" are independent.
      </p>

      <p>
        Let <InlineMath>{'A = \\{\\text{aces}\\}'}</InlineMath> and{' '}
        <InlineMath>{'B = \\{\\text{hearts}\\}'}</InlineMath>:
      </p>
      <ul>
        <li><InlineMath>{'P(A) = 4/52 = 1/13'}</InlineMath></li>
        <li><InlineMath>{'P(B) = 13/52 = 1/4'}</InlineMath></li>
        <li><InlineMath>{'P(A \\cap B) = 1/52'}</InlineMath> (ace of hearts)</li>
      </ul>

      <p>Since:</p>
      <MathBlock>{`P(A) \\cdot P(B) = \\frac{1}{13} \\cdot \\frac{1}{4} = \\frac{1}{52} = P(A \\cap B)`}</MathBlock>
      <p>the events are independent.</p>

      <h3>Example 2: Rolling Three Dice</h3>

      <p>
        Three fair dice are rolled. Let <InlineMath>{'A'}</InlineMath> = "sum is 6"
        and <InlineMath>{'B'}</InlineMath> = "all digits different." Are these
        independent?
      </p>

      <p>
        The sample space has <InlineMath>{'6^3 = 216'}</InlineMath> elements.
      </p>
      <ul>
        <li><InlineMath>{'|A| = 10'}</InlineMath> (triples summing to 6)</li>
        <li><InlineMath>{'|B| = 6 \\cdot 5 \\cdot 4 = 120'}</InlineMath> (permutations of distinct digits)</li>
        <li><InlineMath>{'|A \\cap B| = 6'}</InlineMath> (permutations of {'{'}1,2,3{'}'})</li>
      </ul>

      <MathBlock>{`P(A \\cap B) = \\frac{6}{216}, \\quad P(A) \\cdot P(B) = \\frac{10}{216} \\cdot \\frac{120}{216} = \\frac{1200}{216^2}`}</MathBlock>

      <p>
        Since <InlineMath>{'P(A \\cap B) \\neq P(A) \\cdot P(B)'}</InlineMath>,
        the events are <strong>not</strong> independent.
      </p>

      <h3>Independence of Multiple Events</h3>

      <Callout type="info">
        <strong>Definition:</strong> A finite collection{' '}
        <InlineMath>{'\\{A_1, A_2, \\ldots, A_n\\}'}</InlineMath> of events is{' '}
        <strong>independent</strong> if for every subcollection:
        <MathBlock>{`P\\left(\\bigcap_{k=1}^{m} A_{i_k}\\right) = \\prod_{k=1}^{m} P(A_{i_k})`}</MathBlock>
        for all <InlineMath>{'2 \\leq m \\leq n'}</InlineMath> and all choices of
        indices.
      </Callout>

      <p>
        For three events <InlineMath>{'A, B, C'}</InlineMath>, independence requires
        <strong>all four</strong> equations:
      </p>
      <MathBlock>{`P(A \\cap B) = P(A)P(B)`}</MathBlock>
      <MathBlock>{`P(A \\cap C) = P(A)P(C)`}</MathBlock>
      <MathBlock>{`P(B \\cap C) = P(B)P(C)`}</MathBlock>
      <MathBlock>{`P(A \\cap B \\cap C) = P(A)P(B)P(C)`}</MathBlock>

      <h3>Pairwise Independence ≠ Mutual Independence</h3>

      <Callout type="warning">
        <strong>Warning:</strong> Pairwise independence does not imply mutual
        independence!
      </Callout>

      <p>
        <strong>Counterexample:</strong> Consider four tickets{' '}
        <InlineMath>{'\\{a, b, c, abc\\}'}</InlineMath> drawn with equal
        probability. Define:
      </p>
      <ul>
        <li><InlineMath>{'A'}</InlineMath> = ticket contains letter <InlineMath>{'a'}</InlineMath></li>
        <li><InlineMath>{'B'}</InlineMath> = ticket contains letter <InlineMath>{'b'}</InlineMath></li>
        <li><InlineMath>{'C'}</InlineMath> = ticket contains letter <InlineMath>{'c'}</InlineMath></li>
      </ul>

      <p>
        Each pair <InlineMath>{'(A, B)'}</InlineMath>,{' '}
        <InlineMath>{'(A, C)'}</InlineMath>, <InlineMath>{'(B, C)'}</InlineMath>{' '}
        is independent. But:
      </p>
      <MathBlock>{`P(A \\cap B \\cap C) = \\frac{1}{4} \\neq \\frac{1}{8} = P(A)P(B)P(C)`}</MathBlock>

      <h3>Properties of Independent Events</h3>

      <p>
        If <InlineMath>{'A'}</InlineMath> and <InlineMath>{'B'}</InlineMath> are
        independent, then so are:
      </p>
      <ul>
        <li><InlineMath>{'A'}</InlineMath> and <InlineMath>{"B'"}</InlineMath></li>
        <li><InlineMath>{"A'"}</InlineMath> and <InlineMath>{'B'}</InlineMath></li>
        <li><InlineMath>{"A'"}</InlineMath> and <InlineMath>{"B'"}</InlineMath></li>
      </ul>

      <p>
        Also, for independent events:
      </p>
      <MathBlock>{`P(A \\cup B) = 1 - P(A')P(B')`}</MathBlock>

      <Callout type="success">
        <strong>Key Insight:</strong> Independence captures the intuitive idea
        that events don't influence each other. It's a symmetric relationship:
        if <InlineMath>{'A'}</InlineMath> is independent of{' '}
        <InlineMath>{'B'}</InlineMath>, then <InlineMath>{'B'}</InlineMath> is
        independent of <InlineMath>{'A'}</InlineMath>. But beware: "independent"
        and "disjoint" are very different—disjoint events with positive
        probabilities are never independent!
      </Callout>
    </LessonLayout>
  );
}
