import { LessonLayout } from '@/components/layout';
import { Definition, Theorem, Example } from '@/components/common';
import { Callout } from '@/components/common';
import { Math, MathBlock } from '@/components/common';

export default function Section03() {
  return (
    <LessonLayout sectionId={3}>
      {/* Introduction */}
      <p className="text-lg text-dark-200 mb-6">
        The natural number system is very bare right now: we have only one operation &mdash;{' '}
        <strong className="text-indigo-400">increment</strong> &mdash; and a handful of axioms.
        But now we can build up more complex operations, such as{' '}
        <strong className="text-indigo-400">addition</strong>.
      </p>

      <p className="text-dark-300 mb-6">
        The way it works is the following. To add three to five should be the same as
        incrementing five three times &mdash; this is one increment more than adding two to five,
        which is one increment more than adding one to five, which is one increment more than
        adding zero to five, which should just give five. So we give a{' '}
        <em>recursive definition</em> for addition as follows.
      </p>

      {/* Definition 2.2.1 */}
      <Definition title="Definition 2.2.1 (Addition of Natural Numbers)">
        <p className="mb-3">
          Let <Math>{'m'}</Math> be a natural number. To add zero to <Math>{'m'}</Math>, we define:
        </p>
        <MathBlock>{`0 + m := m`}</MathBlock>
        <p className="mb-3">
          Now suppose inductively that we have defined how to add <Math>{'n'}</Math> to{' '}
          <Math>{'m'}</Math>. Then we can add <Math>{'n\\texttt{++}'}</Math> to <Math>{'m'}</Math>{' '}
          by defining:
        </p>
        <MathBlock>{`(n\\texttt{++}) + m := (n + m)\\texttt{++}`}</MathBlock>
      </Definition>

      <Example title="Example: How Addition Works">
        <p className="mb-3">Using this definition:</p>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>
            <Math>{'0 + m = m'}</Math> (by the base case)
          </li>
          <li>
            <Math>{'1 + m = (0\\texttt{++}) + m = (0 + m)\\texttt{++} = m\\texttt{++}'}</Math>
          </li>
          <li>
            <Math>{'2 + m = (1\\texttt{++}) + m = (m\\texttt{++})\\texttt{++}'}</Math>
          </li>
        </ul>
        <p className="mt-3">
          For instance, <Math>{'2 + 3 = (3\\texttt{++})\\texttt{++} = 4\\texttt{++} = 5'}</Math>.
        </p>
      </Example>

      <Callout type="info">
        <strong>Note on Asymmetry</strong>
        <p className="mt-2">
          This definition is asymmetric: <Math>{'3 + 5'}</Math> means incrementing 5 three times,
          while <Math>{'5 + 3'}</Math> means incrementing 3 five times. Of course, they both
          yield the same value of 8. More generally, it is a fact (which we shall prove shortly)
          that <Math>{'a + b = b + a'}</Math> for all natural numbers <Math>{'a, b'}</Math>,
          although this is not immediately clear from the definition.
        </p>
      </Callout>

      {/* Basic Lemmas */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-6">
        Basic Properties of Addition
      </h2>

      <p className="text-dark-300 mb-6">
        Right now we only have two facts about addition: that <Math>{'0 + m = m'}</Math>, and
        that <Math>{'(n\\texttt{++}) + m = (n + m)\\texttt{++}'}</Math>. Remarkably, this turns
        out to be enough to deduce everything else we know about addition. We begin with some
        basic lemmas.
      </p>

      {/* Lemma 2.2.2 */}
      <Theorem title="Lemma 2.2.2" type="lemma">
        <p className="mb-3">
          For any natural number <Math>{'n'}</Math>, we have <Math>{'n + 0 = n'}</Math>.
        </p>
        <Callout type="warning">
          <strong>Why isn't this obvious?</strong>
          <p className="mt-2">
            We cannot deduce this immediately from <Math>{'0 + m = m'}</Math> because we do not
            know yet that <Math>{'a + b = b + a'}</Math>.
          </p>
        </Callout>
        <div className="mt-4 p-4 bg-dark-800 rounded-lg border border-dark-700">
          <p className="text-dark-300 font-medium mb-2">Proof:</p>
          <p className="text-dark-400">
            We use induction. The base case <Math>{'0 + 0 = 0'}</Math> follows since we know
            that <Math>{'0 + m = m'}</Math> for every natural number <Math>{'m'}</Math>, and 0
            is a natural number. Now suppose inductively that <Math>{'n + 0 = n'}</Math>. We
            wish to show that <Math>{'(n\\texttt{++}) + 0 = n\\texttt{++}'}</Math>. But by
            definition of addition, <Math>{'(n\\texttt{++}) + 0'}</Math> is equal to{' '}
            <Math>{'(n + 0)\\texttt{++}'}</Math>, which is equal to <Math>{'n\\texttt{++}'}</Math>{' '}
            since <Math>{'n + 0 = n'}</Math>. This closes the induction. <span className="float-right">&#9633;</span>
          </p>
        </div>
      </Theorem>

      {/* Lemma 2.2.3 */}
      <Theorem title="Lemma 2.2.3" type="lemma">
        <p className="mb-3">
          For any natural numbers <Math>{'n'}</Math> and <Math>{'m'}</Math>, we have{' '}
          <Math>{'n + (m\\texttt{++}) = (n + m)\\texttt{++}'}</Math>.
        </p>
        <div className="mt-4 p-4 bg-dark-800 rounded-lg border border-dark-700">
          <p className="text-dark-300 font-medium mb-2">Proof:</p>
          <p className="text-dark-400">
            We induct on <Math>{'n'}</Math> (keeping <Math>{'m'}</Math> fixed). For the base
            case <Math>{'n = 0'}</Math>, we have to prove{' '}
            <Math>{'0 + (m\\texttt{++}) = (0 + m)\\texttt{++}'}</Math>. By definition of
            addition, <Math>{'0 + (m\\texttt{++}) = m\\texttt{++}'}</Math> and{' '}
            <Math>{'0 + m = m'}</Math>, so both sides are equal to{' '}
            <Math>{'m\\texttt{++}'}</Math>.
          </p>
          <p className="text-dark-400 mt-2">
            Now assume inductively that <Math>{'n + (m\\texttt{++}) = (n + m)\\texttt{++}'}</Math>;
            we now have to show that{' '}
            <Math>{'(n\\texttt{++}) + (m\\texttt{++}) = ((n\\texttt{++}) + m)\\texttt{++}'}</Math>.
            The left-hand side is <Math>{'(n + (m\\texttt{++}))\\texttt{++}'}</Math> by definition
            of addition, which is equal to <Math>{'((n + m)\\texttt{++})\\texttt{++}'}</Math> by
            the inductive hypothesis. Similarly, we have{' '}
            <Math>{'(n\\texttt{++}) + m = (n + m)\\texttt{++}'}</Math> by definition of addition,
            and so the right-hand side is also equal to{' '}
            <Math>{'((n + m)\\texttt{++})\\texttt{++}'}</Math>. This closes the induction. <span className="float-right">&#9633;</span>
          </p>
        </div>
      </Theorem>

      <Callout type="info">
        <strong>Corollary:</strong> As a particular consequence of Lemma 2.2.2 and Lemma 2.2.3,
        we see that <Math>{'n\\texttt{++} = n + 1'}</Math>.
      </Callout>

      {/* Commutativity */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-6">
        Commutativity and Associativity
      </h2>

      <Theorem title="Proposition 2.2.4 (Addition is Commutative)">
        <p className="mb-3">
          For any natural numbers <Math>{'n'}</Math> and <Math>{'m'}</Math>, we have{' '}
          <Math>{'n + m = m + n'}</Math>.
        </p>
        <div className="mt-4 p-4 bg-dark-800 rounded-lg border border-dark-700">
          <p className="text-dark-300 font-medium mb-2">Proof:</p>
          <p className="text-dark-400">
            We shall use induction on <Math>{'n'}</Math> (keeping <Math>{'m'}</Math> fixed).
            First we do the base case <Math>{'n = 0'}</Math>, i.e., we show{' '}
            <Math>{'0 + m = m + 0'}</Math>. By the definition of addition,{' '}
            <Math>{'0 + m = m'}</Math>, while by Lemma 2.2.2, <Math>{'m + 0 = m'}</Math>.
            Thus the base case is done.
          </p>
          <p className="text-dark-400 mt-2">
            Now suppose inductively that <Math>{'n + m = m + n'}</Math>, and we have to prove
            that <Math>{'(n\\texttt{++}) + m = m + (n\\texttt{++})'}</Math> to close the
            induction. By the definition of addition,{' '}
            <Math>{'(n\\texttt{++}) + m = (n + m)\\texttt{++}'}</Math>. By Lemma 2.2.3,{' '}
            <Math>{'m + (n\\texttt{++}) = (m + n)\\texttt{++}'}</Math>, but this is equal to{' '}
            <Math>{'(n + m)\\texttt{++}'}</Math> by the inductive hypothesis{' '}
            <Math>{'n + m = m + n'}</Math>. Thus{' '}
            <Math>{'(n\\texttt{++}) + m = m + (n\\texttt{++})'}</Math> and we have closed the
            induction. <span className="float-right">&#9633;</span>
          </p>
        </div>
      </Theorem>

      <Theorem title="Proposition 2.2.5 (Addition is Associative)">
        <p className="mb-3">
          For any natural numbers <Math>{'a, b, c'}</Math>, we have{' '}
          <Math>{'(a + b) + c = a + (b + c)'}</Math>.
        </p>
        <p className="text-dark-400 italic">
          Proof: See Exercise 2.2.1.
        </p>
      </Theorem>

      <p className="text-dark-300 mb-6">
        Because of this associativity we can write sums such as <Math>{'a + b + c'}</Math>{' '}
        without having to worry about which order the numbers are being added together.
      </p>

      {/* Cancellation Law */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-6">
        The Cancellation Law
      </h2>

      <Theorem title="Proposition 2.2.6 (Cancellation Law)">
        <p className="mb-3">
          Let <Math>{'a, b, c'}</Math> be natural numbers such that <Math>{'a + b = a + c'}</Math>.
          Then we have <Math>{'b = c'}</Math>.
        </p>
        <Callout type="info">
          <strong>Why is this important?</strong>
          <p className="mt-2">
            We cannot use subtraction or negative numbers yet to prove this proposition,
            because we have not developed these concepts yet. In fact, this cancellation law
            is crucial in letting us define subtraction (and the integers) later on, because
            it allows for a sort of "virtual subtraction" even before subtraction is officially
            defined.
          </p>
        </Callout>
        <div className="mt-4 p-4 bg-dark-800 rounded-lg border border-dark-700">
          <p className="text-dark-300 font-medium mb-2">Proof:</p>
          <p className="text-dark-400">
            We prove this by induction on <Math>{'a'}</Math>. First consider the base case{' '}
            <Math>{'a = 0'}</Math>. Then we have <Math>{'0 + b = 0 + c'}</Math>, which by
            definition of addition implies that <Math>{'b = c'}</Math> as desired.
          </p>
          <p className="text-dark-400 mt-2">
            Now suppose inductively that we have the cancellation law for <Math>{'a'}</Math>
            (so that <Math>{'a + b = a + c'}</Math> implies <Math>{'b = c'}</Math>); we now
            have to prove the cancellation law for <Math>{'a\\texttt{++}'}</Math>. In other
            words, we assume that <Math>{'(a\\texttt{++}) + b = (a\\texttt{++}) + c'}</Math> and
            need to show that <Math>{'b = c'}</Math>.
          </p>
          <p className="text-dark-400 mt-2">
            By the definition of addition, <Math>{'(a\\texttt{++}) + b = (a + b)\\texttt{++}'}</Math>{' '}
            and <Math>{'(a\\texttt{++}) + c = (a + c)\\texttt{++}'}</Math>, so we have{' '}
            <Math>{'(a + b)\\texttt{++} = (a + c)\\texttt{++}'}</Math>. By Axiom 2.4, we have{' '}
            <Math>{'a + b = a + c'}</Math>. Since we already have the cancellation law for{' '}
            <Math>{'a'}</Math>, we thus have <Math>{'b = c'}</Math> as desired. This closes
            the induction. <span className="float-right">&#9633;</span>
          </p>
        </div>
      </Theorem>

      {/* Positive Numbers */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-6">
        Positive Numbers
      </h2>

      <Definition title="Definition 2.2.7 (Positive Natural Numbers)">
        <p>
          A natural number <Math>{'n'}</Math> is said to be <strong className="text-blue-300">positive</strong>{' '}
          iff it is not equal to 0.
        </p>
      </Definition>

      <Theorem title="Proposition 2.2.8">
        <p className="mb-3">
          If <Math>{'a'}</Math> is positive and <Math>{'b'}</Math> is a natural number, then{' '}
          <Math>{'a + b'}</Math> is positive (and hence <Math>{'b + a'}</Math> is also, by
          Proposition 2.2.4).
        </p>
        <div className="mt-4 p-4 bg-dark-800 rounded-lg border border-dark-700">
          <p className="text-dark-300 font-medium mb-2">Proof:</p>
          <p className="text-dark-400">
            We use induction on <Math>{'b'}</Math>. If <Math>{'b = 0'}</Math>, then{' '}
            <Math>{'a + b = a + 0 = a'}</Math>, which is positive, so this proves the base case.
            Now suppose inductively that <Math>{'a + b'}</Math> is positive. Then{' '}
            <Math>{'a + (b\\texttt{++}) = (a + b)\\texttt{++}'}</Math>, which cannot be zero
            by Axiom 2.3, and is hence positive. This closes the induction. <span className="float-right">&#9633;</span>
          </p>
        </div>
      </Theorem>

      <Theorem title="Corollary 2.2.9" type="corollary">
        <p className="mb-3">
          If <Math>{'a'}</Math> and <Math>{'b'}</Math> are natural numbers such that{' '}
          <Math>{'a + b = 0'}</Math>, then <Math>{'a = 0'}</Math> and <Math>{'b = 0'}</Math>.
        </p>
        <div className="mt-4 p-4 bg-dark-800 rounded-lg border border-dark-700">
          <p className="text-dark-300 font-medium mb-2">Proof:</p>
          <p className="text-dark-400">
            Suppose for sake of contradiction that <Math>{'a \\neq 0'}</Math> or{' '}
            <Math>{'b \\neq 0'}</Math>. If <Math>{'a \\neq 0'}</Math> then <Math>{'a'}</Math>{' '}
            is positive, and hence <Math>{'a + b = 0'}</Math> is positive by Proposition 2.2.8,
            a contradiction. Similarly if <Math>{'b \\neq 0'}</Math> then <Math>{'b'}</Math> is
            positive, and again <Math>{'a + b = 0'}</Math> is positive by Proposition 2.2.8,
            a contradiction. Thus <Math>{'a'}</Math> and <Math>{'b'}</Math> must both be zero. <span className="float-right">&#9633;</span>
          </p>
        </div>
      </Theorem>

      <Theorem title="Lemma 2.2.10" type="lemma">
        <p className="mb-3">
          Let <Math>{'a'}</Math> be a positive number. Then there exists exactly one natural
          number <Math>{'b'}</Math> such that <Math>{'b\\texttt{++} = a'}</Math>.
        </p>
        <p className="text-dark-400 italic">
          Proof: See Exercise 2.2.2.
        </p>
      </Theorem>

      {/* Ordering */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-6">
        Ordering of Natural Numbers
      </h2>

      <p className="text-dark-300 mb-6">
        Once we have a notion of addition, we can begin defining a notion of <em>order</em>.
      </p>

      <Definition title="Definition 2.2.11 (Ordering of the Natural Numbers)">
        <p className="mb-3">
          Let <Math>{'n'}</Math> and <Math>{'m'}</Math> be natural numbers. We say that{' '}
          <Math>{'n'}</Math> is <strong className="text-blue-300">greater than or equal to</strong>{' '}
          <Math>{'m'}</Math>, and write <Math>{'n \\geq m'}</Math> or <Math>{'m \\leq n'}</Math>,
          iff we have <Math>{'n = m + a'}</Math> for some natural number <Math>{'a'}</Math>.
        </p>
        <p>
          We say that <Math>{'n'}</Math> is <strong className="text-blue-300">strictly greater than</strong>{' '}
          <Math>{'m'}</Math>, and write <Math>{'n > m'}</Math> or <Math>{'m < n'}</Math>, iff{' '}
          <Math>{'n \\geq m'}</Math> and <Math>{'n \\neq m'}</Math>.
        </p>
      </Definition>

      <Example title="Example: Ordering">
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>
            <Math>{'8 > 5'}</Math>, because <Math>{'8 = 5 + 3'}</Math> and <Math>{'8 \\neq 5'}</Math>.
          </li>
          <li>
            <Math>{'n\\texttt{++} > n'}</Math> for any <Math>{'n'}</Math>; thus there is no
            largest natural number <Math>{'n'}</Math>, because the next number{' '}
            <Math>{'n\\texttt{++}'}</Math> is always larger still.
          </li>
        </ul>
      </Example>

      <Theorem title="Proposition 2.2.12 (Basic Properties of Order)">
        <p className="mb-3">
          Let <Math>{'a, b, c'}</Math> be natural numbers. Then:
        </p>
        <ul className="list-disc list-inside space-y-3 text-dark-300">
          <li>
            <strong className="text-amber-300">(a) Order is reflexive:</strong>{' '}
            <Math>{'a \\geq a'}</Math>.
          </li>
          <li>
            <strong className="text-amber-300">(b) Order is transitive:</strong> If{' '}
            <Math>{'a \\geq b'}</Math> and <Math>{'b \\geq c'}</Math>, then <Math>{'a \\geq c'}</Math>.
          </li>
          <li>
            <strong className="text-amber-300">(c) Order is anti-symmetric:</strong> If{' '}
            <Math>{'a \\geq b'}</Math> and <Math>{'b \\geq a'}</Math>, then <Math>{'a = b'}</Math>.
          </li>
          <li>
            <strong className="text-amber-300">(d) Addition preserves order:</strong>{' '}
            <Math>{'a \\geq b'}</Math> if and only if <Math>{'a + c \\geq b + c'}</Math>.
          </li>
          <li>
            <strong className="text-amber-300">(e)</strong>{' '}
            <Math>{'a < b'}</Math> if and only if <Math>{'a\\texttt{++} \\leq b'}</Math>.
          </li>
          <li>
            <strong className="text-amber-300">(f)</strong>{' '}
            <Math>{'a < b'}</Math> if and only if <Math>{'b = a + d'}</Math> for some positive
            number <Math>{'d'}</Math>.
          </li>
        </ul>
        <p className="text-dark-400 italic mt-4">
          Proof: See Exercise 2.2.3.
        </p>
      </Theorem>

      {/* Summary */}
      <div className="mt-10 p-6 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-600/5 border border-indigo-500/20">
        <h3 className="text-lg font-semibold text-indigo-400 mb-3">Section Summary</h3>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>
            <strong>Addition</strong> is defined recursively using the increment operation.
          </li>
          <li>
            Addition is <strong>commutative</strong> (<Math>{'n + m = m + n'}</Math>) and{' '}
            <strong>associative</strong> (<Math>{'(a + b) + c = a + (b + c)'}</Math>).
          </li>
          <li>
            The <strong>cancellation law</strong> states that if <Math>{'a + b = a + c'}</Math>,
            then <Math>{'b = c'}</Math>.
          </li>
          <li>
            A natural number is <strong>positive</strong> if it is not equal to 0.
          </li>
          <li>
            <strong>Ordering</strong> is defined in terms of addition: <Math>{'n \\geq m'}</Math>{' '}
            means <Math>{'n = m + a'}</Math> for some natural number <Math>{'a'}</Math>.
          </li>
        </ul>
      </div>

      {/* Terminology Note */}
      <Callout type="info">
        <strong>On Lemmas, Propositions, Theorems, and Corollaries</strong>
        <p className="mt-2">
          From a logical point of view, there is no difference between a lemma, proposition,
          theorem, or corollary &mdash; they are all claims waiting to be proved. However, we
          use these terms to suggest different levels of importance and difficulty:
        </p>
        <ul className="list-disc list-inside mt-2 text-dark-300 space-y-1">
          <li>
            A <strong>lemma</strong> is an easily proved claim which is helpful for proving
            other propositions and theorems, but is usually not particularly interesting in
            its own right.
          </li>
          <li>
            A <strong>proposition</strong> is a statement which is interesting in its own right.
          </li>
          <li>
            A <strong>theorem</strong> is a more important statement than a proposition which
            says something definitive on the subject.
          </li>
          <li>
            A <strong>corollary</strong> is a quick consequence of a proposition or theorem
            that was proven recently.
          </li>
        </ul>
      </Callout>
    </LessonLayout>
  );
}
