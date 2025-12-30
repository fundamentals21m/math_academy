import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, Math } from '@/components/common/MathBlock';
import { PythagoreanExplorer } from '@/components/visualizations';

export default function Section03() {
  return (
    <LessonLayout sectionId={3}>
      <h2>Chapter 3: The Pythagorean Theorem and Square Roots</h2>

      <p>
        The Pythagorean theorem is perhaps the most famous result in all of mathematics.
        Known for millennia, it connects algebra and geometry in a simple but profound way.
        Our exploration of this theorem will lead us to prove one of history's most
        surprising mathematical discoveries: the existence of irrational numbers.
      </p>

      <h2>3.1 The Pythagorean Theorem</h2>

      <Callout type="success">
        <strong>Theorem:</strong> In a right triangle with legs of length <Math>a</Math> and
        <Math>b</Math> and hypotenuse of length <Math>c</Math>:
        <MathBlock>{`a^2 + b^2 = c^2`}</MathBlock>
      </Callout>

      <h3>Historical Context</h3>
      <p>
        While named after the Greek mathematician Pythagoras (c. 570–495 BCE), this relationship
        was known to earlier civilizations:
      </p>

      <ul className="list-disc list-inside space-y-2 my-4 text-dark-300">
        <li>
          <strong className="text-primary-400">Babylonians (c. 1800 BCE):</strong> Clay tablets
          show knowledge of Pythagorean triples like (3, 4, 5)
        </li>
        <li>
          <strong className="text-primary-400">Egyptians:</strong> Used knotted ropes with
          3-4-5 spacing to create right angles for construction
        </li>
        <li>
          <strong className="text-primary-400">Ancient India:</strong> The Sulba Sutras
          (c. 800–500 BCE) contain geometric applications
        </li>
      </ul>

      <h3>Garfield's Proof</h3>
      <p>
        James A. Garfield, before becoming the 20th President of the United States, devised
        an elegant proof using a trapezoid. Here's the key idea:
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-indigo-500">
        <p className="font-semibold text-indigo-400">Proof Outline</p>
        <p className="mt-2">
          Arrange two copies of a right triangle with legs <Math>a</Math> and <Math>b</Math>
          to form a trapezoid. The area can be computed two ways:
        </p>
        <p className="mt-2">
          <strong>As a trapezoid:</strong>
        </p>
        <MathBlock>{`\\text{Area} = \\frac{1}{2}(a + b)(a + b) = \\frac{(a+b)^2}{2}`}</MathBlock>
        <p className="mt-2">
          <strong>As three triangles:</strong>
        </p>
        <MathBlock>{`\\text{Area} = 2 \\cdot \\frac{ab}{2} + \\frac{c^2}{2} = ab + \\frac{c^2}{2}`}</MathBlock>
        <p className="mt-2">Setting these equal and simplifying:</p>
        <MathBlock>{`\\frac{(a+b)^2}{2} = ab + \\frac{c^2}{2}`}</MathBlock>
        <MathBlock>{`a^2 + 2ab + b^2 = 2ab + c^2`}</MathBlock>
        <MathBlock>{`a^2 + b^2 = c^2 \\quad \\checkmark`}</MathBlock>
      </div>

      <PythagoreanExplorer />

      <h3>The Converse</h3>
      <p>
        The converse is also true: if <Math>{`a^2 + b^2 = c^2`}</Math> for a triangle with
        sides a, b, and c, then the triangle is a right triangle (with the right angle
        opposite side c).
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Example: Testing a Triangle</p>
        <p>Is a triangle with sides 5, 12, and 13 a right triangle?</p>
        <p className="mt-2">Check: <Math>{`5^2 + 12^2 = 25 + 144 = 169 = 13^2`}</Math> ✓</p>
        <p className="text-emerald-400">Yes, it's a right triangle.</p>
      </div>

      <h2>3.2 Square Roots Which Are Irrational</h2>

      <p>
        The Pythagorean theorem tells us that a square with side 1 has a diagonal of
        length <Math>{`\\sqrt{2}`}</Math>. But what kind of number is <Math>{`\\sqrt{2}`}</Math>?
      </p>

      <Callout type="success">
        <strong>Theorem:</strong> <Math>{`\\sqrt{2}`}</Math> is irrational.
      </Callout>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-indigo-500">
        <p className="font-semibold text-indigo-400">Proof by Contradiction</p>
        <p className="mt-2">
          Suppose <Math>{`\\sqrt{2}`}</Math> were rational. Then we could write:
        </p>
        <MathBlock>{`\\sqrt{2} = \\frac{p}{q}`}</MathBlock>
        <p>
          where <Math>p</Math> and <Math>q</Math> are integers with no common factors
          (the fraction is in lowest terms).
        </p>
        <p className="mt-2">Squaring both sides:</p>
        <MathBlock>{`2 = \\frac{p^2}{q^2} \\quad \\Rightarrow \\quad 2q^2 = p^2`}</MathBlock>
        <p className="mt-2">
          This means <Math>{`p^2`}</Math> is even. But if <Math>{`p^2`}</Math> is even,
          then <Math>p</Math> itself must be even (the square of an odd number is odd).
        </p>
        <p className="mt-2">
          Write <Math>{`p = 2k`}</Math> for some integer <Math>k</Math>. Then:
        </p>
        <MathBlock>{`2q^2 = (2k)^2 = 4k^2 \\quad \\Rightarrow \\quad q^2 = 2k^2`}</MathBlock>
        <p className="mt-2">
          So <Math>{`q^2`}</Math> is also even, meaning <Math>q</Math> is even.
        </p>
        <p className="mt-2 text-rose-400">
          <strong>Contradiction!</strong> Both <Math>p</Math> and <Math>q</Math> are even,
          so they have a common factor of 2. But we assumed the fraction was in lowest terms.
        </p>
        <p className="mt-2 text-emerald-400">
          Therefore, our assumption was wrong: <Math>{`\\sqrt{2}`}</Math> cannot be rational.
        </p>
      </div>

      <h3>The Pythagorean Crisis</h3>
      <p>
        This proof was revolutionary. The Pythagoreans believed that "all is number"—that
        everything in the universe could be expressed as ratios of whole numbers. The
        discovery that something as simple as the diagonal of a unit square couldn't be
        expressed this way shattered their worldview.
      </p>

      <Callout type="warning">
        <strong>Historical Note:</strong> Legend has it that Hippasus of Metapontum, who
        revealed this proof to outsiders, was drowned at sea as punishment for exposing
        this disturbing truth. While this story is probably apocryphal, it reflects how
        deeply unsettling this discovery was to ancient mathematicians.
      </Callout>

      <h2>3.3 Computation by Successive Approximation</h2>

      <p>
        Since <Math>{`\\sqrt{2}`}</Math> is irrational, we can never write its exact decimal
        expansion. However, we can approximate it to any desired accuracy using a simple
        method known to the Babylonians.
      </p>

      <Callout type="info">
        <strong>Babylonian Method:</strong> To approximate <Math>{`\\sqrt{N}`}</Math>, start
        with a guess <Math>{`x_0`}</Math> and iterate:
        <MathBlock>{`x_{n+1} = \\frac{1}{2}\\left(x_n + \\frac{N}{x_n}\\right)`}</MathBlock>
      </Callout>

      <p>
        This works because if <Math>{`x_n`}</Math> is an overestimate of <Math>{`\\sqrt{N}`}</Math>,
        then <Math>{`\\frac{N}{x_n}`}</Math> is an underestimate, and vice versa. Their average
        gives a better approximation.
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Example: Approximating <Math>{`\\sqrt{2}`}</Math></p>
        <p>Start with <Math>{`x_0 = 1`}</Math>:</p>
        <div className="mt-2 font-mono text-dark-300 space-y-1">
          <p><Math>{`x_1 = \\frac{1}{2}\\left(1 + \\frac{2}{1}\\right) = 1.5`}</Math></p>
          <p><Math>{`x_2 = \\frac{1}{2}\\left(1.5 + \\frac{2}{1.5}\\right) = 1.41\\overline{6}`}</Math></p>
          <p><Math>{`x_3 = \\frac{1}{2}\\left(1.41\\overline{6} + \\frac{2}{1.41\\overline{6}}\\right) \\approx 1.41421568`}</Math></p>
        </div>
        <p className="mt-2 text-emerald-400">
          After just 3 iterations, we have 5 correct decimal places!
          (<Math>{`\\sqrt{2} \\approx 1.41421356...`}</Math>)
        </p>
      </div>

      <h3>Why This Method Converges So Fast</h3>
      <p>
        Each iteration roughly doubles the number of correct digits—a property called
        <strong> quadratic convergence</strong>. This is remarkably efficient: to get
        1,000 correct digits, you only need about 10 iterations!
      </p>

      <h3>Pythagorean Triples</h3>
      <p>
        While <Math>{`\\sqrt{2}`}</Math> is irrational, there are infinitely many right
        triangles with all integer sides. These are called <strong>Pythagorean triples</strong>.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 text-center">
          <p className="text-primary-400 font-semibold">(3, 4, 5)</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 text-center">
          <p className="text-primary-400 font-semibold">(5, 12, 13)</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 text-center">
          <p className="text-primary-400 font-semibold">(8, 15, 17)</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 text-center">
          <p className="text-primary-400 font-semibold">(7, 24, 25)</p>
        </div>
      </div>

      <p>
        A formula for generating all primitive Pythagorean triples (where the sides share
        no common factor):
      </p>
      <MathBlock>{`a = m^2 - n^2, \\quad b = 2mn, \\quad c = m^2 + n^2`}</MathBlock>
      <p>
        where <Math>{`m > n > 0`}</Math> are coprime integers of opposite parity.
      </p>

      <Callout type="success">
        <strong>Chapter Summary:</strong> The Pythagorean theorem <Math>{`a^2 + b^2 = c^2`}</Math>
        connects the sides of right triangles. It led to the revolutionary discovery that
        <Math>{`\\sqrt{2}`}</Math> is irrational—a number that cannot be expressed as a
        fraction. The Babylonian method gives us a practical way to approximate such
        numbers with remarkable efficiency. In the next chapter, we'll use algebra to
        solve equations systematically.
      </Callout>
    </LessonLayout>
  );
}
