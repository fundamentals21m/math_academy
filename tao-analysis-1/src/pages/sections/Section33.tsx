import { LessonLayout } from '@/components/layout';
import { Definition, Theorem, Example } from '@/components/common';
import { Callout } from '@/components/common';
import { Math, MathBlock } from '@/components/common';

export default function Section33() {
  return (
    <LessonLayout sectionId={33}>
      {/* ========== INTRODUCTION ========== */}
      <section className="mb-12">
        <p className="mb-4">
          We now return to the study of set theory, and specifically to the study of cardinality
          of sets which are <strong>infinite</strong> (i.e., sets which do not have cardinality{' '}
          <Math>n</Math> for any natural number <Math>n</Math>), a topic which was initiated
          in Section 3.6.
        </p>
        <p className="mb-4">
          From earlier results, we know that if <Math>X</Math> is a finite set and <Math>Y</Math> is
          a proper subset of <Math>X</Math>, then <Math>Y</Math> does not have equal cardinality
          with <Math>X</Math>. However, this is <em>not</em> the case for infinite sets.
        </p>
        <p className="mb-4">
          For instance, the set <Math>{`\\mathbf{N}`}</Math> of natural numbers is infinite.
          The set <Math>{`\\mathbf{N} - \\{0\\}`}</Math> is also infinite and is a proper subset
          of <Math>{`\\mathbf{N}`}</Math>. However, despite being "smaller," it still has the
          same cardinality as <Math>{`\\mathbf{N}`}</Math>, because the function{' '}
          <Math>{`f: \\mathbf{N} \\to \\mathbf{N} - \\{0\\}`}</Math> defined by{' '}
          <Math>{`f(n) := n + 1`}</Math> is a bijection.
        </p>
        <Callout type="info">
          This is one characteristic of infinite sets: they can have proper subsets with the
          same cardinality as the whole set. We now distinguish two types of infinite sets:
          the <strong>countable</strong> sets and the <strong>uncountable</strong> sets.
        </Callout>
      </section>

      {/* ========== DEFINITION: COUNTABLE SETS ========== */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Countable and Uncountable Sets</h2>

        <Definition
          id="def-8.1.1"
          title="Definition 8.1.1: Countable Sets"
        >
          <p className="mb-2">
            A set <Math>X</Math> is said to be <strong>countably infinite</strong> (or just{' '}
            <strong>countable</strong>) iff it has equal cardinality with the natural
            numbers <Math>{`\\mathbf{N}`}</Math>.
          </p>
          <p className="mb-2">
            A set <Math>X</Math> is said to be <strong>at most countable</strong> iff it is
            either countable or finite.
          </p>
          <p>
            We say that a set is <strong>uncountable</strong> if it is infinite but not countable.
          </p>
        </Definition>

        <p className="my-4">
          Countably infinite sets are also called <strong>denumerable</strong> sets.
        </p>

        <Example
          id="ex-8.1.3"
          title="Example 8.1.3: Basic Countable Sets"
        >
          <p className="mb-2">
            From the preceding discussion we see that <Math>{`\\mathbf{N}`}</Math> is countable,
            and so is <Math>{`\\mathbf{N} - \\{0\\}`}</Math>. Another example of a countable set
            is the even natural numbers <Math>{`\\{2n : n \\in \\mathbf{N}\\}`}</Math>, since the
            function <Math>{`f(n) := 2n`}</Math> provides a bijection between <Math>{`\\mathbf{N}`}</Math> and
            the even natural numbers.
          </p>
        </Example>

        <p className="my-4">
          Let <Math>X</Math> be a countable set. Then, by definition, there exists a
          bijection <Math>{`f: \\mathbf{N} \\to X`}</Math>. Thus, every element of <Math>X</Math> can
          be written in the form <Math>{`f(n)`}</Math> for exactly one natural number <Math>n</Math>.
          Informally, we thus have:
        </p>
        <MathBlock>{`X = \\{f(0), f(1), f(2), f(3), \\ldots\\}.`}</MathBlock>
        <p className="my-4">
          Thus, a countable set can be arranged in a sequence, so that we have a zeroth
          element <Math>{`f(0)`}</Math>, followed by a first element <Math>{`f(1)`}</Math>, then
          a second element <Math>{`f(2)`}</Math>, and so forth, in such a way that all these
          elements are distinct and together fill out all of <Math>X</Math>. This is why
          these sets are called <em>countable</em>: we can literally count them one by one.
        </p>
      </section>

      {/* ========== WELL ORDERING PRINCIPLE ========== */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">The Well-Ordering Principle</h2>

        <p className="mb-4">
          Before we can prove key results about countable sets, we need an important property
          of the natural numbers.
        </p>

        <Theorem
          id="prop-8.1.4"
          title="Proposition 8.1.4: Well-Ordering Principle"
          statement={
            <>
              Let <Math>X</Math> be a non-empty subset of the natural numbers{' '}
              <Math>{`\\mathbf{N}`}</Math>. Then there exists exactly one element{' '}
              <Math>{`n \\in X`}</Math> such that <Math>{`n \\le m`}</Math> for
              all <Math>{`m \\in X`}</Math>. In other words, every non-empty set of natural
              numbers has a <strong>minimum element</strong>.
            </>
          }
          proof={
            <>
              <p className="mb-2">
                We prove by strong induction that for every natural number <Math>n</Math>,
                if <Math>X</Math> contains an element less than or equal to <Math>n</Math>,
                then <Math>X</Math> has a minimum element.
              </p>
              <p className="mb-2">
                <strong>Base case:</strong> If <Math>{`0 \\in X`}</Math>, then <Math>0</Math> is
                the minimum since <Math>{`0 \\le m`}</Math> for all <Math>{`m \\in \\mathbf{N}`}</Math>.
              </p>
              <p className="mb-2">
                <strong>Inductive step:</strong> Suppose for all <Math>{`k \\le n`}</Math>,
                if <Math>X</Math> contains an element <Math>{`\\le k`}</Math>, then <Math>X</Math> has
                a minimum. Now suppose <Math>X</Math> contains an element <Math>{`\\le n+1`}</Math>.
                Either <Math>X</Math> contains some element <Math>{`\\le n`}</Math> (and we're done
                by induction), or the smallest element in <Math>X</Math> is <Math>{`n+1`}</Math>,
                which is then the minimum.
              </p>
              <p>
                Since <Math>X</Math> is non-empty, it contains some <Math>n</Math>, and by
                induction, <Math>X</Math> has a minimum.
              </p>
            </>
          }
        />

        <p className="my-4">
          We refer to the element <Math>n</Math> given by the well-ordering principle as
          the <strong>minimum</strong> of <Math>X</Math>, and write it as <Math>{`\\min(X)`}</Math>.
          For instance, the minimum of the set <Math>{`\\{2, 4, 6, 8, \\ldots\\}`}</Math> is <Math>2</Math>.
        </p>
      </section>

      {/* ========== INFINITE SUBSETS OF N ========== */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Countability of Subsets</h2>

        <Theorem
          id="prop-8.1.5"
          title="Proposition 8.1.5: Infinite Subsets of N are Countable"
          statement={
            <>
              Let <Math>X</Math> be an infinite subset of the natural numbers{' '}
              <Math>{`\\mathbf{N}`}</Math>. Then there exists a unique bijection{' '}
              <Math>{`f: \\mathbf{N} \\to X`}</Math> which is <strong>increasing</strong>,
              in the sense that <Math>{`f(n+1) > f(n)`}</Math> for all <Math>{`n \\in \\mathbf{N}`}</Math>.
              In particular, <Math>X</Math> has equal cardinality with <Math>{`\\mathbf{N}`}</Math> and
              is hence countable.
            </>
          }
          proof={
            <>
              <p className="mb-2">
                We define a sequence <Math>{`a_0, a_1, a_2, \\ldots`}</Math> of natural numbers
                recursively by the formula:
              </p>
              <MathBlock>{`a_n := \\min\\{x \\in X : x \\ne a_m \\text{ for all } m < n\\}.`}</MathBlock>
              <p className="my-2">
                Intuitively: <Math>{`a_0`}</Math> is the smallest element of <Math>X</Math>;{' '}
                <Math>{`a_1`}</Math> is the second smallest element (smallest after <Math>{`a_0`}</Math> is
                removed); <Math>{`a_2`}</Math> is the third smallest; and so forth.
              </p>
              <p className="mb-2">
                Since <Math>X</Math> is infinite, the set <Math>{`\\{x \\in X : x \\ne a_m \\text{ for all } m < n\\}`}</Math> is
                non-empty for each <Math>n</Math>, so by the well-ordering principle, the minimum
                is always well-defined.
              </p>
              <p className="mb-2">
                By construction, <Math>{`(a_n)`}</Math> is an increasing sequence with{' '}
                <Math>{`a_n \\in X`}</Math> for each <Math>n</Math>, and <Math>{`a_n \\ne a_m`}</Math> whenever{' '}
                <Math>{`n \\ne m`}</Math>.
              </p>
              <p className="mb-2">
                Define <Math>{`f: \\mathbf{N} \\to X`}</Math> by <Math>{`f(n) := a_n`}</Math>. This
                is one-to-one. To show it's onto: let <Math>{`x \\in X`}</Math>. If{' '}
                <Math>{`a_n \\ne x`}</Math> for all <Math>n</Math>, then <Math>{`x \\ge a_n`}</Math> for
                all <Math>n</Math>. But <Math>{`a_n \\ge n`}</Math> (since <Math>{`(a_n)`}</Math> is
                increasing), so <Math>{`x \\ge n`}</Math> for all <Math>n</Math>, giving{' '}
                <Math>{`x \\ge x + 1`}</Math>, a contradiction. Thus <Math>{`a_n = x`}</Math> for
                some <Math>n</Math>, and <Math>f</Math> is onto.
              </p>
              <p>
                Uniqueness of the increasing bijection follows from the uniqueness of the
                minimum at each step.
              </p>
            </>
          }
        />

        <Theorem
          id="cor-8.1.6"
          title="Corollary 8.1.6"
          statement={
            <>
              All subsets of the natural numbers are at most countable.
            </>
          }
          proof={
            <>
              Since finite sets are at most countable by definition, and infinite subsets
              of <Math>{`\\mathbf{N}`}</Math> are countable by Proposition 8.1.5, every subset
              of <Math>{`\\mathbf{N}`}</Math> is at most countable.
            </>
          }
        />

        <Theorem
          id="cor-8.1.7"
          title="Corollary 8.1.7"
          statement={
            <>
              If <Math>X</Math> is an at most countable set, and <Math>Y</Math> is a subset
              of <Math>X</Math>, then <Math>Y</Math> is at most countable.
            </>
          }
          proof={
            <>
              <p className="mb-2">
                If <Math>X</Math> is finite, then <Math>Y</Math> is finite (subsets of finite
                sets are finite), hence at most countable.
              </p>
              <p className="mb-2">
                If <Math>X</Math> is countable, there is a bijection <Math>{`f: X \\to \\mathbf{N}`}</Math>.
                Restricting <Math>f</Math> to <Math>Y</Math> gives a bijection between <Math>Y</Math> and{' '}
                <Math>{`f(Y)`}</Math>. Since <Math>{`f(Y) \\subseteq \\mathbf{N}`}</Math>, by
                Corollary 8.1.6, <Math>{`f(Y)`}</Math> is at most countable. Hence <Math>Y</Math> is
                at most countable.
              </p>
            </>
          }
        />
      </section>

      {/* ========== IMAGES OF COUNTABLE SETS ========== */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Images of Countable Sets</h2>

        <Theorem
          id="prop-8.1.8"
          title="Proposition 8.1.8"
          statement={
            <>
              Let <Math>Y</Math> be a set, and let <Math>{`f: \\mathbf{N} \\to Y`}</Math> be a function.
              Then <Math>{`f(\\mathbf{N})`}</Math> is at most countable.
            </>
          }
          proof={
            <>
              <p className="mb-2">
                If <Math>{`f(\\mathbf{N})`}</Math> is finite, we're done.
              </p>
              <p className="mb-2">
                Otherwise, for each <Math>{`y \\in f(\\mathbf{N})`}</Math>, the set{' '}
                <Math>{`f^{-1}(\\{y\\}) = \\{n \\in \\mathbf{N} : f(n) = y\\}`}</Math> is non-empty,
                so by well-ordering it has a minimum. Define <Math>{`g: f(\\mathbf{N}) \\to \\mathbf{N}`}</Math> by{' '}
                <Math>{`g(y) := \\min(f^{-1}(\\{y\\}))`}</Math>.
              </p>
              <p>
                This <Math>g</Math> is one-to-one (different <Math>y</Math>'s have disjoint
                preimages, hence different minimums). Thus <Math>{`f(\\mathbf{N})`}</Math> has
                equal cardinality with <Math>{`g(f(\\mathbf{N})) \\subseteq \\mathbf{N}`}</Math>,
                which is at most countable by Corollary 8.1.6.
              </p>
            </>
          }
        />

        <Theorem
          id="cor-8.1.9"
          title="Corollary 8.1.9"
          statement={
            <>
              Let <Math>X</Math> be a countable set, and let <Math>{`f: X \\to Y`}</Math> be a
              function. Then <Math>{`f(X)`}</Math> is at most countable.
            </>
          }
          proof={
            <>
              Since <Math>X</Math> is countable, there is a bijection{' '}
              <Math>{`g: \\mathbf{N} \\to X`}</Math>. The composition <Math>{`f \\circ g: \\mathbf{N} \\to Y`}</Math> has
              image <Math>{`f(g(\\mathbf{N})) = f(X)`}</Math>. By Proposition 8.1.8, this is at
              most countable.
            </>
          }
        />
      </section>

      {/* ========== UNIONS OF COUNTABLE SETS ========== */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Unions of Countable Sets</h2>

        <Theorem
          id="prop-8.1.10"
          title="Proposition 8.1.10"
          statement={
            <>
              Let <Math>X</Math> be a countable set, and let <Math>Y</Math> be a countable set.
              Then <Math>{`X \\cup Y`}</Math> is a countable set.
            </>
          }
          proof={
            <>
              <p className="mb-2">
                Since <Math>X</Math> and <Math>Y</Math> are countable, there exist
                bijections <Math>{`f: \\mathbf{N} \\to X`}</Math> and <Math>{`g: \\mathbf{N} \\to Y`}</Math>.
              </p>
              <p className="mb-2">
                Define <Math>{`h: \\mathbf{N} \\to X \\cup Y`}</Math> by:
              </p>
              <MathBlock>{`h(n) = \\begin{cases} f(n/2) & \\text{if } n \\text{ is even} \\\\ g((n-1)/2) & \\text{if } n \\text{ is odd} \\end{cases}`}</MathBlock>
              <p className="my-2">
                Then <Math>h</Math> is a surjection from <Math>{`\\mathbf{N}`}</Math> to{' '}
                <Math>{`X \\cup Y`}</Math>. By Proposition 8.1.8, <Math>{`X \\cup Y`}</Math> is at
                most countable.
              </p>
              <p>
                But <Math>{`X \\cup Y`}</Math> contains <Math>X</Math>, which is infinite.
                Thus <Math>{`X \\cup Y`}</Math> is infinite, and therefore countable.
              </p>
            </>
          }
        />

        <Callout type="info">
          <strong>Summary so far:</strong> Any subset or image of a countable set is at most
          countable, and any finite union of countable sets is still countable.
        </Callout>
      </section>

      {/* ========== INTEGERS ARE COUNTABLE ========== */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">The Integers are Countable</h2>

        <Theorem
          id="cor-8.1.11"
          title="Corollary 8.1.11"
          statement={
            <>
              The integers <Math>{`\\mathbf{Z}`}</Math> are countable.
            </>
          }
          proof={
            <>
              <p className="mb-2">
                We already know that <Math>{`\\mathbf{N} = \\{0, 1, 2, 3, \\ldots\\}`}</Math> is countable.
              </p>
              <p className="mb-2">
                The set <Math>{`-\\mathbf{N} := \\{-n : n \\in \\mathbf{N}\\} = \\{0, -1, -2, -3, \\ldots\\}`}</Math> is
                also countable, since the map <Math>{`f(n) := -n`}</Math> is a bijection
                between <Math>{`\\mathbf{N}`}</Math> and <Math>{`-\\mathbf{N}`}</Math>.
              </p>
              <p>
                Since <Math>{`\\mathbf{Z} = \\mathbf{N} \\cup (-\\mathbf{N})`}</Math>, the claim
                follows from Proposition 8.1.10.
              </p>
            </>
          }
        />

        <Example
          id="ex-integers-sequence"
          title="Enumerating the Integers"
        >
          <p className="mb-2">
            One explicit bijection <Math>{`f: \\mathbf{N} \\to \\mathbf{Z}`}</Math> is:
          </p>
          <MathBlock>{`f(n) = \\begin{cases} n/2 & \\text{if } n \\text{ is even} \\\\ -(n+1)/2 & \\text{if } n \\text{ is odd} \\end{cases}`}</MathBlock>
          <p className="mt-2">
            This gives the sequence <Math>{`0, -1, 1, -2, 2, -3, 3, -4, 4, \\ldots`}</Math>
          </p>
        </Example>
      </section>

      {/* ========== CARTESIAN PRODUCTS ========== */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Cartesian Products of Countable Sets</h2>

        <p className="mb-4">
          To establish countability of the rationals, we need to relate countability with
          Cartesian products. In particular, we need to show that <Math>{`\\mathbf{N} \\times \\mathbf{N}`}</Math> is
          countable.
        </p>

        <Theorem
          id="lem-8.1.12"
          title="Lemma 8.1.12"
          statement={
            <>
              The set <Math>{`A := \\{(n, m) \\in \\mathbf{N} \\times \\mathbf{N} : 0 \\le m \\le n\\}`}</Math> is
              countable.
            </>
          }
          proof={
            <>
              <p className="mb-2">
                Define the sequence <Math>{`a_0, a_1, a_2, \\ldots`}</Math> recursively by
                setting <Math>{`a_0 := 0`}</Math> and <Math>{`a_{n+1} := a_n + n + 1`}</Math>. Thus:
              </p>
              <MathBlock>{`a_0 = 0, \\quad a_1 = 1, \\quad a_2 = 3, \\quad a_3 = 6, \\quad a_4 = 10, \\ldots`}</MathBlock>
              <p className="my-2">
                These are the <em>triangular numbers</em>. By induction, <Math>{`(a_n)`}</Math> is
                strictly increasing.
              </p>
              <p className="mb-2">
                Define <Math>{`f: A \\to \\mathbf{N}`}</Math> by <Math>{`f(n, m) := a_n + m`}</Math>.
              </p>
              <p className="mb-2">
                <strong>Claim:</strong> <Math>f</Math> is one-to-one. Let <Math>{`(n, m)`}</Math> and{' '}
                <Math>{`(n', m')`}</Math> be distinct elements of <Math>A</Math>.
              </p>
              <ul className="list-disc ml-6 mb-2">
                <li>
                  If <Math>{`n' = n`}</Math>: then <Math>{`m \\ne m'`}</Math>, so{' '}
                  <Math>{`a_n + m \\ne a_n + m'`}</Math>.
                </li>
                <li>
                  If <Math>{`n' > n`}</Math>: then <Math>{`n' \\ge n + 1`}</Math>, so{' '}
                  <Math>{`f(n', m') = a_{n'} + m' \\ge a_{n+1} = a_n + n + 1 > a_n + m = f(n, m)`}</Math> since{' '}
                  <Math>{`m \\le n`}</Math>.
                </li>
              </ul>
              <p>
                Since <Math>f</Math> is one-to-one, <Math>A</Math> has equal cardinality with{' '}
                <Math>{`f(A) \\subseteq \\mathbf{N}`}</Math>, which is at most countable. Since <Math>A</Math> is
                clearly infinite (it contains <Math>{`\\{(n, 0) : n \\in \\mathbf{N}\\}`}</Math>),
                it must be countable.
              </p>
            </>
          }
        />

        <Theorem
          id="cor-8.1.13"
          title="Corollary 8.1.13"
          statement={
            <>
              The set <Math>{`\\mathbf{N} \\times \\mathbf{N}`}</Math> is countable.
            </>
          }
          proof={
            <>
              <p className="mb-2">
                We know that <Math>{`A := \\{(n, m) : 0 \\le m \\le n\\}`}</Math> is countable.
              </p>
              <p className="mb-2">
                The set <Math>{`B := \\{(n, m) : 0 \\le n \\le m\\}`}</Math> is also countable,
                since the map <Math>{`(n, m) \\mapsto (m, n)`}</Math> is a bijection from <Math>A</Math> to <Math>B</Math>.
              </p>
              <p>
                Since <Math>{`\\mathbf{N} \\times \\mathbf{N} = A \\cup B`}</Math>, the claim follows
                from Proposition 8.1.10.
              </p>
            </>
          }
        />

        <Theorem
          id="cor-8.1.14"
          title="Corollary 8.1.14"
          statement={
            <>
              If <Math>X</Math> and <Math>Y</Math> are countable, then <Math>{`X \\times Y`}</Math> is
              countable.
            </>
          }
          proof={
            <>
              <p className="mb-2">
                Since <Math>X</Math> and <Math>Y</Math> are countable, there exist
                bijections <Math>{`f: \\mathbf{N} \\to X`}</Math> and <Math>{`g: \\mathbf{N} \\to Y`}</Math>.
              </p>
              <p className="mb-2">
                Define <Math>{`h: \\mathbf{N} \\times \\mathbf{N} \\to X \\times Y`}</Math> by{' '}
                <Math>{`h(n, m) := (f(n), g(m))`}</Math>. This is a bijection.
              </p>
              <p>
                Since <Math>{`\\mathbf{N} \\times \\mathbf{N}`}</Math> is countable by Corollary 8.1.13,
                so is <Math>{`X \\times Y`}</Math>.
              </p>
            </>
          }
        />
      </section>

      {/* ========== RATIONALS ARE COUNTABLE ========== */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">The Rationals are Countable</h2>

        <Theorem
          id="cor-8.1.15"
          title="Corollary 8.1.15"
          statement={
            <>
              The rationals <Math>{`\\mathbf{Q}`}</Math> are countable.
            </>
          }
          proof={
            <>
              <p className="mb-2">
                Every rational number can be written as <Math>{`a/b`}</Math> where{' '}
                <Math>{`a \\in \\mathbf{Z}`}</Math> and <Math>{`b \\in \\mathbf{Z} \\setminus \\{0\\}`}</Math>.
              </p>
              <p className="mb-2">
                Define <Math>{`f: \\mathbf{Z} \\times (\\mathbf{Z} \\setminus \\{0\\}) \\to \\mathbf{Q}`}</Math> by{' '}
                <Math>{`f(a, b) := a/b`}</Math>. This is a surjection onto <Math>{`\\mathbf{Q}`}</Math>.
              </p>
              <p className="mb-2">
                Since <Math>{`\\mathbf{Z}`}</Math> is countable (Corollary 8.1.11) and{' '}
                <Math>{`\\mathbf{Z} \\setminus \\{0\\}`}</Math> is countable (subset of a countable set
                minus one element is still infinite, hence countable), by
                Corollary 8.1.14, <Math>{`\\mathbf{Z} \\times (\\mathbf{Z} \\setminus \\{0\\})`}</Math> is
                countable.
              </p>
              <p>
                By Corollary 8.1.9, <Math>{`\\mathbf{Q} = f(\\mathbf{Z} \\times (\\mathbf{Z} \\setminus \\{0\\}))`}</Math> is
                at most countable. Since <Math>{`\\mathbf{Q}`}</Math> is clearly infinite, it must
                be countable.
              </p>
            </>
          }
        />

        <Callout type="warning">
          <strong>The Big Question:</strong> We have shown that <Math>{`\\mathbf{N}`}</Math>,{' '}
          <Math>{`\\mathbf{Z}`}</Math>, and <Math>{`\\mathbf{Q}`}</Math> are all countable. What about
          the real numbers <Math>{`\\mathbf{R}`}</Math>? It turns out that <Math>{`\\mathbf{R}`}</Math> is{' '}
          <strong>uncountable</strong>, as we shall see in Section 35 using Cantor's diagonal
          argument.
        </Callout>
      </section>

      {/* ========== EXERCISES ========== */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Exercises</h2>

        <div className="space-y-4">
          <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <p className="font-medium">Exercise 8.1.1</p>
            <p>
              Show that a set <Math>X</Math> is infinite if and only if there exists a
              proper subset <Math>{`Y \\subsetneq X`}</Math> such that <Math>Y</Math> and{' '}
              <Math>X</Math> have equal cardinality.
            </p>
          </div>

          <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <p className="font-medium">Exercise 8.1.2</p>
            <p>
              Prove the well-ordering principle (Proposition 8.1.4) using strong induction.
            </p>
          </div>

          <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <p className="font-medium">Exercise 8.1.3</p>
            <p>
              Fill in the gaps marked (?) in the proof of Proposition 8.1.5.
            </p>
          </div>

          <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <p className="font-medium">Exercise 8.1.4</p>
            <p>
              Prove Proposition 8.1.8. (Hint: Use the well-ordering principle to pick a
              "canonical representative" from each fiber <Math>{`f^{-1}(\\{y\\})`}</Math>.)
            </p>
          </div>

          <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <p className="font-medium">Exercise 8.1.5</p>
            <p>
              Prove Corollary 8.1.9. (Hint: Compose with a bijection from{' '}
              <Math>{`\\mathbf{N}`}</Math> to <Math>X</Math>.)
            </p>
          </div>

          <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <p className="font-medium">Exercise 8.1.6</p>
            <p>
              Let <Math>A</Math> be a countable set, and let <Math>{`B \\subseteq A`}</Math> be
              a subset such that <Math>{`A \\setminus B`}</Math> is finite. Show that <Math>B</Math> is
              countable.
            </p>
          </div>

          <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <p className="font-medium">Exercise 8.1.7</p>
            <p>
              Prove Proposition 8.1.10. (Hint: Define a function from <Math>{`\\mathbf{N}`}</Math> onto{' '}
              <Math>{`X \\cup Y`}</Math> by "interleaving" the bijections to <Math>X</Math> and{' '}
              <Math>Y</Math>.)
            </p>
          </div>

          <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <p className="font-medium">Exercise 8.1.8</p>
            <p>
              Prove Corollary 8.1.14. (Hint: Use Corollary 8.1.13 and the fact that
              bijections preserve cardinality.)
            </p>
          </div>
        </div>
      </section>

      {/* ========== KEY TAKEAWAYS ========== */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Key Takeaways</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
            <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
              Countable Sets
            </h3>
            <p className="text-sm">
              A set is countable if it has a bijection with <Math>{`\\mathbf{N}`}</Math>. Countable
              sets can be "listed" as <Math>{`\\{f(0), f(1), f(2), \\ldots\\}`}</Math>.
            </p>
          </div>
          <div className="p-4 bg-amber-50 dark:bg-amber-900/30 rounded-lg">
            <h3 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">
              Well-Ordering Principle
            </h3>
            <p className="text-sm">
              Every non-empty subset of <Math>{`\\mathbf{N}`}</Math> has a minimum element.
              This is key to many proofs about countability.
            </p>
          </div>
          <div className="p-4 bg-emerald-50 dark:bg-emerald-900/30 rounded-lg">
            <h3 className="font-semibold text-emerald-800 dark:text-emerald-200 mb-2">
              Closure Properties
            </h3>
            <p className="text-sm">
              Subsets of countable sets, images of countable sets, and finite unions of
              countable sets are all at most countable.
            </p>
          </div>
          <div className="p-4 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
            <h3 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">
              Key Examples
            </h3>
            <p className="text-sm">
              <Math>{`\\mathbf{N}`}</Math>, <Math>{`\\mathbf{Z}`}</Math>, <Math>{`\\mathbf{Q}`}</Math>,
              and <Math>{`\\mathbf{N} \\times \\mathbf{N}`}</Math> are all countable. The reals{' '}
              <Math>{`\\mathbf{R}`}</Math> are uncountable.
            </p>
          </div>
        </div>
      </section>

      {/* ========== LOOKING AHEAD ========== */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Looking Ahead</h2>
        <p className="mb-4">
          In the next section, we will extend the notion of summation to arbitrary countable
          index sets, building on our understanding of series and countability. This will
          allow us to define sums like <Math>{`\\sum_{q \\in \\mathbf{Q}} f(q)`}</Math> when the
          terms are absolutely summable.
        </p>
        <p>
          Later, we will prove that the real numbers are <em>uncountable</em> using Cantor's
          famous diagonal argument, revealing a fundamental distinction between the rationals
          and the reals. This will lead us to the rich theory of cardinal numbers and the
          hierarchy of infinite cardinalities.
        </p>
      </section>
    </LessonLayout>
  );
}
