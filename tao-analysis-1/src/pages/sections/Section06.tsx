import { LessonLayout } from '@/components/layout';
import { Definition, Theorem, Example } from '@/components/common';
import { Callout } from '@/components/common';
import { Math, MathBlock } from '@/components/common';

export default function Section06() {
  return (
    <LessonLayout sectionId={6}>
      {/* Introduction */}
      <p className="text-lg text-dark-200 mb-6">
        Many of the axioms introduced in Section 3.1 have a similar flavor: they both allow us to
        form a set consisting of all the elements which have a certain property. One might think
        that they could be unified by introducing a single, more powerful axiom.
      </p>

      <Callout type="warning">
        <strong>Optional Section</strong>
        <p className="mt-2">
          This section is marked as optional in the textbook. It provides important historical
          and logical context for understanding why we need to be careful about how we define sets,
          but the material is not strictly required for later chapters.
        </p>
      </Callout>

      {/* Universal Specification Axiom */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-6">
        The Universal Specification Axiom
      </h2>

      <p className="text-dark-300 mb-6">
        One might hope to simplify set theory by introducing the following axiom, which would
        subsume many of our previous axioms:
      </p>

      <Theorem title="Axiom 3.8 (Universal specification)" color="red">
        <p className="mb-3 text-red-300 font-semibold">(Dangerous!)</p>
        <p className="mb-3">
          Suppose for every object <Math>{'x'}</Math> we have a property <Math>{'P(x)'}</Math>{' '}
          pertaining to <Math>{'x'}</Math> (so that for every <Math>{'x'}</Math>,{' '}
          <Math>{'P(x)'}</Math> is either a true statement or a false statement). Then there
          exists a set <Math>{'\\{x : P(x) \\text{ is true}\\}'}</Math> such that for every
          object <Math>{'y'}</Math>,
        </p>
        <MathBlock>{`y \\in \\{x : P(x) \\text{ is true}\\} \\iff P(y) \\text{ is true}.`}</MathBlock>
      </Theorem>

      <p className="text-dark-300 mb-6">
        This axiom is also known as the <strong className="text-blue-300">axiom of comprehension</strong>.
        It asserts that every property corresponds to a set; if we assumed that axiom, we could
        talk about the set of all blue objects, the set of all natural numbers, the set of all
        sets, and so forth. This axiom also implies most of the axioms in Section 3.1 (Exercise 3.2.1).
      </p>

      <Callout type="error">
        <strong>Critical Problem</strong>
        <p className="mt-2">
          Unfortunately, this axiom cannot be introduced into set theory, because it creates a
          logical contradiction known as <em>Russell's paradox</em>.
        </p>
      </Callout>

      {/* Russell's Paradox */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-6">
        Russell's Paradox
      </h2>

      <p className="text-dark-300 mb-6">
        <strong className="text-blue-300">Russell's paradox</strong> was discovered by the
        philosopher and logician Bertrand Russell (1872–1970) in 1901. The paradox runs as follows.
      </p>

      <p className="text-dark-300 mb-4">
        Let <Math>{'P(x)'}</Math> be the statement
      </p>
      <MathBlock>{`P(x) \\iff \\text{"$x$ is a set, and $x \\notin x$"}`}</MathBlock>

      <p className="text-dark-300 mb-6">
        i.e., <Math>{'P(x)'}</Math> is true only when <Math>{'x'}</Math> is a set which does
        not contain itself. For instance, <Math>{'P(\\{2,3,4\\})'}</Math> is true, since the
        set <Math>{'\\{2,3,4\\}'}</Math> is not one of the three elements 2, 3, 4 of{' '}
        <Math>{'\\{2,3,4\\}'}</Math>.
      </p>

      <p className="text-dark-300 mb-6">
        On the other hand, if we let <Math>{'S'}</Math> be the set of all sets (which we would
        know to exist from the axiom of universal specification), then since <Math>{'S'}</Math>{' '}
        is itself a set, it is an element of <Math>{'S'}</Math>, and so <Math>{'P(S)'}</Math>{' '}
        is false.
      </p>

      <Example title="The Paradoxical Set">
        <p className="mb-3">
          Now use the axiom of universal specification to create the set
        </p>
        <MathBlock>{`\\Omega := \\{x : P(x) \\text{ is true}\\} = \\{x : x \\text{ is a set and } x \\notin x\\}`}</MathBlock>
        <p className="mb-3">
          i.e., the set of all sets which do not contain themselves.
        </p>
        <p className="font-semibold text-amber-300">
          Now ask the question: does <Math>{'\\Omega'}</Math> contain itself, i.e.,
          is <Math>{'\\Omega \\in \\Omega'}</Math>?
        </p>
      </Example>

      <div className="mt-6 p-6 rounded-2xl bg-gradient-to-br from-red-500/10 to-orange-600/10 border border-red-500/20">
        <h3 className="text-lg font-semibold text-red-400 mb-4">The Contradiction</h3>
        <ul className="space-y-3 text-dark-300">
          <li>
            <strong>Case 1:</strong> If <Math>{'\\Omega'}</Math> did contain itself, then by
            definition this means that <Math>{'P(\\Omega)'}</Math> is true, i.e.,{' '}
            <Math>{'\\Omega'}</Math> is a set and <Math>{'\\Omega \\notin \\Omega'}</Math>.
          </li>
          <li>
            <strong>Case 2:</strong> If <Math>{'\\Omega'}</Math> did not contain itself,
            then <Math>{'P(\\Omega)'}</Math> would be true, and hence{' '}
            <Math>{'\\Omega \\in \\Omega'}</Math>.
          </li>
          <li className="text-red-300 font-semibold">
            Thus in either case we have both <Math>{'\\Omega \\in \\Omega'}</Math> and{' '}
            <Math>{'\\Omega \\notin \\Omega'}</Math>, which is absurd.
          </li>
        </ul>
      </div>

      {/* Understanding the Problem */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-6">
        Understanding the Problem
      </h2>

      <p className="text-dark-300 mb-6">
        The problem with the axiom of universal specification is that it creates sets which are
        far too "large" — for instance, we can use that axiom to talk about the set of all
        objects (a so-called "universal set"). Since sets are themselves objects (Axiom 3.1),
        this means that sets are allowed to contain themselves, which is a somewhat silly state
        of affairs.
      </p>

      <Definition title="The Hierarchy of Objects">
        <p className="mb-3">
          One way to informally resolve this issue is to think of objects as being arranged
          in a <strong className="text-blue-300">hierarchy</strong>:
        </p>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>
            <strong>Bottom level:</strong> Primitive objects — objects that are not sets,
            such as the natural number 37.
          </li>
          <li>
            <strong>Next level:</strong> "Primitive sets" — sets whose elements consist only
            of primitive objects, such as <Math>{'\\{3, 4, 7\\}'}</Math> or the empty
            set <Math>{'\\emptyset'}</Math>.
          </li>
          <li>
            <strong>Higher levels:</strong> Sets whose elements consist only of primitive
            objects and primitive sets, such as <Math>{'\\{3, 4, 7, \\{3, 4, 7\\}\\}'}</Math>.
          </li>
          <li>
            <strong>And so on...</strong> We can form sets out of these objects.
          </li>
        </ul>
        <p className="mt-3 text-emerald-300">
          The key insight: at each stage of the hierarchy we only see sets whose elements
          consist of objects at <em>lower</em> stages of the hierarchy, and so at no stage
          do we ever construct a set which contains itself.
        </p>
      </Definition>

      {/* Axiom of Regularity */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-6">
        The Axiom of Regularity
      </h2>

      <p className="text-dark-300 mb-6">
        To actually formalize the above intuition of a hierarchy of objects is rather complicated.
        Instead, we shall simply postulate an axiom which ensures that absurdities such as
        Russell's paradox do not occur.
      </p>

      <Theorem title="Axiom 3.9 (Regularity)" color="blue">
        <p>
          If <Math>{'A'}</Math> is a non-empty set, then there is at least one
          element <Math>{'x'}</Math> of <Math>{'A'}</Math> which is either not a set,
          or is disjoint from <Math>{'A'}</Math>.
        </p>
      </Theorem>

      <p className="text-dark-300 mb-6">
        This axiom is also known as the <strong className="text-blue-300">axiom of foundation</strong>.
        The point of this axiom is that it asserts that at least one of the elements
        of <Math>{'A'}</Math> is so low on the hierarchy of objects that it does not contain
        any of the other elements of <Math>{'A'}</Math>.
      </p>

      <Example title="Illustrating the Axiom of Regularity">
        <p className="mb-3">
          Let <Math>{'A = \\{\\{3, 4\\}, \\{3, 4, \\{3, 4\\}\\}\\}'}</Math>.
        </p>
        <ul className="list-disc list-inside space-y-2 text-dark-300">
          <li>
            The element <Math>{'\\{3, 4\\} \\in A'}</Math> does not contain any of the
            elements of <Math>{'A'}</Math> (neither 3 nor 4 lies in <Math>{'A'}</Math>).
          </li>
          <li>
            The element <Math>{'\\{3, 4, \\{3, 4\\}\\}'}</Math>, being somewhat higher in
            the hierarchy, does contain an element of <Math>{'A'}</Math>,
            namely <Math>{'\\{3, 4\\}'}</Math>.
          </li>
        </ul>
      </Example>

      <Theorem title="Corollary: Sets Cannot Contain Themselves">
        <p>
          One particular consequence of the axiom of regularity is that sets are no longer
          allowed to contain themselves. If <Math>{'A'}</Math> is a set,
          then <Math>{'A \\notin A'}</Math>.
        </p>
        <div className="mt-4 p-3 bg-dark-800 rounded-lg">
          <p className="text-sm text-dark-400 italic">
            See Exercise 3.2.2 for the proof.
          </p>
        </div>
      </Theorem>

      {/* Necessity of the Axiom */}
      <Callout type="info">
        <strong>Do We Really Need This Axiom?</strong>
        <p className="mt-2">
          One can legitimately ask whether we really need this axiom in our set theory, as it
          is certainly less intuitive than our other axioms. For the purposes of doing analysis,
          it turns out that this axiom is never needed; all the sets we consider in analysis are
          typically very low on the hierarchy of objects.
        </p>
        <p className="mt-2">
          However, it is necessary to include this axiom in order to perform more advanced set
          theory, and so it has been included in the text for sake of completeness.
        </p>
      </Callout>

      {/* Exercises */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-6">
        Exercises
      </h2>

      <div className="space-y-4">
        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700">
          <p className="font-semibold text-dark-200">Exercise 3.2.1</p>
          <p className="text-dark-400 mt-2">
            Show that the universal specification axiom, Axiom 3.8, if assumed to be true,
            would imply Axioms 3.2, 3.3, 3.4, 3.5, and 3.6. (If we assume that all natural
            numbers are objects, we also obtain Axiom 3.7.) Thus, this axiom, if permitted,
            would simplify the foundations of set theory tremendously.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700">
          <p className="font-semibold text-dark-200">Exercise 3.2.2</p>
          <p className="text-dark-400 mt-2">
            Use the axiom of regularity (and the singleton set axiom) to show that
            if <Math>{'A'}</Math> is a set, then <Math>{'A \\notin A'}</Math>. Furthermore,
            show that if <Math>{'A'}</Math> and <Math>{'B'}</Math> are two sets, then
            either <Math>{'A \\notin B'}</Math> or <Math>{'B \\notin A'}</Math> (or both).
          </p>
        </div>

        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700">
          <p className="font-semibold text-dark-200">Exercise 3.2.3</p>
          <p className="text-dark-400 mt-2">
            Show (assuming the other axioms of set theory) that the universal specification
            axiom, Axiom 3.8, is equivalent to an axiom postulating the existence of a
            "universal set" <Math>{'\\Omega'}</Math> consisting of all objects (i.e., for all
            objects <Math>{'x'}</Math>, we have <Math>{'x \\in \\Omega'}</Math>). Note that
            if a universal set <Math>{'\\Omega'}</Math> existed, then we would
            have <Math>{'\\Omega \\in \\Omega'}</Math> by Axiom 3.1, contradicting Exercise 3.2.2.
          </p>
        </div>
      </div>

      {/* Summary */}
      <div className="mt-10 p-6 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-600/5 border border-indigo-500/20">
        <h3 className="text-lg font-semibold text-indigo-400 mb-3">Key Takeaways</h3>
        <ul className="space-y-2 text-dark-300">
          <li>
            <strong className="text-dark-200">Russell's Paradox</strong> shows that the
            "naive" axiom of universal specification leads to contradictions.
          </li>
          <li>
            <strong className="text-dark-200">The Axiom of Regularity</strong> prevents
            such paradoxes by ensuring sets cannot contain themselves.
          </li>
          <li>
            <strong className="text-dark-200">The Hierarchy Intuition</strong> explains why:
            sets can only contain objects from "lower levels," preventing circular membership.
          </li>
          <li>
            <strong className="text-dark-200">For Analysis</strong>: This axiom is included
            for completeness but is rarely needed in practice.
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
