import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section156() {
  return (
    <LessonLayout sectionId={156}>
      <h2>Conditional Probability</h2>

      <p>
        Often we want to know the probability of an event given that another
        event has occurred. For example: What is the probability that a die
        roll is divisible by 3, given that it is even?
      </p>

      <h3>Motivating Example</h3>

      <p>
        Consider rolling an unbiased die. The sample space is{' '}
        <InlineMath>{'S = \\{1, 2, 3, 4, 5, 6\\}'}</InlineMath> with each
        outcome having probability <InlineMath>1/6</InlineMath>.
      </p>

      <p>
        Let <InlineMath>{'A = \\{3, 6\\}'}</InlineMath> (divisible by 3) and{' '}
        <InlineMath>{'B = \\{2, 4, 6\\}'}</InlineMath> (even). If we know the
        result is even, we restrict to <InlineMath>B</InlineMath> as our new
        sample space. The only element in <InlineMath>B</InlineMath> divisible
        by 3 is 6, so the probability is <InlineMath>1/3</InlineMath>.
      </p>

      <h3>Definition of Conditional Probability</h3>

      <Callout type="info">
        <strong>Definition:</strong> Let <InlineMath>(S, \mathscr{B}, P)</InlineMath>{' '}
        be a probability space and let <InlineMath>B</InlineMath> be an event
        with <InlineMath>{'P(B) \\neq 0'}</InlineMath>. The{' '}
        <strong>conditional probability</strong> of <InlineMath>A</InlineMath>{' '}
        given <InlineMath>B</InlineMath> is:
        <MathBlock>
          {'P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)}'}
        </MathBlock>
      </Callout>

      <p>
        The conditional probability <InlineMath>{'P(A \\mid B)'}</InlineMath>{' '}
        is not defined when <InlineMath>{'P(B) = 0'}</InlineMath>.
      </p>

      <h3>Interpretation</h3>

      <p>
        When we condition on <InlineMath>B</InlineMath>, we are essentially:
      </p>
      <ol>
        <li>Changing the sample space from <InlineMath>S</InlineMath> to <InlineMath>B</InlineMath></li>
        <li>Rescaling all probabilities by dividing by <InlineMath>P(B)</InlineMath></li>
      </ol>

      <p>
        This ensures that <InlineMath>B</InlineMath> has probability 1 in the
        new probability space.
      </p>

      <h3>Verifying the Die Example</h3>

      <p>
        With <InlineMath>{'A = \\{3, 6\\}'}</InlineMath> and{' '}
        <InlineMath>{'B = \\{2, 4, 6\\}'}</InlineMath>:
      </p>
      <ul>
        <li><InlineMath>{'A \\cap B = \\{6\\}'}</InlineMath></li>
        <li><InlineMath>{'P(A \\cap B) = 1/6'}</InlineMath></li>
        <li><InlineMath>{'P(B) = 3/6 = 1/2'}</InlineMath></li>
      </ul>
      <MathBlock>
        {'P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)} = \\frac{1/6}{3/6} = \\frac{1}{3}'}
      </MathBlock>

      <h3>The Multiplication Rule</h3>

      <p>
        Rearranging the definition gives the <strong>multiplication rule</strong>:
      </p>
      <MathBlock>
        {'P(A \\cap B) = P(B) \\cdot P(A \\mid B) = P(A) \\cdot P(B \\mid A)'}
      </MathBlock>

      <p>
        This extends to multiple events. If{' '}
        <InlineMath>{'P(A_1 \\cap \\cdots \\cap A_{n-1}) \\neq 0'}</InlineMath>:
      </p>
      <MathBlock>
        {'P(A_1 \\cap \\cdots \\cap A_n) = P(A_1) \\cdot P(A_2 \\mid A_1) \\cdot P(A_3 \\mid A_1 \\cap A_2) \\cdots'}
      </MathBlock>

      <h3>Example: Biased Statistics</h3>

      <p>
        Consider a survey at an all-male college asking students about siblings.
        We want to find the probability a child is male, given the family has at
        least one boy.
      </p>

      <p>
        Suppose in 4<InlineMath>n</InlineMath> families with two children:{' '}
        <InlineMath>n</InlineMath> have 2 boys, <InlineMath>2n</InlineMath> have
        1 boy and 1 girl, and <InlineMath>n</InlineMath> have 2 girls.
      </p>

      <p>
        Let <InlineMath>A</InlineMath> = "child is a boy" and{' '}
        <InlineMath>B</InlineMath> = "family has at least one boy."
      </p>

      <ul>
        <li><InlineMath>{'P(A) = 1/2'}</InlineMath> (half of all children are boys)</li>
        <li><InlineMath>{'P(B) = 3/4'}</InlineMath> (3<InlineMath>n</InlineMath> of 4<InlineMath>n</InlineMath> families have at least one boy)</li>
        <li><InlineMath>{'P(A \\cap B) = P(A) = 1/2'}</InlineMath> (all boys come from families with at least one boy)</li>
      </ul>

      <MathBlock>
        {'P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)} = \\frac{1/2}{3/4} = \\frac{2}{3}'}
      </MathBlock>

      <Callout type="warning">
        <strong>Caution:</strong> This shows that conditioning can significantly
        change probabilities. The unconditional probability of being male is
        1/2, but the conditional probability given at least one male sibling is
        2/3. This illustrates how sampling bias can distort statistics.
      </Callout>

      <h3>Properties of Conditional Probability</h3>

      <p>
        For a fixed event <InlineMath>B</InlineMath> with{' '}
        <InlineMath>{'P(B) > 0'}</InlineMath>, the function{' '}
        <InlineMath>{'P(\\cdot \\mid B)'}</InlineMath> is itself a probability
        measure:
      </p>
      <ul>
        <li><InlineMath>{'P(A \\mid B) \\geq 0'}</InlineMath> for all <InlineMath>A</InlineMath></li>
        <li><InlineMath>{'P(B \\mid B) = 1'}</InlineMath></li>
        <li>If <InlineMath>{'A_1, A_2, \\ldots'}</InlineMath> are disjoint, then{' '}
          <InlineMath>{'P(\\bigcup A_i \\mid B) = \\sum P(A_i \\mid B)'}</InlineMath></li>
      </ul>

      <Callout type="success">
        <strong>Key Insight:</strong> Conditional probability is the fundamental
        tool for updating probabilities based on partial information. The
        formula <InlineMath>{'P(A \\mid B) = P(A \\cap B)/P(B)'}</InlineMath>{' '}
        tells us how to "zoom in" on the event <InlineMath>B</InlineMath> and
        recalculate probabilities within that restricted sample space.
      </Callout>
    </LessonLayout>
  );
}
