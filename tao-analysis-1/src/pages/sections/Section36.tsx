import { LessonLayout } from '@/components/layout';
import { Definition, Theorem, Example } from '@/components/common';
import { Callout } from '@/components/common';
import { Math, MathBlock } from '@/components/common';

export default function Section36() {
  return (
    <LessonLayout sectionId={36}>
      <p className="italic text-gray-300 mb-6">
        We now discuss the final axiom of the standard Zermelo-Fraenkel-Choice system of set theory,
        namely the axiom of choice. We have delayed introducing this axiom for a while now, to
        demonstrate that a large portion of the foundations of analysis can be constructed without
        appealing to this axiom.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-amber-400">Infinite Cartesian Products</h2>

      <p className="mb-4">
        We begin by generalizing the notion of finite Cartesian products to infinite Cartesian products.
      </p>

      <Definition id="def-8.4.1" title="Definition 8.4.1: Infinite Cartesian products">
        <p>
          Let <Math>I</Math> be a set (possibly infinite), and for each{' '}
          <Math>\alpha \in I</Math> let <Math>X_\alpha</Math> be a set. We then define
          the <strong>Cartesian product</strong> <Math>\prod_{'\\alpha \\in I'} X_\alpha</Math>{' '}
          to be the set
        </p>
        <MathBlock>
          {`\\prod_{\\alpha \\in I} X_\\alpha = \\left\\{ (x_\\alpha)_{\\alpha \\in I} \\in \\left( \\bigcup_{\\beta \\in I} X_\\beta \\right)^I : x_\\alpha \\in X_\\alpha \\text{ for all } \\alpha \\in I \\right\\}`}
        </MathBlock>
        <p className="mt-2">
          where we recall (from Axiom 3.10) that{' '}
          <Math>{'\\left( \\bigcup_{\\alpha \\in I} X_\\alpha \\right)^I'}</Math> is the set of all
          functions <Math>{'(x_\\alpha)_{\\alpha \\in I}'}</Math> which assign an element{' '}
          <Math>{'x_\\alpha \\in \\bigcup_{\\beta \\in I} X_\\beta'}</Math> to each{' '}
          <Math>\alpha \in I</Math>. Thus <Math>\prod_{'\\alpha \\in I'} X_\alpha</Math> is a
          subset of that set of functions, consisting instead of those functions{' '}
          <Math>{'(x_\\alpha)_{\\alpha \\in I}'}</Math> which assign an element{' '}
          <Math>x_\alpha \in X_\alpha</Math> to each <Math>\alpha \in I</Math>.
        </p>
      </Definition>

      <Example id="ex-8.4.2" title="Example 8.4.2">
        <p>
          For any sets <Math>I</Math> and <Math>X</Math>, we have{' '}
          <Math>\prod_{'\\alpha \\in I'} X = X^I</Math>. If <Math>I</Math> is a set of the form{' '}
          <Math>{'I := \\{ i \\in \\mathbb{N} : 1 \\leq i \\leq n \\}'}</Math>, then{' '}
          <Math>\prod_{'\\alpha \\in I'} X_\alpha</Math> is the same set as the set{' '}
          <Math>\prod_{'1 \\leq i \\leq N'} X_i</Math> defined in Definition 3.5.7.
        </p>
      </Example>

      <p className="my-4">
        Recall from Lemma 3.5.12 that if <Math>X_1, \ldots, X_n</Math> were any finite collection
        of non-empty sets, then the finite Cartesian product{' '}
        <Math>\prod_{'1 \\leq i \\leq n'} X_i</Math> was also non-empty. The Axiom of choice asserts
        that this statement is also true for infinite Cartesian products:
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-amber-400">The Axiom of Choice</h2>

      <Theorem id="axiom-8.1" title="Axiom 8.1: Choice">
        <p>
          Let <Math>I</Math> be a set, and for each <Math>\alpha \in I</Math>, let{' '}
          <Math>X_\alpha</Math> be a non-empty set. Then{' '}
          <Math>\prod_{'\\alpha \\in I'} X_\alpha</Math> is also non-empty.
        </p>
        <p className="mt-2">
          In other words, there exists a function <Math>{'(x_\\alpha)_{\\alpha \\in I}'}</Math>{' '}
          which assigns to each <Math>\alpha \in I</Math> an element{' '}
          <Math>x_\alpha \in X_\alpha</Math>.
        </p>
      </Theorem>

      <Callout type="note" className="my-6">
        <strong>Remark 8.4.3:</strong> The intuition behind this axiom is that given a (possibly
        infinite) collection of non-empty sets <Math>X_\alpha</Math>, one should be able to{' '}
        <em>choose</em> a single element <Math>x_\alpha</Math> from each one, and then form the
        possibly infinite tuple <Math>{'(x_\\alpha)_{\\alpha \\in I}'}</Math> from all the choices
        one has made.
        <p className="mt-2">
          On one hand, this is a very intuitively appealing axiom; in some sense one is just applying
          Lemma 3.1.6 over and over again. On the other hand, the fact that one is making an{' '}
          <em>infinite</em> number of arbitrary choices, with no explicit rule as to <em>how</em> to
          make these choices, is a little disconcerting.
        </p>
      </Callout>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-amber-400">Non-Constructive Proofs</h2>

      <p className="mb-4">
        There are many theorems proven using the axiom of choice which assert the abstract{' '}
        <em>existence</em> of some object <Math>x</Math> with certain properties, without saying at
        all what that object is, or how to construct it. Thus the axiom of choice can lead to proofs
        which are <strong>non-constructive</strong> - demonstrating existence of an object without
        actually constructing the object explicitly.
      </p>

      <p className="mb-4">
        This problem is not unique to the axiom of choice - it already appears for instance in
        Lemma 3.1.6 - but the objects shown to exist using the axiom of choice tend to be rather
        extreme in their level of non-constructiveness. However, as long as one is aware of the
        distinction between a non-constructive existence statement and a constructive existence
        statement (with the latter being preferable, but not strictly necessary in many cases),
        there is no difficulty here, except perhaps on a philosophical level.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-amber-400">Independence and Undecidability</h2>

      <Callout type="info" className="my-6">
        <strong>G&ouml;del's Result:</strong> The axiom of choice is almost universally accepted by
        mathematicians. One reason for this confidence is a theorem due to the great logician Kurt
        G&ouml;del (1906-1978), who showed that a result proven using the axiom of choice will never
        contradict a result proven without the axiom of choice (unless all the other axioms of set
        theory are themselves inconsistent, which is highly unlikely).
        <p className="mt-2">
          More precisely, G&ouml;del demonstrated that the axiom of choice is <strong>undecidable</strong>;
          it can neither be proved nor disproved from the other axioms of set theory, so long as those
          axioms are themselves consistent.
        </p>
      </Callout>

      <p className="mb-4">
        In practice, this means that any "real-life" application of analysis (more precisely, any
        application involving only "decidable" questions) which can be rigourously supported using
        the axiom of choice, can also be rigourously supported without the axiom of choice, though
        in many cases it would take a much more complicated and lengthier argument to do so if one
        were not allowed to use the axiom of choice.
      </p>

      <p className="mb-4">
        Thus one can view the axiom of choice as a <strong>convenient and safe labour-saving device</strong>{' '}
        in analysis. In other disciplines of mathematics, notably in set theory in which many of the
        questions are not decidable, the issue of whether to accept the axiom of choice is more open
        to debate, and involves some philosophical concerns as well as mathematical and logical ones.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-amber-400">Equivalent Formulations</h2>

      <Callout type="note" className="my-6">
        <strong>Remark 8.4.4:</strong> There are many equivalent formulations of the axiom of choice.
        In analysis one often does not need the full power of the axiom of choice. Instead, one often
        only needs the <strong>axiom of countable choice</strong>, which is the same as the axiom of
        choice but with the index set <Math>I</Math> restricted to be at most countable.
      </Callout>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-amber-400">Application: Sequences Approaching Suprema</h2>

      <p className="mb-4">
        We give a typical example of how the axiom of countable choice is used in analysis:
      </p>

      <Theorem id="lemma-8.4.5" title="Lemma 8.4.5">
        <p>
          Let <Math>E</Math> be a non-empty subset of the real line with{' '}
          <Math>{'\\sup(E) < \\infty'}</Math> (i.e., <Math>E</Math> is bounded from above).
          Then there exists a sequence <Math>{'(a_n)_{n=1}^\\infty'}</Math> whose elements{' '}
          <Math>a_n</Math> all lie in <Math>E</Math>, such that{' '}
          <Math>{'\\lim_{n \\to \\infty} a_n = \\sup(E)'}</Math>.
        </p>
        <div className="mt-4 pt-4 border-t border-amber-900/30">
          <p className="font-semibold text-amber-300">Proof:</p>
          <p className="mt-2">
            For each positive natural number <Math>n</Math>, let <Math>X_n</Math> denote the set
          </p>
          <MathBlock>
            {`X_n := \\{ x \\in E : \\sup(E) - 1/n \\leq x \\leq \\sup(E) \\}`}
          </MathBlock>
          <p className="mt-2">
            Since <Math>\sup(E)</Math> is the least upper bound for <Math>E</Math>, then{' '}
            <Math>\sup(E) - 1/n</Math> cannot be an upper bound for <Math>E</Math>, and so{' '}
            <Math>X_n</Math> is non-empty for each <Math>n</Math>.
          </p>
          <p className="mt-2">
            Using the axiom of choice (or the axiom of countable choice), we can then find a sequence{' '}
            <Math>{'(a_n)_{n=1}^\\infty'}</Math> such that <Math>a_n \in X_n</Math> for all{' '}
            <Math>n \geq 1</Math>. In particular <Math>a_n \in E</Math> for all <Math>n</Math>, and{' '}
            <Math>\sup(E) - 1/n \leq a_n \leq \sup(E)</Math> for all <Math>n</Math>.
          </p>
          <p className="mt-2">
            But then we have <Math>{'\\lim_{n \\to \\infty} a_n = \\sup(E)'}</Math> by the squeeze
            test (Corollary 6.4.14). <span className="float-right">&#9632;</span>
          </p>
        </div>
      </Theorem>

      <Callout type="note" className="my-6">
        <strong>Remark 8.4.6:</strong> In many special cases, one can obtain the conclusion of this
        lemma without using the axiom of choice. For instance, if <Math>E</Math> is a closed set
        (Definition 12.2.12) then one can define <Math>a_n</Math> without choice by the formula{' '}
        <Math>a_n := \inf(X_n)</Math>; the extra hypothesis that <Math>E</Math> is closed will
        ensure that <Math>a_n</Math> lies in <Math>E</Math>.
      </Callout>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-amber-400">Another Formulation</h2>

      <Theorem id="prop-8.4.7" title="Proposition 8.4.7">
        <p>
          Let <Math>X</Math> and <Math>Y</Math> be sets, and let <Math>P(x, y)</Math> be a property
          pertaining to an object <Math>x \in X</Math> and an object <Math>y \in Y</Math> such that
          for every <Math>x \in X</Math> there is at least one <Math>y \in Y</Math> such that{' '}
          <Math>P(x, y)</Math> is true.
        </p>
        <p className="mt-2">
          Then there exists a function <Math>f : X \to Y</Math> such that <Math>P(x, f(x))</Math>{' '}
          is true for all <Math>x \in X</Math>.
        </p>
        <div className="mt-4 pt-4 border-t border-amber-900/30">
          <p className="font-semibold text-amber-300">Proof sketch:</p>
          <p className="mt-2">
            For each <Math>x \in X</Math>, consider the sets{' '}
            <Math>{'Y_x := \\{ y \\in Y : P(x, y) \\text{ is true} \\}'}</Math>. By hypothesis, each{' '}
            <Math>Y_x</Math> is non-empty. The axiom of choice then gives a function that selects
            one element from each <Math>Y_x</Math>. Conversely, if Proposition 8.4.7 is true, one can
            deduce the axiom of choice by appropriate choices of <Math>X</Math>, <Math>Y</Math>, and{' '}
            <Math>P</Math>. <span className="float-right">&#9632;</span>
          </p>
        </div>
      </Theorem>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-amber-400">Philosophical Considerations</h2>

      <p className="mb-4">
        The axiom of choice can lead to a number of unintuitive consequences (for instance the
        Banach-Tarski paradox, a simplified version of which we will encounter in Section 18.3), and
        can lead to proofs that are philosophically somewhat unsatisfying. Nevertheless, the axiom is
        almost universally accepted by mathematicians.
      </p>

      <p className="mb-4">
        From a set of inconsistent axioms one can prove that every statement is both true and false.
        In practice, this means that any "real-life" application of analysis which can be rigourously
        supported using the axiom of choice, can also be rigourously supported without the axiom of
        choice, though in many cases it would take a much more complicated and lengthier argument.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-amber-400">Summary</h2>

      <Callout type="success" className="my-6">
        <strong>Key Takeaways:</strong>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            The <strong>axiom of choice</strong> asserts that infinite Cartesian products of non-empty
            sets are non-empty
          </li>
          <li>
            The axiom is <strong>independent</strong> of the other axioms of ZF set theory (G&ouml;del)
          </li>
          <li>
            The <strong>axiom of countable choice</strong> suffices for most applications in analysis
          </li>
          <li>
            The axiom leads to <strong>non-constructive</strong> existence proofs
          </li>
          <li>
            Despite philosophical concerns, the axiom is a <strong>safe and convenient</strong>{' '}
            tool for analysis
          </li>
          <li>
            Equivalent formulations include Proposition 8.4.7 (selecting elements via properties)
          </li>
        </ul>
      </Callout>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-amber-400">Exercises</h2>

      <div className="bg-zinc-900/50 rounded-lg p-6 border border-zinc-800">
        <p className="font-semibold text-amber-300 mb-4">Exercise 8.4.1</p>
        <p>
          Show that the axiom of choice implies Proposition 8.4.7. (Hint: consider the sets{' '}
          <Math>{'Y_x := \\{ y \\in Y : P(x, y) \\text{ is true} \\}'}</Math> for each{' '}
          <Math>x \in X</Math>.) Conversely, show that if Proposition 8.4.7 is true, then the axiom
          of choice is also true.
        </p>
      </div>

      <div className="bg-zinc-900/50 rounded-lg p-6 border border-zinc-800 mt-4">
        <p className="font-semibold text-amber-300 mb-4">Exercise 8.4.2</p>
        <p>
          Let <Math>I</Math> be a set, and for each <Math>\alpha \in I</Math> let{' '}
          <Math>X_\alpha</Math> be a non-empty set. Suppose that all the sets{' '}
          <Math>X_\alpha</Math> are disjoint from each other, i.e.,{' '}
          <Math>{'X_\\alpha \\cap X_\\beta = \\emptyset'}</Math> for all distinct{' '}
          <Math>\alpha, \beta \in I</Math>. Using the axiom of choice, show that there exists a set{' '}
          <Math>Y</Math> such that <Math>{'\\#(Y \\cap X_\\alpha) = 1'}</Math> for all{' '}
          <Math>\alpha \in I</Math> (i.e., <Math>Y</Math> intersects each{' '}
          <Math>X_\alpha</Math> in exactly one element).
        </p>
        <p className="mt-2">
          Conversely, show that if the above statement was true for an arbitrary choice of sets{' '}
          <Math>I</Math> and non-empty disjoint sets <Math>X_\alpha</Math>, then the axiom of choice
          is true. (Hint: the problem is that in Axiom 8.1 the sets <Math>X_\alpha</Math> are not
          assumed to be disjoint. But this can be fixed by looking at the sets{' '}
          <Math>{'\\{\\alpha\\} \\times X_\\alpha = \\{(\\alpha, x) : x \\in X_\\alpha\\}'}</Math>{' '}
          instead.)
        </p>
      </div>

      <div className="bg-zinc-900/50 rounded-lg p-6 border border-zinc-800 mt-4">
        <p className="font-semibold text-amber-300 mb-4">Exercise 8.4.3</p>
        <p>
          Let <Math>A</Math> and <Math>B</Math> be sets such that there exists a surjection{' '}
          <Math>g : B \to A</Math>. Using the axiom of choice, show that there then exists an
          injection <Math>f : A \to B</Math>; in other words <Math>A</Math> has lesser or equal
          cardinality to <Math>B</Math> in the sense of Exercise 3.6.7. (Hint: consider the inverse
          images <Math>{'g^{-1}(\\{a\\})'}</Math> for each <Math>a \in A</Math>.)
        </p>
        <p className="mt-2">
          Conversely, show that if the above statement is true for arbitrary sets <Math>A</Math>,{' '}
          <Math>B</Math> and surjections <Math>g : B \to A</Math>, then the axiom of choice is true.
        </p>
      </div>
    </LessonLayout>
  );
}
