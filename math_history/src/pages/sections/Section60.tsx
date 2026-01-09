import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { Callout } from '@/components/common/Callout';
import { MathBlock, InlineMath } from '@/components/common/MathBlock';
import { SectionQuiz } from '@/components/quiz/SectionQuiz';
import { quizMap } from '@/data/quizzes';

export default function Section60() {
  return (
    <LessonLayout sectionId={60}>
      <h2>Permutations</h2>

      <p>
        Group theory, one of the most powerful organizing principles in
        mathematics, grew from a simple idea: the study of rearrangements.
        A <em>permutation</em> is a way of reordering a set of objects, and
        the collection of all permutations forms a mathematical structure
        with remarkable properties. From Lagrange's work on polynomial
        equations to the modern classification of finite groups, permutations
        have been central to algebra.
      </p>

      <Callout type="info">
        <strong>A Unifying Concept:</strong> Permutations appear everywhere:
        in solving polynomial equations, analyzing symmetries, cryptography,
        combinatorics, and even quantum mechanics. Understanding permutation
        groups was the first step toward abstract algebra.
      </Callout>

      <h3>What Is a Permutation?</h3>

      <Definition title="Permutation">
        <p>
          A <strong>permutation</strong> of a set <InlineMath>S</InlineMath>{' '}
          is a bijective function from <InlineMath>S</InlineMath> to itself—a
          rearrangement that uses each element exactly once.
        </p>
        <p className="mt-2">
          For a finite set of <InlineMath>n</InlineMath> elements, there are{' '}
          <InlineMath>n!</InlineMath> (n factorial) permutations.
        </p>
      </Definition>

      <Example title="Permutations of Three Elements">
        <p>
          The set <InlineMath>{`\\{1, 2, 3\\}`}</InlineMath> has{' '}
          <InlineMath>3! = 6</InlineMath> permutations:
        </p>
        <MathBlock>
          {`(1,2,3), (1,3,2), (2,1,3), (2,3,1), (3,1,2), (3,2,1)`}
        </MathBlock>
        <p className="mt-2 text-dark-400">
          Each represents a different way to rearrange the three elements.
        </p>
      </Example>

      <h3>Notation</h3>

      <p>
        There are several ways to write permutations:
      </p>

      <Definition title="Two-Line Notation">
        <p>
          Write elements on top and their images below:
        </p>
        <MathBlock>
          {`\\sigma = \\begin{pmatrix} 1 & 2 & 3 \\\\ 2 & 3 & 1 \\end{pmatrix}`}
        </MathBlock>
        <p className="mt-2">
          This means <InlineMath>{`\\sigma(1) = 2`}</InlineMath>,{' '}
          <InlineMath>{`\\sigma(2) = 3`}</InlineMath>,{' '}
          <InlineMath>{`\\sigma(3) = 1`}</InlineMath>.
        </p>
      </Definition>

      <Definition title="Cycle Notation">
        <p>
          Write elements that cycle among themselves in parentheses:
        </p>
        <MathBlock>
          {`\\sigma = (1 \\, 2 \\, 3)`}
        </MathBlock>
        <p className="mt-2">
          This means <InlineMath>{`1 \\to 2 \\to 3 \\to 1`}</InlineMath>.
        </p>
      </Definition>

      <Example title="Cycle Notation Examples">
        <p>
          The permutation <InlineMath>(1 \, 2)</InlineMath> swaps 1 and 2,
          leaving 3 fixed. This is called a <strong>transposition</strong>.
        </p>
        <p className="mt-2">
          The permutation <InlineMath>(1 \, 3)(2 \, 4)</InlineMath> swaps 1
          with 3 and separately swaps 2 with 4.
        </p>
      </Example>

      <h3>Composing Permutations</h3>

      <p>
        We can combine permutations by applying one after another:
      </p>

      <Definition title="Composition of Permutations">
        <p>
          If <InlineMath>\sigma</InlineMath> and <InlineMath>\tau</InlineMath>{' '}
          are permutations, their <strong>composition</strong>{' '}
          <InlineMath>{`\\sigma \\circ \\tau`}</InlineMath> (often written{' '}
          <InlineMath>{`\\sigma\\tau`}</InlineMath>) is the permutation
          obtained by first applying <InlineMath>\tau</InlineMath>, then{' '}
          <InlineMath>\sigma</InlineMath>:
        </p>
        <MathBlock>
          {`(\\sigma\\tau)(x) = \\sigma(\\tau(x))`}
        </MathBlock>
      </Definition>

      <Example title="Composing Two Cycles">
        <p>
          Let <InlineMath>{`\\sigma = (1 \\, 2 \\, 3)`}</InlineMath> and{' '}
          <InlineMath>{`\\tau = (1 \\, 2)`}</InlineMath>. To find{' '}
          <InlineMath>{`\\sigma\\tau`}</InlineMath>:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><InlineMath>{`1 \\xrightarrow{\\tau} 2 \\xrightarrow{\\sigma} 3`}</InlineMath></li>
          <li><InlineMath>{`2 \\xrightarrow{\\tau} 1 \\xrightarrow{\\sigma} 2`}</InlineMath></li>
          <li><InlineMath>{`3 \\xrightarrow{\\tau} 3 \\xrightarrow{\\sigma} 1`}</InlineMath></li>
        </ul>
        <p className="mt-2">
          So <InlineMath>{`\\sigma\\tau = (1 \\, 3)`}</InlineMath>.
        </p>
      </Example>

      <Callout type="note">
        <strong>Non-Commutativity:</strong> Permutation composition is generally
        not commutative: <InlineMath>{`\\sigma\\tau \\neq \\tau\\sigma`}</InlineMath>.
        This non-commutativity is what makes group theory interesting and
        powerful.
      </Callout>

      <h3>The Symmetric Group</h3>

      <Definition title="Symmetric Group">
        <p>
          The <strong>symmetric group</strong> <InlineMath>S_n</InlineMath>{' '}
          is the set of all permutations of <InlineMath>n</InlineMath> elements,
          together with composition as the operation.
        </p>
        <p className="mt-2">
          <InlineMath>S_n</InlineMath> has <InlineMath>n!</InlineMath> elements
          and satisfies the group axioms.
        </p>
      </Definition>

      <Theorem title="Group Properties of S_n">
        <p>
          The symmetric group <InlineMath>S_n</InlineMath> satisfies:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>Closure:</strong> Composing permutations gives a permutation</li>
          <li><strong>Associativity:</strong> <InlineMath>{`(\\sigma\\tau)\\rho = \\sigma(\\tau\\rho)`}</InlineMath></li>
          <li><strong>Identity:</strong> The identity permutation <InlineMath>e</InlineMath> (leaving all elements fixed)</li>
          <li><strong>Inverses:</strong> Every permutation has an inverse that undoes it</li>
        </ul>
      </Theorem>

      <Example title="Sizes of Symmetric Groups">
        <p>
          The symmetric groups grow rapidly:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><InlineMath>|S_1| = 1</InlineMath></li>
          <li><InlineMath>|S_2| = 2</InlineMath></li>
          <li><InlineMath>|S_3| = 6</InlineMath></li>
          <li><InlineMath>|S_4| = 24</InlineMath></li>
          <li><InlineMath>|S_5| = 120</InlineMath></li>
          <li><InlineMath>|S_{10}| = 3,628,800</InlineMath></li>
        </ul>
      </Example>

      <h3>Transpositions and Parity</h3>

      <Definition title="Transposition">
        <p>
          A <strong>transposition</strong> is a permutation that swaps exactly
          two elements and fixes all others. In cycle notation:{' '}
          <InlineMath>(i \, j)</InlineMath>.
        </p>
      </Definition>

      <Theorem title="Transposition Decomposition">
        <p>
          Every permutation can be written as a product of transpositions.
        </p>
        <p className="mt-2 text-dark-400">
          The decomposition is not unique, but the <em>parity</em> (even or
          odd number of transpositions) is always the same.
        </p>
      </Theorem>

      <Definition title="Even and Odd Permutations">
        <p>
          A permutation is <strong>even</strong> if it can be written as a
          product of an even number of transpositions, and <strong>odd</strong>{' '}
          otherwise.
        </p>
        <p className="mt-2">
          The <strong>sign</strong> of a permutation is{' '}
          <InlineMath>{`\\text{sgn}(\\sigma) = +1`}</InlineMath> if even,{' '}
          <InlineMath>-1</InlineMath> if odd.
        </p>
      </Definition>

      <Example title="Parity of Cycles">
        <p>
          A <InlineMath>k</InlineMath>-cycle can be written as{' '}
          <InlineMath>k-1</InlineMath> transpositions:
        </p>
        <MathBlock>
          {`(1 \\, 2 \\, 3 \\, 4) = (1 \\, 4)(1 \\, 3)(1 \\, 2)`}
        </MathBlock>
        <p className="mt-2">
          So a <InlineMath>k</InlineMath>-cycle is even if <InlineMath>k</InlineMath>{' '}
          is odd, and odd if <InlineMath>k</InlineMath> is even.
        </p>
      </Example>

      <h3>The Alternating Group</h3>

      <Definition title="Alternating Group">
        <p>
          The <strong>alternating group</strong> <InlineMath>A_n</InlineMath>{' '}
          is the subgroup of <InlineMath>S_n</InlineMath> consisting of all
          even permutations.
        </p>
        <MathBlock>
          {`|A_n| = \\frac{n!}{2}`}
        </MathBlock>
      </Definition>

      <Callout type="info">
        <strong>Why It Matters:</strong> The alternating group{' '}
        <InlineMath>A_5</InlineMath> plays a crucial role in proving that
        quintic equations cannot be solved by radicals. Its structure (being
        "simple"—having no nontrivial normal subgroups) is the key obstruction.
      </Callout>

      <h3>Lagrange's Contribution</h3>

      <p>
        Joseph-Louis Lagrange pioneered the study of permutations in his
        analysis of polynomial equations:
      </p>

      <Example title="Lagrange's Resolvent">
        <p>
          Lagrange studied how the roots of a polynomial are permuted under
          various operations. He discovered that certain expressions in the
          roots remain unchanged under subgroups of permutations.
        </p>
        <p className="mt-2">
          This led to his famous theorem:
        </p>
      </Example>

      <Theorem title="Lagrange's Theorem">
        <p>
          If <InlineMath>H</InlineMath> is a subgroup of a finite group{' '}
          <InlineMath>G</InlineMath>, then the order of <InlineMath>H</InlineMath>{' '}
          divides the order of <InlineMath>G</InlineMath>:
        </p>
        <MathBlock>
          {`|H| \\text{ divides } |G|`}
        </MathBlock>
        <p className="mt-2 text-dark-400">
          This foundational theorem constrains what subgroups can exist and
          was crucial for later developments.
        </p>
      </Theorem>

      <h3>Cayley's Theorem</h3>

      <p>
        Arthur Cayley proved a remarkable result connecting abstract groups
        to permutations:
      </p>

      <Theorem title="Cayley's Theorem">
        <p>
          Every group is isomorphic to a subgroup of some symmetric group.
        </p>
        <p className="mt-2 text-dark-400">
          In other words, every abstract group can be represented as a group
          of permutations. Permutation groups are, in a sense, universal.
        </p>
      </Theorem>

      <Callout type="note">
        <strong>Historical Significance:</strong> The study of permutations
        evolved from a tool for analyzing equations into the foundation of
        group theory. From Lagrange through Cauchy, Abel, and Galois,
        permutations provided the concrete examples that guided the development
        of abstract algebra.
      </Callout>

      <SectionQuiz sectionId={60} questions={quizMap[60] || []} title="Check Your Understanding" />
    </LessonLayout>
  );
}
