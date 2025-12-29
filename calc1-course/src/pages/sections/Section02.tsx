import { LessonLayout } from '../../components/layout/LessonLayout';
import { Callout } from '../../components/common/Callout';
import { Math as MathInline, MathBlock } from '../../components/common/MathBlock';

export default function Section02() {
  return (
    <LessonLayout sectionId={2}>
      <h2 className="text-2xl font-semibold mb-4">Set Theory Basics</h2>

      <p className="text-dark-200 mb-6">
        In discussing any branch of mathematics—be it analysis, algebra, or geometry—it is helpful
        to use the notation and terminology of <strong>set theory</strong>. This subject, developed by
        Boole and Cantor in the latter part of the 19th century, has had a profound influence on
        the development of mathematics in the 20th century.
      </p>

      <Callout type="info">
        <p>
          Set theory has unified many seemingly disconnected ideas and has helped reduce many
          mathematical concepts to their logical foundations in an elegant and systematic way.
          The basic notions are few in number, making it possible to develop a working knowledge
          through informal discussion.
        </p>
      </Callout>

      {/* What is a Set? */}
      <h3 className="text-xl font-semibold mt-8 mb-4">What is a Set?</h3>

      <p className="text-dark-200 mb-4">
        In mathematics, the word <strong>"set"</strong> is used to represent a collection of objects
        viewed as a single entity. The collections called to mind by such nouns as "flock," "tribe,"
        "crowd," "team," and "electorate" are all examples of sets.
      </p>

      <Callout type="definition">
        <p className="font-semibold mb-2">Elements and Membership</p>
        <p>
          The individual objects in a collection are called <strong>elements</strong> or{' '}
          <strong>members</strong> of the set. They are said to <em>belong to</em> or be{' '}
          <em>contained in</em> the set. The set, in turn, is said to <em>contain</em> or be{' '}
          <em>composed of</em> its elements.
        </p>
      </Callout>

      {/* Notation */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Notation for Sets</h3>

      <p className="text-dark-200 mb-4">
        Sets are usually denoted by capital letters: <MathInline>{'A, B, C, \\ldots, X, Y, Z'}</MathInline>.
        Elements are designated by lower-case letters: <MathInline>{'a, b, c, \\ldots, x, y, z'}</MathInline>.
      </p>

      <p className="text-dark-200 mb-4">
        We use the special notation <MathInline>{'x \\in S'}</MathInline> to mean
        "<MathInline>{'x'}</MathInline> is an element of <MathInline>{'S'}</MathInline>" or
        "<MathInline>{'x'}</MathInline> belongs to <MathInline>{'S'}</MathInline>."
        If <MathInline>{'x'}</MathInline> does not belong to <MathInline>{'S'}</MathInline>, we
        write <MathInline>{'x \\notin S'}</MathInline>.
      </p>

      <Callout type="example">
        <p className="font-semibold mb-2">Roster Notation</p>
        <p className="mb-2">
          When convenient, we designate sets by displaying the elements in braces:
        </p>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>
            The set of positive even integers less than 10: <MathInline>{'\\{2, 4, 6, 8\\}'}</MathInline>
          </li>
          <li>
            The set of all positive even integers: <MathInline>{'\\{2, 4, 6, \\ldots\\}'}</MathInline>
          </li>
        </ul>
        <p className="mt-2 text-sm text-dark-400">
          The three dots are used only when the meaning of "and so on" is clear.
        </p>
      </Callout>

      {/* Set-Builder Notation */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Set-Builder Notation</h3>

      <p className="text-dark-200 mb-4">
        The notation <MathInline>{'\\{x \\mid x \\in S \\text{ and } x \\text{ satisfies } P\\}'}</MathInline> designates
        the set of all elements <MathInline>{'x'}</MathInline> in <MathInline>{'S'}</MathInline> which
        satisfy the property <MathInline>{'P'}</MathInline>.
      </p>

      <Callout type="example">
        <p className="font-semibold mb-2">Examples of Set-Builder Notation</p>
        <ul className="space-y-2 text-sm">
          <li>
            <MathInline>{'\\{x \\mid x > 0\\}'}</MathInline> — the set of all positive real numbers
          </li>
          <li>
            <MathInline>{'\\{x \\mid x \\text{ is a positive even integer}\\}'}</MathInline> — same as <MathInline>{'\\{2, 4, 6, \\ldots\\}'}</MathInline>
          </li>
        </ul>
        <p className="mt-2 text-dark-400">
          The letter <MathInline>{'x'}</MathInline> is a dummy variable:
          <MathInline>{'\\{x \\mid x > 0\\} = \\{y \\mid y > 0\\} = \\{t \\mid t > 0\\}'}</MathInline>
        </p>
      </Callout>

      {/* Set Equality */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Equality of Sets</h3>

      <Callout type="definition">
        <p className="font-semibold mb-2">Definition of Set Equality</p>
        <p>
          Two sets <MathInline>{'A'}</MathInline> and <MathInline>{'B'}</MathInline> are said to
          be <strong>equal</strong> (or identical) if they consist of exactly the same elements,
          in which case we write <MathInline>{'A = B'}</MathInline>. If one of the sets contains
          an element not in the other, we say the sets are <strong>unequal</strong> and write{' '}
          <MathInline>{'A \\neq B'}</MathInline>.
        </p>
      </Callout>

      <div className="space-y-4 mt-4">
        <div className="p-4 bg-dark-800 rounded-lg">
          <p className="font-semibold text-primary-400">Example 1</p>
          <p className="text-dark-300 text-sm mt-1">
            The sets <MathInline>{'\\{2, 4, 6, 8\\}'}</MathInline> and <MathInline>{'\\{2, 8, 6, 4\\}'}</MathInline> are
            equal since they both consist of the four integers 2, 4, 6, and 8.
            <span className="text-dark-400 block mt-1">
              The order in which elements appear is irrelevant.
            </span>
          </p>
        </div>
        <div className="p-4 bg-dark-800 rounded-lg">
          <p className="font-semibold text-primary-400">Example 2</p>
          <p className="text-dark-300 text-sm mt-1">
            The sets <MathInline>{'\\{2, 4, 6, 8\\}'}</MathInline> and <MathInline>{'\\{2, 2, 4, 4, 6, 8\\}'}</MathInline> are
            equal. Both contain only the elements 2, 4, 6, 8 and no others.
            <span className="text-dark-400 block mt-1">
              Repeated listings don't change the set.
            </span>
          </p>
        </div>
      </div>

      {/* The Empty Set */}
      <h3 className="text-xl font-semibold mt-8 mb-4">The Empty Set</h3>

      <p className="text-dark-200 mb-4">
        It is possible for a set to contain no elements whatsoever. This set is called the{' '}
        <strong>empty set</strong> or the <strong>void set</strong>, and is denoted by the
        symbol <MathInline>{'\\varnothing'}</MathInline>.
      </p>

      <Callout type="info">
        <p>
          Some people find it helpful to think of a set as analogous to a container (such as a bag
          or a box) containing certain objects, its elements. The empty set is then analogous to
          an empty container.
        </p>
      </Callout>

      <Callout type="warning">
        <p className="font-semibold mb-2">Important Distinction</p>
        <p>
          We must distinguish between an element <MathInline>{'x'}</MathInline> and the
          set <MathInline>{'\\{x\\}'}</MathInline> whose only element is <MathInline>{'x'}</MathInline>.
          In particular, <MathInline>{'\\varnothing \\neq \\{\\varnothing\\}'}</MathInline>:
        </p>
        <ul className="list-disc list-inside mt-2 text-sm">
          <li><MathInline>{'\\varnothing'}</MathInline> contains no elements</li>
          <li><MathInline>{'\\{\\varnothing\\}'}</MathInline> has one element, namely <MathInline>{'\\varnothing'}</MathInline></li>
        </ul>
      </Callout>

      {/* Subsets */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Subsets</h2>

      <p className="text-dark-200 mb-4">
        From a given set <MathInline>{'S'}</MathInline> we may form new sets, called{' '}
        <strong>subsets</strong> of <MathInline>{'S'}</MathInline>.
      </p>

      <Callout type="definition">
        <p className="font-semibold mb-2">Definition of a Subset</p>
        <p>
          A set <MathInline>{'A'}</MathInline> is said to be a <strong>subset</strong> of a
          set <MathInline>{'B'}</MathInline>, and we write <MathInline>{'A \\subseteq B'}</MathInline>,
          whenever every element of <MathInline>{'A'}</MathInline> also belongs to <MathInline>{'B'}</MathInline>.
        </p>
        <p className="mt-2">
          We also say that <MathInline>{'A'}</MathInline> is <em>contained in</em> <MathInline>{'B'}</MathInline> or
          that <MathInline>{'B'}</MathInline> <em>contains</em> <MathInline>{'A'}</MathInline>.
          The relation <MathInline>{'\\subseteq'}</MathInline> is referred to as <strong>set inclusion</strong>.
        </p>
      </Callout>

      <Callout type="theorem">
        <p className="font-semibold mb-2">Subset Equality Theorem</p>
        <MathBlock>
          {'A = B \\quad \\text{if and only if} \\quad A \\subseteq B \\text{ and } B \\subseteq A'}
        </MathBlock>
        <p className="mt-2 text-sm text-dark-400">
          If <MathInline>{'A \\subseteq B'}</MathInline> but <MathInline>{'A \\neq B'}</MathInline>,
          then <MathInline>{'A'}</MathInline> is a <strong>proper subset</strong> of <MathInline>{'B'}</MathInline>,
          written <MathInline>{'A \\subset B'}</MathInline>.
        </p>
      </Callout>

      <p className="text-dark-200 mt-4 mb-4">
        We will consider <MathInline>{'\\varnothing'}</MathInline> to be a subset of every set.
      </p>

      {/* Set Operations */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Set Operations</h2>

      {/* Union */}
      <h3 className="text-xl font-semibold mt-6 mb-4">Union</h3>

      <Callout type="definition">
        <p className="font-semibold mb-2">Definition of Union</p>
        <p>
          From two given sets <MathInline>{'A'}</MathInline> and <MathInline>{'B'}</MathInline>,
          we can form a new set called the <strong>union</strong> of <MathInline>{'A'}</MathInline> and <MathInline>{'B'}</MathInline>,
          denoted <MathInline>{'A \\cup B'}</MathInline> (read: "A union B").
        </p>
        <MathBlock>
          {'A \\cup B = \\{x \\mid x \\in A \\text{ or } x \\in B\\}'}
        </MathBlock>
        <p className="mt-2 text-sm text-dark-400">
          The union is the set of all elements which belong to at least one of the sets <MathInline>{'A'}</MathInline> or <MathInline>{'B'}</MathInline>.
        </p>
      </Callout>

      {/* Intersection */}
      <h3 className="text-xl font-semibold mt-6 mb-4">Intersection</h3>

      <Callout type="definition">
        <p className="font-semibold mb-2">Definition of Intersection</p>
        <p>
          The <strong>intersection</strong> of <MathInline>{'A'}</MathInline> and <MathInline>{'B'}</MathInline>,
          denoted <MathInline>{'A \\cap B'}</MathInline> (read: "A intersection B"), is the set of
          elements common to both <MathInline>{'A'}</MathInline> and <MathInline>{'B'}</MathInline>.
        </p>
        <MathBlock>
          {'A \\cap B = \\{x \\mid x \\in A \\text{ and } x \\in B\\}'}
        </MathBlock>
      </Callout>

      <Callout type="info">
        <p className="font-semibold mb-2">Disjoint Sets</p>
        <p>
          Two sets <MathInline>{'A'}</MathInline> and <MathInline>{'B'}</MathInline> are said to
          be <strong>disjoint</strong> if they have no elements in common, that is,
          if <MathInline>{'A \\cap B = \\varnothing'}</MathInline>.
        </p>
      </Callout>

      {/* Difference/Complement */}
      <h3 className="text-xl font-semibold mt-6 mb-4">Difference (Complement)</h3>

      <Callout type="definition">
        <p className="font-semibold mb-2">Definition of Set Difference</p>
        <p>
          If <MathInline>{'A'}</MathInline> and <MathInline>{'B'}</MathInline> are sets, the{' '}
          <strong>difference</strong> <MathInline>{'A - B'}</MathInline> (also called the{' '}
          <em>complement of <MathInline>{'B'}</MathInline> relative to <MathInline>{'A'}</MathInline></em>)
          is the set of all elements of <MathInline>{'A'}</MathInline> which are not in <MathInline>{'B'}</MathInline>.
        </p>
        <MathBlock>
          {'A - B = \\{x \\mid x \\in A \\text{ and } x \\notin B\\}'}
        </MathBlock>
      </Callout>

      {/* Properties of Set Operations */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Properties of Set Operations</h2>

      <p className="text-dark-200 mb-4">
        The operations of union and intersection have many formal similarities to ordinary
        addition and multiplication of real numbers.
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="p-4 bg-dark-800 rounded-lg">
          <p className="font-semibold text-primary-400 mb-2">Commutative Laws</p>
          <MathBlock>{'A \\cup B = B \\cup A'}</MathBlock>
          <MathBlock>{'A \\cap B = B \\cap A'}</MathBlock>
        </div>
        <div className="p-4 bg-dark-800 rounded-lg">
          <p className="font-semibold text-primary-400 mb-2">Associative Laws</p>
          <MathBlock>{'(A \\cup B) \\cup C = A \\cup (B \\cup C)'}</MathBlock>
          <MathBlock>{'(A \\cap B) \\cap C = A \\cap (B \\cap C)'}</MathBlock>
        </div>
      </div>

      <Callout type="theorem">
        <p className="font-semibold mb-2">Distributive Laws</p>
        <MathBlock>
          {'A \\cap (B \\cup C) = (A \\cap B) \\cup (A \\cap C)'}
        </MathBlock>
        <MathBlock>
          {'A \\cup (B \\cap C) = (A \\cup B) \\cap (A \\cup C)'}
        </MathBlock>
      </Callout>

      <div className="mt-6 p-4 bg-dark-800 rounded-lg">
        <p className="font-semibold text-primary-400 mb-2">Additional Properties</p>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-dark-300"><MathInline>{'A \\cup A = A'}</MathInline></p>
            <p className="text-dark-300"><MathInline>{'A \\cap A = A'}</MathInline></p>
            <p className="text-dark-300"><MathInline>{'A \\cup \\varnothing = A'}</MathInline></p>
            <p className="text-dark-300"><MathInline>{'A \\cap \\varnothing = \\varnothing'}</MathInline></p>
          </div>
          <div>
            <p className="text-dark-300"><MathInline>{'A \\subseteq A \\cup B'}</MathInline></p>
            <p className="text-dark-300"><MathInline>{'A \\cap B \\subseteq A'}</MathInline></p>
            <p className="text-dark-300"><MathInline>{'A \\cup (A \\cap B) = A'}</MathInline></p>
            <p className="text-dark-300"><MathInline>{'A \\cap (A \\cup B) = A'}</MathInline></p>
          </div>
        </div>
      </div>

      {/* De Morgan's Laws */}
      <h3 className="text-xl font-semibold mt-8 mb-4">De Morgan's Laws</h3>

      <Callout type="theorem">
        <p className="font-semibold mb-2">De Morgan's Laws for Set Differences</p>
        <MathBlock>
          {'A - (B \\cap C) = (A - B) \\cup (A - C)'}
        </MathBlock>
        <MathBlock>
          {'A - (B \\cup C) = (A - B) \\cap (A - C)'}
        </MathBlock>
        <p className="mt-2 text-sm text-dark-400">
          These laws show how set difference distributes over union and intersection.
        </p>
      </Callout>

      {/* Key Takeaways */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Key Takeaways</h2>

      <div className="bg-dark-800 rounded-lg p-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">1.</span>
            <span>
              A <strong>set</strong> is a collection of objects (elements). We write <MathInline>{'x \\in S'}</MathInline> if{' '}
              <MathInline>{'x'}</MathInline> belongs to <MathInline>{'S'}</MathInline>.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">2.</span>
            <span>
              Two sets are <strong>equal</strong> if and only if they contain exactly the same elements.
              Order and repetition don't matter.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">3.</span>
            <span>
              <MathInline>{'A \\subseteq B'}</MathInline> means every element of <MathInline>{'A'}</MathInline> is
              also in <MathInline>{'B'}</MathInline>. The empty set <MathInline>{'\\varnothing'}</MathInline> is
              a subset of every set.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">4.</span>
            <span>
              The three main operations are <strong>union</strong> (<MathInline>{'\\cup'}</MathInline>),{' '}
              <strong>intersection</strong> (<MathInline>{'\\cap'}</MathInline>), and{' '}
              <strong>difference</strong> (<MathInline>{'-'}</MathInline>).
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary-400 font-bold">5.</span>
            <span>
              Union and intersection are commutative, associative, and distribute over each other.
            </span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  );
}
