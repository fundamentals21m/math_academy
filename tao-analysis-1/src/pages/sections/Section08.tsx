import { LessonLayout } from '@/components/layout';
import { Definition, Theorem, Example } from '@/components/common';
import { Callout } from '@/components/common';
import { Math, MathBlock } from '@/components/common';

export default function Section08() {
  return (
    <LessonLayout sectionId={8}>
      {/* Introduction */}
      <p className="text-lg text-dark-200 mb-6">
        We know that a function <Math>{'f: X \\to Y'}</Math> from a set <Math>{'X'}</Math> to a
        set <Math>{'Y'}</Math> can take individual elements <Math>{'x \\in X'}</Math> to
        elements <Math>{'f(x) \\in Y'}</Math>. But functions can also take{' '}
        <em>subsets</em> in <Math>{'X'}</Math> to subsets in <Math>{'Y'}</Math>.
      </p>

      {/* Forward Images */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-6">
        Images of Sets
      </h2>

      <Definition title="Definition 3.4.1 (Images of sets)">
        <p className="mb-3">
          If <Math>{'f: X \\to Y'}</Math> is a function from <Math>{'X'}</Math> to{' '}
          <Math>{'Y'}</Math>, and <Math>{'S'}</Math> is a set in <Math>{'X'}</Math>, we
          define <Math>{'f(S)'}</Math> to be the set
        </p>
        <MathBlock>{`f(S) := \\{f(x) : x \\in S\\}`}</MathBlock>
        <p className="mt-3">
          this set is a subset of <Math>{'Y'}</Math>, and is sometimes called the{' '}
          <strong className="text-blue-300">image</strong> of <Math>{'S'}</Math> under the
          map <Math>{'f'}</Math>. We sometimes call <Math>{'f(S)'}</Math> the{' '}
          <strong className="text-blue-300">forward image</strong> of <Math>{'S'}</Math> to
          distinguish it from the inverse image <Math>{'f^{-1}(S)'}</Math> defined below.
        </p>
      </Definition>

      <Callout type="info">
        <strong>Technical Note</strong>
        <p className="mt-2">
          The set <Math>{'f(S)'}</Math> is well-defined thanks to the axiom of replacement
          (Axiom 3.6). One can also define <Math>{'f(S)'}</Math> using the axiom of
          specification (Axiom 3.5) instead of replacement.
        </p>
      </Callout>

      <Example title="Example 3.4.2">
        <p className="mb-3">
          If <Math>{'f: \\mathbb{N} \\to \\mathbb{N}'}</Math> is the map{' '}
          <Math>{'f(x) = 2x'}</Math>, then the forward image of{' '}
          <Math>{'\\{1, 2, 3\\}'}</Math> is <Math>{'\\{2, 4, 6\\}'}</Math>:
        </p>
        <MathBlock>{`f(\\{1, 2, 3\\}) = \\{2, 4, 6\\}.`}</MathBlock>
        <p className="text-dark-400 mt-3">
          More informally, to compute <Math>{'f(S)'}</Math>, we take every
          element <Math>{'x'}</Math> of <Math>{'S'}</Math>, apply <Math>{'f'}</Math> to each
          element individually, and then put all the resulting objects together to form a
          new set.
        </p>
      </Example>

      <Example title="Example 3.4.3: Images Can Be Smaller">
        <p className="mb-3">
          Let <Math>{'\\mathbb{Z}'}</Math> be the set of integers and let{' '}
          <Math>{'f: \\mathbb{Z} \\to \\mathbb{Z}'}</Math> be the map{' '}
          <Math>{'f(x) = x^2'}</Math>, then
        </p>
        <MathBlock>{`f(\\{-1, 0, 1, 2\\}) = \\{0, 1, 4\\}.`}</MathBlock>
        <p className="text-amber-300 mt-3">
          Note that <Math>{'f'}</Math> is not one-to-one because{' '}
          <Math>{'f(-1) = f(1)'}</Math>. When <Math>{'f'}</Math> is not injective, the
          image can be "smaller" than the original set.
        </p>
      </Example>

      <div className="mt-6 p-5 rounded-xl bg-amber-500/10 border border-amber-500/20">
        <h3 className="font-semibold text-amber-300 mb-3">Important Note on Membership</h3>
        <p className="text-dark-300 mb-2">Note that</p>
        <MathBlock>{`x \\in S \\implies f(x) \\in f(S)`}</MathBlock>
        <p className="text-dark-300 mb-2">but in general</p>
        <MathBlock>{`f(x) \\in f(S) \\centernot\\implies x \\in S`}</MathBlock>
        <p className="text-dark-400 mt-3">
          For instance in Example 3.4.3, <Math>{'f(-2)'}</Math> lies in the set{' '}
          <Math>{'f(\\{-1, 0, 1, 2\\})'}</Math>, but <Math>{'-2'}</Math> is not in{' '}
          <Math>{'\\{-1, 0, 1, 2\\}'}</Math>. The correct statement is:
        </p>
        <MathBlock>{`y \\in f(S) \\iff y = f(x) \\text{ for some } x \\in S`}</MathBlock>
      </div>

      {/* Inverse Images */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-6">
        Inverse Images
      </h2>

      <Definition title="Definition 3.4.4 (Inverse images)">
        <p className="mb-3">
          If <Math>{'U'}</Math> is a subset of <Math>{'Y'}</Math>, we define the
          set <Math>{'f^{-1}(U)'}</Math> to be the set
        </p>
        <MathBlock>{`f^{-1}(U) := \\{x \\in X : f(x) \\in U\\}.`}</MathBlock>
        <p className="mt-3">
          In other words, <Math>{'f^{-1}(U)'}</Math> consists of all the elements
          of <Math>{'X'}</Math> which map into <Math>{'U'}</Math>:
        </p>
        <MathBlock>{`f(x) \\in U \\iff x \\in f^{-1}(U).`}</MathBlock>
        <p className="mt-3">
          We call <Math>{'f^{-1}(U)'}</Math> the <strong className="text-blue-300">inverse image</strong> of{' '}
          <Math>{'U'}</Math>.
        </p>
      </Definition>

      <Example title="Example 3.4.5">
        <p className="mb-3">
          If <Math>{'f: \\mathbb{N} \\to \\mathbb{N}'}</Math> is the map{' '}
          <Math>{'f(x) = 2x'}</Math>, then
        </p>
        <MathBlock>{`f(\\{1, 2, 3\\}) = \\{2, 4, 6\\}, \\quad \\text{but} \\quad f^{-1}(\\{1, 2, 3\\}) = \\{1\\}.`}</MathBlock>
        <p className="mt-3 text-dark-300">
          Thus the forward image of <Math>{'\\{1, 2, 3\\}'}</Math> and the backwards image
          of <Math>{'\\{1, 2, 3\\}'}</Math> are quite different sets. Also note that
        </p>
        <MathBlock>{`f(f^{-1}(\\{1, 2, 3\\})) = f(\\{1\\}) = \\{2\\} \\neq \\{1, 2, 3\\}`}</MathBlock>
      </Example>

      <Example title="Example 3.4.6">
        <p className="mb-3">
          If <Math>{'f: \\mathbb{Z} \\to \\mathbb{Z}'}</Math> is the map{' '}
          <Math>{'f(x) = x^2'}</Math>, then
        </p>
        <MathBlock>{`f^{-1}(\\{0, 1, 4\\}) = \\{-2, -1, 0, 1, 2\\}.`}</MathBlock>
        <p className="mt-3 text-amber-300">
          Note that <Math>{'f'}</Math> does not have to be invertible in order
          for <Math>{'f^{-1}(U)'}</Math> to make sense!
        </p>
        <p className="mt-2 text-dark-400">
          Also note that images and inverse images do not quite invert each other. For instance:
        </p>
        <MathBlock>{`f^{-1}(f(\\{-1, 0, 1, 2\\})) = f^{-1}(\\{0, 1, 4\\}) = \\{-2, -1, 0, 1, 2\\} \\neq \\{-1, 0, 1, 2\\}`}</MathBlock>
      </Example>

      <Callout type="info">
        <strong>Remark 3.4.7</strong>
        <p className="mt-2">
          If <Math>{'f'}</Math> is a bijective function, then we have defined{' '}
          <Math>{'f^{-1}'}</Math> in two slightly different ways, but this is not an issue
          because both definitions are equivalent (Exercise 3.4.1).
        </p>
      </Callout>

      {/* Power Set Axiom */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-6">
        The Power Set Axiom
      </h2>

      <p className="text-dark-300 mb-6">
        As remarked earlier, functions are not sets. However, we do consider functions to be a
        type of object, and in particular we should be able to consider{' '}
        <em>sets of functions</em>. In particular, we should be able to consider the set of
        all functions from a set <Math>{'X'}</Math> to a set <Math>{'Y'}</Math>. To do this we
        need to introduce another axiom to set theory:
      </p>

      <Theorem title="Axiom 3.10 (Power set axiom)" color="blue">
        <p className="mb-3">
          Let <Math>{'X'}</Math> and <Math>{'Y'}</Math> be sets. Then there exists a set,
          denoted <Math>{'Y^X'}</Math>, which consists of all the functions from{' '}
          <Math>{'X'}</Math> to <Math>{'Y'}</Math>, thus
        </p>
        <MathBlock>{`f \\in Y^X \\iff (f \\text{ is a function with domain } X \\text{ and range } Y).`}</MathBlock>
      </Theorem>

      <Example title="Example 3.4.8">
        <p className="mb-3">
          Let <Math>{'X = \\{4, 7\\}'}</Math> and <Math>{'Y = \\{0, 1\\}'}</Math>. Then the
          set <Math>{'Y^X'}</Math> consists of four functions:
        </p>
        <ul className="list-disc list-inside space-y-1 text-dark-300">
          <li>the function that maps <Math>{'4 \\mapsto 0'}</Math> and <Math>{'7 \\mapsto 0'}</Math></li>
          <li>the function that maps <Math>{'4 \\mapsto 0'}</Math> and <Math>{'7 \\mapsto 1'}</Math></li>
          <li>the function that maps <Math>{'4 \\mapsto 1'}</Math> and <Math>{'7 \\mapsto 0'}</Math></li>
          <li>the function that maps <Math>{'4 \\mapsto 1'}</Math> and <Math>{'7 \\mapsto 1'}</Math></li>
        </ul>
        <p className="mt-3 text-dark-400">
          The reason we use the notation <Math>{'Y^X'}</Math> to denote this set is that
          if <Math>{'Y'}</Math> has <Math>{'n'}</Math> elements and <Math>{'X'}</Math> has{' '}
          <Math>{'m'}</Math> elements, then one can show that <Math>{'Y^X'}</Math> has{' '}
          <Math>{'n^m'}</Math> elements; see Proposition 3.6.14(f).
        </p>
      </Example>

      <Theorem title="Lemma 3.4.9">
        <p>
          Let <Math>{'X'}</Math> be a set. Then the set
        </p>
        <MathBlock>{`\\{Y : Y \\text{ is a subset of } X\\}`}</MathBlock>
        <p className="mt-3">is a set.</p>
        <div className="mt-4 p-3 bg-dark-800 rounded-lg">
          <p className="text-sm text-dark-400">
            <em>Proof.</em> See Exercise 3.4.6. (Hint: start with the set{' '}
            <Math>{'\\{0, 1\\}^X'}</Math> and apply the replacement axiom.)
          </p>
        </div>
      </Theorem>

      <Definition title="Remark 3.4.10: The Power Set">
        <p className="mb-3">
          The set <Math>{'\\{Y : Y \\text{ is a subset of } X\\}'}</Math> is known as the{' '}
          <strong className="text-blue-300">power set</strong> of <Math>{'X'}</Math> and is
          denoted <Math>{'2^X'}</Math>. For instance, if <Math>{'a, b, c'}</Math> are distinct
          objects, we have
        </p>
        <MathBlock>{`2^{\\{a,b,c\\}} = \\{\\emptyset, \\{a\\}, \\{b\\}, \\{c\\}, \\{a,b\\}, \\{a,c\\}, \\{b,c\\}, \\{a,b,c\\}\\}.`}</MathBlock>
        <p className="mt-3 text-dark-400">
          Note that while <Math>{'\\{a, b, c\\}'}</Math> has 3 elements,{' '}
          <Math>{'2^{\\{a,b,c\\}}'}</Math> has <Math>{'2^3 = 8'}</Math> elements. This gives a
          hint as to why we refer to the power set of <Math>{'X'}</Math> as{' '}
          <Math>{'2^X'}</Math>; we return to this issue in Chapter 8.
        </p>
      </Definition>

      {/* Union Axiom */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-6">
        The Union Axiom and Families of Sets
      </h2>

      <Theorem title="Axiom 3.11 (Union)" color="blue">
        <p className="mb-3">
          Let <Math>{'A'}</Math> be a set, all of whose elements are themselves sets. Then
          there exists a set <Math>{'\\bigcup A'}</Math> whose elements are precisely those
          objects which are elements of the elements of <Math>{'A'}</Math>, thus for all
          objects <Math>{'x'}</Math>
        </p>
        <MathBlock>{`x \\in \\bigcup A \\iff (x \\in S \\text{ for some } S \\in A).`}</MathBlock>
      </Theorem>

      <Example title="Example 3.4.11">
        <p className="mb-3">
          If <Math>{'A = \\{\\{2, 3\\}, \\{3, 4\\}, \\{4, 5\\}\\}'}</Math>, then
        </p>
        <MathBlock>{`\\bigcup A = \\{2, 3, 4, 5\\}`}</MathBlock>
      </Example>

      <p className="text-dark-300 mb-6">
        The axiom of union, combined with the axiom of pair set, implies the axiom of pairwise
        union (Exercise 3.4.8). Another important consequence is that if one has some
        set <Math>{'I'}</Math>, and for every element <Math>{'\\alpha \\in I'}</Math> we have
        some set <Math>{'A_\\alpha'}</Math>, then we can form the union set{' '}
        <Math>{'\\bigcup_{\\alpha \\in I} A_\\alpha'}</Math> by defining
      </p>
      <MathBlock>{`\\bigcup_{\\alpha \\in I} A_\\alpha := \\bigcup\\{A_\\alpha : \\alpha \\in I\\}`}</MathBlock>

      <Definition title="Indexed Families of Sets">
        <p className="mb-3">
          In situations like this, we often refer to <Math>{'I'}</Math> as an{' '}
          <strong className="text-blue-300">index set</strong>, and the
          elements <Math>{'\\alpha'}</Math> of this index set as{' '}
          <strong className="text-blue-300">labels</strong>; the sets{' '}
          <Math>{'A_\\alpha'}</Math> are then called a{' '}
          <strong className="text-blue-300">family of sets</strong>, and are indexed by the
          labels <Math>{'\\alpha \\in I'}</Math>.
        </p>
        <p className="text-dark-300">
          For any object <Math>{'y'}</Math>,
        </p>
        <MathBlock>{`y \\in \\bigcup_{\\alpha \\in I} A_\\alpha \\iff (y \\in A_\\alpha \\text{ for some } \\alpha \\in I).`}</MathBlock>
        <p className="mt-3 text-dark-400">
          Note that if <Math>{'I'}</Math> was empty, then{' '}
          <Math>{'\\bigcup_{\\alpha \\in I} A_\\alpha'}</Math> would automatically also be empty.
        </p>
      </Definition>

      {/* Intersections */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-6">
        Intersections of Families
      </h2>

      <p className="text-dark-300 mb-6">
        We can similarly form intersections of families of sets, as long as the index set is
        non-empty. More specifically, given any non-empty set <Math>{'I'}</Math>, and given
        an assignment of a set <Math>{'A_\\alpha'}</Math> to each <Math>{'\\alpha \\in I'}</Math>,
        we can define the intersection <Math>{'\\bigcap_{\\alpha \\in I} A_\\alpha'}</Math> by
        first choosing some element <Math>{'\\beta'}</Math> of <Math>{'I'}</Math> (which we
        can do since <Math>{'I'}</Math> is non-empty), and setting
      </p>
      <MathBlock>{`\\bigcap_{\\alpha \\in I} A_\\alpha := \\{x \\in A_\\beta : x \\in A_\\alpha \\text{ for all } \\alpha \\in I\\}`}</MathBlock>

      <p className="text-dark-300 mb-6">
        which is a set by the axiom of specification. This definition may look like it depends
        on the choice of <Math>{'\\beta'}</Math>, but it does not (Exercise 3.4.9). Observe
        that for any object <Math>{'y'}</Math>,
      </p>
      <MathBlock>{`y \\in \\bigcap_{\\alpha \\in I} A_\\alpha \\iff (y \\in A_\\alpha \\text{ for all } \\alpha \\in I).`}</MathBlock>

      {/* Zermelo-Fraenkel */}
      <Callout type="info">
        <strong>Remark 3.4.12: The Zermelo-Fraenkel Axioms</strong>
        <p className="mt-2">
          The axioms of set theory that we have introduced (Axioms 3.1-3.11, excluding the
          dangerous Axiom 3.8) are known as the{' '}
          <strong className="text-blue-300">Zermelo-Fraenkel axioms of set theory</strong>,
          after Ernest Zermelo (1871–1953) and Abraham Fraenkel (1891–1965).
        </p>
        <p className="mt-2">
          There is one further axiom we will eventually need, the famous{' '}
          <strong className="text-blue-300">axiom of choice</strong> (see Section 8.4), giving
          rise to the <strong>Zermelo-Fraenkel-Choice (ZFC)</strong> axioms of set theory.
        </p>
      </Callout>

      {/* Exercises */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-6">
        Exercises
      </h2>

      <div className="space-y-4">
        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700">
          <p className="font-semibold text-dark-200">Exercise 3.4.1</p>
          <p className="text-dark-400 mt-2">
            Let <Math>{'f: X \\to Y'}</Math> be a bijective function, and let{' '}
            <Math>{'f^{-1}: Y \\to X'}</Math> be its inverse. Let <Math>{'V'}</Math> be any
            subset of <Math>{'Y'}</Math>. Prove that the forward image of <Math>{'V'}</Math>{' '}
            under <Math>{'f^{-1}'}</Math> is the same set as the inverse image of{' '}
            <Math>{'V'}</Math> under <Math>{'f'}</Math>; thus the fact that both sets are
            denoted by <Math>{'f^{-1}(V)'}</Math> will not lead to any inconsistency.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700">
          <p className="font-semibold text-dark-200">Exercise 3.4.2</p>
          <p className="text-dark-400 mt-2">
            Let <Math>{'f: X \\to Y'}</Math> be a function from one set <Math>{'X'}</Math> to
            another set <Math>{'Y'}</Math>, let <Math>{'S'}</Math> be a subset of{' '}
            <Math>{'X'}</Math>, and let <Math>{'U'}</Math> be a subset of <Math>{'Y'}</Math>.
            What, in general, can one say about <Math>{'f^{-1}(f(S))'}</Math> and{' '}
            <Math>{'S'}</Math>? What about <Math>{'f(f^{-1}(U))'}</Math> and <Math>{'U'}</Math>?
          </p>
        </div>

        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700">
          <p className="font-semibold text-dark-200">Exercise 3.4.3</p>
          <p className="text-dark-400 mt-2">
            Let <Math>{'A, B'}</Math> be two subsets of a set <Math>{'X'}</Math>, and
            let <Math>{'f: X \\to Y'}</Math> be a function. Show that{' '}
            <Math>{'f(A \\cap B) \\subseteq f(A) \\cap f(B)'}</Math>, that{' '}
            <Math>{'f(A) \\setminus f(B) \\subseteq f(A \\setminus B)'}</Math>,
            and <Math>{'f(A \\cup B) = f(A) \\cup f(B)'}</Math>. For the first two statements,
            is it true that <Math>{'\\subseteq'}</Math> can be improved to <Math>{'='}</Math>?
          </p>
        </div>

        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700">
          <p className="font-semibold text-dark-200">Exercise 3.4.4</p>
          <p className="text-dark-400 mt-2">
            Let <Math>{'f: X \\to Y'}</Math> be a function from one set <Math>{'X'}</Math> to
            another set <Math>{'Y'}</Math>, and let <Math>{'U, V'}</Math> be subsets
            of <Math>{'Y'}</Math>. Show that <Math>{'f^{-1}(U \\cup V) = f^{-1}(U) \\cup f^{-1}(V)'}</Math>,
            that <Math>{'f^{-1}(U \\cap V) = f^{-1}(U) \\cap f^{-1}(V)'}</Math>, and
            that <Math>{'f^{-1}(U \\setminus V) = f^{-1}(U) \\setminus f^{-1}(V)'}</Math>.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700">
          <p className="font-semibold text-dark-200">Exercise 3.4.5</p>
          <p className="text-dark-400 mt-2">
            Let <Math>{'f: X \\to Y'}</Math> be a function from one set <Math>{'X'}</Math> to
            another set <Math>{'Y'}</Math>. Show that <Math>{'f(f^{-1}(S)) = S'}</Math> for
            every <Math>{'S \\subseteq Y'}</Math> if and only if <Math>{'f'}</Math> is surjective.
            Show that <Math>{'f^{-1}(f(S)) = S'}</Math> for every{' '}
            <Math>{'S \\subseteq X'}</Math> if and only if <Math>{'f'}</Math> is injective.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700">
          <p className="font-semibold text-dark-200">Exercise 3.4.10</p>
          <p className="text-dark-400 mt-2">
            Suppose that <Math>{'I'}</Math> and <Math>{'J'}</Math> are two sets, and for
            all <Math>{'\\alpha \\in I \\cup J'}</Math> let <Math>{'A_\\alpha'}</Math> be a
            set. Show that{' '}
            <Math>{'(\\bigcup_{\\alpha \\in I} A_\\alpha) \\cup (\\bigcup_{\\alpha \\in J} A_\\alpha) = \\bigcup_{\\alpha \\in I \\cup J} A_\\alpha'}</Math>.
            If <Math>{'I'}</Math> and <Math>{'J'}</Math> are non-empty, show that{' '}
            <Math>{'(\\bigcap_{\\alpha \\in I} A_\\alpha) \\cap (\\bigcap_{\\alpha \\in J} A_\\alpha) = \\bigcap_{\\alpha \\in I \\cup J} A_\\alpha'}</Math>.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700">
          <p className="font-semibold text-dark-200">Exercise 3.4.11: Generalized De Morgan Laws</p>
          <p className="text-dark-400 mt-2">
            Let <Math>{'X'}</Math> be a set, let <Math>{'I'}</Math> be a non-empty set, and
            for all <Math>{'\\alpha \\in I'}</Math> let <Math>{'A_\\alpha'}</Math> be a subset
            of <Math>{'X'}</Math>. Show that
          </p>
          <MathBlock>{`X \\setminus \\bigcup_{\\alpha \\in I} A_\\alpha = \\bigcap_{\\alpha \\in I}(X \\setminus A_\\alpha)`}</MathBlock>
          <p className="text-dark-400 mt-2">and</p>
          <MathBlock>{`X \\setminus \\bigcap_{\\alpha \\in I} A_\\alpha = \\bigcup_{\\alpha \\in I}(X \\setminus A_\\alpha).`}</MathBlock>
          <p className="text-dark-500 mt-2 text-sm">
            This should be compared with de Morgan's laws in Proposition 3.1.28 (although one
            cannot derive the above identities directly from de Morgan's laws, as <Math>{'I'}</Math>{' '}
            could be infinite).
          </p>
        </div>
      </div>

      {/* Summary */}
      <div className="mt-10 p-6 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-600/5 border border-indigo-500/20">
        <h3 className="text-lg font-semibold text-indigo-400 mb-3">Key Concepts</h3>
        <ul className="space-y-2 text-dark-300">
          <li>
            <strong className="text-dark-200">Forward Image</strong>{' '}
            <Math>{'f(S)'}</Math>: The set of all outputs <Math>{'f(x)'}</Math> where{' '}
            <Math>{'x \\in S'}</Math>.
          </li>
          <li>
            <strong className="text-dark-200">Inverse Image</strong>{' '}
            <Math>{'f^{-1}(U)'}</Math>: The set of all inputs <Math>{'x'}</Math> such that{' '}
            <Math>{'f(x) \\in U'}</Math>.
          </li>
          <li>
            <strong className="text-dark-200">Power Set</strong> <Math>{'2^X'}</Math>: The
            set of all subsets of <Math>{'X'}</Math>.
          </li>
          <li>
            <strong className="text-dark-200">Function Space</strong>{' '}
            <Math>{'Y^X'}</Math>: The set of all functions from <Math>{'X'}</Math> to{' '}
            <Math>{'Y'}</Math>.
          </li>
          <li>
            <strong className="text-dark-200">Indexed Families</strong>: Collections of
            sets <Math>{'\\{A_\\alpha\\}_{\\alpha \\in I}'}</Math> labeled by an index set.
          </li>
        </ul>
      </div>

      {/* Forward and Inverse Image Comparison */}
      <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-600/10 border border-blue-500/20">
        <h3 className="text-lg font-semibold text-blue-400 mb-4">
          Comparing Forward and Inverse Images
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-emerald-300 mb-2">
              Inverse images preserve set operations
            </h4>
            <ul className="space-y-1 text-sm text-dark-300">
              <li><Math>{'f^{-1}(U \\cup V) = f^{-1}(U) \\cup f^{-1}(V)'}</Math></li>
              <li><Math>{'f^{-1}(U \\cap V) = f^{-1}(U) \\cap f^{-1}(V)'}</Math></li>
              <li><Math>{'f^{-1}(U \\setminus V) = f^{-1}(U) \\setminus f^{-1}(V)'}</Math></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-amber-300 mb-2">
              Forward images only partially preserve
            </h4>
            <ul className="space-y-1 text-sm text-dark-300">
              <li><Math>{'f(A \\cup B) = f(A) \\cup f(B)'}</Math> <span className="text-emerald-300">(equality)</span></li>
              <li><Math>{'f(A \\cap B) \\subseteq f(A) \\cap f(B)'}</Math> <span className="text-amber-300">(only ⊆)</span></li>
              <li><Math>{'f(A) \\setminus f(B) \\subseteq f(A \\setminus B)'}</Math> <span className="text-amber-300">(only ⊆)</span></li>
            </ul>
          </div>
        </div>
      </div>
    </LessonLayout>
  );
}
