import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, Math } from '@/components/common/MathBlock';
import { CantorDiagonalVisualizer } from '@/components/visualizations';

export default function Section13() {
  return (
    <LessonLayout sectionId={13}>
      <h2>Chapter 13: Cardinality</h2>

      <p>
        This chapter considers a profound question: Are all infinities the same size?
        The topic—an examination of different "sizes of infinity"—has important
        applications in mathematics itself and in the theory of computing.
      </p>

      <p>
        The reason for including a discussion of "cardinality" is that it offers a
        glimpse—at a fairly elementary level—of some of the questions and methods
        of reasoning that arise in abstract mathematics.
      </p>

      <h2>13.1 Countable Sets</h2>

      <p>
        Most people over the age of six have a good idea how to count the number of
        elements in a finite set. But it's surprisingly difficult to <em>define</em> what
        the words "one," "two," "three," ... actually mean!
      </p>

      <p>
        Rather than trying to define the number of elements in a set, let's first think
        about <em>comparing</em> two sets to determine whether they have the same
        number of elements.
      </p>

      <Callout type="success">
        <strong>Definition:</strong> Two sets are said to have the same{' '}
        <strong>cardinality</strong> (number of elements) if they can be put into{' '}
        <strong>one-to-one correspondence</strong> with each other.
      </Callout>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Example: Comparing Finite Sets</p>
        <p className="mt-2">
          The sets <Math>{`A = \\{a, b, c, d, e\\}`}</Math> and <Math>{`B = \\{r, s, t, u, v\\}`}</Math>{' '}
          have the same cardinality since there is the following one-to-one correspondence:
        </p>
        <div className="mt-2 text-center font-mono">
          a ↔ r, b ↔ s, c ↔ t, d ↔ u, e ↔ v
        </div>
        <p className="mt-2 text-dark-300">
          Each element of A is paired with exactly one element of B, and vice versa.
          The number of different one-to-one correspondences between these sets is{' '}
          <Math>{`5! = 120`}</Math>.
        </p>
      </div>

      <p>
        The advantage of thinking in terms of one-to-one correspondences is that this
        concept provides a means of comparing <em>infinite</em> sets as well as finite ones.
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-indigo-500">
        <p className="font-semibold text-indigo-400">Example: Nonnegative Integers vs. Positive Integers</p>
        <p className="mt-2">
          Show that the set of all nonnegative integers <Math>{`A = \\{0, 1, 2, 3, ...\\}`}</Math>{' '}
          has the same cardinality as the set of all positive integers <Math>{`N = \\{1, 2, 3, 4, ...\\}`}</Math>.
        </p>
        <p className="mt-2">
          <strong>Solution:</strong> Display a one-to-one correspondence:
        </p>
        <div className="mt-2 text-center font-mono">
          N: 1 ↔ 2 ↔ 3 ↔ 4 ↔ ...<br />
          A: 0 ↔ 1 ↔ 2 ↔ 3 ↔ ...
        </div>
        <p className="mt-2 text-emerald-400">
          Surprisingly, "adding one more element" (zero) to an infinite set doesn't
          change its size!
        </p>
      </div>

      <Callout type="info">
        <strong>Definition:</strong> If the elements of a set <Math>A</Math> can be put
        into one-to-one correspondence with the positive integers <Math>N</Math>, then
        the set <Math>A</Math> is said to be <strong>countably infinite</strong>. This
        is denoted symbolically by:
        <MathBlock>{`n(A) = \\aleph_0`}</MathBlock>
        where <Math>{`\\aleph_0`}</Math> is pronounced "aleph nought" (or "aleph null").
      </Callout>

      <p>
        A set that is either finite or countably infinite is said to be <strong>countable</strong>.
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Example: All Integers Are Countable</p>
        <p className="mt-2">
          Show that the set of <em>all</em> integers <Math>{`Z = \\{..., -2, -1, 0, 1, 2, ...\\}`}</Math>{' '}
          is countable.
        </p>
        <p className="mt-2">
          <strong>Solution:</strong> A little ingenuity is required. If you tried to first
          list all positive integers, you'd never get to 0 or negative numbers! Instead,
          alternate between positives and negatives:
        </p>
        <div className="mt-2 text-center font-mono">
          N: 1 ↔ 2 ↔ 3 ↔ 4 ↔ 5 ↔ ...<br />
          Z: 0 ↔ 1 ↔ −1 ↔ 2 ↔ −2 ↔ ...
        </div>
        <p className="mt-2 text-emerald-400">
          By reordering as 0, 1, −1, 2, −2, 3, −3, ... we can list all integers!
        </p>
      </div>

      <Callout type="success">
        <strong>Theorem A:</strong> If <Math>A</Math> and <Math>B</Math> are countable
        sets, then <Math>{`A \\cup B`}</Math> is also countable.
      </Callout>

      <h2>13.2 Countably Many Countable Sets</h2>

      <p>
        Theorem A says the union of a <em>finite</em> number of countable sets is countable.
        The next result is stronger.
      </p>

      <Callout type="success">
        <strong>Theorem B:</strong> The union of <em>countably many</em> countable sets
        is countable.
      </Callout>

      <p>
        The proof uses a clever "diagonal" enumeration. Given sets{' '}
        <Math>{`A_1, A_2, A_3, ...`}</Math>, list their elements in a grid and then
        traverse diagonally:
      </p>

      <MathBlock>{`a_{11}, a_{12}, a_{21}, a_{13}, a_{22}, a_{31}, a_{14}, a_{23}, ...`}</MathBlock>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-indigo-500">
        <p className="font-semibold text-indigo-400">Example: Rationals in [0, 1] Are Countable</p>
        <p className="mt-2">
          Show that the set of all rational numbers <Math>x</Math> such that{' '}
          <Math>{`0 \\leq x \\leq 1`}</Math> is countable.
        </p>
        <p className="mt-2">
          <strong>Solution:</strong> List them systematically (skipping duplicates):
        </p>
        <MathBlock>{`0, 1, \\frac{1}{2}, \\frac{1}{3}, \\frac{2}{3}, \\frac{1}{4}, \\frac{3}{4}, \\frac{1}{5}, \\frac{2}{5}, \\frac{3}{5}, \\frac{4}{5}, \\frac{1}{6}, ...`}</MathBlock>
      </div>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Example: All Positive Rationals Are Countable</p>
        <p className="mt-2">
          Consider the positive rationals as the union of sets:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-dark-300">
          <li><Math>{`A_1 = \\{1, 2, 3, ...\\}`}</Math></li>
          <li><Math>{`A_2 = \\{\\frac{1}{2}, \\frac{3}{2}, \\frac{5}{2}, ...\\}`}</Math></li>
          <li><Math>{`A_3 = \\{\\frac{1}{3}, \\frac{2}{3}, \\frac{4}{3}, ...\\}`}</Math></li>
        </ul>
        <p className="mt-2 text-emerald-400">
          By Theorem B, their union (all positive rationals) is countable!
        </p>
      </div>

      <Callout type="info">
        <strong>Key Result:</strong> The set of <em>all</em> rational numbers (positive,
        negative, and zero) is countable. Despite being densely packed on the number line
        with infinitely many rationals between any two numbers, we can still "list" them all!
      </Callout>

      <h2>13.3 The Reals vs. the Rationals</h2>

      <p>
        After reading the previous sections, you might suspect that every set is countable.
        This section shows that this is <em>not</em> so.
      </p>

      <p>
        A set that is not countable is said to be <strong>uncountable</strong>.
      </p>

      <Callout type="warning">
        <strong>Theorem C (Cantor, 1891):</strong> The set <Math>{`[0, 1)`}</Math> is uncountable.
      </Callout>

      <p>
        The proof, due to Georg Cantor (1845–1918), is one of the most beautiful arguments
        in mathematics. It's called the <strong>diagonal argument</strong>.
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-indigo-500">
        <p className="font-semibold text-indigo-400">Cantor's Diagonal Argument</p>
        <p className="mt-2">
          <strong>Proof:</strong> Suppose (for contradiction) that there is a complete list
          of all real numbers in <Math>{`[0, 1)`}</Math>:
        </p>
        <MathBlock>{`x_1 = 0.a_{11}a_{12}a_{13}...`}</MathBlock>
        <MathBlock>{`x_2 = 0.a_{21}a_{22}a_{23}...`}</MathBlock>
        <MathBlock>{`x_3 = 0.a_{31}a_{32}a_{33}...`}</MathBlock>
        <p className="mt-2">
          Now construct a number <Math>x = 0.b_1b_2b_3...</Math> where each digit{' '}
          <Math>{`b_i`}</Math> is chosen to be <em>different</em> from the diagonal digit{' '}
          <Math>{`a_{ii}`}</Math>.
        </p>
        <p className="mt-2">
          Then <Math>x</Math> differs from <Math>{`x_1`}</Math> in the first decimal place,
          from <Math>{`x_2`}</Math> in the second, from <Math>{`x_3`}</Math> in the third, etc.
        </p>
        <p className="mt-2 text-emerald-400">
          So <Math>x</Math> is not in the list! Contradiction. The list cannot be complete.
        </p>
      </div>

      <CantorDiagonalVisualizer />

      <Callout type="success">
        <strong>Corollary:</strong> The irrational numbers are uncountable.
        <p className="mt-2">
          <em>Proof:</em> If the irrationals were countable, then <Math>{`[0, 1)`}</Math> would
          be the union of two countable sets (rationals and irrationals) and would be countable
          itself. But Theorem C says it's not!
        </p>
      </Callout>

      <h3>A Paradox</h3>

      <p>
        Between every two rational numbers there is an irrational, and between every
        two irrationals there is a rational. Yet there are <em>far more</em> irrationals
        than rationals!
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Different Sizes of Infinity</p>
        <p className="mt-2">
          The set of all real numbers <Math>{`(-\\infty, \\infty)`}</Math> has the same
          cardinality as any interval like <Math>{`(0, 1)`}</Math>—shown via geometric
          constructions using similar triangles.
        </p>
        <p className="mt-2">
          This cardinality is denoted <Math>{`\\aleph_1`}</Math> (pronounced "aleph one"):
        </p>
        <MathBlock>{`n((-\\infty, \\infty)) = \\aleph_1`}</MathBlock>
        <p className="mt-2 text-emerald-400">
          Thus <Math>{`\\aleph_1`}</Math> is another infinity—one that is "bigger than"{' '}
          <Math>{`\\aleph_0`}</Math>!
        </p>
      </div>

      <Callout type="info">
        <strong>Mind-Bending Fact:</strong> It can be shown that there are always
        infinities "bigger than" any given infinity. The hierarchy of infinities continues
        forever: <Math>{`\\aleph_0 < \\aleph_1 < \\aleph_2 < ...`}</Math>
      </Callout>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-primary-400 font-semibold">Countable (<Math>{`\\aleph_0`}</Math>)</p>
          <ul className="list-disc list-inside mt-2 space-y-1 text-dark-300">
            <li>Natural numbers <Math>N</Math></li>
            <li>Integers <Math>Z</Math></li>
            <li>Rational numbers <Math>Q</Math></li>
            <li>Algebraic numbers</li>
          </ul>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-primary-400 font-semibold">Uncountable (<Math>{`\\aleph_1`}</Math>)</p>
          <ul className="list-disc list-inside mt-2 space-y-1 text-dark-300">
            <li>Real numbers <Math>R</Math></li>
            <li>Irrational numbers</li>
            <li>Any interval <Math>{`(a, b)`}</Math></li>
            <li>Points on a line</li>
          </ul>
        </div>
      </div>

      <Callout type="success">
        <strong>Chapter Summary:</strong> Cardinality allows us to compare the "sizes"
        of infinite sets using one-to-one correspondences.
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>Same cardinality:</strong> Sets that can be put into one-to-one correspondence</li>
          <li><strong>Countable:</strong> Sets that can be listed (finite or in correspondence with <Math>N</Math>)</li>
          <li><strong>Aleph nought (<Math>{`\\aleph_0`}</Math>):</strong> The cardinality of countably infinite sets</li>
          <li><strong>Rationals are countable:</strong> Despite being dense, <Math>Q</Math> has cardinality <Math>{`\\aleph_0`}</Math></li>
          <li><strong>Reals are uncountable:</strong> Cantor's diagonal argument proves <Math>R</Math> cannot be listed</li>
          <li><strong>Multiple infinities:</strong> <Math>{`\\aleph_0 < \\aleph_1 < \\aleph_2 < ...`}</Math></li>
        </ul>
      </Callout>
    </LessonLayout>
  );
}
