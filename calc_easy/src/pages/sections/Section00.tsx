import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock } from '@/components/common/MathBlock';

export default function Section00() {
  return (
    <LessonLayout sectionId={0}>
      <h2>What Is a Function?</h2>

      <p>
        Before diving into calculus, we need to understand one of mathematics' most
        fundamental concepts: the <strong>function</strong>. A function is simply a
        rule that assigns to each input exactly one output.
      </p>

      <Callout type="info">
        <strong>The Big Idea:</strong> A function is like a machine—put something in,
        get something out. The same input always produces the same output.
      </Callout>

      <h2>One-to-One Functions</h2>

      <p>
        Consider a simple example: the relation of a square's side to its diagonal.
        A square's diagonal is the hypotenuse of an isosceles right triangle. From
        the Pythagorean theorem, if the side is <em>x</em>, the diagonal is:
      </p>

      <MathBlock latex="y = x\sqrt{2}" />

      <p>
        This is a <em>one-to-one function</em>—each value of <em>x</em> gives exactly
        one value of <em>y</em>, and vice versa.
      </p>

      <h2>Function Notation</h2>

      <p>
        The most common way to denote a function is by <em>f(x)</em>—with "f" being
        the first letter of "function." Thus <em>y = f(x) = x²</em> means that <em>y</em>,
        the dependent variable, is the square of <em>x</em>.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-emerald-400 mb-2">Explicit Function</h3>
          <p className="text-dark-300 mb-2">The dependent variable is expressed directly:</p>
          <p className="font-mono text-emerald-400">y = 2x - 7</p>
          <p className="text-dark-400 text-sm mt-2">We can immediately calculate y for any x.</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-2">Implicit Function</h3>
          <p className="text-dark-300 mb-2">The relationship is implied by the equation:</p>
          <p className="font-mono text-amber-400">2x - y - 7 = 0</p>
          <p className="text-dark-400 text-sm mt-2">Same relationship, different form.</p>
        </div>
      </div>

      <h2>Domain and Range</h2>

      <p>
        Values that can be taken by the independent variable are called the variable's
        <strong> domain</strong>. Values that can be taken by the dependent variable
        are called the <strong>range</strong>.
      </p>

      <p>
        On the Cartesian plane, the domain consists of numbers along the horizontal
        (<em>x</em>) axis, and the range consists of numbers along the vertical (<em>y</em>) axis.
      </p>

      <h2>Examples of Functions</h2>

      <p>Functions are ubiquitous in physics and everyday life:</p>

      <ul className="list-disc list-inside space-y-2 my-6 text-dark-300">
        <li>The circumference of a circle as a function of its radius: <em>C = 2πr</em></li>
        <li>The area of a circle as a function of its radius: <em>A = πr²</em></li>
        <li>The volume of a sphere as a function of its radius: <em>V = (4/3)πr³</em></li>
        <li>The period of a pendulum as a function of its length</li>
        <li>The distance covered by a dropped stone as a function of elapsed time</li>
      </ul>

      <h2>Continuous vs. Discontinuous</h2>

      <p>
        We call a function "continuous" if its graph can be drawn without lifting the
        pencil from the paper. In this book, we will be concerned almost entirely with
        continuous functions.
      </p>

      <Callout type="success">
        <strong>Key Insight:</strong> A function like a black box with input and output
        openings. Any element in the domain goes in, and out pops a single element in the
        range. The machinery inside provides the correlations using whatever correspondence
        rules govern the function.
      </Callout>
    </LessonLayout>
  );
}
