import { LessonLayout } from '../../components/layout/LessonLayout';
import { Definition, Theorem, Example } from '../../components/common/ContentBlocks';
import { Callout } from '../../components/common/Callout';
import { InlineMath, MathBlock } from '../../components/common/MathBlock';

export default function Section08() {
  return (
    <LessonLayout sectionId={8}>
      <h2 className="text-2xl font-semibold mb-4">Finite, Countable, and Uncountable Sets</h2>

      <p className="mb-4">
        This section begins Chapter 2 on Basic Topology by establishing the fundamental distinction
        between different sizes of infinite sets. We develop the theory of countable and uncountable
        sets, culminating in Cantor's revolutionary diagonal argument showing that the real numbers
        cannot be put in one-to-one correspondence with the integers.
      </p>

      <Callout type="info">
        <p>
          The concepts in this section form the foundation of modern set theory. Understanding
          the distinction between countable and uncountable infinities is essential for analysis,
          particularly in measure theory and the study of function spaces.
        </p>
      </Callout>

      <h3 className="text-xl font-semibold mt-8 mb-4">Functions and Correspondences</h3>

      <Definition title="2.1 Function">
        <p>
          Consider two sets <InlineMath>{'A'}</InlineMath> and <InlineMath>{'B'}</InlineMath>, whose
          elements may be any objects whatsoever, and suppose that with each element{' '}
          <InlineMath>{'x'}</InlineMath> of <InlineMath>{'A'}</InlineMath> there is associated, in
          some manner, an element of <InlineMath>{'B'}</InlineMath>, which we denote by{' '}
          <InlineMath>{'f(x)'}</InlineMath>. Then <InlineMath>{'f'}</InlineMath> is said to be a{' '}
          <em>function</em> from <InlineMath>{'A'}</InlineMath> to <InlineMath>{'B'}</InlineMath>{' '}
          (or a <em>mapping</em> of <InlineMath>{'A'}</InlineMath> into{' '}
          <InlineMath>{'B'}</InlineMath>).
        </p>
        <p className="mt-2">
          The set <InlineMath>{'A'}</InlineMath> is called the <em>domain</em> of{' '}
          <InlineMath>{'f'}</InlineMath>, the elements <InlineMath>{'f(x)'}</InlineMath> are called
          the <em>values</em> of <InlineMath>{'f'}</InlineMath>, and the set of all values is called
          the <em>range</em> of <InlineMath>{'f'}</InlineMath>.
        </p>
      </Definition>

      <Definition title="2.2 Image and Inverse Image">
        <p>
          Let <InlineMath>{'A'}</InlineMath> and <InlineMath>{'B'}</InlineMath> be two sets and let{' '}
          <InlineMath>{'f'}</InlineMath> be a mapping of <InlineMath>{'A'}</InlineMath> into{' '}
          <InlineMath>{'B'}</InlineMath>. If <InlineMath>{'E \\subset A'}</InlineMath>,{' '}
          <InlineMath>{'f(E)'}</InlineMath> is defined to be the set of all elements{' '}
          <InlineMath>{'f(x)'}</InlineMath>, for <InlineMath>{'x \\in E'}</InlineMath>. We call{' '}
          <InlineMath>{'f(E)'}</InlineMath> the <em>image</em> of <InlineMath>{'E'}</InlineMath>{' '}
          under <InlineMath>{'f'}</InlineMath>.
        </p>
        <p className="mt-2">
          If <InlineMath>{'f(A) = B'}</InlineMath>, we say that <InlineMath>{'f'}</InlineMath> maps{' '}
          <InlineMath>{'A'}</InlineMath> <em>onto</em> <InlineMath>{'B'}</InlineMath>.
        </p>
        <p className="mt-2">
          If <InlineMath>{'E \\subset B'}</InlineMath>, <InlineMath>{'f^{-1}(E)'}</InlineMath>{' '}
          denotes the set of all <InlineMath>{'x \\in A'}</InlineMath> such that{' '}
          <InlineMath>{'f(x) \\in E'}</InlineMath>. We call{' '}
          <InlineMath>{'f^{-1}(E)'}</InlineMath> the <em>inverse image</em> of{' '}
          <InlineMath>{'E'}</InlineMath> under <InlineMath>{'f'}</InlineMath>.
        </p>
      </Definition>

      <p className="my-4">
        If, for each <InlineMath>{'y \\in B'}</InlineMath>, <InlineMath>{'f^{-1}(y)'}</InlineMath>{' '}
        consists of at most one element of <InlineMath>{'A'}</InlineMath>, then{' '}
        <InlineMath>{'f'}</InlineMath> is said to be a <em>1-1</em> (one-to-one) mapping of{' '}
        <InlineMath>{'A'}</InlineMath> into <InlineMath>{'B'}</InlineMath>. This may also be
        expressed as follows: <InlineMath>{'f'}</InlineMath> is a 1-1 mapping of{' '}
        <InlineMath>{'A'}</InlineMath> into <InlineMath>{'B'}</InlineMath> provided that{' '}
        <InlineMath>{'f(x_1) \\neq f(x_2)'}</InlineMath> whenever{' '}
        <InlineMath>{'x_1 \\neq x_2'}</InlineMath>, <InlineMath>{'x_1, x_2 \\in A'}</InlineMath>.
      </p>

      <Definition title="2.3 Equivalence of Sets (Cardinal Number)">
        <p>
          If there exists a 1-1 mapping of <InlineMath>{'A'}</InlineMath> <em>onto</em>{' '}
          <InlineMath>{'B'}</InlineMath>, we say that <InlineMath>{'A'}</InlineMath> and{' '}
          <InlineMath>{'B'}</InlineMath> can be put in <em>1-1 correspondence</em>, or that{' '}
          <InlineMath>{'A'}</InlineMath> and <InlineMath>{'B'}</InlineMath> have the same{' '}
          <em>cardinal number</em>, or briefly, that <InlineMath>{'A'}</InlineMath> and{' '}
          <InlineMath>{'B'}</InlineMath> are <em>equivalent</em>, and we write{' '}
          <InlineMath>{'A \\sim B'}</InlineMath>. This relation clearly has the following properties:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            It is reflexive: <InlineMath>{'A \\sim A'}</InlineMath>.
          </li>
          <li>
            It is symmetric: If <InlineMath>{'A \\sim B'}</InlineMath>, then{' '}
            <InlineMath>{'B \\sim A'}</InlineMath>.
          </li>
          <li>
            It is transitive: If <InlineMath>{'A \\sim B'}</InlineMath> and{' '}
            <InlineMath>{'B \\sim C'}</InlineMath>, then <InlineMath>{'A \\sim C'}</InlineMath>.
          </li>
        </ul>
        <p className="mt-2">
          Any relation with these three properties is called an <em>equivalence relation</em>.
        </p>
      </Definition>

      <h3 className="text-xl font-semibold mt-8 mb-4">Finite, Countable, and Uncountable Sets</h3>

      <Definition title="2.4 Finite, Countable, and Uncountable Sets">
        <p>
          For any positive integer <InlineMath>{'n'}</InlineMath>, let{' '}
          <InlineMath>{'J_n'}</InlineMath> be the set whose elements are the integers{' '}
          <InlineMath>{'1, 2, \\ldots, n'}</InlineMath>; let <InlineMath>{'J'}</InlineMath> be the
          set consisting of all positive integers. For any set <InlineMath>{'A'}</InlineMath>, we
          say:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            <InlineMath>{'A'}</InlineMath> is <em>finite</em> if{' '}
            <InlineMath>{'A \\sim J_n'}</InlineMath> for some <InlineMath>{'n'}</InlineMath> (the
            empty set is also considered to be finite).
          </li>
          <li>
            <InlineMath>{'A'}</InlineMath> is <em>infinite</em> if{' '}
            <InlineMath>{'A'}</InlineMath> is not finite.
          </li>
          <li>
            <InlineMath>{'A'}</InlineMath> is <em>countable</em> if{' '}
            <InlineMath>{'A \\sim J'}</InlineMath>.
          </li>
          <li>
            <InlineMath>{'A'}</InlineMath> is <em>uncountable</em> if{' '}
            <InlineMath>{'A'}</InlineMath> is neither finite nor countable.
          </li>
          <li>
            <InlineMath>{'A'}</InlineMath> is <em>at most countable</em> if{' '}
            <InlineMath>{'A'}</InlineMath> is finite or countable.
          </li>
        </ul>
        <p className="mt-2">Countable sets are sometimes called <em>enumerable</em>, or <em>denumerable</em>.</p>
      </Definition>

      <Example title="2.5 The Integers are Countable">
        <p>
          Let <InlineMath>{'A'}</InlineMath> be the set of all integers. Then{' '}
          <InlineMath>{'A'}</InlineMath> is countable. For, consider the following arrangement of
          the sets <InlineMath>{'A'}</InlineMath> and <InlineMath>{'J'}</InlineMath>:
        </p>
        <MathBlock>{'A: \\quad 0, 1, -1, 2, -2, 3, -3, \\ldots'}</MathBlock>
        <MathBlock>{'J: \\quad 1, 2, 3, 4, 5, 6, 7, \\ldots'}</MathBlock>
        <p className="mt-2">
          We can, in this example, even give an explicit formula for a function{' '}
          <InlineMath>{'f'}</InlineMath> from <InlineMath>{'J'}</InlineMath> to{' '}
          <InlineMath>{'A'}</InlineMath> which sets up a 1-1 correspondence:
        </p>
        <MathBlock>
          {'f(n) = \\begin{cases} \\frac{n}{2} & (n \\text{ even}), \\\\ -\\frac{n-1}{2} & (n \\text{ odd}). \\end{cases}'}
        </MathBlock>
      </Example>

      <p className="my-4">
        <strong>Remark 2.6:</strong> A finite set cannot be equivalent to one of its proper subsets.
        That this is, however, possible for infinite sets, is shown by Example 2.5, in which{' '}
        <InlineMath>{'J'}</InlineMath> is a proper subset of <InlineMath>{'A'}</InlineMath>.
      </p>

      <Definition title="2.7 Sequence">
        <p>
          By a <em>sequence</em>, we mean a function <InlineMath>{'f'}</InlineMath> defined on the
          set <InlineMath>{'J'}</InlineMath> of all positive integers. If{' '}
          <InlineMath>{'f(n) = x_n'}</InlineMath>, for <InlineMath>{'n \\in J'}</InlineMath>, it is
          customary to denote the sequence <InlineMath>{'f'}</InlineMath> by the symbol{' '}
          <InlineMath>{'\\{x_n\\}'}</InlineMath>, or sometimes by{' '}
          <InlineMath>{'x_1, x_2, x_3, \\ldots'}</InlineMath>. The values of{' '}
          <InlineMath>{'f'}</InlineMath>, that is, the elements <InlineMath>{'x_n'}</InlineMath>,
          are called the <em>terms</em> of the sequence.
        </p>
        <p className="mt-2">
          Since every countable set is the range of a 1-1 function defined on{' '}
          <InlineMath>{'J'}</InlineMath>, we may regard every countable set as the range of a
          sequence of distinct terms. Speaking more loosely, we may say that the elements of any
          countable set can be "arranged in a sequence."
        </p>
      </Definition>

      <h3 className="text-xl font-semibold mt-8 mb-4">Key Theorems on Countability</h3>

      <Theorem
        title="2.8 Every Infinite Subset of a Countable Set is Countable"
        proof={
          <>
            <p>
              Suppose <InlineMath>{'E \\subset A'}</InlineMath>, and <InlineMath>{'E'}</InlineMath>{' '}
              is infinite. Arrange the elements <InlineMath>{'x'}</InlineMath> of{' '}
              <InlineMath>{'A'}</InlineMath> in a sequence{' '}
              <InlineMath>{'\\{x_n\\}'}</InlineMath> of distinct elements. Construct a sequence{' '}
              <InlineMath>{'\\{n_k\\}'}</InlineMath> as follows:
            </p>
            <p className="mt-2">
              Let <InlineMath>{'n_1'}</InlineMath> be the smallest positive integer such that{' '}
              <InlineMath>{'x_{n_1} \\in E'}</InlineMath>. Having chosen{' '}
              <InlineMath>{'n_1, \\ldots, n_{k-1}'}</InlineMath> (
              <InlineMath>{'k = 2, 3, 4, \\ldots'}</InlineMath>), let{' '}
              <InlineMath>{'n_k'}</InlineMath> be the smallest integer greater than{' '}
              <InlineMath>{'n_{k-1}'}</InlineMath> such that{' '}
              <InlineMath>{'x_{n_k} \\in E'}</InlineMath>.
            </p>
            <p className="mt-2">
              Putting <InlineMath>{'f(k) = x_{n_k}'}</InlineMath> (
              <InlineMath>{'k = 1, 2, 3, \\ldots'}</InlineMath>), we obtain a 1-1 correspondence
              between <InlineMath>{'E'}</InlineMath> and <InlineMath>{'J'}</InlineMath>.
            </p>
            <p className="mt-2">
              The theorem shows that, roughly speaking, countable sets represent the "smallest"
              infinity: No uncountable set can be a subset of a countable set.
            </p>
          </>
        }
      >
        <p>
          Every infinite subset of a countable set <InlineMath>{'A'}</InlineMath> is countable.
        </p>
      </Theorem>

      <Theorem
        title="2.12 Countable Union of Countable Sets"
        proof={
          <>
            <p>
              Let every set <InlineMath>{'E_n'}</InlineMath> be arranged in a sequence{' '}
              <InlineMath>{'\\{x_{nk}\\}'}</InlineMath>, <InlineMath>{'k = 1, 2, 3, \\ldots'}</InlineMath>,
              and consider the infinite array:
            </p>
            <MathBlock>
              {'\\begin{array}{cccc} x_{11} & x_{12} & x_{13} & \\cdots \\\\ x_{21} & x_{22} & x_{23} & \\cdots \\\\ x_{31} & x_{32} & x_{33} & \\cdots \\\\ \\vdots & \\vdots & \\vdots & \\ddots \\end{array}'}
            </MathBlock>
            <p className="mt-2">
              in which the elements of <InlineMath>{'E_n'}</InlineMath> form the{' '}
              <InlineMath>{'n'}</InlineMath>th row. The array contains all elements of{' '}
              <InlineMath>{'S'}</InlineMath>. As indicated by the arrows, these elements can be
              arranged in a sequence:
            </p>
            <MathBlock>
              {'x_{11}; x_{21}, x_{12}; x_{31}, x_{22}, x_{13}; x_{41}, x_{32}, x_{23}, x_{14}; \\ldots'}
            </MathBlock>
            <p className="mt-2">
              If any two of the sets <InlineMath>{'E_n'}</InlineMath> have elements in common, these
              will appear more than once in the sequence. Hence there is a subset{' '}
              <InlineMath>{'T'}</InlineMath> of the set of all positive integers such that{' '}
              <InlineMath>{'S \\sim T'}</InlineMath>, which shows that{' '}
              <InlineMath>{'S'}</InlineMath> is at most countable (Theorem 2.8). Since{' '}
              <InlineMath>{'E_1 \\subset S'}</InlineMath>, and{' '}
              <InlineMath>{'E_1'}</InlineMath> is infinite, <InlineMath>{'S'}</InlineMath> is infinite,
              and thus countable.
            </p>
          </>
        }
      >
        <p>
          Let <InlineMath>{'\\{E_n\\}'}</InlineMath>, <InlineMath>{'n = 1, 2, 3, \\ldots'}</InlineMath>,
          be a sequence of countable sets, and put
        </p>
        <MathBlock>{'S = \\bigcup_{n=1}^{\\infty} E_n.'}</MathBlock>
        <p>
          Then <InlineMath>{'S'}</InlineMath> is countable.
        </p>
      </Theorem>

      <p className="my-4">
        <strong>Corollary:</strong> Suppose <InlineMath>{'A'}</InlineMath> is at most countable,
        and, for every <InlineMath>{'\\alpha \\in A'}</InlineMath>,{' '}
        <InlineMath>{'B_\\alpha'}</InlineMath> is at most countable. Put
      </p>
      <MathBlock>{'T = \\bigcup_{\\alpha \\in A} B_\\alpha.'}</MathBlock>
      <p className="my-4">
        Then <InlineMath>{'T'}</InlineMath> is at most countable.
      </p>

      <Theorem
        title="2.13 Countability of n-tuples"
        proof={
          <>
            <p>
              That <InlineMath>{'B_1'}</InlineMath> is countable is evident, since{' '}
              <InlineMath>{'B_1 = A'}</InlineMath>. Suppose{' '}
              <InlineMath>{'B_{n-1}'}</InlineMath> is countable (
              <InlineMath>{'n = 2, 3, 4, \\ldots'}</InlineMath>). The elements of{' '}
              <InlineMath>{'B_n'}</InlineMath> are of the form
            </p>
            <MathBlock>{'(b, a) \\quad (b \\in B_{n-1}, a \\in A).'}</MathBlock>
            <p className="mt-2">
              For every fixed <InlineMath>{'b'}</InlineMath>, the set of pairs{' '}
              <InlineMath>{'(b, a)'}</InlineMath> is equivalent to{' '}
              <InlineMath>{'A'}</InlineMath>, and hence countable. Thus{' '}
              <InlineMath>{'B_n'}</InlineMath> is the union of a countable set of countable sets.
              By Theorem 2.12, <InlineMath>{'B_n'}</InlineMath> is countable.
            </p>
            <p className="mt-2">The theorem follows by induction.</p>
          </>
        }
      >
        <p>
          Let <InlineMath>{'A'}</InlineMath> be a countable set, and let{' '}
          <InlineMath>{'B_n'}</InlineMath> be the set of all <InlineMath>{'n'}</InlineMath>-tuples{' '}
          <InlineMath>{'(a_1, \\ldots, a_n)'}</InlineMath>, where{' '}
          <InlineMath>{'a_k \\in A'}</InlineMath> (<InlineMath>{'k = 1, \\ldots, n'}</InlineMath>),
          and the elements <InlineMath>{'a_1, \\ldots, a_n'}</InlineMath> need not be distinct. Then{' '}
          <InlineMath>{'B_n'}</InlineMath> is countable.
        </p>
      </Theorem>

      <p className="my-4">
        <strong>Corollary:</strong> The set of all rational numbers is countable.
      </p>
      <p className="my-4">
        <em>Proof:</em> We apply Theorem 2.13, with <InlineMath>{'n = 2'}</InlineMath>, noting that
        every rational <InlineMath>{'r'}</InlineMath> is of the form{' '}
        <InlineMath>{'b/a'}</InlineMath>, where <InlineMath>{'a'}</InlineMath> and{' '}
        <InlineMath>{'b'}</InlineMath> are integers. The set of pairs{' '}
        <InlineMath>{'(a, b)'}</InlineMath>, and therefore the set of fractions{' '}
        <InlineMath>{'b/a'}</InlineMath>, is countable.
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-4">Cantor's Diagonal Argument</h3>

      <p className="my-4">
        In fact, even the set of all algebraic numbers is countable (see Exercise 2). That not all
        infinite sets are, however, countable, is shown by the next theorem.
      </p>

      <Theorem
        title="2.14 Uncountability via Cantor's Diagonal Argument"
        proof={
          <>
            <p>
              The elements of <InlineMath>{'A'}</InlineMath> are sequences like{' '}
              <InlineMath>{'1, 0, 0, 1, 0, 1, 1, \\ldots'}</InlineMath>.
            </p>
            <p className="mt-2">
              Let <InlineMath>{'E'}</InlineMath> be a countable subset of{' '}
              <InlineMath>{'A'}</InlineMath>, and let <InlineMath>{'E'}</InlineMath> consist of the
              sequences <InlineMath>{'s_1, s_2, s_3, \\ldots'}</InlineMath>. We construct a sequence{' '}
              <InlineMath>{'s'}</InlineMath> as follows. If the <InlineMath>{'n'}</InlineMath>th
              digit in <InlineMath>{'s_n'}</InlineMath> is 1, we let the{' '}
              <InlineMath>{'n'}</InlineMath>th digit of <InlineMath>{'s'}</InlineMath> be 0, and vice
              versa. Then the sequence <InlineMath>{'s'}</InlineMath> differs from every member of{' '}
              <InlineMath>{'E'}</InlineMath> in at least one place; hence{' '}
              <InlineMath>{'s \\notin E'}</InlineMath>. But clearly{' '}
              <InlineMath>{'s \\in A'}</InlineMath>, so that <InlineMath>{'E'}</InlineMath> is a
              proper subset of <InlineMath>{'A'}</InlineMath>.
            </p>
            <p className="mt-2">
              We have shown that every countable subset of <InlineMath>{'A'}</InlineMath> is a
              proper subset of <InlineMath>{'A'}</InlineMath>. It follows that{' '}
              <InlineMath>{'A'}</InlineMath> is uncountable (for otherwise{' '}
              <InlineMath>{'A'}</InlineMath> would be a proper subset of itself, which is absurd).
            </p>
          </>
        }
      >
        <p>
          Let <InlineMath>{'A'}</InlineMath> be the set of all sequences whose elements are the
          digits 0 and 1. This set <InlineMath>{'A'}</InlineMath> is uncountable.
        </p>
      </Theorem>

      <Callout type="warning">
        <p>
          <strong>The Diagonal Argument:</strong> The idea of the above proof was first used by
          Cantor, and is called Cantor's <em>diagonal process</em>; for, if the sequences{' '}
          <InlineMath>{'s_1, s_2, s_3, \\ldots'}</InlineMath> are placed in an array like (16), it
          is the elements on the diagonal which are involved in the construction of the new sequence.
        </p>
        <p className="mt-2">
          Readers who are familiar with the binary representation of the real numbers (base 2
          instead of 10) will notice that Theorem 2.14 implies that the set of all real numbers is
          uncountable. We shall give a second proof of this fact in Theorem 2.43.
        </p>
      </Callout>

      <Example title="The Real Numbers are Uncountable">
        <p>
          Using base 2 representation, every real number in <InlineMath>{'[0, 1]'}</InlineMath> can
          be written as a sequence of 0s and 1s. By Theorem 2.14, the set of such sequences is
          uncountable. Therefore, <InlineMath>{'[0, 1]'}</InlineMath> is uncountable, and hence{' '}
          <InlineMath>{'\\mathbb{R}'}</InlineMath> is uncountable.
        </p>
        <p className="mt-2">
          This is one of the most profound results in mathematics: while the rationals are "dense"
          in the reals (between any two reals there is a rational), the rationals form only a
          "tiny" countable subset of the uncountable reals.
        </p>
      </Example>

      <h3 className="text-xl font-semibold mt-8 mb-4">Summary</h3>

      <p className="my-4">
        The key results of this section establish a hierarchy of infinite sets:
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>
          Countable sets (<InlineMath>{'\\mathbb{N}'}</InlineMath>,{' '}
          <InlineMath>{'\\mathbb{Z}'}</InlineMath>, <InlineMath>{'\\mathbb{Q}'}</InlineMath>) are the
          "smallest" infinite sets
        </li>
        <li>Countable unions of countable sets are countable</li>
        <li>
          The real numbers <InlineMath>{'\\mathbb{R}'}</InlineMath> are uncountable (Cantor's
          diagonal argument)
        </li>
        <li>No uncountable set can be a subset of a countable set</li>
      </ul>
    </LessonLayout>
  );
}
