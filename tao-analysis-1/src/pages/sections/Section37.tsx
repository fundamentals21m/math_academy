import { LessonLayout } from '@/components/layout';
import { Definition, Theorem, Example } from '@/components/common';
import { Callout } from '@/components/common';
import { Math, MathBlock } from '@/components/common';

export default function Section37() {
  return (
    <LessonLayout sectionId={37}>
      <p className="italic text-gray-300 mb-6">
        The axiom of choice is intimately connected to the theory of ordered sets. There are actually
        many types of ordered sets; we will concern ourselves with three such types: the partially
        ordered sets, the totally ordered sets, and the well-ordered sets.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-amber-400">Partially Ordered Sets</h2>

      <Definition id="def-8.5.1" title="Definition 8.5.1: Partially ordered sets">
        <p>
          A <strong>partially ordered set</strong> (or <strong>poset</strong>) is a set{' '}
          <Math>X</Math>, together with a relation <Math>\leq_X</Math> on <Math>X</Math> (thus for
          any two objects <Math>x, y \in X</Math>, the statement <Math>x \leq_X y</Math> is either
          a true statement or a false statement). Furthermore, this relation is assumed to obey the
          following three properties:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-2">
          <li>
            <strong>(Reflexivity)</strong> For any <Math>x \in X</Math>, we have{' '}
            <Math>x \leq_X x</Math>.
          </li>
          <li>
            <strong>(Anti-symmetry)</strong> If <Math>x, y \in X</Math> are such that{' '}
            <Math>x \leq_X y</Math> and <Math>y \leq_X x</Math>, then <Math>x = y</Math>.
          </li>
          <li>
            <strong>(Transitivity)</strong> If <Math>x, y, z \in X</Math> are such that{' '}
            <Math>x \leq_X y</Math> and <Math>y \leq_X z</Math>, then <Math>x \leq_X z</Math>.
          </li>
        </ul>
        <p className="mt-2">
          We refer to <Math>\leq_X</Math> as the <strong>ordering relation</strong>. In most situations
          it is understood what the set <Math>X</Math> is from context, and in those cases we shall
          simply write <Math>\leq</Math> instead of <Math>\leq_X</Math>. We write{' '}
          <Math>{'x <_X y'}</Math> (or <Math>{'x < y'}</Math> for short) if <Math>x \leq_X y</Math>{' '}
          and <Math>x \neq y</Math>.
        </p>
      </Definition>

      <Example id="ex-8.5.2" title="Examples 8.5.2">
        <p>
          The natural numbers <Math>\mathbb{'{N}'}</Math> together with the usual less-than-or-equal-to
          relation <Math>\leq</Math> (as defined in Definition 2.2.11) forms a partially ordered set,
          by Proposition 2.2.12. Similar arguments show that the integers <Math>\mathbb{'{Z}'}</Math>,
          the rationals <Math>\mathbb{'{Q}'}</Math>, the reals <Math>\mathbb{'{R}'}</Math>, and the
          extended reals <Math>\mathbb{'{R}'}^*</Math> are also partially ordered sets.
        </p>
        <p className="mt-2">
          Meanwhile, if <Math>X</Math> is any collection of sets, and one uses the relation of
          is-a-subset-of <Math>\subseteq</Math> (as defined in Definition 3.1.15) for the ordering
          relation <Math>\leq_X</Math>, then <Math>X</Math> is also partially ordered
          (Proposition 3.1.18).
        </p>
      </Example>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-amber-400">Totally Ordered Sets</h2>

      <Definition id="def-8.5.3" title="Definition 8.5.3: Totally ordered set">
        <p>
          Let <Math>X</Math> be a partially ordered set with some order relation <Math>\leq_X</Math>.
          A subset <Math>Y</Math> of <Math>X</Math> is said to be <strong>totally ordered</strong> if,
          given any two <Math>y, y' \in Y</Math>, we either have <Math>y \leq_X y'</Math> or{' '}
          <Math>y' \leq_X y</Math> (or both).
        </p>
        <p className="mt-2">
          If <Math>X</Math> itself is totally ordered, we say that <Math>X</Math> is a{' '}
          <strong>totally ordered set</strong> (or <strong>chain</strong>) with order relation{' '}
          <Math>\leq_X</Math>.
        </p>
      </Definition>

      <Example id="ex-8.5.4" title="Examples 8.5.4">
        <p>
          The natural numbers <Math>\mathbb{'{N}'}</Math>, the integers <Math>\mathbb{'{Z}'}</Math>,
          the rationals <Math>\mathbb{'{Q}'}</Math>, reals <Math>\mathbb{'{R}'}</Math>, and the
          extended reals <Math>\mathbb{'{R}'}^*</Math>, all with the usual ordering relation{' '}
          <Math>\leq</Math>, are totally ordered. Also, any subset of a totally ordered set is again
          totally ordered.
        </p>
        <p className="mt-2">
          On the other hand, a collection of sets with the <Math>\subseteq</Math> relation is usually{' '}
          <em>not</em> totally ordered. For instance, if <Math>X</Math> is the set{' '}
          <Math>{'{\\{\\{1,2\\}, \\{2\\}, \\{2,3\\}, \\{2,3,4\\}, \\{5\\}\\}}'}</Math>, ordered by
          the set inclusion relation <Math>\subseteq</Math>, then the elements{' '}
          <Math>{'{\\{1,2\\}}'}</Math> and <Math>{'{\\{2,3\\}}'}</Math> are not comparable to each
          other (i.e., <Math>{'{\\{1,2\\}} \\not\\subseteq \\{2,3\\}'}</Math> and{' '}
          <Math>{'{\\{2,3\\}} \\not\\subseteq \\{1,2\\}'}</Math>).
        </p>
      </Example>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-amber-400">Maximal and Minimal Elements</h2>

      <Definition id="def-8.5.5" title="Definition 8.5.5: Maximal and minimal elements">
        <p>
          Let <Math>X</Math> be a partially ordered set, and let <Math>Y</Math> be a subset of{' '}
          <Math>X</Math>. We say that <Math>y</Math> is a <strong>minimal element</strong> of{' '}
          <Math>Y</Math> if <Math>y \in Y</Math> and there is no element <Math>y' \in Y</Math> such
          that <Math>{'y\' < y'}</Math>.
        </p>
        <p className="mt-2">
          We say that <Math>y</Math> is a <strong>maximal element</strong> of <Math>Y</Math> if{' '}
          <Math>y \in Y</Math> and there is no element <Math>y' \in Y</Math> such that{' '}
          <Math>{'y < y\''}</Math>.
        </p>
      </Definition>

      <Example id="ex-8.5.6" title="Example 8.5.6">
        <p>
          Using the set <Math>X</Math> from the previous example,{' '}
          <Math>{'{\\{2\\}}'}</Math> is a minimal element, <Math>{'{\\{1,2\\}}'}</Math> and{' '}
          <Math>{'{\\{2,3,4\\}}'}</Math> are maximal elements, <Math>{'{\\{5\\}}'}</Math> is both
          a minimal and a maximal element, and <Math>{'{\\{2,3\\}}'}</Math> is neither a minimal
          nor a maximal element.
        </p>
        <p className="mt-2">
          This example shows that a partially ordered set can have <em>multiple</em> maxima and minima;
          however, a totally ordered set cannot (Exercise 8.5.7).
        </p>
      </Example>

      <Example id="ex-8.5.7" title="Example 8.5.7">
        <p>
          The natural numbers <Math>\mathbb{'{N}'}</Math> (ordered by <Math>\leq</Math>) has a minimal
          element, namely <Math>0</Math>, but no maximal element. The set of integers{' '}
          <Math>\mathbb{'{Z}'}</Math> has no maximal and no minimal element.
        </p>
      </Example>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-amber-400">Well-Ordered Sets</h2>

      <Definition id="def-8.5.8" title="Definition 8.5.8: Well-ordered sets">
        <p>
          Let <Math>X</Math> be a partially ordered set, and let <Math>Y</Math> be a totally ordered
          subset of <Math>X</Math>. We say that <Math>Y</Math> is <strong>well-ordered</strong> if
          every non-empty subset of <Math>Y</Math> has a minimal element <Math>\min(Y)</Math>.
        </p>
      </Definition>

      <Example id="ex-8.5.9" title="Examples 8.5.9">
        <p>
          The natural numbers <Math>\mathbb{'{N}'}</Math> are well-ordered by Proposition 8.1.4.
          However, the integers <Math>\mathbb{'{Z}'}</Math>, the rationals <Math>\mathbb{'{Q}'}</Math>,
          and the real numbers <Math>\mathbb{'{R}'}</Math> are <em>not</em> well-ordered (see
          Exercise 8.1.2). Every finite totally ordered set is well-ordered (Exercise 8.5.8). Every
          subset of a well-ordered set is again well-ordered.
        </p>
      </Example>

      <Callout type="info" className="my-6">
        <strong>Why Well-Ordering Matters:</strong> One advantage of well-ordered sets is that they
        automatically obey a principle of strong induction, generalizing the principle for natural
        numbers (Proposition 2.2.14).
      </Callout>

      <Theorem id="prop-8.5.10" title="Proposition 8.5.10: Principle of strong induction">
        <p>
          Let <Math>X</Math> be a well-ordered set with an ordering relation <Math>\leq</Math>, and
          let <Math>P(n)</Math> be a property pertaining to an element <Math>n \in X</Math> (i.e.,
          for each <Math>n \in X</Math>, <Math>P(n)</Math> is either a true statement or a false
          statement).
        </p>
        <p className="mt-2">
          Suppose that for every <Math>n \in X</Math>, we have the following implication: if{' '}
          <Math>P(m)</Math> is true for all <Math>m \in X</Math> with <Math>{'m <_X n'}</Math>, then{' '}
          <Math>P(n)</Math> is also true.
        </p>
        <p className="mt-2">
          Then <Math>P(n)</Math> is true for all <Math>n \in X</Math>.
        </p>
        <div className="mt-4 pt-4 border-t border-amber-900/30">
          <p className="font-semibold text-amber-300">Proof sketch:</p>
          <p className="mt-2">
            Suppose for contradiction that the set{' '}
            <Math>{'Y := \\{n \\in X : P(m) \\text{ is false for some } m \\in X \\text{ with } m \\leq_X n\\}'}</Math>{' '}
            is non-empty. Since <Math>X</Math> is well-ordered, <Math>Y</Math> has a minimal element.
            But this leads to a contradiction with the hypothesis.{' '}
            <span className="float-right">&#9632;</span>
          </p>
        </div>
      </Theorem>

      <Callout type="note" className="my-6">
        <strong>Remark 8.5.11:</strong> It may seem strange that there is no "base" case in strong
        induction, corresponding to the hypothesis <Math>P(0)</Math> in Axiom 2.5. However, such a
        base case is automatically included in the strong induction hypothesis. Indeed, if <Math>0</Math>{' '}
        is the minimal element of <Math>X</Math>, then by specializing the hypothesis "if{' '}
        <Math>P(m)</Math> is true for all <Math>m \in X</Math> with <Math>{'m <_X n'}</Math>, then{' '}
        <Math>P(n)</Math> is also true" to the <Math>n = 0</Math> case, we automatically obtain that{' '}
        <Math>P(0)</Math> is true. (There are no elements <Math>m</Math> with <Math>{'m < 0'}</Math>,
        so the hypothesis is vacuously satisfied.)
      </Callout>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-amber-400">Upper Bounds</h2>

      <Definition id="def-8.5.12" title="Definition 8.5.12: Upper bounds and strict upper bounds">
        <p>
          Let <Math>X</Math> be a partially ordered set with ordering relation <Math>\leq</Math>, and
          let <Math>Y</Math> be a subset of <Math>X</Math>. If <Math>x \in X</Math>, we say that{' '}
          <Math>x</Math> is an <strong>upper bound</strong> for <Math>Y</Math> iff{' '}
          <Math>y \leq x</Math> for all <Math>y \in Y</Math>.
        </p>
        <p className="mt-2">
          If in addition <Math>x \notin Y</Math>, we say that <Math>x</Math> is a{' '}
          <strong>strict upper bound</strong> for <Math>Y</Math>. Equivalently, <Math>x</Math> is a
          strict upper bound for <Math>Y</Math> iff <Math>{'y < x'}</Math> for all{' '}
          <Math>y \in Y</Math>.
        </p>
      </Definition>

      <Example id="ex-8.5.13" title="Example 8.5.13">
        <p>
          Let us work in the real number system <Math>\mathbb{'{R}'}</Math> with the usual ordering{' '}
          <Math>\leq</Math>. Then <Math>2</Math> is an upper bound for the set{' '}
          <Math>{'{\\{x \\in \\mathbb{R} : 1 \\leq x \\leq 2\\}}'}</Math> but is not a strict upper
          bound. The number <Math>3</Math>, on the other hand, is a strict upper bound for this set.
        </p>
      </Example>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-amber-400">
        Key Lemmas and Zorn's Lemma
      </h2>

      <Theorem id="lemma-8.5.14" title="Lemma 8.5.14">
        <p>
          Let <Math>X</Math> be a partially ordered set with ordering relation <Math>\leq</Math>, and
          let <Math>x_0</Math> be an element of <Math>X</Math>. Then there is a well-ordered subset{' '}
          <Math>Y</Math> of <Math>X</Math> which has <Math>x_0</Math> as its minimal element, and
          which has no strict upper bound.
        </p>
        <div className="mt-4 pt-4 border-t border-amber-900/30">
          <p className="font-semibold text-amber-300">Proof idea:</p>
          <p className="mt-2">
            The intuition is that one is trying to perform the following algorithm: initialize{' '}
            <Math>{'Y := \\{x_0\\}'}</Math>. If <Math>Y</Math> has no strict upper bound, then we are
            done; otherwise, we choose a strict upper bound and add it to <Math>Y</Math>. We continue
            this "infinitely often" until we exhaust all the strict upper bounds.
          </p>
          <p className="mt-2">
            The axiom of choice comes in because infinitely many choices are involved. The rigorous
            proof defines a collection of "good sets" and takes their union to obtain the desired{' '}
            <Math>Y_\infty</Math>. <span className="float-right">&#9632;</span>
          </p>
        </div>
      </Theorem>

      <Theorem id="lemma-8.5.15" title="Lemma 8.5.15: Zorn's lemma">
        <p>
          Let <Math>X</Math> be a non-empty partially ordered set, with the property that every
          totally ordered subset <Math>Y</Math> of <Math>X</Math> has an upper bound. Then{' '}
          <Math>X</Math> contains at least one maximal element.
        </p>
        <div className="mt-4 pt-4 border-t border-amber-900/30">
          <p className="font-semibold text-amber-300">Proof sketch:</p>
          <p className="mt-2">
            If <Math>X</Math> had no maximal elements, then any subset of <Math>X</Math> which has an
            upper bound would also have a strict upper bound. But by Lemma 8.5.14, we can construct a
            well-ordered subset with no strict upper bound, giving a contradiction.{' '}
            <span className="float-right">&#9632;</span>
          </p>
        </div>
      </Theorem>

      <Callout type="success" className="my-6">
        <strong>Zorn's Lemma:</strong> Also called the <em>principle of transfinite induction</em>,
        Zorn's lemma is one of the most powerful tools in abstract mathematics. It is logically
        equivalent to the axiom of choice and the well-ordering principle.
      </Callout>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-amber-400">Equivalences</h2>

      <p className="mb-4">
        There are several important statements that are all logically equivalent to the axiom of
        choice:
      </p>

      <ul className="list-disc list-inside space-y-2 mb-4">
        <li>
          <strong>Axiom of Choice:</strong> Every collection of non-empty sets has a choice function
        </li>
        <li>
          <strong>Zorn's Lemma:</strong> Every non-empty poset where all chains have upper bounds
          has a maximal element
        </li>
        <li>
          <strong>Well-Ordering Principle:</strong> Every set can be well-ordered
        </li>
        <li>
          <strong>Hausdorff Maximality Principle:</strong> Every poset has a maximal totally ordered
          subset
        </li>
      </ul>

      <p className="mb-4">
        The proofs that these are equivalent are given in Exercises 8.5.17-8.5.19.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-amber-400">Summary</h2>

      <Callout type="success" className="my-6">
        <strong>Key Takeaways:</strong>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            A <strong>partially ordered set</strong> satisfies reflexivity, anti-symmetry, and
            transitivity
          </li>
          <li>
            A <strong>totally ordered set</strong> (chain) has all elements comparable
          </li>
          <li>
            A <strong>well-ordered set</strong> is totally ordered and every non-empty subset has
            a minimum
          </li>
          <li>
            <strong>Zorn's lemma</strong>: If every chain in a non-empty poset has an upper bound,
            then there exists a maximal element
          </li>
          <li>
            Zorn's lemma is <strong>equivalent</strong> to the axiom of choice and the well-ordering
            principle
          </li>
          <li>
            <strong>Strong induction</strong> works on any well-ordered set
          </li>
        </ul>
      </Callout>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-amber-400">Exercises</h2>

      <div className="bg-zinc-900/50 rounded-lg p-6 border border-zinc-800">
        <p className="font-semibold text-amber-300 mb-4">Exercise 8.5.1</p>
        <p>
          Consider the empty set <Math>\emptyset</Math> with the empty order relation{' '}
          <Math>\leq_\emptyset</Math> (this relation is vacuous because the empty set has no
          elements). Is this set partially ordered? totally ordered? well-ordered? Explain.
        </p>
      </div>

      <div className="bg-zinc-900/50 rounded-lg p-6 border border-zinc-800 mt-4">
        <p className="font-semibold text-amber-300 mb-4">Exercise 8.5.2</p>
        <p>Give examples of a set <Math>X</Math> and a relation <Math>\leq</Math> such that:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            (a) The relation <Math>\leq</Math> is reflexive and anti-symmetric, but not transitive
          </li>
          <li>
            (b) The relation <Math>\leq</Math> is reflexive and transitive, but not anti-symmetric
          </li>
          <li>
            (c) The relation <Math>\leq</Math> is anti-symmetric and transitive, but not reflexive
          </li>
        </ul>
      </div>

      <div className="bg-zinc-900/50 rounded-lg p-6 border border-zinc-800 mt-4">
        <p className="font-semibold text-amber-300 mb-4">Exercise 8.5.3</p>
        <p>
          Given two positive integers <Math>{'n, m \\in \\mathbb{N} \\setminus \\{0\\}'}</Math>, we
          say that <Math>n</Math> divides <Math>m</Math>, and write <Math>n | m</Math>, if there
          exists a positive integer <Math>a</Math> such that <Math>m = na</Math>. Show that the set{' '}
          <Math>{'\\mathbb{N} \\setminus \\{0\\}'}</Math> with the ordering relation <Math>|</Math>{' '}
          is a partially ordered set but not a totally ordered one.
        </p>
      </div>

      <div className="bg-zinc-900/50 rounded-lg p-6 border border-zinc-800 mt-4">
        <p className="font-semibold text-amber-300 mb-4">Exercise 8.5.7</p>
        <p>
          Let <Math>X</Math> be a partially ordered set, and let <Math>Y</Math> be a totally ordered
          subset of <Math>X</Math>. Show that <Math>Y</Math> can have at most one maximum and at
          most one minimum.
        </p>
      </div>

      <div className="bg-zinc-900/50 rounded-lg p-6 border border-zinc-800 mt-4">
        <p className="font-semibold text-amber-300 mb-4">Exercise 8.5.8</p>
        <p>
          Show that every finite non-empty subset of a totally ordered set has a minimum and a
          maximum. (Hint: use induction.) Conclude in particular that every finite totally ordered
          set is well-ordered.
        </p>
      </div>

      <div className="bg-zinc-900/50 rounded-lg p-6 border border-zinc-800 mt-4">
        <p className="font-semibold text-amber-300 mb-4">Exercise 8.5.10</p>
        <p>
          Prove Proposition 8.5.10, without using the axiom of choice. (Hint: consider the set{' '}
          <Math>{'Y := \\{n \\in X : P(m) \\text{ is false for some } m \\in X \\text{ with } m \\leq_X n\\}'}</Math>,
          and show that <Math>Y</Math> being non-empty would lead to a contradiction.)
        </p>
      </div>

      <div className="bg-zinc-900/50 rounded-lg p-6 border border-zinc-800 mt-4">
        <p className="font-semibold text-amber-300 mb-4">Exercise 8.5.17</p>
        <p>
          Use Zorn's lemma to give another proof of the claim in Exercise 8.4.2. (Hint: let{' '}
          <Math>\Omega</Math> be the set of all <Math>{'Y \\subseteq \\bigcup_{\\alpha \\in I} X_\\alpha'}</Math>{' '}
          such that <Math>{'\\#(Y \\cap X_\\alpha) \\leq 1'}</Math> for all{' '}
          <Math>\alpha \in I</Math>. Use Zorn's lemma to locate a maximal element of{' '}
          <Math>\Omega</Math>.) Deduce that Zorn's lemma and the axiom of choice are logically
          equivalent.
        </p>
      </div>

      <div className="bg-zinc-900/50 rounded-lg p-6 border border-zinc-800 mt-4">
        <p className="font-semibold text-amber-300 mb-4">Exercise 8.5.19</p>
        <p>
          Using Zorn's lemma, conclude the <strong>well-ordering principle</strong>: every set{' '}
          <Math>X</Math> has at least one well-ordering. Conversely, use the well-ordering principle
          to prove the axiom of choice. Thus the axiom of choice, Zorn's lemma, and the well-ordering
          principle are all logically equivalent to each other.
        </p>
      </div>
    </LessonLayout>
  );
}
