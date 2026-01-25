import { LessonLayout } from '@/components/layout';
import { Definition, Theorem, Example } from '@/components/common';
import { Callout } from '@/components/common';
import { Math, MathBlock } from '@/components/common';
import { SupremumInfimumExplorer } from '@/components/visualizations';

export default function Section19() {
  return (
    <LessonLayout sectionId={19}>
      {/* Introduction */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-amber-400 mb-4">Introduction</h2>
        <p className="text-gray-300 mb-4">
          We have now completed our construction of the real numbers. The reals contain the
          rationals and have all the same arithmetic operations, laws of algebra, and laws of
          order. But we have not yet demonstrated any <em>advantages</em> that the real numbers
          have over the rationals.
        </p>
        <p className="text-gray-300 mb-4">
          In this section, we prove one of the most fundamental properties of the real numbers:
          the <strong>least upper bound property</strong> (also called <strong>completeness</strong>).
          This property says that every non-empty set of real numbers that is bounded above has
          a least upper bound—something that fails spectacularly for the rationals!
        </p>

        <Callout type="info" title="Why This Matters">
          <p>
            The least upper bound property is what allows us to do calculus. It guarantees that
            limits exist when we expect them to, that continuous functions achieve their maximum
            and minimum values on closed intervals, and that we can take square roots of positive
            numbers. The rationals lack this property, which is why <Math>\sqrt{'{'}2{'}'}</Math> doesn't
            exist in <Math>\mathbb{'{'}Q{'}'}</Math>.
          </p>
        </Callout>
      </section>

      {/* Interactive Visualization */}
      <div className="my-8">
        <SupremumInfimumExplorer />
      </div>

      {/* Upper Bounds */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-amber-400 mb-4">Upper Bounds</h2>

        <Definition id="5.5.1" title="Upper Bound">
          <p>
            Let <Math>E</Math> be a subset of <Math>\mathbb{'{'}R{'}'}</Math>, and
            let <Math>M</Math> be a real number. We say that <Math>M</Math> is
            an <strong>upper bound</strong> for <Math>E</Math> iff we
            have <Math>x \leq M</Math> for every element <Math>x</Math> in <Math>E</Math>.
          </p>
        </Definition>

        <p className="text-gray-300 my-4">
          In other words, an upper bound is a number that is greater than or equal to every
          element of the set. A set can have many upper bounds, or none at all.
        </p>

        <Example id="5.5.2" title="Upper Bounds of an Interval">
          <p className="mb-2">
            Let <Math>E</Math> be the interval <Math>E := \{'{'}x \in \mathbb{'{'}R{'}'} : 0 \leq x \leq 1\{'}'}</Math>.
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>
              <Math>1</Math> is an upper bound for <Math>E</Math>, since every element
              of <Math>E</Math> is <Math>\leq 1</Math>.
            </li>
            <li>
              <Math>2</Math> is also an upper bound for <Math>E</Math>. Indeed, every
              number <Math>\geq 1</Math> is an upper bound for <Math>E</Math>.
            </li>
            <li>
              <Math>0.5</Math> is <em>not</em> an upper bound, because <Math>0.5</Math> is
              not larger than <em>every</em> element in <Math>E</Math>. (For instance, <Math>0.7 \in E</Math> but <Math>0.7 {'>'} 0.5</Math>.)
            </li>
          </ul>
        </Example>

        <Example id="5.5.3" title="A Set with No Upper Bound">
          <p className="mb-2">
            Let <Math>\mathbb{'{'}R{'}'}^+ := \{'{'}x \in \mathbb{'{'}R{'}'} : x {'>'} 0\{'}'}</Math> be
            the set of positive reals.
          </p>
          <p className="text-gray-300">
            Then <Math>\mathbb{'{'}R{'}'}^+</Math> does not have any upper bounds at all!
            For any proposed upper bound <Math>M</Math>, we can find <Math>M + 1 \in \mathbb{'{'}R{'}'}^+</Math> with <Math>M + 1 {'>'} M</Math>.
          </p>
        </Example>

        <Example id="5.5.4" title="Upper Bounds of the Empty Set">
          <p className="mb-2">
            Let <Math>\emptyset</Math> be the empty set.
          </p>
          <p className="text-gray-300">
            Then <em>every</em> number <Math>M</Math> is an upper bound for <Math>\emptyset</Math>,
            because <Math>M</Math> is greater than every element of the empty set. (This is a
            vacuously true statement—there are no elements to violate the condition!)
          </p>
        </Example>

        <Callout type="note" title="Observation">
          <p>
            If <Math>M</Math> is an upper bound of <Math>E</Math>, then any larger
            number <Math>M' \geq M</Math> is also an upper bound of <Math>E</Math>. The question
            is: can we find the <em>smallest</em> upper bound?
          </p>
        </Callout>
      </section>

      {/* Least Upper Bounds */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-amber-400 mb-4">Least Upper Bounds</h2>

        <Definition id="5.5.5" title="Least Upper Bound">
          <p className="mb-2">
            Let <Math>E</Math> be a subset of <Math>\mathbb{'{'}R{'}'}</Math>, and
            let <Math>M</Math> be a real number. We say that <Math>M</Math> is
            a <strong>least upper bound</strong> for <Math>E</Math> iff:
          </p>
          <ol className="list-decimal list-inside space-y-1 ml-4">
            <li><Math>M</Math> is an upper bound for <Math>E</Math>, and</li>
            <li>Any other upper bound <Math>M'</Math> for <Math>E</Math> must satisfy <Math>M' \geq M</Math>.</li>
          </ol>
        </Definition>

        <p className="text-gray-300 my-4">
          The least upper bound is the smallest number that is still an upper bound—it's the
          "tightest" upper bound possible.
        </p>

        <Example id="5.5.6" title="Least Upper Bound of an Interval">
          <p className="mb-2">
            Let <Math>E := \{'{'}x \in \mathbb{'{'}R{'}'} : 0 \leq x \leq 1\{'}'}</Math>.
          </p>
          <p className="text-gray-300">
            As noted before, <Math>E</Math> has many upper bounds—every number <Math>\geq 1</Math> is
            an upper bound. But only <Math>1</Math> is the <em>least</em> upper bound; all other
            upper bounds are larger than <Math>1</Math>.
          </p>
        </Example>

        <Example id="5.5.7" title="The Empty Set Has No Least Upper Bound">
          <p className="text-gray-300">
            The empty set <Math>\emptyset</Math> does not have a least upper bound. Why? Because
            every real number is an upper bound for <Math>\emptyset</Math>, so there is no
            <em> smallest</em> one. For any proposed least upper bound <Math>M</Math>, the
            number <Math>M - 1</Math> is also an upper bound (and is smaller).
          </p>
        </Example>

        <Theorem
          id="5.5.8"
          title="Uniqueness of Least Upper Bound"
          proof={`Let M₁ and M₂ both be least upper bounds of E.

Since M₁ is a least upper bound and M₂ is an upper bound, by definition of least upper bound we have M₂ ≥ M₁.

Since M₂ is a least upper bound and M₁ is an upper bound, we similarly have M₁ ≥ M₂.

Thus M₁ = M₂. Therefore there is at most one least upper bound. □`}
        >
          <p>
            Let <Math>E</Math> be a subset of <Math>\mathbb{'{'}R{'}'}</Math>.
            Then <Math>E</Math> can have <em>at most one</em> least upper bound.
          </p>
        </Theorem>
      </section>

      {/* The Main Theorem */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-amber-400 mb-4">
          The Least Upper Bound Property
        </h2>

        <p className="text-gray-300 mb-4">
          Now we come to one of the most important properties of the real numbers—the property
          that truly distinguishes <Math>\mathbb{'{'}R{'}'}</Math> from <Math>\mathbb{'{'}Q{'}'}</Math>:
        </p>

        <Theorem
          id="5.5.9"
          title="Existence of Least Upper Bound"
          proof={`This proof is quite involved. The key idea is to construct the least upper bound explicitly using rational approximations.

**Setup:** Let E be a non-empty subset of ℝ with an upper bound M. We need to show E has a least upper bound.

**Construction:** For each positive integer n ≥ 1:
- By the Archimedean property, find an integer K with K/n ≥ M (so K/n is an upper bound for E)
- Find an integer L with L/n < x₀ for some x₀ ∈ E (so L/n is not an upper bound)
- Since K/n is an upper bound and L/n is not, find the unique integer mₙ with L < mₙ ≤ K such that mₙ/n is an upper bound but (mₙ-1)/n is not

**Key estimate:** For any N ≥ 1 and n, n' ≥ N:
|mₙ/n - mₙ'/n'| ≤ 1/N

This shows that (mₙ/n) is a Cauchy sequence.

**Define:** S := LIM_{n→∞} mₙ/n

**S is an upper bound:** For any x ∈ E, since mₙ/n is an upper bound for E, we have x ≤ mₙ/n for all n. Taking the limit: x ≤ S.

**S is the least upper bound:** If y is any upper bound for E, then y ≥ (mₙ-1)/n for all n (since (mₙ-1)/n is not an upper bound). Taking the limit: y ≥ S.

Therefore S = sup(E). □`}
        >
          <p>
            Let <Math>E</Math> be a <strong>non-empty</strong> subset of <Math>\mathbb{'{'}R{'}'}</Math>.
            If <Math>E</Math> has an upper bound, then <Math>E</Math> must have exactly one
            least upper bound.
          </p>
        </Theorem>

        <Callout type="warning" title="The Rationals Fail This Property!">
          <p className="mb-2">
            Consider the set <Math>E = \{'{'}q \in \mathbb{'{'}Q{'}'} : q^2 {'<'} 2\{'}'}</Math> as
            a subset of the rationals. This set is non-empty (contains <Math>1</Math>) and
            bounded above (by <Math>2</Math>).
          </p>
          <p>
            But <Math>E</Math> has no least upper bound <em>in <Math>\mathbb{'{'}Q{'}'}</Math></em>!
            The "would-be" least upper bound is <Math>\sqrt{'{'}2{'}'}</Math>, but <Math>\sqrt{'{'}2{'}'} \notin \mathbb{'{'}Q{'}'}</Math>.
            This is exactly why we needed to construct the real numbers.
          </p>
        </Callout>
      </section>

      {/* Supremum Notation */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-amber-400 mb-4">The Supremum</h2>

        <Definition id="5.5.10" title="Supremum">
          <p className="mb-2">
            Let <Math>E</Math> be a subset of the real numbers. We define the <strong>supremum</strong> of <Math>E</Math>,
            denoted <Math>\sup(E)</Math> or <Math>\sup E</Math>, as follows:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>
              If <Math>E</Math> is non-empty and has an upper bound, then <Math>\sup(E)</Math> is the
              least upper bound of <Math>E</Math> (which exists by Theorem 5.5.9).
            </li>
            <li>
              If <Math>E</Math> is non-empty and has no upper bound, we set <Math>\sup(E) := +\infty</Math>.
            </li>
            <li>
              If <Math>E</Math> is empty, we set <Math>\sup(E) := -\infty</Math>.
            </li>
          </ul>
        </Definition>

        <Callout type="note" title="About Infinity Symbols">
          <p>
            The symbols <Math>+\infty</Math> and <Math>-\infty</Math> are not real numbers—they
            are just convenient notations to handle edge cases. We cannot perform ordinary
            arithmetic with them. In Chapter 6, we will introduce the <em>extended real number
            system</em> <Math>\mathbb{'{'}R{'}'}^*</Math> which includes these symbols, but many
            algebraic laws break down in that system.
          </p>
        </Callout>

        <Example id="5.5.10.1" title="Computing Suprema">
          <div className="space-y-3">
            <div>
              <p className="font-semibold text-emerald-300 mb-1">
                <Math>\sup\{'{'}x \in \mathbb{'{'}R{'}'} : 0 \leq x \leq 1\{'}'} = 1</Math>
              </p>
              <p className="text-gray-300 text-sm">
                The interval <Math>[0, 1]</Math> has least upper bound <Math>1</Math>.
              </p>
            </div>
            <div>
              <p className="font-semibold text-emerald-300 mb-1">
                <Math>\sup\{'{'}x \in \mathbb{'{'}R{'}'} : 0 \leq x {'<'} 1\{'}'} = 1</Math>
              </p>
              <p className="text-gray-300 text-sm">
                The half-open interval <Math>[0, 1)</Math> also has supremum <Math>1</Math>,
                even though <Math>1 \notin [0,1)</Math>. The supremum need not be in the set!
              </p>
            </div>
            <div>
              <p className="font-semibold text-emerald-300 mb-1">
                <Math>\sup\{'{'}1/n : n \in \mathbb{'{'}N{'}'}, n \geq 1\{'}'} = 1</Math>
              </p>
              <p className="text-gray-300 text-sm">
                The set <Math>\{'{'}1, 1/2, 1/3, 1/4, \ldots\{'}'}</Math> has supremum <Math>1</Math>.
              </p>
            </div>
            <div>
              <p className="font-semibold text-emerald-300 mb-1">
                <Math>\sup(\mathbb{'{'}R{'}'}^+) = +\infty</Math>
              </p>
              <p className="text-gray-300 text-sm">
                The positive reals have no upper bound.
              </p>
            </div>
          </div>
        </Example>
      </section>

      {/* Application: Square Root of 2 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-amber-400 mb-4">
          Application: Existence of Square Roots
        </h2>

        <p className="text-gray-300 mb-4">
          We now demonstrate the power of the least upper bound property by proving something
          that was impossible in the rationals:
        </p>

        <Theorem
          id="5.5.12"
          title="Existence of Square Root of 2"
          proof={`Let E = {y ∈ ℝ : y ≥ 0 and y² < 2}.

**E is non-empty:** 1 ∈ E since 1² = 1 < 2.

**E has an upper bound:** 2 is an upper bound, since if y > 2, then y² > 4 > 2, so y ∉ E.

**By Theorem 5.5.9:** E has a least upper bound. Let x := sup(E).

We have 1 ≤ x ≤ 2 (since 1 ∈ E and 2 is an upper bound), so x is positive.

**Claim:** x² = 2. We prove this by showing both x² < 2 and x² > 2 lead to contradictions.

**Case 1: Suppose x² < 2.**
Let 0 < ε < 1 be small. Then:
(x + ε)² = x² + 2xε + ε² ≤ x² + 4ε + ε = x² + 5ε

(since x ≤ 2 and ε² ≤ ε). Since x² < 2, we can choose ε small enough that x² + 5ε < 2. Then (x + ε)² < 2, so x + ε ∈ E. But this contradicts x being an upper bound of E.

**Case 2: Suppose x² > 2.**
Let 0 < ε < 1 be small. Then:
(x - ε)² = x² - 2xε + ε² ≥ x² - 4ε

(since x ≤ 2 and ε² ≥ 0). Since x² > 2, we can choose ε small enough that x² - 4ε > 2. Then (x - ε)² > 2.

But this means x - ε ≥ y for all y ∈ E (if x - ε < y, then (x-ε)² < y² ≤ 2, contradiction). So x - ε is an upper bound for E, contradicting x being the *least* upper bound.

From both contradictions, we conclude x² = 2. □`}
        >
          <p>
            There exists a positive real number <Math>x</Math> such that <Math>x^2 = 2</Math>.
          </p>
        </Theorem>

        <Callout type="info" title="Comparing with Proposition 4.4.4">
          <p>
            In Section 14, we proved that there is no <em>rational</em> number whose square
            is <Math>2</Math>. This new proposition shows that such a number does exist in the
            <em> reals</em>. This demonstrates that <Math>\mathbb{'{'}R{'}'} \supsetneq \mathbb{'{'}Q{'}'}</Math>—there
            are real numbers that are not rational. Such numbers are called <strong>irrational</strong>.
          </p>
        </Callout>
      </section>

      {/* Infimum */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-amber-400 mb-4">Lower Bounds and Infimum</h2>

        <p className="text-gray-300 mb-4">
          Everything we've said about upper bounds and suprema has a counterpart for lower bounds:
        </p>

        <Definition id="5.5.15" title="Lower Bound and Infimum">
          <ul className="list-disc list-inside space-y-2">
            <li>
              A real number <Math>m</Math> is a <strong>lower bound</strong> for <Math>E</Math> iff <Math>m \leq x</Math> for
              every <Math>x \in E</Math>.
            </li>
            <li>
              A real number <Math>m</Math> is the <strong>greatest lower bound</strong> (or <strong>infimum</strong>)
              of <Math>E</Math>, written <Math>\inf(E)</Math>, iff <Math>m</Math> is a lower
              bound and every other lower bound <Math>m'</Math> satisfies <Math>m' \leq m</Math>.
            </li>
          </ul>
        </Definition>

        <Theorem id="5.5.15.1" title="Existence of Greatest Lower Bound">
          <p>
            If <Math>E</Math> is a non-empty subset of <Math>\mathbb{'{'}R{'}'}</Math> that is
            bounded below, then <Math>E</Math> has a greatest lower bound <Math>\inf(E)</Math>.
          </p>
        </Theorem>

        <p className="text-gray-300 mt-4">
          This follows from the least upper bound property: if <Math>E</Math> is bounded below,
          consider <Math>{'-E := \\{-x : x \\in E\\}'}</Math>. Then <Math>-E</Math> is bounded above,
          so <Math>\sup(-E)</Math> exists, and <Math>\inf(E) = -\sup(-E)</Math>.
        </p>
      </section>

      {/* Exercises */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-amber-400 mb-4">Exercises</h2>
        <div className="space-y-6">
          <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <p className="font-semibold text-blue-300 mb-2">Exercise 5.5.1</p>
            <p className="text-gray-300">
              Let <Math>E</Math> be a subset of <Math>\mathbb{'{'}R{'}'}</Math>, and suppose
              that <Math>E</Math> has a least upper bound <Math>M = \sup(E)</Math>.
              Let <Math>{'-E := \\{-x : x \\in E\\}'}</Math>. Show that <Math>-M</Math> is the
              greatest lower bound of <Math>-E</Math>, i.e., <Math>-M = \inf(-E)</Math>.
            </p>
          </div>

          <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <p className="font-semibold text-blue-300 mb-2">Exercise 5.5.2</p>
            <p className="text-gray-300">
              Let <Math>E</Math> be a non-empty subset of <Math>\mathbb{'{'}R{'}'}</Math>,
              let <Math>n \geq 1</Math> be an integer, and let <Math>L {'<'} K</Math> be
              integers. Suppose that <Math>K/n</Math> is an upper bound for <Math>E</Math>,
              but that <Math>L/n</Math> is not. Show that there exists an
              integer <Math>L {'<'} m \leq K</Math> such that <Math>m/n</Math> is an upper
              bound for <Math>E</Math>, but <Math>(m-1)/n</Math> is not.
            </p>
          </div>

          <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <p className="font-semibold text-blue-300 mb-2">Exercise 5.5.3</p>
            <p className="text-gray-300">
              In the setting of Exercise 5.5.2, show that the integer <Math>m</Math> is unique.
            </p>
          </div>

          <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <p className="font-semibold text-blue-300 mb-2">Exercise 5.5.4</p>
            <p className="text-gray-300">
              Let <Math>q_1, q_2, q_3, \ldots</Math> be a sequence of rational numbers with
              the property that <Math>|q_n - q_{'{'}n'{'}'}| \leq 1/M</Math> whenever <Math>M \geq 1</Math> is
              an integer and <Math>n, n' \geq M</Math>. Show that this is a Cauchy sequence.
              Furthermore, if <Math>S := \text{'{'}LIM{'}'}_{'{'}{'{'}n \to \infty{'}'}{'}'}q_n</Math>,
              show that <Math>|q_M - S| \leq 1/M</Math> for every <Math>M \geq 1</Math>.
            </p>
          </div>

          <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <p className="font-semibold text-blue-300 mb-2">Exercise 5.5.5</p>
            <p className="text-gray-300">
              Show that for any positive real <Math>x {'>'} 0</Math> and any <Math>n \geq 1</Math>,
              there exists a positive real <Math>y</Math> such that <Math>y^n = x</Math>. (This
              is the existence of <Math>n</Math>th roots.)
            </p>
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-amber-400 mb-4">Key Takeaways</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-800">
            <h4 className="font-semibold text-blue-300 mb-2">Upper Bound</h4>
            <p className="text-gray-300 text-sm">
              <Math>M</Math> is an upper bound for <Math>E</Math> iff <Math>x \leq M</Math> for
              all <Math>x \in E</Math>. A set may have many upper bounds, one, or none.
            </p>
          </div>

          <div className="p-4 bg-amber-900/20 rounded-lg border border-amber-800">
            <h4 className="font-semibold text-amber-300 mb-2">Least Upper Bound</h4>
            <p className="text-gray-300 text-sm">
              The least upper bound (supremum) is the smallest upper bound. It is unique when
              it exists, and need not be an element of the set.
            </p>
          </div>

          <div className="p-4 bg-emerald-900/20 rounded-lg border border-emerald-800">
            <h4 className="font-semibold text-emerald-300 mb-2">Completeness of <Math>\mathbb{'{'}R{'}'}</Math></h4>
            <p className="text-gray-300 text-sm">
              Every non-empty subset of <Math>\mathbb{'{'}R{'}'}</Math> that is bounded above
              has a supremum in <Math>\mathbb{'{'}R{'}'}</Math>. This is false
              for <Math>\mathbb{'{'}Q{'}'}</Math>!
            </p>
          </div>

          <div className="p-4 bg-purple-900/20 rounded-lg border border-purple-800">
            <h4 className="font-semibold text-purple-300 mb-2">Existence of Roots</h4>
            <p className="text-gray-300 text-sm">
              The least upper bound property lets us prove <Math>\sqrt{'{'}2{'}'}</Math> exists
              in <Math>\mathbb{'{'}R{'}'}</Math>, and more generally, that <Math>n</Math>th roots
              of positive reals exist.
            </p>
          </div>
        </div>
      </section>

      {/* Looking Ahead */}
      <Callout type="info" title="Looking Ahead">
        <p>
          The least upper bound property is the foundation for everything that follows in
          analysis. In Chapter 6, we will use it to develop the theory of <strong>limits</strong> of
          sequences, which in turn leads to the theory of <strong>series</strong>, <strong>continuous
          functions</strong>, and eventually <strong>differentiation</strong> and <strong>integration</strong>.
          The next section covers <strong>real exponentiation</strong>, where we use suprema to
          define <Math>x^{'{'}1/n{'}'}</Math> and eventually <Math>x^q</Math> for rational <Math>q</Math>.
        </p>
      </Callout>
    </LessonLayout>
  );
}
