import { LessonLayout } from '@/components/layout';
import { Definition, Theorem, Example } from '@/components/common';
import { Callout } from '@/components/common';
import { Math, MathBlock } from '@/components/common';

export default function Section09() {
  return (
    <LessonLayout sectionId={9}>
      {/* Introduction */}
      <p className="text-lg text-dark-200 mb-6">
        In addition to the basic operations of union, intersection, and differencing, another
        fundamental operation on sets is that of the <strong className="text-indigo-400">Cartesian product</strong>.
        This operation allows us to combine two sets into a new set of ordered pairs, and
        generalizes to ordered <Math>{'n'}</Math>-tuples.
      </p>

      {/* Ordered Pairs */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-6">
        Ordered Pairs
      </h2>

      <Definition title="Definition 3.5.1 (Ordered pair)">
        <p className="mb-3">
          If <Math>{'x'}</Math> and <Math>{'y'}</Math> are any objects (possibly equal), we define
          the <strong className="text-blue-300">ordered pair</strong> <Math>{'(x, y)'}</Math> to be
          a new object, consisting of <Math>{'x'}</Math> as its first component
          and <Math>{'y'}</Math> as its second component.
        </p>
        <p className="mb-3">
          Two ordered pairs <Math>{'(x, y)'}</Math> and <Math>{'(x\', y\')'}</Math> are considered
          equal if and only if both their components match:
        </p>
        <MathBlock>{`(x, y) = (x', y') \\iff (x = x' \\text{ and } y = y').`}</MathBlock>
      </Definition>

      <Example title="Comparing Ordered Pairs">
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>
            The pair <Math>{'(3, 5)'}</Math> equals <Math>{'(2 + 1, 3 + 2)'}</Math>
          </li>
          <li>
            But <Math>{'(3, 5) \\neq (5, 3)'}</Math> — order matters!
          </li>
          <li>
            And <Math>{'(3, 5) \\neq (3, 3)'}</Math> and <Math>{'(3, 5) \\neq (2, 5)'}</Math>
          </li>
        </ul>
        <p className="mt-3 text-emerald-300">
          This is in contrast to sets, where <Math>{'\\{3, 5\\} = \\{5, 3\\}'}</Math>.
        </p>
      </Example>

      <Callout type="info">
        <strong>Remark 3.5.2</strong>
        <p className="mt-2">
          Strictly speaking, this definition is partly an axiom, because we have simply postulated
          that given any two objects <Math>{'x'}</Math> and <Math>{'y'}</Math>, an object of
          the form <Math>{'(x, y)'}</Math> exists. However, it is possible to define an ordered
          pair using the axioms of set theory in such a way that we do not need any further
          postulates (see Exercise 3.5.1).
        </p>
      </Callout>

      {/* Cartesian Product */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-6">
        Cartesian Product
      </h2>

      <Definition title="Definition 3.5.4 (Cartesian product)">
        <p className="mb-3">
          If <Math>{'X'}</Math> and <Math>{'Y'}</Math> are sets, then we define
          the <strong className="text-blue-300">Cartesian product</strong>{' '}
          <Math>{'X \\times Y'}</Math> to be the collection of ordered pairs whose first
          component lies in <Math>{'X'}</Math> and second component lies in <Math>{'Y'}</Math>:
        </p>
        <MathBlock>{`X \\times Y = \\{(x, y) : x \\in X, y \\in Y\\}`}</MathBlock>
        <p className="mt-3">Or equivalently:</p>
        <MathBlock>{`a \\in (X \\times Y) \\iff (a = (x, y) \\text{ for some } x \\in X \\text{ and } y \\in Y).`}</MathBlock>
      </Definition>

      <Example title="Example 3.5.6">
        <p className="mb-3">
          If <Math>{'X := \\{1, 2\\}'}</Math> and <Math>{'Y := \\{3, 4, 5\\}'}</Math>, then:
        </p>
        <MathBlock>{`X \\times Y = \\{(1, 3), (1, 4), (1, 5), (2, 3), (2, 4), (2, 5)\\}`}</MathBlock>
        <p className="mt-3 mb-3">and:</p>
        <MathBlock>{`Y \\times X = \\{(3, 1), (4, 1), (5, 1), (3, 2), (4, 2), (5, 2)\\}.`}</MathBlock>
        <p className="mt-3 text-amber-300">
          Note that <Math>{'X \\times Y'}</Math> and <Math>{'Y \\times X'}</Math> are different
          sets, although they always have the same number of elements.
        </p>
      </Example>

      <Callout type="info">
        <strong>Functions of Two Variables</strong>
        <p className="mt-2">
          Let <Math>{'f : X \\times Y \\to Z'}</Math> be a function whose domain is a Cartesian
          product. Then <Math>{'f'}</Math> can be thought of either as a function of one variable
          (mapping an ordered pair <Math>{'(x, y)'}</Math> to <Math>{'f(x, y)'}</Math>), or as a
          function of two variables (mapping inputs <Math>{'x \\in X'}</Math> and{' '}
          <Math>{'y \\in Y'}</Math> to <Math>{'f(x, y)'}</Math>).
        </p>
        <p className="mt-2">
          For instance, addition on natural numbers can be viewed as a function{' '}
          <Math>{'+ : \\mathbb{N} \\times \\mathbb{N} \\to \\mathbb{N}'}</Math>,
          defined by <Math>{'(x, y) \\mapsto x + y'}</Math>.
        </p>
      </Callout>

      {/* Ordered n-tuples */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-6">
        Ordered <Math>{'n'}</Math>-Tuples
      </h2>

      <Definition title="Definition 3.5.7 (Ordered n-tuple and n-fold Cartesian product)">
        <p className="mb-3">
          Let <Math>{'n'}</Math> be a natural number. An <strong className="text-blue-300">ordered{' '}
          <Math>{'n'}</Math>-tuple</strong> <Math>{'(x_i)_{1 \\leq i \\leq n}'}</Math> (also
          denoted <Math>{'(x_1, \\ldots, x_n)'}</Math>) is a collection of
          objects <Math>{'x_i'}</Math>, one for every natural number <Math>{'i'}</Math> between
          1 and <Math>{'n'}</Math>; we refer to <Math>{'x_i'}</Math> as the <Math>{'i'}</Math>th
          component.
        </p>
        <p className="mb-3">
          Two ordered <Math>{'n'}</Math>-tuples <Math>{'(x_i)_{1 \\leq i \\leq n}'}</Math> and{' '}
          <Math>{'(y_i)_{1 \\leq i \\leq n}'}</Math> are equal iff{' '}
          <Math>{'x_i = y_i'}</Math> for all <Math>{'1 \\leq i \\leq n'}</Math>.
        </p>
        <p className="mb-3">
          If <Math>{'(X_i)_{1 \\leq i \\leq n}'}</Math> is an ordered <Math>{'n'}</Math>-tuple
          of sets, we define their <strong className="text-blue-300">Cartesian product</strong>:
        </p>
        <MathBlock>{`\\prod_{1 \\leq i \\leq n} X_i := \\{(x_i)_{1 \\leq i \\leq n} : x_i \\in X_i \\text{ for all } 1 \\leq i \\leq n\\}.`}</MathBlock>
      </Definition>

      <Example title="Example 3.5.9">
        <p className="mb-3">
          Let <Math>{'X_1 := \\{a_1, b_1\\}'}</Math>, <Math>{'X_2 := \\{a_2, b_2\\}'}</Math>,
          and <Math>{'X_3 := \\{a_3, b_3\\}'}</Math>. Then:
        </p>
        <MathBlock>{`X_1 \\times X_2 \\times X_3 = \\{(a_1, a_2, a_3), (a_1, a_2, b_3), (a_1, b_2, a_3), \\ldots\\}`}</MathBlock>
        <p className="mt-3 mb-3">
          Note that <Math>{'X_1 \\times X_2 \\times X_3'}</Math>,{' '}
          <Math>{'(X_1 \\times X_2) \\times X_3'}</Math>, and{' '}
          <Math>{'X_1 \\times (X_2 \\times X_3)'}</Math> are technically distinct sets, but there
          are obvious bijections between any two of them, so we often treat them as equal in practice.
        </p>
      </Example>

      <Callout type="info">
        <strong>Remark 3.5.10</strong>
        <p className="mt-2">
          An ordered <Math>{'n'}</Math>-tuple <Math>{'x_1, \\ldots, x_n'}</Math> is also called
          an <em>ordered sequence</em> of <Math>{'n'}</Math> elements, or a <em>finite sequence</em>.
          In Chapter 5 we shall introduce the very useful concept of an <em>infinite sequence</em>.
        </p>
      </Callout>

      <Example title="Example 3.5.11 (Special cases)">
        <ul className="list-disc list-inside space-y-3 text-dark-300">
          <li>
            If <Math>{'x'}</Math> is an object, then <Math>{'(x)'}</Math> is a 1-tuple, which we
            identify with <Math>{'x'}</Math> itself.
          </li>
          <li>
            If <Math>{'X_1'}</Math> is any set, then <Math>{'\\prod_{1 \\leq i \\leq 1} X_i'}</Math>{' '}
            is just <Math>{'X_1'}</Math>.
          </li>
          <li>
            The <em>empty Cartesian product</em> <Math>{'\\prod_{1 \\leq i \\leq 0} X_i'}</Math>{' '}
            gives not the empty set <Math>{'\\{\\}'}</Math>, but rather the singleton
            set <Math>{'\\{()\\}'}</Math> whose only element is the 0-tuple <Math>{'()'}</Math>,
            also known as the <em>empty tuple</em>.
          </li>
          <li>
            We write <Math>{'X^n'}</Math> for the <Math>{'n'}</Math>-fold Cartesian
            product <Math>{'\\prod_{1 \\leq i \\leq n} X'}</Math>. Thus <Math>{'X^1 \\approx X'}</Math>,{' '}
            <Math>{'X^2 = X \\times X'}</Math>, and <Math>{'X^0 = \\{()\\}'}</Math>.
          </li>
        </ul>
      </Example>

      {/* Finite Choice */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-6">
        Finite Choice
      </h2>

      <Theorem title="Lemma 3.5.12 (Finite choice)">
        <p className="mb-3">
          Let <Math>{'n \\geq 1'}</Math> be a natural number, and for each natural
          number <Math>{'1 \\leq i \\leq n'}</Math>, let <Math>{'X_i'}</Math> be a non-empty set.
        </p>
        <p>
          Then there exists an <Math>{'n'}</Math>-tuple <Math>{'(x_i)_{1 \\leq i \\leq n}'}</Math>{' '}
          such that <Math>{'x_i \\in X_i'}</Math> for all <Math>{'1 \\leq i \\leq n'}</Math>.
        </p>
        <p className="mt-3 text-emerald-300">
          In other words, if each <Math>{'X_i'}</Math> is non-empty, then the
          set <Math>{'\\prod_{1 \\leq i \\leq n} X_i'}</Math> is also non-empty.
        </p>
      </Theorem>

      <div className="mt-6 p-4 rounded-xl bg-dark-800/50 border border-dark-700">
        <p className="font-semibold text-dark-200 mb-3">Proof</p>
        <p className="text-dark-300 mb-3">
          We induct on <Math>{'n'}</Math> (starting with the base case <Math>{'n = 1'}</Math>).
        </p>
        <p className="text-dark-300 mb-3">
          <strong>Base case:</strong> When <Math>{'n = 1'}</Math>, the claim follows from the
          single choice lemma (Lemma 3.1.6).
        </p>
        <p className="text-dark-300 mb-3">
          <strong>Inductive step:</strong> Suppose the claim has been proven for
          some <Math>{'n'}</Math>; we prove it for <Math>{'n{++}'}</Math>.
          Let <Math>{'X_1, \\ldots, X_{n{++}}'}</Math> be non-empty sets. By induction hypothesis,
          we can find an <Math>{'n'}</Math>-tuple <Math>{'(x_i)_{1 \\leq i \\leq n}'}</Math> with{' '}
          <Math>{'x_i \\in X_i'}</Math> for all <Math>{'1 \\leq i \\leq n'}</Math>.
        </p>
        <p className="text-dark-300 mb-3">
          Since <Math>{'X_{n{++}}'}</Math> is non-empty, by Lemma 3.1.6 we may find an
          object <Math>{'a'}</Math> such that <Math>{'a \\in X_{n{++}}'}</Math>. Define
          the <Math>{'(n{++})'}</Math>-tuple <Math>{'(y_i)_{1 \\leq i \\leq n{++}}'}</Math> by
          setting <Math>{'y_i := x_i'}</Math> when <Math>{'1 \\leq i \\leq n'}</Math> and{' '}
          <Math>{'y_i := a'}</Math> when <Math>{'i = n{++}'}</Math>. Then{' '}
          <Math>{'y_i \\in X_i'}</Math> for all <Math>{'1 \\leq i \\leq n{++}'}</Math>.
        </p>
        <div className="text-right text-dark-400">□</div>
      </div>

      <Callout type="warning">
        <strong>Remark 3.5.13</strong>
        <p className="mt-2">
          It is intuitively plausible that this lemma should be extended to allow for
          an <em>infinite</em> number of choices, but this cannot be done automatically; it
          requires an additional axiom, the <strong className="text-amber-300">axiom of choice</strong>.
          See Section 8.4.
        </p>
      </Callout>

      {/* Properties */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-6">
        Properties of Cartesian Products
      </h2>

      <div className="space-y-4">
        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700">
          <p className="font-semibold text-dark-200">Distributivity over Union</p>
          <MathBlock>{`A \\times (B \\cup C) = (A \\times B) \\cup (A \\times C)`}</MathBlock>
        </div>

        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700">
          <p className="font-semibold text-dark-200">Distributivity over Intersection</p>
          <MathBlock>{`A \\times (B \\cap C) = (A \\times B) \\cap (A \\times C)`}</MathBlock>
        </div>

        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700">
          <p className="font-semibold text-dark-200">Distributivity over Difference</p>
          <MathBlock>{`A \\times (B \\setminus C) = (A \\times B) \\setminus (A \\times C)`}</MathBlock>
        </div>

        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700">
          <p className="font-semibold text-dark-200">Intersection of Products</p>
          <MathBlock>{`(A \\times B) \\cap (C \\times D) = (A \\cap C) \\times (B \\cap D)`}</MathBlock>
        </div>

        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700">
          <p className="font-semibold text-dark-200">Subset Characterization</p>
          <p className="text-dark-300 mt-2">
            For non-empty sets <Math>{'A, B, C, D'}</Math>:
          </p>
          <MathBlock>{`A \\times B \\subseteq C \\times D \\iff A \\subseteq C \\text{ and } B \\subseteq D`}</MathBlock>
        </div>
      </div>

      {/* Exercises */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-6">
        Exercises
      </h2>

      <div className="space-y-4">
        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700">
          <p className="font-semibold text-dark-200">Exercise 3.5.1</p>
          <p className="text-dark-400 mt-2">
            Suppose we define the ordered pair <Math>{'(x, y)'}</Math> by the
            formula <Math>{'(x, y) := \\{\\{x\\}, \\{x, y\\}\\}'}</Math>. Show that such a
            definition obeys the property that <Math>{'(x, y) = (x\', y\') \\iff x = x\' \\text{ and } y = y\''}</Math>,
            and also that <Math>{'X \\times Y'}</Math> is a set whenever <Math>{'X'}</Math> and{' '}
            <Math>{'Y'}</Math> are sets.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700">
          <p className="font-semibold text-dark-200">Exercise 3.5.4</p>
          <p className="text-dark-400 mt-2">
            Let <Math>{'A, B, C'}</Math> be sets. Show that{' '}
            <Math>{'A \\times (B \\cup C) = (A \\times B) \\cup (A \\times C)'}</Math>,
            that <Math>{'A \\times (B \\cap C) = (A \\times B) \\cap (A \\times C)'}</Math>,
            and that <Math>{'A \\times (B \\setminus C) = (A \\times B) \\setminus (A \\times C)'}</Math>.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700">
          <p className="font-semibold text-dark-200">Exercise 3.5.6</p>
          <p className="text-dark-400 mt-2">
            Let <Math>{'A, B, C, D'}</Math> be non-empty sets. Show that{' '}
            <Math>{'A \\times B \\subseteq C \\times D'}</Math> if and only
            if <Math>{'A \\subseteq C'}</Math> and <Math>{'B \\subseteq D'}</Math>,
            and that <Math>{'A \\times B = C \\times D'}</Math> if and only
            if <Math>{'A = C'}</Math> and <Math>{'B = D'}</Math>. What happens if the hypotheses
            that <Math>{'A, B, C, D'}</Math> are non-empty are removed?
          </p>
        </div>

        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700">
          <p className="font-semibold text-dark-200">Exercise 3.5.8</p>
          <p className="text-dark-400 mt-2">
            Let <Math>{'X_1, \\ldots, X_n'}</Math> be sets. Show that the Cartesian
            product <Math>{'\\prod_{i=1}^{n} X_i'}</Math> is empty if and only if at least one
            of the <Math>{'X_i'}</Math> is empty.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700">
          <p className="font-semibold text-dark-200">Exercise 3.5.10</p>
          <p className="text-dark-400 mt-2">
            If <Math>{'f : X \\to Y'}</Math> is a function, define the <em>graph</em> of{' '}
            <Math>{'f'}</Math> to be the subset of <Math>{'X \\times Y'}</Math> defined
            by <Math>{'\\{(x, f(x)) : x \\in X\\}'}</Math>. Show that two
            functions <Math>{'f, \\tilde{f} : X \\to Y'}</Math> are equal if and only if they have
            the same graph. Conversely, if <Math>{'G'}</Math> is any subset of{' '}
            <Math>{'X \\times Y'}</Math> with the property that for each{' '}
            <Math>{'x \\in X'}</Math>, the set <Math>{'\\{y \\in Y : (x, y) \\in G\\}'}</Math> has
            exactly one element (the <em>vertical line test</em>), show that there is exactly one
            function <Math>{'f : X \\to Y'}</Math> whose graph is equal to <Math>{'G'}</Math>.
          </p>
        </div>
      </div>

      {/* Summary */}
      <div className="mt-10 p-6 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-600/5 border border-indigo-500/20">
        <h3 className="text-lg font-semibold text-indigo-400 mb-3">Key Takeaways</h3>
        <ul className="space-y-2 text-dark-300">
          <li>
            <strong className="text-dark-200">Ordered pairs</strong> are fundamental objects
            where <Math>{'(x, y) = (x\', y\')'}</Math> requires both components to match.
          </li>
          <li>
            <strong className="text-dark-200">Cartesian products</strong>{' '}
            <Math>{'X \\times Y'}</Math> collect all ordered pairs with first component
            in <Math>{'X'}</Math> and second in <Math>{'Y'}</Math>.
          </li>
          <li>
            <strong className="text-dark-200">Ordered <Math>{'n'}</Math>-tuples</strong> generalize
            pairs to sequences of <Math>{'n'}</Math> objects with componentwise equality.
          </li>
          <li>
            <strong className="text-dark-200">Finite choice</strong> guarantees we can select
            elements from finitely many non-empty sets; infinite choice requires an additional axiom.
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
