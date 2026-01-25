import { LessonLayout } from '@/components/layout';
import { Definition, Theorem, Example } from '@/components/common';
import { Callout } from '@/components/common';
import { Math, MathBlock } from '@/components/common';

export default function Section04() {
  return (
    <LessonLayout sectionId={4}>
      {/* Introduction */}
      <p className="text-lg text-dark-200 mb-6">
        In the previous section we have proven all the basic facts that we know to be true
        about addition and order. To save space and to avoid belaboring the obvious, we will
        now allow ourselves to use all the rules of algebra concerning addition and order that
        we are familiar with, without further comment.
      </p>

      <p className="text-dark-300 mb-6">
        Now we introduce <strong className="text-indigo-400">multiplication</strong>. Just as
        addition is the iterated increment operation, multiplication is{' '}
        <em>iterated addition</em>.
      </p>

      {/* Definition 2.3.1 */}
      <Definition title="Definition 2.3.1 (Multiplication of Natural Numbers)">
        <p className="mb-3">
          Let <Math>{'m'}</Math> be a natural number. To multiply zero to <Math>{'m'}</Math>,
          we define:
        </p>
        <MathBlock>{`0 \\times m := 0`}</MathBlock>
        <p className="mb-3">
          Now suppose inductively that we have defined how to multiply <Math>{'n'}</Math> to{' '}
          <Math>{'m'}</Math>. Then we can multiply <Math>{'n\\texttt{++}'}</Math> to{' '}
          <Math>{'m'}</Math> by defining:
        </p>
        <MathBlock>{`(n\\texttt{++}) \\times m := (n \\times m) + m`}</MathBlock>
      </Definition>

      <Example title="Example: How Multiplication Works">
        <p className="mb-3">Using this definition:</p>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>
            <Math>{'0 \\times m = 0'}</Math> (by the base case)
          </li>
          <li>
            <Math>{'1 \\times m = 0 + m = m'}</Math>
          </li>
          <li>
            <Math>{'2 \\times m = 0 + m + m'}</Math>
          </li>
          <li>
            <Math>{'3 \\times m = 0 + m + m + m'}</Math>
          </li>
        </ul>
        <p className="mt-3 text-dark-400">
          By induction one can easily verify that the product of two natural numbers is a
          natural number.
        </p>
      </Example>

      {/* Commutativity */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-6">
        Basic Properties of Multiplication
      </h2>

      <Theorem title="Lemma 2.3.2 (Multiplication is Commutative)" type="lemma">
        <p className="mb-3">
          Let <Math>{'n, m'}</Math> be natural numbers. Then <Math>{'n \\times m = m \\times n'}</Math>.
        </p>
        <p className="text-dark-400 italic">
          Proof: See Exercise 2.3.1. (Hint: modify the proofs of Lemmas 2.2.2, 2.2.3 and
          Proposition 2.2.4.)
        </p>
      </Theorem>

      <Callout type="info">
        <strong>Notation Convention</strong>
        <p className="mt-2">
          We will now abbreviate <Math>{'n \\times m'}</Math> as <Math>{'nm'}</Math>, and use
          the usual convention that multiplication takes precedence over addition. Thus for
          instance <Math>{'ab + c'}</Math> means <Math>{'(a \\times b) + c'}</Math>, not{' '}
          <Math>{'a \\times (b + c)'}</Math>.
        </p>
      </Callout>

      {/* Zero Divisors */}
      <Theorem title="Lemma 2.3.3 (Natural Numbers Have No Zero Divisors)" type="lemma">
        <p className="mb-3">
          Let <Math>{'n, m'}</Math> be natural numbers. Then <Math>{'n \\times m = 0'}</Math>{' '}
          if and only if at least one of <Math>{'n, m'}</Math> is equal to zero.
        </p>
        <p className="mb-3">
          In particular, <strong className="text-amber-300">if <Math>{'n'}</Math> and{' '}
          <Math>{'m'}</Math> are both positive, then <Math>{'nm'}</Math> is also positive</strong>.
        </p>
        <p className="text-dark-400 italic">
          Proof: See Exercise 2.3.2. (Hint: prove the second statement first.)
        </p>
      </Theorem>

      {/* Distributive Law */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-6">
        The Distributive Law
      </h2>

      <Theorem title="Proposition 2.3.4 (Distributive Law)">
        <p className="mb-3">
          For any natural numbers <Math>{'a, b, c'}</Math>, we have:
        </p>
        <MathBlock>{`a(b + c) = ab + ac \\quad \\text{and} \\quad (b + c)a = ba + ca`}</MathBlock>
        <div className="mt-4 p-4 bg-dark-800 rounded-lg border border-dark-700">
          <p className="text-dark-300 font-medium mb-2">Proof:</p>
          <p className="text-dark-400">
            Since multiplication is commutative we only need to show the first identity{' '}
            <Math>{'a(b + c) = ab + ac'}</Math>. We keep <Math>{'a'}</Math> and{' '}
            <Math>{'b'}</Math> fixed, and use induction on <Math>{'c'}</Math>.
          </p>
          <p className="text-dark-400 mt-2">
            <strong>Base case:</strong> Let's prove the base case <Math>{'c = 0'}</Math>, i.e.,{' '}
            <Math>{'a(b + 0) = ab + a \\cdot 0'}</Math>. The left-hand side is{' '}
            <Math>{'ab'}</Math>, while the right-hand side is <Math>{'ab + 0 = ab'}</Math>,
            so we are done with the base case.
          </p>
          <p className="text-dark-400 mt-2">
            <strong>Inductive step:</strong> Now let us suppose inductively that{' '}
            <Math>{'a(b + c) = ab + ac'}</Math>, and let us prove that{' '}
            <Math>{'a(b + (c\\texttt{++})) = ab + a(c\\texttt{++})'}</Math>.
          </p>
          <p className="text-dark-400 mt-2">
            The left-hand side is <Math>{'a((b + c)\\texttt{++}) = a(b + c) + a'}</Math>,
            while the right-hand side is <Math>{'ab + ac + a = a(b + c) + a'}</Math> by the
            induction hypothesis, and so we can close the induction. <span className="float-right">&#9633;</span>
          </p>
        </div>
      </Theorem>

      {/* Associativity */}
      <Theorem title="Proposition 2.3.5 (Multiplication is Associative)">
        <p className="mb-3">
          For any natural numbers <Math>{'a, b, c'}</Math>, we have{' '}
          <Math>{'(a \\times b) \\times c = a \\times (b \\times c)'}</Math>.
        </p>
        <p className="text-dark-400 italic">
          Proof: See Exercise 2.3.3. (Hint: modify the proof of Proposition 2.2.5 and use the
          distributive law.)
        </p>
      </Theorem>

      {/* Order and Multiplication */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-6">
        Multiplication and Order
      </h2>

      <Theorem title="Proposition 2.3.6 (Multiplication Preserves Order)">
        <p className="mb-3">
          If <Math>{'a, b'}</Math> are natural numbers such that <Math>{'a < b'}</Math>, and{' '}
          <Math>{'c'}</Math> is positive, then <Math>{'ac < bc'}</Math>.
        </p>
        <div className="mt-4 p-4 bg-dark-800 rounded-lg border border-dark-700">
          <p className="text-dark-300 font-medium mb-2">Proof:</p>
          <p className="text-dark-400">
            Since <Math>{'a < b'}</Math>, we have <Math>{'b = a + d'}</Math> for some positive{' '}
            <Math>{'d'}</Math>. Multiplying by <Math>{'c'}</Math> and using the distributive
            law we obtain <Math>{'bc = ac + dc'}</Math>. Since <Math>{'d'}</Math> is positive,
            and <Math>{'c'}</Math> is positive, <Math>{'dc'}</Math> is positive (by Lemma 2.3.3),
            and hence <Math>{'ac < bc'}</Math> as desired. <span className="float-right">&#9633;</span>
          </p>
        </div>
      </Theorem>

      <Theorem title="Corollary 2.3.7 (Cancellation Law)" type="corollary">
        <p className="mb-3">
          Let <Math>{'a, b, c'}</Math> be natural numbers such that <Math>{'ac = bc'}</Math>{' '}
          and <Math>{'c'}</Math> is non-zero. Then <Math>{'a = b'}</Math>.
        </p>
        <Callout type="info">
          <strong>Virtual Division</strong>
          <p className="mt-2">
            Just as Proposition 2.2.6 (the cancellation law for addition) will allow for a
            "virtual subtraction" which will eventually let us define genuine subtraction,
            this corollary provides a <strong>"virtual division"</strong> which will be needed
            to define genuine division later on.
          </p>
        </Callout>
        <div className="mt-4 p-4 bg-dark-800 rounded-lg border border-dark-700">
          <p className="text-dark-300 font-medium mb-2">Proof:</p>
          <p className="text-dark-400">
            By the trichotomy of order (Proposition 2.2.13), we have three cases:{' '}
            <Math>{'a < b'}</Math>, <Math>{'a = b'}</Math>, <Math>{'a > b'}</Math>.
          </p>
          <p className="text-dark-400 mt-2">
            Suppose first that <Math>{'a < b'}</Math>, then by Proposition 2.3.6 we have{' '}
            <Math>{'ac < bc'}</Math>, a contradiction (since we assumed <Math>{'ac = bc'}</Math>).
            We can obtain a similar contradiction when <Math>{'a > b'}</Math>.
          </p>
          <p className="text-dark-400 mt-2">
            Thus the only possibility is that <Math>{'a = b'}</Math>, as desired. <span className="float-right">&#9633;</span>
          </p>
        </div>
      </Theorem>

      <p className="text-dark-300 mb-6">
        With these propositions it is easy to deduce all the familiar rules of algebra
        involving addition and multiplication. Now that we have the familiar operations of
        addition and multiplication, the more primitive notion of increment will begin to fall
        by the wayside, and we will see it rarely from now on. In any event we can always use
        addition to describe incrementation, since <Math>{'n\\texttt{++} = n + 1'}</Math>.
      </p>

      {/* Euclidean Algorithm */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-6">
        The Euclidean Algorithm
      </h2>

      <Theorem title="Proposition 2.3.9 (Euclidean Algorithm)">
        <p className="mb-3">
          Let <Math>{'n'}</Math> be a natural number, and let <Math>{'q'}</Math> be a positive
          number. Then there exist natural numbers <Math>{'m, r'}</Math> such that{' '}
          <Math>{'0 \\leq r < q'}</Math> and <Math>{'n = mq + r'}</Math>.
        </p>
        <p className="text-dark-400 italic">
          Proof: See Exercise 2.3.5. (Hint: fix <Math>{'q'}</Math> and induct on <Math>{'n'}</Math>.)
        </p>
      </Theorem>

      <Callout type="info">
        <strong>Division with Remainder</strong>
        <p className="mt-2">
          In other words, we can divide a natural number <Math>{'n'}</Math> by a positive
          number <Math>{'q'}</Math> to obtain a <strong>quotient</strong> <Math>{'m'}</Math>{' '}
          (which is another natural number) and a <strong>remainder</strong> <Math>{'r'}</Math>{' '}
          (which is less than <Math>{'q'}</Math>). This algorithm marks the beginning of{' '}
          <em>number theory</em>, which is a beautiful and important subject but one which is
          beyond the scope of this text.
        </p>
      </Callout>

      {/* Exponentiation */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-6">
        Exponentiation
      </h2>

      <p className="text-dark-300 mb-6">
        Just like one uses the increment operation to recursively define addition, and addition
        to recursively define multiplication, one can use multiplication to recursively define{' '}
        <strong className="text-indigo-400">exponentiation</strong>.
      </p>

      <Definition title="Definition 2.3.11 (Exponentiation for Natural Numbers)">
        <p className="mb-3">
          Let <Math>{'m'}</Math> be a natural number. To raise <Math>{'m'}</Math> to the
          power 0, we define:
        </p>
        <MathBlock>{`m^0 := 1`}</MathBlock>
        <p className="mb-3">
          Now suppose recursively that <Math>{'m^n'}</Math> has been defined for some natural
          number <Math>{'n'}</Math>, then we define:
        </p>
        <MathBlock>{`m^{n\\texttt{++}} := m^n \\times m`}</MathBlock>
      </Definition>

      <Example title="Examples 2.3.12: Computing Powers">
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>
            <Math>{'x^1 = x^0 \\times x = 1 \\times x = x'}</Math>
          </li>
          <li>
            <Math>{'x^2 = x^1 \\times x = x \\times x'}</Math>
          </li>
          <li>
            <Math>{'x^3 = x^2 \\times x = x \\times x \\times x'}</Math>
          </li>
        </ul>
        <p className="mt-3 text-dark-400">
          By induction we see that this recursive definition defines <Math>{'x^n'}</Math> for
          all natural numbers <Math>{'n'}</Math>.
        </p>
      </Example>

      <p className="text-dark-300 mb-6">
        We will not develop the theory of exponentiation too deeply here, but instead wait
        until after we have defined the integers and rational numbers; see in particular
        Proposition 4.3.10.
      </p>

      {/* Summary */}
      <div className="mt-10 p-6 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-600/5 border border-indigo-500/20">
        <h3 className="text-lg font-semibold text-indigo-400 mb-3">Section Summary</h3>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>
            <strong>Multiplication</strong> is defined recursively as iterated addition.
          </li>
          <li>
            Multiplication is <strong>commutative</strong> (<Math>{'nm = mn'}</Math>) and{' '}
            <strong>associative</strong> (<Math>{'(ab)c = a(bc)'}</Math>).
          </li>
          <li>
            The <strong>distributive law</strong> connects addition and multiplication:{' '}
            <Math>{'a(b + c) = ab + ac'}</Math>.
          </li>
          <li>
            Natural numbers have <strong>no zero divisors</strong>: if <Math>{'nm = 0'}</Math>,
            then <Math>{'n = 0'}</Math> or <Math>{'m = 0'}</Math>.
          </li>
          <li>
            <strong>Multiplication preserves order</strong>: if <Math>{'a < b'}</Math> and{' '}
            <Math>{'c > 0'}</Math>, then <Math>{'ac < bc'}</Math>.
          </li>
          <li>
            The <strong>Euclidean algorithm</strong> allows division with remainder.
          </li>
          <li>
            <strong>Exponentiation</strong> is defined recursively as iterated multiplication.
          </li>
        </ul>
      </div>

      {/* Building Operations Recursively */}
      <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-amber-500/10 to-orange-600/5 border border-amber-500/20">
        <h3 className="text-lg font-semibold text-amber-400 mb-3">The Recursive Tower</h3>
        <p className="text-dark-300 mb-4">
          Notice the beautiful pattern of how we build operations from simpler ones:
        </p>
        <div className="space-y-2 text-dark-300">
          <p>
            <strong className="text-amber-300">Increment</strong> is the fundamental operation
          </p>
          <p className="pl-4">
            <Math>{'\\downarrow'}</Math> (iterated increment)
          </p>
          <p>
            <strong className="text-amber-300">Addition</strong>: <Math>{'n + m'}</Math> = increment{' '}
            <Math>{'m'}</Math> a total of <Math>{'n'}</Math> times
          </p>
          <p className="pl-4">
            <Math>{'\\downarrow'}</Math> (iterated addition)
          </p>
          <p>
            <strong className="text-amber-300">Multiplication</strong>: <Math>{'n \\times m'}</Math> = add{' '}
            <Math>{'m'}</Math> to itself <Math>{'n'}</Math> times
          </p>
          <p className="pl-4">
            <Math>{'\\downarrow'}</Math> (iterated multiplication)
          </p>
          <p>
            <strong className="text-amber-300">Exponentiation</strong>: <Math>{'m^n'}</Math> = multiply{' '}
            <Math>{'m'}</Math> by itself <Math>{'n'}</Math> times
          </p>
        </div>
      </div>
    </LessonLayout>
  );
}
