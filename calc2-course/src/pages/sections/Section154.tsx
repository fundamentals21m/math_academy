import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section154() {
  return (
    <LessonLayout sectionId={154}>
      <h2>Worked Examples in Probability</h2>

      <p>
        We illustrate how the concepts of probability theory may be used to
        answer specific questions involving probabilities.
      </p>

      <h3>Example 1: Coin Tossing</h3>

      <p>
        <strong>Problem:</strong> What is the probability that at least one
        "head" will occur in two throws of a coin?
      </p>

      <p>
        <strong>First Solution:</strong> The experiment consists of tossing a
        coin twice. The sample space is:
      </p>
      <MathBlock>
        {'S = \\{hh, ht, th, tt\\}'}
      </MathBlock>

      <p>
        If outcomes are equally likely, we assign{' '}
        <InlineMath>{'P(x) = \\frac{1}{4}'}</InlineMath> for each{' '}
        <InlineMath>x</InlineMath> in <InlineMath>S</InlineMath>. The event
        "at least one head occurs" is:
      </p>
      <MathBlock>
        {'A = \\{hh, ht, th\\}'}
      </MathBlock>

      <p>Therefore:</p>
      <MathBlock>
        {'P(A) = \\frac{1}{4} + \\frac{1}{4} + \\frac{1}{4} = \\frac{3}{4}'}
      </MathBlock>

      <p>
        <strong>Second Solution:</strong> Using the same sample space but
        assigning different probabilities:
      </p>
      <MathBlock>
        {'P(hh) = 1, \\quad P(ht) = P(th) = P(tt) = 0'}
      </MathBlock>

      <p>Then the probability of "at least one head" is:</p>
      <MathBlock>
        {'P(hh) + P(ht) + P(th) = 1 + 0 + 0 = 1'}
      </MathBlock>

      <Callout type="warning">
        <strong>Important:</strong> Different assignments of probabilities lead
        to different answers. The first solution assumes an unbiased coin, while
        the second assumes a loaded coin that always shows heads. Both are
        mathematically valid—the choice depends on the physical situation.
      </Callout>

      <h3>Example 2: Drawing Cards from Two Decks</h3>

      <p>
        <strong>Problem:</strong> If one card is drawn at random from each of
        two decks, what is the probability that at least one is the ace of
        hearts?
      </p>

      <p>
        <strong>Solution:</strong> The sample space consists of ordered pairs{' '}
        <InlineMath>(a, b)</InlineMath>, one card from each deck. There are{' '}
        <InlineMath>{'52^2'}</InlineMath> possible pairs, each with probability{' '}
        <InlineMath>{'1/52^2'}</InlineMath>.
      </p>

      <p>
        The event <InlineMath>A</InlineMath> consists of pairs where either{' '}
        <InlineMath>a</InlineMath> or <InlineMath>b</InlineMath> is the ace of
        hearts. There are <InlineMath>52 + 51 = 103</InlineMath> such pairs
        (52 with ace of hearts first, 51 with ace of hearts second excluding the
        double count).
      </p>
      <MathBlock>
        {'P(A) = \\frac{52 + 51}{52^2} = \\frac{103}{2704} = \\frac{1}{26} - \\frac{1}{52^2}'}
      </MathBlock>

      <h3>Example 3: Drawing Cards from One Deck</h3>

      <p>
        <strong>Problem:</strong> If two cards are drawn at random from one
        deck, what is the probability that one of them is the ace of hearts?
      </p>

      <p>
        <strong>Solution:</strong> Using ordered pairs, the sample space has{' '}
        <InlineMath>{'52 \\cdot 51'}</InlineMath> elements. The event has{' '}
        <InlineMath>51 + 51 = 102</InlineMath> elements.
      </p>
      <MathBlock>
        {'P(A) = \\frac{2 \\cdot 51}{52 \\cdot 51} = \\frac{1}{26}'}
      </MathBlock>

      <h3>Example 4: Rolling Three Dice</h3>

      <p>
        <strong>Problem:</strong> What is the probability of throwing 6 or less
        with three dice?
      </p>

      <p>
        <strong>Solution:</strong> Each outcome is a triple{' '}
        <InlineMath>(a, b, c)</InlineMath> with each component from 1 to 6. The
        sample space has <InlineMath>{'6^3 = 216'}</InlineMath> elements.
      </p>

      <p>
        The event <InlineMath>A</InlineMath> consists of triples satisfying{' '}
        <InlineMath>{'3 \\leq a + b + c \\leq 6'}</InlineMath>. We decompose:
      </p>
      <MathBlock>
        {'A = A_3 \\cup A_4 \\cup A_5 \\cup A_6'}
      </MathBlock>

      <p>
        where <InlineMath>{'A_n'}</InlineMath> is the set of triples with sum{' '}
        <InlineMath>n</InlineMath>. Direct enumeration gives:
      </p>
      <ul>
        <li><InlineMath>{'|A_3| = 1'}</InlineMath> (only (1,1,1))</li>
        <li><InlineMath>{'|A_4| = 3'}</InlineMath></li>
        <li><InlineMath>{'|A_5| = 6'}</InlineMath></li>
        <li><InlineMath>{'|A_6| = 10'}</InlineMath></li>
      </ul>

      <p>Therefore:</p>
      <MathBlock>
        {'P(A) = \\frac{20}{216} = \\frac{5}{54}'}
      </MathBlock>

      <h3>Example 5: Using Inclusion-Exclusion</h3>

      <p>
        <strong>Problem:</strong> A die is thrown once. What is the probability
        that the number is either even or a multiple of 3?
      </p>

      <p>
        <strong>Solution:</strong> With sample space{' '}
        <InlineMath>{'S = \\{1, 2, 3, 4, 5, 6\\}'}</InlineMath>:
      </p>
      <ul>
        <li>Event "even": <InlineMath>{'A = \\{2, 4, 6\\}'}</InlineMath></li>
        <li>Event "multiple of 3": <InlineMath>{'B = \\{3, 6\\}'}</InlineMath></li>
        <li>Union: <InlineMath>{'A \\cup B = \\{2, 3, 4, 6\\}'}</InlineMath></li>
      </ul>

      <p>
        Direct counting: <InlineMath>{'P(A \\cup B) = 4/6 = 2/3'}</InlineMath>.
      </p>

      <p>Alternatively, using inclusion-exclusion:</p>
      <MathBlock>
        {'P(A \\cup B) = P(A) + P(B) - P(A \\cap B) = \\frac{3}{6} + \\frac{2}{6} - \\frac{1}{6} = \\frac{4}{6}'}
      </MathBlock>

      <Callout type="success">
        <strong>Key Insight:</strong> When solving probability problems, always
        clearly specify: (1) the sample space, (2) the assignment of point
        probabilities, and (3) the event whose probability you are computing.
        When objects are chosen "at random," this means equally likely outcomes.
      </Callout>
    </LessonLayout>
  );
}
