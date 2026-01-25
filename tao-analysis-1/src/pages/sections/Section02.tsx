import { LessonLayout } from '@/components/layout';
import { Definition, Axiom, Theorem, Example } from '@/components/common';
import { Callout } from '@/components/common';
import { Math, MathBlock } from '@/components/common';

export default function Section02() {
  return (
    <LessonLayout sectionId={2}>
      {/* Introduction */}
      <p className="text-lg text-dark-200 mb-6">
        We now present one standard way to define the natural numbers, in terms of the{' '}
        <strong className="text-indigo-400">Peano axioms</strong>, which were first laid out by
        Giuseppe Peano (1858–1932). This is not the only way to define the natural numbers, but
        it is one of the most elegant and foundational approaches.
      </p>

      <Definition title="Definition 2.1.1 (Informal): Natural Numbers">
        <p className="mb-3">A <em>natural number</em> is any element of the set</p>
        <MathBlock>{'\\mathbb{N} := \\{0, 1, 2, 3, 4, \\ldots\\}'}</MathBlock>
        <p>
          which is the set of all the numbers created by starting with 0 and then counting
          forward indefinitely. We call <Math>{'\\mathbb{N}'}</Math> the <em>set of natural numbers</em>.
        </p>
      </Definition>

      <Callout type="note" title="Remark 2.1.2">
        In some texts the natural numbers start at 1 instead of 0, but this is a matter of
        notational convention. In this text we shall refer to the set <Math>{'\\{1, 2, 3, \\ldots\\}'}</Math>{' '}
        as the <em>positive integers</em> <Math>{'\\mathbb{Z}^+'}</Math> rather than the natural numbers.
      </Callout>

      <p className="text-dark-300 mb-6">
        This informal definition seems intuitive, but it leaves many questions unanswered:
        How do we know we can keep counting indefinitely, without cycling back to 0? How do
        you perform operations such as addition, multiplication, or exponentiation?
      </p>

      {/* The Increment Operation */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-6">
        The Increment Operation
      </h2>

      <p className="text-dark-300 mb-6">
        To define the natural numbers, we will use two fundamental concepts: the zero number 0,
        and the <strong className="text-indigo-400">increment operation</strong>. We will use{' '}
        <Math>{'n{+}{+}'}</Math> to denote the increment or <em>successor</em> of <Math>{'n'}</Math>.
      </p>

      <p className="text-dark-300 mb-6">
        Thus for instance <Math>{'3{+}{+} = 4'}</Math>, <Math>{'(3{+}{+}){+}{+} = 5'}</Math>, etc.
        So <Math>{'\\mathbb{N}'}</Math> should consist of the objects:
      </p>

      <MathBlock>{'0, \\; 0{+}{+}, \\; (0{+}{+}){+}{+}, \\; ((0{+}{+}){+}{+}){+}{+}, \\; \\text{etc.}'}</MathBlock>

      {/* First Two Axioms */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-6">
        The First Peano Axioms
      </h2>

      <Axiom title="Axiom 2.1">
        <p>0 is a natural number.</p>
      </Axiom>

      <Axiom title="Axiom 2.2">
        <p>
          If <Math>{'n'}</Math> is a natural number, then <Math>{'n{+}{+}'}</Math> is also a natural number.
        </p>
      </Axiom>

      <Definition title="Definition 2.1.3: Numerals">
        <p>
          We define <Math>{'1'}</Math> to be the number <Math>{'0{+}{+}'}</Math>,{' '}
          <Math>{'2'}</Math> to be the number <Math>{'(0{+}{+}){+}{+}'}</Math>,{' '}
          <Math>{'3'}</Math> to be the number <Math>{'((0{+}{+}){+}{+}){+}{+}'}</Math>, etc.
        </p>
        <p className="mt-2">
          In other words: <Math>{'1 := 0{+}{+}'}</Math>, <Math>{'2 := 1{+}{+}'}</Math>,{' '}
          <Math>{'3 := 2{+}{+}'}</Math>, etc.
        </p>
      </Definition>

      <Theorem title="Proposition 2.1.4: 3 is a natural number">
        <p>
          By Axiom 2.1, 0 is a natural number. By Axiom 2.2, <Math>{'0{+}{+} = 1'}</Math> is a
          natural number. By Axiom 2.2 again, <Math>{'1{+}{+} = 2'}</Math> is a natural number.
          By Axiom 2.2 again, <Math>{'2{+}{+} = 3'}</Math> is a natural number.
        </p>
      </Theorem>

      {/* The Wrap-Around Problem */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-6">
        Preventing Wrap-Around
      </h2>

      <p className="text-dark-300 mb-6">
        It may seem that the first two axioms are enough to describe the natural numbers.
        However, we have not pinned down completely the behavior of <Math>{'\\mathbb{N}'}</Math>:
      </p>

      <Example title="Example 2.1.5: Wrap-Around">
        <p className="mb-4">
          Consider a number system which consists of the numbers 0, 1, 2, 3, in which the
          increment operation <em>wraps back</em> from 3 to 0. More precisely:{' '}
          <Math>{'0{+}{+} = 1'}</Math>, <Math>{'1{+}{+} = 2'}</Math>, <Math>{'2{+}{+} = 3'}</Math>,
          but <Math>{'3{+}{+} = 0'}</Math>.
        </p>
        <p>
          This type of thing actually happens in real life, when one uses a computer to store
          a natural number: if one starts at 0 and performs the increment operation repeatedly,
          eventually the computer will overflow its memory and the number will wrap around back
          to 0.
        </p>
      </Example>

      <p className="text-dark-300 mb-6">
        To prevent this sort of "wrap-around issue" we will impose another axiom:
      </p>

      <Axiom title="Axiom 2.3">
        <p>
          0 is not the successor of any natural number; i.e., we have{' '}
          <Math>{'n{+}{+} \\neq 0'}</Math> for every natural number <Math>{'n'}</Math>.
        </p>
      </Axiom>

      <Theorem title="Proposition 2.1.6: 4 is not equal to 0">
        <p className="mb-3">
          Don't laugh! Because of the way we have defined 4 — it is the increment of the
          increment of the increment of the increment of 0 — it is not necessarily true{' '}
          <em>a priori</em> that this number is not the same as zero, even if it is "obvious."
        </p>
        <p>
          <strong>Proof:</strong> By definition, <Math>{'4 = 3{+}{+}'}</Math>. By Axioms 2.1 and 2.2,
          3 is a natural number. Thus by Axiom 2.3, <Math>{'3{+}{+} \\neq 0'}</Math>, i.e.,{' '}
          <Math>{'4 \\neq 0'}</Math>. ∎
        </p>
      </Theorem>

      {/* The Ceiling Problem */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-6">
        Preventing Collisions
      </h2>

      <Example title="Example 2.1.7: Ceiling Problem">
        <p>
          Consider a number system consisting of five numbers 0, 1, 2, 3, 4, in which the
          increment operation hits a "ceiling" at 4. More precisely:{' '}
          <Math>{'0{+}{+} = 1'}</Math>, <Math>{'1{+}{+} = 2'}</Math>, <Math>{'2{+}{+} = 3'}</Math>,{' '}
          <Math>{'3{+}{+} = 4'}</Math>, but <Math>{'4{+}{+} = 4'}</Math> (so that{' '}
          <Math>{'5 = 4'}</Math>, <Math>{'6 = 4'}</Math>, etc.). This does not contradict
          Axioms 2.1, 2.2, or 2.3.
        </p>
      </Example>

      <Axiom title="Axiom 2.4">
        <p>
          Different natural numbers must have different successors; i.e., if <Math>{'n'}</Math>,{' '}
          <Math>{'m'}</Math> are natural numbers and <Math>{'n \\neq m'}</Math>, then{' '}
          <Math>{'n{+}{+} \\neq m{+}{+}'}</Math>.
        </p>
        <p className="mt-2">
          Equivalently, if <Math>{'n{+}{+} = m{+}{+}'}</Math>, then we must have{' '}
          <Math>{'n = m'}</Math>.
        </p>
      </Axiom>

      <Theorem title="Proposition 2.1.8: 6 is not equal to 2">
        <p>
          <strong>Proof:</strong> Suppose for sake of contradiction that <Math>{'6 = 2'}</Math>.
          Then <Math>{'5{+}{+} = 1{+}{+}'}</Math>, so by Axiom 2.4 we have <Math>{'5 = 1'}</Math>,
          so that <Math>{'4{+}{+} = 0{+}{+}'}</Math>. By Axiom 2.4 again we then have{' '}
          <Math>{'4 = 0'}</Math>, which contradicts Proposition 2.1.6. ∎
        </p>
      </Theorem>

      {/* The Rogue Elements Problem */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-6">
        Excluding Rogue Elements
      </h2>

      <Example title="Example 2.1.9: Rogue Elements (Informal)">
        <p>
          Suppose that our number system <Math>{'\\mathbb{N}'}</Math> consisted of the following
          collection of integers and half-integers:
        </p>
        <MathBlock>{'\\mathbb{N} := \\{0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, \\ldots\\}'}</MathBlock>
        <p className="mt-3">
          One can check that Axioms 2.1–2.4 are still satisfied for this set. What we want is
          some axiom which says that the only numbers in <Math>{'\\mathbb{N}'}</Math> are those
          which can be obtained from 0 and the increment operation.
        </p>
      </Example>

      {/* Axiom of Induction */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-6">
        The Principle of Mathematical Induction
      </h2>

      <Axiom title="Axiom 2.5 (Principle of Mathematical Induction)">
        <p>
          Let <Math>{'P(n)'}</Math> be any property pertaining to a natural number{' '}
          <Math>{'n'}</Math>. Suppose that <Math>{'P(0)'}</Math> is true, and suppose that
          whenever <Math>{'P(n)'}</Math> is true, <Math>{'P(n{+}{+})'}</Math> is also true.
          Then <Math>{'P(n)'}</Math> is true for every natural number <Math>{'n'}</Math>.
        </p>
      </Axiom>

      <Callout type="info" title="How Induction Works">
        <p className="mb-3">
          Suppose <Math>{'P(n)'}</Math> is such that <Math>{'P(0)'}</Math> is true, and such
          that whenever <Math>{'P(n)'}</Math> is true, then <Math>{'P(n{+}{+})'}</Math> is true.
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Since <Math>{'P(0)'}</Math> is true, <Math>{'P(0{+}{+}) = P(1)'}</Math> is true.</li>
          <li>Since <Math>{'P(1)'}</Math> is true, <Math>{'P(1{+}{+}) = P(2)'}</Math> is true.</li>
          <li>Repeating indefinitely, <Math>{'P(0), P(1), P(2), P(3), \\ldots'}</Math> are all true.</li>
        </ul>
        <p className="mt-3">
          However, this line of reasoning will never let us conclude that <Math>{'P(0.5)'}</Math>,
          for instance, is true. Thus Axiom 2.5 excludes "rogue" elements like 0.5.
        </p>
      </Callout>

      {/* Proof by Induction Template */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-6">
        Proof by Induction
      </h2>

      <p className="text-dark-300 mb-6">
        The principle of induction gives us a way to prove that a property <Math>{'P(n)'}</Math>{' '}
        is true for every natural number <Math>{'n'}</Math>. Proofs by induction typically
        follow this structure:
      </p>

      <div className="my-6 p-6 rounded-2xl bg-gradient-to-br from-slate-500/10 to-slate-600/5 border border-slate-500/20">
        <h3 className="text-lg font-semibold text-slate-300 mb-4">Template: Proof by Induction</h3>
        <ol className="list-decimal list-inside space-y-3 text-dark-300">
          <li>
            <strong>Base case:</strong> Verify <Math>{'P(0)'}</Math> is true.
          </li>
          <li>
            <strong>Inductive hypothesis:</strong> Suppose <Math>{'P(n)'}</Math> has already
            been proven for some natural number <Math>{'n'}</Math>.
          </li>
          <li>
            <strong>Inductive step:</strong> Prove <Math>{'P(n{+}{+})'}</Math> using the
            assumption that <Math>{'P(n)'}</Math> is true.
          </li>
          <li>
            <strong>Conclusion:</strong> By induction, <Math>{'P(n)'}</Math> is true for all
            natural numbers <Math>{'n'}</Math>.
          </li>
        </ol>
      </div>

      {/* Summary of Peano Axioms */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-6">
        Summary: The Five Peano Axioms
      </h2>

      <div className="my-6 p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-indigo-600/5 border border-purple-500/20">
        <h3 className="text-lg font-semibold text-purple-400 mb-4">The Peano Axioms for Natural Numbers</h3>
        <ol className="list-decimal list-inside space-y-3 text-dark-300">
          <li><strong>Axiom 2.1:</strong> 0 is a natural number.</li>
          <li>
            <strong>Axiom 2.2:</strong> If <Math>{'n'}</Math> is a natural number, then{' '}
            <Math>{'n{+}{+}'}</Math> is also a natural number.
          </li>
          <li>
            <strong>Axiom 2.3:</strong> <Math>{'n{+}{+} \\neq 0'}</Math> for every natural number{' '}
            <Math>{'n'}</Math>.
          </li>
          <li>
            <strong>Axiom 2.4:</strong> If <Math>{'n{+}{+} = m{+}{+}'}</Math>, then{' '}
            <Math>{'n = m'}</Math>.
          </li>
          <li>
            <strong>Axiom 2.5:</strong> (Induction) If <Math>{'P(0)'}</Math> is true, and{' '}
            <Math>{'P(n) \\Rightarrow P(n{+}{+})'}</Math>, then <Math>{'P(n)'}</Math> is true
            for all <Math>{'n \\in \\mathbb{N}'}</Math>.
          </li>
        </ol>
      </div>

      {/* Recursive Definitions */}
      <h2 className="text-2xl font-bold text-dark-100 mt-10 mb-6">
        Recursive Definitions
      </h2>

      <p className="text-dark-300 mb-6">
        One consequence of the axioms is that we can now define sequences <em>recursively</em>.
        Suppose we want to build a sequence <Math>{'a_0, a_1, a_2, \\ldots'}</Math> by first
        defining <Math>{'a_0 := c'}</Math> for some base value <Math>{'c'}</Math>, and then
        letting <Math>{'a_{n{+}{+}} := f_n(a_n)'}</Math> for some function <Math>{'f_n'}</Math>.
      </p>

      <Theorem title="Proposition 2.1.16 (Recursive Definitions)">
        <p>
          Suppose for each natural number <Math>{'n'}</Math>, we have some function{' '}
          <Math>{'f_n : \\mathbb{N} \\to \\mathbb{N}'}</Math>. Let <Math>{'c'}</Math> be a
          natural number. Then we can assign a unique natural number <Math>{'a_n'}</Math> to
          each natural number <Math>{'n'}</Math>, such that <Math>{'a_0 = c'}</Math> and{' '}
          <Math>{'a_{n{+}{+}} = f_n(a_n)'}</Math> for each natural number <Math>{'n'}</Math>.
        </p>
      </Theorem>

      <p className="text-dark-300 mt-6">
        Recursive definitions are very powerful; for instance, we can use them to define
        addition and multiplication, which we will explore in subsequent sections.
      </p>

      <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-600/5 border border-indigo-500/20">
        <h3 className="text-lg font-semibold text-indigo-400 mb-3">Key Insight</h3>
        <p className="text-dark-300">
          A remarkable accomplishment of modern analysis is that just by starting from these
          five very primitive axioms, and some additional axioms from set theory, we can build
          all the other number systems, create functions, and do all the algebra and calculus
          that we are used to.
        </p>
      </div>
    </LessonLayout>
  );
}
