import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';

export default function Section161() {
  return (
    <LessonLayout sectionId={161}>
      <h2>Countable and Uncountable Sets</h2>

      <p>
        To extend probability theory to infinite sample spaces, we must
        distinguish between two types of infinite sets:{' '}
        <strong>countable</strong> and <strong>uncountable</strong>.
      </p>

      <h3>One-to-One Correspondence</h3>

      <Callout type="info">
        <strong>Definition:</strong> Two sets <InlineMath>A</InlineMath> and{' '}
        <InlineMath>B</InlineMath> are in <strong>one-to-one correspondence</strong>{' '}
        (written <InlineMath>{'A \\sim B'}</InlineMath>) if there exists a
        function <InlineMath>f</InlineMath> such that:
        <ul>
          <li>The domain of <InlineMath>f</InlineMath> is <InlineMath>A</InlineMath>{' '}
            and the range is <InlineMath>B</InlineMath></li>
          <li><InlineMath>f</InlineMath> is <strong>one-to-one</strong>:{' '}
            <InlineMath>{'x \\neq y'}</InlineMath> implies{' '}
            <InlineMath>{'f(x) \\neq f(y)'}</InlineMath></li>
        </ul>
        Two such sets are also called <strong>equivalent</strong>.
      </Callout>

      <h3>Countable Sets</h3>

      <Callout type="info">
        <strong>Definitions:</strong>
        <ul>
          <li>A set <InlineMath>S</InlineMath> is <strong>finite</strong> with{' '}
            <InlineMath>n</InlineMath> elements if{' '}
            <InlineMath>{'S \\sim \\{1, 2, \\ldots, n\\}'}</InlineMath></li>
          <li>A set <InlineMath>S</InlineMath> is <strong>countably infinite</strong>{' '}
            if <InlineMath>{'S \\sim \\{1, 2, 3, \\ldots\\}'}</InlineMath></li>
          <li>A set is <strong>countable</strong> if it is finite or countably infinite</li>
          <li>A set is <strong>uncountable</strong> if it is not countable</li>
        </ul>
      </Callout>

      <h3>Important Property</h3>

      <p>
        An infinite set can be equivalent to a proper subset of itself. For
        example, the positive integers{' '}
        <InlineMath>{'P = \\{1, 2, 3, \\ldots\\}'}</InlineMath> are equivalent to
        the even integers <InlineMath>{'\\{2, 4, 6, \\ldots\\}'}</InlineMath> via
        the function <InlineMath>{'f(x) = 2x'}</InlineMath>.
      </p>

      <h3>Properties of Countable Sets</h3>

      <p>Countable sets are closed under several operations:</p>
      <ul>
        <li><strong>(a)</strong> Every subset of a countable set is countable</li>
        <li><strong>(b)</strong> The intersection of countable sets is countable</li>
        <li><strong>(c)</strong> A countable union of countable sets is countable</li>
        <li><strong>(d)</strong> A finite Cartesian product of countable sets is countable</li>
      </ul>

      <h3>Example 1: The Integers</h3>

      <p>
        The set <InlineMath>{'\\mathbb{Z}'}</InlineMath> of all integers
        (positive, negative, and zero) is countable.
      </p>

      <p>
        <strong>Proof:</strong> Define{' '}
        <InlineMath>{'f(n) = 2n'}</InlineMath> if <InlineMath>n</InlineMath> is
        positive, and <InlineMath>{'f(n) = 2|n| + 1'}</InlineMath> if{' '}
        <InlineMath>n</InlineMath> is negative or zero. This gives a one-to-one
        correspondence with the positive integers.
      </p>

      <h3>Example 2: The Rational Numbers</h3>

      <p>
        The set <InlineMath>{'\\mathbb{Q}'}</InlineMath> of all rational numbers
        is countable.
      </p>

      <p>
        <strong>Proof:</strong> For each integer <InlineMath>{'n \\geq 1'}</InlineMath>,
        let <InlineMath>{'S_n'}</InlineMath> be the set of rationals{' '}
        <InlineMath>x/n</InlineMath> where <InlineMath>x</InlineMath> is an
        integer. Each <InlineMath>{'S_n'}</InlineMath> is countable (equivalent
        to <InlineMath>{'\\mathbb{Z}'}</InlineMath>). Since{' '}
        <InlineMath>{'\\mathbb{Q} = \\bigcup_{n=1}^{\\infty} S_n'}</InlineMath>,
        and countable unions of countable sets are countable,{' '}
        <InlineMath>{'\\mathbb{Q}'}</InlineMath> is countable.
      </p>

      <h3>Example 3: Finite Subsets</h3>

      <p>
        The collection of all finite subsets of a countable set is countable.
      </p>

      <h3>The Power Set is Uncountable</h3>

      <Callout type="warning">
        <strong>Theorem:</strong> The collection of <strong>all</strong> subsets
        of a countably infinite set is <strong>uncountable</strong>.
      </Callout>

      <p>
        <strong>Proof (by contradiction):</strong> Let{' '}
        <InlineMath>{'A = \\{a_1, a_2, a_3, \\ldots\\}'}</InlineMath> be countably
        infinite and suppose the power set <InlineMath>{'\\mathcal{P}(A)'}</InlineMath>{' '}
        is countable. Then there's a bijection <InlineMath>f</InlineMath> from{' '}
        <InlineMath>A</InlineMath> to <InlineMath>{'\\mathcal{P}(A)'}</InlineMath>.
      </p>

      <p>
        Define <InlineMath>{'B = \\{a \\in A : a \\notin f(a)\\}'}</InlineMath>.
        Since <InlineMath>{'B \\subseteq A'}</InlineMath>, we have{' '}
        <InlineMath>{'B = f(b)'}</InlineMath> for some <InlineMath>b \in A</InlineMath>.
        But then <InlineMath>{'b \\in B'}</InlineMath> iff{' '}
        <InlineMath>{'b \\notin f(b) = B'}</InlineMath>, a contradiction.
      </p>

      <h3>The Real Numbers are Uncountable</h3>

      <Callout type="info">
        <strong>Theorem (Cantor):</strong> The set of real numbers in the
        interval <InlineMath>{'(0, 1)'}</InlineMath> is uncountable.
      </Callout>

      <p>
        <strong>Proof (diagonalization):</strong> Suppose{' '}
        <InlineMath>{'\\{x_1, x_2, x_3, \\ldots\\}'}</InlineMath> lists all reals
        in <InlineMath>{'(0, 1)'}</InlineMath>. Write each as a decimal:
      </p>
      <MathBlock>
        {'x_n = 0.a_{n,1} a_{n,2} a_{n,3} \\cdots'}
      </MathBlock>

      <p>
        Construct <InlineMath>{'y = 0.y_1 y_2 y_3 \\cdots'}</InlineMath> where:
      </p>
      <MathBlock>
        {'y_n = \\begin{cases} 1 & \\text{if } a_{n,n} \\neq 1 \\\\ 2 & \\text{if } a_{n,n} = 1 \\end{cases}'}
      </MathBlock>

      <p>
        Then <InlineMath>y</InlineMath> differs from each{' '}
        <InlineMath>{'x_n'}</InlineMath> in the <InlineMath>n</InlineMath>th
        decimal place, so <InlineMath>{'y \\neq x_n'}</InlineMath> for all{' '}
        <InlineMath>n</InlineMath>. This contradicts the assumption that all
        reals were listed.
      </p>

      <Callout type="success">
        <strong>Key Insight:</strong> There are different "sizes" of infinity.
        The rationals, though dense in the reals, are countable, while the reals
        are uncountable. This has profound implications for probability theory:
        probability measures on countable spaces can be defined by specifying
        point probabilities, but uncountable spaces require more sophisticated
        measure-theoretic tools.
      </Callout>
    </LessonLayout>
  );
}
