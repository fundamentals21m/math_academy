import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section150() {
  return (
    <LessonLayout sectionId={150}>
      <h2>Finitely Additive Set Functions</h2>

      <p>
        Before studying probability, we develop the general theory of set
        functions. A set function assigns real numbers to sets, generalizing
        concepts like length, area, volume, and probability.
      </p>

      <h3>Definition of Set Functions</h3>

      <Callout type="info">
        <strong>Definition:</strong> Let <InlineMath>{`\\mathscr{B}`}</InlineMath> be
        a Boolean algebra of subsets of a set <InlineMath>S</InlineMath>. A{' '}
        <strong>set function</strong> <InlineMath>f</InlineMath> is a function
        that assigns to each set <InlineMath>A</InlineMath> in{' '}
        <InlineMath>{`\\mathscr{B}`}</InlineMath> a real number{' '}
        <InlineMath>{'f(A)'}</InlineMath>.
      </Callout>

      <h3>Boolean Algebras</h3>

      <p>
        A <strong>Boolean algebra</strong> <InlineMath>{`\\mathscr{B}`}</InlineMath>{' '}
        of subsets of <InlineMath>S</InlineMath> is a nonempty collection of
        subsets of <InlineMath>S</InlineMath> that is closed under the
        operations of complementation and union. That is:
      </p>

      <MathBlock>
        {`\\text{If } A \\in \\mathscr{B}, \\text{ then } A' \\in \\mathscr{B}`}
      </MathBlock>
      <MathBlock>
        {`\\text{If } A, B \\in \\mathscr{B}, \\text{ then } A \\cup B \\in \\mathscr{B}`}
      </MathBlock>

      <p>
        From these properties, it follows that a Boolean algebra is also closed
        under intersection (<InlineMath>{'A \\cap B'}</InlineMath>) and set
        difference (<InlineMath>{'A - B'}</InlineMath>).
      </p>

      <h3>Finite Additivity</h3>

      <Callout type="info">
        <strong>Definition:</strong> A set function <InlineMath>f</InlineMath>{' '}
        is called <strong>finitely additive</strong> if for every pair of
        disjoint sets <InlineMath>A</InlineMath> and <InlineMath>B</InlineMath>{' '}
        in <InlineMath>{`\\mathscr{B}`}</InlineMath>, we have:
        <MathBlock>
          f(A \cup B) = f(A) + f(B)
        </MathBlock>
      </Callout>

      <p>
        By induction, finite additivity extends to any finite collection of
        pairwise disjoint sets:
      </p>
      <MathBlock>
        {`f\\left(\\bigcup_{k=1}^{n} A_k\\right) = \\sum_{k=1}^{n} f(A_k)`}
      </MathBlock>
      <p>
        whenever the sets <InlineMath>{'A_1, A_2, \\ldots, A_n'}</InlineMath> are
        pairwise disjoint.
      </p>

      <h3>Properties of Additive Set Functions</h3>

      <p>
        If <InlineMath>f</InlineMath> is finitely additive and{' '}
        <InlineMath>{`\\varnothing \\in \\mathscr{B}`}</InlineMath>, then:
      </p>
      <MathBlock>
        {`f(\\varnothing) = 0`}
      </MathBlock>

      <p>
        This follows because{' '}
        <InlineMath>{`A = A \\cup \\varnothing`}</InlineMath>, so{' '}
        <InlineMath>{`f(A) = f(A) + f(\\varnothing)`}</InlineMath>.
      </p>

      <p>
        If <InlineMath>{'A \\subseteq B'}</InlineMath>, then{' '}
        <InlineMath>{'B = A \\cup (B - A)'}</InlineMath>, where{' '}
        <InlineMath>A</InlineMath> and <InlineMath>{'B - A'}</InlineMath> are
        disjoint. Therefore:
      </p>
      <MathBlock>
        f(B) = f(A) + f(B - A)
      </MathBlock>

      <h3>The Inclusion-Exclusion Principle</h3>

      <p>
        For any two sets <InlineMath>A</InlineMath> and{' '}
        <InlineMath>B</InlineMath> in a Boolean algebra (not necessarily
        disjoint):
      </p>
      <MathBlock>
        f(A \cup B) = f(A) + f(B) - f(A \cap B)
      </MathBlock>

      <p>
        This extends to three sets:
      </p>
      <MathBlock>
        {`f(A \\cup B \\cup C) = f(A) + f(B) + f(C) - f(A \\cap B) - f(A \\cap C) - f(B \\cap C) + f(A \\cap B \\cap C)`}
      </MathBlock>

      <Callout type="success">
        <strong>Key Insight:</strong> Finite additivity is the defining property
        that allows us to compute probabilities of complex events by breaking
        them into simpler disjoint pieces. The inclusion-exclusion principle
        extends this to overlapping events.
      </Callout>
    </LessonLayout>
  );
}
