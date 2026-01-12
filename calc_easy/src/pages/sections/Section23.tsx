import { LessonLayout } from '@/components/layout/LessonLayout';
import { Callout } from '@/components/common/Callout';
import { MathBlock } from '@/components/common/MathBlock';

export default function Section23() {
  return (
    <LessonLayout sectionId={23}>
      <h2>Finding Solutions: Differential Equations</h2>

      <p>
        A <strong>differential equation</strong> is an equation involving derivatives.
        Solving it means finding a function that satisfies the equation. This is one
        of the most powerful applications of calculus.
      </p>

      <Callout type="info">
        <strong>Why Important?</strong> The laws of physics are often expressed as
        differential equations. Newton's second law, Maxwell's equations, the
        Schrödinger equation—all are differential equations.
      </Callout>

      <h2>Simple Examples</h2>

      <div className="space-y-4 my-6">
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-300">Given: dy/dx = 2x</p>
          <p className="text-dark-300 mt-2">Solution: y = x² + C</p>
        </div>
        <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700">
          <p className="text-dark-300">Given: dy/dx = y (rate of change proportional to amount)</p>
          <p className="text-dark-300 mt-2">Solution: y = Aeˣ for any constant A</p>
        </div>
      </div>

      <h2>Separable Equations</h2>

      <p>
        Many differential equations can be solved by "separating variables"—getting
        all x's on one side and all y's on the other.
      </p>

      <MathBlock math="\frac{dy}{dx} = xy" />

      <p>Separate:</p>

      <MathBlock math="\frac{dy}{y} = x \, dx" />

      <p>Integrate both sides:</p>

      <MathBlock math="\ln|y| = \frac{x^2}{2} + C" />

      <p>Solve for y:</p>

      <MathBlock math="y = Ae^{x^2/2}" />

      <h2>Initial Conditions</h2>

      <p>
        The constant C (or A) is determined by <strong>initial conditions</strong>—the
        value of y at some starting point.
      </p>

      <div className="bg-dark-800/50 rounded-xl p-4 border border-dark-700 my-6">
        <h3 className="text-lg font-semibold text-primary-400 mb-3">Example</h3>
        <p className="text-dark-300">
          If dy/dx = 2x and y = 5 when x = 0, then:
        </p>
        <p className="text-dark-300 mt-2">y = x² + C, and 5 = 0 + C, so C = 5</p>
        <p className="text-dark-300 mt-2">The particular solution is: y = x² + 5</p>
      </div>

      <Callout type="success">
        <strong>The Power of Differential Equations:</strong> They describe how systems
        evolve over time. Solving them lets us predict the future behavior of physical
        systems—from planetary orbits to electrical circuits to epidemic spread.
      </Callout>
    </LessonLayout>
  );
}
