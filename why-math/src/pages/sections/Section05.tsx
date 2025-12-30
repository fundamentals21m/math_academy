import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock, Math } from '@/components/common/MathBlock';
import { ParabolaGrapher } from '@/components/visualizations';

export default function Section05() {
  return (
    <LessonLayout sectionId={5}>
      <h2>Chapter 5: Quadratic Polynomials and Equations</h2>

      <p>
        The equation <Math>{`2x + 4 = 7`}</Math> is called a "linear" equation—the type we
        explored in Chapter 4. A slightly more complicated equation would be:
      </p>
      <MathBlock>{`2x^2 + 5x + 4 = 7`}</MathBlock>
      <p>
        This is an example of a <strong>quadratic equation</strong>. Such equations arise in
        time-speed-distance problems, physics applications like free fall, and many other
        contexts. This chapter develops the methods for solving them and understanding their graphs.
      </p>

      <h2>5.1 Solution of Quadratic Equations</h2>

      <p>
        The most general quadratic equation can be written in <strong>standard form</strong> as:
      </p>
      <MathBlock>{`ax^2 + bx + c = 0`}</MathBlock>
      <p>
        where <Math>a</Math>, <Math>b</Math>, <Math>c</Math> are given numbers (with{' '}
        <Math>{`a \\neq 0`}</Math>), and <Math>x</Math> is the unknown. The presence of the{' '}
        <Math>{`x^2`}</Math> term distinguishes this from a linear equation.
      </p>

      <h3>Method 1: Simple Cases</h3>
      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Example 1</p>
        <p>Solve <Math>{`x^2 - 4 = 0`}</Math></p>
        <p className="mt-2">
          Add 4 to both sides: <Math>{`x^2 = 4`}</Math>
        </p>
        <p className="mt-2">
          Then observe there are <strong>two solutions</strong>: <Math>{`x = 2`}</Math> and{' '}
          <Math>{`x = -2`}</Math>
        </p>
        <p className="mt-2 text-emerald-400">
          Written compactly: <Math>{`x = \\pm 2`}</Math> ("x equals plus or minus 2")
        </p>
      </div>

      <Callout type="info">
        <strong>Key Property:</strong> Quadratic equations typically have <strong>two solutions</strong>.
        This is fundamentally different from linear equations, which have exactly one solution.
      </Callout>

      <h3>Method 2: Factoring</h3>
      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Example 2</p>
        <p>Solve <Math>{`x^2 - 6x + 4 = 20`}</Math></p>
        <p className="mt-2"><strong>Step 1:</strong> Put in standard form by subtracting 20:</p>
        <MathBlock>{`x^2 - 6x - 16 = 0`}</MathBlock>
        <p className="mt-2"><strong>Step 2:</strong> Factor the left side:</p>
        <MathBlock>{`(x - 8)(x + 2) = 0`}</MathBlock>
        <p className="mt-2">
          <strong>Step 3:</strong> Use the <em>zero product property</em>: a product is zero if and
          only if at least one factor is zero.
        </p>
        <MathBlock>{`x - 8 = 0 \\quad \\text{or} \\quad x + 2 = 0`}</MathBlock>
        <p className="mt-2 text-emerald-400">
          <strong>Solutions:</strong> <Math>{`x = 8`}</Math> or <Math>{`x = -2`}</Math>
        </p>
        <p className="mt-2 text-dark-300">
          <strong>Check:</strong> <Math>{`8^2 - 6(8) + 4 = 64 - 48 + 4 = 20`}</Math> ✓
        </p>
      </div>

      <h3>Method 3: Completing the Square</h3>
      <p>
        When factoring isn't obvious, we can systematically find solutions by "completing the square."
        This powerful technique works for any quadratic equation.
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-indigo-500">
        <p className="font-semibold text-indigo-400">Example 3: Completing the Square</p>
        <p>Solve <Math>{`2x^2 + 5x + 4 = 7`}</Math></p>

        <p className="mt-3"><strong>Step 1:</strong> Standard form</p>
        <MathBlock>{`2x^2 + 5x - 3 = 0`}</MathBlock>

        <p className="mt-2"><strong>Step 2:</strong> Divide by the coefficient of <Math>{`x^2`}</Math></p>
        <MathBlock>{`x^2 + \\frac{5}{2}x - \\frac{3}{2} = 0`}</MathBlock>

        <p className="mt-2">
          <strong>Step 3:</strong> Find <Math>d</Math> such that <Math>{`(x + d)^2 = x^2 + 2dx + d^2`}</Math>{' '}
          matches <Math>{`x^2 + \\frac{5}{2}x`}</Math>
        </p>
        <MathBlock>{`2d = \\frac{5}{2} \\quad \\Rightarrow \\quad d = \\frac{5}{4}`}</MathBlock>

        <p className="mt-2"><strong>Step 4:</strong> Add and subtract <Math>{`d^2 = \\frac{25}{16}`}</Math></p>
        <MathBlock>{`x^2 + \\frac{5}{2}x + \\frac{25}{16} - \\frac{25}{16} - \\frac{3}{2} = 0`}</MathBlock>
        <MathBlock>{`\\left(x + \\frac{5}{4}\\right)^2 - \\frac{49}{16} = 0`}</MathBlock>

        <p className="mt-2"><strong>Step 5:</strong> Use difference of squares</p>
        <MathBlock>{`\\left(x + \\frac{5}{4} - \\frac{7}{4}\\right)\\left(x + \\frac{5}{4} + \\frac{7}{4}\\right) = 0`}</MathBlock>
        <MathBlock>{`\\left(x - \\frac{1}{2}\\right)(x + 3) = 0`}</MathBlock>

        <p className="mt-2 text-emerald-400">
          <strong>Solutions:</strong> <Math>{`x = \\frac{1}{2}`}</Math> or <Math>{`x = -3`}</Math>
        </p>
      </div>

      <h3>The Quadratic Formula</h3>
      <p>
        By applying the completing-the-square method to the general equation{' '}
        <Math>{`ax^2 + bx + c = 0`}</Math>, we derive the famous <strong>Quadratic Formula</strong>:
      </p>

      <Callout type="success">
        <strong>The Quadratic Formula:</strong> The solutions of <Math>{`ax^2 + bx + c = 0`}</Math>{' '}
        (where <Math>{`a \\neq 0`}</Math>) are:
        <MathBlock>{`x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}`}</MathBlock>
      </Callout>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-indigo-500">
        <p className="font-semibold text-indigo-400">Proof Sketch</p>
        <p>Starting from <Math>{`ax^2 + bx + c = 0`}</Math>:</p>
        <ol className="list-decimal list-inside space-y-1 mt-2 text-dark-300">
          <li>Divide by <Math>a</Math>: <Math>{`x^2 + \\frac{b}{a}x + \\frac{c}{a} = 0`}</Math></li>
          <li>Complete the square with <Math>{`d = \\frac{b}{2a}`}</Math></li>
          <li>This gives: <Math>{`\\left(x + \\frac{b}{2a}\\right)^2 - \\frac{b^2 - 4ac}{4a^2} = 0`}</Math></li>
          <li>Solving for <Math>x</Math> yields the formula</li>
        </ol>
      </div>

      <h3>The Discriminant</h3>
      <p>
        The expression <Math>{`b^2 - 4ac`}</Math> under the square root is called the{' '}
        <strong>discriminant</strong>. It determines the nature of the solutions:
      </p>
      <ul className="list-disc list-inside space-y-2 my-4 text-dark-300">
        <li>
          <strong className="text-emerald-400">If <Math>{`b^2 - 4ac > 0`}</Math>:</strong>{' '}
          Two distinct real solutions
        </li>
        <li>
          <strong className="text-amber-400">If <Math>{`b^2 - 4ac = 0`}</Math>:</strong>{' '}
          One repeated real solution (both solutions are equal)
        </li>
        <li>
          <strong className="text-rose-400">If <Math>{`b^2 - 4ac < 0`}</Math>:</strong>{' '}
          No real solutions (would require taking the square root of a negative number)
        </li>
      </ul>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Example 4: Using the Quadratic Formula</p>
        <p>Solve <Math>{`4x^2 = 4x + 7`}</Math></p>
        <p className="mt-2">Standard form: <Math>{`4x^2 - 4x - 7 = 0`}</Math></p>
        <p>Here <Math>{`a = 4`}</Math>, <Math>{`b = -4`}</Math>, <Math>{`c = -7`}</Math></p>
        <MathBlock>{`x = \\frac{-(-4) \\pm \\sqrt{16 + 112}}{8} = \\frac{4 \\pm \\sqrt{128}}{8} = \\frac{4 \\pm 8\\sqrt{2}}{8} = \\frac{1 \\pm \\sqrt{2}}{2}`}</MathBlock>
        <p className="mt-2 text-emerald-400">
          <strong>Solutions:</strong> <Math>{`x = \\frac{1 + \\sqrt{2}}{2} \\approx 1.207`}</Math> or{' '}
          <Math>{`x = \\frac{1 - \\sqrt{2}}{2} \\approx -0.207`}</Math>
        </p>
      </div>

      <h2>5.2 Applications of Quadratic Equations</h2>

      <p>
        Quadratic equations arise naturally in many real-world situations. Here are some
        classic examples.
      </p>

      <h3>River Current Problems</h3>
      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Example 1: Motorboat Problem</p>
        <p>
          A motorboat travels at 9 mph in still water. If it travels 1 mile upstream and
          immediately returns, requiring 15 minutes for the round trip, find the speed of the current.
        </p>
        <p className="mt-3"><strong>Solution:</strong></p>
        <p>Let <Math>x</Math> = speed of current in mph</p>
        <ul className="list-disc list-inside mt-2 text-dark-300">
          <li>Upstream speed: <Math>{`9 - x`}</Math> mph</li>
          <li>Downstream speed: <Math>{`9 + x`}</Math> mph</li>
        </ul>
        <p className="mt-2">Total time = <Math>{`\\frac{1}{4}`}</Math> hour (15 minutes):</p>
        <MathBlock>{`\\frac{1}{9-x} + \\frac{1}{9+x} = \\frac{1}{4}`}</MathBlock>
        <p className="mt-2">Multiplying by <Math>{`4(9-x)(9+x)`}</Math>:</p>
        <MathBlock>{`4(9+x) + 4(9-x) = (9-x)(9+x)`}</MathBlock>
        <MathBlock>{`72 = 81 - x^2`}</MathBlock>
        <MathBlock>{`x^2 = 9 \\quad \\Rightarrow \\quad x = \\pm 3`}</MathBlock>
        <p className="mt-2 text-emerald-400">
          <strong>Answer:</strong> Current speed = 3 mph (discarding the negative solution)
        </p>
      </div>

      <h3>Investment Problems</h3>
      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Example 2: Investment Club</p>
        <p>
          An investment club decided to purchase stock for $9000, with each member paying equally.
          Before the purchase, two members left and the remaining members had to pay $50 extra each.
          How many members were there initially?
        </p>
        <p className="mt-3"><strong>Solution:</strong></p>
        <p>Let <Math>x</Math> = initial number of members</p>
        <MathBlock>{`\\frac{9000}{x} + 50 = \\frac{9000}{x-2}`}</MathBlock>
        <p className="mt-2">This leads to:</p>
        <MathBlock>{`x^2 - 2x - 360 = 0`}</MathBlock>
        <MathBlock>{`(x - 20)(x + 18) = 0`}</MathBlock>
        <p className="mt-2 text-emerald-400">
          <strong>Answer:</strong> 20 members initially (rejecting <Math>{`x = -18`}</Math>)
        </p>
      </div>

      <h3>Free Fall Motion</h3>
      <Callout type="info">
        <strong>Free Fall Formula:</strong> An object projected upward with initial velocity{' '}
        <Math>{`v_0`}</Math> feet/second from initial height <Math>{`h_0`}</Math> feet will be at height:
        <MathBlock>{`h = h_0 + v_0 t - 16t^2 \\text{ feet after } t \\text{ seconds}`}</MathBlock>
        <p className="mt-2 text-sm text-dark-300">
          (This assumes air resistance and Earth's rotation are negligible, and heights are small
          compared to Earth's radius. The coefficient 16 comes from <Math>{`\\frac{1}{2}g`}</Math> where{' '}
          <Math>{`g \\approx 32`}</Math> ft/s².)
        </p>
      </Callout>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Example 3: Baseball Trajectory</p>
        <p>
          A baseball is thrown straight upward from ground level with an initial velocity of
          50 ft/s. When will it reach a height of 30 feet?
        </p>
        <p className="mt-3"><strong>Solution:</strong></p>
        <p>With <Math>{`h_0 = 0`}</Math> and <Math>{`v_0 = 50`}</Math>:</p>
        <MathBlock>{`h = 50t - 16t^2`}</MathBlock>
        <p className="mt-2">Set <Math>{`h = 30`}</Math>:</p>
        <MathBlock>{`30 = 50t - 16t^2`}</MathBlock>
        <MathBlock>{`16t^2 - 50t + 30 = 0`}</MathBlock>
        <MathBlock>{`8t^2 - 25t + 15 = 0`}</MathBlock>
        <p className="mt-2">Using the quadratic formula:</p>
        <MathBlock>{`t = \\frac{25 \\pm \\sqrt{625 - 480}}{16} = \\frac{25 \\pm \\sqrt{145}}{16}`}</MathBlock>
        <p className="mt-2 text-emerald-400">
          <strong>Answers:</strong> <Math>{`t \\approx 0.81`}</Math> seconds (on the way up) and{' '}
          <Math>{`t \\approx 2.31`}</Math> seconds (on the way down)
        </p>
        <p className="mt-2 text-dark-300">
          Both solutions make physical sense! The ball passes 30 feet twice—once going up and once
          coming down.
        </p>
      </div>

      <h2>5.3 Quadratic Polynomials (Parabolas)</h2>

      <p>
        An expression of the form <Math>{`ax^2 + bx + c`}</Math> (where <Math>{`a \\neq 0`}</Math>)
        is called a <strong>quadratic polynomial</strong>. The graph of <Math>{`y = ax^2 + bx + c`}</Math>{' '}
        is a curve called a <strong>parabola</strong>.
      </p>

      <h3>The Basic Parabola</h3>
      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Example: Graph of <Math>{`y = x^2`}</Math></p>
        <div className="grid grid-cols-2 gap-4 mt-3">
          <div>
            <table className="text-sm">
              <thead>
                <tr>
                  <th className="px-3 py-1 text-left">x</th>
                  <th className="px-3 py-1 text-left">y</th>
                </tr>
              </thead>
              <tbody className="text-dark-300">
                <tr><td className="px-3 py-1">−3</td><td className="px-3 py-1">9</td></tr>
                <tr><td className="px-3 py-1">−2</td><td className="px-3 py-1">4</td></tr>
                <tr><td className="px-3 py-1">−1</td><td className="px-3 py-1">1</td></tr>
                <tr><td className="px-3 py-1">0</td><td className="px-3 py-1">0</td></tr>
                <tr><td className="px-3 py-1">1</td><td className="px-3 py-1">1</td></tr>
                <tr><td className="px-3 py-1">2</td><td className="px-3 py-1">4</td></tr>
                <tr><td className="px-3 py-1">3</td><td className="px-3 py-1">9</td></tr>
              </tbody>
            </table>
          </div>
          <div className="text-dark-300">
            <p><strong>Key observations:</strong></p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Smooth U-shaped curve (not straight)</li>
              <li>Symmetric about <Math>{`x = 0`}</Math></li>
              <li>Minimum at <Math>{`(0, 0)`}</Math></li>
              <li><Math>{`x = 2`}</Math> and <Math>{`x = -2`}</Math> both give <Math>{`y = 4`}</Math></li>
            </ul>
          </div>
        </div>
      </div>

      <h3>Vertex Form by Completing the Square</h3>
      <p>
        To understand any parabola, we rewrite it in <strong>vertex form</strong> by completing
        the square:
      </p>
      <MathBlock>{`y = a(x - h)^2 + k`}</MathBlock>
      <p>
        This reveals that the <strong>vertex</strong> (the minimum or maximum point) is at{' '}
        <Math>{`(h, k)`}</Math>.
      </p>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-indigo-500">
        <p className="font-semibold text-indigo-400">Example: Finding the Vertex</p>
        <p>Graph <Math>{`y = 2x^2 + 4x - 3`}</Math></p>
        <p className="mt-3"><strong>Complete the square:</strong></p>
        <MathBlock>{`y = 2x^2 + 4x - 3`}</MathBlock>
        <MathBlock>{`= 2(x^2 + 2x) - 3`}</MathBlock>
        <MathBlock>{`= 2(x^2 + 2x + 1) - 2 - 3`}</MathBlock>
        <MathBlock>{`= 2(x + 1)^2 - 5`}</MathBlock>
        <p className="mt-2 text-emerald-400">
          <strong>Vertex:</strong> <Math>{`(-1, -5)`}</Math> — This is the <em>minimum</em> point
        </p>
        <p className="mt-2 text-dark-300">
          Since <Math>{`a = 2 > 0`}</Math>, the parabola opens upward. The minimum value of{' '}
          <Math>y</Math> is <Math>{`-5`}</Math>, occurring when <Math>{`x = -1`}</Math>.
        </p>
      </div>

      <h3>Parabolas Opening Downward</h3>
      <Callout type="info">
        <strong>Direction of Opening:</strong>
        <ul className="list-disc list-inside mt-2">
          <li>If <Math>{`a > 0`}</Math>: Parabola opens <strong>upward</strong> (has a minimum)</li>
          <li>If <Math>{`a < 0`}</Math>: Parabola opens <strong>downward</strong> (has a maximum)</li>
        </ul>
      </Callout>

      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Example: Downward Parabola</p>
        <p>Graph <Math>{`y = -2x^2 + 5x + 4`}</Math></p>
        <p className="mt-3"><strong>Complete the square:</strong></p>
        <MathBlock>{`y = -2x^2 + 5x + 4`}</MathBlock>
        <MathBlock>{`= -2\\left(x^2 - \\frac{5}{2}x\\right) + 4`}</MathBlock>
        <MathBlock>{`= -2\\left(x^2 - \\frac{5}{2}x + \\frac{25}{16}\\right) + \\frac{25}{8} + 4`}</MathBlock>
        <MathBlock>{`= -2\\left(x - \\frac{5}{4}\\right)^2 + \\frac{57}{8}`}</MathBlock>
        <p className="mt-2 text-emerald-400">
          <strong>Vertex:</strong> <Math>{`\\left(\\frac{5}{4}, \\frac{57}{8}\\right)`}</Math> — This is the <em>maximum</em> point
        </p>
        <p className="mt-2 text-dark-300">
          Since <Math>{`a = -2 < 0`}</Math>, the parabola opens downward. The maximum value of{' '}
          <Math>y</Math> is <Math>{`\\frac{57}{8} \\approx 7.125`}</Math>.
        </p>
      </div>

      <ParabolaGrapher />

      <h3>X-Intercepts and Solutions</h3>
      <Callout type="warning">
        <strong>Connection to Equations:</strong> The x-intercepts of the graph{' '}
        <Math>{`y = ax^2 + bx + c`}</Math> (where the parabola crosses the x-axis) are exactly
        the <strong>solutions</strong> of the equation <Math>{`ax^2 + bx + c = 0`}</Math>.
        <ul className="list-disc list-inside mt-2">
          <li>Two x-intercepts ↔ Two real solutions (discriminant {'>'} 0)</li>
          <li>One x-intercept ↔ One repeated solution (discriminant = 0)</li>
          <li>No x-intercepts ↔ No real solutions (discriminant {'<'} 0)</li>
        </ul>
      </Callout>

      <h3>Applications: Optimization</h3>
      <div className="bg-dark-800 p-4 rounded-lg my-4 border-l-4 border-amber-500">
        <p className="font-semibold text-amber-400">Example: Maximum Area</p>
        <p>
          If you have <Math>p</Math> meters of fence to enclose a rectangular field, what
          dimensions maximize the enclosed area?
        </p>
        <p className="mt-3"><strong>Solution:</strong></p>
        <p>Let <Math>x</Math> = one dimension. Then the other dimension is <Math>{`\\frac{p - 2x}{2} = \\frac{p}{2} - x`}</Math></p>
        <p className="mt-2">Area:</p>
        <MathBlock>{`A = x\\left(\\frac{p}{2} - x\\right) = \\frac{p}{2}x - x^2 = -x^2 + \\frac{p}{2}x`}</MathBlock>
        <p className="mt-2">
          This is a downward parabola! The maximum occurs at the vertex, where{' '}
          <Math>{`x = \\frac{p}{4}`}</Math>.
        </p>
        <p className="mt-2 text-emerald-400">
          <strong>Answer:</strong> Both dimensions should equal <Math>{`\\frac{p}{4}`}</Math>—the rectangle
          should be a <strong>square</strong>!
        </p>
      </div>

      <Callout type="success">
        <strong>Chapter Summary:</strong> Quadratic equations <Math>{`ax^2 + bx + c = 0`}</Math> can
        be solved by factoring, completing the square, or using the quadratic formula{' '}
        <Math>{`x = \\frac{-b \\pm \\sqrt{b^2-4ac}}{2a}`}</Math>. The discriminant{' '}
        <Math>{`b^2 - 4ac`}</Math> determines whether solutions are real. The graphs of quadratic
        polynomials are parabolas, opening up when <Math>{`a > 0`}</Math> and down when{' '}
        <Math>{`a < 0`}</Math>. Completing the square reveals the vertex, which gives the minimum
        or maximum value. These techniques have wide applications in physics, optimization, and
        many other fields.
      </Callout>
    </LessonLayout>
  );
}
