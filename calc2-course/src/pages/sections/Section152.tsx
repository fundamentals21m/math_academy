import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section152() {
  return (
    <LessonLayout sectionId={152}>
      <h2>Probability for Finite Sample Spaces</h2>

      <p>
        We now specialize our study of measures to define probability. A
        probability measure is simply a normalized measure on a Boolean algebra
        of events.
      </p>

      <h3>Definition of Probability Measure</h3>

      <Callout type="info">
        <strong>Definition:</strong> A finitely additive measure{' '}
        <InlineMath>P</InlineMath> on a Boolean algebra{' '}
        <InlineMath>{`\\mathscr{B}`}</InlineMath> is called a{' '}
        <strong>probability measure</strong> if it satisfies:
        <ul>
          <li><InlineMath>P</InlineMath> is finitely additive</li>
          <li><InlineMath>P</InlineMath> is nonnegative</li>
          <li><InlineMath>{'P(S) = 1'}</InlineMath></li>
        </ul>
      </Callout>

      <p>
        In other words, for finite sample spaces, probability is simply a
        measure that assigns the value 1 to the entire sample space.
      </p>

      <h3>The Probability Space</h3>

      <p>
        A complete description of a probability measure requires three things:
      </p>
      <ul>
        <li>The <strong>sample space</strong> <InlineMath>S</InlineMath></li>
        <li>
          The <strong>Boolean algebra</strong>{' '}
          <InlineMath>{`\\mathscr{B}`}</InlineMath> of events
        </li>
        <li>
          The <strong>probability measure</strong> <InlineMath>P</InlineMath>
        </li>
      </ul>
      <p>
        The triple <InlineMath>{'(S, \\mathscr{B}, P)'}</InlineMath> is called a{' '}
        <strong>probability space</strong>.
      </p>

      <h3>Example: Coin Tossing</h3>

      <p>
        Consider tossing a coin once. The sample space is{' '}
        <InlineMath>{'S = \\{h, t\\}'}</InlineMath> (heads and tails). For the
        Boolean algebra, we take all subsets:{' '}
        <InlineMath>{`\\mathscr{B} = \\{\\varnothing, S, H, T\\}`}</InlineMath>,
        where <InlineMath>{'H = \\{h\\}'}</InlineMath> and{' '}
        <InlineMath>{'T = \\{t\\}'}</InlineMath>.
      </p>

      <p>
        We must have <InlineMath>{'P(S) = 1'}</InlineMath> and{' '}
        <InlineMath>{'P(\\varnothing) = 0'}</InlineMath>. Since{' '}
        <InlineMath>H</InlineMath> and <InlineMath>T</InlineMath> are disjoint
        with union <InlineMath>S</InlineMath>, additivity requires:
      </p>
      <MathBlock>
        P(H) + P(T) = P(S) = 1
      </MathBlock>

      <p>
        For an unbiased coin, we assign{' '}
        <InlineMath>{'P(H) = P(T) = \\frac{1}{2}'}</InlineMath>. For a biased
        coin, we could assign <InlineMath>{'P(H) = p'}</InlineMath> and{' '}
        <InlineMath>{'P(T) = 1 - p'}</InlineMath> for any{' '}
        <InlineMath>{'0 \\leq p \\leq 1'}</InlineMath>.
      </p>

      <h3>Point Probabilities</h3>

      <p>
        For a finite sample space{' '}
        <InlineMath>{'S = \\{a_1, a_2, \\ldots, a_n\\}'}</InlineMath>, if{' '}
        <InlineMath>{`\\mathscr{B}`}</InlineMath> consists of all subsets of{' '}
        <InlineMath>S</InlineMath>, the probability function{' '}
        <InlineMath>P</InlineMath> is completely determined by the{' '}
        <strong>point probabilities</strong>:
      </p>
      <MathBlock>
        {`P(\\{a_1\\}), P(\\{a_2\\}), \\ldots, P(\\{a_n\\})`}
      </MathBlock>

      <p>
        Every subset <InlineMath>A</InlineMath> of <InlineMath>S</InlineMath> is
        a disjoint union of singletons, so:
      </p>
      <MathBlock>
        {`P(A) = \\sum_{a_i \\in A} P(\\{a_i\\})`}
      </MathBlock>

      <p>
        We often write <InlineMath>{'P(a_i)'}</InlineMath> instead of{' '}
        <InlineMath>{'P(\\{a_i\\})'}</InlineMath> for simplicity.
      </p>

      <h3>Equally Likely Outcomes</h3>

      <p>
        When all outcomes are <strong>equally likely</strong>, each point has
        probability <InlineMath>{'1/n'}</InlineMath>:
      </p>
      <MathBlock>
        {`P(a_i) = \\frac{1}{n} \\quad \\text{for } i = 1, 2, \\ldots, n`}
      </MathBlock>

      <p>
        For a subset <InlineMath>A</InlineMath> with <InlineMath>k</InlineMath>{' '}
        elements:
      </p>
      <MathBlock>
        {`P(A) = \\frac{k}{n} = \\frac{|A|}{|S|}`}
      </MathBlock>

      <Callout type="success">
        <strong>Key Insight:</strong> For finite sample spaces with equally
        likely outcomes, probability reduces to counting: the probability of an
        event is the ratio of favorable outcomes to total outcomes. This is the
        classical or "Laplacian" definition of probability, but it requires
        knowing that outcomes are equally likely—which itself requires
        probability theory to define rigorously.
      </Callout>
    </LessonLayout>
  );
}
