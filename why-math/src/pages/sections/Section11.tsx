import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, Math } from '@/components/common/MathBlock';
import { VennDiagramVisualizer } from '@/components/visualizations';

export default function Section11() {
  return (
    <LessonLayout sectionId={11}>
      <h2>Chapter 11: Sets and Counting</h2>

      <p>
        This chapter provides the prerequisites for probability theory and the study
        of infinite sets. For these topics one needs some acquaintance with the
        mathematical notation for <strong>sets</strong>.
      </p>

      <p>
        Furthermore, in probability examples it is often important to determine the
        number of different ways a group of objects can be selected and/or ordered.
        This is the art of <strong>counting</strong>.
      </p>

      <h2>11.1 Set Notation</h2>

      <p>
        A <strong>set</strong> is any well-defined collection of objects or concepts, called
        the <em>members</em> (or elements or points) of the set. A set <Math>S</Math> can be
        described by listing its members in braces <Math>{`\\{ \\}`}</Math>.
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Examples of Sets</p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-dark-300">
          <li><Math>{`\\{1, 2, 3, 4, 5, 6\\}`}</Math> — the first six positive integers</li>
          <li><Math>{`\\{a, e, i, o, u\\}`}</Math> — the vowels in the English alphabet</li>
          <li><Math>{`\\{h, t\\}`}</Math> — possible outcomes when tossing a coin (h = heads, t = tails)</li>
        </ul>
      </div>

      <Callout type="info">
        <strong>Order Doesn't Matter:</strong> The order in which members of a set
        are listed is immaterial. Thus <Math>{`\\{1, 2, 3\\}`}</Math> is the same as{' '}
        <Math>{`\\{2, 1, 3\\}`}</Math>, and <Math>{`\\{h, t\\}`}</Math> equals <Math>{`\\{t, h\\}`}</Math>.
      </Callout>

      <h3>Set-Builder Notation</h3>

      <p>
        Another useful format for describing sets is:
      </p>

      <MathBlock>{`\\{x : \\text{property or properties of } x\\}`}</MathBlock>

      <p>
        Here <Math>x</Math> represents a member of the set, and after the colon comes
        the exact property that characterizes membership.
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-indigo-500">
        <p className="font-semibold text-indigo-400">Example: Set-Builder Notation</p>
        <ul className="list-disc list-inside mt-2 space-y-2 text-dark-300">
          <li><Math>{`\\{n : n \\text{ is an integer}, 1 \\leq n \\leq 100\\}`}</Math> — all integers from 1 to 100</li>
          <li><Math>{`\\{x : x^2 = 2\\}`}</Math> — the set <Math>{`\\{\\sqrt{2}, -\\sqrt{2}\\}`}</Math></li>
          <li><Math>{`\\{y : y \\text{ is an integer}, 0 \\leq y \\leq 4\\}`}</Math> — equivalent to <Math>{`\\{0, 1, 2, 3, 4\\}`}</Math></li>
        </ul>
      </div>

      <h3>Coin Tossing and Sample Spaces</h3>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Example: Tossing Two Coins</p>
        <p className="mt-2">
          Describe the set of all possible outcomes when one simultaneously tosses a penny and a dime.
        </p>
        <p className="mt-2">
          Writing h for heads and t for tails, outcomes are ordered pairs where the first
          symbol refers to the penny and the second to the dime. Thus (h, t) means the
          penny came up heads and the dime came up tails.
        </p>
        <p className="mt-2 text-emerald-400">
          The set of all possible outcomes: <Math>{`\\{(h,h), (h,t), (t,h), (t,t)\\}`}</Math>
        </p>
      </div>

      <Callout type="warning">
        <strong>Important:</strong> Even when tossing two "identical" pennies, there are
        still <em>four</em> possible outcomes, not three! No matter how identical the
        coins look, they have their own "identities"—penny No. 1 being heads and
        penny No. 2 being tails is different from No. 1 tails and No. 2 heads.
      </Callout>

      <h3>Operations on Sets</h3>

      <p>
        There are two standard symbols used for combining sets:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-primary-400 font-semibold">Union: <Math>{`A \\cup B`}</Math></p>
          <p className="mt-2 text-dark-300">
            The set of all elements belonging to <em>either</em> A or B (or both).
            "A union B" combines everything from both sets.
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-primary-400 font-semibold">Intersection: <Math>{`A \\cap B`}</Math></p>
          <p className="mt-2 text-dark-300">
            The set of elements belonging to <em>both</em> A and B.
            "A intersect B" contains only what's common to both sets.
          </p>
        </div>
      </div>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-indigo-500">
        <p className="font-semibold text-indigo-400">Example: Union and Intersection</p>
        <p className="mt-2">
          Let <Math>{`A = \\{1, 2, 3\\}`}</Math>, <Math>{`B = \\{2, 3, 5\\}`}</Math>, and <Math>{`C = \\{1, 7\\}`}</Math>. Then:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-dark-300">
          <li><Math>{`A \\cup B = \\{1, 2, 3, 5\\}`}</Math></li>
          <li><Math>{`A \\cup C = \\{1, 2, 3, 7\\}`}</Math></li>
          <li><Math>{`A \\cap B = \\{2, 3\\}`}</Math></li>
          <li><Math>{`A \\cap C = \\{1\\}`}</Math></li>
          <li><Math>{`B \\cap C = \\emptyset`}</Math> (the empty set—no common elements)</li>
        </ul>
      </div>

      <VennDiagramVisualizer />

      <h3>Special Sets and Notation</h3>

      <p>
        The <strong>empty set</strong>, denoted <Math>{`\\emptyset`}</Math>, contains no elements.
        Two sets are <strong>disjoint</strong> if they have no elements in common
        (their intersection is the empty set).
      </p>

      <p>
        The notation <Math>{`x \\in A`}</Math> means "x is a member of A," while{' '}
        <Math>{`x \\notin B`}</Math> means "x is not a member of B."
      </p>

      <p>
        Set <Math>A</Math> is a <strong>subset</strong> of <Math>B</Math>, written{' '}
        <Math>{`A \\subset B`}</Math>, if every member of <Math>A</Math> also belongs to <Math>B</Math>.
      </p>

      <Callout type="info">
        <strong>Complement:</strong> Given a "universal set" or space <Math>S</Math>, the
        complement of A, denoted <Math>{`A^c`}</Math>, is the set of all members of S
        that are <em>not</em> in A. For any set A: <Math>{`A \\cap A^c = \\emptyset`}</Math> and{' '}
        <Math>{`A \\cup A^c = S`}</Math>.
      </Callout>

      <h2>11.2 Counting</h2>

      <p>
        Often one is more interested in knowing the <em>number</em> of elements in a set
        than in seeing a listing of those elements. This section introduces techniques
        for determining the number of elements without writing them all down.
      </p>

      <p>
        For a set <Math>A</Math> with finitely many members, <Math>{`n(A)`}</Math> denotes
        the number of members of <Math>A</Math>.
      </p>

      <h3>The Multiplication Principle</h3>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Example: Rolling Two Dice</p>
        <p className="mt-2">
          How many members are in the set of all possible outcomes when one rolls
          a pair of dice?
        </p>
        <p className="mt-2">
          Each outcome is described by filling two "slots" in order. The first slot
          (die 1) can be filled in 6 ways. For <em>each</em> of those 6 ways, there
          are 6 possibilities for the second slot.
        </p>
        <MathBlock>{`n(S) = 6 \\times 6 = 36`}</MathBlock>
      </div>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Example: Tossing Three Coins</p>
        <p className="mt-2">
          If one tosses three coins, how many outcomes are possible?
        </p>
        <p className="mt-2">
          Each outcome is an ordered triple of h's and t's. Think of filling three
          slots: 2 choices for the first, 2 for the second, 2 for the third.
        </p>
        <MathBlock>{`n(S) = 2 \\times 2 \\times 2 = 8`}</MathBlock>
      </div>

      <h3>Permutations (Ordered Arrangements)</h3>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-indigo-500">
        <p className="font-semibold text-indigo-400">Example: Ordering Five Letters</p>
        <p className="mt-2">
          In how many ways can one order (or permute) the five letters a, b, c, d, e?
        </p>
        <p className="mt-2">
          Fill five slots in order, but each letter can only be used once:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-dark-300">
          <li>First slot: 5 choices</li>
          <li>Second slot: 4 remaining choices</li>
          <li>Third slot: 3 remaining choices</li>
          <li>Fourth slot: 2 remaining choices</li>
          <li>Fifth slot: 1 remaining choice</li>
        </ul>
        <MathBlock>{`n(S) = 5 \\times 4 \\times 3 \\times 2 \\times 1 = 120`}</MathBlock>
      </div>

      <Callout type="success">
        <strong>Factorial Notation:</strong> The number of permutations of <Math>k</Math> distinct
        objects is <Math>{`k! = 1 \\times 2 \\times 3 \\times \\cdots \\times k`}</Math>,
        pronounced "k factorial." So 5! = 120, and 3! = 6.
      </Callout>

      <h3>Combinations (Unordered Selections)</h3>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Example: Poker Hands</p>
        <p className="mt-2">
          A poker hand is a set of five playing cards from a deck of 52. How many
          different poker hands are possible?
        </p>
        <p className="mt-2">
          First, count <em>ordered</em> poker hands (where order matters):
        </p>
        <MathBlock>{`52 \\times 51 \\times 50 \\times 49 \\times 48`}</MathBlock>
        <p className="mt-2">
          But in poker, different orderings of the same five cards don't matter.
          Any group of 5 cards can be ordered in 5! = 120 ways. So for each actual
          hand, we've counted 120 ordered versions.
        </p>
        <MathBlock>{`n = \\frac{52 \\times 51 \\times 50 \\times 49 \\times 48}{5!} = \\frac{311,875,200}{120} = 2,598,960`}</MathBlock>
        <p className="mt-2 text-emerald-400">
          There are 2,598,960 different poker hands!
        </p>
      </div>

      <h3>General Formulas</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-primary-400 font-semibold">Permutations</p>
          <p className="mt-2 text-dark-300">
            Ordered selections of <Math>k</Math> items from <Math>p</Math> objects:
          </p>
          <MathBlock>{`p(p-1)(p-2)\\cdots(p-k+1)`}</MathBlock>
          <p className="mt-2 text-dark-400 text-sm">
            Can also be written as <Math>{`\\frac{p!}{(p-k)!}`}</Math>
          </p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-primary-400 font-semibold">Combinations</p>
          <p className="mt-2 text-dark-300">
            Unordered selections of <Math>k</Math> items from <Math>p</Math> objects:
          </p>
          <MathBlock>{`\\frac{p(p-1)(p-2)\\cdots(p-k+1)}{k!}`}</MathBlock>
          <p className="mt-2 text-dark-400 text-sm">
            Often written as <Math>{`\\binom{p}{k}`}</Math> or "p choose k"
          </p>
        </div>
      </div>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-indigo-500">
        <p className="font-semibold text-indigo-400">Example: Choosing a Committee</p>
        <p className="mt-2">
          How many ways can you choose a committee of 3 people from a group of 10?
        </p>
        <p className="mt-2">
          This is a combination (order doesn't matter for committee membership):
        </p>
        <MathBlock>{`\\frac{10 \\times 9 \\times 8}{3!} = \\frac{720}{6} = 120`}</MathBlock>
      </div>

      <Callout type="success">
        <strong>Chapter Summary:</strong> Sets are collections of objects, described
        by listing elements or specifying properties. Key operations include union
        (<Math>{`\\cup`}</Math>) and intersection (<Math>{`\\cap`}</Math>).
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>Multiplication principle:</strong> Fill k slots with m₁, m₂, ..., mₖ choices gives m₁ × m₂ × ... × mₖ outcomes</li>
          <li><strong>Permutations:</strong> Ordered arrangements of k from n objects: <Math>{`n!/(n-k)!`}</Math></li>
          <li><strong>Combinations:</strong> Unordered selections of k from n objects: <Math>{`n!/(k!(n-k)!)`}</Math></li>
          <li><strong>Factorial:</strong> <Math>{`k! = 1 \\times 2 \\times \\cdots \\times k`}</Math></li>
        </ul>
      </Callout>
    </LessonLayout>
  );
}
