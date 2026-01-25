import { LessonLayout } from '@/components/layout';
import { Definition, Theorem, Example } from '@/components/common';
import { Callout } from '@/components/common';
import { Math, MathBlock } from '@/components/common';

export default function Section10() {
  return (
    <LessonLayout sectionId={10}>
      {/* Introduction */}
      <p className="text-lg text-dark-200 mb-6">
        In the previous chapter we defined the natural numbers axiomatically, treating them more
        like <strong className="text-indigo-400">ordinals</strong> than{' '}
        <strong className="text-indigo-400">cardinals</strong>. The purpose of this section is to
        address how natural numbers can be used to count the <em>cardinality</em> of sets, as long
        as the set is finite.
      </p>

      <Callout type="info">
        <strong>Cardinals vs. Ordinals</strong>
        <p className="mt-2">
          The <strong className="text-blue-300">cardinals</strong> are One, Two, Three, ..., and are
          used to count how many things there are in a set. The{' '}
          <strong className="text-blue-300">ordinals</strong> are First, Second, Third, ..., and are
          used to order a sequence of objects. There is a subtle difference between the two,
          especially when comparing infinite cardinals with infinite ordinals.
        </p>
      </Callout>

      {/* Equal Cardinality */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-6">
        Equal Cardinality
      </h2>

      <p className="text-dark-300 mb-6">
        The first thing is to work out when two sets have the same size. It seems clear that
        the sets <Math>{'\\{1, 2, 3\\}'}</Math> and <Math>{'\\{4, 5, 6\\}'}</Math> have the same size,
        but both have a different size from <Math>{'\\{8, 9\\}'}</Math>. One intuitive reason why
        two sets have the same size is that we can match their elements in a{' '}
        <em>one-to-one correspondence</em>: <Math>{'1 \\leftrightarrow 4'}</Math>,{' '}
        <Math>{'2 \\leftrightarrow 5'}</Math>, <Math>{'3 \\leftrightarrow 6'}</Math>.
      </p>

      <Definition title="Definition 3.6.1 (Equal cardinality)">
        <p>
          We say that two sets <Math>{'X'}</Math> and <Math>{'Y'}</Math> have{' '}
          <strong className="text-blue-300">equal cardinality</strong> iff there exists a
          bijection <Math>{'f : X \\to Y'}</Math> from <Math>{'X'}</Math> to <Math>{'Y'}</Math>.
        </p>
      </Definition>

      <Example title="Example 3.6.2">
        <p className="mb-3">
          The sets <Math>{'\\{0, 1, 2\\}'}</Math> and <Math>{'\\{3, 4, 5\\}'}</Math> have equal
          cardinality, since we can find a bijection between the two sets.
        </p>
        <p className="text-amber-300">
          Note: We do not yet know whether <Math>{'\\{0, 1, 2\\}'}</Math> and{' '}
          <Math>{'\\{3, 4\\}'}</Math> have equal cardinality; we know that one particular
          function is not a bijection, but we have not proven yet that there might not be some
          other bijection. (It turns out they do not have equal cardinality, but we prove this later.)
        </p>
      </Example>

      <Callout type="warning">
        <strong>Remark 3.6.3</strong>
        <p className="mt-2">
          The fact that two sets have equal cardinality does not preclude one from containing the
          other. For instance, if <Math>{'X'}</Math> is the set of natural numbers
          and <Math>{'Y'}</Math> is the set of even natural numbers, then the
          map <Math>{'f(n) := 2n'}</Math> is a bijection from <Math>{'X'}</Math> to <Math>{'Y'}</Math>,
          so <Math>{'X'}</Math> and <Math>{'Y'}</Math> have equal cardinality,
          despite <Math>{'Y'}</Math> being a subset of <Math>{'X'}</Math> and seeming intuitively
          as if it should only have "half" of the elements of <Math>{'X'}</Math>.
        </p>
      </Callout>

      <Theorem title="Proposition 3.6.4 (Equal cardinality is an equivalence relation)">
        <p className="mb-3">
          Let <Math>{'X, Y, Z'}</Math> be sets. Then:
        </p>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>
            <strong>Reflexive:</strong> <Math>{'X'}</Math> has equal cardinality with <Math>{'X'}</Math>.
          </li>
          <li>
            <strong>Symmetric:</strong> If <Math>{'X'}</Math> has equal cardinality with{' '}
            <Math>{'Y'}</Math>, then <Math>{'Y'}</Math> has equal cardinality with <Math>{'X'}</Math>.
          </li>
          <li>
            <strong>Transitive:</strong> If <Math>{'X'}</Math> has equal cardinality with{' '}
            <Math>{'Y'}</Math> and <Math>{'Y'}</Math> has equal cardinality with <Math>{'Z'}</Math>,
            then <Math>{'X'}</Math> has equal cardinality with <Math>{'Z'}</Math>.
          </li>
        </ul>
      </Theorem>

      {/* Cardinality n */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-6">
        Cardinality <Math>{'n'}</Math>
      </h2>

      <Definition title="Definition 3.6.5 (Cardinality n)">
        <p className="mb-3">
          Let <Math>{'n'}</Math> be a natural number. A set <Math>{'X'}</Math> is said to
          have <strong className="text-blue-300">cardinality <Math>{'n'}</Math></strong>, iff it has
          equal cardinality with <Math>{'\\{i \\in \\mathbb{N} : 1 \\leq i \\leq n\\}'}</Math>.
        </p>
        <p>
          We also say that <Math>{'X'}</Math> has <strong className="text-blue-300"><Math>{'n'}</Math>{' '}
          elements</strong> iff it has cardinality <Math>{'n'}</Math>.
        </p>
      </Definition>

      <Callout type="info">
        <strong>Remark 3.6.6</strong>
        <p className="mt-2">
          One can use the set <Math>{'\\{i \\in \\mathbb{N} : i < n\\}'}</Math> instead
          of <Math>{'\\{i \\in \\mathbb{N} : 1 \\leq i \\leq n\\}'}</Math>, since these two sets
          clearly have equal cardinality.
        </p>
      </Callout>

      <Example title="Example 3.6.7">
        <p className="mb-3">
          Let <Math>{'a, b, c, d'}</Math> be distinct objects. Then{' '}
          <Math>{'\\{a, b, c, d\\}'}</Math> has the same cardinality as{' '}
          <Math>{'\\{i \\in \\mathbb{N} : i < 4\\} = \\{0, 1, 2, 3\\}'}</Math> or{' '}
          <Math>{'\\{i \\in \\mathbb{N} : 1 \\leq i \\leq 4\\} = \\{1, 2, 3, 4\\}'}</Math>.
        </p>
        <p>
          Thus <Math>{'\\{a, b, c, d\\}'}</Math> has cardinality 4. Similarly, the
          set <Math>{'\\{a\\}'}</Math> has cardinality 1.
        </p>
      </Example>

      {/* Uniqueness */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-6">
        Uniqueness of Cardinality
      </h2>

      <p className="text-dark-300 mb-6">
        There might be one problem with our definition: a set might have two different
        cardinalities. But this is not possible:
      </p>

      <Theorem title="Proposition 3.6.8 (Uniqueness of cardinality)">
        <p>
          Let <Math>{'X'}</Math> be a set with some cardinality <Math>{'n'}</Math>.
          Then <Math>{'X'}</Math> cannot have any other cardinality, i.e., <Math>{'X'}</Math> cannot
          have cardinality <Math>{'m'}</Math> for any <Math>{'m \\neq n'}</Math>.
        </p>
      </Theorem>

      <p className="text-dark-300 my-6">Before we prove this proposition, we need a lemma.</p>

      <Theorem title="Lemma 3.6.9">
        <p>
          Suppose that <Math>{'n \\geq 1'}</Math>, and <Math>{'X'}</Math> has
          cardinality <Math>{'n'}</Math>. Then <Math>{'X'}</Math> is non-empty, and
          if <Math>{'x'}</Math> is any element of <Math>{'X'}</Math>, then the
          set <Math>{'X - \\{x\\}'}</Math> (i.e., <Math>{'X'}</Math> with the
          element <Math>{'x'}</Math> removed) has cardinality <Math>{'n - 1'}</Math>.
        </p>
      </Theorem>

      <div className="mt-6 p-4 rounded-xl bg-dark-800/50 border border-dark-700">
        <p className="font-semibold text-dark-200 mb-3">Proof of Lemma 3.6.9</p>
        <p className="text-dark-300 mb-3">
          If <Math>{'X'}</Math> is empty then it clearly cannot have the same cardinality as the
          non-empty set <Math>{'\\{i \\in \\mathbb{N} : 1 \\leq i \\leq n\\}'}</Math>, as there is
          no bijection from the empty set to a non-empty set.
        </p>
        <p className="text-dark-300 mb-3">
          Now let <Math>{'x'}</Math> be an element of <Math>{'X'}</Math>. Since <Math>{'X'}</Math> has
          the same cardinality as <Math>{'\\{i \\in \\mathbb{N} : 1 \\leq i \\leq n\\}'}</Math>, we
          have a bijection <Math>{'f'}</Math> from <Math>{'X'}</Math> to{' '}
          <Math>{'\\{i \\in \\mathbb{N} : 1 \\leq i \\leq n\\}'}</Math>.
        </p>
        <p className="text-dark-300 mb-3">
          Now define a function <Math>{'g : X - \\{x\\} \\to \\{i \\in \\mathbb{N} : 1 \\leq i \\leq n-1\\}'}</Math>{' '}
          by: for any <Math>{'y \\in X - \\{x\\}'}</Math>, we define{' '}
          <Math>{'g(y) := f(y)'}</Math> if <Math>{'f(y) < f(x)'}</Math>, and{' '}
          <Math>{'g(y) := f(y) - 1'}</Math> if <Math>{'f(y) > f(x)'}</Math>.
        </p>
        <p className="text-dark-300 mb-3">
          It is easy to check that this map is also a bijection, and so{' '}
          <Math>{'X - \\{x\\}'}</Math> has cardinality <Math>{'n - 1'}</Math>.
        </p>
        <div className="text-right text-dark-400">□</div>
      </div>

      <div className="mt-6 p-4 rounded-xl bg-dark-800/50 border border-dark-700">
        <p className="font-semibold text-dark-200 mb-3">Proof of Proposition 3.6.8</p>
        <p className="text-dark-300 mb-3">
          We induct on <Math>{'n'}</Math>.
        </p>
        <p className="text-dark-300 mb-3">
          <strong>Base case:</strong> If <Math>{'n = 0'}</Math>, then <Math>{'X'}</Math> must be
          empty, and so <Math>{'X'}</Math> cannot have any non-zero cardinality.
        </p>
        <p className="text-dark-300 mb-3">
          <strong>Inductive step:</strong> Suppose the proposition is already proven for
          some <Math>{'n'}</Math>; we prove it for <Math>{'n{++}'}</Math>.
          Let <Math>{'X'}</Math> have cardinality <Math>{'n{++}'}</Math>, and suppose{' '}
          <Math>{'X'}</Math> also has some other cardinality <Math>{'m \\neq n{++}'}</Math>.
        </p>
        <p className="text-dark-300 mb-3">
          By Proposition 3.6.4, <Math>{'X'}</Math> is non-empty, and if <Math>{'x'}</Math> is any
          element of <Math>{'X'}</Math>, then <Math>{'X - \\{x\\}'}</Math> has
          cardinality <Math>{'n'}</Math> and also has cardinality <Math>{'m - 1'}</Math>, by
          Lemma 3.6.9.
        </p>
        <p className="text-dark-300 mb-3">
          By induction hypothesis, this means that <Math>{'n = m - 1'}</Math>, which implies
          that <Math>{'m = n{++}'}</Math>, a contradiction.
        </p>
        <div className="text-right text-dark-400">□</div>
      </div>

      <p className="text-dark-300 mt-6">
        Thus, for instance, we now know that the sets <Math>{'\\{0, 1, 2\\}'}</Math> and{' '}
        <Math>{'\\{3, 4\\}'}</Math> do not have equal cardinality, since the first set has
        cardinality 3 and the second has cardinality 2.
      </p>

      {/* Finite and Infinite Sets */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-6">
        Finite and Infinite Sets
      </h2>

      <Definition title="Definition 3.6.10 (Finite sets)">
        <p className="mb-3">
          A set is <strong className="text-blue-300">finite</strong> iff it has
          cardinality <Math>{'n'}</Math> for some natural number <Math>{'n'}</Math>; otherwise,
          the set is called <strong className="text-blue-300">infinite</strong>.
        </p>
        <p>
          If <Math>{'X'}</Math> is a finite set, we use <Math>{'\\#(X)'}</Math> to denote the
          cardinality of <Math>{'X'}</Math>.
        </p>
      </Definition>

      <Example title="Example 3.6.11">
        <p>
          The sets <Math>{'\\{0, 1, 2\\}'}</Math> and <Math>{'\\{3, 4\\}'}</Math> are finite, as is
          the empty set (0 is a natural number), and <Math>{'\\#(\\{0, 1, 2\\}) = 3'}</Math>,{' '}
          <Math>{'\\#(\\{3, 4\\}) = 2'}</Math>, and <Math>{'\\#(\\emptyset) = 0'}</Math>.
        </p>
      </Example>

      <Theorem title="Theorem 3.6.12 (The natural numbers are infinite)" color="blue">
        <p>
          The set of natural numbers <Math>{'\\mathbb{N}'}</Math> is infinite.
        </p>
      </Theorem>

      <div className="mt-6 p-4 rounded-xl bg-dark-800/50 border border-dark-700">
        <p className="font-semibold text-dark-200 mb-3">Proof</p>
        <p className="text-dark-300 mb-3">
          Suppose for sake of contradiction that <Math>{'\\mathbb{N}'}</Math> was finite, so it had
          some cardinality <Math>{'\\#(\\mathbb{N}) = n'}</Math>. Then there is a
          bijection <Math>{'f'}</Math> from <Math>{'\\{i \\in \\mathbb{N} : 1 \\leq i \\leq n\\}'}</Math>{' '}
          to <Math>{'\\mathbb{N}'}</Math>.
        </p>
        <p className="text-dark-300 mb-3">
          One can show that the sequence <Math>{'f(1), f(2), \\ldots, f(n)'}</Math> is bounded, i.e.,
          there exists a natural number <Math>{'M'}</Math> such that{' '}
          <Math>{'f(i) \\leq M'}</Math> for all <Math>{'1 \\leq i \\leq n'}</Math>.
        </p>
        <p className="text-dark-300 mb-3">
          But then the natural number <Math>{'M + 1'}</Math> is not equal to any of
          the <Math>{'f(i)'}</Math>, contradicting the hypothesis that <Math>{'f'}</Math> is a
          bijection.
        </p>
        <div className="text-right text-dark-400">□</div>
      </div>

      <Callout type="info">
        <strong>Remark 3.6.13</strong>
        <p className="mt-2">
          One can use similar arguments to show that any unbounded set is infinite; for instance
          the rationals <Math>{'\\mathbb{Q}'}</Math> and the reals <Math>{'\\mathbb{R}'}</Math>{' '}
          (which we will construct in later chapters) are infinite. However, it is possible for
          some sets to be "more" infinite than others; see Section 8.3.
        </p>
      </Callout>

      {/* Cardinal Arithmetic */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-6">
        Cardinal Arithmetic
      </h2>

      <Theorem title="Proposition 3.6.14 (Cardinal arithmetic)">
        <div className="space-y-4">
          <div>
            <p className="font-semibold text-dark-200">(a)</p>
            <p className="text-dark-300">
              Let <Math>{'X'}</Math> be a finite set, and let <Math>{'x'}</Math> be an object which
              is not an element of <Math>{'X'}</Math>. Then <Math>{'X \\cup \\{x\\}'}</Math> is
              finite and <Math>{'\\#(X \\cup \\{x\\}) = \\#(X) + 1'}</Math>.
            </p>
          </div>

          <div>
            <p className="font-semibold text-dark-200">(b)</p>
            <p className="text-dark-300">
              Let <Math>{'X'}</Math> and <Math>{'Y'}</Math> be finite sets.
              Then <Math>{'X \\cup Y'}</Math> is finite and{' '}
              <Math>{'\\#(X \\cup Y) \\leq \\#(X) + \\#(Y)'}</Math>. If in
              addition <Math>{'X'}</Math> and <Math>{'Y'}</Math> are disjoint, then{' '}
              <Math>{'\\#(X \\cup Y) = \\#(X) + \\#(Y)'}</Math>.
            </p>
          </div>

          <div>
            <p className="font-semibold text-dark-200">(c)</p>
            <p className="text-dark-300">
              Let <Math>{'X'}</Math> be a finite set, and let <Math>{'Y'}</Math> be a subset
              of <Math>{'X'}</Math>. Then <Math>{'Y'}</Math> is finite,
              and <Math>{'\\#(Y) \\leq \\#(X)'}</Math>. If in addition <Math>{'Y \\neq X'}</Math>,
              then <Math>{'\\#(Y) < \\#(X)'}</Math>.
            </p>
          </div>

          <div>
            <p className="font-semibold text-dark-200">(d)</p>
            <p className="text-dark-300">
              If <Math>{'X'}</Math> is a finite set, and <Math>{'f : X \\to Y'}</Math> is a
              function, then <Math>{'f(X)'}</Math> is a finite set
              with <Math>{'\\#(f(X)) \\leq \\#(X)'}</Math>. If in addition <Math>{'f'}</Math> is
              one-to-one, then <Math>{'\\#(f(X)) = \\#(X)'}</Math>.
            </p>
          </div>

          <div>
            <p className="font-semibold text-dark-200">(e)</p>
            <p className="text-dark-300">
              Let <Math>{'X'}</Math> and <Math>{'Y'}</Math> be finite sets. Then the Cartesian
              product <Math>{'X \\times Y'}</Math> is finite
              and <Math>{'\\#(X \\times Y) = \\#(X) \\times \\#(Y)'}</Math>.
            </p>
          </div>

          <div>
            <p className="font-semibold text-dark-200">(f)</p>
            <p className="text-dark-300">
              Let <Math>{'X'}</Math> and <Math>{'Y'}</Math> be finite sets. Then the
              set <Math>{'Y^X'}</Math> (the set of all functions from <Math>{'X'}</Math>{' '}
              to <Math>{'Y'}</Math>) is finite and <Math>{'\\#(Y^X) = \\#(Y)^{\\#(X)}'}</Math>.
            </p>
          </div>
        </div>
      </Theorem>

      <Callout type="info">
        <strong>Remark 3.6.15</strong>
        <p className="mt-2">
          Proposition 3.6.14 suggests that there is another way to define the arithmetic operations
          of natural numbers — not defined recursively as in Chapter 2, but instead using the notions
          of union, Cartesian product, and power set. This is the basis of{' '}
          <strong className="text-blue-300">cardinal arithmetic</strong>, which is an alternative
          foundation to arithmetic than the Peano arithmetic we have developed.
        </p>
      </Callout>

      {/* Exercises */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-6">
        Exercises
      </h2>

      <div className="space-y-4">
        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700">
          <p className="font-semibold text-dark-200">Exercise 3.6.1</p>
          <p className="text-dark-400 mt-2">
            Prove Proposition 3.6.4.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700">
          <p className="font-semibold text-dark-200">Exercise 3.6.2</p>
          <p className="text-dark-400 mt-2">
            Show that a set <Math>{'X'}</Math> has cardinality 0 if and only if <Math>{'X'}</Math> is
            the empty set.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700">
          <p className="font-semibold text-dark-200">Exercise 3.6.3</p>
          <p className="text-dark-400 mt-2">
            Let <Math>{'n'}</Math> be a natural number, and let{' '}
            <Math>{'f : \\{i \\in \\mathbb{N} : 1 \\leq i \\leq n\\} \\to \\mathbb{N}'}</Math> be
            a function. Show that there exists a natural number <Math>{'M'}</Math> such
            that <Math>{'f(i) \\leq M'}</Math> for all <Math>{'1 \\leq i \\leq n'}</Math>.
            Thus finite subsets of the natural numbers are bounded.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700">
          <p className="font-semibold text-dark-200">Exercise 3.6.5</p>
          <p className="text-dark-400 mt-2">
            Let <Math>{'A'}</Math> and <Math>{'B'}</Math> be sets. Show that{' '}
            <Math>{'A \\times B'}</Math> and <Math>{'B \\times A'}</Math> have equal cardinality by
            constructing an explicit bijection between the two sets. Then use Proposition 3.6.14 to
            conclude an alternate proof of Lemma 2.3.2.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700">
          <p className="font-semibold text-dark-200">Exercise 3.6.9</p>
          <p className="text-dark-400 mt-2">
            Let <Math>{'A'}</Math> and <Math>{'B'}</Math> be finite sets. Show that{' '}
            <Math>{'A \\cup B'}</Math> and <Math>{'A \\cap B'}</Math> are also finite sets, and
            that <Math>{'\\#(A) + \\#(B) = \\#(A \\cup B) + \\#(A \\cap B)'}</Math>.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700">
          <p className="font-semibold text-dark-200">Exercise 3.6.10 (Pigeonhole principle)</p>
          <p className="text-dark-400 mt-2">
            Let <Math>{'A_1, \\ldots, A_n'}</Math> be finite sets such that{' '}
            <Math>{'\\#(\\bigcup_{i \\in \\{1,\\ldots,n\\}} A_i) \\geq n'}</Math>. Show that there
            exists <Math>{'i \\in \\{1, \\ldots, n\\}'}</Math> such that{' '}
            <Math>{'\\#(A_i) \\geq 1'}</Math>.
          </p>
        </div>
      </div>

      {/* Summary */}
      <div className="mt-10 p-6 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-600/5 border border-indigo-500/20">
        <h3 className="text-lg font-semibold text-indigo-400 mb-3">Key Takeaways</h3>
        <ul className="space-y-2 text-dark-300">
          <li>
            <strong className="text-dark-200">Equal cardinality</strong> means there exists a
            bijection between two sets — this is an equivalence relation.
          </li>
          <li>
            <strong className="text-dark-200">Cardinality <Math>{'n'}</Math></strong> means a set is
            in bijection with <Math>{'\\{1, 2, \\ldots, n\\}'}</Math>; this cardinality is unique.
          </li>
          <li>
            <strong className="text-dark-200">Finite sets</strong> have cardinality for some natural
            number; <strong className="text-dark-200">infinite sets</strong> do not.
          </li>
          <li>
            <strong className="text-dark-200"><Math>{'\\mathbb{N}'}</Math> is infinite</strong>:{' '}
            no bijection exists from any <Math>{'\\{1, \\ldots, n\\}'}</Math> to <Math>{'\\mathbb{N}'}</Math>.
          </li>
          <li>
            <strong className="text-dark-200">Cardinal arithmetic</strong> connects set operations
            (union, product, power set) to number operations (addition, multiplication, exponentiation).
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
