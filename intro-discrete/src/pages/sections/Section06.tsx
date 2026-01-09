import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section06() {
  return (
    <LessonLayout sectionId={6}>
      {/* Introduction */}
      <p>
        The notion of a set is one of the most fundamental in mathematics. In this chapter we
        develop the basic properties of sets and use these to define and study functions and
        relations. Sets provide the foundation for essentially all of modern mathematics.
      </p>

      <h2>Basic Definitions</h2>

      <Definition title="Set" className="my-6">
        <p>
          A <strong>set</strong> is a well-defined collection of distinct objects. The objects in
          the set are called <strong>elements</strong> or <strong>members</strong> of the set.
        </p>
        <p className="mt-2">
          If <InlineMath>x</InlineMath> is an element of a set <InlineMath>A</InlineMath>, we write{' '}
          <InlineMath>x \in A</InlineMath>. If <InlineMath>x</InlineMath> is not an element of{' '}
          <InlineMath>A</InlineMath>, we write <InlineMath>x \notin A</InlineMath>.
        </p>
      </Definition>

      <p>
        Sets can be specified in two main ways:
      </p>
      <ul className="list-disc list-inside space-y-2 my-4">
        <li>
          <strong>Roster notation:</strong> List all elements explicitly, e.g.,{' '}
          <InlineMath>{`A = \\{1, 2, 3, 4\\}`}</InlineMath>
        </li>
        <li>
          <strong>Set-builder notation:</strong> Describe elements by a property, e.g.,{' '}
          <InlineMath>{`A = \\{x \\in \\mathbb{Z} : 1 \\leq x \\leq 4\\}`}</InlineMath>
        </li>
      </ul>

      <Example title="Common Number Sets" className="my-6">
        <ul className="space-y-2">
          <li>
            <InlineMath>\mathbb{'{N}'} = \{'{1, 2, 3, \\ldots}'}\</InlineMath> — the natural numbers
          </li>
          <li>
            <InlineMath>\mathbb{'{Z}'} = \{'{\\ldots, -2, -1, 0, 1, 2, \\ldots}'}\</InlineMath> — the integers
          </li>
          <li>
            <InlineMath>\mathbb{'{Q}'}</InlineMath> — the rational numbers (fractions <InlineMath>p/q</InlineMath>)
          </li>
          <li>
            <InlineMath>\mathbb{'{R}'}</InlineMath> — the real numbers
          </li>
          <li>
            <InlineMath>\mathbb{'{C}'}</InlineMath> — the complex numbers
          </li>
        </ul>
      </Example>

      <Definition title="Empty Set" className="my-6">
        <p>
          The <strong>empty set</strong>, denoted <InlineMath>\emptyset</InlineMath> or{' '}
          <InlineMath>\{'{}'}\</InlineMath>, is the set containing no elements. For any object{' '}
          <InlineMath>x</InlineMath>, we have <InlineMath>x \notin \emptyset</InlineMath>.
        </p>
      </Definition>

      <h2>Subsets and Equality</h2>

      <Definition title="Subset" className="my-6">
        <p>
          A set <InlineMath>A</InlineMath> is a <strong>subset</strong> of a set{' '}
          <InlineMath>B</InlineMath>, written <InlineMath>A \subseteq B</InlineMath>, if every
          element of <InlineMath>A</InlineMath> is also an element of <InlineMath>B</InlineMath>:
        </p>
        <MathBlock>{`A \\subseteq B \\iff \\forall x (x \\in A \\Rightarrow x \\in B)`}</MathBlock>
        <p className="mt-2">
          If <InlineMath>A \subseteq B</InlineMath> but <InlineMath>A \neq B</InlineMath>, we say{' '}
          <InlineMath>A</InlineMath> is a <strong>proper subset</strong> of <InlineMath>B</InlineMath>{' '}
          and write <InlineMath>A \subsetneq B</InlineMath>.
        </p>
      </Definition>

      <Theorem title="Set Equality" className="my-6">
        <p>
          Two sets <InlineMath>A</InlineMath> and <InlineMath>B</InlineMath> are equal if and only
          if they have the same elements:
        </p>
        <MathBlock>{`A = B \\iff (A \\subseteq B \\text{ and } B \\subseteq A)`}</MathBlock>
      </Theorem>

      <Example title="Subset Examples" className="my-6">
        <ul className="space-y-2">
          <li>
            <InlineMath>\{'{1, 2}'}\subseteq \{'{1, 2, 3}'}\</InlineMath>
          </li>
          <li>
            <InlineMath>\mathbb{'{N}'} \subseteq \mathbb{'{Z}'} \subseteq \mathbb{'{Q}'} \subseteq \mathbb{'{R}'} \subseteq \mathbb{'{C}'}</InlineMath>
          </li>
          <li>
            <InlineMath>\emptyset \subseteq A</InlineMath> for every set <InlineMath>A</InlineMath>
          </li>
          <li>
            <InlineMath>A \subseteq A</InlineMath> for every set <InlineMath>A</InlineMath> (reflexivity)
          </li>
        </ul>
      </Example>

      <h2>Set Operations</h2>

      <Definition title="Union" className="my-6">
        <p>
          The <strong>union</strong> of sets <InlineMath>A</InlineMath> and <InlineMath>B</InlineMath>{' '}
          is the set of all elements that belong to <InlineMath>A</InlineMath> or{' '}
          <InlineMath>B</InlineMath> (or both):
        </p>
        <MathBlock>{`A \\cup B = \\{x : x \\in A \\text{ or } x \\in B\\}`}</MathBlock>
      </Definition>

      <Definition title="Intersection" className="my-6">
        <p>
          The <strong>intersection</strong> of sets <InlineMath>A</InlineMath> and{' '}
          <InlineMath>B</InlineMath> is the set of all elements that belong to both{' '}
          <InlineMath>A</InlineMath> and <InlineMath>B</InlineMath>:
        </p>
        <MathBlock>{`A \\cap B = \\{x : x \\in A \\text{ and } x \\in B\\}`}</MathBlock>
        <p className="mt-2">
          Sets <InlineMath>A</InlineMath> and <InlineMath>B</InlineMath> are called{' '}
          <strong>disjoint</strong> if <InlineMath>A \cap B = \emptyset</InlineMath>.
        </p>
      </Definition>

      <Definition title="Set Difference" className="my-6">
        <p>
          The <strong>difference</strong> of sets <InlineMath>A</InlineMath> and{' '}
          <InlineMath>B</InlineMath> is the set of elements in <InlineMath>A</InlineMath> that are
          not in <InlineMath>B</InlineMath>:
        </p>
        <MathBlock>{`A \\setminus B = \\{x : x \\in A \\text{ and } x \\notin B\\}`}</MathBlock>
        <p className="mt-2">
          This is also written as <InlineMath>A - B</InlineMath>.
        </p>
      </Definition>

      <Definition title="Complement" className="my-6">
        <p>
          If <InlineMath>A</InlineMath> is a subset of a universal set <InlineMath>U</InlineMath>,
          the <strong>complement</strong> of <InlineMath>A</InlineMath> is:
        </p>
        <MathBlock>{`A^c = U \\setminus A = \\{x \\in U : x \\notin A\\}`}</MathBlock>
        <p className="mt-2">
          The complement is also denoted <InlineMath>\bar{'{A}'}</InlineMath> or{' '}
          <InlineMath>A'</InlineMath>.
        </p>
      </Definition>

      <Example title="Set Operation Examples" className="my-6">
        <p>
          Let <InlineMath>A = \{'{1, 2, 3, 4}'}\</InlineMath> and{' '}
          <InlineMath>B = \{'{3, 4, 5, 6}'}\</InlineMath>.
        </p>
        <ul className="list-disc list-inside space-y-2 mt-3">
          <li>
            <InlineMath>A \cup B = \{'{1, 2, 3, 4, 5, 6}'}\</InlineMath>
          </li>
          <li>
            <InlineMath>A \cap B = \{'{3, 4}'}\</InlineMath>
          </li>
          <li>
            <InlineMath>A \setminus B = \{'{1, 2}'}\</InlineMath>
          </li>
          <li>
            <InlineMath>B \setminus A = \{'{5, 6}'}\</InlineMath>
          </li>
        </ul>
      </Example>

      <h2>Laws of Set Algebra</h2>

      <Theorem title="Commutative Laws" className="my-6">
        <p>For all sets <InlineMath>A</InlineMath> and <InlineMath>B</InlineMath>:</p>
        <MathBlock>{`A \\cup B = B \\cup A \\qquad A \\cap B = B \\cap A`}</MathBlock>
      </Theorem>

      <Theorem title="Associative Laws" className="my-6">
        <p>For all sets <InlineMath>A</InlineMath>, <InlineMath>B</InlineMath>, and <InlineMath>C</InlineMath>:</p>
        <MathBlock>{`(A \\cup B) \\cup C = A \\cup (B \\cup C)`}</MathBlock>
        <MathBlock>{`(A \\cap B) \\cap C = A \\cap (B \\cap C)`}</MathBlock>
      </Theorem>

      <Theorem title="Distributive Laws" className="my-6">
        <p>For all sets <InlineMath>A</InlineMath>, <InlineMath>B</InlineMath>, and <InlineMath>C</InlineMath>:</p>
        <MathBlock>{`A \\cap (B \\cup C) = (A \\cap B) \\cup (A \\cap C)`}</MathBlock>
        <MathBlock>{`A \\cup (B \\cap C) = (A \\cup B) \\cap (A \\cup C)`}</MathBlock>
      </Theorem>

      <Theorem
        title="De Morgan's Laws"
        className="my-6"
        proof={
          <>
            <p>
              We prove <InlineMath>(A \cup B)^c = A^c \cap B^c</InlineMath> by showing each side is
              a subset of the other.
            </p>
            <p className="mt-2">
              <strong>(⊆)</strong> Let <InlineMath>x \in (A \cup B)^c</InlineMath>. Then{' '}
              <InlineMath>x \notin A \cup B</InlineMath>, so <InlineMath>x \notin A</InlineMath> and{' '}
              <InlineMath>x \notin B</InlineMath>. Thus <InlineMath>x \in A^c</InlineMath> and{' '}
              <InlineMath>x \in B^c</InlineMath>, so <InlineMath>x \in A^c \cap B^c</InlineMath>.
            </p>
            <p className="mt-2">
              <strong>(⊇)</strong> Let <InlineMath>x \in A^c \cap B^c</InlineMath>. Then{' '}
              <InlineMath>x \notin A</InlineMath> and <InlineMath>x \notin B</InlineMath>, so{' '}
              <InlineMath>x \notin A \cup B</InlineMath>. Thus <InlineMath>x \in (A \cup B)^c</InlineMath>.
            </p>
            <p className="mt-2">
              The second law is proved similarly.
            </p>
          </>
        }
      >
        <p>For any sets <InlineMath>A</InlineMath> and <InlineMath>B</InlineMath>:</p>
        <MathBlock>{`(A \\cup B)^c = A^c \\cap B^c`}</MathBlock>
        <MathBlock>{`(A \\cap B)^c = A^c \\cup B^c`}</MathBlock>
      </Theorem>

      <Example title="Verifying De Morgan's Law" className="my-6">
        <p>
          Let <InlineMath>U = \{'{1, 2, 3, 4, 5}'}\</InlineMath>,{' '}
          <InlineMath>A = \{'{1, 2}'}\</InlineMath>, <InlineMath>B = \{'{2, 3}'}\</InlineMath>.
        </p>
        <p className="mt-3">
          <strong>Direct calculation:</strong>
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li><InlineMath>A \cup B = \{'{1, 2, 3}'}\</InlineMath></li>
          <li><InlineMath>(A \cup B)^c = \{'{4, 5}'}\</InlineMath></li>
        </ul>
        <p className="mt-3">
          <strong>Using De Morgan:</strong>
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li><InlineMath>A^c = \{'{3, 4, 5}'}\</InlineMath></li>
          <li><InlineMath>B^c = \{'{1, 4, 5}'}\</InlineMath></li>
          <li><InlineMath>A^c \cap B^c = \{'{4, 5}'}\</InlineMath> ✓</li>
        </ul>
      </Example>

      <h2>Power Sets and Cardinality</h2>

      <Definition title="Power Set" className="my-6">
        <p>
          The <strong>power set</strong> of a set <InlineMath>A</InlineMath>, denoted{' '}
          <InlineMath>\mathcal{'{P}'}(A)</InlineMath> or <InlineMath>2^A</InlineMath>, is the set
          of all subsets of <InlineMath>A</InlineMath>:
        </p>
        <MathBlock>{`\\mathcal{P}(A) = \\{B : B \\subseteq A\\}`}</MathBlock>
      </Definition>

      <Example title="Power Set Example" className="my-6">
        <p>
          If <InlineMath>A = \{'{1, 2}'}\</InlineMath>, then:
        </p>
        <MathBlock>{`\\mathcal{P}(A) = \\{\\emptyset, \\{1\\}, \\{2\\}, \\{1, 2\\}\\}`}</MathBlock>
        <p className="mt-2">
          Note that <InlineMath>\emptyset</InlineMath> and <InlineMath>A</InlineMath> itself are
          always elements of <InlineMath>\mathcal{'{P}'}(A)</InlineMath>.
        </p>
      </Example>

      <Definition title="Cardinality" className="my-6">
        <p>
          The <strong>cardinality</strong> of a finite set <InlineMath>A</InlineMath>, denoted{' '}
          <InlineMath>|A|</InlineMath>, is the number of elements in <InlineMath>A</InlineMath>.
        </p>
      </Definition>

      <Theorem
        title="Cardinality of Power Set"
        className="my-6"
        proof={
          <>
            <p>
              We prove this by induction on <InlineMath>n = |A|</InlineMath>.
            </p>
            <p className="mt-2">
              <strong>Base case:</strong> If <InlineMath>|A| = 0</InlineMath>, then{' '}
              <InlineMath>A = \emptyset</InlineMath> and <InlineMath>\mathcal{'{P}'}(\emptyset) = \{'{\\emptyset}'}\</InlineMath>,
              which has <InlineMath>2^0 = 1</InlineMath> element.
            </p>
            <p className="mt-2">
              <strong>Inductive step:</strong> Assume the result holds for sets of size{' '}
              <InlineMath>n</InlineMath>. Let <InlineMath>|A| = n + 1</InlineMath> and pick any{' '}
              <InlineMath>a \in A</InlineMath>. Let <InlineMath>A' = A \setminus \{'{a}'}\</InlineMath>.
            </p>
            <p className="mt-2">
              Every subset <InlineMath>B \subseteq A</InlineMath> either contains{' '}
              <InlineMath>a</InlineMath> or doesn't. Those not containing <InlineMath>a</InlineMath>{' '}
              are exactly the subsets of <InlineMath>A'</InlineMath>, of which there are{' '}
              <InlineMath>2^n</InlineMath> by hypothesis.
            </p>
            <p className="mt-2">
              Those containing <InlineMath>a</InlineMath> are in bijection with subsets of{' '}
              <InlineMath>A'</InlineMath> (add <InlineMath>a</InlineMath> to each), also{' '}
              <InlineMath>2^n</InlineMath>.
            </p>
            <p className="mt-2">
              Total: <InlineMath>2^n + 2^n = 2^{'{n+1}'}</InlineMath>.
            </p>
          </>
        }
      >
        <p>
          If <InlineMath>A</InlineMath> is a finite set with <InlineMath>|A| = n</InlineMath>, then:
        </p>
        <MathBlock>{`|\\mathcal{P}(A)| = 2^n`}</MathBlock>
      </Theorem>

      <h2>Cartesian Products</h2>

      <Definition title="Ordered Pair" className="my-6">
        <p>
          An <strong>ordered pair</strong> <InlineMath>(a, b)</InlineMath> consists of two
          elements in a specific order. Two ordered pairs are equal if and only if their
          corresponding components are equal:
        </p>
        <MathBlock>{`(a, b) = (c, d) \\iff a = c \\text{ and } b = d`}</MathBlock>
      </Definition>

      <Definition title="Cartesian Product" className="my-6">
        <p>
          The <strong>Cartesian product</strong> of sets <InlineMath>A</InlineMath> and{' '}
          <InlineMath>B</InlineMath> is the set of all ordered pairs:
        </p>
        <MathBlock>{`A \\times B = \\{(a, b) : a \\in A \\text{ and } b \\in B\\}`}</MathBlock>
      </Definition>

      <Example title="Cartesian Product Example" className="my-6">
        <p>
          Let <InlineMath>A = \{'{1, 2}'}\</InlineMath> and <InlineMath>B = \{'{a, b, c}'}\</InlineMath>.
        </p>
        <MathBlock>{`A \\times B = \\{(1, a), (1, b), (1, c), (2, a), (2, b), (2, c)\\}`}</MathBlock>
        <p className="mt-2">
          Note that <InlineMath>|A \times B| = |A| \cdot |B| = 2 \cdot 3 = 6</InlineMath>.
        </p>
      </Example>

      <Theorem title="Cardinality of Cartesian Product" className="my-6">
        <p>
          For finite sets <InlineMath>A</InlineMath> and <InlineMath>B</InlineMath>:
        </p>
        <MathBlock>{`|A \\times B| = |A| \\cdot |B|`}</MathBlock>
      </Theorem>

      <h2>Indexed Families of Sets</h2>

      <Definition title="Indexed Family" className="my-6">
        <p>
          An <strong>indexed family of sets</strong> is a collection of sets{' '}
          <InlineMath>\{'{A_i}'}\_{'{i \\in I}'}</InlineMath> where <InlineMath>I</InlineMath> is
          called the <strong>index set</strong>. The union and intersection are defined as:
        </p>
        <MathBlock>{`\\bigcup_{i \\in I} A_i = \\{x : x \\in A_i \\text{ for some } i \\in I\\}`}</MathBlock>
        <MathBlock>{`\\bigcap_{i \\in I} A_i = \\{x : x \\in A_i \\text{ for all } i \\in I\\}`}</MathBlock>
      </Definition>

      <Example title="Indexed Union and Intersection" className="my-6">
        <p>
          For each <InlineMath>n \in \mathbb{'{N}'}</InlineMath>, let{' '}
          <InlineMath>A_n = \{'{1, 2, \\ldots, n}'}\</InlineMath>.
        </p>
        <ul className="list-disc list-inside space-y-2 mt-3">
          <li>
            <InlineMath>\bigcup_{'{n \\in \\mathbb{N}}'} A_n = \mathbb{'{N}'}</InlineMath> (every
            natural number appears in some <InlineMath>A_n</InlineMath>)
          </li>
          <li>
            <InlineMath>\bigcap_{'{n \\in \\mathbb{N}}'} A_n = \{'{1}'}\</InlineMath> (only 1 is in
            every <InlineMath>A_n</InlineMath>)
          </li>
        </ul>
      </Example>

      <h2>Key Ideas</h2>

      <div className="bg-gradient-to-br from-primary-500/10 to-dark-800/50 rounded-xl p-6 my-6 border border-primary-500/20">
        <ul className="space-y-3 text-dark-200">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span>
              A <strong>set</strong> is a well-defined collection of distinct objects.{' '}
              <InlineMath>x \in A</InlineMath> means <InlineMath>x</InlineMath> is an element of{' '}
              <InlineMath>A</InlineMath>.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span>
              <InlineMath>A \subseteq B</InlineMath> means every element of <InlineMath>A</InlineMath>{' '}
              is in <InlineMath>B</InlineMath>. Sets are equal iff they contain the same elements.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span>
              <strong>Operations:</strong> <InlineMath>A \cup B</InlineMath> (union),{' '}
              <InlineMath>A \cap B</InlineMath> (intersection), <InlineMath>A \setminus B</InlineMath>{' '}
              (difference), <InlineMath>A^c</InlineMath> (complement).
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span>
              <strong>De Morgan's Laws:</strong> <InlineMath>(A \cup B)^c = A^c \cap B^c</InlineMath>{' '}
              and <InlineMath>(A \cap B)^c = A^c \cup B^c</InlineMath>.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">5.</span>
            <span>
              <strong>Power set:</strong> <InlineMath>\mathcal{'{P}'}(A)</InlineMath> is the set of
              all subsets. If <InlineMath>|A| = n</InlineMath>, then{' '}
              <InlineMath>|\mathcal{'{P}'}(A)| = 2^n</InlineMath>.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">6.</span>
            <span>
              <strong>Cartesian product:</strong>{' '}
              <InlineMath>A \times B = \{'{(a, b) : a \\in A, b \\in B}'}\</InlineMath>. If both are
              finite, <InlineMath>|A \times B| = |A| \cdot |B|</InlineMath>.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
