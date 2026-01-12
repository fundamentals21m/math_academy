import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock } from '@/components/common/MathBlock';

export default function Section02() {
  return (
    <LessonLayout sectionId={2}>
      <h2>What Is a Derivative?</h2>

      <p>
        In Chapter 3, Thompson makes crystal clear what a derivative is and how to
        calculate it. A derivative is simply another function that describes the rate
        at which a dependent variable changes with respect to the rate at which the
        independent variable changes.
      </p>

      <Callout type="info">
        <strong>The Big Idea:</strong> A derivative tells you how fast something is
        changing at any given instant—the instantaneous rate of change.
      </Callout>

      <h2>Zeno's Runner Revisited</h2>

      <p>
        Let's start with Zeno's runner. Assume he runs ten meters per second on a path
        from zero to 100 meters. The independent variable is time, represented by the
        <em> x</em> axis. The dependent variable <em>y</em> is the runner's distance
        from his starting spot.
      </p>

      <p>
        Because the function is linear, the runner's motion graphs as an upward tilted
        straight line from zero to the point (10, 100). The function's equation is
        <em> y = 10x</em>.
      </p>

      <h2>The Derivative of a Linear Function</h2>

      <p>
        Given any point in time, how fast is the runner moving? Because we are dealing
        with a simple linear function we don't need calculus to tell us that at every
        instant he is going ten meters per second.
      </p>

      <MathBlock math="\text{The derivative of } y = 10x \text{ is simply } 10" />

      <p>
        It tells you two things: (1) that at any time the runner's speed is ten meters
        per second, and (2) that at any point on the line that graphs this function,
        the slope of the line is 10.
      </p>

      <h2>The Derivative of a Constant</h2>

      <p>
        An even simpler case: a runner who stands perfectly still. The function is
        <em> y = 10</em> (always at 10 meters). The graph becomes a horizontal straight
        line. Its slope is zero, which is the same as saying that the rate at which
        the runner's distance from the start changes, relative to changes of time, is zero.
      </p>

      <MathBlock math="\text{The derivative of any constant is } 0" />

      <h2>The Derivative of y = x²</h2>

      <p>
        Calculus ceases to be trivial when functions are nonlinear. Consider the
        function <em>y = x²</em>, which Thompson uses to open his chapter on derivatives.
      </p>

      <p>
        Imagine a monster living on Flatland, a plane of two dimensions. It is born a
        square of side 1 and area 1, then grows at a steady rate. We wish to know, at
        any instant of time, how fast its area grows with respect to the growth of its side.
      </p>

      <p>
        The monster's area is the square of its side, so the function we have to
        consider is <em>y = x²</em>. As you will learn from Thompson, the function's
        derivative is <em>2x</em>.
      </p>

      <MathBlock math="\frac{d}{dx}(x^2) = 2x" />

      <p>
        This tells us that at any given moment the monster's area is growing at a rate
        that is <em>2x</em> times as fast as its side is lengthening.
      </p>

      <h2>Understanding 2x</h2>

      <p>
        For example, let's say the monster's side is growing at a rate of 3 units per
        second. Starting with a side of one unit, at the end of ten seconds its side
        will have reached 31 units. The value of <em>x</em> at this point is 31, its
        area is increasing with respect to its side at a rate of <em>2x = 62</em> units.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 my-6">
        <h3 className="text-lg font-semibold text-primary-400 mb-3">Growth Rate Table</h3>
        <table className="w-full text-dark-300">
          <thead>
            <tr className="border-b border-dark-600">
              <th className="text-left py-2">Time</th>
              <th className="text-left py-2">Side</th>
              <th className="text-left py-2">Area</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="py-1">2</td><td>3</td><td>9</td></tr>
            <tr><td className="py-1">2.1</td><td>3.1</td><td>9.61</td></tr>
            <tr><td className="py-1">2.01</td><td>3.01</td><td>9.0601</td></tr>
            <tr><td className="py-1">2.001</td><td>3.001</td><td>9.006001</td></tr>
          </tbody>
        </table>
        <p className="text-dark-400 text-sm mt-2">
          The average rate of growth approaches 6 as intervals shrink—the derivative at x=3.
        </p>
      </div>

      <Callout type="success">
        <strong>Key Insight:</strong> A derivative is the rate at which a function's
        dependent variable grows with respect to the growth rate of the independent
        variable. In geometrical terms, it determines the exact slope of the tangent
        to a function's curve at any specified point along the curve.
      </Callout>
    </LessonLayout>
  );
}
