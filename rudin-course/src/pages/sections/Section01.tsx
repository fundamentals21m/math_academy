import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Theorem, Example } from '../../components/common/ContentBlocks';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section01() {
  return (
    <LessonLayout sectionId={1}>
      <h2 className="text-2xl font-semibold mb-4">Ordered Sets</h2>

      <p className="mb-4">
        In order to elucidate the structure of the real and complex number systems,
        we start with a brief discussion of the general concepts of <em>ordered set</em> and <em>field</em>.
        Here is some of the standard set-theoretic terminology that will be used throughout this book.
      </p>

      <Definition title="1.3 - Sets and Elements">
        <p className="mb-3">
          If <InlineMath>{'A'}</InlineMath> is any set (whose elements may be numbers or any other objects),
          we write <InlineMath>{'x \\in A'}</InlineMath> to indicate that <InlineMath>{'x'}</InlineMath> is
          a member (or an element) of <InlineMath>{'A'}</InlineMath>.
        </p>
        <p className="mb-3">
          If <InlineMath>{'x'}</InlineMath> is not a member of <InlineMath>{'A'}</InlineMath>,
          we write: <InlineMath>{'x \\notin A'}</InlineMath>.
        </p>
        <p className="mb-3">
          The set which contains no element will be called the <em>empty set</em>.
          If a set has at least one element, it is called <em>nonempty</em>.
        </p>
        <p className="mb-3">
          If <InlineMath>{'A'}</InlineMath> and <InlineMath>{'B'}</InlineMath> are sets, and if every
          element of <InlineMath>{'A'}</InlineMath> is an element of <InlineMath>{'B'}</InlineMath>,
          we say that <InlineMath>{'A'}</InlineMath> is a <em>subset</em> of <InlineMath>{'B'}</InlineMath>,
          and write <InlineMath>{'A \\subset B'}</InlineMath>, or <InlineMath>{'B \\supset A'}</InlineMath>.
        </p>
        <p>
          If, in addition, there is an element of <InlineMath>{'B'}</InlineMath> which is not
          in <InlineMath>{'A'}</InlineMath>, then <InlineMath>{'A'}</InlineMath> is said to be
          a <em>proper subset</em> of <InlineMath>{'B'}</InlineMath>. Note
          that <InlineMath>{'A \\subset A'}</InlineMath> for every set <InlineMath>{'A'}</InlineMath>.
        </p>
      </Definition>

      <Definition title="1.4 - The Rational Numbers">
        <p>
          Throughout Chapter 1, the set of all rational numbers will be denoted by <InlineMath>{'Q'}</InlineMath>.
        </p>
      </Definition>

      <Definition title="1.5 - Order">
        <p className="mb-3">
          Let <InlineMath>{'S'}</InlineMath> be a set. An <em>order</em> on <InlineMath>{'S'}</InlineMath> is
          a relation, denoted by <InlineMath>{'<'}</InlineMath>, with the following two properties:
        </p>
        <p className="mb-2">
          (i) If <InlineMath>{'x \\in S'}</InlineMath> and <InlineMath>{'y \\in S'}</InlineMath> then
          one and only one of the statements
        </p>
        <MathBlock>{'x < y, \\quad x = y, \\quad y < x'}</MathBlock>
        <p className="mb-2">is true.</p>
        <p className="mb-3">
          (ii) If <InlineMath>{'x, y, z \\in S'}</InlineMath>, if <InlineMath>{'x < y'}</InlineMath> and <InlineMath>{'y < z'}</InlineMath>,
          then <InlineMath>{'x < z'}</InlineMath>.
        </p>
        <p>
          The statement "<InlineMath>{'x < y'}</InlineMath>" may be read as "<InlineMath>{'x'}</InlineMath> is
          less than <InlineMath>{'y'}</InlineMath>" or "<InlineMath>{'x'}</InlineMath> is smaller
          than <InlineMath>{'y'}</InlineMath>" or "<InlineMath>{'x'}</InlineMath> precedes <InlineMath>{'y'}</InlineMath>".
        </p>
      </Definition>

      <Callout type="info">
        <p>
          It is often convenient to write <InlineMath>{'y > x'}</InlineMath> in place
          of <InlineMath>{'x < y'}</InlineMath>. The notation <InlineMath>{'x \\leq y'}</InlineMath> indicates
          that <InlineMath>{'x < y'}</InlineMath> or <InlineMath>{'x = y'}</InlineMath>, without
          specifying which of these two is to hold. In other words, <InlineMath>{'x \\leq y'}</InlineMath> is
          the negation of <InlineMath>{'x > y'}</InlineMath>.
        </p>
      </Callout>

      <Definition title="1.6 - Ordered Set">
        <p>
          An <em>ordered set</em> is a set <InlineMath>{'S'}</InlineMath> in which an order is defined.
          For example, <InlineMath>{'Q'}</InlineMath> is an ordered set if <InlineMath>{'r < s'}</InlineMath> is
          defined to mean that <InlineMath>{'s - r'}</InlineMath> is a positive rational number.
        </p>
      </Definition>

      <Definition title="1.7 - Bounded Above, Upper Bound">
        <p className="mb-3">
          Suppose <InlineMath>{'S'}</InlineMath> is an ordered set, and <InlineMath>{'E \\subset S'}</InlineMath>.
          If there exists a <InlineMath>{'\\beta \\in S'}</InlineMath> such
          that <InlineMath>{'x \\leq \\beta'}</InlineMath> for every <InlineMath>{'x \\in E'}</InlineMath>,
          we say that <InlineMath>{'E'}</InlineMath> is <em>bounded above</em>,
          and call <InlineMath>{'\\beta'}</InlineMath> an <em>upper bound</em> of <InlineMath>{'E'}</InlineMath>.
        </p>
        <p>
          Lower bounds are defined in the same way (with <InlineMath>{'\\geq'}</InlineMath> in
          place of <InlineMath>{'\\leq'}</InlineMath>).
        </p>
      </Definition>

      <Definition title="1.8 - Least Upper Bound (Supremum)">
        <p className="mb-3">
          Suppose <InlineMath>{'S'}</InlineMath> is an ordered set, <InlineMath>{'E \\subset S'}</InlineMath>,
          and <InlineMath>{'E'}</InlineMath> is bounded above. Suppose there exists
          an <InlineMath>{'\\alpha \\in S'}</InlineMath> with the following properties:
        </p>
        <p className="mb-2">(i) <InlineMath>{'\\alpha'}</InlineMath> is an upper bound of <InlineMath>{'E'}</InlineMath>.</p>
        <p className="mb-3">
          (ii) If <InlineMath>{'\\gamma < \\alpha'}</InlineMath> then <InlineMath>{'\\gamma'}</InlineMath> is
          not an upper bound of <InlineMath>{'E'}</InlineMath>.
        </p>
        <p className="mb-3">
          Then <InlineMath>{'\\alpha'}</InlineMath> is called the <em>least upper bound</em> of <InlineMath>{'E'}</InlineMath> [that
          there is at most one such <InlineMath>{'\\alpha'}</InlineMath> is clear from (ii)]
          or the <em>supremum</em> of <InlineMath>{'E'}</InlineMath>, and we write
        </p>
        <MathBlock>{'\\alpha = \\sup E'}</MathBlock>
        <p className="mb-3">
          The <em>greatest lower bound</em>, or <em>infimum</em>, of a set <InlineMath>{'E'}</InlineMath> which
          is bounded below is defined in the same manner: The statement
        </p>
        <MathBlock>{'\\alpha = \\inf E'}</MathBlock>
        <p>
          means that <InlineMath>{'\\alpha'}</InlineMath> is a lower bound of <InlineMath>{'E'}</InlineMath> and
          that no <InlineMath>{'\\beta'}</InlineMath> with <InlineMath>{'\\beta > \\alpha'}</InlineMath> is
          a lower bound of <InlineMath>{'E'}</InlineMath>.
        </p>
      </Definition>

      <Example title="1.9 - Examples of Suprema and Infima">
        <p className="mb-3">
          <strong>(a)</strong> Consider the sets <InlineMath>{'A'}</InlineMath> and <InlineMath>{'B'}</InlineMath> of
          Example 1.1 as subsets of the ordered set <InlineMath>{'Q'}</InlineMath>. The
          set <InlineMath>{'A'}</InlineMath> is bounded above. In fact, the upper bounds
          of <InlineMath>{'A'}</InlineMath> are exactly the members of <InlineMath>{'B'}</InlineMath>.
          Since <InlineMath>{'B'}</InlineMath> contains no smallest member, <InlineMath>{'A'}</InlineMath> has
          no least upper bound in <InlineMath>{'Q'}</InlineMath>.
        </p>
        <p className="mb-3">
          Similarly, <InlineMath>{'B'}</InlineMath> is bounded below: The set of all lower bounds
          of <InlineMath>{'B'}</InlineMath> consists of <InlineMath>{'A'}</InlineMath> and of
          all <InlineMath>{'r \\in Q'}</InlineMath> with <InlineMath>{'r \\leq 0'}</InlineMath>.
          Since <InlineMath>{'A'}</InlineMath> has no largest member, <InlineMath>{'B'}</InlineMath> has
          no greatest lower bound in <InlineMath>{'Q'}</InlineMath>.
        </p>
        <p className="mb-3">
          <strong>(b)</strong> If <InlineMath>{'\\alpha = \\sup E'}</InlineMath> exists,
          then <InlineMath>{'\\alpha'}</InlineMath> may or may not be a member of <InlineMath>{'E'}</InlineMath>.
          For instance, let <InlineMath>{'E_1'}</InlineMath> be the set of all <InlineMath>{'r \\in Q'}</InlineMath> with <InlineMath>{'r < 0'}</InlineMath>.
          Let <InlineMath>{'E_2'}</InlineMath> be the set of all <InlineMath>{'r \\in Q'}</InlineMath> with <InlineMath>{'r \\leq 0'}</InlineMath>. Then
        </p>
        <MathBlock>{'\\sup E_1 = \\sup E_2 = 0'}</MathBlock>
        <p className="mb-3">
          and <InlineMath>{'0 \\notin E_1'}</InlineMath>, <InlineMath>{'0 \\in E_2'}</InlineMath>.
        </p>
        <p>
          <strong>(c)</strong> Let <InlineMath>{'E'}</InlineMath> consist of all numbers <InlineMath>{'1/n'}</InlineMath>,
          where <InlineMath>{'n = 1, 2, 3, \\ldots'}</InlineMath>
          Then <InlineMath>{'\\sup E = 1'}</InlineMath>, which is in <InlineMath>{'E'}</InlineMath>,
          and <InlineMath>{'\\inf E = 0'}</InlineMath>, which is not in <InlineMath>{'E'}</InlineMath>.
        </p>
      </Example>

      <Definition title="1.10 - Least-Upper-Bound Property">
        <p>
          An ordered set <InlineMath>{'S'}</InlineMath> is said to have the <em>least-upper-bound property</em> if
          the following is true: If <InlineMath>{'E \\subset S'}</InlineMath>, <InlineMath>{'E'}</InlineMath> is
          not empty, and <InlineMath>{'E'}</InlineMath> is bounded above,
          then <InlineMath>{'\\sup E'}</InlineMath> exists in <InlineMath>{'S'}</InlineMath>.
        </p>
      </Definition>

      <Callout type="warning" title="Important">
        <p>
          Example 1.9(a) shows that <InlineMath>{'Q'}</InlineMath> does not have the least-upper-bound property.
          We shall now show that there is a close relation between greatest lower bounds and least
          upper bounds, and that every ordered set with the least-upper-bound property also has
          the greatest-lower-bound property.
        </p>
      </Callout>

      <Theorem
        title="1.11 - Infimum from Supremum"
        proof={
          <>
            <p className="mb-3">
              Since <InlineMath>{'B'}</InlineMath> is bounded below, <InlineMath>{'L'}</InlineMath> is
              not empty. Since <InlineMath>{'L'}</InlineMath> consists of exactly
              those <InlineMath>{'y \\in S'}</InlineMath> which satisfy the
              inequality <InlineMath>{'y \\leq x'}</InlineMath> for
              every <InlineMath>{'x \\in B'}</InlineMath>, we see that every <InlineMath>{'x \\in B'}</InlineMath> is
              an upper bound of <InlineMath>{'L'}</InlineMath>. Thus <InlineMath>{'L'}</InlineMath> is bounded above.
              Our hypothesis about <InlineMath>{'S'}</InlineMath> implies therefore
              that <InlineMath>{'L'}</InlineMath> has a supremum in <InlineMath>{'S'}</InlineMath>;
              call it <InlineMath>{'\\alpha'}</InlineMath>.
            </p>
            <p className="mb-3">
              If <InlineMath>{'\\gamma < \\alpha'}</InlineMath> then (see Definition 1.8) <InlineMath>{'\\gamma'}</InlineMath> is
              not an upper bound of <InlineMath>{'L'}</InlineMath>,
              hence <InlineMath>{'\\gamma \\notin B'}</InlineMath>. It follows
              that <InlineMath>{'\\alpha \\leq x'}</InlineMath> for every <InlineMath>{'x \\in B'}</InlineMath>.
              Thus <InlineMath>{'\\alpha \\in L'}</InlineMath>.
            </p>
            <p className="mb-3">
              If <InlineMath>{'\\alpha < \\beta'}</InlineMath> then <InlineMath>{'\\beta \\notin L'}</InlineMath>,
              since <InlineMath>{'\\alpha'}</InlineMath> is an upper bound of <InlineMath>{'L'}</InlineMath>.
            </p>
            <p>
              We have shown that <InlineMath>{'\\alpha \\in L'}</InlineMath> but <InlineMath>{'\\beta \\notin L'}</InlineMath> if <InlineMath>{'\\beta > \\alpha'}</InlineMath>.
              In other words, <InlineMath>{'\\alpha'}</InlineMath> is a lower bound of <InlineMath>{'B'}</InlineMath>,
              but <InlineMath>{'\\beta'}</InlineMath> is not if <InlineMath>{'\\beta > \\alpha'}</InlineMath>.
              This means that <InlineMath>{'\\alpha = \\inf B'}</InlineMath>.
            </p>
          </>
        }
      >
        <p className="mb-3">
          Suppose <InlineMath>{'S'}</InlineMath> is an ordered set with the least-upper-bound property,
          <InlineMath>{'B \\subset S'}</InlineMath>, <InlineMath>{'B'}</InlineMath> is not empty,
          and <InlineMath>{'B'}</InlineMath> is bounded below. Let <InlineMath>{'L'}</InlineMath> be
          the set of all lower bounds of <InlineMath>{'B'}</InlineMath>. Then
        </p>
        <MathBlock>{'\\alpha = \\sup L'}</MathBlock>
        <p>
          exists in <InlineMath>{'S'}</InlineMath>, and <InlineMath>{'\\alpha = \\inf B'}</InlineMath>.
          In particular, <InlineMath>{'\\inf B'}</InlineMath> exists in <InlineMath>{'S'}</InlineMath>.
        </p>
      </Theorem>

      <h3 className="text-xl font-semibold mt-8 mb-4">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-2 text-dark-300">
        <li>An order on a set is a relation satisfying trichotomy and transitivity</li>
        <li>An ordered set is a set with a defined order relation</li>
        <li>A set is bounded above if there exists an upper bound</li>
        <li>The supremum (least upper bound) is the smallest upper bound, if it exists</li>
        <li>The infimum (greatest lower bound) is the largest lower bound, if it exists</li>
        <li>The least-upper-bound property states that every nonempty bounded-above set has a supremum</li>
        <li><InlineMath>{'Q'}</InlineMath> does not have the least-upper-bound property</li>
        <li>If a set has the least-upper-bound property, it also has the greatest-lower-bound property</li>
      </ul>
    </LessonLayout>
  );
}
