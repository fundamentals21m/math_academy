import { LessonLayout } from '@/components/layout/LessonLayout';
import { Definition, Theorem, Example } from '@/components/common/ContentBlocks';
import { InlineMath, MathBlock } from '@/components/common/MathBlock';

export default function Section03() {
  return (
    <LessonLayout
      title="1.3 Permutations"
      sectionId={3}
    >
      <p className="text-lg text-dark-200 mb-6">
        A <strong>permutation</strong> is an ordered arrangement of objects. When order matters,
        we count permutations.
      </p>

      <Definition title="Permutation">
        <p>
          A <strong>permutation</strong> of <InlineMath>n</InlineMath> distinct objects is an arrangement of 
          all <InlineMath>n</InlineMath> objects in a specific order. More generally, an <strong><InlineMath>r</InlineMath>-permutation</strong> of 
          <InlineMath>n</InlineMath> objects is an ordered arrangement of <InlineMath>r</InlineMath> of the <InlineMath>n</InlineMath> objects.
        </p>
      </Definition>

      <Theorem title="Number of Permutations">
        <p className="mb-2">
          The number of permutations of <InlineMath>n</InlineMath> distinct objects is:
        </p>
        <MathBlock>{`n! = n \\cdot (n-1) \\cdot (n-2) \\cdots 3 \\cdot 2 \\cdot 1`}</MathBlock>
        <p className="mt-2">
          By convention, <InlineMath>0! = 1</InlineMath>.
        </p>
      </Theorem>

      <p className="text-dark-300 mb-4">
        To see why, apply the basic principle: the first position can be filled in <InlineMath>n</InlineMath> ways, 
        the second in <InlineMath>n-1</InlineMath> ways (one object used), and so on.
      </p>

      <Example title="Arranging Books">
        <p className="mb-2">
          How many ways can 6 different books be arranged on a shelf?
        </p>
        <MathBlock>{`6! = 6 \\cdot 5 \\cdot 4 \\cdot 3 \\cdot 2 \\cdot 1 = 720`}</MathBlock>
      </Example>

      <h2 className="text-2xl font-bold text-dark-100 mt-8 mb-4">Partial Permutations</h2>

      <p className="text-dark-300 mb-4">
        Often we want to arrange only <InlineMath>r</InlineMath> objects from a set of <InlineMath>n</InlineMath> objects,
        where <InlineMath>r \leq n</InlineMath>.
      </p>

      <Theorem title="Number of r-Permutations">
        <p className="mb-2">
          The number of ways to arrange <InlineMath>r</InlineMath> objects chosen from <InlineMath>n</InlineMath> distinct 
          objects is denoted <InlineMath>P(n,r)</InlineMath> or <InlineMath>_nP_r</InlineMath> and equals:
        </p>
        <MathBlock>{`P(n,r) = n(n-1)(n-2)\\cdots(n-r+1) = \\frac{n!}{(n-r)!}`}</MathBlock>
      </Theorem>

      <Example title="Selecting Officers">
        <p className="mb-2">
          A club with 10 members needs to elect a president, vice president, and treasurer.
          How many ways can this be done?
        </p>
        <p className="mb-2">
          This is selecting and arranging 3 people from 10, where order matters (different positions).
        </p>
        <MathBlock>{`P(10,3) = 10 \\cdot 9 \\cdot 8 = 720`}</MathBlock>
        <p>
          Or using the formula: <InlineMath>{`\\frac{10!}{7!} = \\frac{10!}{(10-3)!} = 720`}</InlineMath>
        </p>
      </Example>

      <Example title="Race Results">
        <p className="mb-2">
          In a race with 8 runners, how many possible orderings are there for the gold, silver, and bronze medals?
        </p>
        <MathBlock>{`P(8,3) = 8 \\cdot 7 \\cdot 6 = 336`}</MathBlock>
      </Example>

      <h2 className="text-2xl font-bold text-dark-100 mt-8 mb-4">Permutations with Identical Objects</h2>

      <p className="text-dark-300 mb-4">
        When some objects are identical, we must avoid overcounting. If we have <InlineMath>n</InlineMath> objects 
        where <InlineMath>n_1</InlineMath> are of type 1, <InlineMath>n_2</InlineMath> are of type 2, etc., the number of 
        distinguishable arrangements is:
      </p>

      <Theorem title="Permutations with Repetition">
        <p className="mb-2">
          The number of distinguishable permutations of <InlineMath>n</InlineMath> objects, where there are 
          <InlineMath>n_1</InlineMath> identical objects of type 1, <InlineMath>n_2</InlineMath> identical objects of type 2, 
          ..., and <InlineMath>n_r</InlineMath> identical objects of type <InlineMath>r</InlineMath>, is:
        </p>
        <MathBlock>{`\\frac{n!}{n_1! \\cdot n_2! \\cdots n_r!}`}</MathBlock>
        <p className="mt-2">where <InlineMath>n_1 + n_2 + \cdots + n_r = n</InlineMath>.</p>
      </Theorem>

      <Example title="Arranging MISSISSIPPI">
        <p className="mb-2">
          How many distinguishable arrangements are there of the letters in MISSISSIPPI?
        </p>
        <p className="mb-2">
          MISSISSIPPI has 11 letters: 1 M, 4 I's, 4 S's, 2 P's
        </p>
        <MathBlock>{`\\frac{11!}{1! \\cdot 4! \\cdot 4! \\cdot 2!} = \\frac{39916800}{1 \\cdot 24 \\cdot 24 \\cdot 2} = 34650`}</MathBlock>
      </Example>

      <Example title="Binary Strings">
        <p className="mb-2">
          How many binary strings of length 10 contain exactly 4 ones?
        </p>
        <p className="mb-2">
          This is arranging 10 bits where 4 are 1's and 6 are 0's:
        </p>
        <MathBlock>{`\\frac{10!}{4! \\cdot 6!} = \\frac{3628800}{24 \\cdot 720} = 210`}</MathBlock>
        <p>
          (This is also <InlineMath>\binom{'{10}'}{'{4}'}</InlineMath>, which we'll explore in the next section.)
        </p>
      </Example>

      <h2 className="text-2xl font-bold text-dark-100 mt-8 mb-4">Circular Permutations</h2>

      <p className="text-dark-300 mb-4">
        When objects are arranged in a circle, rotations of the same arrangement are considered identical.
      </p>

      <Theorem title="Circular Permutations">
        <p className="mb-2">
          The number of ways to arrange <InlineMath>n</InlineMath> distinct objects in a circle is:
        </p>
        <MathBlock>{`(n-1)!`}</MathBlock>
      </Theorem>

      <p className="text-dark-300 mb-4">
        This is because we can fix one object's position (eliminating the <InlineMath>n</InlineMath> rotational 
        equivalences) and arrange the remaining <InlineMath>n-1</InlineMath> objects in <InlineMath>(n-1)!</InlineMath> ways.
      </p>

      <Example title="Round Table Seating">
        <p className="mb-2">
          How many ways can 6 people be seated around a circular table?
        </p>
        <MathBlock>{`(6-1)! = 5! = 120`}</MathBlock>
      </Example>
    </LessonLayout>
  );
}
