import { LessonLayout } from '@/components/layout';
import { Definition, Theorem, Example, Axiom } from '@/components/common';
import { Callout } from '@/components/common';
import { Math, MathBlock } from '@/components/common';

export default function Section05() {
  return (
    <LessonLayout sectionId={5}>
      {/* Introduction */}
      <p className="text-lg text-dark-200 mb-6">
        Modern analysis, like most of modern mathematics, is concerned with numbers, sets, and
        geometry. We have already introduced one type of number system, the natural numbers.
        We will introduce the other number systems shortly, but for now we pause to introduce
        the concepts and notation of <strong className="text-indigo-400">set theory</strong>,
        as they will be used increasingly heavily in later chapters.
      </p>

      <p className="text-dark-300 mb-6">
        While set theory is not the main focus of this text, almost every other branch of
        mathematics relies on set theory as part of its foundation, so it is important to get
        at least some grounding in set theory before doing other advanced areas of mathematics.
      </p>

      {/* Informal Definition */}
      <Definition title="Definition 3.1.1 (Informal)">
        <p className="mb-3">
          We define a <strong className="text-blue-300">set</strong> <Math>{'A'}</Math> to be
          any unordered collection of objects, e.g., <Math>{'\\{3, 8, 5, 2\\}'}</Math> is a set.
        </p>
        <p>
          If <Math>{'x'}</Math> is an object, we say that <Math>{'x'}</Math> is an{' '}
          <strong className="text-blue-300">element of</strong> <Math>{'A'}</Math> or{' '}
          <Math>{'x \\in A'}</Math> if <Math>{'x'}</Math> lies in the collection; otherwise
          we say that <Math>{'x \\notin A'}</Math>.
        </p>
      </Definition>

      <Example title="Example">
        <p>
          <Math>{'3 \\in \\{1, 2, 3, 4, 5\\}'}</Math> but{' '}
          <Math>{'7 \\notin \\{1, 2, 3, 4, 5\\}'}</Math>.
        </p>
      </Example>

      {/* Axiom 3.1 */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-6">
        Sets as Objects
      </h2>

      <Axiom title="Axiom 3.1 (Sets are Objects)">
        <p>
          If <Math>{'A'}</Math> is a set, then <Math>{'A'}</Math> is also an object. In
          particular, given two sets <Math>{'A'}</Math> and <Math>{'B'}</Math>, it is
          meaningful to ask whether <Math>{'A'}</Math> is also an element of <Math>{'B'}</Math>.
        </p>
      </Axiom>

      <Example title="Example 3.1.2 (Informal)">
        <p>
          The set <Math>{'\\{3, \\{3, 4\\}, 4\\}'}</Math> is a set of three distinct elements,
          one of which happens to itself be a set of two elements. However, not all objects are
          sets; for instance, we typically do not consider a natural number such as 3 to be a set.
        </p>
      </Example>

      {/* Equality of Sets */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-6">
        Equality of Sets
      </h2>

      <p className="text-dark-300 mb-6">
        We do not consider the order of the elements inside a set to be important; thus we
        think of <Math>{'\\{3, 8, 5, 2\\}'}</Math> and <Math>{'\\{2, 3, 5, 8\\}'}</Math> as the
        same set. On the other hand, <Math>{'\\{3, 8, 5, 2\\}'}</Math> and{' '}
        <Math>{'\\{3, 8, 5, 2, 1\\}'}</Math> are different sets.
      </p>

      <Definition title="Definition 3.1.4 (Equality of Sets)">
        <p>
          Two sets <Math>{'A'}</Math> and <Math>{'B'}</Math> are <strong className="text-blue-300">equal</strong>,{' '}
          <Math>{'A = B'}</Math>, iff every element of <Math>{'A'}</Math> is an element of{' '}
          <Math>{'B'}</Math> and vice versa. To put it another way, <Math>{'A = B'}</Math> if
          and only if every element <Math>{'x'}</Math> of <Math>{'A'}</Math> belongs also to{' '}
          <Math>{'B'}</Math>, and every element <Math>{'y'}</Math> of <Math>{'B'}</Math>{' '}
          belongs also to <Math>{'A'}</Math>.
        </p>
      </Definition>

      <Example title="Example 3.1.5">
        <p>
          <Math>{'\\{1, 2, 3, 4, 5\\}'}</Math> and <Math>{'\\{3, 4, 2, 1, 5\\}'}</Math> are
          the same set, since they contain exactly the same elements. The set{' '}
          <Math>{'\\{3, 3, 1, 5, 2, 4, 2\\}'}</Math> is also equal to{' '}
          <Math>{'\\{1, 2, 3, 4, 5\\}'}</Math>; the repetition of 3 and 2 is irrelevant as it
          does not further change the status of 2 and 3 being elements of the set.
        </p>
      </Example>

      {/* Empty Set */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-6">
        The Empty Set
      </h2>

      <Axiom title="Axiom 3.2 (Empty Set)">
        <p>
          There exists a set <Math>{'\\emptyset'}</Math>, known as the{' '}
          <strong className="text-purple-300">empty set</strong>, which contains no elements,
          i.e., for every object <Math>{'x'}</Math> we have <Math>{'x \\notin \\emptyset'}</Math>.
        </p>
      </Axiom>

      <Callout type="info">
        <strong>Uniqueness of the Empty Set</strong>
        <p className="mt-2">
          There can only be one empty set; if there were two sets <Math>{'\\emptyset'}</Math>{' '}
          and <Math>{"\\emptyset'"}</Math> which were both empty, then by Definition 3.1.4
          they would be equal to each other. The empty set is also denoted{' '}
          <Math>{'\\{\\}'}</Math>.
        </p>
      </Callout>

      <Callout type="warning">
        <strong>Empty Set vs. Zero</strong>
        <p className="mt-2">
          The empty set is not the same thing as the natural number 0. One is a set; the other
          is a number. However, it is true that the <em>cardinality</em> of the empty set is 0.
        </p>
      </Callout>

      <Theorem title="Lemma 3.1.6 (Single Choice)" type="lemma">
        <p>
          Let <Math>{'A'}</Math> be a non-empty set. Then there exists an object{' '}
          <Math>{'x'}</Math> such that <Math>{'x \\in A'}</Math>.
        </p>
      </Theorem>

      {/* Singleton and Pair Sets */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-6">
        Singleton and Pair Sets
      </h2>

      <Axiom title="Axiom 3.3 (Singleton Sets and Pair Sets)">
        <p className="mb-3">
          If <Math>{'a'}</Math> is an object, then there exists a set{' '}
          <Math>{'\\{a\\}'}</Math> whose only element is <Math>{'a'}</Math>, i.e., for every
          object <Math>{'y'}</Math>, we have <Math>{'y \\in \\{a\\}'}</Math> if and only if{' '}
          <Math>{'y = a'}</Math>. We call <Math>{'\\{a\\}'}</Math> the{' '}
          <strong className="text-purple-300">singleton set</strong> whose element is{' '}
          <Math>{'a'}</Math>.
        </p>
        <p>
          Furthermore, if <Math>{'a'}</Math> and <Math>{'b'}</Math> are objects, then there
          exists a set <Math>{'\\{a, b\\}'}</Math> whose only elements are <Math>{'a'}</Math>{' '}
          and <Math>{'b'}</Math>. We call this the{' '}
          <strong className="text-purple-300">pair set</strong> formed by <Math>{'a'}</Math>{' '}
          and <Math>{'b'}</Math>.
        </p>
      </Axiom>

      <Example title="Examples 3.1.10">
        <p>
          Since <Math>{'\\emptyset'}</Math> is a set (and hence an object), the singleton set{' '}
          <Math>{'\\{\\emptyset\\}'}</Math> is also a set (and it is not the same set as{' '}
          <Math>{'\\emptyset'}</Math>). Similarly, the singleton set{' '}
          <Math>{'\\{\\{\\emptyset\\}\\}'}</Math> and the pair set{' '}
          <Math>{'\\{\\emptyset, \\{\\emptyset\\}\\}'}</Math> are also sets. These three sets
          are all distinct from each other.
        </p>
      </Example>

      {/* Pairwise Union */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-6">
        Pairwise Union
      </h2>

      <Axiom title="Axiom 3.4 (Pairwise Union)">
        <p className="mb-3">
          Given any two sets <Math>{'A, B'}</Math>, there exists a set <Math>{'A \\cup B'}</Math>,
          called the <strong className="text-purple-300">union</strong> of <Math>{'A'}</Math>{' '}
          and <Math>{'B'}</Math>, whose elements consists of all the elements which belong to{' '}
          <Math>{'A'}</Math> or <Math>{'B'}</Math> or both. In other words, for any object{' '}
          <Math>{'x'}</Math>:
        </p>
        <MathBlock>{`x \\in A \\cup B \\iff (x \\in A \\text{ or } x \\in B)`}</MathBlock>
      </Axiom>

      <Example title="Example 3.1.11">
        <p>
          The set <Math>{'\\{1, 2\\} \\cup \\{2, 3\\}'}</Math> consists of those elements which
          either lie in <Math>{'\\{1, 2\\}'}</Math> or in <Math>{'\\{2, 3\\}'}</Math> or in both,
          so <Math>{'\\{1, 2\\} \\cup \\{2, 3\\} = \\{1, 2, 3\\}'}</Math>.
        </p>
      </Example>

      <Theorem title="Lemma 3.1.13" type="lemma">
        <p className="mb-3">
          If <Math>{'a'}</Math> and <Math>{'b'}</Math> are objects, then{' '}
          <Math>{'\\{a, b\\} = \\{a\\} \\cup \\{b\\}'}</Math>.
        </p>
        <p className="mb-3">
          If <Math>{'A, B, C'}</Math> are sets, then the union operation is:
        </p>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>
            <strong className="text-amber-300">Commutative:</strong>{' '}
            <Math>{'A \\cup B = B \\cup A'}</Math>
          </li>
          <li>
            <strong className="text-amber-300">Associative:</strong>{' '}
            <Math>{'(A \\cup B) \\cup C = A \\cup (B \\cup C)'}</Math>
          </li>
          <li>
            <strong className="text-amber-300">Identity:</strong>{' '}
            <Math>{'A \\cup A = A \\cup \\emptyset = \\emptyset \\cup A = A'}</Math>
          </li>
        </ul>
      </Theorem>

      {/* Subsets */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-6">
        Subsets
      </h2>

      <Definition title="Definition 3.1.15 (Subsets)">
        <p className="mb-3">
          Let <Math>{'A, B'}</Math> be sets. We say that <Math>{'A'}</Math> is a{' '}
          <strong className="text-blue-300">subset</strong> of <Math>{'B'}</Math>, denoted{' '}
          <Math>{'A \\subseteq B'}</Math>, iff every element of <Math>{'A'}</Math> is also an
          element of <Math>{'B'}</Math>, i.e.,
        </p>
        <MathBlock>{`\\text{For any object } x, \\quad x \\in A \\implies x \\in B`}</MathBlock>
        <p className="mt-3">
          We say that <Math>{'A'}</Math> is a <strong className="text-blue-300">proper subset</strong>{' '}
          of <Math>{'B'}</Math>, denoted <Math>{'A \\subsetneq B'}</Math>, if{' '}
          <Math>{'A \\subseteq B'}</Math> and <Math>{'A \\neq B'}</Math>.
        </p>
      </Definition>

      <Example title="Examples 3.1.17">
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>
            <Math>{'\\{1, 2, 4\\} \\subseteq \\{1, 2, 3, 4, 5\\}'}</Math>, because every element
            of <Math>{'\\{1, 2, 4\\}'}</Math> is also an element of <Math>{'\\{1, 2, 3, 4, 5\\}'}</Math>.
          </li>
          <li>
            In fact <Math>{'\\{1, 2, 4\\} \\subsetneq \\{1, 2, 3, 4, 5\\}'}</Math> (proper subset),
            since the two sets are not equal.
          </li>
          <li>
            Given any set <Math>{'A'}</Math>, we always have <Math>{'A \\subseteq A'}</Math> and{' '}
            <Math>{'\\emptyset \\subseteq A'}</Math>.
          </li>
        </ul>
      </Example>

      <Theorem title="Proposition 3.1.18 (Sets are Partially Ordered by Set Inclusion)">
        <p className="mb-3">Let <Math>{'A, B, C'}</Math> be sets. Then:</p>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>
            <strong className="text-amber-300">Transitivity:</strong> If{' '}
            <Math>{'A \\subseteq B'}</Math> and <Math>{'B \\subseteq C'}</Math>, then{' '}
            <Math>{'A \\subseteq C'}</Math>.
          </li>
          <li>
            <strong className="text-amber-300">Anti-symmetry:</strong> If{' '}
            <Math>{'A \\subseteq B'}</Math> and <Math>{'B \\subseteq A'}</Math>, then{' '}
            <Math>{'A = B'}</Math>.
          </li>
          <li>
            <strong className="text-amber-300">Proper subsets:</strong> If{' '}
            <Math>{'A \\subsetneq B'}</Math> and <Math>{'B \\subsetneq C'}</Math>, then{' '}
            <Math>{'A \\subsetneq C'}</Math>.
          </li>
        </ul>
      </Theorem>

      <Callout type="warning">
        <strong>Subset vs. Element</strong>
        <p className="mt-2">
          The subset relation <Math>{'\\subseteq'}</Math> is not the same as the element
          relation <Math>{'\\in'}</Math>. The number 2 is an <em>element</em> of{' '}
          <Math>{'\\{1, 2, 3\\}'}</Math> but not a subset. Conversely, <Math>{'\\{2\\}'}</Math>{' '}
          is a <em>subset</em> of <Math>{'\\{1, 2, 3\\}'}</Math>, but it is not an element.
          The point is that the number 2 and the set <Math>{'\\{2\\}'}</Math> are distinct objects.
        </p>
      </Callout>

      {/* Axiom of Specification */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-6">
        Axiom of Specification
      </h2>

      <Axiom title="Axiom 3.5 (Axiom of Specification)">
        <p className="mb-3">
          Let <Math>{'A'}</Math> be a set, and for each <Math>{'x \\in A'}</Math>, let{' '}
          <Math>{'P(x)'}</Math> be a property pertaining to <Math>{'x'}</Math> (i.e.,{' '}
          <Math>{'P(x)'}</Math> is either a true statement or a false statement). Then there
          exists a set, called <Math>{'\\{x \\in A : P(x) \\text{ is true}\\}'}</Math>, whose
          elements are precisely the elements <Math>{'x'}</Math> in <Math>{'A'}</Math> for
          which <Math>{'P(x)'}</Math> is true:
        </p>
        <MathBlock>{`y \\in \\{x \\in A : P(x)\\} \\iff (y \\in A \\text{ and } P(y) \\text{ is true})`}</MathBlock>
      </Axiom>

      <Example title="Example 3.1.22">
        <p className="mb-3">
          Let <Math>{'S := \\{1, 2, 3, 4, 5\\}'}</Math>. Then:
        </p>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>
            <Math>{'\\{n \\in S : n < 4\\} = \\{1, 2, 3\\}'}</Math>
          </li>
          <li>
            <Math>{'\\{n \\in S : n < 7\\} = S'}</Math> itself
          </li>
          <li>
            <Math>{'\\{n \\in S : n < 1\\} = \\emptyset'}</Math>
          </li>
        </ul>
      </Example>

      {/* Intersections */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-6">
        Intersections and Difference Sets
      </h2>

      <Definition title="Definition 3.1.23 (Intersections)">
        <p className="mb-3">
          The <strong className="text-blue-300">intersection</strong>{' '}
          <Math>{'S_1 \\cap S_2'}</Math> of two sets is defined to be the set:
        </p>
        <MathBlock>{`S_1 \\cap S_2 := \\{x \\in S_1 : x \\in S_2\\}`}</MathBlock>
        <p className="mt-3">
          In other words, <Math>{'S_1 \\cap S_2'}</Math> consists of all the elements which
          belong to <em>both</em> <Math>{'S_1'}</Math> and <Math>{'S_2'}</Math>.
        </p>
      </Definition>

      <Example title="Examples 3.1.25">
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>
            <Math>{'\\{1, 2, 4\\} \\cap \\{2, 3, 4\\} = \\{2, 4\\}'}</Math>
          </li>
          <li>
            <Math>{'\\{1, 2\\} \\cap \\{3, 4\\} = \\emptyset'}</Math>
          </li>
          <li>
            <Math>{'\\{2, 3\\} \\cup \\emptyset = \\{2, 3\\}'}</Math>
          </li>
          <li>
            <Math>{'\\{2, 3\\} \\cap \\emptyset = \\emptyset'}</Math>
          </li>
        </ul>
      </Example>

      <Callout type="info">
        <strong>Disjoint vs. Distinct</strong>
        <p className="mt-2">
          Two sets <Math>{'A, B'}</Math> are said to be <strong>disjoint</strong> if{' '}
          <Math>{'A \\cap B = \\emptyset'}</Math>. Note that this is not the same concept as
          being <strong>distinct</strong>, <Math>{'A \\neq B'}</Math>. For instance, the sets{' '}
          <Math>{'\\{1, 2, 3\\}'}</Math> and <Math>{'\\{2, 3, 4\\}'}</Math> are distinct but
          not disjoint. Meanwhile, <Math>{'\\emptyset'}</Math> and <Math>{'\\emptyset'}</Math>{' '}
          are disjoint but not distinct.
        </p>
      </Callout>

      <Definition title="Definition 3.1.27 (Difference Sets)">
        <p className="mb-3">
          Given two sets <Math>{'A'}</Math> and <Math>{'B'}</Math>, we define the{' '}
          <strong className="text-blue-300">set difference</strong>{' '}
          <Math>{'A - B'}</Math> or <Math>{'A \\setminus B'}</Math> to be the set{' '}
          <Math>{'A'}</Math> with any elements of <Math>{'B'}</Math> removed:
        </p>
        <MathBlock>{`A \\setminus B := \\{x \\in A : x \\notin B\\}`}</MathBlock>
        <p className="mt-3">
          For instance, <Math>{'\\{1, 2, 3, 4\\} \\setminus \\{2, 4, 6\\} = \\{1, 3\\}'}</Math>.
        </p>
      </Definition>

      {/* Boolean Algebra */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-6">
        Boolean Algebra
      </h2>

      <Theorem title="Proposition 3.1.28 (Sets Form a Boolean Algebra)">
        <p className="mb-3">
          Let <Math>{'A, B, C'}</Math> be sets, and let <Math>{'X'}</Math> be a set
          containing <Math>{'A, B, C'}</Math> as subsets. Then:
        </p>
        <ul className="list-disc list-inside space-y-3 text-dark-300">
          <li>
            <strong className="text-amber-300">(a) Minimal element:</strong>{' '}
            <Math>{'A \\cup \\emptyset = A'}</Math> and{' '}
            <Math>{'A \\cap \\emptyset = \\emptyset'}</Math>
          </li>
          <li>
            <strong className="text-amber-300">(b) Maximal element:</strong>{' '}
            <Math>{'A \\cup X = X'}</Math> and <Math>{'A \\cap X = A'}</Math>
          </li>
          <li>
            <strong className="text-amber-300">(c) Identity:</strong>{' '}
            <Math>{'A \\cap A = A'}</Math> and <Math>{'A \\cup A = A'}</Math>
          </li>
          <li>
            <strong className="text-amber-300">(d) Commutativity:</strong>{' '}
            <Math>{'A \\cup B = B \\cup A'}</Math> and{' '}
            <Math>{'A \\cap B = B \\cap A'}</Math>
          </li>
          <li>
            <strong className="text-amber-300">(e) Associativity:</strong>{' '}
            <Math>{'(A \\cup B) \\cup C = A \\cup (B \\cup C)'}</Math> and{' '}
            <Math>{'(A \\cap B) \\cap C = A \\cap (B \\cap C)'}</Math>
          </li>
          <li>
            <strong className="text-amber-300">(f) Distributivity:</strong>{' '}
            <Math>{'A \\cap (B \\cup C) = (A \\cap B) \\cup (A \\cap C)'}</Math> and{' '}
            <Math>{'A \\cup (B \\cap C) = (A \\cup B) \\cap (A \\cup C)'}</Math>
          </li>
          <li>
            <strong className="text-amber-300">(g) Partition:</strong>{' '}
            <Math>{'A \\cup (X \\setminus A) = X'}</Math> and{' '}
            <Math>{'A \\cap (X \\setminus A) = \\emptyset'}</Math>
          </li>
          <li>
            <strong className="text-amber-300">(h) De Morgan laws:</strong>{' '}
            <Math>{'X \\setminus (A \\cup B) = (X \\setminus A) \\cap (X \\setminus B)'}</Math>{' '}
            and <Math>{'X \\setminus (A \\cap B) = (X \\setminus A) \\cup (X \\setminus B)'}</Math>
          </li>
        </ul>
      </Theorem>

      <Callout type="info">
        <strong>De Morgan Laws</strong>
        <p className="mt-2">
          The de Morgan laws are named after the logician Augustus De Morgan (1806&ndash;1871),
          who identified them as one of the basic laws of set theory. Notice the symmetry in
          the above laws between <Math>{'\\cup'}</Math> and <Math>{'\\cap'}</Math>, and between{' '}
          <Math>{'X'}</Math> and <Math>{'\\emptyset'}</Math>. This is an example of{' '}
          <strong>duality</strong>.
        </p>
      </Callout>

      {/* Replacement and Infinity */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-6">
        Replacement and Infinity
      </h2>

      <Axiom title="Axiom 3.6 (Replacement)">
        <p>
          Let <Math>{'A'}</Math> be a set. For any object <Math>{'x \\in A'}</Math>, and any
          object <Math>{'y'}</Math>, suppose we have a statement <Math>{'P(x, y)'}</Math>{' '}
          pertaining to <Math>{'x'}</Math> and <Math>{'y'}</Math>, such that for each{' '}
          <Math>{'x \\in A'}</Math> there is <em>at most one</em> <Math>{'y'}</Math> for which{' '}
          <Math>{'P(x, y)'}</Math> is true. Then there exists a set{' '}
          <Math>{'\\{y : P(x, y) \\text{ is true for some } x \\in A\\}'}</Math>.
        </p>
      </Axiom>

      <Example title="Example 3.1.31">
        <p>
          Let <Math>{'A := \\{3, 5, 9\\}'}</Math>, and let <Math>{'P(x, y)'}</Math> be the
          statement <Math>{'y = x\\texttt{++}'}</Math>. For every <Math>{'x \\in A'}</Math>,
          there is exactly one <Math>{'y'}</Math> for which <Math>{'P(x, y)'}</Math> is true
          &mdash; namely, the successor of <Math>{'x'}</Math>. Thus the axiom asserts that
          the set <Math>{'\\{y : y = x\\texttt{++} \\text{ for some } x \\in \\{3,5,9\\}\\}'}</Math>{' '}
          exists; in this case, it is the set <Math>{'\\{4, 6, 10\\}'}</Math>.
        </p>
      </Example>

      <p className="text-dark-300 mb-6">
        We often abbreviate a set of the form{' '}
        <Math>{'\\{y : y = f(x) \\text{ for some } x \\in A\\}'}</Math> as{' '}
        <Math>{'\\{f(x) : x \\in A\\}'}</Math>.
      </p>

      <Axiom title="Axiom 3.7 (Infinity)">
        <p>
          There exists a set <Math>{'\\mathbf{N}'}</Math>, whose elements are called{' '}
          <strong className="text-purple-300">natural numbers</strong>, as well as an object{' '}
          <Math>{'0'}</Math> in <Math>{'\\mathbf{N}'}</Math>, and an object{' '}
          <Math>{'n\\texttt{++}'}</Math> assigned to every natural number{' '}
          <Math>{'n \\in \\mathbf{N}'}</Math>, such that the Peano axioms (Axioms 2.1&ndash;2.5)
          hold.
        </p>
      </Axiom>

      <Callout type="info">
        <strong>The Axiom of Infinity</strong>
        <p className="mt-2">
          This is called the axiom of infinity because it introduces the most basic example
          of an <strong>infinite set</strong>, namely the set of natural numbers{' '}
          <Math>{'\\mathbf{N}'}</Math>. From the axiom of infinity we see that numbers such
          as 3, 5, 7, etc. are indeed objects in set theory, and so we can legitimately
          construct sets such as <Math>{'\\{3, 5, 9\\}'}</Math>.
        </p>
      </Callout>

      {/* Summary */}
      <div className="mt-10 p-6 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-600/5 border border-indigo-500/20">
        <h3 className="text-lg font-semibold text-indigo-400 mb-3">Section Summary: Set Theory Axioms</h3>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>
            <strong>Axiom 3.1:</strong> Sets are objects
          </li>
          <li>
            <strong>Axiom 3.2:</strong> The empty set <Math>{'\\emptyset'}</Math> exists
          </li>
          <li>
            <strong>Axiom 3.3:</strong> Singleton sets <Math>{'\\{a\\}'}</Math> and pair sets{' '}
            <Math>{'\\{a, b\\}'}</Math> exist
          </li>
          <li>
            <strong>Axiom 3.4:</strong> Pairwise unions <Math>{'A \\cup B'}</Math> exist
          </li>
          <li>
            <strong>Axiom 3.5:</strong> Specification &mdash; we can form{' '}
            <Math>{'\\{x \\in A : P(x)\\}'}</Math>
          </li>
          <li>
            <strong>Axiom 3.6:</strong> Replacement &mdash; we can form{' '}
            <Math>{'\\{f(x) : x \\in A\\}'}</Math>
          </li>
          <li>
            <strong>Axiom 3.7:</strong> Infinity &mdash; the natural numbers{' '}
            <Math>{'\\mathbf{N}'}</Math> form a set
          </li>
        </ul>
      </div>

      {/* Operations Summary */}
      <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-amber-500/10 to-orange-600/5 border border-amber-500/20">
        <h3 className="text-lg font-semibold text-amber-400 mb-3">Set Operations Summary</h3>
        <div className="space-y-3 text-dark-300">
          <p>
            <strong className="text-amber-300">Union:</strong>{' '}
            <Math>{'x \\in A \\cup B \\iff x \\in A \\text{ or } x \\in B'}</Math>
          </p>
          <p>
            <strong className="text-amber-300">Intersection:</strong>{' '}
            <Math>{'x \\in A \\cap B \\iff x \\in A \\text{ and } x \\in B'}</Math>
          </p>
          <p>
            <strong className="text-amber-300">Difference:</strong>{' '}
            <Math>{'x \\in A \\setminus B \\iff x \\in A \\text{ and } x \\notin B'}</Math>
          </p>
          <p>
            <strong className="text-amber-300">Subset:</strong>{' '}
            <Math>{'A \\subseteq B \\iff (\\forall x, x \\in A \\implies x \\in B)'}</Math>
          </p>
        </div>
      </div>
    </LessonLayout>
  );
}
